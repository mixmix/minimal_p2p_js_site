const yo = require('yo-yo')

const mainLayout = (content) => yo`
  <div> 
    <nav>
      <a href='/'>Home</a>
      <a href='/projects'>Projects</a>
      <a href='/about'>About</a>
    </nav>
    ${content}
  </div>
`

module.exports = mainLayout

