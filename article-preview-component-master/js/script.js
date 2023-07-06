const botao = document.getElementById('btn');
const balao = document.getElementById('balao')

function mostrarSocial(){
    if(balao.style.display == 'none'){
        balao.style.display = 'block';
    }else if(balao.style.display = 'block'){
        balao.style.display = 'none';
    }
}


botao.addEventListener('click', mostrarSocial);