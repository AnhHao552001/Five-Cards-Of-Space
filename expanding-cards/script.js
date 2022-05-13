
const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}

// Do not display inforcards on page load
let others = document.querySelectorAll('.others')
others.forEach(element => {
    element.style.display  = 'none'
})


// TODO: create previous slides
// Fetch data from API

function getFetch (){
const url = `https://api.nasa.gov/planetary/apod?api_key=oQKtkQRPDtW7obiXssBVzW36QK4VCkYp0Qz6BWNf&count=5`
  
fetch(url)
    .then(res => res.json()) // parse response as JSON
    .then(data => {
            
        const panels = document.querySelectorAll('.panel')
        panels.forEach((panel, index) => {
            console.log(index)
            // localStorage.setItem(`date ${index}`, `${data[index].date}`)
            // localStorage.setItem(`explanation ${index}`, `${data[index].explanation}`)
            // localStorage.setItem(`imagelink ${index}`, `${data[index].hdurl}`)
            // localStorage.setItem(`videolink ${index}`, `${data[index].url}`)
            // localStorage.setItem(`title ${index}`, `${data[index].title}`)
            // localStorage.setItem(`copyright ${index}`, `${data[index].copyright}`)
            // console.log(`title ${index}`, `${data[index].title}`)
            // console.log(`copyright ${index}`, `${data[index].copyright}`)
            //  console.log(`date ${index}`, `${data[index].date}`)
            // console.log(`explanation ${index}`, `${data[index].explanation}`)
            // console.log(`mediatype ${index}`, `${data[index].media_type}`)
            // console.log(`image-media hdurl ${index}`, `${data[index].hdurl}`)
            // console.log(`video-media url ${index}`, `${data[index].url}`)
            
            let othersH5 = document.querySelectorAll('.others > h5')
            let othersSpan = document.querySelectorAll('.others > span + span')
            let othersSecondSpan = document.querySelectorAll(' .others > span:nth-child(2)')
            let othersPtags = document.querySelectorAll('.others > p')
            panel.textContent = ''
            if (data[index].media_type == 'video' && data[index].hdurl == undefined){
                
                
                panel.setAttribute('href', `${data[index].url}`)
                 panel.style.backgroundImage = `url('launch_vernacotola_s.jpg')`
                 panel.textContent = `Video link in explanation`

                
                othersH5[index].innerText = `TITLE:  
                ${data[index].title}`
                othersSpan[index].innerText = `DATE: ${data[index].date}`
                othersSecondSpan[index].innerText = `COPYRIGHT:  ${data[index].copyright}`
                othersPtags[index].innerText = `EXPLANATION:
                ${data[index].explanation}
                video-link..... ${data[index].url}`
                console.log(' if')
            }else if(data[index].media_type == 'image' && data[index].hdurl != undefined){
                panel.setAttribute('href', `${data[index].url}`)
                
                panel.style.backgroundImage = `url(${data[index].url})`
                
                
                othersH5[index].innerText = `TITLE:
                ${data[index].title}`

                othersSpan[index].innerText = `DATE: ${data[index].date}`
                
                othersSecondSpan[index].innerText = `COPYRIGHT: ${data[index].copyright}`

                othersPtags[index].innerText = `EXPLANATION:
                ${data[index].explanation}`

                
                console.log('media type is image and hd-url is a string')

            }else if(data[index].hdurl == undefined){
                othersH5[index].innerHTML = `TITLE:
                ${data[index].title}`
                othersSpan[index].innerText = `DATE: ${data[index].date}`
                othersSecondSpan[index].innerText = `COPYRIGHT: ${data[index].copyright}`
                othersPtags[index].innerHTML = `EXPLANATION:
                ${data[index].explanation}`
                panel.style.backgroundImage = data[index].url 
            }

            

        })
        
    })
    .catch(err => {
        console.log(`error ${err}`)
    });
}

document.querySelector('button').addEventListener('click', getFetch)


//document.querySelector('.displayContainer').addEventListener('click', displaySecondContainer)
// show first info card when first slide is clicked

function showZero(e){
    e.preventDefault()
    document.querySelector('#info-card-four').style.display = 'none'
    document.querySelector('#info-card-three').style.display = 'none'
    document.querySelector('#info-card-two').style.display = 'none'
    document.querySelector('#info-card-one').style.display = 'none'
    document.querySelector('#info-card-zero').style.display = 'flex'
    document.querySelector('#info-card-zero').style.flexDirection = 'column'
    document.querySelector('#info-card-zero').style.textAlign = 'center'
    
        console.log('image one clicked')

}
document.querySelector('#zero').addEventListener('click', showZero)



// show only second info card when second slide is clicked

function showOne(e){
    e.preventDefault()
    document.querySelector('#info-card-zero').style.display = 'none'
    document.querySelector('#info-card-two').style.display = 'none'
    document.querySelector('#info-card-four').style.display = 'none'
    document.querySelector('#info-card-three').style.display = 'none'
    document.querySelector('#info-card-one').style.display = 'flex'
    document.querySelector('#info-card-one').style.flexDirection = 'column'
    document.querySelector('#info-card-one').style.textAlign = 'center'
    

    console.log('image two clicked')

}
document.querySelector('#one').addEventListener('click', showOne)


// show only third info card when second slide is clicked
function showTwo(e){
    e.preventDefault()
    document.querySelector('#info-card-four').style.display = 'none'
    document.querySelector('#info-card-zero').style.display = 'none'
    document.querySelector('#info-card-one').style.display = 'none'
    document.querySelector('#info-card-three').style.display = 'none'
    document.querySelector('#info-card-two').style.display = 'flex'
    document.querySelector('#info-card-two').style.flexDirection = 'column'
    document.querySelector('#info-card-two').style.textAlign = 'center'

    console.log('image three clicked')

}
document.querySelector('#two').addEventListener('click', showTwo)


// show only fourth info card when second slide is clicked
function showThree(e){
    e.preventDefault()
    
    document.querySelector('#info-card-zero').style.display = 'none'
    document.querySelector('#info-card-one').style.display = 'none'
    document.querySelector('#info-card-two').style.display = 'none'
    document.querySelector('#info-card-four').style.display = 'none'
    document.querySelector('#info-card-three').style.display = 'flex'
    document.querySelector('#info-card-three').style.flexDirection = 'column'
    document.querySelector('#info-card-three').style.textAlign = 'center'
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
    document.querySelector('#info-card-four').style.textAlign = 'center'
    console.log('image five clicked')
}



document.querySelector('#four').addEventListener('click', showFour)

