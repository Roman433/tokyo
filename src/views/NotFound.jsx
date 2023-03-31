import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found-wrapper">
      <div className="leftpart">
        <div className="leftpart_inner">
          <div className="logo">
            <Link className="navbar-brand" to="/">
              <img src="/assets/img/logo/dark.png" alt="brand" />
            </Link>
          </div>
          
          <div className="copyright">
            
          </div>
          
        </div>
      </div>
      

      <div className="rightpart">
        <div className="rightpart_in">
          <div className="tokyo_tm_section">
            <div className="container">
              <div className="tokyo_tm_error">
                <div className="tokyo_tm_error_inner">
                  <h1>404!</h1>
                  <h3>страница не найдена!</h3>
                  <p>Страница, которую вы ищите не существует.</p>
                  <Link to="/" className="ib-button">
                    вернуться назад
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      

      <footer className="footer-wrapper">
        <div className="copyright">
        
        </div>
        
      </footer>
    </div>
  );
};

export default NotFound;
