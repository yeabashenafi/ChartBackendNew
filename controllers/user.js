module.exports.controller = function(app){
    app.get('/user/mypage',function(req,res){
        res.send("This is the user page");
    })

    app.get('/users/',function(req,res){
        console.log("Here we go fabrizio romano")
        res.send("This is the user page");
    })
}