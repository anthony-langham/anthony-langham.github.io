# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

This is a personal portfolio website for Dr. Anthony Langham hosted on GitHub Pages at www.anthonylangham.com. It's a static website with no build process required.

## Architecture

The site consists of:
- **index.html**: Main landing page with social media links and dynamic theme switching
- **game.html**: Hidden "Guess the Number" game (accessed by clicking the wave emoji)
- **script.js**: Implements random theme selection on page load and click events
- **game.js**: Game logic for the number guessing game
- **css/**: Contains base styles and 10 color theme variations

## Key Features

1. **Dynamic Theme System**: The site randomly loads one of 10 CSS themes on each page load or click event. Themes are defined in the `themes` array in script.js:4-16.

2. **Hidden Game**: Clicking the wave emoji (👋) navigates to a number guessing game at game.html.

## Development Notes

- No build tools or package managers are used
- jQuery 3.6.0 is loaded from CDN
- Font Awesome icons are used for social media links
- The site uses Google Fonts (Reem Kufi and Roboto)

## Deployment

The site is automatically deployed via GitHub Pages when changes are pushed to the main branch. The custom domain is configured via the CNAME file.