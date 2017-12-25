var sPositions = localStorage.positions || "{}",
    positions = JSON.parse(sPositions);

if (localStorage.getItem('dataColor') == null) {
	$('#wrapper')[0].dataset.color = 'orange';
} else {
	$('#wrapper')[0].dataset.color = localStorage.getItem('dataColor');
}

if (localStorage.getItem('siteType') != null) {
	if (localStorage.getItem('siteType') == '1') {
		document.getElementById("parallax-section").style.display = "none";
		document.getElementById("firstContainer").style.display = "block";
		document.getElementById("fourthModule").style.display = "none";
		document.getElementById("thirdModule").style.display = "block";
	} else if (localStorage.getItem('siteType') == '2') {
		document.getElementById("parallax-section").style.display = "block";
		document.getElementById("firstContainer").style.display = "none";
		document.getElementById("fourthModule").style.display = "block";
		document.getElementById("thirdModule").style.display = "none";
	}
} else {
	document.getElementById("parallax-section").style.display = "none";
	document.getElementById("firstContainer").style.display = "block";
	document.getElementById("fourthModule").style.display = "none";
	document.getElementById("thirdModule").style.display = "block";
}



if (localStorage.getItem('subTitle') != null) {
	// Цифровизация печатных СМИ
	document.getElementById("draggable1").childNodes[3].childNodes[5].innerText = localStorage.getItem('subTitle');
}


if (localStorage.getItem('drag2img') != null) {
	$('#drag2img').attr('src', JSON.parse(localStorage.getItem('drag2img'))[0]).width(JSON.parse(localStorage.getItem('drag2img'))[1]).height(JSON.parse(localStorage.getItem('drag2img'))[2]);	
}

if (localStorage.getItem('drag1img') != null) {
	$('#drag1img').attr('src', JSON.parse(localStorage.getItem('drag1img'))[0]).width(JSON.parse(localStorage.getItem('drag1img'))[1]).height(JSON.parse(localStorage.getItem('drag1img'))[2]);	
}

$.each(positions, function (id, pos) {
    $("#" + id).css(pos)
});	

var tabs = document.getElementsByClassName("inputFiles");
for (var i = 0; i < tabs.length; i++) {
	tabs[i].style.display = "none";
}


// clearLocalStorage();

$("#draggable1").draggable({
	disabled: true,
    containment: "#header_drag",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});
$("#draggable2").draggable({
	disabled: true,
    containment: "#header_drag",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});
$("#draggable3").draggable({
	disabled: true,
    containment: "#firstContainer",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});
$("#draggable4").draggable({
	disabled: true,
    containment: "#firstContainer",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});

$("#draggable5").draggable({
	disabled: true,
    containment: "#firstContainer",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});

$("#firstModule").draggable({
	disabled: true,
    containment: "#main-section",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});

$("#secondModule").draggable({
	disabled: true,
    containment: "#main-section",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});

$("#thirdModule").draggable({
	disabled: true,
    containment: "#main-section",
    scroll: false,
    stop: function (event, ui) {
        positions[this.id] = ui.position
        localStorage.positions = JSON.stringify(positions)
    }
});


function redactor() {
	for (var i = 0; i < tabs.length; i++) {
		tabs[i].style.display = "block";
	}

	document.getElementById("fixed-navbar").style.pointerEvents = 'none';

	document.getElementById("typeRedactor").style.display = "block";
	document.getElementById("cancelRedactor").style.display = "block";
	document.getElementById("colorsRedactor").style.display = "block";
	document.getElementById("draggable1").setAttribute("contenteditable", "true");

	var body = document.getElementsByTagName("body")[0];
	body.setAttribute("style", "filter: blur(0px); background-color: #ccc; zoom: 0.5; -moz-transform: scale(0.5); -moz-transform-origin: 0 0;");


	document.getElementById("draggable1").style.border = "solid 3px green";
	document.getElementById("draggable2").style.border = "solid 3px green";
	document.getElementById("draggable3").style.border = "solid 3px green";
	document.getElementById("draggable4").style.border = "solid 3px green";
	document.getElementById("draggable5").style.border = "solid 3px green";
	document.getElementById("firstModule").style.border = "solid 3px red";
	document.getElementById("secondModule").style.border = "solid 3px red";
	document.getElementById("thirdModule").style.border = "solid 3px red";


	document.getElementById("draggable1").style.cursor = "move";
	document.getElementById("draggable2").style.cursor = "move";
	document.getElementById("draggable3").style.cursor = "move";
	document.getElementById("draggable4").style.cursor = "move";
	document.getElementById("draggable5").style.cursor = "move";
	document.getElementById("firstModule").style.cursor = "move";
	document.getElementById("secondModule").style.cursor = "move";
	document.getElementById("thirdModule").style.cursor = "move";


	$("#draggable1").draggable("option","disabled", false); 
	$("#draggable2").draggable("option","disabled", false); 
	$("#draggable3").draggable("option","disabled", false); 
	$("#draggable4").draggable("option","disabled", false); 
	$("#draggable5").draggable("option","disabled", false); 
	$("#firstModule").draggable("option","disabled", false); 
	$("#secondModule").draggable("option","disabled", false);
	$("#thirdModule").draggable("option","disabled", false);


	
	
}






function changeImgFile(input, width, height, img) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
        	var arr = [e.target.result, width, height];
        	localStorage.setItem(img, JSON.stringify(arr));
            $('#'+img)
                .attr('src', e.target.result)
                .width(width)
                .height(height);
        };
        reader.readAsDataURL(input.files[0])
    }
}


function changeColor(color) {
	localStorage.setItem('dataColor', color);
	$('#wrapper')[0].dataset.color = localStorage.getItem('dataColor');
	document.getElementById("wrapper").setAttribute("data-color", color);
}

function changeType(type) {
	localStorage.setItem('siteType', type);
	if (type == '1') {
		document.getElementById("parallax-section").style.display = "none";
		document.getElementById("firstContainer").style.display = "block";
		document.getElementById("fourthModule").style.display = "none";
		document.getElementById("thirdModule").style.display = "block";
	} else if (type == '2') {
		document.getElementById("parallax-section").style.display = "block";
		document.getElementById("firstContainer").style.display = "none";
		document.getElementById("fourthModule").style.display = "block";
		document.getElementById("thirdModule").style.display = "none";
	}
}

function clearLocalStorage() {
	window.localStorage.clear();
	location.reload();
}

function cancelRedactor() {
	$("#draggable1").draggable("option","disabled", true); 
	$("#draggable2").draggable("option","disabled", true); 
	$("#draggable3").draggable("option","disabled", false); 
	$("#draggable4").draggable("option","disabled", false); 
	$("#draggable5").draggable("option","disabled", false); 


	// for (var i = 0; i < tabs.length; i++) {
	// 	tabs[i].style.display = "none";
	// }
	if (document.getElementById("draggable1").childNodes[6] != null) {
		localStorage.setItem('subTitle', document.getElementById("draggable1").childNodes[6].innerText);
	}
	// document.getElementById("cancelRedactor").style.display = "none";
	// document.getElementById("colorsRedactor").style.display = "none";
	// document.getElementById("draggable1").setAttribute("contenteditable", "false");
	// var body = document.getElementsByTagName("body")[0];
	// body.setAttribute("style", "");
	document.location.reload(true);
	// document.getElementById("draggable1").setAttribute("style", "cursor: default;");
	// document.getElementById("draggable2").setAttribute("style", "cursor: default;"); 
}

