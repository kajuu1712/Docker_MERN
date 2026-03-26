import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import router from './Routes/userRoute.js';
import { connectDB } from './Config/db.js';

const app = express()

const PORT = process.env.PORT || 3000;


app.use(express.json());
app.use(cors());
await connectDB();


app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`)
})