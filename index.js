let vvod = document.getElementsByTagName("input")[0];
let pict = document.getElementsByTagName("img");
let arrContveather = document.querySelector(".cont").querySelectorAll("div");




vvod.addEventListener("keyup", (e)=>{
    if (e.key === "Enter") {
       
        if(!vvod.value){
            showWeather('Minsk');
        }else{
            showWeather(vvod.value);
        }
    }
    
    
});

showWeather('Minsk');


async function showWeather(city) {
    const api = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=66b3c3e1676ddd60a73d8a3160445061`;
    let response = await fetch(api);
    let data = await response.json();
    grad(data)



}

window.onload = function(){
    window.setInterval(() => {
    let date = new Date();
    document.querySelector(".chasy").innerText = date.toLocaleTimeString();
    }, 1000)

    let d = new Date();
    arrContveather[0].innerText = `Today, ${d.toLocaleDateString("eng",{
        
        
        month: 'long',
        day: 'numeric',
        weekday: 'long',
        
      })} `
    console.log()


};

function grad(data){
    console.log(data);

   

    arrContveather[1].innerText = `${data.list[0].main.temp} C°`
    arrContveather[2].innerHTML = `${data.list[0].weather[0].main}`

    arrContveather[5].innerHTML = `Wind ᅠ <b3>|</b3>ᅠ${data.list[0].wind.speed}km/h`

    arrContveather[6].innerHTML = `Hum ᅠ <b3>|</b3>ᅠ${data.list[0].main.humidity}%`


    pict[1].style.opacity = data.list[0].clouds.all/100;

    
    if (data.list[0].dt < data.city.sunset &&data.list[0].dt > data.city.sunrise) {
        pict[0].src = "./pic/sunny.png"
        
    } else {pict[0].src = "./pic/moon.png"

        
        
    }

    if (data.list[0].pop < 0.2) {
        pict[1].src = "./pic/cloud.png"
        
    } 
    else if (data.list[0].pop < 0.5){
        pict[1].src = "./pic/lightt.png"
        
        
    }
     else
     {pict[1].src = "./pic/hard.png"   
    }}
