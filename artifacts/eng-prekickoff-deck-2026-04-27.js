// Engineering Pre-Kickoff Deck — AI Governance / MCP Gateway
// Sunday 2026-04-27 · Omri Lorch
// v6 — 7 slides. Adds problem statement. Consolidates previous-try + pivot,
//      and P0 + post-P0. Run: node artifacts/eng-prekickoff-deck-2026-04-27.js

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
const RED = "E11D48";
const LINE = "CBD5E1";
const PURPLE = "7C3AED";

const pres = new pptxgen();
pres.layout = "LAYOUT_16x9";
pres.title = "Engineering Pre-Kickoff — AI Governance";
pres.author = "Omri Lorch";

const W = 10, H = 5.625;
const TOTAL = 7;

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
// 2 — PROBLEM SPACE — Mor's triangle style
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: "0A0E1A" };

  eyebrow(s, "01 · The problem space", true);
  s.addText("What makes agents different?", {
    x: 0.5, y: 0.8, w: 9, h: 0.75, fontSize: 30, fontFace: "Georgia", color: WHITE, bold: true, margin: 0,
  });
  s.addText("\"Agents are like humans on steroids — they don't sleep, they don't wait, they operate at machine speed.\"  — Mor Shabi", {
    x: 0.5, y: 1.55, w: 9, h: 0.45, fontSize: 12, fontFace: "Calibri", color: ICE, italic: true, margin: 0,
  });

  const orbY = 2.1, orbW = 3.0, orbH = 2.5;
  s.addShape(pres.shapes.OVAL, { x: 0.2, y: orbY, w: orbW, h: orbH, fill: { color: PURPLE, transparency: 55 }, line: { color: PURPLE, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 3.5, y: orbY + 0.15, w: orbW, h: orbH, fill: { color: TEAL, transparency: 50 }, line: { color: TEAL, width: 0 } });
  s.addShape(pres.shapes.OVAL, { x: 6.7, y: orbY, w: orbW, h: orbH, fill: { color: AMBER, transparency: 55 }, line: { color: AMBER, width: 0 } });

  s.addText("HUMAN", { x: 0.4, y: orbY + 0.25, w: 2.6, h: 0.4, fontSize: 13, fontFace: "Calibri", color: WHITE, bold: true, align: "center", charSpacing: 4, margin: 0 });
  s.addText("AI AGENT", { x: 3.7, y: orbY + 0.4, w: 2.6, h: 0.4, fontSize: 13, fontFace: "Calibri", color: WHITE, bold: true, align: "center", charSpacing: 4, margin: 0 });
  s.addText("NHI", { x: 6.9, y: orbY + 0.25, w: 2.6, h: 0.4, fontSize: 13, fontFace: "Calibri", color: WHITE, bold: true, align: "center", charSpacing: 4, margin: 0 });

  s.addText("Judicious · Static\nRole-based permissions\nDeterministic", { x: 0.25, y: orbY + 0.85, w: 2.8, h: 0.9, fontSize: 11, fontFace: "Calibri", color: ICE, align: "center", margin: 0 });
  s.addText("Risk: Socially exploitable\nover-permissioned over time", { x: 0.25, y: orbY + 1.8, w: 2.8, h: 0.55, fontSize: 10, fontFace: "Calibri", color: PURPLE, italic: true, align: "center", margin: 0 });

  s.addText("Autonomous · Goal-based\nNondeterministic · LLM-powered\nContext-aware · Iterative", { x: 3.6, y: orbY + 0.98, w: 2.8, h: 0.9, fontSize: 11, fontFace: "Calibri", color: ICE, align: "center", margin: 0 });
  s.addText("Risk: Manipulable via inputs\ndangerous when over-trusted", { x: 3.6, y: orbY + 1.9, w: 2.8, h: 0.55, fontSize: 10, fontFace: "Calibri", color: TEAL, italic: true, align: "center", margin: 0 });

  s.addText("Restless · Works at scale\nPermission-greedy", { x: 6.8, y: orbY + 0.85, w: 2.8, h: 0.9, fontSize: 11, fontFace: "Calibri", color: ICE, align: "center", margin: 0 });
  s.addText("Risk: Misconfigurations\nlong-lived secrets", { x: 6.8, y: orbY + 1.8, w: 2.8, h: 0.55, fontSize: 10, fontFace: "Calibri", color: AMBER, italic: true, align: "center", margin: 0 });

  pageNum(s, 2, true);
}

