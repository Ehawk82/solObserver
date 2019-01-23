var ui;

ui = {
    init: () => {
    	ui.myLoad();
    },
    myLoad: () => {
        var vContain = createEle("div"),
            vIn = createEle("input");
        
        vIn.className = "ins";
        vIn.type = "number";
        vIn.placeholder = "Enter Voltage";
        vIn.addEventListener("keyup", ui.voltageIn(vIn), false);


        vContain.innerHTML = "voltage";
        vContain.className = "containers";
        vContain.appendChild(vIn);


        dvContain.appendChild(vContain);
    },
    voltageIn: (vIn) => {
    	return () => {
    		console.log(vIn.value);
        }
    }
};

window.onload = () => {
    ui.init();
};