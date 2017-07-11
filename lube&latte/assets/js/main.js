// Ajax code to submit appointment form
$.ajax({
        type: "POST",
        url: "handle_appointment5.php",
        data: dataString,
        cache: false,
        success: function(result){
         // Simply give your modal an id something like "thankyouModal"
         $("#thankyouModal").modal('show')
       }
});

// Ajax code to submit newsletter form
$.ajax({
        type: "POST",
        url: "handle_newsletter7.php",
        data: dataString,
        cache: false,
        success: function(result){
         $("#newsletterModal").modal('hide')
         $("#newsletterSuccessModal").modal('show')
       }
});
