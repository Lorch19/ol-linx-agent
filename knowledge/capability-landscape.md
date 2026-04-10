# IGA/Identity Security Capability Landscape

> Last updated: 2026-04-10 (post M&A wave)
> Based on Gartner IGA Market Guide (Oct 2025) mandatory/common features + web research April 2026.
> Note: Gartner transitioned IGA from Magic Quadrant to **Market Guide** (Oct 2025, 9.2% category growth).

## Capability Map

L = Leads | H = Has (competitive) | E = Early/partial | — = Absent

| Capability | SailPoint | Saviynt | Silverfort | ServiceNow/Veza | C1 | Lumos | PANW/CyberArk | CrowdStrike/SGNL | Linx |
|---|---|---|---|---|---|---|---|---|---|
| **IGA Core** | | | | | | | | | |
| Identity lifecycle mgmt | L | L | E | H | H | H | H | — | E |
| Access request/workflow | L | L | E | H | L | H | H | E | E |
| Access certification | L | L | E | H | H | H | H | — | E |
| Provisioning (SCIM + ITSM) | L | H | E | H | L | H | H | — | E |
| Role/policy management | L | L | E | H | H | H | H | E | E |
| SOD controls | L | L | E | H | H | H | H | — | E |
| **Visibility & Intelligence** | | | | | | | | | |
| Identity discovery | H | H | L | L | H | H | E | H | H |
| Access graph/relationship viz | E | E | H | L | H | H | E | E | H |
| Identity analytics (AI/ML) | H | H | H | L | H | L | E | H | H |
| ISPM / posture scoring | E | H | H | L | E | H | E | H | H |
| Risk-based prioritization | H | H | H | L | H | H | E | L | H |
| **Machine / NHI** | | | | | | | | | |
| Service account governance | H | H | H | L | H | E | H | H | E |
| OAuth/API token discovery | E | E | H | L | H | E | E | H | E |
| AI agent identity governance | E | H | H | L | H | E | H | H | E |
| Certificate/secrets lifecycle | E | H | E | E | E | — | L | — | — |
| **Privileged Access** | | | | | | | | | |
| PAM / vault | E | H | E | — | H | — | L | — | — |
| JIT access / zero standing | E | E | H | H | L | H | H | L | E |
| Session management | — | E | E | — | — | — | L | — | — |
| **Advanced** | | | | | | | | | |
| Data access governance | H | H | E | H | — | — | E | — | — |
| CIEM | H | H | E | H | — | — | H | E | — |
| CAEP/shared signals | H | H | H | E | — | — | H | L | — |
| Compliance reporting | L | L | E | H | H | H | H | E | E |
| AI assistants/agents | H | H | E | H | H | L | H | E | H |
| **Agentic (Emerging)** | | | | | | | | | |
| MCP server/registry | E | E | E | H | H | — | H | E | E |
| Autonomous remediation | E | E | E | E | E | E | E | E | **L** |
| Agent access gateway | — | H | E | E | E | — | H | H | E |

## Where Linx Can Differentiate (Updated April 2026)

1. **Autonomous remediation (Autopilot GA)** — this is the one capability where Linx currently leads the matrix. Lumos has Identity Security Agents on waitlist. Others claim it but ship AI-assist, not AI-action. Linx's Autopilot shipping at RSAC 2026 is the proof point to weaponize.

2. **AI-native architecture from inception** — most competitors are retrofitting AI onto existing platforms. Linx was built on a graph data model with AI-native operations in mind. This is defensible for ~12 months before challengers rebuild.

3. **Bridge between IGA and ISPM** — still valid, but narrower window. IGA vendors (SailPoint, Saviynt) now have AI-assisted posture. ISPM vendors (Veza under ServiceNow) still weak on IGA workflow depth. Silverfort covers both but via acquired stack.

4. **Agentless data-layer approach** — Silverfort is the main agentless competitor but deploys as an agent-based enforcement proxy. Linx's native data ingestion without proxies or network-layer changes is a differentiator for cloud-first buyers.

## "Only We" Claim Analysis — Shelf Life Update

**Previous claim (April 8):** "Only we combine unified human + NHI + agentic governance with autonomous remediation on a single AI-native graph" — shelf life 12-18 months.

**Updated claim (April 10):** Same claim, **shelf life shortened to ~12 months maximum.** Reasons:
- **Saviynt** shipped Identity Security for AI at RSAC 2026 — closing the agentic gap faster than expected
- **Silverfort** has identical unified vision with 5-year head start and 1000+ customers
- **ServiceNow/Veza** now has Enterprise Identity Control Plane with NHI & AI Agent Security
- **PANW/CyberArk** combines PAM + Zilla IGA + Venafi + Secure AI Agents — claims unified stack
- **The last defensible edge is AUTONOMOUS REMEDIATION** — everyone else is autopilot-adjacent, Linx is autopilot-GA

**Implication:** Linx's differentiation must sharpen from "unified coverage" (now commoditized) to **"unified coverage with GA autonomous action."** The proof point is Autopilot in production at Fortune 500 references.

## Analyst Category Map (April 2026)

| Category | Analyst | Status | Linx Fit |
|---|---|---|---|
| IGA | Gartner Market Guide (Oct 2025, was MQ) | Active, 9.2% growth | Partial |
| ISPM | Gartner Hype Cycle | Emerging | Strong |
| ITDR | Gartner Hype Cycle | Established | Adjacent |
| IVIP (Identity Visibility & Intelligence Platforms) | Gartner | Growing | Strong |
| NHI Management | Emerging (no MQ yet) | Hot | Partial |
| Identity Fabrics | Gartner | Mature concept | Philosophical alignment |
| Workforce Identity Security Platforms | Forrester | New (2025) | Strong |
| AI Agent Identity Governance | Undefined | Whitespace | **Positioning opportunity** |

**Strategic note:** Linx should push analysts to define the AI Agent Identity Governance category before competitors do. This is whitespace where Linx can be the named leader.

## Gartner's VIA Model (Visibility → Intelligence → Action)

From the Oct 2025 IGA Market Guide — Gartner frames the evolution as:
- **Visibility**: Discovery, data integration, access relationship visualization
- **Intelligence**: AI/ML analytics, risk scoring, recommendations, anomaly detection
- **Action**: Automated provisioning, certification, remediation, policy enforcement

Most vendors are strong on 1-2 of these layers, weak on the third. **Linx's Autopilot is the strongest "Action" layer in the market as of April 2026** — this is where to invest positioning energy.
