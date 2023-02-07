import React, { useState, useEffect, useContext } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "../styles/connectWallet.module.css";
import Images from "../Images";
//IMPORT FROM SMART CONTRACT
//import { NFTMarketplaceContext } from "../Context/NFTMarketplaceContext";
const connectWallet = () => {
  const [activeBtn, setActiveBtn] = useState(1);
 // const { currentAccount, connectWallet } = useContext(NFTMarketplaceContext);
 function walletConnect(){
   alert("wallet connected!");
 }
  const providerArray = [
    {
      provider: Images.provider1,
      name: "Metamask",
    },
    {
      provider: Images.provider2,
      name: "walletConnect",
    },
    {
      provider: Images.provider3,
      name: "walletlink",
    },
    {
      provider: Images.provider4,
      name: "Formatic",
    },
  ];
  return (
    <div className={Style.connectWallet}>
      <div className={Style.connectWallet_box}>
        <h1>Connect your wallet</h1>
        <p className={Style.connectWallet_box_para}>
          Connect with one of our available wallet providers or create a new one
        </p>

        <div className={Style.connectWallet_box_provider}>
          {providerArray.map((el, i) => (
            <div
              className={`${Style.connectWallet_box_provider_item} ${
                activeBtn == i + 1 ? Style.active : ""
              }`}
              key={i + 1}
              onClick={() => (setActiveBtn(i + 1), walletConnect())}
            >
              <Image
                src={el.provider}
                alt={el.provider}
                width={50}
                height={50}
                className={Style.connectWallet_box_provider_item_img}
              />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default connectWallet;
