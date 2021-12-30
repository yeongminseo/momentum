const img = [
    "0.jpg",
    "1.jpg",
    "2.jpg"
]

const ranImg = img[Math.floor(parseInt(Math.random()*img.length))]



const bgImg = document.createElement("img");

bgImg.src=`img/${ranImg}`;
console.log(bgImg);
document.body.appendChild(bgImg)