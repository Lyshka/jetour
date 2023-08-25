const Layout = ({ title, desc, classname }) => {
  return (
    <div className={`flex justify-center items-center ${classname}`}>
      <div className="p-5 lg:p-[90px] h-full flex flex-col gap-y-[35px] justify-start items-start">
        <h1 className="font-bold lg:text-[40px] text-2xl leading-8 lg:leading-[52px]">{title}</h1>

        <p
          className="leading-6 max-w-[1200px] h-full"
          dangerouslySetInnerHTML={desc}
        />
      </div>
    </div>
  );
};
export default Layout;
