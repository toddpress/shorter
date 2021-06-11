const express = require('express');
const router = express.Router()

const Url = require('../models/UrlModel')

router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({
      code: req.params.code
    })
    if (url) {
      res.redirect(url.longUrl)
    } else {
      res.status(404).json('URL not found')
    }
  } catch {
      res.status(500).json('Server Error')
  }
})

export default router;