const loginForm = document.forms.loginForm;

////

document.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('[click]');

    switch (e.target.id) {
        case 'loginFormReset':
            loginForm.reset();
            break;
        case 'loginFormSubmit':
            loginForm.submit();
            break;
    }
});

document.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('[submit]');
});
