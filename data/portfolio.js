const header = {
  // the `wordmark` property is optional - it can be left empty or deleted
  // if so, it will be overwritten by your full name, or a default wordmark if the full name is invalid
  wordmark: '',
}

const about = {
  // each of these properties is optional - they can be left empty or deleted
  // the first element in the `names` array will be treated as your first name, and all the elements combined will be treated as your full name
  // each element in the `description` array will be treated as a separate paragraph
  names: ['Glebe', 'Zhivoglyadov'],
  greetingEmoji: '👋',
  role: 'Aspiring Software Engineer',
  // company: 'The University of Adelaide',
  description: [
    'Hi! I’m Glebe, a third-year student at the University of Adelaide, studying a bachelor of Mathematical and Computer Sciences with a major in Artificial Intelligence. I’m passionate about developing new and exciting software solutions and tackling challenging problems. My interests include cybersecurity and artificial intelligence, and I’m dedicated to honing in on and developing my skills as a coder.',
  ],
  resume: '/Glebe-Resume.pdf',
  social: {
    github: 'https://github.com/glebezh',
    linkedin: 'https://www.linkedin.com/in/glebe-zhivoglyadov/',
  },
}

const projects = [
  // projects can be added and removed
  // if the array is left empty, the "Projects" section won't render
  // each element in each `description` array will be treated as a separate paragraph
  {
    thumbnail: 'images/placeholder-image.jpeg',
    name: 'Bandle Game',
    description: [
      'Currently working on recreating the popular song guessing game, Bandle. Front-end is being built using TypeScript, React and Vite. Backend is being built using Python FastAPI. Track separation is being performed by the Demucs Music Source Separation AI Model.',
    ],
    stack: ['TypeScript', 'React', 'FastAPI', 'Demucs', 'Vite'],
    sourceCode: 'https://github.com/glebezh/Bandle-Game',
    livePreview: 'https://bandle-game.vercel.app/',
  },
  {
    thumbnail: 'images/WinDemo.mp4',
    name: 'AI-Powered Fitness Trainer',
    description: [
      'An AI-powered fitness trainer built using Streamlit, MediaPipe Pose Detection, and OpenCV. The application can track and analyze exercise form in real-time for various workouts and can also count reps and sets.',
    ],
    stack: ['Streamlit', 'OpenCV', 'MediaPipe', 'Python'],
    sourceCode: 'https://github.com/glebezh/AI-Powered-Fitness-Trainer',
    livePreview: 'https://github.com/glebezh/AI-Powered-Fitness-Trainer',
  },
  {
    thumbnail: 'images/websitedemo2.gif',
    name: 'Volunteer Organizations Platform Web Application',
    description: [
      'A fully functional volunteer organizations web application that allow volunteers to promote themselves, find new members, and keep their existing members updated. Front-end was built using HTML, CSS, and JavaScript frameworks such as Vue.js, and AJAX. Back-end was developed using JavaScript, SQL, Node.js and Express.JS.',
    ],
    stack: ['JavaScript', 'HTML', 'CSS', 'AJAX', 'Vue.JS', 'SQL', 'Node.JS'],
    sourceCode: 'https://github.com/GautamDasUNIAD/WDCproject',
    livePreview: 'https://github.com/GautamDasUNIAD/WDCproject',
  },
  {
    thumbnail: 'images/shopdemo.gif',
    name: 'Store Management Simulator',
    description: [
      'A terminal-based application for managing supermarket operations using C++ and Object Oriented Programming (OOP) principles.',
    ],
    stack: ['C++', 'OOP', 'Terminal-Based'],
    sourceCode: 'https://github.com/glebezh/Store-Management-Simulator-OOP',
    livePreview: 'https://github.com/glebezh/Store-Management-Simulator-OOP',
  },
]

const skills = [
  // skills can be added or removed
  // if the array is left empty, the "Skills" section won't render
  'C++',
  'Python',
  'HTML',
  'CSS',
  'Git',
  'SQL',
  'Matlab',
]

const contact = {
  // the `email` property is optional - it can be left empty or deleted
  // if so, the "Contact" section won't render
  email: 'glebezhivoglyadov@gmail.com',
}

export { header, about, projects, skills, contact }
