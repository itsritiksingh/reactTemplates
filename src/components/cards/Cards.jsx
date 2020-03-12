import React from "react";
import "./Cards.css";
import { Grid } from "../layouts/grid/Grid";
import { CascadingCard } from "../layouts/Cards/CascadingCard/CascadingCard";
import { TestimonialCard } from "../layouts/Cards/Testimonial Card/TestimonialCard";
export const Cards = () => {
  return (
    <>
      <div className="Cards">
        <div className="container">
          <h1>Cascading Card</h1>
          <div className="row">
            <Grid type="col-sm-3">
              <CascadingCard
                content={{
                  image:
                    "https://avatars0.githubusercontent.com/u/42720388?v=4",
                  imgSize: "overflow",
                  mainHeading: "Kamal Nanda",
                  subHeading: "Frontend Dev",
                  subHeadingColor: "black",
                  text:
                    "I am Kamal Nanda based in Delhi. I am persuing BCA from Vivekananda Institute of Professional Studies. I strive to learn new technologies and work on improving my skillset."
                }}
              />
            </Grid>
            <Grid type="col-sm-3">
              <CascadingCard
                content={{
                  image:
                    "https://avatars0.githubusercontent.com/u/42720388?v=4",
                  imgSize: "fit",
                  mainHeading: "Kamal Nanda",
                  subHeading: "Frontend Dev",
                  mainHeadingColor: "#da4243",
                  subHeadingColor: "black",
                  text:
                    "I am Kamal Nanda based in Delhi. I am persuing BCA from Vivekananda Institute of Professional Studies. I strive to learn new technologies and work on improving my skillset."
                }}
              />
            </Grid>
            <Grid type="col-sm-3">
              <CascadingCard
                content={{
                  image:
                    "https://avatars0.githubusercontent.com/u/42720388?v=4",
                  imgSize: "underflow",
                  mainHeading: "Kamal Nanda",
                  subHeading: "Frontend Dev",
                  textColor: "gray",
                  text:
                    "I am Kamal Nanda based in Delhi. I am persuing BCA from Vivekananda Institute of Professional Studies. I strive to learn new technologies and work on improving my skillset."
                }}
              />
            </Grid>
          </div>
          <br />
          <h1>Testimonial Card</h1>
          <div className="row">
            {/* <Grid type="col-sm-3">
              <TestimonialCard />
            </Grid>
            <Grid type="col-sm-3">
              <TestimonialCard />
            </Grid>
            <Grid type="col-sm-3">
              <TestimonialCard />
            </Grid> */}
            <Grid type="col-sm-2">
            <TestimonialCard
              options={{
                src: "https://img.icons8.com/color/96/000000/avatar.png",
                alt: "avatar",
                name: "Hritik Gupta",
                text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Faceremaxime aut ducimus praesentium aspernatur maiores minus laborum eaqui consectetur illum, dolorum"
              }}
            />
            </Grid>
            <Grid type="col-sm-2">
            <TestimonialCard
              options={{
                src: "https://img.icons8.com/color/96/000000/morty-smith.png",
                alt: "avatar",
                name: "Morty Smith",
                text: " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Faceremaxime aut ducimus praesentium aspernatur maiores minus laborum eaqui consectetur illum, dolorum"
              }}
            />
            </Grid>
            
            
          </div>
        </div>
      </div>
    </>
  );
};
