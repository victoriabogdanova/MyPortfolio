window.addEventListener('load', resizeWindow)
window.addEventListener('resize', resizeWindow)

// Lamp hover events
const hovers = document.querySelectorAll('.hover')
hovers.forEach(hover => {
    hover.addEventListener('mouseover', () => {
        const lamp = document.getElementById(`lamp${hover.id}`)
        lamp.src = `assets/${lamp.id}On.png`
        lamp.style.top = '50px'
    })

    hover.addEventListener('mouseout', () => {
        const lamp = document.getElementById(`lamp${hover.id}`)
        const theme = document.getElementById('themeBtn').className
        if (theme == 'light') {   
            lamp.src = `assets/lamp${hover.id}.png`
        } else if (theme == 'dark') {
            lamp.src = `assets/dark/lamp${hover.id}.png`
        }
        if (window.innerWidth > 500) {
            lamp.style.top = '0'
        }
    })
})

// Nav button hover events with lamps
function navHover(evt) {
    button = evt.currentTarget
    document.getElementById(`${button.id}Underline`).style.display = 'block'

    if (button.id == 'btnAbout') {
        const lamp = document.getElementById('lampOrange')
        lamp.src = `assets/${lamp.id}On.png`
        lamp.style.top = '50px'
    } else if (button.id == 'btnProjects') {
        const lamp = document.getElementById('lampBlue')
        lamp.src = `assets/${lamp.id}On.png`
        lamp.style.top = '50px'
    } else if (button.id == 'btnContact') {
        const lamp = document.getElementById('lampPink')
        lamp.src = `assets/${lamp.id}On.png`
        lamp.style.top = '50px'
    } else if (button.id == 'btnResume') {
        const lamp = document.getElementById('lampPurple')
        lamp.src = `assets/${lamp.id}On.png`
        lamp.style.top = '50px'
    }
}

function navMouseOut(evt) {
    document.getElementById(`${button.id}Underline`).style.display = 'none'

    const theme = document.getElementById('themeBtn').className

    if (button.id == 'btnAbout') {
        const lamp = document.getElementById('lampOrange')
        if (theme == 'light') { lamp.src = `assets/${lamp.id}.png` }
        else if (theme == 'dark') { lamp.src = `assets/dark/${lamp.id}.png` }
        lamp.style.top = '0'
    }
    else if (button.id == 'btnProjects') {
        const lamp = document.getElementById('lampBlue')
        if (theme == 'light')  { lamp.src = `assets/${lamp.id}.png` }
        else if (theme == 'dark') { lamp.src = `assets/dark/${lamp.id}.png` }
        lamp.style.top = '0'
    }
    else if (button.id == 'btnContact') {
        const lamp = document.getElementById('lampPink')
        if (theme == 'light') { lamp.src = `assets/${lamp.id}.png` }
        else if (theme == 'dark') { lamp.src = `assets/dark/${lamp.id}.png` }
        lamp.style.top = '0'
    }
    else if (button.id == 'btnResume') {
        const lamp = document.getElementById('lampPurple')
        if (theme == 'light') { lamp.src = `assets/${lamp.id}.png` }
        else if (theme == 'dark') { lamp.src = `assets/dark/${lamp.id}.png` }
        lamp.style.top = '0'
    }
}

// Nav button hover events
const navButtons = document.querySelectorAll('.navBtnEvents')
navButtons.forEach(button => {
    button.addEventListener('mouseover', navHover) 
    button.addEventListener('mouseout', navMouseOut) 
})

// Resume link
document.getElementById('btnResume').addEventListener('click', () => {
    window.open("https://drive.google.com/file/d/1ZZ1ZRyseZQNzLR09vEH5gW3vftXYnLwn/view?usp=share_link")
})

// Spotify playlist link
document.getElementById('playlist').addEventListener('click', () => {
    window.open("https://open.spotify.com/playlist/64hGTqDBjloKi8mrOgtKqw?si=7eNKOET-Qe6U57iTVWFpZg")
})

