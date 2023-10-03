const axios = require('axios');
const wl = require('./woodpecker_login');

const start_message = function(name)
{
    console.log(``);
    console.log(`----------------- ${name}`);
    console.log(``);
};

const end_message = function(name)
{
    console.log(``);
    console.log(`----------------- ${name}`);
    console.log(``);
};

exports.utilities = 
{
    start_message: start_message
    ,end_message: end_message
    ,request : (test_name, json_data, target, callback = function(){}) => wl.login(function(sid)
    {
        start_message(test_name);
    
        axios.get(`https://127.0.0.1:8080/api/${target}?json=${JSON.stringify(json_data)}`, {headers:
        {
            'Cookie': `cpw-woodpecker-sid=${sid}`
            ,'Content-Type': 'application/json'
        }})
        .then(res => 
        {
            console.log(res.data);
            end_message(test_name);
            callback();
        })
        .catch(err =>
        {
            console.error(err.response.data)
            end_message(test_name);
        })
        ;
    })
};