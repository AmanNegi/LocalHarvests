import NavBar from "../components/NavBar";
import about_banner from "../assets/about_banner.png";
import home_banner from "../assets/home_banner.png";

var description =
  "Local Harvests is an online platform that connects farmers who produce grains and millets with customers who want to buy them directly. By eliminating intermediaries and providing a direct connection between farmers and customers, Local Harvests makes it easier for farmers to sell their products and for customers to find fresh and high-quality grains and millets at lower prices. The platform provides secure payment options, shipping services, and customer service to ensure safe and efficient transactions. With Local Harvests, farmers can expand their customer base and customers can support sustainable farming practices while enjoying a wider variety of products.";

function About() {
  return (
    <>
      <NavBar />
      <main className="mt-[8vh]">
        <section className="  bg-slate-500">
          <img
            className="h-[100%] w-[100%] object-cover"
            src={about_banner}
            alt=""
          />
        </section>

        <section className="p-16">
          <h1 className="text-3xl font-bold mb-5 tracking-wide text-darkColor">
            About Us
          </h1>
          <p className="leading-relaxed text-semiDarkColor">{description}</p>
        </section>
      </main>

      <img className="px-16 py-8" src={home_banner} alt="" />
    </>
  );
}

export default About;
