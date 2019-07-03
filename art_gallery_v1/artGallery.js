
$(".dropdown-content a").click(function(){
	$(".window").removeClass("hidden");
	switch($(this).text()) {
    case "The Starry Night":
    	$("img").attr("src","https://media.overstockart.com/optimized/cache/data/product_images/VG691-1000x1000.jpg");
    	$("div .col.description p").html("<ul><li>Date of production: 1889 </li><li>Media: Oil on canvas </li><li>Dimensions: 73.7 cm × 92.1 cm</li><li>Whereabout: Museum of Modern Art, New York City</li><li>Artist: Vincent van Gogh</li><li>Genre: Landscape painting</li></ul>");
        break;
    case "Mona Lisa":
        $("img").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg");
        $("div.col.description p").html("<ul><li>Date of production: 1503 </li><li>Media: Oil on poplar panel </li><li>Dimensions: 73.7 cm × 92.1 cm</li><li>Whereabout: Museum of Modern Art, New York City</li><li>Artist: Vincent van Gogh</li><li>Genre: Landscape painting</li></ul>")
        break;
    case "The Last Supper":
        $("img").attr("src","https://cdn.getyourguide.com/img/tour_img-312981-148.jpg");
        $("div.col.description p").html("<ul><li>Date of production: 1490 </li><li>Media: Tempera, Mastic, Levkas, Pitch </li><li>Dimensions: 4.6 m x 8.8 m</li><li>Whereabout: Santa Maria delle Grazie</li><li>Artist: Leonardo da Vinci</li><li>Genre: Landscape painting</li></ul>")
        break;
    case "American Gothic":
        $("img").attr("src","https://ih1.redbubble.net/image.368366508.8095/flat,800x800,075,t.u1.jpg");
        $("div.col.description p").html("<ul><li>Date of production: 1930 </li><li>Media: Tempera, Mastic, Levkas, Pitch </li><li>Dimensions: 74 cm x 62 cm</li><li>Whereabout: Royal Academy of Arts</li><li>Artist: Grant Wood</li><li>Genre: Landscape painting</li></ul>")
        break;  
    case "Guernica":
        $("img").attr("src","https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/350px-PicassoGuernica.jpg");
        $("div.col.description p").html("<ul><li>Date of production: 1937 </li><li>Media: Tempera, Mastic, Levkas, Pitch </li><li>Dimensions: 3.49 m x 7.77 m</li><li>Whereabout: Museo Nacional Centro de Arte Reina Sofía</li><li>Artist: Pablo Picasso</li><li>Genre: Landscape painting</li></ul>")
        break; 
    case "Pablo Picasso":
        $("img").attr("src","https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzU0MDk2MTQx/pablo-picasso-9440021-1-402.jpg");
        $("div.col.description p").html("<ul><li>Born: October 25, 1881 </li><li>Died: April 8, 1973 </li><li> Málaga, Spain</li><li>Style: Cubism, Surrealism, Expressionism, Post-Impressionism</li></ul>")
        break; 
    case "Vincent von Gough":
        $("img").attr("src","http://www.marc-a-turner.com/wp-content/uploads/2015/03/Vincent-van-Gogh.jpg");
        $("div.col.description p").html("<ul><li>Born: March 30, 1853 </li><li>Died: July 29, 1890 </li><li> Zundert</li><li>Style: Realism, Post-Impressionism, Modern art, Impressionism</li></ul>")
        break; 
    case "Leonardo da Vinci":
        $("img").attr("src","https://www.biography.com/.image/t_share/MTIwNjA4NjMzNTM4NTEyMzk2/leonardo-da-vinci-40396-1-402.jpg");
        $("div.col.description p").html("<ul><li>Born: April 15, 1452 </li><liDied: May 2, 1519 </li><li> Anchiano, Italy</li><li>Style: High Renaissance, Early renaissance, Renaissance, Italian Renaissance, Florentine painting</li></ul>")
        break;
    case "El Greco":
        $("img").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/El_Greco_-_Portrait_of_a_Man_-_WGA10554.jpg/220px-El_Greco_-_Portrait_of_a_Man_-_WGA10554.jpg");
        $("div.col.description p").html("<ul><li>Born: October 1, 1541 </li><li>Died: April 7, 1614 </li><li>Heraklion, Greece</li><li>Style: Painting, sculpture and architecture</li></ul>")
        break; 
    case "Masaccio":
        $("img").attr("src","https://upload.wikimedia.org/wikipedia/commons/9/96/Masaccio_Self_Portrait.jpg");
        $("div.col.description p").html("<ul><li>Born: December 21, 1401 </li><li>Died: 1428 </li><li>San Giovanni Valdarno, Italy</li><li>Style: Painting, Fresco</li></ul>")
        break;               
    default:
        alert("This painting is not available.");
}
});
