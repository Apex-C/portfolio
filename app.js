const sections = document.querySelectorAll(".section")
const sectBtns = document.querySelectorAll('.controllers')
const sectBtn = document.querySelectorAll('.control')
const allSection = document.querySelector('.main-contenaire')
document.getElementById("home").classList.add('active')

function pagesTransition() {
    //button active class
    for (let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener('click', function () {
            let curentBtn = document.querySelectorAll('.active-btn');
            curentBtn[0].className = curentBtn[0].className.replace("active-btn", " ")
            this.className += " active-btn"

        })

    }

    // section target class

    allSection.addEventListener("click", function (e) {
        const id = e.target.dataset.id
        if (id) {
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            //  e.target.classList.add('active')

            sections.forEach((section) => {
                section.classList.remove('active')

            })
            const elt = document.getElementById(id)
            elt.classList.add("active")
        }

    })

}
pagesTransition()