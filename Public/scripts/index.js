/*const bodyWrapper = document.getElementById('body-wrapper');
const bodyWarpperH1 = bodyWrapper.getElementsByTagName('h1');
bodyWrapper.addEventListener( 'click', () => {
    if ( bodyWarpperH1[0].style.display === 'none' ){
        bodyWarpperH1[0].style.display = 'block';
    }else{
        bodyWarpperH1[0].style.display = 'none';
    }
})*/

const createPostBtn = document.getElementById('createPostBtn');
function AjaxGet(url){
    let xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onload = () => {
        if( this.status == 200 ){
            console.log(this.responseText);
        }
    }
    xhr.onerror = () => {
        console.log('Request Error...');
    }
    xhr.send();
}
createPostBtn.addEventListener('click', ()=>{
    let form = document.getElementById('createPost');
    form.style.display = 'block';
});