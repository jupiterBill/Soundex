import React from "react";
import Image from "next/image";
import { Title } from "../elements-index";
import { BsCircleFill } from "react-icons/bs";

//INTERNAL IMPORT
import Style from "./Category.module.css";
import Images from "../../Images";

const Category = () => {
  const CategoryArray = [
    {
      images: Images.soundex1,
      name: "Pop",
    },
    {
      images: Images.soundexlogo,
      name: "Rock",
    },
    {
      images: Images.soundex2,
      name: "R&B",
    },
    {
      images: Images.soundex4,
      name: "Reggae",
    }
    
  ];
  return (
    
    <div className={Style.box_category}>
        <Title heading="Browse By category" paragraph= "explore our different categories"/>
      <div className={Style.category}>
        {CategoryArray.map((el, i) => (
          <div className={Style.category_box} key={i + 1}>
            <Image
              src={el.images}
              className={Style.category_box_img}
              alt="Background image"
            />

            <div className={Style.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={Style.category_box_title_info}>
                <h4>{el.name}</h4>
                <small>{i + 1}995 NFTS</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
