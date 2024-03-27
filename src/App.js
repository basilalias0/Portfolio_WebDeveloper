import './style.css';
import Pdf from './PDFs/BASIL_ALIAS_Resume_PythonDjangoFullstackdeveloper.pdf'

function App() {
  return (
    <>
    <header>
    <nav>
      <div className="nav-space ">
        <div className="d-flex mb-3">
          <div className="me-auto p-2 logo">
            <a href="index.html">
              <img src={require('./Images/Favicon_Portfolio.png')} alt="logo not found" />
            </a>
          </div>
          <div className="p-2">
            <a href="#about-me">About</a>
          </div>
          <div className="p-2">
            <a href="#works">Work</a>
          </div>
          <div className="p-2">
            <a href="#contact-me">Contact me</a>
          </div>
          <div className="p-2 resume">
          <a href = {Pdf} target = "_blank">
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  <div className="box">
    <div className="row">
      <div className="col-sm-2">
        <div className="linkbar">
          <ul>
            <li>
              <div className="linkedin linkicon">
                <a href="https://www.linkedin.com/in/basil-alias-50b744186/">
                  <i
                    className="fa-brands fa-linkedin-in fa-2xl"
                    style={{ color: "#ffffff" }}
                  />
                </a>
              </div>
            </li>
            <li>
              <div className="git linkicon">
                <a href="https://github.com/basilalias0">
                  <i
                    className="fa-brands fa-github fa-2xl"
                    style={{ color: "#ffffff" }}
                  />
                </a>
              </div>
            </li>
            <li>
              <div className="instagram linkicon">
                <a href="https://www.instagram.com/_ba_sil_">
                  <i
                    className="fa-solid fa-hashtag fa-2xl"
                    style={{ color: "#ffffff" }}
                  />
                </a>
              </div>
            </li>
            <li>
              {" "}
              <div className="twitter linkicon">
                <a href="">
                  <i
                    className="fa-brands fa-square-twitter fa-2xl"
                    style={{ color: "#ffffff" }}
                  />
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className=" col-sm-8">
        <div className="container">
          <div className="row">
            <div className="mainbar">
              <div className="open_div">
                <div className="open_convo">Hi, my name is</div>
                <div className="main_name">BASIL ALIAS.</div>
                <div className="punchline">VS Code is my Playground</div>
                <div className="bitinfo">
                  I'm always so excited and interested in gaining knowledge
                  about technologies and scripting. <br />
                  Being a software engineer is who I am and what I have always
                  wanted to be.
                </div>
                <div className="main_quote">
                  If at first you don’t succeed; call it version 1.0
                </div>
              </div>
            </div>
          </div>
          <div className="rowspacing">
            <div className="row">
              <div className="padding-div" />
            </div>
          </div>
          <div className="row-spacing">
            <div className="row">
              <div className=" row-heading d-inline-flex" id="about-me">
                <h2>01.About me</h2>
              </div>
              <br />
              <div className="col">
                <div className="about-content">
                  I am <span className="highlight">Basil</span>, a passionate
                  fullstack web developer from Kerala, India, bringing you web
                  development and stable applications for the smooth user
                  experience. My expertise is developing web applications on{" "}
                  <span className="highlight">Python</span> language by{" "}
                  <span className="highlight">Django</span> framework. Hand on
                  experience in
                  <div className="container text-start highlight">
                    <div className="row row-cols-2 ">
                      <div className="col">▢ Python</div>
                      <div className="col">▢ HTML</div>
                      <div className="col">▢ C Programming</div>
                      <div className="col">▢ CSS</div>
                      <div className="col">▢ C++</div>
                      <div className="col">▢ JavaScript</div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                style={{ height: "30rem" }}
                className="col d-flex justify-content-center align-items-center"
              >
                <img
                  className="propic"
                  src={require('./Images/proPic.jpg')}
                  alt="image not found"
                />
              </div>
            </div>
          </div>
          <div className="row-spacing ">
            <div className="row">
              <div className=" row-heading d-inline-flex" id="works">
                <h2>02.Some Things I've Build</h2>
              </div>
              <br />
              <div className="col-6">
                <div className="project-pic">
                  <img src={require('./Images/prodigy.png')} alt="image not found" />
                </div>
              </div>
              <div className="col-6">
                <div className="project-info">
                  <div className="project-head">
                    Prodigy
                    <br />
                    E-Learning website
                  </div>
                  <div className="project-content shadow p-3 mb-5 bg-body-tertiary rounded">
                    "Prodigyy" is a E-learning website which is fully working
                    and build with <span className="highlight">Django</span>{" "}
                    framework, used mainly{" "}
                    <span className="highlight">Python</span> and{" "}
                    <span className="highlight">HTML</span>,{" "}
                    <span className="highlight">CSS</span>,{" "}
                    <span className="highlight">JS</span> languages as well.{" "}
                  </div>
                  <div className="git  project-links">
                    <a href="https://github.com/basilalias0/OnlineLearingWebsite">
                      <i
                        className="fa-brands fa-github fa-2xl"
                        style={{ color: "#ffffff" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="project-pic">
                  <img src={require('./Images/OLX-Clone.png')} alt="image not found" />
                </div>
              </div>
              <div className="col-6">
                <div className="project-info">
                  <div className="project-head">
                    OLX Clone
                    <br />
                    Sell Your Thing!
                  </div>
                  <div className="project-content shadow p-3 mb-5 bg-body-tertiary rounded">
                    OLX Clone is a{" "}
                    <span className="highlight">Single-page</span> project,
                    which is based on{" "}
                    <span className="highlight">React.js</span> and{" "}
                    <span className="highlight">JSX</span>. You can sell and buy
                    products from it. The backend of the project is done by the{" "}
                    <span className="highlight">Firebase</span>.{" "}
                  </div>
                  <div className="git  project-links">
                    <a href="https://github.com/basilalias0/OLX_Clone">
                      <i
                        className="fa-brands fa-github fa-2xl"
                        style={{ color: "#ffffff" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="project-pic">
                  <img src={require('./Images/Netflix.png')} alt="image not found" />
                </div>
              </div>
              <div className="col-6">
                <div className="project-info">
                  <div className="project-head">
                    Netflix
                    <br />
                    Watch your favorites Online
                  </div>
                  <div className="project-content shadow p-3 mb-5 bg-body-tertiary rounded">
                    It's a clone project of{" "}
                    <span className="highlight">Netflix</span>. And the data set
                    are fetched from{" "}
                    <span className="highlight">The Movie Data Base</span>. This
                    is a single page project which is done by{" "}
                    <span className="highlight">React.js</span> and{" "}
                    <span className="highlight">Axios Library</span>.{" "}
                  </div>
                  <div className="git  project-links">
                    <a href="https://github.com/basilalias0/netflixclone">
                      <i
                        className="fa-brands fa-github fa-2xl"
                        style={{ color: "#ffffff" }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-spacing ">
            <div className="row">
              <div className=" mini-project row-heading d-inline-flex">
                <h2>Mini Projects</h2>
              </div>
              <br />
              <div className="col-4">
                <div className="card">
                  <div className="card-body .bg-success-subtle">
                    <h5 className="card-title">
                      <i
                        className="fa-solid fa-folder"
                        style={{ color: "#45d0a2" }}
                      />
                      <br />
                      <br />
                      Bank Transactions
                    </h5>
                    <p className="card-text">
                      Bank transactions is a fully made python only project
                      which is fully working and it can also store data of
                      customers by web-scarping functions.
                    </p>
                    <div className="git  project-links">
                      <a href="https://github.com/basilalias0/BankingApp">
                        <i
                          className="fa-brands fa-github fa-2xl"
                          style={{ color: "#ffffff" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-4">
                <div className="card">
                  <div className="card-body .bg-success-subtle">
                    <h5 className="card-title">
                      <i
                        className="fa-solid fa-folder"
                        style={{ color: "#45d0a2" }}
                      />
                      <br />
                      <br />
                      ToDo list
                    </h5>
                    <p className="card-text">
                      Todo List is a React project. It is a single page project.
                      Basics of the react.js applied to done it.HTML and CSS
                      also included.
                    </p>
                    <div className="git  project-links">
                      <a href="https://github.com/basilalias0/ToDoList">
                        <i
                          className="fa-brands fa-github fa-2xl"
                          style={{ color: "#ffffff" }}
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row-spacing">
            <div className="row">
              <div className=" row-heading d-inline-flex" id="contact-me">
                <h2>04.what's Next?</h2>
              </div>
              <br />
              <div className="contact-me">
                <div className="title">Get In Touch</div>
                <div className="subtitle">
                  I’m currently looking for any new opportunities, my inbox is
                  always open. Whether you have contact me or just want to say
                  hi, I’ll get back to you!
                </div>
                <div className="hello-bar">
                  <a
                    href="mailto:basilalyas2000@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Say Hello!
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row-spacing" />
        </div>
      </div>
      <div className="col-sm-2 ">
        <div className="sidebar">
          <div>
            <a
              href="mailto:basilalyas2000@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              basilalyas2000@gmail.com
            </a>
          </div>
          <div className="vertical_line" />
        </div>
      </div>
    </div>
  </div>
  <footer>
    <div className="footer_content">©My Portfolio</div>
  </footer>
</>
  );
}

export default App;
