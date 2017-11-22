const yo = require('yo-yo')

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

module.exports = aboutPage

