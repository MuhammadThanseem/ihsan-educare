// Central content for IHSAN EDUCARE. Official website links point to
// government/exam-authority portals — re-verify periodically, since these
// change domains and URL structure more often than most sites.

import type { IconName } from "./icons";

export type OfficialLink = {
  label: string;
  url: string;
};

export type PlusTwoStreamSlug = "science" | "commerce" | "humanities";

export type PlusTwoStream = {
  slug: PlusTwoStreamSlug;
  name: string;
  icon: IconName;
  description: string;
};

// The three broad streams a student picks at Plus Two (Class 11-12) level.
// Used to filter which career streams are realistically open to a student.
export const plusTwoStreams: PlusTwoStream[] = [
  {
    slug: "science",
    name: "Science",
    icon: "flask",
    description:
      "Physics, Chemistry, Maths/Biology — opens the door to Medical, Engineering, Aviation and Allied Health, plus every stream-agnostic path.",
  },
  {
    slug: "commerce",
    name: "Commerce",
    icon: "chart-line",
    description:
      "Accountancy, Business Studies, Economics — leads naturally into Commerce & Management, plus every stream-agnostic path.",
  },
  {
    slug: "humanities",
    name: "Humanities",
    icon: "feather-pointed",
    description:
      "History, Political Science, Literature and more — a strong base for Law, Teaching, Government Jobs and Central University courses.",
  },
];

export type Stream = {
  slug: string;
  name: string;
  category: string;
  categoryIcon: IconName;
  plusTwoStreams: PlusTwoStreamSlug[];
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
  icon: IconName;
  description: string;
};

export const categories: CategoryGroup[] = [
  {
    slug: "medical",
    name: "Medical & Health Sciences",
    icon: "stethoscope",
    description: "MBBS, BDS, AYUSH, Nursing, Pharmacy and Allied Health courses.",
  },
  {
    slug: "engineering",
    name: "Engineering & Technology",
    icon: "gear",
    description: "BTech / BE through JEE Main, JEE Advanced and KEAM.",
  },
  {
    slug: "commerce",
    name: "Commerce & Management",
    icon: "briefcase",
    description: "BCom, BBA and integrated management programmes.",
  },
  {
    slug: "law",
    name: "Law",
    icon: "scale-balanced",
    description: "Integrated LLB through CLAT, AILET and KLEE.",
  },
  {
    slug: "aviation",
    name: "Aviation",
    icon: "plane",
    description: "Commercial pilot training and DGCA requirements.",
  },
  {
    slug: "defence",
    name: "Defence",
    icon: "shield-halved",
    description: "Army, Navy and Air Force entry through NDA, Agniveer and AFCAT.",
  },
  {
    slug: "teaching",
    name: "Teaching",
    icon: "chalkboard-user",
    description: "B.Ed and teacher eligibility routes via CUET, KTET and CTET.",
  },
  {
    slug: "government",
    name: "Government Jobs",
    icon: "landmark",
    description: "SSC, Railways, Indian Post and Agniveer recruitment after Plus Two.",
  },
  {
    slug: "central-university",
    name: "Central University Admissions",
    icon: "graduation-cap",
    description: "Undergraduate admission to central universities through CUET UG.",
  },
];

