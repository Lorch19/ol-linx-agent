// Engineering Pre-Kickoff Deck — AI Governance / MCP Gateway
// Sunday 2026-04-27 · Omri Lorch
// v3 — Mor's triangle style rebuilt, previous-try slide, no completion claims
// Run: node artifacts/eng-prekickoff-deck-2026-04-27.js

const pptxgen = require("pptxgenjs");
const path = require("path");

const OUT = path.join(__dirname, "eng-prekickoff-2026-04-27.pptx");

const NAVY = "0F1B3D";
const NAVY_DEEP = "091230";
const ICE = "E8EEFC";
const WHITE = "FFFFFF";
const INK = "1A1F36";
const MUTED = "64748B";
const TEAL = "02C39A";
const AMBER = "F59E0B";
const LINE = "CBD5E1";
const PURPLE = "7C3AED";

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Engineering Pre-Kickoff — AI Governance";
pres.author = "Omri Lorch";

const W = 10, H = 5.625;
const TOTAL = 9;

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

const slideTitle = (s, text, color = INK) =>
  s.addText(text, {
    x: 0.5, y: 0.8, w: 9, h: 0.85, fontSize: 34, fontFace: "Georgia", color, bold: true, margin: 0,
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
// 2 — PROBLEM SPACE — Mor's triangle style (overlapping glowing ovals)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: "0A0E1A" }; // near-black like Mor's dark bg

  eyebrow(s, "01 · The problem space", true);
  s.addText("What makes agents different?", {
    x: 0.5, y: 0.8, w: 9, h: 0.75, fontSize: 30, fontFace: "Georgia", color: WHITE, bold: true, margin: 0,
  });
  s.addText("\"Agents are like humans on steroids — they don't sleep, they don't wait, they operate at machine speed.\"  — Mor Shabi", {
    x: 0.5, y: 1.55, w: 9, h: 0.45, fontSize: 12, fontFace: "Calibri", color: ICE, italic: true, margin: 0,
  });

  // Glowing orbs — left (Human, purple), center (Agent, teal), right (NHI, amber)
  const orbY = 2.1, orbW = 3.0, orbH = 2.5;
  // purple glow (Human)
  s.addShape(pres.shapes.OVAL, { x: 0.2, y: orbY, w: orbW, h: orbH, fill: { color: PURPLE, transparency: 55 }, line: { color: PURPLE, width: 0 } });
  // teal glow (Agent — center, slightly lower)
  s.addShape(pres.shapes.OVAL, { x: 3.5, y: orbY + 0.15, w: orbW, h: orbH, fill: { color: TEAL, transparency: 50 }, line: { color: TEAL, width: 0 } });
  // amber glow (NHI — right)
  s.addShape(pres.shapes.OVAL, { x: 6.7, y: orbY, w: orbW, h: orbH, fill: { color: AMBER, transparency: 55 }, line: { color: AMBER, width: 0 } });

  // Labels
  s.addText("HUMAN", { x: 0.4, y: orbY + 0.25, w: 2.6, h: 0.4, fontSize: 13, fontFace: "Calibri", color: WHITE, bold: true, align: "center", charSpacing: 4, margin: 0 });
  s.addText("AI AGENT", { x: 3.7, y: orbY + 0.4, w: 2.6, h: 0.4, fontSize: 13, fontFace: "Calibri", color: WHITE, bold: true, align: "center", charSpacing: 4, margin: 0 });
  s.addText("NHI", { x: 6.9, y: orbY + 0.25, w: 2.6, h: 0.4, fontSize: 13, fontFace: "Calibri", color: WHITE, bold: true, align: "center", charSpacing: 4, margin: 0 });

  // Attributes (Human)
  s.addText("Judicious · Static\nRole-based permissions\nDeterministic", { x: 0.25, y: orbY + 0.85, w: 2.8, h: 0.9, fontSize: 11, fontFace: "Calibri", color: ICE, align: "center", margin: 0 });
  s.addText("Risk: Socially exploitable\nover-permissioned over time", { x: 0.25, y: orbY + 1.8, w: 2.8, h: 0.55, fontSize: 10, fontFace: "Calibri", color: PURPLE, italic: true, align: "center", margin: 0 });

  // Attributes (Agent)
  s.addText("Autonomous · Goal-based\nNondeterministic · LLM-powered\nContext-aware · Iterative", { x: 3.6, y: orbY + 0.98, w: 2.8, h: 0.9, fontSize: 11, fontFace: "Calibri", color: ICE, align: "center", margin: 0 });
  s.addText("Risk: Manipulable via inputs\ndangerous when over-trusted", { x: 3.6, y: orbY + 1.9, w: 2.8, h: 0.55, fontSize: 10, fontFace: "Calibri", color: TEAL, italic: true, align: "center", margin: 0 });

  // Attributes (NHI)
  s.addText("Restless · Works at scale\nPermission-greedy", { x: 6.8, y: orbY + 0.85, w: 2.8, h: 0.9, fontSize: 11, fontFace: "Calibri", color: ICE, align: "center", margin: 0 });
  s.addText("Risk: Misconfigurations\nlong-lived secrets", { x: 6.8, y: orbY + 1.8, w: 2.8, h: 0.55, fontSize: 10, fontFace: "Calibri", color: AMBER, italic: true, align: "center", margin: 0 });

  pageNum(s, 2, true);
}

// ============================================================
// 3 — 10 CAPABILITIES — Discover / Assess / Enforce
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "02 · The full map");
  slideTitle(s, "10 capabilities. Three stages.");

  const groups = [
    {
      label: "DISCOVER",
      color: TEAL,
      caps: [
        { n: "1", t: "Registration & identification" },
        { n: "2", t: "Ownership assignment" },
        { n: "10", t: "Visibility & observability" },
      ],
    },
    {
      label: "ASSESS",
      color: NAVY,
      caps: [
        { n: "3", t: "Authentication" },
        { n: "4", t: "Authorization & delegation" },
        { n: "9", t: "Multi-agent collaboration" },
      ],
    },
    {
      label: "ENFORCE",
      color: PURPLE,
      caps: [
        { n: "5", t: "Human oversight & approval" },
        { n: "6", t: "Resource policy enforcement" },
        { n: "7", t: "Credential lifecycle" },
        { n: "8", t: "Auditability & logging" },
      ],
    },
  ];

  // Arrows between stage labels
  const gY = 1.85, gH = 3.15, gW = 3.0, gGap = 0.1;
  const gStart = (W - (3 * gW + 2 * gGap)) / 2;

  groups.forEach((g, i) => {
    const x = gStart + i * (gW + gGap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: gY, w: gW, h: 0.45, fill: { color: g.color }, line: { color: g.color, width: 0 } });
    s.addText(g.label, { x, y: gY, w: gW, h: 0.45, fontSize: 14, fontFace: "Calibri", color: WHITE, bold: true, align: "center", valign: "middle", charSpacing: 5, margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x, y: gY + 0.45, w: gW, h: gH - 0.45, fill: { color: ICE }, line: { color: g.color, width: 1 } });

    g.caps.forEach((c, j) => {
      const rowY = gY + 0.6 + j * 0.64;
      s.addShape(pres.shapes.OVAL, { x: x + 0.2, y: rowY + 0.06, w: 0.28, h: 0.28, fill: { color: g.color }, line: { color: g.color, width: 0 } });
      s.addText(c.n, { x: x + 0.2, y: rowY + 0.06, w: 0.28, h: 0.28, fontSize: 10, fontFace: "Calibri", color: WHITE, bold: true, align: "center", valign: "middle", margin: 0 });
      s.addText(c.t, { x: x + 0.58, y: rowY, w: gW - 0.72, h: 0.5, fontSize: 12, fontFace: "Calibri", color: INK, valign: "middle", margin: 0 });
    });

    // Arrow between columns
    if (i < 2) {
      s.addShape(pres.shapes.LINE, {
        x: x + gW + 0.01, y: gY + 0.22, w: gGap - 0.01, h: 0,
        line: { color: WHITE, width: 2, endArrowType: "triangle" },
      });
    }
  });

  s.addText("Source: \u201CIAM for LLM-Based AI Agents\u201D framework.", {
    x: 0.5, y: 5.1, w: W - 1, h: 0.28, fontSize: 10, fontFace: "Calibri", color: MUTED, italic: true, margin: 0,
  });

  pageNum(s, 3);
}

