import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>CTO Ninja</h5>
              </div>
              <h3>Dec 2023–Apr 2026</h3>
            </div>
            <p>
              Architected backend systems with optimized schemas, secure REST
              APIs, and cloud-ready deployment. Built performant Next.js
              frontends with advanced state management and responsive design,
              plus CI/CD pipelines with automated testing and reviews.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>PAN Global Network (Featured Project)</h5>
              </div>
              <h3>Featured</h3>
            </div>
            <p>
              Architected and deployed a production-scale membership platform
              with role-based access, real-time chat, forums, and secure resource
              management. Integrated Google Calendar, Eventbrite, and Luma APIs
              for centralized event orchestration.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer</h4>
                <h5>RoboFly Technology Pvt Ltd</h5>
              </div>
              <h3>Sep 2023–Dec 2023</h3>
            </div>
            <p>
              Built responsive web apps with pixel-perfect UI components and
              cross-browser compatibility, optimizing performance and
              accessibility for consistent UX across platforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
