const sendgridKey = require('@sendgrid/mail');
const { validationResult } = require('express-validator/check')

const Safari = require('../models/safari.js');
const Lodge = require('../models/lodge.js');
const Fish = require('../models/fish.js');
const User = require('../models/user.js');

sendgridKey.setApiKey(process.env.SENDGRID_API_KEY);

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
         const error = new Error(err);
         error.httpStatusCode = 500;
         return next(error);
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
               const error = new Error(err);
               error.httpStatusCode = 500;
               return next(error);
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
               const error = new Error(err);
               error.httpStatusCode = 500;
               return next(error);
            })
         break;
      default:
         const error = new Error(err);
         error.httpStatusCode = 500;
         return next(error);
      
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
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
})
}

exports.getHunt = (req, res, next) => {
   const hunts = [
      {
         name: 'Beginners Bushveld Package',
         price: 4999,
         description: `The bushveld of Kifaru's vast expanse is famous as one of the best destinations for kudu and impala hunting in all of southern Africa. In addition to the big kudu, blue wildebeest, and impala this area is known for, this part of the country is also home to large and diverse populations of many other species of plains game. With the opportunity to enjoy an incredible African safari hunting experience for exceptional trophy quality animals in one of the wildest and least developed areas remaining in South Africa, it???s easy to understand why this is one of our most popular hunting packages. This South African hunting safari includes the trophy fees for a kudu, a blue wildebeest, an impala, and a warthog.`,
         trackers: false,
         skinners: false,
         guides: true,
         trophies: true,
         taxidermy: false
      },
      {
         name: 'Ultimate Hunter\'s Experience',
         price: 9999,
         description: `After arriving at Kifaru Adventures, you???ll be greeted by your professional hunter. He will drive you through the natural beauty of the sweeping African plains where countless herds of magnificent animals graze. After a little rest and refreshment you???ll be ready, for soon, the hunt will begin! A four-wheel drive vehicle, fitted with two-way radios, will be driven by your professional hunter during your safari. The scenery blends from hilltops to flat savannas where Springbuck and other game are numerous. Once game is spotted, you and your professional hunter will leave the vehicle to stalk on foot. He will then assist you in selecting the trophy that you will take.`,
         trackers: true,
         skinners: true,
         guides: true,
         trophies: true,
         taxidermy: true
      }
   ]
   res.render('hunting', {
      pageTitle: 'Hunting | Kirafu Adventures',
      path: '/hunting',
      hunts: hunts
   })
}

exports.getFish = (req, res, next) => {
   const fish = [
      'Barbel',
      'Mackerel',
      'Ghost Carp',
      'Rainbow Trout',
      'Red Breast Tilapia',
      'Southern Barred Minnow',
      'Inkomati Chiselmouth',
      'Redeye Labeo'
   ];
   Fish
      .find()
      .then(fishImages => {
         res.render('fishing', {
            pageTitle: 'Fishing | Kirafu Adventures',
            path: '/fishing',
            fish: fish,
            images: fishImages
         })
      })
      .catch(err => {
         const error = new Error(err);
         error.httpStatusCode = 500;
         return next(error);
   })
}

exports.getContactUs = (req, res, next) => {
   res.render('contact-us', {
      pageTitle: 'Contact Us | Kirafu Adventures',
      path: '/contact-us'
   })
}

exports.postContact = (req, res, next) => {
   const fname = req.body.fname;
   const lname = req.body.lname;
   const email = req.body.email;

   const user = new User({
      fname: fname,
      lname: lname,
      email: email
   });

   const errors = validationResult(req);
   if (!errors.isEmpty()) {
      return res.redirect('/')
   }

   return user.save()
      .then(result => {
         console.log(result);
      })
      .then(result => {
         const msg = {
            to: email,
            from: 'illuminationofdemacia@gmail.com',
            subject: 'Thank You For Contacting Kifaru Adventures',
            html: `<div style="max-width:100%; padding: 10%; color: white; background-color: #283f3b;"><img style="max-width: 100% border: whitesmoke 2px solid;" src="https://raw.githubusercontent.com/mickym23/WDD330-Final/main/kifarubanner.jpg" alt="Kifaru Banner"><br><h1>We'll contact you shortly. We appreciate your interest in Kifaru Adventures.</h1>
                     <h2>Feel free to email us at: illuminationofdemacia@gmail.com</h2></div>`
         };

         sendgridKey
            .send(msg)
            .then(result => {
               console.log('Email sent');
               res.redirect('/')
            })
            .catch(err => {
            console.log(err);
         })
      })
      .catch(err => {
         const error = new Error(err);
         error.httpStatusCode = 500;
         return next(error);
      });
}