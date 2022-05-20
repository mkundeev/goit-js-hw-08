import throttle from 'lodash/throttle'

const formEl = document.querySelector('.feedback-form');
const obj = {};
const STORAGE_KEY = "feedback-form-state";


formEl.addEventListener('input', throttle(onInputChange, 500));
formEl.addEventListener('submit', onFormSubmit);



populateForm();

function onInputChange(evt) {
    
    obj[evt.target.name] = evt.target.value;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(obj));
}
function onFormSubmit(evt) {
    evt.preventDefault();
    
    console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)))
    localStorage.removeItem(STORAGE_KEY);
    
    evt.currentTarget.reset()
}

function populateForm() {
    const saveData = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (saveData) {
        for (let key of Object.keys(saveData)) {
            formEl[key].value = saveData[key]
        }
    }
}