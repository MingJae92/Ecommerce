import express from "express"
import dotenv from "dotenv"
// dotenv.config({ path: '../../config/.env' })

const route = express.Router();
const app = express();
const port = process.env.PORT || 7000

app.use("/v1", route);

app.listen(port, () => {
    console.log(`Listening on port ${port} here we go!`);
})



