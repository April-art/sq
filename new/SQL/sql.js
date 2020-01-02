// 加载模块
let mysql = require('mysql');//加载数据模块
// 连接数据库
let con = mysql.createConnection({
    // 数据库设计
    host:'localhost',
    user:'root',
    password:'root',
    port:'3306',
    database:'test'
});
// 链接 
con.connect(function(err){
    if(err){
        console.log(err);
        return;
    }
    console.log('                 ok????');
})
// ==================================================添加用户信息
exports.addusers = function(data,fun){
    console.log(data);
    let sql = 'insert into user (user_name,user_password,user_phone,user_email) values (?,?,?,?)';
    let params = [data.user_name,data.user_password,data.user_phone,data.user_email];
    con.query(sql,params,function(err,result){
        if(err){
          
            console.log(err);
            return;
        }
        fun(result);
    });
}
// =======================================================用户登录
exports.login = function(data,fun){
    let user_phone = data.user_phone;
    let user_password = data.user_password;
    let sql = 'select * from user where user_phone = '+user_phone+' and user_password = '+user_password+'';
    con.query(sql,function(err,result){
        if(err){
            console.log(err);
            return
        }
        // console.log(result[0].user_id);
        exports.user_id = result[0].user_id
        fun(result);
    })

}
// ============================================================查询用户信息
exports.checkuser = function(user_id,fun){
    let sql = 'select * from user where user_id = '+user_id+'';
    con.query(sql,function(err,result){
        if(err){
            console.log(err);
            return
        }
        fun(result);
    })
}
// =================================================关注漫画
exports.collect = function(data,fun){
 
    console.log(data.data_name);
    let sql = 'insert into user_like (name,mhurl1,cover_img,author,user_id) value (?,?,?,?,?)';
    let params = [data.data_name,data.data_url,data.data_cover,data.data_author,data.data_user_id];
    con.query(sql,params,function(err,result){
        if(err){
            console.log(err);
            return;
        }
        fun(result);
    })
} 
