import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="https://www.linkedin.com/in/saurabh-tiwari11/"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                LinkedIn — saurabh-tiwari11
              </a>
            </p>
            <p>
              <a href="mailto:hello@skumar.space" data-cursor="disable">
                Email — hello@skumar.space
              </a>
            </p>
            <p>
              <a
                href="https://portfolio.skumar.space/contact"
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
              >
                Contact Page — skumar.space
              </a>
            </p>
            <h4>Highlights</h4>
            <p>4+ years experience</p>
            <p>30+ projects shipped</p>
            <p>MERN, Next.js, AI integrations, system design</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            {/* <a
              href="https://github.com/Kumar-Saurabh-Tiwari"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              GitHub <MdArrowOutward />
            </a> */}
            <a
              href="https://www.linkedin.com/in/saurabh-tiwari11/"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="https://portfolio.skumar.space/contact"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Contact Page <MdArrowOutward />
            </a>
            <a
              href="mailto:hello@skumar.space"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Saurabh Kumar Tiwari</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
