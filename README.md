# Engineering Portfolio Website

A professional, modern portfolio website designed specifically for Mechanical and Aeronautical Engineers. This portfolio showcases technical skills, projects, education, and provides an effective platform to attract recruiters and potential employers.

## 🚀 Features

### Designed for Engineering Professionals

- **Hero Section**: Eye-catching introduction with professional photo placeholder
- **About Section**: Comprehensive overview of your background and expertise
- **Skills Section**: Interactive display of technical software proficiency and engineering competencies
- **Projects Section**: Filterable project showcase with detailed descriptions and results
- **Education Section**: Timeline of academic achievements, training, and awards
- **Contact Section**: Professional contact form with social media integration
- **Responsive Design**: Fully optimized for desktop, tablet, and mobile devices

### Technical Highlights

- Built with **React** for optimal performance
- Modern, clean UI with professional color scheme
- Smooth scrolling and animations
- Mobile-responsive navigation
- Custom scrollbar styling
- SEO-optimized structure

## 📋 Customization Guide

### 1. Personal Information

#### Update Header & Hero Section

Edit `src/components/Header.js` and `src/components/Hero.js`:

- Replace "Your Name" with your actual name
- Update job title and tagline
- Modify the hero description to match your background

#### Update Contact Information

Edit `src/components/Contact.js` and `src/components/Footer.js`:

- Replace email: `your.email@example.com`
- Replace phone: `+1 (XXX) XXX-XXXX`
- Replace location: `City, State, Country`
- Update LinkedIn profile URL
- Update GitHub profile URL
- Update other social media links

### 2. Add Your Professional Photo

**Location**: `public/images/`

1. Add your professional headshot to `public/images/profile.jpg`
2. In `src/components/Hero.js`, uncomment the image section:

```javascript
// Uncomment this:
<img src="/images/profile.jpg" alt="Your Name" />
```

**Photo Tips**:

- Use a high-quality, professional photo (minimum 500x500px)
- Professional attire recommended
- Plain or minimal background
- Good lighting
- Square aspect ratio works best

### 3. Add Project Images

**Location**: `public/images/`

Add your project images with descriptive names:

- `project1.jpg` - Aircraft wing project
- `project2.jpg` - UAV propulsion system
- `project3.jpg` - Heat exchanger
- etc.

In `src/components/Projects.js`, uncomment the image display:

```javascript
<img src={project.image} alt={project.title} />
```

**Project Image Tips**:

- Use technical diagrams, CAD renderings, or project photos
- Minimum resolution: 800x600px
- Clear, professional imagery
- Consider adding your company logo (with permission)

### 4. Customize Projects

Edit `src/components/Projects.js`:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Title",
    category: "aeronautical", // or 'mechanical'
    description: "Detailed project description...",
    technologies: ["CATIA", "ANSYS", "etc."],
    image: "/images/your-project.jpg",
    results: [
      "Quantifiable result 1",
      "Quantifiable result 2",
      "Impact metric",
    ],
  },
  // Add more projects...
];
```

**Tips for Impressive Projects**:

- Use specific, quantifiable results (percentages, dollar amounts)
- Focus on impact and business value
- Include technical tools and methodologies
- Mention any patents, publications, or awards
- Show problem-solving abilities

### 5. Update Skills

Edit `src/components/Skills.js`:

- **Technical Software Skills**: Update the skill levels (0-100) based on your proficiency
- **Engineering Competencies**: Adjust the core skills and levels
- **Software Tools Cloud**: Add or remove tools you use
- **Certifications**: Replace with your actual certifications

```javascript
const technicalSkills = [
  { name: "Your Software", level: 90, icon: "🔧" },
  // Update with your tools and proficiency levels
];
```

### 6. Update Education

Edit `src/components/Education.js`:

- Replace university names and degrees
- Update graduation years and GPAs
- Add your thesis title or capstone project
- Update professional training and workshops
- Add your actual awards and recognition
- Add publications if applicable

### 7. Update About Section

Edit `src/components/About.js`:

- Replace placeholder text with your actual experience
- Update years of experience
- Modify areas of expertise to match your skills
- Update key achievements with real accomplishments
- Personalize your professional philosophy

### 8. Add Resume Download

**Location**: `public/files/`

1. Create a `files` folder in `public/`
2. Add your resume PDF to `public/files/resume.pdf`
3. In `src/components/Hero.js`, uncomment the resume button:

```javascript
<a href="/files/resume.pdf" className="btn btn-outline" download>
  Download Resume
