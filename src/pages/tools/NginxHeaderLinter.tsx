import React, { useState, useEffect, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Check, AlertCircle, ShieldCheck, Info } from "lucide-react";

interface HeaderDefinition {
  name: string;
  regex: RegExp;
  blurb: string;
}

const SECURITY_HEADERS: HeaderDefinition[] = [
  {
    name: "X-Frame-Options",
    regex: /add_header\s+X-Frame-Options\s+["']?[\w- ]+["']?(\s+always)?\s*;/i,
    blurb: "Protects against Clickjacking attacks by controlling whether the site can be framed."
  },
  {
    name: "Referrer-Policy",
    regex: /add_header\s+Referrer-Policy\s+["']?[\w- ]+["']?(\s+always)?\s*;/i,
    blurb: "Controls how much referrer information is included with requests made from your site."
  },
  {
    name: "X-Content-Type-Options",
    regex: /add_header\s+X-Content-Type-Options\s+["']?nosniff["']?(\s+always)?\s*;/i,
    blurb: "Prevents the browser from MIME-sniffing a response away from the declared content-type."
  },
  {
    name: "Strict-Transport-Security",
    regex: /add_header\s+Strict-Transport-Security\s+["']?.*?["']?(\s+always)?\s*;/i,
    blurb: "HSTS enforces secure (HTTP over SSL/TLS) connections to the server."
  },
  {
    name: "Content-Security-Policy",
    regex: /add_header\s+Content-Security-Policy\s+["']?.*?["']?(\s+always)?\s*;/i,
    blurb: "CSP helps detect and mitigate certain types of attacks, including Cross-Site Scripting (XSS) and data injection."
  },
  {
    name: "Permissions-Policy",
    regex: /add_header\s+Permissions-Policy\s+["']?.*?["']?(\s+always)?\s*;/i,
    blurb: "Allows you to control which browser features and APIs (like camera, microphone, or geolocation) can be used in the browser."
  }
];

export function NginxHeaderLinter() {
  const [config, setConfig] = useState('');
  
  const results = useMemo(() => {
    return SECURITY_HEADERS.map(header => ({
      ...header,
      found: header.regex.test(config)
    }));
  }, [config]);

  const score = results.filter(r => r.found).length;
  const isPerfect = score === SECURITY_HEADERS.length;
  const hasInput = config.trim().length > 0;

  return (
    <div className="space-y-8 w-full">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-end">
          <label className="fira-label text-mid-gray">NGINX Server Configuration</label>
          <Badge variant="outline" className="text-[10px] border-green-500/30 text-green-400 bg-green-500/5">
            Client-Side Only
          </Badge>
        </div>
        <Textarea
          placeholder={`server {\n    listen 443 ssl;\n    server_name example.com;\n\n    # Paste your configuration here...\n    add_header X-Frame-Options "SAMEORIGIN";\n}`}
          className="font-mono text-xs min-h-[200px] bg-charcoal border-white/10 text-white resize-none focus:border-bright-blue/50 transition-colors"
          value={config}
          onChange={(e) => setConfig(e.target.value)}
        />
      </div>

      {hasInput && isPerfect && (
        <div className="p-6 bg-green-500/10 border border-green-500/20 rounded-lg flex items-center gap-4 animate-in fade-in slide-in-from-top-2">
          <div className="bg-green-500 p-2 rounded-full">
            <ShieldCheck className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="text-white font-bold text-lg">Perfect Security Score!</h4>
            <p className="text-green-400/80 text-sm font-mono">All 6 essential security headers were detected in your configuration.</p>
          </div>
        </div>
      )}

      {hasInput && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {results.map((header) => (
            <Card 
              key={header.name} 
              className={cn(
                "bg-dark-slate/40 transition-all duration-300",
                header.found ? "border-green-500/20" : "border-red-500/20"
              )}
            >
              <CardHeader className="p-4 pb-2">
                <div className="flex justify-between items-center">
                  <span className={cn(
                    "font-mono text-xs font-bold tracking-tight",
                    header.found ? "text-green-400" : "text-red-400"
                  )}>
                    {header.name}
                  </span>
                  {header.found ? (
                    <Badge className="bg-green-500/10 text-green-400 border-green-500/20 gap-1 px-2">
                      <Check className="w-3 h-3" /> Found
                    </Badge>
                  ) : (
                    <Badge variant="destructive" className="bg-red-500/10 text-red-400 border-red-500/20 gap-1 px-2">
                      <AlertCircle className="w-3 h-3" /> Missing
                    </Badge>
                  )}
                </div>
              </CardHeader>
              {!header.found && (
                <CardContent className="p-4 pt-0">
                  <div className="flex gap-2 mt-2 p-3 bg-red-500/5 border border-red-500/10 rounded-md">
                    <Info className="w-4 h-4 text-red-400/60 shrink-0" />
                    <p className="text-[11px] text-mid-gray leading-relaxed">
                      {header.blurb}
                    </p>
                  </div>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
      )}

      {!hasInput && (
        <Card className="bg-charcoal/30 border-dashed border-white/10">
          <CardContent className="flex flex-col items-center justify-center py-16 gap-4">
            <Info className="w-8 h-8 text-white/10" />
            <p className="text-mid-gray font-mono text-sm italic text-center max-w-sm">
              Paste an NGINX configuration block above to audit your security headers.
            </p>
          </CardContent>
        </Card>
      )}

      <div className="pt-4 border-t border-white/5 flex justify-center">
        <p className="text-[10px] text-mid-gray uppercase tracking-widest font-mono">
          Note: This tool uses heuristic regex matching for standard NGINX add_header patterns.
        </p>
      </div>
    </div>
  );
}
