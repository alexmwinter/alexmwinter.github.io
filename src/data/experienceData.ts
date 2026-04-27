export interface ExperienceItem {
  company: string;
  role: string;
  dates: string;
  highlights: string[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

export const experienceData: ExperienceItem[] = [
  {
    company: "Beyond Mission Capable Solutions (BMCS)",
    role: "Cybersecurity Engineer & Purple Team Lead",
    dates: "2023 – PRESENT",
    highlights: [
      "Performs threat-informed Purple Teaming events and penetration tests against customer infrastructure using OSINT and the MITRE ATT&CK framework.",
      "Reconfigures Azure and Office 365 environments to meet DoD CMMC requirements following NIST 800-171 compliance standards.",
      "Implements cloud resource engineering decisions from the CCB, including a self-hosted GitHub server.",
      "Advises assessment teams on Purple Team-specific strategies and manages stakeholder relationships."
    ]
  },
  {
    company: "Beyond Mission Capable Solutions (BMCS)",
    role: "Cybersecurity Engineer, Assessments",
    dates: "2021 – 2023",
    highlights: [
      "Conducted DoD mission-critical Cloud Computing infrastructure assessments utilizing CIS Benchmarks and DoD Cloud Computing SRG.",
      "Assisted in continuous monitoring for Air Force programs (Cloud One, Digital Engineering PaaS).",
      "Orchestrated the Change Control Board as Secretary to determine necessary IT resource changes.",
      "Conveyed technical findings through tailored explanations for senior leaders and engineers."
    ]
  },
  {
    company: "Massachusetts Institute of Technology (MIT)",
    role: "IT Intern",
    dates: "2017 – 2020",
    highlights: [
      "Evaluated and provided strategic recommendations for cybersecurity audit proposals targeting power plants nationwide.",
      "Managed IP space transitions and security assessments for utility plant upgrades.",
      "Managed file servers (security patches, backups) and tracked IT inventory, reducing departmental costs."
    ]
  },
  {
    company: "RMD (Subsidiary of Dynasil)",
    role: "IT Intern",
    dates: "2015",
    highlights: [
      "Configured virtualization server for campus thin client use.",
      "Implemented workstation solutions, server rack reorganization, and cable optimization."
    ]
  }
];

export const educationData = {
  degree: "BS in Computer Science",
  institution: "University of Massachusetts Amherst",
  year: "2021",
  certifications: ["CISSP"],
  clearance: "Security Clearance Holder (Top Secret/SCI Eligible)"
};

export const toolsData = [
  'AWS', 'Azure', 'OCI', 'Python', 'Linux (Bash)', 'Docker', 
  'Git', 'PowerShell', 'JavaScript', 'M365', 'Terraform (IaC)', 'Metasploit'
];
