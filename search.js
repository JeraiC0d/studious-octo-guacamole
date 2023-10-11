export function search(event) {

    event.preventDefault();
    let searchInput = document.querySelector("#search-text-input");
    let h3 = document.querySelector("h3");
    if (searchInput.value) {
      h3.innerHTML = `${searchInput.value}`;
    }
    else { h3.innerHTML = ""; }
  
  }
  