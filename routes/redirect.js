const express = require('express');
const router = express.Router()

const Url = require('../models/UrlModel')

router.get('/:code', async (req, res) => {
  try {
    const url = await Url.findOne({
      code: req.params.code
    })

    if (!url) {
      return res.status(404).json('URL not found')
    }
    res.redirect(url.longUrl)
  } catch {
      res.status(500).json('Server Error')
  }
})

module.exports = router;