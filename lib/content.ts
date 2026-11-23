/* ------------------------------------------------------------------ *
 *  Site content — Ayaan Mandelia
 *
 *  Every fact here is verified. Sources are recorded in SOURCE_INVENTORY.md.
 *  Where something is not verifiable it is left out and logged in
 *  CONTENT_GAPS.md rather than invented.
 *
 *  IMAGES: no real photography exists yet. Each ImageSpec is a brief for a
 *  photograph still to be taken. Until `src` is set, <ImageSlot> renders
 *  nothing in production and a quiet guide in development.
 * ------------------------------------------------------------------ */

export interface ImageSpec {
  /** Stable id, cross-referenced in ASSET_SHOTLIST.md. Becomes the filename. */
  id: string;
  /** e.g. "/images/portrait-dubai.jpg" once supplied. */
  src?: string;
  alt?: string;
  page: string;
  section: string;
  subject: string;
  orientation: "portrait" | "landscape" | "square";
  ratio: string;
  crop: string;
  mood: string;
  lighting: string;
  composition: string;
  purpose: string;
  /** Where an existing photo might already exist. */
  suggestedSource?: string;
}

/* ── Navigation ───────────────────────────────────────────────────── */

export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

export const navLinks: NavLink[] = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Notes", href: "/notes" },
  { label: "Off Script", href: "/off-script" },
  { label: "Timeline", href: "/timeline" },
];

export const contact = {
  email: "ayaanmandelia@aankagroup.com",
  instagram: "ayaan.offscript",
  location: "Dubai, United Arab Emirates",
};

/**
 * Social profiles. Only entries with a `url` are rendered anywhere, so an
 * unfilled row is invisible rather than a broken link.
 * TODO: personal Instagram handle and LinkedIn URL needed from Ayaan.
 */
export interface Social {
  label: string;
  handle: string;
  url: string;
}

export const socials: Social[] = [
  { label: "Off Script", handle: "@ayaan.offscript", url: "https://instagram.com/ayaan.offscript" },
  { label: "Instagram", handle: "", url: "" },
  { label: "LinkedIn", handle: "", url: "" },
];

export const liveSocials = socials.filter((s) => s.url && s.handle);

/* ── Home: opening ────────────────────────────────────────────────── */

export const intro = {
  name: "Ayaan Mandelia",
  standfirst: "Dubai",
  lead:
    "I’m 15, the world’s youngest ACCA affiliate and Guinness World Records title holder for youngest chartered accountant (male). I finished the ACCA exams in July 2026. It was never about accounting. It was a means to an end, a way to be taken seriously, to prove something to myself, and to leave school on my own terms. Most of my week now goes to my family’s group in Dubai, AANKA, on reporting, websites and AI tools. The rest goes to the thing I don’t think a machine will ever do for me. Taste.",
  /** Small, checkable facts. Kept to four so the row stays readable on laptops. */
  facts: [
    { value: "ACCA Affiliate", label: "Completed at 15" },
    { value: "80 / 75", label: "AFM · SBL" },
    { value: "7", label: "AANKA businesses" },
    { value: "Sep 2025", label: "Working since" },
  ],
};

export const heroImage: ImageSpec = {
  id: "home-portrait",
  page: "Home",
  section: "Opening",
  subject: "Ayaan, half-length, in a Dubai setting",
  orientation: "landscape",
  ratio: "16 / 10",
  crop: "Half-length, subject left or right of centre, generous negative space for the headline to sit against",
  mood: "Composed, direct, unhurried — not corporate headshot, not candid snapshot",
  lighting: "Natural, late afternoon; soft directional light, no hard flash",
  composition: "Architectural background — a clean façade, stair or window wall. Keep the background quiet and geometric",
  purpose: "Puts a face to the name in the first screen and anchors the whole page",
  suggestedSource: "New Year photo already selected for the Off Script profile may work as a starting point",
};

/* ── Home: current focus ──────────────────────────────────────────── */

export const currentFocus = {
  title: "What I’m doing now",
  updated: "July 2026",
  items: [
    {
      label: "Building",
      text: "Rebuilding decovibesdubai.com, a portfolio-led site for the group’s interiors company.",
    },
    {
      label: "Waiting on",
      text: "The Oxford Brookes result. The research project went in this May.",
    },
    {
      label: "Learning",
      text: "AI systems, agents and automations, mostly in Claude Code.",
    },
    {
      label: "Filming",
      text: "Off Script. The first pieces are shot, more to come.",
    },
  ],
};

