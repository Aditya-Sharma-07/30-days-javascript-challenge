// Objects
// Activity 1: Object creation and access
// Task 1: Create an object representing a book with properties like title, author, and the year, and log the object to the console.
let book = {
    title: "JavaScript 2024",
    author: "Mark Marker",
    year: 2024,
}
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log(book.title);
console.log(book.author);

// Activity 2: Object methods
// Task 3: Add a method to the book object that returns a string with the book's title and author and log the result of calling this object.
book.mtd1 = function () {
    return `Book Details : ${this.title}, ${this.author}`;
}
console.log(book.mtd1());
// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
book.mtd2 = function (year) {
    book.year = year;
    console.log(book.year);
}
book.mtd2(2007);

// Activity 3: Nested objects
// Task 5: Create a nested object representing a library with properties like name and books(an array of books objects), and log the library object to the console.
let library = {
    name: "Programming Books",
    books: [{
        bookName: "C++ Advanced",
    }, {
        bookName: "C# Guide for beginners",
    }, {
        bookName: "Python's History",
    }
    ]
}
console.log(library);

// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log(library.name);
for (item of library.books) {
    console.log(item.bookName);
}

// Activity 4: this keyword
// Task 7: Add a method to the book that uses the 'this' keyword to return a string with book's title and year , and log the result of calling this method.
book.mtd3 = function () {
    return `Book's Title & Year :${this.title} and ${this.year}`;
}
console.log(book.mtd3());
// Activity 5: Object iteration
// Task 8: Use a for...in loop to iterate over the properties of the book object and log each property and its value.
for (key in book) {
    console.log(key);
    console.log(book[key]);
}
// Task 9: Use 'Object.keys' and 'Object.values' methods to log all the keys and values of the book object.
console.log(Object.keys(book));
console.log(Object.values(book));