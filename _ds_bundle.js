/* @ds-bundle: {"format":3,"namespace":"ElevateExecutionDesignSystem_019e29","components":[],"sourceHashes":{"design_handoff_basecamp/prototype/HandoffBasecampCadenceBuilder.jsx":"39b930c0849d","design_handoff_basecamp/prototype/HandoffBasecampShell.jsx":"651e1769322c","design_handoff_basecamp/prototype/HandoffBasecampTrailMap.jsx":"7213269d3f0b","design_handoff_basecamp/prototype/HandoffBasecampWeekGrid.jsx":"2ecc1d7e7355","design_handoff_basecamp/prototype/basecamp-data.jsx":"9d9f671cf9dd","design_handoff_basecamp/prototype/reference/HandoffCommandPalette.jsx":"2ca3b0ff7d2c","design_handoff_basecamp/prototype/reference/HandoffMorningView.jsx":"5e727c50f953","design_handoff_basecamp/prototype/reference/HandoffSidebar.jsx":"9fe862ff258e","design_handoff_basecamp/prototype/reference/HandoffTopBar.jsx":"051606edb753","site/site.js":"1be7420f90e1","ui_kits/app/BasecampCadenceBuilder.jsx":"39b930c0849d","ui_kits/app/BasecampShell.jsx":"651e1769322c","ui_kits/app/BasecampTrailMap.jsx":"7213269d3f0b","ui_kits/app/BasecampWeekGrid.jsx":"2ecc1d7e7355","ui_kits/app/CommandPalette.jsx":"2ca3b0ff7d2c","ui_kits/app/DecisionFeed.jsx":"45b3d2ae2a04","ui_kits/app/InitiativeList.jsx":"02db1f4bc1da","ui_kits/app/KPICards.jsx":"aec992d06d8d","ui_kits/app/MorningView.jsx":"5e727c50f953","ui_kits/app/RightRail.jsx":"524e583d50a3","ui_kits/app/Sidebar.jsx":"9fe862ff258e","ui_kits/app/TopBar.jsx":"051606edb753","ui_kits/app/basecamp-data.jsx":"9d9f671cf9dd","ui_kits/app/design-canvas.jsx":"c9095ef15594","ui_kits/app/tweaks-panel.jsx":"22c052960f83","ui_kits/case_study/ApproachTimeline.jsx":"b0bc50a1b7cb","ui_kits/case_study/CaseHero.jsx":"626f67f29d2d","ui_kits/case_study/OutcomesGrid.jsx":"32efc38a6846","ui_kits/case_study/PullQuote.jsx":"04bd3b22f88d","ui_kits/case_study/RelatedCases.jsx":"0dc45ad98b45","ui_kits/case_study/SituationSection.jsx":"8a8aa7526f40","ui_kits/marketing/CTABanner.jsx":"6d4f198e868f","ui_kits/marketing/FeatureGrid.jsx":"ed0a4653a5f4","ui_kits/marketing/Footer.jsx":"8af8cbe93b8e","ui_kits/marketing/Hero.jsx":"d16c5ad6dbed","ui_kits/marketing/LogoWall.jsx":"42bc4448ffda","ui_kits/marketing/MetricStrip.jsx":"b7b3e1c9c872","ui_kits/marketing/TopNav.jsx":"b5490bd120f7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ElevateExecutionDesignSystem_019e29 = window.ElevateExecutionDesignSystem_019e29 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// design_handoff_basecamp/prototype/HandoffBasecampCadenceBuilder.jsx
try { (() => {
// BasecampCadenceBuilder.jsx — Variant B: interview-driven onboarding.
// The CoS answers one operator-style question at a time. Locked answers
// stack on the left (decision-log feel). The operating week assembles
// live in the right pane.

function VariantB({
  tweaks
}) {
  const STATE_TO_COUNT = {
    empty: 0,
    mid: 4,
    handoff: 9
  };
  const lockedCount = STATE_TO_COUNT[tweaks.state] ?? 4;
  return /*#__PURE__*/React.createElement(React.Fragment, null, tweaks.state === "handoff" && /*#__PURE__*/React.createElement(BasecampHandoffRibbon, null), /*#__PURE__*/React.createElement("div", {
    className: "vb"
  }, /*#__PURE__*/React.createElement(VBLog, {
    locked: BC_INTERVIEW.locked.slice(0, Math.min(lockedCount, BC_INTERVIEW.locked.length)),
    total: BC_INTERVIEW.locked.length + 1 + BC_INTERVIEW.next.length
  }), /*#__PURE__*/React.createElement(VBCenter, {
    state: tweaks.state
  }), /*#__PURE__*/React.createElement(VBPreview, {
    state: tweaks.state
  })));
}

// ----- Left: locked decisions log ------------------------------------------

function VBLog({
  locked,
  total
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vb__log"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vb__log-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vb__log-title"
  }, "Locked decisions"), /*#__PURE__*/React.createElement("span", {
    className: "vb__log-count"
  }, locked.length, " of ", total)), locked.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 16px",
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      color: "var(--fg-3)",
      textAlign: "center",
      background: "var(--granite-50)",
      border: "1px dashed var(--granite-300)",
      borderRadius: 10,
      lineHeight: 1.5
    }
  }, "Nothing locked yet. Each answer becomes a decision on the right when you confirm it \u2014 and a row in the operating week."), locked.map((entry, i) => /*#__PURE__*/React.createElement("article", {
    className: "vb-locked",
    key: i
  }, /*#__PURE__*/React.createElement("button", {
    className: "vb-locked__edit",
    "aria-label": "Edit"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "pencil"
  })), /*#__PURE__*/React.createElement("div", {
    className: "vb-locked__topic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check"
  }), entry.topic), /*#__PURE__*/React.createElement("div", {
    className: "vb-locked__q"
  }, entry.q), /*#__PURE__*/React.createElement("div", {
    className: "vb-locked__a"
  }, entry.a))));
}

// ----- Center: current question --------------------------------------------

function VBCenter({
  state
}) {
  const isHandoff = state === "handoff";
  const data = BC_INTERVIEW.current;
  const [draft, setDraft] = React.useState("");
  const [selectedChip, setSelectedChip] = React.useState(null);
  if (isHandoff) {
    return /*#__PURE__*/React.createElement("div", {
      className: "vb__center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "vb__center-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "vb__center-step"
    }, "Interview complete"), /*#__PURE__*/React.createElement("span", {
      className: "vb__center-skip"
    }, "9 of 9 locked")), /*#__PURE__*/React.createElement("div", {
      className: "vb__center-body",
      style: {
        padding: "56px 32px 32px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vb__q-eyebrow"
    }, "Handoff"), /*#__PURE__*/React.createElement("h1", {
      className: "vb__q"
    }, "The cadence is yours from Monday."), /*#__PURE__*/React.createElement("p", {
      className: "vb__q-help"
    }, "We installed seven rituals and named four operators. Mira owns Monday read-aheads and Friday close-outs. Adetola and Rae each own their weekly review. Decisions are logged the morning of standup; nothing carries past Friday."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "bc-state-tag bc-state-tag--pine"
    }, "7 rituals installed"), /*#__PURE__*/React.createElement("span", {
      className: "bc-state-tag bc-state-tag--pine"
    }, "4 operators embedded"), /*#__PURE__*/React.createElement("span", {
      className: "bc-state-tag bc-state-tag--pine"
    }, "3 summits locked"), /*#__PURE__*/React.createElement("span", {
      className: "bc-state-tag"
    }, "Morning view ready"))), /*#__PURE__*/React.createElement("div", {
      className: "vb__center-foot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "vb__center-foot__hint"
    }, "Engagement runs through Aug 10"), /*#__PURE__*/React.createElement("button", {
      className: "bc-verb-btn"
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right"
    }), "Open morning view")));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "vb__center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vb__center-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vb__center-step"
  }, data.eyebrow), /*#__PURE__*/React.createElement("button", {
    className: "vb__center-skip"
  }, "Skip for now", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "vb__center-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vb__q-eyebrow"
  }, "Cadence design"), /*#__PURE__*/React.createElement("h1", {
    className: "vb__q"
  }, data.q), /*#__PURE__*/React.createElement("p", {
    className: "vb__q-help"
  }, data.help), /*#__PURE__*/React.createElement("div", {
    className: "vb__answer"
  }, /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Type the decision, the people who keep deferring it, and why it costs to defer it another week.",
    value: draft,
    onChange: e => setDraft(e.target.value),
    rows: 4
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 6
    }
  }, "Picked up from this week"), /*#__PURE__*/React.createElement("div", {
    className: "vb__answer-chips"
  }, data.chips.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: `vb-chip ${selectedChip === c ? "vb-chip--on" : ""}`,
    onClick: () => {
      setSelectedChip(c);
      setDraft(d => d ? d : c);
    }
  }, c))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--fg-3)",
      letterSpacing: "0.02em"
    }
  }, "Next: ", BC_INTERVIEW.next.map(n => n.topic).join(" · "))), /*#__PURE__*/React.createElement("div", {
    className: "vb__center-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vb__center-foot__hint"
  }, /*#__PURE__*/React.createElement("kbd", null, "\u2318\u21B5"), " to lock \xB7 ", /*#__PURE__*/React.createElement("kbd", null, "\u2193"), " to defer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "bc-verb-btn bc-verb-btn--ghost"
  }, "Park this question"), /*#__PURE__*/React.createElement("button", {
    className: "bc-verb-btn"
  }, "Lock answer", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  })))));
}

// ----- Right: operating week assembling live -------------------------------

function VBPreview({
  state
}) {
  const isHandoff = state === "handoff";
  const items = isHandoff ? BC_CADENCE_PREVIEW.map(p => ({
    ...p,
    on: true
  })) : BC_CADENCE_PREVIEW;
  return /*#__PURE__*/React.createElement("div", {
    className: "vb__preview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vb__preview-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vb__preview-title"
  }, "Operating week \u2014 emerging"), /*#__PURE__*/React.createElement("span", {
    className: "vb__preview-tag"
  }, isHandoff ? "Locked" : "Drafting")), /*#__PURE__*/React.createElement(VBMiniWeek, {
    state: state
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      paddingTop: 4
    }
  }, "Rituals"), /*#__PURE__*/React.createElement("div", {
    className: "vb__preview-list"
  }, items.map(p => /*#__PURE__*/React.createElement("div", {
    className: `vb__preview-item ${p.on ? "" : "vb__preview-item--pending"}`,
    key: p.name
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.on ? "check" : "circle"
  }), /*#__PURE__*/React.createElement("span", null, p.name), /*#__PURE__*/React.createElement("span", {
    className: "vb__preview-item__cad"
  }, p.cad)))));
}
function VBMiniWeek({
  state
}) {
  const days = ["M", "T", "W", "T", "F"];
  // Hand-picked event placements — represented as percent-of-day band.
  const events = state === "empty" ? [] : [{
    d: 0,
    top: 8,
    h: 10,
    name: "Read-ahead",
    color: "summit"
  }, {
    d: 0,
    top: 22,
    h: 8,
    name: "Standup",
    color: "summit"
  }, {
    d: 1,
    top: 30,
    h: 12,
    name: "Eng sync",
    color: "pine"
  }, {
    d: 2,
    top: 22,
    h: 8,
    name: "Standup",
    color: "summit"
  }, {
    d: 3,
    top: 40,
    h: 14,
    name: "Growth",
    color: "pine"
  }, {
    d: 4,
    top: 78,
    h: 8,
    name: "Close-out",
    color: "summit"
  }];
  const handoffExtras = [{
    d: 1,
    top: 16,
    h: 8,
    name: "1:1 EW",
    color: "gold"
  }, {
    d: 4,
    top: 18,
    h: 10,
    name: "Triage",
    color: "gold"
  }];
  const all = state === "handoff" ? [...events, ...handoffExtras] : events;
  return /*#__PURE__*/React.createElement("div", {
    className: "vb-mini-week"
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    className: "vb-mini-day",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "vb-mini-day__h"
  }, d), /*#__PURE__*/React.createElement("div", {
    className: "vb-mini-day__col"
  }, all.filter(e => e.d === i).map((e, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: `vb-mini-ritual vb-mini-ritual--${e.color}`,
    style: {
      position: "absolute",
      top: `${e.top / 100 * 100}%`,
      height: `${e.h / 100 * 100}%`,
      left: 4,
      right: 4,
      display: "flex",
      alignItems: "center"
    }
  }, e.name))))));
}
window.VariantB = VariantB;
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_basecamp/prototype/HandoffBasecampCadenceBuilder.jsx", error: String((e && e.message) || e) }); }

// design_handoff_basecamp/prototype/HandoffBasecampShell.jsx
try { (() => {
// BasecampShell.jsx — the app shell wrapped around each onboarding variant.
// Sidebar items progressively unlock as the user advances through Basecamp,
// matching the brand's "we install, then hand off" voice.

function BasecampSidebar({
  tweaks,
  completedSteps
}) {
  // Items map to the existing app's IA, but locked until Basecamp installs them.
  const items = [{
    icon: "tent",
    label: "Basecamp",
    active: true,
    tag: tweaks.state === "handoff" ? "DONE" : null
  }, {
    icon: "layout-dashboard",
    label: "Morning view",
    locked: tweaks.state !== "handoff"
  }, {
    icon: "target",
    label: "Initiatives",
    count: completedSteps >= 1 ? 12 : null,
    locked: completedSteps < 1
  }, {
    icon: "check-square",
    label: "Decisions",
    count: completedSteps >= 3 ? 4 : null,
    locked: completedSteps < 3
  }, {
    icon: "users",
    label: "Operators",
    count: completedSteps >= 2 ? 8 : null,
    locked: completedSteps < 2
  }, {
    icon: "calendar",
    label: "Cadence",
    locked: completedSteps < 3
  }];
  const summits = [{
    color: "var(--summit-500)",
    label: "Reliability",
    count: 5
  }, {
    color: "var(--pine-500)",
    label: "Growth",
    count: 7
  }, {
    color: "var(--alpenglow-500)",
    label: "Foundations",
    count: 3
  }];
  const pct = Math.round(completedSteps / 5 * 100);
  return /*#__PURE__*/React.createElement("aside", {
    className: "app-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__brand-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__org"
  }, "Stoney Trail Co."), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__plan"
  }, tweaks.view === "client" ? "Operating cadence" : "Chief of staff · 6 execs")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevrons-up-down",
    className: "app-sidebar__brand-caret"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bc-sidebar__phase"
  }, tweaks.state === "handoff" ? "Engagement · wrapping up" : "Basecamp · setup"), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__search"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Jump to\u2026"
  }), /*#__PURE__*/React.createElement("kbd", null, "\u2318K")), /*#__PURE__*/React.createElement("nav", {
    className: "app-sidebar__nav"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    key: i,
    className: ["app-navitem", it.active ? "app-navitem--active" : "", it.locked ? "app-navitem--locked" : ""].join(" ").trim()
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon
  }), /*#__PURE__*/React.createElement("span", null, it.label), it.tag && /*#__PURE__*/React.createElement("span", {
    className: "app-navitem__tag"
  }, it.tag), it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "app-navitem__count"
  }, it.count), it.locked && !it.tag && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "lock",
    style: {
      marginLeft: "auto",
      width: 12,
      height: 12,
      color: "var(--granite-400)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__section-head"
  }, /*#__PURE__*/React.createElement("span", null, "Summits"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus"
  })), summits.map((s, i) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "app-navitem",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "app-navitem__dot",
    style: {
      background: s.color
    }
  }), /*#__PURE__*/React.createElement("span", null, s.label), /*#__PURE__*/React.createElement("span", {
    className: "app-navitem__count"
  }, s.count)))), /*#__PURE__*/React.createElement("div", {
    className: "bc-sidebar__progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-sidebar__progress-title"
  }, /*#__PURE__*/React.createElement("span", null, "Basecamp"), /*#__PURE__*/React.createElement("span", null, pct, "%")), /*#__PURE__*/React.createElement("div", {
    className: "bc-sidebar__progress-track"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__foot"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "app-navitem"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "settings"
  }), /*#__PURE__*/React.createElement("span", null, "Settings")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "app-navitem"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "life-buoy"
  }), /*#__PURE__*/React.createElement("span", null, "Basecamp guide"))));
}
function BasecampTopBar({
  variantLabel,
  tweaks,
  completedSteps
}) {
  const totalSteps = 5;
  const remaining = totalSteps - completedSteps;
  return /*#__PURE__*/React.createElement("header", {
    className: "app-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-topbar__crumbs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "app-topbar__crumb"
  }, "Stoney Trail Co."), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right"
  }), /*#__PURE__*/React.createElement("span", {
    className: "app-topbar__crumb app-topbar__crumb--current"
  }, "Basecamp \xB7 ", variantLabel), tweaks.state === "handoff" && /*#__PURE__*/React.createElement("span", {
    className: "bc-state-tag bc-state-tag--pine",
    style: {
      marginLeft: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 11,
      height: 11,
      strokeWidth: 2.25
    }
  }), "Handing off")), /*#__PURE__*/React.createElement("div", {
    className: "app-topbar__actions"
  }, tweaks.state !== "handoff" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--fg-3)",
      letterSpacing: "0.02em"
    }
  }, remaining > 0 ? `${remaining} of ${totalSteps} steps remaining` : "Setup complete"), /*#__PURE__*/React.createElement("button", {
    className: "app-iconbtn",
    title: "Notifications"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell"
  }), completedSteps >= 2 && /*#__PURE__*/React.createElement("span", {
    className: "app-iconbtn__dot"
  })), tweaks.view === "operator" && /*#__PURE__*/React.createElement("button", {
    className: "app-btn app-btn--ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "message-square"
  }), "Invite operator"), /*#__PURE__*/React.createElement("button", {
    className: "bc-verb-btn"
  }, tweaks.state === "handoff" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  }), " Go to morning view") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check"
  }), " Save & continue")), /*#__PURE__*/React.createElement("div", {
    className: "app-avatar app-avatar--me"
  }, "MS")));
}

// Hand-off ribbon shown when state === "handoff" (engagement wrapping up).
function BasecampHandoffRibbon() {
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-handoff"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-handoff__icon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bc-handoff__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-handoff__title"
  }, "Basecamp is yours to run."), /*#__PURE__*/React.createElement("div", {
    className: "bc-handoff__sub"
  }, "We've installed the cadence and named the operators. Mira owns it from Friday. The morning view goes live then \u2014 everything below is the snapshot we hand off.")), /*#__PURE__*/React.createElement("button", {
    className: "bc-verb-btn bc-verb-btn--ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "download"
  }), "Export handoff doc"));
}
window.BasecampSidebar = BasecampSidebar;
window.BasecampTopBar = BasecampTopBar;
window.BasecampHandoffRibbon = BasecampHandoffRibbon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_basecamp/prototype/HandoffBasecampShell.jsx", error: String((e && e.message) || e) }); }

// design_handoff_basecamp/prototype/HandoffBasecampTrailMap.jsx
try { (() => {
// BasecampTrailMap.jsx — Variant A: 3-column expedition planner
// Left: vertical step list  ·  Center: active step form  ·  Right: ridgeline progress

function VariantA({
  tweaks
}) {
  const STATE_TO_ACTIVE = {
    empty: 0,
    mid: 1,
    handoff: 4
  };
  const activeIdx = STATE_TO_ACTIVE[tweaks.state] ?? 1;
  const steps = BC_STEPS.map((s, i) => ({
    ...s,
    done: i < activeIdx || tweaks.state === "handoff",
    active: i === activeIdx && tweaks.state !== "handoff"
  }));
  const completed = steps.filter(s => s.done).length;
  const current = steps[activeIdx] || steps[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, tweaks.state === "handoff" && /*#__PURE__*/React.createElement(BasecampHandoffRibbon, null), /*#__PURE__*/React.createElement("div", {
    className: "va"
  }, /*#__PURE__*/React.createElement(VAStepList, {
    steps: steps
  }), /*#__PURE__*/React.createElement(VAPane, {
    step: current,
    steps: steps,
    tweaks: tweaks
  }), /*#__PURE__*/React.createElement(VARail, {
    steps: steps,
    completed: completed
  })));
}
function VAStepList({
  steps
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "va__steps"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: "-0.01em",
      padding: "4px 14px 12px",
      color: "var(--fg-1)"
    }
  }, "The approach"), steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.id
  }, /*#__PURE__*/React.createElement("div", {
    className: ["va-step", s.active ? "va-step--active" : "", s.done ? "va-step--done" : ""].join(" ").trim()
  }, /*#__PURE__*/React.createElement("div", {
    className: "va-step__index"
  }, s.done ? /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check"
  }) : i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "va-step__title"
  }, s.title), /*#__PURE__*/React.createElement("div", {
    className: "va-step__sub"
  }, s.sub)), /*#__PURE__*/React.createElement("div", {
    className: "va-step__time"
  }, s.done ? "done" : s.time)))), /*#__PURE__*/React.createElement("div", {
    className: "va-step__divider"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 14px",
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--fg-3)",
      letterSpacing: "0.02em"
    }
  }, "Estimated 12 min remaining \xB7 we save as you go"));
}
function VAPane({
  step,
  tweaks
}) {
  // We render the "Embed your operators" step's form by default — it's the
  // most representative dense onboarding moment.
  const body = step.id === "operators" ? /*#__PURE__*/React.createElement(VAOperatorsForm, null) : step.id === "summits" ? /*#__PURE__*/React.createElement(VASummitsForm, null) : /*#__PURE__*/React.createElement(VAOperatorsForm, null);
  return /*#__PURE__*/React.createElement("div", {
    className: "va__pane"
  }, /*#__PURE__*/React.createElement("div", {
    className: "va__pane-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "va__pane-eyebrow"
  }, "Step ", BC_STEPS.findIndex(s => s.id === step.id) + 1, " \xB7 ", step.id === "operators" ? "Operators" : step.id), /*#__PURE__*/React.createElement("h1", {
    className: "va__pane-title"
  }, step.title, "."), /*#__PURE__*/React.createElement("p", {
    className: "va__pane-sub"
  }, step.id === "operators" ? "Add the 5–8 people on your leadership team. Pick how often each one reports in — we'll watch for silence past that cadence and surface it as a signal, not a status." : "Each summit is a top-level outcome for the next 90 days. We will not show more than three at once.")), /*#__PURE__*/React.createElement("span", {
    className: "bc-state-tag"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--summit-500)",
      display: "inline-block"
    }
  }), step.verb, " this step")), /*#__PURE__*/React.createElement("div", {
    className: "va__pane-body"
  }, body), /*#__PURE__*/React.createElement("div", {
    className: "va__pane-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "va__pane-foot__note"
  }, "\u2318\u21B5 to ", step.verb.toLowerCase(), " and advance \xB7 esc to step back"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "bc-verb-btn bc-verb-btn--ghost"
  }, "Skip for now"), /*#__PURE__*/React.createElement("button", {
    className: "bc-verb-btn"
  }, step.verb, " 4 operators", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  })))));
}
function VAOperatorsForm() {
  // Show the 4 operators that count as "embedded" + 4 "outside the cadence"
  // — the split is part of the brand voice (we name what we won't do).
  const embedded = BC_OPERATORS.slice(0, 4);
  const adjacent = BC_OPERATORS.slice(4);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "va-divider-row"
  }, /*#__PURE__*/React.createElement("span", null, "Embedded in the cadence")), embedded.map(op => /*#__PURE__*/React.createElement(VAOperatorRow, {
    key: op.name,
    op: op
  })), /*#__PURE__*/React.createElement("div", {
    className: "va-divider-row",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "Adjacent \u2014 gets the read-ahead, not the standup")), adjacent.map(op => /*#__PURE__*/React.createElement(VAOperatorRow, {
    key: op.name,
    op: op,
    muted: true
  })));
}
function VAOperatorRow({
  op,
  muted
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "va-op-row",
    style: muted ? {
      opacity: 0.72
    } : null
  }, /*#__PURE__*/React.createElement("div", {
    className: `app-avatar app-avatar--${op.color}`
  }, op.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "va-op-row__name"
  }, op.name), /*#__PURE__*/React.createElement("div", {
    className: "va-op-row__role"
  }, op.role)), /*#__PURE__*/React.createElement("button", {
    className: "va-op-row__select"
  }, /*#__PURE__*/React.createElement("span", null, op.cadence), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "va-op-row__cadence"
  }, op.owns, " initiatives"));
}
function VASummitsForm() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "va-divider-row"
  }, /*#__PURE__*/React.createElement("span", null, "Top-level outcomes")), BC_SUMMITS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    className: "va-op-row",
    style: {
      gridTemplateColumns: "12px 1fr 100px 120px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: s.color
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "va-op-row__name"
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "va-op-row__role"
  }, s.count, " initiatives mapped")), /*#__PURE__*/React.createElement("div", {
    className: "va-op-row__cadence"
  }, s.pct, "% locked"), /*#__PURE__*/React.createElement("button", {
    className: "va-op-row__select"
  }, /*#__PURE__*/React.createElement("span", null, "Edit"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right"
  })))));
}

