# Professional Developer Portfolio

This is a modern, responsive, and production-ready developer portfolio built with Next.js 14+, Tailwind CSS, and TypeScript. It is designed for aspiring Software Development Engineers (SDEs) and includes all essential sections required by recruiters.

## Features

- **Modern Tech Stack**: Next.js (App Router), React, TypeScript, Tailwind CSS.
- **Responsive Design**: Mobile-first approach ensuring great experience on all devices.
- **Dark/Light Mode**: Seamless theme switching with system preference support.
- **SEO Optimized**: Meta tags, Open Graph support, and semantic HTML.
- **Performance**: Static Site Generation (SSG) for lightning-fast loading.
- **Easy Customization**: All content is managed in `src/data/index.ts`.

## Project Structure

```bash
portfolio/
├── src/
│   ├── app/              # Next.js App Router pages and layouts
│   ├── components/       # Reusable UI components (Hero, Projects, etc.)
│   ├── data/             # Centralized content management (Edit this file!)
│   ├── lib/              # Utility functions
│   └── ...
├── public/               # Static assets (images, resume.pdf)
├── tailwind.config.ts    # Tailwind configuration
└── ...
```

## Getting Started

1.  **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```
2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Run locally**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization Guide

1.  **Update Content**: Open `src/data/index.ts` and update the `portfolioData` object with your personal details, education, skills, and projects.
2.  **Add Resume**: Place your resume file named `resume.pdf` in the `public/` folder.
3.  **Update Images**: Add project images or profile pictures to `public/` and update references in `src/data/index.ts`.

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com).

1.  Push your code to a GitHub repository.
2.  Log in to Vercel and click "Add New... > Project".
3.  Import your GitHub repository.
4.  Vercel will automatically detect the Next.js framework.
5.  Click **Deploy**.

Your portfolio will be live in minutes!

## SEO Configuration

Update the metadata in `src/app/layout.tsx` to reflect your personal SEO preferences (Title, Description, Open Graph Image).

---

Built with ❤️ using Next.js & Tailwind CSS.
