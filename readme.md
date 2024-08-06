Projeto para o desafio front end da empresa Vflows, utilizando apenas as linguagenns HTML, CSS e Javascript.

Um sistema de cadastro de fornecedores, com os seguintes requisitos:

Dados do Fornecedor:
- Razão Social: obrigatório
- Nome Fantasia: obrigatório
- CNPJ: obrigatório
- Inscrição Estadual: opcional
- Inscrição Municipal: opcional
- Endereço: obrigatório (deve ser preenchido automaticamente usando a API via CEP)
- Nome da pessoa de contato: obrigatório
- Telefone: obrigatório
- E-mail: obrigatório

Tabela de Produtos: obrigatório a inclusão de pelo menos 1 item
- Descrição: obrigatório
- Unidade de Medida: obrigatório
- Quantidade em Estoque: obrigatório
- Valor Unitário: obrigatório
- Valor Total: obrigatório (bloqueado, deve ser preenchido automaticamente considerando o valor unitário x a quantidade em estoque)

Tabela de Anexos: obrigatório a inclusão de pelo menos 1 documento
- Os documentos anexados deverão ser armazenados em memória (blob e session storage) para envio
- O Botão Excluir (lixeira) - Ao excluir o documento, deverá ser excluído da memória
- O Botão Visualizar (olho) - Ao visualizar o documento, deve ser feito o download
- Botão Salvar Fornecedor: ao clicar no botão, deverá ser aberto modal de loading de envio, e deverá ser formatado um JSON com os dados a serem enviados, conforme exemplo: jsonExemplo
- OBS Sobre o JSON: o JSON de resultado pode ser baixado ou apenas exibido no console do browser.

Neste projeto, para toda a estilização da página e CSS, foi utiliada a biblitoeca de estilização "fluig-style-guide", obtida no link: "http://style.fluig.com/css/fluig-style-guide.min.css", juntamente com seu asset para javascript: "http://style.fluig.com/js/fluig-style-guide.min.js". Os componentes utilizados a partir do "fluig-style-guide", foram aproveitados a partir da documentação disponivel do fluig, neste link: "https://style.fluig.com/components.html".

Ressalto de antemão que algumas questões se tornaram faltantas no sistema, como:
- O consumer da API no CEP, para utilizar os endereços do serviço e apresenta-los no sistema.
- Algumas validações de campos, como validações básicas para CNPJ, CEP e outros campos numéricos, bem como alguns caprichos a mais na submissão.

Abaixo, deixarei um exemplo de compração visual entre o protótipo apresentado para a solução e o sistema desenvolvido.

Prótotipo:
![alt text](image.png)

Sistema desenvolvido:
![alt text](image2.png)