// ----- Right rail: ridgeline visualization ----------------------------------

function VARail({
  steps,
  completed
}) {
  // Each step is a marker at a fixed x-percentage along the ridgeline.
  // y is hand-tuned to land each marker on a peak of the front ridge.
  const markers = [{
    x: 8,
    y: 35
  },
  // 1 summits
  {
    x: 26,
    y: 24
  },
  // 2 operators
  {
    x: 46,
    y: 38
  },
  // 3 cadence
  {
    x: 66,
    y: 22
  },
  // 4 signals
  {
    x: 88,
    y: 32
  } // 5 read-ahead
  ];
  return /*#__PURE__*/React.createElement("div", {
    className: "va__rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "va__rail-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "va__rail-title"
  }, "Trail map"), /*#__PURE__*/React.createElement("span", {
    className: "va__rail-tag"
  }, completed, "/5 done")), /*#__PURE__*/React.createElement("div", {
    className: "va__ridge"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 280 220",
    preserveAspectRatio: "none",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 175 L 25 138 L 55 168 L 88 122 L 120 158 L 152 118 L 188 152 L 220 124 L 250 156 L 280 138 L 280 220 L 0 220 Z",
    fill: "var(--summit-500)",
    opacity: "0.16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 200 L 22 168 L 50 188 L 78 148 L 108 180 L 138 142 L 168 178 L 198 138 L 228 174 L 256 150 L 280 174 L 280 220 L 0 220 Z",
    fill: "var(--summit-600)",
    opacity: "0.32"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 220 L 18 196 L 42 208 L 68 184 L 96 204 L 124 178 L 152 200 L 178 174 L 204 200 L 232 184 L 258 204 L 280 192 L 280 220 Z",
    fill: "var(--granite-800)",
    opacity: "0.62"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 22 165 Q 80 130 145 145 Q 200 155 260 138",
    stroke: "var(--granite-400)",
    strokeWidth: "1",
    strokeDasharray: "2 4",
    fill: "none",
    opacity: "0.7"
  })), markers.map((m, i) => {
    const s = steps[i];
    if (!s) return null;
    const klass = s.done ? "va__ridge-marker--done" : s.active ? "va__ridge-marker--active" : "";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `va__ridge-marker ${klass}`,
      style: {
        left: `${m.x}%`,
        top: `${m.y}%`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "va__ridge-marker-dot"
    }), /*#__PURE__*/React.createElement("div", {
      className: "va__ridge-marker-label"
    }, i + 1));
  })), /*#__PURE__*/React.createElement("div", {
    className: "va__rail-summit"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 4
    }
  }, "Pinned summits"), BC_SUMMITS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "va__rail-summit-row",
    key: s.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "va__rail-summit-row__dot",
    style: {
      background: s.color
    }
  }), /*#__PURE__*/React.createElement("span", null, s.name), /*#__PURE__*/React.createElement("span", {
    className: "va__rail-summit-row__count"
  }, s.count)))), /*#__PURE__*/React.createElement("div", {
    className: "va__rail-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "va__rail-foot-line"
  }, /*#__PURE__*/React.createElement("span", null, "Engagement starts"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-1)"
    }
  }, "Mon \xB7 May 18")), /*#__PURE__*/React.createElement("div", {
    className: "va__rail-foot-line",
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "We hand off"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-1)"
    }
  }, "12 weeks \xB7 Aug 10"))));
}
window.VariantA = VariantA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_basecamp/prototype/HandoffBasecampTrailMap.jsx", error: String((e && e.message) || e) }); }

// design_handoff_basecamp/prototype/HandoffBasecampWeekGrid.jsx
try { (() => {
// BasecampWeekGrid.jsx — Variant C: a full Mon–Fri calendar is the canvas.
// Drag rituals from the left library onto the grid. Owners on the right.
// Sticky "Lock the cadence" bar at the bottom is the moment of commit.

function VariantC({
  tweaks
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, tweaks.state === "handoff" && /*#__PURE__*/React.createElement(BasecampHandoffRibbon, null), /*#__PURE__*/React.createElement("div", {
    className: "vc"
  }, /*#__PURE__*/React.createElement(VCLibrary, {
    state: tweaks.state
  }), /*#__PURE__*/React.createElement(VCCalendar, {
    state: tweaks.state
  }), /*#__PURE__*/React.createElement(VCOwners, null), /*#__PURE__*/React.createElement(VCFoot, {
    state: tweaks.state
  })));
}

// ----- Left: rituals library -----------------------------------------------

function VCLibrary({
  state
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "vc__rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vc__rail-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "vc__rail-title"
  }, "Rituals"), /*#__PURE__*/React.createElement("div", {
    className: "vc__rail-sub"
  }, state === "empty" ? "Drag any of these onto the week." : "Six installed. Two to go.")), /*#__PURE__*/React.createElement("div", {
    className: "vc__rail-body"
  }, BC_RITUALS.filter(r => !r.dupOf).map(r => {
    const placed = state === "empty" ? false : r.placed || state === "handoff";
    return /*#__PURE__*/React.createElement("div", {
      key: r.name,
      className: ["vc-ritual", placed ? "vc-ritual--placed" : "", r.color === "pine" ? "vc-ritual--pine" : r.color === "gold" ? "vc-ritual--gold" : ""].join(" ").trim()
    }, /*#__PURE__*/React.createElement("span", {
      className: "vc-ritual__color"
    }), /*#__PURE__*/React.createElement("span", {
      className: "vc-ritual__grip"
    }, "\u22EE\u22EE"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vc-ritual__name"
    }, r.name), /*#__PURE__*/React.createElement("div", {
      className: "vc-ritual__meta"
    }, placed ? `installed · ${r.when.split("·")[0].trim()}` : r.when)), placed && /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check",
      style: {
        width: 14,
        height: 14,
        color: "var(--pine-600)",
        strokeWidth: 2
      }
    }));
  })));
}

// ----- Center: actual calendar grid ----------------------------------------

function VCCalendar({
  state
}) {
  const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const HOUR_H = 36; // matches --vc-grid-hour-h
  const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const dayDates = ["May 18", "May 19", "May 20", "May 21", "May 22"];
  const eventsForDay = i => {
    if (state === "empty") return [];
    return BC_RITUALS.filter(r => r.day === i && (r.placed || state === "handoff" || r.ghost === false)).filter(r => state === "handoff" || !r.ghost || r.placed).map(r => ({
      ...r,
      ghost: state !== "handoff" && r.ghost
    }));
  };
  const fmt = h => {
    const hh = Math.floor(h);
    const mm = Math.round((h - hh) * 60);
    const suffix = hh >= 12 ? "p" : "a";
    const display = hh > 12 ? hh - 12 : hh;
    return mm === 0 ? `${display}${suffix}` : `${display}:${String(mm).padStart(2, "0")}${suffix}`;
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "vc__cal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-head-cell vc__cal-head-cell--corner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--fg-3)",
      textTransform: "uppercase",
      letterSpacing: "0.06em"
    }
  }, "Week 1"), /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-head-cell__date"
  }, "of 12")), dayLabels.map((d, i) => /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-head-cell",
    key: i
  }, /*#__PURE__*/React.createElement("div", null, d), /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-head-cell__date"
  }, dayDates[i])))), /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-hours"
  }, HOURS.map(h => /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-hour",
    key: h
  }, fmt(h)))), dayLabels.map((_, i) => /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-day",
    key: i
  }, eventsForDay(i).map((e, k) => {
    const top = (e.start - 8) * HOUR_H;
    const h = Math.max(28, (e.end - e.start) * HOUR_H - 2);
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: ["vc-event", e.color === "pine" ? "vc-event--pine" : e.color === "gold" ? "vc-event--gold" : "", e.ghost ? "vc-event--ghost" : ""].join(" ").trim(),
      style: {
        top,
        height: h
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vc-event__name"
    }, e.name), /*#__PURE__*/React.createElement("div", {
      className: "vc-event__time"
    }, fmt(e.start), "\u2013", fmt(e.end), " \xB7 ", e.owner));
  }), state === "empty" && i === 0 && /*#__PURE__*/React.createElement("div", {
    className: "vc-event vc-event--ghost",
    style: {
      top: 36,
      height: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vc-event__name"
  }, "Drop a ritual here \u2192"))))));
}

// ----- Right: owners + assignment ------------------------------------------

function VCOwners() {
  return /*#__PURE__*/React.createElement("section", {
    className: "vc__owners"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vc__owners-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "vc__rail-title"
  }, "Owners"), /*#__PURE__*/React.createElement("div", {
    className: "vc__rail-sub"
  }, "Who runs each ritual")), /*#__PURE__*/React.createElement("div", {
    className: "vc__owners-body"
  }, BC_OPERATORS.slice(0, 6).map(op => {
    // Owners we've named for placed rituals get a non-zero count.
    const placedNames = BC_RITUALS.filter(r => r.placed).map(r => r.owner);
    const count = placedNames.filter(n => op.name.startsWith(n)).length;
    return /*#__PURE__*/React.createElement("div", {
      className: "vc-owner",
      key: op.name
    }, /*#__PURE__*/React.createElement("div", {
      className: `app-avatar app-avatar--${op.color}`
    }, op.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "vc-owner__name"
    }, op.name), /*#__PURE__*/React.createElement("div", {
      className: "vc-owner__role"
    }, op.role)), /*#__PURE__*/React.createElement("div", {
      className: "vc-owner__count"
    }, /*#__PURE__*/React.createElement("strong", null, count), "ritual", count === 1 ? "" : "s"));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: "10px 12px",
      background: "var(--granite-50)",
      border: "1px dashed var(--granite-300)",
      borderRadius: 10,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--fg-3)",
      letterSpacing: "0.02em",
      lineHeight: 1.5
    }
  }, "Tip \xB7 drop a ritual onto an avatar to assign without dragging through the grid.")));
}

// ----- Bottom: lock the cadence --------------------------------------------

function VCFoot({
  state
}) {
  const stats = state === "empty" ? [{
    l: "Rituals",
    v: "0"
  }, {
    l: "Operators",
    v: "0"
  }, {
    l: "Coverage",
    v: "—"
  }] : state === "handoff" ? [{
    l: "Rituals",
    v: "8"
  }, {
    l: "Operators",
    v: "5"
  }, {
    l: "Coverage",
    v: "Mon–Fri"
  }] : [{
    l: "Rituals",
    v: "6"
  }, {
    l: "Operators",
    v: "4"
  }, {
    l: "Coverage",
    v: "4 of 5 days"
  }];
  const cta = state === "empty" ? "Lock starter cadence" : state === "handoff" ? "Open morning view" : "Lock the cadence";
  return /*#__PURE__*/React.createElement("div", {
    className: "vc__foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vc__foot-meta"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "vc__foot-stat-label"
  }, s.l), /*#__PURE__*/React.createElement("div", {
    className: "vc__foot-stat-value"
  }, s.v)), i < stats.length - 1 && /*#__PURE__*/React.createElement("div", {
    className: "vc__foot-divider"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: state === "handoff" ? "var(--fg-3)" : "oklch(70% 0.012 285)",
      letterSpacing: "0.02em"
    }
  }, state === "handoff" ? "Cadence active · runs weekly" : "We will not show more than three summits at once"), /*#__PURE__*/React.createElement("button", {
    className: "vc__foot-cta"
  }, cta, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  }))));
}
window.VariantC = VariantC;
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_basecamp/prototype/HandoffBasecampWeekGrid.jsx", error: String((e && e.message) || e) }); }

// design_handoff_basecamp/prototype/basecamp-data.jsx
try { (() => {
// basecamp-data.jsx — seed data shared by the three onboarding variants

const BC_OPERATORS = [{
  name: "Mira Singh",
  role: "Chief of staff",
  initials: "MS",
  color: "me",
  cadence: "Daily",
  owns: 6
}, {
  name: "Adetola O.",
  role: "VP Engineering",
  initials: "AO",
  color: "summit",
  cadence: "Mon · Thu",
  owns: 4
}, {
  name: "Eleanor W.",
  role: "CEO",
  initials: "EW",
  color: "alpenglow",
  cadence: "Weekly",
  owns: 3
}, {
  name: "Jay K.",
  role: "Head of Platform",
  initials: "JK",
  color: "summit",
  cadence: "Daily",
  owns: 5
}, {
  name: "Rae K.",
  role: "Head of Growth",
  initials: "RK",
  color: "pine",
  cadence: "Tue · Fri",
  owns: 4
}, {
  name: "Tomás D.",
  role: "Staff engineer",
  initials: "TD",
  color: "summit",
  cadence: "Daily",
  owns: 3
}, {
  name: "Sana M.",
  role: "Head of Design",
  initials: "SM",
  color: "pine",
  cadence: "Mon · Wed",
  owns: 2
}, {
  name: "Bea L.",
  role: "Head of People",
  initials: "BL",
  color: "alpenglow",
  cadence: "Weekly",
  owns: 1
}];
const BC_SUMMITS = [{
  name: "Reliability",
  color: "var(--summit-500)",
  pct: 38,
  count: 5
}, {
  name: "Growth",
  color: "var(--pine-500)",
  pct: 22,
  count: 7
}, {
  name: "Foundations",
  color: "var(--alpenglow-500)",
  pct: 64,
  count: 3
}];
const BC_STEPS = [{
  id: "summits",
  title: "Name your summits",
  sub: "Top-level goals for the next 90 days",
  time: "2 min",
  verb: "Pin",
  done: true
}, {
  id: "operators",
  title: "Embed your operators",
  sub: "Leadership team and their update cadence",
  time: "4 min",
  verb: "Embed",
  done: false,
  active: true
}, {
  id: "cadence",
  title: "Install the operating week",
  sub: "Standing meetings and rituals",
  time: "3 min",
  verb: "Install",
  done: false
}, {
  id: "signals",
  title: "Wire your signals",
  sub: "What's worth pinging the CoS about",
  time: "2 min",
  verb: "Lock",
  done: false
}, {
  id: "readahead",
  title: "First Monday read-ahead",
  sub: "Draft this week's briefing",
  time: "5 min",
  verb: "Ship",
  done: false
}];
const BC_RITUALS = [{
  name: "Monday read-ahead",
  when: "Mon 8:00 · 30m",
  owner: "Mira",
  color: "summit",
  day: 0,
  start: 8.0,
  end: 8.5,
  placed: true
}, {
  name: "Exec standup",
  when: "Mon, Wed 9:00 · 30m",
  owner: "Eleanor",
  color: "summit",
  day: 0,
  start: 9.0,
  end: 9.5,
  placed: true
}, {
  name: "Exec standup",
  when: "Wed 9:00 · 30m",
  owner: "Eleanor",
  color: "summit",
  day: 2,
  start: 9.0,
  end: 9.5,
  placed: true,
  dupOf: "Exec standup"
}, {
  name: "Eng + design sync",
  when: "Tue 14:00 · 45m",
  owner: "Adetola",
  color: "pine",
  day: 1,
  start: 14.0,
  end: 14.75,
  placed: true
}, {
  name: "Growth review",
  when: "Thu 11:00 · 60m",
  owner: "Rae",
  color: "pine",
  day: 3,
  start: 11.0,
  end: 12.0,
  placed: true
}, {
  name: "Decisions close-out",
  when: "Fri 16:00 · 30m",
  owner: "Mira",
  color: "summit",
  day: 4,
  start: 16.0,
  end: 16.5,
  placed: true
}, {
  name: "1:1 — Eleanor",
  when: "Tue 10:00 · 30m",
  owner: "Mira",
  color: "gold",
  day: 1,
  start: 10.0,
  end: 10.5,
  placed: false,
  ghost: true
}, {
  name: "Blocker triage",
  when: "Drag onto a day",
  owner: "—",
  color: "gold",
  placed: false
}, {
  name: "Customer call review",
  when: "Drag onto a day",
  owner: "—",
  color: "pine",
  placed: false
}];
const BC_INTERVIEW = {
  locked: [{
    topic: "Summit",
    q: "What's the one outcome that would make this year a clear win?",
    a: "Ship enterprise-grade reliability — under 4 nines uptime, SOC 2 Type II, EU launch unblocked."
  }, {
    topic: "Cadence",
    q: "When does the leadership team meet today?",
    a: "Mondays at 9. Standups are skipped most weeks because Eleanor travels Mondays. Friday close-outs don't exist yet."
  }, {
    topic: "Owners",
    q: "Who runs the operating cadence with you?",
    a: "Adetola for engineering, Rae for growth, Sana for design. Bea owns people but stays out of the cadence."
  }, {
    topic: "Signals",
    q: "What's the one thing that, if it slipped, you'd want to know that morning?",
    a: "Anything Adetola owns. Two initiatives stalled at once last quarter and nobody pinged me."
  }],
  current: {
    eyebrow: "Question 5 of 9",
    q: "What's the one decision your leadership team keeps deferring?",
    help: "Be specific. If multiple, name the one that costs the most to defer another week. The cadence will be designed to force this kind of decision rather than route around it.",
    chips: ["Ship or kill the onboarding video", "PG 17 migration timing", "EU launch DPA scope", "Pricing test sample size"]
  },
  next: [{
    topic: "Signals",
    q: "Who's allowed to interrupt your morning view?"
  }, {
    topic: "Briefings",
    q: "What does Monday's read-ahead need to contain?"
  }, {
    topic: "Handoff",
    q: "What does 'engagement complete' look like for you?"
  }]
};
const BC_CADENCE_PREVIEW = [{
  name: "Monday read-ahead",
  cad: "Mon 8:00",
  on: true
}, {
  name: "Exec standup",
  cad: "Mon · Wed",
  on: true
}, {
  name: "Growth review",
  cad: "Thursdays",
  on: true
}, {
  name: "Decisions close-out",
  cad: "Fri 16:00",
  on: true
}, {
  name: "1:1 — Eleanor",
  cad: "Tuesdays",
  on: false
}, {
  name: "Blocker triage",
  cad: "—",
  on: false
}];
Object.assign(window, {
  BC_OPERATORS,
  BC_SUMMITS,
  BC_STEPS,
  BC_RITUALS,
  BC_INTERVIEW,
  BC_CADENCE_PREVIEW
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_basecamp/prototype/basecamp-data.jsx", error: String((e && e.message) || e) }); }

// design_handoff_basecamp/prototype/reference/HandoffCommandPalette.jsx
try { (() => {
function CommandPalette({
  open,
  onClose
}) {
  if (!open) return null;
  const items = [{
    icon: "target",
    label: "Create initiative",
    shortcut: "I"
  }, {
    icon: "check-square",
    label: "Record a decision",
    shortcut: "D"
  }, {
    icon: "file-text",
    label: "Write a briefing",
    shortcut: "B"
  }, {
    icon: "flag",
    label: "Add milestone",
    shortcut: "M"
  }, {
    icon: "users",
    label: "Invite owner",
    shortcut: "U"
  }, {
    icon: "calendar",
    label: "Jump to next milestone",
    shortcut: "→"
  }, {
    icon: "archive",
    label: "Archive initiative…",
    shortcut: ""
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "palette-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "palette",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "palette__input"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Type a command or search\u2026",
    autoFocus: true
  }), /*#__PURE__*/React.createElement("kbd", null, "esc")), /*#__PURE__*/React.createElement("div", {
    className: "palette__group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "palette__group-label"
  }, "Actions"), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "palette__item",
    key: i
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon
  }), /*#__PURE__*/React.createElement("span", null, it.label), it.shortcut && /*#__PURE__*/React.createElement("kbd", {
    className: "palette__shortcut"
  }, it.shortcut))))));
}
window.CommandPalette = CommandPalette;
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_basecamp/prototype/reference/HandoffCommandPalette.jsx", error: String((e && e.message) || e) }); }

