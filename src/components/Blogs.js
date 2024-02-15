// Blogs.js
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch blogs from the server when the component mounts
    fetch('http://localhost:3001/api/blogs', {
      method: 'GET',
      headers: { 'content-type': 'application/json' },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch blogs - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        setBlogs(data);
      })
      .catch((error) => console.error('Error fetching blogs:', error));
  }, []);

  const rearrangeBlogs = (index, id) => {
    if (index !== null) {
      const updatedBlogs = [...blogs];
      const selectedBlog = updatedBlogs.splice(index, 1)[0];
      updatedBlogs.unshift(selectedBlog);
      setBlogs(updatedBlogs);

      // Navigate to the BlogReader page
      navigate(`/blog/${id}`);
    }
  };

  return (
    <div className="bg-green-50 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-green-800">Top Stories</h2>

        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search blogs..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="mb-4 p-2 border border-green-300 rounded-md"
        />

        {blogs.map((blog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 mb-6 border-green-500 border-4"
            onClick={() => rearrangeBlogs(index, blog._id)}
          >
            <h3 className="text-xl font-semibold mb-2 text-green-800">{blog.title}</h3>
            <p className="text-gray-600 mb-2 font-serif">{blog.date}</p>
            <div className="text-gray-700">
              {blog.content.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  {item.type === 'text' && (
                    <p className="mb-4 truncate max-w-[50]">{item.text}</p>
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
              <div>
                <h4 className="text-lg font-semibold mb-2 mt-4 text-green-800">Explore More</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
