import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCaroselData";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/mensShoesPage1";
import { mens_kurta } from "../Data/Men/men_kurta";
import { lengha_page1 } from "../Data/Women/LenghaCholi";
import HomeProductSection4 from "../customer/Components/Home/HomeProductSection/HomeProductSection4";
import HomeProductSection3 from "../customer/Components/Home/HomeProductSection/HomeProductSection3";
import HomeProductSection2 from "../customer/Components/Home/HomeProductSection/HomeProductSection2";
import HomeProductSection6 from "../customer/Components/Home/HomeProductSection/HomeProductSection6";
import HomeProductSection5 from "../customer/Components/Home/HomeProductSection/HomeProductSection5";
import HomeProductSection7 from "../customer/Components/Home/HomeProductSection/HomeProductSection7";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel images={homeCarouselData} />

      <div className="space-y-10 py-20">
      <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
        <HomeProductSection2 data={mensShoesPage1} section={"Men's Shoes"} />
        <HomeProductSection3 data={lengha_page1} section={"Lengha Choli"} />
        <HomeProductSection4 data={sareePage1} section={"Saree"} />
        <HomeProductSection5 data={dressPage1} section={"Dress"} />
        <HomeProductSection6 data={gounsPage1} section={"Women's Gouns"} />
        <HomeProductSection7 data={kurtaPage1} section={"Women's Kurtas"} />
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>

      
    </div>
  );
};

export default Homepage;
