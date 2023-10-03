const axios = require('axios');

const wl = require('./woodpecker_login');

wl.login(function(sid)
{
    let json = [];
    axios.get(`https://127.0.0.1:8080/api/stores?json=${JSON.stringify(json)}`, {headers:
    {
        'Cookie': `cpw-woodpecker-sid=${sid}`
        ,'Content-Type': 'application/json'
    }})
    .then(res => 
    {
        console.log(res.data);
    })
    .catch(err => console.error(err.response.data))
    ;
});