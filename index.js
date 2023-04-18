const length = document.getElementById("length")
const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
const numeric = document.getElementById("numeric")
const character = document.getElementById("character")
const password = document.getElementById("password")

const upperWord = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const lowerWord = "abcdefghijklmnopqrstuvwxyz"
const numbers = "0123456789"
const special = "!#$%&()*+-/:;<=>?@[]^_{|}"


let lengtType = +length.value


document.getElementById("submit").addEventListener("click", function () {

    const chkUpper = uppercase.checked
    const chkLower = lowercase.checked
    const chkNum = numeric.checked
    const chkCharacter = character.checked

    const checkedValue = [chkUpper, chkLower, chkNum, chkCharacter]

    let lengtType = +length.value

    if (lengtType === 0) {
        lengtType = 8;
    }

    let generatedPassword = [];



    for (let i = 0; i < lengtType; i++) {
        const upperPass = upperWord[Math.floor(Math.random() * 26)]
        const lowerPass = lowerWord[Math.floor(Math.random() * 26)]
        const numPass = numbers[Math.floor(Math.random() * 10)]
        const specialPass = special[Math.floor(Math.random() * 25)]
        const singlePass = [upperPass, lowerPass, numPass, specialPass]

        const formatType = []

        // console.log(formatType);

        for (let j = 0; j < checkedValue.length; j++) {
            if (checkedValue[j] === true) {
                formatType.push(singlePass[j])
            }
        }

        generatedPassword.push(formatType[Math.floor(Math.random() * (formatType.length))])
    }


    let foundUpper = false;
    let foundLower = false;
    let foundNum = false;
    let foundCharacter = false;


    for (let k = 0; k < generatedPassword.length - 4; k++) {
        if (chkUpper === true) {
            for (let l = 0; l < upperWord.length; l++) {
                if (generatedPassword[k] === upperWord[l]) {
                    foundUpper = true;
                }
            }
        }
        if (chkLower === true) {
            for (let l = 0; l < lowerWord.length; l++) {
                if (generatedPassword[k] === lowerWord[l]) {
                    foundLower = true;
                }
            }
        }
        if (chkNum === true) {
            for (let l = 0; l < numbers.length; l++) {
                if (generatedPassword[k] === numbers[l]) {
                    foundNum = true;
                }
            }
        }
        if (chkCharacter === true) {
            for (let l = 0; l < special.length; l++) {
                if (generatedPassword[k] === special[l]) {
                    foundCharacter = true;
                }
            }
        }
    }

    console.log(generatedPassword);

    if (foundUpper === false) {
        generatedPassword[generatedPassword.length - 4] = upperWord[Math.floor(Math.random() * 26)]
        console.log("upper");
    }
    if (foundLower === false) {
        generatedPassword[generatedPassword.length - 3] = lowerWord[Math.floor(Math.random() * 26)]
        console.log("lower");
    }
    if (foundNum === false) {
        generatedPassword[generatedPassword.length - 2] = numbers[Math.floor(Math.random() * 10)]
        console.log("number");
    }
    if (foundCharacter === false) {
        generatedPassword[generatedPassword.length - 1] = special[Math.floor(Math.random() * 25)]
        console.log("character");
    }



    let finalPassword = "";


    for (let m = 0; m < generatedPassword.length; m++) {
        finalPassword = finalPassword + generatedPassword[m]
    }



    console.log(finalPassword);

    password.innerText = finalPassword;

    const copyPassword = password.innerText;

    if (copyPassword.length > 0) {
        let copyBtn = document.getElementById("copyBtn")

        copyBtn.classList.remove("class", "hidden");
    }

})






document.getElementById("copy").addEventListener("click", () => {

    const copyPassword = password.innerText;

    navigator.clipboard.writeText(copyPassword);

})































// const length = document.getElementById("length")
// const uppercase = document.getElementById("uppercase")
// const lowercase = document.getElementById("lowercase")
// const numeric = document.getElementById("numeric")
// const character = document.getElementById("character")
// const password = document.getElementById("password")

// const upperWord = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
// const lowerWord = "abcdefghijklmnopqrstuvwxyz"
// const numbers = "0123456789"
// const special = "!#$%&()*+-/:;<=>?@[]^_{|}"


