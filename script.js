const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Llamada inicial para establecer el tema al cargar la página
updateTheme();

// Cambiar el tema cuando se haga clic en el botón
themeToggle.addEventListener('click', () => {
  root.classList.toggle('light');
  root.classList.toggle('dark');
  updateIconVisibility(); // Agregamos esta llamada para actualizar la visibilidad de los iconos
});

function updateTheme() {
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

  if (prefersDark) {
    root.classList.add('dark');
  } else {
    root.classList.add('light');
  }

  updateIconVisibility(); // Agregamos esta llamada para actualizar la visibilidad de los iconos
}

function updateIconVisibility() {
  const prefersDark = root.classList.contains('dark');
  const iconContainer = document.querySelector('.icon-container');
  const darkIcon = iconContainer.querySelector('.dark-icon');
  const lightIcon = iconContainer.querySelector('.light-icon');

  if (prefersDark) {
    darkIcon.style.display = 'inline-block';
    lightIcon.style.display = 'none';
  } else {
    darkIcon.style.display = 'none';
    lightIcon.style.display = 'inline-block';
  }
}
