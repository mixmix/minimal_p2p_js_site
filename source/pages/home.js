const yo = require('yo-yo')

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

module.exports = homePage

