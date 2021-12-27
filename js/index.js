let basketIcon=document.querySelector(".basket-icon")

let btns = document.querySelectorAll("#add-basket")
let counter = document.querySelector(".counter")

if (!localStorage.getItem("products")) {
    localStorage.setItem("products", JSON.stringify([]));
}   

function getBasketCount() {
    let basketList = JSON.parse(localStorage.getItem("products"));
    let totalCount = 0;

    basketList.map(item => {
        totalCount += item.count
    })
    counter.innerText = totalCount
}

getBasketCount()



let basketList = JSON.parse(localStorage.getItem("products"))

btns.forEach(btn => {
    btn.addEventListener("click", function (e) {

        let id = this.parentElement.getAttribute("data-id")
        let img = this.parentElement.children[0].children[0].getAttribute("src")
        let name = this.parentElement.children[1].innerText
        let price = this.parentElement.children[2].innerText

        let basketItem = basketList.find(x => x.id == id);

        const item = {
            id: id,
            name: name,
            img: img,
            price: price,
            count: 1
        }

        if (!basketItem) {
            basketList.push(item)
        } else {
            basketItem.count++
        }

        localStorage.setItem("products", JSON.stringify(basketList))
        getBasketCount()

    });
})
