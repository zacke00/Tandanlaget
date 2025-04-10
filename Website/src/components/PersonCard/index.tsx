type PersonCardProps = {
    name: string;
    adress: string;
    email: string;
    number: string;
    image: string;
    border: string;
  };
  
  const PersonCard = ({ name, adress, email, number,  image, border }: PersonCardProps) => {
    return (
      <div   style={{ borderWidth: `${border}px` }} className={` border-white rounded-[28px]  bg-white max-w-[90vw] sm:max-w-[350px]`}>
        <div className="border border-black/35 rounded-[14px] bg-white p-4 sm:p-3 ">
          <img
            src={image}
            alt={name}
            className="w-full h-[180px] sm:h-[220px] object-cover rounded-[10px] mb-4"
            
          />
          <div className="text-center">
            <h3 className="k2d-bold text-lg sm:text-xl text-[#00579E]">{name}</h3>
            <a 
                href={`https://www.google.com/maps/place/${adress.replace(/ /g, "+")}`}
                className="flex items-center justify-center mt-2 px-4 py-2 rounded-[21px] no-underline">
                <p className="text-black/60 text-sm sm:text-base">{adress}</p>
            </a>

            <a
              href={`tel:${number}`}
              className="flex items-center justify-center mt-2 px-4 py-2 rounded-[21px] no-underline">
                <p className="text-black/50 text-sm sm:text-base mt-2">{number}</p>
            </a>
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center mt-2 px-4 py-2 rounded-[21px] no-underline">
                <p className="text-black/50 text-sm sm:text-base mt-2">{email}</p>
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default PersonCard;
  