const { check, body } = require('express-validator/check');
const User = require('../models/user');
const express = require('express');

const shopController = require('../controllers/shop');

const Router = express.Router();

Router.get('/safari', shopController.getSafari);

Router.get('/details/:productid', shopController.getDetails);

Router.get('/lodging', shopController.getLodge);

Router.get('/hunting', shopController.getHunt);

Router.get('/fishing', shopController.getFish);

Router.get('/contact-us', shopController.getContactUs);

Router.post('/contact',
   check('email')
      .isEmail()
      .normalizeEmail({
         gmail_remove_dots: false
      }) 
      .withMessage('Please enter a valid email.')
      .custom((value, { req }) => {
         return User.findOne({ email: value })
            .then(userDoc => {
               if (userDoc) {
                  return Promise.reject('Email exists already.');
               }
            })
      }), shopController.postContact);

Router.get('/', shopController.getIndex);

module.exports = Router;