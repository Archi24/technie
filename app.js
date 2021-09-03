const btn = document.querySelector(".btn");
const ipdisplay = document.querySelector(".ip-display");
const locationdisplay = document .querySelector(".location-display");
const geolocation = document.querySelector(".Geo-location");
const load = document.querySelector(".loading-container");
 btn.addEventListener("click", () => {
   load.style.display="flex";
   
     axios.get("https://ipapi.co/json/").then((any) => {
       load.style.display="none";
       
         ipdisplay.textContent = `IP : ${any.data.ip}`;
         locationdisplay.textContent=`Location : ${any.data.city},${any.data.region},${any.data.country_name}`;
         geolocation.textContent=`Geo-location :${any.data.latitude},${any.data.longitude}`;
   });
 });