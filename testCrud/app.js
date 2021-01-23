///////////////////////
// Global Data
///////////////////////

const people = [
  { name: "Alex Merced", age: 35 },
  { name: "Bob Jones", age: 65 },
  { name: "Steve Smith", age: 22 },
  { name: "Macie Willis", age: 32 },
  { name: "John Jingle", age: 40 },
]

//document.querySelector takes a css selector and returns the first element that matches that selector
const mainDiv = document.querySelector("main") // returns the one main element in our html

//below we will add our form inputs to some global variables
const nameInput = document.querySelector('input[name="name"]') //selecting the input with name property "name"
const ageInput = document.querySelector('input[name="age"]') //selecting the input with name property "name"
const createButton = document.querySelector("button#createitem") //select button with id "createitem"

///////////////////////
// Functions
///////////////////////

//define function for rendering current data to DOM, use this whenever data changes
const renderData = () => {
  //empty of the main div of any existing content
  mainDiv.innerHTML = ""

  //let us loop over the people array
  for (person of people) {
    const personH1 = document.createElement("h1") // Creates new h1 element
    personH1.innerText = `${person.name} is ${person.age} years old` //ads text to the h1
    mainDiv.appendChild(personH1) //append the h1 to the main element
  }
}

////////////////////
// Main App Logic
////////////////////

renderData() //call the render data function for the initial rendering of the data