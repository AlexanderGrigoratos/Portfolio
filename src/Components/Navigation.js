import React from 'react'

export const Navigation = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
            <div className="container">
                <a className="navbar-brand font-weight-bolder" href="#">
                <h3>A L E X</h3>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item"><a className="nav-link active" aria-current="page" href="#home">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#contact">contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
