const title = document.getElementById('title');

// console.log(title)
//
// title.innerHTML = 'H! from JS';
//
// title.style.color = 'red';
//
// document.title = 'hello JS';

// function handleResize(event){
//     console.log(event);
// }

function handleClick(){
    title.style.color = 'red';
}

title.addEventListener("click", handleClick)