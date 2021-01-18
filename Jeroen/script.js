const myName = "Jeroen";
const btnToggleName = document.getElementById('btnToggleName');
const nameContainer = document.getElementById('nameContainer');
const colors = ['black', 'yellow', 'green', 'blue', 'purple'];

btnToggleName.addEventListener('click', toggleName);

function toggleName() {
    nameContainer.innerHTML = `Hi ${myName}!`;
    const randomNumber = Math.round(Math.random() * colors.length) + 1;
    nameContainer.style.color = colors[randomNumber];
}