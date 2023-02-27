import React from "react";
// import featureImg from "../../../public/images/featureBanners/img-1.png";

const Card = ({ image, title, details, link }) => {
  return (
    <div
      className="relative h-[130vw] lg:h-[40vw]  my-7 lg:my-0 lg:w-[28vw] rounded-[20px] flex flex-col justify-end text-[#100000] overflow-hidden shadow-xl pl-10 lg:pl-12 py-4 pb-8 group cursor-pointer"
      style={{
        background: `url(images/featureBanners/${image})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="bg-white h-[45%] lg:h-1/2 rounded-[20px] rotate-[16deg] absolute bottom-[-18vw] lg:bottom-[-10vw] group-hover:lg:bottom-[-4vw] left-0 w-full lg:w-[120%] ease duration-300 border-t-[8px] border-[red] group-hover:!border-t-[12px]"></div>

      <div className="z-50 ease duration-300 absolute bottom-[5vw] lg:bottom-[-4vw] group-hover:bottom-[2vw]">
        <picture>
          <img
            src={"images/featureLogo.svg"}
            className={"mb-1 lg:mb-2 w-1/6"}
            loading="lazy"
          />
        </picture>
        <a href={link} className="text-xl lg:text-3xl font-bold">
          {title}
        </a>
        <p className="lg:text-lg lg:mt-1">{details}</p>
        <a
          href={link}
          className="bg-primary hover:bg-[#a91633] py-1.5 lg:py-2.5 px-20 rounded-[16px] font-bold lg:text-xl text-white mt-2 lg:mt-5 block ease duration-300 "
        >
          View Details
        </a>
      </div>
    </div>
  );
};

export default Card;
