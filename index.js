import express from "express";
import urlRoute from "./routes/url.js"
import connectMongoDB from "./connect.js";
import { handleRedirectToUrl } from "./controller/url.js";
// import URL from "./model/url.js"
const app = express();

const PORT = 5000;
connectMongoDB();
app.use(express.urlencoded());
app.use(express.json());

app.use("/url", urlRoute);
app.get("/:shortId", handleRedirectToUrl);



app.listen(PORT, () => {
    console.log(`Server is runing on the ${PORT}`);
})
