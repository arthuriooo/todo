$(document).ready(function(){
    
    
//    function clicked() {
//        $field.prepend($newtask);
//    }
//
//    var $field = document.getElementById('tasks');
//    var $btn = document.getElementById('done');
//    
//    var $newtask = "<h1>Hello<br><br></h1>";
//
//    $btn.addEventListener('click', clicked, false);
//    
//    if ($('#done').click) {
//        $('#tasks').prepend("<h1>Hello</h1>");
//    }
//    
//    
//    var $taske = document.querySelector('#enter').value;
//    var $text = "<div class='task'><p>"+document.querySelector('#enter').value+"</p></div>";
    
    //
    //
    //
    
//    $('#done').on("click", function(){
//        $('#tasks').prepend("<div class='task'><p>"+document.querySelector('#enter').value+"</p><img class='icon' src='icons8-delete_sign.png'></div>");
//        $('.class').first().hide().fadeIn(1000);
//    });
//    
//    
//
//    
//    
//    $('.icon').on('click', function(){
//        $('.task').remove();
//    })
//    
//    
    
    //
    //
    //
    
    var $i = 2;
    var l = 12;
    
//    var v = 1;
    var tasks = [''];
    
    var icons = document.getElementsByClassName('icon');
        
    $('#done').on("click", function(){
        if ($i<9) {
            $('.task').first().before("<div class='task' id='task"+$i+"'><p>" + $('#enter').val() + "</p><img class='icon' src='icons8-delete_sign.png'></div>");
            tasks.push($('#enter').val());
            $i++;
            icons = document.getElementsByClassName('icon');
        }
    });
//    $('.icon').on("click", function(){
//        var $par = $(this).parent();
//        $par.remove();
//    });
    
    
    for(var i = 0; i < icons.length; i++) {
        var icon = icons[i];
        icon.onclick = function() {
            var par = this.parentNode;
            par.remove();
        }
    }
    
//    $('.icon').each(function(){
//        $(this).on("click", function(){
//            var $par = $(this).parent();
//            $par.remove();
//        });
//    });
    
    
    
    
}) ;