// ============================================================
// 4 — WHAT'S IN SCOPE SO FAR (no "shipped" claims)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "03 · Where we are");
  slideTitle(s, "What's been started.");
  s.addText("M1 visibility layer is live. M2 is ~74% in. Some work may cover P0 needs — Omri will verify with Mor.", {
    x: 0.5, y: 1.7, w: 9, h: 0.4, fontSize: 12, fontFace: "Calibri", color: MUTED, italic: true, margin: 0,
  });

  s.addText([
    { text: "M1 · Agent visibility layer", options: { bold: true, color: NAVY, fontSize: 14, breakLine: true } },
    { text: "Agent graph model · Discovery > Agents UI · agent entity page", options: { color: MUTED, fontSize: 12, breakLine: true } },
    { text: "Built-in issues: AGENT_EXCESSIVE_PERMISSIONS · AGENT_OWNER_OFFBOARDED", options: { color: MUTED, fontSize: 12, breakLine: true } },
    { text: "Connectors: Gemini · Vertex AI · Amazon Bedrock · n8n", options: { color: MUTED, fontSize: 12, breakLine: true } },
    { text: " ", options: { fontSize: 5, breakLine: true } },
    { text: "M2 · Access Intelligence", options: { bold: true, color: AMBER, fontSize: 14, breakLine: true } },
    { text: "~74% in progress. Credential discovery, NHI→agent map, OAuth scope viz.", options: { color: MUTED, fontSize: 12, breakLine: true } },
    { text: "The remaining 26% is where the original approach hit the wall.", options: { color: MUTED, fontSize: 12 } },
  ], { x: 0.6, y: 1.85, w: 4.5, h: 3.1, fontFace: "Calibri", margin: 0 });

  s.addImage({
    path: "/tmp/mor-pics/slide12_160.png",
    x: 5.3, y: 1.75, w: 4.2, h: 2.8,
    sizing: { type: "contain", w: 4.2, h: 2.8 },
  });
  s.addText("Linx · agent detail page (in product)", {
    x: 5.3, y: 4.6, w: 4.2, h: 0.25, fontSize: 9, fontFace: "Calibri", color: MUTED, italic: true, align: "center", margin: 0,
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.05, w: W - 1, h: 0.4, fill: { color: ICE }, line: { color: LINE, width: 0 } });
  s.addText("ChatGPT Enterprise: still in Backlog  ·  Copilot Studio direct connector: Canceled (Jan 2026)", {
    x: 0.7, y: 5.05, w: W - 1.4, h: 0.4, fontSize: 11, fontFace: "Calibri", color: MUTED, italic: true, valign: "middle", margin: 0,
  });

  pageNum(s, 4);
}

