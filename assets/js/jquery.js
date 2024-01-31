$('#enviarCorreo').on("click",function(){
    alert("El correo fue enviado correctamente...");
});

$("h2").on("dblclick", function(){
    $(this).css({
        "color": "#DC3545"
    });
});
$(document).ready(function() { 
    $(".txt-oculto").on("click",function() { 
        $(".todo").toggle(); 
    });
    $(".mostrar").on("click",function() { 
        if ($(".txt-oculto").is(":hidden")){
        $(".todo").toggle();
        } 
    });
}); 