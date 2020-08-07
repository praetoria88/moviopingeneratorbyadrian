import * as readline from 'readline';
import pinGenerator from './pingenerator';

//Receive user input as per prompted question
var r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
    });

    r1.question('Press Enter to get your bacth of 4 digits pin number: ', () => {
    console.log(`Here is your Library, Enjoy: ${pinGenerator()}`);
    r1.close();
    });
    
