const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51OcMTkBLE7SFLUkZ5VulZE8633m4gpWY6LSS6cQpnAzHYBdD7SuCq3dlVFZIQ5XgRicoATMYJJ6E7BOySV7ztJu6007TCWkcfY');

const app = express();
const port = 3002;

// Use CORS middleware
app.use(cors());

// Middleware to parse JSON data
app.use(bodyParser.json());

// PostgreSQL connection configuration
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'project01',
  password: '1234',
  port: 5432,
});

// Endpoint to create a Checkout Session
app.post('/create-checkout-session', async (req, res) => {
  const { items, successUrl, cancelUrl } = req.body;

  try {
    // Create a Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items,
      success_url: successUrl,
      cancel_url: cancelUrl,
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating Checkout Session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/register', async (req, res) => {
  const { email } = req.body;

  try {
    await pool.query('BEGIN');

    const result = await pool.query('INSERT INTO subscribers (email) VALUES ($1) ON CONFLICT (email) DO UPDATE SET email = $1 RETURNING *', [email]);

    const subscribers = await pool.query('SELECT * FROM subscribers');

    await pool.query('COMMIT');

    res.json({ success: true, data: 'Subscription successful', subscribers: subscribers.rows });
  } catch (error) {
    await pool.query('ROLLBACK');
    console.error('Error inserting into PostgreSQL:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});