const name =document.getElementById('name');
const email =document.getElementById('email');
const phone =document.getElementById('name');
const option =document.getElementById('selected_option')
const description =document.getElementById('description');

const submit =document.getElementById('submit')[0];

submit.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Clicked");
    Email.send({
        SecureToken : "53c7dea0-89f4-4638-94a0-47ba680b0a0c",
        To : 'cleansweepin@outlook.com',
        From : "chandrashekhardhungana2022@gmail.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );

});
