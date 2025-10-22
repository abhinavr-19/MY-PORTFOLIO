# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

Astro Portfolio Website for Abhinav R
This folder contains the files to build your personal portfolio website using the Astro framework.

🚀 Project Setup
Create a new Astro project:
If you haven't already, open your terminal and run this command to create a new Astro project.

# npm
npm create astro@latest my-portfolio

# yarn
yarn create astro my-portfolio

# pnpm
pnpm create astro my-portfolio

During the setup, you can choose "Empty" for the template and "Yes" to install dependencies.

Navigate into your project:

cd my-portfolio

Copy the files:

Create the necessary folders: src/layouts, src/components, src/styles.

Place the files I've provided into the correct folders as indicated by their filepaths (e.g., Layout.astro goes into src/layouts/).

You will also need to create a public/images folder and place your profile picture there. Make sure to name it profile.jpg or update the path in the index.astro file.

Run the development server:

npm run dev

File Structure
Here's how the files should be organized in your src directory:

my-portfolio/
├── public/
│   └── images/
│       └── profile.jpg  <-- Add your profile photo here
├── src/
│   ├── components/
│   │   ├── Footer.astro
│   │   └── Header.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── contact.astro
│   │   ├── index.astro
│   │   ├── portfolio.astro
│   │   └── projects.astro
│   └── styles/
│       └── global.css
└── package.json

Good luck with your new website!

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
