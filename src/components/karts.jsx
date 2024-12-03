import cossa from '../components/images/cossa.jpg'
import cat from '../components/images/cat.jpg'

function Karts2 () {
    return ( 
        <div>
  <h2 className="text-center text-white m-2" style={{backgroundColor: 'rgb(128, 83, 114)'}}>Карточки найденных животных</h2>
  <div className="d-flex flex-row flex-wrap ">
    <div className="d-flex flex-row flex-wrap border m-3 p-3 " style={{minWidth: 300, width: '45%'}}>
      <img src={cat} className="w-75" alt="рисунок животного" />
      <p className="w-50 text-primary" style={{minWidth: 250}}>id:</p>
      <p className="w-50" style={{minWidth: 250}}>14</p>
      <p className="w-50 text-primary" style={{minWidth: 250}}>Вид животного:</p>
      <p className="w-50" style={{minWidth: 250}}> Кошка</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Описание:</p>
      <p className="w-50" style={{minWidth: 300}}>Потерялась кошка, пушистая, серая. Любит играть, ласковая.</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Номер чипа:</p>
      <p className="w-50" style={{minWidth: 300}}>ca-001-spb</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Район:</p>
      <p className="w-50" style={{minWidth: 300}}>Василиостровский</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Дата:</p>
      <p className="w-50" style={{minWidth: 300}}>24-03-2020</p>
    </div>
    <div className="d-flex flex-row flex-wrap border m-3 p-3" style={{minWidth: 300, width: '45%'}}>
      <img src={cossa} className="w-75" alt="рисунок животного" />
      <p className="w-50 text-primary" style={{minWidth: 250}}>id:</p>
      <p className="w-50" style={{minWidth: 250}}>18</p>
      <p className="w-50 text-primary" style={{minWidth: 250}}>Вид животного:</p>
      <p className="w-50" style={{minWidth: 250}}> Коза</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Описание:</p>
      <p className="w-50" style={{minWidth: 300}}>Потерялась коза, последний раз видели в здании Московского вокзала
        г. Санкт-Петербург. Коза белая, пуховая.</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Номер чипа:</p>
      <p className="w-50" style={{minWidth: 300}}>go-011-spb</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Район:</p>
      <p className="w-50" style={{minWidth: 300}}>Центральный</p>
      <p className="w-50 text-primary" style={{minWidth: 300}}>Дата:</p>
      <p className="w-50" style={{minWidth: 300}}>14-03-2022</p>
    </div>
  </div>
</div>

     );
}

export default Karts2;