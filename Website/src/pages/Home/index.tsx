import Button_Two from "../../components/Buttons/Button_Two";
import Button_Three from "../../components/Buttons/Button_Three";
import AutoCarousel from "../../components/AutoCarousel";
import ReviewsCarousel from "../../components/ReviewsCarousel";
import InfoSection from "../../components/Infosection";

const Home = () => {
  return (
    <>
  <section className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh] bg-white">
        {/* Left Side */}
        <div className="relative flex flex-col justify-center items-center md:items-end p-6 md:p-8 bg-[url(/Background_blueShy.svg)] bg-no-repeat bg-contain md:bg-auto bg-[position:-50px_center] md:bg-[position:-150px_center]">
          <div className="max-w-md text-center md:text-right -translate-y-1/20">
            <h1 className="k2d-bold text-4xl md:text-7xl mb-4 text-black">
              Välkommen till
            </h1>
            <div className="w-full flex justify-center md:justify-end mb-4">
              <img src="/Tandanlaget.svg" alt="Tandanlaget" className="w-36 md:w-80 h-auto object-contain" />
            </div>
            <p className="text-black/50 text-lg mb-6 min-w-75">
              Där modern vård möter en lugn miljö. <br/> Ditt leende är vårt fokus.
            </p>

            <div className="flex justify-center md:justify-end gap-4 flex-wrap z-50">
              <Button_Two to="/contact" label="Kontakta oss"/>
              <Button_Three active={false} to="/info" label="Läs mer" />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="bg-[url('/Docktor_Visit.svg')] bg-no-repeat bg-center bg-fit"></div>
      </section>

      {/* Background Circles */}
      <section className="h-auto bg-[url('/background_Circles.svg')] bg-repeat bg-fit">
        {/* Carousel */}
        <section className="px-4 py-12">
          <h2 className="text-3xl font-bold text-center mb-6">Varför det är viktigt</h2>
          <AutoCarousel />
        </section>

        {/* Info Section */}
        <section>
          <InfoSection />
        </section>

        {/* Reviews Section */}
        <section className="">
          <h2 className="text-4xl font-bold text-center pt-16 mb-6">
            Vad <span className="text-[#5d4fff]">patienterna</span> säger
          </h2>
          <ReviewsCarousel />
        </section>
      </section>
    </>
  );
};

export default Home;
