import { areAllAlphabets, capitalizeFirstLetter } from './basicFunctionality.js';

const isNameValid = (username) => {
    if (!username){
        return false;
    }else if (username.trim() === ""){
        return false;
    }else if (!areAllAlphabets(username)){
        return false;
    }
    return true;
}

const isValidEmail = (email) => {
    if (!email){
        return false;
    }else if (email.trim() === ""){
        return false;
    }
    return true;
}

const isValidPhone = (phone) => {
    const ph = Number(phone);
    if (!phone){
        return false;
    }else if (!phone.trim() === ""){
        return false;
    }else if (isNaN(Number(phone))){
        return false
    }
    // else if (phone.length < 4 || phone.length > 7){
    //     return false;
    // }
    return true;
}

// export { sum, msg };
export { isNameValid, isValidEmail, isValidPhone };