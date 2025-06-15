$(document).ready(function(){
     $("#btn_back").click(function(){
        window.location.href = "mainmenu.html";
     });
    
     $( function() {
        $( "#accordion" ).accordion();
     });
    
      $( function() {
        var handle = $( "#custom-handle-cerah" );
        $( "#slider_cerah" ).slider({
        range: "max",
        min: 1,
        max: 200,
          create: function() {
            handle.text( $( this ).slider( "value" ) );
          },
          slide: function( event, ui ) {
            handle.text( ui.value );
          }
        });
      });
    
    $( function() {
        var handle = $( "#custom-handle-adzan" );
        $( "#slider_adzan" ).slider({
        range: "max",
        min: 1,
        max: 50,
          create: function() {
            handle.text( $( this ).slider( "value" ) );
          },
          slide: function( event, ui ) {
            handle.text( ui.value );
          }
        });
      });
    
    $( function() {
        var handle = $( "#custom-handle-jam" );
        $( "#slider_jam" ).slider({
        range: "max",
        min: 1,
        max: 50,
          create: function() {
            handle.text( $( this ).slider( "value" ) );
          },
          slide: function( event, ui ) {
            handle.text( ui.value );
          }
        });
      });
    
    $( function() {
        var handle = $( "#custom-handle-speed" );
        $( "#slider_speed" ).slider({
        range: "max",
        min: 1,
        max: 150,
          create: function() {
            handle.text( $( this ).slider( "value" ) );
          },
          slide: function( event, ui ) {
            handle.text( ui.value );
          }
        });
      });
    
    
});