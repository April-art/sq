// 加载模块
let path = require('path');
let querystring = require('querystring');
let express = require('express');
var router = express.Router();
let app = express();
let sql = require('./SQL/sql');
// let singerapi = require('./model/singerapi');
let cookieParser = require('cookie-parser');
app.use(cookieParser());
// 端口号
app.set('port',process.env.PORT || 8081);

// 跨域处理
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Connection, User-Agent, Cookie");
    res.header("Access-Control-Allow-Methods", "POST,GET");
    res.header("X-Powered-By", ' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// ==========================================接受用户注册在数据库中添加数据
app.post('/buttom/register',function(req,res){
    let post = '';
    req.on('data',function(data){       
        post += data;
        // console.log(post);
        
    }) 
    req.on('end',function(){
            //转化为json对象
            post = JSON.parse(post);
            sql.addusers(post,function(result){
                console.log(result);
                if(result){
                    res.send(result);
                }else{
                    res.send('....');
                }
            }); 
        
    })
});
//================================================关注漫画
app.post('/CTcontent',function(req,res){
    let post = '';
    req.on('data',function(data){
        post += data;
        
    })
    req.on('end',function(){
        // z转化为json对象
        post = JSON.parse(post);
        // console.log(post);
        sql.collect(post,function(result){
            console.log(result)
           

            res.send(result)
        })

    })
})
// ================================================用户登录
app.post('/buttom/login',function(req,res){
    let post = '';
    req.on('data',function(data){
        post += data;
    });
    req.on('end',function(){
        //转化为json对象
        post = JSON.parse(post);
        // console.log(post);
        sql.login(post,function(result){
            console.log(Boolean(result))
            res.send(result)
            // console.log('成功登录')
        });
    })
    
})
app.get('/buttom/myself',function(req,res){
    let user_id = sql.user_id
    // let user_id = req.params.id
    sql.checkuser(user_id,function(result){
      
        res.send(result);
    });
    console.log(user_id)
    // res.send(user_id);
})


app.listen(app.get('port'),function(){
    console.log(app.get('port'));
})