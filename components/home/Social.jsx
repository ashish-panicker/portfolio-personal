import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const socials = [
  { icon: <FaGithub />, link: '' },
  { icon: <FaLinkedin />, link: '' },
]

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.link} className={iconStyles}>
            {social.icon}
          </Link>
        )
      })}
    </div>
  )
}

export default Social
