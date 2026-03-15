# SAC/PO Wireframe

Documento mestre para orientar a criação da nova apresentação do `SAC/PO` com base visual no arquivo legado `../legado/sac-po-v1-dados.html`, mas com foco no `escopo funcional do sistema` e em `mockups de telas`.

## 1. Objetivo Deste Documento

Este arquivo existe para eliminar ambiguidade para qualquer IA ou profissional que for continuar o trabalho.

O objetivo não é implementar o sistema agora.

O objetivo não é reconstruir o capítulo 5 atual focado em dados.

O objetivo é orientar a criação de uma `nova apresentação`, visualmente alinhada ao capítulo 5 existente, que:

- mantenha a base de layout e identidade visual da apresentação atual
- troque o foco de `arquitetura de dados / cruzamento de bases` para `escopo do sistema`
- mostre o que o `SAC/PO` será
- inclua `mockups de média/alta fidelidade` das telas principais
- permaneça `100% editável`

## 2. Pedido Real Do Cliente

Leitura consolidada da conversa com o Leonel:

- Ele quer uma apresentação `igual à do capítulo 5`.
- O foco da nova apresentação não deve ser dados, integração ou prova de conceito técnica.
- O foco deve ser o `escopo inicial do sistema`.
- Ele quer visual de `tela de sistema`, não wireframe cru e não desenho solto.
- Ele pediu explicitamente:
  - `tela de cadastro`
  - `tela de pesquisa/consulta`, mostrando `onde o servidor já trabalhou`
- O sistema se chama:
  - `Sistema de Acompanhamento da Carreira de Planejamento e Orçamento`
  - sigla: `SAC/PO`
- `Login`, autenticação, perfis e áreas semelhantes não devem virar tela detalhada agora, mas o projeto deve prever espaço para isso.

## 3. Hierarquia De Fontes

Se houver conflito entre materiais, usar esta ordem de prioridade:

1. Este `sac-po-wireframe.md`
2. O pedido do cliente consolidado na conversa
3. O escopo bruto em `sac-po-diretiva-final.md`
4. A base visual e estrutural em `../legado/sac-po-v1-dados.html`
5. O guia visual em `../../../compartilhado/identidade/sof-mpo-design-patterns.md`
6. A referência institucional externa do GOV.BR

## 4. Arquivos E Referências Que Devem Ser Consultados

### Arquivos locais obrigatórios

- `/mnt/c/Users/alan_/OneDrive/Área de Trabalho/leonel-capitulo5/apresentacoes/sac-po/legado/sac-po-v1-dados.html`
  - base visual, estrutura dos slides e ritmo da apresentação
- `/mnt/c/Users/alan_/OneDrive/Área de Trabalho/leonel-capitulo5/apresentacoes/sac-po/briefing/sac-po-diretiva-final.md`
  - escopo funcional bruto do sistema
- `/mnt/c/Users/alan_/OneDrive/Área de Trabalho/leonel-capitulo5/compartilhado/identidade/sof-mpo-design-patterns.md`
  - tokens visuais, modos de slide, cores e comportamento da apresentação
- `/mnt/c/Users/alan_/OneDrive/Área de Trabalho/leonel-capitulo5/compartilhado/web/styles.css`
  - classes existentes e convenções reutilizáveis

### Referência externa

- `https://www.gov.br/gestao/pt-br/assuntos/gestaoeinovacao/inovacao-governamental-carreiras-transversais/inovacao-governamental/gestao-de-carreiras/sistema-de-gestao-de-carreiras`
  - referência institucional de linguagem e aparência de sistema governamental
  - serve como referência de `tom`, `credibilidade` e `cara de produto público`
  - não copiar literalmente

## 5. O Que O SAC/PO É

Com base no `sac-po-diretiva-final.md`, o sistema deve ser entendido como um `sistema de gestão da carreira`, não apenas como dashboard ou base de consulta.

Escopo funcional bruto identificado:

- cadastro de todos os servidores da carreira de Planejamento e Orçamento
- recebimento de pedidos de movimentação de servidor
- aplicação das regras de movimentação conforme legislação vigente
- identificação de onde o servidor está e por onde ele passou
- obtenção e monitoramento de dados de afastamento e licença
- obtenção dos dados de capacitação e formação do servidor
- controle da `GSISTE`
- futuro: controle de aposentados e pensionistas

Bases citadas como fonte do ecossistema:

- `SIAPE`
- `SEI`
- `Imprensa Nacional / DOU`
- `AFD`
- documentos/pastas físicas

Importante:

- A apresentação nova não deve entrar fundo em `como cruzar os dados`.
- A apresentação nova deve mostrar `o que o sistema entrega` e `como ele se apresenta para o usuário`.

## 6. O Que A Nova Apresentação Deve Fazer

Ela deve responder, de forma visual e executiva:

- o que é o `SAC/PO`
- por que esse sistema é necessário
- quais módulos compõem o escopo inicial
- como seriam as telas principais
- o que entra agora e o que fica para depois
- quais decisões a SOF precisa tomar para avançar

## 7. O Que A Nova Apresentação Não Deve Fazer

Não fazer:

- apresentação acadêmica
- defesa metodológica
- explicação de regressão, tese ou capítulo 4
- foco em `SIAPE + SIGEPE + DOU` como protagonista
- foco em parsing semântico, chave primária, Pareto, inconsistência de matrícula ou saneamento técnico
- mockup em estilo rabisco, wireframe cinza ou baixa fidelidade
- estética de startup genérica
- estética futurista exagerada
- telas de login prontas
- detalhamento textual de legislação de movimentação

Importante:

- o sistema pode mencionar integrações de dados, mas isso deve ficar em `segundo plano`
- o protagonista agora é o `produto`

## 8. Transformação Do Capítulo 5 Atual Para A Nova Versão

O arquivo `sac-po-v1-dados.html` é a casca base.

Ele deve ser reaproveitado em:

- identidade visual
- organização da narrativa
- lógica de progressão de slides
- alternância entre `modo rico` e `modo limpo`
- ritmo executivo da apresentação

Ele não deve ser reaproveitado no conteúdo técnico de dados.

### Mapeamento sugerido

- Slide 1 atual: `Capa`
  - manter a função
  - trocar subtítulo para escopo do sistema
- Slide 2 atual: `A carreira em números`
  - manter como contexto
  - usar para apresentar a necessidade do sistema
- Slide 3 atual: `Informação fragmentada`
  - transformar em `gestão fragmentada / ausência de sistema único`
- Slide 4 atual: `A proposta`
  - transformar em `escopo inicial do SAC/PO`
- Slide 5 atual: `Estratégia 1`
  - transformar em `mockup da tela de cadastro`
- Slide 6 atual: `Estratégia 2`
  - transformar em `mockup da tela de pesquisa e histórico`
- Slide 7 atual: `Roadmap`
  - manter a função, mas com foco em decisão de produto e implantação

## 9. Estrutura Recomendada Da Nova Apresentação

Manter a apresentação enxuta. A referência mais segura é `7 slides`.

## 10. Roteiro Detalhado Dos Slides

### Slide 1 — Capa

Função:

- abrir a apresentação com o nome oficial do sistema
- estabelecer que agora o foco é `escopo funcional`

Título sugerido:

- `Sistema de Acompanhamento da Carreira de Planejamento e Orçamento`

Subtítulo sugerido:

- `Escopo Inicial do Sistema e Visão de Telas`

Observações:

- manter o mesmo peso institucional da capa atual
- não usar subtítulo técnico sobre dados

### Slide 2 — Por Que O Sistema Existe

Função:

- mostrar o problema de negócio
- justificar a necessidade de um sistema unificado

Mensagem central:

- hoje a gestão da carreira é fragmentada
- falta uma visão única do servidor
- falta um ambiente único para cadastro, consulta e acompanhamento

