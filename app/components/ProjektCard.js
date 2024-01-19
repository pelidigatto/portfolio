import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import Image from "next/image";



const ProjektCard = (props) => { 

    var projectName = props.name;
    var projectScreenshot = props.screenshot;
    var projectToolsList = props.tools.split(',');
    var projectLink = props.link;
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
                    <h2>{projectName}</h2>
                    {
                        projectToolsList.map((number) =>
                            <span class="badge bg-secondary mx-2">{number}</span>
                        )
                    }
                </div>
                <div className="col-12 d-flex justify-content-end">
                    <a href={projectLink} target="_blank"><FontAwesomeIcon icon={faLink} /></a>
                </div>
            </div>

        </div>

    )
}


export default ProjektCard;