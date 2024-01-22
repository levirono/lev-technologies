import React, { useState } from 'react';
import blogsData from './BlogsData.json';

// New CommentSection component
const CommentSection = ({ blogTitle }) => {
  // You can customize the comment section implementation here
  // For simplicity, let's just show a placeholder text
  return (
    <div className="mt-4">
      <h4 className="text-lg font-semibold mb-2">Comments for "{blogTitle}"</h4>
      {/* <p className="text-gray-600">Placeholder for comments...</p> */}
      {/* Add your actual comment section implementation here */}
    </div>
  );
};

const Blogs = () => {
  const [blogs, setBlogs] = useState(blogsData);
  const [expandedBlogIndex, setExpandedBlogIndex] = useState(null);

  const handleBlogClick = (index) => {
    setExpandedBlogIndex((prevIndex) => (prevIndex === index ? null : index));
    rearrangeBlogs(index);
  };

  const rearrangeBlogs = (index) => {
    if (index !== null) {
      const updatedBlogs = [...blogs];
      const selectedBlog = updatedBlogs.splice(index, 1)[0];
      updatedBlogs.unshift(selectedBlog);
      setBlogs(updatedBlogs);
    }
  };

  const isBlogExpanded = (index) => expandedBlogIndex === index;

  return (
    <div className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-semibold mb-6 text-green-950">Top Stories</h2>
        {blogs.map((blog, index) => (
          <div
            key={index}
            className={`bg-white rounded-lg shadow-md p-6 mb-6 ${
              isBlogExpanded(index) ? 'pb-12' : ''
            }`}
            onClick={() => handleBlogClick(index)}
          >
            <h3 className="text-xl font-semibold mb-2 text-blue-800">{blog.title}</h3>
            <p className="text-gray-600 mb-2">{blog.date}</p>
            <div className="text-gray-700">
              {blog.content.map((item, itemIndex) => (
                <React.Fragment key={itemIndex}>
                  {item.type === 'text' && (
                    <p className={`mb-4 ${isBlogExpanded(index) ? '' : 'truncate'}`}>
                      {item.text}
                    </p>
                  )}
                  {item.type === 'image' && (
                    <div>
                      <img
                        src={item.src}
                        alt={item.alt}
                        className="w-auto h-64 object-cover rounded-md mt-4"
                      />
                      <p className="text-gray-500 text-sm mt-2">{item.caption}</p>
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
            {/* Include the CommentSection component after each blog entry */}
            <CommentSection blogTitle={blog.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
