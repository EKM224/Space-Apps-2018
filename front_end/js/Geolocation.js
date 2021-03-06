/* function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(findNearbyLaunch)
    }
} */

function findNearbyLaunch() {

    let yourPosition = navigator.geolocation.getCurrentPosition()
    let minDistance = model.launches[0];
    let count = 0;
    let closestID = 0;
    for (x in model.launches){
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName('li');
        let distance1 = (20.67438 - yourPosition.longitude)**2;
        let distance2 = (50.02093 - yourPosition.latitude)**2;
        let myDistance = sqrt(distance1 + distance2);
        let maxDistance = Math.atan(60/(2*(myDistance/111111)));
        if (myDistance <= maxDistance){
            for (y in li){
                if(x.id == y.index)
                    y.style.display = "";
                    count++;
            }
        }
        else{
            for (y in li){
                if(x.id == y.index)
                    y.style.display = "none";
            }
        }
        if (myDistance < minDistance)
            minDistance = myDistance;
            closestID = x.id;

    }
    if (count === 0){
        var launchMessage = document.getElementById("no-launch-nearby");
        launchMessage.classList.toggle("no-launch-visibilty");
        for (y in li){
            if (y.index == closestID)
                y.style.display = "";
            else
                y.style.display = "none";
        }
    }
}

/* function findNearbyLaunch(yourPosition) {

    let minDistance = model.launches[0];
    let count = 0;
    let closestID = 0;
    for (x in model.launches){
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName('li');
        let distance1 = (x.position.longitude - yourPosition.longitude)**2;
        let distance2 = (x.position.latitude - yourPosition.latitude)**2;
        let myDistance = sqrt(distance1 + distance2);
        let maxDistance = Math.atan(60/(2*(myDistance/111111)));
        if (myDistance <= maxDistance){
            for (y in li){
                if(x.id == y.index)
                    y.style.display = "";
                    count++;
            }
        }
        else{
            for (y in li){
                if(x.id == y.index)
                    y.style.display = "none";
            }
        }
        if (myDistance < minDistance)
            minDistance = myDistance;
            closestID = x.id;

    }
    if (count === 0){
        var launchMessage = document.getElementById("no-launch-nearby");
        launchMessage.classList.toggle("no-launch-visibilty");
        for (y in li){
            if (y.index == closestID)
                y.style.display = "";
            else
                y.style.display = "none";
        }
    }
} */