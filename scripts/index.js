'use strict';

const enterBtn = document.getElementById('enterBtn');


enterBtn.addEventListener('click', () => {
    const storeData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        student: document.getElementById('student').checked,
        instructor: document.getElementById('instructor').checked
    }

    localStorage.setItem('storeData', JSON.stringify(storeData));
    if(document.getElementById('student').checked === true) {
        window.location.href = `./information.html?selected = student`;
    }
    if( document.getElementById('instructor').checked === true){
        window.location.href = `./information.html?selected = instructor`;
    }
});