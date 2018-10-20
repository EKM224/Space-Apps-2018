var Model = {
    mode: "all",
    launches : [],
    activeVideo: "",

    __init__ : function(stuff) {
        makeApiRequest;
        let time  = this.formatTime();
        //get all launches from now to forever and previous launch
        fetch("the link to get all of the rocket lauches from now to -- ")
        .then(res => res.json())
        .then((json)=> {
            //json should be an array
            json.map(this.packageObjectToList);
            this.launches = json;
            this.activeVideo
            //event to update view
        })
        .catch((err)=> {
            console.log("errs");
        })
        //company name;
        //launch date laucnhe time
        // rocket name
        // country of origin
        return null;
    },
    
    packageObjectToList: function(launchApiObject) {
        //lsp information
        //find a way to make lsp information get the company name
        return {
            rocketName : launchApiObject.name,
            company: launchApiObject.agency,
            date: launchApiObject.net,
            id: launchApiObject.id,
            vidURL: launchApiObject.vidURL,
            lsp : laucnServiceProvider
        }
        //The lsp returns an intetger
    },

    filter: function(){

    }


    //Controller functions, should not be in the information model
    goToMap : function() {},

    goToList : function() {},



}

//makeAndUpdateVideoEvent
//make and update list event

//event UpdateView (set off by Model)
document.addEventListener("UpdateList", ()=> {ListView.update()});
document.addEventListener("UpdateVideo", ()=> {VideoView.update()});