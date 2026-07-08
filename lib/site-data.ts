import {
  BookOpen,
  Brain,
  Globe2,
  Handshake,
  Languages,
  Leaf,
  LibraryBig,
  Lightbulb,
  Megaphone,
  Scale,
  Sparkles,
} from "lucide-react";

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Tracks", href: "#tracks" },
  { label: "Committee", href: "#committee" },
  { label: "Dates", href: "#dates" },
  { label: "Fees", href: "#fees" },
  // { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" }
];

export const stats = [
  { label: "Conference Tracks", value: 5 },
  { label: "Research Themes", value: 35 },
  { label: "Event Days", value: 2 },
  { label: "Global Forum", value: 1 }
];

export const objectives = [
  {
    icon: Brain,
    title: "Interrogate Identity",
    body: "To bring together leading academic scientists, researchers, research scholars, and educators from around the world to exchange and share their experiences, findings, and research results across all fields of the humanities and related disciplines."
  },
  {
    icon: Scale,
    title: "Advance Ethical Inquiry",
    body: "To explore new paradigms of identity, ethics, and sustainable development by encouraging critical inquiry into the intersection of technology, trauma, and transnationalism in contemporary human experience."
  },
  {
    icon: Globe2,
    title: "Map Transnational Flows",
    body: "To provide an interdisciplinary forum that fosters dialogue across tracks encompassing Digital Society and AI Ethics, Postcolonial and Diaspora Studies, Language and Linguistics, Environmental Humanities, and Popular Culture."
  },
  {
    icon: Leaf,
    title: "Promote Sustainability",
    body: "To promote the study of human rights, justice, gender studies, eco-criticism, and socio-linguistic analysis as essential tools for understanding and responding to the transformative challenges of the 21st century."
  },
  {
    icon: Lightbulb,
    title: "Encourage Innovation",
    body: "To create collaborative networks among academicians, practitioners, and policy-makers that can drive meaningful change and contribute to sustainable development goals through the lens of the humanities."
  },
  {
    icon: Handshake,
    title: "Foster Collaboration",
    body: "To publish high-quality, peer-reviewed research that advances discourse in humanities scholarship and reaches a global academic audience."
  },
  {
    icon: LibraryBig,
    title: "Support Scholarship",
    body: "To acknowledge and address the complex realities of diaspora communities, migration, trauma, statelessness, and resistance, and to amplify voices from historically marginalized and underrepresented groups."
  },
  {
    icon: Sparkles,
    title: "Imagine Futures",
    body: "To celebrate and critically examine popular and contemporary culture — including digital media, gaming, fan culture, and OTT platforms — as significant sites of meaning-making, identity formation, and social transformation."
  }
];

export const tracks = [
  {
    icon: BookOpen,
    title: "Interdisciplinary Studies",
    topics: [
      "Digital Society and AI Ethics",
      "Law, Justice and Human Rights",
      "Media, Culture and Representation",
      "Gender, Sexuality and Queer Studies",
      "Religious Studies and Belief Systems",
      "Food Narratives and Literature",
      "Trauma and Genocide Studies",
      "Masculinity Studies",
      "Tourism",
      "Literature and Social Imagination",
      "Medical Humanities"
    ]
  },

  {
    icon: Languages,
    title: "Language, Linguistics and Communication",
    topics: [
      "Translational Studies",
      "Cross-Cultural Communication",
      "NEP 2020 and Language Policies",
      "Discourse Analysis in Political and Media Contexts",
      "Cross-Linguistic Patterns: Phonology, Morphology and Syntax",
      "Speech Act Theory",
      "Socio-Linguistics"
    ]
  },
  
  {
    icon: Globe2,
    title: "Postcolonial and Diaspora Studies",
    topics: [
      "Comparative Post-Colonial Narratives",
      "Border and Migration Studies",
      "Global Representation",
      "Transnational Identities and Diasporic Communities",
      "Resistance, Representation, Statelessness and Citizenship Denial"
    ]
  },
  // {
  //   icon: Languages,
  //   title: "Language, Linguistics and Communication",
  //   topics: [
  //     "Translational Studies",
  //     "Cross-Cultural Communication",
  //     "NEP 2020 and Language Policies",
  //     "Discourse Analysis in Political and Media Contexts",
  //     "Cross-Linguistic Patterns: Phonology, Morphology and Syntax",
  //     "Speech Act Theory",
  //     "Socio-Linguistics"
  //   ]
  // },
  {
    icon: Leaf,
    title: "Environmental Humanities and Eco-Criticism",
    topics: [
      "Climate Fiction",
      "Eco-Criticism and Anthropocene Studies",
      "Literature and Sustainability",
      "Eco-Spirituality and Eco-Poetics",
      "Energy Humanities and Environmental Justice"
    ]
  },
  {
    icon: Megaphone,
    title: "Popular and Contemporary Culture",
    topics: [
      "Popular Fiction",
      "Fan Studies",
      "Gaming Narratives",
      "Comic and Graphic Narratives",
      "Internet and OTT Culture"
    ]
  }
];

