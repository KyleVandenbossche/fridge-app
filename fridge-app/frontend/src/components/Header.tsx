

export function Header () {

    return(
        <div className="header-container">
        <div className="menu-container">
          <input id="menu__toggle" type="checkbox" />
          <label className="menu__btn" htmlFor="menu__toggle">
            <span></span>
          </label>

          <ul className="menu__box">
            <li>
              <a className="menu__item" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Add Items to Fridge
              </a>
            </li>
            <li>
              <a className="menu__item" href="#">
                Find Recipe
              </a>
            </li>

          </ul>
        </div>
        <div className="contacts-container">
        <h1 className='logo'>Fridge to Table</h1>
      </div>
      </div>
    )

}