// ============================================================
// 3 — PROBLEM STATEMENT (new)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "02 · The problem");
  slideTitle(s, "What we're solving.");

  // Statement card
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.85, w: W - 1.4, h: 2.85, fill: { color: ICE }, line: { color: ICE, width: 0 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 1.85, w: 0.08, h: 2.85, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });

  s.addText([
    { text: "For CISOs ", options: { color: NAVY, bold: true, fontSize: 17 } },
    { text: "whose enterprises now run more agents than humans (144 : 1),", options: { color: INK, fontSize: 17, breakLine: true } },
    { text: " ", options: { fontSize: 6, breakLine: true } },
    { text: "there's no way to see ", options: { color: INK, fontSize: 17 } },
    { text: "what agents exist, who owns them, what they access, or what they did.", options: { color: INK, fontSize: 17, breakLine: true } },
    { text: " ", options: { fontSize: 6, breakLine: true } },
    { text: "The IAM and PAM tools they have ", options: { color: INK, fontSize: 17 } },
    { text: "were built for humans and NHIs — not agents", options: { color: INK, italic: true, fontSize: 17 } },
    { text: " that spin up in seconds, decide at runtime, and chain through tools and MCP servers.", options: { color: INK, fontSize: 17, breakLine: true } },
  ], { x: 1.1, y: 2.1, w: W - 2.0, h: 2.4, fontFace: "Calibri", paraSpaceAfter: 4, margin: 0 });

  // Solution line
  s.addShape(pres.shapes.RECTANGLE, { x: 0.7, y: 4.95, w: W - 1.4, h: 0.5, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
  s.addText([
    { text: "LINX SOLVES THIS WITH  ", options: { color: TEAL, bold: true, fontSize: 11, charSpacing: 3 } },
    { text: "agentic identity governance, end-to-end:  ", options: { color: WHITE, fontSize: 14 } },
    { text: "Discover \u2192 Assess \u2192 Enforce.", options: { color: WHITE, bold: true, fontSize: 14 } },
  ], { x: 0.95, y: 4.95, w: W - 1.9, h: 0.5, fontFace: "Calibri", valign: "middle", margin: 0 });

  pageNum(s, 3);
}

// ============================================================
// 4 — CAPABILITY MAP — Discover / Assess / Enforce + status
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "03 · The full map");
  slideTitle(s, "10 capabilities. Three stages.");

  const STATUS = {
    M1:     { label: "M1 \u2713", color: TEAL },
    M2:     { label: "M2",       color: AMBER },
    P0:     { label: "P0",       color: NAVY },
    FUTURE: { label: "Future",   color: MUTED },
  };

  const groups = [
    {
      label: "DISCOVER", color: TEAL,
      caps: [
        { n: "1",  t: "Registration & identification", s: "M1" },
        { n: "2",  t: "Ownership assignment",          s: "M1" },
        { n: "10", t: "Visibility & observability",    s: "M1" },
      ],
    },
    {
      label: "ASSESS", color: NAVY,
      caps: [
        { n: "3", t: "Authentication",             s: "M2" },
        { n: "4", t: "Authorization & delegation", s: "P0" },
        { n: "9", t: "Multi-agent collaboration",  s: "FUTURE" },
      ],
    },
    {
      label: "ENFORCE", color: PURPLE,
      caps: [
        { n: "5", t: "Human oversight & approval",    s: "FUTURE" },
        { n: "6", t: "Resource policy enforcement",   s: "P0" },
        { n: "7", t: "Credential lifecycle",          s: "FUTURE" },
        { n: "8", t: "Auditability & logging",        s: "P0" },
      ],
    },
  ];

  const gY = 1.85, gH = 3.15, gW = 2.95, gGap = 0.1;
  const gStart = (W - (3 * gW + 2 * gGap)) / 2;

  groups.forEach((g, i) => {
    const x = gStart + i * (gW + gGap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: gY, w: gW, h: 0.45, fill: { color: g.color }, line: { color: g.color, width: 0 } });
    s.addText(g.label, { x, y: gY, w: gW, h: 0.45, fontSize: 14, fontFace: "Calibri", color: WHITE, bold: true, align: "center", valign: "middle", charSpacing: 5, margin: 0 });
    s.addShape(pres.shapes.RECTANGLE, { x, y: gY + 0.45, w: gW, h: gH - 0.45, fill: { color: ICE }, line: { color: g.color, width: 1 } });

    g.caps.forEach((c, j) => {
      const rowH = (gH - 0.55) / g.caps.length;
      const rowY = gY + 0.55 + j * rowH;
      s.addShape(pres.shapes.OVAL, { x: x + 0.18, y: rowY + (rowH - 0.28) / 2, w: 0.28, h: 0.28, fill: { color: g.color }, line: { color: g.color, width: 0 } });
      s.addText(c.n, { x: x + 0.18, y: rowY + (rowH - 0.28) / 2, w: 0.28, h: 0.28, fontSize: 10, fontFace: "Calibri", color: WHITE, bold: true, align: "center", valign: "middle", margin: 0 });
      s.addText(c.t, { x: x + 0.54, y: rowY, w: gW - 1.25, h: rowH, fontSize: 11, fontFace: "Calibri", color: INK, valign: "middle", margin: 0 });
      const st = STATUS[c.s];
      s.addShape(pres.shapes.RECTANGLE, { x: x + gW - 0.68, y: rowY + (rowH - 0.24) / 2, w: 0.65, h: 0.24, fill: { color: st.color }, line: { color: st.color, width: 0 } });
      s.addText(st.label, { x: x + gW - 0.68, y: rowY + (rowH - 0.24) / 2, w: 0.65, h: 0.24, fontSize: 9, fontFace: "Calibri", color: WHITE, bold: true, align: "center", valign: "middle", margin: 0 });
    });

    if (i < 2) {
      s.addShape(pres.shapes.LINE, {
        x: x + gW + 0.01, y: gY + 0.22, w: gGap - 0.01, h: 0,
        line: { color: LINE, width: 2, endArrowType: "triangle" },
      });
    }
  });

  s.addText([
    { text: "M1 connectors live: ", options: { bold: true, color: NAVY, fontSize: 10 } },
    { text: "Gemini · Vertex AI · Bedrock · n8n  ·  ", options: { color: INK, fontSize: 10 } },
    { text: "ChatGPT Enterprise: Backlog  ·  Copilot Studio: Canceled Jan 2026", options: { color: MUTED, italic: true, fontSize: 10 } },
  ], { x: 0.5, y: 5.1, w: W - 1, h: 0.28, fontFace: "Calibri", margin: 0 });

  pageNum(s, 4);
}

