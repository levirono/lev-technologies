// BlogReader.js
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const BlogReader = () => {
  const { blogId } = useParams();
  console.log(blogId);
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    // Fetch individual blog based on id
    fetch(`http://localhost:3001/api/blogs/${blogId}`, {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch blog - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setBlog(data);
      })
      .catch((error) => console.error('Error fetching blog:', error));
  }, [blogId]);

  if (!blog) {
    // If blog is not available yet, you can show a loading indicator or a message
    return <div>Loading...</div>;
  }

  // Ensure that the blog has a title before accessing it
  const blogTitle = blog.title || 'No Title';

  return (
    <div className="bg-green-50 rounded-lg shadow-md p-6 pb-12 mb-6 relative">
      <h3 className="text-3xl font-semibold mb-4 text-green-800">{blogTitle}</h3>
      <p className="text-gray-600 mb-4 font-serif">{blog.date}</p>
      <div className="text-gray-700">
        {blog.content.map((item, itemIndex) => (
          <React.Fragment key={itemIndex}>
            {item.type === 'text' && (
              <p className="mb-4">
                <span className="drop-cap text-3xl font-bold text-green-800">
                  {item.text[0]}
                </span>
                {item.text.slice(1)}
              </p>
            )}
            {item.type === 'image' && (
              <div>
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full sm:w-1/2 object-cover rounded-md mt-4"
                />
                <p className="text-gray-500 text-sm mt-2">{item.caption}</p>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BlogReader;
