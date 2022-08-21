function startApp() {
  // Your entire app should not necessarily be coded inside this
  // single function (though there's no penalty for that),
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!

  let phoneNum = document.getElementById("phoneNum");
  let btn = document.querySelector(".btn");
  let messageBox = document.querySelector(".message");
  let provider = document.getElementById("provider");
  let form = document.getElementById("form");

  btn.addEventListener("click", (event) => {
    // prevents button default behavior
    event.preventDefault();

    let pattern = /((\+234?)|0)?[ -]?(?<network>\d{4})[ -]?(\d{3})[ -]?(\d{4})/;
    let str = phoneNum.value;

    // to check the validity of the number before validating the number
    let validity = false;

    if (str.includes("+234") && str.length === 14) {
      validity = true;
    }

    if (str.includes("+2340") && str.length === 15) {
      validity = true;
    }

    if (str.length === 11) {
      validity = true;
    }

    // check for incorrect inputs

    if (str === "" || !str.match(pattern) || !validity) {
      phoneNum.classList.add("invalid");
      messageBox.style.display = "block";
      messageBox.classList.add("invalid");
      messageBox.innerText = "Please enter a valid number";
      setTimeout(() => {
        phoneNum.classList.remove("invalid");
        messageBox.classList.remove("invalid");
        messageBox.innerText = "";
        messageBox.style.display = "none";
      }, 2000);
      return;
    }

    // create groups in the pattern.
    let groups = str.match(pattern).groups;
    // select named group to carry check on
    let network = groups.network;

    const MOBILE_NETWORKS = {
      MTN: [
        "803",
        "806",
        "703",
        "704",
        "706",
        "810",
        "813",
        "814",
        "816",
        "903",
        "906",
        "916",
      ],
      ETISALAT: ["809", "817", "818", "908", "909"],
      AIRTEL: ["802", "808", "812", "701", "708", "902", "907", "901"],
      GLO: ["805", "807", "811", "705", "815", "905"],
    };

    function numContains(a, obj) {
      for (let i = 0; i < a.length; i++) {
        if (obj.includes(a[i])) {
          return true;
        }
      }
      return false;
    }

    if (numContains(MOBILE_NETWORKS.MTN, network)) {
      phoneNum.classList.add("valid");
      messageBox.style.display = "block";
      messageBox.classList.add("valid");
      messageBox.innerText = "SUCCESSFUL. Your network provider is MTN";
      provider.style.backgroundImage = "url(./images/mtn.svg)";
    } else if (numContains(MOBILE_NETWORKS.ETISALAT, network)) {
      phoneNum.classList.add("valid");
      messageBox.style.display = "block";
      messageBox.classList.add("valid");
      messageBox.innerText = "SUCCESSFUL. Your network provider is 9MOBILE";
      provider.style.backgroundImage = "url(./images/9mobile.svg)";
    } else if (numContains(MOBILE_NETWORKS.AIRTEL, network)) {
      phoneNum.classList.add("valid");
      messageBox.style.display = "block";
      messageBox.classList.add("valid");
      messageBox.innerText = "SUCCESSFUL. Your network provider is AIRTEL";
      provider.style.backgroundImage = "url(./images/airtel-nigeria.svg)";
    } else if (numContains(MOBILE_NETWORKS.GLO, network)) {
      phoneNum.classList.add("valid");
      messageBox.style.display = "block";
      messageBox.classList.add("valid");
      messageBox.innerText = "SUCCESSFUL. Your network provider is GLO";
      provider.style.backgroundImage = "url(./images/globacom-limited.svg)";
    } else {
      phoneNum.classList.add("invalid");
      messageBox.style.display = "block";
      messageBox.classList.add("invalid");
      messageBox.innerText =
        "UNSUCCESSFUL. Your mobile network provider is Unverifiable";
      provider.style.backgroundImage = "url(./images/rectangle.png)";

      setTimeout(() => {
        phoneNum.classList.remove("invalid");
        messageBox.classList.remove("invalid");
        messageBox.innerText = "";
        messageBox.style.display = "none";
      }, 3000);
    }
  });

  // Setting the enter key to perform the button function

  phoneNum.addEventListener("keypress", (event) => {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
      // Cancel the default action
      event.preventDefault();
      // Trigger the button element with a click
      btn.click();
    }
  });
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
