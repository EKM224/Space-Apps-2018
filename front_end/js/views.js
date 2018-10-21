
var ListView = {
    hook: document.querySelector("#list"),
    update: function() { 
        let list = document.querySelector("#list ul");
        //Empty list
        while(list.firstChild){
            list.removeChild(list.firstChild);
        }
        let i = 0;
        Model.launches.forEach((launchInfo)=> {
            let listElement = generateListElement(launchInfo, i);
            list.appendChild(listElement);
            i++;
        });
    },
    toggleDisplay: function() {
        toggleHook.call(this);
    }
}

var ImageView = {
    hook : document.querySelector("#image-placeholder"),
    update: function() {
        changeVideo(Model.videoUrl);
    },
    toggleDisplay : function() {
        toggleHook.call(this);
    }
}

var ListPageView = {
    hook: null,
    childViews : [ListView, ImageView],
    update : function() {
        this.childViews.forEach((view)=> {
            view.update();
        })
    },
    toggleDisplay: function() {
        this.childViews.forEach((view)=> {
            view.toggleDisplay();
        })
    }
}

var IndividualLaunchPageView = {
    hook: document.querySelector("#individual-page"),
    update: function(launchIndex) {
        console.log("console.logis")
        console.log(launchIndex);
        generateIndividualPage(launchIndex);
    },
    toggleDisplay: function(){
        let launchIndex = Model.individualPageIndex 
        toggleHook.call(this);
        this.update(launchIndex); 
    }
}

// Helper functions ========================

function toggleHook() {
    console.log(this);
    if (this.hook.style.display == "none") {
        this.hook.style.display = "block";
    }
    else {
        this.hook.style.display = "none";
    }
}