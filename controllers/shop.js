const Safari = require('../models/safari.js');

exports.getIndex = (req, res, next) => {

   const facts = [
      'Did you know that a giraffe has a blue tongue?',
      'An ostrich can run more than 40 miles in one hour.',
      'Lions sleep for up to 20 hours every day.',
      'Elephants don\'t have sweat glands, they use their trunks to spray themselves with water.',
      'Leopard cubs are born blind, but their eyes start opening 10 days after birth.',
      'Hippopotamuses can run faster than an average human.',
      'Did you know that rhinoceros horns are made from keratin, the same material that human nails are made from.',
      'Rhinoceroses communicate through infrasonic frequecies.'
   ]
   res.render('home', {
      pageTitle: 'Home | Kirafu Adventures',
      facts: facts
   })
}

exports.getSafari = (req, res, next) => {
   Safari.find()
      .then(safari => {
         console.log(safari)
         res.render('safari', {
            pageTitle: 'Safari | Kirafu Adventures'
         })
      })
      .catch(err => {
            console.log(err)
   })
}

exports.getLodge = (req, res, next) => {
   res.render('lodging', {
      pageTitle: 'Lodging | Kirafu Adventures'
   })
}

exports.getHunt= (req, res, next) => {
   res.render('hunting', {
      pageTitle: 'Hunting | Kirafu Adventures'
   })
}

exports.getFish = (req, res, next) => {
   res.render('fishing', {
      pageTitle: 'Fishing | Kirafu Adventures'
   })
}

exports.getAboutUs = (req, res, next) => {
   res.render('about-us', {
      pageTitle: 'About Us | Kirafu Adventures'
   })
}

exports.getContactUs = (req, res, next) => {
   res.render('contact-us', {
      pageTitle: 'Contact Us | Kirafu Adventures'
   })
}