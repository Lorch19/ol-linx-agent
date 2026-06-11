# Omri-Linx-Skills: Role Skill Management

> Moved out of CLAUDE.md 2026-06-11 (verdict #1 — another repo's ops manual doesn't belong in every session's context). Load this file only when Omri asks to manage his skills.

The repo `Omri-Linx-Skills` (at `~/code/Omri-Linx-Skills`) contains Omri's role-level Claude Skills.

## Triggers and behavior

**"Install my skills" / "set up my skills"**
Run `scripts/install.sh` from the repo. Report where the symlink was created (`~/.claude/skills`), number of ZIPs in `dist/` ready for Claude.ai upload, and link to https://claude.ai/settings/skills. Don't attempt to upload to Claude.ai — no public API exists for it.

**"Update my skills" / "I edited [file], sync everything"**
Run `scripts/update.sh "<commit message>"`. The script syncs role context to all skill folders, commits and pushes to origin, repackages ZIPs in `dist/`, and reports whether Claude.ai re-upload is needed. If re-upload is needed, surface the `dist/` paths and https://claude.ai/settings/skills.

**"Add a new initiative context for [name]"**
Create `initiatives/<name>/initiative-context.md` using the template at `initiatives/README.md`. Don't sync into skill folders — initiative context is loaded on demand by skills, not embedded.

**"Edit role context: [change]"**
Edit `shared/linx-role-context.md` directly, then run `update.sh` automatically — don't wait for a separate sync command.

**"Why isn't [skill] triggering?"**
Open `skills/<skill-name>/SKILL.md`, look at the description (200-char limit), suggest a sharpened version that better front-loads the trigger keywords.

## What NOT to do

- Never modify `linx-role-context.md` copies inside skill folders directly — always edit `shared/linx-role-context.md` and let `sync-context.sh` propagate.
- Never attempt to upload to Claude.ai (no API path).
- Never commit the `dist/` folder (it's in .gitignore).
- Never change the symlink at `~/.claude/skills` without warning Omri first.

## Commands cheatsheet

```bash
cd ~/code/Omri-Linx-Skills
./scripts/install.sh                    # one-time setup
./scripts/update.sh "describe change"   # after editing role context or a SKILL.md
./scripts/sync-context.sh               # resync without committing (testing)
./scripts/package-skills.sh             # repackage ZIPs (testing)
ls skills/                              # list current skills
```
