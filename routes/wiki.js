const express = require('express');
const router = express.Router();
const models = require('../models');
const Page = models.Page;
const User = models.User;
const { main, addPage, editPage, wikiPage, search } = require('../views');

// /wiki/   gets all wiki articles
router.get('/', async(req, res, next) => {
  try {
    const pages = await Page.findAll();
    res.send(main(pages));
  } catch (err) {
    next(err)
  }
})

// /wiki/   creates a new wiki article
router.post('/', async(req, res, next) => {
  res.send('post new page at /wiki/')
})

router.get('/add', (req, res, next) => {
  res.send(addPage());
})



module.exports = router;