import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume, social, picture } = about

  // choose picture from about or default
  const profileImage =
    picture && picture.length
      ? picture.startsWith('http')
        ? picture
        : `${process.env.PUBLIC_URL}/images/${picture}`
      : `${process.env.PUBLIC_URL}/images/photo.png`

  // build resume link; if string is relative use PUBLIC_URL prefix
  const resumeLink =
    resume && (resume.startsWith('http') || resume.startsWith('/'))
      ? resume
      : resume
      ? `${process.env.PUBLIC_URL}/${resume}`
      : ''

  return (
    <div className='about center'>
      <div className='about__header'>
        <div className='about__intro'>
          {name && (
            <h1>
              Hi, I am <span className='about__name'>{name}.</span>
            </h1>
          )}

          {role && <h2 className='about__role'>{role}.</h2>}
        </div>

        <img
          src={profileImage}
          alt={name}
          className='about__picture'
        />
      </div>

      {description && (
        <p className='about__desc'>{description}</p>
      )}

      <div className='about__contact center'>
        {resume && (
          <a href={resumeLink} target='_blank' rel='noopener noreferrer'>
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}

            {social.email && (
              <a
                href={social.email}
                aria-label='email'
                className='link link--icon'
              >
                <EmailIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About