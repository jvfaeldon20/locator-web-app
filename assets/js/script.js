// map
const filterResults = () =>{
    var locationInput = document.getElementById('locationInput');
    var resultsList = document.getElementById('results');

    // Clear previous results
    resultsList.innerHTML = '';

    // Simulate static filter results
    var filteredResults = [
        'Result 1',
        'Result 2',
        'Result 3',
        'Result 4',
        'Result 5'
    ];

    // Display filtered results
    filteredResults.forEach(function(result) {
        var li = document.createElement('li');
        li.textContent = result;
        resultsList.appendChild(li);
    });
}


const toggleFilter = () => {
    let resultsDiv = document.querySelector(".results");
    let filterDiv = document.querySelector(".result-detail");
    
    resultsDiv.style.display = "none";
    filterDiv.style.display = "block";
}

const toggleCloseFilter = () => {
    let resultsDiv = document.querySelector(".results");
    let filterDiv = document.querySelector(".result-detail");
    
    resultsDiv.style.display = "block";
    filterDiv.style.display = "none";
}
  