console.log("🔥 main.js exécuté");

const status = document.getElementById("status");
status.innerText = "✅ main.js exécuté";

if (!window.Extensions) {
  status.innerText += " — ❌ Extensions API absente";
} else {
  status.innerText += " — ✅ Extensions API détectée";

  window.Extensions.connect(window.parent).then(api => {
    status.innerText += " — ✅ connecté";

    api.ui.registerPanel({
      id: "debug-panel",
      title: "DEBUG PANEL",
      location: "left",
      iframeUrl: window.location.href
    });

    console.log("✅ panel enregistré");
  });
}