// Project picture hover events
const projectImgs = document.querySelectorAll('.project-img')
projectImgs.forEach(img => {
    img.addEventListener('mouseover', () => {
        const theme = document.getElementById('themeBtn').className
        if (theme == 'light') {
            img.src = `assets/${img.id}-col.png`
        } else if (theme == 'dark') {
            img.src = `assets/dark/${img.id}-col.png`
        }
    })

    img.addEventListener('mouseout', () => {
        const theme = document.getElementById('themeBtn').className
        if (theme == 'light') {
            img.src = `assets/${img.id}.png`
        } else if (theme == 'dark') {
            img.src = `assets/dark/${img.id}.png`
        }
    })
})

// Project button hover and click events
const projectBtn1 = document.getElementById('project-btn1')
projectBtn1.addEventListener('mousedown', () => {
    projectBtn1.src = 'assets/project-btn1-pressed.png'
})
projectBtn1.addEventListener('mouseup', () => {
    projectBtn1.src = 'assets/project-btn1.png'
})
projectBtn1.addEventListener('click', () => {
    window.open("https://remtadesign.store")
})

// Form submit button events
const btnSend = document.getElementById('send')
btnSend.addEventListener('mousedown', () => {
    btnSend.style.backgroundColor = '#40684B'
    btnSend.style.boxShadow = 'inset 0px 4px 4px rgba(0, 0, 0, 0.25);'
})
btnSend.addEventListener('mouseup', () => {
    btnSend.style.backgroundColor = 'var(--green)'
    btnSend.style.boxShadow = 'none'
})

// Theme Change
const themeBtn = document.getElementById('themeBtn')
themeBtn.addEventListener('click', () => changeColorTheme(themeBtn.className))
const mobileThemeBtn = document.getElementById('mobileThemeBtn')
mobileThemeBtn.addEventListener('click', () => changeColorTheme(mobileThemeBtn.className))

