var jsFiles = []

function importjs (file) {
  jsFiles.push(file + ".js")
}

$(document).ready(function () {
  $.each(jsFiles, function (key, value) {
    $("body").append('<script src="' + value + '" type="text/javascript"></script>')
  })
})
