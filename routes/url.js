const express = require('express');
const validUrl = require('valid-url');
const shortId = require('short-id');

const Url = require('./../models/UrlModel');
const router = express.Router();

const baseUrl = 'https://capable-organic-archeology.glitch.me';

router.post('/shorten', async (req, res) => {
  const { longUrl } = req.body;

  // check base url if valid using the validUrl.isUri method
  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json('Invalid base URL');
  }

  if (!validUrl.isUri(longUrl)) {
    return res.status(401).json('Invalid longUrl');
  }

  let url = await Url.findOne({
    longUrl,
  });

  if (url) {
    return res.json(url);
  }

  try {
    const code = shortId.generate();

    url = new Url({
      longUrl,
      code,
      date: new Date(),
    });

    await url.save();
    return res.json(url);
  } catch (e) {
    return res.status(500).json('Server Error');
  }
});

module.exports = router;
