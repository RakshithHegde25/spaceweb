document.querySelector(".generate-btn").addEventListener('click',generatePicofDay)
function generatePicofDay(){
    const choice=document.querySelector('input').value
    console.log(choice)
    let url=`https://api.nasa.gov/planetary/apod?api_key=Lg0YvadbYvd3RpzQOrZvKtOagbXYIPrRlfjd9DLC&date=${choice}`
fetch(url)
.then(res=>res.json())
.then(data=>{
    console.log(data)
    document.querySelector('iframe').style.margin=0;
    if(data.media_type==="image"){
        document.getElementById('textbody-picofday').innerText=data.explanation
        document.getElementById('titletext-picofday').innerText=data.title
        document.querySelector('img').src=data.url
    
    }else if(data.media_type==="video"){
        document.getElementById('textbody-picofday').innerText=data.explanation
        document.getElementById('titletext-picofday').innerText=data.title
        document.querySelector('iframe').src=data.url

    }
   
   
    

    
})
.catch(err=>{
    console.log(`error ${err}`)
});
}


