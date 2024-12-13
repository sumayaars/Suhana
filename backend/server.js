const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/paynow', async (req, res) => {
  try {
    const response = await axios.post('https://​sandbox​.aamarpay.com/jsonpost.php', req.body);
    res.json(response.data.payment_url);
    }
    catch (error) {
    res.status(500).send(error.message);
  }
});
app.get("/",async(req,res)=>{
    res.send("ok");
});

const PORT=process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running at port ${PORT}`));
