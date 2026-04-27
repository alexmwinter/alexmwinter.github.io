import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

// Utility for Base64Url decoding
function base64UrlDecode(str: string): string {
  // Replace non-url safe characters
  let base64 = str.replace(/-/g, '+').replace(/_/g, '/');
  
  // Pad with '=' to make it a multiple of 4
  const pad = base64.length % 4;
  if (pad) {
    if (pad === 1) {
      throw new Error('Invalid base64 string');
    }
    base64 += new Array(5 - pad).join('=');
  }

  try {
    return decodeURIComponent(
      atob(base64)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
  } catch (e) {
    return atob(base64);
  }
}

interface DecodedToken {
  header: any;
  payload: any;
  signature: string;
  parts: string[];
}

const JsonView = ({ data, colorClass }: { data: any, colorClass: string }) => {
  const jsonString = JSON.stringify(data, null, 2);
  
  // Basic syntax highlighting logic
  const tokens = useMemo(() => {
    const lines = jsonString.split('\n');
    return lines.map((line, i) => {
      // Simple regex to match keys and values
      const match = line.match(/^(\s*)(".*?")(:\s*)(.*)$/);
      if (match) {
        const [, indent, key, colon, value] = match;
        return (
          <div key={i} className="leading-relaxed">
            <span className="text-white/40">{indent}</span>
            <span className={cn("font-semibold", colorClass)}>{key}</span>
            <span className="text-white/60">{colon}</span>
            <span className="text-blue-300">
              {value.endsWith(',') ? value.slice(0, -1) : value}
            </span>
            {value.endsWith(',') && <span className="text-white/60">,</span>}
          </div>
        );
      }
      return <div key={i} className="text-white/60">{line}</div>;
    });
  }, [jsonString, colorClass]);

  return (
    <pre className="font-mono text-sm overflow-x-auto p-4 bg-charcoal/30 rounded-md border border-white/5">
      {tokens}
    </pre>
  );
};

export function JwtInspector() {
  const [input, setInput] = useState('');
  const [decoded, setDecoded] = useState<DecodedToken | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!input.trim()) {
      setDecoded(null);
      setError(null);
      return;
    }

    const parts = input.split('.');
    if (parts.length !== 3) {
      setDecoded(null);
      setError('Waiting for valid JWT (header.payload.signature)...');
      return;
    }

    try {
      const header = JSON.parse(base64UrlDecode(parts[0]));
      const payload = JSON.parse(base64UrlDecode(parts[1]));
      const signature = parts[2];

      setDecoded({ header, payload, signature, parts });
      setError(null);
    } catch (e) {
      setDecoded(null);
      setError('Error decoding token. Ensure it is a valid JWT.');
    }
  }, [input]);

  return (
    <div className="space-y-8 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <label className="fira-label text-mid-gray">Input Raw Token</label>
          <Badge variant="outline" className="text-[10px] border-green-500/30 text-green-400 bg-green-500/5">
            Client-Side Only
          </Badge>
        </div>
        <Textarea
          placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
          className="font-mono text-xs min-h-[120px] bg-charcoal border-white/10 text-white resize-none"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        
        {decoded && (
          <div className="p-4 bg-charcoal/50 border border-white/10 rounded-md font-mono text-[10px] break-all leading-relaxed">
            <span className="text-red-400">{decoded.parts[0]}</span>
            <span className="text-white">.</span>
            <span className="text-purple-400">{decoded.parts[1]}</span>
            <span className="text-white">.</span>
            <span className="text-blue-400">{decoded.parts[2]}</span>
          </div>
        )}
      </div>

      {!decoded && (
        <Card className="bg-charcoal/30 border-dashed border-white/10">
          <CardContent className="flex items-center justify-center py-12">
            <p className="text-mid-gray font-mono text-sm italic">
              {error || 'Paste a JWT above to begin surgical inspection...'}
            </p>
          </CardContent>
        </Card>
      )}

      {decoded && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-4 bg-red-500 rounded-sm" />
              <h4 className="fira-label text-sm text-white">Header</h4>
            </div>
            <Card className="bg-dark-slate/40 border-red-500/20 overflow-hidden">
              <JsonView data={decoded.header} colorClass="text-red-400" />
            </Card>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-4 bg-purple-500 rounded-sm" />
              <h4 className="fira-label text-sm text-white">Payload</h4>
            </div>
            <Card className="bg-dark-slate/40 border-purple-500/20 overflow-hidden">
              <JsonView data={decoded.payload} colorClass="text-purple-400" />
            </Card>
          </div>

          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-4 bg-blue-500 rounded-sm" />
              <h4 className="fira-label text-sm text-white">Signature</h4>
            </div>
            <div className="p-4 bg-charcoal/30 border border-blue-500/20 rounded-md font-mono text-xs text-blue-400 break-all">
              {decoded.signature}
            </div>
          </div>
        </div>
      )}

      <div className="pt-4 border-t border-white/5 flex justify-center">
        <p className="text-[10px] text-mid-gray uppercase tracking-widest font-mono">
          Security Note: Decoding is performed entirely in-browser. No data is transmitted.
        </p>
      </div>
    </div>
  );
}