// ============================================================
// 5 — FROM → TO (combined: previous try + MCP Gateway)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "04 · From \u2192 To");
  slideTitle(s, "From IdP-led to protocol-led.");

  // FROM (left)
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.85, w: 4.1, h: 3.1, fill: { color: ICE }, line: { color: ICE, width: 0 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.85, w: 0.08, h: 3.1, fill: { color: AMBER }, line: { color: AMBER, width: 0 } });
  s.addText("WHAT WE TRIED", { x: 0.7, y: 1.95, w: 3.7, h: 0.3, fontSize: 10, fontFace: "Calibri", color: AMBER, bold: true, charSpacing: 3, margin: 0 });
  s.addText("Govern agents through the same IAM APIs that govern humans + NHIs.", {
    x: 0.7, y: 2.3, w: 3.7, h: 0.85, fontSize: 14, fontFace: "Georgia", color: NAVY, bold: true, margin: 0,
  });
  s.addText([
    { text: "The IAM API surface couldn't support the agent access flow.", options: { color: RED, bold: true, fontSize: 11, breakLine: true } },
    { text: " ", options: { fontSize: 6, breakLine: true } },
    { text: "The exact failure mode is what Sarit + Amir are best placed to describe — and it's the foundation for the Gateway design.", options: { color: MUTED, italic: true, fontSize: 11, breakLine: true } },
    { text: " ", options: { fontSize: 6, breakLine: true } },
    { text: "Signal: ", options: { bold: true, color: INK, fontSize: 11 } },
    { text: "M2 stalled at the 26% that needed deep access to the agent call flow.", options: { color: INK, fontSize: 11 } },
  ], { x: 0.7, y: 3.2, w: 3.7, h: 1.7, fontFace: "Calibri", margin: 0 });

  // Arrow
  s.addShape(pres.shapes.LINE, { x: 4.65, y: 3.4, w: 0.7, h: 0, line: { color: NAVY, width: 3, endArrowType: "triangle" } });

  // TO (right)
  s.addShape(pres.shapes.RECTANGLE, { x: 5.4, y: 1.85, w: 4.1, h: 3.1, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
  s.addShape(pres.shapes.RECTANGLE, { x: 5.4, y: 1.85, w: 0.08, h: 3.1, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
  s.addText("WHAT WE'RE DOING NOW", { x: 5.6, y: 1.95, w: 3.7, h: 0.3, fontSize: 10, fontFace: "Calibri", color: TEAL, bold: true, charSpacing: 3, margin: 0 });
  s.addText("MCP Gateway.", { x: 5.6, y: 2.3, w: 3.7, h: 0.5, fontSize: 22, fontFace: "Georgia", color: WHITE, bold: true, margin: 0 });
  s.addText("Govern agents at the protocol layer — one enforcement point between every agent and every tool.", {
    x: 5.6, y: 2.85, w: 3.7, h: 0.7, fontSize: 12, fontFace: "Calibri", color: ICE, italic: true, margin: 0,
  });

  // Mini diagram inside the right card
  const dY = 3.7, dH = 0.65;
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 5.55, y: dY, w: 1.0, h: dH, fill: { color: "1A2545" }, line: { color: ICE, width: 0.75 }, rectRadius: 0.06 });
  s.addText("Agent", { x: 5.55, y: dY, w: 1.0, h: dH, fontSize: 11, fontFace: "Calibri", color: WHITE, bold: true, align: "center", valign: "middle", margin: 0 });
  s.addShape(pres.shapes.LINE, { x: 6.6, y: dY + dH / 2, w: 0.3, h: 0, line: { color: TEAL, width: 1.5, endArrowType: "triangle" } });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 6.95, y: dY - 0.05, w: 1.55, h: dH + 0.1, fill: { color: NAVY_DEEP }, line: { color: TEAL, width: 1.5 }, rectRadius: 0.06 });
  s.addText("Gateway", { x: 6.95, y: dY - 0.05, w: 1.55, h: dH + 0.1, fontSize: 11, fontFace: "Calibri", color: TEAL, bold: true, align: "center", valign: "middle", margin: 0 });
  s.addShape(pres.shapes.LINE, { x: 8.55, y: dY + dH / 2, w: 0.3, h: 0, line: { color: TEAL, width: 1.5, endArrowType: "triangle" } });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 8.9, y: dY, w: 0.55, h: dH, fill: { color: "1A2545" }, line: { color: ICE, width: 0.75 }, rectRadius: 0.06 });
  s.addText("Tools", { x: 8.9, y: dY, w: 0.55, h: dH, fontSize: 9, fontFace: "Calibri", color: WHITE, bold: true, align: "center", valign: "middle", margin: 0 });

  s.addText("Lead: Sarit + Amir Ben Ami  ·  Status: concept / whiteboard", {
    x: 5.6, y: 4.45, w: 3.7, h: 0.4, fontSize: 10, fontFace: "Calibri", color: AMBER, italic: true, valign: "middle", margin: 0,
  });

  // Footer: market tailwind
  s.addText("Market tailwind: Saviynt, Token Security, Astrix all converging on MCP-layer governance.", {
    x: 0.5, y: 5.1, w: W - 1, h: 0.3, fontSize: 11, fontFace: "Calibri", color: MUTED, italic: true, align: "center", margin: 0,
  });

  pageNum(s, 5);
}

