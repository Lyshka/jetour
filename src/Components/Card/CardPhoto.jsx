import { useState } from "react";

const CardPhoto = ({ src, setSetpht }) => {
  const [selected, setSelected] = useState(false);

  return (
    <div
      className="relative"
      onClick={() => {
        setSelected((prv) => !prv);
        setSetpht(src);
      }}
    >
      <img
        className={`object-cover min-w-[200px] max-w-[200px] border-2 min-h-[200px] max-h-[200px] ${
          selected
            ? "border-gray-500 shadow-2xl border-4"
            : "border-gray-300 border-2"
        }`}
        src={`http://localhost:3000/${src}`}
        alt="mainph"
      />
    </div>
  );
};
export default CardPhoto;
