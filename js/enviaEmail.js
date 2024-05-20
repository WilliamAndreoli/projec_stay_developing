$(document).ready(() => {


    $('#btnForm').on('click', (e) => {
        e.preventDefault()

        let dados = $('#formEmail').serialize()
        console.log(dados)

        $.ajax({
            type: 'POST',
            url: 'processa_envio.php',
            data: dados, //x-www-form-urlencoded
            success: dados => { 
                $('#contato').append('<h5 class="text-success mt-2">Sua mensagem foi enviada com sucesso!</h5>')
             },
            error: erro => { console.log(erro) }
        })
        
    })

})