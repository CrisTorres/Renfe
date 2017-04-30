$(function() {
    $( "#slider-range1" ).slider({
      range: true,
      min: 0,
      max: 24,
      values: [ 0, 24 ],
      slide: function( event, ui ) {
        $( "#amount1" ).val(ui.values[ 0 ] + "h - " + ui.values[ 1 ] +"h" );
      }
    });
    $( "#amount1" ).val($( "#slider-range1" ).slider( "values", 0 ) +
      "h - " + $( "#slider-range1" ).slider( "values", 1 ) + "h" );


     $( "#slider-range2" ).slider({
      range: true,
      min: 0,
      max: 24,
      values: [ 0, 24 ],
      slide: function( event, ui ) {
        $( "#amount2" ).val(ui.values[ 0 ] + "h - " + ui.values[ 1 ] +"h" );
      }
    });
    $( "#amount2" ).val($( "#slider-range2" ).slider( "values", 0 ) +
      "h - " + $( "#slider-range2" ).slider( "values", 1 ) + "h" );


    $( "#slider-range3" ).slider({
      range: true,
      min: 0,
      max: 24,
      values: [ 0, 24 ],
      slide: function( event, ui ) {
        $( "#amount3" ).val(ui.values[ 0 ] + "h - " + ui.values[ 1 ] +"h" );
      }
    });
    $( "#amount3" ).val($( "#slider-range3" ).slider( "values", 0 ) +
      "h - " + $( "#slider-range3" ).slider( "values", 1 ) + "h" );


     $( "#slider-range4" ).slider({
      range: true,
      min: 0,
      max: 24,
      values: [ 0, 24 ],
      slide: function( event, ui ) {
        $( "#amount4" ).val(ui.values[ 0 ] + "h - " + ui.values[ 1 ] +"h" );
      }
    });
    $( "#amount4" ).val($( "#slider-range4" ).slider( "values", 0 ) +
      "h - " + $( "#slider-range4" ).slider( "values", 1 ) + "h" );


     $( "#slider-range5" ).slider({
      range: true,
      min: 0,
      max: 350,
      values: [ 0, 350 ],
      slide: function( event, ui ) {
        $( "#amount5" ).val(ui.values[ 0 ] + "€ - " + ui.values[ 1 ] +"€" );
      }
    });
    $( "#amount5" ).val($( "#slider-range5" ).slider( "values", 0 ) +
      "€ - " + $( "#slider-range5" ).slider( "values", 1 ) + "€" );
  });