import { TechLabel } from "@/components/ui/design-system"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { JwtInspector } from "./JwtInspector"
import { CidrCalculator } from "./CidrCalculator"
import { NginxHeaderLinter } from "./NginxHeaderLinter"

function PlaceholderTool({ name }: { name: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 bg-charcoal/30 border border-dashed border-white/10 rounded-lg">
      <p className="text-mid-gray font-mono text-sm italic">
        [{name.toUpperCase()}_STAGING]
      </p>
      <p className="text-[10px] text-white/20 uppercase tracking-[0.2em] mt-4">
        Component implementation in progress
      </p>
    </div>
  )
}

export default function Tools() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <div className="flex flex-col mb-16">
        <TechLabel active className="mb-4 block w-fit">04 // TOOLS</TechLabel>
        <h1 className="section-heading">Interactive Environments</h1>
        <p className="text-mid-gray mt-4 max-w-2xl font-sans">
          A collection of specialized utilities for cybersecurity research, 
          infrastructure auditing, and rapid control mapping.
        </p>
      </div>

      <Tabs defaultValue="jwt" className="w-full">
        <div className="flex justify-center mb-12">
          <TabsList className="bg-charcoal/50 border border-white/10 p-1 h-auto flex-wrap justify-center">
            <TabsTrigger 
              value="jwt" 
              className="px-8 py-2.5 data-[state=active]:bg-bright-blue data-[state=active]:text-white fira-label text-[12px]"
            >
              JWT Inspector
            </TabsTrigger>
            <TabsTrigger 
              value="cidr" 
              className="px-8 py-2.5 data-[state=active]:bg-bright-blue data-[state=active]:text-white fira-label text-[12px]"
            >
              CIDR Calculator
            </TabsTrigger>
            <TabsTrigger 
              value="nginx" 
              className="px-8 py-2.5 data-[state=active]:bg-bright-blue data-[state=active]:text-white fira-label text-[12px]"
            >
              Header Linter
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="jwt" className="focus-visible:ring-0 outline-none">
          <JwtInspector />
        </TabsContent>

        <TabsContent value="cidr" className="focus-visible:ring-0 outline-none">
          <CidrCalculator />
        </TabsContent>

        <TabsContent value="nginx" className="focus-visible:ring-0 outline-none">
          <NginxHeaderLinter />
        </TabsContent>
      </Tabs>
    </div>
  )
}