Conteúdos possíveis:

- volume da carreira
- dispersão de informações
- dificuldade de localizar histórico funcional
- necessidade de acompanhar movimentações, afastamentos, capacitações e funções

Visual:

- pode manter a lógica do slide 2 atual
- trocar números soltos por blocos de dor e necessidade

### Slide 3 — Escopo Inicial Do SAC/PO

Função:

- apresentar claramente o que entra no sistema

Mensagem central:

- o SAC/PO será um sistema de gestão da carreira, com módulos organizados

Módulos que devem aparecer:

- `Cadastro de Servidores`
- `Pesquisa e Consulta`
- `Histórico de Atuação`
- `Movimentações`
- `Afastamentos e Licenças`
- `Capacitação e Formação`
- `Controle de GSISTE`

Elementos futuros que podem aparecer em selo ou faixa secundária:

- `Aposentados e Pensionistas`
- `Autenticação e Perfis`
- `Fluxos de Aprovação`

Observação:

- aqui vale usar cards ou blocos modulares
- este slide é o coração do escopo

### Slide 4 — Mapa Funcional Do Sistema

Função:

- mostrar como os módulos se conectam
- deixar claro o que o usuário consegue fazer no sistema

Estrutura sugerida:

- bloco central: `Servidor da Carreira`
- ao redor:
  - cadastro
  - lotação atual
  - histórico
  - movimentações
  - afastamentos
  - capacitações
  - GSISTE

Mensagem:

- o sistema reúne acompanhamento operacional e visão histórica da carreira

Observação:

- este slide substitui a antiga proposta de integração de dados
- integração pode ser citada como suporte, não como destaque principal

### Slide 5 — Mockup Obrigatório: Tela De Cadastro

Função:

- mostrar visualmente como será a tela de cadastro do servidor

Nível de fidelidade:

- média/alta
- cara de sistema governamental real
- 100% editável

Objetivo da tela:

- concentrar dados principais do servidor da carreira
- permitir leitura clara do vínculo atual
- sinalizar módulos e abas relacionadas

Elementos obrigatórios:

- cabeçalho com nome do sistema
- breadcrumb ou contexto da página
- título da tela: `Cadastro do Servidor`
- ações principais:
  - `Salvar`
  - `Editar`
  - `Solicitar Movimentação`
- card-resumo do servidor
- formulário organizado em seções

Seções obrigatórias do cadastro:

- `Identificação`
  - nome completo
  - matrícula
  - cargo
  - situação
- `Vínculo Atual`
  - órgão
  - unidade
  - lotação
  - função comissionada
- `Dados Funcionais`
  - data de ingresso
  - carreira
  - exercício atual
- `Acompanhamento`
  - status resumido de afastamentos
  - status resumido de capacitações
  - indicador de GSISTE

Estratégia visual recomendada:

- parte superior com resumo do servidor
- corpo com formulário em duas colunas
- abas ou navegação interna com:
  - `Dados Gerais`
  - `Histórico`
  - `Movimentações`
  - `Afastamentos`
  - `Capacitações`
  - `GSISTE`

Importante:

- não criar fluxo inteiro de edição
- basta um mockup consistente da tela
- deve existir algum indício de expansão futura para autenticação e permissões, mas sem tela específica

### Slide 6 — Mockup Obrigatório: Tela De Pesquisa E Histórico

Função:

- mostrar como o usuário pesquisa um servidor
- mostrar onde ele está hoje e por onde passou

Nível de fidelidade:

- média/alta
- visual de produto institucional

Objetivo da tela:

- servir como consulta principal da carreira
- exibir lotação atual e trajetória funcional

Elementos obrigatórios:

- campo de busca principal
- filtros
- tabela ou lista de resultados
- área de detalhe do servidor selecionado
- histórico visual de atuação

Busca recomendada por:

- nome
- matrícula
- cargo
- órgão atual

