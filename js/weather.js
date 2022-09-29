//온도 fetch 이용해서 임의로 가져온것
fetch('http://152.67.207.160:32023/api/schoolNotice')
    .then(response => response.json())
    .then(json => { 
        console.log(json[0].num) 
        const el = document.querySelector('#temperature')
        el.innerHTML=json[0].num
    })

// fetch("./back-part_2-back-part_1/modified.json")
// .then((res)=>{
//     return res.json()
// })
// .then((obj)=>{
//     list(obj)
// })