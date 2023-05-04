import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getApi } from "../api/Api";

function Menu() {
  const [blogs, setBlogs] = useState([]);

  const { cat, id } = useParams();

  const getBlogs = async () => {
    const url = "/api/posts/"
    await getApi
      .get(url)
      .then((res) => {
        console.log(res.data);
        const data = res.data;
        const filteredPost = data.filter((post) => {
          return post.categories === cat && post.id !== id;
        });
        console.log(filteredPost);
        setBlogs(filteredPost);
      })
      .catch(() => {
        alert("Error fetching blogs..");
      });
  };
  useEffect(() => {
    getBlogs();
  }, [cat, id]);

  return blogs.length === 0 ? null : (
    <div className="menu">
      <h1>Related Posts</h1>

      {blogs.map((post) => (
        <div className="post" key={post.id}>
          <img src={post.image} alt="" />

          <h2>{post.title}</h2>
          <button>
            <Link className="fancy" to={`/post/${post.categories}/${post.id}/`}>
              <span className="top-key"></span>
              <span className="text">Read More</span>
              <span className="bottom-key-1"></span>
              <span className="bottom-key-2"></span>
            </Link>
          </button>
        </div>
      ))}
    </div>
  );
}

export default Menu;
