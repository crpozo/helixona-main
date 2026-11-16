// The weekly project tracker shown at tracker.html. No build step: save and push to main.
//
// updated: date of the last weekly review (YYYY-MM-DD), shown at the top of the page.
//
// Each project:
//   name:        project name
//   summary:     one line about what it is (optional)
//   status:      "on-track" | "waiting" | "blocked" | "not-started" | "done" | "tbd"
//   nextSteps:   list of the next concrete steps
//   owner:       who is responsible for the next steps
//   waitingOn:   list of people or things the project is waiting on ([] if nothing)
//   outstanding: list of open items, decisions or questions ([] if nothing)
//   updated:     date this row was last changed (YYYY-MM-DD)
//   url:         link to the system or mockup (optional)
//
// Empty lists show as "To be filled in" until the first review.
window.HELIXONA_TRACKER = {
  updated: "2026-11-16",
  projects: [
    {
      name: "eClinicalWorks connector bots",
      summary: "Bot administration, audit trail and health checks for the eCW connector.",
      status: "tbd",
      nextSteps: [],
      owner: "Carlos",
      waitingOn: [],
      outstanding: [],
      updated: "2026-11-16",
      url: "http://54.189.175.233:5050/",
    },
    {
      name: "Billing dashboard",
      summary: "Claim-level revenue, payments and aging from eClinicalWorks.",
      status: "tbd",
      nextSteps: [],
      owner: "Carlos",
      waitingOn: [],
      outstanding: [],
      updated: "2026-11-16",
      url: "https://crpozo.github.io/helixona-billing-dashboard/",
    },
    {
      name: "Helixona AI",
      summary: "Private, HIPAA compliant AI assistant built on Claude.",
      status: "tbd",
      nextSteps: [],
      owner: "Carlos",
      waitingOn: [],
      outstanding: [],
      updated: "2026-11-16",
      url: "https://ai.helixona.com/",
    },
    {
      name: "helixona.com website",
      summary: "Public website for patients and inquiries.",
      status: "tbd",
      nextSteps: [],
      owner: "Carlos",
      waitingOn: [],
      outstanding: [],
      updated: "2026-11-16",
      url: "https://helixona.com/",
    },
    {
      name: "Helixona EMR (HCOS)",
      summary: "Wireframe of the Helixona EMR clinical screens.",
      status: "tbd",
      nextSteps: [],
      owner: "Carlos",
      waitingOn: [],
      outstanding: [],
      updated: "2026-11-16",
      url: "https://crpozo.github.io/helixona-emr/login.html#/auth-01-signin",
    },
    {
      name: "Complex Chronic Program app",
      summary: "Nine-month program app: intake, surveys, registry, booking and payments.",
      status: "tbd",
      nextSteps: [],
      owner: "Carlos",
      waitingOn: [],
      outstanding: [],
      updated: "2026-11-16",
      url: "https://crpozo.github.io/Helixona-Complex-Chronic-Program/",
    },
  ],
};