// ============================================================
// 5 — THE PREVIOUS TRY
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s, AMBER);
  eyebrow(s, "04 · What we tried first");
  slideTitle(s, "The original approach.");

  // Two-column: what we tried vs. what happened
  // Left — the plan
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.85, w: 4.3, h: 3.0, fill: { color: ICE }, line: { color: ICE, width: 0 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.85, w: 0.08, h: 3.0, fill: { color: AMBER }, line: { color: AMBER, width: 0 } });
  s.addText("The plan", { x: 0.7, y: 1.95, w: 3.9, h: 0.4, fontSize: 15, fontFace: "Georgia", color: NAVY, bold: true, margin: 0 });
  s.addText([
    { text: "Govern agents using the same IAM APIs that power human + NHI governance.", options: { color: INK, fontSize: 12, breakLine: true } },
    { text: " ", options: { fontSize: 5, breakLine: true } },
    { text: "Identity graph already connected to every app.", options: { color: INK, fontSize: 12, breakLine: true } },
    { text: "Access request flows already built.", options: { color: INK, fontSize: 12, breakLine: true } },
    { text: "Credential discovery already in motion (M2).", options: { color: INK, fontSize: 12, breakLine: true } },
    { text: " ", options: { fontSize: 5, breakLine: true } },
    { text: "Natural extension of what we already do for humans and NHIs.", options: { color: MUTED, italic: true, fontSize: 12 } },
  ], { x: 0.7, y: 2.45, w: 3.9, h: 2.2, fontFace: "Calibri", margin: 0 });

  // Arrow
  s.addShape(pres.shapes.LINE, { x: 4.87, y: 3.35, w: 0.55, h: 0, line: { color: NAVY, width: 2, endArrowType: "triangle" } });

  // Right — what happened
  s.addShape(pres.shapes.RECTANGLE, { x: 5.5, y: 1.85, w: 4.1, h: 3.0, fill: { color: ICE }, line: { color: ICE, width: 0 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.5, y: 1.85, w: 0.08, h: 3.0, fill: { color: "E11D48" }, line: { color: "E11D48", width: 0 } });
  s.addText("What happened", { x: 5.7, y: 1.95, w: 3.7, h: 0.4, fontSize: 15, fontFace: "Georgia", color: NAVY, bold: true, margin: 0 });
  s.addText([
    { text: "Agent access doesn't map to the IAM API surface.", options: { bold: true, color: "E11D48", fontSize: 12, breakLine: true } },
    { text: " ", options: { fontSize: 5, breakLine: true } },
    { text: "Ephemeral:", options: { bold: true, color: INK, fontSize: 12 } },
    { text: " sessions spin up/down in seconds — no persistent identity to track.", options: { color: INK, fontSize: 12, breakLine: true } },
    { text: " ", options: { fontSize: 5, breakLine: true } },
    { text: "Intent-driven:", options: { bold: true, color: INK, fontSize: 12 } },
    { text: " access isn't pre-declared — it's determined at runtime based on task context.", options: { color: INK, fontSize: 12, breakLine: true } },
    { text: " ", options: { fontSize: 5, breakLine: true } },
    { text: "Multi-hop:", options: { bold: true, color: INK, fontSize: 12 } },
    { text: " one agent call chains through tools, MCP servers, and downstream apps — not a single entitlement check.", options: { color: INK, fontSize: 12 } },
  ], { x: 5.7, y: 2.45, w: 3.7, h: 2.3, fontFace: "Calibri", margin: 0 });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.05, w: W - 1, h: 0.4, fill: { color: AMBER, transparency: 75 }, line: { color: AMBER, width: 0 } });
  s.addText("This is a useful discovery. We now know exactly what the next layer must do.", {
    x: 0.7, y: 5.05, w: W - 1.4, h: 0.4, fontSize: 12, fontFace: "Calibri", color: NAVY, bold: true, italic: true, valign: "middle", margin: 0,
  });

  pageNum(s, 5);
}

