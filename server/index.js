const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const pool = require('./db');
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Routes

// GET

app.get('/categories', async (req, res) => {
  const result = await pool.query('SELECT * FROM kategori');
  res.json(result.rows);
});
app.get('/items', async (req, res) => {
  const result = await pool.query('SELECT * FROM item');
  res.json(result.rows);
});

app.get('/transactions', async (req, res) => {
  const result = await pool.query('SELECT * FROM transaksi');
  res.json(result.rows);
});

const categoryHandler = async (category) => {
  try {
    let kategori = await pool.query(
      'SELECT * from kategori WHERE nama_kategori ILIKE $1',
      [category]
    );

    if (kategori.rowCount === 0) {
      kategori = await pool.query(
        'INSERT INTO kategori (nama_kategori) VALUES ($1) RETURNING *',
        [category]
      );
    }

    const categoryId = kategori.rows[0].kategori_id;
    console.log(`categoryHandler returning ${categoryId}`);
    return categoryId;
  } catch (error) {
    return error;
  }
};

const getItemId = async (itemName) => {
  try {
    const item = await pool.query(
      'SELECT * from item WHERE nama_item ILIKE $1',
      [itemName]
    );

    if (item.rowCount == 0) {
      console.log(`getItemId returning 0`);
      return 0;
    }

    const itemId = item.rows[0].item_id;
    console.log(`getItemId returning ${itemId}`);
    return itemId;
  } catch (error) {
    return error;
  }
};

const addItem = async (itemName, categoryId = 1) => {
  try {
    const item = await pool.query(
      'INSERT INTO item (kategori_id, nama_item) VALUES ($1, $2) RETURNING *',
      [categoryId, itemName]
    );

    const itemId = item.rows[0].item_id;
    console.log(`addItem returning ${itemId}`);
    return itemId;
  } catch (error) {
    return error;
  }
};

// POST
app.post('/item', async (req, res) => {
  const { item } = req.body;
  const itemId = await getItemId(item);
  res.json(itemId);
});

app.post('/transaction', async (req, res) => {
  const { date, name, type, category, nominal, quantity } = req.body;

  let itemId = await getItemId(name);
  if (!itemId) {
    console.log(`post transaction itemId: ${itemId}`);
    const categoryId = await categoryHandler(category);
    itemId = await addItem(name, categoryId);
  }

  const result = await pool.query(
    `INSERT INTO transaksi (tanggal_transaksi, item_id, tipe_transaksi, harga, jumlah)
        VALUES ($1, $2, $3, $4, $5) RETURNING *`,
    [date, itemId, type, nominal, quantity]
  );

  res.json(result.rows);
});

app.listen(PORT, () => {
  console.log(`Server listening on the port ${PORT}`);
});
