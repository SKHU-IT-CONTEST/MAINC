// fetch('https://jsonplaceholder.typicode.com/todos/1')
fetch('http://152.67.207.160:32023/api/schoolNotice')
    .then(response => response.json())
    .then(json => { 
        console.log(json[0].num) 
        const el = document.querySelector('#temperature')
        el.innerHTML=json[0].num
    })