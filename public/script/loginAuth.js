const loginForm = document.getElementById('login-form');
const registrationMessage = document.getElementById('registration-message');
const registerBtn = document.getElementById('register-btn');

loginForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = loginForm.elements.email.value;
  const password = loginForm.elements.password.value;

  try {
    const response = await fetch('/auth/signIn', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        formFields: [
          { id: 'email', value: email },
          { id: 'password', value: password },
        ],
      }),
    });

    // Successful login
    console.log(response);
  } catch (error) {
    // Failed login
    console.error(error);
  }
});

registerBtn.addEventListener('click', () => {
  registrationMessage.textContent = '';

  const registrationForm = document.createElement('form');
  const emailInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const confirmPasswordInput = document.createElement('input');
  const submitButton = document.createElement('button');

  registrationForm.id = 'registration-form';
  emailInput.type = 'email';
  emailInput.name = 'email';
  emailInput.placeholder = 'Email';
  passwordInput.type = 'password';
  passwordInput.name = 'password';
  passwordInput.placeholder = 'Password';
  confirmPasswordInput.type = 'password';
  confirmPasswordInput.name = 'confirm-password';
  confirmPasswordInput.placeholder = 'Confirm Password';
  submitButton.type = 'submit';
  submitButton.textContent = 'Register';
  registrationForm.append(
    emailInput,
    passwordInput,
    confirmPasswordInput,
    submitButton,
  );

  registrationForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const email = registrationForm.elements.email.value;
    const password = registrationForm.elements.password.value;
    const confirmPassword = registrationForm.elements['confirm-password'].value;

    if (password !== confirmPassword) {
      registrationMessage.textContent = 'Passwords do not match';
      return;
    }

    try {
      const response = await fetch('/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formFields: [
            { id: 'email', value: email },
            { id: 'password', value: password },
          ],
        }),
      });

      // Successful registration
      console.log(response);

      registrationForm.remove();
      registrationMessage.textContent =
        'Registration successful. Please login.';
    } catch (error) {
      // Failed registration
      console.error(error);

      registrationMessage.textContent = 'Error: ' + error.message;
    }
  });

  const formWrapper = document.querySelector('.form-wrapper');
  formWrapper.appendChild(registrationForm);
});
