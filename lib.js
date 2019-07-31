$(document).ready(function(){
    $("#sel").hide();
    $("#t1").click(function(){
        
        $.ajax({
            type:"GET",
            url:"books.json",
            success:function(data){
            
               var output ="<table><thead><tr><th>ID</th><th>Title</th><th>Author</th><th>Cover</th><th>Category</th><th>Price</th></tr></thead>";
             
               for(var i in data){
                 
                     output+="<tr><td>"+data[i].id+"</td>"
                     output+="<td>"+data[i].title+"</td>";
                     output+="<td>"+data[i].author+"</td>";
                     output+="<td><img src='"+data[i].image+"' height='150' width='150'></td>";
                     output+="<td>"+data[i].category+"</td>";
                     output+="<td>"+data[i].price+"</td></tr>";                                    
               }
               output+= "</table>";
               $("#result").html(output);
            }
        });
    });
});