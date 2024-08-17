const indicator = document.getElementsByClassName("indicator")[0]
const navigationBar = document.getElementsByClassName("navigation-bar")[0]
const lis = document.querySelectorAll(".navigation-bar li")

const width = navigationBar.getBoundingClientRect().width
const widthLi = lis[0].getBoundingClientRect().width
const space = (width - lis.length * widthLi) / (lis.length + 1)

indicator.style.left = `${space - 20}px`
lis[0].classList.add("active")

for(let i=0;i<lis.length;i++){
    lis[i].addEventListener("click", (e) => {
        indicator.style.left = `${space*(i+1) + widthLi*i - 20}px`
        for(let j=0;j<lis.length;j++){
            lis[j].classList.remove("active")
        }
        lis[i].classList.add("active")
    })
}