export const streams: Stream[] = [
  {
    slug: "mbbs-bds-ayush",
    name: "MBBS / BDS / AYUSH",
    category: "Medical & Health Sciences",
    categoryIcon: "stethoscope",
    plusTwoStreams: ["science"],
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
    officialWebsites: [{ label: "NEET UG Portal", url: "https://neet.nta.nic.in/" }],
  },
  {
    slug: "nursing",
    name: "Nursing",
    category: "Medical & Health Sciences",
    categoryIcon: "stethoscope",
    plusTwoStreams: ["science"],
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
    officialWebsites: [
      { label: "State Nursing Admissions (LBS Centre)", url: "https://lbscentre.kerala.gov.in/" },
    ],
  },
  {
    slug: "pharmacy",
    name: "Pharmacy",
    category: "Medical & Health Sciences",
    categoryIcon: "stethoscope",
    plusTwoStreams: ["science"],
    summary: "KEAM and other state entrance exams lead to B.Pharm admissions.",
    exams: ["KEAM", "State Entrance Exams"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [{ label: "KEAM Portal", url: "https://cee.kerala.gov.in/" }],
  },
  {
    slug: "allied-health-radiology",
    name: "Allied Health — Radiology",
    category: "Medical & Health Sciences",
    categoryIcon: "stethoscope",
    plusTwoStreams: ["science"],
    summary: "Diagnostic imaging technology course under Allied Health Sciences.",
    eligibility: "Passed Plus Two with Science.",
    exams: ["Institutional / State Allied Health Admissions"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [
      { label: "Allied Health Admissions (DME Kerala)", url: "https://dme.kerala.gov.in/allied-health-sciencesl/" },
    ],
  },
  {
    slug: "allied-health-mlt",
    name: "Allied Health — MLT (Medical Lab Technology)",
    category: "Medical & Health Sciences",
    categoryIcon: "stethoscope",
    plusTwoStreams: ["science"],
    summary: "Medical Laboratory Technology diploma/degree under Allied Health Sciences.",
    eligibility: "Passed Plus Two with Science.",
    exams: ["Institutional / State Allied Health Admissions"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [
      { label: "Allied Health Admissions (DME Kerala)", url: "https://dme.kerala.gov.in/allied-health-sciencesl/" },
    ],
  },
  {
    slug: "allied-health-cardiac-care",
    name: "Allied Health — Cardiac Care Technology",
    category: "Medical & Health Sciences",
    categoryIcon: "stethoscope",
    plusTwoStreams: ["science"],
    summary: "Cardiac care technology course under Allied Health Sciences.",
    eligibility: "Passed Plus Two with Science.",
    exams: ["Institutional / State Allied Health Admissions"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [
      { label: "Allied Health Admissions (DME Kerala)", url: "https://dme.kerala.gov.in/allied-health-sciencesl/" },
    ],
  },
  {
    slug: "allied-health-optometry",
    name: "Allied Health — Optometry",
    category: "Medical & Health Sciences",
    categoryIcon: "stethoscope",
    plusTwoStreams: ["science"],
    summary: "Optometry course under Allied Health Sciences.",
    eligibility: "Passed Plus Two with Science.",
    exams: ["Institutional / State Allied Health Admissions"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [
      { label: "Allied Health Admissions (DME Kerala)", url: "https://dme.kerala.gov.in/allied-health-sciencesl/" },
    ],
  },
  {
    slug: "allied-health-dialysis",
    name: "Allied Health — Dialysis Technology",
    category: "Medical & Health Sciences",
    categoryIcon: "stethoscope",
    plusTwoStreams: ["science"],
    summary: "Dialysis technology course under Allied Health Sciences.",
    eligibility: "Passed Plus Two with Science.",
    exams: ["Institutional / State Allied Health Admissions"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [
      { label: "Allied Health Admissions (DME Kerala)", url: "https://dme.kerala.gov.in/allied-health-sciencesl/" },
    ],
  },
  {
    slug: "allied-health-ot-technology",
    name: "Allied Health — Operation Theatre Technology",
    category: "Medical & Health Sciences",
    categoryIcon: "stethoscope",
    plusTwoStreams: ["science"],
    summary: "Operation Theatre technology course under Allied Health Sciences.",
    eligibility: "Passed Plus Two with Science.",
    exams: ["Institutional / State Allied Health Admissions"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [
      { label: "Allied Health Admissions (DME Kerala)", url: "https://dme.kerala.gov.in/allied-health-sciencesl/" },
    ],
  },
  {
    slug: "allied-health-physiotherapy",
    name: "Allied Health — Physiotherapy",
    category: "Medical & Health Sciences",
    categoryIcon: "stethoscope",
    plusTwoStreams: ["science"],
    summary: "Physiotherapy course under Allied Health Sciences.",
    eligibility: "Passed Plus Two with Science.",
    exams: ["Institutional / State Allied Health Admissions"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [
      { label: "Allied Health Admissions (DME Kerala)", url: "https://dme.kerala.gov.in/allied-health-sciencesl/" },
    ],
  },
  {
    slug: "btech",
    name: "BTech / BE",
    category: "Engineering & Technology",
    categoryIcon: "gear",
    plusTwoStreams: ["science"],
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
      { label: "JEE Main", url: "https://jeemain.nta.nic.in/" },
      { label: "JEE Advanced", url: "https://jeeadv.ac.in/" },
      { label: "KEAM", url: "https://cee.kerala.gov.in/" },
    ],
  },
  {
    slug: "commerce-management",
    name: "BCom / BBA / Integrated Programmes",
    category: "Commerce & Management",
    categoryIcon: "briefcase",
    plusTwoStreams: ["commerce", "science"],
    summary: "CUET UG and management aptitude tests open the door to commerce degrees.",
    exams: ["CUET UG", "IPMAT", "SET", "Christ Entrance Test"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Email ID"],
    officialWebsites: [{ label: "CUET Portal", url: "https://cuet.nta.nic.in/" }],
  },
  {
    slug: "llb",
    name: "LLB (Integrated)",
    category: "Law",
    categoryIcon: "scale-balanced",
    plusTwoStreams: ["science", "commerce", "humanities"],
    summary: "CLAT, AILET and KLEE lead to 5-year integrated law programmes.",
    exams: ["CLAT", "AILET", "KLEE"],
    documents: ["Aadhaar", "Plus Two Certificate", "Photo", "Signature"],
    officialWebsites: [
      { label: "CLAT", url: "https://consortiumofnlus.ac.in/" },
      { label: "AILET", url: "https://nludelhi.ac.in/admission/ailet/" },
      { label: "KLEE", url: "https://cee.kerala.gov.in/" },
    ],
  },
  {
    slug: "pilot",
    name: "Pilot",
    category: "Aviation",
    categoryIcon: "plane",
    plusTwoStreams: ["science"],
    summary: "Commercial pilot training regulated by DGCA, ending in a CPL.",
    eligibility: "Passed Plus Two with Physics and Mathematics; medical fitness required.",
    exams: ["DGCA Examinations", "CPL Requirements"],
    documents: [
      "Aadhaar",
      "Passport",
      "Medical Fitness Certificate",
      "Plus Two Science",
    ],
    officialWebsites: [{ label: "DGCA", url: "https://www.dgca.gov.in/" }],
  },
  {
    slug: "defence",
    name: "Army / Navy / Air Force",
    category: "Defence",
    categoryIcon: "shield-halved",
    plusTwoStreams: ["science", "commerce", "humanities"],
    summary: "NDA, Agniveer and AFCAT are the main entry routes into the armed forces.",
    exams: ["NDA", "Agniveer", "AFCAT"],
    documents: [
      "Aadhaar",
      "SSLC Certificate",
      "Plus Two Certificate",
      "Domicile Certificate (where required)",
    ],
    officialWebsites: [
      { label: "NDA (UPSC)", url: "https://upsc.gov.in/examinations/National-Defence-Academy-NDA-Exam" },
      { label: "Agniveer", url: "https://joinindianarmy.nic.in/" },
      { label: "AFCAT", url: "https://afcat.cdac.in/AFCAT/" },
    ],
  },
  {
    slug: "teaching",
    name: "Teaching",
    category: "Teaching",
    categoryIcon: "chalkboard-user",
    plusTwoStreams: ["science", "commerce", "humanities"],
    summary: "CUET and integrated B.Ed admissions lead into teaching, backed by KTET/CTET eligibility tests.",
    exams: ["CUET", "Integrated B.Ed Admissions", "KTET", "CTET"],
    documents: ["Aadhaar", "Plus Two Marksheet", "Photo", "Signature"],
    officialWebsites: [
      { label: "CUET Portal", url: "https://cuet.nta.nic.in/" },
      { label: "KTET", url: "https://ktet.kerala.gov.in/" },
      { label: "CTET", url: "https://ctet.nic.in/" },
    ],
  },
  {
    slug: "government-jobs",
    name: "Government Jobs (After Plus Two)",
    category: "Government Jobs",
    categoryIcon: "landmark",
    plusTwoStreams: ["science", "commerce", "humanities"],
    summary: "SSC, Railways, Indian Post and Agniveer recruitment open directly after Plus Two.",
    exams: ["SSC CHSL", "SSC MTS", "Railway Recruitment", "Indian Post", "Agniveer"],
    documents: ["Aadhaar", "Photo", "Signature", "Educational Certificates"],
    officialWebsites: [
      { label: "SSC", url: "https://ssc.gov.in/" },
      { label: "Railway Recruitment Board", url: "https://rrb.indianrailways.gov.in/" },
      { label: "India Post", url: "https://indiapostgdsonline.gov.in/" },
    ],
  },
  {
    slug: "cuet",
    name: "Central University Admissions",
    category: "Central University Admissions",
    categoryIcon: "graduation-cap",
    plusTwoStreams: ["science", "commerce", "humanities"],
    summary: "CUET UG is the single common entrance test for undergraduate admission to central universities.",
    exams: ["CUET UG"],
    documents: [
      "Aadhaar",
      "Photo",
      "Signature",
      "Class 10 Certificate",
      "Plus Two Details",
    ],
    officialWebsites: [{ label: "CUET Portal", url: "https://cuet.nta.nic.in/" }],
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

export function getStreamsByPlusTwoStream(slug: PlusTwoStreamSlug) {
  return streams.filter((s) => s.plusTwoStreams.includes(slug));
}

export type CareerGoal = {
  goal: string;
  icon: IconName;
  streamSlug: string;
};

export const careerGoals: CareerGoal[] = [
  { goal: "Doctor", icon: "stethoscope", streamSlug: "mbbs-bds-ayush" },
  { goal: "Dentist", icon: "tooth", streamSlug: "mbbs-bds-ayush" },
  { goal: "Nurse", icon: "syringe", streamSlug: "nursing" },
  { goal: "Pharmacist", icon: "pills", streamSlug: "pharmacy" },
  {
    goal: "Physiotherapist",
    icon: "hand-holding-medical",
    streamSlug: "allied-health-physiotherapy",
  },
  { goal: "Engineer", icon: "gear", streamSlug: "btech" },
  { goal: "Business Professional", icon: "briefcase", streamSlug: "commerce-management" },
  { goal: "Lawyer", icon: "scale-balanced", streamSlug: "llb" },
  { goal: "Pilot", icon: "plane", streamSlug: "pilot" },
  { goal: "Defence Officer", icon: "shield-halved", streamSlug: "defence" },
  { goal: "Teacher", icon: "chalkboard-user", streamSlug: "teaching" },
  { goal: "Government Employee", icon: "landmark", streamSlug: "government-jobs" },
  { goal: "Central University Aspirant", icon: "graduation-cap", streamSlug: "cuet" },
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

export const contactEmail = "ihsaneducare7@gmail.com";

export type ContactPerson = {
  name: string;
  phone: string;
};

export const contactPersons: ContactPerson[] = [
  { name: "Sinan", phone: "+91 94953 94412" },
  { name: "Aslah", phone: "+91 96058 19333" },
  { name: "Said", phone: "+91 97782 37032" },
  { name: "Shafaf", phone: "+91 80898 40679" },
];

// Used for the site-wide floating WhatsApp button.
export const whatsappNumber = "971567646015";

// Course-related WhatsApp enquiries are routed to Sinan instead.
export const whatsappCourseNumber = "919495394412";

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

// Full tribute written by the community after Ihsan's passing.
export const memorialTribute = {
  title: "ഇഹ്സാൻ – വേർപാടിന്റെ വേദനയിൽ, ഓർമ്മകളുടെ വെളിച്ചത്തിൽ",
  paragraphs: [
    "ജീവിതത്തിൽ ചില വേർപാടുകൾ അപ്രതീക്ഷിതമായിരിക്കും. അത് ഉൾക്കൊള്ളാൻ മനസ്സിന് സമയം വേണ്ടിവരും. ഞങ്ങളുടെ പ്രിയ സുഹൃത്തും സഹയാത്രികനുമായ ഇഹ്സാന്റെ വിയോഗം അത്തരത്തിലൊന്നാണ്. ഒരു ബസ് അപകടം ഞങ്ങളിൽ നിന്ന് അവനെ അകറ്റിയെന്ന വാർത്ത ഇന്നും മനസ്സിനെ വേദനിപ്പിക്കുന്നു.",
    "ഞങ്ങളുടെ കൂട്ടായ്മയുടെ ഭാഗമായിരുന്ന ഇഹ്സാൻ ഒരു സുഹൃത്ത് മാത്രമായിരുന്നില്ല. എല്ലാവരോടും സ്നേഹത്തോടെയും സൗഹൃദത്തോടെയും പെരുമാറിയിരുന്ന, എപ്പോഴും പുഞ്ചിരിയോടെ കാണപ്പെട്ടിരുന്ന ഒരു നല്ല മനുഷ്യനായിരുന്നു. ആരെയെങ്കിലും സഹായിക്കാനോ, ഒരു സന്തോഷ നിമിഷത്തിൽ പങ്കുചേരാനോ, ഒരു വിഷമ ഘട്ടത്തിൽ കൂടെ നിൽക്കാനോ ഇഹ്സാൻ എപ്പോഴും മുന്നിലുണ്ടായിരുന്നു. അതുകൊണ്ടുതന്നെ അവന്റെ വേർപാട് ഞങ്ങളുടെ ഓരോരുത്തരുടെയും ഹൃദയത്തിൽ വലിയൊരു ശൂന്യതയാണ് സൃഷ്ടിച്ചിരിക്കുന്നത്.",
    "ഒരുമിച്ച് ചിലവഴിച്ച നിമിഷങ്ങൾ, പങ്കുവെച്ച ചിരികൾ, സൗഹൃദത്തിന്റെ മധുരമുള്ള ഓർമ്മകൾ—ഇന്നെല്ലാം മനസ്സിലൂടെ കടന്നുപോകുമ്പോൾ അവൻ ഞങ്ങളോടൊപ്പം തന്നെയുണ്ടെന്ന് തോന്നുന്നു. പക്ഷേ യാഥാർത്ഥ്യം അവൻ ഇനി ഞങ്ങളോടൊപ്പമില്ല എന്നതാണ്. ആ സത്യം അംഗീകരിക്കാൻ ഇന്നും പ്രയാസമാണ്.",
    "ജീവിതം എത്ര നിസ്സാരവും അനിശ്ചിതവുമാണെന്ന് ഇഹ്സാന്റെ വേർപാട് നമ്മെ വീണ്ടും ഓർമ്മിപ്പിക്കുന്നു. ഇന്നലെ വരെ നമ്മോടൊപ്പം സംസാരിച്ചും ചിരിച്ചും നടന്ന ഒരാൾ ഇന്ന് ഓർമ്മകളായി മാറിയിരിക്കുന്നു. എന്നാൽ നല്ല മനുഷ്യർ ഒരിക്കലും പൂർണമായി അപ്രത്യക്ഷരാകില്ല; അവർ മറ്റുള്ളവരുടെ മനസ്സുകളിൽ സൃഷ്ടിച്ച സ്നേഹത്തിലൂടെയും നന്മകളിലൂടെയും എന്നും ജീവിക്കും.",
    "പ്രിയ ഇഹ്സാൻ, നീ ഞങ്ങളിൽ നിന്ന് അകന്നുപോയെങ്കിലും നിന്റെ ഓർമ്മകൾ എന്നും ഞങ്ങളോടൊപ്പമുണ്ടാകും. നിന്റെ പുഞ്ചിരിയും സൗഹൃദവും സ്നേഹവും ഞങ്ങളുടെ ഹൃദയങ്ങളിൽ എന്നും നിലനിൽക്കും. നിന്റെ വേർപാട് ഞങ്ങൾക്ക് തീരാനഷ്ടമാണ്.",
    "അല്ലാഹു നിന്റെ എല്ലാ പാപങ്ങളും പൊറുത്ത് നൽകി, ഖബർ ജീവിതം വിശാലമാക്കി, ജന്നത്തുൽ ഫിർദൗസ് നൽകി അനുഗ്രഹിക്കട്ടെ. നിന്റെ കുടുംബത്തിനും പ്രിയപ്പെട്ടവർക്കും ഈ ദുഃഖം സഹിക്കാനുള്ള ക്ഷമയും കരുത്തും നൽകട്ടെ.",
  ],
  quote:
    "ഓർമ്മകളിൽ ജീവിക്കുന്നവർ ഒരിക്കലും മരിക്കുന്നില്ല; അവർ സ്നേഹിച്ച ഹൃദയങ്ങളിൽ എന്നും നിലനിൽക്കും.",
  closing:
    "പ്രിയ ഇഹ്സാന് ആദരാഞ്ജലികൾ… അല്ലാഹു മഗ്ഫിറത്തും ജന്നത്തുല്‍ ഫിര്‍ദൗസും നല്‍കി അനുഗ്രഹിക്കട്ടെ. ആമീൻ.",
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
