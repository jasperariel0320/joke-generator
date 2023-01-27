const joke = document.getElementById('jokes')
const btn = document.getElementById('btn')
// // https://api.scripture.api.bible/v1/swagger.json

const generatejoke = ()=>{
     const setHeader = {
          headers : {
               Accept : "application/json"
          }
     }
     fetch(' https://icanhazdadjoke.com/', setHeader)
     .then((res)=>res.json())
     .then((data)=>{
          joke.innerHTML = data.joke
     }).catch((err)=>{
          console.log(err)
     })
}

btn.addEventListener('click', generatejoke)



































