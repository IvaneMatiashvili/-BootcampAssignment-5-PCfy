
/**
 * Welcome to index.js
 * 
 * author-Ivane Matishvili
 * 
 * @ - Important to read: If you try to open a web-page locally, via file:// protocol,
 *     you’ll find that import/export directives don’t work. Use a local web-server, 
 *     such as static-server or use the “live server” capability of your editor, 
 *     such as VS Code Live Server Extension to use modules. full information(https://javascript.info/modules-intro)
 * 
 */

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
