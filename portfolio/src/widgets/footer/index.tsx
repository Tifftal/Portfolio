import './index.scss';
import gmail from '../../assets/icons/icons8-gmail-500.png';
import github from '../../assets/icons/icons8-github-500.png';
import mail from '../../assets/icons/icons8-почта-96.png';

const Footer = () => {
    return (
        <div className='footer'>
            <p><img src={gmail} /> talankinavarvara7@gmail.com</p>
            <p><img src={mail} /> Tifftal@yandex.ru</p>
            <a href='https://github.com/Tifftal'><img src={github} /> Tifftal</a>
        </div>
    )
}

export default Footer;