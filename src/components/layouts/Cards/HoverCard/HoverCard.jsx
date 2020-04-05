import React, { useEffect } from "react";
import "./HoverCard.css";
export const HoverCard = (props) => {
  useEffect(() => {
    var hoverCard = document.querySelectorAll(".hoverCard");

    if (props.expand) {
      var _expand = document.querySelectorAll(".hovercard.expand");
      _expand.forEach(val => {
        val.addEventListener(
          "mouseover",
          () => (val.style.transform = "scale(1.1,1.1)")
        );
        val.addEventListener(
          "mouseout",
          () => (val.style.transform = "scale(1,1)")
        );
      })
    } else if (props.translateUp) {
      var _translateUp = document.querySelectorAll(".hovercard.translateUp");
      _translateUp.forEach((val) => {
        val.addEventListener(
          "mouseover",
          () => (val.style.transform = "translateY(8px)")
        );

        val.addEventListener(
          "mouseout",
          () => (val.style.transform = "translateY(-8px)")
        );
      });
    } else if (props.translateDown) {
      var _translateDown = document.querySelectorAll(
        ".hovercard.translateDown"
      );
      _translateDown.forEach((val) => {
        val.addEventListener(
          "mouseover",
          () => (val.style.transform = "translateY(-8px)")
        );
        val.addEventListener(
          "mouseout",
          () => (val.style.transform = "translateY(+8px)")
        );
      });
    } else if (props.shrink) {
      var _shrink = document.querySelectorAll(".hovercard.shrink");
      _shrink.forEach((val) => {
        val.addEventListener(
          "mouseover",
          () => (val.style.transform = "scale(0.9,0.9)")
        );
        val.addEventListener(
          "mouseout",
          () => (val.style.transform = "scale(1,1)")
        );
      });
    }

    return hoverCard.forEach((val) =>
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
      style={{
        backgroundImage: props.backgroundImage,
        ...props.style,
      }}
    >
      {props.children}
    </div>
  );
};
