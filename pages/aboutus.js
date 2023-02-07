import React from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/aboutus.module.css";
import Images from "../Images";

const aboutus = () => {
  const founderArray = [
    {
      name: "Wale Oladeinde",
      position: "Founder and Chief Executive",
      images: Images.wally,
    },
    {
      name: "Edwin Anajemba",
      position: "Co-founder and Chief Executive",
      images: Images.soundexlogo,
    },
    {
      name: "olalekan solomon",
      position: "Co-founder, Chairman",
      images: Images.soundex3,
    },
    {
      name: "zeno ezeanakwe",
      position: "Co-Founder, Chief Strategy Officer",
      images: Images.soundex2,
    },
  ];

  const factsArray = [
    {
      title: "10,000",
      info: "Articles have been public around the world (as of Sept. 30, 2021)",
    },
    {
      title: "100,000",
      info: "Registered users account (as of Sept. 30, 2021)",
    },
    {
      title: "220+",
      info: "Countries and regions have our presence (as of Sept. 30, 2021",
    },
  ];
  return (
    <div className={Style.aboutus}>
      <div className={Style.aboutus_box}>
        <div className={Style.aboutus_box_hero}>
          <div className={Style.aboutus_box_hero_left}>
            <h1>👋 About Us.</h1>
            <p>
              We’re impartial and independent, and every day we create
              distinctive, world-class programmes and content which inform,
              educate and entertain millions of people in the around the world.
            </p>
          </div>
          <div className={Style.aboutus_box_hero_right}>
            <Image src={Images.soundexlogo} />
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>⛱ Founder</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.aboutus_box_founder}>
          <div className={Style.aboutus_box_founder_box}>
            {founderArray.map((el, i) => (
              <div className={Style.aboutus_box_founder_box_img}>
                <Image
                  src={el.images}
                  alt={el.name}
                  width={500}
                  height={500}
                  className={Style.aboutus_box_founder_box_img_img}
                />
                <h3>{el.name}</h3>
                <p>{el.position}</p>
              </div>
            ))}
          </div>
        </div>

        <div className={Style.aboutus_box_title}>
          <h2>🚀 Fast Facts</h2>
          <p>
            We’re impartial and independent, and every day we create
            distinctive, world-class programmes and content
          </p>
        </div>

        <div className={Style.aboutus_box_facts}>
          <div className={Style.aboutus_box_facts_box}>
            {factsArray.map((el, i) => (
              <div className={Style.aboutus_box_facts_box_info}>
                <h3>{el.title}</h3>
                <p>{el.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutus;
