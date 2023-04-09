import landing_bg from "../assets/landing_bg.png";
import local_millet from "../assets/local_millet.jpg";
import explore_image from "../assets/explore.png";

import Button from "../components/Button";

import cabbage from "../assets/items/cabbage.png";
import cabbage2 from "../assets/items/cabbage2.png";
import brocolli from "../assets/items/brocolli.png";
import tomato from "../assets/items/tomato.png";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { motion } from "framer-motion";

const gridItems = [
  { name: "Cabbage", image: cabbage },
  { name: "Brocolli", image: brocolli },
  { name: "Tomato", image: tomato },
  { name: "Cabbage", image: cabbage2 },
];

const galleryImages = [
  local_millet,
  local_millet,
  local_millet,
  local_millet,
  local_millet,
  local_millet,
];

const data = [
  { name: "Vocal for Local", icon: "fa-solid fa-store" },
  { name: "Support Local Farmers", icon: "fa-solid fa-trowel" },
  { name: "Natural and Organic", icon: "fa-solid fa-leaf" },
];

const features = [
  {
    title: "Product Quality",
    description:
      "Farmers can directly sell their products to customers, ensuring that the products are of high quality and fresh",
    icon: "fa-solid fa-award",
  },
  {
    title: "Cost Efficient",
    description:
      "Farmers can directly sell their products to customers, ensuring that the products are of high quality and fresh",
    icon: "fa-solid fa-coins",
  },
  {
    title: "Transparency",
    description:
      "Farmers can directly sell their products to customers, ensuring that the products are of high quality and fresh",
    icon: "fa-regular fa-eye",
  },
  {
    title: "Product Variety",
    description:
      "Farmers can directly sell their products to customers, ensuring that the products are of high quality and fresh",
    icon: "fa-solid fa-list-check",
  },
];

function HomePage() {
  return (
    <>
      <NavBar />
      <main className="mt-[8vh] w-[100%] overflow-hidden snap snap-y snap-mandatory">
        <TopSection />
        <OurMottoSection />
        <section className="mx-8 md:mx-28 ">
          <div className=" flex flex-col md:flex-row  ">
            <motion.div
              initial={{ x: -100 }}
              whileInView={{ x: 0 }}
              className="w-[100%] p-5 md:w-[30%] my-5 flex flex-col justify-center items-center bg-gradient-to-b from-green-300 to-green-200"
            >
              <h1 className="text-4xl font-bold text-green-800">
                Our Features
              </h1>
            </motion.div>
            <div className="w-[100%] md:w-[70%] grid grid-cols-1 md:grid-cols-2 gap-4 md:m-5">
              {features.map((e, i) => {
                return (
                  <motion.div
                    transition={{ delay: 0.25, duration: 1 }}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    key={i}
                    className="p-8 bg-green-100 h-[100%] w-[100%] flex flex-col justify-evenly rounded-lg"
                  >
                    <div className="bg-green-400 rounded-full h-[75px] w-[75px] flex justify-center items-center">
                      <i className={`${e.icon} text-4xl text-white`}></i>
                    </div>

                    <h1 className="text-2xl font-bold">{e.title}</h1>
                    <p className="text-gray-600">{e.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
        <OurGallerySection /> <ExploreProducts />
        <Footer />
      </main>
    </>
  );
}

function TopSection() {
  return (
    <section className="  relative h-[92vh] w-[100%] bg-slate-200">
      <img
        src={landing_bg}
        alt=""
        className="absolute inset-0 h-[100%] w-[100%] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#00000065] to-[#000000ac]"></div>
      <div className="absolute top-[25vh] left-5 bg-opacity-50 p-10 ">
        <h1 className="font-bold tracking-wide spacing text-5xl text-white">
          Fresh & Natural
          <br />
          Local Products
        </h1>
        <h1 className="text-md text-white mt-5">
          Support Local Farmers and Get Fresh, High-Quality Products
        </h1>

        <div className="flex gap-4 mt-5">
          <Button text="Learn More" />
          <Button text="Explore Products" />
        </div>
      </div>

      {/* [Headline in bold font]: Support Local Farmers and Get Fresh, High-Quality Products

[Subheadline]: Welcome to [Your Website Name], where you can browse and purchase products directly from local farmers in your area.

[Body text]: Our mission is to empower local farmers and promote sustainable agriculture practices by providing a platform where they can list their products at their own prices. By buying directly from local farmers, you can enjoy fresh, high-quality products while supporting your community.

[Call to action button in bold font]: Browse Products Now */}
    </section>
  );
}

function OurMottoSection() {
  return (
    <motion.section
      transition={{ duration: 1.25 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className=""
    >
      <div className=" my-2 md:my-10 mx-2 md:mx-5 p-2 md:p-10 border-dotted border-[2px] border-slate-200">
        <h1 className="pt-4 text-4xl font-bold text-center">Our Motto</h1>
        <div className="flex flex-col md:flex-row lg:flex-row p-3 md:p-8 gap-2 md:gap-10 lg:gap-10">
          {data.map((e) => {
            return (
              <motion.div
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                key={e.name}
                className="flex flex-row  flex-1 border-[2px] border-slate-200 p-[8px] rounded-lg text-center mb-1  hover:bg-green-500 hover:text-white hover:border-white hover:border-opacity-20"
              >
                <div className="flex flex-1 border-dashed  justify-center items-center border-[2px] border-slate-200 px-3 py-2 rounded-lg hover:border-white hover:border-opacity-30">
                  <i
                    className={
                      "text-4xl pr-2 hover:text-white opacity-60 " + e.icon
                    }
                  />
                  <p className="text-lg">{e.name}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

function ExploreProducts() {
  return (
    <section>
      <div>
        <div className=" flex flex-col  md:flex-row lg:flex-row justify-center my-10 mx:10 md:mx-28">
          <motion.img
            transition={{ duration: 0.5 }}
            initial={{ y: 100 }}
            whileInView={{ y: 0 }}
            className="w-[100%] mb-8 md:mb-0  md:w-[40%] object-cover"
            src={explore_image}
            alt=""
          />
          <motion.div
            transition={{ duration: 0.5 }}
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            className="w-[100%] md:w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5"
          >
            {gridItems.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex h-[35vh] flex-col items-center justify-center"
                >
                  <div className="group h-[75%] w-[75%] relative">
                    <img
                      key={e.image}
                      className="bg-slate-200 h-[100%] w-[100%] object-contain px-2 py-5 group-hover:opacity-20"
                      src={e.image}
                      alt=""
                    />

                    <div className="bg-black m-2 bg-opacity-10 hidden group-hover:flex justify-center items-center absolute inset-0 rounded-md ">
                      <button className="bg-green-500 text-white px-5 py-[2vh] rounded-md">
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                  <div className="flex-1"></div>
                  <h1 className="text-lg">{e.name}</h1>
                  <h2 className="font-bold">$80.0</h2>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function OurGallerySection() {
  return (
    <section className="bg-slate-200 border-t-[1px] text-gray-800 mt-10">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-col text-center w-full mb-2">
          <h1 className="text-3xl lg:text-4xl font-bold ">Our Gallery</h1>
        </div>
        <div className="flex flex-wrap ">
          {galleryImages.map((e, i) => {
            return (
              <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className=" w-full h-full object-cover object-center"
                    src={e}
                  />
                  <div className="px-8 py-10 absolute inset-0 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                      THE SUBTITLE
                    </h2>
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                      Shooting Stars
                    </h1>
                    <p className="leading-relaxed">
                      Photo booth fam kinfolk cold-pressed sriracha leggings
                      jianbing microdosing tousled waistcoat.
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomePage;
