import React, { useEffect, useState } from "react";
import { getApi } from "../api/Api";
import { Link } from "react-router-dom";
import Limit from "../components/Limit";

function Home() {
  // demo data
  // const demo = [
  //   {
  //     id: 1,
  //     title: "This is the first blog.",
  //     body: "Developer logs suggest Apple’s long-rumored 15-inch MacBook Air could arrive soon Montana’s Looming TikTok Ban Is a Danger Tipping Point 13 Best Deals: MagSafe Accessories, Swi Games, and Phones",
  //     image:
  //       "https://images.unsplash.com/photo-1629747387925-6905ff5a558a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fG1lbGFuaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   },
  //   {
  //     id: 2,
  //     title: "This is the second blog.",
  //     body: "Developer logs suggest Apple’s long-rumored 15-inch MacBook Air could arrive soon Montana’s Looming TikTok Ban Is a Danger Tipping Point 13 Best Deals: MagSafe Accessories, Swi Games, and Phones Analysis: Jennifer Garner's return to TV much appreciated Hollywood writers vote on strike: ‘At stake the viability of TV as a career’ Silicon valediction? Our road trip to t industry hotspots as the sector cools When Will Apple Launch the iPad Mini 7?",
  //     image:
  //       "https://images.unsplash.com/photo-1527201987695-67c06571957e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzF8fG1lbGFuaW58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  //   },
  // ];
  const [blogs, setBlogs] = useState([]);

  const getBlogs = () => {
    const url = "api/posts/"
    getApi
      .get(url)
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch(() => {
        alert("Error fetching blogs..");
      });
  };
  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="home_container">
      <div className="blog_wrapper">
        {blogs.map((blog) => (
          <div className="blog" key={blog.id}>
            <div className="content">
              <Link
                className="link"
                to={`/post/${blog.categories}/${blog.id}/`}
              >
                <h1>{blog.title}</h1>
              </Link>

              <p>
                <Limit content={blog.content} limit={80} />
              </p>

              <button className="learn-more">
                <Link
                  className="link"
                  to={`/post/${blog.categories}/${blog.id}/`}
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Read More</span>
                </Link>
              </button>
            </div>

            <div className="blog_image">
              <img src={blog.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
