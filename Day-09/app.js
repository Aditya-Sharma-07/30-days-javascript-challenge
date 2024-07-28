// DOM Manipulation
// Activity 1: Selecting and Manipulating Elements
// Task 1: Select an HTML element by its ID and change its text content.
let h1 = document.getElementById('heading');
h1.textContent = "Beautiful dog image";

// Task 2: Select an HTML elemwnt by its class and change its background color.
let H1 = document.getElementsByClassName("head1");
H1[0].style.backgroundColor = "red";

// Activity 2: Creating and Appending elements
// Task 3: Create a new div element with some text content and append it to the body.
let div1 = document.createElement('div');
div1.textContent = "Hello, I am a div...";
document.querySelector('body').append('div1');

// Task 4: Create a new 'li' element and add it an existing ul list.
let li = document.createElement('li');
li.textContent = "Sleeps";
document.querySelector('ul').append(li);

// Activity 3: Removing Elements
// Task 5: Select an HTML element and remove it from the DOM.
let p = document.querySelector('p');
p.remove();

// Task 6: Remove the last child of a specific HTML element.
let task = document.querySelector('.task6');
task.lastElementChild.remove();

// Activity 4: Modifying attributes and classes
// Task 7: Select an HTMl element and change one of its attributes(e.g., src of an img).
let img = document.querySelector('img');
img.setAttribute('src',"https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZG9nfGVufDB8fDB8fHww")

// Task 8: Add and remove a CSS class to/from an HTML element.
let ul = document.querySelector('ul');
ul.classList.add('hello');
ul.classList.remove('bye');

// Activity 5: Event Handling
// Task 9: Add a click event listener to a button that changes the text content of a paragraph.
let btn = document.querySelector('button');
btn.addEventListener('click',() => {
    document.querySelector('.para').textContent = "three four five six"
})

// Task 10: Add a mouseover event listener to an element that changes the border color.
ul.addEventListener('mouseover',() => {
    ul.style.borderColor = "crimson";
})