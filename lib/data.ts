// Central content for IHSAN EDUCARE. Official website links are left as
// placeholders ("#") — verify and fill in the exact current URLs before
// launch, since government exam portals change often and a wrong link is
// worse than no link.

export type OfficialLink = {
  label: string;
  url: string;
};

export type Stream = {
  slug: string;
  name: string;
  category: string;
  categoryEmoji: string;
  summary: string;
  eligibility?: string;
  exams: string[];
  documents: string[];
  officialWebsites: OfficialLink[];
  applicationWindow?: string;
};

export type CategoryGroup = {
  slug: string;
  name: string;
  emoji: string;
  description: string;
};

export const categories: CategoryGroup[] = [
  {
    slug: "medical",
    name: "Medical & Health Sciences",
    emoji: "🩺",
    description: "MBBS, BDS, AYUSH, Nursing, Pharmacy and Allied Health courses.",
  },
  {
    slug: "engineering",
    name: "Engineering & Technology",
    emoji: "⚙️",
    description: "BTech / BE through JEE Main, JEE Advanced and KEAM.",
  },
  {
    slug: "commerce",
    name: "Commerce & Management",
    emoji: "💼",
    description: "BCom, BBA and integrated management programmes.",
  },
  {
    slug: "law",
    name: "Law",
    emoji: "⚖️",
    description: "Integrated LLB through CLAT, AILET and KLEE.",
  },
  {
    slug: "aviation",
    name: "Aviation",
    emoji: "🛩️",
    description: "Commercial pilot training and DGCA requirements.",
  },
  {
    slug: "defence",
    name: "Defence",
    emoji: "🛡️",
    description: "Army, Navy and Air Force entry through NDA, Agniveer and AFCAT.",
  },
  {
    slug: "teaching",
    name: "Teaching",
    emoji: "👨‍🏫",
    description: "B.Ed and teacher eligibility routes via CUET, KTET and CTET.",
  },
  {
    slug: "government",
    name: "Government Jobs",
    emoji: "🏛️",
    description: "SSC, Railways, Indian Post and Agniveer recruitment after Plus Two.",
  },
  {
    slug: "central-university",
    name: "Central University Admissions",
    emoji: "🎓",
    description: "Undergraduate admission to central universities through CUET UG.",
  },
];

