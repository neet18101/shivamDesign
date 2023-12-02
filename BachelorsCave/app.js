const bhkBox = document.querySelector(".bhk__box");
console.log(bhkBox.classList);

if (bhkBox.classList == "bhk__click")
  bhkBox.addEventListener("click", () => {
    bhkBox.classList.remove("bhk__click");
  });
else
  bhkBox.addEventListener("click", () => {
    bhkBox.classList.add("bhk__click");
  });
