import './App.css';
import { logo } from './assets/images/logo192.png';

function App() {
  return (
    <div className="container">
      <header className="main-header">
        <section className="logo">
          <a href="#">imglab</a>
        </section>
        <div className="main-action">
          <ul>
            <li className="main-action__item">
              <a id="load-image-btn" href="#">
                upload<input type="file" style={{display: 'none'}} id="fileInput" />
              </a>
            </li>
            <li className="main-action__item"><a id="download-btn" href="#">download</a></li>
          </ul>
        </div>
      </header>

      <section class="middle-area">
        {/* <app-sidemenu></app-sidemenu>
        <app-workarea></app-workarea> */}
        {/* <gl-img filters='[]' src="./assets/images/logo192.png"></gl-img> */}
        <img filters='[]' src={{logo}}></img>
      </section>

      <footer>
        <p>&copy; 2020 Developed by Wei Zhou. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
