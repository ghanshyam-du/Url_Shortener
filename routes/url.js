import express from "express";
import { handleGenerateNewShortUrl, handleRedirectToUrl } from "../controller/url.js"

const router = express.Router();

router.post('/', handleGenerateNewShortUrl)
router.get('/:shortId', handleRedirectToUrl)

export default router;