const sheetRouter = require('sheet-router')

const homePage = require('./pages/home')
const projectsPage = require('./pages/projects')
const projectShowPage = require('./pages/projectShow')
const aboutPage = require('./pages/about')

const router = sheetRouter({ default: '/' }, [
  ['/', homePage],
  ['/projects', projectsPage, [
    ['/:name', projectShowPage]
  ]],
  ['/about', aboutPage],
])

module.exports = router

