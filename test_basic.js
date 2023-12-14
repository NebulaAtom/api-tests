
const ut = require('./utilities');

// Function: /products
ut.utilities.request_get('Custom Test: /products',
[
    {
        "action_id": "a1"
        ,"parameters":
        [
            {"name": "storeName", "value": "Arturos"}
        ]
    }
], 'products', function(){});
