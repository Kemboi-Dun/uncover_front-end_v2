import React, { useEffect, useState } from "react";
import { getApi } from "../api/Api";
import { Link, useParams } from "react-router-dom";
import Limit from "../components/Limit";

function Category() {
  const [posts, setPost] = useState([]);

  const { cat } = useParams();

  const fetchPosts = async () => {
    const url = "/api/posts/";
    await getApi
      .get(url)
      .then((res) => {
        const data = res.data;
        console.log(cat);
        const filterPost = data.filter((post) => {
          return post.categories === cat;
        });

        setPost(filterPost);
      })
      .catch(() => {
        alert("Error fetching Posts..");
      });
  };

  useEffect(() => {
    fetchPosts();
  }, [cat]);

  return (
    <div className="home_container">
      <div className="blog_wrapper">
        {posts.map((post) => (
          <div className="blog" key={post.id}>
            <div className="content">
              <Link
                className="link"
                to={`/post/${post.categories}/${post.id}/`}
              >
                <h1>{post.title}</h1>
              </Link>

              <p>
                <Limit content={post.content} limit={80} />
              </p>

              <button className="learn-more">
                <Link
                  className="link"
                  to={`/post/${post.categories}/${post.id}/`}
                >
                  <span className="circle" aria-hidden="true">
                    <span className="icon arrow"></span>
                  </span>
                  <span className="button-text">Read More</span>
                </Link>
              </button>
            </div>

            <div className="blog_image">
              <img src={post.image} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
