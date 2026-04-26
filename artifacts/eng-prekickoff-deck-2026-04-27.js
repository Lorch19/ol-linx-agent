// Engineering Pre-Kickoff Deck — MCP Gateway Kickoff
// Sunday 2026-04-27 · Omri Lorch
// v7 — 5 slides. Gateway-first framing. Deadline prominent. Own the pivot story.
// Run: node artifacts/eng-prekickoff-deck-2026-04-27.js

const pptxgen = require("pptxgenjs");
const path = require("path");

const OUT = path.join(__dirname, "eng-prekickoff-2026-04-27.pptx");

const NAVY      = "0F1B3D";
const NAVY_DEEP = "091230";
const ICE       = "E8EEFC";
const WHITE     = "FFFFFF";
const INK       = "1A1F36";
const MUTED     = "64748B";
const TEAL      = "02C39A";
const AMBER     = "F59E0B";
const RED       = "E11D48";
const LINE      = "CBD5E1";

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title  = "MCP Gateway — Engineering Kickoff";
pres.author = "Omri Lorch";

const W = 10, H = 5.625;
const TOTAL = 5;

const accentBar = (s, color = TEAL) =>
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0, y: 0, w: 0.12, h: H,
    fill: { color }, line: { color, width: 0 },
  });

const pageNum = (s, n, dark = false) =>
  s.addText(`${n} / ${TOTAL}`, {
    x: W - 0.9, y: H - 0.35, w: 0.5, h: 0.25,
    fontSize: 9, fontFace: "Calibri",
    color: dark ? ICE : MUTED, align: "right", margin: 0,
  });

const eyebrow = (s, text, dark = false) =>
  s.addText(text, {
    x: 0.5, y: 0.38, w: 8, h: 0.28,
    fontSize: 11, fontFace: "Calibri",
    color: dark ? TEAL : MUTED, bold: true, charSpacing: 4, margin: 0,
  });

