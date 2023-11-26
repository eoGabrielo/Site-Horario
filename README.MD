# Horário Interativo com Cumprimentos

Este projeto oferece um relógio interativo que não apenas exibe a hora, mas também adapta visualmente com base nos períodos do dia. A lógica simples implementa saudações e cores de fundo distintas para manhã, tarde e noite.

## Lógica do Projeto

A classificação dos períodos do dia é realizada de forma eficiente através de condicionais simples (if, else if, else). A cor de fundo e a saudação são alteradas conforme o horário atual, proporcionando uma experiência visual envolvente.

## Obtendo o Horário Atual

O horário é obtido utilizando o método `new Date()` do JavaScript, que retorna a data e hora atuais. Com os métodos `getHours()` e `getMinutes()`, conseguimos extrair informações precisas sobre a hora e os minutos, personalizando assim a apresentação do relógio.

## Experiência Visual Dinâmica

A dinamicidade do projeto reside na sua capacidade de se adaptar visualmente ao longo do dia. Desde a manhã até a noite, o usuário é recebido com uma estética única, tornando a experiência mais envolvente.

Sinta-se à vontade para explorar, aprimorar e personalizar o código para atender às suas preferências e necessidades.

# Cumprimento Dinâmico com Imagens

Um projeto simples em JavaScript que cumprimenta o usuário com base no horário do dia, exibindo imagens e ajustando o plano de fundo de acordo.

## Funcionamento

Ao carregar a página, o usuário é solicitado a inserir seu nome. Com base na hora, a saudação, a imagem de fundo e a cor são ajustadas. As horas, incluindo minutos, são exibidas dinamicamente.

## Lógica do Código

- Utiliza o objeto `Date` para obter a hora atual do computador.
- Um prompt solicita ao usuário seu nome para personalizar a saudação.
- Com base na hora, a imagem de fundo, a cor e a saudação são ajustadas dinamicamente.

## Instruções de Uso

1. Baixe os arquivos do projeto.
2. Abra o arquivo HTML em seu navegador.

**Observação:** Certifique-se de ter as imagens (manha.png, tarde.png, noite.png) no mesmo diretório do seu arquivo HTML.

```html
<html>
  <!-- Seu código HTML aqui -->
  <script src="seu-arquivo-js.js"></script>
</html>
```

**Divirta-se explorando o projeto!**

## Detalhes do Código

- `toUpperCase`: Transforma a primeira letra do nome inserido em maiúscula.
- `substring()`: Obtém o restante do nome após a primeira letra.

Sinta-se à vontade para personalizar o projeto de acordo com suas preferências.
