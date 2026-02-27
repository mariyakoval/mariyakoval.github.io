const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://mariyakoval.github.io/',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Mariia Koval',
  role: 'B.A. Economics & Statistics, Amherst College',
  picture: 'photo.png',

  description:
    'Mariia Koval thrives in solving challenges using data science, applied econometrics, and quantitative research. She has worked on projects involving machine learning, regression analysis, and data visualization, using real-world datasets to study economic, social, and market outcomes. Mariia enjoys combining technical analysis with economic intuition, and she is currently developing projects focused on market risk, macroeconomic indicators, and financial applications of statistical modeling.',
  resume: 'assets/Koval_Mariia_Resume.pdf',
  social: {
    linkedin: 'https://www.linkedin.com/in/mariya-koval/',
    github: 'https://github.com/mariyakoval/portfolio',
    email: 'mailto:mariyakoval787@gmail.com'
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Project 1',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'cleanfolio.png',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }