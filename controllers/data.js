module.exports.controller = function(app){
    app.get('/data/myData',function(req,res){
        res.send("This is the data page");
    })
}