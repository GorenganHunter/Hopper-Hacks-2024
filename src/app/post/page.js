"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import ReactQuill from "react-quill";
import { useState } from "react"; // Perbaikan import statement
import "react-quill/dist/quill.snow.css";
import { useRouter } from "next/navigation";

export default function Post() {
  const router = useRouter();
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
    console.log(post);
    e.preventDefault();
    fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        //bisa bisa
        /*const id = res.post._id.toString();
        router.push("/details/" + id);*/
      })
      .catch((error) => {
        console.error("Error:", error);
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
            name="title"
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
        <div className="mb-5">
          <label htmlFor="form4Example3" className="form-label">
            Content
          </label>
          <div className="custom-react-quill">
            <ReactQuill
              theme="snow"
              name="content"
              value={post.content}
              onChange={handleChange}
              style={{ height: "200px" }} // Atur lebar sesuai kebutuhan Anda
            />
          </div>
        </div>
        <button
          type="submit"
          onClick={submit}
          className="btn btn-primary btn-block">
          Send
        </button>
      </form>
    </main>
  );
}
