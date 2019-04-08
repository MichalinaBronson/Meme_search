$(function () {


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
                q: searchQuery,
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
            var link = $("<a href=" + images[i].itemurl + "></a>");
            var img = $("<img src=" + images[i].imageUrl + " />");

            link.append(img);
            gallery.append(link);

        }

    }

});