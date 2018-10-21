function searchFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('search');
    filter = input.value.toLowerCase();
    ul = document.querySelector('#list ul');
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.getAttribute("company") === filter) {
            li[i].style.display = "";
        }
        else if (a.getAttribute("date") === filter) {
            li[i].style.display = "";
        }
        else if (a.getAttribute("payload") === filter) {
            li[i].style.display = "";
        }
        else if (a.innerHTML.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } 
        else {
            li[i].style.display = "none";
        }
    }
}