// ============================================================
// 6 — LESSON → PIVOT
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: NAVY_DEEP };
  s.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: H, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });

  eyebrow(s, "05 · The new approach", true);
  slideTitle(s, "MCP Gateway.", WHITE);
  s.addText("Govern agents at the protocol layer — one enforcement point between every agent and every tool.", {
    x: 0.5, y: 1.75, w: 9, h: 0.5, fontSize: 15, fontFace: "Calibri", color: ICE, italic: true, margin: 0,
  });

  // Diagram
  const dY = 2.55, boxH = 1.3;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: dY, w: 2.0, h: boxH, fill: { color: "1A2545" }, line: { color: ICE, width: 1 }, rectRadius: 0.08 });
  s.addText("AGENT", { x: 0.5, y: dY + 0.1, w: 2.0, h: 0.35, fontSize: 10, fontFace: "Calibri", color: MUTED, bold: true, align: "center", charSpacing: 3, margin: 0 });
  s.addText("ChatGPT · Claude\nCursor · n8n", { x: 0.5, y: dY + 0.5, w: 2.0, h: 0.75, fontSize: 12, fontFace: "Calibri", color: WHITE, align: "center", margin: 0 });

  s.addShape(pres.shapes.LINE, { x: 2.55, y: dY + boxH / 2, w: 0.75, h: 0, line: { color: TEAL, width: 2, endArrowType: "triangle" } });

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 3.4, y: dY - 0.15, w: 3.2, h: boxH + 0.3, fill: { color: NAVY }, line: { color: TEAL, width: 3 }, rectRadius: 0.1 });
  s.addText("MCP GATEWAY", { x: 3.4, y: dY, w: 3.2, h: 0.4, fontSize: 13, fontFace: "Calibri", color: TEAL, bold: true, align: "center", charSpacing: 4, margin: 0 });
  s.addText("identity · policy · audit", { x: 3.4, y: dY + 0.45, w: 3.2, h: 0.3, fontSize: 13, fontFace: "Calibri", color: WHITE, italic: true, align: "center", margin: 0 });
  s.addText("every call, policy-checked", { x: 3.4, y: dY + 0.85, w: 3.2, h: 0.3, fontSize: 10, fontFace: "Calibri", color: ICE, align: "center", margin: 0 });

  s.addShape(pres.shapes.LINE, { x: 6.65, y: dY + boxH / 2, w: 0.75, h: 0, line: { color: TEAL, width: 2, endArrowType: "triangle" } });

  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 7.5, y: dY, w: 2.0, h: boxH, fill: { color: "1A2545" }, line: { color: ICE, width: 1 }, rectRadius: 0.08 });
  s.addText("APPS · TOOLS", { x: 7.5, y: dY + 0.1, w: 2.0, h: 0.35, fontSize: 10, fontFace: "Calibri", color: MUTED, bold: true, align: "center", charSpacing: 2, margin: 0 });
  s.addText("Slack · Linear\nNotions · Postgres", { x: 7.5, y: dY + 0.5, w: 2.0, h: 0.75, fontSize: 12, fontFace: "Calibri", color: WHITE, align: "center", margin: 0 });

  // Two facts
  s.addText([
    { text: "Status: concept / whiteboard.  ", options: { color: AMBER, bold: true, fontSize: 12 } },
    { text: "Sarit + Amir Ben Ami leading architecture.  ", options: { color: ICE, fontSize: 12 } },
    { text: "Cycle 79 AI priority.  ", options: { color: ICE, fontSize: 12 } },
    { text: "Market: Saviynt, Token Security, Astrix converging here.", options: { color: ICE, italic: true, fontSize: 12 } },
  ], { x: 0.5, y: 4.15, w: W - 1, h: 0.4, fontFace: "Calibri", valign: "middle", margin: 0 });

  pageNum(s, 6, true);
}

