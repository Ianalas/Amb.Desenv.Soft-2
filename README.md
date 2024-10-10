<h1>Ambientes e Desenvolvimento de Software</h1> 

## Resumo

> O projeto envolve o desenvolvimento de uma API utilizando Spring Boot no backend e JavaScript, HTML no frontend. O principal objetivo é demonstrar a integração entre frontend e backend, explorando o fluxo de dados por meio de requisições HTTP, como GET e POST, e manipulando respostas para exibir no frontend. A estrutura do projeto inclui controladores Java para gerenciar as rotas da API, enquanto o frontend se encarrega de consumir e renderizar os dados vindos do servidor. Para mais detalhes, consulte o repositório.


## Stacks
### Backend:
>- Java: Linguagem de programação principal para o desenvolvimento da API.
>- Spring Boot: Framework utilizado para criar aplicações stand-alone e de produção com facilidade.

### Frontend:
>- HTML5: Estruturação das páginas web.
>- CSS3: Estilização e layout responsivo.
>- Bootstrap 5: Framework CSS para acelerar o desenvolvimento de interfaces responsivas e modernas.
>- JavaScript (Vanilla): Manipulação dinâmica do DOM e interações com a API.
  
### Ferramentas Adicionais:
>- Webpack & Babel: Gerenciador de módulos para empacotamento e compilação do frontend.
>- [Bruno API](https://www.usebruno.com/): Testes das APIs desenvolvidas.

## Get Started

### Pré-requisitos

Antes de iniciar, certifique-se de ter os seguintes requisitos instalados:

- [Java JDK 17+](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html)
- [Maven](https://maven.apache.org/install.html)
- [Node.js](https://nodejs.org/) (para gerenciar pacotes frontend)
- [Git](https://git-scm.com/)

## Passo a Passo

### 1. Clonar o Repositório

```bash
git clone https://github.com/Ianalas/Amb.Desenv.Software.git
cd Amb.Desenv.Software
```
### 2. Configurar o Backend (Spring Boot)
```
mvn clean install
mvn spring-boot:run
```
> [!WARNING]
> Verifique se está rodando na [porta 8080](http://localhost:8080/hello)
### 3. Configurar o Frontend
```
npm install
npm run dev
```
> [!WARNING]
> Verifique se está rodando na [porta 3000](http://localhost:3000)
> 
_____________________________________
> **@octocat** :+1: Be happy! :shipit:
