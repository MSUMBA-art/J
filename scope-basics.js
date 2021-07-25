let a = 'first';


function scopeTest() {
    console.log(a);
    a = 'changed';

    let b = 'second';
    if (a != '') {
        console.log(a);
        console.log('ALEXANDER MSUMBA: ' + b);
        let c = 'third';
        
        
    }
}

scopeTest();