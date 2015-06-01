$(document).ready(function() {

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="input-street">Street:</label>' +
                                   '<input type="text" class="form-control input-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="input-city">City:</label>' +
                                   '<input type="text" class="form-control input-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="input-state">State:</label>' +
                                   '<input type="text" class="form-control input-state">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="input-zip">Zip:</label>' +
                                   '<input type="text" class="form-control input-zip">' +
                                 '</div>' +
                               '</div>');
  });

  $("form#new-contact").submit(function (event) {
    event.preventDefault();

    var inputtedFirstName = $("input#input-firstname").val();
    var inputtedLastName = $("input#input-lastname").val();
    // var addressInput = $("input#input-address").val();
    var newContact = { firstName: inputtedFirstName, lastName: inputtedLastName, addresses: [] };

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.input-street").val();
      var inputtedCity = $(this).find("input.input-city").val();
      var inputtedState = $(this).find("input.input-state").val();
      var inputtedZip = $(this).find("input.input-zip").val();

      var newAddress = { street: inputtedStreet, city: inputtedCity, state: inputtedState, zip: inputtedZip};
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $(".contact").last().click(function () {
      $("#show-contact").show();

      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);

      $("ul#addresses").text("");
      newContact.addresses.forEach(function(address) {
        $("ul#addresses").append("<li>" + address.street + "," + address.city + "," + address.state + ", " + address.zip + "</li>");
      });
    });

    $("input#input-firstname").val("");
    $("input#input-lastname").val("");
    $("input.input-street").val("");
    $("input.input-city").val("");
    $("input.input-state").val("");
    $("input.input-zip").val("");

    $("#new-addresses").empty();
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="input-street">Street:</label>' +
                                   '<input type="text" class="form-control input-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="input-city">City:</label>' +
                                   '<input type="text" class="form-control input-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="input-state">State:</label>' +
                                   '<input type="text" class="form-control input-state">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="input-zip">Zip:</label>' +
                                   '<input type="text" class="form-control input-zip">' +
                                 '</div>' +
                               '</div>');

  });

});
