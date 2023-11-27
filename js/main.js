$(document).ready(function () {
  $("#telefone").mask("(00) 00000-0000");

  $("form").validate({
    rules: {
      nome: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      telefone: {
        required: true,
      },
    },
    messages: {
      nome: "Por favor, informe o nome completo",
      email: "Por favor, informe seu email",
      telefone: "Por favor, informe seu telefone",
    },
    errorClass: "error",
    errorElement: "span",
  });
});
