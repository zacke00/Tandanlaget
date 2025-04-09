import { Link } from "react-router-dom";

type ButtonTwoProps = {
  to: string;
  label: string;
};

const Button_Two = ({ to, label }: ButtonTwoProps) => {
  return (
    <Link to={to}>
      <button
        className="w-[160px] h-[55px] bg-[#5d4fff] text-white px-6 py-3 rounded-[21px] shadow-md transition hover:opacity-90"
      >
        <span className="text-center font-medium">{label}</span>
      </button>
    </Link>
  );
};

export default Button_Two;
