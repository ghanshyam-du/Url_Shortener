import shortId from "shortid";
import URL from "../model/url.js";

export async function handleGenerateNewShortUrl(req, res) {
  try {
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: "url is required" });

    // Ensure URL has protocol
    let originalURL = body.url;
    if (!/^https?:\/\//i.test(originalURL)) {
      originalURL = "http://" + originalURL;
    }

    const shortID = shortId.generate();

    await URL.create({
      shortId: shortID,
      redirectURL: originalURL,
      visitHistory: [],
    });

    return res.json({ id: shortID });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}

export async function handleRedirectToUrl(req, res) {
  try {
    const shortId = req.params.shortId;
    const entry = await URL.findOneAndUpdate(
      { shortId },
      { $push: { visitHistory: { timestamp: Date.now() } } },
      { new: true }
    );

    if (!entry) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    res.redirect(entry.redirectURL);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
}
