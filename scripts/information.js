'use strict';

const params = new URLSearchParams(location.search);
const role = params.get('selected');
console.log(role);

const message = document.getElementById('message');

if(role === 'student') {
   message.innerHTML = 'Welcome student';
}
else if(role === 'instructor') {
    message.innerHTML = 'Welcome instructor';
}
