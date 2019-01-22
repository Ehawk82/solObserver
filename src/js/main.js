var ui;

ui = {
    init: () => {
    	ui.myLoad();
    },
    myLoad: () => {
        var vContain = createEle("div");

        vContain.innerHTML = "done";

        dvContain.appendChild(vContain);

    }
};

window.onload = () => {
    ui.init();
};