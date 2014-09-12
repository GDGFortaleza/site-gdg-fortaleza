gdg-site-boilerplate
====================

Boilerplate para criar um site simples para os GDGs. O *gdg-site-boilerplate* gera um site simples e estático, de uma única página, usando apenas AngularJS para definir as informações de cada GDG.

## Configuração
Você precisa modificar 3 arquivos na estrutura do projeto:

### img/logo_default.png
Para definir qual a imagem do logo do seu GDG (use o http://gdgfortaleza.org/ caso ainda não tenha uma)

### js/config.js
Este arquivo possui duas variáveis globais essenciais para o funcionamento do site
```js
var API_KEY = "AIzaSyCZwW2eHtbwUfIsX0ZtxIxTGJn2OnO8GEA";
var PLUS_ID = "116566149088641717001";
``` 
- **API_KEY** é necessária para obter o feed do seu Google+. Você pode pedir uma chave no Developers Console do Google.
- **PLUS_ID** é a variável que recebe o ID da sua página no Google+, que serve de base para obter todas as informações do site.

### gdg-info.json
Este arquivo é onde o AngularJS irá pegar todas as informações para inserir no site. Cada atributo do objeto é descrito a seguir:
- **siteURL**: o endereço do site do GDG
- **title**: o nome do seu GDG
- **logoURL**: url do logo, relativa ao / do projeto
- **backgroundURL**: url do background do cabeçalho, relativo ao / do projeto
- **subtitle**: título para mensagens de boas vindas do site
- **short**: pequena descrição do seu GDG
- **postLimit**: quantos posts do Google+ irão aparecer na página inicial
- **calendarURL**: endereço do embed do calendario de eventos do seu GDG
- **groupName**: indentificador do grupo na url do Google Groups

Todos os atributos do arquivo são **obrigatórios**.

## Showcase
- **GDG Recife**: http://www.gdgrecife.com

*Seu GDG também está usando? Edite esse arquivo e dê um pull request para atualizarmos a lista! (:*

## Licença
### The MIT License (MIT)
Copyright © 2014 Joselito Júnior

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
