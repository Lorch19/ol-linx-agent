// Engineering Pre-Kickoff Deck — AI Governance / MCP Gateway
// Sunday 2026-04-27 · Omri Lorch
// Generate: node artifacts/eng-prekickoff-deck-2026-04-27.js

const pptxgen = require("pptxgenjs");
const path = require("path");

const OUT = path.join(__dirname, "eng-prekickoff-2026-04-27.pptx");

// Palette — Midnight Executive + accents
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
pres.layout = "LAYOUT_16x9"; // 10" x 5.625"
pres.title = "Engineering Pre-Kickoff — AI Governance";
pres.author = "Omri Lorch";

const W = 10, H = 5.625;

// ---------- helpers ----------
const accentBar = (s, color = TEAL) =>
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: H, fill: { color }, line: { color, width: 0 } });

const footer = (s, text, dark = false) =>
  s.addText(text, {
    x: 0.5, y: H - 0.35, w: W - 1, h: 0.25,
    fontSize: 9, fontFace: "Calibri", color: dark ? ICE : MUTED, align: "left", margin: 0,
  });

const pageNum = (s, n, total, dark = false) =>
  s.addText(`${n} / ${total}`, {
    x: W - 0.9, y: H - 0.35, w: 0.5, h: 0.25,
    fontSize: 9, fontFace: "Calibri", color: dark ? ICE : MUTED, align: "right", margin: 0,
  });

const TOTAL = 9;

// ============================================================
// SLIDE 1 — COVER (dark)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: NAVY };

  // Decorative circles (motif)
  s.addShape(pres.shapes.OVAL, { x: 7.2, y: -1.8, w: 5, h: 5, fill: { color: TEAL, transparency: 80 }, line: { color: TEAL, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 8.4, y: 3.2, w: 3, h: 3, fill: { color: ICE, transparency: 90 }, line: { color: ICE, width: 0 } });

  // Eyebrow
  s.addText("LINX · ENGINEERING PRE-KICKOFF", {
    x: 0.6, y: 0.7, w: 8, h: 0.35,
    fontSize: 11, fontFace: "Calibri", color: TEAL, bold: true, charSpacing: 6, margin: 0,
  });

  // Title
  s.addText("Agentic AI Governance", {
    x: 0.6, y: 1.3, w: 8.5, h: 1.3,
    fontSize: 52, fontFace: "Georgia", color: WHITE, bold: true, margin: 0,
  });

  // Subtitle
  s.addText("What we shipped · what we learned · where we go next.", {
    x: 0.6, y: 2.75, w: 8, h: 0.5,
    fontSize: 18, fontFace: "Calibri", color: ICE, italic: true, margin: 0,
  });

  // Meta
  s.addText([
    { text: "Sunday · 27 April 2026", options: { bold: true, color: WHITE, breakLine: true } },
    { text: "Omri Lorch · Product", options: { color: ICE } },
  ], {
    x: 0.6, y: 4.5, w: 6, h: 0.8, fontSize: 14, fontFace: "Calibri", margin: 0,
  });

  // Corner accent
  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.2, w: 0.6, h: 0.05, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
}

