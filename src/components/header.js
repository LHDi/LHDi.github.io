import { Link } from "gatsby";
import PropTypes from "prop-types";
import React, { useLayoutEffect, useRef } from "react";

// @ts-ignore
import style from '../css/header.module.css';

const Header = ({ siteTitle }) => {
  const container = useRef(null);
  const headerRef = useRef(null);
  useLayoutEffect(() => {
    container.current.style.height = `${headerRef.current.clientHeight}px`;
    const headerElement = headerRef.current;
    const sticky = headerElement.offsetTop;
    const scrollCallBack = () => {
      if (window.pageYOffset > sticky)
        headerElement.classList.add(style.sticky);
      else
        headerElement.classList.remove(style.sticky);
    };
    window.addEventListener("scroll", scrollCallBack);
    return () => {
      window.removeEventListener("scroll", scrollCallBack);
    };
  }, []);
  return (
    <div ref={container}>
      <header
        ref={headerRef}
        className={style.header}
      >
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
          }}
        >
          <h1 style={{ margin: 0 }}>
            <Link
              to="/"
              className={style.title}
            >
              <div className={style.avatar}></div>
              {siteTitle}
            </Link>
          </h1>
        </div>
      </header>
    </div>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
