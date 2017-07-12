// Ajax code to submit appointment form
$('form#appointmentForm').submit(function(){
  $.ajax({
    type: "POST",
    url: "handle_appointment5.php",
    data: dataString,
    cache: false,
    success: function(result){
     // Display modal to confirm form submission
     $("#appointmentConfirmModal").modal('show');
   }
  });
});

// function to submit newsletter form
$('form#newsletterForm').submit(function(){
      // get the form data
      var formData = {
        'email': $('input[name=emailSignUp]').val()
      };

      // process the newsletter form
      $.ajax({
        type: 'POST',
        //url: "handle_newsletter7.php", // your php script for newsletter submissions
        url: 'process.php', // the url where we want to POST
        data: formData, // our data object
        dataType: 'json', // what type of data do we expect back from the server
        encode: true
      })
      // using the done promise callback
      .done(function(data) {
          // log data to the console so we can see
          console.log(data);
          //change the content in the modal body to notify user of sign up success
          $("#newsletterModal .modal-body").addClass("alert-success");
          $("#newsletterForm").hide();
          $("#newsletterSuccess").removeClass('hidden');
      });
      // stop the form from submitting the normal way and refreshing the page
      event.preventDefault();
});
