/* Contact Form */
const form = document.querySelector('form');

form.addEventListener('submit', function validateForm(event) {
    event.preventDefault();
  
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    const errors = document.querySelector('.errors');
  
    errors.innerHTML = '';
  
    if (name.value === '') {
      errors.innerHTML += '<p>Entrez votre prenom..</p>';
    }
  
    if (email.value === '') {
      errors.innerHTML += '<p>Entrez votre email..</p>';
    }
  
    if (message.value === '') {
      errors.innerHTML += '<p>Entrez votre message..</p>';
    }
  
    if (errors.innerHTML === '') {
      form.submit();
    }
}
  
form.addEventListener('submit', validateForm);


/* Contact VIP Form */
const form = document.querySelector('#vip-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.querySelector('#name');
    function validateForm(event) {
        const email = document.querySelector('#email');
        const message = document.querySelector('#message');
        const errors = document.querySelector('.errors');
    
        errors.innerHTML = '';
    
        if (name.value === '') {
        errors.innerHTML += '<p>Entrez votre nom..</p>';
        }
    
        if (email.value === '') {
        errors.innerHTML += '<p>Entrez votre email..</p>';
        }
    
        if (message.value === '') {
        errors.innerHTML += '<p>Entrez votre message..</p>';
        }
    
        if (errors.innerHTML === '') {
        form.submit();
        }
    }
  
  form.addEventListener('submit', validateForm);
}
