const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = 8081;

// Enable CORS for admin dashboard
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:8081'],
  methods: ['GET', 'POST']
}));
app.use(express.json());

const PRODUCTS_FILE = path.join(__dirname, 'public', 'products.json');

// Update products endpoint
app.post('/api/updateProducts', async (req, res) => {
  try {
    const products = req.body;
    console.log('Updating products.json with', products.length, 'products');
    
    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2));
    console.log('Products file updated successfully');
    
    res.json({ success: true, message: 'Products updated successfully' });
  } catch (error) {
    console.error('Error updating products:', error);
    res.status(500).json({ error: 'Failed to update products' });
  }
});

app.listen(PORT, () => {
  console.log(`API Server running on http://localhost:${PORT}`);
  console.log(`Will update: ${PRODUCTS_FILE}`);
});