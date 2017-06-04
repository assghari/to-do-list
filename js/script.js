
var con=0;

function add() {
	 
	  con++;
				var last_value = document.getElementById("show").innerHTML;
				
             var input = "<p  id='" + con + "' >" +document.getElementById("add").value + "<button class='btn'  onclick='remove(" + con + ")'> remove</button><hr id='" + con + "'></p>";

				document.getElementById("show").innerHTML = input +""+ last_value;
				 
                
            }

			
            function remove(item) {
    
				  
				  document.getElementById(item).remove(); ///Remove tag <p>
				  document.getElementById(item).remove(); ///Remove tag <hr>
            }




