let greeting = confirm('Howdy! Would you like to enter any number?')
    if (greeting === true) {
        let str = prompt('Alright! Please enter a number');
    
        while (isNaN(+str) === true) {
        str = prompt("Whoops! Looks like it's not a number :( Try again!");
        } 
    
        if (str === '') {
        alert("Oh, it's just an empty string. We call it 'null'");
        str = prompt("Let's try to enter a number again!");
        } else if (str === null) {
            alert("And the winner is 'null'! Feel free to come again if you change your mind :)");
            str = prompt("Let's try to enter a number again!");
        }
    
        alert(`Great! Just a reminder: the number was ${+str}`);
} else {
    alert('No worries! Feel free to come again if you change your mind :)')
}