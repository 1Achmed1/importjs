var jsFiles = []

function importJS (file) {
  jsFiles.push(file + ".js")
  if (file == 'vars') {
    jsFiles.push("variables.js")
  }
}

$(document).ready(function () {
  $.each(jsFiles, function (key, value) {
    $("body").append('<script src="' + value + '" type="text/javascript"></script>')
  })
})
