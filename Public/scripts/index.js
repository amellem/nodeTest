
const createPostBtn = document.getElementById('createPostBtn');
const formSubmit = document.getElementById('submitForm');
const form = document.getElementById('createPost');

// function AjaxPost(url, data, callback){
//     let xhr = new XMLHttpRequest();
//     xhr.open("POST", url, true);
//     xhr.setRequestHeader("Content-Type", "application/json");
//     xhr.onload = () => {
//         if( this.status == 200 ){
//             callback(this.responseText);
//             console.log(this.responseText);
//         }
//     }
//     xhr.onerror = () => {
//         console.log('Request Error...');
//     }
//     xhr.send(JSON.stringify(data));
// }

// function PopulateList(data){
//     console.log(data);
// }

// formSubmit.addEventListener('click', (e) => {
//     let inputs = form.querySelectorAll('input');
//     let data = [];
//     inputs.forEach((input)=>{
//         let object = {};
//         object[input.name] = input.value;
//         data.push(object);
//     });
//     AjaxPost('/posts', data, PopulateList);
// });

createPostBtn.addEventListener('click', ()=>{
    let form = document.getElementById('createPost');
    form.style.display = 'block';
});