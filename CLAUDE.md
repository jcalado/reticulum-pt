# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Landing page and documentation for the **Portuguese Reticulum community** (reticulum-pt). Reticulum is a cryptography-based networking stack for resilient, decentralized mesh networks over low-bandwidth/high-latency mediums (LoRa, packet radio, WiFi, serial, etc.).

This repo is the **community website**, not the main Reticulum Python codebase.

## Repository Structure

```
index.html          # Main landing page (single-page site, in Portuguese)
style.css           # Dark-themed CSS with CSS custom properties
app.js              # Animated mesh background canvas + scroll animations
docs/
├── source/         # Sphinx reStructuredText documentation sources
│   ├── *.rst       # 15 documentation chapters
│   ├── graphics/   # Hardware photos, topology diagrams
│   ├── screenshots/# App screenshots (PNG + WebP)
│   └── _static/    # Furo theme CSS overrides
├── manual/         # Generated HTML output (do not edit directly)
├── Reticulum Manual.pdf
└── Reticulum Manual.epub
```

## Landing Page (index.html)

Single-page site in Portuguese with these sections:
- **Hero** — tagline + stats
- **O que é** — feature cards (encryption, medium-agnostic, no source addresses, etc.)
- **Como funciona** — 4-step getting started flow + install commands
- **Aplicações** — Sideband, Nomad Network, MeshChat, LXST/rnphone
- **Hardware** — compatible LoRa boards, ISM regulation note, RNode config example
- **Comunidade** — community links + call to action
- **Footer**

## Key Technical Details

- **Language**: All user-facing text is in **Portuguese (pt)**
- **Fonts**: Outfit (body) + Space Mono (code/monospace)
- **Design**: Dark theme, green accent (#00e5a0), animated mesh background
- **No build system** — static HTML/CSS/JS, no bundler or framework
- **Documentation** uses Sphinx with Furo theme; `reference.rst` (~199KB) and `interfaces.rst` (~128KB) are the largest files

## Portugal-Specific Regulatory Info (ANACOM)

The site includes ISM band regulations for Portugal:
- **868 MHz**: 500 mW, 10% duty cycle
- **433 MHz**: 10 mW, 10% duty cycle
- Licensed radio amateurs can use higher power on amateur bands

The RNode config example uses sub-band g3 (869.4–869.65 MHz) at 22 dBm / SF7 / BW 62.5 kHz.

## Guidelines

- Keep all user-facing content in Portuguese
- Maintain the existing dark theme visual style
- The site is a single HTML page — avoid unnecessary complexity
- When updating regulatory info, reference ANACOM as the authority

## Design Context

### Users
Privacy advocates, developers/hackers, and technical hobbyists in Portugal — people who understand (or want to understand) mesh networking, cryptography, and decentralized communication. They arrive with curiosity and technical intent: configuring hardware, deploying nodes, or evaluating Reticulum for resilient comms. Context ranges from ham radio operators building emergency networks to privacy-minded developers exploring off-grid alternatives.

### Brand Personality
**Rebellious, technical, empowering.** Cypherpunk spirit — defiant against surveillance and centralization, deeply capable, putting sovereign communication power directly in users' hands. The tone is confident and direct, never corporate or patronizing.

### Emotional Goals
The interface should layer three emotional registers:
1. **Curiosity + confidence** — "This is fascinating and I can do this." Draw people in technically, make it feel achievable.
2. **Empowerment + urgency** — "I need to be part of this." A call to action, defiance against the status quo.
3. **Trust + belonging** — "These are my people." Community warmth within a technical, underground context.

### Aesthetic Direction
- **Dark theme** (`#0a0c10` background) with green accent (`#00e5a0`) and blue secondary (`#00c2ff`) — the current palette is definitive
- **Hacker/terminal aesthetic**: Space Mono for code and labels, monospace section labels with `//` prefix, code blocks as first-class content
- **Animated mesh background** reinforces the network/mesh concept visually
- **Multicolor feature card accents** (green, blue, purple, orange, pink, cyan) add variety within the dark canvas
- **Subtle glow effects** on hover and interactive elements — never flashy, always purposeful
- **Anti-references**: Generic SaaS landing pages, corporate tech sites, anything with stock photos or rounded-friendly aesthetics. This should feel like infrastructure built by people who care, not a product being sold.

### Accessibility
No formal WCAG target, but maintain and extend current accessibility features:
- `prefers-reduced-motion` respected (animations disabled)
- `focus-visible` outlines on all interactive elements
- Semantic HTML structure
- Sufficient color contrast for body text on dark backgrounds

### Design Principles
1. **Sovereignty over polish** — The design should feel empowering and independent, not slick or commercial. Raw capability > marketing sheen.
2. **Technical honesty** — Show real configs, real commands, real parameters. The audience respects specificity; never abstract away the technical substance.
3. **Dark by nature** — The dark theme isn't a preference toggle, it's the identity. Green-on-dark evokes terminals, encrypted channels, and underground networks.
4. **Progressive disclosure** — Lead with the vision ("comunicação soberana"), then reveal technical depth (configs, frequencies, code). Respect both newcomers and experts.
5. **Community, not product** — This is a grassroots Portuguese community page, not a startup. Design should invite participation, not conversion.
