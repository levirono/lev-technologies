import React, { useState } from 'react';

const NewBlogForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming your server endpoint for adding a new blog is '/api/blogs'
    try {
      const response = await fetch('http://localhost:3001/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          date: new Date().toISOString(), // Assuming you want to add the current date
          content: [{ type: 'text', text: content }],
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to add a new blog - ${response.statusText}`);
      }

      // Optionally, you can handle success or redirect to another page
      console.log('Blog added successfully!');
    } catch (error) {
      console.error('Error adding a new blog:', error.message);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-600">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-600">
            Content
          </label>
          <textarea
            id="content"
            name="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
            rows="4"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
};

export default NewBlogForm;
