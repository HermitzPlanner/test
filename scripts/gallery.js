let link = ""

async function galleryPreparation() {

    const skinResponse = await fetch('json/skins.json'); // grab json
    const skinData = await skinResponse.json(); // wait for json and make it data
    const gallery = document.getElementById('gallery')
    skinData.forEach(function (skin) {
        //console.log(skin.id)
        gallery.innerHTML += `
        <a href="#${skin.id}">
            <button class="gallery-btn" id="${skin.id}" onclick="viewer();">
                <div>${skin.id}</div>
            </button>
        </a>`
    })
} galleryPreparation()

async function gallery() {
    const skinResponse = await fetch('json/skins.json'); // grab json
    const skinData = await skinResponse.json(); // wait for json and make it data
    const galleryCbox = document.getElementById('gallery-btn')
    const planner = document.getElementById('planner')
    const gallery = document.getElementById('gallery')


    if (galleryCbox.checked == true) {
        planner.style.display = "none"
        gallery.style.display = "flex"
    } else {
        planner.style.display = "flex"
        gallery.style.display = "none"
    }

    if (galleryCbox.checked == true) {

        const galleryBtn = document.querySelectorAll('.gallery-btn')
        galleryBtn.forEach((btn) => {
            btn.addEventListener('click', function () {
                console.log(btn.id)
                link = btn.id
                viewer();
            })
        })
    }
}

const viewerDiv = document.getElementById('viewer')

async function viewer() {
    let amogus = "skadi2"
    
    var hash = window.location.hash.substring(1);
    if (link == "") {link = hash}
    console.log('mogus')
    const skinName = document.getElementById("skin-name")
    const skinIcon = document.getElementById("skin-icon")
    const skinResponse = await fetch('json/skins.json'); // grab json
    const skinData = await skinResponse.json(); // wait for json and make it data
    skinData.forEach(function (skin) {
        console.log('link', link)
        if (skin.id == link) {
            viewerDiv.style.display = "flex"
            skinName.innerHTML = `${skin.id}`
            skinIcon.src = `https://raw.githubusercontent.com/HermitzPlanner/planner-images/main/icon/${skin.id}.png`
        }
    })
}

function quitViewer() {
    viewerDiv.style.display = "none"


}
// document.addEventListener("DOMContentLoaded", function () {
//     console.log("AAAAAAAAAAAAAAAAAAAA")
// })


