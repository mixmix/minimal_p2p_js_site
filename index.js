const yo = require('yo-yo')
const sheetRouter = require('sheet-router')
const href = require('sheet-router/href')

const homePage = () => yo `
<div> 
  <nav>
    <a href='/'>Home</a>
    <a href='/projects'>Projects</a>
    <a href='/about'>About</a>
  </nav>
  <h1>Home</h1>
  <div>
    Welcome
  </div>
</div>
`

const projectsPage = (params) => yo `
<div> 
  <nav>
    <a href='/'>Home</a>
    <a href='/projects'>Projects</a>
    <a href='/about'>About</a>
  </nav>
  <h1>Projects</h1>
  <div>
    check out these sweet projects
  </div>
</div>
`

const aboutPage = (params) => yo `
<div> 
  <nav>
    <a href='/'>Home</a>
    <a href='/projects'>Projects</a>
    <a href='/about'>About</a>
  </nav>
  <h1>About</h1>
  <div>
    my passions are ...
    my favourite search engine is <a href='https://duckduckgo.com'>duckduckgo</a>
  </div>
</div>
`

const router = sheetRouter({ default: '/' }, [
  ['/', homePage],
  ['/projects', projectsPage],
  ['/about', aboutPage],
])

var app = document.getElementById('app')   // root node our app will be mounted at

function render (path) {
  const newView = router(path)  // renders the route that matches 'path'
  yo.update(app, newView)   // morphs 'app' to be that newView 
}

// Render the home page
render('/')

// Install click handler for all site anchors!
href(link => render(link.pathname))

