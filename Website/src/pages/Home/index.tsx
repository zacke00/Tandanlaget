import Button_Two from "../../components/Buttons/Button_Two";
import Button_Three from "../../components/Buttons/Button_Three";
import AutoCarousel from "../../components/AutoCarousel";

const Home = () => {
  return (
    <>
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh] bg-white">
      {/* Left Side */}
      <div className="relative flex flex-col justify-center items-end p-8 bg-[url(/Background_blueShy.svg)] bg-no-repeat bg-fit bg-[position:-150px_center]">
        <div className="max-w-md text-right">
          <h1 className="k2d-bold text-4xl md:text-7xl mb-4 text-black">
            Welcome to
          </h1>
          <h1 className="k2d-bold text-4xl md:text-7xl mb-4 text-[#5d4fff]">
            Tandanlaget
          </h1>
          <p className="text-black/50 text-lg mb-6">
            Where modern care meets a calm environment. Your smile is our focus.
          </p>

          <div className="flex justify-end gap-4 flex-wrap">
            <Button_Two to="/contact" label="Contact Us" />

            <Button_Three active={false} to="/info" label="Learn More" />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="bg-[url('/Docktor_Visit.svg')] bg-no-repeat bg-center bg-fit"></div>
    </section>

    <section className="h-screen bg-[url('/background_Circles.svg')] bg-repeat bg-fit">
      <section className="px-4 py-12">
        <h2 className="text-3xl font-bold text-center mb-6">Why it matters</h2>
        <AutoCarousel />
      </section>
    </section>

    </>
  );
};

export default Home;