// design_handoff_basecamp/prototype/reference/HandoffMorningView.jsx
try { (() => {
/* ============================================================
   Morning View — the intervention-first CoS dashboard
   Cards represent the only signals worth pinging on. Layout
   is breathy; empty is the goal.
   ============================================================ */

function MorningView({
  state = "healthy"
}) {
  // ---------- Card data ----------
  const allCards = [{
    id: "video",
    verb: "DECIDE",
    ask: "Ship or kill the onboarding video.",
    signal: "Deferred 2×",
    context: "Eleanor wanted data; data is in. Mira's recommendation is kill. Last call delayed Tuesday.",
    meta: {
      owner: "Mira Singh",
      initiative: "Onboarding redesign",
      lastTouch: "3 days ago"
    }
  }, {
    id: "dpa",
    verb: "DRAFT",
    ask: "Draft a one-pager on the EU launch DPA for Eleanor.",
    signal: "Needed by Thursday standup",
    context: "Two prospects are waiting. Adetola has the legal redlines; Eleanor will decide on the call.",
    meta: {
      owner: "Adetola O.",
      initiative: "EU launch",
      lastTouch: "yesterday"
    }
  }, {
    id: "adetola",
    verb: "ASK",
    ask: "Check in with Adetola — they've gone quiet.",
    signal: "No update for 6 days · normally daily",
    context: "Adetola owns the EU launch and the migration. Both stalled at the same time. Worth a 15-min call before standup.",
    meta: {
      owner: "Adetola O.",
      initiative: "2 initiatives at risk",
      lastTouch: "6 days ago"
    }
  }, {
    id: "kill-workshop",
    verb: "KILL",
    ask: "Kill the team-values workshop initiative.",
    signal: "No activity 47 days",
    context: "Started in Q1 by a person who left in March. No owner since. It is not coming back. Archive it.",
    meta: {
      owner: "(unassigned)",
      initiative: "Team-values workshop",
      lastTouch: "47 days ago"
    }
  }, {
    id: "pg17",
    verb: "DECIDE",
    ask: "Resolve the PG 17 timing disagreement.",
    signal: "Jay and Tomás disagree in thread",
    context: "Jay wants stage by Aug 1; Tomás wants prod by Aug 15 directly. The data migration depends on the call.",
    meta: {
      owner: "Jay K. · Tomás D.",
      initiative: "Datastore migration to PG 17",
      lastTouch: "4 hours ago"
    }
  }, {
    id: "soc2",
    verb: "APPROVE",
    ask: "Approve the SOC 2 evidence package.",
    signal: "Auditor needs it by EOD Friday",
    context: "Rae has assembled everything. The CoS sign-off unblocks the external auditor and the two enterprise deals tied to it.",
    meta: {
      owner: "Rae K.",
      initiative: "SOC 2 Type II audit",
      lastTouch: "this morning"
    }
  }, {
    id: "readahead",
    verb: "DRAFT",
    ask: "Draft Monday's read-ahead for the leadership offsite.",
    signal: "3 days out · usually drafted 5 days out",
    context: "Eleanor is presenting H2 strategy. The exec team needs the prior decisions log and the open questions ahead of time.",
    meta: {
      owner: "Mira Singh",
      initiative: "Leadership offsite",
      lastTouch: "—"
    }
  }, {
    id: "rae",
    verb: "ASK",
    ask: "Ask Rae for the pricing-test sample size.",
    signal: "Paused 4 days · no resolution date",
    context: "We paused the experiment for sample-size reasons. There is no date to resume. The growth summit is partly stuck on this.",
    meta: {
      owner: "Rae K.",
      initiative: "Pricing page A/B test",
      lastTouch: "4 days ago"
    }
  }, {
    id: "board-note",
    verb: "DRAFT",
    ask: "Draft a note to the board on the slipped Q3 reliability date.",
    signal: "Slip not yet acknowledged externally",
    context: "Mobile push overhaul missed Jul 22. Board update goes out next week. Better the CoS frames it than they discover it.",
    meta: {
      owner: "Jay K.",
      initiative: "Mobile push notifications",
      lastTouch: "2 days ago"
    }
  }];
  const SETS = {
    empty: [],
    healthy: ["video", "dpa", "adetola"],
    elevated: ["video", "dpa", "adetola", "kill-workshop", "pg17"],
    overloaded: ["video", "dpa", "adetola", "kill-workshop", "pg17", "soc2", "readahead", "rae", "board-note"]
  };
  const cardIds = SETS[state] ?? SETS.healthy;
  const cards = cardIds.map(id => allCards.find(c => c.id === id)).filter(Boolean);

  // Hard ceiling: never show more than 5 expanded cards.
  const VISIBLE_CAP = 5;
  const visible = cards.slice(0, VISIBLE_CAP);
  const hidden = cards.slice(VISIBLE_CAP);

  // ---------- Header copy by state ----------
  const today = new Date("2026-05-15T08:00:00");
  const dayLabel = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
  let metaTitle, metaSub, metaTone;
  if (cards.length === 0) {
    metaTitle = "Nothing needs you today.";
    metaSub = "The cadence is running. Use the time for the work the strategy deck has been promising.";
    metaTone = "empty";
  } else if (cards.length <= 3) {
    metaTitle = `${cards.length} ${cards.length === 1 ? "thing needs" : "things need"} you this morning.`;
    metaSub = "Cadence is healthy — these are the cards that earned a place.";
    metaTone = "healthy";
  } else if (cards.length <= 6) {
    metaTitle = `${cards.length} things need you this morning.`;
    metaSub = "That's more than usual. Worth a longer triage block today.";
    metaTone = "elevated";
  } else {
    metaTitle = `${cards.length} things need you this morning.`;
    metaSub = "The cadence has slipped, or last week's decisions weren't actually decisions.";
    metaTone = "overloaded";
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "mv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv__inner"
  }, /*#__PURE__*/React.createElement("header", {
    className: "mv__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv__date"
  }, "Morning of ", dayLabel), /*#__PURE__*/React.createElement("h1", {
    className: `mv__title mv__title--${metaTone}`
  }, metaTitle), /*#__PURE__*/React.createElement("p", {
    className: "mv__sub"
  }, metaSub)), cards.length === 0 && /*#__PURE__*/React.createElement(EmptyState, null), visible.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mv__cards"
  }, visible.map(c => /*#__PURE__*/React.createElement(InterventionCard, {
    key: c.id,
    card: c
  }))), hidden.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mv__overflow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv__overflow-head"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock"
  }), /*#__PURE__*/React.createElement("span", null, "+", hidden.length, " more ", hidden.length === 1 ? "thing needs" : "things need", " you")), /*#__PURE__*/React.createElement("p", {
    className: "mv__overflow-body"
  }, "Block 30 minutes and triage them in order. We won't preview them here \u2014 the morning view stops at five."), /*#__PURE__*/React.createElement("button", {
    className: "mv-btn mv-btn--primary mv__overflow-cta"
  }, "Open triage queue", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  }))), cards.length > 0 && /*#__PURE__*/React.createElement(AmbientFoot, null)));
}
function InterventionCard({
  card
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "mv-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv-card__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: `mv-verb mv-verb--${card.verb.toLowerCase()}`
  }, card.verb), /*#__PURE__*/React.createElement("span", {
    className: "mv-card__signal"
  }, card.signal)), /*#__PURE__*/React.createElement("h2", {
    className: "mv-card__ask"
  }, card.ask), /*#__PURE__*/React.createElement("p", {
    className: "mv-card__context"
  }, card.context), card.meta && /*#__PURE__*/React.createElement("dl", {
    className: "mv-card__meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv-card__meta-row"
  }, /*#__PURE__*/React.createElement("dt", null, "Owner"), /*#__PURE__*/React.createElement("dd", null, card.meta.owner)), /*#__PURE__*/React.createElement("div", {
    className: "mv-card__meta-row"
  }, /*#__PURE__*/React.createElement("dt", null, "Initiative"), /*#__PURE__*/React.createElement("dd", null, card.meta.initiative)), /*#__PURE__*/React.createElement("div", {
    className: "mv-card__meta-row"
  }, /*#__PURE__*/React.createElement("dt", null, "Last touch"), /*#__PURE__*/React.createElement("dd", null, card.meta.lastTouch))), /*#__PURE__*/React.createElement("div", {
    className: "mv-card__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mv-btn mv-btn--primary"
  }, "Do it now", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  })), /*#__PURE__*/React.createElement("button", {
    className: "mv-btn mv-btn--ghost"
  }, "Defer to tomorrow"), /*#__PURE__*/React.createElement("button", {
    className: "mv-btn mv-btn--ghost mv-btn--danger"
  }, "Escalate")));
}
function EmptyState() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mv-empty"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ridgeline.svg",
    alt: "",
    className: "mv-empty__ridge"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mv-empty__inner"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mountain-snow",
    className: "mv-empty__icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mv-empty__line"
  }, "11 initiatives running quietly \xB7 last decision logged 2h ago \xB7 0 owners overdue")));
}
function AmbientFoot() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mv-ambient"
  }, /*#__PURE__*/React.createElement("span", null, "11 initiatives running quietly"), /*#__PURE__*/React.createElement("span", {
    className: "mv-ambient__dot"
  }), /*#__PURE__*/React.createElement("span", null, "last decision logged 2h ago"), /*#__PURE__*/React.createElement("span", {
    className: "mv-ambient__dot"
  }), /*#__PURE__*/React.createElement("span", null, "0 owners overdue"));
}
window.MorningView = MorningView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_basecamp/prototype/reference/HandoffMorningView.jsx", error: String((e && e.message) || e) }); }

// design_handoff_basecamp/prototype/reference/HandoffSidebar.jsx
try { (() => {
function Sidebar() {
  const items = [{
    icon: "layout-dashboard",
    label: "Overview",
    active: true
  }, {
    icon: "target",
    label: "Initiatives",
    count: 12
  }, {
    icon: "check-square",
    label: "Decisions",
    count: 4
  }, {
    icon: "file-text",
    label: "Briefings",
    count: 3
  }, {
    icon: "users",
    label: "Owners",
    count: 28
  }, {
    icon: "calendar",
    label: "Cadence"
  }];
  const summits = [{
    color: "var(--summit-500)",
    label: "Reliability",
    count: 5
  }, {
    color: "var(--pine-500)",
    label: "Growth",
    count: 7
  }, {
    color: "var(--alpenglow-500)",
    label: "Foundations",
    count: 3
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "app-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__brand-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__org"
  }, "Stoney Trail Co."), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__plan"
  }, "Chief of staff \xB7 6 execs")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevrons-up-down",
    className: "app-sidebar__brand-caret"
  })), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__search"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Jump to\u2026"
  }), /*#__PURE__*/React.createElement("kbd", null, "\u2318K")), /*#__PURE__*/React.createElement("nav", {
    className: "app-sidebar__nav"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: `app-navitem ${it.active ? "app-navitem--active" : ""}`,
    key: i
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon
  }), /*#__PURE__*/React.createElement("span", null, it.label), it.count !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "app-navitem__count"
  }, it.count)))), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__section-head"
  }, /*#__PURE__*/React.createElement("span", null, "Summits"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus"
  })), summits.map((s, i) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "app-navitem",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "app-navitem__dot",
    style: {
      background: s.color
    }
  }), /*#__PURE__*/React.createElement("span", null, s.label), /*#__PURE__*/React.createElement("span", {
    className: "app-navitem__count"
  }, s.count)))), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__foot"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "app-navitem"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "settings"
  }), /*#__PURE__*/React.createElement("span", null, "Settings")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "app-navitem"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "life-buoy"
  }), /*#__PURE__*/React.createElement("span", null, "Basecamp guide"))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_basecamp/prototype/reference/HandoffSidebar.jsx", error: String((e && e.message) || e) }); }

// design_handoff_basecamp/prototype/reference/HandoffTopBar.jsx
try { (() => {
function TopBar() {
  return /*#__PURE__*/React.createElement("header", {
    className: "app-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-topbar__crumbs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "app-topbar__crumb"
  }, "Workspace"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right"
  }), /*#__PURE__*/React.createElement("span", {
    className: "app-topbar__crumb app-topbar__crumb--current"
  }, "Overview")), /*#__PURE__*/React.createElement("div", {
    className: "app-topbar__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "app-iconbtn",
    title: "Notifications"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell"
  }), /*#__PURE__*/React.createElement("span", {
    className: "app-iconbtn__dot"
  })), /*#__PURE__*/React.createElement("button", {
    className: "app-btn app-btn--ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "filter"
  }), "Filter"), /*#__PURE__*/React.createElement("button", {
    className: "app-btn app-btn--primary"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus"
  }), "New initiative"), /*#__PURE__*/React.createElement("div", {
    className: "app-avatar app-avatar--me"
  }, "MS")));
}
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "design_handoff_basecamp/prototype/reference/HandoffTopBar.jsx", error: String((e && e.message) || e) }); }

// site/site.js
try { (() => {
/* Shared site behaviour — nav, icons, reveal, mobile menu */
(function () {
  function initIcons() {
    if (window.lucide) window.lucide.createIcons();
  }
  function initNav() {
    var nav = document.querySelector('.nav');
    if (nav) {
      var onScroll = function () {
        nav.classList.toggle('is-stuck', window.scrollY > 8);
      };
      onScroll();
      window.addEventListener('scroll', onScroll, {
        passive: true
      });
    }
    var burger = document.querySelector('.nav__burger');
    var links = document.querySelector('.nav__links');
    if (burger && links) {
      burger.addEventListener('click', function () {
        var open = links.classList.toggle('is-open-mobile');
        links.style.display = open ? 'flex' : '';
      });
    }
  }
  function initReveal() {
    var els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) {
      els.forEach(function (e) {
        e.classList.add('is-in');
      });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          en.target.classList.add('is-in');
          io.unobserve(en.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -8% 0px'
    });
    els.forEach(function (e) {
      io.observe(e);
    });
  }
  function boot() {
    initIcons();
    initNav();
    initReveal();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);else boot();
  window.__eeInitIcons = initIcons;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "site/site.js", error: String((e && e.message) || e) }); }

// ui_kits/app/BasecampCadenceBuilder.jsx
try { (() => {
// BasecampCadenceBuilder.jsx — Variant B: interview-driven onboarding.
// The CoS answers one operator-style question at a time. Locked answers
// stack on the left (decision-log feel). The operating week assembles
// live in the right pane.

function VariantB({
  tweaks
}) {
  const STATE_TO_COUNT = {
    empty: 0,
    mid: 4,
    handoff: 9
  };
  const lockedCount = STATE_TO_COUNT[tweaks.state] ?? 4;
  return /*#__PURE__*/React.createElement(React.Fragment, null, tweaks.state === "handoff" && /*#__PURE__*/React.createElement(BasecampHandoffRibbon, null), /*#__PURE__*/React.createElement("div", {
    className: "vb"
  }, /*#__PURE__*/React.createElement(VBLog, {
    locked: BC_INTERVIEW.locked.slice(0, Math.min(lockedCount, BC_INTERVIEW.locked.length)),
    total: BC_INTERVIEW.locked.length + 1 + BC_INTERVIEW.next.length
  }), /*#__PURE__*/React.createElement(VBCenter, {
    state: tweaks.state
  }), /*#__PURE__*/React.createElement(VBPreview, {
    state: tweaks.state
  })));
}

// ----- Left: locked decisions log ------------------------------------------

function VBLog({
  locked,
  total
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "vb__log"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vb__log-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vb__log-title"
  }, "Locked decisions"), /*#__PURE__*/React.createElement("span", {
    className: "vb__log-count"
  }, locked.length, " of ", total)), locked.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "32px 16px",
      fontFamily: "var(--font-sans)",
      fontSize: 12.5,
      color: "var(--fg-3)",
      textAlign: "center",
      background: "var(--granite-50)",
      border: "1px dashed var(--granite-300)",
      borderRadius: 10,
      lineHeight: 1.5
    }
  }, "Nothing locked yet. Each answer becomes a decision on the right when you confirm it \u2014 and a row in the operating week."), locked.map((entry, i) => /*#__PURE__*/React.createElement("article", {
    className: "vb-locked",
    key: i
  }, /*#__PURE__*/React.createElement("button", {
    className: "vb-locked__edit",
    "aria-label": "Edit"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "pencil"
  })), /*#__PURE__*/React.createElement("div", {
    className: "vb-locked__topic"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check"
  }), entry.topic), /*#__PURE__*/React.createElement("div", {
    className: "vb-locked__q"
  }, entry.q), /*#__PURE__*/React.createElement("div", {
    className: "vb-locked__a"
  }, entry.a))));
}

// ----- Center: current question --------------------------------------------

function VBCenter({
  state
}) {
  const isHandoff = state === "handoff";
  const data = BC_INTERVIEW.current;
  const [draft, setDraft] = React.useState("");
  const [selectedChip, setSelectedChip] = React.useState(null);
  if (isHandoff) {
    return /*#__PURE__*/React.createElement("div", {
      className: "vb__center"
    }, /*#__PURE__*/React.createElement("div", {
      className: "vb__center-meta"
    }, /*#__PURE__*/React.createElement("span", {
      className: "vb__center-step"
    }, "Interview complete"), /*#__PURE__*/React.createElement("span", {
      className: "vb__center-skip"
    }, "9 of 9 locked")), /*#__PURE__*/React.createElement("div", {
      className: "vb__center-body",
      style: {
        padding: "56px 32px 32px"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vb__q-eyebrow"
    }, "Handoff"), /*#__PURE__*/React.createElement("h1", {
      className: "vb__q"
    }, "The cadence is yours from Monday."), /*#__PURE__*/React.createElement("p", {
      className: "vb__q-help"
    }, "We installed seven rituals and named four operators. Mira owns Monday read-aheads and Friday close-outs. Adetola and Rae each own their weekly review. Decisions are logged the morning of standup; nothing carries past Friday."), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        gap: 8,
        flexWrap: "wrap",
        marginTop: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "bc-state-tag bc-state-tag--pine"
    }, "7 rituals installed"), /*#__PURE__*/React.createElement("span", {
      className: "bc-state-tag bc-state-tag--pine"
    }, "4 operators embedded"), /*#__PURE__*/React.createElement("span", {
      className: "bc-state-tag bc-state-tag--pine"
    }, "3 summits locked"), /*#__PURE__*/React.createElement("span", {
      className: "bc-state-tag"
    }, "Morning view ready"))), /*#__PURE__*/React.createElement("div", {
      className: "vb__center-foot"
    }, /*#__PURE__*/React.createElement("span", {
      className: "vb__center-foot__hint"
    }, "Engagement runs through Aug 10"), /*#__PURE__*/React.createElement("button", {
      className: "bc-verb-btn"
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "arrow-right"
    }), "Open morning view")));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "vb__center"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vb__center-meta"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vb__center-step"
  }, data.eyebrow), /*#__PURE__*/React.createElement("button", {
    className: "vb__center-skip"
  }, "Skip for now", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "vb__center-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vb__q-eyebrow"
  }, "Cadence design"), /*#__PURE__*/React.createElement("h1", {
    className: "vb__q"
  }, data.q), /*#__PURE__*/React.createElement("p", {
    className: "vb__q-help"
  }, data.help), /*#__PURE__*/React.createElement("div", {
    className: "vb__answer"
  }, /*#__PURE__*/React.createElement("textarea", {
    placeholder: "Type the decision, the people who keep deferring it, and why it costs to defer it another week.",
    value: draft,
    onChange: e => setDraft(e.target.value),
    rows: 4
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 9.5,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 6
    }
  }, "Picked up from this week"), /*#__PURE__*/React.createElement("div", {
    className: "vb__answer-chips"
  }, data.chips.map(c => /*#__PURE__*/React.createElement("button", {
    key: c,
    className: `vb-chip ${selectedChip === c ? "vb-chip--on" : ""}`,
    onClick: () => {
      setSelectedChip(c);
      setDraft(d => d ? d : c);
    }
  }, c))))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--fg-3)",
      letterSpacing: "0.02em"
    }
  }, "Next: ", BC_INTERVIEW.next.map(n => n.topic).join(" · "))), /*#__PURE__*/React.createElement("div", {
    className: "vb__center-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vb__center-foot__hint"
  }, /*#__PURE__*/React.createElement("kbd", null, "\u2318\u21B5"), " to lock \xB7 ", /*#__PURE__*/React.createElement("kbd", null, "\u2193"), " to defer"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "bc-verb-btn bc-verb-btn--ghost"
  }, "Park this question"), /*#__PURE__*/React.createElement("button", {
    className: "bc-verb-btn"
  }, "Lock answer", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  })))));
}

// ----- Right: operating week assembling live -------------------------------

function VBPreview({
  state
}) {
  const isHandoff = state === "handoff";
  const items = isHandoff ? BC_CADENCE_PREVIEW.map(p => ({
    ...p,
    on: true
  })) : BC_CADENCE_PREVIEW;
  return /*#__PURE__*/React.createElement("div", {
    className: "vb__preview"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vb__preview-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "vb__preview-title"
  }, "Operating week \u2014 emerging"), /*#__PURE__*/React.createElement("span", {
    className: "vb__preview-tag"
  }, isHandoff ? "Locked" : "Drafting")), /*#__PURE__*/React.createElement(VBMiniWeek, {
    state: state
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      paddingTop: 4
    }
  }, "Rituals"), /*#__PURE__*/React.createElement("div", {
    className: "vb__preview-list"
  }, items.map(p => /*#__PURE__*/React.createElement("div", {
    className: `vb__preview-item ${p.on ? "" : "vb__preview-item--pending"}`,
    key: p.name
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.on ? "check" : "circle"
  }), /*#__PURE__*/React.createElement("span", null, p.name), /*#__PURE__*/React.createElement("span", {
    className: "vb__preview-item__cad"
  }, p.cad)))));
}
function VBMiniWeek({
  state
}) {
  const days = ["M", "T", "W", "T", "F"];
  // Hand-picked event placements — represented as percent-of-day band.
  const events = state === "empty" ? [] : [{
    d: 0,
    top: 8,
    h: 10,
    name: "Read-ahead",
    color: "summit"
  }, {
    d: 0,
    top: 22,
    h: 8,
    name: "Standup",
    color: "summit"
  }, {
    d: 1,
    top: 30,
    h: 12,
    name: "Eng sync",
    color: "pine"
  }, {
    d: 2,
    top: 22,
    h: 8,
    name: "Standup",
    color: "summit"
  }, {
    d: 3,
    top: 40,
    h: 14,
    name: "Growth",
    color: "pine"
  }, {
    d: 4,
    top: 78,
    h: 8,
    name: "Close-out",
    color: "summit"
  }];
  const handoffExtras = [{
    d: 1,
    top: 16,
    h: 8,
    name: "1:1 EW",
    color: "gold"
  }, {
    d: 4,
    top: 18,
    h: 10,
    name: "Triage",
    color: "gold"
  }];
  const all = state === "handoff" ? [...events, ...handoffExtras] : events;
  return /*#__PURE__*/React.createElement("div", {
    className: "vb-mini-week"
  }, days.map((d, i) => /*#__PURE__*/React.createElement("div", {
    className: "vb-mini-day",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "vb-mini-day__h"
  }, d), /*#__PURE__*/React.createElement("div", {
    className: "vb-mini-day__col"
  }, all.filter(e => e.d === i).map((e, k) => /*#__PURE__*/React.createElement("div", {
    key: k,
    className: `vb-mini-ritual vb-mini-ritual--${e.color}`,
    style: {
      position: "absolute",
      top: `${e.top / 100 * 100}%`,
      height: `${e.h / 100 * 100}%`,
      left: 4,
      right: 4,
      display: "flex",
      alignItems: "center"
    }
  }, e.name))))));
}
window.VariantB = VariantB;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/BasecampCadenceBuilder.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/BasecampShell.jsx
try { (() => {
// BasecampShell.jsx — the app shell wrapped around each onboarding variant.
// Sidebar items progressively unlock as the user advances through Basecamp,
// matching the brand's "we install, then hand off" voice.

function BasecampSidebar({
  tweaks,
  completedSteps
}) {
  // Items map to the existing app's IA, but locked until Basecamp installs them.
  const items = [{
    icon: "tent",
    label: "Basecamp",
    active: true,
    tag: tweaks.state === "handoff" ? "DONE" : null
  }, {
    icon: "layout-dashboard",
    label: "Morning view",
    locked: tweaks.state !== "handoff"
  }, {
    icon: "target",
    label: "Initiatives",
    count: completedSteps >= 1 ? 12 : null,
    locked: completedSteps < 1
  }, {
    icon: "check-square",
    label: "Decisions",
    count: completedSteps >= 3 ? 4 : null,
    locked: completedSteps < 3
  }, {
    icon: "users",
    label: "Operators",
    count: completedSteps >= 2 ? 8 : null,
    locked: completedSteps < 2
  }, {
    icon: "calendar",
    label: "Cadence",
    locked: completedSteps < 3
  }];
  const summits = [{
    color: "var(--summit-500)",
    label: "Reliability",
    count: 5
  }, {
    color: "var(--pine-500)",
    label: "Growth",
    count: 7
  }, {
    color: "var(--alpenglow-500)",
    label: "Foundations",
    count: 3
  }];
  const pct = Math.round(completedSteps / 5 * 100);
  return /*#__PURE__*/React.createElement("aside", {
    className: "app-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__brand-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__org"
  }, "Stoney Trail Co."), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__plan"
  }, tweaks.view === "client" ? "Operating cadence" : "Chief of staff · 6 execs")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevrons-up-down",
    className: "app-sidebar__brand-caret"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bc-sidebar__phase"
  }, tweaks.state === "handoff" ? "Engagement · wrapping up" : "Basecamp · setup"), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__search"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Jump to\u2026"
  }), /*#__PURE__*/React.createElement("kbd", null, "\u2318K")), /*#__PURE__*/React.createElement("nav", {
    className: "app-sidebar__nav"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    key: i,
    className: ["app-navitem", it.active ? "app-navitem--active" : "", it.locked ? "app-navitem--locked" : ""].join(" ").trim()
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon
  }), /*#__PURE__*/React.createElement("span", null, it.label), it.tag && /*#__PURE__*/React.createElement("span", {
    className: "app-navitem__tag"
  }, it.tag), it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "app-navitem__count"
  }, it.count), it.locked && !it.tag && /*#__PURE__*/React.createElement("i", {
    "data-lucide": "lock",
    style: {
      marginLeft: "auto",
      width: 12,
      height: 12,
      color: "var(--granite-400)"
    }
  })))), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__section-head"
  }, /*#__PURE__*/React.createElement("span", null, "Summits"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus"
  })), summits.map((s, i) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "app-navitem",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "app-navitem__dot",
    style: {
      background: s.color
    }
  }), /*#__PURE__*/React.createElement("span", null, s.label), /*#__PURE__*/React.createElement("span", {
    className: "app-navitem__count"
  }, s.count)))), /*#__PURE__*/React.createElement("div", {
    className: "bc-sidebar__progress"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-sidebar__progress-title"
  }, /*#__PURE__*/React.createElement("span", null, "Basecamp"), /*#__PURE__*/React.createElement("span", null, pct, "%")), /*#__PURE__*/React.createElement("div", {
    className: "bc-sidebar__progress-track"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__foot"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "app-navitem"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "settings"
  }), /*#__PURE__*/React.createElement("span", null, "Settings")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "app-navitem"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "life-buoy"
  }), /*#__PURE__*/React.createElement("span", null, "Basecamp guide"))));
}
function BasecampTopBar({
  variantLabel,
  tweaks,
  completedSteps
}) {
  const totalSteps = 5;
  const remaining = totalSteps - completedSteps;
  return /*#__PURE__*/React.createElement("header", {
    className: "app-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-topbar__crumbs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "app-topbar__crumb"
  }, "Stoney Trail Co."), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right"
  }), /*#__PURE__*/React.createElement("span", {
    className: "app-topbar__crumb app-topbar__crumb--current"
  }, "Basecamp \xB7 ", variantLabel), tweaks.state === "handoff" && /*#__PURE__*/React.createElement("span", {
    className: "bc-state-tag bc-state-tag--pine",
    style: {
      marginLeft: 12
    }
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check",
    style: {
      width: 11,
      height: 11,
      strokeWidth: 2.25
    }
  }), "Handing off")), /*#__PURE__*/React.createElement("div", {
    className: "app-topbar__actions"
  }, tweaks.state !== "handoff" && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11.5,
      color: "var(--fg-3)",
      letterSpacing: "0.02em"
    }
  }, remaining > 0 ? `${remaining} of ${totalSteps} steps remaining` : "Setup complete"), /*#__PURE__*/React.createElement("button", {
    className: "app-iconbtn",
    title: "Notifications"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell"
  }), completedSteps >= 2 && /*#__PURE__*/React.createElement("span", {
    className: "app-iconbtn__dot"
  })), tweaks.view === "operator" && /*#__PURE__*/React.createElement("button", {
    className: "app-btn app-btn--ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "message-square"
  }), "Invite operator"), /*#__PURE__*/React.createElement("button", {
    className: "bc-verb-btn"
  }, tweaks.state === "handoff" ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  }), " Go to morning view") : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check"
  }), " Save & continue")), /*#__PURE__*/React.createElement("div", {
    className: "app-avatar app-avatar--me"
  }, "MS")));
}

