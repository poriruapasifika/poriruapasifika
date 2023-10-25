const nav = document.querySelector('.navbar1')
fetch('/navbar1.html')
    .then(res => res.text())
    .then(data => {
        nav.innerHTML=data
    })
