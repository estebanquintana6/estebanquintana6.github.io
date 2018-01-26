function getRequestObject() {
  // Asynchronous objec created, handles browser DOM differences

  if(window.XMLHttpRequest) {
    // Mozilla, Opera, Safari, Chrome IE 7+
    return (new XMLHttpRequest());
  }
  else if (window.ActiveXObject) {
    // IE 6-
    return (new ActiveXObject("Microsoft.XMLHTTP"));
  } else {
    // Non AJAX browsers
    return(null);
  }
}

function reiniciarMenu(){
    //Escritorio
    $("#liInicio").attr('class', 'grey darken-1');
    $("#liInicio").attr('onclick', 'sendRequestInicio()');
    
    $("#liPlanes").attr('class', 'grey darken-1');
    $("#liPlanes").attr('onclick', 'sendRequestPlanes()');
    
    $("#liProyectos").attr('class', 'grey darken-1');
    $("#liProyectos").attr('onclick', 'sendRequestProyectos()');
    
    $("#liCotizador").attr('class', 'grey darken-1');
    $("#liCotizador").attr('onclick', 'sendRequestCotizador()');
    
    $("#liNosotros").attr('class', 'grey darken-1');
    $("#liNosotros").attr('onclick', 'sendRequestNosotros()');
    
    $("#liSocios").attr('class', 'grey darken-1');
    $("#liSocios").attr('onclick', 'sendRequestSociosComerciales()');
    
    $("#liContacto").attr('class', 'grey darken-1');
    $("#liContacto").attr('onclick', 'sendRequestContacto()');
    
    //Mobil
    $("#liInicio2").attr('class', 'grey darken-1');
    $("#liInicio2").attr('onclick', 'sendRequestInicio()');
    
    $("#liPlanes2").attr('class', 'grey darken-1');
    $("#liPlanes2").attr('onclick', 'sendRequestPlanes()');
    
    $("#liProyectos2").attr('class', 'grey darken-1');
    $("#liProyectos2").attr('onclick', 'sendRequestProyectos()');
    
    $("#liCotizador2").attr('class', 'grey darken-1');
    $("#liCotizador2").attr('onclick', 'sendRequestCotizador()');
    
    $("#liNosotros2").attr('class', 'grey darken-1');
    $("#liNosotros2").attr('onclick', 'sendRequestNosotros()');
    
    $("#liSocios2").attr('class', 'grey darken-1');
    $("#liSocios2").attr('onclick', 'sendRequestSociosComerciales()');
    
    $("#liContacto2").attr('class', 'grey darken-1');
    $("#liContacto2").attr('onclick', 'sendRequestContacto()');
    
}

//Funciones de activacion de menus dependiendo altura de página:    
function activarMenus(){
    var $window = $(window),
        $menu = $('#nav1'),
        $submenu = $('#subNav'),
        $section = $('#section'),
        $footerDiv = $('#footerDiv'),
        $footerDiv2 = $('#footerDiv2'),
        $rowContent = $('#rowContent');
    menuTop = $menu.offset().top;
    submenuTop = $submenu.offset().top;
    
    
    $.fn.scrollBottom = function() { 
      return $(document).height() - this.scrollTop() - this.height(); 
    };

    //Menú Fijo:
    $window.scroll(function () {
        if ($window.scrollTop() > menuTop) {
            if($window.scrollTop() + $submenu.height() > $rowContent.height() + $rowContent.offset().top){
                  $rowContent.css('position', 'relative');
                  $submenu.css('position', 'absolute');
                  $submenu.css('top', '');
                  $submenu.css('bottom', '-.95%');
            }else{
                $menu.css('position', 'fixed');
                $menu.css('top', 0);

                $submenu.css('margin-top', $menu.height());
                $section.css('margin-top', $menu.height());
                
                $rowContent.css('position', '');

                $submenu.css('position', 'fixed');
                $submenu.css('top', 0);
                $submenu.css('right', 0); 
                $submenu.css('bottom', '');
            }
        } else {
            $menu.css('position', '');
            $menu.css('top', '');

            $submenu.css('margin-top', "");
            $section.css('margin-top', "");

            $submenu.css('position', '');
            $submenu.css('top', '');
            $submenu.css('margin-left', '');
        }
    });
}

