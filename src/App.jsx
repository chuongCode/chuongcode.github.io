import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/*
    - #MAIN
  */}
      <main>
        {/*
- #SIDEBAR
    */}
        <aside className="sidebar" data-sidebar="">
          <div className="sidebar-info">
            <figure className="avatar-box">
              <img
                src="./assets/images/professionalrichard.png"
                className="avatar-box"
                alt="Richard Chuong"
                width={80}
              />
            </figure>
            <div className="info-content">
              <h1 className="name" title="Richard Chuong">
                Richard Chuong
              </h1>
              <p className="title">Software Developer</p>
            </div>
            <button className="info_more-btn" data-sidebar-btn="">
              <span>Show Contacts</span>
              <ion-icon name="chevron-down" />
            </button>
          </div>
          <div className="sidebar-info_more">
            <div className="separator" />
            <ul className="contacts-list">
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="mail-outline" />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Email</p>
                  <a
                    href="mailto:rchuong@u.rochester.edu"
                    className="contact-link"
                  >
                    rchuong@u.rochester.edu
                  </a>
                </div>
              </li>
              <li className="contact-item">
                <div className="icon-box">
                  <ion-icon name="location-outline" />
                </div>
                <div className="contact-info">
                  <p className="contact-title">Location</p>
                  <address>Rochester, NY, USA</address>
                </div>
              </li>
            </ul>
            <div className="separator" />
            <ul className="social-list">
              {/* LinkedIn */}
              <li className="social-item">
                <a
                  href="https://www.linkedin.com/in/richard-chuong/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <ion-icon name="logo-linkedin" />
                </a>
              </li>
              {/* Github */}
              <li className="social-item">
                <a
                  href="https://github.com/chuongCode"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <ion-icon name="logo-github" />
                </a>
              </li>
              {/* Resume File */}
              <li className="social-item">
                <a
                  href="https://drive.google.com/file/d/1kI9Xt4CKW-Pj8jsKINjNuprA2IaCd_6e/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <ion-icon
                    name="logo-google"
                    title="Google Drive Resume File"
                  />
                </a>
              </li>
            </ul>
          </div>
        </aside>
        {/*
- #main-content
    */}
        <div className="main-content">
          {/*
  - #NAVBAR
*/}
          <nav className="navbar">
            <ul className="navbar-list">
              <li className="navbar-item">
                <button className="navbar-link active" data-nav-link="">
                  About
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link="">
                  Resume
                </button>
              </li>
              <li className="navbar-item">
                <button className="navbar-link" data-nav-link="">
                  Portfolio
                </button>
              </li>
            </ul>
          </nav>
          {/*
  - #ABOUT
*/}
          <article className="about active" data-page="about">
            <header>
              <h2 className="h2 article-title">About me</h2>
            </header>
            <section className="about-text">
              <p>
                I'm currently pursuing a major in Computer Science at the
                University of Rochester. My interests revolve around empowering
                individuals, organizations, and entire communities to unlock
                their full potential and thrive in an increasingly digital
                landscape.
              </p>
            </section>
            {/*
    - service
  */}
            <section className="service">
              <h3 className="h3 service-title">What I'm doing</h3>
              <ul className="service-list">
                <li className="service-item">
                  <div className="service-icon-box">
                    <img
                      src="./assets/images/icon-design.svg"
                      alt="design icon"
                      width={40}
                    />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">
                      User-centered Design
                    </h4>
                    <p className="service-item-text">
                      Making products better by understanding exactly what users
                      need and want, involving them at every step to create
                      solutions that really work for them.
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon-box">
                    <img
                      src="./assets/images/icon-dev.svg"
                      alt="Web development icon"
                      width={40}
                    />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">
                      Efficient Development
                    </h4>
                    <p className="service-item-text">
                      Optimizing workflow, tools, and processes to save time and
                      resources while still delivering high-quality results.
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon-box">
                    <img
                      src="./assets/images/icon-app.svg"
                      alt="mobile app icon"
                      width={40}
                    />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">
                      Emerging Technologies
                    </h4>
                    <p className="service-item-text">
                      Working with cutting-edge technologies, and examine how
                      people from all walks of life can utilize them for good.
                    </p>
                  </div>
                </li>
                <li className="service-item">
                  <div className="service-icon-box">
                    <img
                      src="./assets/images/icon-photo.svg"
                      alt="camera icon"
                      width={40}
                    />
                  </div>
                  <div className="service-content-box">
                    <h4 className="h4 service-item-title">Social Media</h4>
                    <p className="service-item-text">
                      Designing and creating fancy marketing material that is
                      aesthetically pleasing to the eye.
                    </p>
                  </div>
                </li>
              </ul>
            </section>
          </article>
          {/*
  - #RESUME
*/}
          <article className="resume" data-page="resume">
            <header>
              <h2 className="h2 article-title">Resume Summary</h2>
            </header>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <ion-icon name="book-outline" />
                </div>
                <h3 className="h3">Education</h3>
              </div>
              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    University of Rochester - Computer Science
                  </h4>
                  <span>2021 — 2025</span>
                  <p className="timeline-text">
                    Relevant Coursework: Data Structures &amp; Algorithms,
                    Discrete Math, Computation &amp; Formal Systems, Web
                    Development, Object-Oriented Programming, iOS Mobile Dev,
                    Human-Computer Interaction, AR/VR Development, Database
                    Systems, Computer Networks
                  </p>
                </li>
              </ol>
            </section>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <ion-icon name="book-outline" />
                </div>
                <h3 className="h3">Experience</h3>
              </div>
              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    Acting Globally - Volunteer Software Engineer Intern
                  </h4>
                  <span>May 2025 - Present</span>
                  <p className="timeline-text">
                    Building core web infrastructure supporting online
                    fundraising and communications for a global nonprofit
                  </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    UR Medicine Motion Labs - Software Development Intern
                  </h4>
                  <span>Aug 2024 - January 2025</span>
                  <p className="timeline-text">
                    Developed immersive technology applications that engage
                    patients in dynamic rehabilitation exercises while providing
                    real-time data to optimize treatment plans and improve
                    patient outcomes
                  </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    Stryker Corporation - Software Engineering Intern
                  </h4>
                  <span>May 2024 - Aug 2024</span>
                  <p className="timeline-text">
                    Automated transaction detection in databases, resolved data
                    inconsistencies during system updates, and improved the
                    efficiency of diagnosing customer deployment issues
                  </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    Interplay Lab (ROC HCI) - AR Software Developer
                  </h4>
                  <span>Jan 2024 - Jul 2024</span>
                  <p className="timeline-text">
                    Constructed novel interfaces for children for augmented
                    reality applications, enhancing education in social,
                    creative, and emotional learning contexts
                  </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    ROC-HCI Lab - Software Engineering Research Intern
                  </h4>
                  <span>Jun 2023 - Dec 2023</span>
                  <p className="timeline-text">
                    Played a pivotal role in the refinement of an innovative
                    LLM-powered virtual avatar platform, designed to offer users
                    a higher-fidelity simulation experience, enabling them to
                    practice a wide range of real-world scenarios with
                    unparalleled realism
                  </p>
                  <p className="timeline-text resume-desc-padding">
                    Undertook a crucial responsibility in the application of
                    computer vision technology to enhance the privacy and
                    security of medical video data, particularly in the context
                    of ataxia diagnosis
                  </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    Studio X - AR/VR Software Developer
                  </h4>
                  <span>Oct 2022 - May 2025</span>
                  <p className="timeline-text">
                    Advanced educational growth and digital literacy within my
                    university community through the creation of captivating and
                    immersive VR experiences, harnessing expertise in C# .NET
                    Development and API scripting
                  </p>
                  <p className="timeline-text resume-desc-padding">
                    Facilitated hands-on workshops that introduced the
                    fundamentals of XR development and offered valuable insights
                    into industry standards with Unity
                  </p>
                </li>
              </ol>
            </section>
            <section className="timeline">
              <div className="title-wrapper">
                <div className="icon-box">
                  <ion-icon name="book-outline" />
                </div>
                <h3 className="h3">Projects</h3>
              </div>
              <ol className="timeline-list">
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Study Spaces</h4>
                  <span>2024</span>
                  <p className="timeline-text">
                    An interactive study platform crafted with Next.js,
                    Socket.io, and Express.js to transform PDF class materials
                    into dynamic, collaborative multiple-choice quizzes with
                    real-time multiplayer sessions
                  </p>
                  <div className="timeline-text resume-desc-padding">
                    Winner of Best AI Hack at RIT's BrickHack X
                  </div>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">Email Beacon</h4>
                  <span>2022</span>
                  <p className="timeline-text">
                    An innovative method to discreetly monitor when, where, and
                    how often an email's content has been accessed. This
                    provides invaluable insights into security practices,
                    allowing for more effective communication strategies.
                  </p>
                </li>
                <li className="timeline-item">
                  <h4 className="h4 timeline-item-title">
                    Amazon Review Predictor
                  </h4>
                  <span>2022</span>
                  <p className="timeline-text">
                    Executed sentiment analysis and logistic regression using
                    Python to examine Amazon text reviews and guess how many
                    stars it was assigned with ~90% accuracy based on a dataset
                    of 5000+ reviews
                  </p>
                </li>
              </ol>
            </section>
          </article>
          {/*
  - #PORTFOLIO
*/}
          <article className="portfolio" data-page="portfolio">
            <header>
              <h2 className="h2 article-title">Portfolio</h2>
            </header>
            <section className="projects">
              <ul className="project-list">
                <li className="project-item active">
                  <div data-project-item="">
                    <figure className="project-img">
                      <div
                        className="project-item-icon-box"
                        data-project-avatar=""
                      >
                        <ion-icon name="eye-outline" />
                      </div>
                      <img
                        src="./assets/images/aurum.png"
                        alt="Welcome to Aurum"
                        loading="lazy"
                        data-project-avatar=""
                      />
                    </figure>
                    <h3 className="project-title" data-project-title="">
                      Aurum
                    </h3>
                    <div className="no-display" data-project-desc="">
                      <p>
                        A VR game based on authentic 17th-century alchemical
                        manuscripts from the Robbins Library. Step into the role
                        of a novice alchemist — exploring the laboratory,
                        mastering the mystical arts, and uncovering the clues to
                        the Philosopher's Stone.
                      </p>
                    </div>
                    <div className="no-display" data-project-content="">
                      <div
                        data-type="image"
                        data-src="./assets/images/aurum1.png"
                      />
                      <div data-type="text">
                        <p>
                          Immersive technologies hold the key to transforming
                          how we interact with the digital world by creating
                          more engaging, realistic, and interactive experiences.
                          Reimagining Rochester’s library collections, these
                          technologies offer an opportunity to transform
                          teaching and learning. By integrating VR (virtual
                          reality) into library resources, we can invite users
                          to not just passively consume information, but to
                          actively engage with it.
                        </p>
                      </div>
                      <div data-type="text">
                        <p>
                          The vision at Studio X was a clear focus on presenting
                          and celebrating the diverse and global history of
                          alchemical practices. From the outset, the team was
                          committed to promoting a more inclusive and expansive
                          view of history, challenging the traditional
                          Eurocentric narratives of alchemy and highlighting its
                          rich traditions across various cultures.
                        </p>
                      </div>
                      {/* insert the 360 image here */}
                      <div
                        data-type="panorama"
                        data-src="./assets/images/Panorama.png"
                      />
                      <div data-type="text">
                        <p>
                          Our design process was rooted in the idea of creating
                          an experience that anyone could enjoy, regardless of
                          background or ability. Accessibility was key, and we
                          focused on making the virtual environment intuitive,
                          comfortable, and enriching for all participants.
                          Features like force grab and teleportation movement
                          were employed to reduce motion sickness and
                          conflicting sensory exposure.
                        </p>
                      </div>
                      <div
                        data-type="image"
                        data-src="./assets/images/aurum-forcegrab.gif"
                      />
                      <div data-type="text">
                        <p>
                          In collaboration with a dedicated UI/UX team, our
                          coding/development team focused on creating an
                          intuitive interface that enables users to interact
                          seamlessly with the virtual environment. Numerous
                          iterations were run through to ensure a system where
                          players could pick up tools, mix ingredients, and
                          observe the transformation of materials—all while
                          maintaining the sense of immersion crucial to the
                          experience.
                        </p>
                      </div>
                      <div data-type="text">
                        <p>
                          Our dev team worked extensively with Unity’s{" "}
                          <b>C# .NET framework</b> to enable smooth and
                          responsive interactions, ensuring that the physics,
                          animations, and user inputs felt intuitive and
                          realistic, in conjunction to maintaining consistent
                          source control through Unity's integrated Version
                          Control System over the course of two years.
                        </p>
                      </div>
                      <div
                        data-type="image"
                        data-src="./assets/images/aurum-development.png"
                      />
                      <div data-type="text">
                        <p>
                          Aurum has evolved through multiple generations of
                          talented students and leaders, each contributing
                          unique perspectives from their diverse backgrounds to
                          advance the project's mission of expanding digital
                          literacy. There are many to mention, but among those I
                          want to highlight are my project manager, Mila
                          Paymukhina, now at Netflix; the resident XR developer,
                          Liam O'Leary; and project mentor, Meaghan Moody,
                          Assistant Director of Studio X, as well as in addition
                          to all of the omega talented undergrad peers I was
                          fortunate enough to work alongside.
                        </p>
                      </div>
                      <div data-type="text">
                        <p>
                          Aurum has been featured at multiple symposiums and
                          research expos, and it's been an honor to showcase its
                          impact in the field of immersive technology. Among the
                          key events where Aurum was presented are the RIT
                          Frameless Symposium and the Studio X Annual XR
                          Research Showcase, collectively attracting over 500
                          attendees. In addition to its role as a research
                          project, Aurum also serves as an educational model,
                          highlighting the potential of VR in enhancing teaching
                          and learning experiences.
                        </p>
                      </div>
                      <div
                        data-type="image"
                        data-src="./assets/images/aurum-presentation.png"
                      />
                      <div data-type="text">
                        <p className="no-wrap text-centered">
                          Find more information about Aurum on the{" "}
                          <a
                            href="https://www.library.rochester.edu/projects/aurum-vr-alchemical-laboratory"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Studio X website
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="project-item active">
                  <div data-project-item="">
                    <figure className="project-img">
                      <div
                        className="project-item-icon-box"
                        data-project-avatar=""
                      >
                        <ion-icon name="eye-outline" />
                      </div>
                      <img
                        src="./assets/images/studyspaces_thumbnail4-3.png"
                        alt="Study Spaces Thumbnail"
                        loading="lazy"
                        data-project-avatar=""
                      />
                    </figure>
                    <h3 className="project-title" data-project-title="">
                      Study Spaces
                    </h3>
                    <div className="no-display" data-project-desc="">
                      <p>
                        A seamless way to transform your class notes into
                        dynamic multiplayer quizzes using AI. Turn studying PDF
                        lecture materials from boring grind sessions to fun,
                        interactive learning experiences!
                      </p>
                    </div>
                    <div className="no-display" data-project-content="">
                      <div
                        data-type="image"
                        data-src="./assets/images/studyspaces-lobby.png"
                      />
                      <div data-type="text">
                        <p>
                          The concept of Study Spaces was born during the 10th
                          anniversary of RIT’s premier hackathon, BrickHack X,
                          and was developed alongside an incredibly talented
                          team, including Kayla Lin (now of Ramp), Bon Anh
                          Nguyen, and Jassem Toumi. We all shared a passion for
                          using software to empower users, driven by a common
                          goal to create meaningful, impactful solutions that
                          address real-world challenges.
                        </p>
                      </div>
                      <div
                        data-type="image"
                        data-src="./assets/images/final-studyspaces.gif"
                      />
                      <div data-type="text">
                        <p>
                          Our inspiration stemmed from popular educational
                          platforms of our childhood, like Kahoot and Quizizz,
                          which brought a sense of fun and competition to
                          learning. And recognizing the huge wave of trendy
                          products powered by AI, we collaborated to build on
                          that foundation by designing a platform to optimize
                          the study environment for students by streamlining
                          that gamified experience that allows them to practice
                          learning materials and test their knowledge against
                          peers in a friendly competitive setting using AI to
                          dynamically tailor quiz content to the user’s study
                          materials.
                        </p>
                      </div>
                      <div
                        data-type="image"
                        data-src="./assets/images/platform-inspirations.gif"
                      />
                      <div data-type="text">
                        <p>
                          After solidifying our concept, we turned our focus to
                          selecting the right tech stack for the project. Driven
                          by a desire to push boundaries and explore new
                          technologies, we saw Cloudflare's challenge to
                          leverage their new tool, Workers AI, as an exciting
                          opportunity to implement machine learning models on a
                          global, serverless GPU network, bringing our idea to
                          life. Kayla, being our senior and an absolute
                          front-end wizard guru, brought extensive experience
                          with building out Express.js and Next.js apps, guiding
                          us forward with her expertise. We moved to the next
                          steps of setting up the core infrastructure for
                          multiplayer sessions, which involves supporting
                          real-time interaction to allow multiple users joining
                          quizzes simultaneously.
                        </p>
                      </div>
                      <div data-type="text">
                        <p>
                          To enable this seamless experience where players could
                          easily join and leave game rooms, we worked with
                          Socket.IO to enable reliable, real-time, two-way
                          communication capabilities. To manage the dynamic
                          interactions essential to our multiplayer quiz
                          environment, we built out an architecture of
                          event-driven communication. We were then able to
                          maintain persistent connections between the server and
                          clients, ensuring that updates—such as new questions,
                          player responses, and scores—were instantly
                          synchronized across all users in asession.
                        </p>
                      </div>
                      <div
                        data-type="image"
                        data-src="./assets/images/logingif3.gif"
                      />
                      <div data-type="text">
                        <p>
                          With our connection in place, we turned to building
                          out the backend to manage the core functionalities and
                          data flow of Study Spaces. Using Express.js as our
                          basis, we set up routes for session management and
                          data handling, integrating MySQL as our database to
                          store essential data—such as user profiles, study
                          materials, and session history—ensuring scalability as
                          the platform grows. And with Workers AI hooked up to
                          process content and generate questions in real time,
                          we could relay our dynamic quizzes to the frontend
                          through Socket.IO to display the game to the users
                          synchronously. We additionally implemented game logic
                          to handle room creation, score updates, and player
                          actions, enabling smooth, interactive sessions for all
                          participants.
                        </p>
                      </div>
                      <div
                        data-type="image"
                        data-src="./assets/images/joinlobbygif.gif"
                      />
                      <div data-type="text">
                        <p>
                          Now all of this intricate backend would be for naught
                          without a frontend capable of delivering an intuitive
                          and engaging experience for its users. Crafting the
                          components for quiz interactions, score displays, and
                          anything visual we wanted came easy with Kayla at the
                          helm (Follow her on{" "}
                          <a
                            href="https://x.com/kayladotdev"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Twitter
                          </a>
                          !), and the gamified, collaborative experience we
                          envisioned for Study Spaces came to life as we put the
                          finishing touches on bridging our interface with the
                          processes we worked on behind the scene.
                        </p>
                      </div>
                      <div data-type="text">
                        <p>
                          Through our combined efforts, Study Spaces grew from a
                          simple concept to a fully fledged, AI-driven study
                          tool committed to transforming how users view engaging
                          with learning materials. By focusing on how we can
                          make learning platforms more interactive and
                          accessible and blending them with our current day
                          cutting-edge technology, we reinforced our commitment
                          to developing tools that use technology to enhance
                          educational experiences and build communities.
                        </p>
                      </div>
                      <div
                        data-type="image"
                        data-src="./assets/images/victorygif.gif"
                      />
                      <div data-type="text">
                        <p>
                          Our project’s impact was recognized at BrickHack X,
                          where we were honored with the 'Best AI Hack' award
                          presented by Cloudflare. As judges, fellow hackers,
                          and other users viewed and tested our product, we
                          received a wealth of new ideas and valuable
                          perspectives. For instance, a professor suggested that
                          the platform could be especially beneficial for
                          creating tests tailored to student learning needs.
                          This experience affirmed our excitement for how tech
                          products can meet the diverse needs of different
                          clients, users, and communities, and we’re all eager
                          to pursue the next horizon of learning and innovation.
                        </p>
                      </div>
                      <div
                        data-type="image"
                        data-src="./assets/images/brickhack2024.jpeg"
                      />
                      <div data-type="text">
                        <p className="no-wrap text-centered">
                          Find more information about Study Spaces on our{" "}
                          <a
                            href="https://devpost.com/software/study-spaces-gj7t3k"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Devpost
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="project-item active">
                  <div data-project-item="">
                    <figure className="project-img">
                      <div
                        className="project-item-icon-box"
                        data-project-avatar=""
                      >
                        <ion-icon name="eye-outline" />
                      </div>
                      <img
                        src="./assets/images/beacon.png"
                        alt="Email Beacon Searching"
                        loading="lazy"
                        data-project-avatar=""
                      />
                    </figure>
                    <h3 className="project-title" data-project-title="">
                      Simple Email Beacon
                    </h3>
                    <div className="no-display" data-project-desc="">
                      <p>
                        A tool that discreetly monitors when, where, and how
                        often an email's content has been accessed.
                      </p>
                    </div>
                    <div className="no-display" data-project-content="">
                      <div
                        data-type="image"
                        data-src="./assets/images/email-inspect.png"
                      />
                      <div data-type="text">
                        <p>
                          Simple Email Beacon traces its origins from a summer
                          brainstorming session with a friend, where we saw an
                          opportunity to develop a tracking tool that could
                          capture key data points (e.g., IP address, server
                          location, time) and empower users to monitor access to
                          data-sensitive content. Recognizing that over 90% of
                          cybercrimes are initiated through email, we saw the
                          chance to make a project that could serve as a public
                          good that anyone could intuitively use and benefit
                          from.
                        </p>
                      </div>
                      <div data-type="text">
                        <p className="no-wrap text-centered">
                          Find more information about Simple Email Beacon on our{" "}
                          <a
                            href="https://github.com/chuongCode/Simple-Email-Beacon"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Repo
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="project-item active">
                  <div data-project-item="">
                    <figure className="project-img">
                      <div
                        className="project-item-icon-box"
                        data-project-avatar=""
                      >
                        <ion-icon name="eye-outline" />
                      </div>
                      <img
                        src="./assets/images/sapien_rochci.png"
                        alt="SAPIEN Virtual Agent Coaches"
                        loading="lazy"
                        data-project-avatar=""
                      />
                    </figure>
                    <h3 className="project-title" data-project-title="">
                      SAPIEN Coach
                    </h3>
                    <div className="no-display" data-project-desc="">
                      <p>
                        An interactive, multilingual, emotionally-responsive,
                        virtual-human-based coaching platform for application in
                        training, social, and educational settings.
                      </p>
                    </div>
                    <div className="no-display" data-project-content="">
                      <div
                        data-type="image"
                        data-src="./assets/images/sapien_sophie_extension.png"
                      />
                      <div data-type="text">
                        <p>
                          SAPIEN Coach was an intuitive virtual avatar platform
                          driven by Large Language Models that I had the
                          opportunity to contribute to as a part of my summer
                          research internship at the ROC-HCI laboratory. The
                          platform allows users to customize their virtual
                          agent's personality, background, and conversation
                          premise, thus providing a rich, immersive interaction
                          experience. Furthermore, after the virtual meeting,
                          the user can choose to get the conversation analyzed
                          and receive actionable feedback on their communication
                          skills.
                        </p>
                      </div>
                      <div data-type="text">
                        <p>
                          The implications of this technology were vast, with
                          potential applications in a wide range of fields,
                          including education, training, and mental health.
                          SAPIEN Coach offers a unique opportunity to leverage a
                          higher-fidelity platform to boost engagement, improve
                          learning outcomes, and provide valuable insights into
                          user behavior.
                        </p>
                      </div>
                      <div data-type="text">
                        <p>
                          The lab prototyped many such applications, including a
                          simulated patient experience to train doctors for
                          stressful conversations, such as End-of-life care. We
                          also built out a virtual tutor who was
                          all-knowledgeable and could help educate you in any
                          topic. We even experimented with a dating course to
                          help users practice their one-liners before the big
                          day (can't quite recommend it just yet though). The
                          platform was overall designed to be highly
                          customizable, allowing users to tailor conversations
                          to their specific needs and preferences. The agents
                          are supported to be multilingual as well, supporting a
                          wide range of languages and dialects to ensure that
                          users from all over the world could benefit from the
                          technology.
                        </p>
                      </div>
                      <div
                        data-type="video"
                        data-src="./assets/images/sapien_video.mp4"
                      />
                      <div data-type="text">
                        <p className="no-wrap text-centered">
                          Find more information about SAPIEN Coach on the{" "}
                          <a
                            href="https://github.com/ROC-HCI/SAPIEN"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Repo
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="project-item active">
                  <div data-project-item="">
                    <figure className="project-img">
                      <div
                        className="project-item-icon-box"
                        data-project-avatar=""
                      >
                        <ion-icon name="eye-outline" />
                      </div>
                      <img
                        src="./assets/images/motion_capture.png"
                        alt="Motion Lab Vicon Motion Capture"
                        loading="lazy"
                        data-project-avatar=""
                      />
                    </figure>
                    <h3 className="project-title" data-project-title="">
                      Motion Labs: Immersive Rehabilitation Platform
                    </h3>
                    <div className="no-display" data-project-desc="">
                      <p>
                        A dynamic therapeutic experience designed to enhance
                        patient recovery routines by leveraging immersive
                        technologies, promoting interactive gamified therapy and
                        providing physical therapists with valuable data-driven
                        insights.
                      </p>
                    </div>
                    <div className="no-display" data-project-content="">
                      <div
                        data-type="video"
                        data-src="./assets/images/motion_labs_side_by_side.mp4"
                      />
                      <div data-type="text">
                        <p>
                          {/* engaging users in a virtual environment with real-time motion capture that maps movements to on-screen avatars */}
                        </p>
                      </div>
                      <div data-type="text">
                        <p className="no-wrap text-centered">
                          Find more information about the UR Medicine's motion
                          initiatives on their{" "}
                          <a
                            href="https://www.linkedin.com/company/urmc-orthopaedics-motion-analysis-laboratories"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            LinkedIn
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </section>
          </article>
        </div>
      </main>
      {/* Modal Structure */}
      <div className="project-modal-container" data-modal-container="">
        <div className="overlay" data-overlay="" />
        <section className="project-modal">
          <button className="modal-close-btn" data-modal-close-btn="">
            <ion-icon name="close-outline" />
          </button>
          <div className="modal-content" data-modal-content="">
            <h4 className="h3 modal-title" data-modal-title="">
              Project Title
            </h4>
            <div className="project-desc-modal" data-modal-desc="">
              <p>Insert Project Description Here.</p>
            </div>
            <div data-modal-body="">{/* Dyanmic body content*/}</div>
          </div>
        </section>
      </div>
      {/*
    - custom js link
  */}
      {/*
    - ionicon link
  */}
    </>
  );
}

export default App;
