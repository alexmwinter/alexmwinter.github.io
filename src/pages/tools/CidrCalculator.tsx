import { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Robust IPv4 CIDR Regex
// Matches 0-255 for each octet and /0-32 for the suffix
const CIDR_REGEX = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/(?:3[0-2]|[12]?[0-9])$/;

// Helper to convert number to IP string
function numberToIp(n: number): string {
  return [
    (n >>> 24) & 0xFF,
    (n >>> 16) & 0xFF,
    (n >>> 8) & 0xFF,
    n & 0xFF
  ].join('.');
}

// Helper to convert IP string to number
function ipToNumber(ip: string): number {
  return ip.split('.').reduce((acc, octet) => (acc << 8) + parseInt(octet, 10), 0) >>> 0;
}

export function CidrCalculator() {
  const [input, setInput] = useState('');
  
  const results = useMemo(() => {
    if (!input.trim() || !CIDR_REGEX.test(input)) return null;

    const [ip, cidrStr] = input.split('/');
    const cidr = parseInt(cidrStr, 10);
    const ipNum = ipToNumber(ip);

    // Calculate mask
    // Special case for /0: 0xFFFFFFFF << 32 is not 0 in JS bitwise (it's 0xFFFFFFFF)
    const mask = cidr === 0 ? 0 : (0xFFFFFFFF << (32 - cidr)) >>> 0;
    
    const network = (ipNum & mask) >>> 0;
    const broadcast = (network | ~mask) >>> 0;

    let usableRange = '';
    let totalHosts = 0;

    if (cidr === 32) {
      usableRange = numberToIp(network);
      totalHosts = 1;
    } else if (cidr === 31) {
      usableRange = `${numberToIp(network)} - ${numberToIp(broadcast)}`;
      totalHosts = 2;
    } else {
      usableRange = `${numberToIp(network + 1)} - ${numberToIp(broadcast - 1)}`;
      totalHosts = Math.pow(2, 32 - cidr) - 2;
    }

    return {
      network: numberToIp(network),
      broadcast: numberToIp(broadcast),
      usableRange,
      totalHosts
    };
  }, [input]);

  const isValid = !input || CIDR_REGEX.test(input);

  return (
    <div className="space-y-8 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <label className="fira-label text-mid-gray">IP Address & CIDR</label>
          <Badge variant="outline" className="text-[10px] border-blue-500/30 text-blue-400 bg-blue-500/5">
            IPv4 Standard
          </Badge>
        </div>
        <div className="space-y-2">
          <Input
            placeholder="e.g., 192.168.1.0/24"
            className={cn(
              "font-mono bg-charcoal border-white/10 text-white h-12",
              !isValid && "border-red-500/50 focus-visible:ring-red-500/50"
            )}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          {!isValid && (
            <p className="text-red-400 text-xs font-mono animate-in fade-in slide-in-from-top-1">
              Please enter a valid IPv4 address and CIDR block (e.g., 10.0.0.1/24)
            </p>
          )}
        </div>
      </div>

      {!results && isValid && (
        <Card className="bg-charcoal/30 border-dashed border-white/10">
          <CardContent className="flex items-center justify-center py-12">
            <p className="text-mid-gray font-mono text-sm italic text-center">
              {input ? 'Validating CIDR block...' : 'Enter a subnet to calculate network boundaries...'}
            </p>
          </CardContent>
        </Card>
      )}

      {results && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in zoom-in-95 duration-300">
          <StatBlock label="Network Address" value={results.network} accent="bg-blue-500" />
          <StatBlock label="Broadcast Address" value={results.broadcast} accent="bg-purple-500" />
          <StatBlock label="Usable Host Range" value={results.usableRange} accent="bg-green-500" />
          <StatBlock label="Total Usable Hosts" value={results.totalHosts.toLocaleString()} accent="bg-orange-500" />
        </div>
      )}

      <div className="pt-4 border-t border-white/5 flex justify-center">
        <p className="text-[10px] text-mid-gray uppercase tracking-widest font-mono">
          Note: All calculations are processed locally in your browser.
        </p>
      </div>
    </div>
  );
}

function StatBlock({ label, value, accent }: { label: string, value: string, accent: string }) {
  return (
    <Card className="bg-dark-slate/40 border-white/5 overflow-hidden">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center gap-2">
          <div className={cn("w-1.5 h-3 rounded-full", accent)} />
          <CardTitle className="text-[10px] uppercase tracking-wider text-mid-gray font-mono">
            {label}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <p className="text-xl md:text-2xl font-mono font-bold text-white break-all">
          {value}
        </p>
      </CardContent>
    </Card>
  );
}
