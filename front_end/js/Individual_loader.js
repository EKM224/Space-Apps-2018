function generateIndividualPage(launchIndex) {
    console.log(launchIndex);
    let launchInfo = Model.launches[launchIndex];
    console.log(launchInfo);
    //var example = {companyname: "SpaceX", vehicle: "Falcon Heavy", customer: "NASA", date: "december 25 2552", description: "OYEEEE", 
    //mapURL: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28080.211715022135!2d-80.62427203395028!3d28.38826863580073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e0a5ab39504c9b%3A0xbb0bb0f57a55d19e!2sCape+Canaveral%2C+FL+32920%2C+USA!5e0!3m2!1sen!2sca!4v1540079575955"}
    document.getElementById('company-name').children[0].innerText = launchInfo.company;
    //document.getElementById('vehicle').firstChild.innerText = launchInfo.vehicle;
    document.getElementById('customer').children[0].innerText = launchInfo.customer;
    document.getElementById('individual-date').children[0].innerText = launchInfo.date;
    document.getElementById('individual-description').children[0].innerText = launchInfo.description;
    //document.getElementById('gmap_canvas').src = example.mapURL;
}

function generateListElement(launchInfo, i) {
    let listElem = document.createElement("li");
    listElem.innerText = launchInfo.rocketName;
    listElem.setAttribute("company", launchInfo.company);
    listElem.setAttribute("payload", launchInfo.payload);
    listElem.setAttribute("date", launchInfo.date);
    listElem.setAttribute("index", i.toString());
    return listElem;
}