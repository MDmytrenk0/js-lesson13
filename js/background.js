// ------------------------------------Color---------------------------------------
function color () {
    document.querySelector('.color1').style.backgroundColor = 'turquoise';
    document.querySelector('.color1').style.border = '1px solid black';
    document.querySelector('.color1').style.backgroundImage = 'none';
    document.querySelector('.color2').style.backgroundColor ='darkred';
    document.querySelector('.color2').style.border = '1px solid black';
    document.querySelector('.color2').style.backgroundImage = 'none';
    document.querySelector('.color3').style.backgroundColor = 'green';
    document.querySelector('.color3').style.border = '1px solid black';
    document.querySelector('.color3').style.backgroundImage = 'none';
    document.querySelector('.color4').style.backgroundColor = 'greenyellow';
    document.querySelector('.color4').style.border = '1px solid black';
    document.querySelector('.color4').style.backgroundImage = 'none';
    document.querySelector('.color5').style.backgroundColor = 'gray';
    document.querySelector('.color5').style.border = '1px solid black';
    document.querySelector('.color5').style.backgroundImage = 'none';
    document.querySelector('.color6').style.backgroundColor = 'red';
    document.querySelector('.color6').style.border = '1px solid black';
    document.querySelector('.color6').style.backgroundImage = 'none';
    document.querySelector('.color7').style.backgroundColor = 'blue';
    document.querySelector('.color7').style.border = '1px solid black';
    document.querySelector('.color7').style.backgroundImage = 'none';
    document.querySelector('.color8').style.backgroundColor = 'purple';
    document.querySelector('.color8').style.border = '1px solid black';
    document.querySelector('.color8').style.backgroundImage = 'none';
    document.querySelector('.color9').style.backgroundColor = 'rgb(155, 211, 72)';
    document.querySelector('.color9').style.border = '1px solid black';
    document.querySelector('.color9').style.backgroundImage = 'none';
    document.querySelector('.box').classList.add('outline');
}
function addColor () {
    const body = document.querySelector('body');
    body.style.backgroundColor = event.target.style.backgroundColor;
};
// ------------------------------------Image---------------------------------------
function img () {
    let image1 = document.querySelector('.img1');
    image1.style.backgroundImage = 'url("https://mobimg.b-cdn.net/v3/fetch/0b/0bb93ae3b2b18494ab388e2f5d5994e7.jpeg")';
    image1.style.border = '1px solid black';
    image1.style.backgroundSize = '100%';
    let image2 = document.querySelector('.img2');
    image2.style.backgroundImage ='url("https://funart.pro/uploads/posts/2021-03/1617041523_45-p-oboi-krasivie-foto-prirodi-52.jpg")';
    image2.style.border = '1px solid black';
    image2.style.backgroundSize = 'cover';
    let image3 = document.querySelector('.img3');
    image3.style.backgroundImage = 'url("https://bipbap.ru/wp-content/uploads/2017/04/priroda_kartinki_foto_03.jpg")';
    image3.style.border = '1px solid black';
    image3.style.backgroundSize = 'cover';
    let image4 = document.querySelector('.img4');
    image4.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbXRwETNb2qjYFBF_TkrMb-uNDCXTHjhjWRQ&usqp=CAU")';
    image4.style.border = '1px solid black';
    image4.style.backgroundSize = 'cover';
    let image5 =  document.querySelector('.img5');
    image5.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF2UHSE42JTxM14IBHbkrjHF2t54eAfnTv-Q&usqp=CAU")';
    image5.style.border = '1px solid black';
    image5.style.backgroundSize = '100%';
    let image6 =  document.querySelector('.img6');
    image6.style.backgroundImage = 'url("https://memax.club/wp-content/uploads/2019/05/Kartinki_krasivye_priroda_na_telefon_1_21164132.jpg")';
    image6.style.border = '1px solid black';
    image6.style.backgroundSize = '100%';
    let image7 = document.querySelector('.img7');
    image7.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQ8DTyjplN27s0VGDms56nFxSjM_4nMxdlnA&usqp=CAU")';
    image7.style.border = '1px solid black';
    image7.style.backgroundSize = '100%';
    let image8 = document.querySelector('.img8');
    image8.style.backgroundImage = 'url("https://mobimg.b-cdn.net/v3/fetch/39/399971245db1bd296735bcaa1fcff6a9.jpeg")';
    image8.style.border = '1px solid black';
    image8.style.backgroundSize = 'cover';
    let image9 = document.querySelector('.img9');
    image9.style.backgroundImage = 'url("https://static-cse.canva.com/blob/194414/photo-1502082553048-f009c37129b9-e1583341920812.jpeg")';
    image9.style.border = '1px solid black';
    image9.style.backgroundSize = '100%';
    document.querySelector('.box').classList.add('outline');
}
function addImage () {
    const body = document.querySelector('body');
    body.style.backgroundImage = event.target.style.backgroundImage;
};