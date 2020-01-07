function toggleMenu(visible) {
  document.querySelector('.navlinks').classList.toggle('show', visible);
  document.querySelector('.avatar-wrapper').classList.toggle('show', visible);

}

function toggleTopBar(visible) {
    document.querySelector('.top-side').classList.toggle('display', visible);
}

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();

  toggleMenu();
  console.log("clicked!");
});

document.querySelector('.hamburger').addEventListener('click', function(e) {
  e.preventDefault();

  toggleTopBar();
  console.log("clicked2!");
});
