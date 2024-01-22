// FullBlog.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const FullBlog = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch the full details of the selected blog from the JSON server
    axios.get(`http://localhost:3001/blogs/${id}`)
      .then(response => {
        setBlog(response.data);
      })
      .catch(error => {
        console.error('Error fetching blog details:', error);
      });
  }, [id]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold text-green">{blog.title}</h2>
      <p>{blog.content}</p>
      {/* Add other details as needed */}
    </div>
  );
};

export default FullBlog;
