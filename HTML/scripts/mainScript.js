var loupe = document.querySelector('.rechercheIcon');
var input = document.querySelector('.saisir');



loupe.addEventListener('click', function(){
  input.style.display='block';
});





//Filters;

  var images = document.querySelector('.imgMovie');
  var btnGenre = document.querySelectorAll('.btnGenre');
  var all = document.querySelector('.btnAll');
  for (i = 0; i < data.films.length; i++) {
    images.innerHTML +=
    '<div class="imageContainer">'+
      '<div class="imageTitleContainer">'+
        '<img class="lesImages" src="' + data.films[i].screenshot + '">'+
        '<div class="imageContenus">'+
          '<h1 class="imageMovieTitle">'+ data.films[i].title +'</h1>'+
          '<img class="imagePlayIcon" src="img/play-button.png">'+
        '</div>'+
     '</div>'+
    '</div>';
  }



  var images2 = document.querySelectorAll('.imageContainer');
  for (var i = 0; i < btnGenre.length; i++) {
    btnGenre[i].addEventListener('click', function() {
      for (var i = 0; i < data.films.length; i++) {
        if (data.films[i].category !== this.dataset.genre) {
          images2[i].style.display = 'none';
        } else {
          images2[i].style.display = '';
        }
      }
    })
  }

  all.addEventListener('click', function() {
    for (var i = 0; i < data.films.length; i++) {
      if (data.films.category === this.dataset.gentre) {
        images2[i].style.display='block';
      }
    }
  });
  //FiltersEnd



  //Scroll;
  $(".autoScroll").click(function() {
    $('html,body').animate({
        scrollTop: $("#gotoSectionTitle").offset().top
      },
      'slow');
  });



  //Movies;

  var title=document.querySelectorAll('.imageMovieTitle');
  var modal = document.querySelector('.modal');
  var overlay = document.querySelector('.overlay');
  var content = document.querySelector('.content');
  var videoPlayer = document.querySelector('.videoPlayer');

  for (let i = 0; i < title.length; i++) {
    title[i].addEventListener('click', function(){

    });
  }
  for (let i = 0; i < data.films.length; i++) {
    title[i].addEventListener('click', function(){
      modal.style.display ='block';

      if (title[i].textContent === data.films[i].title) {

        var modalContentSrc = data.films[i].src;
        var modalContentMovie_title = data.films[i].title;
        var modalContentDuration = data.films[i].duration;
        var modalContentAuthor = data.films[i].author;
        var modalContentDescription = data.films[i].description;
        var modalContentYear = data.films[i].year;
        var modalContentRating = data.films[i].rating;


       videoPlayer.innerHTML ='<video ontimeupdate="update()" class="movie" src="' + modalContentSrc + '"></video>';

        content.innerHTML ='<div class="videoModal">' +
          '<div class="modalInformation">' +
          '<div class="movie_title">' + modalContentMovie_title + '</div>' +
          '<div class="duration">' + modalContentDuration + '</div>' +
          '<div class="author">' +'Realisator : '+ modalContentAuthor + '</div>' +
          '<div class="description">' + modalContentDescription + '</div>' +
          '<div class="year">' +'Year : ' + modalContentYear + '</div>' +
          '<div class="rating">' +'Rating : '  + modalContentRating +'/5 '+ '</div>' +
          '</div>';

          movie = document.querySelector('.movie');
          movie.addEventListener('dblclick',function(){
            fullscreen();
          })
      }
    });


    overlay.addEventListener('click', function() {
      modal.style.display = '';
      content.innerHTML ='';
      movie.pause();
      movie.currentTime = 0;
    });
  }

  window.addEventListener('keyup', function(event){
      if (event.which === 27){
          modal.style.display = '';
            movie.pause();
            movie.currentTime = 0;
      }

  });



  //Movies
