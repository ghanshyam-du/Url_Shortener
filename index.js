import express from "express";

const app = express();

const PORT = 6000;
app.use(express.urlencoded());
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`Server is runing on the ${PORT}`);
})
