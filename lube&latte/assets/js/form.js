// Ajax code to submit appointment form
$('form#appointmentForm').submit(function(){
  $.ajax({
    type: "POST",
    url: "handle_appointment5.php",
    data: dataString,
    cache: false,
    success: function(result){
     // Simply give your modal an id something like "thankyouModal"
     $("#thankyouModal").modal('show');
   }
  });
});

// function to submit newsletter form
$( "form#newsletterForm" ).submit( function( event ) {
  //prevent page from reloading on form submit
  event.preventDefault();
  //newsletter = $(this).serialize();
  //console.log(newsletter);
  var data = {
    //name: $("#form_name").val(),
    email: $("#signUp").val()
  };
  $.ajax({
    type: "POST",
    url: "newsletter.php",
    data: data,
    success: function(){
      $("#newsletterModal .modal-body").addClass("alert-success");
      $("#newsletterForm").hide();
      $("#newsletterSuccess").removeClass('hidden');
    }
  });
});
