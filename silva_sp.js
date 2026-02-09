// Samuel Silva
// U-1L

function validatePassword(a, b) {
    // if a and b are not strings
    if (typeof a !== "string" || typeof b !== "string") {
        return false;
    }

    // checks if valid length
    if (a.length < 8 || b.length < 8) {
        return false;
    }

    // checks if equal length
    if (a.length != b.length) {
        return false;
    }

    // checks if matched strings
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }

    // for checking of numbers in the string
    const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

    // booleans to check if all requirements for the password is satisfied
    let containsNum = false;
    let containsUpperCase = false;
    let containsLowerCase = false;

    for (let i = 0; i < a.length; i++) {

        // number search
        if (numbers.includes(a[i])) {
            containsNum = true;
        // capital letter search
        } else if (a.charCodeAt(i) >= 65 && a.charCodeAt(i) <= 90) {
            containsUpperCase = true;
        // lower cased letter search
        } else if (a.charCodeAt(i) >= 97 && a.charCodeAt(i) <= 122) {
            containsLowerCase = true;
        }
    }
    

    if (containsLowerCase && containsNum && containsUpperCase) {
        return true;
    } else {
        return false;
    }


}

function reversePassword(a) {
    // if a is not a string, return an empty string
    if (typeof a !== "string") {
        return "";
    }

    let reversed = ""; // empty string to store the reversed string
    for (let i = a.length - 1; i >= 0; i--) {
        reversed+=a[i]; // concatenate each corresponding character starting from the last
    }
    return reversed;
}

function storePassword(a, b ,c) {
    // if a is not a string, make a empty
    if (typeof a !== "string") {
        a = "";
    }
    
    if (validatePassword(b, c)) { // if valid passwords, reverse the password
        let reversed = reversePassword(b);
        let object = {name:a, newpassword:reversed}; // make an object with the name and reversed password as values
        return object;
    } else {
        let object = {name:a, newpassword:b}; // make a new object and make the middle parameter as the new parameter
        return object;
    }
    
}
