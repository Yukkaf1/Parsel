var throttle = require('lodash.throttle');

// const Joi = require('joi');
// const uuidV4 = require('uuid.v4')


// // const passwordSchema = Joi.string()
// //         .alphanum()
// //         .min(3)
// //         .max(5);

// // console.log(passwordSchema.validate("jg123j"));

// // console.log("Hallo");

// // console.log(uuidV4());

// console.log('Hello world!');


// // const user = {
// //     name: 'Mango',
// //     age: 2
// // }

// // console.log(JSON.stringify(user));

// localStorage.setItem('my-data', JSON.stringify({ name: 'Mango', age: 2}));
// // console.log(localStorage.getItem('my-data'));

// const parstData = JSON.parse(localStorage.getItem('my-data'));
// console.log(parstData);


//========
const STORAGE_KEY = 'feedback';
const formData = {};

const refs = {
    form: document.querySelector('.feedback'),
    textarea: document.querySelector('.textarea'),
    input: document.querySelector('input'),
};

// console.log(refs.form);
// console.log(refs.textarea);

refs.form.addEventListener('submit', onFormSubmit);
refs.textarea.addEventListener('input', throttle(onText, 500));

refs.form.addEventListener('input', (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);

    formData[e.target.name]=e.target.value;
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

    console.log(refs.input.value);
})

populateTextarea();

function onFormSubmit(e) {
    e.preventDefault();
    console.log(formData);
    console.log(refs.input.value);
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);

}

function onText(e) {
    console.log("Hallo text");
    formData[e.target.name]=e.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

// проверить локалхост

function populateTextarea() {
    const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
    console.log(savedMessage);
    if(savedMessage) {
        console.log(savedMessage.name);
        console.log(savedMessage.message);
        refs.textarea.value = savedMessage.message;
        refs.input.value = savedMessage.name;
    }
}