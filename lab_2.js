const books = [
	{
		id: 1,
		title: "The Great Gatsby",
		author: "F. Scott Fitzgerald",
		genre: "Classic",
		price: 9.99
	},
	{
		id: 2,
		title: "To Kill a Mockingbird",
		author: "Harper Lee",
		genre: "Classic",
		price: 11.99
	},
	{
		id: 3,
		title: "Harry Potter and the Sorcerer's Stone",
		author: "J.K. Rowling",
		genre: "Fantasy",
		price: 12.99
	},
	{
		id: 4,
		title: "The Hobbit",
		author: "J.R.R. Tolkien",
		genre: "Fantasy",
		price: 10.49
	},
	{
		id: 5,
		title: "1984",
		author: "George Orwell",
		genre: "Dystopian",
		price: 8.99
	},
	{
		id: 6,
		title: "The Catcher in the Rye",
		author: "J.D. Salinger",
		genre: "Fiction",
		price: 7.99
	},
	{
		id: 7,
		title: "Pride and Prejudice",
		author: "Jane Austen",
		genre: "Romance",
		price: 9.49
	},
	{
		id: 8,
		title: "The Da Vinci Code",
		author: "Dan Brown",
		genre: "Mystery",
		price: 13.99
	},
	{
		id: 9,
		title: "The Alchemist",
		author: "Paulo Coelho",
		genre: "Adventure",
		price: 11.99
	},
	{
		id: 10,
		title: "The Hunger Games",
		author: "Suzanne Collins",
		genre: "Dystopian",
		price: 10.99
	},
	{
		id: 11,
		title: "The Shining",
		author: "Stephen King",
		genre: "Horror",
		price: 14.99
	},
	{
		id: 12,
		title: "The Lord of the Rings",
		author: "J.R.R. Tolkien",
		genre: "Fantasy",
		price: 15.99
	},
	{
		id: 14,
		title: "Pride and Prejudice",
		author: "Jane Austen",
		genre: "Romance",
		price: 9.49
	},
	{
		id: 15,
		title: "The Girl on the Train",
		author: "Paula Hawkins",
		genre: "Thriller",
		price: 12.49
	},
	{
		id: 16,
		title: "The Road",
		author: "Cormac McCarthy",
		genre: "Post-Apocalyptic",
		price: 10.99
	},
	{
		id: 17,
		title: "The Martian",
		author: "Andy Weir",
		genre: "Science Fiction",
		price: 11.99
	},
	{
		id: 18,
		title: "Moby-Dick",
		author: "Herman Melville",
		genre: "Adventure",
		price: 10.99
	},
	{
		id: 19,
		title: "The Kite Runner",
		author: "Khaled Hosseini",
		genre: "Drama",
		price: 11.49
	},
	{
		id: 20,
		title: "Brave New World",
		author: "Aldous Huxley",
		genre: "Dystopian",
		price: 9.99
	},
	{
		id: 21,
		title: "The Road Not Taken",
		author: "Robert Frost",
		genre: "Poetry",
		price: 6.99
	},
	{
		id: 22,
		title: "The Girl with the Dragon Tattoo",
		author: "Stieg Larsson",
		genre: "Mystery",
		price: 13.99
	},
	{
		id: 23,
		title: "The Adventures of Sherlock Holmes",
		author: "Arthur Conan Doyle",
		genre: "Mystery",
		price: 10.99
	},
	{
		id: 24,
		title: "A Tale of Two Cities",
		author: "Charles Dickens",
		genre: "Historical Fiction",
		price: 8.99
	},
	{
		id: 25,
		title: "The Silent Patient",
		author: "Alex Michaelides",
		genre: "Psychological Thriller",
		price: 12.99
	}
];

export { books }

const titlar = []

books.forEach(book => {
	titlar.push(book.title);
});



