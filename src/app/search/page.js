"use client"

import 'bootstrap/dist/css/bootstrap.min.css';
import Search from "../../components/Search";
import styles from "./page.search.css";
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

export default function search() {
  const searchParams = useSearchParams()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const query = searchParams.get("q")
    fetch("/api/post?search=" + query)
      .then(res => res.json())
      .then(res => setPosts(res.posts))
  }, [])

  return (
    <main>
      <div className="d-lg-flex align-items-center pb-3 flex mt-2 p-5">
        <div  className="align-self-center mt-3 justify-content-center align-middle container-fluid p-4">
          <h1 className="display-3 bold">
            <strong>Renew Planet</strong>
          </h1>
          <Search/>
        </div>
      </div>

      <div className="d-lg-flex p-1 container-fluid p-4">
        <h3 className ="display-3 mx-auto">There's 69 Result</h3>
      </div>

      <div className="cd-lg-flex align-items-center mb-5 pb-5 container p-3">
      <div className="d-lg-flex mt-3 pb-5 align-items-center justify-content-center">
        <img className="d-lg-flex me-5" src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_640.jpg" style={{maxHeight: "250px"}} />
        <article className="p-3">
          <h4>The Title of the an random Anime</h4>
          <h5>March 7, 2010</h5>
          <p>Bruh is a coders that love to solve problems by create and developing .......... </p>
          <div class="col container">
          <div class="">
            <button id="btnSearch" class="btn btn-outline-warning me-4 rounded-5" OnClick="btnSearch_Click"
            style={{ 
              width: "120px",
              padding : "10px",
            }}>Read</button>
            <button id="btnClear" class="btn btn-outline-info me-4 rounded-5" OnClick="btnClear_Click" 
            style={{ 
              width: "120px",
              padding : "10px",
            }}>Edit</button>
          </div>
        </div>
        </article>
      </div>

      <div className="d-lg-flex mt-3 pb-2 align-items-center justify-content-center">
      <img className="d-lg-flex me-5" src="https://cdn.pixabay.com/photo/2022/12/01/04/42/man-7628305_640.jpg" style={{maxHeight: "250px"}} />
        <article className="p-3">
          <h4>That Time I got Reincarnated as a Lowres Member</h4>
          <h5>March 7, 2010</h5>
          <p className = "pt-2 container" style={{ 
              width: "70%",
              padding : "10px",
            }}>Bruh is a coders that love to solve problems by create and developing .......... </p>
        <div class="col container pt-2">
          <div class="">
          <button id="btnSearch" class="btn btn-outline-warning me-4 rounded-5" OnClick="btnSearch_Click"
            style={{ 
              width: "120px",
              padding : "10px",
            }}>Read</button>
            <button id="btnClear" class="btn btn-outline-info me-4 rounded-5" OnClick="btnClear_Click" 
            style={{ 
              width: "120px",
              padding : "10px",
            }}>Edit</button>
          </div>
        </div>
        </article>
      </div>
      </div>
    </main>
  );
}
