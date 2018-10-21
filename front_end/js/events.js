document.querySelectorAll("#list ul").forEach((element)=>{
    element.addEventListener("click", function(event){
        let listElement = event.target;
        Model.individualPageIndex = listElement.attributes.index.value;
        if(Model.currentPage){
            Model.pageHistory.push(Model.currentPage);
        }
        Model.lastPage = Model.currentPage;
        Model.currentPage = IndividualLaunchPageView;

        document.dispatchEvent(changePage);
        //There are proabbly events that check for URL state change,
        //If we pass the index as a url parameter, we'd get it back
        //Do it with the popstate event
    });
});

document.querySelector("#back").addEventListener("click", function(event){
    Model.lastPage = Model.currentPage;
    Model.currentPage = Model.pageHistory.shift();
    document.dispatchEvent(changePage);
})



//Search

//Hopefuly the browser backbutton will be able to identify