/* ── Home + Projects: selected work ───────────────────────────────── */

export interface Work {
  slug: string;
  kicker: string;
  title: string;
  summary: string;
  /** Longer text used on the Projects page only. */
  detail?: string;
  meta?: string;
  /** Controls prominence on the homepage. */
  weight: "lead" | "major" | "supporting";
  image?: ImageSpec;
}

export const work: Work[] = [
  {
    slug: "aanka",
    kicker: "AANKA Group",
    title: "Seven businesses, one week at a time",
    summary:
      "My family’s group has been running since 2014 across food, beauty and wellness, interiors and construction. That’s Khau Galli, House of Zaika, three Cutting Edge salons and a spa, DecoVibes and AANKA Contracting. Since September 2025 I’ve worked across it, mostly tracking and reporting the numbers, and increasingly the digital and brand side.",
    detail:
      "I’d rather be accurate about this than inflate it. I watch, I flag, I build the tools. I don’t run the floor. The part I’d keep is the breadth. Being across seven businesses at once, you learn quickly which problems belong to one shop and which are the same everywhere. Both my parents are chartered accountants and both run the group, so the plan wasn’t mine to begin with. I just turned out to be good at executing it.",
    meta: "Sep 2025 – present · Dubai & Sharjah",
    weight: "lead",
    image: {
      id: "work-aanka",
      page: "Home / Projects",
      section: "Selected work — AANKA",
      subject: "One of the group's spaces — a Khau Galli counter, a Cutting Edge interior, or a DecoVibes fit-out",
      orientation: "landscape",
      ratio: "3 / 2",
      crop: "Wide enough to read the room; avoid logos filling the frame",
      mood: "Warm, working, real — a place mid-service rather than an empty showroom",
      lighting: "Available light; warm interior tones welcome",
      composition: "Strong architectural lines, one human element if possible",
      purpose: "Gives the group a face instead of a list of names",
      suggestedSource: "DecoVibes has a large local photo and video bank already available",
    },
  },
  {
    slug: "websites",
    kicker: "Design & build",
    title: "Websites and brand work",
    summary:
      "I build and host the group’s sites, and support the brand and digital-presence work around them. Right now that means rebuilding DecoVibes as a dark, portfolio-led site, keeping aankagroup.com running, and this site. I work in Next.js with Claude Code, and read a lot more design than I write code.",
    detail:
      "The DecoVibes brief is the most interesting one. Ten years of work and two hundred projects, with an in-house 7,000 sq ft joinery factory that most competitors don’t have, and none of it visible online because the old site is down. It’s a dark, portfolio-led build. The work is luxury interiors, so the site should feel like walking into one, not like reading a brochure.",
    meta: "decovibesdubai.com · aankagroup.com · this site",
    weight: "major",
    image: {
      id: "work-websites",
      page: "Home / Projects",
      section: "Selected work — websites",
      subject: "A site design on screen, in context",
      orientation: "landscape",
      ratio: "16 / 10",
      crop: "Screen fills most of the frame; keep desk clutter out",
      mood: "Clean, considered, modern",
      lighting: "Soft daylight; avoid screen glare",
      composition: "Laptop three-quarter or straight-on screenshot; leave margin around the UI",
      purpose: "Shows the design work as work, not as a claim",
      suggestedSource: "Screen recording or export of the DecoVibes build in progress",
    },
  },
  {
    slug: "menus",
    kicker: "Operations",
    title: "A thousand menu items, standardised",
    summary:
      "I reviewed and cleaned roughly 900–1,000 menu items across the restaurant branches and the delivery platforms, finding duplicates, pricing mismatches and availability gaps. Tedious, and the sort of thing that quietly breaks a business if nobody does it.",
    detail:
      "Delivery aggregators each hold their own copy of a menu, so the same dish drifts into three different prices and two different names without anyone deciding it should. The fix is not clever. List everything, compare it, agree one version, push it back out. The useful part was building the habit of checking rather than assuming.",
    meta: "Across branches and delivery platforms",
    weight: "supporting",
  },
  {
    slug: "reporting",
    kicker: "Systems",
    title: "Nightly reporting, and an accounting prototype",
    summary:
      "Two things run on a schedule. A nightly sales report for the restaurants that pulls from the POS and posts the numbers to WhatsApp, and the same idea for the salons. Separately, I designed and tested a QuickBooks-focused workflow that reads invoices, allocates them to a branch, flags duplicates and adds review controls. It’s a prototype, not a rollout.",
    detail:
      "The reports are the useful ones. They exist because people were asking the same question every morning. The accounting workflow is honestly still an experiment. It works on the cases I’ve tested, and it is not running the books. I’d rather say that than oversell it.",
    meta: "Python · POS APIs · WhatsApp · QuickBooks",
    weight: "supporting",
    image: {
      id: "work-reporting",
      page: "Projects",
      section: "Selected work — systems",
      subject: "The accounting workflow or the nightly report, on screen",
      orientation: "landscape",
      ratio: "16 / 10",
      crop: "Tight on the interface",
      mood: "Precise, technical, plain",
      lighting: "Screen capture",
      composition: "An invoice being read into structured fields, or the report output",
      purpose: "Evidence that the systems work is real",
      suggestedSource: "Screenshot — redact supplier names and figures before use",
    },
  },
];

