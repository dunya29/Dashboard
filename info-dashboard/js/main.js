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
  slidesPerView: 1,
  spaceBetween: 20,
  observer: true,
  observeParents: true,
  effect: "fade",
  loop: true,
   autoplay: {
    delay: 5000,
    disableOnInteraction: false	
  }, 
  pagination: {
    el: '.mainswiper .swiper-pagination',
    type: 'bullets'
  },
  speed: 500
})
let videoCols = document.querySelectorAll(".video-cols")
if (videoCols) {
  videoCols.forEach(item => {
    let url = item.getAttribute("data-link")
    let searchIdx = url.indexOf("?")
    const params = new URLSearchParams(url.slice(searchIdx));
    const streams = params.getAll('src');
    const modes = params.getAll('mode');
    if (modes.length === 0) modes.push('');
    while (modes.length > streams.length) {
        streams.push(streams[0]);
    }
    while (streams.length > modes.length) {
        modes.push(modes[0]);
    }
    if (streams.length > 1) {
        document.body.className = 'flex';
    } 
    const background = params.get('background') !== 'false';
    const width = '1 0 ' + (params.get('width') || '320px');
    for (let i = 0; i < streams.length; i++) {
        const video = document.createElement('video-stream');
        video.background = background;
        video.mode = modes[i] || video.mode;
        video.style.flex = width;
        video.src = new URL('api/ws?src=' + encodeURIComponent(streams[i]), url.slice(0,searchIdx));
        item.appendChild(video);
    }
  })
}
const pageInner = document.querySelector(".page__inner")
if (pageInner) {
  pageInner.addEventListener("scrollend", function(e) {
    console.log(pageInner.scrollHeight - pageInner.clientHeight - pageInner.scrollTop)
    if ((pageInner.scrollHeight - pageInner.clientHeight - pageInner.scrollTop) < 30) {
      pageInner.classList.add("scrollend")
    } else {
      pageInner.classList.remove("scrollend")
    }
  })
}