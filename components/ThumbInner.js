import React from 'react';

const ThumbInner = (item) => {
  return (
    <a className="overflow-hidden rounded-lg flex items-center justify-center w-full h-24 md:h-32" href="#">
      <img className="rounded-lg object-cover object-center w-full h-full" src={item.thumbnail} alt="" />
    </a>
  )
};

export default ThumbInner;