/* ── Home: education ──────────────────────────────────────────────── */

export const education = {
  kicker: "Education",
  title: "The world’s youngest ACCA affiliate",
  body:
    "I started the ACCA in November 2024 and completed the exams at 15, becoming the world’s youngest ACCA affiliate. I also hold the Guinness World Records title for youngest chartered accountant (male), recorded at 15 years and three days on 13 July 2026 in Dubai. I passed every Strategic Professional exam at the first attempt, 80% in Advanced Financial Management and 75% in Strategic Business Leader, and also completed Strategic Business Reporting and Advanced Audit and Assurance. My mother and father are both chartered accountants and former Big Four, so I had good people to ask.",
  aside:
    "Alongside it I took the Oxford Brookes BSc (Hons) in Applied Accounting. The research project went in this May; the result is still to come. I left Jumeirah College part-way through Year 10, in March 2026, to do this full time.",
  results: [
    { label: "Advanced Financial Management", value: "80%" },
    { label: "Strategic Business Leader", value: "75%" },
    { label: "Strategic Professional papers", value: "All first attempt" },
    { label: "Oxford Brookes BSc", value: "Result pending" },
  ],
};

/* ── Home: Off Script ─────────────────────────────────────────────── */

export const offScript = {
  kicker: "Off Script",
  title: "Filming the work as it happens",
  body:
    "Off Script is the account I make about the actual work, what I’m building, what broke, what the exams were really like. Documentary rather than advice. The first piece was filmed in June. More are on the way.",
  handle: "ayaan.offscript",
  url: "https://instagram.com/ayaan.offscript",
  image: {
    id: "offscript-still",
    page: "Home / Off Script",
    section: "Off Script",
    subject: "A frame from filming, or the setup itself",
    orientation: "portrait",
    ratio: "4 / 5",
    crop: "Vertical, to match the format it's shot in",
    mood: "Behind-the-scenes, unpolished on purpose",
    lighting: "Whatever the room has — this should not look staged",
    composition: "Camera, phone or tripod in frame, or a still mid-take",
    purpose: "Makes the account feel like something being made, not advertised",
    suggestedSource: "Stills already exist from the June filming session",
  } satisfies ImageSpec,
};

/* ── Home: travel ─────────────────────────────────────────────────── */

export const travel = {
  kicker: "Travel",
  title: "Two weeks between Nice and Milan",
  body:
    "Two weeks in July. Nice as a base, then Milan. Èze, Villefranche, Cannes, Antibes, Monaco, Saint-Tropez, and Lake Como on the way back out. I turned 15 while we were in Monaco. Milan was mostly Brera and the Quadrilatero d’Oro, which is a polite way of saying it was mostly shops.",
  image: {
    id: "travel-riviera",
    page: "Home / Off Script",
    section: "Travel",
    subject: "The Riviera coast, or a Milan street",
    orientation: "landscape",
    ratio: "3 / 2",
    crop: "Wide, with a clear foreground and a horizon",
    mood: "Warm, unhurried, holiday without being a holiday snap",
    lighting: "Golden hour or early evening",
    composition: "Coastline, harbour, or an arcade in Milan; keep people small in frame",
    purpose: "The single strongest image of life outside work",
    suggestedSource: "Photos from the 5–19 July 2026 trip",
  } satisfies ImageSpec,
};

