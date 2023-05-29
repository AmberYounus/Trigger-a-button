function welcome() {
  alert("Sunshine is a welcome thing. It brings a lot of brightness");
}

var input = document.getElementById("myInput");
input.addEventListener("keypress", function (event) {
  if (event === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

