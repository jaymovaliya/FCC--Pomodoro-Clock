$(document).ready(function(){
  var inter;
   var time = parseInt($("#times").text());
    time*=60;
  var btime = parseInt($("#timeb").text());
    btime*=60;
  $("#minusb").click(function(){
    var t = parseInt($("#timeb").text());
    if(t>1){
      btime = (t*60)-60;
      t-=1;
      $("#timeb").html(t);
    }
    });
  $("#minuss").click(function(){
    var t = parseInt($("#times").text());
    if(t>1){
      time=(t*60)-60;
      t-=1;
      $('#clock').html(t+':00');
      $("#times").html(t);
    }
    });
  $("#plusb").click(function(){
    var t = parseInt($("#timeb").text());
    btime = (t*60)+60;
      t+=1;
      $("#timeb").html(t);
    });
  $("#pluss").click(function(){
    var t = parseInt($("#times").text());
    $('#clock').html((t+1)+':00');
    time=(t*60)+60;
      t+=1;
      $("#times").html(t);
    });
  $("#start").click(function(){
    inter = setInterval(function(){
      if(time>0){
      time-=1;
      updateTime(time);
      }
      else{
        $("#lbl").html('Break Time');
        if(btime>0){
        btime-=1;
        updateTime(btime);
        }
        else{
          $("#lbl").html('Session Time');
          time = parseInt($("#times").text());
          time*=60;
          btime = parseInt($('#timeb').text());
          btime*=60;
        }
      }
    },1000);
  });
  $("#stop").click(function(){
    clearInterval(inter);
  });
  $('#reset').click(function(){
    var rest = parseInt($("#times").text());
    clearInterval(inter);
    $("#clock").html(rest+':00');
    time=rest*60;
  });
  
});
function updateTime(time){
  var min = Math.floor(time/60);
  var sec = time%60;
  var clkdis = min+':'+sec;
  $("#clock").html(clkdis);
}