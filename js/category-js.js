// document.querySelector(".cta-open").addEventListener("click", function (){
//     document.querySelector(".overlay").style.display = "block";
// })

// document.querySelector(".modal-close-button").addEventListener("click", function (){
//     document.querySelector(".overlay").style.display = "none";
// })
for(var i=7; i<($(".tile.mg-top").length); i++) {
    $(".tile.mg-top")[i].style.display = "none";
}

// if(document.querySelectorAll(".show-all:not(.show-less)").length>0) {
//     $(".show-all:not(.show-less)").click(function() {
//         for(var i=6; i<($(".tile.mg-top").length); i++) {
//             $(".tile.mg-top")[i].style.display = "block";
//         }
//         $(".show-all:not(.show-less)")[0].innerText = "Show Less";
//         $(".show-all:not(.show-less)").removeClass( "show-all" ).addClass( "show-less" );
//     });
// }
// else {
//     $(".show-less:not(.show-all)").click(function() {
//         for(var i=6; i<($(".tile.mg-top").length); i++) {
//             $(".tile.mg-top")[i].style.display = "none";
//         }
//         $(".show-less:not(.show-all)")[0].innerText = "Show More";
//         $(".show-less:not(.show-all)").removeClass( "show-less" ).addClass( "show-all" );
//     });
// }

$(".show-all,.show-less").click(function() {
    if(document.querySelectorAll(".show-all:not(.show-less)").length>0){
        for(var i=7; i<($(".tile.mg-top").length); i++) {
            $(".tile.mg-top")[i].style.display = "flex";
        }
        $(".show-all:not(.show-less)")[0].innerText = "Show Less";
        $(".show-all:not(.show-less)").removeClass( "show-all" ).addClass( "show-less" );
    }
    else {
        for(var i=7; i<($(".tile.mg-top").length); i++) {
            $(".tile.mg-top")[i].style.display = "none";
        }
        $(".show-less:not(.show-all)")[0].innerText = "Show More";
        $(".show-less:not(.show-all)").removeClass( "show-less" ).addClass( "show-all" );
    }
});


$(".cta-open").click(function() {
    $(".overlay").show("slow");
 });

$(".modal-close-button").click(function() {
    $(".overlay").hide("slow");
});



