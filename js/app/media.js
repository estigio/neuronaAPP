/*
 * Created by
 * User: Walher smith franco otero
 * Date: 2014-10-13
 * Contact: wfrancootero@gmail.coom | about.me/walthersmith
 */

var API_SOURCE ="http://api.grupocreativoneurona.co/api/";
var SourceImagen = "http://api.grupocreativoneurona.co/files/";

$.support.cors = true;
$.mobile.allowCrossDomainPages = true;
function getGenericList( id ) {
	$.mobile.loading( "show");
	var content = "";	
	$.ajax({
		url: API_SOURCE+"getGenericList?category="+id	,
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
			content  += '<li style="padding-top:5px;" ><a href="#id'+item['id']+'" class="nw">';
				if(item['file']!=null){
					content  += "<img src=\""+SourceImagen+"media/"+item['file']+"\">";
				}else{
					content  += "<img src=\""+'http://img.youtube.com/vi/'+item['ybcode']+'/0.jpg'+"\">";
				}            

            content  += "<h2>"+item['title']+"</h2>"+
                        "<p>"+item["description"].substring(0, 30)+"</p></a>"+
                        "</li>";
		});
		$("#listMedias").append(content);
		$("#listMedias").listview( "refresh" );

		$.mobile.loading( "hide");
	});
}




function getMediapost (id) {
	$.mobile.loading( "show");
	$.mobile.navigate( "#mediaStory",{transition: "slide"} );
	$.ajax({
		url: API_SOURCE+"getmediapost?id="+id,
		async: true,
		format:"jsonp"
	}).done(function (data){
		$.each( data, function ( i, item ){
				$("#title").html(item['title']);			 
				switch(item['typefile']){
					case 'V':
					//alert(item['ybcode']);
					$("#media").html('<iframe width="100%" height="215" src="http://www.youtube.com/embed/'+item['ybcode']+'?rel=0&amp;controls=1&amp;showinfo=0" frameborder="0" allowfullscreen id="myvideo"></iframe>');
					break;
					case 'I':
						if(item['file']!= null){
							$("#media").html(' <img src="'+SourceImagen+"media/"+item['file']+'"  width="100%" id="image"/>');
						}else{
							$("#media").html(' <img src="http://img.youtube.com/vi/'+item['ybcode']+'/0.jpg"  width="100%" id="image"/>');
						}
					break;
					case 'A':
					$("#media").html('<audio controls> <source src="'+SourceImagen+"media/"+item['file']+'" type="audio/ogg">'+
						'tu explorador no soporta la etiqueta audio por favor actualizalo'+
						'</audio>');
					break;
				}
				$("#description").html(item['description']);

		});
		
		$.mobile.loading( "hide");
	});
}
/*
				*/