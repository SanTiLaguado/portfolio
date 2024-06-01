// Función para cargar un componente desde un archivo
function loadComponent(componentId, filePath) {
    fetch(filePath)
      .then(response => response.text())
      .then(data => {
        document.getElementById(componentId).innerHTML = data;
      });
  }
  
  // Cargar componentes al iniciar
  document.addEventListener('DOMContentLoaded', () => {
    loadComponent('header-placeholder', '../components/header.html');
    loadComponent('footer-placeholder', '../components/footer.html');

  });
  