import Card from '../../entity/project_card';
import './index.scss';
import data from '../../const/projects.json';

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            {
                data.projects.map((project: any, index: number) => (
                    <Card key={index} project={project}/>
                ))
            }
        </div>
    )
}

export default Projects;