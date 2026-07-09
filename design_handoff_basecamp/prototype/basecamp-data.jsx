// basecamp-data.jsx — seed data shared by the three onboarding variants

const BC_OPERATORS = [
  { name: "Mira Singh",   role: "Chief of staff",       initials: "MS", color: "me",        cadence: "Daily",       owns: 6 },
  { name: "Adetola O.",   role: "VP Engineering",       initials: "AO", color: "summit",    cadence: "Mon · Thu",    owns: 4 },
  { name: "Eleanor W.",   role: "CEO",                  initials: "EW", color: "alpenglow", cadence: "Weekly",      owns: 3 },
  { name: "Jay K.",       role: "Head of Platform",     initials: "JK", color: "summit",    cadence: "Daily",       owns: 5 },
  { name: "Rae K.",       role: "Head of Growth",       initials: "RK", color: "pine",      cadence: "Tue · Fri",    owns: 4 },
  { name: "Tomás D.",     role: "Staff engineer",       initials: "TD", color: "summit",    cadence: "Daily",       owns: 3 },
  { name: "Sana M.",      role: "Head of Design",       initials: "SM", color: "pine",      cadence: "Mon · Wed",    owns: 2 },
  { name: "Bea L.",       role: "Head of People",       initials: "BL", color: "alpenglow", cadence: "Weekly",      owns: 1 },
];

const BC_SUMMITS = [
  { name: "Reliability",     color: "var(--summit-500)",    pct: 38, count: 5 },
  { name: "Growth",          color: "var(--pine-500)",      pct: 22, count: 7 },
  { name: "Foundations",     color: "var(--alpenglow-500)", pct: 64, count: 3 },
];

const BC_STEPS = [
  { id: "summits",   title: "Name your summits",            sub: "Top-level goals for the next 90 days",      time: "2 min",  verb: "Pin",     done: true },
  { id: "operators", title: "Embed your operators",         sub: "Leadership team and their update cadence",  time: "4 min",  verb: "Embed",   done: false, active: true },
  { id: "cadence",   title: "Install the operating week",   sub: "Standing meetings and rituals",             time: "3 min",  verb: "Install", done: false },
  { id: "signals",   title: "Wire your signals",            sub: "What's worth pinging the CoS about",        time: "2 min",  verb: "Lock",    done: false },
  { id: "readahead", title: "First Monday read-ahead",      sub: "Draft this week's briefing",                time: "5 min",  verb: "Ship",    done: false },
];

const BC_RITUALS = [
  { name: "Monday read-ahead",    when: "Mon 8:00 · 30m",  owner: "Mira",     color: "summit", day: 0, start: 8.0,  end: 8.5,  placed: true },
  { name: "Exec standup",         when: "Mon, Wed 9:00 · 30m", owner: "Eleanor", color: "summit", day: 0, start: 9.0,  end: 9.5,  placed: true },
  { name: "Exec standup",         when: "Wed 9:00 · 30m",  owner: "Eleanor",  color: "summit", day: 2, start: 9.0,  end: 9.5,  placed: true, dupOf: "Exec standup" },
  { name: "Eng + design sync",    when: "Tue 14:00 · 45m", owner: "Adetola",  color: "pine",   day: 1, start: 14.0, end: 14.75, placed: true },
  { name: "Growth review",        when: "Thu 11:00 · 60m", owner: "Rae",      color: "pine",   day: 3, start: 11.0, end: 12.0, placed: true },
  { name: "Decisions close-out",  when: "Fri 16:00 · 30m", owner: "Mira",     color: "summit", day: 4, start: 16.0, end: 16.5, placed: true },
  { name: "1:1 — Eleanor",        when: "Tue 10:00 · 30m", owner: "Mira",     color: "gold",   day: 1, start: 10.0, end: 10.5, placed: false, ghost: true },
  { name: "Blocker triage",       when: "Drag onto a day", owner: "—",        color: "gold",   placed: false },
  { name: "Customer call review", when: "Drag onto a day", owner: "—",        color: "pine",   placed: false },
];

const BC_INTERVIEW = {
  locked: [
    { topic: "Summit",   q: "What's the one outcome that would make this year a clear win?",
      a: "Ship enterprise-grade reliability — under 4 nines uptime, SOC 2 Type II, EU launch unblocked." },
    { topic: "Cadence",  q: "When does the leadership team meet today?",
      a: "Mondays at 9. Standups are skipped most weeks because Eleanor travels Mondays. Friday close-outs don't exist yet." },
    { topic: "Owners",   q: "Who runs the operating cadence with you?",
      a: "Adetola for engineering, Rae for growth, Sana for design. Bea owns people but stays out of the cadence." },
    { topic: "Signals",  q: "What's the one thing that, if it slipped, you'd want to know that morning?",
      a: "Anything Adetola owns. Two initiatives stalled at once last quarter and nobody pinged me." },
  ],
  current: {
    eyebrow: "Question 5 of 9",
    q: "What's the one decision your leadership team keeps deferring?",
    help: "Be specific. If multiple, name the one that costs the most to defer another week. The cadence will be designed to force this kind of decision rather than route around it.",
    chips: ["Ship or kill the onboarding video", "PG 17 migration timing", "EU launch DPA scope", "Pricing test sample size"],
  },
  next: [
    { topic: "Signals",  q: "Who's allowed to interrupt your morning view?" },
    { topic: "Briefings", q: "What does Monday's read-ahead need to contain?" },
    { topic: "Handoff",   q: "What does 'engagement complete' look like for you?" },
  ],
};

const BC_CADENCE_PREVIEW = [
  { name: "Monday read-ahead",      cad: "Mon 8:00",        on: true  },
  { name: "Exec standup",           cad: "Mon · Wed",       on: true  },
  { name: "Growth review",          cad: "Thursdays",       on: true  },
  { name: "Decisions close-out",    cad: "Fri 16:00",       on: true  },
  { name: "1:1 — Eleanor",          cad: "Tuesdays",        on: false },
  { name: "Blocker triage",         cad: "—",               on: false },
];

Object.assign(window, {
  BC_OPERATORS, BC_SUMMITS, BC_STEPS, BC_RITUALS, BC_INTERVIEW, BC_CADENCE_PREVIEW,
});