Filtros recomendados:

- situação
- carreira
- exercício fora da SOF
- função comissionada

Informações que devem aparecer no detalhe:

- nome do servidor
- matrícula
- cargo
- situação
- órgão atual
- unidade atual
- função atual
- indicador se está fora da SOF

Histórico que deve aparecer:

- órgãos por onde passou
- unidades principais
- datas ou faixas temporais
- posição atual em destaque

Formato recomendado do histórico:

- timeline vertical ou horizontal
- ou tabela cronológica com destaque do vínculo atual

Mensagem central da tela:

- o SAC/PO permite localizar rapidamente o servidor e reconstruir sua trajetória

### Slide 7 — Próximos Passos E Decisões

Função:

- fechar a apresentação com encaminhamento objetivo

Conteúdos recomendados:

- validação do escopo com a área de negócio
- priorização dos módulos da primeira fase
- definição de responsáveis
- confirmação das integrações necessárias
- alinhamento de cronograma para construção da prova visual ou protótipo

Pode aparecer como decisões da SOF:

- validar escopo inicial
- indicar ponto focal
- priorizar módulos da fase 1

## 11. Módulos Do Sistema

### Módulos centrais que devem aparecer claramente

- `Cadastro de Servidores`
- `Pesquisa e Consulta`
- `Histórico de Atuação`
- `Movimentações`
- `Afastamentos e Licenças`
- `Capacitação e Formação`
- `GSISTE`

### Módulos ou capacidades que podem aparecer como previstos

- `Gestão de Perfis e Acessos`
- `Autenticação`
- `Fluxos de Aprovação`
- `Integrações com sistemas e documentos`

### Itens futuros

- `Aposentados e Pensionistas`

## 12. O Que Entra Agora Vs O Que Fica Previsto

### Deve aparecer como escopo atual

- cadastro de servidores
- consulta e pesquisa
- histórico de lotação e trajetória
- acompanhamento de movimentações
- afastamentos e licenças
- capacitação e formação
- GSISTE

### Deve aparecer apenas como capacidade prevista

- login
- autenticação
- perfis de acesso
- workflow detalhado de aprovação
- painéis analíticos avançados
- aposentados e pensionistas

## 13. Diretriz De Fidelidade Visual

Não é wireframe de baixa fidelidade.

Não é tela final de produção.

É `mockup institucional de média/alta fidelidade`.

Isso significa:

- layout claro
- componentes reais de sistema
- boa hierarquia visual
- aparência plausível para uso governamental
- texto totalmente editável
- sem depender de imagens rasterizadas para conteúdo principal

## 14. Diretriz Visual Obrigatória

Manter coerência com o capítulo 5 atual.

### Cores principais

- `#1B4332` verde escuro
- `#00A000` verde SOF
- `#2563A0` azul institucional
- `#40916C` verde médio
- `#BFDE5A` amarelo-verde de acento
- `#D9D9D9` cinza claro

### Tipografia

- títulos: `Montserrat`
- corpo: `Open Sans` ou equivalente já usado no projeto

### Modos de slide

- `Modo rico`
  - capa
  - contexto
  - transições
  - fechamento
- `Modo limpo`
  - explicação funcional
  - módulos
  - mockups de tela

### Elementos visuais que devem ser preservados

- mosaico no rodapé em slides ricos
- barra verde superior em slides limpos
- número de página em círculo
- atmosfera institucional brasileira

## 15. Referência De Linguagem

O texto deve soar como apresentação para gestor público.

Usar linguagem:

- direta
- concreta
- institucional
- simples

Evitar:

- jargão de startup
- promessa tecnológica vaga
- excesso de termos como `IA`, `disruptivo`, `ecossistema`, `insight`

Priorizar termos como:

- servidor
- carreira
- lotação
- histórico funcional
- movimentação
- afastamento
- capacitação
- função comissionada

## 16. Diretriz Específica Para Os Mockups

