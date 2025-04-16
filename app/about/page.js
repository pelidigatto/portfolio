import SkillBar from "../components/SkillBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faNodeJs,
  faReact,
  faLaravel,
  faBootstrap,
  faXing,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowDown, faEnvelope } from "@fortawesome/free-solid-svg-icons";
export default function About() {
  return (
    <div className="homeSection" id="about">
      <div className="row w-100 my-5">
        <div className="col-12 text-center p-0">
          <h1 className="fw-light mt-5">Über mich</h1>
        </div>
        <div className="col-12 col-sm-5 order-1 order-md-0 my-3">
          <div className="codeArea">
            <p>
              🚀 Willkommen auf meinem Portfolio! Ich bin Florian Thönelt, ein
              erfahrener Full-Stack Webentwickler mit einem ausgeprägten
              technischen Hintergrund und einem Auge für Ästhetik. Ich gestalte
              digitale Lösungen, die nicht nur funktional sind, sondern auch ein
              beeindruckendes Benutzererlebnis bieten. Meine umfangreiche
              Erfahrung und Kreativität fließen dabei ein.
            </p>
            <p>
              💻 Ich verfüge über umfangreiche Erfahrung in der Entwicklung von
              Frontend- und Backend-Anwendungen mit modernen Technologien wie
              HTML5, CSS3, JavaScript sowie Frameworks wie React und Node.js.
              Darüber hinaus habe ich Erfahrung in Skriptsprachen wie ColdFusion
              und PHP sowie in Content-Management-Systemen wie Wordpress und
              Joomla.
            </p>
            <p>
              🎨 In meinen Projekten lege ich großen Wert auf responsives
              Design, um sicherzustellen, dass die Webseiten auf allen Geräten
              optimal funktionieren. Von der Konzeption bis zur Umsetzung bin
              ich stets bestrebt, die individuellen Bedürfnisse meiner Kunden zu
              verstehen und maßgeschneiderte Lösungen zu entwickeln.
            </p>
            <p>
              🤝 Ich bin immer offen für neue Herausforderungen und freue mich
              darauf, innovative Ideen in die Realität umzusetzen. Stöbere durch
              meine Projekte und entdecke, wie ich mit meinem technischen
              Know-how und meiner kreativen Herangehensweise dazu beitrage,
              digitale Visionen zu verwirklichen.
            </p>

            <div className="row">
              <div className="col-12">
                <h3 className="fw-lighter fs-4">Kontakt</h3>
              </div>
              <a
                href="mailto:florian@thoenelt.dev"
                className="col-3 d-flex flex-column  justify-content-center my-3 skillIcon contactLink"
              >
                <FontAwesomeIcon icon={faEnvelope} />
                <label className="fs-6 w-lighter text-center w-100">Mail</label>
              </a>
              <a
                href="https://github.com/pelidigatto"
                target="_blank"
                className="col-3 d-flex flex-column  justify-content-center my-3 skillIcon contactLink"
              >
                <FontAwesomeIcon icon={faGithub} />
                <label className="fs-6 w-lighter text-center w-100">
                  GitHub
                </label>
              </a>
              <a
                href="https://www.xing.com/profile/Florian_Thoenelt"
                target="_blank"
                className="col-3 d-flex flex-column  justify-content-center my-3 skillIcon contactLink"
              >
                <FontAwesomeIcon icon={faXing} />
                <label className="fs-6 w-lighter text-center w-100">Xing</label>
              </a>
              <a
                href="https://www.linkedin.com/in/florian-thönelt-9834a896"
                target="_blank"
                className="col-3 d-flex flex-column  justify-content-center my-3 skillIcon contactLink"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
                <label className="fs-6 w-lighter text-center w-100">
                  LinkedIn
                </label>
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-7 order-0 order-md-1  my-3">
          <div className="codeArea">
            <div className="row">
              <div className="col-12">
                <h2 className="fw-lighter">Skills</h2>
              </div>
              <div className="col-12">
                <SkillBar name="HTML/CSS" percent="95" />
                <SkillBar name="JavaScript" percent="85" />
                <SkillBar name="GIT" percent="60" />
                <SkillBar name="PHP" percent="90" />
                <SkillBar name="ColdFuison" percent="85" />
                <SkillBar name="MySQL" percent="75" />
                <SkillBar name="SEO" percent="85" />
                <SkillBar name="Wordpress" percent="80" />
              </div>
              <h3 className="fs-4 fw-lighter">Weitere Skills und Frameworks</h3>
              <div className="col-3 d-flex flex-column  justify-content-center my-3 skillIcon">
                <FontAwesomeIcon icon={faNodeJs} />
                <label className="fs-6 w-lighter text-center w-100">
                  Node.js
                </label>
              </div>
              <div className="col-3 d-flex flex-column  justify-content-center my-3 skillIcon">
                <FontAwesomeIcon icon={faReact} />
                <label className="fs-6 w-lighter text-center w-100">
                  React
                </label>
              </div>
              <div className="col-3 d-flex flex-column  justify-content-center my-3 skillIcon">
                <FontAwesomeIcon icon={faLaravel} />
                <label className="fs-6 w-lighter text-center w-100">
                  Laravel
                </label>
              </div>
              <div className="col-3 d-flex flex-column  justify-content-center my-3 skillIcon">
                <FontAwesomeIcon icon={faBootstrap} />
                <label className="fs-6 w-lighter text-center w-100">
                  Bootstrap
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row w-100 justify-content-center my-3">
        <a href="#projects" className="ArrowStart">
          <FontAwesomeIcon icon={faArrowDown} />
        </a>
      </div>
    </div>
  );
}
