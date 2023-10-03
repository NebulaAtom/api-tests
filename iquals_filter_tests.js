
const ut = require('./utilities');


const test3 = () => ut.utilities.request('Test 3', [{"type":"iqual","contents":[{"id":"0","value":2}]}], 'stores');

const test2 = () => ut.utilities.request('Test 2', [{"type":"iqual","contents":[{"id":"0","value":2}]}], 'products', test3);

ut.utilities.request('Test 1', [{"type":"iqual","contents":[{"id":"0","value":3}]}], 'stores', test2);
