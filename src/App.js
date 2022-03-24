import logo from './logo.svg';
import './App.css';
import { NavLink } from 'react-router-dom';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <nav className="navbar fixed-top navbar-fixed-top navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
                <div className="container-fluid ms-5">
                    <NavLink className="navbar-brand fw-bold fs-4" to="/">
                        O'LIST
                    </NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-3 mb-lg me-5" id="nav">
                            <li className="nav-item">
                                <NavLink className="nav-link me-4" to="/">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/list">List</NavLink>
                            </li>
                        </ul>


                    </div>
                </div>
            </nav>
            <Main/>
    </div>
  );
}

export default App;
