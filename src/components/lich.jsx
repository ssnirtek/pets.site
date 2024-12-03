
function Lichn() {
    return ( 
        <div>
  <style dangerouslySetInnerHTML={{__html: "\nbody {\n    background-color: #f8f9fa;\n}\n.container {\n    margin-top: 50px;\n    background-color: #fff;\n    padding: 20px;\n    border-radius: 10px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n}\n.form-control {\n    margin-bottom: 15px;\n}\n" }} />
  <div className="container">
    <h2>Личный кабинет</h2>
    <div id="userInfo">
      <p><strong>Имя:</strong> <span id="userName">Иван Иванов</span></p>
      <p><strong>Телефон:</strong> <span id="userPhone">+7 (999) 123-45-67</span></p>
      <p><strong>Email:</strong> <span id="userEmail">ivan@example.com</span></p>
      <p><strong>Пароль:</strong> <span id="userPassword">********</span></p>
      <p><strong>Время регистрации:</strong> <span id="registrationTime">01.01.2023 12:00</span></p>
    </div>
    <h4>Редактировать данные</h4>
    <div className="mb-3">
      <label htmlFor="editPhone" className="form-label">Новый телефон</label>
      <input type="tel" className="form-control" id="editPhone" placeholder="+7 (999) 123-45-67" />
    </div>
    <div className="mb-3">
      <label htmlFor="editEmail" className="form-label">Новый Email</label>
      <input type="email" className="form-control" id="editEmail" placeholder="ivan@example.com" />
    </div>
    <button className="btn btn-primary" onclick="updateUserInfo()">Сохранить изменения</button>
    <hr />
    <button className="btn btn-danger" onclick="logout()">Выйти</button>
  </div>
</div>

     );
}

export default Lichn;