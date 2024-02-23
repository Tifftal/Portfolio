import Footer from '../../widgets/footer';
import SideBar from '../../widgets/sidebar';
import './index.scss';

const LeftPannel = () => {
    return (
        <div className='left-pannel'>
            <div>
                <h1 className='font-code-next-bold'>Таланкина Варвара</h1>
                <h3>Frontend разработчик</h3>
                <h4>Студентка 3го курса МГТУ им. Баумана</h4>
                <SideBar />
            </div>

            <Footer />
        </div>
    )
}

export default LeftPannel;