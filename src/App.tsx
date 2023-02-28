import React from 'react';

function App() {
  return (
    <div className="wrapper">
      <header className='header'>
        <div className="header_logotype-container">
            <img className='header_logotype-container_logotype' width={40} height={40} src="/img/logo.png" alt="logotype"/>
            <div className="header_logotype-container_heading">
                <h3 className="header_logotype-container_headline">React Sneakers</h3>
                <p className="header_logotype-container_caption">Магазин лучших кросовок</p>
            </div>
        </div>
          <ul className="header_menu">
              <li>
                  <img width={18} height={18} src="/img/cart.svg" alt="logotype"/>
                  <span>1205 руб.</span>
              </li>
              <li>
                  <img width={18} height={18} src="/img/user.svg" alt="logotype"/>
              </li>
          </ul>
      </header>

        <div className="content">
            <h1>Все кроссовки</h1>
            ....

        </div>

    </div>
  );
}

export default App;
