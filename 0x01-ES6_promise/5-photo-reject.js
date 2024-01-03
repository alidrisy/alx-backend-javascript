export default function uploadPhoto(fileName) {
  return new Promise((_res, rej) => {
    rej(new Error(`${fileName} cannot be processed`));
  });
}
