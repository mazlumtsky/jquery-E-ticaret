$(document).ready(function(){

    $("#btn-giris").click(function(){
        $("#myUye").modal();
    });
});
$(function(){
    $("#next-btn").click(function(){
        var email,password;
        email=$("#user-email").val();
        password=$("#user-password").val();

       if(email==""){
        $("#email").html("Email alanı boş geçilemez");
       }
      if(password==""){
        $("#password").html("Şifre alanı boş geçilemez");
       }


    })
})
$(document).ready(function(){
    $("#btn-uye").click(function(){
        $("#myuye").modal();
    });
});

$(function(){
    $("#btn-submit").click(function(){
        var email,phone,password,repassword;
        email=$("#user-email").val();
        phone=$("#user-phone").val();
        password=$("#user-password").val();
        repassword=$("#reuser-password").val();
       
        if(email==""){
            $("#vali-email").html("Email alanı boş geçilemez");
         }
         if(phone==""){
            $("#vali-phone").html("Telefon alanı boş geçilemez"); 
         }
         if(password==""){
            $("#vali-password").html("Şifre alanı boş geçilemez");
         }
         if(repassword==""){
           $("#vali-repassword").html("Şifre tekrar giriniz");
         }else if(password!==repassword){
            $("#vali-repassword").html("Şifreler birbirine uyuşmuyor");
         }
     });
    });

 
$(function(){
    $("#sifre-unuttum").click(function(){
        $("#mySifreHatırlat").modal();
    });
});

$(function(){
    $("#sifre-unuttumm").click(function(){
        $("#mySifreHatırlat").modal();
    });
});
$(function(){
    $("#sepet").click(function(){
        $("#sepet-id").modal();
    });
});

$(function(){
    $("#sepetim").click(function(){
        $("#sepet-id").modal();
    });
});

$(function(){
    $("#firma").click(function(){
        $("#modelId").modal();
    });
});

$(function(){
    $("#ürün-silme").click(function(){
        $("#modelId2").modal();
    });
});

$(function(){
    $("#sil").click(function(){
       $("#Mazlum").remove()
    });
});

$(function(){
    $("#güncellemee").click(function(){
       $("#güncelleme").modal();
    });
});

//  button back top
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop()>100){
            $("#backtopbutton").fadeIn();
        }else{
            $("#backtopbutton").fadeOut();
        }
    })
    $("#backtopbutton").click(function (){
        $("body,html").animate({scrollTop:0},1000);
    })
})


$(function() {
    var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $("#tags").autocomplete({
      source: availableTags
    });
  });


  $(":text").focusin(function(){
    $(this).css("background-color","#ccc").css("color","white")
  })
  $(":text").blur(function(){
    $(this).css("background-color","#fff").css("color","black")
  })



