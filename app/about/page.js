import SkillBar from "../components/SkillBar"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faNodeJs, faReact,faLaravel, faBootstrap } from '@fortawesome/free-brands-svg-icons'

export default function About(){
    return(
        <div className="homeSection">
            <div className="row w-100 my-5">
                <div className="col-12 text-center">
                    <h1>Über mich</h1>
                </div>
                <div className="col-12 col-sm-5">
                        <div className='codeArea'> 
                            <p>
                                🚀 Herzlich willkommen auf meinem Portfolio! Ich bin Florian Thönelt, ein leidenschaftlicher Webentwickler mit einem Auge für Ästhetik und einem starken technischen Hintergrund. 
                                Mit meiner Erfahrung und Kreativität gestalte ich digitale Lösungen, die nicht nur funktional sind, sondern auch ein beeindruckendes Benutzererlebnis bieten.
                            </p>
                            <p>
                                💻 Meine Expertise umfasst Frontend- und Backend-Entwicklung, wobei ich modernste Technologien wie HTML5, CSS3, JavaScript und Frameworks wie React und Node.js einsetze. 
                                Durch meine Liebe zum Detail und meinem Streben nach Perfektion strebe ich danach, nicht nur Code zu schreiben, sondern echte Erlebnisse zu schaffen.
                            </p>
                            <p>
                                🎨 In meinen Projekten lege ich großen Wert auf responsives Design, um sicherzustellen, dass die Webseiten auf allen Geräten optimal funktionieren. 
                                Von der Konzeption bis zur Umsetzung bin ich stets bestrebt, die individuellen Bedürfnisse meiner Kunden zu verstehen und maßgeschneiderte Lösungen zu entwickeln.
                            </p>
                            <p>
                                🤝 Ich bin immer offen für neue Herausforderungen und freue mich darauf, innovative Ideen in die Realität umzusetzen. 
                                Stöbere durch meine Projekte und entdecke, wie ich mit meinem technischen Know-how und meiner kreativen Herangehensweise dazu beitrage, digitale Visionen zu verwirklichen.
                            </p>
                        </div>
                </div>
                <div className="col-12 col-sm-7">
                    <div className='codeArea'>
                        <div className="row">
                            <div className="col-12">
                                <h2>Skills</h2>
                            </div> 
                            <div className="col-12">
                                <SkillBar name="HTML/CSS" percent="80"/>
                                <SkillBar name="JavaScript" percent="70"/>
                                <SkillBar name="PHP" percent="85"/>
                                <SkillBar name="ColdFuison" percent="75"/>
                                <SkillBar name="MySQL" percent="80"/>
                                <SkillBar name="SEO" percent="85"/>
                                <SkillBar name="Wordpress" percent="50"/>
                                <SkillBar name="Linux" percent="60"/>
                                <SkillBar name="GIT" percent="50"/>
                            </div>
                            <div className="col-3 d-flex justify-content-center my-3 skillIcon"><FontAwesomeIcon icon={faNodeJs} /></div>
                            <div className="col-3 d-flex justify-content-center my-3 skillIcon" ><FontAwesomeIcon icon={faReact} /></div>
                            <div className="col-3 d-flex justify-content-center my-3 skillIcon"><FontAwesomeIcon icon={faLaravel} /></div>
                            <div className="col-3 d-flex justify-content-center my-3 skillIcon"><FontAwesomeIcon icon={faBootstrap} /></div>
                        </div>                  
                    </div>
                </div>
            </div>
        </div>
        
    )
}