// Ajustar pantalla y aplicar funcion de activar menus
function ajustaPantalla(){
    var $window = $(window),
        $topDiv = $('#top');
    topDiv = $topDiv.offset().top;
    if($window.scrollTop() > topDiv){
        document.getElementById('top').scrollIntoView();
    }
    activarMenus();
    // Hide sideNav
    $('.button-collapse').sideNav('hide');
}

function sendRequestInicio(){
   var request=getRequestObject();
   if(request!=null)
   {
     var inicio = 1;
     var url='ssajax.php?inicio='+inicio;
     request.open('GET',url,true);
     request.onreadystatechange = 
            function() { 
                if((request.readyState==4)){
                    // Asynchronous response has arrived
                    var ajaxResponseBody=document.getElementById('ajaxResponseBody');
                    ajaxResponseBody.innerHTML=request.responseText;
                    ajaxResponseBody.style.visibility="visible";
                    // -------> Inicializar Componentes de js
                    $('.materialboxed').materialbox();
                    $('.scrollspy').scrollSpy();
                    // -------> Reactivar menus y ajustar pantalla
                    ajustaPantalla(); // Dentro de esta funcion se activan menus segun altura de pagina
                    reiniciarMenu();
                    $("#liInicio").attr('class', 'active');
                    $("#liInicio").attr('onclick', '');
                    
                    $("#liInicio2").attr('class', 'active');
                    $("#liInicio2").attr('onclick', '');
                }     
            };
     request.send(null);
   }
}

function sendRequestPlanes(){
   var request=getRequestObject();
   if(request!=null)
   {
     var planesinversion = 1;
     var url='ssajax.php?planesinversion='+planesinversion;
     request.open('GET',url,true);
     request.onreadystatechange = 
            function() { 
                if((request.readyState==4)){
                    // Asynchronous response has arrived
                    var ajaxResponseBody=document.getElementById('ajaxResponseBody');
                    ajaxResponseBody.innerHTML=request.responseText;
                    ajaxResponseBody.style.visibility="visible";
                    // -------> Inicializar Componentes de js
                    $('.materialboxed').materialbox();
                    // -------> Reactivar menus y ajustar pantalla
                    ajustaPantalla(); // Dentro de esta funcion se activan menus segun altura de pagina
                    reiniciarMenu();
                    $("#liPlanes").attr('class', 'active');
                    $("#liPlanes").attr('onclick', '');
                    
                    $("#liPlanes2").attr('class', 'active');
                    $("#liPlanes2").attr('onclick', '');
                }     
            };
     request.send(null);
   }  
}


function sendRequestProyectos(){
   var request=getRequestObject();
   if(request!=null)
   {
     var proyectos = 1;
     var url='ssajax.php?proyectos='+proyectos;
     request.open('GET',url,true);
     request.onreadystatechange = 
            function() { 
                if((request.readyState==4)){
                    // Asynchronous response has arrived
                    var ajaxResponseBody=document.getElementById('ajaxResponseBody');
                    ajaxResponseBody.innerHTML=request.responseText;
                    ajaxResponseBody.style.visibility="visible";
                    // -------> Inicializar Componentes de js
                    $('.materialboxed').materialbox();
                    $('.scrollspy').scrollSpy();
                    $('.slider').slider({
                        full_width: true,
                        indicators: true,
                        height: 490,
                        transition: 400,
                        interval: 6000
                    });
                    $('.collapsible').collapsible();
                    $('.modal-trigger').leanModal();
                    // -------> Reactivar menus y ajustar pantalla
                    ajustaPantalla(); // Dentro de esta funcion se activan menus segun altura de pagina
                    reiniciarMenu();
//                    var $menu = $('#nav1');
//                    $('#tituloP1').pushpin({ top: $('#tituloP1').offset().top, 
//                                             offset: $menu.height(),
//                                           });
                    $('#subNav').css('height', $(window).height() - $('#nav1').height());
                    $("#liProyectos").attr('class', 'active');
                    $("#liProyectos").attr('onclick', '');
                    
                    $("#liProyectos2").attr('class', 'active');
                    $("#liProyectos2").attr('onclick', '');
                }     
            };
     request.send(null);
   }
}

