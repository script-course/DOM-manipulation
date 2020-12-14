const NAME = "Gerard";

const nameElemenent = document.getElementById("name");

const randomUint8 = () => Math.floor(Math.random() * 255)
const randomColor = () => `rgb(${randomUint8()}, ${randomUint8()}, ${randomUint8()})`;

document.getElementById("click").onclick = () => {
    if(nameElemenent.innerHTML) {
        nameElemenent.innerHTML = ''
        return
    }

    nameElemenent.innerHTML = NAME;
    nameElemenent.style.color = randomColor()
};
