import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Blogs from './components/Blogs';
import Reviews from './components/Reviews';
import Store from './components/Store';
import Navigation from './components/Navigation';
import FullBlogView from './components/FullBlogView';
import BlogReader from './components/BlogReader';

import FullReview from './components/FullReview';  // Import the FullReview component

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blogs/:blogId" element={<FullBlogView />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/blog/:blogId" element={<BlogReader />} />


        {/* Add route for FullReview component */}
        <Route path="/reviews/:deviceId" element={<FullReview />} />

        <Route path="/store" element={<Store />} />
      </Routes>
    </Router>
  );
};

// Define FullBlogViewPage component to fetch blog data and pass it to FullBlogView
const FullBlogViewPage = ({ params }) => {
  const blogId = params.blogId;

  // Fetch blog data based on blogId
  // You should implement your own fetch logic here
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/blogs/${blogId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching blog data:', error);
    }
  };

  // Use a state to store the blog data
  const [blogData, setBlogData] = React.useState(null);

  // Fetch the data when the component mounts
  React.useEffect(() => {
    fetchData().then((data) => {
      setBlogData(data);
    });
  }, [blogId]);

  // Render FullBlogView with the fetched data
  return <FullBlogView blog={blogData} isExpanded={true} onClose={() => {}} />;
};

// Define FullReviewPage component to fetch review data and pass it to FullReview
const FullReviewPage = ({ params }) => {
  const deviceId = params.deviceId;

  // Fetch review data based on deviceId
  // You should implement your own fetch logic here
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/reviews/${deviceId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching review data:', error);
    }
  };

  // Use a state to store the review data
  const [reviewData, setReviewData] = React.useState(null);

  // Fetch the data when the component mounts
  React.useEffect(() => {
    fetchData().then((data) => {
      setReviewData(data);
    });
  }, [deviceId]);

  // Render FullReview with the fetched data
  return <FullReview device={reviewData} />;
};

export default App;
