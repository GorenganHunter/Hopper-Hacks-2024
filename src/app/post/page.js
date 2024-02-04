"use client"

import "bootstrap/dist/css/bootstrap.min.css";
import ReactQuill from 'react-quill';
import { useState } from 'react'; // Perbaikan import statement
import 'react-quill/dist/quill.snow.css';
import { useRouter } from "next/router";

export default function Post() {
  const router = useRouter()
  const [post, setPost] = useState({
    title: "",
    content: "",
    image: "", 
    youtube: "",
  });

  const handleChange = (value) => {
    setPost({ ...post, content: value });
  };

  const submit = (e) => {
    e.preventDefault();
    fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify(post),
      headers: { 'Content-Type': 'application/json' },
    })
      .then((res) => res.json())
      .then((res) => {
        const id = res._id.toString()
        router.push("/details/" + id)
      })//eh buset ternyata beliau disini jir
      //btw untuk image gw gak paham cara ngesendnya
      // oke ntar aja
       //mau pu
     //oke oke gww mau pelajar next term dulu buat details
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <main>
      <form className="container" onSubmit={submit}>
        <h3 className="display-3">Add Post</h3>
        <div className="mb-4">
          <label htmlFor="form4Example1" className="form-label">
            Title
          </label>
          <input
            type="text"
            id="form4Example1"
            className="form-control"
            value={post.title}
            onChange={(e) => setPost({ ...post, title: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="form4Example2" className="form-label">
            Youtube
          </label>
          <input
            id="form4Example2"
            className="form-control"
            value={post.youtube}
            onChange={(e) => setPost({ ...post, youtube: e.target.value })}
          />
        </div>
        <div className="mb-4">
          <input type="file" id="myFile" name="filename" />
        </div>
        <div className="mb-4">
          <label htmlFor="form4Example3" className="form-label">
            Content
          </label>
          <div className="custom-react-quill">
            <ReactQuill theme="snow" value={post.content} onChange={handleChange} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Send
        </button>
      </form>
    </main>
  );
}
