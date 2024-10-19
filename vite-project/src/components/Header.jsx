import React, { useEffect, useRef } from 'react';

export default function Header() {
  const navbarRef = useRef(null);
  const hamburgerRef = useRef(null);
  const navMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        navbarRef.current.classList.add('scroll'); // Scroll olduğunda ekle
        navbarRef.current.classList.remove('transparent'); // Transparent sınıfını kaldır
      } else {
        navbarRef.current.classList.add('transparent'); // Başlangıçta transparan
        navbarRef.current.classList.remove('scroll'); // Scroll sınıfını kaldır
      }
    };

    const toggleMenu = () => {
      navMenuRef.current.classList.toggle('active');
    };

    // Event listener for scroll
    window.addEventListener('scroll', handleScroll);
    
    // Event listener for hamburger menu
    hamburgerRef.current.addEventListener('click', toggleMenu);

    // Cleanup function
    return () => {
      window.removeEventListener('scroll', handleScroll);
      hamburgerRef.current.removeEventListener('click', toggleMenu);
    };
  }, []);

  return (
    <header id="home" ref={navbarRef} className="transparent"> {/* Başlangıçta transparan */}
      <div className="container">
        <nav className="nav-scroll" id="navbar">
          <div className="nav-div-container">
            <a href="#home">
              <img src="./images/logo.png" alt="logo" className="logo-img" />
            </a>
            <div className="menu">
              {/* Hamburger Menu Icon */}
              <div className="hamburger" id="hamburger" ref={hamburgerRef}>
                <div className="bar" />
                <div className="bar" />
                <div className="bar" />
              </div>
              <ul className="nav-ul" id="navMenu" ref={navMenuRef}>
                <li>
                  <a href="#home">Home</a>
                  <a href="#our-classes">Classes</a>
                  <a href="#trainers">Trainer</a>
                  <a href="#review">Review</a>
                  <a href="#contact-us">Contact</a>
                </li>
                <li>
                  <button type="submit" className="button">
                    JOIN US
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* Header / Content Section */}
        <div className="content-container">
          <div className="content-container-text">
            <h1>POWERFULL</h1>
            <h2>Group</h2>
            <h2>Practice</h2>
            <div>
              <h2>With Trainer</h2>
              <h3>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perspiciatis mollitia laborum eaque sint. Vitae provident, dignissimos obcaecati similique eveniet cum laboriosam rem atque corrupti cupiditate debitis explicabo expedita enim quam fugiat ipsam veniam, impedit aspernatur? Mollitia, et a, praesentium cumque provident ad id voluptate quo recusandae explicabo ex corporis! Reprehenderit quisquam culpa sed.
              </h3>
            </div>
            <div className="button-container">
              <button className="button-1">Sign up</button>
              <button className="button-2">Details</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
