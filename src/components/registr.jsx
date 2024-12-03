function Registr() {
    return ( 
        <div>
  <div className="container mt-5">
    <h2>Регистрация</h2>
    <form id="registrationForm" onsubmit="return validateForm(event);">
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Имя</label>
        <input type="text" className="form-control" id="name" required />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Телефон</label>
        <input type="tel" className="form-control" id="phone" pattern="\+7 \d{3} \d{3} \d{2} \d{2}" placeholder="+7 (999) 999-99-99" required />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">Email</label>
        <input type="email" className="form-control" id="email" required />
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label">Пароль</label>
        <input type="password" className="form-control" id="password" required />
      </div>
      <div className="mb-3">
        <label htmlFor="confirmPassword" className="form-label">Повторите пароль</label>
        <input type="password" className="form-control" id="confirmPassword" required />
      </div>
      <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
    </form>
  </div>
  <br />
  <br/>
  <br/> 
  <br/> 
</div>

 
     );
}

export default Registr;