# Overview

Siva's Games is a web-based gaming portal that hosts a collection of popular browser games. The platform provides a simple, accessible interface for users to discover and play various HTML5 and Unity WebGL games including puzzle games, platformers, racing games, and action titles. The site acts as a curated game directory with featured games and easy navigation.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
The application uses a traditional multi-page website structure with static HTML, CSS, and vanilla JavaScript. The main landing page (`index.html`) serves as a game portal with a navigation header and featured games section. Each game is hosted in its own subdirectory with dedicated HTML entry points.

## Game Integration Pattern
Games are integrated through various web technologies:
- **Unity WebGL Games**: Games like 1v1.LOL, BitLife, Getaway Shootout use Unity's WebGL build system with UnityLoader.js
- **HTML5 Canvas Games**: Games like 2048, Idle Breakout use pure HTML5 canvas rendering
- **Phaser Framework Games**: Multiple Vex series games and Moto X3M titles built with Phaser game engine
- **Custom Engine Games**: Drive Mad and other titles use proprietary WebAssembly-based engines

## Asset Management
Each game maintains its own asset structure including:
- Minified JavaScript bundles for game logic
- JSON configuration files for game settings and level data
- CSS stylesheets for responsive game containers
- Image and audio assets loaded dynamically

## Search and Discovery
The main portal includes client-side search functionality implemented in `script.js` that filters games by name using DOM manipulation and CSS display properties.

## Responsive Design
Games are designed to work across different screen sizes with:
- Viewport meta tags for mobile optimization
- CSS media queries for responsive layouts
- Touch event handling for mobile devices
- Fullscreen API integration for immersive gameplay

# External Dependencies

## Game Development Frameworks
- **Unity WebGL**: Used for 3D and complex 2D games requiring Unity's rendering pipeline
- **Phaser.js**: 2D game framework used extensively for platformer and arcade-style games
- **Custom WebAssembly Engines**: Some games use proprietary game engines compiled to WebAssembly

## Third-Party Services
- **FontAwesome**: Icon library for UI elements
- **Google Fonts**: Montserrat font family for consistent typography
- **Firebase**: Authentication and remote configuration for some games (1v1.LOL)
- **Analytics and Advertising**: Various games integrate with advertising SDKs and analytics platforms

## Browser APIs
- **Canvas API**: For 2D rendering in HTML5 games
- **WebGL**: For hardware-accelerated graphics
- **Fullscreen API**: For immersive gaming experience
- **Local Storage**: For game save data and user preferences
- **Touch Events**: For mobile device input handling