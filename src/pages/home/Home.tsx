import { TechLabel } from "@/components/ui/design-system"
import AlexHeadshot from "@/assets/Alex.jpg"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-charcoal min-h-[70vh] md:min-h-screen flex flex-col justify-center px-6 py-16 md:py-32 -mt-24">
        <div className="max-w-7xl mx-auto w-full">
          <h1 className="hero-headline text-white">
            Alex Winter<br />
            <span className="text-bright-blue">Cybersecurity Engineer</span> & <br />
            <span className="text-bright-blue">Purple Team Lead</span>
          </h1>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-20 md:py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
            {/* Left Column: Headshot */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="w-full aspect-[4/5] rounded-lg border-2 border-light-slate bg-mid-gray flex items-center justify-center overflow-hidden">
                <img 
                  src={AlexHeadshot} 
                  alt="Alex Winter" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Column: Bio & Tech Stack */}
            <div className="md:col-span-8 lg:col-span-7 flex flex-col gap-8">
              <div className="space-y-6">
                <p className="font-sans text-xl leading-relaxed text-charcoal/90">
                  I specialize in adversarial simulation, cloud security, and federal compliance standards including NIST 800-53, FedRAMP, and the Risk Management Framework (RMF). At Beyond Mission Capable Solutions (BMCS), I focus on bridging the gap between offensive security operations and robust infrastructure engineering.
                </p>
                <p className="font-sans text-xl leading-relaxed text-charcoal/90">
                  Beyond security assessments, I am a proficient full-stack developer utilizing a modern stack of React, Vite, Next.js, and FastAPI. I actively build tools designed to streamline engineering workflows, such as the Cyber Mission Support Platform (CMSP) for automated compliance documentation review. My foundational technical experience began during my four years at MIT managing IP space transitions, and I continue to apply that rigorous, architecture-first mindset to modern cybersecurity challenges.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-4">
                <TechLabel active>&gt; PURPLE_TEAM</TechLabel>
                <TechLabel active>&gt; ADVERSARIAL_SIMULATION</TechLabel>
                <TechLabel active>&gt; NIST_800_53</TechLabel>
                <TechLabel active>&gt; REACT_VITE</TechLabel>
                <TechLabel active>&gt; FASTAPI</TechLabel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
