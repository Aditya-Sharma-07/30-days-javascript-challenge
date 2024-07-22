// Activity 1
// Task 1: Add a click event listener to a button that changes the text content of a paragraph.
document.querySelector(".div1 button").addEventListener('click',() => {
    document.querySelector('.div1 p').textContent = "Hey! I am a paragraph.";
});

// Task 2: Add a double click event listener to an image that toggles its visibility.
document.querySelector(".div2 button").addEventListener('dblclick',() => {
    document.querySelector('.div2 img').classList.toggle("changer")
});

// Activity 2
// Task 3: Add a mouseover event listener to an element that changes its background color.
document.querySelector(".div3").addEventListener('mouseover',() => {
    document.querySelector(".div3").style.backgroundColor = "red";
});
// Task 4: Add s mouseout event listener to an element that resets its background color.
document.querySelector(".div3").addEventListener('mouseout',() => {
    document.querySelector(".div3").style.backgroundColor = "";
});

// Activity 3
// Task 5: Add a keydown event listener to an input field that logs that the key pressed to the console.

let scanf = document.querySelector(".div4 input");
scanf.addEventListener('keydown',(e) => {
    console.log(e.key);
});
// Task 6: Add a keyup event listener to an input field that displays the current value in a paragraph.
let scanf1 = document.querySelector(".div5 input");
scanf1.addEventListener('keyup',(e) => {
    document.querySelector(".div5 p").textContent = scanf1.value;
});

// Activity 4
// Task 7: Add a submit event listener to a form that prevents the default submission and logs the form data to the console.
let form = document.querySelector(".div6 form");
form.addEventListener("submit",(e) => {
    e.preventDefault();
    console.log(e.target[0].value);
    console.log(e.target[1].value);
});

// Task 8: Add a change event listener to select dropdown that displays the selected value in a paragraph.
let dropdown = document.querySelector(".div7 select");
dropdown.addEventListener('change',(e) => {
    e.stopPropagation();
    document.querySelector(".div7 p").textContent = e.target.options[e.target.selectedIndex].textContent;
})

// Activity 5
// Task 9: Add a click event listener to a list that logs the text content of the clicked list item using event delegation.

let ul = document.querySelector(".div8 ul");
ul.addEventListener('click',(e) => {
    e.stopPropagation();
    if(e.target.tagName == 'LI'){
        console.log(e.target.textContent);
    }
})
// Task 10: Add an event listener to a parent element that listens for events from dynamically added child elements.
let task10 = document.querySelector(".div9");
let paragraph = document.createElement("p");
paragraph.innerText = "Hello Everyone, Good Morning!!";
task10.append(paragraph);

task10.addEventListener('mouseover',(e) => {
    if(e.target.tagName == "P"){
        e.target.style.color = "red";
    }
});
task10.addEventListener('mouseout',(e) => {
    if(e.target.tagName == "P"){
        e.target.style.color = "";
    }
});