// ============================================================
// SLIDE 2 — WHY WE STARTED
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);

  s.addText("01 · Why we started", {
    x: 0.5, y: 0.4, w: 6, h: 0.3, fontSize: 11, fontFace: "Calibri", color: MUTED, bold: true, charSpacing: 4, margin: 0,
  });

  s.addText("Agents are humans on steroids.", {
    x: 0.5, y: 0.8, w: 9, h: 0.9, fontSize: 40, fontFace: "Georgia", color: INK, bold: true, margin: 0,
  });

  s.addText("They don't sleep. They don't wait. They operate at machine speed. And like any superpower — unmanaged, it becomes a risk.", {
    x: 0.5, y: 1.85, w: 9, h: 0.7, fontSize: 15, fontFace: "Calibri", color: MUTED, italic: true, margin: 0,
  });

  // 3 stat callouts
  const stats = [
    { n: "144 : 1", l: "NHI-to-human ratio\n(SACR benchmark)" },
    { n: "31%", l: "of breaches start with\nstolen credentials (DBIR '25)" },
    { n: "3", l: "CISO questions\nwe committed to answer" },
  ];
  const statY = 2.9, statW = 2.9, statH = 1.3, gap = 0.15;
  const statStart = (W - (3 * statW + 2 * gap)) / 2;
  stats.forEach((st, i) => {
    const x = statStart + i * (statW + gap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: statY, w: statW, h: statH, fill: { color: ICE }, line: { color: ICE, width: 0 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: statY, w: 0.08, h: statH, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
    s.addText(st.n, { x: x + 0.25, y: statY + 0.15, w: statW - 0.3, h: 0.55, fontSize: 28, fontFace: "Georgia", color: NAVY, bold: true, margin: 0 });
    s.addText(st.l, { x: x + 0.25, y: statY + 0.7, w: statW - 0.3, h: 0.55, fontSize: 11, fontFace: "Calibri", color: INK, margin: 0 });
  });

  // 3 questions strip
  const qs = ["Where are my agents?", "What can they access?", "Who is accountable?"];
  const qY = 4.5, qW = 2.9;
  qs.forEach((q, i) => {
    const x = statStart + i * (statW + gap);
    s.addText(`Q${i + 1}. ${q}`, { x, y: qY, w: qW, h: 0.35, fontSize: 12, fontFace: "Calibri", color: NAVY, bold: true, align: "left", margin: 0 });
  });

  footer(s, "Pre-Kickoff · AI Governance · 2026-04-27");
  pageNum(s, 2, TOTAL);
}

// ============================================================
// SLIDE 3 — WHAT WE SHIPPED (M1)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);

  s.addText("02 · What we shipped", {
    x: 0.5, y: 0.4, w: 6, h: 0.3, fontSize: 11, fontFace: "Calibri", color: MUTED, bold: true, charSpacing: 4, margin: 0,
  });

  s.addText("M1 is live. Real agents, real data.", {
    x: 0.5, y: 0.8, w: 9, h: 0.8, fontSize: 34, fontFace: "Georgia", color: INK, bold: true, margin: 0,
  });

  // Left column bullets
  s.addText([
    { text: "Agent graph model", options: { bullet: { code: "25A0" }, bold: true, color: NAVY, breakLine: true, fontSize: 14 } },
    { text: "   Agents as first-class nodes in the identity graph.", options: { color: MUTED, breakLine: true, fontSize: 12 } },
    { text: " ", options: { breakLine: true, fontSize: 6 } },
    { text: "Discovery › Agents UI + entity page", options: { bullet: { code: "25A0" }, bold: true, color: NAVY, breakLine: true, fontSize: 14 } },
    { text: "   Inventory, ownership, model, tools, issues — all in one place.", options: { color: MUTED, breakLine: true, fontSize: 12 } },
    { text: " ", options: { breakLine: true, fontSize: 6 } },
    { text: "Built-in issues", options: { bullet: { code: "25A0" }, bold: true, color: NAVY, breakLine: true, fontSize: 14 } },
    { text: "   AGENT_EXCESSIVE_PERMISSIONS · AGENT_OWNER_OFFBOARDED.", options: { color: MUTED, fontSize: 12 } },
  ], { x: 0.6, y: 1.85, w: 4.4, h: 2.7, fontFace: "Calibri", margin: 0, paraSpaceAfter: 2 });

  // Right — UI screenshot of real shipped product
  s.addImage({
    path: "/tmp/mor-pics/slide12_160.png",
    x: 5.2, y: 1.85, w: 4.3, h: 2.7,
    sizing: { type: "contain", w: 4.3, h: 2.7 },
  });
  s.addText("Shipped: release-notes-assistant agent detail page", {
    x: 5.2, y: 4.55, w: 4.3, h: 0.25, fontSize: 9, fontFace: "Calibri", color: MUTED, italic: true, align: "center", margin: 0,
  });

  // Connector strip
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.95, w: W - 1, h: 0.45, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
  s.addText([
    { text: "CONNECTORS LIVE: ", options: { bold: true, color: TEAL, fontSize: 11 } },
    { text: "Gemini  ·  Vertex AI  ·  Amazon Bedrock  ·  n8n", options: { color: WHITE, fontSize: 11 } },
  ], { x: 0.7, y: 4.95, w: W - 1.2, h: 0.45, fontFace: "Calibri", valign: "middle", margin: 0, charSpacing: 2 });

  pageNum(s, 3, TOTAL);
}

