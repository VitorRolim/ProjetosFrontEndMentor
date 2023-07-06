const evento = document.querySelector('form input')
const firstName = document.getElementById('fn')
const lastName = document.getElementById('ln')
const password = document.getElementById('password')
const email = document.getElementById('email')
const erro1 = document.getElementById('erroricn1')
const erro2 = document.getElementById('erroricn2')
const erro3 = document.getElementById('erroricn3')
const erro4 = document.getElementById('erroricn4')



document.querySelector('form input').oninvalid = function (evt) {
    // essa linha cancela o comportamento padrão do navegador
    evt.preventDefault();
    // faz a validação novamente
    if (!this.validity.valid) {
        //alert First Name
        const texto1 = document.getElementById('areatexto1')
        texto1.textContent = 'First Name cannot be empty'
        /*Estilizando o texto do erro First name */
        texto1.style.fontStyle = 'italic'
        texto1.style.color = 'red';
        texto1.style.margin = '1px 0px 0px 15px'
        texto1.style.paddingRight = '37px'
        texto1.style.float = 'right'
        texto1.style.fontWeight = '100'
        /*Mudando a border do FN */
        firstName.style.border = '2px solid red';
        /*Mostrando o icone de aviso */
        erro1.style.display = 'block';
        erro1.style.margin = '-420px 0px 0px 520px';
        //alert Last Name
        const texto2 = document.getElementById('areatexto2')
        texto2.textContent = 'Last Name cannot be empty'
        /*Estilizando o texto do erro Last name */
        texto2.style.fontStyle = 'italic'
        texto2.style.color = 'red';
        texto2.style.margin = '1px 0px 0px 15px'
        texto2.style.paddingRight = '37px'
        texto2.style.float = 'right'
        texto2.style.fontWeight = '100'
        /*Mudando a border do LN */
        lastName.style.border = '2px solid red';
        /*Mostrando o icone de aviso */
        erro2.style.display = 'block';
        erro2.style.margin = '-320px 0px 0px 520px';
        //aqui eu mostro o alert
        const texto = document.getElementById('areatexto3');
        /*Criando o aviso para o email */
        texto.textContent = 'Please provide a valid email'
        texto.style.fontStyle = 'italic'
        texto.style.color = 'red';
        texto.style.margin = '1px 0px 0px 15px'
        texto.style.paddingRight = '37px'
        texto.style.float = 'right'
        texto.style.fontWeight = '100'
        /*Mudando a border do email */
        email.style.border = '2px solid red';
        /*Mostrando o icone de aviso */
        erro3.style.display = 'block';
        erro3.style.margin = '-225px 0px 0px 520px';
        //alert Password
        const texto4 = document.getElementById('areatexto4')
        texto4.textContent = 'Password cannot be empty'
        /*Estilizando o texto do erro Last name */
        texto4.style.fontStyle = 'italic'
        texto4.style.color = 'red';
        texto4.style.margin = '1px 0px 0px 15px'
        texto4.style.paddingRight = '37px'
        texto4.style.float = 'right'
        texto4.style.fontWeight = '100'
        /*Mudando a border do LN */
        password.style.border = '2px solid red';
        /*Mostrando o icone de aviso */
        erro4.style.display = 'block';
        erro4.style.margin = '-130px 0px 0px 520px';
    }
};