export const dates = [
  ["Full Paper Submission", "15 December 2026"],
  ["Acceptance Notification", "15 January 2027"],
  ["Final Submission", "31 January 2027"],
  ["Registration Deadline", "10 February 2027"],
  ["Conference", "26-27 February 2027"]
];

export const fees = [
  { name: "Faculty / Research Scholar", price: "INR 8,000", note: "Academic authors and research scholars" },
  { name: "Industry Delegate", price: "INR 10,000", note: "Professionals and institutional delegates" },
  { name: "Foreign Delegate", price: "$150", note: "International authors and presenters" },
  { name: "Foreign Student Author", price: "$130", note: "International student authors" }
];

export const committee = [
  {
    group: "Chief Patrons",
    people: [
      ["Father of Education, S. Rashpal Singh Dhaliwal", "Hon'ble Chancellor, CGC University"],
      ["Mr. Arsh Dhaliwal", "Managing Director"]
    ]
  },
  {
    group: "Patrons",
    people: [
      ["Dr. Sushil Prashar"],
      ["Dr. Vinay Kumar Goyal"],
      ["Dr. Anupamdeep Sharma"],
      ["Dr. Anish Gupta"],
      ["Dr. Sandeep Singh"]
    ]
  },
  { group: "Conference Chair", people: [["Dr. Pawan Kumar Shukla"]] },
  { group: "Conveners", people: [["Dr. Anamol Gautam"], ["Dr. Manjot Kaur"]] },
  { group: "Co-Conveners", people: [["Dr. Ananya Dasghosh"], ["Ms. Ayushi"]] },
  {
    group: "Organizing Secretaries",
    people: [["Dr. Vandna"], ["Dr. Jaya Bansal"], ["Ms. Sanya Batra"], ["Mr. Anshuman Saxena"], ["Ms. Riya Virdi"]]
  }
];

export const localTeam = [
  "Dr. Meera Sharma",
  "Dr. Ritu Bansal",
  "Ms. Harleen Kaur",
  "Mr. Ankit Verma",
  "Ms. Priya Sood",
  "Dr. Kavita Rana",
  "Mr. Nikhil Anand",
  "Ms. Simran Kaur"
];

export const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/cgcuniversitymohali/" },
  { label: "X", href: "https://x.com/cgcuniversity" }
  // { label: "Instagram", href: "https://www.instagram.com/cgcuniversitymohali" }
];

export const quickLinks = [
  ["About", "#about"],
  ["Tracks", "#tracks"],
  ["Committee", "#committee"],
  ["Important Dates", "#dates"],
  // ["Gallery", "#gallery"],
  ["Contact", "#contact"]
];

export const heroActions = [
  { label: "Submit Paper", href: "mailto:ichc2027@cgcuniversity.in?subject=Paper%20Submission%20-%20ICHC%202027" }
  // { label: "Download Brochure", href: "/brochure-placeholder.pdf" }
];

export const siteEmail = "ichc2027@cgcuniversity.in";
export const conferenceDate = "26-27 February 2027";
export const conferenceLocation = "CGC University, Mohali, India";
export const conferenceTitle = "Humanities at the Crossroads";
export const conferenceTheme = "Exploring New Paradigms of Identity, Ethics and Sustainable Development";