// Hand-off ribbon shown when state === "handoff" (engagement wrapping up).
function BasecampHandoffRibbon() {
  return /*#__PURE__*/React.createElement("div", {
    className: "bc-handoff"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-handoff__icon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "map"
  })), /*#__PURE__*/React.createElement("div", {
    className: "bc-handoff__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "bc-handoff__title"
  }, "Basecamp is yours to run."), /*#__PURE__*/React.createElement("div", {
    className: "bc-handoff__sub"
  }, "We've installed the cadence and named the operators. Mira owns it from Friday. The morning view goes live then \u2014 everything below is the snapshot we hand off.")), /*#__PURE__*/React.createElement("button", {
    className: "bc-verb-btn bc-verb-btn--ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "download"
  }), "Export handoff doc"));
}
window.BasecampSidebar = BasecampSidebar;
window.BasecampTopBar = BasecampTopBar;
window.BasecampHandoffRibbon = BasecampHandoffRibbon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/BasecampShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/BasecampTrailMap.jsx
try { (() => {
// BasecampTrailMap.jsx — Variant A: 3-column expedition planner
// Left: vertical step list  ·  Center: active step form  ·  Right: ridgeline progress

function VariantA({
  tweaks
}) {
  const STATE_TO_ACTIVE = {
    empty: 0,
    mid: 1,
    handoff: 4
  };
  const activeIdx = STATE_TO_ACTIVE[tweaks.state] ?? 1;
  const steps = BC_STEPS.map((s, i) => ({
    ...s,
    done: i < activeIdx || tweaks.state === "handoff",
    active: i === activeIdx && tweaks.state !== "handoff"
  }));
  const completed = steps.filter(s => s.done).length;
  const current = steps[activeIdx] || steps[0];
  return /*#__PURE__*/React.createElement(React.Fragment, null, tweaks.state === "handoff" && /*#__PURE__*/React.createElement(BasecampHandoffRibbon, null), /*#__PURE__*/React.createElement("div", {
    className: "va"
  }, /*#__PURE__*/React.createElement(VAStepList, {
    steps: steps
  }), /*#__PURE__*/React.createElement(VAPane, {
    step: current,
    steps: steps,
    tweaks: tweaks
  }), /*#__PURE__*/React.createElement(VARail, {
    steps: steps,
    completed: completed
  })));
}
function VAStepList({
  steps
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "va__steps"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 18,
      fontWeight: 500,
      letterSpacing: "-0.01em",
      padding: "4px 14px 12px",
      color: "var(--fg-1)"
    }
  }, "The approach"), steps.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: s.id
  }, /*#__PURE__*/React.createElement("div", {
    className: ["va-step", s.active ? "va-step--active" : "", s.done ? "va-step--done" : ""].join(" ").trim()
  }, /*#__PURE__*/React.createElement("div", {
    className: "va-step__index"
  }, s.done ? /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check"
  }) : i + 1), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "va-step__title"
  }, s.title), /*#__PURE__*/React.createElement("div", {
    className: "va-step__sub"
  }, s.sub)), /*#__PURE__*/React.createElement("div", {
    className: "va-step__time"
  }, s.done ? "done" : s.time)))), /*#__PURE__*/React.createElement("div", {
    className: "va-step__divider"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "4px 14px",
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--fg-3)",
      letterSpacing: "0.02em"
    }
  }, "Estimated 12 min remaining \xB7 we save as you go"));
}
function VAPane({
  step,
  tweaks
}) {
  // We render the "Embed your operators" step's form by default — it's the
  // most representative dense onboarding moment.
  const body = step.id === "operators" ? /*#__PURE__*/React.createElement(VAOperatorsForm, null) : step.id === "summits" ? /*#__PURE__*/React.createElement(VASummitsForm, null) : /*#__PURE__*/React.createElement(VAOperatorsForm, null);
  return /*#__PURE__*/React.createElement("div", {
    className: "va__pane"
  }, /*#__PURE__*/React.createElement("div", {
    className: "va__pane-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "va__pane-eyebrow"
  }, "Step ", BC_STEPS.findIndex(s => s.id === step.id) + 1, " \xB7 ", step.id === "operators" ? "Operators" : step.id), /*#__PURE__*/React.createElement("h1", {
    className: "va__pane-title"
  }, step.title, "."), /*#__PURE__*/React.createElement("p", {
    className: "va__pane-sub"
  }, step.id === "operators" ? "Add the 5–8 people on your leadership team. Pick how often each one reports in — we'll watch for silence past that cadence and surface it as a signal, not a status." : "Each summit is a top-level outcome for the next 90 days. We will not show more than three at once.")), /*#__PURE__*/React.createElement("span", {
    className: "bc-state-tag"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: "var(--summit-500)",
      display: "inline-block"
    }
  }), step.verb, " this step")), /*#__PURE__*/React.createElement("div", {
    className: "va__pane-body"
  }, body), /*#__PURE__*/React.createElement("div", {
    className: "va__pane-foot"
  }, /*#__PURE__*/React.createElement("span", {
    className: "va__pane-foot__note"
  }, "\u2318\u21B5 to ", step.verb.toLowerCase(), " and advance \xB7 esc to step back"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "bc-verb-btn bc-verb-btn--ghost"
  }, "Skip for now"), /*#__PURE__*/React.createElement("button", {
    className: "bc-verb-btn"
  }, step.verb, " 4 operators", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  })))));
}
function VAOperatorsForm() {
  // Show the 4 operators that count as "embedded" + 4 "outside the cadence"
  // — the split is part of the brand voice (we name what we won't do).
  const embedded = BC_OPERATORS.slice(0, 4);
  const adjacent = BC_OPERATORS.slice(4);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "va-divider-row"
  }, /*#__PURE__*/React.createElement("span", null, "Embedded in the cadence")), embedded.map(op => /*#__PURE__*/React.createElement(VAOperatorRow, {
    key: op.name,
    op: op
  })), /*#__PURE__*/React.createElement("div", {
    className: "va-divider-row",
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement("span", null, "Adjacent \u2014 gets the read-ahead, not the standup")), adjacent.map(op => /*#__PURE__*/React.createElement(VAOperatorRow, {
    key: op.name,
    op: op,
    muted: true
  })));
}
function VAOperatorRow({
  op,
  muted
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "va-op-row",
    style: muted ? {
      opacity: 0.72
    } : null
  }, /*#__PURE__*/React.createElement("div", {
    className: `app-avatar app-avatar--${op.color}`
  }, op.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "va-op-row__name"
  }, op.name), /*#__PURE__*/React.createElement("div", {
    className: "va-op-row__role"
  }, op.role)), /*#__PURE__*/React.createElement("button", {
    className: "va-op-row__select"
  }, /*#__PURE__*/React.createElement("span", null, op.cadence), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-down"
  })), /*#__PURE__*/React.createElement("div", {
    className: "va-op-row__cadence"
  }, op.owns, " initiatives"));
}
function VASummitsForm() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "va-divider-row"
  }, /*#__PURE__*/React.createElement("span", null, "Top-level outcomes")), BC_SUMMITS.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.name,
    className: "va-op-row",
    style: {
      gridTemplateColumns: "12px 1fr 100px 120px"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: "50%",
      background: s.color
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "va-op-row__name"
  }, s.name), /*#__PURE__*/React.createElement("div", {
    className: "va-op-row__role"
  }, s.count, " initiatives mapped")), /*#__PURE__*/React.createElement("div", {
    className: "va-op-row__cadence"
  }, s.pct, "% locked"), /*#__PURE__*/React.createElement("button", {
    className: "va-op-row__select"
  }, /*#__PURE__*/React.createElement("span", null, "Edit"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right"
  })))));
}

// ----- Right rail: ridgeline visualization ----------------------------------

function VARail({
  steps,
  completed
}) {
  // Each step is a marker at a fixed x-percentage along the ridgeline.
  // y is hand-tuned to land each marker on a peak of the front ridge.
  const markers = [{
    x: 8,
    y: 35
  },
  // 1 summits
  {
    x: 26,
    y: 24
  },
  // 2 operators
  {
    x: 46,
    y: 38
  },
  // 3 cadence
  {
    x: 66,
    y: 22
  },
  // 4 signals
  {
    x: 88,
    y: 32
  } // 5 read-ahead
  ];
  return /*#__PURE__*/React.createElement("div", {
    className: "va__rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "va__rail-head"
  }, /*#__PURE__*/React.createElement("span", {
    className: "va__rail-title"
  }, "Trail map"), /*#__PURE__*/React.createElement("span", {
    className: "va__rail-tag"
  }, completed, "/5 done")), /*#__PURE__*/React.createElement("div", {
    className: "va__ridge"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 280 220",
    preserveAspectRatio: "none",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M0 175 L 25 138 L 55 168 L 88 122 L 120 158 L 152 118 L 188 152 L 220 124 L 250 156 L 280 138 L 280 220 L 0 220 Z",
    fill: "var(--summit-500)",
    opacity: "0.16"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 200 L 22 168 L 50 188 L 78 148 L 108 180 L 138 142 L 168 178 L 198 138 L 228 174 L 256 150 L 280 174 L 280 220 L 0 220 Z",
    fill: "var(--summit-600)",
    opacity: "0.32"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M0 220 L 18 196 L 42 208 L 68 184 L 96 204 L 124 178 L 152 200 L 178 174 L 204 200 L 232 184 L 258 204 L 280 192 L 280 220 Z",
    fill: "var(--granite-800)",
    opacity: "0.62"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M 22 165 Q 80 130 145 145 Q 200 155 260 138",
    stroke: "var(--granite-400)",
    strokeWidth: "1",
    strokeDasharray: "2 4",
    fill: "none",
    opacity: "0.7"
  })), markers.map((m, i) => {
    const s = steps[i];
    if (!s) return null;
    const klass = s.done ? "va__ridge-marker--done" : s.active ? "va__ridge-marker--active" : "";
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      className: `va__ridge-marker ${klass}`,
      style: {
        left: `${m.x}%`,
        top: `${m.y}%`
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "va__ridge-marker-dot"
    }), /*#__PURE__*/React.createElement("div", {
      className: "va__ridge-marker-label"
    }, i + 1));
  })), /*#__PURE__*/React.createElement("div", {
    className: "va__rail-summit"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--fg-3)",
      marginBottom: 4
    }
  }, "Pinned summits"), BC_SUMMITS.map(s => /*#__PURE__*/React.createElement("div", {
    className: "va__rail-summit-row",
    key: s.name
  }, /*#__PURE__*/React.createElement("span", {
    className: "va__rail-summit-row__dot",
    style: {
      background: s.color
    }
  }), /*#__PURE__*/React.createElement("span", null, s.name), /*#__PURE__*/React.createElement("span", {
    className: "va__rail-summit-row__count"
  }, s.count)))), /*#__PURE__*/React.createElement("div", {
    className: "va__rail-foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "va__rail-foot-line"
  }, /*#__PURE__*/React.createElement("span", null, "Engagement starts"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-1)"
    }
  }, "Mon \xB7 May 18")), /*#__PURE__*/React.createElement("div", {
    className: "va__rail-foot-line",
    style: {
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement("span", null, "We hand off"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--fg-1)"
    }
  }, "12 weeks \xB7 Aug 10"))));
}
window.VariantA = VariantA;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/BasecampTrailMap.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/BasecampWeekGrid.jsx
try { (() => {
// BasecampWeekGrid.jsx — Variant C: a full Mon–Fri calendar is the canvas.
// Drag rituals from the left library onto the grid. Owners on the right.
// Sticky "Lock the cadence" bar at the bottom is the moment of commit.

function VariantC({
  tweaks
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, tweaks.state === "handoff" && /*#__PURE__*/React.createElement(BasecampHandoffRibbon, null), /*#__PURE__*/React.createElement("div", {
    className: "vc"
  }, /*#__PURE__*/React.createElement(VCLibrary, {
    state: tweaks.state
  }), /*#__PURE__*/React.createElement(VCCalendar, {
    state: tweaks.state
  }), /*#__PURE__*/React.createElement(VCOwners, null), /*#__PURE__*/React.createElement(VCFoot, {
    state: tweaks.state
  })));
}

// ----- Left: rituals library -----------------------------------------------

function VCLibrary({
  state
}) {
  return /*#__PURE__*/React.createElement("section", {
    className: "vc__rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vc__rail-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "vc__rail-title"
  }, "Rituals"), /*#__PURE__*/React.createElement("div", {
    className: "vc__rail-sub"
  }, state === "empty" ? "Drag any of these onto the week." : "Six installed. Two to go.")), /*#__PURE__*/React.createElement("div", {
    className: "vc__rail-body"
  }, BC_RITUALS.filter(r => !r.dupOf).map(r => {
    const placed = state === "empty" ? false : r.placed || state === "handoff";
    return /*#__PURE__*/React.createElement("div", {
      key: r.name,
      className: ["vc-ritual", placed ? "vc-ritual--placed" : "", r.color === "pine" ? "vc-ritual--pine" : r.color === "gold" ? "vc-ritual--gold" : ""].join(" ").trim()
    }, /*#__PURE__*/React.createElement("span", {
      className: "vc-ritual__color"
    }), /*#__PURE__*/React.createElement("span", {
      className: "vc-ritual__grip"
    }, "\u22EE\u22EE"), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        minWidth: 0
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vc-ritual__name"
    }, r.name), /*#__PURE__*/React.createElement("div", {
      className: "vc-ritual__meta"
    }, placed ? `installed · ${r.when.split("·")[0].trim()}` : r.when)), placed && /*#__PURE__*/React.createElement("i", {
      "data-lucide": "check",
      style: {
        width: 14,
        height: 14,
        color: "var(--pine-600)",
        strokeWidth: 2
      }
    }));
  })));
}

// ----- Center: actual calendar grid ----------------------------------------

function VCCalendar({
  state
}) {
  const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
  const HOUR_H = 36; // matches --vc-grid-hour-h
  const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const dayDates = ["May 18", "May 19", "May 20", "May 21", "May 22"];
  const eventsForDay = i => {
    if (state === "empty") return [];
    return BC_RITUALS.filter(r => r.day === i && (r.placed || state === "handoff" || r.ghost === false)).filter(r => state === "handoff" || !r.ghost || r.placed).map(r => ({
      ...r,
      ghost: state !== "handoff" && r.ghost
    }));
  };
  const fmt = h => {
    const hh = Math.floor(h);
    const mm = Math.round((h - hh) * 60);
    const suffix = hh >= 12 ? "p" : "a";
    const display = hh > 12 ? hh - 12 : hh;
    return mm === 0 ? `${display}${suffix}` : `${display}:${String(mm).padStart(2, "0")}${suffix}`;
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "vc__cal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-head-cell vc__cal-head-cell--corner"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 10,
      color: "var(--fg-3)",
      textTransform: "uppercase",
      letterSpacing: "0.06em"
    }
  }, "Week 1"), /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-head-cell__date"
  }, "of 12")), dayLabels.map((d, i) => /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-head-cell",
    key: i
  }, /*#__PURE__*/React.createElement("div", null, d), /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-head-cell__date"
  }, dayDates[i])))), /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-hours"
  }, HOURS.map(h => /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-hour",
    key: h
  }, fmt(h)))), dayLabels.map((_, i) => /*#__PURE__*/React.createElement("div", {
    className: "vc__cal-day",
    key: i
  }, eventsForDay(i).map((e, k) => {
    const top = (e.start - 8) * HOUR_H;
    const h = Math.max(28, (e.end - e.start) * HOUR_H - 2);
    return /*#__PURE__*/React.createElement("div", {
      key: k,
      className: ["vc-event", e.color === "pine" ? "vc-event--pine" : e.color === "gold" ? "vc-event--gold" : "", e.ghost ? "vc-event--ghost" : ""].join(" ").trim(),
      style: {
        top,
        height: h
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "vc-event__name"
    }, e.name), /*#__PURE__*/React.createElement("div", {
      className: "vc-event__time"
    }, fmt(e.start), "\u2013", fmt(e.end), " \xB7 ", e.owner));
  }), state === "empty" && i === 0 && /*#__PURE__*/React.createElement("div", {
    className: "vc-event vc-event--ghost",
    style: {
      top: 36,
      height: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "vc-event__name"
  }, "Drop a ritual here \u2192"))))));
}

// ----- Right: owners + assignment ------------------------------------------

function VCOwners() {
  return /*#__PURE__*/React.createElement("section", {
    className: "vc__owners"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vc__owners-head"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "vc__rail-title"
  }, "Owners"), /*#__PURE__*/React.createElement("div", {
    className: "vc__rail-sub"
  }, "Who runs each ritual")), /*#__PURE__*/React.createElement("div", {
    className: "vc__owners-body"
  }, BC_OPERATORS.slice(0, 6).map(op => {
    // Owners we've named for placed rituals get a non-zero count.
    const placedNames = BC_RITUALS.filter(r => r.placed).map(r => r.owner);
    const count = placedNames.filter(n => op.name.startsWith(n)).length;
    return /*#__PURE__*/React.createElement("div", {
      className: "vc-owner",
      key: op.name
    }, /*#__PURE__*/React.createElement("div", {
      className: `app-avatar app-avatar--${op.color}`
    }, op.initials), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: "vc-owner__name"
    }, op.name), /*#__PURE__*/React.createElement("div", {
      className: "vc-owner__role"
    }, op.role)), /*#__PURE__*/React.createElement("div", {
      className: "vc-owner__count"
    }, /*#__PURE__*/React.createElement("strong", null, count), "ritual", count === 1 ? "" : "s"));
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      padding: "10px 12px",
      background: "var(--granite-50)",
      border: "1px dashed var(--granite-300)",
      borderRadius: 10,
      fontFamily: "var(--font-mono)",
      fontSize: 10.5,
      color: "var(--fg-3)",
      letterSpacing: "0.02em",
      lineHeight: 1.5
    }
  }, "Tip \xB7 drop a ritual onto an avatar to assign without dragging through the grid.")));
}

// ----- Bottom: lock the cadence --------------------------------------------

