import NavBar from "../components/NavBar";
import ShopItem from "../components/ShopItem";
import { fruitItems, shopItems } from "../data/data";
import veggies_banner from "../assets/veggies_banner.png";
import fruits_banner from "../assets/fruits_banner.png";

import parallax_bg from "../assets/parallax_bg.png";
import Footer from "../components/Footer";
import { useEffect } from "react";

function Shop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="">
        <NavBar />
        <div className="h-[8vh]"></div>

        <img src={veggies_banner} alt="" />
        <main className="pt-[5vh] pb-[12vh] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 md:mx-16 ">
          {shopItems.map((e, i) => {
            return <ShopItem item={e} key={i} />;
          })}
        </main>

        <img src={fruits_banner} alt="" />
        <main className="pt-[5vh] pb-[12vh] overflow-hidden grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mx-5 md:mx-16 ">
          {fruitItems.map((e, i) => {
            return <ShopItem item={e} key={i} />;
          })}
        </main>

        <section
          className="bg-cover bg-right bg-fixed relative"
          style={{
            backgroundImage: `url(${parallax_bg})`,
          }}
        >
          {/* <div className="overlay absolute inset-0 bg-black opacity-50"></div> */}

          <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
            <h2 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold mb-8 relative">
              More Categories
              <br />
              Yet to come.
            </h2>
            {/* <Button text="Shop Now" /> */}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default Shop;