// ============================================================
// SLIDE 4 — THE LESSON (dark, pivot)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: NAVY_DEEP };

  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: H, fill: { color: AMBER }, line: { color: AMBER, width: 0 } });

  s.addText("03 · What we learned", {
    x: 0.5, y: 0.4, w: 6, h: 0.3, fontSize: 11, fontFace: "Calibri", color: AMBER, bold: true, charSpacing: 4, margin: 0,
  });

  // Large quote mark
  s.addText("\u201C", {
    x: 0.4, y: 0.7, w: 1.2, h: 1.5, fontSize: 110, fontFace: "Georgia", color: AMBER, bold: true, margin: 0,
  });

  s.addText("We counted on the IdPs to identify agents.\nIt didn't work.", {
    x: 1.5, y: 1.3, w: 8, h: 1.8, fontSize: 38, fontFace: "Georgia", color: WHITE, bold: true, margin: 0,
  });

  s.addText("Agent access is ephemeral, intent-driven, and multi-hop through tools and MCP servers. The IAM API surface that powers human + NHI governance can't see that shape.", {
    x: 1.5, y: 3.3, w: 8, h: 1.0, fontSize: 15, fontFace: "Calibri", color: ICE, italic: true, margin: 0,
  });

  // Bottom reframe
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.6, w: W - 1, h: 0.55, fill: { color: AMBER, transparency: 80 }, line: { color: AMBER, width: 0 } });
  s.addText("This is a learning, not a failure. We now know what the next layer has to do.", {
    x: 0.7, y: 4.6, w: W - 1.4, h: 0.55, fontSize: 13, fontFace: "Calibri", color: WHITE, bold: true, valign: "middle", margin: 0,
  });

  pageNum(s, 4, TOTAL, true);
}

