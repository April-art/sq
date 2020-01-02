let sql = require('../SQL/mysql');
exports.getalbum = function(req,res){
    let id = req.params.p;
    sql.getalbum(id,function(list){
        console.log(list);
        //组装html代买
        let album_html = '' ;
        for(i=0;i<list.length;i++){
            album_html += ' <option value=""></option>     '
        }
        let json = {list:list,album_html:album_html};
        //转换成json格式进行传输
        res.writeHead(200,{'Content-type':'application/json'});
        // JSON.stringify() 方法将 JavaScript 对象转换为字符串。
        res.end(JSON.stringify(json));
    })

}
// ========================================用户登录方法
exports.user_id = -1;
exports.getlogin = function(req,res){

    let name = req.params.name;
    let pass = req.params.pass;
    sql.login(name,pass,function(list){
        // console.log(list[0]);
        if(list[0]){     
            let json = {list:list[0].user_id}; //id
            let name = {list:list[0].user_name};//用户名
            //  exports.user_name = {list:list[0].user_name}
            exports.user_name = name.list;
            let user_id = json.list;
            
            exports.user_id = json.list;
            res.cookie("user",user_id,{maxAge:24*24*3600*1000 , httpOnly: true})
            // res.cookie("user_id",name,json,{maxAge:5*1000 , httpOnly: true});

            res.writeHead(200,{'Content-type':'application/json'});
            res.end(JSON.stringify(json));
            return;
        }
        console.log('账号或密码错误');
        let json = {list:false};
        res.writeHead(200,{'Content-type':'application/json'});
        res.end(JSON.stringify(json));
    });

}
// ==================================================添加歌单歌曲
exports.addlistsong = function(req,res){
    
}


 