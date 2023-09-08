const form  = document.querySelector("form");
const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;
const search = document.querySelector("#search");
const whether = document.querySelector("#whether");

form.addEventListener("submit", function(a){
  a.preventDefault();
  getwhether(search.value);
  
})

const getwhether = async(city) =>{
  whether.innerHTML = `<h1> Loading.... </h1>  `;
 const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();
  return showdata(data)
}
const showdata = (data) => {
  if(data.cod == "404"){
    whether.innerHTML = `<h1> City Not Found </h1>`;
    return;
  }
  console.log(data);
  whether.innerHTML = `
   <!--- new card use 
      <h3> <i class="fa-solid fa-fan"></i> ${data.wind.speed}  </h3>
   --->
    <div id="main-card">
         <div id="under-main">
           <h1> ${data.name}  </h1>
  
        <div class="temp">
          <h5> Feel Like ${data.main.feels_like} </h5>
          <h5> Visibility ${data.visibility} </h5>
          </div>
     <!--   <div class="des">
          <h5> Feel Like ${data.main.feels_like} </h5>
          <h5> Visibility ${data.visibility} </h5>
          </div>   -->
  
           <div class="l-list">
      <h1>  ${data.main.temp}°C </h1>   
      <h2> ${data.weather[0].main} </h2>
           </div>
      
         </div>

         <div id="under-main-2">
         
         <i class="fa-solid fa-moon"  id="pk" ></i>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="whether" height="200vh" width="200vw">   
        </div>   
       </div>
  
    `;

      //      https://shorturl.at/LMRST
              
  
// successfully change the background image according to iemp  

  // create background image for action button
  if(data.weather[0].main === 'Clear' ){
   bttn.classList.toggle("clear"); 
  } 
   if (data.weather[0].main === 'Haze'){
    bttn.classList.toggle("haze");
   }
   if (data.weather[0].main === 'Haze'){
    bttn.classList.toggle("haze");
   }

  
   if (data.weather[0].main === 'Clouds'){
    bttn.classList.toggle("clouds");
   }
   if (data.weather[0].main === 'Rain'){
    bttn.classList.toggle("rain");
   }
   if (data.weather[0].main === 'Winter storm'){
    bttn.classList.toggle("Winter-storm");
   }
  if (data.weather[0].main === 'Fog'){
    bttn.classList.toggle("fog");
  }
   if (data.weather[0].main === 'Storm'){
    bttn.classList.toggle("storm");
  }
   if (data.weather[0].main === 'Mist'){
    bttn.classList.toggle("mist");
  }
   if (data.weather[0].main === 'Rain'){
    bttn.classList.toggle("rain1");
  }
  
  
  
  
  
// for chnage background according to whether 
  /*
  if(data.temp === '26.75'){
    page.style.backgroundImage = "url('https://shorturl.at/LMRST')";

  }  */
    
}

const theme = document.querySelector("#dark-mode-toggle");
const bttn = document.querySelector("body");
/*
theme.addEventListener("click",function (){
   bttn.style.backgroundColor = "black";  
  bttn.style.color = "white";
//  bttn.classList.Toggle("mode")
  });
*/

// background color successfull implement

                  // using toggle or using listener work donw
/*
const dk = document.querySelector(".dk");
dk.addEventListener("click",function(){
 // bttn.style.backgroundColor = "yellow";
 // bttn.style.color = "blue";
bttn.classList.toggle("mode");
})
*/

  
