import express from "express";
import urlRoute  from "./routes/url.js";
const app = express();

const PORT = 6000;
app.use(express.urlencoded());
app.use(express.json());

app.use("/url", urlRoute);

app.listen(PORT,()=>{
    console.log(`Server is runing on the ${PORT}`);
})
