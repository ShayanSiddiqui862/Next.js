import { StaticImageData } from "next/image";
import React from "react";
import  Image  from "next/image";

interface CardProps {
  image : StaticImageData
  colorOptions? :string[]
}

const Card: React.FC<CardProps> = ({
 image,
 colorOptions = ["#23A6F0","#23856D","#E77C40","#252B42"]
}) => {
  return (
    <div className=" w-full sm1:w-full sm2:w-full sm3:w-full sm4:w-full sm5:w-full sm6:w-full sm7:w-full sm:w-full  h-auto bg-white shadow-lg rounded-lg overflow-hidden items-center">
      <Image className="w-full h-[427px] object-cover" src={image} alt="image.png"  />
      <div className="  pt-[25px] pr-[25px] pb-[35px] pl-[35px] items-center">
        <h2 className="text-lg font-semibold text-gray-800">Graphic Design</h2>
        <p className="text-sm text-gray-500">English Department</p>
        <div className="flex items-center mt-2">
          <span className="text-gray-400 line-through mr-2">$16.48</span>
          <span className="text-green-600 font-bold">$6.48</span>
        </div>
        <div className="flex items-center mt-4 space-x-2">
          {colorOptions.map((color, index) => (
            <span
              key={index}
              className="w-4 h-4 rounded-full"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
