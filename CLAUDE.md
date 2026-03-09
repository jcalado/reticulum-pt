# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for the Portuguese community for the Reticulum Network Stack — a cryptography-based networking protocol for resilient, decentralized networks over low-bandwidth/high-latency mediums. This repo contains the landing page and reference documentation, not the main Reticulum Python codebase.

```
docs/
├── source/
│   ├── index.rst               # Root TOC
│   ├── *.rst                   # 15 documentation chapters
│   ├── graphics/               # Logos, hardware photos, topology diagrams
│   ├── screenshots/            # Application screenshots (PNG + WebP)
│   └── _static/custom.css      # Furo theme overrides (dark mode colors)
├── manual/                     # Generated HTML output
├── Reticulum Manual.pdf        # Generated PDF
└── Reticulum Manual.epub       # Generated EPUB
```

**Documentation structure follows a learning path:**
- Philosophy & concepts: `whatis.rst`, `zen.rst`, `understanding.rst`
- Practical guides: `gettingstartedfast.rst`, `using.rst`, `interfaces.rst`, `networks.rst`, `hardware.rst`
- Ecosystem: `software.rst`, `examples.rst`
- API reference: `reference.rst` (auto-generated from RNS Python docstrings via autodoc)

## Key Details

- All source files are **reStructuredText (.rst)**
- `reference.rst` is the largest file (~199KB) — it's the auto-generated API reference
- `interfaces.rst` is the second largest (~128KB) — comprehensive interface configuration docs