// ============================================================
// 7 — P0 SCOPE
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "06 · P0 scope — the demo target");
  slideTitle(s, "What we're building first.");
  s.addText("From Sarit's session. Some pieces may exist in M1/M2 — Omri will connect the dots.", {
    x: 0.5, y: 1.7, w: 9, h: 0.4, fontSize: 12, fontFace: "Calibri", color: MUTED, italic: true, margin: 0,
  });

  const cols = [
    {
      num: "01", title: "Gateway Core",
      body: "The protocol-layer enforcement point. Every agent → tool call flows through it.\n\nIdentity-aware, loggable, policy-checkable.",
      note: "Eng research starts here.",
      noteColor: TEAL,
    },
    {
      num: "02", title: "Policy Agent",
      body: "Access profiles for agents:\n\n• At the MCP / platform level\n• AND at the individual tool level\n\nGranular, not binary.",
    },
    {
      num: "03", title: "Screens",
      body: "\"Integration\" tab for MCPs\n\nLogs — three views:\n• System Logs\n• Governance Logs\n• All Access Logs",
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
    s.addText(c.body, { x: x + 0.3, y: cY + 1.1, w: cW - 0.6, h: cH - 1.25, fontSize: 11, fontFace: "Calibri", color: INK, margin: 0, paraSpaceAfter: 2 });
    if (c.note) {
      s.addText(c.note, { x: x + 0.3, y: cY + cH - 0.32, w: cW - 0.6, h: 0.28, fontSize: 10, fontFace: "Calibri", color: c.noteColor || TEAL, bold: true, italic: true, margin: 0 });
    }
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.05, w: W - 1, h: 0.4, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
  s.addText("Identiverse · June 15 · harsh deadline.", {
    x: 0.7, y: 5.05, w: W - 1.4, h: 0.4, fontSize: 12, fontFace: "Calibri", color: WHITE, bold: true, valign: "middle", margin: 0,
  });

  pageNum(s, 7);
}

// ============================================================
// 8 — POST-P0
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "07 · Post-P0");
  slideTitle(s, "Where this goes next.");

  const items = [
    { t: "JIT with Gateway", b: "On-the-fly access grants, with or without human-in-the-loop. Ephemeral, scoped per task." },
    { t: "JML for Agents", b: "Joiner / mover / leaver lifecycle. Owner offboarded? Their agents don't linger." },
    { t: "Onboarding", b: "UI for connecting apps to the Gateway. Secured setup — self-service, not a services engagement." },
    { t: "Agent Intent", b: "Identity + behavior + context + data sensitivity, continuously evaluated. The vision horizon." },
  ];
  const gY = 1.85, gH = 1.5, gW = 4.55, gGap = 0.2;
  const gXs = [0.5, 0.5 + gW + gGap];
  const gYs = [gY, gY + gH + gGap];

  items.forEach((it, i) => {
    const x = gXs[i % 2];
    const y = gYs[Math.floor(i / 2)];
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: gW, h: gH, fill: { color: ICE }, line: { color: ICE, width: 0 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y, w: 0.08, h: gH, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
    s.addText(it.t, { x: x + 0.3, y: y + 0.18, w: gW - 0.5, h: 0.45, fontSize: 17, fontFace: "Georgia", color: NAVY, bold: true, margin: 0 });
    s.addText(it.b, { x: x + 0.3, y: y + 0.68, w: gW - 0.5, h: gH - 0.78, fontSize: 11, fontFace: "Calibri", color: INK, margin: 0 });
  });

  s.addText("Sequenced after P0. Omri scopes these in parallel with competitor research.", {
    x: 0.5, y: 5.05, w: W - 1, h: 0.3, fontSize: 11, fontFace: "Calibri", color: MUTED, italic: true, align: "center", margin: 0,
  });

  pageNum(s, 8);
}

