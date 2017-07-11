// Ajax code to submit appointment form
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

// Ajax code to submit newsletter form
$('form#newsletterForm').submit(function(event) {
  $.ajax({
          type: "POST",
          //url: "handle_newsletter7.php",
          url:'',
          data: dataString,
          cache: false,
          success: function(result){
            $("#newsletterModal .modal-body").addClass("alert-success");
           $("#newsletterForm").hide();
           $("#newsletterSuccess").show();
         }
  });
});
