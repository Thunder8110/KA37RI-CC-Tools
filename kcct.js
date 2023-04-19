const newFont = new FontFace("B612 Mono", "url(https://fonts.gstatic.com/s/b612mono/v12/kmK_Zq85QVWbN1eW6lJV0A7d.woff2)");
await newFont.load();
document.fonts.add(newFont);
const els = document.getElementsByClassName("title");
for(i = 0; i<els.length; i++) {
  e = els[i];
  e.style.fontFamily = "B612 Mono";
}

AddEvent(window,'keydown',function(e) {
  if (!Game.OnAscend && Game.AscendTimer==0) {
    if (e.ctrlKey && e.keyCode==77) {Game.ExportSave();e.preventDefault();}//ctrl-m
  }
 });

fileSaveWithName = function(newName) {
  if (App) return false;
  Game.prefs.showBackupWarning = 0;
  var filename = "CookieclickerSave_" + newName;
  var text = Game.WriteSave(1);
  var blob = new Blob([text], {
    type: 'text/plain;charset=utf-8'
  });
  saveAs(blob, filename + ".txt");
}

function intervalSave() {
  var newName = window.prompt("Input new files' name", "");
  var intervalId = setInterval(fileSaveWithName, 500, newName);
  setTimeout(() => clearInterval(intervalId), 10000);
}
