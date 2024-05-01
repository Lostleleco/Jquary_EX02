$(document).ready(function () {
    
    $('#tel').mask('(00) 00000-0000');
    $('#CPF').mask('000.000.000-00');
    $('#cep').mask('00000-000');

   
    $('form').validate({
        rules:{
            nome:{
                required: true
            },
            email:{
                required: true,
                email: true
            },
            Tel:{
                required: true
            },
            CPF:{
                required: true
            },
            Endereço:{
                required: true
            },
            end2:{
                required: true
            },
            Bairro:{
                required: true
            },
            cep:{
                required: true
            }
        },
        messages:{
            nome:{
                required: "<span class='mensagem-branca'>Por favor, insira seu nome</span>"
            },
            email:{
                required: "<span class='mensagem-branca'>Por favor, insira seu e-mail</span>",
                email: "<span class='mensagem-branca'>Por favor, insira um e-mail válido</span>"
            },
            Tel:{
                required: "<span class='mensagem-branca'>Por favor, insira seu telefone</span>"
            },
            CPF:{
                required: "<span class='mensagem-branca'>Por favor, insira seu CPF</span>"
            },
            Endereço:{
                required: "<span class='mensagem-branca'>Por favor, insira seu endereço</span>"
            },
            end2:{
                required: "<span class='mensagem-branca'>Por favor, insira o número</span>"
            },
            Bairro:{
                required: "<span class='mensagem-branca'>Por favor, insira o bairro</span>"
            },
            cep:{
                required: "<span class='mensagem-branca'>Por favor, insira o CEP</span>"
            }
        },
        submitHandler: function(form) {
            
            alert("Formulário enviado com sucesso!");
            form.submit();
        }
    });
});