function VCFoot({
  state
}) {
  const stats = state === "empty" ? [{
    l: "Rituals",
    v: "0"
  }, {
    l: "Operators",
    v: "0"
  }, {
    l: "Coverage",
    v: "—"
  }] : state === "handoff" ? [{
    l: "Rituals",
    v: "8"
  }, {
    l: "Operators",
    v: "5"
  }, {
    l: "Coverage",
    v: "Mon–Fri"
  }] : [{
    l: "Rituals",
    v: "6"
  }, {
    l: "Operators",
    v: "4"
  }, {
    l: "Coverage",
    v: "4 of 5 days"
  }];
  const cta = state === "empty" ? "Lock starter cadence" : state === "handoff" ? "Open morning view" : "Lock the cadence";
  return /*#__PURE__*/React.createElement("div", {
    className: "vc__foot"
  }, /*#__PURE__*/React.createElement("div", {
    className: "vc__foot-meta"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: i
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "vc__foot-stat-label"
  }, s.l), /*#__PURE__*/React.createElement("div", {
    className: "vc__foot-stat-value"
  }, s.v)), i < stats.length - 1 && /*#__PURE__*/React.createElement("div", {
    className: "vc__foot-divider"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 11,
      color: state === "handoff" ? "var(--fg-3)" : "oklch(70% 0.012 285)",
      letterSpacing: "0.02em"
    }
  }, state === "handoff" ? "Cadence active · runs weekly" : "We will not show more than three summits at once"), /*#__PURE__*/React.createElement("button", {
    className: "vc__foot-cta"
  }, cta, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  }))));
}
window.VariantC = VariantC;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/BasecampWeekGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/CommandPalette.jsx
try { (() => {
function CommandPalette({
  open,
  onClose
}) {
  if (!open) return null;
  const items = [{
    icon: "target",
    label: "Create initiative",
    shortcut: "I"
  }, {
    icon: "check-square",
    label: "Record a decision",
    shortcut: "D"
  }, {
    icon: "file-text",
    label: "Write a briefing",
    shortcut: "B"
  }, {
    icon: "flag",
    label: "Add milestone",
    shortcut: "M"
  }, {
    icon: "users",
    label: "Invite owner",
    shortcut: "U"
  }, {
    icon: "calendar",
    label: "Jump to next milestone",
    shortcut: "→"
  }, {
    icon: "archive",
    label: "Archive initiative…",
    shortcut: ""
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "palette-scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "palette",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "palette__input"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Type a command or search\u2026",
    autoFocus: true
  }), /*#__PURE__*/React.createElement("kbd", null, "esc")), /*#__PURE__*/React.createElement("div", {
    className: "palette__group"
  }, /*#__PURE__*/React.createElement("div", {
    className: "palette__group-label"
  }, "Actions"), items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    className: "palette__item",
    key: i
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon
  }), /*#__PURE__*/React.createElement("span", null, it.label), it.shortcut && /*#__PURE__*/React.createElement("kbd", {
    className: "palette__shortcut"
  }, it.shortcut))))));
}
window.CommandPalette = CommandPalette;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/CommandPalette.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/DecisionFeed.jsx
try { (() => {
function DecisionFeed() {
  const decisions = [{
    who: "MS",
    c: "summit",
    title: "Ship onboarding v3 without the video tour",
    time: "12 min ago",
    body: "Owner: Mira · Rationale: data shows the tour increases drop-off at step 2."
  }, {
    who: "AO",
    c: "pine",
    title: "Defer EU launch to Q4",
    time: "2 hr ago",
    body: "Owner: Adetola · Rationale: DPA review still open with two prospects."
  }, {
    who: "RK",
    c: "alpenglow",
    title: "Pause pricing experiment",
    time: "Yesterday",
    body: "Owner: Rae · Rationale: sample size insufficient at current traffic."
  }, {
    who: "JK",
    c: "summit",
    title: "Adopt postgres 17 in stage by Aug 1",
    time: "2 days ago",
    body: "Owner: Jay · Rationale: dependency for the data migration milestone."
  }];
  return /*#__PURE__*/React.createElement("div", {
    className: "decisions"
  }, /*#__PURE__*/React.createElement("div", {
    className: "decisions__head"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "decisions__title"
  }, "Recent decisions"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "decisions__all"
  }, "View all")), decisions.map((d, i) => /*#__PURE__*/React.createElement("article", {
    className: "decision",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: `app-avatar app-avatar--${d.c}`
  }, d.who), /*#__PURE__*/React.createElement("div", {
    className: "decision__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "decision__title"
  }, d.title), /*#__PURE__*/React.createElement("div", {
    className: "decision__body"
  }, d.body), /*#__PURE__*/React.createElement("div", {
    className: "decision__meta"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check-square"
  }), /*#__PURE__*/React.createElement("span", null, "Recorded \xB7 ", d.time))))));
}
window.DecisionFeed = DecisionFeed;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/DecisionFeed.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/InitiativeList.jsx
try { (() => {
function InitiativeList() {
  const rows = [{
    name: "Q3 platform reliability",
    summit: "Reliability",
    owner: {
      i: "MS",
      c: "summit"
    },
    status: "on-track",
    due: "Sep 30",
    progress: 62
  }, {
    name: "Onboarding redesign",
    summit: "Growth",
    owner: {
      i: "AO",
      c: "pine"
    },
    status: "at-risk",
    due: "Aug 12",
    progress: 34
  }, {
    name: "SOC 2 Type II audit",
    summit: "Foundations",
    owner: {
      i: "RK",
      c: "alpenglow"
    },
    status: "on-track",
    due: "Oct 18",
    progress: 78
  }, {
    name: "Mobile push-notification overhaul",
    summit: "Growth",
    owner: {
      i: "JK",
      c: "summit"
    },
    status: "slipped",
    due: "Jul 22",
    progress: 41
  }, {
    name: "Pricing page A/B test",
    summit: "Growth",
    owner: {
      i: "MS",
      c: "summit"
    },
    status: "planned",
    due: "Sep 04",
    progress: 0
  }, {
    name: "Datastore migration to PG 17",
    summit: "Reliability",
    owner: {
      i: "TD",
      c: "pine"
    },
    status: "on-track",
    due: "Nov 11",
    progress: 22
  }];
  const statusMap = {
    "on-track": {
      label: "On track",
      c: "var(--pine-500)",
      bg: "var(--pine-50)",
      fg: "var(--pine-800)"
    },
    "at-risk": {
      label: "At risk",
      c: "var(--alpenglow-500)",
      bg: "var(--alpenglow-100)",
      fg: "var(--alpenglow-800)"
    },
    "slipped": {
      label: "Slipped",
      c: "var(--danger)",
      bg: "var(--danger-bg)",
      fg: "oklch(40% 0.180 28)"
    },
    "planned": {
      label: "Planned",
      c: "var(--summit-500)",
      bg: "var(--summit-50)",
      fg: "var(--summit-800)"
    }
  };
  const summitColor = {
    Reliability: "var(--summit-500)",
    Growth: "var(--pine-500)",
    Foundations: "var(--alpenglow-500)"
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "initiative-panel"
  }, /*#__PURE__*/React.createElement("div", {
    className: "panel-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "panel-head__title"
  }, "Initiatives"), /*#__PURE__*/React.createElement("p", {
    className: "panel-head__sub"
  }, "12 in flight \xB7 9 on track \xB7 2 at risk \xB7 1 slipped")), /*#__PURE__*/React.createElement("div", {
    className: "panel-head__tabs"
  }, /*#__PURE__*/React.createElement("button", {
    className: "app-tab app-tab--active"
  }, "All"), /*#__PURE__*/React.createElement("button", {
    className: "app-tab"
  }, "Mine"), /*#__PURE__*/React.createElement("button", {
    className: "app-tab"
  }, "At risk"), /*#__PURE__*/React.createElement("button", {
    className: "app-tab"
  }, "Archived"))), /*#__PURE__*/React.createElement("div", {
    className: "initiative-table"
  }, /*#__PURE__*/React.createElement("div", {
    className: "initiative-table__head"
  }, /*#__PURE__*/React.createElement("div", null, "Initiative"), /*#__PURE__*/React.createElement("div", null, "Summit"), /*#__PURE__*/React.createElement("div", null, "Owner"), /*#__PURE__*/React.createElement("div", null, "Status"), /*#__PURE__*/React.createElement("div", null, "Due"), /*#__PURE__*/React.createElement("div", null, "Progress")), rows.map((r, i) => {
    const s = statusMap[r.status];
    return /*#__PURE__*/React.createElement("div", {
      className: "initiative-row",
      key: i
    }, /*#__PURE__*/React.createElement("div", {
      className: "initiative-row__name"
    }, /*#__PURE__*/React.createElement("i", {
      "data-lucide": "target",
      className: "initiative-row__icon"
    }), r.name), /*#__PURE__*/React.createElement("div", {
      className: "initiative-row__summit"
    }, /*#__PURE__*/React.createElement("span", {
      className: "initiative-row__dot",
      style: {
        background: summitColor[r.summit]
      }
    }), r.summit), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      className: `app-avatar app-avatar--${r.owner.c}`
    }, r.owner.i)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
      className: "initiative-row__pill",
      style: {
        background: s.bg,
        color: s.fg
      }
    }, /*#__PURE__*/React.createElement("span", {
      className: "initiative-row__dot",
      style: {
        background: s.c
      }
    }), s.label)), /*#__PURE__*/React.createElement("div", {
      className: "initiative-row__due"
    }, r.due), /*#__PURE__*/React.createElement("div", {
      className: "initiative-row__progress"
    }, /*#__PURE__*/React.createElement("div", {
      className: "initiative-row__bar"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        width: `${r.progress}%`,
        background: s.c
      }
    })), /*#__PURE__*/React.createElement("span", null, r.progress, "%")));
  })));
}
window.InitiativeList = InitiativeList;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/InitiativeList.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/KPICards.jsx
try { (() => {
function KPICards() {
  const kpis = [{
    label: "Initiatives in flight",
    value: "12",
    delta: "+2 this wk",
    deltaDir: "up",
    spark: [5, 6, 6, 7, 8, 9, 10, 11, 12]
  }, {
    label: "On track",
    value: "9",
    delta: "75% of total",
    deltaDir: "neutral",
    tint: "pine"
  }, {
    label: "Needs the CEO this week",
    value: "4",
    delta: "2 over 48h",
    deltaDir: "warn",
    tint: "alpenglow"
  }, {
    label: "Decisions logged · 30d",
    value: "47",
    delta: "+8 vs prev",
    deltaDir: "up",
    tint: "summit"
  }];
  function Spark({
    data
  }) {
    if (!data) return null;
    const max = Math.max(...data);
    const min = Math.min(...data);
    const w = 80,
      h = 28;
    const pts = data.map((v, i) => {
      const x = i / (data.length - 1) * w;
      const y = h - (v - min) / Math.max(max - min, 1) * h;
      return `${x},${y}`;
    }).join(" ");
    return /*#__PURE__*/React.createElement("svg", {
      width: w,
      height: h,
      className: "kpi__spark",
      viewBox: `0 0 ${w} ${h}`
    }, /*#__PURE__*/React.createElement("polyline", {
      points: pts,
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.5",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "kpi-grid"
  }, kpis.map((k, i) => /*#__PURE__*/React.createElement("div", {
    className: `kpi kpi--${k.tint || ""}`,
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi__label"
  }, k.label), /*#__PURE__*/React.createElement("div", {
    className: "kpi__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "kpi__value"
  }, k.value), /*#__PURE__*/React.createElement(Spark, {
    data: k.spark
  })), /*#__PURE__*/React.createElement("div", {
    className: `kpi__delta kpi__delta--${k.deltaDir}`
  }, k.delta))));
}
window.KPICards = KPICards;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/KPICards.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/MorningView.jsx
try { (() => {
/* ============================================================
   Morning View — the intervention-first CoS dashboard
   Cards represent the only signals worth pinging on. Layout
   is breathy; empty is the goal.
   ============================================================ */

function MorningView({
  state = "healthy"
}) {
  // ---------- Card data ----------
  const allCards = [{
    id: "video",
    verb: "DECIDE",
    ask: "Ship or kill the onboarding video.",
    signal: "Deferred 2×",
    context: "Eleanor wanted data; data is in. Mira's recommendation is kill. Last call delayed Tuesday.",
    meta: {
      owner: "Mira Singh",
      initiative: "Onboarding redesign",
      lastTouch: "3 days ago"
    }
  }, {
    id: "dpa",
    verb: "DRAFT",
    ask: "Draft a one-pager on the EU launch DPA for Eleanor.",
    signal: "Needed by Thursday standup",
    context: "Two prospects are waiting. Adetola has the legal redlines; Eleanor will decide on the call.",
    meta: {
      owner: "Adetola O.",
      initiative: "EU launch",
      lastTouch: "yesterday"
    }
  }, {
    id: "adetola",
    verb: "ASK",
    ask: "Check in with Adetola — they've gone quiet.",
    signal: "No update for 6 days · normally daily",
    context: "Adetola owns the EU launch and the migration. Both stalled at the same time. Worth a 15-min call before standup.",
    meta: {
      owner: "Adetola O.",
      initiative: "2 initiatives at risk",
      lastTouch: "6 days ago"
    }
  }, {
    id: "kill-workshop",
    verb: "KILL",
    ask: "Kill the team-values workshop initiative.",
    signal: "No activity 47 days",
    context: "Started in Q1 by a person who left in March. No owner since. It is not coming back. Archive it.",
    meta: {
      owner: "(unassigned)",
      initiative: "Team-values workshop",
      lastTouch: "47 days ago"
    }
  }, {
    id: "pg17",
    verb: "DECIDE",
    ask: "Resolve the PG 17 timing disagreement.",
    signal: "Jay and Tomás disagree in thread",
    context: "Jay wants stage by Aug 1; Tomás wants prod by Aug 15 directly. The data migration depends on the call.",
    meta: {
      owner: "Jay K. · Tomás D.",
      initiative: "Datastore migration to PG 17",
      lastTouch: "4 hours ago"
    }
  }, {
    id: "soc2",
    verb: "APPROVE",
    ask: "Approve the SOC 2 evidence package.",
    signal: "Auditor needs it by EOD Friday",
    context: "Rae has assembled everything. The CoS sign-off unblocks the external auditor and the two enterprise deals tied to it.",
    meta: {
      owner: "Rae K.",
      initiative: "SOC 2 Type II audit",
      lastTouch: "this morning"
    }
  }, {
    id: "readahead",
    verb: "DRAFT",
    ask: "Draft Monday's read-ahead for the leadership offsite.",
    signal: "3 days out · usually drafted 5 days out",
    context: "Eleanor is presenting H2 strategy. The exec team needs the prior decisions log and the open questions ahead of time.",
    meta: {
      owner: "Mira Singh",
      initiative: "Leadership offsite",
      lastTouch: "—"
    }
  }, {
    id: "rae",
    verb: "ASK",
    ask: "Ask Rae for the pricing-test sample size.",
    signal: "Paused 4 days · no resolution date",
    context: "We paused the experiment for sample-size reasons. There is no date to resume. The growth summit is partly stuck on this.",
    meta: {
      owner: "Rae K.",
      initiative: "Pricing page A/B test",
      lastTouch: "4 days ago"
    }
  }, {
    id: "board-note",
    verb: "DRAFT",
    ask: "Draft a note to the board on the slipped Q3 reliability date.",
    signal: "Slip not yet acknowledged externally",
    context: "Mobile push overhaul missed Jul 22. Board update goes out next week. Better the CoS frames it than they discover it.",
    meta: {
      owner: "Jay K.",
      initiative: "Mobile push notifications",
      lastTouch: "2 days ago"
    }
  }];
  const SETS = {
    empty: [],
    healthy: ["video", "dpa", "adetola"],
    elevated: ["video", "dpa", "adetola", "kill-workshop", "pg17"],
    overloaded: ["video", "dpa", "adetola", "kill-workshop", "pg17", "soc2", "readahead", "rae", "board-note"]
  };
  const cardIds = SETS[state] ?? SETS.healthy;
  const cards = cardIds.map(id => allCards.find(c => c.id === id)).filter(Boolean);

  // Hard ceiling: never show more than 5 expanded cards.
  const VISIBLE_CAP = 5;
  const visible = cards.slice(0, VISIBLE_CAP);
  const hidden = cards.slice(VISIBLE_CAP);

  // ---------- Header copy by state ----------
  const today = new Date("2026-05-15T08:00:00");
  const dayLabel = today.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric"
  });
  let metaTitle, metaSub, metaTone;
  if (cards.length === 0) {
    metaTitle = "Nothing needs you today.";
    metaSub = "The cadence is running. Use the time for the work the strategy deck has been promising.";
    metaTone = "empty";
  } else if (cards.length <= 3) {
    metaTitle = `${cards.length} ${cards.length === 1 ? "thing needs" : "things need"} you this morning.`;
    metaSub = "Cadence is healthy — these are the cards that earned a place.";
    metaTone = "healthy";
  } else if (cards.length <= 6) {
    metaTitle = `${cards.length} things need you this morning.`;
    metaSub = "That's more than usual. Worth a longer triage block today.";
    metaTone = "elevated";
  } else {
    metaTitle = `${cards.length} things need you this morning.`;
    metaSub = "The cadence has slipped, or last week's decisions weren't actually decisions.";
    metaTone = "overloaded";
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "mv"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv__inner"
  }, /*#__PURE__*/React.createElement("header", {
    className: "mv__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv__date"
  }, "Morning of ", dayLabel), /*#__PURE__*/React.createElement("h1", {
    className: `mv__title mv__title--${metaTone}`
  }, metaTitle), /*#__PURE__*/React.createElement("p", {
    className: "mv__sub"
  }, metaSub)), cards.length === 0 && /*#__PURE__*/React.createElement(EmptyState, null), visible.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mv__cards"
  }, visible.map(c => /*#__PURE__*/React.createElement(InterventionCard, {
    key: c.id,
    card: c
  }))), hidden.length > 0 && /*#__PURE__*/React.createElement("div", {
    className: "mv__overflow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv__overflow-head"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "clock"
  }), /*#__PURE__*/React.createElement("span", null, "+", hidden.length, " more ", hidden.length === 1 ? "thing needs" : "things need", " you")), /*#__PURE__*/React.createElement("p", {
    className: "mv__overflow-body"
  }, "Block 30 minutes and triage them in order. We won't preview them here \u2014 the morning view stops at five."), /*#__PURE__*/React.createElement("button", {
    className: "mv-btn mv-btn--primary mv__overflow-cta"
  }, "Open triage queue", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  }))), cards.length > 0 && /*#__PURE__*/React.createElement(AmbientFoot, null)));
}
function InterventionCard({
  card
}) {
  return /*#__PURE__*/React.createElement("article", {
    className: "mv-card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv-card__top"
  }, /*#__PURE__*/React.createElement("span", {
    className: `mv-verb mv-verb--${card.verb.toLowerCase()}`
  }, card.verb), /*#__PURE__*/React.createElement("span", {
    className: "mv-card__signal"
  }, card.signal)), /*#__PURE__*/React.createElement("h2", {
    className: "mv-card__ask"
  }, card.ask), /*#__PURE__*/React.createElement("p", {
    className: "mv-card__context"
  }, card.context), card.meta && /*#__PURE__*/React.createElement("dl", {
    className: "mv-card__meta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mv-card__meta-row"
  }, /*#__PURE__*/React.createElement("dt", null, "Owner"), /*#__PURE__*/React.createElement("dd", null, card.meta.owner)), /*#__PURE__*/React.createElement("div", {
    className: "mv-card__meta-row"
  }, /*#__PURE__*/React.createElement("dt", null, "Initiative"), /*#__PURE__*/React.createElement("dd", null, card.meta.initiative)), /*#__PURE__*/React.createElement("div", {
    className: "mv-card__meta-row"
  }, /*#__PURE__*/React.createElement("dt", null, "Last touch"), /*#__PURE__*/React.createElement("dd", null, card.meta.lastTouch))), /*#__PURE__*/React.createElement("div", {
    className: "mv-card__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "mv-btn mv-btn--primary"
  }, "Do it now", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  })), /*#__PURE__*/React.createElement("button", {
    className: "mv-btn mv-btn--ghost"
  }, "Defer to tomorrow"), /*#__PURE__*/React.createElement("button", {
    className: "mv-btn mv-btn--ghost mv-btn--danger"
  }, "Escalate")));
}
function EmptyState() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mv-empty"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ridgeline.svg",
    alt: "",
    className: "mv-empty__ridge"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mv-empty__inner"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mountain-snow",
    className: "mv-empty__icon"
  }), /*#__PURE__*/React.createElement("div", {
    className: "mv-empty__line"
  }, "11 initiatives running quietly \xB7 last decision logged 2h ago \xB7 0 owners overdue")));
}
function AmbientFoot() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mv-ambient"
  }, /*#__PURE__*/React.createElement("span", null, "11 initiatives running quietly"), /*#__PURE__*/React.createElement("span", {
    className: "mv-ambient__dot"
  }), /*#__PURE__*/React.createElement("span", null, "last decision logged 2h ago"), /*#__PURE__*/React.createElement("span", {
    className: "mv-ambient__dot"
  }), /*#__PURE__*/React.createElement("span", null, "0 owners overdue"));
}
window.MorningView = MorningView;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/MorningView.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/RightRail.jsx
try { (() => {
function RightRail() {
  return /*#__PURE__*/React.createElement("aside", {
    className: "app-rightrail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockers"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockers__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockers__icon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "alert-triangle"
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "blockers__title"
  }, "2 things need the CEO"), /*#__PURE__*/React.createElement("div", {
    className: "blockers__sub"
  }, "No one has answered for > 48h"))), /*#__PURE__*/React.createElement("div", {
    className: "blockers__list"
  }, /*#__PURE__*/React.createElement("div", {
    className: "blockers__item"
  }, /*#__PURE__*/React.createElement("span", null, "EU launch \u2014 DPA pending"), /*#__PURE__*/React.createElement("button", {
    className: "app-btn app-btn--xs"
  }, "Brief")), /*#__PURE__*/React.createElement("div", {
    className: "blockers__item"
  }, /*#__PURE__*/React.createElement("span", null, "Onboarding video \u2014 ship or kill"), /*#__PURE__*/React.createElement("button", {
    className: "app-btn app-btn--xs"
  }, "Brief")))), /*#__PURE__*/React.createElement(DecisionFeed, null));
}
window.RightRail = RightRail;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/RightRail.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/Sidebar.jsx
try { (() => {
function Sidebar() {
  const items = [{
    icon: "layout-dashboard",
    label: "Overview",
    active: true
  }, {
    icon: "target",
    label: "Initiatives",
    count: 12
  }, {
    icon: "check-square",
    label: "Decisions",
    count: 4
  }, {
    icon: "file-text",
    label: "Briefings",
    count: 3
  }, {
    icon: "users",
    label: "Owners",
    count: 28
  }, {
    icon: "calendar",
    label: "Cadence"
  }];
  const summits = [{
    color: "var(--summit-500)",
    label: "Reliability",
    count: 5
  }, {
    color: "var(--pine-500)",
    label: "Growth",
    count: 7
  }, {
    color: "var(--alpenglow-500)",
    label: "Foundations",
    count: 3
  }];
  return /*#__PURE__*/React.createElement("aside", {
    className: "app-sidebar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: ""
  }), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__brand-text"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__org"
  }, "Stoney Trail Co."), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__plan"
  }, "Chief of staff \xB7 6 execs")), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevrons-up-down",
    className: "app-sidebar__brand-caret"
  })), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__search"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "search"
  }), /*#__PURE__*/React.createElement("input", {
    placeholder: "Jump to\u2026"
  }), /*#__PURE__*/React.createElement("kbd", null, "\u2318K")), /*#__PURE__*/React.createElement("nav", {
    className: "app-sidebar__nav"
  }, items.map((it, i) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: `app-navitem ${it.active ? "app-navitem--active" : ""}`,
    key: i
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": it.icon
  }), /*#__PURE__*/React.createElement("span", null, it.label), it.count !== undefined && /*#__PURE__*/React.createElement("span", {
    className: "app-navitem__count"
  }, it.count)))), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__section-head"
  }, /*#__PURE__*/React.createElement("span", null, "Summits"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus"
  })), summits.map((s, i) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "app-navitem",
    key: i
  }, /*#__PURE__*/React.createElement("span", {
    className: "app-navitem__dot",
    style: {
      background: s.color
    }
  }), /*#__PURE__*/React.createElement("span", null, s.label), /*#__PURE__*/React.createElement("span", {
    className: "app-navitem__count"
  }, s.count)))), /*#__PURE__*/React.createElement("div", {
    className: "app-sidebar__foot"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "app-navitem"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "settings"
  }), /*#__PURE__*/React.createElement("span", null, "Settings")), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "app-navitem"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "life-buoy"
  }), /*#__PURE__*/React.createElement("span", null, "Basecamp guide"))));
}
window.Sidebar = Sidebar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/Sidebar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/TopBar.jsx
try { (() => {
function TopBar() {
  return /*#__PURE__*/React.createElement("header", {
    className: "app-topbar"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-topbar__crumbs"
  }, /*#__PURE__*/React.createElement("span", {
    className: "app-topbar__crumb"
  }, "Workspace"), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "chevron-right"
  }), /*#__PURE__*/React.createElement("span", {
    className: "app-topbar__crumb app-topbar__crumb--current"
  }, "Overview")), /*#__PURE__*/React.createElement("div", {
    className: "app-topbar__actions"
  }, /*#__PURE__*/React.createElement("button", {
    className: "app-iconbtn",
    title: "Notifications"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "bell"
  }), /*#__PURE__*/React.createElement("span", {
    className: "app-iconbtn__dot"
  })), /*#__PURE__*/React.createElement("button", {
    className: "app-btn app-btn--ghost"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "filter"
  }), "Filter"), /*#__PURE__*/React.createElement("button", {
    className: "app-btn app-btn--primary"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "plus"
  }), "New initiative"), /*#__PURE__*/React.createElement("div", {
    className: "app-avatar app-avatar--me"
  }, "MS")));
}
window.TopBar = TopBar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/basecamp-data.jsx
try { (() => {
// basecamp-data.jsx — seed data shared by the three onboarding variants

const BC_OPERATORS = [{
  name: "Mira Singh",
  role: "Chief of staff",
  initials: "MS",
  color: "me",
  cadence: "Daily",
  owns: 6
}, {
  name: "Adetola O.",
  role: "VP Engineering",
  initials: "AO",
  color: "summit",
  cadence: "Mon · Thu",
  owns: 4
}, {
  name: "Eleanor W.",
  role: "CEO",
  initials: "EW",
  color: "alpenglow",
  cadence: "Weekly",
  owns: 3
}, {
  name: "Jay K.",
  role: "Head of Platform",
  initials: "JK",
  color: "summit",
  cadence: "Daily",
  owns: 5
}, {
  name: "Rae K.",
  role: "Head of Growth",
  initials: "RK",
  color: "pine",
  cadence: "Tue · Fri",
  owns: 4
}, {
  name: "Tomás D.",
  role: "Staff engineer",
  initials: "TD",
  color: "summit",
  cadence: "Daily",
  owns: 3
}, {
  name: "Sana M.",
  role: "Head of Design",
  initials: "SM",
  color: "pine",
  cadence: "Mon · Wed",
  owns: 2
}, {
  name: "Bea L.",
  role: "Head of People",
  initials: "BL",
  color: "alpenglow",
  cadence: "Weekly",
  owns: 1
}];
const BC_SUMMITS = [{
  name: "Reliability",
  color: "var(--summit-500)",
  pct: 38,
  count: 5
}, {
  name: "Growth",
  color: "var(--pine-500)",
  pct: 22,
  count: 7
}, {
  name: "Foundations",
  color: "var(--alpenglow-500)",
  pct: 64,
  count: 3
}];
const BC_STEPS = [{
  id: "summits",
  title: "Name your summits",
  sub: "Top-level goals for the next 90 days",
  time: "2 min",
  verb: "Pin",
  done: true
}, {
  id: "operators",
  title: "Embed your operators",
  sub: "Leadership team and their update cadence",
  time: "4 min",
  verb: "Embed",
  done: false,
  active: true
}, {
  id: "cadence",
  title: "Install the operating week",
  sub: "Standing meetings and rituals",
  time: "3 min",
  verb: "Install",
  done: false
}, {
  id: "signals",
  title: "Wire your signals",
  sub: "What's worth pinging the CoS about",
  time: "2 min",
  verb: "Lock",
  done: false
}, {
  id: "readahead",
  title: "First Monday read-ahead",
  sub: "Draft this week's briefing",
  time: "5 min",
  verb: "Ship",
  done: false
}];
const BC_RITUALS = [{
  name: "Monday read-ahead",
  when: "Mon 8:00 · 30m",
  owner: "Mira",
  color: "summit",
  day: 0,
  start: 8.0,
  end: 8.5,
  placed: true
}, {
  name: "Exec standup",
  when: "Mon, Wed 9:00 · 30m",
  owner: "Eleanor",
  color: "summit",
  day: 0,
  start: 9.0,
  end: 9.5,
  placed: true
}, {
  name: "Exec standup",
  when: "Wed 9:00 · 30m",
  owner: "Eleanor",
  color: "summit",
  day: 2,
  start: 9.0,
  end: 9.5,
  placed: true,
  dupOf: "Exec standup"
}, {
  name: "Eng + design sync",
  when: "Tue 14:00 · 45m",
  owner: "Adetola",
  color: "pine",
  day: 1,
  start: 14.0,
  end: 14.75,
  placed: true
}, {
  name: "Growth review",
  when: "Thu 11:00 · 60m",
  owner: "Rae",
  color: "pine",
  day: 3,
  start: 11.0,
  end: 12.0,
  placed: true
}, {
  name: "Decisions close-out",
  when: "Fri 16:00 · 30m",
  owner: "Mira",
  color: "summit",
  day: 4,
  start: 16.0,
  end: 16.5,
  placed: true
}, {
  name: "1:1 — Eleanor",
  when: "Tue 10:00 · 30m",
  owner: "Mira",
  color: "gold",
  day: 1,
  start: 10.0,
  end: 10.5,
  placed: false,
  ghost: true
}, {
  name: "Blocker triage",
  when: "Drag onto a day",
  owner: "—",
  color: "gold",
  placed: false
}, {
  name: "Customer call review",
  when: "Drag onto a day",
  owner: "—",
  color: "pine",
  placed: false
}];
const BC_INTERVIEW = {
  locked: [{
    topic: "Summit",
    q: "What's the one outcome that would make this year a clear win?",
    a: "Ship enterprise-grade reliability — under 4 nines uptime, SOC 2 Type II, EU launch unblocked."
  }, {
    topic: "Cadence",
    q: "When does the leadership team meet today?",
    a: "Mondays at 9. Standups are skipped most weeks because Eleanor travels Mondays. Friday close-outs don't exist yet."
  }, {
    topic: "Owners",
    q: "Who runs the operating cadence with you?",
    a: "Adetola for engineering, Rae for growth, Sana for design. Bea owns people but stays out of the cadence."
  }, {
    topic: "Signals",
    q: "What's the one thing that, if it slipped, you'd want to know that morning?",
    a: "Anything Adetola owns. Two initiatives stalled at once last quarter and nobody pinged me."
  }],
  current: {
    eyebrow: "Question 5 of 9",
    q: "What's the one decision your leadership team keeps deferring?",
    help: "Be specific. If multiple, name the one that costs the most to defer another week. The cadence will be designed to force this kind of decision rather than route around it.",
    chips: ["Ship or kill the onboarding video", "PG 17 migration timing", "EU launch DPA scope", "Pricing test sample size"]
  },
  next: [{
    topic: "Signals",
    q: "Who's allowed to interrupt your morning view?"
  }, {
    topic: "Briefings",
    q: "What does Monday's read-ahead need to contain?"
  }, {
    topic: "Handoff",
    q: "What does 'engagement complete' look like for you?"
  }]
};
const BC_CADENCE_PREVIEW = [{
  name: "Monday read-ahead",
  cad: "Mon 8:00",
  on: true
}, {
  name: "Exec standup",
  cad: "Mon · Wed",
  on: true
}, {
  name: "Growth review",
  cad: "Thursdays",
  on: true
}, {
  name: "Decisions close-out",
  cad: "Fri 16:00",
  on: true
}, {
  name: "1:1 — Eleanor",
  cad: "Tuesdays",
  on: false
}, {
  name: "Blocker triage",
  cad: "—",
  on: false
}];
Object.assign(window, {
  BC_OPERATORS,
  BC_SUMMITS,
  BC_STEPS,
  BC_RITUALS,
  BC_INTERVIEW,
  BC_CADENCE_PREVIEW
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/basecamp-data.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/design-canvas.jsx
try { (() => {
// DesignCanvas.jsx — Figma-ish design canvas wrapper
// Warm gray grid bg + Sections + Artboards + PostIt notes.
// Artboards are reorderable (grip-drag), deletable, labels/titles are
// inline-editable, and any artboard can be opened in a fullscreen focus
// overlay (←/→/Esc). State persists to a .design-canvas.state.json sidecar
// via the host bridge. No assets, no deps.
//
// Usage:
//   <DesignCanvas>
//     <DCSection id="onboarding" title="Onboarding" subtitle="First-run variants">
//       <DCArtboard id="a" label="A · Dusk" width={260} height={480}>…</DCArtboard>
//       <DCArtboard id="b" label="B · Minimal" width={260} height={480}>…</DCArtboard>
//     </DCSection>
//   </DesignCanvas>

const DC = {
  bg: '#f0eee9',
  grid: 'rgba(0,0,0,0.06)',
  label: 'rgba(60,50,40,0.7)',
  title: 'rgba(40,30,20,0.85)',
  subtitle: 'rgba(60,50,40,0.6)',
  postitBg: '#fef4a8',
  postitText: '#5a4a2a',
  font: '-apple-system, BlinkMacSystemFont, "Segoe UI", system-ui, sans-serif'
};

// One-time CSS injection (classes are dc-prefixed so they don't collide with
// the hosted design's own styles).
if (typeof document !== 'undefined' && !document.getElementById('dc-styles')) {
  const s = document.createElement('style');
  s.id = 'dc-styles';
  s.textContent = ['.dc-editable{cursor:text;outline:none;white-space:nowrap;border-radius:3px;padding:0 2px;margin:0 -2px}', '.dc-editable:focus{background:#fff;box-shadow:0 0 0 1.5px #c96442}', '[data-dc-slot]{transition:transform .18s cubic-bezier(.2,.7,.3,1)}', '[data-dc-slot].dc-dragging{transition:none;z-index:10;pointer-events:none}', '[data-dc-slot].dc-dragging .dc-card{box-shadow:0 12px 40px rgba(0,0,0,.25),0 0 0 2px #c96442;transform:scale(1.02)}',
  // isolation:isolate contains artboard content's z-indexes so a
  // z-indexed child (sticky navbar etc.) can't paint over .dc-header or
  // the .dc-menu popover that drops into the top of the card.
  '.dc-card{isolation:isolate;transition:box-shadow .15s,transform .15s}', '.dc-card *{scrollbar-width:none}', '.dc-card *::-webkit-scrollbar{display:none}',
  // Per-artboard header: grip + label on the left, delete/expand on the
  // right. Single flex row; when the artboard's on-screen width is too
  // narrow for both the label yields (ellipsis, then hidden entirely below
  // ~4ch via the container query) and the buttons stay on the row.
  '.dc-header{position:absolute;bottom:100%;left:-4px;margin-bottom:calc(4px * var(--dc-inv-zoom,1));z-index:2;', '  display:flex;align-items:center;container-type:inline-size}', '.dc-labelrow{display:flex;align-items:center;gap:4px;height:24px;flex:1 1 auto;min-width:0}', '.dc-grip{flex:0 0 auto;cursor:grab;display:flex;align-items:center;padding:5px 4px;border-radius:4px;transition:background .12s,opacity .12s}', '.dc-grip:hover{background:rgba(0,0,0,.08)}', '.dc-grip:active{cursor:grabbing}', '.dc-labeltext{flex:1 1 auto;min-width:0;cursor:pointer;border-radius:4px;padding:3px 6px;', '  display:flex;align-items:center;transition:background .12s;overflow:hidden}',
  // Below ~4ch of label room: hide the label entirely, and drop the grip to
  // hover-only (same reveal rule as .dc-btns) so a narrow header is clean
  // until the card is moused.
  '@container (max-width: 110px){', '  .dc-labeltext{display:none}', '  .dc-grip{opacity:0}', '  [data-dc-slot]:hover .dc-grip{opacity:1}', '}', '.dc-labeltext:hover{background:rgba(0,0,0,.05)}', '.dc-labeltext .dc-editable{overflow:hidden;text-overflow:ellipsis;max-width:100%}', '.dc-labeltext .dc-editable:focus{overflow:visible;text-overflow:clip}', '.dc-btns{flex:0 0 auto;margin-left:auto;display:flex;gap:2px;opacity:0;transition:opacity .12s}', '[data-dc-slot]:hover .dc-btns,.dc-btns:has(.dc-menu){opacity:1}', '.dc-expand,.dc-kebab{width:22px;height:22px;border-radius:5px;border:none;cursor:pointer;padding:0;', '  background:transparent;color:rgba(60,50,40,.7);display:flex;align-items:center;justify-content:center;', '  font:inherit;transition:background .12s,color .12s}', '.dc-expand:hover,.dc-kebab:hover{background:rgba(0,0,0,.06);color:#2a251f}',
  // Slot hosting an open menu floats above later siblings (which otherwise
  // paint on top — same z-index:auto, later DOM order) so the popup isn't
  // clipped by the next card.
  '[data-dc-slot]:has(.dc-menu){z-index:10}', '.dc-menu{position:absolute;top:100%;right:0;margin-top:4px;background:#fff;border-radius:8px;', '  box-shadow:0 8px 28px rgba(0,0,0,.18),0 0 0 1px rgba(0,0,0,.05);padding:4px;min-width:160px;z-index:10}', '.dc-menu button{display:block;width:100%;padding:7px 10px;border:0;background:transparent;', '  border-radius:5px;font-family:inherit;font-size:13px;font-weight:500;line-height:1.2;', '  color:#29261b;cursor:pointer;text-align:left;transition:background .12s;white-space:nowrap}', '.dc-menu button:hover{background:rgba(0,0,0,.05)}', '.dc-menu hr{border:0;border-top:1px solid rgba(0,0,0,.08);margin:4px 2px}', '.dc-menu .dc-danger{color:#c96442}', '.dc-menu .dc-danger:hover{background:rgba(201,100,66,.1)}',
  // Chrome (titles / labels / buttons) counter-scales against the viewport
  // zoom so it stays a constant on-screen size. --dc-inv-zoom is set by
  // DCViewport on every transform update and inherits to all descendants —
  // any overlay inside the world (e.g. a TweaksPanel on an artboard) can use
  // it the same way.
  //
  // The header uses transform:scale (out-of-flow, so layout impact doesn't
  // matter) with its world-space width set to card-width / inv-zoom so that
  // after counter-scaling its on-screen width exactly matches the card's —
  // that's what lets the container query + text-overflow behave against the
  // card's visible edge at every zoom level.
  //
  // The section head uses CSS zoom instead of transform so its layout box
  // grows with the counter-scale, pushing the card row down — otherwise the
  // constant-screen-size title would overflow into the (shrinking) world-
  // space gap and overlap the artboard headers at low zoom.
  '.dc-header{width:calc((100% + 4px) / var(--dc-inv-zoom,1));', '  transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom left}', '.dc-sectionhead{zoom:var(--dc-inv-zoom,1)}'].join('\n');
  document.head.appendChild(s);
}
const DCCtx = React.createContext(null);

// Recursively unwrap React.Fragment so <>…</> grouping doesn't hide
// DCSection/DCArtboard children from the type-based walks below.
function dcFlatten(children) {
  const out = [];
  React.Children.forEach(children, c => {
    if (c && c.type === React.Fragment) out.push(...dcFlatten(c.props.children));else out.push(c);
  });
  return out;
}

// ─────────────────────────────────────────────────────────────
// DesignCanvas — stateful wrapper around the pan/zoom viewport.
// Owns runtime state (per-section order, renamed titles/labels, hidden
// artboards, focused artboard). Order/titles/labels/hidden persist to a
// .design-canvas.state.json
// sidecar next to the HTML. Reads go via plain fetch() so the saved
// arrangement is visible anywhere the HTML + sidecar are served together
// (omelette preview, direct link, downloaded zip). Writes go through the
// host's window.omelette bridge — editing requires the omelette runtime.
// Focus is ephemeral.
// ─────────────────────────────────────────────────────────────
const DC_STATE_FILE = '.design-canvas.state.json';
function DesignCanvas({
  children,
  minScale,
  maxScale,
  style
}) {
  const [state, setState] = React.useState({
    sections: {},
    focus: null
  });
  // Hold rendering until the sidecar read settles so the saved order/titles
  // appear on first paint (no source-order flash). didRead gates writes until
  // the read settles so the empty initial state can't clobber a slow read;
  // skipNextWrite suppresses the one echo-write that would otherwise follow
  // hydration.
  const [ready, setReady] = React.useState(false);
  const didRead = React.useRef(false);
  const skipNextWrite = React.useRef(false);
  React.useEffect(() => {
    let off = false;
    fetch('./' + DC_STATE_FILE).then(r => r.ok ? r.json() : null).then(saved => {
      if (off || !saved || !saved.sections) return;
      skipNextWrite.current = true;
      setState(s => ({
        ...s,
        sections: saved.sections
      }));
    }).catch(() => {}).finally(() => {
      didRead.current = true;
      if (!off) setReady(true);
    });
    const t = setTimeout(() => {
      if (!off) setReady(true);
    }, 150);
    return () => {
      off = true;
      clearTimeout(t);
    };
  }, []);
  React.useEffect(() => {
    if (!didRead.current) return;
    if (skipNextWrite.current) {
      skipNextWrite.current = false;
      return;
    }
    const t = setTimeout(() => {
      window.omelette?.writeFile(DC_STATE_FILE, JSON.stringify({
        sections: state.sections
      })).catch(() => {});
    }, 250);
    return () => clearTimeout(t);
  }, [state.sections]);

  // Build registries synchronously from children so FocusOverlay can read
  // them in the same render. Fragments are flattened; wrapping in other
  // elements still opts out of focus/reorder.
  const registry = {}; // slotId -> { sectionId, artboard }
  const sectionMeta = {}; // sectionId -> { title, subtitle, slotIds[] }
  const sectionOrder = [];
  dcFlatten(children).forEach(sec => {
    if (!sec || sec.type !== DCSection) return;
    const sid = sec.props.id ?? sec.props.title;
    if (!sid) return;
    sectionOrder.push(sid);
    const persisted = state.sections[sid] || {};
    const abs = [];
    dcFlatten(sec.props.children).forEach(ab => {
      if (!ab || ab.type !== DCArtboard) return;
      const aid = ab.props.id ?? ab.props.label;
      if (aid) abs.push([aid, ab]);
    });
    // hidden is scoped to one source revision — when the agent regenerates
    // (artboard-ID set changes), prior deletes don't apply to new content.
    const srcKey = abs.map(([k]) => k).join('\x1f');
    const hidden = persisted.srcKey === srcKey ? persisted.hidden || [] : [];
    const srcIds = [];
    abs.forEach(([aid, ab]) => {
      if (hidden.includes(aid)) return;
      registry[`${sid}/${aid}`] = {
        sectionId: sid,
        artboard: ab
      };
      srcIds.push(aid);
    });
    const kept = (persisted.order || []).filter(k => srcIds.includes(k));
    sectionMeta[sid] = {
      title: persisted.title ?? sec.props.title,
      subtitle: sec.props.subtitle,
      slotIds: [...kept, ...srcIds.filter(k => !kept.includes(k))]
    };
  });
  const api = React.useMemo(() => ({
    state,
    section: id => state.sections[id] || {},
    patchSection: (id, p) => setState(s => ({
      ...s,
      sections: {
        ...s.sections,
        [id]: {
          ...s.sections[id],
          ...(typeof p === 'function' ? p(s.sections[id] || {}) : p)
        }
      }
    })),
    setFocus: slotId => setState(s => ({
      ...s,
      focus: slotId
    }))
  }), [state]);

  // Esc exits focus; any outside pointerdown commits an in-progress rename.
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === 'Escape') api.setFocus(null);
    };
    const onPd = e => {
      const ae = document.activeElement;
      if (ae && ae.isContentEditable && !ae.contains(e.target)) ae.blur();
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPd, true);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPd, true);
    };
  }, [api]);
  return /*#__PURE__*/React.createElement(DCCtx.Provider, {
    value: api
  }, /*#__PURE__*/React.createElement(DCViewport, {
    minScale: minScale,
    maxScale: maxScale,
    style: style
  }, ready && children), state.focus && registry[state.focus] && /*#__PURE__*/React.createElement(DCFocusOverlay, {
    entry: registry[state.focus],
    sectionMeta: sectionMeta,
    sectionOrder: sectionOrder
  }));
}

// ─────────────────────────────────────────────────────────────
// DCViewport — transform-based pan/zoom (internal)
//
// Input mapping (Figma-style):
//   • trackpad pinch  → zoom   (ctrlKey wheel; Safari gesture* events)
//   • trackpad scroll → pan    (two-finger)
//   • mouse wheel     → zoom   (notched; distinguished from trackpad scroll)
//   • middle-drag / primary-drag-on-bg → pan
//
// Transform state lives in a ref and is written straight to the DOM
// (translate3d + will-change) so wheel ticks don't go through React —
// keeps pans at 60fps on dense canvases.
// ─────────────────────────────────────────────────────────────
function DCViewport({
  children,
  minScale = 0.1,
  maxScale = 8,
  style = {}
}) {
  const vpRef = React.useRef(null);
  const worldRef = React.useRef(null);
  const tf = React.useRef({
    x: 0,
    y: 0,
    scale: 1
  });
  // Persist viewport across reloads so the user lands back where they were
  // after an agent edit or browser refresh. The sandbox origin is already
  // per-project; pathname keeps multiple canvas files in one project apart.
  const tfKey = 'dc-viewport:' + location.pathname;
  const saveT = React.useRef(0);
  const lastPostedScale = React.useRef();
  const apply = React.useCallback(() => {
    const {
      x,
      y,
      scale
    } = tf.current;
    const el = worldRef.current;
    if (!el) return;
    el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    // Exposed for zoom-invariant chrome (labels, buttons, TweaksPanel).
    el.style.setProperty('--dc-inv-zoom', String(1 / scale));
    // Keep the host toolbar's % readout in sync with the canvas scale. Pan
    // ticks leave scale unchanged — skip the cross-frame post for those.
    if (lastPostedScale.current !== scale) {
      lastPostedScale.current = scale;
      window.parent.postMessage({
        type: '__dc_zoom',
        scale
      }, '*');
    }
    clearTimeout(saveT.current);
    saveT.current = setTimeout(() => {
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    }, 200);
  }, [tfKey]);
  React.useLayoutEffect(() => {
    const flush = () => {
      clearTimeout(saveT.current);
      try {
        localStorage.setItem(tfKey, JSON.stringify(tf.current));
      } catch {}
    };
    try {
      const s = JSON.parse(localStorage.getItem(tfKey) || 'null');
      if (s && Number.isFinite(s.x) && Number.isFinite(s.y) && Number.isFinite(s.scale)) {
        tf.current = {
          x: s.x,
          y: s.y,
          scale: Math.min(maxScale, Math.max(minScale, s.scale))
        };
        apply();
      }
    } catch {}
    // Flush on pagehide and unmount so a reload within the 200ms debounce
    // window doesn't drop the last pan/zoom.
    window.addEventListener('pagehide', flush);
    return () => {
      window.removeEventListener('pagehide', flush);
      flush();
    };
  }, []);
  React.useEffect(() => {
    const vp = vpRef.current;
    if (!vp) return;
    const zoomAt = (cx, cy, factor) => {
      const r = vp.getBoundingClientRect();
      const px = cx - r.left,
        py = cy - r.top;
      const t = tf.current;
      const next = Math.min(maxScale, Math.max(minScale, t.scale * factor));
      const k = next / t.scale;
      // --dc-inv-zoom consumers (.dc-sectionhead's CSS zoom, each section's
      // marginBottom) reflow on every scale change, vertically shifting the
      // world layout — so a world point mathematically pinned under the cursor
      // drifts as you zoom (content creeps up on zoom-in, down on zoom-out).
      // Anchor the DOM element under the cursor instead: record its screen Y,
      // apply the transform + --dc-inv-zoom, then cancel whatever vertical
      // drift the reflow introduced so it stays put on screen.
      let marker = null,
        markerY0 = 0;
      if (k !== 1) {
        const hit = document.elementFromPoint(cx, cy);
        marker = hit && hit.closest ? hit.closest('[data-dc-slot],[data-dc-section]') : null;
        if (marker) markerY0 = marker.getBoundingClientRect().top;
      }
      // keep the world point under the cursor fixed
      t.x = px - (px - t.x) * k;
      t.y = py - (py - t.y) * k;
      t.scale = next;
      apply();
      if (marker) {
        // A pure zoom around (cx, cy) maps screen Y → cy + (Y - cy) * k. Any
        // departure after the --dc-inv-zoom reflow is the layout drift.
        const drift = marker.getBoundingClientRect().top - (cy + (markerY0 - cy) * k);
        if (Math.abs(drift) > 0.1) {
          t.y -= drift;
          apply();
        }
      }
    };

    // Mouse-wheel vs trackpad-scroll heuristic. A physical wheel sends
    // line-mode deltas (Firefox) or large integer pixel deltas with no X
    // component (Chrome/Safari, typically multiples of 100/120). Trackpad
    // two-finger scroll sends small/fractional pixel deltas, often with
    // non-zero deltaX. ctrlKey is set by the browser for trackpad pinch.
    const isMouseWheel = e => e.deltaMode !== 0 || e.deltaX === 0 && Number.isInteger(e.deltaY) && Math.abs(e.deltaY) >= 40;
    const onWheel = e => {
      e.preventDefault();
      if (isGesturing) return; // Safari: gesture* owns the pinch — discard concurrent wheels
      if ((e.ctrlKey || e.metaKey) && !isMouseWheel(e)) {
        // trackpad pinch, or ctrl/cmd + smooth-scroll mouse. Notched
        // wheels fall through to the fixed-step branch below.
        zoomAt(e.clientX, e.clientY, Math.exp(-e.deltaY * 0.01));
      } else if (isMouseWheel(e)) {
        // notched mouse wheel — fixed-ratio step per click
        zoomAt(e.clientX, e.clientY, Math.exp(-Math.sign(e.deltaY) * 0.18));
      } else {
        // trackpad two-finger scroll — pan
        tf.current.x -= e.deltaX;
        tf.current.y -= e.deltaY;
        apply();
      }
    };

    // Safari sends native gesture* events for trackpad pinch with a smooth
    // e.scale; preferring these over the ctrl+wheel fallback gives a much
    // better feel there. No-ops on other browsers. Safari also fires
    // ctrlKey wheel events during the same pinch — isGesturing makes
    // onWheel drop those entirely so they neither zoom nor pan.
    let gsBase = 1;
    let isGesturing = false;
    const onGestureStart = e => {
      e.preventDefault();
      isGesturing = true;
      gsBase = tf.current.scale;
    };
    const onGestureChange = e => {
      e.preventDefault();
      zoomAt(e.clientX, e.clientY, gsBase * e.scale / tf.current.scale);
    };
    const onGestureEnd = e => {
      e.preventDefault();
      isGesturing = false;
    };

    // Drag-pan: middle button anywhere, or primary button on canvas
    // background (anything that isn't an artboard or an inline editor).
    let drag = null;
    const onPointerDown = e => {
      const onBg = !e.target.closest('[data-dc-slot], .dc-editable');
      if (!(e.button === 1 || e.button === 0 && onBg)) return;
      e.preventDefault();
      vp.setPointerCapture(e.pointerId);
      drag = {
        id: e.pointerId,
        lx: e.clientX,
        ly: e.clientY
      };
      vp.style.cursor = 'grabbing';
    };
    const onPointerMove = e => {
      if (!drag || e.pointerId !== drag.id) return;
      tf.current.x += e.clientX - drag.lx;
      tf.current.y += e.clientY - drag.ly;
      drag.lx = e.clientX;
      drag.ly = e.clientY;
      apply();
    };
    const onPointerUp = e => {
      if (!drag || e.pointerId !== drag.id) return;
      vp.releasePointerCapture(e.pointerId);
      drag = null;
      vp.style.cursor = '';
    };

    // Host-driven zoom (toolbar % menu). Zooms around viewport centre so the
    // visible midpoint stays fixed — matching the host's iframe-zoom feel.
    const onHostMsg = e => {
      const d = e.data;
      if (d && d.type === '__dc_set_zoom' && typeof d.scale === 'number') {
        const r = vp.getBoundingClientRect();
        zoomAt(r.left + r.width / 2, r.top + r.height / 2, d.scale / tf.current.scale);
      } else if (d && d.type === '__dc_probe') {
        // Host's [readyGen] reset asks whether a canvas is present; it
        // fires on the iframe's native 'load', which for canvases with
        // images/fonts is after our mount-time announce, so re-announce.
        // Clear the pan-tick guard so apply() re-posts the current scale
        // even if it's unchanged — the host just reset dcScale to 1.
        window.parent.postMessage({
          type: '__dc_present'
        }, '*');
        lastPostedScale.current = undefined;
        apply();
      }
    };
    window.addEventListener('message', onHostMsg);
    // Announce canvas mode so the host toolbar proxies its % control here
    // instead of scaling the iframe element (which would just shrink the
    // viewport window of an infinite canvas). The apply() that follows emits
    // the initial __dc_zoom so the toolbar % is correct before first pinch.
    // lastPostedScale reset mirrors the __dc_probe handler: the layout
    // effect's restore-path apply() may already have posted the restored
    // scale (before __dc_present), so clear the guard to re-post it in order.
    window.parent.postMessage({
      type: '__dc_present'
    }, '*');
    lastPostedScale.current = undefined;
    apply();
    vp.addEventListener('wheel', onWheel, {
      passive: false
    });
    vp.addEventListener('gesturestart', onGestureStart, {
      passive: false
    });
    vp.addEventListener('gesturechange', onGestureChange, {
      passive: false
    });
    vp.addEventListener('gestureend', onGestureEnd, {
      passive: false
    });
    vp.addEventListener('pointerdown', onPointerDown);
    vp.addEventListener('pointermove', onPointerMove);
    vp.addEventListener('pointerup', onPointerUp);
    vp.addEventListener('pointercancel', onPointerUp);
    return () => {
      window.removeEventListener('message', onHostMsg);
      vp.removeEventListener('wheel', onWheel);
      vp.removeEventListener('gesturestart', onGestureStart);
      vp.removeEventListener('gesturechange', onGestureChange);
      vp.removeEventListener('gestureend', onGestureEnd);
      vp.removeEventListener('pointerdown', onPointerDown);
      vp.removeEventListener('pointermove', onPointerMove);
      vp.removeEventListener('pointerup', onPointerUp);
      vp.removeEventListener('pointercancel', onPointerUp);
    };
  }, [apply, minScale, maxScale]);
  const gridSvg = `url("data:image/svg+xml,%3Csvg width='120' height='120' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M120 0H0v120' fill='none' stroke='${encodeURIComponent(DC.grid)}' stroke-width='1'/%3E%3C/svg%3E")`;
  return /*#__PURE__*/React.createElement("div", {
    ref: vpRef,
    className: "design-canvas",
    style: {
      height: '100vh',
      width: '100vw',
      background: DC.bg,
      overflow: 'hidden',
      overscrollBehavior: 'none',
      touchAction: 'none',
      position: 'relative',
      fontFamily: DC.font,
      boxSizing: 'border-box',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: worldRef,
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      transformOrigin: '0 0',
      willChange: 'transform',
      width: 'max-content',
      minWidth: '100%',
      minHeight: '100%',
      padding: '60px 0 80px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: -6000,
      backgroundImage: gridSvg,
      backgroundSize: '120px 120px',
      pointerEvents: 'none',
      zIndex: -1
    }
  }), children));
}

