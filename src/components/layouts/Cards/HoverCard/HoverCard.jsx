import React, { useEffect } from "react";
import "./HoverCard.css";
export const HoverCard = props => {
  useEffect(() => {
    var hoverCard = document.querySelectorAll(".hoverCard");

    if (props.expand) {
      var _expand = document.querySelector(".hovercard.expand");
      _expand.addEventListener(
        "mouseover",
        () => (_expand.style.transform = "scale(1.1,1.1)")
      );
      _expand.addEventListener(
        "mouseout",
        () => (_expand.style.transform = "scale(1,1)")
      );
    } else if (props.translateUp) {
      
      var _translateUp = document.querySelector(".hovercard.translateUp");
      _translateUp.addEventListener(
        "mouseover",
        () => (_translateUp.style.transform = "translateY(8px)")
      );

      _translateUp.addEventListener(
        "mouseout",
        () => (_translateUp.style.transform = "translateY(-8px)")
      );

    } else if (props.translateDown) {

      var _translateDown = document.querySelector(".hovercard.translateDown");
      _translateDown.addEventListener(
        "mouseover",
        () => (_translateDown.style.transform = "translateY(-8px)")
      );
      _translateDown.addEventListener(
        "mouseout",
        () => (_translateDown.style.transform = "translateY(+8px)")
      );
    

    } else if(props.shrink){

      var _shrink = document.querySelector(".hovercard.shrink");
      _shrink.addEventListener(
        "mouseover",
        () => (_shrink.style.transform = "scale(0.9,0.9)")
      );
      _shrink.addEventListener(
        "mouseout",
        () => (_shrink.style.transform = "scale(1,1)")
      );

    }

    return hoverCard.forEach(val =>
      val.removeEventListener("mouseover", () => {
        val.removeEventListener("mouseout");
      })
    );
  }, [props]);

  return (
    <div
      className={
        props.expand
          ? "hovercard expand"
          : props.translateUp
          ? "hovercard translateUp"
          : props.translateDown
          ? "hovercard translateDown"
          : "hovercard shrink"
      }
      style={props.style}
    >
      {props.children}
    </div>
  );
};