// ============================================================
// 6 — ROADMAP (P0 + Post-P0 consolidated)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: WHITE };
  accentBar(s);
  eyebrow(s, "05 · Roadmap");
  slideTitle(s, "P0 first. Then in sequence.");

  // P0 — section label
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 1.7, w: 1.0, h: 0.32, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
  s.addText("P0", { x: 0.5, y: 1.7, w: 1.0, h: 0.32, fontSize: 12, fontFace: "Calibri", color: WHITE, bold: true, align: "center", valign: "middle", charSpacing: 3, margin: 0 });
  s.addText("the demo target", { x: 1.6, y: 1.72, w: 8, h: 0.3, fontSize: 11, fontFace: "Calibri", color: MUTED, italic: true, valign: "middle", margin: 0 });

  // P0 — 3 columns
  const p0 = [
    { num: "01", title: "Gateway Core",    body: "Protocol-layer enforcement point. Every agent \u2192 tool call flows through it.", note: "Eng research starts here." },
    { num: "02", title: "Policy Agent",    body: "Access profiles per agent — at MCP/platform level AND tool level. Granular, not binary." },
    { num: "03", title: "Screens",         body: "\u201CIntegration\u201D tab for MCPs + 3 log views: System · Governance · All Access." },
  ];
  const cY = 2.15, cH = 1.85, cW = 3.0, cGap = 0.1;
  const cStart = (W - (3 * cW + 2 * cGap)) / 2;
  p0.forEach((c, i) => {
    const x = cStart + i * (cW + cGap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: cY, w: cW, h: cH, fill: { color: WHITE }, line: { color: LINE, width: 1 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: cY, w: cW, h: 0.06, fill: { color: TEAL }, line: { color: TEAL, width: 0 } });
    s.addText(c.num, { x: x + 0.25, y: cY + 0.15, w: 0.8, h: 0.3, fontSize: 10, fontFace: "Calibri", color: TEAL, bold: true, charSpacing: 3, margin: 0 });
    s.addText(c.title, { x: x + 0.25, y: cY + 0.45, w: cW - 0.5, h: 0.4, fontSize: 16, fontFace: "Georgia", color: NAVY, bold: true, margin: 0 });
    s.addText(c.body, { x: x + 0.25, y: cY + 0.9, w: cW - 0.5, h: 0.7, fontSize: 11, fontFace: "Calibri", color: INK, margin: 0 });
    if (c.note) {
      s.addText(c.note, { x: x + 0.25, y: cY + cH - 0.3, w: cW - 0.5, h: 0.25, fontSize: 9, fontFace: "Calibri", color: TEAL, bold: true, italic: true, margin: 0 });
    }
  });

  // Post-P0 — section label
  s.addShape(pres.shapes.RECTANGLE, { x: 0.5, y: 4.2, w: 1.0, h: 0.32, fill: { color: MUTED }, line: { color: MUTED, width: 0 } });
  s.addText("POST-P0", { x: 0.5, y: 4.2, w: 1.0, h: 0.32, fontSize: 10, fontFace: "Calibri", color: WHITE, bold: true, align: "center", valign: "middle", charSpacing: 2, margin: 0 });
  s.addText("in sequence after the demo lands", { x: 1.6, y: 4.22, w: 8, h: 0.3, fontSize: 11, fontFace: "Calibri", color: MUTED, italic: true, valign: "middle", margin: 0 });

  // Post-P0 — 4 slim cards
  const post = [
    { t: "JIT with Gateway", b: "On-the-fly grants. With/without HITL." },
    { t: "JML for Agents",   b: "Joiner / mover / leaver lifecycle." },
    { t: "Onboarding",       b: "UI to connect apps. Secured setup." },
    { t: "Agent Intent",     b: "Behavior + context + sensitivity." },
  ];
  const pY = 4.62, pH = 0.55, pW = 2.25, pGap = 0.13;
  const pStart = (W - (4 * pW + 3 * pGap)) / 2;
  post.forEach((it, i) => {
    const x = pStart + i * (pW + pGap);
    s.addShape(pres.shapes.RECTANGLE, { x, y: pY, w: pW, h: pH, fill: { color: ICE }, line: { color: ICE, width: 0 } });
    s.addShape(pres.shapes.RECTANGLE, { x, y: pY, w: 0.06, h: pH, fill: { color: NAVY }, line: { color: NAVY, width: 0 } });
    s.addText([
      { text: it.t, options: { bold: true, color: NAVY, fontSize: 11, breakLine: true } },
      { text: it.b, options: { color: MUTED, fontSize: 9 } },
    ], { x: x + 0.15, y: pY + 0.05, w: pW - 0.2, h: pH - 0.1, fontFace: "Calibri", margin: 0 });
  });

  // Footer: deadline
  s.addText("Identiverse  ·  June 15  ·  harsh deadline", {
    x: 0.5, y: 5.3, w: W - 1, h: 0.3, fontSize: 11, fontFace: "Calibri", color: AMBER, bold: true, italic: true, align: "center", margin: 0,
  });

  pageNum(s, 6);
}

