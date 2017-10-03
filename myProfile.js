
window.onload = function(){
    console.log('Hello World');

    var myName = "Yangjing Liu"
    console.log(myName)

    alert("Hello this is Brenda!");


    document.getElementById("myName").onclick = function() {myFunction()};
    function myFunction() {
        document.getElementById("myName").innerHTML = "刘阳婧";
    }

    $(Document).ready(function(){
        $("h2").click(function(){
            $(".h2p").toggle(1000);
        });
    });

    $(document).ready(function() {
        $(".profileimg-wrapper").mouseover(
            function(){
                $(".web").show();
            }
        )
        $(".profileimg-wrapper").mouseout(
            function(){
                $(".web").hide();
            }
        )
    });

    //modal pop up
    var modal = document.getElementsByClassName("modal");
    var btn = document.getElementsByTagName("button");
    btn.onclick = function(){
        modal.style.display = "block";
    }
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }


    /* // Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}  */

    }





