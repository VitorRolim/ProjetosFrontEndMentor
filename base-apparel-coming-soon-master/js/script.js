const evento = document.querySelector('form input')
const email = document.getElementById('email')
const erro1 = document.getElementById('erroricn')


/*evento.oninvalid = function() {  
    // remove mensagens de erro padrão
    this.setCustomValidity("");
    // faz a validação novamente
    if (!this.validity.valid) {
        // se estiver inválido, coloca a mensagem
        this.setCustomValidity("Please provide a valid email");
        email.style.border = '2px solid red';
        erro1.style.display = 'block';
        erro1.style.margin = '-27px 0px 0px 280px';
     }
 };*/

 document.querySelector('form input').oninvalid = function(evt) {  
    // essa linha cancela o comportamento padrão do navegador
    evt.preventDefault();
    // faz a validação novamente
    if (!this.validity.valid) {
        //aqui eu mostro o alert
        const texto = document.getElementById('areatexto');
        texto.textContent = 'Please provide a valid email'
        texto.style.color = 'red';
        texto.style.margin = '10px 0px 0px 15px'
        texto.style.fontWeight = '100'
        email.style.border = '2px solid red';
        erro1.style.display = 'block';
        erro1.style.margin = '-27px 0px 0px 280px';
    }
};