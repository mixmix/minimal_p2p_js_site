const yo = require('yo-yo')
const layout = require('../layouts/main')

const homePage = (params) => {
  const content = yo`
    <section>
      <h1>Home</h1>
      <div>
        Welcome
      </div>
    </section>
  `

  return layout(content)
}

module.exports = homePage

