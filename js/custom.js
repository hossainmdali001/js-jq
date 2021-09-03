//TEXT CHANGE
function textChange(){
  document.getElementById('ali').innerHTML="Hello boys welcome to our campus.";

}

//text change
function textChangee(){
  document.getElementById('amar').innerHTML="Welcome to our office";
}

//textchange
function textChangeo(){
  document.getElementById('love').innerHTML=Date();
}

// date 
function textChanges(){
  var data ="Bangladesh is a beautiful country";

  document.getElementById('lov').innerHTML= data.repeat(4);
}


//image change
function firstImg(){
  document.getElementById('sei').src = "images/ali.jpg";
}


function secondImg(){
  document.getElementById('sei').src = "images/ayan.jpg";
}
// alert 
function cAlert(){
  alert('page  loading time out');
}


// jquery start 

$(document).ready(function(){

  
  $('#hide').click(function(){
    $('.hope').hide();
    
    });
    
    $('#show').click(function(){
        $('.hope').show();
        });
    
        $('#show').click(function(){
            $('.hope').show();
            });
    
            $('#h_s').click(function(){
                $('.hope').toggle();
                });  
                
                $('#fade').click(function(){
                    $('.hope').fadeOut();
                    });
                    
                    $('#fadein').click(function(){
                        $('.hope').fadeIn();
                        });
                        
                        $('#fadeboth').click(function(){
                            $('.hope').fadeToggle();
                            });   
                            $('#slideup').click(function(){
                                $('.hope').slideUp();
                                });       
                                $('#slidedown').click(function(){
                                    $('.hope').slideDown();
                                    });      
    
                                    $('#slideboth').click(function(){
                                        $('.hope').slideToggle();
                                        });
                                        $('#addclass').click(function(){ 
                                            $('.hope').addClass('hope_two');
                                            });
    
                                            $('#removeclass').click(function(){ 
                                                $('.hope').removeClass('hope_two');
                                                });
    
                                                $('#bothclass').click(function(){ 
                                                    $('.hope').toggleClass('hope_two');
                                                    });   



})