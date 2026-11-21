First time making a project with claude code.

It took literally 10 minutes to make and deploy this app... without touching one line of code.

This was both exciting and terrifying.

More to come...


Check it out here https://grace-terminal-portfolio.gracemcpadden9.workers.dev/




# Grace McPadden - Terminal Portfolio 🖥️

An interactive PowerShell-style terminal portfolio website built with React. Navigate your way through my professional experience, projects, and skills using terminal commands. Features authentic Windows PowerShell aesthetics with Cascadia Code font and custom ASCII art designs.

## Features

- 💻 **PowerShell Terminal Interface**: Fully interactive terminal with real PowerShell styling
- 🎨 **Authentic Terminal Design**: Cascadia Code font, VS Code dark theme colors (#0c0c0c background)
- 📝 **ASCII Art**: Custom braille character designs and hidden easter eggs
- ⌨️ **Terminal Commands**: Navigate using `/home`, `/experience`, `/projects`, `/skills`, `/contact`
- 📂 **File System Simulation**: Use `ls`, `vim`, `cat` to browse and read files
- 🔐 **Read-Only File Access**: View `resume.pdf`, `projects.txt`, `skills.json` with proper permissions
- 🎯 **Interactive Help**: Built-in help system with `/help` command
- 🌙 **Dark Terminal Theme**: Easy on the eyes with professional color scheme

## Available Commands

Type these commands in the terminal to navigate:

```bash
/home          # Welcome message
/experience    # Professional experience and roles
/projects      # Portfolio projects and achievements
/skills        # Technical skills and technologies
/contact       # Contact information (email, LinkedIn, GitHub)
/help          # Display help message
/clear         # Clear terminal output
ls / dir       # List files in directory
vim <file>     # Open file in read-only editor (resume.pdf, projects.txt, skills.json, secret.py)
cat <file>     # View file contents directly
python secret.py  # Easter egg with custom ASCII art
```

## Customization Guide

### 1. Update Your Information

Edit `src/App.js` in the `handleCommand` function:

- **Lines 31-34**: Update `/home` command output
- **Lines 35-47**: Update `/experience` command with your experience
- **Lines 48-64**: Update `/projects` command with your projects
- **Lines 65-73**: Update `/skills` command with your skills
- **Lines 74-79**: Update `/contact` command with your contact info

### 2. Update File Contents

Modify file content displayed by `vim` and `cat` commands (around lines 108-168):

```javascript
} else if (filename === 'resume.pdf') {
  newOutput.push('~ Your resume content here');
} else if (filename === 'projects.txt') {
  newOutput.push('Your projects list');
} else if (filename === 'skills.json') {
  newOutput.push('{ "your": "skills" }');
}
```

### 3. Customize Colors

Edit `src/App.css` to change the terminal colors:
- `#0c0c0c` - Background (Windows PowerShell dark)
- `#d4d4d4` - Main text color
- `#0078d4` - Accent/prompt color (Windows Blue)
- `#4ec9b0` - Section headers
- `#ce9178` - Info text

### 4. Update ASCII Art

Replace the `catArt` array in `src/App.js` (around lines 175-217) with your own braille or ASCII characters for the `python secret.py` easter egg.

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

### Quick Deploy Options

**Recommended:**
- **Vercel** (vercel.com): Best for React, 1-click deploy from GitHub
- **Cloudflare Pages** (pages.cloudflare.com): Fast global CDN, free tier

**Other Options:**
- **Netlify**: Similar to Vercel, easy git integration
- **GitHub Pages**: Free but requires additional configuration
- **AWS**: S3 + CloudFront for enterprise scaling

### Deploy to Vercel (Recommended)
1. Push code to GitHub: `git push origin master`
2. Go to vercel.com and import your GitHub repo
3. Click "Deploy" - done!

### Deploy to Cloudflare Pages
1. Push code to GitHub: `git push origin master`
2. Go to dash.cloudflare.com → Pages
3. Connect to Git and select your repository
4. Set build command to `npm run build`
5. Set output directory to `build`
6. Deploy!

## How to Use (For Visitors)

1. **Type commands** to navigate through the portfolio
2. **Use `/help`** to see all available commands
3. **Try `ls`** to see available files
4. **Use `vim` or `cat`** to read your files
5. **Type `python secret.py`** to find the easter egg!

## Technologies Used

- **React 18** - UI framework
- **CSS3** - Styling with animations
- **JavaScript ES6+** - Core functionality
- **Cascadia Code Font** - PowerShell aesthetic
- **Braille Unicode Characters** - ASCII art

## Project Structure

```
grace-terminal-portfolio/
├── public/
│   ├── index.html          # Main HTML file
│   ├── favicon.svg         # Custom logo
│   └── manifest.json
├── src/
│   ├── App.js              # Main component with terminal logic
│   ├── App.css             # Terminal styling
│   └── index.js
└── package.json
```

## License

This project is open source and available under the MIT License.

---

**Made with ❤️ by Grace McPadden**

🚀 **Live Demo**: Visit the deployed site to explore the interactive terminal portfolio!
