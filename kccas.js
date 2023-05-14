if (typeof kcct === "undefined") {
  kcct = {};
}

(async () => {
  kcct["dirHandle"] = await window.showDirectoryPicker();
  kcct["dirHandle"].requestPermission({mode: "readwrite"});
  kcct["intervalId"] = setInterval(async () => {
    kcct["fileHandle"] = await kcct["dirHandle"].getFileHandle(Date.now() + ".txt", {create: true});
    kcct["writable"] = await kcct["fileHandle"].createWritable();
    await kcct["writable"].write(Game.WriteSave(1));
    await kcct["writable"].close();
    }, 5 * 1000);
})();