// ============================================================
// SLIDE 5 — THE NEW APPROACH: MCP GATEWAY
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);

  s.addText("04 · The pivot", {
    x: 0.5, y: 0.4, w: 6, h: 0.3, fontSize: 11, fontFace: "Calibri", color: MUTED, bold: true, charSpacing: 4, margin: 0,
  });

  s.addText("Govern agents at the protocol layer.", {
    x: 0.5, y: 0.8, w: 9, h: 0.8, fontSize: 34, fontFace: "Georgia", color: INK, bold: true, margin: 0,
  });

  s.addText("The MCP Gateway sits between agents and everything they reach — apps, tools, resources. One enforcement point. Every call, policy-checked.", {
    x: 0.5, y: 1.65, w: 9, h: 0.55, fontSize: 14, fontFace: "Calibri", color: MUTED, italic: true, margin: 0,
  });

  // Diagram — Agent -> Gateway -> Apps/Tools/Resources
  const dY = 2.6, boxH = 1.3;

  // Agent box
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.6, y: dY, w: 2.0, h: boxH, fill: { color: ICE }, line: { color: NAVY, width: 1.5 }, rectRadius: 0.1 });
  s.addText("AGENT", { x: 0.6, y: dY + 0.15, w: 2.0, h: 0.35, fontSize: 11, fontFace: "Calibri", color: MUTED, bold: true, align: "center", charSpacing: 3, margin: 0 });
  s.addText("ChatGPT · Claude\nCursor · n8n · Copilot", { x: 0.6, y: dY + 0.5, w: 2.0, h: 0.75, fontSize: 12, fontFace: "Calibri", color: NAVY, bold: true, align: "center", margin: 0 });

  // Arrow 1
  s.addShape(pres.shapes.LINE, { x: 2.65, y: dY + boxH / 2, w: 0.75, h: 0, line: { color: NAVY, width: 2, endArrowType: "triangle" } });

  // Gateway box (center, emphasized)
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 3.5, y: dY - 0.1, w: 3.0, h: boxH + 0.2, fill: { color: NAVY }, line: { color: TEAL, width: 3 }, rectRadius: 0.1 });
  s.addText("MCP GATEWAY", { x: 3.5, y: dY + 0.05, w: 3.0, h: 0.4, fontSize: 13, fontFace: "Calibri", color: TEAL, bold: true, align: "center", charSpacing: 4, margin: 0 });
  s.addText("identity · policy · audit", { x: 3.5, y: dY + 0.5, w: 3.0, h: 0.3, fontSize: 13, fontFace: "Calibri", color: WHITE, italic: true, align: "center", margin: 0 });
  s.addText("one enforcement point", { x: 3.5, y: dY + 0.9, w: 3.0, h: 0.3, fontSize: 10, fontFace: "Calibri", color: ICE, align: "center", margin: 0 });

  // Arrow 2
  s.addShape(pres.shapes.LINE, { x: 6.55, y: dY + boxH / 2, w: 0.75, h: 0, line: { color: NAVY, width: 2, endArrowType: "triangle" } });

  // Targets box
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.4, y: dY, w: 2.0, h: boxH, fill: { color: ICE }, line: { color: NAVY, width: 1.5 }, rectRadius: 0.1 });
  s.addText("APPS · TOOLS · DATA", { x: 7.4, y: dY + 0.15, w: 2.0, h: 0.35, fontSize: 10, fontFace: "Calibri", color: MUTED, bold: true, align: "center", charSpacing: 2, margin: 0 });
  s.addText("Slack · Notion\nPostgres · Linear\nGitHub · ...", { x: 7.4, y: dY + 0.5, w: 2.0, h: 0.75, fontSize: 12, fontFace: "Calibri", color: NAVY, bold: true, align: "center", margin: 0 });

  // Market validation strip
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.55, w: W - 1, h: 0.6, fill: { color: ICE }, line: { color: ICE, width: 0 } });
  s.addText([
    { text: "MARKET CONVERGENCE  ·  ", options: { bold: true, color: NAVY, fontSize: 10, charSpacing: 3 } },
    { text: "Saviynt, Token Security, Astrix all moving toward MCP-layer governance. We're aligned to where the category is going.", options: { color: INK, fontSize: 11, italic: true } },
  ], { x: 0.75, y: 4.55, w: W - 1.5, h: 0.6, fontFace: "Calibri", valign: "middle", margin: 0 });

  pageNum(s, 5, TOTAL);
}

