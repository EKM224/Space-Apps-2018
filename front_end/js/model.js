var Model = {
    launches : [],
    activeVideo: "",
    activeStartDate: "",
    activeEndDate: "",
    pageViews: [],
    pageHistory: [ListPageView],
    currentPage: ListPageView, 
    lastPage: null,
    __init__ : function(stuff) {
        this.activeStartDate  = this.formatTime();
        console.log(this.activeStartDate);
        this.activeEndDate = this.addFourMonths(this.activeStartDate);
        console.log(this.activeEndDate);
        //get all launches from now to forever and previous launch
        fetch("https://launchlibrary.net/1.4/launch?mode=verbose&next=25")
        .then(res => res.json())
        .then((json)=> {
            console.table(json.launches);
            //json should be an array
            let launchArray = json.launches.map(this.packageObjectToList);
            this.launches = this.launches.concat(launchArray);
            console.log(this.launches[this.launches.length-1]);
            let formattedTime = this.formatApiTime(this.launches[this.launches.length-1].date);
            console.log(formattedTime);
            console.table(this.launches);
            document.dispatchEvent(updateList);

        })
        .catch((err)=> {
            console.log(err);
        })
        //this.fetchData(this.activeStartDate);
        return null;
    },
    setViews : function(views) {
        views.forEach((view)=>{this.pageViews.push(view)});
    },

    formatApiTime : function (timeString) {
        let timeArray = timeString.split(",")
        let day = timeArray[0].split(" ")[1];
        let month = this.getMonthNumber(timeArray[0].split(" ")[0].substr(0,3));
        let year = timeArray[1].split(" ")[1];
        return year + "-" + month + "-" + day;
    },
    addFourMonths: function(formattedTime) {
        let timeArray = formattedTime.split("-");
        month = Number(timeArray[1]) + 4;
        if (month>12) {
            month -=12;
            timeArray[0] = (Number(timeArray[0])+1).toString();
        }
        timeArray[1] = month.toString();
        // return year - month - day
        return  timeArray[0]+ "-" + timeArray[1] + "-" + timeArray[2];
    },
    packageObjectToList: function(launchApiObject) {
        //lsp information
        //find a way to make lsp information get the company name
        rocketInfo = launchApiObject.name.split("|");
        

        return {
            rocketName : rocketInfo[0],
            payload : rocketInfo[1],
            company: launchApiObject.lsp.name,
            date: launchApiObject.net,
            id: launchApiObject.id,
            vidURL: launchApiObject.vidURL,
            lsp : launchApiObject.lsp,
            location : {
                longitude: launchApiObject.location.longitude,
                latitude: launchApiObject.location.latitude
            }
        }
        //The lsp returns an intetger
    },
    isBeforeOrEqual: function(leftTime, rightTime) {
        let leftTimeArray = leftTime.split("-");
        let rightTimeArray = rightTime.split("-");

        if(Number(leftTimeArray[2]) < rightTimeArray[2]) 
            return true;
        if (Number(leftTimeArray[1]) < rightTimeArray[1])
            return true;
        return Number(leftTimeArray[0]) <= rightTimeArray[0];
    },
    formatTime: function() {
        let d = Date(Date.now()).toString();
        let dateArray = d.split(" ");
        let day = dateArray[2];
        console.log(dateArray[1]);
        let month = this.getMonthNumber(dateArray[1]);
        let year = dateArray[3];

        return year + "-" + month + "-" + day;

    },
    getMonthNumber : function(month) {
        switch(month) {
            case "Jan":
             return "01";
            case "Feb":
                return "02";
            case "Mar":
                return "03";
            case "Apr":
                return "04";
            case "May":
                return "05";
            case "Jun": 
                return "06";
            case "Jul":
                return "07";
            case "Aug":
                return "08";
            case "Sep":
                return "09";
            case "Oct":
                return "10";
            case "Nov":
                return "11";
            case "Dec":
                return "12";
            default:
            return "err"
        }
    }



    //Controller functions, should not be in the information model
//    goToMap : function() {},

  //  goToList : function() {},



}

//makeAndUpdateVideoEvent
//make and update list event

//event UpdateView (set off by Model)
var updateList = new CustomEvent("updateList");
var updateVideo = new CustomEvent("updateVideo");
var goToIndividual = new CustomEvent("individual");
var changePage = new CustomEvent("changePage");

Model.__init__();
Model.setViews([ListPageView,IndividualLaunchPageView]);
document.addEventListener("updateList", ()=> {ListView.update()});
document.addEventListener("updateVideo", ()=> {ImageView.update()});
document.addEventListener("individual", ()=> {
    Model.pageViews.forEach((view)=>{
        console.log(view)
        view.toggleDisplay();
    })
})

document.addEventListener("changePage", ()=>{
    Model.lastPage.toggleDisplay();
    Model.currentPage.toggleDisplay();
})

document.dispatchEvent(updateList);