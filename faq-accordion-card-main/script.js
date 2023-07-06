const seta = document.getElementById('seta');
const seta2 = document.getElementById('seta2');
const seta3 = document.getElementById('seta3');
const seta4 = document.getElementById('seta4');
const seta5 = document.getElementById('seta5');
const imagem = document.getElementById('texto')
const imagem2 = document.getElementById('texto2')
const imagem3 = document.getElementById('texto3')
const imagem4 = document.getElementById('texto4')
const imagem5 = document.getElementById('texto5')

document.getElementById('seta').style.paddingLeft = '70px';
document.getElementById('seta2').style.paddingLeft = '75px';
document.getElementById('seta3').style.paddingLeft = '150px';
document.getElementById('seta4').style.paddingLeft = '145px';
document.getElementById('seta5').style.paddingLeft = '100px';

function showHideDiv(){
    if(imagem.style.display === 'block'){
        imagem.style.display = 'none';
        document.getElementById('setaimg').style.transform = 'scaleY(-1)'
    }else{
        imagem.style.display = 'block';
        document.getElementById('setaimg').style.transform = 'scaleY(1)'
    }

    
}

function showHideDiv2(){
    if(imagem2.style.display === 'block'){
        imagem2.style.display = 'none';
        document.getElementById('setaimg2').style.transform = 'scaleY(-1)'
    }else{
        imagem2.style.display = 'block';
        document.getElementById('setaimg2').style.transform = 'scaleY(1)'
    }
}

function showHideDiv3(){
    if(imagem3.style.display === 'block'){
        imagem3.style.display = 'none';
        document.getElementById('setaimg3').style.transform = 'scaleY(-1)'
    }else{
        imagem3.style.display = 'block';
        document.getElementById('setaimg3').style.transform = 'scaleY(1)'
    }
}

function showHideDiv4(){
    if(imagem4.style.display === 'block'){
        imagem4.style.display = 'none';
        document.getElementById('setaimg4').style.transform = 'scaleY(-1)'
    }else{
        imagem4.style.display = 'block';
        document.getElementById('setaimg4').style.transform = 'scaleY(1)'
    }
}

function showHideDiv5(){
    if(imagem5.style.display === 'block'){
        imagem5.style.display = 'none';
        document.getElementById('setaimg5').style.transform = 'scaleY(-1)'
    }else{
        imagem5.style.display = 'block';
        document.getElementById('setaimg5').style.transform = 'scaleY(1)'
    }
}



seta.addEventListener('click', showHideDiv);
seta2.addEventListener('click', showHideDiv2);
seta3.addEventListener('click', showHideDiv3);
seta4.addEventListener('click', showHideDiv4);
seta5.addEventListener('click', showHideDiv5);