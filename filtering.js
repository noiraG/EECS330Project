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
        workerScore: 5,
        envScore: 3.5,
        animalScore: 0.7
    },
    {
        id: 3,
        workerScore: 3.3,
        envScore: 3.5,
        animalScore: 1.7
    },
    {
        id: 4,
        workerScore: 5,
        envScore: 2.5,
        animalScore: 3.7
    },
    {
        id: 5,
        workerScore: 4.3,
        envScore: 3.5,
        animalScore: 3.7
    },
    {
        id: 6,
        workerScore: 3.3,
        envScore: 3.5,
        animalScore: 2.7
    },
    {
        id: 7,
        workerScore: 0.3,
        envScore: 3.5,
        animalScore: 3.7
    },
    {
        id: 8,
        workerScore: 3.3,
        envScore: 4.5,
        animalScore: 3.7
    }
]

var items = [];
var envFilter;
var animalFilter;
var workerFilter;
var isFilterShown;
var filterView;

function init(){
  for (i=1; i<=9; i++){
    items.push(document.getElementById("item-"+i));
  }
  envFilter= document.getElementById("env-filter");
  animalFilter= document.getElementById("animal-filter");
  workerFilter= document.getElementById("worker-filter");
  isFilterShown = false;
  filterView= document.getElementsByClassName("exten-filter")[0];
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
  items.forEach((i)=>i.hidden=true);
  filteredProducts.forEach(p => items[p].hidden=false);
  console.log(filteredProducts)
}
function clearFilters(){
  items.forEach((i)=>i.hidden=false);
}

function toggleFilter() {
  filterView.hidden = isFilterShown;
  isFilterShown = !isFilterShown;
}

init();
