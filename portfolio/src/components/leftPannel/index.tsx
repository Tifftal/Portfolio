import Footer from '../../widgets/footer';
import SideBar from '../../widgets/sidebar';
import './index.scss';

const LeftPannel = () => {
    return (
        <div className='left-pannel'>
            <div>
                <h1 className='font-code-next-bold'>Talankina Varvara</h1>
                <h3>Junior frontend developer</h3>
                <h4>A third year computer science student at Bauman Moscow State Technical University</h4>
                <SideBar />
            </div>

            <Footer />
        </div>
    )
}

export default LeftPannel;