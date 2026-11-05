require('dotenv').config();
const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const { sendOrderNotification } = require('./telegram');
const app = express();
app.use(express.json());
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
app.post('/api/orders', async (req, res) => {
  const { customer, items } = req.body;
  sendOrderNotification(customer, items);
  res.json({ success: true });
});
app.listen(3000, () => console.log('Server running on port 3000'));
