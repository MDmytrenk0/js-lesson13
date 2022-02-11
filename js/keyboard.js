const screen = document.getElementById('screen');
let arr1 = [12, 17, 18, 19, 27, 33, 34, 35, 36, 37, 38, 39, 40, 45, 46, 91, 92, 93, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 109, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 144, 145]; 
let arr2 = [32, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 186, 187, 188, 189, 190, 191, 192, 219, 220, 221, 222];
let arr3 = [20, 9, 16, 8, 13];
window.addEventListener('keydown', function (event) {
    // screen
    let key = event;
    if (arr2.includes(event.keyCode)) {
        screen.textContent += key.key;
    }
    else if(arr3.includes(event.keyCode)) {
        screen.textContent += '';
    }
    else {
        return;
    }
    
    let code = event.code
    switch (code) {
        case 'Tab':
            event.preventDefault ();
            screen.textContent += '\t';
            break;
        case 'Enter':
            screen.textContent += '\n';
            break;
        case 'Backspace':
            screen.textContent = screen.textContent.slice(0, screen.textContent.length-1);
            break;
        default:
            break;
    }
    
    // backlight 
    if(arr1.includes(event.keyCode)) { 
        return;
    }
    else {
        document.getElementById(event.code).classList.add('active');
    }
})
window.addEventListener('keyup', function (event) {
    // backlight 
    if(arr1.includes(event.keyCode)) { 
        return;
    }
    else {
        document.getElementById(event.code).classList.remove('active');
    }
})