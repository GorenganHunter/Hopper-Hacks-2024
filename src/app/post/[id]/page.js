
"use client";

import "bootstrap/dist/css/bootstrap.min.css";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Details(tes) {
  const { id } = useParams()
  const [post, setPost] = useState()

  useEffect(() => {
    fetch("/api/post/" + id)
      .then(res => res.json())
      .then(res => setPost(res.post))
  }, [])

    const data = {
        title: "Title Of Article",
        author: "M.Fathin Halim",
        timestamp: "07-March-2010",
        content: "LOREM IPSUM ADALAH BLA BLA BALBLALBALBALAL",
        image: "https://cdn.pixabay.com/photo/2022/12/01/04/35/sunset-7628294_640.jpg",
        youtube: "https://www.youtube.com/embed/ZZWxJjWSCO8?si=P4mx_OpzhoJBepZr"
    };

    return (
        <main className="container d-flex flex-column">
            <h1>{data.title}</h1>
            <p>By: {data.author} at {data.timestamp}</p>
            <img style={{width: "450px", maxWidth: "100%"}} src={data.image} alt="Article Image" />
            <iframe className="mt-3" width="450" height="315" src={data.youtube} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <div dangerouslySetInnerHTML={{ __html: data.content }}></div>
        </main>
    );
}
