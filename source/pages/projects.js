const yo = require('yo-yo')
const layout = require('../layouts/main')

const projectsPage = (params) => {
  const content = yo`
    <section>
      <h1>Projects</h1>
      <div>
        check out these sweet projects
      </div>
    </section>
  `

  return layout(content)
}

module.exports = projectsPage

