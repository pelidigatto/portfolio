"use client";
import { TypeAnimation } from 'react-type-animation'
import UserCard from './components/userCard'
import Pic from './components/pic'

export default function Home() {
    
    return (
            <div className='homeSection'>
                <div className='row w-100 my-5'>
                    <div className='col-12 text-center'>
                        <h1>Moin, ich bin Florian!</h1>
                    </div>
                    <div className='col-12 col-sm-4 d-flex justify-content-center align-items-center my-4'>
                        <Pic width={1000} height={1000} />
                    </div>
                    <div className='col-12 col-sm-8 d-flex justify-content-center align-items-center p-0'>
                        <div className='row w-100 text-center'>
                            <div className='col-12'>
                                <div className='codeArea p-4 codeFont'>
                                    <div className='dotArea'><span className='dot'></span><span className='dot'></span><span className='dot'></span></div>
                                    <TypeAnimation
                                        style={{ whiteSpace: 'pre-line', height: '120px', display: 'block' }}
                                        sequence={[
                                            `Web-Developer  👨‍💻\nSEO-Optimierer 🔍\nProblemlöser 🔧\nServer-Admin ☕`, // actual line-break inside string literal also gets animated in new line, but ensure there are no leading spaces
                                            10000,
                                            '',
                                        ]}
                                        repeat={Infinity}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row w-100 justify-content-center my-3'>
                    <div className='col-12 col-sm-4'>
                        <UserCard headline={'Mehr über mich'} description={'Mehr über mich, meinen Werdegang und mein Skillset.'} link="/about" />
                    </div>
                    <div className='col-12 col-sm-4'>
                        <UserCard headline={'Meine Projekte'} description={'Eine Übersicht einiger Projekte, die ich umgesetzt habe.'} link="/projekte" />
                    </div>
                </div> 
                <div className='row w-100 justify-content-center mb-3'>
                    <div className='col-12 col-sm-8'>
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
                </div>             
            </div>
    )
}
