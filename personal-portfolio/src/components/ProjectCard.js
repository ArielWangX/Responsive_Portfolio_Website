import { Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const ProjectCard = ({ title, subTitle, description, imgUrl, link }) => {
  function NewList(props) {
    const text = props.text;
    let newText = "";
    if (typeof text === "string") {
      newText = text.split(",").map((str, index) => (
        <li key={index} className="projectcard-li">
          {str}
        </li>
      ));
    }
    return newText;
  }

  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{subTitle}</span>
          <div className="projectcard-container">
            <ul className="projectcard-ul">
              <NewList text={description} />
            </ul>
          </div>
          <a className="github-link" href={link}>
            <ArrowRightCircle size={25} />
          </a>
        </div>
      </div>
    </Col>
  );
};
