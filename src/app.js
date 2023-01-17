const navbtn=document.getElementById("toggle-button");
const links=document.getElementById("nav-links");
navbtn.addEventListener('click', ()=> {
    links.classList.toggle("show-links")
});
const form = document.getElementById('form');
const fname=document.getElementById("fname");
const lname=document.getElementById("lname");
const email = document.getElementById('email');
const phone=document.getElementById("phone")
const date=document.getElementById("Date");
const appt=document.getElementById("appt");
const payment=document.getElementById("payment");

form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const fnameValue=fname.value.trim();
    const lnameValue=lname.value.trim();
    const emailValue = email.value.trim();
    const phoneValue= phone.value.trim();
    const dateValue= date.value.trim();
    const apptValue= appt.value.trim();
    const paymentValue=payment.value.trim();
    
    if (fnameValue==='') {
        setError(fname, 'First Name cannot be Empty')
    } else {
        setSuccess(fname)
    }
    if (lnameValue==='') {
        setError(lname, 'Last Name cannot be Empty')
    } else {
        setSuccess(lname)
    }
    if (phoneValue=== '' ) {
        setError(phone, 'phone number cannot be Empty')
    } else {
        setSuccess(phone)
    }
    if(emailValue === '') {
        setError(email, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(email, 'Provide a valid email address');
    } else {
        setSuccess(email);
    }
    if (dateValue==='') {
        setError(date, 'Date should be filled')
    } else {
        setSuccess(date)
    }
    if (apptValue=== '') {
        setError(appt, 'You should select Time')
    } else {
        setSuccess(appt)
    }
    if (paymentValue=== '') {
        setError(payment, 'please select your payment method')
    } else {
        setSuccess(payment)
    }
};