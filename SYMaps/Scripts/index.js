var map;
var controlUI;

function initialize() {
    var mapOptions = {
        center: { lat: 41.009449, lng: 28.971951 },
        zoom: 12
    };
    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var LeftMenulDiv = document.createElement('div');
    LeftMenu(LeftMenulDiv);

    LeftMenulDiv.index = 1;
    map.controls[google.maps.ControlPosition.LEFT_CENTER].push(LeftMenulDiv);

   go();
}



function go() {
     $.get("/Default/TestCallback" ,
        {}, function (data) {
            var controls = jQuery.parseJSON(data);
            SetControls(controls);
        }
    );
}

function SetControls(controls) {
    $.each(controls, function (i, control) {
        switch (control.Type) {
            case 'Button':
                //burda bir adet button objesi olusturmak gerekiyor.
                SYButton(controlUI, control, null);
                break;
            case 'Checkbox':
                SYCheckbox(controlUI, control, null);
            default:

        }
    });
}

function loadScript() {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    //script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp' +
    script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDokq7rPzOCXGmxgQmiNZxsgy6eXIFvK5I' +
        '&signed_in=true&callback=initialize';
    document.body.appendChild(script);
}


function LeftMenu(controlDiv) {
    controlUI = document.createElement('div');

    controlUI.style.height = $('#map-canvas').height() + 'px';
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.textAlign = 'center';
    controlUI.style.width = '300px';

    $(window).resize(function () {
        controlUI.style.height = $('#map-canvas').height() + 'px';
    });

    $(controlUI).appendTo($(controlDiv))

}
//google.maps.event.addDomListener(window, 'load', initialize);
window.onload = loadScript;