function changeColorTheme(mode) {
    // switch to dark
    if (mode == "light") {
        // change background color
        document.querySelector('.nav-container').style.backgroundColor = "var(--bgcolorDM)"
        document.querySelector('nav').style.backgroundColor = "var(--bgcolorDM)"
        document.body.style.backgroundColor = "var(--bgcolorDM)"
        // change nav button color
        document.getElementById('themeBtn').src = "assets/sun.png"
        document.querySelectorAll('.nav-a').forEach(btn => {
            btn.classList.add('dark')
        })
        document.getElementById('btnResumeStyle').classList.remove('brown')
        document.querySelectorAll('.underline').forEach(u => {
            u.style.border = '2px solid var(--green_d)'
        })
        // line color
        document.querySelectorAll('.line_l').forEach(line => {
            line.className = 'line_d'
        })
        // logo color
        document.getElementById('logo').src = 'assets/VB_d.png'
        // lamps color
        document.querySelectorAll('.lamp').forEach(lamp => {
            lamp.src = `assets/dark/${lamp.id}.png`
        })
        //home page
        document.querySelector('.portrait').src = "assets/portrait_d.png"
        document.querySelector('.bigIntro').className = 'bigIntro_d'
        document.getElementById('smallIntro').src = "assets/dark/smallIntro.png"
        // all greens
        let greens = document.querySelectorAll('.green')
        for (let i=0; i < greens.length; i++) {
            greens[i].classList.remove("green")
            greens[i].classList.add("green_d")
        }
        //change headers
        document.querySelectorAll('.header').forEach(h => {
            h.className = 'header_d'
        })
        // change about page
        document.getElementById('aboutText').src = "assets/dark/aboutText.png"
        document.getElementById('myPlaylist').src = "assets/dark/playlist.png"
        document.getElementById('playlist').src = "assets/dark/spotify.png"
        // change projects page
        document.getElementById('project-img1').src = "assets/dark/project-img1.png"
        document.getElementById('project-img2').src = "assets/dark/project-img2.png"
        document.getElementById('project-img3').src = "assets/dark/project-img3.png"
        document.getElementById('project-desc1').src = "assets/dark/project-desc1.png"
        document.getElementById('project-desc2').src = "assets/dark/project-desc2.png"
        document.getElementById('project-desc3').src = "assets/dark/project-desc3.png"
        document.getElementById('live').style.color = 'var(--light)'
        document.getElementById('comingsoon').style.color = 'var(--light)'
        document.querySelectorAll('.small-header').forEach(sh => { sh.style.color = 'var(--light)' })
        document.querySelectorAll('.orange').forEach(o => { o.className = 'orange_d' })
        // change contact page
        document.getElementById('formIntro').src = "assets/dark/formIntro.png"
        document.getElementById('form').className = "form_d"
        //mobile
        if (window.innerWidth <= 500) {
            document.getElementById('logo_mobile').srcset = 'assets/mobile/dark/vb.png'
            mobileThemeBtn.src = 'assets/mobile/dark/sun.png'
            if (document.getElementById('hamburger-menu').classList.contains('open'))
            {
                document.getElementById('hamburger-menu-img').src = 'assets/mobile/dark/x.png'
            } else {
                document.getElementById('hamburger-menu-img').src = 'assets/mobile/dark/menu.png'
            }
            document.querySelectorAll('.nav-button').forEach(btn => {
                btn.style.backgroundColor = 'rgba(44, 41, 48, 0.9)'
            })
            document.querySelector('.mobile-menu').style.textDecorationColor = 'var(--light)'
            document.getElementById('lampOrange_mobile').srcset = 'assets/mobile/dark/lampOrange.png'
            document.getElementById('lampOrange').style.top = '8px'
            document.getElementById('lampPink_mobile').srcset = 'assets/mobile/dark/lampPink.png'
            document.getElementById('lampPurple_mobile').srcset = 'assets/mobile/dark/lampPurple.png'
            document.getElementById('portrait_mobile').srcset = 'assets/mobile/dark/portrait.png'
            document.getElementById('smallIntro_mobile').srcset = 'assets/mobile/dark/smallIntro.png'
            document.getElementById('resume-btn').src = 'assets/mobile/dark/resume-btn.png'
            document.getElementById('aboutText_mobile').srcset = 'assets/mobile/dark/aboutText.png'
            document.getElementById('myPlaylist_mobile').srcset = 'assets/mobile/dark/playlist.png'
            document.getElementById('playlist_mobile').srcset = 'assets/mobile/dark/spotify.png'
            document.getElementById('project-mobile-img1').src = 'assets/mobile/dark/project-mobile-img1.png'
            document.getElementById('project-mobile-img2').src = 'assets/mobile/dark/project-mobile-img2.png'
            document.getElementById('project-mobile-img3').src = 'assets/mobile/dark/project-mobile-img3.png'
            document.getElementById('form-intro').srcset = 'assets/mobile/dark/form-intro.png'
            document.getElementById('form').className = 'form_d'
            document.getElementById('messagelbl').classList.remove('messagelbl')
            document.getElementById('messagelbl').classList.add('messagelbl_d')
            document.getElementById('send').style.backgroundColor = 'var(--green_d)'
            document.getElementById('remta-back-btn').src = 'assets/mobile/dark/remta-back-btn.png'
            document.getElementById('remta-desc').src = 'assets/mobile/dark/remta-desc.png'
            document.getElementById('remta-btn').src = 'assets/mobile/dark/remta-btn.png'
            document.querySelector('.remta-page').style.backgroundColor = 'var(--bgcolorDM)'
        }
        // change theme class
        themeBtn.className = "dark"
        mobileThemeBtn.className = 'dark'
    } 
    else if (mode == "dark")    // switch to light
    { 
        // bg color
        document.querySelector('nav').style.backgroundColor = "var(--bgcolor)"
        document.querySelector('.nav-container').style.backgroundColor = "var(--bgcolor)"
        document.body.style.backgroundColor = "var(--bgcolor)"
        // nav
        document.getElementById('themeBtn').src = "assets/moon.png"
        document.querySelectorAll('.nav-a').forEach(btn => {
            btn.classList.remove('dark')
        })
        document.getElementById('btnResumeStyle').classList.add('brown')
        document.querySelectorAll('.underline').forEach(u => {
            u.style.border = '2px solid var(--green)'
        })
        // lines-logo
        document.querySelectorAll('.line_d').forEach(line => {
            line.className = 'line_l'
        })
        document.getElementById('logo').src = 'assets/VB_l.png'
        // lamps
        document.querySelectorAll('.lamp').forEach(lamp => {
            lamp.src = `assets/${lamp.id}.png`
        })
        // home page
        document.querySelector('.portrait').src = "assets/portrait.png"
        document.querySelector('.bigIntro_d').className = 'bigIntro'
        document.getElementById('smallIntro').src = "assets/smallIntro.png"
        // green
        let greens = document.querySelectorAll('.green_d')
        for (let i=0; i < greens.length; i++) {
            greens[i].classList.remove("green_d")
            greens[i].classList.add("green")
        }
        //change headers
        document.querySelectorAll('.header_d').forEach(h => {
            h.className = 'header'
        })
        // about
        document.getElementById('aboutText').src = "assets/aboutText.png"
        document.getElementById('myPlaylist').src = "assets/playlist.png"
        document.getElementById('playlist').src = "assets/spotify.png"
        // projects
        document.getElementById('project-img1').src = "assets/project-img1.png"
        document.getElementById('project-img2').src = "assets/project-img2.png"
        document.getElementById('project-img3').src = "assets/project-img3.png"
        document.getElementById('project-desc1').src = "assets/project-desc1.png"
        document.getElementById('project-desc2').src = "assets/project-desc2.png"
        document.getElementById('project-desc3').src = "assets/project-desc3.png"
        document.getElementById('live').style.color = 'var(--brown)'
        document.getElementById('comingsoon').style.color = 'var(--brown)'
        document.querySelectorAll('.small-header').forEach(sh => { sh.style.color = 'var(--brown)' })
        document.querySelectorAll('.orange_d').forEach(o => { o.className = 'orange' })
        // contact
        document.getElementById('formIntro').src = "assets/formIntro.png"
        document.getElementById('form').className = "form"
        // mobile
        if (window.innerWidth <= 500) {
            document.getElementById('logo_mobile').srcset = 'assets/mobile/vb.png'
            mobileThemeBtn.src = 'assets/mobile/moon.png'
            if (document.getElementById('hamburger-menu').classList.contains('open'))
            {
                document.getElementById('hamburger-menu-img').src = 'assets/mobile/x.png'
            } else {
                document.getElementById('hamburger-menu-img').src = 'assets/mobile/menu.png'
            }
            document.querySelectorAll('.nav-button').forEach(btn => {
                btn.style.backgroundColor = 'rgba(250, 238, 231, 0.9)'
            })
            document.querySelector('.mobile-menu').style.textDecorationColor = 'var(--light)'
            document.getElementById('lampOrange_mobile').srcset = 'assets/mobile/lampOrange.png'
            document.getElementById('lampOrange').style.top = '-20px'
            document.getElementById('lampPink_mobile').srcset = 'assets/mobile/lampPink.png'
            document.getElementById('lampPurple_mobile').srcset = 'assets/mobile/lampPurple.png'
            document.getElementById('portrait_mobile').srcset = 'assets/mobile/portrait.png'
            document.getElementById('smallIntro_mobile').srcset = 'assets/mobile/smallIntro.png'
            document.getElementById('resume-btn').src = 'assets/mobile/resume-btn.png'
            document.getElementById('aboutText_mobile').srcset = 'assets/mobile/aboutText.png'
            document.getElementById('myPlaylist_mobile').srcset = 'assets/mobile/playlist.png'
            document.getElementById('playlist_mobile').srcset = 'assets/mobile/spotify.png'
            document.getElementById('project-mobile-img1').src = 'assets/mobile/project-mobile-img1.png'
            document.getElementById('project-mobile-img2').src = 'assets/mobile/project-mobile-img2.png'
            document.getElementById('project-mobile-img3').src = 'assets/mobile/project-mobile-img3.png'
            document.getElementById('form-intro').srcset = 'assets/mobile/form-intro.png'
            document.getElementById('form').className = 'form'
            document.getElementById('messagelbl').classList.remove('messagelbl_d')
            document.getElementById('messagelbl').classList.add('messagelbl')
            document.getElementById('send').style.backgroundColor = 'var(--green)'
            document.getElementById('remta-back-btn').src = 'assets/mobile/remta-back-btn.png'
            document.getElementById('remta-desc').src = 'assets/mobile/remta-desc.png'
            document.getElementById('remta-btn').src = 'assets/mobile/remta-btn.png'
            document.querySelector('.remta-page').style.backgroundColor = 'var(--bgcolor)'
        }
        // change theme class
        themeBtn.className = "light"
        mobileThemeBtn.className = 'light'
    }
}

