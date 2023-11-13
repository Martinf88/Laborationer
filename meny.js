// Mål: visa en textbaserad meny för användaren, där man kan välja olika alternativ
import { getQuestion } from './readline.js'

const [question, close] = getQuestion()
// getQuestion returnerar två funktioner: question och close
// Använd funktionen question för att ställa en fråga till användaren
// Använd close sist i programmet


// let name = await question('Vad heter du?')
// console.log('Namn: ' + name);


// visa info för användaren
// vänta på input
// if-sats för vad man har skrivit
// upprepa
// &&  <- x och y
// ||  <- x eller y
let input = ''
while( input !== 'q' ) {
	console.log();
	console.log('Huvudmeny. Välj ett alternativ:');
	console.log('1. Figur A');
	console.log('2. Figur B');
	console.log('3. Figur C');
	console.log('4. Figur D');
	console.log('Q. Avsluta');
	input = await question('> ')
	input = input.toLowerCase()

	if( input == 'q' ) {
		console.log('Avslutar...');
	}
	else if( input === '1' ) {
		figurA()
	}
	else if( input === '2' ) {
		figurB()
	}
	else if( input === '3' ) {
		figurC()
	}
	else if( input === '4' ) {
		figurD()
	}
}

function figurA () {
	for (let i = 0; i < 6; i++) {
		let text = '';
		for (let j = 0; j < 8; j++) {
		  if (j === 0) {
			text = `${text}#`;
		  } else {
			text = `${text}.`;
		  }
		}
		console.log(text);
	  }
		// console.log();
}

function figurB () {
	for (let i = 0; i < 8; i++) {
		let text = '';
		for (let j = 0; j < 8; j++) {
		  text = (j === i) ? `${text}#` : `${text}.`;
		}
		console.log(text);
	  }
		// console.log();
}

function figurC () {
	for (let i = 0; i < 6; i++) {
		let text = '';
		for (let j = 0; j < 8; j++) {
			if (j >= 2 && j < 5) {
				text = `${text}#`;
			} else {
				text = `${text}.`;
			}
		}
			console.log(text);
	}
}

function figurD () {
	for (let i = 0; i < 6; i++) {
		let text = '';
		for (let j = 0; j < 8; j++) {
			if (i === 2) {
				text = `${text}#`;
			}
			else if (j >= 2 && j < 3) {
				text = `${text}#`;
			} else {
				text = `${text}.`;
			}
		}
			console.log(text);
	}
}


// Close behövs för att programmet ska sluta när det är färdigt
close()