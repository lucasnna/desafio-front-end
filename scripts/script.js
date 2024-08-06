$(document).ready(function() {
    const attachments = [];

    function calculoValorTotal(row) {
        const quantidade = $(row).find('.quantidadeEstoque').val();
        const valor = $(row).find('.valorUnitario').val();
        const total = quantidade * valor;
        $(row).find('.valorTotal').val(total.toFixed(2));
    }

    $('#novoProduto').on('click', function() {
        const newRow = `<tr>
            <td><input type="text" class="form-control" required></td>
            <td><input type="text" class="form-control" required></td>
            <td><input type="number" class="form-control quantidadeEstoque" required></td>
            <td><input type="number" class="form-control valorUnitario" required></td>
            <td><input type="number" class="form-control valorTotal" disabled></td>
            <td><button type="button" class="btn btn-danger excluirProduto">Excluir</button></td>
        </tr>`;
        $('#tabelaProdutos').append(newRow);
    });

    $(document).on('click', '.excluirProduto', function() {
        $(this).closest('tr').remove();
    });

    $(document).on('input', '.quantidadeEstoque, .valorUnitario', function() {
        const row = $(this).closest('tr');
        calculoValorTotal(row);
    });

    $('#anexo').on('click', function incluirNovoAnexo() {
        const newRow = `<tr>
            <td><input type="file" class="form-control-file"></td>
            <td class="col-xs-2">
                <button type="button" class="btn btn-danger excluirAnexo">Excluir</button>
                <button type="button" class="btn btn-success visualizarAnexo">Visualizar</button>
            </td>
        </tr>`;
        $('#attachments-table tbody').append(newRow);
    });

    $(document).on('click', '.excluirAnexo', function() {
        const fileInput = $(this).closest('tr').find('input[type="file"]')[0];
        const index = attachments.indexOf(fileInput);
        if (index > -1) {
            attachments.splice(index, 1);
        }
        $(this).closest('tr').remove();
    });

    $(document).on('submit', '.visualizarAnexo', function() {
        const fileInput = $(this).closest('tr').find('input[type="file"]')[0];
        const file = fileInput.files[0];
        const url = URL.createObjectURL(file);
        window.open(url);
    });

    $('#salvarFornecedor').on('click', function(event) {
        event.preventDefault();

        $('#loadingModal').modal('show');

                let isValid = true;
                let errorMessage = "Por favor, preencha os campos obrigatórios:\n";

                $('#formForncedor input[required]').each(function() {
                    if ($(this).val() === "") {
                        isValid = false;
                        const label = $(this).closest('.form-group').find('label').text();
                        errorMessage += `- ${label}\n`;
                    }
                });

                if ($('#tabelaProdutos tbody tr').length === 0) {
                    isValid = false;
                    errorMessage += "- Adicione pelo menos um produto\n";
                }

                $('#tabelaProdutos tbody tr').each(function() {
                    $(this).find('input[required]').each(function() {
                        if ($(this).val() === "") {
                            isValid = false;
                            errorMessage += "- Todos os campos de produtos são obrigatórios\n";
                            return false;
                        }
                    });
                    if (!isValid) return false;
                });

                if ($('#attachments-table tbody tr').length === 0) {
                    isValid = false;
                    errorMessage += "- Adicione pelo menos um anexo\n";
                }

                if (!isValid) {
                    alert(errorMessage);
                    return;
                }

        const enviarDados = {
            razaoSocial: $('#razaoSocial').val(),
            nomeFantasia: $('#nomeFantasia').val(),
            cnpj: $('#CNPJ').val(),
            inscricaoEstadual: $('#inscricaoEstadual').val(),
            inscricaoMunicipal: $('#inscricaoMunicipal').val(),
            endereco: $('#endereco').val(),
            nomeContato: $('#nomeContato').val(),
            telefoneContato: $('#telefoneContato').val(),
            emailContato: $('#emailContato').val(),
            produtos: [],
            attachments: []
        };

        $('#tabelaProdutos tbody tr').each(function() {
            const produto = {
                produto: $(this).find('td:eq(0) input').val(),
                unidadeMedida: $(this).find('td:eq(1) input').val(),
                quantidadeEstoque: $(this).find('td:eq(2) input').val(),
                valorUnitario: $(this).find('td:eq(3) input').val(),
                valorTotal: $(this).find('td:eq(4) input').val()
            };
            enviarDados.produtos.push(produto);
        });

        attachments.forEach(fileInput => {
            const file = fileInput.files[0];
            enviarDados.attachments.push({
                name: file.name,
                size: file.size,
                type: file.type
            });
        });

        console.log(JSON.stringify(enviarDados));

        $('#loadingModal').modal('hide');
        alert('Dados enviados com sucesso!');
    });

    $(document).on('change', 'input[type="file"]', function() {
        attachments.push(this);
    });
});