const hrs = document.querySelector(".date__hours")
const min = document.querySelector(".date__min")
const day = document.querySelector(".date__day")
const month = document.querySelector(".date__month")
let allMonths = ["янв","февр","мар","апр","май","июнь","июль","авг","сент","окт","нояб","дек"]
function setDate() {
  let date = new Date()
  hrs.textContent = date.getHours()
  min.textContent = date.getMinutes() > 9 ? date.getMinutes() : "0" +  date.getMinutes()
  day.textContent = date.getDate()
  month.textContent = allMonths[date.getMonth()]
}
setDate()
setInterval(setDate, 60000);

let mainswiper = new Swiper(".mainswiper", {
  slidesPerView: 3,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  loop: true,
/*   autoplay: {
    delay: 5000,
    disableOnInteraction: false	
  }, */
  pagination: {
    el: '.mainswiper .swiper-pagination',
    type: 'bullets'
  },
  speed: 1000
})