// change subscribe brn to subscribed when clicked.

let subscribeBtn = document.querySelector('.subscribe-btn');
console.log(subscribeBtn.textContent);


const subscribe = () =>{
    if (subscribeBtn.textContent === 'Subscribe') {
        subscribeBtn.textContent = 'Subscribed'
        alert('you just subscribed to the chanel, enjoy')
    } else {
        subscribeBtn.textContent = 'Subscribe'
        alert('you unsubscried, click the button back to subscribe')
    }
}



subscribeBtn.addEventListener('click', subscribe)
