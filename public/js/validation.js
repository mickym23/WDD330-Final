const inputsCollection = document.getElementsByClassName('textInput');
const messages = document.getElementsByClassName('textMessage');

const inputs = Array.from(inputsCollection);

const mArray = Array.from(messages);
// Array.from(inputs).forEach(input => {

for (let i = 0; i < inputs.length; i++) {
   inputs[i].addEventListener("change", (e) => {
      if (inputs[i].validity.tooShort || inputs[i].validity.tooLong) {
        // console.log('please?');

         if (inputs[i].classList.contains('goodText')) {
            inputs[i].classList.remove('goodText')
         }

         inputs[i].classList.add('invalidText');

         mArray[i].textContent = 'Invalid';
         mArray[i].classList.add('invalidMessage')

         if (mArray[i].classList.contains('validMessage')) {
            mArray[i].classList.remove('validMessage')
         }

         inputs[i].setCustomValidity("Name is too short, at least two characters.");
      } else {
       //  console.log('okay');
         inputs[i].classList.add('goodText')

         if (inputs[i].classList.contains('invalidText')) {
            inputs[i].classList.remove('invalidText')
         }

         mArray[i].textContent = 'Valid';
         mArray[i].classList.add('validMessage')

         if (mArray[i].classList.contains('invalidMessage')) {
            mArray[i].classList.remove('invalidMessage')
         }

         inputs[i].setCustomValidity("");
      }
   });
};

const email = document.getElementById('email');
const emailMessage = document.getElementById('emailMessage')

email.addEventListener('change', () => {
   if (email.validity.typeMismatch) {
      if (email.classList.contains('goodText')) {
         email.classList.remove('goodText')
      }

      email.classList.add('invalidText');

      emailMessage.textContent = 'Invalid';
      emailMessage.classList.add('invalidMessage')

      if (emailMessage.classList.contains('validMessage')) {
         emailMessage.classList.remove('validMessage')
      }

      email.setCustomValidity("Please insert a correct email!");
   } else {
    //  console.log('okay');
      email.classList.add('goodText')

      if (email.classList.contains('invalidText')) {
         email.classList.remove('invalidText')
      }

      emailMessage.textContent = 'Valid';
      emailMessage.classList.add('validMessage')

      if (emailMessage.classList.contains('invalidMessage')) {
         emailMessage.classList.remove('invalidMessage')
      }

      email.setCustomValidity("");
   }
})

