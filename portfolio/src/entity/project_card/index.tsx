import './index.scss';
import arrow from '../../assets/icons/icons8-вверх-вправо-96.png';
import link from '../../assets/icons/icons8-ссылка-100.png';

const Card = (props: any) => {
    return (
        <a href={props.project.link} className='card'>
            <div className='time'>
                <p>{props.project.time}</p>
            </div>
            <div className='info'>
                <h1>{props.project.name}<img src={arrow} /></h1>
                <h2>{props.project.job}</h2>
                <p>{props.project.info}</p>
                {
                    props.project.site !== null ?
                        <a href={props.project.site} className='link-to-site'><img src={link}/>{props.project.name}</a>
                        : null
                }
                <div className='stack'>
                    {
                        props.project.stack.map((item: any, index: number) => (
                            <div key={index}>{item}</div>
                        ))
                    }
                </div>
            </div>
        </a>
    )
}

export default Card;