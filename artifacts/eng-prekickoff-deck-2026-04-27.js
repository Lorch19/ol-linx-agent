// Engineering Pre-Kickoff Deck — AI Governance / MCP Gateway
// Sunday 2026-04-27 · Omri Lorch
// v2 — concise, alignment-focused. Run: node artifacts/eng-prekickoff-deck-2026-04-27.js

const pptxgen = require("pptxgenjs");
const path = require("path");

const OUT = path.join(__dirname, "eng-prekickoff-2026-04-27.pptx");

// Palette — Midnight Executive
const NAVY = "0F1B3D";
const NAVY_DEEP = "091230";
const ICE = "E8EEFC";
const WHITE = "FFFFFF";
const INK = "1A1F36";
const MUTED = "64748B";
const TEAL = "02C39A";
const AMBER = "F59E0B";
const LINE = "CBD5E1";

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Engineering Pre-Kickoff — AI Governance";
pres.author = "Omri Lorch";

const W = 10, H = 5.625;
const TOTAL = 8;

const accentBar = (s, color = TEAL) =>
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: H, fill: { color }, line: { color, width: 0 } });

const pageNum = (s, n, dark = false) =>
  s.addText(`${n} / ${TOTAL}`, {
    x: W - 0.9, y: H - 0.35, w: 0.5, h: 0.25,
    fontSize: 9, fontFace: "Calibri", color: dark ? ICE : MUTED, align: "right", margin: 0,
  });

const eyebrow = (s, text, dark = false) =>
  s.addText(text, {
    x: 0.5, y: 0.4, w: 8, h: 0.3,
    fontSize: 11, fontFace: "Calibri", color: dark ? TEAL : MUTED, bold: true, charSpacing: 4, margin: 0,
  });

const title = (s, text) =>
  s.addText(text, {
    x: 0.5, y: 0.8, w: 9, h: 0.85, fontSize: 34, fontFace: "Georgia", color: INK, bold: true, margin: 0,
  });

// ============================================================
// 1 — COVER
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: NAVY };
  s.addShape(pres.shapes.OVAL, { x: 7.2, y: -1.8, w: 5, h: 5, fill: { color: TEAL, transparency: 80 }, line: { color: TEAL, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 8.4, y: 3.2, w: 3, h: 3, fill: { color: ICE, transparency: 90 }, line: { color: ICE, width: 0 } });

  s.addText("LINX · ENGINEERING PRE-KICKOFF", { x: 0.6, y: 0.7, w: 8, h: 0.35, fontSize: 11, fontFace: "Calibri", color: TEAL, bold: true, charSpacing: 6, margin: 0 });
  s.addText("Agentic AI Governance", { x: 0.6, y: 1.3, w: 8.5, h: 1.3, fontSize: 52, fontFace: "Georgia", color: WHITE, bold: true, margin: 0 });
  s.addText("Align on what we know. Name what we don't. Start moving.", { x: 0.6, y: 2.75, w: 8.5, h: 0.5, fontSize: 18, fontFace: "Calibri", color: ICE, italic: true, margin: 0 });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.2, w: 0.6, h: 0.05, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
  s.addText([
    { text: "Sunday · 27 April 2026", options: { bold: true, color: WHITE, breakLine: true } },
    { text: "Omri Lorch · Product", options: { color: ICE } },
  ], { x: 0.6, y: 4.5, w: 6, h: 0.8, fontSize: 14, fontFace: "Calibri", margin: 0 });
}