function bookstore () {
//1 Hur många böcker finns det i affären?
	console.log(`Det finns ${books.length} böcker i affären`);
	//2 Skriv ut namnen på alla böcker.
	console.log(titlar);
//3 Skriv ut namn och pris för alla böcker av typen "Fantasy".
	for (const i of books) {
		if (i.genre === "Fantasy") {
			console.log(`Fantasy: ${i.title}, Pris ${i.price}`);
		}
	}
	
//4 Skriv ut namn och genre för alla klassiker, dystopier och mysterieböcker.
	for (const x of books) {
		if (["Classic", "Dystopian", "Mystery"].includes(x.genre)) {
			console.log(`Övrigt: ${x.title}, ${x.genre}`);
		}
	}
//5 Skriv ut namn och pris för alla böcker som kostar över $10.
	for (const y of books) {
		if (y.price >= 10) {
			console.log(`Kostar mer än $10: ${y.title}, ${y.price}`);
		}
	}
//6 Hur mycket är hela bokinnehavet värt? (Vad är det totala priset, om man skulle sälja alla böcker?)
	let summa = 0
	
	for (const v of books) {
		summa += v.price
	}
	console.log(`Totala (avrundade) summan är:$${Math.round(summa)}`);

//7 Vilka böcker är sammanlagt värda mest, dystopian eller mystery?
	
	let totalSummaDystopian = 0;
	let totalSummaMystery = 0;

	books.forEach(book => {
	if (book.genre === "Dystopian") {
		totalSummaDystopian += book.price;
	} else if (book.genre === "Mystery") {
		totalSummaMystery += book.price;
	}
	});

	if (totalSummaDystopian > totalSummaMystery) {
	console.log(`Dystopian-böcker är sammanlagt värda mest: ${totalSummaDystopian} VS ${totalSummaMystery}`);
	} else if (totalSummaMystery > totalSummaDystopian) {
	console.log(`Mystery-böcker är sammanlagt värda mest: ${totalSummaMystery} VS ${totalSummaDystopian}`);
	} else {
	console.log("Dystopian- och Mystery-böcker är värda lika mycket.");
	}

//8 Skriv ut namnen på alla böcker i bokstavsordning.

	books.sort((a, b) => {
		const titleA = a.title.toLowerCase();
		const titleB = b.title.toLowerCase();
		if (titleA < titleB) return -1;
		if (titleA > titleB) return 1;
		return 0;
	  });

	  books.forEach(book => {
		console.log(book.title);
	  });

// 9 Vilken bok finns det en dubblett av?
	  
	const dubblettTitlar = [];
	const tidigareTitlar = new Set();

	books.forEach(book => {
	if (tidigareTitlar.has(book.title)) {
		dubblettTitlar.push(book.title);
	} else {
		tidigareTitlar.add(book.title);
	}
	});

	if (dubblettTitlar.length > 0) {
	console.log("Följande titel finns som en dubblett i listan:");
	console.log(dubblettTitlar);
	} else {
	console.log("Inga dubbletter av titlar hittades.");
	}

//10 Vilka författare har ett namn som består av mer än 2 ord? Ta inte med författare som har punkter i sina namn.
	
	const författareMedMångaOrd = books.filter(book => {
		const författarNamn = book.author.split(' ');
		return författarNamn.length > 2 && !författarNamn.some(word => word.includes('.'));
	});

	const författare = författareMedMångaOrd.map(book => book.author);

	console.log(`Författare med mer än 2 ord i namnet & utan punkter: ${författare}`);

	//11 Skriv ut namnen på alla författare i bokstavsordning. Sortera efter författarens efternamn.

	const authorList = books.slice();

	authorList.sort((a, b) => {
		const efternamnA = a.author.split(" ").pop();
		const efternamnB = b.author.split(" ").pop();
		return efternamnA.localeCompare(efternamnB);
	});


	const författareNamn = authorList.map(book => book.author);

	console.log('Författare sorterade i bokstavsordning efter efternamn:');
	console.log(författareNamn)

}




bookstore()
