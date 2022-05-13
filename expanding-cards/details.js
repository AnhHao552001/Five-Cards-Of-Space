// const panels = document.querySelectorAll('.panel')
// const images = document.querySelectorAll('img')
// const iframes = document.querySelectorAll('.videoMedia')

// function removeActiveClasses(integer) {
//     const panels = document.querySelectorAll('.panel')
//     panels.forEach(panels => {
//         if(panels[integer].classList.includes('active')){
//             panels[integer].classList.remove('active')
//         }
            
//     })
// }



// function removeAllClassesFromImageTag(integer) {
//     const images = document.querySelectorAll('img')
//     images.forEach(images => {
//         images[integer].classList.remove('panel')
//         images[integer].classList.remove('d-block')
//         images[integer].classList.remove('w-100')
//     })
// }

// function addAllClassesToIframe(integer){
//     const iframes = document.querySelectorAll('.videoMedia')
//     iframes.forEach(iframes => {
//         iframes[integer].classList.add('panel')
//         iframes[integer].classList.add('d-block')
//         iframes[integer].classList.add('w-100')
//     })
// }

// function makeImageDisplayNone(integer){
//     const images = document.querySelectorAll('img')
//     Array.from(images).forEach(images => {
//         images[integer].style.display = 'none'
//     })
// }

// Do not display inforcards on page load
let others = document.querySelectorAll('.others')
others.forEach(element => {
    element.style.display  = 'none'
})

// show first info card when first slide is clicked

function showZero(e){
    e.preventDefault()
    console.log(e)
    document.querySelector('#info-card-four').style.display = 'none'
    document.querySelector('#info-card-three').style.display = 'none'
    document.querySelector('#info-card-two').style.display = 'none'
    document.querySelector('#info-card-one').style.display = 'none'
    document.querySelector('#info-card-zero').style.display = 'flex'
    document.querySelector('#info-card-zero').style.flexDirection = 'column'
    
        console.log('image one clicked')

}
document.querySelector('#zero').addEventListener('dblclick', showZero)



// show only second info card when second slide is clicked

function showOne(e){
    e.preventDefault()
    document.querySelector('#info-card-zero').style.display = 'none'
    document.querySelector('#info-card-two').style.display = 'none'
    document.querySelector('#info-card-four').style.display = 'none'
    document.querySelector('#info-card-three').style.display = 'none'
    document.querySelector('#info-card-one').style.display = 'flex'
    document.querySelector('#info-card-one').style.flexDirection = 'column'
    

    console.log('image two clicked')

}
document.querySelector('#one').addEventListener('dblclick', showOne)


// show only third info card when second slide is clicked
function showTwo(e){
    e.preventDefault()
    document.querySelector('#info-card-four').style.display = 'none'
    document.querySelector('#info-card-zero').style.display = 'none'
    document.querySelector('#info-card-one').style.display = 'none'
    document.querySelector('#info-card-three').style.display = 'none'
    document.querySelector('#info-card-two').style.display = 'flex'
    document.querySelector('#info-card-two').style.flexDirection = 'column'

    console.log('image three clicked')

}
document.querySelector('#two').addEventListener('dblclick', showTwo)


// show only fourth info card when second slide is clicked
function showThree(e){
    e.preventDefault()
    
    document.querySelector('#info-card-zero').style.display = 'none'
    document.querySelector('#info-card-one').style.display = 'none'
    document.querySelector('#info-card-two').style.display = 'none'
    document.querySelector('#info-card-four').style.display = 'none'
    document.querySelector('#info-card-three').style.display = 'flex'
    document.querySelector('#info-card-three').style.flexDirection = 'column'
    console.log('image four clicked')
}

document.querySelector('#three').addEventListener('click', showThree)

// show only fifth info card when second slide is clicked

