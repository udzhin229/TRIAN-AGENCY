$(document).ready(function() {
    $('.button').on('click', function() {
      var email = "agency@trianagency.com";
      var mailtoLink = "mailto:" + email;
      window.open(mailtoLink);
    });
  });