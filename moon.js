
function getPhase(){
    
    let url=`https://api.weatherapi.com/v1/astronomy.json?key=0acbe072f0ad4fa4b6b34329233011&q=12.9716,77.5946`
fetch(url)
.then(res=>res.json())
.then(data=>{
    console.log(data)
    document.getElementById('moon-phase').innerText=data.astronomy.astro.moon_phase
    document.getElementById('sunrise-id').innerText=data.astronomy.astro.sunrise
    document.getElementById('sunset-id').innerText=data.astronomy.astro.sunset
    document.getElementById('moonrise-id').innerText=data.astronomy.astro.moonrise
    document.getElementById('moonset-id').innerText=data.astronomy.astro.moonset
    let moonPhase = data.astronomy.astro.moon_phase;
    let moonPhaseCheck = moonPhase.toUpperCase();
    console.log(moonPhaseCheck);
    
    switch (moonPhaseCheck) {
        case 'NEW MOON':
            document.getElementById('moon-image').src = "images/phases of the moon/new-moon.webp";
            break;
        case 'WAXING CRESCENT':
            document.getElementById('moon-image').src = "images/phases of the moon/waxing-crescent.webp";
            break;
        case 'FIRST QUARTER':
            document.getElementById('moon-image').src = "images/phases of the moon/first-quarter.webp";
            break;
        case 'WAXING GIBBOUS':
            document.getElementById('moon-image').src = "images/phases of the moon/waxing-gibbous.webp";
            break;
        case 'FULL MOON':
            document.getElementById('moon-image').src = "images/phases of the moon/full.webp";
            break;
        case 'WANING GIBBOUS':
            document.getElementById('moon-image').src = "images/phases of the moon/waning-gibbous.webp";
            break;
        case 'LAST QUARTER':
            document.getElementById('moon-image').src = "images/phases of the moon/third-quarter.webp";
            break;
        case 'WANING CRESCENT':
            document.getElementById('moon-image').src = "images/phases of the moon/waning-crescent.webp";
            break;
        default:
            document.getElementById('moon-image').src = "images/phases of the moon/full.webp";
            break;
    }
    
    

    
})
.catch(err=>{
    console.log(`error ${err}`)
});
}

getPhase();