// ============================================================
// 2 — PROBLEM SPACE (triangle idea — built in shapes)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "01 · The problem space");
  title(s, "Agents are humans on steroids.");
  s.addText("They don't sleep. They don't wait. They operate at machine speed. Human IAM wasn't built for this shape.", {
    x: 0.5, y: 1.7, w: 9, h: 0.5, fontSize: 14, fontFace: "Calibri", color: MUTED, italic: true, margin: 0,
  });

  // 3 identity columns: Human · AI Agent · NHI
  const cY = 2.4, cH = 2.4, cW = 2.95, cGap = 0.15;
  const cStart = (W - (3 * cW + 2 * cGap)) / 2;

  const types = [
    {
      label: "HUMAN",
      color: NAVY,
      tags: "Role-based · Judicious\nStatic · Deterministic",
      risk: "Socially exploitable · Over-permissioned over time",
    },
    {
      label: "AI AGENT",
      color: TEAL,
      tags: "Autonomous · Goal-based\nIterative · Nondeterministic\nLLM-powered · Context-aware",
      risk: "Manipulable via inputs · Dangerous when over-trusted",
      highlight: true,
    },
    {
      label: "NHI",
      color: NAVY,
      tags: "Restless · Works at scale\nPermission-greedy",
      risk: "Misconfigurations · Long-lived secrets",
    },
  ];

  types.forEach((t, i) => {
    const x = cStart + i * (cW + cGap);
    const fill = t.highlight ? ICE : WHITE;
    const borderW = t.highlight ? 2 : 1;
    s.addShape(pres.shapes.RECTANGLE, { x, y: cY, w: cW, h: cH, fill: { color: fill }, line: { color: t.color, width: borderW } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: cY, w: cW, h: 0.4, fill: { color: t.color }, line: { color: t.color, width: 0 } });
    s.addText(t.label, { x, y: cY, w: cW, h: 0.4, fontSize: 13, fontFace: "Calibri", color: WHITE, bold: true, align: "center", valign: "middle", charSpacing: 4, margin: 0 });
    s.addText(t.tags, { x: x + 0.2, y: cY + 0.55, w: cW - 0.4, h: 1.15, fontSize: 12, fontFace: "Calibri", color: INK, margin: 0 });
    s.addText([
      { text: "RISK\n", options: { bold: true, color: t.color, fontSize: 9, charSpacing: 2 } },
      { text: t.risk, options: { color: MUTED, fontSize: 10, italic: true } },
    ], { x: x + 0.2, y: cY + 1.7, w: cW - 0.4, h: 0.65, fontFace: "Calibri", margin: 0 });
  });

  s.addText("144 agents per human (SACR benchmark). Manual oversight structurally impossible.", {
    x: 0.5, y: 5.05, w: W - 1, h: 0.3, fontSize: 11, fontFace: "Calibri", color: NAVY, bold: true, italic: true, align: "center", margin: 0,
  });
  pageNum(s, 2);
}

// ============================================================
// 3 — 10 CAPABILITIES FRAMEWORK
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "02 · The map");
  title(s, "What \u201Cagent IAM\u201D fully means.");
  s.addText("10-capability framework (\u201CIAM for LLM-Based AI Agents\u201D). Our scope tags show where each one lands for us.", {
    x: 0.5, y: 1.7, w: 9, h: 0.4, fontSize: 12, fontFace: "Calibri", color: MUTED, italic: true, margin: 0,
  });

  // 10 capabilities in 2 columns of 5
  const caps = [
    { n: "1", t: "Registration & identification", tag: "M1", color: TEAL },
    { n: "2", t: "Ownership assignment", tag: "M1", color: TEAL },
    { n: "3", t: "Authentication", tag: "M2", color: AMBER },
    { n: "4", t: "Authorization & delegation", tag: "P0", color: NAVY },
    { n: "5", t: "Human oversight & approval", tag: "Post-P0", color: MUTED },
    { n: "6", t: "Resource policy enforcement", tag: "P0", color: NAVY },
    { n: "7", t: "Credential lifecycle", tag: "Post-P0", color: MUTED },
    { n: "8", t: "Auditability & logging", tag: "P0", color: NAVY },
    { n: "9", t: "Multi-agent collaboration", tag: "Future", color: MUTED },
    { n: "10", t: "Visibility & observability", tag: "M1 + P0", color: TEAL },
  ];

  const gY = 2.15, rowH = 0.45, colW = 4.55;
  caps.forEach((c, i) => {
    const col = i < 5 ? 0 : 1;
    const row = i % 5;
    const x = 0.5 + col * (colW + 0.2);
    const y = gY + row * rowH;
    // number badge
    s.addShape(pres.shapes.OVAL, { x, y: y + 0.05, w: 0.32, h: 0.32, fill: { color: ICE }, line: { color: LINE, width: 0.5 } });
    s.addText(c.n, { x, y: y + 0.05, w: 0.32, h: 0.32, fontSize: 11, fontFace: "Calibri", color: NAVY, bold: true, align: "center", valign: "middle", margin: 0 });
    // title
    s.addText(c.t, { x: x + 0.4, y, w: 2.95, h: rowH, fontSize: 12, fontFace: "Calibri", color: INK, valign: "middle", margin: 0 });
    // tag pill
    s.addShape(pres.shapes.RECTANGLE, { x: x + 3.4, y: y + 0.08, w: 1.1, h: 0.28, fill: { color: c.color }, line: { color: c.color, width: 0 } });
    s.addText(c.tag, { x: x + 3.4, y: y + 0.08, w: 1.1, h: 0.28, fontSize: 9, fontFace: "Calibri", color: WHITE, bold: true, align: "center", valign: "middle", charSpacing: 2, margin: 0 });
  });

  // legend
  s.addText([
    { text: "M1", options: { bold: true, color: TEAL, fontSize: 10 } },
    { text: " shipped  ·  ", options: { color: MUTED, fontSize: 10 } },
    { text: "M2", options: { bold: true, color: AMBER, fontSize: 10 } },
    { text: " in flight  ·  ", options: { color: MUTED, fontSize: 10 } },
    { text: "P0", options: { bold: true, color: NAVY, fontSize: 10 } },
    { text: " Gateway demo  ·  ", options: { color: MUTED, fontSize: 10 } },
    { text: "Post-P0 / Future", options: { color: MUTED, fontSize: 10 } },
    { text: " next", options: { color: MUTED, fontSize: 10 } },
  ], { x: 0.5, y: 5.05, w: W - 1, h: 0.3, fontFace: "Calibri", margin: 0 });

  pageNum(s, 3);
}

