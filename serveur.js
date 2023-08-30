let express = require('express');


let app = express();

//moteur de template
app.set('view engine','ejs');

//distrubuer les fichier static
app.use(express.static('public'));

app.get('/',(request,response)=>{
    response.render('index')
});

app.listen(8080);