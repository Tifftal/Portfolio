import About from '../../widgets/about';
import Projects from '../../widgets/projects';
import './index.scss';

const RightPannel = () => {
    return (
        <div className='right-pannel'>
            <About />
            <Projects/>
        </div>
    )
}

export default RightPannel;