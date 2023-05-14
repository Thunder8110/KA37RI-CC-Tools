let dirHandle = await window.showDirectoryPicker();
let intervalId = setInterval(async () => {
  let fileHandle = await dirHandle.getFileHandle(Date.now() + ".txt", { create: true });
  let writable = await fileHandle.createWritable();
  await writable.write(Game.WriteSave(1));
  writable.close();
  }, 60 * 60 * 1000);
