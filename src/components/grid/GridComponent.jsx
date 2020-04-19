import React from "react";
import "./GridComponent.css";
import { Row, Column } from "../layouts/grid/Grid";
export const GridComponent = () => {
  return (
    <>
      <div className=".GridComponent">
        <Row>
          <Column className="column-50">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ab
              tenetur quos repellat. Hic deleniti beatae molestiae quidem
              perferendis natus dolores ea recusandae provident! Asperiores
              doloremque in corporis porro eveniet.
            </p>
          </Column>
          <Column className="column-50">
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, voluptatem! Voluptate ipsam minima earum maiores
              totam pariatur sed temporibus quis tenetur dolorum at optio, natus
              fugiat atque alias unde cumque.
            </p>
          </Column>
        </Row>
      </div>
      <div className="GridComponent">
      <Row>
          <Column>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ab
              tenetur quos repellat. Hic deleniti beatae molestiae quidem
              perferendis natus dolores ea recusandae provident! Asperiores
              doloremque in corporis porro eveniet.
            </p>
          </Column>
          <Column>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, voluptatem! Voluptate ipsam minima earum maiores
              totam pariatur sed temporibus quis tenetur dolorum at optio, natus
              fugiat atque alias unde cumque.
            </p>
          </Column>
          </Row>
      </div>
      <div className="GridComponent">
      <Row>
          <Column>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ab
              tenetur quos repellat. Hic deleniti beatae molestiae quidem
              perferendis natus dolores ea recusandae provident! Asperiores
              doloremque in corporis porro eveniet.
            </p>
          </Column>
          <Column>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, voluptatem! Voluptate ipsam minima earum maiores
              totam pariatur sed temporibus quis tenetur dolorum at optio, natus
              fugiat atque alias unde cumque.
            </p>
          </Column>
          </Row>
      </div>
      <div className="GridComponent">
       <Row>
          <Column>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. In ab
              tenetur quos repellat. Hic deleniti beatae molestiae quidem
              perferendis natus dolores ea recusandae provident! Asperiores
              doloremque in corporis porro eveniet.
            </p>
          </Column>
          <Column>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequuntur, voluptatem! Voluptate ipsam minima earum maiores
              totam pariatur sed temporibus quis tenetur dolorum at optio, natus
              fugiat atque alias unde cumque.
            </p>
          </Column>
          </Row>
      </div>
    </>
  );
};
