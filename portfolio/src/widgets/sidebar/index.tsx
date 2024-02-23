import './index.scss';

const SideBar = () => {
    return (
        <div className='sidebar'>
            <a href='#about'>
                <span></span>
                Обо мне
            </a>
            <a href='#projects'>
                <span></span>
                Проекты
            </a>
            <a href='#tech_stack'>
                <span></span>
                Стек технологий
            </a>
        </div>
    )
}

export default SideBar;