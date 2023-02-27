import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from "../assets/img/meter-kotlin.svg";
import meter2 from "../assets/img/meter-htmlcss.svg";
import meter3 from "../assets/img/meter-jsreact.svg";
import meter4 from "../assets/img/meter-c.svg";
import meter5 from "../assets/img/meter-python.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-box">
              <h2>Skills</h2>
              <p>
                Get to explore basic programming languages.<br></br>Familiar with
                MVVM architecture in Android using Kotlin.<br></br>Understanding Three Layer Architecture and its Implementation in C#
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Kotlin" />
                  <h5>Mobile.Android</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="html and css" />
                  <h5>Web</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="javascript and react app" />
                  <h5>Responsive Web Page</h5>
                </div>
                <div className="item">
                  <img src={meter4} alt="c#" />
                  <h5>CRUD Program</h5>
                </div>
                <div className="item">
                  <img src={meter5} alt="python" />
                  <h5>Create-Read-Delete-Sorted Program</h5>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-left"
        src={colorSharp}
        alt="background"
      />
    </section>
  );
};
