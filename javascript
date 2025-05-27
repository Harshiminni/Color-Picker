let colorPickerContainerElement = document.getElementById("colorPickerContainer");
let selectedColorHexCodeElement = document.getElementById("selectedColorHexCode");

function callButtonOne() {
    colorPickerContainerElement.style.backgroundColor = "#e0e0e0";
    selectedColorHexCodeElement.textContent = "#e0e0e0";
}

function callButtonTwo() {
    colorPickerContainerElement.style.backgroundColor = "#6fcf97";
    selectedColorHexCodeElement.textContent = "#6fcf97";
}

function callButtonThree() {
    colorPickerContainerElement.style.backgroundColor = "#56ccf2";
    selectedColorHexCodeElement.textContent = "#56ccf2";
}

function callButtonFour() {
    colorPickerContainerElement.style.backgroundColor = "#bb6bd9";
    selectedColorHexCodeElement.textContent = "#bb6bd9";
}
