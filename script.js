const icons = document.querySelectorAll('.icon');
//It will iterate through all the .icons in the website
for (let i = 0; i < icons.length; i++) {
    icons[i].addEventListener('mouseenter', function () {
        icons[i].style.backgroundColor = "red";
        icons[i].style.Color = "red";
    });
    icons[i].addEventListener('mouseleave', function () {
        icons[i].style.backgroundColor = "initial"; // Reset to default background color
    });
    //so according to the area or the position of icon clicked appropriate event happens in the clicked position.
    icons[i].addEventListener('click', myFunction)
    function myFunction() {
        const iconColor = icons[i];
        iconColor.style.backgroundColor = "red";
        const listItem = this.parentElement;
        listItem.remove();
    }
}






const list = document.querySelectorAll('.same');
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', listClick)
    function listClick() {
        const scratch = list[i];
        if (scratch.style.textDecoration != "line-through") {
            scratch.style.textDecoration = "line-through";
            scratch.innerHTML = '&#10004;' + this.innerHTML;
            scratch.style.color = "red";
            scratch.style.backgroundColor = "pink";
        }
        else {
            scratch.style.textDecoration = "none";
           // scratch.innerHTML = this.innerHTML;
            if
                (i % 2 == 0) {
                scratch.style.backgroundColor = "aliceblue";
            }
            else {
                scratch.style.backgroundColor = "gray";
            }

            scratch.style.color = "initial";

        }
    }
}
   

const text = document.querySelector('.titleField');
const addition = document.querySelector('.add');
const addingPosition = document.querySelector('.bottom ul');

addition.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission
    const inputValue = text.value.trim();

    if (/^.+$/.test(inputValue)) {
        const newLi = document.createElement('li');
        newLi.innerHTML = inputValue;
        newLi.classList.add('event1', 'same');

        const iconPart = document.createElement('i');
        iconPart.classList.add('fa-solid', 'fa-x', 'fa-2xs', 'icon');

        newLi.appendChild(iconPart);
        addingPosition.appendChild(newLi);
        text.value = '';
    } else {
        console.log("Invalid input. Please enter a sentence.");
    }

});

