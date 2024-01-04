$(document).ready(function() {

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            telefone: {
                required: true
            },
            email: {
                required: true
            },            
        },
        
        messages: {
            nome: 'Por favor, insira seu nome completo',
            telefone: 'Por favor, insira seu telefone',
            email: 'Por favor, insira seu e-mail',
        }
    })
})