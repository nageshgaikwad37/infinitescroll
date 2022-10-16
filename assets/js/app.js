let cl = console.log;


let gallary = document.getElementById('gallary');

const count = 10;
const apiKey = 'eDuQXk8CIpQr24iTOW7ps6ENV9QfR0kZqnSB9-n-Dcg';
const baseUrl = 'https://api.unsplash.com/photos/random';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;


const templating = (arr) => {
    arr.forEach(ele =>{
        let div = document.createElement('div')
        div.classList.add('gallary')
        let anchor = document.createElement('a')
        anchor.setAttribute('href', `${ele.urls.regular}`)
        let img = document.createElement('img')
        img.setAttribute('src', `${ele.urls.regular}`)

        anchor.appendChild(img)
        div.appendChild(anchor)
        images.appendChild(div)
    })
}

async function fetchdata(){
   let responce = await fetch(apiUrl);
   let data = await responce.json();
   templating(data)
}

fetchdata()

window.addEventListener('scroll', () =>{
    let scrollheight = document.documentElement.scrollHeight;
    let scrollTOp = document.documentElement.scrollTop;
    let clientHeight = document.documentElement.clientHeight;
    if(scrollTOp + clientHeight >= scrollheight - 300){
        fetchdata()
    }
})


