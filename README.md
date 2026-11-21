# Grace McPadden - Terminal Portfolio 🖥️

A retro-style terminal portfolio website built with React. Features ASCII art, terminal aesthetics, and a unique hacker-inspired design.

## Features

- 🎨 Terminal UI with retro green screen aesthetic
- 📝 ASCII art header with custom design
- 🧭 Multiple sections: Home, About, Skills, Projects, Contact
- ⌨️ Interactive navigation with hover effects
- 📱 Fully responsive design
- ✨ Glowing text effects and animations
- 🖼️ Customizable content and colors

## Customization Guide

### 1. Update Your Information

Edit `src/App.js` and replace placeholder content:

- **Home Section**: Update the introduction text
- **About Section**: Add your background, education, and interests
- **Skills Section**: Replace with your actual skills and tools
- **Projects Section**: Add your project details, links, and technologies
- **Contact Section**: Update with your actual contact information

### 2. Add Project Links

In the projects section, replace placeholder links:
```javascript
<span className="project-link">» GitHub Repo</span>
```

### 3. Customize Colors

Edit `src/App.css` to change the terminal colors. Main color variables:
- Green: `#00ff00` (main text color)
- Cyan: `#00ffff` (hover effects)
- Yellow: `#ffff00` (links)
- Blue: `#0088ff` (commands)

### 4. Add More Sections

To add a new section, follow this pattern in `src/App.js`:

```javascript
case 'newsection':
  return (
    <div className="section">
      <div className="command">cat newsection.txt</div>
      <div className="output">
        Your content here
      </div>
    </div>
  );
```

Then add it to the navigation bar:
```javascript
<span className="nav-item">
  [newsection]
</span>
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm start
```

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### Build for Production

```bash
npm run build
```

Builds the app for production in the `build` folder.

## Deployment

This site can be deployed to various platforms:

- **Vercel**: Recommended for React apps
- **Netlify**: Easy setup with git integration
- **GitHub Pages**: Free hosting with custom domain support
- **AWS**: S3 + CloudFront for scaling

## Technologies Used

- React 18
- CSS3 (with animations and gradients)
- JavaScript ES6+

## License

This project is open source and available under the MIT License.

---

**Made with ❤️ by Grace McPadden**
