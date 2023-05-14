if (typeof kcct === "undefined") {
  let kcct = {}
}

let kcct["dirHandle"] = await window.showDirectoryPicker();
let kcct["intervalId"] = setInterval(async () => {
  let kcct["fileHandle"] = await dirHandle.getFileHandle(Date.now() + ".txt", { create: true });
  let kcct["writable"] = await fileHandle.createWritable();
  await kcct["writable"].write(Game.WriteSave(1));
  await kcct["writable"].close();
  }, 60 * 60 * 1000);
