type PersonCardProps = {
    name: string;
    title: string;
    email: string;
    image: string;
    border: string;
  };
  
  const PersonCard = ({ name, title, email, image, border }: PersonCardProps) => {
    return (
      <div   style={{ borderWidth: `${border}px` }} className={` border-white rounded-[28px]  bg-white max-w-[90vw] sm:max-w-[300px]`}>
        <div className="border border-black/35 rounded-[14px] bg-white p-4 sm:p-5">
          <img
            src={image}
            alt={name}
            className="w-full h-[180px] sm:h-[220px] object-cover rounded-[10px] mb-4"
            
          />
          <div className="text-center">
            <h3 className="k2d-bold text-lg sm:text-xl text-[#00579E]">{name}</h3>
            <p className="text-black/60 text-sm sm:text-base">{title}</p>
            <p className="text-black/50 text-sm sm:text-base mt-2">{email}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default PersonCard;
  