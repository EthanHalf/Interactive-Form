

const nameInput = document.getElementById('name');
const designDropDown = document.getElementById('design');
const jsPunDesign = document.querySelector('option[value="js puns"]');
const iHeartJsDesign = document.querySelector('option[value="heart js"]');
const otherJobRole = document.getElementById('other-title');
const shirtColors = document.querySelectorAll('color')
const cornflowerBlue = document.querySelector('option[value="cornflowerblue"]');
const darkSlateGrey = document.querySelector('option[value="darkslategrey"]');
const gold = document.querySelector('option[value="gold"]');
const tomato = document.querySelector('option[value="tomato"]');
const steelBlue = document.querySelector('option[value="steelblue"]');
const dimGrey = document.querySelector('option[value="dimgrey"]');

//categorizes js puns  and i <3 js options
const jsPunsColors = [cornflowerBlue, darkSlateGrey, gold]
const iHeartJsColors = [tomato, steelBlue, dimGrey]
//puts focus on name
function nameFocus() {
    document.getElementById("name").focus();
}
nameFocus(name);

//displays only if js in not enabled
//otherJob.style.display = 'none';

//hides other-title field
otherJobRole.setAttribute('type', 'hidden')

//gets the color id from select element
let colorSelectElement = document.getElementById('color');

//creates a new option and defines what it will say
//https://www.w3schools.com/jsref/met_select_add.asp
let option = document.createElement('option');

option.text = "Please select a T-shirt theme";

//adds "Please select a T-shirt theme" to the list
colorSelectElement.add(option);

//display the option as default
option.selected = true;

//hide other color options
shirtColors.hidden = true;

//design event listner for js puns
designDropDown.addEventListener('click', (e) => {
    //hide colors in Color select menu
    let chosen = e.target;
    
    if (chosen === jsPunDesign) {
        jsPunsColors.hidden = true;
        iHeartJsColors.hidden = false;
    }else if (chosen === iHeartJsDesign) {
        iHeartJsColors.hidden = true;
}       jsPunsColors.hidden = false;
});

