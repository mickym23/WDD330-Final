exports.getIndex = (req, res, next) => {
   res.render('home', {
      pageTitle: 'Home | Kirafu Adventures'
   })
}

exports.getSafari = (req, res, next) => {
   res.render('safari', {
      pageTitle: 'Safari | Kirafu Adventures'
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