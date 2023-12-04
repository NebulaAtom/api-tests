const axios = require('axios');

process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const login = function(callback)
{
    axios.post('https://127.0.0.1:8080/api/v0/system/login', [{"user": "root", "password": "root_password"}])
    .then(res => search_sid(res, callback))
    .catch(err => console.error(`Error al iniciar sesion: ${err.response.data.message}`))
    ;
}

const search_sid = function(response, callback)
{
    let cookies = response.headers['set-cookie'];

    for(let cookie of cookies)
    {
        let first = cookie.split(';');
        let session = first[0].split('=');
        if(session[0] == 'cpw-woodpecker-sid')
            callback(session[1]);
    }

};

exports.login = login;
