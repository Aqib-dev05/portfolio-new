# Portfolio Website

A modern, responsive portfolio website built with React and Vite, showcasing projects, skills, experience, and education.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Theme**: Theme support (currently configured for dark theme)
- **Project Showcase**: Display projects with direct links to source code and live demos
- **Skills Section**: Highlight technical skills with visual cards
- **Experience Timeline**: Showcase work experience and projects
- **Education Section**: Display educational background
- **Contact Form**: Integrated Formspree contact form for easy communication
- **Smooth Animations**: Enhanced user experience with smooth scrolling and animations

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Styled Components** - CSS-in-JS styling
- **Material-UI** - Component library
- **React Router** - Routing
- **Formspree** - Contact form handling
- **Typewriter Effect** - Animated text effects
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd "New PF"
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Project

### Development Mode

Start the development server:
```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173)

### Production Build

Build for production:
```bash
npm run build
```

The production build will be in the `dist` folder.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── About/          # About section
│   ├── Cards/          # Reusable card components
│   ├── Contact/        # Contact form component
│   ├── Education/      # Education section
│   ├── Experience/     # Experience section
│   ├── Footer/         # Footer component
│   ├── HeroSection/    # Hero/landing section
│   ├── Navbar/         # Navigation bar
│   ├── Projects/       # Projects showcase
│   └── Skills/         # Skills section
├── data/               # Data constants
│   └── constant.js     # Project data, bio, skills, etc.
├── images/             # Image assets
├── themes/             # Theme configuration
├── utils/              # Utility functions
├── App.jsx             # Main App component
└── main.jsx            # Entry point
```

## ⚙️ Configuration

### Formspree Setup

The contact form uses Formspree. To configure:

1. Sign up at [Formspree](https://formspree.io/)
2. Create a new form
3. Update the form ID in `src/components/Contact/index.jsx`:
```javascript
const [state, handleSubmit] = useForm("your-form-id");
```

### Firebase Deployment

The project includes Firebase configuration. Update `firebase.json` if needed:

```json
{
  "hosting": {
    "public": "dist",
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
  }
}
```

## 🚢 Deployment

### Vercel

The project includes `vercel.json` for Vercel deployment. Simply connect your repository to Vercel.

### Firebase Hosting

1. Install Firebase CLI:
```bash
npm install -g firebase-tools
```

2. Login and initialize:
```bash
firebase login
firebase init
```

3. Deploy:
```bash
npm run build
firebase deploy
```

### Other Platforms

Build the project and deploy the `dist` folder to any static hosting service:
- Netlify
- GitHub Pages
- AWS S3
- Any static hosting provider

## 📝 Customization

### Update Personal Information

Edit `src/data/constant.js` to update:
- Bio information (name, description, social links)
- Skills
- Projects
- Experience
- Education

### Styling

The project uses styled-components with theme support. Modify themes in:
- `src/utils/theme.js` - Theme colors and styles
- `src/themes/daefault.js` - Default theme configuration

### Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/App.jsx`
3. Update navigation links if needed

## 🐛 Troubleshooting

### Build Errors

If you encounter build errors:
1. Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

2. Check Node.js version (recommended: Node 16+)

### Port Already in Use

If port 5173 is in use, Vite will automatically use the next available port.

## 📄 License

This project is private and personal.

## 👤 Author

**Aqib Ali**
- GitHub: [@Aqib-dev05](https://github.com/Aqib-dev05)

---

Built with ❤️ using React and Vite
