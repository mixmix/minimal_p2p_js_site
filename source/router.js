const sheetRouter = require('sheet-router')

const homePage = require('./pages/home')
const projectsPage = require('./pages/projects')
const aboutPage = require('./pages/about')

const router = sheetRouter({ default: '/' }, [
  ['/', homePage],
  ['/projects', projectsPage],
  ['/about', aboutPage],
])

module.exports = router

