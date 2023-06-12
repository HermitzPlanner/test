function summary() {

    const events = document.getElementById('events-container')
    const skins = document.getElementById('skins-container')
    const eventsDiv = document.getElementById('events')

    const summaryBtn = document.getElementById('summary-btn')
    const summaryDiv = document.getElementById('summary-events')
    if (summaryBtn.checked == true) {
        events.style.width = "90%"
        skins.style.display = "none"
        eventsDiv.style.width = "30%"
        summaryDiv.style.display = "flex"
    } else {
        events.style.width = "30%"
        skins.style.display = "flex"
        eventsDiv.style.width = "100%"
        summaryDiv.style.display = "none"
    }

    

    const summaryEvents = document.getElementById('summary-events')
    summaryEvents.innerHTML = ""
    const eventRows = document.querySelectorAll('.event-row')

    let summaryRowCounter = 1;
    let summaryId
    eventRows.forEach(rows => { 
        //console.log('rows', rows.children[1].innerHTML)
        summaryId = rows.parentElement.id.split("-")[1]
        summaryEvents.innerHTML += `<div class="event-row summary-row" id="summary-${summaryId}" style="outline: 1px solid red;"></div>`
        summaryRowCounter++;
    })

    let somth = []
    const cboxes = document.querySelectorAll('.checkbox')
    cboxes.forEach(cbox => {
        if (cbox.checked == true) {
            console.log('parent', cbox.parentElement.id.split("-")[1])
            console.log('cbox id', cbox.id.split("_")[1])
            let myObject = {
                eventId: cbox.parentElement.id.split("-")[1],
                cboxIdvariable2: cbox.id.split("_")[1]
              };
            somth.push(myObject)
            //${cbox.id.split("_")[1]}
            document.getElementById(`summary-${cbox.parentElement.id.split("-")[1]}`).innerHTML += `
            <img class="" src="https://raw.githubusercontent.com/HermitzPlanner/planner-images/main/icon/${cbox.id.split("_")[1]}.png" alt="${this.userid}"">

            ` 
        }
    })
    console.log('array', somth)
}

function omega() {
    const cboxes = document.querySelectorAll('.checkbox')
    cboxes.forEach(cbox => {
        console.log(cbox)
        cbox.click()
    })
}