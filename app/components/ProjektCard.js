import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";



const ProjektCard = (props) => { 

    var projectName = props.name;
    var projectScreenshot = props.screenshot;
    var projectToolsList = props.tools.split(',');
    var projectLink = props.link;
    var projectDescription = props.description;
    return(
        <div className="codeArea">
            <div className="row">
                <div className="col-12 projectCardImage">   
                    <Image
                            src={projectScreenshot}
                            width={600}
                            height={400}
                            alt={"Screenshot von "+projectName}  
                            className="img-fluid"  
                    />
                </div>
                <div className="col-12 text-center mt-3">
                    <h3 className='fw-lighter'>{projectName}</h3>
                    {
                        projectToolsList.map((project) =>
                            <span className="badge bg-secondary mx-2">{project}</span>
                        )
                    }
                </div>
                <div className='d-flex justify-content-center '>
                    <div className="col-10 d-flex justify-content-center my-3 border-bottom projectCardDescription text-center p-3">
                        {projectDescription}
                    </div>
                </div>
                <div className="col-12 d-flex justify-content-end">
                    <a href={projectLink} target="_blank"><FontAwesomeIcon icon={faLink} /></a>
                </div>
            </div>

        </div>

    )
}


export default ProjektCard;