import About from '../../widgets/about';
import Projects from '../../widgets/projects';
import './index.scss';
import scroll from '../../assets/icons/mouse-cursor.png'
import TechStack from '../../widgets/tech_stack';

const RightPannel = () => {
    return (
        <div className='right-pannel'>
            <div className='scroll'><img className="scroll-icon" src={scroll} /></div>
            <About />
            <Projects />
            <TechStack />
        </div>
    )
}

export default RightPannel;