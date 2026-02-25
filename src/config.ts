// René Dorsch — Premium Portfolio Config
// Schema custom: multi-page academic/researcher portfolio

export const siteConfig = {
  name: "René Dorsch",
  title: "Research Associate — IoT & Semantic Web",
  description: "Research Associate at Fraunhofer IIS, PhD candidate at FAU Erlangen-Nürnberg. Bridging the physical and digital through Web of Things, Knowledge Graphs, and Semantic Web technologies.",
  lang: "en",

  colors: {
    primaryDark: "#2E2A27",
    primary: "#3F3633",
    primaryLight: "#6B6460",
    accent: "#558d3c",
    surface: "#C8CECC",
    surfaceLight: "#F0F2F1",
  },

  social: {
    email: "dorschrene@gmail.com",
    linkedin: "https://de.linkedin.com/in/rene-dorsch",
    github: "https://github.com/dorschre",
    dblp: "https://dblp.org/pid/334/3864.html",
    orcid: "https://orcid.org/0000-0001-6857-7314",
  },

  hero: {
    headline: "Research Associate — IoT & Semantic Web",
    intro: "From metalworker apprentice to PhD researcher. I build bridges between physical objects and the digital world through Web of Things, Knowledge Graphs, and Semantic Web technologies.",
  },

  // Navigation pages
  pages: [
    { label: "Main", href: "/" },
    { label: "Professional", href: "/professional/" },
    { label: "Writer", href: "/writer/" },
    { label: "Creator", href: "/creator/" },
  ],

  // Skills grouped by domain
  skills: [
    {
      category: "Semantic Web",
      description: "Building structured knowledge representations for machine-understandable data on the web.",
      items: ["RDF", "SPARQL", "SHACL", "OWL", "Ontologies", "Triple Store", "Knowledge Graphs", "RML Mapping", "Linked Data"],
    },
    {
      category: "Internet of Things",
      items: ["Web of Things", "Bluetooth GATT", "Solid Protocol", "MQTT", "Thing Descriptions"],
    },
    {
      category: "Artificial Intelligence",
      items: ["LLMs", "VLMs", "Agents", "Named Entity Recognition", "Process Mining", "RAG", "Knowledge Graph QA"],
    },
    {
      category: "Programming",
      items: ["Python", "Java", "TypeScript", "JavaScript", "R", "SQL", "VBA"],
    },
    {
      category: "CAD & Fabrication",
      items: ["Siemens NX", "Creo", "Cura", "Orca Slicer", "3D Printing"],
    },
    {
      category: "Data & Tools",
      items: ["Dataiku", "Git", "Docker"],
    },
  ],

  // Gitgraph timeline data
  timeline: {
    education: [
      { year: 2007, label: "Metallbauer Apprenticeship", detail: "Metallbau Dorsch GmbH" },
      { year: 2011, label: "Fachkraft Metallbauer", detail: "Qualified Metalworker" },
      { year: 2011, label: "Fachoberschule Erlangen", detail: "University Entrance Qualification", endYear: 2015 },
      { year: 2015, label: "BSc. Wirtschaftsmathematik", detail: "FAU Erlangen-Nürnberg", endYear: 2016 },
      { year: 2016, label: "BSc. Industrial Engineering", detail: "FAU — Grade: 1.7 (Top 10%)", endYear: 2019 },
      { year: 2019, label: "MSc. Industrial Engineering", detail: "FAU — Grade: 1.5", endYear: 2022 },
      { year: 2020, label: "MSc. Mechanical Engineering", detail: "FAU — Grade: 1.4", endYear: 2022 },
      { year: 2022, label: "PhD Candidate", detail: "Discovery in Cyber-Physical Systems — FAU", highlight: true },
    ],
    work: [
      { year: 2007, label: "Metallbau Dorsch GmbH", detail: "Apprentice & Metalworker", endYear: 2015 },
      { year: 2017, label: "FutureIng", detail: "Student Research Assistant", endYear: 2018 },
      { year: 2018, label: "Fraunhofer SCS", detail: "Student RA — Knowledge Management", endYear: 2021 },
      { year: 2019, label: "High-Octane Motorsports", detail: "Component Lead — Pedal Assembly", endYear: 2022 },
      { year: 2021, label: "Siemens Smart Infrastructure", detail: "QM Internship — Amberg", endYear: 2021 },
      { year: 2022, label: "Fraunhofer IIS", detail: "Research Associate — Dataspaces & IoT", highlight: true },
    ],
  },

  // Stats for hero trust bar
  stats: [
    { value: "14+", label: "Publications" },
    { value: "2", label: "Best Paper Awards" },
    { value: "PhD", label: "Candidate" },
  ],

  // Professional page data
  research: {
    current: {
      institution: "Fraunhofer IIS",
      department: "Dataspaces and IoT Solutions",
      role: "Research Associate",
      period: "Mar 2022 – Present",
      focus: ["Knowledge Engineering", "Web of Things (WoT)", "Solid Protocol", "Knowledge Graphs", "Ontologies", "LLM-based NER/NEL", "Linked Data"],
      awards: [
        { title: "Best Paper Award", venue: "KGSWC 2024", paper: "Enriching RDF Data with LLM-Based NER and Linking" },
        { title: "Best Workshop Paper", venue: "ICPM 2023", paper: "Breaking Down Barriers with Knowledge Graphs" },
      ],
    },
    phd: {
      institution: "FAU Erlangen-Nürnberg",
      chair: "Chair of Technical Information Systems",
      advisor: "Prof. Dr. Andreas Harth",
      topic: "Discovery in Cyber-Physical Systems",
      period: "2022 – Present",
    },
  },

  industry: [
    {
      company: "Siemens Smart Infrastructure",
      role: "QM Internship",
      location: "Gerätewerk Amberg",
      period: "Oct – Dec 2021",
      description: "Quality Management internship at one of Germany's most advanced Industry 4.0 factories.",
    },
    {
      company: "Fraunhofer SCS",
      role: "Student Research Assistant",
      department: "Future Engineering",
      period: "Jun 2018 – Oct 2021",
      description: "Knowledge Management research in the Future Engineering group.",
    },
    {
      company: "High-Octane Motorsports Erlangen",
      role: "Component Lead — Pedal Assembly",
      period: "Sep 2019 – Apr 2022",
      description: "Formula Student racing team. Responsible for pedal assembly subsystem design and manufacturing.",
    },
    {
      company: "FutureIng",
      role: "Student Research Assistant",
      period: "Jul 2017 – Jun 2018",
      description: "Market research in general for the industry.",
    },
    {
      company: "Metallbau Dorsch GmbH",
      role: "Apprentice & Qualified Metalworker",
      period: "Sep 2007 – Sep 2015",
      description: "Dual apprenticeship and qualified metalworker in the family metalworking business. Foundation of hands-on engineering skills.",
    },
  ],

  education: [
    {
      degree: "PhD (External)",
      field: "Discovery in Cyber-Physical Systems",
      school: "FAU Erlangen-Nürnberg",
      period: "2022 – Present",
      advisor: "Prof. Dr. Andreas Harth",
    },
    {
      degree: "MSc. Wirtschaftsingenieurwesen",
      field: "Industrial Engineering",
      school: "FAU Erlangen-Nürnberg",
      period: "2019 – 2022",
      grade: "1.5",
    },
    {
      degree: "MSc. Maschinenbau",
      field: "Computer-Aided Product Development",
      school: "FAU Erlangen-Nürnberg",
      period: "2020 – 2022",
      grade: "1.4",
    },
    {
      degree: "BSc. Wirtschaftsingenieurwesen",
      field: "Design Engineering",
      school: "FAU Erlangen-Nürnberg",
      period: "2016 – 2019",
      grade: "1.7 (Top 10%)",
    },
  ],

  // Writer page: publications grouped by year
  publications: [
    {
      year: 2025,
      papers: [
        { title: "Impact of Knowledge Graph Representations on Question Answering with Language Models", venue: "CAiSE Workshops", authors: "D. Henselmann, R. Dorsch, A. Harth", url: "https://doi.org/10.1007/978-3-031-94931-9_7" },
        { title: "COMPASS: A Process Mining-based Methodology for Prompt Optimization of Large Language Model Agents", venue: "HybridAIMS+CAI", authors: "R. Dorsch, D. Henselmann, A. Harth", url: "https://ceur-ws.org/Vol-3996/paper-5.pdf" },
        { title: "Mapping by Example: Towards an RML Mapping Reverse Engineering Pipeline", venue: "KGCW@ESWC", authors: "M. Freund, R. Dorsch, S. Schmid, A. Harth", url: "https://ceur-ws.org/Vol-3999/paper5.pdf" },
      ],
    },
    {
      year: 2024,
      papers: [
        { title: "FlexRML: A Flexible and Memory Efficient Knowledge Graph Materializer", venue: "ESWC", authors: "M. Freund, R. Dorsch, S. Schmid, A. Harth", url: "https://doi.org/10.1007/978-3-031-60635-9_3" },
        { title: "FAIR Internet of Things Data: Enabling Process Optimization at Munich Airport", venue: "ESWC Satellite Events", authors: "R. Dorsch, M. Freund, J. Rott, A. Harth", url: "https://doi.org/10.1007/978-3-031-78952-6_16" },
        { title: "EVErPREP: Towards an Event Knowledge Graph Enhanced Workflow Model for Event Log Preparation", venue: "ICPM Workshops", authors: "R. Dorsch, P. Filipp, A. Harth", url: "https://doi.org/10.1007/978-3-031-82225-4_3" },
        { title: "Vibration-Based Operating Status Monitoring of a Production Line with Low-Cost IoT Devices", venue: "APMS", authors: "R. Dorsch, S. Meckler, P. Filipp", url: "https://doi.org/10.1007/978-3-031-71637-9_29" },
        { title: "RetroWoT: A Method to Integrate Brownfield Devices in the Web of Things", venue: "IoT", authors: "R. Dorsch, M. Freund, K. Marnitt, A. Harth", url: "https://doi.org/10.1145/3703790.3703799" },
        { title: "Analyzing Breaking Changes in IoT Systems: A Taxonomy and Empirical Study on System Stability and Longevity", venue: "IoT", authors: "R. Dorsch, M. Freund, A. Harth", url: "https://doi.org/10.1145/3703790.3703835" },
        { title: "Enriching RDF Data with LLM-Based Named Entity Recognition and Linking on Embedded Natural Language Annotations", venue: "KGSWC", authors: "R. Dorsch, M. Freund, S. Schmid, T. Wehr, A. Harth", award: "Best Paper Award", url: "https://doi.org/10.1007/978-3-031-81221-7_8" },
        { title: "AutOnto: Towards A Semi-Automated Ontology Engineering Methodology", venue: "KGSWC", authors: "R. Dorsch, K. Ascencion Arevalo, S. Ambre", url: "https://doi.org/10.1007/978-3-031-81221-7_16" },
        { title: "Performance Results of FlexRML in the KGCW Challenge 2024", venue: "KGCW@ESWC", authors: "M. Freund, R. Dorsch", url: "https://ceur-ws.org/Vol-3718/paper9.pdf" },
      ],
    },
    {
      year: 2023,
      papers: [
        { title: "Breaking Down Barriers with Knowledge Graphs: Data Integration for Cross-Organizational Process Mining", venue: "ICPM Workshops", authors: "R. Dorsch, J. Rott, M. Freund, M. Böhm, A. Harth, H. Krcmar", award: "Best Workshop Paper Award", url: "https://doi.org/10.1007/978-3-031-56107-8_38" },
        { title: "WoT2Pod: An Architecture enabling an Edge-to-Cloud Continuum", venue: "IoT", authors: "R. Dorsch, M. Freund, J. Fries, P. Schiller, A. Harth", url: "https://doi.org/10.1145/3627050.3627063" },
      ],
    },
  ],

  // Blog posts (Writer page)
  blog: [
    {
      title: "From Metalworker to PhD Researcher: My Non-Linear Career Path",
      excerpt: "When I tell people I started as a metalworker apprentice and ended up doing a PhD in Semantic Web and IoT, the usual reaction is surprise. But looking back, the path makes more sense than it seems. Working with your hands teaches you problem-solving in ways no textbook can — and that foundation shaped everything I've done since. In this post, I share the key turning points that led me from the workshop floor to the research lab.",
      date: "2025-01-15",
      readTime: "8 min read",
      tags: ["Career", "Personal"],
    },
  ],

  // Creator page data
  creator: {
    intro: "From metalworker apprentice to PhD researcher — I never stopped building with my hands. Whether forging steel or printing in PLA, the joy of creating something tangible remains the same.",
    forging: {
      title: "Forging",
      description: "Trained as a metalworker at the family business Metallbau Dorsch GmbH, I continue to practice blacksmithing as a craft. There's a meditative quality to shaping hot metal that no digital tool can replicate.",
    },
    printing: {
      title: "3D Modelling & Printing",
      description: "Combining engineering CAD skills (Siemens NX, Creo) with consumer 3D printing (Cura, Orca Slicer). From functional prototypes to creative projects, the bridge between digital design and physical object is endlessly fascinating.",
    },
  },

  languages: [
    { name: "German", level: "Native" },
    { name: "English", level: "Fluent" },
  ],
};
