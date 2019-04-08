
//<!--<meta name="viewport" content="width=device-width, initial-scale=1.0">-->
//<!--<meta http-equiv="X-UA-Compatible" content="ie=edge">-->

// $(function() {
//     var apiUrl = "https://pixabay.com/api/";
//     var form = $(".form");
//     var input = $(".form-search");
//     var gallery = $(".gallery");
//
//     form.on('submit', function(event) {
//         event.preventDefault();
//         var query = input.val();
//         loadImages(query);
//
//     });
//
//     function loadImages(searchQuery) {
//
//         $.ajax({
//             url: apiUrl,
//             method: "GET",
//             data: {
//                 q:searchQuery,
//                 key: "11792766-a6dd693fea2374eff5945cd56"
//             }
//         }).done(function (response) {
//             console.log(response);
//
//             gallery.empty();
//             for (var i = 0; i < response.hits.length; i++) {
//                 var img = $("<img src=" + response.hits[i].largeImageURL + " />");
//                 gallery.append(img);
//
//                 img.css({
//                     "height": "150px",
//                     "width": "150px",
//                     "margin": "2px"
//             });
//             }
//
//         }).fail(function(error) {
//
//         });
//     }
// })
//

$(function () {

    // var apiUrl = "https://api.tenor.com/v1/search";
    //
    // var apiKey = "X4QXQJXLXEWR";

    var apiUrl = "http://version1.api.memegenerator.net//Generators_Search";

    var apiKey = "5a2f367a-1c85-4a3a-bb28-494d5a8da8a4";

    var form = $(".form");
    var input = $(".form__search");
    var gallery = $(".gallery");
    var submit = form.find("button");
    console.log("test");


    form.on("submit", function (event) {
        event.preventDefault();
        submit.attr("disabled", true);
        // submit.addClass("loading");

        var query = input.val();

        console.log(query);
        loadImages(query);
    });

    function loadImages(searchQuery) {
        $.ajax({
            url: apiUrl,
            dataType: "json",
            method: "GET",
            data: {
                q: searchQuery, //q: "query" ? - pokazywal sie tylko jeden obrazek, TMNT
                pageIndex: 0,
                pageSize: 25,
                apiKey: apiKey
            }
        }).done(function (response) {
            console.log(response);
            submit.attr("disabled", false);

            insertImages(response.result);
        }).fail(function (error) {
            console.log(error);
        })
    }

    function insertImages(images) {
        gallery.empty();


        for (var i = 0; i < images.length; i++) {
            var link = $("<a href=" + images[i].itemurl + "></a>";
            var img = $("<img src=" + images[i].imageUrl + " />");

            link.append(img);
            gallery.append(link);

        }

    }

});