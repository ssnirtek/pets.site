function Poisssk() {
    return ( 
       <main>
  <div className="search-box">
    <h3>Поиск</h3>
    <input type="text" id="regionInput" placeholder="Район" />
    <input type="text" id="animalTypeInput" placeholder="Вид животного" />
    <button onclick="searchAds()">Найти</button>
  </div>
  <div id="adsContainer" className="row">
    {/* Объявления появятся здесь */}
  </div>
</main>



     );
}

export default Poisssk;