### Tela de cadastro

A tela deve transmitir:

- organização
- completude
- segurança institucional

Ela não deve parecer:

- formulário genérico de CRM
- sistema financeiro
- painel analítico

### Tela de pesquisa

A tela deve transmitir:

- consulta operacional rápida
- visão histórica da carreira
- facilidade de localização do servidor

Ela não deve parecer:

- BI
- dashboard de métricas
- buscador genérico sem contexto funcional

## 17. Espaço Reservado Para Login E Controle De Acesso

Mesmo sem desenhar uma tela de login agora, o projeto deve prever essa camada.

Como isso deve aparecer:

- header com espaço plausível para usuário logado
- menção discreta a `perfis de acesso` em algum slide de escopo
- não criar fluxo detalhado de autenticação

## 18. Diretriz De Conteúdo: Não Virar Sistema De Dados

Este ponto é crítico.

O capítulo 5 atual fala muito de:

- cruzamento de bases
- matrícula como chave
- DOU
- inconsistências históricas
- parsing
- PoC de dados

Esses temas:

- podem ser citados de forma secundária
- não devem dominar a nova apresentação

A nova apresentação deve responder:

- `o que o usuário faz no sistema`

Não:

- `como o time vai minerar os dados por trás`

## 19. Regras Para Dados De Exemplo Nos Mockups

Usar sempre dados fictícios.

Evitar:

- CPF real
- dados pessoais sensíveis
- telefones reais
- nomes de pessoas reais identificáveis

Pode usar:

- nomes fictícios brasileiros
- matrículas inventadas
- órgãos/unidades exemplificativos
- datas plausíveis

## 20. Exemplo De Registro Fictício Para Os Mockups

Se for útil manter consistência visual entre telas, usar um único personagem fictício.

Exemplo:

- `Nome:` Marina Costa Nogueira
- `Matrícula:` 1234567
- `Cargo:` APO
- `Situação:` Ativa
- `Órgão atual:` SOF/MPO
- `Unidade atual:` Coordenação-Geral de Acompanhamento Orçamentário
- `Função comissionada:` FCE-3
- `Ingresso:` 2014

Histórico fictício possível:

- `2014–2017` SOF/MPO
- `2018–2021` Ministério da Economia
- `2022–2024` Secretaria de Governo
- `2025–Atual` SOF/MPO

## 21. Pressupostos Que Devem Ser Assumidos Se Ninguém Responder Mais Nada

- a apresentação terá `7 slides`
- a base visual será o `sac-po-v1-dados.html`
- o foco será `escopo funcional`
- haverá `2 mockups obrigatórios`
- não haverá tela de login detalhada
- os módulos centrais aparecerão em cards/blocos
- as integrações ficarão em segundo plano
- o resultado final deve ser facilmente editável

## 22. Entregável Esperado Da Próxima Etapa

Quem continuar a partir deste documento deve produzir:

- uma nova apresentação baseada no capítulo 5
- com conteúdo reescrito para escopo do sistema
- com `2 telas mockadas` obrigatórias
- com a mesma família visual
- sem cair em conteúdo técnico de engenharia de dados

## 23. Checklist Final Para A Próxima IA

- leu o `sac-po-v1-dados.html` inteiro
- leu o `sac-po-diretiva-final.md`
- consultou o `sof-mpo-design-patterns.md`
- entendeu que o foco mudou de `dados` para `produto`
- manteve a linguagem institucional
- previu espaço para autenticação sem desenhar login
- incluiu `tela de cadastro`
- incluiu `tela de pesquisa com histórico`
- mostrou módulos do escopo
- deixou claro o que é atual e o que é futuro
- manteve tudo editável

## 24. Resumo Executivo Em Uma Frase

Criar uma nova apresentação com a mesma base visual do capítulo 5 atual, mas transformando a narrativa em uma visão de produto do `SAC/PO`, com foco no escopo inicial do sistema e em mockups institucionais das telas principais.