/* ── Home: taste ──────────────────────────────────────────────────── */

export const taste = {
  kicker: "Taste",
  title: "The part I can’t automate",
  body:
    "I’ll be honest and call it a hobby, but I think it’s the most valuable thing I have. As AI takes the technical work (accounting, admin, the middle of most jobs), taste is what appreciates. Mine isn’t quiet or minimal. It’s dark, warm-lit, maximalist but disciplined. Think the register of the Sabyasachi store, jewel colours, ornament everywhere, nothing pale. I buy cheap clothes because I don’t like repeating outfits, and spend real money on shoes because I do repeat those. I want scale that calms you rather than shouts. The Burj Al Arab feeling, expansive but grounding. And I can tell you exactly what I hate, which is usually the faster route to what I like.",
  references: ["Sabyasachi", "Christian Louboutin", "LV × Murakami", "Burj Al Arab", "Couture, not marketing"],
  image: {
    id: "taste-object",
    page: "Home / Off Script",
    section: "Taste",
    subject: "One object, shot properly — a garment detail, a bottle, a book, a piece of packaging",
    orientation: "square",
    ratio: "1 / 1",
    crop: "Close. One object, filling the frame, nothing else competing",
    mood: "Still-life, quiet, considered",
    lighting: "Soft directional daylight; one clean shadow",
    composition: "Object centred or on a third against a plain warm surface",
    purpose: "Proves the interest in objects and clothes rather than just stating it",
    suggestedSource: "Something Ayaan actually owns and uses — a bottle of Ralph Lauren Red, a jacket detail, a notebook",
  } satisfies ImageSpec,
};

/* ── Home: a note ─────────────────────────────────────────────────── */

export const featuredNote = {
  kicker: "Note",
  title: "The boring things first",
  body:
    "Most of what I’ve done at AANKA is unglamorous. Matching prices across delivery apps, agreeing one version of a menu, making a report send itself so nobody has to ask. None of it is clever. But you cannot improve a number you cannot see, and almost every interesting problem I’ve been handed turned out to be a boring problem underneath.",
  href: "/notes",
};

/* ── Timeline ─────────────────────────────────────────────────────── */

export interface Milestone {
  when: string;
  what: string;
  detail?: string;
}

export const milestones: Milestone[] = [
  { when: "2011", what: "Born in Dubai." },
  {
    when: "Years 1–5",
    what: "GEMS Modern Academy.",
    detail: "Placed fourth nationally in a general knowledge competition in Year 3. Started a school clothing drive in Year 5, around 150 kg collected and sent to charities in India.",
  },
  {
    when: "Years 6–7",
    what: "Dubai International Academy, Emirates Hills.",
    detail: "Head of House for Primary in Year 6. Completed the Junior Duke Award.",
  },
  {
    when: "Years 8–10",
    what: "Jumeirah College.",
    detail: "A lot of drama alongside it, school plays and productions.",
  },
  { when: "Nov 2024", what: "Started the ACCA." },
  { when: "Sep 2025", what: "Began working across AANKA Group, on reporting, digital and brand." },
  { when: "Mar 2026", what: "Left Jumeirah College part-way through Year 10 to work and study full time." },
  { when: "May 2026", what: "Submitted the Oxford Brookes research project. Result still pending." },
  { when: "Jun 2026", what: "Sat the final ACCA papers. Filmed the first Off Script piece." },
  {
    when: "Jul 2026",
    what: "Became the world’s youngest ACCA affiliate, at 15.",
    detail: "Completed the ACCA exams after starting at 13. Two weeks in France and Italy in the same month.",
  },
  {
    when: "13 Jul 2026",
    what: "Guinness World Records: youngest chartered accountant (male).",
    detail: "The official record names Ayaan Mandelia as the title holder at 15 years and three days, achieved in Dubai, United Arab Emirates. My professional status is ACCA Affiliate; full membership is a separate milestone.",
  },
];

