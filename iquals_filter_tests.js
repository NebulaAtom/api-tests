const axios = require('axios');

const ut = require('./utilities');
const wl = require('./woodpecker_login');

wl.login(function(sid)
{
    ut.utilities.start_message('Test 1');

    let json = [{"type":"iqual","contents":[{"id":"0","value":2}]}];
    axios.get(`https://127.0.0.1:8080/api/stores?json=${JSON.stringify(json)}`, {headers:
    {
        'Cookie': `cpw-woodpecker-sid=${sid}`
        ,'Content-Type': 'application/json'
    }})
    .then(res => 
    {
        console.log(res.data);
        ut.utilities.end_message('Test 1');
    })
    .catch(err =>
    {
        console.error(err.response.data)
        ut.utilities.end_message('Test 1');
    })
    ;
});