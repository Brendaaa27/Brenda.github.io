
window.onload = function(){
    console.log('Hello World');

    var myName = "Yangjing Liu"
    console.log(myName)

    function myFunction()
    {
        alert("Hello this is Brenda!");
    }

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
        $(".profileimg-wrapper").mouseover(function () {
            $(".profileimg-wrapper p").
            });
    });

    }




}
