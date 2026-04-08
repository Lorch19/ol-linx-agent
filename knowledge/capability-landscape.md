# IGA/Identity Security Capability Landscape

> Last updated: 2026-04-08
> Based on Gartner IGA Market Guide (Oct 2025) mandatory/common features + market observations.

## Capability Map

L = Leads | H = Has (competitive) | E = Early/partial | — = Absent

| Capability | SailPoint | Saviynt | Veza | ConductorOne | Lumos | CyberArk/Zilla | Linx (est.) |
|---|---|---|---|---|---|---|---|
| **IGA Core** | | | | | | | |
| Identity lifecycle mgmt | L | L | H | H | H | H | E |
| Access request/workflow | L | L | H | L | H | H | E |
| Access certification | L | L | H | H | H | H | E |
| Provisioning (SCIM + ITSM) | L | H | H | L | H | H | E |
| Role/policy management | L | L | H | H | H | H | E |
| SOD controls | L | L | H | H | H | H | E |
| **Visibility & Intelligence** | | | | | | | |
| Identity discovery | H | H | L | H | H | E | H |
| Access graph/relationship viz | E | E | L | H | H | E | H |
| Identity analytics (AI/ML) | H | H | L | H | L | E | H |
| ISPM / posture scoring | E | H | L | E | H | E | H |
| Risk-based prioritization | H | H | L | H | H | E | H |
| **Machine / NHI** | | | | | | | |
| Service account governance | H | H | L | H | E | H | E |
| OAuth/API token discovery | E | E | L | E | E | E | E |
| AI agent identity governance | — | E | H | E | E | — | E |
| Certificate/secrets lifecycle | E | H | E | E | — | L | — |
| **Privileged Access** | | | | | | | |
| PAM / vault | E | H | — | H | — | L | — |
| JIT access / zero standing | E | E | H | L | H | H | E |
| Session management | — | E | — | — | — | L | — |
| **Advanced** | | | | | | | |
| Data access governance | H | H | H | — | — | E | — |
| CIEM | H | H | H | — | — | H | — |
| CAEP/shared signals | H | H | E | — | — | H | — |
| Compliance reporting | L | L | H | H | H | H | E |
| AI assistants/agents | E | H | H | H | L | E | E |

## Where Linx Can Differentiate (Hypothesis)

Based on the Linx assignment deck and market positioning:

1. **Visibility + ISPM layer** — Gartner explicitly calls out IVIP as high-growth. Linx's ability to ingest and organize identity data, provide contextualized insights, and visualize the attack surface aligns with the IVIP category.

2. **AI agent as "virtual employee"** — The assignment's focus on an AI agent that replaces headcount for identity teams is a unique angle. Not just "AI-assisted governance" but "AI-operated governance." This is where Lumos (Albus) is heading too, but Linx could own a more pragmatic, enterprise-ready version.

3. **Bridge between IGA and ISPM** — Most vendors are strong on one side. IGA vendors (SailPoint, Saviynt) have weak posture. ISPM vendors (Veza) have weaker IGA workflows. Linx could own the middle.

4. **Speed + depth** — Combine ConductorOne-level deployment speed with Veza-level visibility depth. This is the gap in market.

## Gartner's VIA Model (Visibility → Intelligence → Action)

From the Oct 2025 IGA Market Guide — Gartner frames the evolution as:
- **Visibility**: Discovery, data integration, access relationship visualization
- **Intelligence**: AI/ML analytics, risk scoring, recommendations, anomaly detection
- **Action**: Automated provisioning, certification, remediation, policy enforcement

Most vendors are strong on 1-2 of these layers, weak on the third. The vendor that delivers all three coherently wins.
