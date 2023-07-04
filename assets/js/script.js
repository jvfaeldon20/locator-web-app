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