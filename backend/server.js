const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const dbURI = 'mongodb+srv://levt:trylevi@cluster0.9lhuoyr.mongodb.net/levt';
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');

    // Define the blog schema and model
    const blogSchema = new mongoose.Schema({
      title: { type: String, required: true },
      date: { type: String },
      content: [{
        type: { type: String, enum: ['text', 'image'], required: true },
        text: { type: String },
        src: { type: String },
        alt: { type: String },
        caption: { type: String },
      }],
    });

    const Blog = mongoose.model('Blog', blogSchema);

    app.get('/', (req, res) => {
      res.send("This is the homepage of my server");
    });

    // Serve HTML file
    app.get('/write-blog', (req, res) => {
      res.sendFile(path.join(__dirname, 'write-blog.html'));
    });

    // Routes
    app.get('/api/blogs', async (req, res) => {
      try {
        const blogs = await Blog.find();
        res.json(blogs);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    // New route for creating a blog
    app.post('/api/write-blog', async (req, res) => {
      const { title, content } = req.body;

      // Validate that content is an array
      if (!Array.isArray(content)) {
        return res.status(400).json({ message: 'Content must be an array' });
      }

      const newBlog = new Blog({
        title,
        date: new Date().toISOString(),
        content: content.map(item => {
          // Validate item type
          if (!item.type || !['text', 'image'].includes(item.type)) {
            return res.status(400).json({ message: 'Invalid content type' });
          }

          // Depending on the content type, include relevant fields
          if (item.type === 'text') {
            return {
              type: 'text',
              text: item.text || '',
            };
          } else if (item.type === 'image') {
            return {
              type: 'image',
              src: item.src || '',
              alt: item.alt || '',
              caption: item.caption || '', 
            };
          }
        }),
      });

      try {
        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
      } catch (error) {
        res.status(400).json({ message: error.message });
      }
    });

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });
