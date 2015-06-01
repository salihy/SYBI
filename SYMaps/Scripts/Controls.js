function SYButton(parentDiv, control, handler) {
    var $div = $('<div/>', {
        'class': 'row',
    });

    $div.width($(parentDiv).width()-10).css('margin-left', '2px');

    var $btn = $('<button/>', {
        text: control.Name, //set text 1 to 10
        id: control.Id,
        'class': 'container-fluid btn btn-default btn-block',
        'type':'button',
        click: handler
    });

    $btn.appendTo($div);
    
    $(parentDiv).append(
        $div
    );
}

function SYCheckbox(parentDiv, control, handler) {
    var $div = $('<div/>', {
        'class': 'row',
    });

    $div.width($(parentDiv).width() - 10).css('margin-left', '2px');

    var $cboxlabel = $('<label/>', {
        text: control.Name, //set text 1 to 10
        'class': 'container-fluid',
    });

    var $cbox = $('<input/>', {
        id: control.Id,
        'type': 'checkbox'
    }).change(function () {
        if (this.checked) {
            alert('TEST');
        }
        else {
            alert('TEST2');
        }
    });

    $cbox.appendTo($cboxlabel);
    $cboxlabel.appendTo($div);

    $(parentDiv).append(
        $div
    );
}