import React from 'react';

const FullBlogView = ({ blog, isExpanded, onClose }) => {
  if (!isExpanded) {
    return null;
  }

  return (
    <div className="bg-green-50 rounded-lg shadow-md p-6 pb-12 mb-6 relative">
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h3 className="text-3xl font-semibold mb-4 text-green-800">{blog.title}</h3>
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
        {/* <CommentSection blogTitle={blog.title} /> */}
      </div>
    </div>
  );
};

export default FullBlogView;