// ============================================================
// SLIDE 6 — P0 SCOPE
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);

  s.addText("05 · P0 scope", {
    x: 0.5, y: 0.4, w: 6, h: 0.3, fontSize: 11, fontFace: "Calibri", color: MUTED, bold: true, charSpacing: 4, margin: 0,
  });

  s.addText("What we're building first.", {
    x: 0.5, y: 0.8, w: 9, h: 0.8, fontSize: 34, fontFace: "Georgia", color: INK, bold: true, margin: 0,
  });

  s.addText("From Sarit's architecture session — the minimum surface to demo at Identiverse.", {
    x: 0.5, y: 1.65, w: 9, h: 0.4, fontSize: 13, fontFace: "Calibri", color: MUTED, italic: true, margin: 0,
  });

  // 3 columns
  const cols = [
    {
      num: "01",
      title: "Gateway Core",
      body: "The protocol-layer enforcement point. Every agent → tool call flows through it. Identity-aware, loggable, policy-checkable.",
    },
    {
      num: "02",
      title: "Policy Agent",
      body: "Access profiles for agents — at MCP/platform level AND at the individual tool level inside each platform. Granular, not binary.",
    },
    {
      num: "03",
      title: "Screens",
      body: "• \"Integration\" tab for MCPs\n• Logs:\n    – System Logs\n    – Governance Logs\n    – All Access Logs",
    },
  ];
  const cY = 2.2, cH = 2.6, cW = 3.0, cGap = 0.1;
  const cStart = (W - (3 * cW + 2 * cGap)) / 2;
  cols.forEach((c, i) => {
    const x = cStart + i * (cW + cGap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: cY, w: cW, h: cH, fill: { color: WHITE }, line: { color: LINE, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: cY, w: cW, h: 0.08, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
    s.addText(c.num, { x: x + 0.3, y: cY + 0.25, w: 1, h: 0.4, fontSize: 11, fontFace: "Calibri", color: TEAL, bold: true, charSpacing: 3, margin: 0 });
    s.addText(c.title, { x: x + 0.3, y: cY + 0.6, w: cW - 0.6, h: 0.5, fontSize: 18, fontFace: "Georgia", color: NAVY, bold: true, margin: 0 });
    s.addText(c.body, { x: x + 0.3, y: cY + 1.15, w: cW - 0.6, h: cH - 1.3, fontSize: 11, fontFace: "Calibri", color: INK, margin: 0, paraSpaceAfter: 3 });
  });

  // Bottom banner
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: W - 1, h: 0.45, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
  s.addText("This is what demoes at Identiverse. Everything else is post-P0.", {
    x: 0.7, y: 5.0, w: W - 1.4, h: 0.45, fontSize: 12, fontFace: "Calibri", color: WHITE, bold: true, italic: true, valign: "middle", margin: 0,
  });

  pageNum(s, 6, TOTAL);
}

// ============================================================
// SLIDE 7 — WHAT COMES NEXT
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);

  s.addText("06 · Post-P0", {
    x: 0.5, y: 0.4, w: 6, h: 0.3, fontSize: 11, fontFace: "Calibri", color: MUTED, bold: true, charSpacing: 4, margin: 0,
  });

  s.addText("Where this goes next.", {
    x: 0.5, y: 0.8, w: 9, h: 0.8, fontSize: 34, fontFace: "Georgia", color: INK, bold: true, margin: 0,
  });

  // 2x2 grid of cards
  const items = [
    { t: "JIT with Gateway", b: "On-the-fly access grants. With or without human-in-the-loop. Ephemeral, scoped per task — the JIT-TRUST pattern." },
    { t: "JML for Agents", b: "Joiner / mover / leaver lifecycle. Owner offboarded? The agents they spawned don't linger." },
    { t: "Onboarding", b: "UI for connecting apps to the Gateway. Secured setup flow — self-service, not a services engagement." },
    { t: "Agent Intent", b: "Vision horizon. Identity + behavior + context + data sensitivity, continuously evaluated. SACR's emerging differentiator." },
  ];
  const gY = 1.95, gH = 1.55, gW = 4.55, gGap = 0.2;
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

  s.addText("Backlog, not roadmap. We sequence these after the Gateway earns its keep.", {
    x: 0.5, y: 5.15, w: W - 1, h: 0.3, fontSize: 11, fontFace: "Calibri", color: MUTED, italic: true, margin: 0,
  });

  pageNum(s, 7, TOTAL);
}

