const express = require('express');

const shopController = require('../controllers/shop');

const Router = express.Router();

Router.get('/safari', shopController.getSafari);

Router.get('/details/:productid', shopController.getDetails);

Router.get('/lodging', shopController.getLodge);

Router.get('/hunting', shopController.getHunt);

Router.get('/fishing', shopController.getFish);

Router.get('/contact-us', shopController.getContactUs);

Router.get('/', shopController.getIndex);

module.exports = Router;