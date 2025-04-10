import { Link } from "react-router-dom";

type ButtonProps = {
  active: boolean;
  to: string;
  label: string;
  className?: string;
};

const Button_Three = ({ to, label, className }: ButtonProps) => {
  return (
    <Link to={to}>
      <button
        className={`${className} w-[160px] h-[55px] rounded-[21px] flex items-center justify-center bg-[#5d4fff]/9 text-[#5d4fff] shadow-[0px_0px_10px_rgba(93,79,255,0.25)] border`}
      >
        <span className="text-center font-medium">{label}</span>
      </button>
    </Link>
  );
};

export default Button_Three;
