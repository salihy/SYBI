function SYButton(parentDiv, control, handler) {
    var $div = $('<div/>', {
        'class': 'row',
    });

    $div.width($(parentDiv).width()-10).css('margin-left', '2px');

    var $btn = $('<button/>', {
        text: control.Name, //set text 1 to 10
        id: 'btn_' + control.Id,
        'class': 'container-fluid btn btn-default btn-block',
        'type':'button',
        click: handler
    });

    $btn.appendTo($div);
    
    $(parentDiv).append(
        $div
    );

}