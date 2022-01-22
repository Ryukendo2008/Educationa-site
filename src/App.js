import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './img/coding.png'
import py2 from './img/py2.jpg'
import py3 from './img/py3.jpg'
import py4 from './img/py4.jpg'
import py5 from './img/py5.jpg'
import react from './img/react.jpg'
import sm from './img/sm.jpg'
import c from './img/c++.jpg'
import web from './img/web.jpg'
import yo from './img/yo.jpg'
import free from './img/freel.jpg'
import many from './img/many.jpg'
import coding2 from './img/coding2.jpg'
import linux from './img/linux.jpg'


function App() {

  return (
    <header className="">
      {/* navigation bar */}
      <nav className="navbar collapsed navbar-dark bg-primary d-flex text-white">
        <ul type="none" className="display-4 d-flex gap-4 my-auto" type="none">
          <li style={{ fontSize: '50px' }} className="my-auto">Ryukendo</li>
          <li style={{ fontSize: '25px' }} className="my-auto ms-5">Categories</li>
          <li style={{ fontSize: '25px' }} className="my-auto">Contact us</li>
          <li style={{ fontSize: '25px' }} className="my-auto">About us</li>
          <form className="form-inline d-flex ms-5">
            <input style={{ width: '300px' }} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-danger text-white my-2 my-sm-0" type="submit">Search</button>
          </form>
        </ul>
      </nav>
      {/* header */}
      <div className="container my-5 d-flex gap-4">
        <div className="w-50">
          <img className="w-100 rounded-3" src={logo} alt="coding" />
        </div>
        <div>
          <h1>Learning that gets you</h1>
          <p className="p-4">Skills for your present (and your future). Get started with us.</p>
          <div className="d-flex">
            <input style={{ width: '300px' }} className="form-control mr-sm-2 ms-5" type="search" placeholder="What do you want to learn ?" aria-label="Search" />
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-search d-inline-block my-auto ms-3" viewBox="0 0 16 16">
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* section Started */}
      <section className="container">
        <h2 className="text-center">Course buoght: </h2>
        <h1 className="text-center">Total price : </h1>
      </section>

      {/* course section Started */}
      <section className="container py-4">
        <i><h1 className="text-center text-italic text-danger">Our courses</h1></i>
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
          <div className="col">
            <div className="card h-100">
              <img src={py4} className="card-img-top p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">2021 Complete Python Bootcamp From
                  Zero to...</h5>
                <p className="card-text">Jose Portilla</p>
                <p>Ratings: 4.6</p>
                <span>
                  <h3>$12.99</h3>
                </span><span><del>$84.99</del></span>
              </div>
              <button className="btn btn-outline-dark">Buy now</button>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={py3} className="card-img-top p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Python for Data Science and Machine
                  Learning...</h5>
                <p className="card-text">Jose Portilla</p>
                <p>Ratings: 4.6</p>
                <span>
                  <h3>$12.99</h3>
                </span><span><del>$84.99</del></span>
              </div>
              <button className="btn btn-outline-dark">Buy now</button>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={py2} className="card-img-top p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Learn Python Programming MasterclassName
                </h5>
                <p className="card-text">Jose Portilla</p>
                <p>Ratings: 4.6</p>
                <span>
                  <h3>$12.99</h3>
                </span><span><del>$84.99</del></span>
              </div>
              <button className="btn btn-outline-dark">Buy now</button>
            </div>
          </div>
        </div>
      </section>

      {/* viewing */}
      <section className="container pt-5">
        <h2>Students are viewing</h2>
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
          <div className="col">
            <div className="card h-100">
              <img src={free} className="card-img-top p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">React - The Complete Guide incl
                  Hooks, React Router,...</h5>
                <p className="card-text">Jose Portilla</p>
                <p>Ratings: 4.6</p>
                <span>
                  <h3>$12.99</h3>
                </span><span><del>$84.99</del></span>
              </div>
              <button className="btn btn-outline-dark">Buy now</button>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={c} className="card-img-top p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">C Programming For Beginners - Master
                  the C...</h5>
                <p className="card-text">Jose Portilla</p>
                <p>Ratings: 4.6</p>
                <span>
                  <h3>$12.99</h3>
                </span><span><del>$84.99</del></span>
              </div>
              <button className="btn btn-outline-dark">Buy now</button>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={web} className="card-img-top p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Ultimate AWS Certified Solutions
                  Architect Associate
                </h5>
                <p className="card-text">Jose Portilla</p>
                <p>Ratings: 4.6</p>
                <span>
                  <h3>$12.99</h3>
                </span><span><del>$84.99</del></span>
              </div>
              <button className="btn btn-outline-dark">Buy now</button>
            </div>
          </div>
        </div>
      </section>

      {/* more courses */}
      <section className="container py-5">
        <h1 className="text-center">More : </h1>
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
          <div className="col">
            <div className="card h-100">
              <img src={linux} className="card-img-top p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Complete Linux Training Course to Get Your Dream IT...</h5>
                <p className="card-text">Jose Portilla</p>
                <p>Ratings: 4.6</p>
                <span>
                  <h3>$12.99</h3>
                </span><span><del>$84.99</del></span>
              </div>
              <button className="btn btn-outline-dark">Buy now</button>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={many} className="card-img-top p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Graphic Design MasterClass- Photoshop, Illustrator,...</h5>
                <p className="card-text">Jose Portilla</p>
                <p>Ratings: 4.6</p>
                <span>
                  <h3>$12.99</h3>
                </span><span><del>$84.99</del></span>
              </div>
              <button className="btn btn-outline-dark">Buy now</button>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={yo} className="card-img-top p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">The Complete Financial Analyst Course 2021
                </h5>
                <p className="card-text">Jose Portilla</p>
                <p>Ratings: 4.6</p>
                <span>
                  <h3>$12.99</h3>
                </span><span><del>$84.99</del></span>
              </div>
              <button className="btn btn-outline-dark">Buy now</button>
            </div>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto mt-3">
          <div className="col">
            <div className="card h-100">
              <img src={py5} className="card-img-top p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Complete Linux Training Course to Get Your Dream IT...</h5>
                <p className="card-text">Jose Portilla</p>
                <p>Ratings: 4.6</p>
                <span>
                  <h3>$12.99</h3>
                </span><span><del>$84.99</del></span>
              </div>
              <button className="btn btn-outline-dark">Buy now</button>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={react} className="card-img-top p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Graphic Design MasterClass- Photoshop, Illustrator,...</h5>
                <p className="card-text">Jose Portilla</p>
                <p>Ratings: 4.6</p>
                <span>
                  <h3>$12.99</h3>
                </span><span><del>$84.99</del></span>
              </div>
              <button className="btn btn-outline-dark">Buy now</button>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <img src={sm} className="card-img-top p-2" alt="..." />
              <div className="card-body">
                <h5 className="card-title">The Complete Financial Analyst Course 2021
                </h5>
                <p className="card-text">Jose Portilla</p>
                <p>Ratings: 4.6</p>
                <span>
                  <h3>$12.99</h3>
                </span><span><del>$84.99</del></span>
              </div>
              <button className="btn btn-outline-dark">Buy now</button>
            </div>
          </div>
        </div>
      </section>

    </header>

  );
}

export default App;
