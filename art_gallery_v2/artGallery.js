var mRepeat = 0;
var pRepeat = 0;
$(".dropdown-content a").click(function(){
	$(".window").removeClass("hidden");
	switch($(this).text()) {
    case "The Starry Night":
    	$("img").attr("src","https://media.overstockart.com/optimized/cache/data/product_images/VG691-1000x1000.jpg");
    	$("div .col.description p").html("<ul><li>Name: <a href='art.php?a=star'>The Starry Night</a></li><li>Descrption: By Vincent van Gough </li><li>Price: 82 million</li></ul>");
        break;
    case "Mona Lisa":
        $("img").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg");
        $("div.col.description p").html("<ul><li>Name: <a href='art.php?a=mona'>Mona Lisa</a></li><li>Descrption: By Leonardo da Vinci </li><li>Price: 620 million</li></ul>")
        break;
    case "The Last Supper":
        $("img").attr("src","https://cdn.getyourguide.com/img/tour_img-312981-148.jpg");
        $("div.col.description p").html("<ul><li>Name: <a href='art.php?a=supper'>The Last Supper</a></li><li>Descrption: By Leonardo da Vinci </li><li>Price: 23.3 million</li></ul>")
        break;
    case "American Gothic":
        $("img").attr("src","https://ih1.redbubble.net/image.368366508.8095/flat,800x800,075,t.u1.jpg");
        $("div.col.description p").html("<ul><li>Name: <a href='art.php?a=gothic'>American Gothic</a></li><li>Descrption: By Grand Wood </li><li>Price: 6.96 million</li></ul>")
        break;  
    case "Guernica":
        $("img").attr("src","https://upload.wikimedia.org/wikipedia/en/thumb/7/74/PicassoGuernica.jpg/350px-PicassoGuernica.jpg");
        $("div.col.description p").html("<ul><li>Name: <a href='art.php?a=guernica'>Guernica</a></li><li>Descrption: By: Pablo Picasso </li><li>Price: 200 million</li></ul>")
        break; 
    case "Pablo Picasso":
        $("img").attr("src","https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzU0MDk2MTQx/pablo-picasso-9440021-1-402.jpg");
        $("div.col.description p").html("<ul><li>Name: <a href='artist.php?p=pablo'>Pablo Picasso</a></li><li>Descrption: Great artist who actually got a coloured photo </li></ul>")
        break; 
    case "Vincent von Gough":
        $("img").attr("src","http://www.marc-a-turner.com/wp-content/uploads/2015/03/Vincent-van-Gogh.jpg");
        $("div.col.description p").html("<ul><li>Name: <a href='artist.php?p=vonGough'>Vincent Von Gough</a></li><li>Descrption: The artist who shot himself </li></ul>")
        break; 
    case "Leonardo da Vinci":
        $("img").attr("src","https://www.biography.com/.image/t_share/MTIwNjA4NjMzNTM4NTEyMzk2/leonardo-da-vinci-40396-1-402.jpg");
        $("div.col.description p").html("<ul><li>Name: <a href='artist.php?p=daVinci'>Leonardo da Vinci</a></li><li>Descrption: The artist who almost invent tank</li></ul>")
        break;
    case "El Greco":
        $("img").attr("src","https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/El_Greco_-_Portrait_of_a_Man_-_WGA10554.jpg/220px-El_Greco_-_Portrait_of_a_Man_-_WGA10554.jpg");
        $("div.col.description p").html("<ul><li>Name: <a href='artist.php?p=greco'>El Greco</a></li><li>Descrption: Cool Spanish </li></ul>")
        break; 
    case "Masaccio":
        $("img").attr("src","https://upload.wikimedia.org/wikipedia/commons/9/96/Masaccio_Self_Portrait.jpg");
        $("div.col.description p").html("<ul><li>Name: <a href='artist.php?p=masaccio'>Masaccio</a></li><li>Descrption: Died at 28 </li></ul>")
        break;               
    default:
        alert("This painting is not available.");
}
});

$("#submit").click(function(){
	var quantity=$("input[name='quantity']").val();
	var pic = $("input[name='art work']").val();
	var shipping = $("input[name='shipping']").val();
	if(mRepeat === 0){
		$("#d-body").text("The total price for "+pic+" is "+3000*quantity+shipping);
		mRepeat++;
		alert(mRepeat);
	}
	else{
		$("#d-body").text("We are shipping your order to you right now");
	}
});
