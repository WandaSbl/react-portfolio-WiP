import {Link, NavLink} from 'react-router-dom'
import './index.scss'
import '../../App.scss'
import LogoW from '../../assets/images/logo-w.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => (

    <div className = 'nav-bar'>
        <Link className = 'logo' to= '/'>
            <img src = {LogoW} alt="logo"/>
            <img className = 'sub-logo' src = {LogoSubtitle} alt="Wanda"/>
        </Link>
        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#2b2d42" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                <FontAwesomeIcon icon={faUser} color="#2b2d42"  />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className = "contact-link" to="/contact">
                <FontAwesomeIcon icon={faPaperPlane} color="#2b2d42"  />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.linkedin.com/in/wanda-sebille/'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://github.com/WandaSbl'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>

)

export default Sidebar