// ============================================================
// 4 — WHAT'S DONE
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "03 · What's done");
  title(s, "M1 is live. Real agents, real data.");

  s.addText([
    { text: "Agent graph model", options: { bold: true, color: NAVY, fontSize: 14, breakLine: true } },
    { text: "Agents as first-class nodes. Owner, model, tools, issues.", options: { color: MUTED, fontSize: 12, breakLine: true } },
    { text: " ", options: { fontSize: 4, breakLine: true } },
    { text: "Discovery › Agents UI + entity page", options: { bold: true, color: NAVY, fontSize: 14, breakLine: true } },
    { text: "Inventory across platforms. Issues: AGENT_EXCESSIVE_PERMISSIONS, AGENT_OWNER_OFFBOARDED.", options: { color: MUTED, fontSize: 12, breakLine: true } },
    { text: " ", options: { fontSize: 4, breakLine: true } },
    { text: "M2: Access Intelligence in flight", options: { bold: true, color: AMBER, fontSize: 14, breakLine: true } },
    { text: "74% complete. The unfinished 26% is where the IdP-API approach hit the wall.", options: { color: MUTED, fontSize: 12 } },
  ], { x: 0.6, y: 1.75, w: 4.6, h: 3.0, fontFace: "Calibri", margin: 0 });

  // UI screenshot
  s.addImage({
    path: "/tmp/mor-pics/slide12_160.png",
    x: 5.3, y: 1.75, w: 4.2, h: 2.8,
    sizing: { type: "contain", w: 4.2, h: 2.8 },
  });
  s.addText("Linx · release-notes-assistant · real M1 product", {
    x: 5.3, y: 4.6, w: 4.2, h: 0.25, fontSize: 9, fontFace: "Calibri", color: MUTED, italic: true, align: "center", margin: 0,
  });

  // Connector strip
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: W - 1, h: 0.45, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
  s.addText([
    { text: "CONNECTORS LIVE:  ", options: { bold: true, color: TEAL, fontSize: 11, charSpacing: 3 } },
    { text: "Gemini  ·  Vertex AI  ·  Amazon Bedrock  ·  n8n", options: { color: WHITE, fontSize: 11 } },
  ], { x: 0.7, y: 5.0, w: W - 1.4, h: 0.45, fontFace: "Calibri", valign: "middle", margin: 0 });

  pageNum(s, 4);
}

// ============================================================
// 5 — LESSON → PIVOT
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: NAVY_DEEP };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: H, fill: { color: AMBER }, line: { color: AMBER, width: 0 } });

  eyebrow(s, "04 · The lesson", true);
  s.addText("\u201C", { x: 0.4, y: 0.7, w: 1.2, h: 1.5, fontSize: 110, fontFace: "Georgia", color: AMBER, bold: true, margin: 0 });
  s.addText("We counted on the IdPs to identify agents.\nIt didn't work.", {
    x: 1.5, y: 1.2, w: 8, h: 1.7, fontSize: 34, fontFace: "Georgia", color: WHITE, bold: true, margin: 0,
  });

  s.addText("Agent access is ephemeral, intent-driven, multi-hop through tools and MCP. The IAM API surface can't see that shape.", {
    x: 1.5, y: 3.05, w: 8, h: 0.7, fontSize: 14, fontFace: "Calibri", color: ICE, italic: true, margin: 0,
  });

  // Pivot callout
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.95, w: W - 1, h: 0.85, fill: { color: TEAL, transparency: 75 }, line: { color: TEAL, width: 0 } });
  s.addText([
    { text: "THE PIVOT  ·  ", options: { bold: true, color: TEAL, fontSize: 11, charSpacing: 3 } },
    { text: "MCP Gateway. Govern at the protocol layer — one enforcement point between every agent and every tool.", options: { color: WHITE, bold: true, fontSize: 14 } },
    { text: "\nSarit + Amir Ben Ami leading architecture. Cycle 79 AI priority.", options: { color: ICE, fontSize: 12, italic: true } },
  ], { x: 0.75, y: 3.95, w: W - 1.5, h: 0.85, fontFace: "Calibri", valign: "middle", margin: 0 });

  s.addText("Market tailwind: Saviynt, Token Security, Astrix all converging on MCP-layer governance. We're aligned with where the category is going.", {
    x: 0.5, y: 4.95, w: W - 1, h: 0.4, fontSize: 10, fontFace: "Calibri", color: ICE, italic: true, align: "center", margin: 0,
  });

  pageNum(s, 5, true);
}

