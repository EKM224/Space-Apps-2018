
var ListView = {
    hook: document.querySelector("#hookId"),
    update: function() { 
        let list = document.querySelector("list");
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

var VideoView = {
    hook : document.querySelector("#something"),
    update: function() {
        changeVideo(Model.videoUrl);
    },
    toggleDisplay : function() {
        toggleHook.call(this);
    }
}

var ListPageView = {
    hook: document.querySelector("#"),
    childViews : [ListView, VideoView],
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

var IndividualLaunchView = {
    hook: document.querySelector("#"),
    update: function(launchIndex) {
        generateListElement(launchIndex);
    },
    toggleDisplay: function(launchIndex){
        toggleHook.call(this);
        this.update(launchIndex); 
    }
}

// Helper functions ========================

function toggleHook() {
    if (this.hook.style.display == "none") {
        this.hook.style.display = "block";
    }
    else {
        this.hook.style.display = "none";
    }
}