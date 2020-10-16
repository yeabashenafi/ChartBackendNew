module.exports.controller = function(app){
    app.get('/main/profile',function(req,res){
        res.send("This is the profile page");
    })
}