function resizeWindow() {
    if (window.innerWidth < 500 || screen.width < 500) {
        document.getElementById('lampOrange').style.top = '-20px'
        document.getElementById('lampPurple').style.top = '50px'
        document.getElementById('lampPink').style.top = '15px'
        document.getElementById('projects-header').style.top = '70px'
        const navButtons = document.querySelectorAll('.navBtnEvents')
        navButtons.forEach(btn => { 
            btn.removeEventListener('mouseover', navHover)
            btn.removeEventListener('mouseout', navMouseOut) 
        })
    }
}

let mobileMenuOpen = false

function toggleMobileMenu(menu) {
    menu.classList.toggle('open')
    if (!mobileMenuOpen) {
        if (mobileThemeBtn.className == 'light') {
            document.getElementById('hamburger-menu-img').src = 'assets/mobile/x.png'
        } else if (mobileThemeBtn.className == 'dark') {
            document.getElementById('hamburger-menu-img').src = 'assets/mobile/dark/x.png'
        }
        mobileMenuOpen = true
    } else {
        if (mobileThemeBtn.className == 'light') {
            document.getElementById('hamburger-menu-img').src = 'assets/mobile/menu.png'
        } else if (mobileThemeBtn.className == 'dark') {
            document.getElementById('hamburger-menu-img').src = 'assets/mobile/dark/menu.png'
        }
        mobileMenuOpen = false
    }
}

document.getElementById('project-mobile-img1').addEventListener('click', () => {
    document.getElementById('projects-header').style.display = 'none'
    document.querySelector('.project-mobile-images').style.display = 'none'
    document.querySelector('.remta-page').style.display = 'block'
    document.getElementById('remta-header').style.display = 'block'
})

document.getElementById('remta-back-btn').addEventListener('click', () => {
    document.getElementById('projects-header').style.display = 'block'
    document.querySelector('.project-mobile-images').style.display = 'flex'
    document.querySelector('.remta-page').style.display = 'none'
    document.getElementById('remta-header').style.display = 'none'
})

document.getElementById('resume-btn').addEventListener('click', () => {
    window.open("https://drive.google.com/file/d/1ZZ1ZRyseZQNzLR09vEH5gW3vftXYnLwn/view?usp=share_link")
})

document.getElementById('remta-btn').addEventListener('click', () => {
    window.open("https://remtadesign.store")
})