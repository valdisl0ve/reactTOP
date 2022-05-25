import './NavPan.css';


function NavPan(){
  return(
  <div className="nav">
    <div className="Logo_box">
      <img width='120' src="https://img.artlebedev.ru/everything/helper-sew/helper-sew.png" alt="логотип"/>
    </div>
    <div className="Nav_box">
      <a href="">Состояние Станции</a>
      <a href=""></a>
      <a href="">Контакты </a>
      <a href=""> Магазин</a>
    </div>
    <div className="Login_box">
      <button class="button-9" role="button">Войти в сеть</button>
    </div>

  </div>
  );
}

export default NavPan;