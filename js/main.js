$(document).ready(function () {
    console.log("Iniciando o carousel...");
    $('#carousel-imagens').slick({
        autoplay: true,
        arrows: false
    });
});
$(document).ready(function() {
    // Máscara para o campo de telefone
    $('#telefone').mask('(00) 00000-0000');

    // Validação do formulário
    $('form').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            telefone: {
                required: true,
                minlength: 10
            },
            email: {
                required: true,
                email: true
            },
            veiculo_interesse: {
                required: true
            },
            mensagem: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            nome: {
                required: "Por favor, insira seu nome.",
                minlength: "Seu nome deve ter no mínimo 3 caracteres."
            },
            telefone: {
                required: "Por favor, insira seu telefone.",
                minlength: "O telefone deve ter no mínimo 9 dígitos."
            },
            email: {
                required: "Por favor, insira seu e-mail.",
                email: "Por favor, insira um e-mail válido."
            },
            veiculo_interesse: {
                required: "Por favor, informe o veículo de interesse."
            },
            mensagem: {
                required: "Por favor, insira sua mensagem.",
                minlength: "A mensagem deve ter no mínimo 10 caracteres."
            }
        }
    });
});
