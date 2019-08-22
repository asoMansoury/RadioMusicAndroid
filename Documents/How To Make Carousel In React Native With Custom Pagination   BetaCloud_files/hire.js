var uisteps = [
    [
        
    ]
]
function hireSuccess(){
    $("#hireSubmit").removeClass("btn-big");

    $("#first-name").fadeOut();
    $("#email").fadeOut();
    $("#mobile").fadeOut(function(){
        $("#hireSubmit").html('Thanks for contacting!<hr><p>We will revert ASAP, <br/>with a plan for your project.</p>');
    });

}
$(function(){
  
    $(".mazical_checkbox_container li").click(function(){
        var selection = $(this).data("selection");
        window.requirement = selection;
        var parent = $(this).parent();
        $("#pills-tabContent").fadeOut(function(){
            $("#pills-tabContent-step2").fadeIn();
            $(".mazical-tab").hide();
            $("#selectionInfo").text("Build Your "+selection+" "+parent.data("type"));

        });
    })

    $("#reselectHire").click(function(){
        $("#pills-tabContent-step2").fadeOut(function(){
            $("#pills-tabContent").fadeIn();
            $(".mazical-tab").show();

        });
    });

    $(".hire-form form").submit(function(e){
        e.preventDefault();
        var name = $("#first-name").val();
        var email = $("#email").val();
        var mobile = $("#mobile").val();

        var text = "build my"+$("#selectionInfo").text().substr(10);
        var message  =  "I'm "+name+" and I need to "+text+", my contact number is: "+mobile;

        $("#hireSubmit").html('Sending...');
        $("#hireSubmit").attr('disabled',true);


        
        $.ajax({
            'url':APP_URL+'/api/contacts',
            'type':'post',
            'data':{
                'name':name,
                'email':email,
                'mobile':mobile,
                'requirement':window.requirement,
                'message':message,
                'referer':refUrl
            },
            error:function(){
                contactError("Failed to contact, network error");
                $("#hireSubmit").html('Finish');
                $("#hireSubmit").attr('disabled',false);
        
            },
            success:function(res){
                dataLayer.push({'event':'contact-submitted','conversionValue':100});

                if(res.status=="success"){

                    hireSuccess();

                    dataLayer.push({'event':'contact-success','conversionValue':100});
                    toastr.success("We have received your message, will reply asap!");
                }else if(res.status=="error"){
                    
                    $("#hireSubmit").html('Finish');
                    $("#hireSubmit").attr('disabled',false);
    
                    dataLayer.push({'event':'contact-error'});
                    contactError(res.data);
                }else{

                    $("#hireSubmit").html('Finish');
                    $("#hireSubmit").attr('disabled',false);
    
                    dataLayer.push({'event':'contact-error'});
                    contactError("Failed to contact, server error");
                }
            }
        })


    })

})