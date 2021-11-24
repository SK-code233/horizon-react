import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      	<nav className="navbar navbar-expand-lg navbar-light bg-light nav-edit">
 
  <a className="navbar-brand col-md-4" href="#">
    <img src="images/1472576999-18-horizons-offices.png" width="170" height="55" alt=""/>
  </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" 
  data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
  aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="col-md-4 align-top">
  	<a className="navbar-brand flags flaga" href="#">
    <img src="images/255px-Flag_of_Ghana.svg.png" width="43" height="30" alt=""/>
  </a>
  <a className="navbar-brand flags" href="#">
    <img src="images/2560px-Flag_of_Nigeria.svg.png" width="43" height="30" alt=""/>
  </a>
  <a className="navbar-brand flags" href="#">
    <img src="images/Flag-Kenya.jpg" width="43" height="30" alt=""/>
  </a>
  </div>

  <div className="collapse navbar-collapse col-md-4" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active nav-aboutus">
        <a className="nav-link" href="#">ABOUT US</a>
      </li>
    </ul>
  </div>
</nav>

<div className="container-fluid">
  <div className="row">

<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>

  <div className="carousel-inner carousel-content col-md-12">
    <div className="carousel-item active">
      <img src="images/leon-vbxyFxlgpjM-unsplashaa.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/Office items and accessories — ChelseyHornea.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/abbe-sublett-nxZDMUQhN4o-unsplasha.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/erin-doering-kFoh7gacj_0-unsplasha.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="images/yann-maignan-rRiAzFkJPMo-unsplashaa.jpg" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div></div></div>


<div className="container-fluid">

  <p className="text-center plans">PLANS</p>
  <div className="row move-card">
  <div className="card col-md-3 card-content" style={{width:"5rem"}}>
    <img src="images/alesia-kazantceva-VWcPlbHglYc-unsplash.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">VIRTUAL OFFICES</h5>
      <p className="card-text">Our virtual offices allow your business to get our location address; phone services and also you become a member of our community with benefits such as access to our meeting rooms.</p>
    </div>
  </div>
  <div className="card col-md-3 card-content" style={{width: "10rem"}}>
    <img src="images/toa-heftiba-FV3GConVSss-unsplash.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">CUSTOMIZED OFFICES</h5>
      <p className="card-text">Our customized offices offer a great location for your business and you can customize your office to suit your preferences. Also you become a member of our community with benefits such as access to our meeting rooms.</p>
    </div>
  </div>
  <div className="card col-md-3 card-content" style={{width: "5rem"}}>
    <img src="images/lycs-architecture-U2BI3GMnSSE-unsplash.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">SERVICED OFFICES</h5>
      <p className="card-text">Our serviced offices offer a great location for your business and we provide services such as internet, utilities and offers from our partners. Also you become a member of our community with benefits such as access to our meeting rooms.</p>
    </div>
  </div>
  <div className="card col-md-3 card-content" style={{width: "15rem"}}>
    <img src="images/img-meetingroomrental_meetingroom.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">MEETING ROOMS</h5>
      <p className="card-text">Our meeting rooms offer a great location for your meeting with your clients or business partners. We provide presentation equipment and coffee. Also you become a member of our community with benefits such as access to our meeting rooms.</p>
    </div>
  </div>
  </div>
</div>

<div className="container-fluid">
  <div className="row foot">
    <div className="col-md-4">
      <h3>VISIT US IN KENYA</h3>
      <h5>Nairobi,Kenya</h5>
      <p>Belgravia Center, 14 Riverside Drive,<br/>
        4th floor, Off Riverside Drive<br/>
        Hanover Center, 14 Riverside Drive,<br/>
        6th floor, Off Riverside Drive</p>
    </div>

    <div className="col-md-4">
      <h3>VISIT US IN GHANA</h3>
      <h5>Accra,Ghana</h5>
      <p>One Airport Square, Airport City<br/>
        8th floor<br/></p>
      </div>

    <div className="col-md-4">
      <h3>VISIT US IN NIGERIA</h3>
      <h5>Lagos,Nigeria</h5>
      <p>Sterling Bank Building</p>
    </div>
  </div>
</div>
	

    </div>
  );
}

export default App;
