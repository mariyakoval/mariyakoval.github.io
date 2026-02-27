const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://mariyakoval.github.io/',
  title: 'MK.',
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
    name: 'Analysis of job-seeking factors among Ukrainian refugees in Europe',
    description:
      'Analysis of UNHCR microdata on Ukrainian refugees in 6 European countries using logistic regression and random forest models to predict employment and integration outcomes.',
    stack: ['R', 'Python', 'Shiny'],
    sourceCode: 'https://github.com/mariyakoval/ukrainian-migration',
    livePreview: 'https://rpubs.com/mkoval28/1337111',
    image: 'ukr.jpg',
  },
  {
    name: 'Analysis of Sustainability Indicators by Country using Machine Learning',
    description: 'GitHub Blog that uses visualizations, unsupervised learning algorithms, Shiny App dashboards and analysis of international policies to uncover changes in global sustainability levels since 1990.',
    stack: ['R', 'Clustering', 'Shiny'],
    sourceCode: 'https://github.com/mariyakoval',
    livePreview: 'https://acstat231-s25.github.io/blog-econ/',
    image: 'sustainability.jpg',
  },
  {
    name: 'Statistical Analysis of the Main Drivers of Online Articles Virality',
    description:
      'Analysis of article shareability using one-way ANOVA and Kruskal-Wallis tests on predictors related to textual features, visuals, day of posting, category, and sentiment.',
    stack: ['R', 'ANOVA'],
    sourceCode: 'https://github.com/mariyakoval',
    livePreview: 'https://rpubs.com/mkoval28/1311314',
    image: 'article.jpg',
  },

   {
    name: 'Analyzing the Drivers of Car Pricing using MLR',
    description:
      'Multiple Logistic Regression on factors influencing price formation in the automobile industry.',
    stack: ['R', 'MLR'],
    sourceCode: 'https://github.com/mariyakoval',
    livePreview: 'https://rpubs.com/mkoval28/1293333',
    image: 'cars.jpg',
  },

  {
    name: 'Macroeconomic Indicators Dashboard - Growth, Labor, and Education',
    description:
      'Dashboard using Shiny package to analyze how the economic implications of education influence various countries’ development, economic growth, human development, and labor market outcomes.',
    stack: ['R', 'Shiny'],
    sourceCode: 'https://github.com/mariyakoval',
    livePreview: 'https://mariia-koval.shinyapps.io/RaceforHumanCapital/',
    image: 'macro.jpg',
  },

  {
    name: 'Predictive Factors in Cats’ Urinary Obstruction',
    description:
      'Logistic regression on factors contributing to urinary obstruction recurrence in male cats.',
    stack: ['R', 'Logistic Regression'],
    sourceCode: 'https://github.com/mariyakoval',
    livePreview: 'https://rpubs.com/mkoval28/1293323',
    image: 'cats.jpg',
  },

  {
    name: 'Predictive Modeling of Consumer Demand in Online Retail',
    description:
      'An analysis of purchase likelihood on the retail website using logistic regression modeling.',
    stack: ['R', 'MLR'],
    sourceCode: 'https://github.com/mariyakoval',
    livePreview: 'https://mariyakoval.github.io/blog/retail/',
    image: 'retail.jpg',
  },
]

const projects2 = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Investment Portfolio Analysis',
    description:
      'Analysis of a mixed-risk investment portfolio designed to capture high-growth opportunities in technology, defense, and commodities while stabilizing returns with diversified equities and bonds.',
    stack: ['Excel', 'DCF', 'Financial Modeling'],
    livePreview: 'https://mariyakoval.github.io/blog/portfolio-analysis/',
    image: 'finance.webp',
  },
]

const projects3 = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Engage - E-Democracy Simulation Game',
    description:
      'The game is an interactive simulation of Citizens’ Assemblies, Participatory Budgeting, and E-Petitions platforms for civic education purposes.',
    stack: ['React', 'JavaScript', 'Vercel'],
    sourceCode: 'https://github.com/mariyakoval/engage',
    livePreview: 'https://engage-flax.vercel.app/',
    image: 'engage.png',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'R',
  'Python',
  'Excel',
  'SQL',
  'Stata',
  'Git',
  'Java',
  'JavaScript',
  'React.js',
  'Microsoft Office Suite'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'mariyakoval787@gmail.com',
}

export { header, about, projects, projects2, projects3, skills, contact }