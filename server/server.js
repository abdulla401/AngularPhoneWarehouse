var express = require('express');
var logger = require('morgan');
var fs = require("fs");
var events = require('events');
var router = express.Router();
var app = express();
app.use(logger('dev'));
app.use(express.static(__dirname + '/../public'));

var Phones = []

fs.readFile(__dirname + "/" + "data.json", 'utf8', function(err, data) {
    Phones = JSON.parse(data);

});

var phoneFilterService = function(search, pageNum, itemsPerPage) {
    var ret = [];
    if (search != null) {
        ret = Phones.filter(function(a) {
            if (a.title.indexOf(search) != -1) return true;
        }).sort(function(a, b) {
            return a.title.localeCompare(b.title)
        });
    }

    if (pageNum != null & itemsPerPage != null) {
        var start = (pageNum - 1) * itemsPerPage;
        var end = start + parseInt(itemsPerPage);
        console.log("start " + start + " end: " + end);
        ret = ret.slice(start, end);
    }
    return ret;
};


//api/Phones/title?q=&page=&size=10

router.get('/api/Phones', function(req, res) {

      res.json(Phones);
});

router.get('/api/username/check/:username', function(req, res) {
	console.log(req.params.username);
	if(req.params.username === "abbu"){
			res.json({isUnique:true});
	}else{
		res.json({isUnique:false});
	}
      
});

router.get('/api/phones/search=:search&page=:page&items=:items', function(req, res) {
   var filteredMovies =  phoneFilterService(req.params.search, req.params.page, req.params.items);
   res.json(filteredMovies);
});

app.use('/', router);

app.listen(8000, function() {
    console.log('App  --  started on port 8000!');
});