import './index.scss';
import gmail from '../../assets/icons/icons8-gmail-500.png';
import github from '../../assets/icons/icons8-github-500.png';
import mail from '../../assets/icons/icons8-почта-96.png';

const Footer = () => {
    return (
        <div className='footer'>
            <a><img src={gmail} /></a>
            <a><img src={mail} /></a>
            <a><img src={github} /></a>
        </div>
    )
}

export default Footer;