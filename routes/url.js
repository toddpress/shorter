import express from 'express'
import validUrl from 'valid-url'
import shortId from 'short-id'

import Url from './../models/UrlModel';
const router = express.router();

const baseUrl = 'https://capable-organic-archeology.glitch.me/';


router.post('/shorten', async (req, res)=> {
  const {
    longUrl
  } = req.body;
  
    // check base url if valid using the validUrl.isUri method
  if (!validUrl.isUri(baseUrl)) {
      return res.status(401).json('Invalid base URL')
  }
  

  
  if (validUrl.isUri(longUrl)) {
    let url = await Url.findOne({
      longUrl
    })
    
    if (url) {
      res.json(url)
    } else {
        const code = shortId.generate();
        const shortUrl = [baseUrl, code].join('/')
        
        url = new Url({
          longUrl,
          shortUrl,
          
        })
    }
  }
  
});

