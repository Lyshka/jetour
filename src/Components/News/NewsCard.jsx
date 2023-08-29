const NewsCard = ({ img, title }) => {
  return (
    <div className="flex group flex-col justify-start items-start">
      <img
        className="w-full h-full object-cover max-w-[395px] max-h-[260px] min-h-[260px]"
        src={img}
        alt="newspht"
      />

      <h3 className="font-bold leading-5 transition-all duration-300 group-hover:text-[#68a598] mt-5">
        {title}
      </h3>
    </div>
  );
};
export default NewsCard;