export const streams: Stream[] = [
  {
    slug: "mbbs-bds-ayush",
    name: "MBBS / BDS / AYUSH",
    category: "Medical & Health Sciences",
    categoryEmoji: "🩺",
    summary:
      "NEET UG is the single national entrance exam for MBBS, BDS, BAMS, BHMS and BUMS admissions.",
    eligibility: "Passed Plus Two with Physics, Chemistry, Biology/Biotechnology.",
    exams: ["NEET UG"],
    documents: [
      "Aadhaar Card",
      "Passport Size Photo",
      "Signature",
      "Class 10 Certificate",
      "Class 12 Certificate / Details",
      "Mobile Number",
      "Email ID",
    ],
    officialWebsites: [{ label: "NEET UG Portal", url: "#" }],
  },
  {
    slug: "nursing",
    name: "Nursing",
    category: "Medical & Health Sciences",
    categoryEmoji: "🩺",
    summary: "Entry through NEET along with state and institutional nursing admissions.",
    eligibility: "Passed Plus Two with Science, subject to institute-specific norms.",
    exams: ["NEET", "State Nursing Admissions", "Institutional Admissions"],
    documents: [
      "Aadhaar",
      "SSLC Certificate",
      "Plus Two Marksheet",
      "Photo",
      "Community Certificate (if applicable)",
    ],
    officialWebsites: [{ label: "State Nursing Admissions", url: "#" }],
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    category: "Medical & Health Sciences",
    categoryEmoji: "🩺",
    summary: "KEAM and other state entrance exams lead to B.Pharm admissions.",
    exams: ["KEAM", "State Entrance Exams"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [{ label: "KEAM Portal", url: "#" }],
  },
  {
    slug: "allied-health-radiology",
    name: "Allied Health — Radiology",
    category: "Medical & Health Sciences",
    categoryEmoji: "🩺",
    summary: "Diagnostic imaging technology course under Allied Health Sciences.",
    eligibility: "Passed Plus Two with Science.",
    exams: ["Institutional / State Allied Health Admissions"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [{ label: "Allied Health Admissions", url: "#" }],
  },
  {
    slug: "allied-health-mlt",
    name: "Allied Health — MLT (Medical Lab Technology)",
    category: "Medical & Health Sciences",
    categoryEmoji: "🩺",
    summary: "Medical Laboratory Technology diploma/degree under Allied Health Sciences.",
    eligibility: "Passed Plus Two with Science.",
    exams: ["Institutional / State Allied Health Admissions"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [{ label: "Allied Health Admissions", url: "#" }],
  },
  {
    slug: "allied-health-cardiac-care",
    name: "Allied Health — Cardiac Care Technology",
    category: "Medical & Health Sciences",
    categoryEmoji: "🩺",
    summary: "Cardiac care technology course under Allied Health Sciences.",
    eligibility: "Passed Plus Two with Science.",
    exams: ["Institutional / State Allied Health Admissions"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [{ label: "Allied Health Admissions", url: "#" }],
  },
  {
    slug: "allied-health-optometry",
    name: "Allied Health — Optometry",
    category: "Medical & Health Sciences",
    categoryEmoji: "🩺",
    summary: "Optometry course under Allied Health Sciences.",
    eligibility: "Passed Plus Two with Science.",
    exams: ["Institutional / State Allied Health Admissions"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [{ label: "Allied Health Admissions", url: "#" }],
  },
  {
    slug: "allied-health-dialysis",
    name: "Allied Health — Dialysis Technology",
    category: "Medical & Health Sciences",
    categoryEmoji: "🩺",
    summary: "Dialysis technology course under Allied Health Sciences.",
    eligibility: "Passed Plus Two with Science.",
    exams: ["Institutional / State Allied Health Admissions"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [{ label: "Allied Health Admissions", url: "#" }],
  },
  {
    slug: "allied-health-ot-technology",
    name: "Allied Health — Operation Theatre Technology",
    category: "Medical & Health Sciences",
    categoryEmoji: "🩺",
    summary: "Operation Theatre technology course under Allied Health Sciences.",
    eligibility: "Passed Plus Two with Science.",
    exams: ["Institutional / State Allied Health Admissions"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [{ label: "Allied Health Admissions", url: "#" }],
  },
  {
    slug: "allied-health-physiotherapy",
    name: "Allied Health — Physiotherapy",
    category: "Medical & Health Sciences",
    categoryEmoji: "🩺",
    summary: "Physiotherapy course under Allied Health Sciences.",
    eligibility: "Passed Plus Two with Science.",
    exams: ["Institutional / State Allied Health Admissions"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [{ label: "Allied Health Admissions", url: "#" }],
  },
  {
    slug: "btech",
    name: "BTech / BE",
    category: "Engineering & Technology",
    categoryEmoji: "⚙️",
    summary: "JEE Main, JEE Advanced and KEAM are the gateways to engineering admissions.",
    eligibility: "Passed Plus Two with Physics, Chemistry, Mathematics.",
    exams: ["JEE Main", "JEE Advanced", "KEAM"],
    documents: [
      "Aadhaar",
      "Photo",
      "Signature",
      "Class 10 Certificate",
      "Plus Two Details",
    ],
    officialWebsites: [
      { label: "JEE Main", url: "#" },
      { label: "JEE Advanced", url: "#" },
      { label: "KEAM", url: "#" },
    ],
  },
  {
    slug: "commerce-management",
    name: "BCom / BBA / Integrated Programmes",
    category: "Commerce & Management",
    categoryEmoji: "💼",
    summary: "CUET UG and management aptitude tests open the door to commerce degrees.",
    exams: ["CUET UG", "IPMAT", "SET", "Christ Entrance Test"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Email ID"],
    officialWebsites: [{ label: "CUET Portal", url: "#" }],
  },
  {
    slug: "llb",
    name: "LLB (Integrated)",
    category: "Law",
    categoryEmoji: "⚖️",
    summary: "CLAT, AILET and KLEE lead to 5-year integrated law programmes.",
    exams: ["CLAT", "AILET", "KLEE"],
    documents: ["Aadhaar", "Plus Two Certificate", "Photo", "Signature"],
    officialWebsites: [
      { label: "CLAT", url: "#" },
      { label: "AILET", url: "#" },
      { label: "KLEE", url: "#" },
    ],
  },
  {
    slug: "pilot",
    name: "Pilot",
    category: "Aviation",
    categoryEmoji: "🛩️",
    summary: "Commercial pilot training regulated by DGCA, ending in a CPL.",
    eligibility: "Passed Plus Two with Physics and Mathematics; medical fitness required.",
    exams: ["DGCA Examinations", "CPL Requirements"],
    documents: [
      "Aadhaar",
      "Passport",
      "Medical Fitness Certificate",
      "Plus Two Science",
    ],
    officialWebsites: [{ label: "DGCA", url: "#" }],
  },
  {
    slug: "defence",
    name: "Army / Navy / Air Force",
    category: "Defence",
    categoryEmoji: "🛡️",
    summary: "NDA, Agniveer and AFCAT are the main entry routes into the armed forces.",
    exams: ["NDA", "Agniveer", "AFCAT"],
    documents: [
      "Aadhaar",
      "SSLC Certificate",
      "Plus Two Certificate",
      "Domicile Certificate (where required)",
    ],
    officialWebsites: [
      { label: "NDA (UPSC)", url: "#" },
      { label: "Agniveer", url: "#" },
      { label: "AFCAT", url: "#" },
    ],
  },
  {
    slug: "teaching",
    name: "Teaching",
    category: "Teaching",
    categoryEmoji: "👨‍🏫",
    summary: "CUET and integrated B.Ed admissions lead into teaching, backed by KTET/CTET eligibility tests.",
    exams: ["CUET", "Integrated B.Ed Admissions", "KTET", "CTET"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [
      { label: "CUET Portal", url: "#" },
      { label: "KTET", url: "#" },
      { label: "CTET", url: "#" },
    ],
  },
  {
    slug: "government-jobs",
    name: "Government Jobs (After Plus Two)",
    category: "Government Jobs",
    categoryEmoji: "🏛️",
    summary: "SSC, Railways, Indian Post and Agniveer recruitment open directly after Plus Two.",
    exams: ["SSC CHSL", "SSC MTS", "Railway Recruitment", "Indian Post", "Agniveer"],
    documents: ["Aadhaar", "Photo", "Signature", "Educational Certificates"],
    officialWebsites: [
      { label: "SSC", url: "#" },
      { label: "Railway Recruitment Board", url: "#" },
      { label: "India Post", url: "#" },
    ],
  },
  {
    slug: "cuet",
    name: "Central University Admissions",
    category: "Central University Admissions",
    categoryEmoji: "🎓",
    summary: "CUET UG is the single common entrance test for undergraduate admission to central universities.",
    exams: ["CUET UG"],
    documents: [
      "Aadhaar",
      "Photo",
      "Signature",
      "Class 10 Certificate",
      "Plus Two Details",
    ],
    officialWebsites: [{ label: "CUET Portal", url: "#" }],
  },
];

export function getStreamBySlug(slug: string) {
  return streams.find((s) => s.slug === slug);
}

export function getStreamsByCategory(categorySlug: string) {
  const category = categories.find((c) => c.slug === categorySlug);
  if (!category) return [];
  return streams.filter((s) => s.category === category.name);
}

export type CareerGoal = {
  goal: string;
  emoji: string;
  streamSlug: string;
};

export const careerGoals: CareerGoal[] = [
  { goal: "Doctor", emoji: "🩺", streamSlug: "mbbs-bds-ayush" },
  { goal: "Dentist", emoji: "🦷", streamSlug: "mbbs-bds-ayush" },
  { goal: "Nurse", emoji: "💉", streamSlug: "nursing" },
  { goal: "Pharmacist", emoji: "💊", streamSlug: "pharmacy" },
  { goal: "Physiotherapist", emoji: "🧑‍⚕️", streamSlug: "allied-health-physiotherapy" },
  { goal: "Engineer", emoji: "⚙️", streamSlug: "btech" },
  { goal: "Business Professional", emoji: "💼", streamSlug: "commerce-management" },
  { goal: "Lawyer", emoji: "⚖️", streamSlug: "llb" },
  { goal: "Pilot", emoji: "🛩️", streamSlug: "pilot" },
  { goal: "Defence Officer", emoji: "🛡️", streamSlug: "defence" },
  { goal: "Teacher", emoji: "👨‍🏫", streamSlug: "teaching" },
  { goal: "Government Employee", emoji: "🏛️", streamSlug: "government-jobs" },
  { goal: "Central University Aspirant", emoji: "🎓", streamSlug: "cuet" },
];

export type FeaturedExam = {
  name: string;
  streamSlug: string;
};

// Curated subset of real exams from `streams` for the homepage highlight.
export const featuredExams: FeaturedExam[] = [
  { name: "NEET UG", streamSlug: "mbbs-bds-ayush" },
  { name: "JEE Main", streamSlug: "btech" },
  { name: "KEAM", streamSlug: "btech" },
  { name: "CUET UG", streamSlug: "cuet" },
  { name: "CLAT", streamSlug: "llb" },
  { name: "NDA", streamSlug: "defence" },
];

export type NotificationItem = {
  tag: "Exam Alert" | "Scholarship Alert" | "Admission Alert";
  title: string;
  date: string;
};

// Sample placeholder items — replace with real, dated announcements before launch.
export const notifications: NotificationItem[] = [
  {
    tag: "Exam Alert",
    title: "NEET UG application window opens soon — check the official portal.",
    date: "Sample notice",
  },
  {
    tag: "Admission Alert",
    title: "KEAM counselling schedule to be released after results.",
    date: "Sample notice",
  },
  {
    tag: "Scholarship Alert",
    title: "e-Grantz renewal applications open each academic year.",
    date: "Sample notice",
  },
];

export type ScholarshipUpdate = {
  name: string;
  category: string;
  note: string;
};

// Sample placeholder items — replace with real scholarship names/dates before launch.
export const scholarshipUpdates: ScholarshipUpdate[] = [
  {
    name: "National Means-cum-Merit Scholarship",
    category: "Central Government",
    note: "Applications typically open once a year — verify on the official portal.",
  },
  {
    name: "e-Grantz Post-Matric Scholarship",
    category: "Kerala Government",
    note: "For SC/ST/OEC and other notified categories in Kerala.",
  },
  {
    name: "Minority Community Scholarship",
    category: "Minority Welfare",
    note: "For students belonging to notified minority communities.",
  },
];

export type Bilingual = { ml: string; en: string };

// Sourced from the official IHSAN EDUCARE launch poster (msf Kamicheri Unit).
export const orgName = "msf Kamicheri Unit";
export const orgTagline = "Together for a Better Tomorrow";
export const orgLine = `A Career, Entrance & Scholarship Guidance Initiative by ${orgName}`;

export const heroTagline: Bilingual = {
  ml: "അറിവിലൂടെ അവസരങ്ങളിലേക്ക്",
  en: "Through Knowledge, Towards Opportunities",
};

export const memorial = {
  name: "Muhammed Ihsan",
  dedication: {
    ml: "വിദ്യാർത്ഥികളുടെ ഭാവി രൂപപ്പെടുത്തുന്നതിൽ ഒരു വഴികാട്ടിയാകുക എന്ന ലക്ഷ്യത്തോടെയാണ് നമ്മുടെ പ്രിയ സുഹൃത്ത് മുഹമ്മദ് ഇഹ്സാന്റെ സ്മരണാർത്ഥം IHSAN EDUCARE ആരംഭിക്കുന്നത്.",
    en: "IHSAN EDUCARE is started in loving memory of our dear friend Muhammed Ihsan, with the goal of being a guide in shaping students' futures.",
  } satisfies Bilingual,
};

export const aboutContent = {
  whatIs: {
    heading: { ml: "എന്താണ് IHSAN EDUCARE?", en: "What is IHSAN EDUCARE?" } satisfies Bilingual,
    body: {
      ml: "ഉന്നത വിദ്യാഭ്യാസം, പ്രവേശന പരീക്ഷകൾ, സ്കോളർഷിപ്പുകൾ, കരിയർ അവസരങ്ങൾ എന്നിവയെക്കുറിച്ചുള്ള കൃത്യവും വിശ്വസനീയവുമായ മാർഗ്ഗനിർദേശങ്ങൾ വിദ്യാർത്ഥികൾക്ക് ലഭ്യമാക്കുന്നതിനായി രൂപീകരിച്ച ഒരു വിദ്യാഭ്യാസ സംരംഭമാണ് IHSAN EDUCARE.",
      en: "IHSAN EDUCARE is an educational initiative formed to give students accurate, reliable guidance on higher education, entrance exams, scholarships and career opportunities.",
    } satisfies Bilingual,
  },
  why: {
    heading: { ml: "എന്തിനാണ് IHSAN EDUCARE?", en: "Why IHSAN EDUCARE?" } satisfies Bilingual,
    body: {
      ml: "പല വിദ്യാർത്ഥികൾക്കും +2 കഴിഞ്ഞാൽ ലഭ്യമായ കോഴ്സുകൾ, പ്രവേശന പരീക്ഷകൾ, സ്കോളർഷിപ്പുകൾ, തൊഴിൽ സാധ്യതകൾ എന്നിവയെക്കുറിച്ച് വ്യക്തമായ ധാരണ ലഭിക്കില്ല. ഈ വിവരങ്ങൾ ഒരിടത്ത് ലഭ്യമാക്കുകയും വിദ്യാർത്ഥികൾക്ക് ശരിയായ മാർഗ്ഗനിർദേശം നൽകുകയും ചെയ്യുക എന്നതാണ് ഞങ്ങളുടെ ലക്ഷ്യം.",
      en: "Many students don't get a clear picture of the courses, entrance exams, scholarships and job opportunities available after Plus Two. Our goal is to bring this information to one place and give students the right guidance.",
    } satisfies Bilingual,
  },
};

export const audience: Bilingual[] = [
  { ml: "SSLC & Plus Two വിദ്യാർത്ഥികൾ", en: "SSLC & Plus Two students" },
  { ml: "കോളേജ് വിദ്യാർത്ഥികൾ", en: "College students" },
  { ml: "ഉന്നത വിദ്യാഭ്യാസം ആഗ്രഹിക്കുന്നവർ", en: "Those seeking higher education" },
  { ml: "Entrance Exams എഴുതാൻ തയ്യാറെടുക്കുന്നവർ", en: "Those preparing for entrance exams" },
  { ml: "Scholarship അവസരങ്ങൾ തേടുന്നവർ", en: "Those looking for scholarship opportunities" },
  { ml: "Career Guidance ആവശ്യമുള്ള യുവാക്കൾ", en: "Youth who need career guidance" },
];

export const goals: Bilingual[] = [
  {
    ml: "Entrance Exam Information Portal ആരംഭിക്കുക",
    en: "Launch an Entrance Exam Information Portal",
  },
  {
    ml: "പ്രധാന Entrance Exams-ന്റെ Guidance Materials തയ്യാറാക്കുക",
    en: "Prepare guidance materials for major entrance exams",
  },
  {
    ml: "Scholarship Information Centre രൂപീകരിക്കുക",
    en: "Set up a Scholarship Information Centre",
  },
  {
    ml: "Career Guidance Sessions സംഘടിപ്പിക്കുക",
    en: "Organise Career Guidance Sessions",
  },
  {
    ml: "വിദ്യാർത്ഥികൾക്കായി Website Support System ഒരുക്കുക",
    en: "Build a website support system for students",
  },
  {
    ml: "IHSAN EDUCARE-നെ ഒരു വിശ്വസനിയ വിദ്യാർത്ഥി മാർഗ്ഗനിർദേശ പ്ലാറ്റ്ഫോമായി വളർത്തുക",
    en: "Grow IHSAN EDUCARE into a trusted student guidance platform",
  },
];

export const quote: Bilingual = {
  ml: "ഒരു വിദ്യാർത്ഥി ശരിയായ വഴി കാണിച്ചുകൊടുക്കുന്നത്, ഒരു ഭാവി നിർമ്മിക്കുന്നതിന് തുല്യമാണ്.",
  en: "Showing a student the right path is the same as building a future.",
};
