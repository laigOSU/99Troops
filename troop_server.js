var express = require('express');
var app = express();

var handlebars = require('express-handlebars').create({defaultLayout:'main'});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
app.set('port', 47108);


/* ACCESS TO STATIC FILES */
app.use(express.static('public'));

/* MAIN PAGE */
app.get('/',function(req,res){
  res.render('home');
});

/* ABOUT PAGE */
app.get('/about', function(req,res){
    res.render('about');
});

/* DISABLED VETS PAGE */
app.get('/vets',function(req,res){
    res.render('vets');
  });

/* DOWNLOAD FILE VETS APPLICATION */
app.get('/download', function(req,res){
  res.download(__dirname + '/downloads/99TroopsApplication.pdf');
});

/* HOW IT WORKS PAGE */
app.get('/how-donate',function(req,res){
    res.render('how-donate');
  });

/* CONTACT PAGE */
app.get('/contact',function(req,res){
    res.render('contact');
  });

app.use(function(req,res){
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.type('plain/text');
  res.status(500);
  res.render('500');
});

app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
