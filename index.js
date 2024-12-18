const showSidebar = document.querySelector('.show-sidebar');
const hideSidebar = document.querySelector('.hide-sidebar');
const sidebar = document.querySelector('.sidebar__links');
showSidebar.addEventListener('click', () => {
  sidebar.style.display = 'flex';
});
hideSidebar.addEventListener('click', () => {
  sidebar.style.display = 'none';
})