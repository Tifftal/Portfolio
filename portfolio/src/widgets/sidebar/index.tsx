import './index.scss';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <a href='#about'>
                <span></span>
                About
            </a>
            <a href='#projects'>
                <span></span>
                Projects
            </a>
            <a href='#tech_stack'>
                <span></span>
                Tech Stack
            </a>
        </div>
    )
}

export default SideBar;