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
    slug: 'review-refiner',
    title: 'Review Refiner',
    shortDescription: 'An AI-powered tool that instantly corrects grammar, fixes spelling, and improves the clarity of your reviews in a single click.',
    longDescription: 'Review Refiner is a smart web application designed to help you write better, more effective reviews. Simply paste your draft, and our AI will instantly correct any grammar mistakes, fix spelling errors, and rephrase sentences for improved clarity and tone. Whether you\'re writing a product review, a service testimonial, or professional feedback, Review Refiner ensures your message is clear, professional, and impactful—all with a single click.',
    image: '/images/project-2.webp',
    tags: ['Next.js', 'React', 'TypeScript', 'CSS'],
    liveLink: 'https://studio--studio-4339710488-511c4.us-central1.hosted.app/', // Replace with your live link
    codeLink: 'https://github.com/abhinavr-19/Review-Refiner', // Replace with your code link
  },
  {
    slug: 'ico-converter',
    title: 'ICO Converter',
    shortDescription: 'A simple web application for converting images to the ICO format.',
    longDescription: 'The ICO Converter is a straightforward tool designed for web developers and designers who need to create favicon.ico files from existing images. The application supports various input formats and provides a seamless user experience, allowing users to upload an image and download the converted ICO file instantly.',
    image: '/images/project-3.jpg',
    tags: ['HTML', 'CSS', 'JavaScript'],
    liveLink: 'https://ico-converter.vercel.app/', // Replace with your live link
    codeLink: 'https://github.com/abhinavr-19/ico-converter', // Replace with your code link
  },
  // Add your next project here!
];

