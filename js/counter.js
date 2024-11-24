const count = document.querySelector('#count');
const buttons = document.querySelector('.buttons');

buttons.addEventListener('click', async (e) => {  

    if (e.target.classList.contains('add')) {
        count.innerHTML++;
        setColor()
    }
    
    if (e.target.classList.contains('subtract')) {
        count.innerHTML--;
        setColor()
    }

    if (e.target.classList.contains('reset')) {
        count.innerHTML = 0;
        setColor()
    }
});

function setColor() {
    if (count.innerHTML > 0) {
        count.style.color = 'green';
    } else if (count.innerHTML < 0) {
        count.style.color = 'red';
    } else {
        count.style.color = 'black';
    }
}



