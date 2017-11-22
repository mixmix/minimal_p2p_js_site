const yo = require('yo-yo')
const layout = require('../layouts/main')

const aboutPage = (params) => {
  const content = yo`
    <section>
      <h1>About</h1>
      <div>
        my passions are ...
        my favourite search engine is <a href='https://duckduckgo.com'>duckduckgo</a>
      </div>
    </section>
  `

  return layout(content)
}

module.exports = aboutPage

