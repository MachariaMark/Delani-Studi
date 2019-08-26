$(document).ready(function() {
    $('#des').click(function() {
        $('#des').toggle();
        $('#destext').toggle();
    });
});
$(document).ready(function() {
    $('#destext').click(function() {
        $('#des').toggle();
        $('#destext').toggle();
    });
});
$(document).ready(function() {
    $('#dev').click(function() {
        $('#dev').toggle();
        $('#devtext').toggle();
    });
});
$(document).ready(function() {
    $('#devtext').click(function() {
        $('#dev').toggle();
        $('#devtext').toggle();
    });
});
$(document).ready(function() {
    $('#pro').click(function() {
        $('#pro').toggle();
        $('#protext').toggle();
    });
});
$(document).ready(function() {
    $('#protext').click(function() {
        $('#pro').toggle();
        $('#protext').toggle();
    });
});



$(document).ready(function(){
    $(".work1").mouseover(function() {
      $("#WORK1").show();
    }).mouseout(function(){
      $("#wORK1").hide();
 });
});
$(document).ready(function(){
    $(".work2").mouseover(function() {
      $("#WORK2").show();
    }).mouseout(function(){
      $("#WORK2").hide();
 });
});
$(document).ready(function(){
    $(".work3").mouseover(function() {
      $("#WORK3").show();
    }).mouseout(function(){
      $("#WORK3").hide();
 });
});
$(document).ready(function(){
    $(".work4").mouseover(function() {
      $("#WORK4").show();
    }).mouseout(function(){
      $("#WORK4").hide();
 });
});
$(document).ready(function(){
    $(".work5").mouseover(function() {
      $("#WORK5").show();
    }).mouseout(function(){
      $("#WORK5").hide();
 });
});
$(document).ready(function(){
    $(".work6").mouseover(function() {
      $("#WORK6").show();
    }).mouseout(function(){
      $("#WORK6").hide();
 });
});
$(document).ready(function(){
    $(".work7").mouseover(function() {
      $("#WORK7").show();
    }).mouseout(function(){
      $("#WORK7").hide();
 });
});
$(document).ready(function(){
    $(".work8").mouseover(function() {
      $("#WORK8").show();
    }).mouseout(function(){
      $("#WORK8").hide();
 });
});


//Business Logic
$("form").submit(function() {
    var name= $("input#name").val();
    alert("We've received your message "+name+". Thank you for contacting us");
    event.preventDefault();
  });
});