import { useEffect } from "react";
import Layout from "../Components/Layout/Layout";
import { telephone } from "../constants/general";

const Guarantee = () => {
  useEffect(() => {
    window.document.title = "Гарантия";
  }, []);

  return (
    <Layout
      title={"Гарантия"}
      desc={{
        __html: `Гарантийный срок на авто Jetour составляет 5 лет или 200 000 км пробега, в зависимости от того, что наступит раньше. Гарантия распространяется на все оригинальные детали, узлы, агрегаты авто. Если в гарантийный период выявлены случаи коррозии, их устранение проводится за счет гарантийных обязательств.<br /><br />

    Специалисты дилерской сети, обладающие необходимыми знаниями и опытом работы, возьмут на себя техническое обслуживание Вашего автомобиля и устранение возможных неисправностей, используя при этом только детали, рекомендованные к применению корпорацией Jetour.
    <br /><br />
    Подробная информация указана в сервисной книге вашего автомобиля. За подробностями обращайтесь к Jetour "Кросс-Моторс" в Могилеве.
    <br /><br />
    Если у Вас остались вопросы, Вы можете получить консультацию специалистов в дилерских автоцентрах Jetour "Кросс-Моторс" по единому номеру:
    <br /><br />
    ${telephone}`,
      }}
    />
  );
};
export default Guarantee;
