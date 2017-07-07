// $("el")

function _(el) {
  var a = document.querySelector(el);
  return a;
}

var div = _("div");
div.style.color = "#4286f4";

var li = _("li");

// addClass

if (div)
  div.classList.add("bord");
else
  li.className += ' ' + "bgc";