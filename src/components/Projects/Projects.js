import uniqid from 'uniqid'
import { projects } from '../../portfolio'
import { projects2 } from '../../portfolio'
import { projects3 } from '../../portfolio'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  if (!projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>Data Science/ML projects</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>

      <h2 className='section__title'>Financial Analysis</h2>

      <div className='projects__grid'>
        {projects2.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>

 <h2 className='section__title'>Programming projects</h2>
      <div className='projects__grid'>
        {projects3.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>

  )
}

export default Projects
