import { start } from 'repl'
import type { Site, Page } from './types'
import { GitBranch } from 'lucide-react'

export const loaderAnimation = [
  '.loader',
  { opacity: [1, 0], pointerEvents: 'none' },
  { easing: 'ease-out' },
]

export const LINKS = {
  github: 'https://github.com/santoshkanumuri',
  linkedin: 'https://www.linkedin.com/in/santoshkanumuri/',
  mail: 'mailto:pavan.kanumuri@hotmail.com',
}

// Global
export const SITE: Site = {
  TITLE: 'Santosh Kanumuri',
  DESCRIPTION:
    'Portfolio Website of Santosh Kanumuri. Software Engineer, Data Engineer, and Full Stack Developer.',
  AUTHOR: 'Santosh Kanumuri',
}

// Work Page
export const WORK: Page = {
  TITLE: 'Work',
  DESCRIPTION: 'Places I have worked.',
}

// Blog Page
export const BLOG: Page = {
  TITLE: 'Blog',
  DESCRIPTION: 'Writing on topics I am passionate about.',
}

// Projects Page
export const PROJECTS: Page = {
  TITLE: 'Projects',
  DESCRIPTION: 'Recent projects I have worked on.',
}

// Search Page
export const SEARCH: Page = {
  TITLE: 'Search',
  DESCRIPTION: 'Search all posts and projects by keyword.',
}

// Study Page
export const CERTS = [
  {
    url: 'https://images.credly.com/size/680x680/images/ff52a038-c61e-4088-b434-2e98ef546896/image.png',
    alt: 'MongoDB Certified Developer Associate',
    link: 'https://www.credly.com/badges/6e513dad-e9f0-4ed9-a6ec-4d82a243d439/',
    name: 'MongoDB ',
    date: '2024',
  },
  {
    url: 'https://images.credly.com/size/680x680/images/2f7b0627-48a0-4894-8d46-3245bdfe0463/image.png',
    institution: 'AWS Academy Cloud Architecting',
    link: 'https://www.credly.com/badges/6e513dad-e9f0-4ed9-a6ec-4d82a243d439/linked_in_profile',
    name: 'AWS ',
    date: '2022',
  },
]

export const STUDIES = [
  {
    college: 'Edward E. Whitacre Jr. College of Engineering - Texas Tech University',
    degree: 'MS',
    branch: 'Computer Science',
    link: 'https://www.ttu.edu/',
    start: '2023',
    end: '2025',
  },
]

export const EXPERIENCE = [
  {
    company: 'Texas Tech University',
    location: 'Lubbock, Texas',
    position: 'Graduate Assistant',
    start: '2023',
    link: 'https://ttu.edu/',
    end: 'Current',
    tasks: [
      'Enhanced data retrieval efficiency using Python for unstructured data extraction and analysis. ',
      'Optimized data pipelines for patent and investor datasets with Pandas and MongoDB. ',
      'Integrated Twitter & YouTube APIs and built Streamlit-based backend services for data visualization. ',
    ],
    stack: 'Python, Pandas, NumPy, Scikit-Learn, MongoDB, Pinecone, Selenium, Matplotlib, BeautifulSoup.',
  },
  {
    company: 'PricewaterhouseCoopers',
    location: 'Hyderabad, India',
    position: 'Developer(Full Stack)',
    link: 'https://pwc.com/',
    start: '2022',
    end: '2023',
    tasks: [
      'Developed a CitiBank internal target tracker, improving system efficiency and user engagement. ',
      'Built a centralized platform for task tracking, assignment details, and client feedback. ',
      'Enhanced workflow automation and communication in project management. ',
    ],
    stack: 'Python, Django, JavaScript, ReactJS, HTML, CSS, Bootstrap, REST API, Amazon Aurora, Git, Postman, Excel, Docker.',
  },
  {
    company: 'Systema Automation. Inc',
    link: 'https://www.systema.com//',
    location: 'Bangalore, India',
    position: 'Web Developer Intern',
    start: '2021',
    end: '2022',
    tasks: [
      'Developed a Django-based web app, improving metrics visualization and user engagement. ',
      'Integrated real-time API data, increasing data accuracy by 25%. ',
      'Optimized backend services for data retrieval and analysis. ',
      'Led a team of three developers, delivering projects on schedule.',
    ],
    stack: 'Python, Django, JavaScript, APIs, HTML, CSS, Responsive Design.',
  },
  {
    company: 'Veltech University',
    location: 'Chennai, India',
    position: 'Student Volunteer(Web Developer)',
    start: '2021',
    link: 'https://veltech.edu.in/',
    end: '2021',
    tasks: [
      'Contributed to the development of the Computer Science Department website as part of a team. ',
      'Implemented a dynamic, user-friendly interface using HTML, CSS, and JavaScript. ',
      'Applied responsive design principles and interactive features to improve user experience. ',
    ],
    stack: 'HTML, CSS, JavaScript, Bootstrap.',
  },
]
