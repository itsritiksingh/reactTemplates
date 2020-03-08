import React from "react";
import "./GridComponent.css";
import { Grid } from "../layouts/grid/Grid";
export const GridComponent = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <Grid type="col-sm-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ab
              tenetur quos repellat. Hic deleniti beatae molestiae quidem
              perferendis natus dolores ea recusandae provident! Asperiores
              doloremque in corporis porro eveniet.
            </p>
          </Grid>
          <Grid type="col-sm-2">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, voluptatem! Voluptate ipsam minima earum maiores
              totam pariatur sed temporibus quis tenetur dolorum at optio, natus
              fugiat atque alias unde cumque.
            </p>
          </Grid>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Grid type="col-md-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ab
              tenetur quos repellat. Hic deleniti beatae molestiae quidem
              perferendis natus dolores ea recusandae provident! Asperiores
              doloremque in corporis porro eveniet.
            </p>
          </Grid>
          <Grid type="col-md-2">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, voluptatem! Voluptate ipsam minima earum maiores
              totam pariatur sed temporibus quis tenetur dolorum at optio, natus
              fugiat atque alias unde cumque.
            </p>
          </Grid>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Grid type="col-xl-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ab
              tenetur quos repellat. Hic deleniti beatae molestiae quidem
              perferendis natus dolores ea recusandae provident! Asperiores
              doloremque in corporis porro eveniet.
            </p>
          </Grid>
          <Grid type="col-xl-2">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, voluptatem! Voluptate ipsam minima earum maiores
              totam pariatur sed temporibus quis tenetur dolorum at optio, natus
              fugiat atque alias unde cumque.
            </p>
          </Grid>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Grid type="col-lg-2">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ab
              tenetur quos repellat. Hic deleniti beatae molestiae quidem
              perferendis natus dolores ea recusandae provident! Asperiores
              doloremque in corporis porro eveniet.
            </p>
          </Grid>
          <Grid type="col-lg-2">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, voluptatem! Voluptate ipsam minima earum maiores
              totam pariatur sed temporibus quis tenetur dolorum at optio, natus
              fugiat atque alias unde cumque.
            </p>
          </Grid>
        </div>
      </div>
    </>
  );
};
