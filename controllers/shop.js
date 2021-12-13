const Safari = require('../models/safari.js');
const Lodge = require('../models/lodge.js')

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
      path: '/',
      facts: facts
   })
}

exports.getSafari = (req, res, next) => {
   Safari.find()
      .then(safari => {
         res.render('safari', {
            pageTitle: 'Safari | Kirafu Adventures',
            path: '/safari',
            safaris: safari
         })
      })
      .catch(err => {
            console.log(err)
   })
}

exports.getDetails = (req, res, next) => {
   const productId = req.params.productid;
   const type = req.query.type;
   switch (type) {
      case 'safari':
         Safari.findById(productId)
            .then(safari => {
               res.render("saf-details", {
                  pageTitle: `${safari.name} | Kifaru Adventures`,
                  path: '/details',
                  safari: safari
               })
            })
            .catch(err => {
               console.log(err)
            })
         break;

      case 'lodge':
         Lodge.findById(productId)
            .then(lodge => {
               res.render("lod-details", {
                  pageTitle: `${lodge.name} | Kifaru Adventures`,
                  path: '/details',
                  lodge: lodge
               })
            })
            .catch(err => {
               console.log(err)
            })
         break;
      default:
         throw new Error('No case like that!!!')
         break;
      
   }
}

exports.getLodge = (req, res, next) => {
   Lodge.find()
   .then(lodges => {
      res.render('lodging', {
         pageTitle: 'Lodging | Kirafu Adventures',
         path: '/lodging',
         lodges: lodges
      })
   })
   .catch(err => {
         console.log(err)
})
}

exports.getHunt= (req, res, next) => {
   res.render('hunting', {
      pageTitle: 'Hunting | Kirafu Adventures',
      path: '/hunting'
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