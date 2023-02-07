import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./LikeProfile.module.css";
import Images from "../../Images";
const LikeProfile = () => {
  const imageArray = [Images.soundex1, Images.soundex2, Images.soundex3, Images.soundexlogo];
  return (
    <div className={Style.like}>
      {imageArray.map((el, i) => (
        <div className={Style.like_box} key={i + 1}>
          
        </div>
      ))}
    </div>
  );
};

export default LikeProfile;