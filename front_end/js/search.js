// function contains(text1, text2) {
//     if (text1.indexof(text2) != -1) {
//         return true;
//     }
// }

// $("searchText").keyup(function() {
//     var searchText = ("#searchText").val().toLowerCase()
//     $("ul li").each(function() {
//         if (!contains($(this).text().toLowerCase(), searchText))
//             $(this).hide();
//         else
//             $(this).show();
//     });
// });

function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName('li');

    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}