</a>
```

### 9. Set Up Contact Form

The contact form currently has a simulated submission. To make it functional:

**Option 1: EmailJS (Recommended for beginners)**

1. Sign up at [EmailJS.com](https://www.emailjs.com/)
2. Install: `npm install @emailjs/browser`
3. Follow EmailJS React integration guide

**Option 2: Formspree**

1. Sign up at [Formspree.io](https://formspree.io/)
2. Update form action in `Contact.js`

**Option 3: Custom Backend**

- Create your own API endpoint
- Update the `handleSubmit` function in `src/components/Contact.js`

### 10. Color Scheme Customization

The default color scheme uses professional blues. To customize:

**Primary Colors** (used throughout):

- Primary Blue: `#0066cc`
- Dark Blue: `#003399`

Search and replace these hex codes across all CSS files to change the theme.

**Recommended Color Schemes**:

- **Aerospace Blue**: `#0066cc` / `#003399` (default)
- **Engineering Green**: `#2ecc71` / `#27ae60`
- **Industrial Orange**: `#e67e22` / `#d35400`
- **Tech Purple**: `#9b59b6` / `#8e44ad`

## 🛠️ Getting Started

### Start the development server:

```bash
npm start
```

The site will open at `http://localhost:3000`

### Build for production:

```bash
npm run build
```

## 📁 Folder Structure

```
portfolio/
├── public/
│   ├── images/          # Add your photos here
│   │   ├── profile.jpg  # Your professional photo
│   │   ├── project1.jpg # Project images
│   │   └── ...
│   ├── files/           # Add your resume here
│   │   └── resume.pdf
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/      # All React components
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Skills.js
│   │   ├── Projects.js
│   │   ├── Education.js
│   │   ├── Contact.js
│   │   └── Footer.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## 🎨 What Makes This Portfolio Effective for Engineers?

### 1. **Technical Credibility**

- Prominent display of CAD software and engineering tools
- Detailed project descriptions with technical depth
- Quantifiable results and metrics
- Professional certifications showcase

### 2. **Visual Impact**

- Clean, modern design that looks professional
- Strategic use of color and whitespace
- Smooth animations that aren't distracting
- Mobile-responsive for viewing on any device

### 3. **Recruiter-Friendly**

- Easy navigation with smooth scrolling
- Clear contact information
- Downloadable resume option
- Quick access to key information
- Professional presentation

### 4. **Project Showcase**

- Filterable by engineering discipline
- Emphasis on results and impact
- Technical tools and methodologies highlighted
- Visual representations with image placeholders

### 5. **Complete Picture**

- Education and training history
- Professional certifications
- Awards and recognition
- Publications (if applicable)
- Social proof through multiple channels

## 📱 Deployment Options

### Netlify (Recommended)

1. Push your code to GitHub
2. Connect repository to Netlify
3. Deploy automatically

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts

### GitHub Pages

1. Install: `npm install gh-pages --save-dev`
2. Add to package.json:

```json
"homepage": "https://yourusername.github.io/portfolio",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Run: `npm run deploy`

## 🔧 Maintenance Tips

### Regular Updates

- Keep projects section current with recent work
- Update skills as you learn new tools
- Add new certifications and training
- Refresh professional photo periodically
- Update contact information if it changes

### Performance

- Optimize images before uploading (use tools like TinyPNG)
- Keep file sizes reasonable (aim for <500KB per image)
- Test on multiple devices and browsers

### SEO

- Update meta descriptions in `public/index.html`
- Use descriptive alt text for images
- Keep content fresh and relevant

## 🎯 Pro Tips for Standing Out

1. **Quantify Everything**: Use specific numbers, percentages, and dollar amounts
2. **Show Real Work**: Include actual project images, not stock photos
3. **Be Specific**: "Reduced weight by 15%" beats "Improved design"
4. **Highlight Impact**: Focus on business value and real-world applications
5. **Keep It Current**: Update regularly with recent projects and skills
6. **Professional Photos**: Invest in quality images of yourself and your work
7. **Proofread**: Check for typos and technical accuracy
8. **Get Feedback**: Have colleagues review before publishing

## 🆘 Common Issues

**Images not displaying?**

- Ensure files are in `public/images/` folder
- Check file names match exactly (case-sensitive)
- Use forward slashes in paths: `/images/photo.jpg`

**Styles not applying?**

- Check for typos in className attributes
- Ensure CSS files are imported correctly
- Clear browser cache

**Form not working?**

- Remember to implement actual form submission
- Check EmailJS or Formspree integration
- Test with console.log to debug

---

**Good luck with your job search! Remember: A great portfolio is your 24/7 recruiter.**
