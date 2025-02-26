# BeTalent - Teste Técnico Frontend
  
  ![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
  ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
  ![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
  ![Mobile First](https://img.shields.io/badge/Mobile_First-5BBD72?style=for-the-badge&logo=mobile&logoColor=white)
  ![REST API](https://img.shields.io/badge/REST_API-FF6C37?style=for-the-badge&logo=postman&logoColor=white)

## 📋 Visão Geral

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Desenvolvedor Front-end na [BeTalent](https://betalent.tech). A aplicação consiste em uma interface para visualização e pesquisa de informações de funcionários, construída com práticas modernas de desenvolvimento web e foco em experiência do usuário.

### 🎨 Preview da Aplicação

| ![Versão Desktop](./public/desktop.png) | ![Versão Mobile](./public/mobile.png) |
|:---------------------------------------:|:-------------------------------------:|
| **Versão Desktop**                      | **Versão Mobile**                     |

## 🚀 Funcionalidades

- **Listagem de Funcionários**: Visualização de todos os funcionários da empresa em uma tabela com dados completos
- **Pesquisa em Tempo Real**: Busca instantânea por nome, cargo ou telefone dos funcionários
- **Layout Responsivo**: Interface adaptável para dispositivos móveis e desktop seguindo a abordagem Mobile-First
- **Detalhes Expansíveis**: Em dispositivos móveis, os detalhes dos funcionários podem ser expandidos/recolhidos com animações suaves
- **Tratamento de Estados**: Feedback visual durante carregamento, erros, e resultados de busca vazios
- **Formatação de Dados**: Formatação automática de telefones e datas para melhor legibilidade

## 💻 Tecnologias e Ferramentas

### Front-end

- **React 19**: Utilização da mais recente versão do React com seus novos recursos
- **TypeScript**: Desenvolvimento com tipagem estática para maior segurança e produtividade
- **Vite**: Build tool extremamente rápida para desenvolvimento e produção
- **CSS Modular**: Organização de estilos com escopo por componente
- **BEM (Block Element Modifier)**: Metodologia CSS utilizada para nomeação de classes

### Otimizações de Performance

- **useMemo e useCallback**: Otimização de funções e dados calculados para evitar re-renderizações desnecessárias
- **Memoização de Componentes**: Uso de `memo` para evitar rerenderizações de componentes quando as props não mudam
- **Animações CSS Eficientes**: Transições que utilizam propriedades otimizadas para performance

### Back-end (Mock)

- **JSON Server**: Simulação de API REST completa para desenvolvimento
- **Tratamento de Erros**: Implementação robusta de manipulação de erros na comunicação com a API

## 🧠 Padrões e Arquitetura

### Componentes Reutilizáveis

A aplicação foi construída com foco em componentização, seguindo princípios de SOLID:

```bash
src/
├── components/        # Componentes React reutilizáveis
│   ├── EmployeeRow/   # Componente para cada linha da tabela
│   ├── EmployeeTable/ # Tabela de funcionários
│   ├── ErrorMessage/  # Mensagem de erro
│   ├── Header/        # Cabeçalho da aplicação
│   ├── Loading/       # Componente de carregamento
│   └── SearchInput/   # Campo de busca em tempo real
├── hooks/             # Hooks personalizados para reutilização
├── pages/             # Páginas da aplicação
│   └── EmployeePage/  # Página principal com funcionalidade de busca
├── services/          # Serviços para comunicação com a API
├── utils/             # Funções utilitárias 
├── types.ts           # Definições de tipos TypeScript
└── ...
```

### Design System Consistente

- **Variáveis CSS**: Sistema de design implementado com variáveis CSS para cores, espaçamento, tipografia e outros
- **Convenções de Nomenclatura**: Uso consistente do padrão BEM para nomenclatura de classes CSS

```css
:root {
  --color-primary: #0500ff;
  --color-background: #f0f0f0;
  --color-white: #ffffff;
  --color-text: #1c1c1c;
  /* ... outras variáveis ... */
}
```

## 📱 Responsividade em Detalhes

A aplicação foi construída seguindo o princípio "Mobile-First", garantindo uma experiência otimizada em qualquer dispositivo:

### Abordagem Mobile-First

- Desenvolvimento inicial focado na experiência móvel, expandindo progressivamente para telas maiores
- Uso de media queries estratégicas para adaptar o layout conforme necessário

### Adaptações Específicas

- **Mobile**: Exibe informações essenciais com opção de expandir para ver mais detalhes
- **Desktop**: Apresenta todas as informações em formato de tabela completa
- **Transições**: Animações suaves entre os estados expandido/recolhido em dispositivos móveis

## 🔍 Funcionalidades Detalhadas

### Sistema de Pesquisa

- **Busca Instantânea**: Resultados filtrados em tempo real à medida que o usuário digita
- **Busca Multi-campo**: Filtro aplicado simultaneamente por nome, cargo ou telefone
- **Feedback Visual**: Estado vazio quando nenhum resultado é encontrado

### Formatação e Exibição de Dados

- **Datas**: Conversão automática de formato ISO para o padrão brasileiro (DD/MM/YYYY)
- **Telefones**: Formatação de números internacionais para melhor legibilidade: +XX (XX) XXXXX-XXXX

### Interatividade

- **Animações**: Transições suaves para elementos que expandem/colapsam
- **Feedback Visual**: Indicadores claros para estados de carregamento e erros
- **Acessibilidade**: Uso apropriado de elementos semânticos e atributos ARIA

## 📦 Instalação e Execução

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Passo a Passo

1. **Clone o repositório**:

   ```bash
   git clone git@github.com:andersonssantana/betalent-people.git
   cd betalent-people
   ```

2. **Instale as dependências**:

   ```bash
   npm install
   # ou
   yarn
   ```

3. **Inicie o servidor de mock (JSON Server)**:

   ```bash
   npm run server
   # ou
   yarn server
   ```

4. **Em outro terminal, inicie a aplicação**:

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

5. **Acesse a aplicação no navegador**:
   [http://localhost:5173](http://localhost:5173)

## 🧪 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento com hot-reload
- `npm run build` - Compila TypeScript e gera a build de produção
- `npm run lint` - Executa verificação de linting para manter a qualidade do código
- `npm run preview` - Inicia um servidor local para testar a build de produção
- `npm run server` - Inicia o servidor JSON-Server para simular a API

## 🔧 Práticas de Desenvolvimento

### Código Limpo

- Funções com responsabilidades únicas e bem definidas
- Nomes descritivos para variáveis e funções
- Formatação consistente do código

### TypeScript

- Interfaces bem definidas para todos os tipos de dados
- Tipagem estrita para prevenir erros comuns
- Exportações de tipos para reutilização

### React Moderno

- Uso eficiente dos Hooks (useState, useEffect, useCallback, useMemo)
- Componentes funcionais com responsabilidades bem definidas
- Memoização para otimização de performance

## 🎯 Decisões Técnicas

### Por que React 19?

A versão mais recente do React foi escolhida para aproveitar os novos recursos e melhorias de performance, demonstrando compromisso com as tecnologias mais atuais.

### Por que TypeScript?

O TypeScript adiciona uma camada de segurança através da tipagem estática, melhorando a manutenibilidade do código e prevenindo erros comuns durante o desenvolvimento.

### Por que Vite?

O Vite oferece um servidor de desenvolvimento extremamente rápido com HMR (Hot Module Replacement) quase instantâneo, além de uma configuração simplificada, tornando o desenvolvimento mais produtivo.

## 📝 Sobre o Autor

### Anderson Santana

- 🌐 [GitHub](https://github.com/andersonssantana/)
- 👔 [LinkedIn](https://www.linkedin.com/in/andersonssantana/)
- ✉️ [E-mail](mailto:anderssantana@outlook.com)

---

Desenvolvido com 🧠, ❤️ e 💻 por Anderson Santana
