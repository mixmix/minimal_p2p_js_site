const yo = require('yo-yo')
const href = require('sheet-router/href')

const router = require('./source/router')

var app = document.getElementById('app')   // root node our app will be mounted at

function render (path) {
  const newView = router(path)  // renders the route that matches 'path'
  yo.update(app, newView)   // morphs 'app' to be that newView 
}

// Render the home page
render('/')

// Install click handler for all site anchors!
href(link => render(link.pathname))

