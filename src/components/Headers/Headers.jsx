import React from "react";
import "./Headers.css";
import { HeaderWithRightNav } from "../layouts/HeaderWithRightNav/HeaderWithRightNav";

export const Headers = () => {
  return (
    <>
      <HeaderWithRightNav
        link={{
          link: { link: "/" },
          Link1: { link: "/" },
          Link2: { link: "/" },
          Link3: { link: "/" },
          Link4: { link: "/" },
          Link5: { link: "/" }
        }}
      />
    </>
  );
};