// ============================================================
// SLIDE 8 — HOW WE'LL WORK
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);

  s.addText("07 · How we'll move", {
    x: 0.5, y: 0.4, w: 6, h: 0.3, fontSize: 11, fontFace: "Calibri", color: MUTED, bold: true, charSpacing: 4, margin: 0,
  });

  s.addText("Agility with discipline.", {
    x: 0.5, y: 0.8, w: 9, h: 0.8, fontSize: 34, fontFace: "Georgia", color: INK, bold: true, margin: 0,
  });

  // 4 principles
  const ps = [
    { n: "2-week cycles", d: "with explicit pivot points. No one is held to a plan that's been invalidated by learning." },
    { n: "PM ↔ Eng co-discovery", d: "This isn't tickets in a queue. We find the problem and the solution together." },
    { n: "Wrong early", d: "beats wrong at Identiverse. Fast feedback over polished spec." },
    { n: "Harsh deadline", d: "June 15 · Identiverse. That's what we're working backwards from." },
  ];
  ps.forEach((p, i) => {
    const y = 1.85 + i * 0.55;
    s.addShape(pres.shapes.OVAL, { x: 0.6, y: y + 0.08, w: 0.3, h: 0.3, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
    s.addText(String(i + 1), { x: 0.6, y: y + 0.08, w: 0.3, h: 0.3, fontSize: 14, fontFace: "Calibri", color: WHITE, bold: true, align: "center", valign: "middle", margin: 0 });
    s.addText([
      { text: `${p.n}  `, options: { bold: true, color: NAVY, fontSize: 15 } },
      { text: p.d, options: { color: INK, fontSize: 13 } },
    ], { x: 1.05, y, w: W - 1.5, h: 0.5, fontFace: "Calibri", valign: "middle", margin: 0 });
  });

  // Timeline strip
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.5, w: W - 1, h: 0.7, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
  s.addText([
    { text: "TODAY\n", options: { fontSize: 9, color: TEAL, bold: true, charSpacing: 3 } },
    { text: "Apr 27", options: { fontSize: 14, color: WHITE, bold: true } },
  ], { x: 0.7, y: 4.55, w: 1.8, h: 0.6, fontFace: "Calibri", valign: "middle", margin: 0 });
  s.addShape(pres.shapes.LINE, { x: 2.5, y: 4.85, w: 1.5, h: 0, line: { color: TEAL, width: 2 } });
  s.addText([
    { text: "DESIGN + BUILD CYCLES\n", options: { fontSize: 9, color: TEAL, bold: true, charSpacing: 3 } },
    { text: "May", options: { fontSize: 14, color: WHITE, bold: true } },
  ], { x: 4.1, y: 4.55, w: 2.2, h: 0.6, fontFace: "Calibri", valign: "middle", margin: 0 });
  s.addShape(pres.shapes.LINE, { x: 6.3, y: 4.85, w: 1.5, h: 0, line: { color: TEAL, width: 2 } });
  s.addText([
    { text: "IDENTIVERSE\n", options: { fontSize: 9, color: AMBER, bold: true, charSpacing: 3 } },
    { text: "Jun 15", options: { fontSize: 14, color: WHITE, bold: true } },
  ], { x: 7.9, y: 4.55, w: 1.8, h: 0.6, fontFace: "Calibri", valign: "middle", margin: 0 });

  pageNum(s, 8, TOTAL);
}

// ============================================================
// SLIDE 9 — CLOSE (dark)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: NAVY };

  // Motif
  s.addShape(pres.shapes.OVAL, { x: -2, y: 3.5, w: 5, h: 5, fill: { color: TEAL, transparency: 85 }, line: { color: TEAL, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 7.5, y: -1.5, w: 4, h: 4, fill: { color: ICE, transparency: 90 }, line: { color: ICE, width: 0 } });

  s.addText("08 · What we leave with", {
    x: 0.5, y: 0.4, w: 6, h: 0.3, fontSize: 11, fontFace: "Calibri", color: TEAL, bold: true, charSpacing: 4, margin: 0,
  });

  s.addText("Sunday only counts if\u2026", {
    x: 0.5, y: 0.85, w: 9, h: 0.8, fontSize: 34, fontFace: "Georgia", color: WHITE, bold: true, italic: true, margin: 0,
  });

  const outs = [
    "We share one picture of M1/M2 status — what ships, what pauses, what folds into the Gateway.",
    "We pressure-test the P0 Gateway scope. Sarit + Amir leave with enough to take into design this week.",
    "We name owners for the next 2 weeks of investigation.",
    "We do a June 15 sanity check — committed demo, or aspiration we re-evaluate in 2 weeks?",
  ];
  outs.forEach((o, i) => {
    const y = 1.9 + i * 0.55;
    s.addShape(pres.shapes.OVAL, { x: 0.6, y: y + 0.1, w: 0.22, h: 0.22, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
    s.addText(o, { x: 1.0, y, w: W - 1.2, h: 0.5, fontSize: 14, fontFace: "Calibri", color: ICE, valign: "middle", margin: 0 });
  });

  // Closing
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.6, w: 0.6, h: 0.05, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
  s.addText("Connect the team. Start moving.", {
    x: 0.5, y: 4.75, w: 9, h: 0.6, fontSize: 24, fontFace: "Georgia", color: WHITE, bold: true, margin: 0,
  });

  pageNum(s, 9, TOTAL, true);
}

// ============================================================
pres.writeFile({ fileName: OUT }).then((f) => console.log("Wrote:", f));