/* ── About ────────────────────────────────────────────────────────── */

export const about = {
  title: "About",
  lead: "I’m Ayaan Mandelia, 15, born and living in Dubai.",
  body: [
    "I’m the world’s youngest ACCA affiliate and hold the Guinness World Records title for youngest chartered accountant (male). I started the ACCA in November 2024 and passed every Strategic Professional paper first time. Guinness records my achievement in Dubai on 13 July 2026, at 15 years and three days. My ACCA status is Affiliate; full ACCA membership is a separate milestone. I also took the Oxford Brookes BSc (Hons) in Applied Accounting. The research project is submitted and the result is pending. In March 2026 I left Jumeirah College part-way through Year 10 to do this full time.",
    "I’ll be straight about why. It wasn’t a passion for accounting. I used to say I’d never be an accountant, which is exactly what I became. It was a means to an end, a way to be taken seriously, to prove to myself that I could, and to leave school on my own terms. The odd thing is that it worked. About halfway through, adults stopped talking over me and started arguing with me instead, and being argued with, it turns out, is the real compliment.",
    "Since September 2025 I’ve worked across AANKA Group, my family’s business in Dubai and Sharjah. Seven businesses across food, beauty and wellness, interiors and construction. I track and report the numbers, and increasingly handle the digital side, the group’s websites, brand and menu work. I don’t run operations, and I’d rather say that plainly than dress it up.",
    "Outside that, I care more about design than software, which is probably obvious from this site. Dark, ornamented, the opposite of minimal. I default to Ralph Lauren Red, spend on shoes rather than clothes, and follow couture more than trends. I spent years on stage before any of the accounting, school drama, and dance with Shiamak Davar’s programme, and it’s still the most useful training I’ve had for talking to a room.",
    "My parents are both chartered accountants and former Big Four professionals, and they built the group I work in. That’s an advantage, and I’d rather use it and say so than pretend I did this alone. What I can’t stand is people who had every door opened for them and act like they walked through walls.",
  ],
  image: {
    id: "about-portrait",
    page: "About",
    section: "About — portrait",
    subject: "Standing portrait of Ayaan",
    orientation: "portrait",
    ratio: "4 / 5",
    crop: "Three-quarter or full length, room around the figure",
    mood: "Calm, warm, natural — closer to a magazine profile than a corporate photo",
    lighting: "Soft window light, one direction, gentle shadows",
    composition: "Plain wall or quiet interior; wardrobe muted and considered",
    purpose: "The main portrait for the site; doubles as a press photo",
    suggestedSource: "Needs a proper shoot — nothing suitable exists yet",
  } satisfies ImageSpec,
};

/* ── Notes ────────────────────────────────────────────────────────── */

export interface Note {
  slug: string;
  title: string;
  date: string;
  standfirst: string;
  body: string[];
}

