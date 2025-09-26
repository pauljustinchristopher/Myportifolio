# Paul Justin Christopher - Portfolio Website

A modern, sophisticated personal portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimalist UI with glassmorphism effects
- **Dark Mode Toggle**: Seamless switching between light and dark themes
- **Smooth Animations**: Spectacular animations powered by Framer Motion
- **Responsive Design**: Fully responsive across all devices
- **Interactive Components**: Hover effects, smooth scrolling, and micro-animations
- **Performance Optimized**: Fast loading times and optimized assets

## 🛠️ Tech Stack

- **Frontend**: React 18 + Vite
- **Styling**: Tailwind CSS with custom utilities
- **Animations**: Framer Motion
- **Build Tool**: Vite
- **Package Manager**: npm

## 📂 Project Structure

```
/src
 ├── components/
 │    ├── Navbar.jsx       # Navigation with dark mode toggle
 │    ├── Hero.jsx         # Landing page with profile
 │    ├── About.jsx        # About me section
 │    ├── Skills.jsx       # Skills with progress bars
 │    ├── Projects.jsx     # Project showcase cards
 │    ├── Contact.jsx      # Contact form and info
 │    └── Footer.jsx       # Footer with social links
 │
 ├── assets/
 │    └── paul.jpg         # Profile picture (placeholder)
 │
 ├── App.jsx               # Main app component
 └── index.css             # Tailwind base styles
```

## 🎨 Sections

### 1. **Hero Section**
- Animated profile picture with rotating border
- Name and title with gradient text effects
- Call-to-action buttons with hover animations
- Floating background elements

### 2. **About Me**
- Personal introduction with statistics cards
- Side-by-side layout with image
- Floating status indicators
- Glassmorphism card effects

### 3. **Skills**  
- Categorized skill display (Frontend, Backend, Tools)
- Animated progress bars with shine effects
- Icon-based skill representation
- Hover animations on skill cards

### 4. **Projects**
- Grid layout with hover effects
- Project cards with live demo and GitHub links
- Tech stack tags for each project
- Featured project highlighting

### 5. **Contact**
- Working contact form with validation
- Social media links
- Contact information cards
- Availability status indicator

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Add your profile image**
   - Replace `src/assets/paul.jpg.placeholder` with your actual profile image
   - Rename it to `paul.jpg`

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## 🎯 Customization

### Personal Information
Update the following files with your information:

1. **Components**: Update name, bio, and contact info in respective components
2. **Skills**: Modify skill categories and levels in `Skills.jsx`
3. **Projects**: Replace project data in `Projects.jsx`
4. **Social Links**: Update social media URLs in `Contact.jsx` and `Footer.jsx`

### Styling
- **Colors**: Modify color scheme in `tailwind.config.js`
- **Animations**: Customize animations in component files
- **Layout**: Adjust responsive breakpoints and spacing

### Content
- Replace placeholder project images with your actual project screenshots
- Update project descriptions, tech stacks, and links
- Modify the about section with your personal story

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ⚡ Performance Features

- **Lazy Loading**: Images load only when needed
- **Code Splitting**: Optimized bundle sizes
- **Smooth Scrolling**: Native CSS smooth scrolling
- **Optimized Assets**: Compressed images and minified code

## 🌙 Dark Mode

Automatic dark mode support with:
- System preference detection
- Manual toggle with smooth transitions
- Persistent theme selection
- Tailwind CSS dark mode classes

## 🎨 Animation Features

- **Page Load**: Staggered component animations
- **Scroll Animations**: Trigger animations on scroll
- **Hover Effects**: Interactive card and button animations
- **Loading States**: Smooth loading animations

## 📧 Contact Form

The contact form includes:
- Form validation
- Success/error states
- Loading animations
- Email integration ready (requires backend setup)

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Deploy the `dist/` folder to Netlify

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ by Paul Justin Christopher using React, Tailwind CSS, and Framer Motion.
