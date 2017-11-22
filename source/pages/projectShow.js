const yo = require('yo-yo')
const layout = require('../layouts/main')

const data = require('../data')

const projectShow = (params) => {
  const name = params.name
  const project = data.find(project => project.name === name)

  if (!project) return

  const content = yo`
    <section>
      <h1>${project.name}</h1>
      <p>${project.description}</p>
      <img src=${project.image} />
    </section>
  `
  return layout(content)
}

module.exports = projectShow

