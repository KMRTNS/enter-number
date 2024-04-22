const keyList = document.querySelectorAll('input[type="button"]')

function insertPhoneNumber(newNumber) {
  const phoneNumber = document.querySelector('input[type="tel"]')
  phoneNumber.value = phoneNumber.value + newNumber
}

for (let key of keyList) {
  const audioBip = document.querySelector("#bip")

  key.onclick = function (e) {
    audioBip.play()
    insertPhoneNumber(key.value)          
  }
}
