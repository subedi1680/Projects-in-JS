function generatePassword(){

    const passwordLength = document.getElementById("passwordLength").value;
    const includeLowercase = document.getElementById("includeLowercase");
    const includeUppercase = document.getElementById("includeUppercase");
    const includeNumbers = document.getElementById("includeNumbers");
    const includeSymbols = document.getElementById("includeSymbols");
    const generatedPassword = document.getElementById("generatedPassword");

    console.log(passwordLength);
    console.log(includeLowercase);
    console.log(includeUppercase);
    console.log(includeNumbers);
    console.log(includeSymbols);

    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz" ;
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" ;
    const numberChars = "0123456789" ;
    const symbolChars = "!@#$%^&*()_+-=";

    let allowedChars = "";
    let password = "";

    allowedChars += includeLowercase.checked ? lowercaseChars : "";
    allowedChars += includeUppercase.checked ? uppercaseChars : "";
    allowedChars += includeNumbers.checked ? numberChars : "";
    allowedChars += includeSymbols.checked ? symbolChars : "";

    if(passwordLength < 8 || passwordLength > 16){
        generatedPassword.textContent = `Password length must be between 8 - 16`;
    }
    else if(allowedChars.length === 0){
        generatedPassword.textContent =  `Select atleast 1 set of characters`;
    }
    else{
        for(let i=0; i<passwordLength; i++){
            const randomIndex = Math.floor(Math.random() * allowedChars.length);
            password += allowedChars[randomIndex];
        }
    
        generatedPassword.innerHTML = `Generated Password : <input type="text" id="passGen" value="${password}" readonly> `;
    }
}



/* const password = generatePassword(passwordLength,
                                  includeLowercase,
                                  includeUppercase,
                                  includeNumbers,
                                  includeSymbols);

console.log(`Generated Password : ${password}`);   */                              