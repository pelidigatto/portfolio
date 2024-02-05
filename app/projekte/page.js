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
                        description="Go4Launch.de ist eine umfassende Datenbank zum Thema Raumfahrt. Sie listet alle Raketenstarts der Vergangenheit und Zukunft auf und bietet Informationen zu Raumfahrtunternehmen, Weltraumbahnhöfen und verschiedenen Raketentypen. Das Projekt wird ständig weiterentwickelt."
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
<<<<<<< HEAD
                </div> */}
=======
                </div>
>>>>>>> a6995aaf77389c4117a0b9ca4f90e877fae578d8
                <div className="col-12 col-sm-6 my-3">
                    <ProjektCard 
                        name="thoenelt.dev"
                        screenshot="/screenshot_thoenelt_dev.png"
                        tools="JavaScript, Next.Js, Bootstrap"
                        link="https://www.thoenelt.dev/"
                        description="Mein Portfolio welche zum einen dazu erstellt habe mich kurz vorzustellen, aber auch erste Erfahrungen in Next.Js zu sammeln."
                    />
                </div>
            </div>
        </div>
    )
}