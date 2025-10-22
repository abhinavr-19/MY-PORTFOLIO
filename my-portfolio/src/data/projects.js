// src/data/projects.js

// This is where you'll manage all your project data.
// Add a new object to this array for each new project.

export const projects = [
  {
    slug: 'image-to-webp-converter',
    title: 'Image to WebP Converter',
    shortDescription: 'A sleek, client-side web application for converting JPG, PNG, and JPEG images to the modern, efficient WebP format.',
    longDescription: 'This project was built to solve a common problem for web developers: the need for optimized images. The application uses only client-side JavaScript, meaning no images are uploaded to a server, ensuring user privacy and speed. It leverages the browser\'s built-in capabilities to perform the conversion and allows users to download the resulting .webp file directly.',
    image: '/images/project-1.webp',
    tags: ['HTML', 'CSS', 'JavaScript', 'Web APIs'],
    liveLink: 'https://webp-converter-xi.vercel.app/', // Replace with your live link
    codeLink: 'https://github.com/abhinavr-19/webp-converter', // Replace with your code link
  },
  {
    slug: 'e-commerce-recommendation-engine',
    title: 'E-commerce Recommendation Engine',
    shortDescription: 'A machine learning model that provides personalized product recommendations based on user behavior and purchase history.',
    longDescription: 'Developed as a core feature for a mock e-commerce platform, this recommendation engine uses collaborative filtering algorithms to predict user preferences. The model was trained on a large dataset of user interactions and can suggest relevant products in real-time, aiming to increase user engagement and sales.',
    image: '/images/project-2.jpg',
    tags: ['Machine Learning', 'Python', 'React', 'Node.js', 'Pandas'],
    liveLink: '#', // Replace with your live link
    codeLink: '#', // Replace with your code link
  },
  {
    slug: 'portfolio-website-v1',
    title: 'Portfolio Website V1',
    shortDescription: 'My first personal portfolio website built with vanilla HTML, CSS, and JavaScript to showcase my early projects.',
    longDescription: 'This was one of my foundational projects, where I focused on mastering the fundamentals of web development. The goal was to create a clean, responsive, and performant single-page application from scratch without relying on any frameworks. It taught me invaluable lessons about CSS layouts, DOM manipulation, and web accessibility.',
    image: '/images/project-3.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: '#', // Replace with your live link
    codeLink: '#', // Replace with your code link
  },
  // Add your next project here!
];

