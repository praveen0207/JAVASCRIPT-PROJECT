//RANDOM PASSWORD GENERATOR


function generatPassoword(length,includeLowercase,includeUppercase,includeNumbers,includeSymbols){
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const UppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*-=+*";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase ? lowercaseChars : "";
    allowedChars += includeUppercase ? UppercaseChars : "";
    allowedChars += includeNumbers ? numberChars : "";
    allowedChars += includeSymbols ? symbolChars : "";

    if(length <= 0){
        return '(password length muust be at least 1)'
    }
    if(allowedChars.length === 0){
        return `(At least 1 set of character needs to be selected)`
    }

    for(let i=0;i<length;i++){
        const randomIndex = Math.floor(Math.random() * allowedChars.length);
        password += allowedChars[randomIndex];
    }

    return password;
}

const passwordLength = 8;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = generatPassoword(passwordLength,
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  includeSymbols)

console.log(`Generated password: ${password}`);