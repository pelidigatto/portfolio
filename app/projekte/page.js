import ProjektCard from "../components/ProjektCard"

export default function Projekte(){
    return(
        <div className="homeSection">
            <div className="row w-100 my-5">
                <div className="col-12 text-center">
                    <h1>Projekte</h1>
                    
                </div>
                <div className="col-6">
                    <ProjektCard 
                        name="go4launch.de"
                        screenshot="/screenshot_go4lauch.png"
                        tools="JavaScript,PHP,Bootstrap,API"
                        link="https://www.go4launch.de/"
                    />
                </div>
                <div className="col-6">
                    <ProjektCard 
                        name="vicesix.de"
                        screenshot="/screenshot_viceSix.png"
                        tools="Wordpress"
                        link="https://www.vicesix.de/"
                    />
                </div>
            </div>
        </div>
    )
}