// ============================================================
// 6 — P0 SCOPE
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "05 · P0 scope — the demo target");
  title(s, "What we're building first.");
  s.addText("From Sarit's architecture session. Some pieces may already exist in M1/M2 — we'll connect the dots.", {
    x: 0.5, y: 1.7, w: 9, h: 0.4, fontSize: 12, fontFace: "Calibri", color: MUTED, italic: true, margin: 0,
  });

  const cols = [
    {
      num: "01",
      title: "Gateway Core",
      body: "The protocol-layer enforcement point. Every agent → tool call flows through it. Identity-aware, loggable, policy-checkable.",
      footer: "Eng research starts here.",
    },
    {
      num: "02",
      title: "Policy Agent",
      body: "Access profiles for agents.\n\n• At the MCP / platform level\n• AND at the individual tool level\n\nGranular, not binary.",
    },
    {
      num: "03",
      title: "Screens",
      body: "\u201CIntegration\u201D tab for MCPs\n\nLogs — three views:\n• System Logs\n• Governance Logs\n• All Access Logs",
    },
  ];
  const cY = 2.2, cH = 2.7, cW = 3.0, cGap = 0.1;
  const cStart = (W - (3 * cW + 2 * cGap)) / 2;
  cols.forEach((c, i) => {
    const x = cStart + i * (cW + cGap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: cY, w: cW, h: cH, fill: { color: WHITE }, line: { color: LINE, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: cY, w: cW, h: 0.08, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
    s.addText(c.num, { x: x + 0.3, y: cY + 0.2, w: 1, h: 0.35, fontSize: 11, fontFace: "Calibri", color: TEAL, bold: true, charSpacing: 3, margin: 0 });
    s.addText(c.title, { x: x + 0.3, y: cY + 0.55, w: cW - 0.6, h: 0.5, fontSize: 18, fontFace: "Georgia", color: NAVY, bold: true, margin: 0 });
    s.addText(c.body, { x: x + 0.3, y: cY + 1.05, w: cW - 0.6, h: cH - 1.2, fontSize: 11, fontFace: "Calibri", color: INK, margin: 0, paraSpaceAfter: 3 });
    if (c.footer) {
      s.addText(c.footer, { x: x + 0.3, y: cY + cH - 0.35, w: cW - 0.6, h: 0.3, fontSize: 10, fontFace: "Calibri", color: TEAL, bold: true, italic: true, margin: 0 });
    }
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.05, w: W - 1, h: 0.4, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
  s.addText("This is what demoes at Identiverse · June 15.", {
    x: 0.7, y: 5.05, w: W - 1.4, h: 0.4, fontSize: 12, fontFace: "Calibri", color: WHITE, bold: true, italic: true, valign: "middle", margin: 0,
  });

  pageNum(s, 6);
}

// ============================================================
// 7 — POST-P0
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "06 · Post-P0");
  title(s, "Where this goes next.");

  const items = [
    { t: "JIT with Gateway", b: "On-the-fly access grants. With or without human-in-the-loop. Ephemeral, scoped per task." },
    { t: "JML for Agents", b: "Joiner / mover / leaver lifecycle. Owner offboarded? Their agents don't linger." },
    { t: "Onboarding", b: "UI for connecting apps to the Gateway. Secured setup flow — self-service." },
    { t: "Agent Intent", b: "Identity + behavior + context + data sensitivity, continuously evaluated. Vision horizon." },
  ];
  const gY = 1.85, gH = 1.5, gW = 4.55, gGap = 0.2;
  const gXs = [0.5, 0.5 + gW + gGap];
  const gYs = [gY, gY + gH + gGap];

  items.forEach((it, i) => {
    const x = gXs[i % 2];
    const y = gYs[Math.floor(i / 2)];
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: gW, h: gH, fill: { color: ICE }, line: { color: ICE, width: 0 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.08, h: gH, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
    s.addText(it.t, { x: x + 0.3, y: y + 0.2, w: gW - 0.5, h: 0.45, fontSize: 17, fontFace: "Georgia", color: NAVY, bold: true, margin: 0 });
    s.addText(it.b, { x: x + 0.3, y: y + 0.7, w: gW - 0.5, h: gH - 0.8, fontSize: 11, fontFace: "Calibri", color: INK, margin: 0 });
  });

  s.addText("Sequenced after P0. Omri scopes these in parallel while Eng researches Gateway Core.", {
    x: 0.5, y: 5.05, w: W - 1, h: 0.3, fontSize: 11, fontFace: "Calibri", color: MUTED, italic: true, align: "center", margin: 0,
  });

  pageNum(s, 7);
}

// ============================================================
// 8 — KNOWNS · UNKNOWNS · NEXT STEPS (close, dark)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: NAVY };
  s.addShape(pres.shapes.OVAL, { x: -2, y: 3.5, w: 5, h: 5, fill: { color: TEAL, transparency: 85 }, line: { color: TEAL, width: 0 } });

  eyebrow(s, "07 · What we leave with", true);
  s.addText("Know · Don't know · Start.", {
    x: 0.5, y: 0.85, w: 9, h: 0.8, fontSize: 32, fontFace: "Georgia", color: WHITE, bold: true, margin: 0,
  });

  // 3 columns: Know / Don't know / Start
  const sections = [
    {
      label: "WE KNOW",
      color: TEAL,
      items: [
        "Deadline: Identiverse, June 15",
        "Arch lead: Sarit + Amir Ben Ami",
        "P0 target: Gateway Core, Policy Agent, Screens",
        "M1 is shipped & real",
      ],
    },
    {
      label: "WE DON'T KNOW",
      color: AMBER,
      items: [
        "What Gateway Core actually looks like",
        "Build options and coverage trade-offs",
        "How much M2 work feeds in vs. pauses",
        "What from M1/M2 already covers P0 — Omri to map",
      ],
    },
    {
      label: "WE START NOW",
      color: ICE,
      items: [
        "Eng: research Gateway Core — options, coverage, POC plan",
        "Omri: competitors + market scan (share what we already have)",
        "Omri: scope rest of P0 + post-P0 in parallel",
        "Next sync: cycle in 2 weeks",
      ],
    },
  ];
  const sY = 1.9, sH = 2.9, sW = 3.0, sGap = 0.15;
  const sStart = (W - (3 * sW + 2 * sGap)) / 2;
  sections.forEach((sec, i) => {
    const x = sStart + i * (sW + sGap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: sY, w: sW, h: 0.35, fill: { color: sec.color }, line: { color: sec.color, width: 0 } });
    s.addText(sec.label, { x, y: sY, w: sW, h: 0.35, fontSize: 11, fontFace: "Calibri", color: NAVY, bold: true, align: "center", valign: "middle", charSpacing: 3, margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x, y: sY + 0.35, w: sW, h: sH - 0.35, fill: { color: NAVY_DEEP }, line: { color: sec.color, width: 1 } });
    const bullets = sec.items.flatMap((t, j) => {
      const arr = [{ text: t, options: { bullet: { code: "25A0" }, color: WHITE, fontSize: 11 } }];
      if (j < sec.items.length - 1) arr[0].options.breakLine = true;
      return arr;
    });
    s.addText(bullets, { x: x + 0.2, y: sY + 0.5, w: sW - 0.4, h: sH - 0.55, fontFace: "Calibri", margin: 0, paraSpaceAfter: 4 });
  });

  // Room prompt
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: W - 1, h: 0.45, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
  s.addText([
    { text: "OPEN TO THE ROOM:  ", options: { bold: true, color: NAVY, fontSize: 11, charSpacing: 3 } },
    { text: "What from M1 / M2 do you think already covers parts of P0?", options: { color: NAVY, bold: true, italic: true, fontSize: 13 } },
  ], { x: 0.7, y: 5.0, w: W - 1.4, h: 0.45, fontFace: "Calibri", valign: "middle", margin: 0 });

  pageNum(s, 8, true);
}

pres.writeFile({ fileName: OUT }).then((f) => console.log("Wrote:", f));
