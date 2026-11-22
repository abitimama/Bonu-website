
document.addEventListener("DOMContentLoaded", function () {
  console.log("BONU website is ready.");

  const year = new Date().getFullYear();
  const footer = document.querySelector("footer p");

  if (footer) {
    footer.textContent =
      "© " + year +
      " BONU Humanitarian and Community Development Organization";
  }
});
