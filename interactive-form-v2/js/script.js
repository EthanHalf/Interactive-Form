

const nameInput = document.getElementById('name');
const designDropDown = document.getElementById('design')
const otherJobRole = document.getElementById('other-title');
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


//design event listner for js puns
designDropDown.addEventListener('click', (e) => {
    //hide colors in Color select menu
    //let chosen = e.target;
    //if (chosen.value === "js puns") {
        //colorSelectElement[0-2].hidden = true; 
    //}
    if (designDropDown[0].selected = true) {
        colorSelectElement[0-2].hidden = true;
    }else if (designDropDown[1].selected = true) {
        colorSelectElement[3-5].hidden = true;
}
});

