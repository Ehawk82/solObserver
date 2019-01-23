var ui, userdata;

userdata = {
	volts: 0,
	amp: 0
}

ui = {
    init: () => {
    	localStorage.clear();
    	var uData = localStorage.getItem("userdata");
        
    	if (!uData || uData === null) {
            localStorage.setItem("userdata", JSON.stringify(userdata));
    	};
    	uData = localStorage.getItem("userdata");
    	if (uData) {
            var uuu = JSON.parse(uData);
    	};

    	ui.myLoad(uuu);
    },
    myLoad: (uuu) => {
        var vContain = createEle("div"),
            wimg = createEle("img"),
            aimg = createEle("img"),
            vimg = createEle("img"),
            wimgWrapper = createEle("div"),
            aimgWrapper = createEle("div"),
            vimgWrapper = createEle("div"),
            vIn = createEle("input"),
            aIn = createEle("input"),
            wIn = createEle("input");

        wIn.className = "ins";
        wIn.type = "number";
        wIn.placeholder = "0";
        wIn.readOnly = true;

        aIn.className = "ins";
        aIn.type = "number";
        aIn.placeholder = uuu.amp;
        aIn.addEventListener("keyup", ui.ampIn(aIn, uuu, wIn));

        vIn.className = "ins";
        vIn.type = "number";
        vIn.placeholder = uuu.volts;
        vIn.addEventListener("keyup", ui.voltageIn(vIn, uuu, wIn));

        wimg.className = "imgs";
        wimg.src = "src/assets/watt-image.png";

        aimg.className = "imgs";
        aimg.src = "src/assets/amp-image.png";

        vimg.className = "imgs";
        vimg.src = "src/assets/volt-image.png";

        wimgWrapper.className = "imgWrapper";
        wimgWrapper.appendChild(wimg);

        aimgWrapper.className = "imgWrapper";
        aimgWrapper.appendChild(aimg);

        vimgWrapper.className = "imgWrapper";
        vimgWrapper.appendChild(vimg);

        vContain.className = "containers";
        
        vContain.appendChild(vimgWrapper);
        vContain.appendChild(vIn);
        vContain.appendChild(aimgWrapper);
        vContain.appendChild(aIn);
        vContain.appendChild(wimgWrapper);
        vContain.appendChild(wIn);

        dvContain.appendChild(vContain);
    },
    voltageIn: (vIn, uuu, wIn) => {
    	return () => {
    		uuu.volts = vIn.value

    		localStorage.setItem("userdata", JSON.stringify(uuu));
    		ui.wattUpdate(uuu, wIn);

        }
    },
    ampIn: (aIn, uuu, wIn) => {
    	return () => {
    		uuu.amp = aIn.value

    		localStorage.setItem("userdata", JSON.stringify(uuu));
    		ui.wattUpdate(uuu, wIn);
        }
    },
    wattUpdate: (uuu, wIn) => {

            wIn.value = +uuu.volts * +uuu.amp;

        
    }
};

window.onload = () => {
    ui.init();
};