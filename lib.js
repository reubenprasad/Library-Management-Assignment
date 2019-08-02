$(document).ready(function(){

    $("#sel").hide();
    $("#t1").click(function(){
        $.ajax({
            type:"GET",
            url:"books.json",
            success:function(data){
            
               var output ="<div class='container'><div class='row'>";
             
               for(var i in data){
                 
                     output+="<div class=' col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4'><div class='card bg-secondary'><div class='card-body text-center'><p class='card-text'>"+data[i].id+"</p>"
                     output+="<p class='card-text>'"+data[i].category+"</p>";
                     output+="<img class='card-img-top' src='"+data[i].image+"' height='150' width='150'>";
                     output+="<p class='card-text'>"+data[i].title+"</p>";
                     output+="<p class='card-text'>"+data[i].author+"</p>";
                     output+="<p class='card-text'>"+data[i].price+"</p></div></div></div>";                                    
               }
               output+= "</div></div>";
               $("#result").html(output);
            }
        });
    });
    $("#category").change(function(){
        var category = $("#category").val();
        if(category == "Category")
        $("#sel").show();
        else
        $("#sel").hide();

        $.ajax({
            type:"GET",
            url:"books.json",
            success:function(data){
            
               var output ="<div class='container'><div class='row'>";
               for(var i in data){
                if (category == data[i].category)
                {
                     output+="<div class=' col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4'><div class='card bg-secondary'><div class='card-body text-center'><p class='card-text'>"+data[i].id+"</p>"
                     output+="<p class='card-text>'"+data[i].category+"</p>";
                     output+="<img class='card-img-top' src='"+data[i].image+"' height='150' width='150'>";
                     output+="<p class='card-text'>"+data[i].title+"</p>";
                     output+="<p class='card-text'>"+data[i].author+"</p>";
                     output+="<p class='card-text'>"+data[i].price+"</p></div></div></div>";
                }
               }
               output+= "</div><br></div>";
               $("#result").html(output);
            }
        });
        
    });

});