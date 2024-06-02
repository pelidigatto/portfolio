"use client";
import { TypeAnimation } from 'react-type-animation'
import Pic from './components/pic'
import About from './about/page';
import Projekte from './projekte/page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons'
import 'animate.css';

export default function Home() {
    
    return (
            <div>
                <div className='homeSection' id="home">
                    <div className='row w-100 mt-5'>
                        <div className='p-0 col-12 text-center'>
                            <h1 className='fw-light mt-5'>Moin, ich bin Florian 👋!<span className='HeaderHiglight'>Webentwickler</span> <br /> aus Hannover</h1>
                        </div>
                        <div className='p-0 col-12 col-lg-4 d-flex justify-content-center align-items-center my-4'>
                            <Pic width={1000} height={1000} />
                        </div>
                        <div className='col-12 col-lg-8 d-flex justify-content-center align-items-center p-0'>
                            <div className='row w-100 text-center'>
                                <div className='col-12'>
                                    <div className='codeArea p-4 codeFont aboutMe'>
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
                        <a href='#about' className='ArrowStart'><FontAwesomeIcon icon={faArrowDown} /></a>   
                    </div>       
                </div>
                    <About />
                    <Projekte />
            </div>

    )
}
