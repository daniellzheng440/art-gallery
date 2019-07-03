<?php
echo "<style>
table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
}
</style>";
$person = $_GET['p'];
switch($person){
	case "pablo": $pic="https://www.biography.com/.image/t_share/MTE1ODA0OTcxNzU0MDk2MTQx/pablo-picasso-9440021-1-402.jpg";
				  $born="October 25, 1881"; $die="April 8, 1973";$loc="Mougin, France";
				  $genre="Cubism, Surrealism, Expressionism, Post-Impressionism";$famous="Guernica";
				  break;
	case "vonGough": $pic="https://www.biography.com/.image/t_share/MTM3NTk5OTY0Mjc5NzQzNzMw/vincent_van_gogh_self_portrait_painting_musee_dorsay_via_wikimedia_commons_promojpg.jpg";
					 $born="March 30, 1853";$die="July 29, 1890";$loc="Auvers-sur-Oise, France";
					 $genre="Realism, Post-Impressionism, Modern Art";$famous="The Starry Night";
					 break;
	case "daVinci": $pic="https://www.biography.com/.image/t_share/MTIwNjA4NjMzNTM4NTEyMzk2/leonardo-da-vinci-40396-1-402.jpg";
					 $born="April 15, 1452";$die="May 2, 1519";$loc="Clos Lucé, Amboise, France";
					 $genre="High Renaissance,Early renaissance, Renaissance, Italian Renaissance, Florentine painting";$famous="Mona Lisa, The Last Supper";
					 break;
	case"greco": $pic="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/El_Greco_-_Portrait_of_a_Man_-_WGA10554.jpg/1200px-El_Greco_-_Portrait_of_a_Man_-_WGA10554.jpg";
					 $born="October 1,1541";$die="April 7,1614";$loc="Toledo, Spain";
					 $genre="Mannerism, Spanish Renaissance, Renaissance";$famous="View of Toledo";
					 break;
	case"masaccio": $pic="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Masaccio_Self_Portrait.jpg/220px-Masaccio_Self_Portrait.jpg";
					 $born="December 21,1401";$die="1428";$loc="Rome, Italy";
					 $genre="Donatello, Filippo Brunelleschi, Giotto, Masolino da Panicale";$famous="Holy Trinity";
					 break;
	default:
        echo "This painting is not available.";
}
echo "<table><tr>";
echo "<td><img src=$pic alt='pablo picasso'></td>";
echo "<td>";
echo "	<ul>";
echo "		<li>Date of birth: $born</li>";
echo "		<li>Date of Death: $die</li>";
echo "		<li>Place of Living: $loc</li>";
echo "		<li>Genre: $genre</li>";
echo "		<li>Famous Work: $famous</li>";
echo "</td></tr></table>";
?>