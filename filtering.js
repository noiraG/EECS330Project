var products = [
    {
        id: 0,
        workerScore: 3.3,
        envScore: 3.5,
        animalScore: 3.7,
        overallScore: 3.5
    },
    {
        id: 1,
        workerScore: 5,
        envScore: 4.5,
        animalScore: 5,
        overallScore: 4.8
    },
    {
        id: 2,
        workerScore: 5,
        envScore: 3.5,
        animalScore: 0.7,
        overallScore: 3
    },
    {
        id: 3,
        workerScore: 3.3,
        envScore: 3.5,
        animalScore: 1.7,
        overallScore: 2.8
    },
    {
        id: 4,
        workerScore: 5,
        envScore: 2.5,
        animalScore: 3.7,
        overallScore: 3.7
    },
    {
        id: 5,
        workerScore: 4.3,
        envScore: 3.5,
        animalScore: 3.7,
        overallScore: 3.8
    },
    {
        id: 6,
        workerScore: 3.3,
        envScore: 3.5,
        animalScore: 2.7,
        overallScore: 3.2
    },
    {
        id: 7,
        workerScore: 0.3,
        envScore: 3.5,
        animalScore: 3.7,
        overallScore: 2.5
    },
    {
        id: 8,
        workerScore: 3.3,
        envScore: 4.5,
        animalScore: 3.7,
        overallScore: 3.8
    }
]

var items = [];
var envFilter;
var animalFilter;
var workerFilter;
var overallFilter;
var isFilterShown;
var filterView;
var overallScoreBtns = [];
var scoreContainers = [];
var sort;
var itemContainer;

function init() {
    overallFilter = document.getElementById("overall-filter");
    envFilter = document.getElementById("env-filter");
    animalFilter = document.getElementById("animal-filter");
    workerFilter = document.getElementById("worker-filter");
    isFilterShown = false;
    filterView = document.getElementsByClassName("exten-filter")[0];
    sort = document.getElementsByClassName("ethical-sort")[0];
    itemContainer = document.getElementsByClassName("item-container")[0];
    for (i = 1; i <= 9; i++) {
        items.push(document.getElementById("item-" + i));
        overallScoreBtns.push(document.getElementById("overall-" + i));
        scoreContainers.push(document.getElementById("score-" + i));
        scoreContainers[i - 1].hidden = true;
    }

}

function applyFilters() {
    var envValue = envFilter.value;
    var workerValue = workerFilter.value;
    var animalValue = animalFilter.value;
    var overallValue = overallFilter.value;
    var filteredProducts = [];
    products.forEach(p => {
        if (p.workerScore >= workerValue && p.envScore >= envValue && p.animalScore >= animalValue && p.overallScore >= overallValue) {
            filteredProducts.push(p.id);
        }
    });
    items.forEach((i) => i.hidden = true);
    // check if there is no result
    if (filteredProducts.length === 0)
        document.getElementById("no-items-found").hidden=false;
    else
        document.getElementById("no-items-found").hidden=true;
    filteredProducts.forEach(p => items[p].hidden = false);
}

function clearFilters() {
    envFilter.value = 0;
    workerFilter.value = 0;
    animalFilter.value = 0;
    overallFilter.value = 0;
    items.forEach((i) => i.hidden = false);
    // document.getElementById("EnValue").innerHTML="Environmental Substainability"
    // document.getElementById("AnValue").innerHTML="Animal Treatment"
    // document.getElementById("WorkerValue").innerHTML="Worker Condition"
    document.getElementById("Enstars").innerHTML = ""
    document.getElementById("Anstars").innerHTML = ""
    document.getElementById("Workerstars").innerHTML = ""
    document.getElementById("Overallstars").innerHTML = ""
    document.getElementById("no-items-found").hidden=true;

}

function showvalue4() {
    // document.getElementById("EnValue").innerHTML="Environmental Substainability--"+envFilter.value
    document.getElementById("Overallstars").innerHTML = ""
    for (var i = 0; i < overallFilter.value; i++) {
        document.getElementById("Overallstars").innerHTML += '<i class="fa fa-star" style="color:#fb0"></i>'
    }
}

function showvalue1() {
    // document.getElementById("EnValue").innerHTML="Environmental Substainability--"+envFilter.value
    document.getElementById("Enstars").innerHTML = ""
    for (var i = 0; i < envFilter.value; i++) {
        document.getElementById("Enstars").innerHTML += '<i class="fa fa-star" style="color:#fb0"></i>'
    }
}

function showvalue2() {
    // document.getElementById("AnValue").innerHTML="Animal Treatment--"+animalFilter.value
    document.getElementById("Anstars").innerHTML = ""
    for (var i = 0; i < animalFilter.value; i++) {
        document.getElementById("Anstars").innerHTML += '<i class="fa fa-star" style="color:#fb0"></i>'
    }
}

function showvalue3() {
    // document.getElementById("WorkerValue").innerHTML="Worker Condition--"+workerFilter.value
    document.getElementById("Workerstars").innerHTML = ""
    for (var i = 0; i < workerFilter.value; i++) {
        document.getElementById("Workerstars").innerHTML += '<i class="fa fa-star" style="color:#fb0"></i>'
    }
}

function toggleFilter() {
    filterView.hidden = isFilterShown;
    isFilterShown = !isFilterShown;
}

function expandScore(i) {
    overallScoreBtns[i - 1].classList.add('expandedView')
    scoreContainers[i - 1].classList.add('expandedView')
    scoreContainers[i - 1].hidden = false
    overallScoreBtns[i - 1].style.visibility = 'hidden'
    //overallScoreBtns[i-1].style.display='none'
}

function collapseScore(i) {
    overallScoreBtns[i - 1].classList.remove('expandedView')
    scoreContainers[i - 1].classList.remove('expandedView')
    scoreContainers[i - 1].hidden = true
    overallScoreBtns[i - 1].style.visibility = 'visible'
    // overallScoreBtns[i-1].style.display='block'

}

function sortItems() {
    var feature = sort.options[sort.selectedIndex].value
    var itemBank = [];
    while (itemContainer.firstChild) {
        itemBank.push(itemContainer.firstChild)
        itemContainer.removeChild(itemContainer.firstChild);
    }
    products.sort(function (a, b) {
        return (feature === "id") ? a[feature] - b[feature] : b[feature] - a[feature]
    })
    products.forEach(p => {
        itemContainer.appendChild(itemBank.find(i => i.id === "item-" + (p.id + 1)))
    })
    iconid=''
    showThingid = ''
    if (feature == 'id' || feature == 'overallScore') {
        showThingid = 'ov'
        iconid='ovov'
        
    }
     else {
        showThingid = feature.slice(0, 2)
        iconid=showThingid+showThingid
    }
    for (i = 1; i < 10; i++) {
        var temp = document.getElementById(showThingid + i.toString());
        var icon = document.getElementById(iconid);
  
        overallScoreBtns[i - 1].innerHTML =temp.outerHTML+icon.outerHTML
    }


}


init();
