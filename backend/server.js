const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 10000;
app.use(express.json());
app.use(cors({
  origin: ['https://astonishing-melba-475557.netlify.app', 'https://rosy-pottery.netlify.app']
}));

app.get('/api/proizvodi', (req, res) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'src/data/proizvodi.json'), 'utf-8');
    const proizvodi = JSON.parse(data);
    res.json(proizvodi);
  } catch (error) {
    console.error('Error loading proizvodi:', error);
    res.status(500).json({ message: 'Failed to load proizvodi' });
  }
});

// GET /api/products-file — load from products.json (different from /api/products DB)
app.get('/api/products-file', (req, res) => {
  try {
    const data = fs.readFileSync(path.join(__dirname, 'src/data/products.json'), 'utf-8');
    const products = JSON.parse(data);
    res.json(products);
  } catch (error) {
    console.error('Error loading products:', error);
    res.status(500).json({ message: 'Failed to load products from file' });
  }
});


// Middleware for parsing JSON and handling CORS

// Ensure 'uploads' directory exists
const uploadsDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir);
}

// Serve static files from the 'uploads' directory (for images)
app.use('/uploads', express.static(uploadsDir));

// Multer setup for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir); // Store images in the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // Use a timestamp to avoid duplicate file names
  }
});

const upload = multer({ storage: storage });

// Load existing product data
function loadProducts() {
  const data = fs.readFileSync(path.join(__dirname, 'src', 'data', 'proizvodi.json'), 'utf-8');
  return JSON.parse(data);
}

// Save product data to JSON file
function saveProducts(products) {
  fs.writeFileSync(path.join(__dirname, 'src', 'data', 'proizvodi.json'), JSON.stringify(products, null, 2));
}

// Route to add a new product
app.post('/api/products', upload.single('image'), (req, res) => {
  const { name, categories, about, price, available } = req.body;
  const image = req.file ? `/uploads/${req.file.filename}` : '';

  // Load current products
  const products = loadProducts();

  // Create a new product
  const newProduct = {
    id: products.length + 1, // number
    name,
    categories: categories.split(','),
    about,
    price: parseFloat(price),
    image,
    available: available === 'true'
  };

  // Save new product to the list
  products.push(newProduct);
  saveProducts(products);

  res.status(201).json(newProduct); // Send back the newly added product
});
// Route to fetch all products
app.get('/api/products', (req, res) => {
    try {
      const products = loadProducts();
      res.json(products); // Send the product list
    } catch (error) {
      console.error('Error fetching products:', error);
      res.status(500).json({ message: 'Failed to fetch products' });
    }
  });
 
  app.delete('/api/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let products = loadProducts();
  
    const productToDelete = products.find(p => p.id === id);
    if (!productToDelete) {
      return res.status(404).json({ message: 'Product not found' });
    }
  
    // Remove the image file if it exists
    if (productToDelete.image && productToDelete.image.startsWith('/uploads/')) {
      const imagePath = path.join(__dirname, productToDelete.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }
  
    // Filter out the deleted product
    products = products.filter(p => p.id !== id);
    saveProducts(products);
  
    res.json({ message: 'Product deleted successfully' });
  });
// Start the Express server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