// ============================================================
// 1 — COVER — Gateway-first, deadline prominent
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: NAVY };

  // Ambient glows
  s.addShape(pres.shapes.OVAL, { x: 6.8, y: -1.5, w: 5.5, h: 5.5, fill: { color: TEAL,  transparency: 82 }, line: { color: TEAL,  width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 8.0, y:  3.0, w: 3.0, h: 3.0, fill: { color: ICE,   transparency: 90 }, line: { color: ICE,   width: 0 } });

  s.addText("LINX · ENGINEERING KICKOFF", {
    x: 0.6, y: 0.65, w: 8, h: 0.32,
    fontSize: 11, fontFace: "Calibri", color: TEAL, bold: true, charSpacing: 6, margin: 0,
  });

  s.addText("MCP Gateway.", {
    x: 0.6, y: 1.15, w: 9, h: 1.1,
    fontSize: 62, fontFace: "Georgia", color: WHITE, bold: true, margin: 0,
  });

  s.addText("Align on P0. Name what's open. Start moving.", {
    x: 0.6, y: 2.4, w: 8.5, h: 0.5,
    fontSize: 18, fontFace: "Calibri", color: ICE, italic: true, margin: 0,
  });

  // Deadline pill — make it unmissable
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.6, y: 3.2, w: 3.4, h: 0.7,
    fill: { color: AMBER }, line: { color: AMBER, width: 0 },
  });
  s.addText([
    { text: "JUNE 15 · IDENTIVERSE", options: { bold: true, color: NAVY, fontSize: 15, charSpacing: 3, breakLine: true } },
    { text: "7 weeks · hard deadline", options: { color: NAVY, fontSize: 12 } },
  ], {
    x: 0.6, y: 3.2, w: 3.4, h: 0.7,
    fontFace: "Calibri", align: "center", valign: "middle", margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.6, y: 4.15, w: 0.55, h: 0.04, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
  s.addText("Sunday · 27 April 2026 · Omri Lorch, Product", {
    x: 0.6, y: 4.28, w: 7, h: 0.4,
    fontSize: 13, fontFace: "Calibri", color: ICE, margin: 0,
  });
}

// ============================================================
// 2 — SITUATION — context in 3 lines + what we've built
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "01 · Context");

  s.addText("Where we are.", {
    x: 0.5, y: 0.75, w: 9, h: 0.75,
    fontSize: 34, fontFace: "Georgia", color: NAVY, bold: true, margin: 0,
  });

  // Two columns — LEFT: what we've built (engineers care), RIGHT: problem context
  // LEFT: What we've built
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 4.3, h: 2.8,
    fill: { color: NAVY }, line: { color: NAVY, width: 0 },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 0.08, h: 2.8,
    fill: { color: TEAL }, line: { color: TEAL, width: 0 },
  });
  s.addText("WHAT WE'VE BUILT", {
    x: 0.75, y: 1.82, w: 3.8, h: 0.28,
    fontSize: 10, fontFace: "Calibri", color: TEAL, bold: true, charSpacing: 3, margin: 0,
  });

  const built = [
    { label: "Agent graph model", note: "First-class entity" },
    { label: "Discovery > Agents UI", note: "Live data" },
    { label: "Connectors", note: "Gemini · Vertex AI · Bedrock · n8n" },
    { label: "Built-in issues", note: "AGENT_EXCESSIVE_PERMISSIONS, AGENT_OWNER_OFFBOARDED" },
  ];
  built.forEach((it, i) => {
    const y = 2.2 + i * 0.55;
    s.addShape(pres.shapes.OVAL, {
      x: 0.78, y: y + 0.07, w: 0.22, h: 0.22,
      fill: { color: TEAL }, line: { color: TEAL, width: 0 },
    });
    s.addText([
      { text: it.label + "  ", options: { bold: true, color: WHITE, fontSize: 12 } },
      { text: it.note, options: { color: ICE, fontSize: 11 } },
    ], {
      x: 1.1, y, w: 3.5, h: 0.5,
      fontFace: "Calibri", valign: "middle", margin: 0,
    });
  });

  // RIGHT: The problem in 3 lines
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.0, y: 1.7, w: 4.5, h: 2.8,
    fill: { color: ICE }, line: { color: ICE, width: 0 },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.0, y: 1.7, w: 0.08, h: 2.8,
    fill: { color: TEAL }, line: { color: TEAL, width: 0 },
  });
  s.addText("THE GAP", {
    x: 5.25, y: 1.82, w: 4.0, h: 0.28,
    fontSize: 10, fontFace: "Calibri", color: TEAL, bold: true, charSpacing: 3, margin: 0,
  });
  s.addText([
    { text: "144 : 1 — more agents than humans in the average enterprise.", options: { color: INK, fontSize: 13, breakLine: true } },
    { text: " ", options: { fontSize: 5, breakLine: true } },
    { text: "IAM and PAM tools were built for humans and NHIs. They don't govern agents that spin up in seconds, chain through tools, and decide at runtime.", options: { color: INK, fontSize: 13, breakLine: true } },
    { text: " ", options: { fontSize: 5, breakLine: true } },
    { text: "No visibility. No policy. No audit trail.", options: { color: NAVY, bold: true, fontSize: 13 } },
  ], {
    x: 5.25, y: 2.18, w: 4.0, h: 2.1,
    fontFace: "Calibri", margin: 0,
  });

  // Footer note
  s.addText("ChatGPT Enterprise still Backlog · Copilot Studio connector Canceled Jan 2026", {
    x: 0.5, y: 5.05, w: W - 1, h: 0.28,
    fontSize: 9, fontFace: "Calibri", color: MUTED, italic: true, margin: 0,
  });

  pageNum(s, 2);
}

