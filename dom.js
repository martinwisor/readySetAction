// Within the main function:
// Add the "big" class to the "grow-me" paragraph.
// Remove the "big" class from the "shrink-me" paragraph.
// Find all the <li>s and log their text content to the console.
// Set the href of the link to "https://www.example.com" and update the text to say "somewhere" instead of "nowhere".
// Set the "display" CSS property of the "hide-me" paragraph to "none".
// Set the "display" CSS property of the "show-me" paragraph to "block".
// Get the text that the user enters into the "name" input box and use it to set a welcome message in the <h1>, e.g., "Welcome Grant!".
// Test it by clicking the Action!!! button.
// User inner.html to change text!!!

function main() {
  let growme = document.getElementById("grow-me");
  growme.classList.add("big");
  let shrinkme = document.getElementById("shrink-me");
  shrinkme.classList.remove("big");
  let litag = document.getElementsByTagName("li");
  console.log(litag);
  // let link = document.getElementsByClassName("link").href;
  // link.innerHTML = "somewhere";
  // link.href = "https://www.example.com";
  // link.classList.add("link");
  let hideme = document.getElementById("hide-me");
  hideme.style.display = "none";
  let showme = document.getElementById("show-me");
  showme.style.display = "block";
  //   let button = document.getElementsByTagName("button");
  // button.addEventListener("click", function())
}
