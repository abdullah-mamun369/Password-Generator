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

    let generatedPassword = "";

    // Type-1=================================

    for (let i = 0; i < lengtType; i++) {
        const upperPass = upperWord[Math.floor(Math.random() * 26)]
        const lowerPass = lowerWord[Math.floor(Math.random() * 26)]
        const numPass = numbers[Math.floor(Math.random() * 10)]
        const specialPass = special[Math.floor(Math.random() * 25)]


        const singlePass = [upperPass, lowerPass, numPass, specialPass]

        const formatType = []

        console.log(formatType);

        for (let j = 0; j < checkedValue.length; j++) {
            if (checkedValue[j] === true) {
                formatType.push(singlePass[j])
            }
        }

        generatedPassword = generatedPassword + formatType[Math.floor(Math.random() * (formatType.length))]
    }

    password.innerText = generatedPassword;

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
