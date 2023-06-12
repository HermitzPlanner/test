function downloadFile() {
  // Define the content of the text file
  let skins = []

  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach(checkbox => {
    if (checkbox.checked) {
      console.log(checkbox.id)
      skins.push(checkbox.id);
    }
  });

  var initialPrimes = document.getElementById('menu-initialprime').value;

  const themeSwitch = document.getElementById('theme-switch');
  let theme = themeSwitch.checked

  let rewardCheck = []

  const rewardCheckboxes = document.querySelectorAll('.reward-check');
  rewardCheckboxes.forEach(checkbox => {
    if (checkbox.checked) {
      console.log(checkbox.id)
      rewardCheck.push(checkbox.id);
    }
  });
  var content = JSON.stringify(skins) + '\n' + initialPrimes + '\n' + theme + '\n' + JSON.stringify(rewardCheck);

  // Create a Blob object to represent the data as a file
  var file = new Blob([content], { type: 'text/plain' });

  // Create a URL for the Blob object
  var url = URL.createObjectURL(file);

  // Create a link element and set its attributes
  var link = document.createElement('a');
  link.href = url;
  link.download = 'planner-selection.txt';

  // Append the link to the document body
  document.body.appendChild(link);

  // Click the link to download the file
  link.click();

  // Remove the link from the document body
  document.body.removeChild(link);
}

var content
var contentarray
var contentarrayReward
function loadFile() {

  // Get the file input element
  var input = document.getElementById('load-btn');

  // Get the first file from the input element's files property
  var file = input.files[0];

  // Create a new FileReader object
  var reader = new FileReader();

  // Set up an event listener for when the file has been read
  reader.onload = function () {
    var lines = reader.result.split('\n');
    var variable1 = lines[0].trim();
    var variable2 = lines[1].trim();
    var variable3 = lines[2].trim();
    var variable4 = lines[3].trim();

    // variable1
    contentarray = JSON.parse(variable1);
    contentarray.forEach(divs => {
      var element = document.getElementById(divs);
      if (element) {
        if (element.checked !== true) {
          element.click();
        }
      } else {
        // Handle the case when the element does not exist
        console.log(`Element with ID ${divs} does not exist.`);
      }
    })
    document.getElementById('menu-initialprime').value = variable2;
    //doThing();
    let initialPrime = document.getElementById('menu-initialprime').value;
    localStorage.setItem("initialPrimeStorage", initialPrime)

    if (variable3 == "true") {
      if (document.getElementById('theme-switch') !== true) {
        document.getElementById('theme-switch').click()
      }
    } else {
      if (document.getElementById('theme-switch') == true) {
        document.getElementById('theme-switch').click()
      }
    }

    // variable4
    contentarrayReward = JSON.parse(variable4);
    contentarrayReward.forEach(divs => {
        var element = document.getElementById(divs);
        if (element) {
          if (element.checked !== true) {
            element.click();
          }
        } else {
          // Handle the case when the element does not exist
          console.log(`Element with ID ${divs} does not exist.`);
        }
    })

  }

  // Read the file as text
  reader.readAsText(file);


}