import { useEffect } from "react"
import Layout from "../Components/Layout/Layout"

const Credit = () => {
  useEffect(() => {
    window.document.title = "Кредит и лизинг"
  }, [])

  return (
    <Layout title={"Кредит и лизинг на покупку Jetour"} desc={{__html:`<div style="margin-bottom:20px">Кредит или лизинг на покупку автомобиля позволит вам стать владельцем нового Jetour на оптимальных для Вас условиях оплаты.<br /><br />

    Наши специалисты помогут вам:<br /><br />
    <div>приобрести автомобиль  Jetour с минимальным авансом;</div>
    <div>оформить кредит на недостающую сумму;</div>
    <div>подобрать оптимальную программу кредитования.</div>
       
       
       
       <br />
    Оформление всех необходимых документов происходит прямо в автоцентрах  Jetour.
    <br /><br />
    Наши партнеры:
    <br /><br />
    <div>ЗАО «БТА Банк»;</div>
    <div>ОАО «Сбербанк»;</div>
    <div>ОАО «Технобанк»;</div>
    <div>ОАО «Белгазпромбанк»</div>
    <br />
    Все автомобили можно приобрести по программе Trade-in</div>`}}/>
  )
}
export default Credit