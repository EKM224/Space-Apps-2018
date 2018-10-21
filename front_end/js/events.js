document.querySelectorAll("#list ul").forEach((element)=>{
    element.addEventListener("click", function(event){
        let listElement = event.target;
        Model.individualPageIndex = listElement.attributes.index.value;
        console.log("===================");
        console.log(listElement);
        console.log(listElement.attributes.index.value);
        console.log(Model.individualPageIndex);
        //window.history.pushState(Model, "Individual", "/individual")
        document.dispatchEvent(goToIndividual);
        //There are proabbly events that check for URL state change,
        //If we pass the index as a url parameter, we'd get it back
        //Do it with the popstate event
    });
});

//Search

//Hopefuly the browser backbutton will be able to identify
