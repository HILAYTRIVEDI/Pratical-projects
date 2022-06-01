function Header() {
  return (
    <header className="header">
        <div className="container">
            <div className="header__inner">
                <a className="header__logo" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48">
                        <g fill="none" fill-rule="evenodd"><circle cx="24" cy="24" r="24" fill="#FFF"/>
                            <path fill="#0B0D17" d="M24 0c0 16-8 24-24 24 15.718.114 23.718 8.114 24 24 0-16 8-24 24-24-16 0-24-8-24-24z"/>
                        </g>
                    </svg>
                </a>
                <nav className="header__nav">
                    <ul className="header__nav--list">
                        <li className="header__nav--item">
                            <a href="#">
                            <span>00</span>home
                            </a>
                        </li>
                        <li className="header__nav--item">
                            <a href="#">
                            <span>01</span>destination
                            </a>
                        </li>
                        <li className="header__nav--item">
                            <a href="#">
                            <span>02</span>crew
                            </a>
                        </li>
                        <li className="header__nav--item">
                            <a className="header__nav--link" href="#">
                            <span>03</span>technology
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
        <div className="header__blur"></div>
    </header>
  )
}

export default Header