$(document).ready(function () {
    var counter = 0;
    var drag1Counter = 0;
    var drag2Counter = 0;
    var drag3Counter = 0;
    var drag4Counter = 0;
    var x = null;

    var isDraggable = true;
    var isConnected = false;
    //Make element draggable
 
    $(".drag").draggable({
        helper: 'clone',
        cursor: 'move',
        tolerance: 'fit',
        revert: true
    });

    $(".droppable1").droppable({
        accept: '.drag',
        activeClass: "drop-area",
        drop: function (e, ui) {
            // if it's the source of draggable item
            if ($(ui.draggable)[0].id == "drag1") {
                drag1Counter++;
                // clone draggable item to drop
                x = ui.helper.clone();
                $(x).attr('id', 'drag1'+drag1Counter);
                ui.helper.remove();
                
                // set moveable enabled to cloned item in drop region
                x.draggable({
                    helper: 'original',
                    cursor: 'move',
                    containment: '.droppable1',
                    tolerance: 'fit',
                    drop: function (event, ui) {
                        $(ui.draggable).remove();
                    }
                });


                // add class to cloned item
                x.addClass('remove');
                
                // add close button to this item
                var el = $("<span><p class='item-no'>No: "+drag1Counter+"</p></span>");
                // $(el).insertAfter($(x.find('img')));
                x.append($(el));
                
                // if there isn't drag1, then place drag1
                    x.appendTo('.droppable1');    
                
                // when clicked on close button
                $('.delete').on('click', function () {
                    $(this).parent().parent('span').remove();
                });

                // wehn double clicked on item
                $('.delete').parent().parent('span').dblclick(function () {
                    $(this).remove();
                });
            } else if ($(ui.draggable)[0].id == "drag2") {
                drag2Counter++;
                // clone draggable item to drop
                x = ui.helper.clone();
                $(x).attr('id', 'drag2'+drag2Counter);
                ui.helper.remove();
                
                var dragId1 = '';
                // set moveable enabled to cloned item in drop region
                x.draggable({
                    helper: 'original',
                    cursor: 'move',
                    containment: '.droppable1',
                    tolerance: 'fit',
                    drop: function (event, ui) {
                        $(ui.draggable).remove();
                        dragId1 = $('.droppable1').find('.drag1').eq(0).attr('id');
                        // drawLine(dragId1, 'drag2'+drag2Counter);
                    }
                });


                // add class to cloned item
                x.addClass('remove');
                
                // add close button to this item
                // add close button to this item
                var el = $("<span><p class='item-no'>No: "+drag2Counter+"</p></span>");
                // $(el).insertAfter($(x.find('img')));
                x.append($(el));
                
                // if there isn't drag1, then place drag1
                // if ($('.droppable1').find('.drag1').length == 1 && $('.droppable1').find('.drag2').length <= 2) {
                    x.appendTo('.droppable1');

                    drageId1 = $('.droppable1').find('.drag1').eq(0).attr('id');
                    // drawLine(drageId1, 'drag2'+drag2Counter);

                // }
                // when clicked on close button
                $('.delete').on('click', function () {
                    $(this).parent().parent('span').remove();
                });

                // wehn double clicked on item
                $('.delete').parent().parent('span').dblclick(function () {
                    $(this).remove();
                });
            } else if ($(ui.draggable)[0].id == "drag3") {
                drag3Counter++;
                // clone draggable item to drop
                x = ui.helper.clone();
                $(x).attr('id', 'drag3'+drag3Counter);
                ui.helper.remove();
                
                // set moveable enabled to cloned item in drop region
                x.draggable({
                    helper: 'original',
                    cursor: 'move',
                    containment: '.droppable1',
                    tolerance: 'fit',
                    drop: function (event, ui) {
                        $(ui.draggable).remove();
                    }
                });


                // add class to cloned item
                x.addClass('remove');
                
                // add close button to this item
                // add close button to this item
                var el = $("<span><p class='item-no'>No: "+drag3Counter+"</p></span>");
                // $(el).insertAfter($(x.find('img')));
                x.append($(el));
                
                // if there isn't drag1, then place drag1
                // if ($('.droppable1').find('.drag3').length < $('.droppable1').find('.drag2').length) {
                    x.appendTo('.droppable1');    
                // }
                // when clicked on close button
                $('.delete').on('click', function () {
                    $(this).parent().parent('span').remove();
                });

                // wehn double clicked on item
                $('.delete').parent().parent('span').dblclick(function () {
                    $(this).remove();
                });
            } else if ($(ui.draggable)[0].id == "drag4") {
                drag4Counter++;
                // clone draggable item to drop
                x = ui.helper.clone();
                $(x).attr('id', 'drag4'+drag4Counter);
                ui.helper.remove();
                
                // set moveable enabled to cloned item in drop region
                x.draggable({
                    helper: 'original',
                    cursor: 'move',
                    containment: '.droppable1',
                    tolerance: 'fit',
                    drop: function (event, ui) {
                        $(ui.draggable).remove();
                    }
                });
                // add class to cloned item
                x.addClass('remove');
                // add close button to this item
                // add close button to this item
                var el = $("<span><p class='item-no'>No: "+drag4Counter+"</p></span>");
                // $(el).insertAfter($(x.find('img')));
                x.append($(el));
                
                // if there isn't drag1, then place drag1
                // if ($('.droppable1').find('.drag3').length < $('.droppable1').find('.drag2').length) {
                    x.appendTo('.droppable1');    
                // }
                // when clicked on close button
                $('.delete').on('click', function () {
                    $(this).parent().parent('span').remove();
                });

                // wehn double clicked on item
                $('.delete').parent().parent('span').dblclick(function () {
                    $(this).remove();
                });
            }

        }
    });
    $("#remove-drag").droppable({
        drop: function (event, ui) {
            $(ui.draggable).remove();
        },
        hoverClass: "remove-drag-hover",
        accept: '.remove'
    });

    $("#btnDraw").click(function() {
        var firstVal = parseInt($("#first_item").val());
        var secondVal = parseInt($("#second_item").val());
        var thirdVal = parseInt($("#third_item").val());
        var fourthVal = parseInt($("#fourth_item").val());

        if (firstVal > 0 && secondVal > 0) {
            drawLine("drag1"+firstVal, "drag2"+secondVal);
            $("#first_item").val("");
            $("#second_item").val("");
        } else if (firstVal > 0 && thirdVal > 0) {
            drawLine("drag1"+firstVal, "drag3"+thirdVal);
            $("#first_item").val("");
            $("#third_item").val("");
        } else if (firstVal > 0 && fourthVal > 0) {
            drawLine("drag1"+firstVal, "drag4"+fourthVal);
            $("#first_item").val("");
            $("#fourth_item").val("");
        } else if (secondVal > 0 && thirdVal > 0) {
            drawLine("drag2"+secondVal, "drag3"+thirdVal);
            $("#second_item").val("");
            $("#third_item").val("");
        } else if (secondVal > 0 && fourthVal > 0) {
            drawLine("drag2"+secondVal, "drag4"+fourthVal);
            $("#second_item").val("");
            $("#fourth_item").val("");
        } else if (thirdVal > 0 && fourthVal > 0) {
            drawLine("drag3"+thirdVal, "drag4"+fourthVal);
            $("#third_item").val("");
            $("#fourth_item").val("");
        }

    });
    $("#btnErase").click(function() {
        if (parseInt($("#erase_item").val()) > 0) {
            $(".jquery-line").eq(parseInt($("#erase_item").val()) - 1).remove();
        } else {
            alert("select number of line to be deleted");
        }
    });
});

function getOffset( el ) {
    var _x = 0;
    var _y = 0;
    while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
        _x += el.offsetLeft - el.scrollLeft;
        _y += el.offsetTop - el.scrollTop;
        el = el.offsetParent;
    }
    return { top: _y, left: _x };
}

function drawLine(id1, id2) {
    var fromPoint = getOffset($('#' + id1)[0]);
    var toPoint = getOffset($('#' + id2)[0]);

    var from = function () {},
    to = new String('to');
    from.y = fromPoint.top+$('#' + id1).height();

    from.x = fromPoint.left+$('#' + id1).width()/2;
    to.y = toPoint.top; 
    to.x = toPoint.left+$('#' + id2).width()/2;

    $.line(from, to);
}