function validar_entrada_login() {
    let user = document.getElementById('Usuario').value
    let password = document.getElementById('Senha').value

    if (user.length < 10 | password.length < 10) {
        alert('Login ou senha fora do padrão aceito')
    }
    else {
        alert('Usuário validado')
        show_2FA()
    }
}


function show_2FA () {

    let obj_login = document.querySelector('.card-login')
    let obj_2FA = document.querySelector('.two-factor-box')

    let obj_login_animation = document.querySelectorAll('.left-login-img')[0]
    let obj_2FA_animation = document.querySelectorAll('.left-login-img')[1]

    let obj_login_h1 = document.querySelectorAll('.left-login-h1')[0]
    let obj_2FA_h1 = document.querySelectorAll('.left-login-h1')[1]


    obj_login.style.display =   'none'
    obj_2FA.style.display =     'flex'

    obj_login_animation.style.display = 'none'
    obj_2FA_animation.style.display = 'block'

    obj_login_h1.style.display = 'none'
    obj_2FA_h1.style.display = 'block'
}

function verification_2FA() {
    /*Função usada para validar o número de celular do usuário e seu E-Mail*/
}

function verificar_email(){
    return alert('Verificado')
}