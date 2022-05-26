import React from "react";

const CustomDot = ({ carouselItems, onClick, ...rest }) => {
  const {
    onMove,
    index,
    active,
    carouselState: { currentSlide, deviceType }
  } = rest;
  // onMove means if dragging or swiping in progress.
  // active is provided by this lib for checking if the item is active or not.
  return (
    <img src={ React.Children.toArray(carouselItems)[index] } className={active ? "active" : "inactive"} onClick={() => onClick()} />
  );
};

export default CustomDot;