// ============================================================
// 7 — KNOWNS · UNKNOWNS · NEXT STEPS (close, dark)
// ============================================================
{
  const s = pres.addSlide();
  s.background = { color: NAVY };
  s.addShape(pres.shapes.OVAL, { x: -2, y: 3.5, w: 5, h: 5, fill: { color: TEAL, transparency: 85 }, line: { color: TEAL, width: 0 } });

  eyebrow(s, "06 · What we leave with", true);
  slideTitle(s, "Know · Don't know · Start.", WHITE);

  const sections = [
    {
      label: "WE KNOW", color: TEAL,
      items: [
        "Deadline: Identiverse, June 15",
        "Arch lead: Sarit + Amir Ben Ami",
        "P0: Gateway Core, Policy Agent, Screens",
        "Discover layer (M1) is done — needs validation against P0",
      ],
    },
    {
      label: "WE DON'T KNOW", color: AMBER,
      items: [
        "What Gateway Core actually looks like",
        "Build options and coverage trade-offs",
        "How much M2 work feeds in vs. pauses",
        "Exact P0 status — what's done vs. started",
      ],
    },
    {
      label: "WE START NOW", color: ICE,
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

  pageNum(s, 7, true);
}

pres.writeFile({ fileName: OUT }).then((f) => console.log("Wrote:", f));
