const hovers = document.querySelectorAll('.hover')
hovers.forEach(hover => {
    hover.addEventListener('mouseover', () => {
        const lamp = document.getElementById(`lamp${hover.id}`)
        lamp.src = `/assets/${lamp.id}On.png`
        lamp.style.top = '50px'
    })

    hover.addEventListener('mouseout', () => {
        const lamp = document.getElementById(`lamp${hover.id}`)
        const theme = document.getElementById('themeBtn').className
        console.log(theme)
        if (theme == 'light') {   
            lamp.src = `/assets/lamp${hover.id}.png`
        } else if (theme == 'dark') {
            lamp.src = `/assets/lamp${hover.id}_d.png`
        }

        lamp.style.top = '0'
    })
})

const navButtons = document.querySelectorAll('.nav-button')
navButtons.forEach(button => {
    button.addEventListener('mouseover', () => {
        document.getElementById(`${button.id}Underline`).style.display = 'block'
    })

    button.addEventListener('mouseout', () => {
        document.getElementById(`${button.id}Underline`).style.display = 'none'
    })
})

document.getElementById('btnResume').addEventListener('click', () => {
    window.open("https://drive.google.com/file/d/1ZZ1ZRyseZQNzLR09vEH5gW3vftXYnLwn/view?usp=share_link")
})

document.getElementById('playlist').addEventListener('click', () => {
    window.open("https://open.spotify.com/playlist/64hGTqDBjloKi8mrOgtKqw?si=7eNKOET-Qe6U57iTVWFpZg")
})

const btnProject1 = document.getElementById('proj1btn')
btnProject1.addEventListener('mouseover', () => {
    btnProject1.src = '/assets/proj1btnPressed.png'
})
btnProject1.addEventListener('mouseout', () => {
    btnProject1.src = '/assets/proj1btn.png'
})
btnProject1.addEventListener('click', () => {
    window.open("https://remtadesign.store")
})

const btnSend = document.getElementById('send')
btnSend.addEventListener('mousedown', () => {
    btnSend.style.backgroundColor = '#40684B'
    btnSend.style.boxShadow = 'inset 0px 4px 4px rgba(0, 0, 0, 0.25);'
})
btnSend.addEventListener('mouseup', () => {
    btnSend.style.backgroundColor = 'var(--green)'
    btnSend.style.boxShadow = 'none'
})

const projectPics = document.querySelectorAll('.project-img')
console.log(projectPics)
projectPics.forEach(pic => {
    pic.addEventListener('mouseover', () => {
        const theme = document.getElementById('themeBtn').className
        if (theme == 'light') {
            pic.src = `/assets/${pic.id}col.png`
            if (pic.id == 'pic2' || pic.id == 'pic3') {
                const cs = document.getElementById(`comingsoon${pic.id}`)
                cs.src = '/assets/comingsooncol.png'
            }
        } else if (theme == 'dark') {
            pic.src = `/assets/dark/${pic.id}col.png`
            if (pic.id == 'pic2' || pic.id == 'pic3') {
                const cs = document.getElementById(`comingsoon${pic.id}`)
                cs.src = '/assets/dark/comingsooncol.png'
            }
        }
    })

    pic.addEventListener('mouseout', () => {
        const theme = document.getElementById('themeBtn').className
        if (theme == 'light') {
            pic.src = `/assets/${pic.id}.png`
            if (pic.id == 'pic2' || pic.id == 'pic3') {
                const cs = document.getElementById(`comingsoon${pic.id}`)
                cs.src = '/assets/comingsoon.png'
            }
        } else if (theme == 'dark') {
            pic.src = `/assets/dark/${pic.id}.png`
            if (pic.id == 'pic2' || pic.id == 'pic3') {
                const cs = document.getElementById(`comingsoon${pic.id}`)
                cs.src = '/assets/dark/comingsoon.png'
            }
        }

        
    })
})

