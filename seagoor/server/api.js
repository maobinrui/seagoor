// 可能是我的node版本问题，不用严格模式使用ES6语法会报错
"use strict";
const models = require('./db');
const express = require('express');
const router = express.Router();

/************** 创建(create) 读取(get) 更新(update) 删除(delete) **************/

// 创建账号接口
router.post('/api/login/createAccount', (req, res) => {
    // 这里的req.body能够使用就在index.js中引入了const bodyParser = require('body-parser')
    models.find({ username: req.body.username }, (err, docs) => {
        console.log(docs);
        var result = {
            code: 1,
            message:'注册成功'
        }
        if (err || docs.length > 0) {
            result.code = -99;
            result.message = "用户名存在或者服务器出错";
            res.send(JSON.stringify(result));
            return;
        }
        var user = new models();
        user.username = req.body.username;
        user.password = req.body.password;
        user.save((err) => {
            if (err) {
                result.code = -99;
                result.message = "注册失败";
            }
            res.send(JSON.stringify(result));
        })
    })
});
// 获取已有账号接口
router.post('/api/login/getAccount', (req, res) => {
    // 通过模型去查找数据库
    models.find({ username: req.body.username, password: req.body.password },(err, docs) => {
        var result = {
            code: 1,
            message:'登陆成功'
        }
        if (err || docs.length == 0) {
            result.code = -97;
            result.message = "用户名或者密码错误，重来";
        } else {
            req.session.username = req.body.username;
        }
        console.log(req.session.username)
        res.send(JSON.stringify(result));
    })
});

module.exports = router;
