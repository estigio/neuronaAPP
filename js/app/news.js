/*
 * Created by
 * User: Walher smith franco otero
 * Date: 2014-10-13
 * Contact: wfrancootero@gmail.coom | about.me/walthersmith
 */

var API_SOURCE ="http://192.168.1.4:81/ApiNeurona/api/";
var SourceImagen = "http://192.168.1.4:81/ApiNeurona/files/"

$.support.cors = true;
$.mobile.allowCrossDomainPages = true;
function listNews() {
	$.mobile.loading( "show");
	var content = "";	
	$.ajax({
		url: API_SOURCE+"newsList/",
		type:'GET',
		async: true,
		format:"jsonp",
		crossDomain: true,
		error: function(jqXHR, textStatus, errorThrown){
                       console.log("hi");
                       console.log(jqXHR);
                       console.log(textStatus);
                       console.log(errorThrown);
                        //do stuff
                },
        cache:false

	}).done( function (data){
		
		$.each( data, function ( i, item ){
			content  += '<li                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                class="nw"><a href="#id'+item['id']+'" >'+
                            "<img src=\""+SourceImagen+"news/"+item['img']+"\">"+
                        "<h2>"+item['title']+"</h2>"+
                        "<p>"+item["description"].substring(0, 30)+"</p></a>"+
                        "</li>";
		});
		$("#listnews").append(content);
		$("#listnews").listview( "refresh" );

		$.mobile.loading( "hide");
	});
}

function cargarNoticia (id) {
	$.ajax({
		url: API_SOURCE+"news?id="+id,
		async: true,
		format:"jsonp"
	}).done(function (data){
		$.each( data, function ( i, item ){
				$("#title").html(item['titulo']);
				$("#image").attr("src",SourceImagen+item['pic']);
				$("#description").html(item.Descripcion);
		});

	});
}

