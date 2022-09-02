

export const validator = (textValue, elementType) => {
    switch (elementType) {
        case 'name':
            if (checkGeorgianLetters(textValue) && textValue.length >= 2) {
                return true;

            } else {
                return false;
            }
            break;

        case 'email':
            if (checkEmailAddress(textValue)) {
                return true;

            } else {
                return false;
            }
            break;

        case 'phone':
            if (phoneValidator(textValue)) {
                return true;
            } else {
                return false;
            }

            break;
        case 'laptop-name':
            if (checkLaptopName(textValue)) {
                return true;
            } else {
                return false;
            }

            break;
        default:
            if (textValue.length > 0 && !isNaN(textValue)) {
                return true;
            } else {
                return false;
            }

    }
}


const checkGeorgianLetters = (text) => {
    const re = /^[ა-ჰ]+$/;
    return re.test(String(text).toLowerCase());
}

const checkEmailAddress = (email) => {
    if (email.slice(email.length - 12, email.length) === '@redberry.ge') {
        return true;
    } else {
        return false;
    }
}

const phoneValidator = (phone) => {
    if (phone.slice(0, 5) === "+9955" &&
        phone.length === 13 && !isNaN(+phone.substring(1))) {
        return true;
    } else {
        return false;
    }
}

const checkLaptopName = (text) => {
    const re = /^[!@#$%^&*()_+=a-zA-Z0-9]+$/;
    return re.test(String(text).toLowerCase());
}
