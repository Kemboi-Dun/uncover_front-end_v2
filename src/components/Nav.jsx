import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getApi } from "../api/Api";
import "../style/navbar.css";

function Nav() {
  const [click, setClick] = React.useState(false);

  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);
  const [category, setCategory] = useState([]);

  const getCategories = () => {

const url = "api/posts/"

    getApi
      .get(url)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        const categoryData = data.filter(
          (obj, index, self) =>
            index === self.findIndex((t) => t.categories === obj.categories)
        );

        console.log(categoryData);
        setCategory(categoryData);
      })
      .catch(() => {
        alert("Error fetching categories..");
      });
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="nav_container">
      <div className="nav_wrapper">
        <div
          className={click ? "main-container" : ""}
          onClick={() => Close()}
        />

        <nav className="navbar" onClick={(e) => e.stopPropagation()}>
          <div className="nav-container">
            <div className="logo">
              <Link className="link" to="/">
              <h3>Uncover</h3>
              </Link>
              <div className="logo_dot"></div>
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link
                  // exact
                  to="/"
                  // activeClassName="active"
                  className="nav-links link"
                  onClick={click ? handleClick : null}
                >
                  Home
                </Link>
              </li>
              {category.map((cat) => {
                return (
                  <li className=" nav-item"  key={cat.id}>
                    <Link
                      className="nav-links link"
                      // activeClassName="active"
                      
                      to={`/post/${cat.categories}`}
                     
                      onClick={click ? handleClick : null}
                    >
                      {cat.categories}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Nav;
