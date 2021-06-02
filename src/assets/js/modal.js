const profileSign = document.getElementById('profile-sign')

const modal = vModal({
    close: {
        isClose: true,
        isCloseDisabled: false,
        element: `
        <div class="vmodal__close">
            <svg data-close="close">
                <use data-close="close" xlink:href="#vmodal-close"></use>
            </svg>
        </div>`
    },
    content: `
    <div class="vmodal__subtitle">Вход в личный кабинет</div>
    <form class="auth" action="/" method="post">
        <div class="auth__group">
            <label class="auth__label">Email</label>
            <input class="auth__input" type="email" id="auth-email" placeholder="Email">
        </div>
        <div class="auth__group">
            <label class="auth__label">Пароль</label>
            <input class="auth__input" type="text" id="auth-password" placeholder="Пароль">
        </div>
    </form>
    `,
    width: '600px',
    margin: 'auto 0',
    footer: {
        buttons: [
            {text: 'войти', class: 'btn btn--lg btn--first', handler() {
                modal.close()
            }},
            {text: 'зарегистрироваться', class: 'btn btn--secondary btn--lg', handler() {
                modal.close()
            }}
        ]
    },
    transition: {
        time: 200,
        type:'slide'
    }
})

const authPassInput = document.getElementById('auth-password')

authPassInput.oninput = processPassword

function processPassword() {
    if(authPassInput.value.length > 0) {
        authPassInput.type = 'password'
        return
    }

    authPassInput.type = 'text'
}

profileSign.addEventListener('click', () => {
    modal.open()
}, true)