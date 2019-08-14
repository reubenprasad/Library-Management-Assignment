$(document).ready(function(){

    $("#sel").hide();
    $("#reg").hide();
    $("#t2").click(function(){
        $("#result").show();
        $("#login").hide();
        $("#log").hide();
        $("#sel").hide();
        $("#reg").hide();
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
        $("#result").show();
        $("#login").hide();
        $("#log").hide();
        $("#sel").hide();
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

    $("#t1").click(function(){
        $("#result").hide();
        $("#login").show();
        $("#log").show();
        $("#sel").hide();
        $("#reg").hide();
    });

    $("#lgbtn").click(function(){
        var un = $("#un").val();
        var pw = $("#pw").val();
        var regexUn = /^[a-zA-Z ]{1,32}$/;
        var regexPw = /^[a-zA-Z0-9]{1,32}$/;
        if( (un.length!=0 && regexUn.test(un)) && (pw.length!=0 && regexPw.test(pw)) )
        {
            $("#result").show();
            $("#login").hide();
            $("#user").text("Logged in as : "+un);
            $("#user").show();
        }
        else
        {   if(un.length == 0 || pw.length == 0)
            alert("Username and Password cannot be empty");
            if((!regexUn.test(un)) || (!regexPw.test(pw)) )
            alert("Please enter Username and Password in the correct format")
        }
    });

    $("#rgbtn").click(function(){
        var un = $("#unr").val();
        var pw = $("#pwr").val();
        var mb = $('#mr').val();
        var em = $('#er').val();
        var nm = $('#nr').val();
        var cpw = $("#cpwr").val();
        var regexUn = /^[a-zA-Z ]{1,32}$/;
        var regexPw = /^[a-zA-Z0-9]{1,32}$/;
        var regexMb = /^[6789]\d{9}$/;
        var regexEm = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        if( (un.length!=0 && regexUn.test(un)) && (pw.length!=0 && regexPw.test(pw)) && pw == cpw && mb.length!=0 && em.length!=0 && nm.lenght!=0 && regexUn.test(nm) && regexMb.test(mb) && regexEm.test(em))
        {
            alert("Successfully Registered your account");
            $("#login").show();
            $("#log").show();
            $("#reg").hide();
            
        }
        else
        {   if(un.length == 0 || pw.length == 0 || nm.length == 0)
            alert("Name/Username/Password cannot be empty");
            else if(mb.length == 0 || em.length == 0)
            alert('Mobile/Email cannot be empty');
            else if((!regexUn.test(nm)))
            alert("Please enter Name in the correct format")
            else if((!regexUn.test(un)))
            alert("Please enter Username in the correct format")
            else if((!regexPw.test(pw)))
            alert("Please enter Password in the correct format")
            else if((!regexMb.test(mb)))
            alert("Please enter Mobile Number in the correct format");
            else if((!regexEm.test(em)))
            alert("Please enter a valid Email address");
            else if(!(pw == cpw))
            alert("Confirmed Password does not match");
            else 
            alert("Please enter the data in the correct format");
        }
    });

    $("#t3").click(function(){
        $("#result").hide();
        $("#sel").hide();
        $("#reg").show();
        $("#r").show();
        $("#log").hide();
        $("#login").hide();
        $("#user").hide();

    });

});