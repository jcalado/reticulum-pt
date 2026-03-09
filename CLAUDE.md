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