function showFour(e){
    e.preventDefault()
    
    document.querySelector('#info-card-zero').style.display = 'none'
    document.querySelector('#info-card-one').style.display = 'none'
    document.querySelector('#info-card-two').style.display = 'none'
    
    document.querySelector('#info-card-three').style.display = 'none'
    document.querySelector('#info-card-four').style.display = 'flex'
    document.querySelector('#info-card-four').style.flexDirection = 'column'
    console.log('image five clicked')
}



document.querySelector('#four').addEventListener('click', showFour)




// Fetch raw data from APOD API and place images into the carousel slides

function getFetch (){
const url = `https://api.nasa.gov/planetary/apod?api_key=oQKtkQRPDtW7obiXssBVzW36QK4VCkYp0Qz6BWNf&count=5`
  
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
        
                // console.log(data[1].hdurl)
                
                
                

                const panels = document.querySelectorAll('.panel')
                panels.forEach((panel, index) => {
                    
                    // save data in local storage so user can refresh and still be able to click previous
                 
                    localStorage.setItem(`date ${index}`, `${data[index].date}`)
                    localStorage.setItem(`explanation ${index}`, `${data[index].explanation}`)
                    localStorage.setItem(`media-type ${index}`, `${data[index].media_type}`)
                    localStorage.setItem(`HDURL ${index}`, `${data[index].hdurl}`)
                    localStorage.setItem(`URL ${index}`, `${data[index].url}`)
                    localStorage.setItem(`title ${index}`, `${data[index].title}`)
                    localStorage.setItem(`explanation ${index}`, `${data[index].explanation}`)
                    localStorage.setItem(`copyright ${index}`, `${data[index].copyright}`)

                    
                    let url = data[index].url
                    let hdurl = data[index].hdurl
                    let mediaType = data[index].media_type
                    let othersH5 = document.querySelectorAll('.others > h5')
                    let othersSpan = document.querySelectorAll('.others > span + span')
                    let othersSecondSpan = document.querySelectorAll(' .others > span:nth-child(2)')
                    let othersPtags =  document.querySelectorAll('.others > p')
                    if (mediaType == 'video' && url != undefined ) {
                        
                        // document.querySelector('.carousel-item').setAttribute('href', url)
                        othersH5[index].innerText = `TITLE
                        ${data[index].title}`
                        othersSpan[index].innerText = `DATE
                        ${data[index].date}`
                        othersSecondSpan[index].innerText = `COPYRIGHT
                        ${data[index].copyright}`
                        othersPtags[index].innerText = `EXPLANATION
                        ${data[index].explanation}`
                    
                        
                
                    }else if(mediaType == 'image' && hdurl != undefined){
                        panel.src = hdurl
                        // document.querySelector('.carousel-item').setAttribute('href', hdurl)
                        panel.style.borderRadius = '2rem'
                        
                        
                        othersH5[index].innerText = `TITLE:
                        ${data[index].title}`
                        othersSpan[index].innerText = `DATE:
                        ${data[index].date}`
                        othersSecondSpan[index].innerText = `COPYRIGHT:
                        ${data[index].copyright}`
                        othersPtags[index].innerText = `EXPLANATION:
                        ${data[index].explanation}`
                    
                    
                    
                    
                    
                    
                    
                    }else if( mediaType == 'other' && hdurl == undefined && url == undefined){
                        panel.src = `url(AnnularEclipse_Pinski_1522.jpg)`
                        // document.querySelector('a > .active').setAttribute('href', hdurl)
                        panel.style.borderRadius = '50px'
                        othersH5[index].innerText = `Title: ${data[index].title}`.toUpperCase()
                        othersSpan[index].innerText = `Date: ${data[index].date}`
                        othersSecondSpan[index].innerText = `Copyright: ${data[index].copyright}`
                        othersPtags[index].innerText = `Explanation: ${data[index].explanation}`
                    
                    }

                    
                
                })

            })
    
}

document.querySelector('.buttonClick').addEventListener('click', getFetch)