// ============================================================
// 3 — THE PIVOT — own the story
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "02 · The pivot");

  s.addText("From IdP-led to protocol-led.", {
    x: 0.5, y: 0.75, w: 9, h: 0.75,
    fontSize: 34, fontFace: "Georgia", color: NAVY, bold: true, margin: 0,
  });

  // FROM card
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 4.1, h: 3.1,
    fill: { color: ICE }, line: { color: ICE, width: 0 },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 1.7, w: 0.08, h: 3.1,
    fill: { color: AMBER }, line: { color: AMBER, width: 0 },
  });
  s.addText("WHAT WE TRIED", {
    x: 0.72, y: 1.82, w: 3.7, h: 0.28,
    fontSize: 10, fontFace: "Calibri", color: AMBER, bold: true, charSpacing: 3, margin: 0,
  });
  s.addText("Govern agents through the same IAM APIs that govern humans + NHIs.", {
    x: 0.72, y: 2.18, w: 3.65, h: 0.75,
    fontSize: 14, fontFace: "Georgia", color: NAVY, bold: true, margin: 0,
  });
  s.addText([
    { text: "Where it broke: ", options: { bold: true, color: RED, fontSize: 12, breakLine: false } },
    { text: "M2 stalled where it needed to intercept live agent call-flow. The IAM API surface doesn't expose that layer — it was built for user sessions, not ephemeral tool chains.", options: { color: INK, fontSize: 12, breakLine: true } },
    { text: " ", options: { fontSize: 5, breakLine: true } },
    { text: "The discovery: the shape of agent access is fundamentally different. That learning is what makes the Gateway design possible.", options: { color: MUTED, italic: true, fontSize: 11 } },
  ], {
    x: 0.72, y: 3.0, w: 3.65, h: 1.7,
    fontFace: "Calibri", margin: 0,
  });

  // Arrow
  s.addShape(pres.shapes.LINE, {
    x: 4.7, y: 3.25, w: 0.65, h: 0,
    line: { color: NAVY, width: 3, endArrowType: "triangle" },
  });

  // TO card
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.45, y: 1.7, w: 4.1, h: 3.1,
    fill: { color: NAVY }, line: { color: NAVY, width: 0 },
  });
  s.addShape(pres.shapes.RECTANGLE, {
    x: 5.45, y: 1.7, w: 0.08, h: 3.1,
    fill: { color: TEAL }, line: { color: TEAL, width: 0 },
  });
  s.addText("WHAT WE'RE DOING NOW", {
    x: 5.67, y: 1.82, w: 3.7, h: 0.28,
    fontSize: 10, fontFace: "Calibri", color: TEAL, bold: true, charSpacing: 3, margin: 0,
  });
  s.addText("MCP Gateway.", {
    x: 5.67, y: 2.18, w: 3.65, h: 0.55,
    fontSize: 26, fontFace: "Georgia", color: WHITE, bold: true, margin: 0,
  });
  s.addText("Govern agents at the protocol layer — one enforcement point between every agent and every tool.", {
    x: 5.67, y: 2.8, w: 3.65, h: 0.7,
    fontSize: 12, fontFace: "Calibri", color: ICE, italic: true, margin: 0,
  });

  // Mini diagram
  const dY = 3.65, dH = 0.62;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.62, y: dY, w: 1.0, h: dH, fill: { color: "1A2545" }, line: { color: ICE, width: 0.75 }, rectRadius: 0.06 });
  s.addText("Agent", { x: 5.62, y: dY, w: 1.0, h: dH, fontSize: 11, fontFace: "Calibri", color: WHITE, bold: true, align: "center", valign: "middle", margin: 0 });
  s.addShape(pres.shapes.LINE, { x: 6.67, y: dY + dH / 2, w: 0.3, h: 0, line: { color: TEAL, width: 1.5, endArrowType: "triangle" } });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.0, y: dY - 0.05, w: 1.5, h: dH + 0.1, fill: { color: NAVY_DEEP }, line: { color: TEAL, width: 1.5 }, rectRadius: 0.06 });
  s.addText("Gateway", { x: 7.0, y: dY - 0.05, w: 1.5, h: dH + 0.1, fontSize: 11, fontFace: "Calibri", color: TEAL, bold: true, align: "center", valign: "middle", margin: 0 });
  s.addShape(pres.shapes.LINE, { x: 8.55, y: dY + dH / 2, w: 0.3, h: 0, line: { color: TEAL, width: 1.5, endArrowType: "triangle" } });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 8.9, y: dY, w: 0.55, h: dH, fill: { color: "1A2545" }, line: { color: ICE, width: 0.75 }, rectRadius: 0.06 });
  s.addText("Tools", { x: 8.9, y: dY, w: 0.55, h: dH, fontSize: 9, fontFace: "Calibri", color: WHITE, bold: true, align: "center", valign: "middle", margin: 0 });

  s.addText("Lead: Sarit + Amir Ben Ami  ·  Status: concept / whiteboard  ·  No design doc yet", {
    x: 5.67, y: 4.42, w: 3.7, h: 0.3,
    fontSize: 9, fontFace: "Calibri", color: AMBER, italic: true, margin: 0,
  });

  s.addText("Agent identities now outpace every other identity class — 144:1 in deployed enterprises (SACR, 2026). If Saviynt or Token Security defines MCP governance at Identiverse and we don't show up, that category is theirs.", {
    x: 0.5, y: 5.08, w: W - 1, h: 0.3,
    fontSize: 10, fontFace: "Calibri", color: MUTED, italic: true, align: "center", margin: 0,
  });

  pageNum(s, 3);
}

