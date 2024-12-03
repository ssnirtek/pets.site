import cat from '../components/images/cat.jpg'
import cossa from '../components/images/cossa.jpg'
import pes from '../components/images/pes.jpg'
function Lichn2() {
    return ( 
        <div>
  <br />
  <div className="row row-cols-1 row-cols-md-3 g-4" style={{marginLeft: 60, marginRight: 60}}>
    <div className="col">
      <div className="card h-100">
        <img src={cat} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Кошечка</h5>
          {/* Кнопка-триггер модального окна */}
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Подробнее...
          </button>
          {/* Модальное окно */}
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Кошечка</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                </div>
                <div className="modal-body">
                  ID: 14<br />
                  Вид животного: Кошка<br />
                  Описание: Потерялась кошка, пушистая, серая. Любит играть, ласковая.<br />
                  Номер чипа: ca-001-spb<br />
                  Район: Василиостровский<br />
                  Дата: 24-03-2020 <br />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src={cossa} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Коза</h5>
          {/* Кнопка-триггер модального окна */}
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Подробнее...
          </button>
          {/* Модальное окно */}
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">Коза</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                </div>
                <div className="modal-body">
                  ID: 18<br />
                  Вид животного: Коза<br />
                  Описание: Потерялась коза, последний раз видели в здании Московского вокзала г. Санкт-Петербург. Коза белая, пуховая.
                  Номер чипа: go-011-spb<br />
                  Район: Центральный<br />
                  Дата: 14-03-2022<br />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="col">
      <div className="card h-100">
        <img src={pes} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Собака</h5>
          {/* Кнопка-триггер модального окна */}
          <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            Подробнее...
          </button>
          {/* Модальное окно */}
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel"> Собака</h1>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
                </div>
                <div className="modal-body">
                  ID: 42<br />
                  Вид животного: Собака<br />
                  Описание: Собака рыжая, была утеряна в красногвардейском райне районе<br />
                  Номер чипа: do-123-spb<br />
                  Район: Красногвардейский<br />
                  Дата: 22-07-2023<br />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <a className="btn btn-primary" href="profile.html" role="button" style={{marginLeft: 60}}>Добавить объявление</a>
</div>

     );
}

export default Lichn2;