const themeBtn = document.getElementById('themeBtn')
themeBtn.addEventListener('click', () => changeColorTheme(themeBtn.className))
function changeColorTheme(mode) {
    console.log(mode)
    if (mode == "light") {
        document.querySelector('nav').style.backgroundColor = "var(--bgcolorDM)"
        document.body.style.backgroundColor = "var(--bgcolorDM)"

        document.getElementById('themeBtn').src = "/assets/sun.png"
        document.querySelectorAll('.nav-button').forEach(btn => {
            btn.className = 'nav-button-dark'
        })
        document.querySelector('.btnAbout_l').className = "btnAbout_d"
        document.querySelector('.btnProjects_l').className = "btnProjects_d"

        document.querySelectorAll('.line_l').forEach(line => {
            line.className = 'line_d'
        })
        document.getElementById('logo').src = '/assets/VB_d.png'

        document.querySelectorAll('.lamp').forEach(lamp => {
            console.log()
            lamp.src = `/assets/${lamp.id}_d.png`
        })
        document.querySelector('.portrait').src = "/assets/portrait_d.png"
        document.querySelector('.bigIntro').className = 'bigIntro_d'
        // document.querySelector('.smallIntro').className = 'smallIntro_d'
        document.getElementById('smallIntro').src = "/assets/dark/smallIntro.png"

        let greens = document.querySelectorAll('.green')
        for (let i=0; i < greens.length; i++) {
            greens[i].classList.remove("green")
            greens[i].classList.add("green_d")
        }

        document.getElementById('aboutHeading').src = "/assets/dark/aboutHeading.png"
        document.getElementById('aboutText').src = "/assets/dark/aboutText.png"
        document.getElementById('myPlaylist').src = "/assets/dark/playlist.png"
        document.getElementById('formIntro').src = "/assets/dark/formIntro.png"
        document.getElementById('form').className = "form_d"

        document.getElementById('projectsHeading').src = "/assets/dark/projectsHeading.png"
        document.getElementById('pic1').src = "/assets/dark/pic1.png"
        document.getElementById('pic2').src = "/assets/dark/pic2.png"
        document.getElementById('pic3').src = "/assets/dark/pic3.png"
        document.getElementById('desc1').src = "/assets/dark/proj1.png"
        document.getElementById('desc2').src = "/assets/dark/proj2.png"
        document.getElementById('desc3').src = "/assets/dark/proj3.png"
        document.querySelectorAll('.project-border').forEach(border => {
            border.className = "project-border_d"
        })

        themeBtn.className = "dark"
    } else if (mode == "dark") { 
        document.querySelector('nav').style.backgroundColor = "var(--bgcolor)"
        document.body.style.backgroundColor = "var(--bgcolor)"

        document.getElementById('themeBtn').src = "/assets/moon.png"
        document.querySelectorAll('.nav-button-dark').forEach(btn => {
            btn.className = 'nav-button'
        })
        document.querySelector('.btnAbout_d').className = "btnAbout_l"
        document.querySelector('.btnProjects_d').className = "btnProjects_l"

        document.querySelectorAll('.line_d').forEach(line => {
            line.className = 'line_l'
        })
        document.getElementById('logo').src = '/assets/VB_l.png'

        document.querySelectorAll('.lamp').forEach(lamp => {
            lamp.src = `/assets/${lamp.id}.png`
        })
        document.querySelector('.portrait').src = "/assets/portrait.png"
        document.querySelector('.bigIntro_d').className = 'bigIntro'
        // document.querySelector('.smallIntro_d').className = 'smallIntro'
        document.getElementById('smallIntro').src = "/assets/smallIntro.png"

        let greens = document.querySelectorAll('.green_d')
        for (let i=0; i < greens.length; i++) {
            greens[i].classList.remove("green_d")
            greens[i].classList.add("green")
        }

        document.getElementById('aboutHeading').src = "/assets/aboutHeading.png"
        document.getElementById('aboutText').src = "/assets/aboutText.png"
        document.getElementById('myPlaylist').src = "/assets/playlist.png"
        document.getElementById('formIntro').src = "/assets/formIntro.png"
        document.getElementById('form').className = "form"

        document.getElementById('projectsHeading').src = "/assets/projectsHeading.png"
        document.getElementById('pic1').src = "/assets/pic1.png"
        document.getElementById('pic2').src = "/assets/pic2.png"
        document.getElementById('pic3').src = "/assets/pic3.png"
        document.getElementById('desc1').src = "/assets/proj1.png"
        document.getElementById('desc2').src = "/assets/proj2.png"
        document.getElementById('desc3').src = "/assets/proj3.png"
        document.querySelectorAll('.project-border_d').forEach(border => {
            border.className = "project-border"
        })

        themeBtn.className = "light"
    }
}