// ─────────────────────────────────────────────────────────────
// DCSection — editable title + h-row of artboards in persisted order
// ─────────────────────────────────────────────────────────────
function DCSection({
  id,
  title,
  subtitle,
  children,
  gap = 48
}) {
  const ctx = React.useContext(DCCtx);
  const sid = id ?? title;
  const all = React.Children.toArray(dcFlatten(children));
  const artboards = all.filter(c => c && c.type === DCArtboard);
  const rest = all.filter(c => !(c && c.type === DCArtboard));
  const sec = ctx && sid && ctx.section(sid) || {};
  // Must match DesignCanvas's srcKey computation exactly (it filters falsy
  // IDs), or onDelete persists a srcKey that DesignCanvas never recognizes.
  const allIds = artboards.map(a => a.props.id ?? a.props.label).filter(Boolean);
  const srcKey = allIds.join('\x1f');
  const hidden = sec.srcKey === srcKey ? sec.hidden || [] : [];
  const srcOrder = allIds.filter(k => !hidden.includes(k));
  const order = React.useMemo(() => {
    const kept = (sec.order || []).filter(k => srcOrder.includes(k));
    return [...kept, ...srcOrder.filter(k => !kept.includes(k))];
  }, [sec.order, srcOrder.join('|')]);
  const byId = Object.fromEntries(artboards.map(a => [a.props.id ?? a.props.label, a]));

  // marginBottom counter-scales so the on-screen gap between sections stays
  // constant — otherwise at low zoom the (world-space) gap collapses while
  // the screen-constant sectionhead below it doesn't, and the title reads as
  // belonging to the section above. paddingBottom below is just enough for
  // the 24px artboard-header (abs-positioned above each card) plus ~8px, so
  // the title sits tight against its own row at every zoom.
  return /*#__PURE__*/React.createElement("div", {
    "data-dc-section": sid,
    style: {
      marginBottom: 'calc(80px * var(--dc-inv-zoom, 1))',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 60px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-sectionhead",
    style: {
      paddingBottom: 36
    }
  }, /*#__PURE__*/React.createElement(DCEditable, {
    tag: "div",
    value: sec.title ?? title,
    onChange: v => ctx && sid && ctx.patchSection(sid, {
      title: v
    }),
    style: {
      fontSize: 28,
      fontWeight: 600,
      color: DC.title,
      letterSpacing: -0.4,
      marginBottom: 6,
      display: 'inline-block'
    }
  }), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      color: DC.subtitle
    }
  }, subtitle))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap,
      padding: '0 60px',
      alignItems: 'flex-start',
      width: 'max-content'
    }
  }, order.map(k => /*#__PURE__*/React.createElement(DCArtboardFrame, {
    key: k,
    sectionId: sid,
    artboard: byId[k],
    order: order,
    label: (sec.labels || {})[k] ?? byId[k].props.label,
    onRename: v => ctx && ctx.patchSection(sid, x => ({
      labels: {
        ...x.labels,
        [k]: v
      }
    })),
    onReorder: next => ctx && ctx.patchSection(sid, {
      order: next
    }),
    onDelete: () => ctx && ctx.patchSection(sid, x => ({
      hidden: [...(x.srcKey === srcKey ? x.hidden || [] : []), k],
      srcKey
    })),
    onFocus: () => ctx && ctx.setFocus(`${sid}/${k}`)
  }))), rest);
}

