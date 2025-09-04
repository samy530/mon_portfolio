const envelope = document.querySelector('.envelope');

envelope.addEventListener('click', () => {
  envelope.classList.add('opening');

  // Après 1s → afficher le message de bienvenue
  setTimeout(() => {
    document.body.innerHTML = `
      <h1 style="color:white; text-align:center; font-size:3rem;">
        Bienvenue sur mon Portfolio 🚀
      </h1>
    `;

    // Après encore 5s → redirection vers index.html
    setTimeout(() => {
      window.location.href = "accueil.html";
    }, 2000);

  }, 1000);
});
