  // Handle service click
  const serviceCols = document.querySelectorAll('.service-col');
  serviceCols.forEach(col => {
    col.addEventListener('click', () => {
      serviceCols.forEach(c => c.classList.remove('active'));
      col.classList.add('active');
    });
  });