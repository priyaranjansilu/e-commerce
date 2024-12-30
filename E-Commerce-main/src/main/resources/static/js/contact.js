const scriptURL = 'https://script.google.com/macros/s/AKfycbzdWc8HMxbenSPdv3f7ejB53u0kL_JyuLMDseF3-0AovuJwqz40F0Q_-l-FxeUT1AD0/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById('msg');

        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message sent successfully";
                    setTimeout(() => {
                        msg.innerHTML = "";
                    }, 5000);
                    form.reset();
                })
                .catch(error => console.error('Error!', error.message));
        });