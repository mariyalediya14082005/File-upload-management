$(document).ready(function() {
  $('#uploadForm').on('submit', function(e) {
    e.preventDefault();

    var formData = new FormData(this);

    $.ajax({
      url: '/upload',
      type: 'POST',
      data: formData,
      contentType: false,
      processData: false,
      success: function(response) {
        $('#message').html(`<div class="alert alert-success">${response.message}</div>`);
      },
      error: function(xhr, status, error) {
        $('#message').html(`<div class="alert alert-danger">Error: ${xhr.responseText}</div>`);
      }
    });
  });
});
