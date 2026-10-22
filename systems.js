// Edit this list to add, remove or reorder tiles. No build step: save and push to main.
//
// icon:   "app" | "phone" | "bot" | "card" | "form" | "clinic" | "code" | "grid" | "globe" | "billing" | "spark"
// status: "live"     — public, ready to use
//         "internal" — AWS service reachable by IP (may need the clinic network / VPN)
//         "soon"     — placeholder, no link yet
// links:  optional quick links shown inside the tile
window.HELIXONA_SYSTEMS = [
  {
    group: "Systems",
    items: [
      {
        name: "Bot administration",
        icon: "bot",
        description: "Control panel for the eClinicalWorks connector bots: queue jobs, watch each run, review results and handle exceptions.",
        url: "http://54.189.175.233:5050/",
        status: "internal",
        tags: ["aws", "ops", "eCW connector"],
        links: [
          { label: "Checks", url: "http://54.189.175.233:5050/checks" },
          { label: "Audit", url: "http://54.189.175.233:5050/audit" },
        ],
      },
      {
        name: "Audit",
        icon: "form",
        description: "Complete audit trail of every bot action in eClinicalWorks: what was written, when, by which job, and what was verified.",
        url: "http://54.189.175.233:5050/audit",
        status: "internal",
        tags: ["aws", "ops", "eCW connector"],
      },
      {
        name: "Billing dashboard",
        icon: "billing",
        description: "Claim-level revenue, payments and aging from eClinicalWorks, by period, payer, provider and service.",
        url: "https://crpozo.github.io/helixona-billing-dashboard/",
        status: "live",
        tags: ["finance", "eCW", "dashboard"],
        links: [
          { label: "Source", url: "https://github.com/crpozo/helixona-billing-dashboard" },
        ],
      },
      {
        name: "Checks",
        icon: "grid",
        description: "Health checks for the connector: eCW access, read-back of notes and appointments, and the latest result of each.",
        url: "http://54.189.175.233:5050/checks",
        status: "internal",
        tags: ["aws", "ops", "eCW connector"],
      },
    ],
  },
  {
    group: "AI",
    items: [
      {
        name: "Helixona AI",
        icon: "spark",
        description: "Private AI assistant built on Claude, HIPAA compliant, for clinical and operational questions, drafting and summaries.",
        url: "https://ai.helixona.com/",
        status: "live",
        tags: ["ai", "assistant"],
      },
    ],
  },
  {
    group: "Website",
    items: [
      {
        name: "helixona.com",
        icon: "globe",
        description: "The public website for patients and inquiries: services, the Complex Chronic program and contact.",
        url: "https://helixona.com/",
        status: "live",
        tags: ["public", "website"],
      },
    ],
  },
  {
    group: "Mockups",
    items: [
      {
        name: "Complex Chronic Program",
        icon: "app",
        description: "Clickable prototype of the nine-month program app: intake, surveys, registry, booking and payments. Sample data only.",
        url: "https://crpozo.github.io/Helixona-Complex-Chronic-Program/",
        status: "live",
        tags: ["patient", "staff", "mockup"],
        links: [
          { label: "All screens", url: "https://crpozo.github.io/Helixona-Complex-Chronic-Program/#/screens" },
          { label: "Patient", url: "https://crpozo.github.io/Helixona-Complex-Chronic-Program/#/patient/home" },
          { label: "Staff", url: "https://crpozo.github.io/Helixona-Complex-Chronic-Program/#/staff/intake-review" },
        ],
      },
    ],
  },
];
