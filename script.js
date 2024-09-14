

const userInput = document.getElementById('userInput');
const imgBox = document.getElementById('imgBox');
const downloadimg = document.getElementById('download');



function qrCodeGen(){
    urlValue = userInput.value;
    if(urlValue.length  >0){
        const url = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + urlValue;
        imgBox.src= url;
        imgBox.style.opacity= '1';
    }
    
    else{
        
        userInput.classList.add('error');
        setTimeout(()=>{
            userInput.classList.remove('error');
        },1000)
    }

    return url;
}

const f = (qrCodeGen())

function download(){
    downloadimg.download =f;
}