// DCArtboard — marker; rendered by DCArtboardFrame via DCSection.
function DCArtboard() {
  return null;
}

// Per-artboard export (kind: 'png' | 'html'). Both paths share the same
// self-contained clone: computed styles baked in, @font-face / <img> /
// inline-style background-image urls inlined as data URIs. PNG wraps the
// clone in foreignObject→canvas at 3× the artboard's natural width×height
// (same pipeline the host uses for page captures); HTML wraps it in a
// minimal standalone document. Both are independent of viewport zoom.
async function dcExport(node, w, h, name, kind) {
  try {
    await document.fonts.ready;
  } catch {}
  const toDataURL = url => fetch(url).then(r => r.blob()).then(b => new Promise(res => {
    const fr = new FileReader();
    fr.onload = () => res(fr.result);
    fr.onerror = () => res(url);
    fr.readAsDataURL(b);
  })).catch(() => url);

  // Collect @font-face rules. ss.cssRules throws SecurityError on
  // cross-origin sheets (e.g. fonts.googleapis.com) — in that case fetch
  // the CSS text directly (those endpoints send ACAO:*) and regex-extract
  // the blocks. @import and @media/@supports are walked so nested
  // @font-face rules aren't missed.
  const fontRules = [],
    pending = [],
    seen = new Set();
  const scrapeCss = href => {
    if (seen.has(href)) return;
    seen.add(href);
    pending.push(fetch(href).then(r => r.text()).then(css => {
      for (const m of css.match(/@font-face\s*{[^}]*}/g) || []) fontRules.push({
        css: m,
        base: href
      });
      for (const m of css.matchAll(/@import\s+(?:url\()?['"]?([^'")\s;]+)/g)) scrapeCss(new URL(m[1], href).href);
    }).catch(() => {}));
  };
  const walk = (rules, base) => {
    for (const r of rules) {
      if (r.type === CSSRule.FONT_FACE_RULE) fontRules.push({
        css: r.cssText,
        base
      });else if (r.type === CSSRule.IMPORT_RULE && r.styleSheet) {
        const ibase = r.styleSheet.href || base;
        try {
          walk(r.styleSheet.cssRules, ibase);
        } catch {
          scrapeCss(ibase);
        }
      } else if (r.cssRules) walk(r.cssRules, base);
    }
  };
  for (const ss of document.styleSheets) {
    const base = ss.href || location.href;
    try {
      walk(ss.cssRules, base);
    } catch {
      if (ss.href) scrapeCss(ss.href);
    }
  }
  while (pending.length) await pending.shift();
  const fontCss = (await Promise.all(fontRules.map(async rule => {
    let out = rule.css,
      m;
    const re = /url\((['"]?)([^'")]+)\1\)/g;
    while (m = re.exec(rule.css)) {
      if (m[2].indexOf('data:') === 0) continue;
      let abs;
      try {
        abs = new URL(m[2], rule.base).href;
      } catch {
        continue;
      }
      out = out.split(m[0]).join('url("' + (await toDataURL(abs)) + '")');
    }
    return out;
  }))).join('\n');
  const cloneStyled = src => {
    if (src.nodeType === 8 || src.nodeType === 1 && src.tagName === 'SCRIPT') return document.createTextNode('');
    const dst = src.cloneNode(false);
    if (src.nodeType === 1) {
      const cs = getComputedStyle(src);
      let txt = '';
      for (let i = 0; i < cs.length; i++) txt += cs[i] + ':' + cs.getPropertyValue(cs[i]) + ';';
      dst.setAttribute('style', txt + 'animation:none;transition:none;');
      if (src.tagName === 'CANVAS') try {
        const im = document.createElement('img');
        im.src = src.toDataURL();
        im.setAttribute('style', txt);
        return im;
      } catch {}
    }
    for (let c = src.firstChild; c; c = c.nextSibling) dst.appendChild(cloneStyled(c));
    return dst;
  };
  const clone = cloneStyled(node);
  clone.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
  // Drop the card's own shadow/radius so the export is a flush w×h rect;
  // the artboard's own background (if any) is already in the computed style.
  clone.style.boxShadow = 'none';
  clone.style.borderRadius = '0';
  const jobs = [];
  clone.querySelectorAll('img').forEach(el => {
    const s = el.getAttribute('src');
    if (s && s.indexOf('data:') !== 0) jobs.push(toDataURL(el.src).then(d => el.setAttribute('src', d)));
  });
  [clone, ...clone.querySelectorAll('*')].forEach(el => {
    const bg = el.style.backgroundImage;
    if (!bg) return;
    let m;
    const re = /url\(["']?([^"')]+)["']?\)/g;
    while (m = re.exec(bg)) {
      const tok = m[0],
        url = m[1];
      if (url.indexOf('data:') === 0) continue;
      jobs.push(toDataURL(url).then(d => {
        el.style.backgroundImage = el.style.backgroundImage.split(tok).join('url("' + d + '")');
      }));
    }
  });
  await Promise.all(jobs);
  const xml = new XMLSerializer().serializeToString(clone);
  const save = (blob, ext) => {
    if (!blob) return;
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = name + '.' + ext;
    a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };
  if (kind === 'html') {
    const html = '<!doctype html><html><head><meta charset="utf-8"><title>' + name + '</title>' + (fontCss ? '<style>' + fontCss + '</style>' : '') + '</head><body style="margin:0">' + xml + '</body></html>';
    return save(new Blob([html], {
      type: 'text/html'
    }), 'html');
  }

  // PNG: the SVG's own width/height must be the output resolution — an
  // <img>-loaded SVG rasterizes at its intrinsic size, so sizing it at 1×
  // and ctx.scale()-ing up would just upscale a 1× bitmap. viewBox maps the
  // w×h foreignObject onto the px·w × px·h SVG canvas so the browser renders
  // the HTML at full resolution.
  const px = 3;
  const svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + w * px + '" height="' + h * px + '" viewBox="0 0 ' + w + ' ' + h + '"><foreignObject width="' + w + '" height="' + h + '">' + (fontCss ? '<style><![CDATA[' + fontCss + ']]></style>' : '') + xml + '</foreignObject></svg>';
  const img = new Image();
  await new Promise((res, rej) => {
    img.onload = res;
    img.onerror = () => rej(new Error('svg load failed'));
    img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
  });
  const cv = document.createElement('canvas');
  cv.width = w * px;
  cv.height = h * px;
  cv.getContext('2d').drawImage(img, 0, 0);
  cv.toBlob(blob => save(blob, 'png'), 'image/png');
}
function DCArtboardFrame({
  sectionId,
  artboard,
  label,
  order,
  onRename,
  onReorder,
  onFocus,
  onDelete
}) {
  const {
    id: rawId,
    label: rawLabel,
    width = 260,
    height = 480,
    children,
    style = {}
  } = artboard.props;
  const id = rawId ?? rawLabel;
  const ref = React.useRef(null);
  const cardRef = React.useRef(null);
  const menuRef = React.useRef(null);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [confirming, setConfirming] = React.useState(false);

  // ⋯ menu: close on any outside pointerdown. Two-click delete lives inside
  // the menu — first click arms the row, second commits; closing disarms.
  React.useEffect(() => {
    if (!menuOpen) {
      setConfirming(false);
      return;
    }
    const off = e => {
      if (!menuRef.current || !menuRef.current.contains(e.target)) setMenuOpen(false);
    };
    document.addEventListener('pointerdown', off, true);
    return () => document.removeEventListener('pointerdown', off, true);
  }, [menuOpen]);
  const doExport = kind => {
    setMenuOpen(false);
    if (!cardRef.current) return;
    const name = String(label || id || 'artboard').replace(/[^\w\s.-]+/g, '_');
    dcExport(cardRef.current, width, height, name, kind).catch(e => console.error('[design-canvas] export failed:', e));
  };

  // Live drag-reorder: dragged card sticks to cursor; siblings slide into
  // their would-be slots in real time via transforms. DOM order only
  // changes on drop.
  const onGripDown = e => {
    e.preventDefault();
    e.stopPropagation();
    const me = ref.current;
    // translateX is applied in local (pre-scale) space but pointer deltas and
    // getBoundingClientRect().left are screen-space — divide by the viewport's
    // current scale so the dragged card tracks the cursor at any zoom level.
    const scale = me.getBoundingClientRect().width / me.offsetWidth || 1;
    const peers = Array.from(document.querySelectorAll(`[data-dc-section="${sectionId}"] [data-dc-slot]`));
    const homes = peers.map(el => ({
      el,
      id: el.dataset.dcSlot,
      x: el.getBoundingClientRect().left
    }));
    const slotXs = homes.map(h => h.x);
    const startIdx = order.indexOf(id);
    const startX = e.clientX;
    let liveOrder = order.slice();
    me.classList.add('dc-dragging');
    const layout = () => {
      for (const h of homes) {
        if (h.id === id) continue;
        const slot = liveOrder.indexOf(h.id);
        h.el.style.transform = `translateX(${(slotXs[slot] - h.x) / scale}px)`;
      }
    };
    const move = ev => {
      const dx = ev.clientX - startX;
      me.style.transform = `translateX(${dx / scale}px)`;
      const cur = homes[startIdx].x + dx;
      let nearest = 0,
        best = Infinity;
      for (let i = 0; i < slotXs.length; i++) {
        const d = Math.abs(slotXs[i] - cur);
        if (d < best) {
          best = d;
          nearest = i;
        }
      }
      if (liveOrder.indexOf(id) !== nearest) {
        liveOrder = order.filter(k => k !== id);
        liveOrder.splice(nearest, 0, id);
        layout();
      }
    };
    const up = () => {
      document.removeEventListener('pointermove', move);
      document.removeEventListener('pointerup', up);
      const finalSlot = liveOrder.indexOf(id);
      me.classList.remove('dc-dragging');
      me.style.transform = `translateX(${(slotXs[finalSlot] - homes[startIdx].x) / scale}px)`;
      // After the settle transition, kill transitions + clear transforms +
      // commit the reorder in the same frame so there's no visual snap-back.
      setTimeout(() => {
        for (const h of homes) {
          h.el.style.transition = 'none';
          h.el.style.transform = '';
        }
        if (liveOrder.join('|') !== order.join('|')) onReorder(liveOrder);
        requestAnimationFrame(() => requestAnimationFrame(() => {
          for (const h of homes) h.el.style.transition = '';
        }));
      }, 180);
    };
    document.addEventListener('pointermove', move);
    document.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: ref,
    "data-dc-slot": id,
    style: {
      position: 'relative',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-header",
    "data-noncommentable": "",
    style: {
      color: DC.label
    },
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-labelrow"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dc-grip",
    onPointerDown: onGripDown,
    title: "Drag to reorder"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "9",
    height: "13",
    viewBox: "0 0 9 13",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "2",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "6.5",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "2",
    cy: "11",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "7",
    cy: "11",
    r: "1.1"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-labeltext",
    onClick: onFocus,
    title: "Click to focus"
  }, /*#__PURE__*/React.createElement(DCEditable, {
    value: label,
    onChange: onRename,
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: DC.label,
      lineHeight: 1
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dc-btns"
  }, /*#__PURE__*/React.createElement("div", {
    ref: menuRef,
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    className: "dc-kebab",
    title: "More",
    onClick: () => setMenuOpen(o => !o)
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "2.5",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "6",
    r: "1.1"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "9.5",
    cy: "6",
    r: "1.1"
  }))), menuOpen && /*#__PURE__*/React.createElement("div", {
    className: "dc-menu",
    onPointerDown: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('png')
  }, "Download PNG"), /*#__PURE__*/React.createElement("button", {
    onClick: () => doExport('html')
  }, "Download HTML"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("button", {
    className: "dc-danger",
    onClick: () => {
      if (confirming) {
        setMenuOpen(false);
        onDelete();
      } else setConfirming(true);
    }
  }, confirming ? 'Click again to delete' : 'Delete'))), /*#__PURE__*/React.createElement("button", {
    className: "dc-expand",
    onClick: onFocus,
    title: "Focus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 12 12",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M7 1h4v4M5 11H1V7M11 1L7.5 4.5M1 11l3.5-3.5"
  }))))), /*#__PURE__*/React.createElement("div", {
    ref: cardRef,
    className: "dc-card",
    style: {
      borderRadius: 2,
      boxShadow: '0 1px 3px rgba(0,0,0,.08),0 4px 16px rgba(0,0,0,.06)',
      overflow: 'hidden',
      width,
      height,
      background: '#fff',
      ...style
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb',
      fontSize: 13,
      fontFamily: DC.font
    }
  }, id)));
}

// Inline rename — commits on blur or Enter.
function DCEditable({
  value,
  onChange,
  style,
  tag = 'span',
  onClick
}) {
  const T = tag;
  return /*#__PURE__*/React.createElement(T, {
    className: "dc-editable",
    contentEditable: true,
    suppressContentEditableWarning: true,
    onClick: onClick,
    onPointerDown: e => e.stopPropagation(),
    onBlur: e => onChange && onChange(e.currentTarget.textContent),
    onKeyDown: e => {
      if (e.key === 'Enter') {
        e.preventDefault();
        e.currentTarget.blur();
      }
    },
    style: style
  }, value);
}

