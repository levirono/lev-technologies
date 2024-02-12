const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(express.static(__dirname)); // Serve static files

const dbURI = 'mongodb+srv://levt:trylevi@cluster0.9lhuoyr.mongodb.net/reviews';
mongoose.connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(async () => {
    console.log('Connected to MongoDB');

    const reviewSchema = new mongoose.Schema({
      name: String,
      images: [String],
      categories: {
        "Physical Size": {
          "Screen": String
        },
        "Material": String,
        "Width": String,
        "Resolution": String,
        "Technology": String,
        "Platform": {
          "OS": String,
          "Processor": String,
          "GPU": String,
          "ultra": String
        },
        "Cameras": {
          "Front": String,
          "Rear": String
        },
        "Connections": String,
        "Sensors": String,
        "Battery and Charging": String,
        "Color": String,
        "Price": String,
        "misc": {
          "dagger": String,
          "blunder": String
        },
        "alto": {
          "live": String
        }
      },
    });

    const Review = mongoose.model('Review', reviewSchema);

    // Routes
    app.get('/', (req, res) => {
      res.sendFile(__dirname + '/index.html');
    });

    app.get('/api/reviews', async (req, res) => {
      try {
        const reviewList = await Review.find().lean().select('-__v'); // Exclude __v field
        res.json(reviewList);
        console.log(reviewList);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    });

    app.post('/api/reviews', async (req, res) => {
      const { name, images, categories } = req.body;

      const newReview = new Review({
        name,
        images,
        categories,
      });

      try {
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
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
