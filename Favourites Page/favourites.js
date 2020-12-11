// Wrap every letter in a span
 var textWrapper = document.querySelector('.ml2');
 textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

 anime.timeline({loop: true})
   .add({
     targets: '.ml2 .letter',
     scale: [4,1],
     opacity: [0,1],
     translateZ: 0,
     easing: "easeOutExpo",
     duration: 950,
     delay: (el, i) => 70*i
   }).add({
     targets: '.ml2',
     opacity: 0,
     duration: 1000,
     easing: "easeOutExpo",
     delay: 1000
   });

   function displayMovies() {
     var xhttp = new XMLHttpRequest();
     xhttp.onreadystatechange = function() {
     if (xhttp.readyState == 4 && xhttp.status == 200) {
        processJSONmovies(xhttp);
      }
   };

   xhttp.open("GET","https://gist.githubusercontent.com/rahul7501/e45f36a1911a1e38bcff8b9751d3323a/raw/753f6d6819bb35134ba51b9146c4f20fe7d965fc/movies.json",true);
   xhttp.send();
  }

  function processJSONmovies(xhttp)
  {
      var JSONtext=xhttp.responseText;
      var JSONobj=JSON.parse(JSONtext);
      displaymovie(JSONobj);
  }

  function displaymovie(JSONobj)
  {
      var table="<table border='1'>";
      table+="<tr><th colspan='2' style='font-size:50px; font-family:Georgia;'>Favourite Movies</th></tr>";
      table+="<tr><td colspan='2'><em>Click on the image for trailers, ratings, critic reviews and more!!</em></td></tr>";
      for(var i=0; i<JSONobj.MOVIES.length; i++)
      {
        table+="<tr>";
        table+="<td width=30%><a href='"+JSONobj.MOVIES[i].LINK+"' target='_blank'><img src='"+JSONobj.MOVIES[i].IMAGE + "'/></a>"+"<br/>"+"<span style='font-family:Gabriola;font-size:28px;'>"+JSONobj.MOVIES[i].NAME+", "+JSONobj.MOVIES[i].YEAR+"</span></td>";
        table+="<td><span style='padding:10px;font-family:Gabriola;font-size:22px;'>"+ JSONobj.MOVIES[i].DESCRIPTION+"</span></td>";
        table+="</tr>";
      }
        table+="</table>";
        document.getElementById("table").innerHTML = table;
  }


  function displayShows()
  {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
     processJSONshows(xhttp);
      }
  };
    xhttp.open("GET","https://gist.githubusercontent.com/rahul7501/7b587fcca3c08042c3f7d9d94ba8a283/raw/eefcce88656c464cff2c15a72e44ead98882c209/shows.json",true);
    xhttp.send();
  }

  function processJSONshows(xhttp)
  {
   var JSONtext=xhttp.responseText;
   var JSONobj=JSON.parse(JSONtext);
   displayshow(JSONobj);
  }

  function displayshow(JSONobj)
  {
   var table="<table border='1'>";
   table+="<tr><th colspan='2' style='font-size:50px; font-family:Georgia;'>Favourite TV Shows</th></tr>";
   table+="<tr><td colspan='2'><em>Click on the image for trailers, ratings, critic reviews and more!!</em></td></tr>";
   for(var i=0; i<JSONobj.SHOWS.length; i++)
   {
     table+="<tr>";
     table+="<td width=30%><a href='"+JSONobj.SHOWS[i].LINK+"' target='_blank'><img src='"+JSONobj.SHOWS[i].IMAGE + "'/></a>"+"<br/>"+"<span style='font-family:Gabriola;font-size:28px;'>"+JSONobj.SHOWS[i].NAME+", "+JSONobj.SHOWS[i].YEAR+"</span></td>";
     table+="<td><span style='padding:10px;font-family:Gabriola;font-size:22px;'>"+ JSONobj.SHOWS[i].DESCRIPTION+"</span></td>";
     table+="</tr>";
   }
     table+="</table>";
     document.getElementById("table").innerHTML = table;
  }
