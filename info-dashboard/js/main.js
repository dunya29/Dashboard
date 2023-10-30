const hrs = document.querySelector(".date__hours")
const min = document.querySelector(".date__min")
const date = document.querySelector(".date__date")
const month = document.querySelector(".date__month")
const day = document.querySelector(".date__day")
let allMonths = ["января","февраля","марта","апреля","мая","июня","июля","августа","сентября","октября","ноября","декабря"]
let allDays = ["воскресенье","понедельник","вторник", "среда","четверг","пятница","суббота"]
function setDate() {
  let now = new Date()
  hrs.textContent = now.getHours()
  min.textContent = now.getMinutes() > 9 ? now.getMinutes() : "0" +  now.getMinutes()
  date.textContent = now.getDate()
  month.textContent = allMonths[now.getMonth()]
  day.textContent = allDays[now.getDay()]
}
setDate()
setInterval(setDate, 60000);

let mainswiper = new Swiper(".mainswiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  loop: true,
   autoplay: {
    delay: 5000,
    disableOnInteraction: false	
  }, 
  pagination: {
    el: '.mainswiper .swiper-pagination',
    type: 'bullets'
  },
  speed: 1000
})