function sendRequestCotizador(){
    var request=getRequestObject();
   if(request!=null)
   {
     var cotizador = 1;
     var url='ssajax.php?cotizador='+cotizador;
     request.open('GET',url,true);
     request.onreadystatechange = 
            function() { 
                if((request.readyState==4)){
                    // Asynchronous response has arrived
                    var ajaxResponseBody=document.getElementById('ajaxResponseBody');
                    ajaxResponseBody.innerHTML=request.responseText;
                    ajaxResponseBody.style.visibility="visible";
                    // -------> Inicializar Componentes de js
                    $('select').material_select();
                    // -------> Reactivar menus y ajustar pantalla
                    ajustaPantalla(); // Dentro de esta funcion se activan menus segun altura de pagina
                    reiniciarMenu();
                    $("#liCotizador").attr('class', 'active');
                    $("#liCotizador").attr('onclick', '');
                    
                    $("#liCotizador2").attr('class', 'active');
                    $("#liCotizador2").attr('onclick', '');
                }     
            };
     request.send(null);
   }
}

function sendRequestNosotros(){
    var request=getRequestObject();
   if(request!=null)
   {
     var nosotros = 1;
     var url='ssajax.php?nosotros='+nosotros;
     request.open('GET',url,true);
     request.onreadystatechange = 
            function() { 
                if((request.readyState==4)){
                    // Asynchronous response has arrived
                    var ajaxResponseBody=document.getElementById('ajaxResponseBody');
                    ajaxResponseBody.innerHTML=request.responseText;
                    ajaxResponseBody.style.visibility="visible";
                    // -------> Inicializar Componentes de js
                    $('.materialboxed').materialbox();
                    $('.scrollspy').scrollSpy();
                    // -------> Reactivar menus y ajustar pantalla
                    ajustaPantalla(); // Dentro de esta funcion se activan menus segun altura de pagina
                    reiniciarMenu();
                    $("#liNosotros").attr('class', 'active');
                    $("#liNosotros").attr('onclick', '');
                    
                    $("#liNosotros2").attr('class', 'active');
                    $("#liNosotros2").attr('onclick', '');
                }     
            };
     request.send(null);
   }
}

function sendRequestSociosComerciales(){
   var request=getRequestObject();
   if(request!=null)
   {
     var socios = 1;
     var url='ssajax.php?socios='+socios;
     request.open('GET',url,true);
     request.onreadystatechange = 
            function() { 
                if((request.readyState==4)){
                    // Asynchronous response has arrived
                    var ajaxResponseBody=document.getElementById('ajaxResponseBody');
                    ajaxResponseBody.innerHTML=request.responseText;
                    ajaxResponseBody.style.visibility="visible";
                    // -------> Inicializar Componentes de js
                    $('.materialboxed').materialbox();
                    // -------> Reactivar menus y ajustar pantalla
                    ajustaPantalla(); // Dentro de esta funcion se activan menus segun altura de pagina
                    reiniciarMenu();
                    $("#liSocios").attr('class', 'active');
                    $("#liSocios").attr('onclick', '');
                    
                    $("#liSocios2").attr('class', 'active');
                    $("#liSocios2").attr('onclick', '');
                }     
            };
     request.send(null);
   }
}

function sendRequestContacto(){
   var request=getRequestObject();
   if(request!=null)
   {
     var contacto = 1;
     
     var url='ssajax.php?contacto='+contacto;
     request.open('GET',url,true);
     request.onreadystatechange = 
            function() { 
                if((request.readyState==4)){
                    // Asynchronous response has arrived
                    var ajaxResponseBody=document.getElementById('ajaxResponseBody');
                    ajaxResponseBody.innerHTML=request.responseText;
                    ajaxResponseBody.style.visibility="visible";
                    // -------> Inicializar Componentes de js
                    
                    // -------> Reactivar menus y ajustar pantalla
                    
                    ajustaPantalla(); // Dentro de esta funcion se activan menus segun altura de pagina
                    reiniciarMenu();
                    $("#liContacto").attr('class', 'active');
                    $("#liContacto").attr('onclick', '');
                    
                    $("#liContacto2").attr('class', 'active');
                    $("#liContacto2").attr('onclick', '');
                }     
            };
     request.send(null);
   }
}

// ----------------------- Contactanos---------------------------

$(document).ready(function () {
    $(document).on('submit', 'form', function(e) {
        e.preventDefault();
        $.ajax({
            url : $(this).attr('action') || window.location.pathname,
            type: "POST",
            data: $(this).serialize(),
            success: function (data) {
                $("#ajaxResponseMail").html(data);
            },
            error: function (jXHR, textStatus, errorThrown) {
                alert(errorThrown);
            }
        });
    });
});
