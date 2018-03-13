let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Car Tracker' , message: 'COMP 2106 In-Class Node Application' });
});
//GET:/ about

router.get('/about',(req, res, next) => {
  //load about view
    res.render('about', {
      title: 'About the car tracker',
        message: 'This app is built with MEAN stack'
    });
});

//GET: /contact
router.get('/contact',(req, res, next) => {
    //load about view
    res.render('contact', {
        title: 'Contact Us',
        message: 'Here is the contact Information'
    });
});
module.exports = router;

//GET: /register
router.get('/register', (req, res, next)=>{
    res.render('register', {
        title:'Register'
    });
});
//GET: /login
router.get('/login', (req, res, next)=>{
    res.render('login', {
        title:'Login'
    });
});
