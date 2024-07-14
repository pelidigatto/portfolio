import ProjektCard from "../components/ProjektCard"

export default function Projekte(){
    return(
        <div className="homeSection" id="projects">
            <div className="row w-100 my-5 justify-content-center">
                <div className="col-12 text-center">
                    <h1 className="fw-light mt-5">Projekte</h1>
                    
                </div>
                <div className="col-12 col-sm-6 my-3">
                    <ProjektCard 
                        name="go4launch.de"
                        screenshot="/screenshot_go4lauch.png"
                        tools="JavaScript,PHP,Bootstrap,API"
                        link="https://www.go4launch.de/"
                        description=""
                    />
                </div>
               {/*  <div className="col-12 col-sm-6 my-3">
                    <ProjektCard 
                        name="vicesix.de"
                        screenshot="/screenshot_viceSix.png"
                        tools="Wordpress"
                        link="https://www.vicesix.de/"
                        description="Vicesix.de ist ein Wordpress-Blog über meine Lieblingsspielereihe Grand Theft Auto, mit Fokus auf das neueste Spiel GTA 6. Das Projekt dient nicht nur dazu, Erfahrungen in Wordpress und Content-Management-Systemen im Allgemeinen zu sammeln, sondern auch um meine Leidenschaft für dieses Spiel mit anderen zu teilen."
                    />
                </div> */}
                <div className="col-12 col-sm-6 my-3">
                    <ProjektCard 
                        name="thoenelt.dev"
                        screenshot="/screenshot_thoenelt_dev.png"
                        tools="JavaScript, Next.Js, Bootstrap"
                        link="https://www.thoenelt.dev/"
                        description=""
                    />
                </div>
            </div>
        </div>
    )
}