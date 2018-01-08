// function to submit appointment form
$('form#appointmentForm').submit(function(event){
  //prevent page from reloading on form submit
  event.preventDefault();

  //convert date from yyyy-mm-dd to mm-dd-yyyy
  var formDate = $('#date').val();
  var explodeDate = formDate.split('-');
  var apptDate = explodeDate[1]+"-"+explodeDate[2]+"-"+explodeDate[0];

  //only allow dates that are at least 24 hours in advance
  formDate = new Date($('#date').val()).getTime(); //timestamp of date entered in form
  twentyFour = (24*60*60*1000); //calculate value to know 24 hrs in future
  futureDate = new Date().getTime()+twentyFour; //get user's current timestamp

  if(formDate >= futureDate == false){
    $('#date').focus();
    alert('Please select a date at least 24 hours from now');
    return;
  }

  //only allow times that are within hours of 7am to 4pm
  preferredTime = $('#time').val();
  if(preferredTime < "07:00"){
    $('#time').focus();
    alert('Please select a time after 7:00 AM');
    return;
  }
  if(preferredTime > "16:00"){
    $('#time').focus();
    alert('Please select a time before 4:00 PM');
    return;
  }

  alternateTime = $('#time2').val();
  if(alternateTime < "07:00"){
    $('#time2').focus();
    alert('Please select a time after 7:00 AM');
    return;
  }
  if(alternateTime > "16:00"){
    $('#time2').focus();
    alert('Please select a time before 4:00 PM');
    return;
  }

  //convert time fields to 12 hour format
  if(preferredTime > "12:00"){
    var explodeTime = preferredTime.split(":");
    var twelveHour = "0"+(explodeTime[0]-12);
    preferredTime = twelveHour+":"+explodeTime[1];
  }

  if(alternateTime > "12:00"){
    var explodeTime = alternateTime.split(":");
    var twelveHour = "0"+(explodeTime[0]-12);
    alternateTime = twelveHour+":"+explodeTime[1];
  }

  //continue if dates and times are valid
  //build data object
  var data = {
    firstName: $('#first-name').val(),
    lastName: $('#last-name').val(),
    email: $('#email').val(),
    primaryPhone: $('#tel').val(),
    altPhone: $('#tel2').val(),
    date: apptDate,
    apptTime: preferredTime,
    altTime: alternateTime,
    year: $('#year').val(),
    make: $('#make').val(),
    model: $('#model').val(),
    service: $('#service').val()
  };
  //console.log(data);
  //submit the data object
  $.ajax({
    type: "POST",
    url: "appointment.php",
    data: data,
    success: function(){
      $('form#appointmentForm')[0].reset();
      $('#appointmentModal').modal('show');
   }
 });
});

// function to submit newsletter form
$('form#newsletterForm').submit(function(event){
  //prevent page from reloading on form submit
  event.preventDefault();

  //build the data object
  var data = {
    firstName: $('#signUpFirstName').val(),
    lastName: $('#signUpLastName').val(),
    email: $('#signUpEmail').val()
  };

  //send the data object
  $.ajax({
    type: "POST",
    url: "newsletter.php",
    data: data,
    success: function(){
      $('#newsletterModal .modal-body').addClass('alert-success');
      $('#newsletterForm').hide();
      $('#newsletterSuccess').removeClass('hidden');
    }
  });
});
