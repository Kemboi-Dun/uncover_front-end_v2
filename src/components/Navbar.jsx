import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getApi } from "../api/Api";

function Navbar() {
  const [category, setCategory] = useState([]);

  const getCategories = () => {
    getApi
      .get("/posts/")
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        const categoryData = data.filter(
          (obj, index, self) =>
            index === self.findIndex((t) => t.categories === obj.categories)
        );

        // const categories = data.filter(category => {
        //   return category.categories === cat
        // })
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
        <nav className="navbar">
          <div className="logo">
            <Link className="link" to="/">
              {/* <img
                src="https://angazawellnesscenter.pythonanywhere.com/static/assets/images/logo.svg"
                alt=""
              /> */}
              {/* <h3>Angaza</h3> */}
            </Link>
            <div className="logo_dot"></div>
          </div>

          <div className="links nav-links">
            <Link className="link" to="/">
              <h6>Home</h6>
            </Link>
            {category.map((cat) => {
              return (
                <Link
                  className="link"
                  to={`/post/${cat.categories}`}
                  key={cat.id}
                >
                  <h6>{cat.categories}</h6>
                </Link>
              );
            })}
          </div>
          {/* <div className="links">
            <Link className="link" to="/?cat=technology">
              <h6>Technology</h6>
            </Link>
            <Link className="link" to="/?cat=art">
              <h6>Art</h6>
            </Link>
            <Link className="link" to="/?cat=music">
              <h6>Music</h6>
            </Link>
            <Link className="link" to="/?cat=food">
              <h6>Food</h6>
            </Link>
            <div className="write">
              <Link className="link" to="/write">
                Write
              </Link>
            </div>
            <span>
              <p>
                <i class="fa-solid fa-user" style={{ marginRight: "6px" }}></i>
                John
              </p>
              <Link className="link" to="/">
                Logout
              </Link>
            </span>
          </div> */}
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
