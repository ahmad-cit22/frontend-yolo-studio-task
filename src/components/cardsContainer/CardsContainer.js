import React from "react";

const CardsContainer = ({ children }) => {
  return (
    <div>
      <div className={"lg:flex flex-wrap gap-x-5 gap-y-5 lg:gap-y-12 lg:w-[1200px] m-auto"}>
        {children}
      </div>
    </div>
  );
};

export default CardsContainer;
