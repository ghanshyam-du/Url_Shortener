import express from "express";
import path from "path";
import urlRoute from "./routes/url.js"
import connectMongoDB from "./connect.js";
import { handleRedirectToUrl } from "./controller/url.js";
import userRoute from "./routes/user.js"
import staticRouter from "./routes/staticRouter.js"



const app = express();
const PORT = 5000;

app.set('view engine', 'ejs'); // tells Express to use EJS
app.set('views', './view');   // optional: tells where your .ejs files are

connectMongoDB();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/url", urlRoute);
app.use("/user", userRoute);
app.use("/",staticRouter);


app.get("/:shortId", handleRedirectToUrl);


app.listen(PORT, () => {
    console.log(`Server is runing on the ${PORT}`);
})
