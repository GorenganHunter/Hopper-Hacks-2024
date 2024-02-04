"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";

export default function Details() {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    content: "",
    image: "",
    youtube: "",
  });

  useEffect(() => {
    fetch("/api/post/" + id)
      .then((res) => res.json())
      .then((res) => setPost(res.post));
  }, []);

  return (
    <main className="container d-flex flex-column">
      <h1>{post.title}</h1>
      <p>
        By: {post.author} at {post.timestamp}
      </p>
      <img
        style={{ width: "450px", maxWidth: "100%" }}
        src={post.image}
        alt="Article Image"
      />
      <iframe
        className="mt-3"
        width="450"
        height="315"
        src={post.youtube}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen></iframe>
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </main>
  );
}
