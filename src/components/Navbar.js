import React from 'react'

export const Navbar = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light content">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Легендарные</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Фирменные</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Закуски</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Напитки</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Акции</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/#">Контакты</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}