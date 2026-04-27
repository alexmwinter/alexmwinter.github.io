import { TechLabel } from "@/components/ui/design-system"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { experienceData, educationData, toolsData } from "@/data/experienceData"

export default function Experience() {
  return (
    <div className="flex flex-col bg-white">
      {/* Page Header */}
      <section className="bg-charcoal pt-32 pb-24 px-6 -mt-24">
        <div className="max-w-6xl mx-auto w-full">
          <h1 className="hero-headline text-white mb-4">Experience</h1>
          <p className="font-sans text-xl text-mid-gray max-w-2xl">
            A timeline of professional milestones, technical leadership, and academic foundations.
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Timeline Column */}
          <div className="lg:col-span-8 relative">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 md:left-4 top-0 bottom-0 w-[2px] bg-dark-slate" />

            <div className="space-y-16">
              {experienceData.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-16">
                  {/* Timeline Node */}
                  <div className="absolute left-[-5px] md:left-[11px] top-2 w-3 h-3 rounded-full bg-bright-blue border-4 border-white ring-4 ring-dark-slate" />
                  
                  <div className="flex flex-col gap-4">
                    <TechLabel active className="w-fit">
                      {item.dates}
                    </TechLabel>
                    
                    <div className="space-y-2">
                      <h3 className="font-sans font-bold text-2xl text-charcoal leading-tight">
                        {item.role}
                      </h3>
                      <p className="font-sans font-medium text-lg text-mid-gray">
                        {item.company}
                      </p>
                    </div>

                    <ul className="space-y-3 mt-2">
                      {item.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="font-sans text-mid-gray leading-relaxed flex items-start gap-3">
                          <span className="text-bright-blue font-mono flex-shrink-0 flex items-center justify-center h-[1.625rem]">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar Column: Education & Tools */}
          <div className="lg:col-span-4 space-y-12">
            {/* Education & Certs */}
            <Card className="border-light-slate bg-off-white shadow-none rounded-lg p-2">
              <CardHeader className="pb-4">
                <CardTitle className="font-sans font-bold text-xl uppercase tracking-tight text-charcoal">Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-sans font-bold text-charcoal">{educationData.degree}</h4>
                  </div>
                  <p className="font-sans text-mid-gray text-sm">{educationData.institution}</p>
                  <p className="font-mono text-xs text-bright-blue mt-1">{educationData.year}</p>
                </div>

                <div className="pt-4 border-t border-light-slate/50">
                  <h4 className="font-sans font-bold text-charcoal mb-3 uppercase text-xs tracking-wider">Certifications & Clearances</h4>
                  <div className="space-y-3">
                    {educationData.certifications.map(cert => (
                      <div key={cert} className="flex items-center gap-2">
                        <Badge className="bg-bright-blue text-white font-mono text-[10px] py-0.5 px-2 rounded-sm border-none shadow-none">
                          {cert}
                        </Badge>
                        <span className="font-sans text-xs text-mid-gray">Certified Information Systems Security Professional</span>
                      </div>
                    ))}
                    <div className="flex gap-2">
                       <span className="font-sans text-xs text-mid-gray leading-tight">
                        {educationData.clearance}
                       </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Languages & Technologies Grid */}
            <div className="space-y-6">
              <h3 className="font-sans font-bold text-xl uppercase tracking-tight text-charcoal">Languages & Technologies</h3>
              <div className="grid grid-cols-2 gap-2">
                {toolsData.map((tool) => (
                  <div 
                    key={tool}
                    className="group border border-light-slate bg-white p-3 transition-colors hover:border-bright-blue cursor-default flex items-center justify-center"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-charcoal group-hover:text-bright-blue transition-colors">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