// ─────────────────────────────────────────────────────────────
// Focus mode — overlay one artboard; ←/→ within section, ↑/↓ across
// sections, Esc or backdrop click to exit.
// ─────────────────────────────────────────────────────────────
function DCFocusOverlay({
  entry,
  sectionMeta,
  sectionOrder
}) {
  const ctx = React.useContext(DCCtx);
  const {
    sectionId,
    artboard
  } = entry;
  const sec = ctx.section(sectionId);
  const meta = sectionMeta[sectionId];
  const peers = meta.slotIds;
  const aid = artboard.props.id ?? artboard.props.label;
  const idx = peers.indexOf(aid);
  const secIdx = sectionOrder.indexOf(sectionId);
  const go = d => {
    const n = peers[(idx + d + peers.length) % peers.length];
    if (n) ctx.setFocus(`${sectionId}/${n}`);
  };
  const goSection = d => {
    // Sections whose artboards are all deleted have slotIds:[] — step past
    // them to the next non-empty section so ↑/↓ doesn't dead-end.
    const n = sectionOrder.length;
    for (let i = 1; i < n; i++) {
      const ns = sectionOrder[((secIdx + d * i) % n + n) % n];
      const first = sectionMeta[ns] && sectionMeta[ns].slotIds[0];
      if (first) {
        ctx.setFocus(`${ns}/${first}`);
        return;
      }
    }
  };
  React.useEffect(() => {
    const k = e => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        go(-1);
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        go(1);
      }
      if (e.key === 'ArrowUp') {
        e.preventDefault();
        goSection(-1);
      }
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goSection(1);
      }
    };
    document.addEventListener('keydown', k);
    return () => document.removeEventListener('keydown', k);
  });
  const {
    width = 260,
    height = 480,
    children
  } = artboard.props;
  const [vp, setVp] = React.useState({
    w: window.innerWidth,
    h: window.innerHeight
  });
  React.useEffect(() => {
    const r = () => setVp({
      w: window.innerWidth,
      h: window.innerHeight
    });
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  const scale = Math.max(0.1, Math.min((vp.w - 200) / width, (vp.h - 260) / height, 2));
  const [ddOpen, setDd] = React.useState(false);
  const Arrow = ({
    dir,
    onClick
  }) => /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onClick();
    },
    style: {
      position: 'absolute',
      top: '50%',
      [dir]: 28,
      transform: 'translateY(-50%)',
      border: 'none',
      background: 'rgba(255,255,255,.08)',
      color: 'rgba(255,255,255,.9)',
      width: 44,
      height: 44,
      borderRadius: 22,
      fontSize: 18,
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background .15s'
    },
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.18)',
    onMouseLeave: e => e.currentTarget.style.background = 'rgba(255,255,255,.08)'
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 18 18",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: dir === 'left' ? 'M11 3L5 9l6 6' : 'M7 3l6 6-6 6'
  })));

  // Portal to body so position:fixed is the real viewport regardless of any
  // transform on DesignCanvas's ancestors (including the canvas zoom itself).
  return ReactDOM.createPortal(/*#__PURE__*/React.createElement("div", {
    onClick: () => ctx.setFocus(null),
    onWheel: e => e.preventDefault(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(24,20,16,.6)',
      backdropFilter: 'blur(14px)',
      fontFamily: DC.font,
      color: '#fff'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: 72,
      display: 'flex',
      alignItems: 'flex-start',
      padding: '16px 20px 0',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => setDd(o => !o),
    style: {
      border: 'none',
      background: 'transparent',
      color: '#fff',
      cursor: 'pointer',
      padding: '6px 8px',
      borderRadius: 6,
      textAlign: 'left',
      fontFamily: 'inherit'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 18,
      fontWeight: 600,
      letterSpacing: -0.3
    }
  }, meta.title), /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 11 11",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    style: {
      opacity: .7
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2 4l3.5 3.5L9 4"
  }))), meta.subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontSize: 13,
      opacity: .6,
      fontWeight: 400,
      marginTop: 2
    }
  }, meta.subtitle)), ddOpen && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: 4,
      background: '#2a251f',
      borderRadius: 8,
      boxShadow: '0 8px 32px rgba(0,0,0,.4)',
      padding: 4,
      minWidth: 200,
      zIndex: 10
    }
  }, sectionOrder.filter(sid => sectionMeta[sid].slotIds.length).map(sid => /*#__PURE__*/React.createElement("button", {
    key: sid,
    onClick: () => {
      setDd(false);
      const f = sectionMeta[sid].slotIds[0];
      if (f) ctx.setFocus(`${sid}/${f}`);
    },
    style: {
      display: 'block',
      width: '100%',
      textAlign: 'left',
      border: 'none',
      cursor: 'pointer',
      background: sid === sectionId ? 'rgba(255,255,255,.1)' : 'transparent',
      color: '#fff',
      padding: '8px 12px',
      borderRadius: 5,
      fontSize: 14,
      fontWeight: sid === sectionId ? 600 : 400,
      fontFamily: 'inherit'
    }
  }, sectionMeta[sid].title)))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: () => ctx.setFocus(null),
    onMouseEnter: e => e.currentTarget.style.background = 'rgba(255,255,255,.12)',
    onMouseLeave: e => e.currentTarget.style.background = 'transparent',
    style: {
      border: 'none',
      background: 'transparent',
      color: 'rgba(255,255,255,.7)',
      width: 32,
      height: 32,
      borderRadius: 16,
      fontSize: 20,
      cursor: 'pointer',
      lineHeight: 1,
      transition: 'background .12s'
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 64,
      bottom: 56,
      left: 100,
      right: 100,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: width * scale,
      height: height * scale,
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width,
      height,
      transform: `scale(${scale})`,
      transformOrigin: 'top left',
      background: '#fff',
      borderRadius: 2,
      overflow: 'hidden',
      boxShadow: '0 20px 80px rgba(0,0,0,.4)'
    }
  }, children || /*#__PURE__*/React.createElement("div", {
    style: {
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#bbb'
    }
  }, aid))), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      fontSize: 14,
      fontWeight: 500,
      opacity: .85,
      textAlign: 'center'
    }
  }, (sec.labels || {})[aid] ?? artboard.props.label, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .5,
      marginLeft: 10,
      fontVariantNumeric: 'tabular-nums'
    }
  }, idx + 1, " / ", peers.length))), /*#__PURE__*/React.createElement(Arrow, {
    dir: "left",
    onClick: () => go(-1)
  }), /*#__PURE__*/React.createElement(Arrow, {
    dir: "right",
    onClick: () => go(1)
  }), /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'absolute',
      bottom: 20,
      left: '50%',
      transform: 'translateX(-50%)',
      display: 'flex',
      gap: 8
    }
  }, peers.map((p, i) => /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => ctx.setFocus(`${sectionId}/${p}`),
    style: {
      border: 'none',
      padding: 0,
      cursor: 'pointer',
      width: 6,
      height: 6,
      borderRadius: 3,
      background: i === idx ? '#fff' : 'rgba(255,255,255,.3)'
    }
  })))), document.body);
}

// ─────────────────────────────────────────────────────────────
// Post-it — absolute-positioned sticky note
// ─────────────────────────────────────────────────────────────
function DCPostIt({
  children,
  top,
  left,
  right,
  bottom,
  rotate = -2,
  width = 180
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top,
      left,
      right,
      bottom,
      width,
      background: DC.postitBg,
      padding: '14px 16px',
      fontFamily: '"Comic Sans MS", "Marker Felt", "Segoe Print", cursive',
      fontSize: 14,
      lineHeight: 1.4,
      color: DC.postitText,
      boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
      transform: `rotate(${rotate}deg)`,
      zIndex: 5
    }
  }, children);
}
Object.assign(window, {
  DesignCanvas,
  DCSection,
  DCArtboard,
  DCPostIt
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/design-canvas.jsx", error: String((e && e.message) || e) }); }

// ui_kits/app/tweaks-panel.jsx
try { (() => {
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  noDeckControls = false,
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  // Auto-inject a rail toggle when a <deck-stage> is on the page. The
  // toggle drives the deck's per-viewer _railVisible via window message;
  // state is mirrored from the same localStorage key the deck reads so
  // the control reflects reality across reloads. The mechanism is the
  // message — authors who want custom placement can post it directly
  // and pass noDeckControls to suppress this one.
  const hasDeckStage = React.useMemo(() => typeof document !== 'undefined' && !!document.querySelector('deck-stage'), []);
  // deck-stage enables its rail in connectedCallback, but this panel can
  // mount before that element has upgraded. The initial read catches the
  // common case; the listener covers mounting first. (Older deck-stage.js
  // copies still wait for the host's __omelette_rail_enabled postMessage —
  // same listener handles those.)
  const [railEnabled, setRailEnabled] = React.useState(() => hasDeckStage && !!document.querySelector('deck-stage')?._railEnabled);
  React.useEffect(() => {
    if (!hasDeckStage || railEnabled) return undefined;
    const onMsg = e => {
      if (e.data && e.data.type === '__omelette_rail_enabled') setRailEnabled(true);
    };
    window.addEventListener('message', onMsg);
    return () => window.removeEventListener('message', onMsg);
  }, [hasDeckStage, railEnabled]);
  const [railVisible, setRailVisible] = React.useState(() => {
    try {
      return localStorage.getItem('deck-stage.railVisible') !== '0';
    } catch (e) {
      return true;
    }
  });
  const toggleRail = on => {
    setRailVisible(on);
    window.postMessage({
      type: '__deck_rail_visible',
      on
    }, '*');
  };
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-noncommentable": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children, hasDeckStage && railEnabled && !noDeckControls && /*#__PURE__*/React.createElement(TweakSection, {
    label: "Deck"
  }, /*#__PURE__*/React.createElement(TweakToggle, {
    label: "Thumbnail rail",
    value: railVisible,
    onChange: toggleRail
  })))));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/app/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case_study/ApproachTimeline.jsx
try { (() => {
function ApproachTimeline() {
  const phases = [{
    tag: "Week 1–2",
    icon: "compass",
    title: "Diagnostic",
    body: "Interviewed every initiative owner. Built one map of the work. Labelled each initiative real, theatre, or zombie. Killed four.",
    kpi: "18 → 11 active initiatives"
  }, {
    tag: "Week 3–6",
    icon: "git-branch",
    title: "Install the cadence",
    body: "Replaced the weekly status with a Friday decision log. Named one owner per initiative. Wrote the rule for what gets escalated and when.",
    kpi: "First decision shipped Friday of week 3"
  }, {
    tag: "Week 7–12",
    icon: "users",
    title: "Embed and run",
    body: "Our two operators ran the cadence alongside the COO. We sat in the rooms, took the notes, chased the blockers, and stopped doing it ourselves once the team did.",
    kpi: "Operator handoff completed week 11"
  }, {
    tag: "Week 13–14",
    icon: "log-out",
    title: "Handoff",
    body: "Wrote the playbook with the team. Trained a full-time Director of Operating Cadence. Left.",
    kpi: "Engagement closed on schedule"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "cs-approach",
    "data-screen-label": "03 Approach"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-eyebrow"
  }, "What we did"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-section__title"
  }, "Fourteen weeks. Four phases. One playbook.")), /*#__PURE__*/React.createElement("ol", {
    className: "cs-timeline"
  }, phases.map((p, i) => /*#__PURE__*/React.createElement("li", {
    className: "cs-phase",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-phase__rail"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-phase__rail-dot"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": p.icon
  })), i < phases.length - 1 && /*#__PURE__*/React.createElement("div", {
    className: "cs-phase__rail-line"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cs-phase__main"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-phase__tag"
  }, p.tag), /*#__PURE__*/React.createElement("h3", {
    className: "cs-phase__title"
  }, p.title), /*#__PURE__*/React.createElement("p", {
    className: "cs-phase__body"
  }, p.body), /*#__PURE__*/React.createElement("div", {
    className: "cs-phase__kpi"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "check"
  }), p.kpi))))));
}
window.ApproachTimeline = ApproachTimeline;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case_study/ApproachTimeline.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case_study/CaseHero.jsx
try { (() => {
function CaseHero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cs-hero",
    "data-screen-label": "01 Case hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-hero__copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-eyebrow"
  }, "Case study \xB7 2025"), /*#__PURE__*/React.createElement("h1", {
    className: "cs-hero__client"
  }, "Foothills Labs"), /*#__PURE__*/React.createElement("p", {
    className: "cs-hero__summary"
  }, "A 60-person bioscience team had a Series B and a roadmap. They did not have a way to know which initiatives were real. We embedded for 14 weeks, installed an operating cadence, and shipped the year's plan two months ahead of schedule."), /*#__PURE__*/React.createElement("div", {
    className: "cs-hero__outcome"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-hero__outcome-value"
  }, "62 days"), /*#__PURE__*/React.createElement("div", {
    className: "cs-hero__outcome-label"
  }, "earlier than planned ship date on their flagship trial-tracking platform"))), /*#__PURE__*/React.createElement("aside", {
    className: "cs-scope"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__label"
  }, "Client"), /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__value"
  }, "Foothills Labs")), /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__label"
  }, "Sector"), /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__value"
  }, "Bioscience \xB7 clinical trials")), /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__label"
  }, "Stage"), /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__value"
  }, "Series B \xB7 60 people")), /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__label"
  }, "Engagement"), /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__value"
  }, "14 weeks \xB7 embedded")), /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__label"
  }, "Operators"), /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__owners"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__owner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-avatar app-avatar--summit"
  }, "MS"), /*#__PURE__*/React.createElement("span", null, "Mira S.")), /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__owner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-avatar app-avatar--pine"
  }, "AO"), /*#__PURE__*/React.createElement("span", null, "Adetola O.")))), /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__row"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__label"
  }, "Services"), /*#__PURE__*/React.createElement("div", {
    className: "cs-scope__tags"
  }, /*#__PURE__*/React.createElement("span", {
    className: "cs-tag"
  }, "Diagnostic"), /*#__PURE__*/React.createElement("span", {
    className: "cs-tag"
  }, "Decision cadence"), /*#__PURE__*/React.createElement("span", {
    className: "cs-tag"
  }, "Embedded ops"))))));
}
window.CaseHero = CaseHero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case_study/CaseHero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case_study/OutcomesGrid.jsx
try { (() => {
function OutcomesGrid() {
  const outcomes = [{
    value: "62 days",
    label: "earlier than planned ship on the flagship platform"
  }, {
    value: "4 → 0.5 hr",
    label: "of leadership time in status meetings, per week"
  }, {
    value: "11 / 11",
    label: "initiatives on track or shipped by week 14"
  }, {
    value: "$240k",
    label: "engagement fee · vs. $1.8M earlier reorg attempt"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "cs-outcomes",
    "data-screen-label": "05 Outcomes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-eyebrow"
  }, "Outcomes"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-section__title"
  }, "What changed.")), /*#__PURE__*/React.createElement("div", {
    className: "cs-outcomes__grid"
  }, outcomes.map((o, i) => /*#__PURE__*/React.createElement("div", {
    className: "cs-outcome",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-outcome__value"
  }, o.value), /*#__PURE__*/React.createElement("div", {
    className: "cs-outcome__label"
  }, o.label)))));
}
window.OutcomesGrid = OutcomesGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case_study/OutcomesGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case_study/PullQuote.jsx
try { (() => {
function PullQuote() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cs-quote",
    "data-screen-label": "04 Pull quote"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-quote__inner"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "quote",
    className: "cs-quote__mark"
  }), /*#__PURE__*/React.createElement("blockquote", {
    className: "cs-quote__text"
  }, "We hired them to advise. They ran the company for fourteen weeks instead, and now we know how to run it ourselves. Cheapest expensive thing we've ever bought."), /*#__PURE__*/React.createElement("div", {
    className: "cs-quote__attr"
  }, /*#__PURE__*/React.createElement("div", {
    className: "app-avatar app-avatar--summit cs-quote__avatar"
  }, "EW"), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "cs-quote__name"
  }, "Eleanor Wachter"), /*#__PURE__*/React.createElement("div", {
    className: "cs-quote__role"
  }, "CEO, Foothills Labs")))));
}
window.PullQuote = PullQuote;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case_study/PullQuote.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case_study/RelatedCases.jsx
try { (() => {
function RelatedCases() {
  const related = [{
    client: "Bowmont Capital",
    sector: "Private equity",
    duration: "10 weeks",
    note: "Replaced three quarterly reviews with a monthly decision log across the portfolio."
  }, {
    client: "Glacier Civic",
    sector: "Municipal gov",
    duration: "16 weeks",
    note: "Stood up an interdepartmental operating cadence for a $40M infrastructure programme."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "cs-related",
    "data-screen-label": "06 Related"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-eyebrow"
  }, "More work"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-section__title"
  }, "Related engagements.")), /*#__PURE__*/React.createElement("div", {
    className: "cs-related__grid"
  }, related.map((r, i) => /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "cs-related__card",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-related__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-related__client"
  }, r.client), /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-up-right"
  })), /*#__PURE__*/React.createElement("div", {
    className: "cs-related__meta"
  }, /*#__PURE__*/React.createElement("span", null, r.sector), /*#__PURE__*/React.createElement("span", {
    className: "cs-related__dot"
  }), /*#__PURE__*/React.createElement("span", null, r.duration)), /*#__PURE__*/React.createElement("p", {
    className: "cs-related__note"
  }, r.note)))));
}
window.RelatedCases = RelatedCases;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case_study/RelatedCases.jsx", error: String((e && e.message) || e) }); }

// ui_kits/case_study/SituationSection.jsx
try { (() => {
function SituationSection() {
  return /*#__PURE__*/React.createElement("section", {
    className: "cs-situation",
    "data-screen-label": "02 Situation"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-eyebrow"
  }, "The situation"), /*#__PURE__*/React.createElement("h2", {
    className: "cs-section__title"
  }, "A roadmap nobody could read."), /*#__PURE__*/React.createElement("div", {
    className: "cs-prose"
  }, /*#__PURE__*/React.createElement("p", null, "Foothills had just raised. The board deck named eighteen initiatives across four product lines. The team Slack named twenty-three. The all-hands deck named eleven. None of these lists agreed on owners, dates, or whether the work had even started."), /*#__PURE__*/React.createElement("p", null, "Status meetings ran four hours a week and produced colors, not decisions. The CEO knew which initiatives were \"important.\" She did not know which were moving."), /*#__PURE__*/React.createElement("div", {
    className: "cs-pullstat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cs-pullstat__value"
  }, "4 hr"), /*#__PURE__*/React.createElement("div", {
    className: "cs-pullstat__label"
  }, "of weekly leadership time spent in status meetings \u2014 before we arrived")), /*#__PURE__*/React.createElement("p", null, "We were brought in for a two-week diagnostic. The diagnostic became a fourteen-week engagement. The first thing we did was stop the status meeting."))));
}
window.SituationSection = SituationSection;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/case_study/SituationSection.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/CTABanner.jsx
try { (() => {
function CTABanner() {
  return /*#__PURE__*/React.createElement("section", {
    className: "ee-cta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-cta__card"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-cta__copy"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-eyebrow ee-eyebrow--invert"
  }, "Discovery call \xB7 30 minutes"), /*#__PURE__*/React.createElement("h2", {
    className: "ee-cta__title"
  }, "Stop describing the work. Start moving it."), /*#__PURE__*/React.createElement("p", {
    className: "ee-cta__body"
  }, "Tell us what's stuck. We'll tell you within a week whether we can help, what an engagement would look like, and what it would cost. No proposal pitch.")), /*#__PURE__*/React.createElement("div", {
    className: "ee-cta__actions"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ee-btn ee-btn--alpenglow ee-btn--lg"
  }, "Book a discovery call", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ee-link ee-link--invert"
  }, "Or email us directly"))));
}
window.CTABanner = CTABanner;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/CTABanner.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/FeatureGrid.jsx
try { (() => {
function FeatureGrid() {
  const features = [{
    icon: "compass",
    title: "Initiative diagnostic",
    body: "Two weeks. We map every in-flight initiative, owner, and decision, then tell you which ones are real and which ones are theatre."
  }, {
    icon: "git-branch",
    title: "Decision cadence",
    body: "We install the weekly rhythm — decisions logged, blockers escalated, owners named — and run it with your team until it sticks."
  }, {
    icon: "users",
    title: "Embedded operators",
    body: "Our operators sit inside your team for the engagement. They take notes, run reviews, and chase the work. They are not coaches."
  }, {
    icon: "alert-triangle",
    title: "Blocker triage",
    body: "When a milestone slips or an owner goes quiet, we name it that week — not at the quarterly review."
  }, {
    icon: "trending-up",
    title: "Outcome reviews",
    body: "Every six weeks we sit with leadership and read the metric the work was supposed to move. We do not grade on effort."
  }, {
    icon: "log-out",
    title: "Handoff, not lock-in",
    body: "Most engagements end at twelve weeks. We leave you the playbook, the cadence, and an operator on your team who runs it."
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "ee-features",
    "data-screen-label": "02 Services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-section-head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-eyebrow"
  }, "What we do"), /*#__PURE__*/React.createElement("h2", {
    className: "ee-section-head__title"
  }, "An operating layer, installed."), /*#__PURE__*/React.createElement("p", {
    className: "ee-section-head__sub"
  }, "Six things we do in every engagement. We do not advise, deck, or workshop.")), /*#__PURE__*/React.createElement("div", {
    className: "ee-features__grid"
  }, features.map((f, i) => /*#__PURE__*/React.createElement("article", {
    className: "ee-feature",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-feature__icon"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": f.icon
  })), /*#__PURE__*/React.createElement("h3", {
    className: "ee-feature__title"
  }, f.title), /*#__PURE__*/React.createElement("p", {
    className: "ee-feature__body"
  }, f.body)))));
}
window.FeatureGrid = FeatureGrid;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/FeatureGrid.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Footer.jsx
try { (() => {
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "ee-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-footer__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-footer__brand"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ee-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: "",
    className: "ee-brand__mark"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ee-brand__word"
  }, "Elevate ", /*#__PURE__*/React.createElement("span", {
    className: "ee-brand__sub"
  }, "Execution"))), /*#__PURE__*/React.createElement("p", {
    className: "ee-footer__tagline"
  }, "Strategy descends. Execution ascends.", /*#__PURE__*/React.createElement("br", null), "Built in Calgary, Alberta \xB7 Treaty 7 territory.")), /*#__PURE__*/React.createElement("div", {
    className: "ee-footer__cols"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-footer__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-footer__heading"
  }, "Work with us"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Services"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Approach"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Case studies"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Pricing"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Book a call")), /*#__PURE__*/React.createElement("div", {
    className: "ee-footer__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-footer__heading"
  }, "Firm"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Team"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Careers"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Contact")), /*#__PURE__*/React.createElement("div", {
    className: "ee-footer__col"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-footer__heading"
  }, "Field notes"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Operator's field guide"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Writing"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Talks"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Newsletter")))), /*#__PURE__*/React.createElement("div", {
    className: "ee-footer__legal"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 Elevate Execution Inc."), /*#__PURE__*/React.createElement("span", null, "Privacy \xB7 Terms \xB7 DPA")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ridgeline.svg",
    alt: "",
    className: "ee-footer__ridge"
  }));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/Hero.jsx
try { (() => {
function Hero() {
  return /*#__PURE__*/React.createElement("section", {
    className: "ee-hero",
    "data-screen-label": "01 Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-hero__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-eyebrow"
  }, "Operating consultancy \xB7 Calgary, AB"), /*#__PURE__*/React.createElement("h1", {
    className: "ee-hero__title"
  }, "Strategy descends.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Execution"), " ascends."), /*#__PURE__*/React.createElement("p", {
    className: "ee-hero__lead"
  }, "We embed with your leadership team for 12 weeks and ship the work your strategy deck has been promising."), /*#__PURE__*/React.createElement("div", {
    className: "ee-hero__cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ee-btn ee-btn--primary ee-btn--lg"
  }, "Book a discovery call", /*#__PURE__*/React.createElement("i", {
    "data-lucide": "arrow-right"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ee-btn ee-btn--ghost ee-btn--lg"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "folder-open"
  }), "See recent engagements")), /*#__PURE__*/React.createElement("div", {
    className: "ee-hero__caption"
  }, /*#__PURE__*/React.createElement("i", {
    "data-lucide": "mountain-snow"
  }), "Based in Calgary \xB7 operators across North America")), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/ridgeline.svg",
    alt: "",
    className: "ee-hero__ridge"
  }));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/LogoWall.jsx
try { (() => {
function LogoWall() {
  const logos = ["Bowmont Capital", "Foothills Labs", "Glacier Civic", "Cascade & Co", "Northpath", "Stoney Trail Group", "Banff Bioscience"];
  return /*#__PURE__*/React.createElement("section", {
    className: "ee-logowall"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-logowall__label"
  }, "Operating teams we've worked with"), /*#__PURE__*/React.createElement("div", {
    className: "ee-logowall__row"
  }, logos.map((l, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ee-logowall__item"
  }, l))));
}
window.LogoWall = LogoWall;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/LogoWall.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/MetricStrip.jsx
try { (() => {
function MetricStrip() {
  const stats = [{
    value: "12 wk",
    label: "median engagement — strategy deck to first shipped milestone"
  }, {
    value: "87%",
    label: "of engagements end with the client running the cadence themselves"
  }, {
    value: "3.4×",
    label: "fewer status meetings in client orgs by the end of an engagement"
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "ee-metricstrip",
    "data-screen-label": "03 Outcomes"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-metricstrip__inner"
  }, stats.map((s, i) => /*#__PURE__*/React.createElement("div", {
    className: "ee-metric",
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-metric__value"
  }, s.value), /*#__PURE__*/React.createElement("div", {
    className: "ee-metric__label"
  }, s.label)))), /*#__PURE__*/React.createElement("img", {
    src: "../../assets/topo-motif.svg",
    alt: "",
    className: "ee-metricstrip__motif"
  }));
}
window.MetricStrip = MetricStrip;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/MetricStrip.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketing/TopNav.jsx
try { (() => {
function TopNav() {
  return /*#__PURE__*/React.createElement("header", {
    className: "ee-topnav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ee-topnav__inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ee-brand"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    alt: "",
    className: "ee-brand__mark"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ee-brand__word"
  }, "Elevate ", /*#__PURE__*/React.createElement("span", {
    className: "ee-brand__sub"
  }, "Execution"))), /*#__PURE__*/React.createElement("nav", {
    className: "ee-topnav__links"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Services"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Approach"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Case studies"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Team"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Field notes")), /*#__PURE__*/React.createElement("div", {
    className: "ee-topnav__cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    className: "ee-btn ee-btn--primary ee-btn--sm"
  }, "Book a discovery call"))));
}
window.TopNav = TopNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketing/TopNav.jsx", error: String((e && e.message) || e) }); }

})();
