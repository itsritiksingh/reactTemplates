import React from "react";
import "./Cards.css";
import { Row,Column } from "../layouts/grid/Grid";
import { CascadingCard } from "../layouts/CascadingCard/CascadingCard";
import { TestimonialCard } from "../layouts/Cards/TestimonialCard/TestimonialCard";
import { HoverCard } from "../layouts/Cards/HoverCard/HoverCard";
import { Container } from "../layouts/Miscellenous/containers/Container";
 
export const Cards = () => {
  return (
    <>
      <div className="Cards">
        <div className="container">
          <h1>Cascading Card</h1>
        <Row>
           <Column>
              <CascadingCard
                content={{
                  image:
                    "https://avatars0.githubusercontent.com/u/42720388?v=4",
                  imgSize: "overflow",
                  mainHeading: "Nanda Kaml",
                  subHeading: "Frontend Dev",
                  subHeadingColor: "black",
                  text:
                    "I am Kamal Nanda based in Delhi. I am persuing BCA from Vivekananda Institute of Professional Studies. I strive to learn new technologies and work on improving my skillset."
                }}
              />
          </Column>
          <Column>
              <CascadingCard
                content={{
                  image:
                    "https://avatars0.githubusercontent.com/u/42720388?v=4",
                  imgSize: "fit",
                  mainHeading: "Kamal Nanda",
                  subHeading: "Backend Dev",
                  mainHeadingColor: "#da4243",
                  subHeadingColor: "black",
                  text:
                    "I am Kamal Nanda based in Delhi. I am persuing BCA from Vivekananda Institute of Professional Studies. I strive to learn new technologies and work on improving my skillset."
                }}
              />
           </Column>
           <Column>
              <CascadingCard
                content={{
                  image:
                    "https://avatars0.githubusercontent.com/u/42720388?v=4",
                  imgSize: "underflow",
                  mainHeading: "Kamal Singh",
                  subHeading: "Full stack Dev",
                  textColor: "gray",
                  text:
                    "I am Kamal Nanda based in Delhi. I am persuing BCA from Vivekananda Institute of Professional Studies. I strive to learn new technologies and work on improving my skillset."
                }}
              />
           </Column>
          </Row>
          <br />
          <h1>Testimonial Card</h1>
           </div>
         </div>
         <Row className="row-center">
            {/* <Grid type="col-sm-3">
              <TestimonialCard />
            </Grid>
            <Grid type="col-sm-3">
              <TestimonialCard />
            </Grid>
            <Grid type="col-sm-3">
              <TestimonialCard />
            </Grid> */}
           <Column>
              <TestimonialCard
                options={{
                  src: "https://img.icons8.com/color/96/000000/avatar.png",
                  alt: "avatar",
                  name: "Hritik Gupta",
                  text:
                    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Faceremaxime aut ducimus praesentium aspernatur maiores minus laborum eaqui consectetur illum, dolorum"
                }}
              />
           </Column>
           <Column>
              <TestimonialCard
                options={{
                  src: "https://img.icons8.com/color/96/000000/morty-smith.png",
                  alt: "avatar",
                  name: "Morty Smith",
                  text:
                    " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Faceremaxime aut ducimus praesentium aspernatur maiores minus laborum eaqui consectetur illum, dolorum"
                }}
              />
           </Column>
           </Row>

      <Container style={{padding: 0,display: 'flex',justifyContent: 'center'}}>
      <Column>
        {/* props : expand,shrink,translateUp,translateDown optional: style */}
        <HoverCard shrink>
       <h1>Hello</h1>
       <h4>work</h4>
       <h5>work</h5>
       <h6>work</h6>
      </HoverCard>
      </Column>

      <Column>

        {/* props : expand,shrink,translateUp,translateDown optional: style */}
        <HoverCard shrink>
       <h1>Hello</h1>
       <h4>work</h4>
       <h5>work</h5>
       <h6>work</h6>
      </HoverCard>
      </Column>
      </Container>
    </>
  );
};
