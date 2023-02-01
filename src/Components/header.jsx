import React from 'react'
import Body from './Body'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

export const Header = () => {
  return (
    <>
      <div>
  <nav className="navbar navbar-expand-lg bg-secondary text-uppercase fixed-top" id="mainNav">
    <div className="container">
      <a className="navbar-brand" href="#page-top">Hendrix Delgado</a>
      <button className="navbar-toggler text-uppercase font-weight-bold bg-primary text-white rounded" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        Menu
        <i className="fas fa-bars" />
      </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#portfolio">Portfolio</a></li>
          <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#about">About</a></li>
          <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav> 
  <header className="masthead bg-primary text-white text-center">
    <div className="container d-flex align-items-center flex-column">
      {/* Masthead Avatar Image*/}
      <img className="masthead-avatar mb-5" src="assets/img/avataaars.svg" alt="..." />
      {/* Masthead Heading*/}
      <h1 className="masthead-heading text-uppercase mb-0">Hendrix Delgado</h1>
      {/* Icon Divider*/}
      <div className="divider-custom divider-light">
        <div className="divider-custom-line" />
        <div className="divider-custom-icon"><i className="fas fa-star" /></div>
        <div className="divider-custom-line" />
      </div>
      {/* Masthead Subheading*/}
      <p className="masthead-subheading font-weight-light mb-0">Graphic Artist - Web Designer - Illustrator</p>
    </div>
  </header>
</div>
<Body/>
<About/>
<Contact/>
<Footer/>
</>
  )
}

 