// let lengtType = +length.value


// document.getElementById("submit").addEventListener("click", function () {

//     const chkUpper = uppercase.checked
//     const chkLower = lowercase.checked
//     const chkNum = numeric.checked
//     const chkCharacter = character.checked

//     const checkedValue = [chkUpper, chkLower, chkNum, chkCharacter]

//     let lengtType = +length.value

//     if (lengtType === 0) {
//         lengtType = 8;
//     }

//     let generatedPassword = "";


//     for (let i = 0; i < lengtType; i++) {
//         const upperPass = upperWord[Math.floor(Math.random() * 26)]
//         const lowerPass = lowerWord[Math.floor(Math.random() * 26)]
//         const numPass = numbers[Math.floor(Math.random() * 10)]
//         const specialPass = special[Math.floor(Math.random() * 25)]
//         const singlePass = [upperPass, lowerPass, numPass, specialPass]

//         const formatType = []

//         // console.log(formatType);

//         for (let j = 0; j < checkedValue.length; j++) {
//             if (checkedValue[j] === true) {
//                 formatType.push(singlePass[j])
//             }
//         }

//         generatedPassword = generatedPassword + formatType[Math.floor(Math.random() * (formatType.length))]
//     }

//     let foundUpper = false;
//     let foundLower = false;
//     let foundNum = false;
//     let foundCharacter = false;


//     for (let k = 0; k < generatedPassword.length - 4; k++) {
//         if (chkUpper === true) {
//             for (let l = 0; l < upperWord.length; l++) {
//                 if (generatedPassword[k] === upperWord[l]) {
//                     foundUpper = true;
//                 }
//             }
//         }
//         if (chkLower === true) {
//             for (let l = 0; l < lowerWord.length; l++) {
//                 if (generatedPassword[k] === lowerWord[l]) {
//                     foundLower = true;
//                 }
//             }
//         }
//         if (chkNum === true) {
//             for (let l = 0; l < numbers.length; l++) {
//                 if (generatedPassword[k] === numbers[l]) {
//                     foundNum = true;
//                 }
//             }
//         }
//         if (chkCharacter === true) {
//             for (let l = 0; l < special.length; l++) {
//                 if (generatedPassword[k] === special[l]) {
//                     foundCharacter = true;
//                 }
//             }
//         }
//     }

//     if (foundUpper === false) {
//         generatedPassword = generatedPassword.replace(`${generatedPassword[generatedPassword.length - 4]}`, `${upperWord[Math.floor(Math.random() * 26)]}`)

//         generatedPassword[generatedPassword.length - 4] = upperWord[Math.floor(Math.random() * 26)]
//         console.log(generatedPassword[generatedPassword.length - 4]);
//         console.log(upperWord[Math.floor(Math.random() * 26)]);
//         console.log("upper");
//     }
//     if (foundLower === false) {
//         generatedPassword[generatedPassword.length - 3] = lowerWord[Math.floor(Math.random() * 26)]
//         console.log(generatedPassword[generatedPassword.length - 3]);
//         console.log(lowerWord[Math.floor(Math.random() * 26)]);
//         console.log("lower");
//     }
//     if (foundNum === false) {
//         generatedPassword[generatedPassword.length - 2] = numbers[Math.floor(Math.random() * 10)]
//         console.log(generatedPassword[generatedPassword.length - 2]);
//         console.log(numbers[Math.floor(Math.random() * 10)]);
//         console.log("number");
//     }
//     if (foundCharacter === false) {
//         generatedPassword[generatedPassword.length - 1] = special[Math.floor(Math.random() * 25)]
//         console.log(special[Math.floor(Math.random() * 25)]);
//         console.log(generatedPassword[generatedPassword.length - 1]);
//         console.log("character");
//     }


//     password.innerText = generatedPassword;

//     const copyPassword = password.innerText;

//     if (copyPassword.length > 0) {
//         let copyBtn = document.getElementById("copyBtn")

//         copyBtn.classList.remove("class", "hidden");
//     }

// })






// document.getElementById("copy").addEventListener("click", () => {

//     const copyPassword = password.innerText;

//     navigator.clipboard.writeText(copyPassword);

// })











