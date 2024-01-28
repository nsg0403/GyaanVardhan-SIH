import styles from "./styles.module.css";
import {Link } from "react-router-dom";
import pic from "./logo1.png";
import './navbar.css'
const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div >
			{/* <nav className={styles.navbar}>
				<h1>ShikshaVardhan</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button> 
                  <Link to="/signup">
 						<button type="button" className={styles.white_btn}>
					Logout
				</button>
				</Link> 
                
			</nav> */}
            <nav className="navbar navbar-expand-lg navbar-custom ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={pic}
              alt=""
              width="35"
              height="30"
            ></img>
            &nbsp;SikshaVardhan
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active cls" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link cls" href="#">
                  Courses
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle cls"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Account
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item cls" href="#">
                      My Account
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item cls" href="#">
                      My Courses
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item cls" href="#">
                      Change Password
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item cls" href="#">
                      Forget Password
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <form class="d-flex">
            <Link to="/signup">
 						<button type="button" className={styles.white_btn}>
					Logout
				</button>
				</Link> 
              <button class="btn btn-danger cls" type="submit">
                Admin
              </button>
            </form>
          </div>
        </div>
      </nav>
		</div>
	);
};
// {/* <Link to="/signup">
// 						<button type="button" className={styles.white_btn}>
// 							Logout
// 						</button>
// 					</Link> */}
export default Main;