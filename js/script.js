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

//toggleClass

div.onclick = function () {
  if (div.classList) {
    div.classList.toggle("fs");
  } else {
    var classes = div.className.split(' ');
    var existingIndex = classes.indexOf("fs");

    if (existingIndex >= 0)
      classes.splice(existingIndex, 1);
    else
      classes.push("fs");

    div.className = classes.join(' ');
  }
};
