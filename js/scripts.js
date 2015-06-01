$(document).ready(function() {
  $("form#new-contact").submit(function (event) {
    event.preventDefault();

    var firstNameInput = $("input#input-firstname").val();
    var lastNameInput = $("input#input-lastname").val();
    var addressInput = $("input#input-address").val();
    var newContact = { firstName: firstNameInput, lastName: lastNameInput, address: addressInput };

    $("ul#contacts").append("<li><span class='contact'>" + newContact.firstName + " " + newContact.lastName + "</span></li>");

    $("input#input-firstname").val("");
    $("input#input-lastname").val("");
    $("input#input-address").val("");

    $(".contact").last().click(function () {
      $("#show-contact").show();
      $("#show-contact h2").text(newContact.firstName + " " + newContact.lastName);
      $(".first-name").text(newContact.firstName);
      $(".last-name").text(newContact.lastName);
      $(".address").text(newContact.address);
    })
  });
});
