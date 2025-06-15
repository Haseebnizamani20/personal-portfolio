// import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
// import { ProjectCard } from "./ProjectCard";
// import projImg1 from "../assets/img/project-img1.png";
// import projImg2 from "../assets/img/project-img2.png";
// import projImg3 from "../assets/img/project-img3.png";
// import colorSharp2 from "../assets/img/color-sharp2.png";
// import Output1 from "../assets/img/Output1.png";
// import download from "../assets/img/download.png";
// import robot from "../assets/img/robot.png";
// import 'animate.css';
// import TrackVisibility from 'react-on-screen';

// export const Projects = () => {

//   const projects = [
//     {
//       title: "Data science project",
//       description: "Custard disease detection using CNN",
//       imgUrl: Output1,
//     },
//     {
//       title: "Gym managemnt system",
//       description: "Developed it using html,css and connected to database using PHP",
//       imgUrl: download,
//     },
  
//     {
//       title: "Robot app",
//       description: "A simple react app showing different types of robot",
//       imgUrl: robot,
//     },
//     // {
//     //   title: "Business Startup",
//     //   description: "Design & Development",
//     //   imgUrl: projImg2,
//     // },
//     // {
//     //   title: "Business Startup",
//     //   description: "Design & Development",
//     //   imgUrl: projImg3,
//     // },
//   ];

//   return (
//     <section className="project" id="projects">
//       <Container>
//         <Row>
//           <Col size={12}>
//             <TrackVisibility>
//               {({ isVisible }) =>
//               <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
//                 <h2>Projects</h2>
//                 <p>Projects i have worked on so far</p>
//                 <Tab.Container id="projects-tabs" defaultActiveKey="first">
//                   <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
//                     <Nav.Item>
//                       <Nav.Link eventKey="first">Tab 1</Nav.Link>
//                     </Nav.Item>
//                     {/* <Nav.Item> */}
//                       {/* <Nav.Link eventKey="second">Tab 2</Nav.Link> */}
//                     {/* </Nav.Item> */}
//                     {/* <Nav.Item> */}
//                       {/* <Nav.Link eventKey="third">Tab 3</Nav.Link> */}
//                     {/* </Nav.Item> */}
//                   </Nav>
//                   <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
//                     <Tab.Pane eventKey="first">
//                       <Row>
//                         {
//                           projects.map((project, index) => {
//                             return (
//                               <ProjectCard
//                                 key={index}
//                                 {...project}
//                                 />
//                             )
//                           })
//                         }
//                       </Row>
//                     </Tab.Pane>
//                     {/* <Tab.Pane eventKey="section">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane>
//                     <Tab.Pane eventKey="third">
//                       <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
//                     </Tab.Pane> */}
//                   </Tab.Content>
//                 </Tab.Container>
//               </div>}
//             </TrackVisibility>
//           </Col>
//         </Row>
//       </Container>
//       <img className="background-image-right" src={colorSharp2}></img>
//     </section>
//   )
// }
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import Output1 from "../assets/img/Output1.png";
import download from "../assets/img/download.png";
import robot from "../assets/img/robot.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Data science project",
      description: "Custard disease detection using CNN",
      imgUrl: Output1,
    },
    {
      title: "Gym management system",
      description: "Developed using HTML, CSS and connected to database using PHP",
      imgUrl: download,
    },
    {
      title: "Robot app",
      description: "A simple React app showing different types of robots",
      imgUrl: robot,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Projects</h2>
                  <p>Projects I have worked on so far</p>
                  <Row>
                    {projects.map((project, index) => (
                      <ProjectCard
                        key={index}
                        {...project}
                      />
                    ))}
                  </Row>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="Background design" />
    </section>
  );
};
