
const ut = require('./utilities');

// Function: /products
ut.utilities.request_get('Custom Test 1: /products',
[
    {
        "action_id": "a1"
        ,"parameters":
        [
            {"name": "storeName", "value": "Paris Restaurant"}
        ]
    }
], 'products', function(){});

ut.utilities.request_get('Custom Test 2: /products',
[
    {
        "action_id": "a1"
        ,"parameters":
        [
            {"name": "storeName", "value": "Paris Restaurant"}
        ]
    }
    ,{
        "action_id": "a2"
        ,"parameters":
        [
            {"name": "productPrice", "value": 6}
        ]
    }
], 'products', function(){});
