import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { isVisible } from "@testing-library/user-event/dist/utils";

export const Projects = () => {
  const projects = [
    {
      title: "WorkoutLogger",
      subTitle: "Android Kotlin App",
      description:
        "Applied MVVM architecture, Using Jetpack Compose, Connecting with Room Database, Applying Coroutine and Dagger, ViewModels are unit tested",
      imgUrl: projImg1,
      link: "https://github.com/ArielWangX/WorkoutLogger",
    },
    {
      title: "Personal Portfolio",
      subTitle: "React App Web Page",
      description: "Learn from course project, Personalise each section",
      imgUrl: projImg2,
      link: "https://github.com/ArielWangX/Responsive_Portfolio_Website",
    },
    {
      title: "Student Management System",
      subTitle: "Console-based C# Program",
      description:
        "Apply three layer architecture, Console-based UI interface, Connecting with SQLite Database, Implement CRUD operation on each table, Able to retrieve data from multiple tables, Import data from csv and Export table to csv",
      imgUrl: projImg3,
      link: "https://github.com/ArielWangX/ICTPRG432-Develop-data-driven-applications",
    },
    {
      title: "Book Catalog",
      subTitle: "Python Desktop App",
      description:
        "Catalog-based UI interface, ISBN validation, Implement adding reading and deleting a book operations, Able to sorting by price",
      imgUrl: projImg1,
      link: "https://github.com/ArielWangX/ICTPRG302-Apply-introductory-programming-techniques",
    },
    {
      title: "No Content",
      subTitle: "Lorem ipsum dolor",
      description: undefined,
      imgUrl: projImg2,
      link: undefined,
    },
    {
      title: "No Content",
      subTitle: "Lorem ipsum dolor",
      description: undefined,
      imgUrl: projImg3,
      link: undefined,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I'm currently building a personal project: WorkoutLogger, an
                    Android app to record exercise progress. <br />
                    <br />
                    The react-app project is this web page that displays my
                    personal portfolio. <br />
                    <br />
                    During the programming school period, I developed a student
                    management system connecting with a database using C# and a
                    small program used to add, read, and delete a book and sort
                    a book by ISBN using python.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      variant="pills"
                      defaultActiveKey="/home"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab One</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab Two</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab Three</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
