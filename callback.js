function fetchData(processData) {
  console.log("Fetching Data");
  setTimeout(() => {
    processData();
  }, 1000);
}
function processData(){
    console.log('Datea processed');
}
fetchData(processData)
