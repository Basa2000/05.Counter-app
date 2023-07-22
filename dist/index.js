const countValue = document.querySelector('#counter');


const increment = () =>{

    // get the value from UI 
    let value = parseInt(countValue.innerText);
    // upadate the value 
    value = value + 1;
    // set the value onto IU 
    countValue.innerText = value

}


const decrement = () =>{

    // get the value from UI 
    let value = parseInt(countValue.innerText);
    // upadate the value 
    value = value - 1;
    // set the value onto IU 
    countValue.innerText = value

}