// ============================================================
// 4 — P0 SCOPE + CAPABILITY MAP
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "03 · P0 scope");

  s.addText("What the demo shows. Is this 7 weeks?", {
    x: 0.5, y: 0.75, w: 9, h: 0.75,
    fontSize: 30, fontFace: "Georgia", color: NAVY, bold: true, margin: 0,
  });

  // P0 — 3 cards
  const p0 = [
    {
      num: "01", title: "Gateway Core",
      body: "Protocol-layer enforcement point. Every agent → tool call flows through it.",
      note: "Javier + Omer Blechman · research starts here · what feeds in from M1/M2 = part of this discovery",
    },
    {
      num: "02", title: "Policy Agent",
      body: "Access profiles per agent — MCP/platform level AND per tool. Granular, not binary.",
    },
    {
      num: "03", title: "Screens",
      body: "\"Integration\" tab for MCPs + 3 log views: System · Governance · All Access.",
    },
  ];

  const cW = 2.95, cGap = 0.1, cY = 1.65, cH = 1.85;
  const cStart = (W - (3 * cW + 2 * cGap)) / 2;
  p0.forEach((c, i) => {
    const x = cStart + i * (cW + cGap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: cY, w: cW, h: cH, fill: { color: WHITE }, line: { color: LINE, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: cY, w: cW, h: 0.07, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
    s.addText(c.num, { x: x + 0.2, y: cY + 0.15, w: 0.7, h: 0.25, fontSize: 10, fontFace: "Calibri", color: TEAL, bold: true, charSpacing: 3, margin: 0 });
    s.addText(c.title, { x: x + 0.2, y: cY + 0.42, w: cW - 0.4, h: 0.42, fontSize: 17, fontFace: "Georgia", color: NAVY, bold: true, margin: 0 });
    s.addText(c.body, { x: x + 0.2, y: cY + 0.88, w: cW - 0.4, h: 0.72, fontSize: 11, fontFace: "Calibri", color: INK, margin: 0 });
    if (c.note) {
      s.addText(c.note, { x: x + 0.2, y: cY + cH - 0.28, w: cW - 0.4, h: 0.22, fontSize: 9, fontFace: "Calibri", color: TEAL, bold: true, italic: true, margin: 0 });
    }
  });

  // Post-P0 slim strip
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 3.62, w: 0.95, h: 0.3, fill: { color: MUTED }, line: { color: MUTED, width: 0 } });
  s.addText("POST-P0", { x: 0.5, y: 3.62, w: 0.95, h: 0.3, fontSize: 9, fontFace: "Calibri", color: WHITE, bold: true, align: "center", valign: "middle", charSpacing: 2, margin: 0 });
  s.addText("in sequence after demo lands", { x: 1.55, y: 3.64, w: 4, h: 0.28, fontSize: 10, fontFace: "Calibri", color: MUTED, italic: true, valign: "middle", margin: 0 });

  const post = [
    { t: "JIT with Gateway", b: "On-the-fly grants. With/without HITL." },
    { t: "JML for Agents",   b: "Joiner / mover / leaver lifecycle." },
    { t: "Onboarding",       b: "UI to connect apps. Secured setup." },
    { t: "Agent Intent",     b: "Behavior + context + sensitivity." },
  ];
  const pY = 4.02, pH = 0.52, pW = 2.2, pGap = 0.14;
  const pStart = (W - (4 * pW + 3 * pGap)) / 2;
  post.forEach((it, i) => {
    const x = pStart + i * (pW + pGap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: pY, w: pW, h: pH, fill: { color: ICE }, line: { color: ICE, width: 0 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: pY, w: 0.06, h: pH, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
    s.addText([
      { text: it.t, options: { bold: true, color: NAVY, fontSize: 11, breakLine: true } },
      { text: it.b, options: { color: MUTED, fontSize: 9 } },
    ], { x: x + 0.14, y: pY + 0.05, w: pW - 0.2, h: pH - 0.1, fontFace: "Calibri", margin: 0 });
  });

  // Amber prompt
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.68, w: W - 1, h: 0.42, fill: { color: AMBER }, line: { color: AMBER, width: 0 } });
  s.addText([
    { text: "OPEN QUESTION:  ", options: { bold: true, color: NAVY, fontSize: 10, charSpacing: 3 } },
    { text: "Is Gateway Core + Policy Agent + Screens achievable in 7 weeks? What, if anything, comes out?", options: { bold: true, color: NAVY, fontSize: 13 } },
  ], { x: 0.7, y: 4.68, w: W - 1.4, h: 0.42, fontFace: "Calibri", valign: "middle", margin: 0 });

  pageNum(s, 4);
}

