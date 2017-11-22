const yo = require('yo-yo')

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

module.exports = projectsPage

