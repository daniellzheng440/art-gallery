<?php
$art = $_GET['a'];
switch($art){
	case "star": $title="The Starry Night"; $url="https://imgc.artprintimages.com/img/print/print/vincent-van-gogh-starry-night-c-1889_a-l-3623135-0.jpg?w=550&h=550";
				 $date="June 1889"; $colour="blues, blacks, yellows, greens, whites";$dim="74cm * 92cm";
				 $loc="Museum of Modern Art";$name="Vincent van Gogh";$price="82000000";$genre="Post-Impressionism";
				 break;
	case "mona":$title="Mona Lisa"; $url="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/687px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg";
				$date="1503"; $colour="sfumato";$dim="73.7cm * 92.1cm";
				$loc="Museum of Modern Art"; $name="Leonardo da Vinci";$price="620000000";$genre="Portrait";
				break;
	case "supper":$title="The Last Supper"; $url="http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/ultima_cena_-_da_vinci_5_1.jpg?itok=247jYkTy&resize=1100x619";
				$date="1490"; $colour="tempera, mastic,pitch, levkas";$dim="4.6m * 8.8m";
				$loc="Santa Maria delle Grazie"; $name="Leonardo da Vinci";$price="23300000";$genre="Christian art";
				break;
	case "gothic":$title="American Gothic"; $url="https://caimages.co.uk/F12/F12X8475_PRINT%20ONLY%20_%20UNFRAMED.jpg";
				$date="1930"; $colour="various colours";$dim="74cm * 62cm";
				$loc="Royal Academy of Arts"; $name="Grant Wood";$price="6960000";$genre="American Gothic Fiction";
				break;
	case "guernica":$title="Guernica"; $url="https://thefemalegazers.files.wordpress.com/2017/02/guernica.jpg?w=1600";
				$date="1937"; $colour="black, white";$dim="3.49m * 7.77m";
				$loc="Museo Nacional Centro de Arte Reina Sofia"; $name="Pablo Picasso";$price="200000000";$genre="History Painting";
				break;
	default:
        echo "This painting is not available.";
}
echo "
<html>
	<head>
		<title> Art Gallery</title>
		<meta charset='UTF-8'>
		<link rel='stylesheet' href='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css'>
		<script defer src='https://use.fontawesome.com/releases/v5.0.8/js/all.js'></script>
		<script type='text/javascript' src='https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.js'></script>
		<script src='https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js'></script>
	</head>
	<style>
	table, th, td {
		border: 1px solid black;
		border-collapse: collapse;
	}
	</style>
	<body>
		<div align='center'>
		$title
					<button type='button' data-toggle='modal' data-target='#myModal'><i class='fas fa-cart-plus'></i></button>
			</div>

			<div class='modal fade' id='myModal' role='dialog'>
				<div class='modal-dialog'>
    
					<div class='modal-content'>
						<div class='modal-header'>
							<button type='button' class='close' data-dismiss='modal'>&times;</button>
							<h4 class='modal-title'>Purchase Art</h4>
						</div>
						<div class='modal-body' id='php_d-body'>
							<p>Quantity:<input type='number' name='quantity'></p>
							<input type ='radio' name='shipping' value=0>Two weeks free shipping 
							<input type ='radio' name='shipping' value=20>Three days shipping
							<input type ='radio' name='shipping' value=50> One day shipping
							<button id='php_submit'>Submit</button>
						</div>
						<div class='modal-footer'>
							<button type='button' class='btn btn-default' data-dismiss='modal'>Close</button>
						</div>
					</div>
      
				</div>
			</div>
";
	echo "<table><tr>";
	echo "<td><img src=$url></td>";
	echo "<td>";
	echo "	<ul>";
	echo "		<li>Date of Creation: $date</li>";
	echo "		<li>Type of colour: $colour</li>";
	echo "		<li>Dimension: $dim</li>";
	echo "		<li>Location: $loc</li>";
	echo "		<li>Artist Name: $name</li>";
	echo "		<li>Price: $price</li>";
	echo "		<li>Genre: $genre</li>";
	echo "</td></tr></table>";
	echo"<script type='text/javascript'>
			var pRepeat = 0;
			$('#php_submit').click(function(){
				var quantity=$('input[name=quantity]').val();
				var shipping = $('input[name=shipping]:checked').val();
				if(pRepeat === 0){
					$('#php_d-body').text('The total price is '+quantity*$price+shipping);
					pRepeat++;
				}
				else{
					$('#php_d-body').text('We are shipping your order to you right now');
				}
				
			});
		 </script>";
	echo"</body>";
	echo"</html>";
?>