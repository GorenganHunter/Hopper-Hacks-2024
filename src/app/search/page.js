"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import Search from "../../components/Search";
import styles from "./page.search.css";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function search() {
  const searchParams = useSearchParams();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const query = searchParams.get("q");
    fetch("/api/post?search=" + query)
      .then((res) => res.json())
      .then((res) => setPosts(res.posts));
  }, []);

  return (
    <main>
      <div className="d-lg-flex align-items-center pb-3 flex mt-2 p-5">
        <div className="align-self-center mt-3 justify-content-center align-middle container-fluid p-4">
          <h1 className="display-3 bold">
            <strong>Renew Planet</strong>
          </h1>
          <Search />
        </div>
      </div>

      <div className="d-lg-flex p-1 container-fluid p-4">
        <h3 className="display-3 mx-auto">There are {posts.length} Results</h3>
      </div>

      <div className="cd-lg-flex align-items-center mb-5 pb-5 container p-3">
        {posts.map((post, index) => (
          <div
            className="d-lg-flex mt-3 pb-5 align-items-center justify-content-center"
            key={index}>
            {post.image ? (
              <img
                className="d-lg-flex me-5"
                src={post.image}
                style={{ maxHeight: "250px" }}
              />
            ) : null}

            <article className="p-3">
              <h4>{post.title}</h4>
              <h5>{post.date}</h5>
              <p>{post.description}</p>
              <div className="col container">
                <div className="">
                  <a
                    href={`/post/${post._id}`} // Correct usage of backticks and curly braces
                    className="btn btn-outline-warning rounded-5"
                    style={{ width: "120px", padding: "10px" }}
                    onClick={() => handleRead(post.id)} // handleRead function should be defined
                  >
                    Read
                  </a>
                </div>
              </div>
            </article>
          </div>
        ))}
      </div>
    </main>
  );
}
