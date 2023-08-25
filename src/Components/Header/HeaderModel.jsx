const HeaderModel = ({ img }) => {
  return (
    <div className="relative">
      <img
        className="max-h-[550px] w-full object-cover relative"
        src={img}
        alt="mainPhoto"
      />
    </div>
  );
};
export default HeaderModel;
