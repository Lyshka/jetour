import TableCard from "./TableCard";

const names = [
  "ГАБАРИТЫ",
  "ВМЕСТИТЕЛЬНОСТЬ",
  "ДВИГАТЕЛЬ",
  "МАССА",
  "ДИНАМИКА",
  "ТОПЛИВНАЯ ЭКОНОМИЧНОСТЬ",
  "ТОРМОЗА",
  "ПОДВЕСКА",
  "ТЕПЛЫЕ ОПЦИИ",
  "БЕЗОПАСНОСТЬ",
  "ЭКСТЕРЬЕР",
  "КОМФОРТ",
  "ИНТЕРЬЕР",
  "МУЛЬТИМЕДИА И ТЕХНОЛОГИИ",
]

const TableCar = ({ info }) => {
  return (
    <div className="lg:mt-32 mt-20 mb-[60px] px-10 w-full h-full flex flex-col gap-y-10">
      {Object.keys(info[0].option).map((el, idx) => (
        <TableCard key={idx} title={names[idx]} option={info} choose={el}/>
      ))}
    </div>
  );
};
export default TableCar;