// ============================================================
// 5 — GO. (alignment close — owner per workstream, cadence, priority signal)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: NAVY };

  // Ambient glow
  s.addShape(pres.shapes.OVAL, {
    x: 7.5, y: 2.5, w: 5, h: 5,
    fill: { color: TEAL, transparency: 88 }, line: { color: TEAL, width: 0 },
  });

  eyebrow(s, "05 · Aligned. Now go.", true);
  s.addText("Go.", {
    x: 0.5, y: 0.72, w: 3, h: 1.0,
    fontSize: 72, fontFace: "Georgia", color: WHITE, bold: true, margin: 0,
  });
  s.addText("Three workstreams start today. One cadence. June 15.", {
    x: 0.5, y: 1.72, w: 8.5, h: 0.4,
    fontSize: 15, fontFace: "Calibri", color: ICE, italic: true, margin: 0,
  });

  const tracks = [
    {
      color: TEAL,
      owner: "Javier + Omer Blechman",
      role: "GATEWAY CORE",
      lines: [
        "Research: build vs. adopt, options + coverage",
        "Map what existing work feeds in",
        "Draft POC plan",
        "\u2192 First sync: Wednesday",
      ],
    },
    {
      color: AMBER,
      owner: "Omri",
      role: "SCOPE + COMPETITIVE",
      lines: [
        "Competitor scan: where the market is moving",
        "Scope P0 remainder + post-P0 sequence",
        "Define \u201Cdemo lands\u201D — format + scenario",
        "\u2192 Share findings: Wednesday",
      ],
    },
    {
      color: ICE,
      owner: "Sarit + Amir Ben Ami",
      role: "ARCHITECTURE",
      lines: [
        "Gateway design doc: surface + policy model",
        "Tool-level access model for Policy Agent",
        "Integration points with eng research",
        "\u2192 This week",
      ],
    },
  ];

  const tY = 2.3, tH = 2.55, tW = 2.95, tGap = 0.1;
  const tStart = (W - (3 * tW + 2 * tGap)) / 2;

  tracks.forEach((t, i) => {
    const x = tStart + i * (tW + tGap);
    const isLight = t.color === ICE;

    // Header bar
    s.addShape(pres.shapes.RECTANGLE, { x, y: tY, w: tW, h: 0.72, fill: { color: t.color }, line: { color: t.color, width: 0 } });
    s.addText(t.role, {
      x: x + 0.15, y: tY + 0.05, w: tW - 0.3, h: 0.28,
      fontSize: 10, fontFace: "Calibri", color: isLight ? NAVY : NAVY,
      bold: true, charSpacing: 3, margin: 0,
    });
    s.addText(t.owner, {
      x: x + 0.15, y: tY + 0.38, w: tW - 0.3, h: 0.28,
      fontSize: 12, fontFace: "Georgia", color: isLight ? NAVY : NAVY_DEEP,
      bold: true, margin: 0,
    });

    // Body
    s.addShape(pres.shapes.RECTANGLE, { x, y: tY + 0.72, w: tW, h: tH - 0.72, fill: { color: NAVY_DEEP }, line: { color: t.color, width: 1 } });

    const bullets = t.lines.map((line, j) => ({
      text: line,
      options: {
        bullet: line.startsWith("\u2192") ? false : { code: "25A0" },
        color: line.startsWith("\u2192") ? t.color : WHITE,
        bold: line.startsWith("\u2192"),
        fontSize: 11,
        breakLine: j < t.lines.length - 1,
      },
    }));
    s.addText(bullets, {
      x: x + 0.18, y: tY + 0.88, w: tW - 0.36, h: tH - 1.0,
      fontFace: "Calibri", margin: 0, paraSpaceAfter: 4,
    });
  });

  // Priority signal footer
  s.addShape(pres.shapes.RECTANGLE, {
    x: 0.5, y: 5.0, w: W - 1, h: 0.42,
    fill: { color: AMBER }, line: { color: AMBER, width: 0 },
  });
  s.addText([
    { text: "P0 FOR LINX  \u00B7  ", options: { bold: true, color: NAVY, fontSize: 11, charSpacing: 3 } },
    { text: "Omri + Sarit tracking weekly  \u00B7  June 15 is the line  \u00B7  ", options: { color: NAVY, fontSize: 13 } },
    { text: "Next full sync after Wednesday research check-in.", options: { color: NAVY, bold: true, fontSize: 13 } },
  ], {
    x: 0.7, y: 5.0, w: W - 1.4, h: 0.42,
    fontFace: "Calibri", valign: "middle", margin: 0,
  });

  pageNum(s, 5, true);
}

pres.writeFile({ fileName: OUT }).then((f) => console.log("Wrote:", f));
