$(function() {

    $(document).ready(function(){
    
        $(".pagination").customPaginate({
        
            itemsToPaginate : ".post",
			
			activeClass : "active-class"
        
        });
    
    });

    var count = 0;

    $('#do-search').on('click', function() {


        var pathInput = $('#title').val();
        var path = 'http://www.omdbapi.com/?s=' + pathInput;


        $.ajax({

            type: 'GET',
            url: path,

            success: function(path) {
                if (count === 0) {
                    $.each(path, function(i, movies) {
                        $.each(movies, function(index, item) {


                            /*$('#movie').append('<li><strong>Title: </strong>' + item.Title + '</li>',
                                '<li><strong>Type: </strong>' + item.Type + '</li>',
                                '<li><strong>Year: </strong>' + item.Year + '</li>',
                                '<li><strong>IMDB-ID: </strong>' + item.imdbID + '</li>',
                                '<li><img src = ' + item.Poster + '</li>');*/

                                $('.list-of-posts').append('<div class="post"><p><strong>Title: </strong>' + item.Title + '</p>\
                                <p><strong>Type: </strong>' + item.Type + '</p>\
                                <p><strong>Year: </strong>' + item.Year + '</p>\
                                <p><strong>IMDB-ID: </strong>' + item.imdbID + '</p>\
                                <p><img src = ' + item.Poster + '</p></div>');

                            count++;


                        });

                    });
                }
            }

        });


    });

    $('#title').on('click', function() {
        $('.list-of-posts').empty();
        $('#title').val("");
        count = 0;
    });
});
