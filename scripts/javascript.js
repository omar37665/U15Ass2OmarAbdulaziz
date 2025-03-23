document.addEventListener("DOMContentLoaded", function () {
  const searchBtn = document.getElementById("search-btn");
  const searchInput = document.getElementById("search-input");

  searchBtn.addEventListener("click", function (event) {
      event.preventDefault(); // Prevents jumping to the top
      searchInput.classList.add("active");
      searchInput.focus();
      searchBtn.style.display = "none"; // Hide button when search bar appears
  });

  searchInput.addEventListener("blur", function () {
      if (searchInput.value.trim() === "") {
          searchInput.classList.remove("active");
          searchBtn.style.display = "inline-block"; // Show button again if search bar is empty
      }
  });
});