export const notes: Note[] = [
  {
    slug: "boring-things-first",
    title: "The boring things first",
    date: "July 2026",
    standfirst: "Most of the useful work I’ve done has been unglamorous.",
    body: [
      "Most of what I’ve done at AANKA is unglamorous. Matching prices across delivery apps, agreeing one version of a menu, making a report send itself so nobody has to ask for it. None of it is clever.",
      "But you cannot improve a number you cannot see. Almost every interesting problem I’ve been handed turned out to be a boring problem underneath. A figure nobody owned, a process that existed in someone’s head, a price that had drifted on one platform and not the others.",
      "The temptation with AI is to start at the impressive end. I’ve found the opposite works better. Fix the thing that is merely tedious, prove it holds, then reach for something harder.",
    ],
  },
  {
    slug: "what-exams-taught",
    title: "What the exams actually taught me",
    date: "July 2026",
    standfirst: "Less accounting than you’d think.",
    body: [
      "The ACCA is a lot of technical material, and I’d be lying if I said I remembered all of it. What stayed is narrower and more useful. How to read a set of numbers and work out what question they were built to answer.",
      "Strategic Business Leader was the one that changed how I work. It is not really a test of knowledge. It is a test of whether you can take a badly organised pile of information and produce something a busy person can act on. That is most of my week now.",
      "Doing it outside school also meant nobody set the pace. That is harder than it sounds and it is the part I’d actually recommend to someone considering it.",
    ],
  },
  {
    slug: "taste-is-the-asset",
    title: "The qualification will date. The taste won’t.",
    date: "July 2026",
    standfirst: "I finished an accounting qualification, and I think AI will make most of it unnecessary.",
    body: [
      "I don’t think the ACCA will mean much in fifteen years. AI is going to take a lot of what accountants, managers and admin people do, automate it, or raise the bar so high that the technical part stops being the hard part.",
      "That doesn’t bother me, because the certificate was never the asset. What it proved is that I can hold something difficult for two years and finish it. That doesn’t expire, and neither does the seven-year head start.",
      "What actually appreciates is taste, and the ability to point a machine at the boring ninety per cent while spending your own judgement on the ten per cent that’s left, well enough that the result doesn’t look like it came from a machine. That’s the bet. The exams were just a way of proving I could learn fast enough to make it.",
    ],
  },
  {
    slug: "nobody-locked-a-door",
    title: "Nobody has to lock themselves in a room",
    date: "July 2026",
    standfirst: "On the myth that hard things require a dismantled life.",
    body: [
      "People told me they studied fourteen hours a day for three months and locked themselves away. I think most of that is nonsense. I did the ACCA and kept my weekends, went out the night before exams, went to the mall, never missed a show I was watching.",
      "I won’t pretend it cost nothing. It cost me the art classes I loved, and I still haven’t gone back. But that’s a real, specific price, not the heroic all-or-nothing story people like to tell.",
      "Take a thing as seriously as it needs to be taken, and not one notch more. The people who make it look impossible are usually the ones performing the effort rather than doing the work.",
    ],
  },
];

/* ── Off Script page ──────────────────────────────────────────────── */

export interface Strand {
  id: string;
  title: string;
  body: string;
  /** Present when there is genuinely something to show. */
  image?: ImageSpec;
  /** True when we have no verified material yet — renders as an honest note. */
  awaiting?: boolean;
}

export const strands: Strand[] = [
  {
    id: "travel",
    title: "Travel",
    body:
      "Nice, Èze, Villefranche, Cannes, Antibes, Monaco, Saint-Tropez, then Milan and Lake Como. Two weeks in July, with my family. I turned 15 somewhere in the middle of it. Milan was Brera and the Quadrilatero d’Oro, which is to say it was mostly shops.",
    image: travel.image,
  },
  {
    id: "fashion",
    title: "Clothes",
    body:
      "My rule is simple. I don’t like repeating outfits, so I don’t spend on clothes (Zara, Bershka, Gap). I do repeat shoes, so that’s where the money goes. Statement pieces over a plain base, sleek never chunky, and Indian wear is where I actually take risks (glass, mirror-work, deep colour). The shoes I’d defend are the Louboutin spike high-tops people called expensive Converse. I wore them anyway. And I’d rather talk about couture, the craft and the history, than trends, which are mostly marketing.",
    image: taste.image,
  },
  {
    id: "design",
    title: "Design and interiors",
    body:
      "Through the work more than as a hobby. DecoVibes does luxury interiors and turnkey fit-out with an in-house joinery factory, and rebuilding their site has meant looking hard at how architecture practices present themselves. CK Architecture is the reference I keep returning to.",
  },
  {
    id: "stage",
    title: "Stage",
    body:
      "Before the accounting there were years of it, school plays and productions, and dance with Shiamak Davar’s programme. It is the reason presenting to a room doesn’t frighten me.",
    awaiting: true,
  },
  {
    id: "giving",
    title: "Volunteering",
    body:
      "In Year 5 I started and ran a school clothing drive, around 150 kg collected, sorted and sent to charities in India. Since then I’ve volunteered with the Siddham Charity Organisation on event planning and community work.",
  },
];

/* ── Press / recognition — structure ready, nothing to claim yet ──── */

export const press = {
  title: "Press & recognition",
  note:
    "Ayaan Mandelia is the world’s youngest ACCA affiliate and holds the Guinness World Records title for youngest chartered accountant (male). The official Guinness entry records the achievement in Dubai on 13 July 2026, at 15 years and three days.",
};
