export default function getResponseFromAPI() {
  return new Promise((res) => {
    setTimeout(() => {
      res('Hi');
    }, 300);
  });
}
