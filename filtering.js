var products = [
    {
        id: 0,
        workerScore: 3.3,
        envScore: 3.5,
        animalScore: 3.7
    },
    {
        id: 1,
        workerScore: 5,
        envScore: 4.5,
        animalScore: 5
    },
    {
        id: 2,
        workerScore: 3.3,
        envScore: 3.5,
        animalScore: 3.7
    },
    {
        id: 3,
        workerScore: 3.3,
        envScore: 3.5,
        animalScore: 3.7
    },
    {
        id: 4,
        workerScore: 3.3,
        envScore: 3.5,
        animalScore: 3.7
    },
    {
        id: 5,
        workerScore: 3.3,
        envScore: 3.5,
        animalScore: 3.7
    },
    {
        id: 6,
        workerScore: 3.3,
        envScore: 3.5,
        animalScore: 3.7
    },
    {
        id: 7,
        workerScore: 3.3,
        envScore: 3.5,
        animalScore: 3.7
    },
    {
        id: 8,
        workerScore: 3.3,
        envScore: 3.5,
        animalScore: 3.7
    }
]

var items = [];
var envFilter;
var animalFilter;
var workerFilter;

function init(){
  for (i=0; i<9; i++){
    items.push(document.getElementById("item-"+i));
  }
  envFilter= document.getElementById("env-filter");
  animalFilter= document.getElementById("animal-filter");
  workerFilter= document.getElementById("worker-filter");
}

function applyFilters() {
  var envValue = envFilter.value;
  var workerValue= workerFilter.value;
  var animalValue = animalFilter.value;
  var filteredProducts = [];
  products.forEach(p=>{
    if (p.workerScore>=workerValue && p.envScore>=envValue && p.animalScore>=animalValue){
      filteredProducts.push(p.id);
    }
  })
  // items.forEach((i)=>i.hidden=true);
  // filteredProducts.forEach(p => items[p].hidden=false);
  console.log(filteredProducts)
}

init();
