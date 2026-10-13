// Filtro de estruturas por estilo de prova + contagem. Sem dependências.
(function () {
  var chips = document.querySelectorAll("#filters .chip");
  var cards = document.querySelectorAll("#grid .st");
  var all = document.querySelector('#filters [data-f="all"]');
  function apply(f) {
    var n = 0;
    cards.forEach(function (c) {
      var show = f === "all" || c.dataset.kind === f;
      c.classList.toggle("hide", !show);
      if (show) n++;
    });
    if (all) all.textContent = "Todas (" + cards.length + ")" + (f === "all" ? "" : " • vendo " + n);
  }
  chips.forEach(function (ch) {
    ch.addEventListener("click", function () {
      chips.forEach(function (x) { x.classList.remove("on"); });
      ch.classList.add("on");
      apply(ch.dataset.f);
    });
  });
})();