// ============================================================
// 9 — KNOWNS · UNKNOWNS · NEXT STEPS
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: NAVY };
  s.addShape(pres.shapes.OVAL, { x: -2, y: 3.5, w: 5, h: 5, fill: { color: TEAL, transparency: 85 }, line: { color: TEAL, width: 0 } });

  eyebrow(s, "08 · What we leave with", true);
  slideTitle(s, "Know · Don't know · Start.", WHITE);

  const sections = [
    {
      label: "WE KNOW",
      color: TEAL,
      items: [
        "Deadline: Identiverse, June 15",
        "Arch lead: Sarit + Amir Ben Ami",
        "P0: Gateway Core, Policy Agent, Screens",
        "Visibility layer started (M1 + M2 in flight)",
      ],
    },
    {
      label: "WE DON'T KNOW",
      color: AMBER,
      items: [
        "What Gateway Core actually looks like",
        "Build options and coverage trade-offs",
        "How much M2 work feeds in vs. pauses",
        "Exact P0 status — what's done vs. started",
      ],
    },
    {
      label: "WE START NOW",
      color: ICE,
      items: [
        "Eng: research Gateway Core — options, coverage, POC plan",
        "Omri: market + competitor scan (share what we have)",
        "Omri: scope P0 remainder + post-P0 in parallel",
        "Sync in 2 weeks — next cycle review",
      ],
    },
  ];

  const sY = 1.9, sH = 2.9, sW = 3.0, sGap = 0.15;
  const sStart = (W - (3 * sW + 2 * sGap)) / 2;
  sections.forEach((sec, i) => {
    const x = sStart + i * (sW + sGap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: sY, w: sW, h: 0.38, fill: { color: sec.color }, line: { color: sec.color, width: 0 } });
    s.addText(sec.label, { x, y: sY, w: sW, h: 0.38, fontSize: 11, fontFace: "Calibri", color: NAVY, bold: true, align: "center", valign: "middle", charSpacing: 3, margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x, y: sY + 0.38, w: sW, h: sH - 0.38, fill: { color: NAVY_DEEP }, line: { color: sec.color, width: 1 } });

    const bullets = sec.items.map((t, j) => ({
      text: t,
      options: { bullet: { code: "25A0" }, color: WHITE, fontSize: 11, breakLine: j < sec.items.length - 1 },
    }));
    s.addText(bullets, { x: x + 0.2, y: sY + 0.53, w: sW - 0.4, h: sH - 0.68, fontFace: "Calibri", margin: 0, paraSpaceAfter: 5 });
  });

  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 5.0, w: W - 1, h: 0.45, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
  s.addText([
    { text: "OPEN TO THE ROOM:  ", options: { bold: true, color: NAVY, fontSize: 11, charSpacing: 3 } },
    { text: "What from M1 / M2 do you think already covers parts of P0?", options: { color: NAVY, bold: true, italic: true, fontSize: 13 } },
  ], { x: 0.7, y: 5.0, w: W - 1.4, h: 0.45, fontFace: "Calibri", valign: "middle", margin: 0 });

  pageNum(s, 9, true);
}

pres.writeFile({ fileName: OUT }).then((f) => console.log("Wrote:", f));
