let desc = document.querySelector('.para')
let author = document.querySelector('.author')
let btn = document.querySelector('.btn')

    let qty=''
    let url = `https://dummyjson.com/quotes/`
btn.addEventListener('click',
    async ()=>{

        let qty = Math.floor(Math.random() * 1400); // Max quotes = 150
        let response = await fetch(`${url}${qty}`);

        let data = await response.json();
        console.log(data);

        desc.innerHTML = `"${data.quote}"`;  // Add double quotes for readability
        author.innerHTML = `Author - ${data.author}`;


});