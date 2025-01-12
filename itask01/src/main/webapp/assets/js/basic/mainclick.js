document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', () => {
      const url = button.getAttribute('data-url');
      if (url) {
          window.location.href = url;
      }
  });
});
