const express = require('express');

const shopController = require('../controllers/shop');

const Router = express.Router();

Router.get('/safari', shopController.getSafari);

Router.get('/lodging', shopController.getLodge);

Router.get('/hunting', shopController.getHunt);

Router.get('/fishing', shopController.getFish);

Router.get('/about-us', shopController.getAboutUs);

Router.get('/contact-us', shopController.getContactUs);

Router.get('/', shopController.getIndex);

module.exports = Router;