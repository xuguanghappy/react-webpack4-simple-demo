//IE promise
if(typeof Promise === 'undefined') {
    window.Promise = Promise
}

// fetch() polyfill
require('whatwg-fetch');

// Object.assign() polyfill , compatible IE
Object.assign = require('object-assign');
