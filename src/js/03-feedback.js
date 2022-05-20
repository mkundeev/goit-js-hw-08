import throttle from 'lodash/throttle'

const formEl = document.querySelector('.feedback-form');
const obj = {};

localStorage.setItem("feedback-form-state", JSON.stringify({}));

formEl.addEventListener('input', throttle(onInputChange, 500));
formEl.addEventListener('submit', onFormSubmit);


function onInputChange(evt) {
    obj[evt.target.name] = evt.target.value;

    localStorage.setItem("feedback-form-state", JSON.stringify(obj));
}
function onFormSubmit(evt) {
    preventDefault();
    console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
    localStorage.setItem("feedback-form-state", JSON.stringify({}));

}
