const toggle = document.getElementById('toggle-dark');

toggle.addEventListener('change', () => {
    if(toggle.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
    } else {
        document.documentElement.removeAttribute('data-theme');
    }
});
