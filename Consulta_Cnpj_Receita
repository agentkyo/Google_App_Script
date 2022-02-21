function consultarCnpjReceitaFederal(target_cnpj) {

  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[0];
  var token = "ADD_A_VALID_TOKEN_HERE";
  var response = UrlFetchApp.fetch('https://www.receitaws.com.br/v1/cnpj/' + target_cnpj + '/days/5', { headers: { Authorization: `Bearer ${token}` }, muteHttpExceptions: true });
  var jsonObject = JSON.parse(response.getContentText());

  var retorno = {
    "nome": jsonObject['nome'],
    "tipo": jsonObject['tipo'],
    "abertura": jsonObject['abertura'],
    "fantasia": jsonObject['fantasia'],
    "atividade_principal": jsonObject['atividade_principal'],
    "atividades_secundarias": jsonObject['atividades_secundarias'],
    "natureza_juridica": jsonObject['natureza_juridica'],
    "logradouro": jsonObject['logradouro'],
    "numero": jsonObject['numero'],
    "complemento": jsonObject['complemento'],
    "cep": jsonObject['cep'],
    "bairro": jsonObject['bairro'],
    "municipio": jsonObject['municipio'],
    "uf": jsonObject['uf'],
    "email": jsonObject['email'],
    "telefone": jsonObject['telefone'],
    "efr": jsonObject['efr'],
    "situacao": jsonObject['situacao'],
    "data_situacao": jsonObject['data_situacao'],
    "motivo_situacao": jsonObject['motivo_situacao'],
    "situacao_especial": jsonObject['situacao_especial'],
    "data_situacao_especial": jsonObject['data_situacao_especial'],
    "capital_social": jsonObject['capital_social'],
    "qsa": jsonObject['qsa'],
  }

  return retorno
