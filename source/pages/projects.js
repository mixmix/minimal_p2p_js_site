const yo = require('yo-yo')
const layout = require('../layouts/main')

const data = require('../data')

const projectsPage = (params) => {
  const content = yo`
    <section>
      <h1>Projects</h1>
      <div>
        check out these sweet projects:
        <ul>
          ${data.map(project => {
            const name = project.name

            return yo`
              <li>
                <a href='/projects/${project.name}'>
                  ${project.name}
                </a>
              </li>
            `
          })}
        </ul>
      </div>
    </section>
  `

  return layout(content)
}


module.exports = projectsPage

