(async () => {
  const status = document.getElementById("status");

  if (!window.Extensions) {
    status.innerText = "❌ API Trimble Connect non disponible (hors TC)";
    return;
  }

  try {
    const api = await window.Extensions.connect(window.parent);

    status.innerText = "✅ Connecté à Trimble Connect";

    // 🔴 CECI EST LA CLÉ
    await api.ui.registerPanel({
      id: "planning-diffusion",
      title: "Planning de diffusion",
      location: "left",
      iframeUrl: window.location.href
    });

    console.log("Panneau enregistré");

  } catch (e) {
    status.innerText = "❌ Erreur connexion Trimble Connect";
    console.error(e);
  }
})();