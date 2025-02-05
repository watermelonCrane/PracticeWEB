console.log('welcom.');

alert("Welcome to My Todo Lists.");

const todo = [];

do {
    let command = prompt("Input your command.");
    if (command === 'quit') break;
    switch(command) {
        case 'new':
            todo.push(prompt("input your todos"));
            break;
        case 'list':
            console.log("*************");
            console.log(`${todo.length} things to do`);
            for (let i = 0; i < todo.length; i++) {
                console.log(`${i + 1}: ${todo[i]}`);
            }
            console.log("*************");
            break;
        case 'delete':
            const numberList = parseInt(prompt("Enter a number for the list to delete."));
            if (Number.isNaN(numberList)) {
                console.log('NaN....');
                continue;
            }
            todo.splice(numberList - 1, 1);
            console.log("done!");
            break;
        default:
            console.log("Invalid command. Try Agin.");
    }
} while(true);


console.log("the app was shut down");