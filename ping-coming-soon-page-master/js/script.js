const evento = document.querySelector('form input')
const email = document.getElementById('email')


document.querySelector('form input').oninvalid = function(evt) {  
    // essa linha cancela o comportamento padrão do navegador
    evt.preventDefault();
    // faz a validação novamente
    if (!this.validity.valid) {
        //aqui eu mostro o alert
        const texto = document.getElementById('areatexto');
        texto.textContent = 'Please provide a valid email'
        texto.style.display = 'block';
        email.style.border = '2px solid red';
    }
};