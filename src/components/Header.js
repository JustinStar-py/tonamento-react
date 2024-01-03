import React, { useState, useRef } from 'react';
import logo from '../img/logo.png'
import $ from 'jquery';

function Header() {

    const handleNavItemClick = (navItem) => {
        const roadmapSection = document.querySelector(`#${navItem.toLowerCase()}-section`); 
        roadmapSection.scrollIntoView({ behavior: "smooth" });
        $('.side-li').removeClass('is-active');
        $(`#${navItem}`).addClass('is-active');
        $(`.side-li#${navItem}::before`).css('content', '');
    };

  return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
            <img id="tona-logo" src={logo} width={50}/>
            <div className="container px-5">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i className="bi-list"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav ms-auto me-4 my-3 my-lg-0">
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#about-section">Whitepaper</a></li>
                        <li className="nav-item"><a className="nav-link me-lg-3" href="#roadmap-section">Roadmap</a></li>
                    </ul>
                    <button className="btn btn-primary px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                        <span className="d-flex align-items-center">
                            <i className="bi-chat-text-fill me-2"></i>
                            <span className="small">Playground</span>
                        </span>
                    </button>
                </div>
            </div>
        </nav>
         <nav className="l-side-nav">
          <div id='nav-cover'></div>
           <ul className="side-nav">
              <li className='side-li' id='Home' onClick={() => handleNavItemClick('Home')}><span>Home</span></li>
              <li className='side-li' id='Info' onClick={() => handleNavItemClick('Info')}><span>Info</span></li>
              <li className='side-li' id='Roadmap' onClick={() => handleNavItemClick('Roadmap')}><span>Roadmap</span></li>
              <li className='side-li' id='Team' onClick={() => handleNavItemClick('Team')}><span>Team</span></li>
              <li className='side-li' id='Socials' onClick={() => handleNavItemClick('Socials')}><span>Socials</span></li>
           </ul>
        </nav>
      </>
  )


}

export default Header;