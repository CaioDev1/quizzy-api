[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]


<!-- PROJECT LOGO -->
<br />
<p align="center">
  <h1 align="center">Quizzy API</h1>

  <p align="center">
    API REST para gerenciamento de requisições e regra de negócio da aplicação
    <br />
    <a href="https://caiodev1.github.io/quizzy/#/"><strong>Abrir app »</strong></a>
    <br />
    <br />
    <a href="https://github.com/CaioDev1/quizzy/issues">Reportar Bug</a>
    .
    <a href="https://github.com/CaioDev1/quizzy/issues">Requisitar funcionalidades</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Sumário</summary>
  <ol>
    <li>
      <a href="#sobre-o-projeto">Sobre a API</a>
      <ul>
        <li><a href="#feito-utilizando">Feito utilizando</a></li>
      </ul>
    </li>
    <li>
      <a href="#iniciando">Iniciando</a>
      <ul>
        <li><a href="#instalação">Instalação</a></li>
      </ul>
    </li>
    <li><a href="#rotas">Rotas</a></li>
    <li><a href="#mais-informações">API</a></li>
    <li><a href="#licença">Licença</a></li>
    <li><a href="#contato">Contato</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
<h2 id="sobre-o-projeto">💡 Sobre a API</h2>

A API feita em NodeJS utilizando o framework Express, trata de trabalhar as requisiões feitas pelo frontend em React, gereciando a entrada e saída de dados por separação de camadas,
sendo elas as camadas da aplicação Node e suas rotas, o Data Access Layer(DAO) para manipulação do banco de dados e a camada de tratamento de erros, que gerencia todas as excessões da aplicação
retornando os devidos status da requisição HTTP.

* Proteção contra requisições de terceiros por meio do CORS
* Gerenciamento de requisições REST através do Express
* Tratamento de erros
* Manipulação do banco de dados relacional através da biblioteca "mysql2"

<h3 id="feito-utilizando">🔧 Dependências</h3>

Lista de dependências:
* [express](https://www.npmjs.com/package/express)
* [mysql2](https://www.npmjs.com/package/mysql2)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [cors](https://www.npmjs.com/package/cors)

<!-- GETTING STARTED -->
<h2 id="Iniciando">📖 Iniciando</h2>

Para inicialização correta da aplicação, primeiro é necessário que o NodeJS e o gerenciador de pacotes NPM esteja instalado e atualizado.

<h3 id="instalação">⚙ Instalação</h3>

1. Clone o repositório
   ```sh
   git clone https://github.com/CaioDev1/quizzy-api.git
   ```
2. Instale os pacotes e dependências via NPM
   ```sh
   npm install
   ```

<!-- ROUTES -->
<h2 id="rotas">🛣 Rotas</h2>
<table>
  <thead>
    <tr>
      <th>ROTA</th>
      <th>MÉTODO</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>/player/add</td>
      <td>POST</td>
    </tr>
    <tr>
      <td>/player/send-answer</td>
      <td>PATCH</td>
    </tr>
    <tr>
      <td>/quizz/add</td>
      <td>POST</td>
    </tr>
    <tr>
      <td>/quizz/:quizzId</td>
      <td>GET</td>
    </tr>
    <tr>
      <td>/quizz/:quizzId/results</td>
      <td>GET</td>
    </tr>
  </tbody>
</table>

</br>

### Exemplo de requisição na rota `/quizz/:quizzId`

</br>

```json
{
  "quizzId": 1,
  "owner": "Caio Felipe",
  "theme": "Variado",
  "questionNum": 2,
  "questions": [
    {
      "title": "Qual desses animais não é vertebrado?",
      "alternatives": [
        {
          "mark": "A",
          "content": "Cavalo",
          "isCorrect": null
        },
        {
          "mark": "B",
          "content": "Arraia",
          "isCorrect": null
        },
        {
          "mark": "C",
          "content": "Polvo",
          "isCorrect": null
        },
        {
          "mark": "D",
          "content": "Tubarão",
          "isCorrect": null
        }
      ],
      "questionId": 1
    },
    {
      "title": "Qual o maior estado do nordeste geograficamente?",
      "alternatives": [
        {
          "mark": "A",
          "content": "Pernambuco",
          "isCorrect": null
        },
        {
          "mark": "B",
          "content": "Bahia",
          "isCorrect": null
        },
        {
          "mark": "C",
          "content": "Ceará",
          "isCorrect": null
        }
      ],
      "questionId": 2
    }
  ]
}
```

<!-- USAGE EXAMPLES -->
<h2 id="mais-informações">ℹ Frontend</h2>

Além da parte da API da aplicação, temos a aplicação em React que trata toda a interface e esquema de requisição,
para acessa-la, basta ir para o link do repositório abaixo: 

_[Quizzy](https://github.com/CaioDev1/quizzy)_


<!-- LICENSE -->
<h2 id="licença">📜 Licença</h2>

Distribuído sobre a licença MIT. Veja `LICENSE` para mais informações.


<!-- CONTACT -->
<h2 id="contato">📩 Contato</h2>

Caio Cardoso - [@itsme_caio](https://instagram.com/itsme_caio) - imcaiofelipe@outlook.com

Link do projeto: [https://github.com/CaioDev1/quizzy](https://github.com/CaioDev1/quizzy)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/CaioDev1/quizzy-api.svg?style=for-the-badge
[contributors-url]: https://github.com/CaioDev1/quizzy-api/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/CaioDev1/quizzy-api.svg?style=for-the-badge
[forks-url]: https://github.com/CaioDev1/quizzy/network/members
[stars-shield]: https://img.shields.io/github/stars/CaioDev1/quizzy-api.svg?style=for-the-badge
[stars-url]: https://github.com/CaioDev1/quizzy-api/stargazers
[issues-shield]: https://img.shields.io/github/issues/CaioDev1/quizzy-api.svg?style=for-the-badge
[issues-url]: https://github.com/CaioDev1/quizzy-api/issues
[license-shield]: https://img.shields.io/github/license/CaioDev1/quizzy-api.svg?style=for-the-badge
[license-url]: https://github.com/CaioDev1/quizzy-api/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/caiodev1/
