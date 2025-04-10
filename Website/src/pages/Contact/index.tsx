import PersonCard from "../../components/PersonCard";

const Contact = () => {
  return (
    <section className="w-full min-h-screen bg-white px-4 py-12">
      {/* Desktop layout: card over image */}
      <div className="relative hidden md:block max-w-[1400px] mx-auto">
        <img
          src="/Background_Landscape.png"
          alt="Decorative background"
          className="w-full max-h-160 object-contain min-h-[400px]"
        />

        <div className="absolute right-4 top-4/6 -translate-y-1/2">
          <PersonCard
            name="Tandanlaget"
            adress="Jönköpingsvägen 37,
            523 36 Ulricehamn"
            email="Tandanlaget@gmail.com"
            number="0321-132 50"
            image="/Tandanlaget_Maps.png"
            border={"20"}
          />
        </div>
      </div>

      {/* Mobile layout: stacked */}
      <div className="block md:hidden flex flex-col items-center max-w-[90%] mx-auto">
        <img
          src="/Background_Landscape.png"
          alt="Decorative background"
          className="w-full h-auto object-contain"
        />

        {/* Overlapping PersonCard */}
        <div className="-mt-1 z-2">
        <PersonCard
            name="Tandanlaget"
            adress="Jönköpingsvägen 37,
            523 36 Ulricehamn"
            email="Tandanlaget@gmail.com"
            number="0321-132 50"
            image="/Tandanlaget_Maps.png"
            border={"10"}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
