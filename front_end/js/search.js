function searchFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('search');
    filter = input.value.toLowerCase();
    ul = document.querySelector('#list ul');
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        // a = ul.getElementsByTagName("li")[0];
        if (li[i].getAttribute("company").toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else if (li[i].getAttribute("date").toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else if (li[i].getAttribute("payload").toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        }
        else if (li[i].innerHTML.toLowerCase().toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } 
        else {
            li[i].style.display = "none";
        }
    }
}