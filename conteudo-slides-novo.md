# CONTEÚDO DOS SLIDES – CAPÍTULO 4: DISCUSSÃO DOS RESULTADOS

Esta estrutura consolida o conteúdo do Capítulo 4 da tese em **20 slides**, seguindo o formato estabelecido nos capítulos anteriores.

---

## JUSTIFICATIVA DA ESTRUTURA E QUANTIDADE DE SLIDES

### Por que 20 slides?

O Capítulo 4 tem **76 páginas** de conteúdo técnico e teórico denso. Inicialmente foram propostos 16 slides, mas ficaria **esmagado** — muita informação por slide, prejudicando a clareza e o impacto visual.

A expansão para 20 slides permite:
- Dar **respiro visual** a cada tema
- **Separar** resultados estatísticos de análises teóricas
- **Detalhar** a evolução histórica (dividida em 2 slides: FHC/Lula e Dilma/Temer/Bolsonaro)
- **Destacar** os achados mais importantes em slides dedicados

### Estrutura lógica baseada no texto

O Capítulo 4 do texto-original.md está organizado em grandes seções. Segui essa mesma lógica:

| Seção do Texto | Slides | Conteúdo |
|----------------|--------|----------|
| 4.1 Regressão Beta | 1-3 | Abertura, metodologia, validação |
| 4.1.1 e 4.1.2 | 4-7 | Resultados dos dois modelos + predição |
| 4.1.3 Robustez | 8-9 | Comparação e testes |
| Dualidade Funcional | 10-11 | Teoria + evidência empírica |
| 4.2 Análise Bayesiana | 12-13 | Validação e modelos expandidos |
| 4.3 Evolução Histórica | 14-15 | FHC/Lula + Dilma/Temer/Bolsonaro |
| Custos de Governar | 16 | ICG e emendas |
| 4.4 Mudanças Institucionais | 17 | EC 32, EC 86, Orçamento Secreto |
| NdG Compensatório | 18-19 | Mecanismo + novo equilíbrio |
| Síntese | 20 | Conclusão do capítulo |

### Como distribui o conteúdo

**Slides 1-3 (Metodologia):** Introdução suave antes dos dados pesados
- Slide 1: Abertura e pergunta central
- Slide 2: Explicação da Regressão Beta
- Slide 3: Validação (gráficos de Cullen e Frey)

**Slides 4-7 (Resultados):** Os dois modelos estatísticos separados
- Slides 4-5: Coalescência (resultado + diagnóstico)
- Slides 6-7: Taxa de Sucesso (resultado + predição)

**Slides 8-9 (Análise Crítica):** Comparação e robustez
- Slide 8: Contraste entre os modelos
- Slide 9: Síntese dos testes com variáveis de controle

**Slides 10-11 (Teoria):** O achado teórico central
- Slide 10: Hipótese da Dualidade Funcional
- Slide 11: Evidência empírica (dados de Lameirão)

**Slides 12-13 (Validação Bayesiana):** Confirmação estatística
- Slide 12: Modelos base
- Slide 13: Comparação dos 7 modelos expandidos

**Slides 14-15 (História):** Evolução do NdG por governo
- Slide 14: FHC e Lula (estabilidade e expansão)
- Slide 15: Dilma, Temer, Bolsonaro (crise e ruptura)

**Slides 16-17 (Contexto Institucional):** O que mudou no sistema
- Slide 16: Custos de governar (ICG)
- Slide 17: Mudanças institucionais (ECs, orçamento secreto)

**Slides 18-19 (Interpretação Final):** A tese central
- Slide 18: NdG como mecanismo compensatório (diagrama circular)
- Slide 19: O novo equilíbrio Executivo-Legislativo

**Slide 20 (Síntese):** Os 7 achados principais e transição para Cap. 5

---

### **SLIDE 1: Abertura do Capítulo 4**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** Discussão dos Resultados
* **Subtítulo:** O Núcleo de Governo como Mecanismo Compensatório no Presidencialismo de Coalizão

* **Pergunta Central:**
  * Como o tamanho do centro presidencial e o estilo de gestão influenciam a capacidade do Executivo de implementar sua agenda legislativa?

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo A - Impacto):**

* **Imagem de Fundo:** Congresso Nacional à noite com sobreposição verde institucional.
* **Título:** Tipografia grande, centralizada, em caixa alta.
* **Destaque:** Selo visual "Capítulo 4" no canto inferior.

---

### **SLIDE 2: Metodologia – Regressão Linear Beta**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** Regressão Linear Beta
* **Referência:** (Ferrari & Cribari-Neto, 2004)

* **Por que usar Regressão Beta?**
  * Variável resposta contínua no intervalo [0,1]
  * Adequada para taxas e proporções
  * Função de ligação: logit

* **Variáveis do Modelo:**
  * **Dependentes:** Coalescência Governamental | Taxa de Sucesso do Executivo
  * **Independentes:** Tamanho do Centro Presidencial | Estilo de Gestão (Hierárquico, Colegiado, Competitivo)

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo C - Técnico):**

* **Layout:** Três colunas (Por quê? | Variáveis Dependentes | Variáveis Independentes)
* **Ícones:** Gráfico de distribuição, engrenagem, checklist
* **Setas:** Conectando variáveis independentes → dependentes

---

### **SLIDE 3: Validação dos Dados**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** Confirmação da Distribuição Beta
* **Subtítulo:** Gráficos de Cullen e Frey

* **Gráfico Esquerdo:** Coalescência Governamental
* **Gráfico Direito:** Taxa de Sucesso do Executivo

* **Resultado:** ✓ Ambas as variáveis seguem distribuição Beta → Modelo adequado

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo D - Gráficos):**

* **Layout:** Dois gráficos de dispersão lado a lado
* **Destaque:** Ponto de observação marcado com círculo, região "Beta" indicada
* **Rodapé:** Checkmark verde com confirmação

---

### **SLIDE 4: Modelo 1 – Coalescência Governamental**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** Resultados: Coalescência Governamental
* **Indicador:** Pseudo R² = 0.42

* **Tabela de Coeficientes:**

| Variável | Estimativa | Significância |
|----------|------------|---------------|
| Tamanho Centro Presidencial | +0.11 | p < 0.01 *** |
| Estilo Colegiada | -0.44 | p = 0.11 (não sig.) |
| Estilo Competitiva | -1.10 | p < 0.01 *** |

* **Interpretação:** 
  * +11,79% de chance de coalescência por unidade adicional no centro
  * Estilo competitivo reduz coalescência em 66,7%

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo B - Dados):**

* **Tabela:** Bordas arredondadas, células significativas em verde, não significativas em cinza
* **Barra lateral:** Indicador visual de R² = 0.42 (preenchimento moderado)

---

### **SLIDE 5: Diagnóstico do Modelo de Coalescência**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** Diagnóstico: Observações Influentes
* **Subtítulo:** Distância de Cook e Análise de Resíduos

* **Gráfico Esquerdo:** Distância de Cook
  * ⚠ Observações 34 e 35 acima do corte (Gabinetes Temer)

* **Gráfico Direito:** Resíduos
  * ✓ Distribuídos aleatoriamente ao redor de zero

* **Conclusão:** Modelo bem ajustado, mas com observações influentes

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo D - Gráficos):**

* **Layout:** Dois gráficos lado a lado
* **Destaque:** Pontos 34 e 35 em vermelho, linha de corte tracejada
* **Ícones:** Alerta amarelo para outliers, check verde para resíduos

---

### **SLIDE 6: Modelo 2 – Taxa de Sucesso do Executivo**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** Resultados: Taxa de Sucesso Legislativo
* **Indicador:** Pseudo R² = 0.70 — MODELO ROBUSTO

* **Tabela de Coeficientes:**

| Variável | Estimativa | Significância |
|----------|------------|---------------|
| Tamanho Centro Presidencial | +0.18 | p < 0.01 *** |
| Estilo Colegiada | -0.67 | p = 0.01 * |
| Estilo Competitiva | -2.21 | p < 0.01 *** |

* **Interpretação:** 
  * +19,46% de sucesso por unidade adicional no centro
  * Hierárquico = melhor | Colegiado = -49% | Competitivo = -89%

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo B - Dados):**

* **Selo:** "ROBUSTO" no canto superior direito
* **Tabela:** Todas as células em verde (tudo significativo)
* **Barra lateral:** Indicador visual de R² = 0.70 (alto)

---

### **SLIDE 7: Predição por Estilo de Gestão**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** Impacto na Taxa de Sucesso
* **Subtítulo:** Predição pelo Tamanho do Centro Presidencial

* **Gráfico de Linhas:**
  * 🟢 Linha Verde: Estilo Hierárquico (maior sucesso)
  * 🟡 Linha Amarela: Estilo Colegiado
  * 🔴 Linha Vermelha: Estilo Competitivo (menor sucesso)

* **Legenda do Eixo X:** Tamanho do Centro Presidencial
* **Legenda do Eixo Y:** Taxa de Sucesso Predita

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo D - Gráfico):**

* **Gráfico:** Três curvas com intervalos de confiança (ribbons transparentes)
* **Hierárquico:** Linha no topo
* **Competitivo:** Linha na base
* **Legenda:** À direita do gráfico

---

### **SLIDE 8: Comparação dos Modelos**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** O Contraste: Dois Modelos, Dois Destinos

| Aspecto | Coalescência | Taxa de Sucesso |
|---------|--------------|-----------------|
| Pseudo R² | 0.42 | 0.70 |
| Robustez | ⚠ Frágil | ✓ Robusto |
| Outliers | Sim (Temer) | Não |
| Conclusão | Lógica Informal | Lógica Formal |

* **Insight Principal:**
  * Coalescência → governada por negociações políticas (politics)
  * Sucesso → responde a variáveis institucionais (policy)

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo C - Comparativo):**

* **Layout:** Duas colunas grandes lado a lado
* **Esquerda:** Tons alaranjados, ícone X
* **Direita:** Tons verdes, ícone ✓
* **Divisória:** Linha vertical ao centro

---

### **SLIDE 9: Testes de Robustez – Síntese**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** Robustez dos Modelos com Variáveis de Controle

* **Modelo Coalescência (Frágil):**
  * Heterogeneidade → Tamanho Centro perde significância
  * Índice Necessidade → Ambas as variáveis perdem significância
  * ⚠ Modelo não robusto

* **Modelo Taxa de Sucesso (Robusto):**
  * Popularidade → Mantém significância
  * Heterogeneidade → Efeito positivo (p < 0.001)
  * Distância Ideológica → Preditor forte negativo (p < 0.001)
  * ✓ Modelo robusto

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo B - Tabela):**

* **Layout:** Duas tabelas empilhadas (Coalescência acima, Taxa de Sucesso abaixo)
* **Cores:** Verde para significância mantida, vermelho para perda
* **Ícones:** Alerta para frágil, check para robusto

---

### **SLIDE 10: Hipótese da Dualidade Funcional do Executivo**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** A Dualidade Funcional do Executivo
* **Subtítulo:** Por que os modelos têm resultados diferentes?

| PRESIDÊNCIA-ORGANIZADORA | PRESIDÊNCIA-DECISORA |
|--------------------------|----------------------|
| Função: Organização do sistema político | Função: Decisão e implementação |
| Lógica: Politics (negociações, poder) | Lógica: Policy (eficácia, resultados) |
| Fenômeno: Coalescência | Fenômeno: Sucesso Legislativo |
| Natureza: Informal, relacional | Natureza: Formal, institucional |
| Modelo: Frágil (esperado) | Modelo: Robusto (esperado) |

* **Insight:** A fragilidade do modelo de coalescência é, em si, um achado teórico

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo B - Conceito):**

* **Layout:** Duas colunas simétricas (azul vs verde)
* **Ícones:** Representativos para cada função
* **Seta:** Bidirecional conectando as duas colunas

---

### **SLIDE 11: Evidência Empírica da Dualidade**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** Quem tem a "Caneta"?
* **Subtítulo:** Frequência decisória dos órgãos centrais (1995-2011)
* **Referência:** (Lameirão, 2019)

* **Gráfico de Barras:**
  * Casa Civil: 4%
  * Min. Fazenda: 35%
  * Min. Planejamento: 42%

* **Interpretação:**
  * Casa Civil = Filtro, coordenação (Presidência-Organizadora)
  * MF + MP = "Junta Orçamentária" – controle de recursos (Presidência-Decisora)

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo D - Gráfico):**

* **Gráfico:** Barras horizontais
* **Casa Civil:** Cor neutra/cinza (valor baixo)
* **MF e MP:** Cor verde (valores altos)
* **Ícones:** Filtro para CC, Caneta/$ para MF/MP

---

### **SLIDE 12: Análise Bayesiana – Confirmação**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** Validação Bayesiana dos Resultados
* **Subtítulo:** 2000 iterações, Rhat = 1 (convergência perfeita)

* **Tabela Esquerda – Coalescência (R² = 0.25):**

| Coeficiente | Estimativa | IC 95% |
|-------------|------------|--------|
| TCP | -0.03 | [-0.05, -0.01] |
| Colegiada | +0.26 | [0.06, 0.47] |
| Competitiva | +0.27 | [0.09, 0.45] |

* **Tabela Direita – Taxa Sucesso (R² = 0.76):**

| Coeficiente | Estimativa | IC 95% |
|-------------|------------|--------|
| TCP | +0.18 | [0.12, 0.24] |
| Colegiada | -0.68 | [-1.27, -0.13] |
| Competitiva | -2.22 | [-2.74, -1.69] |

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo B - Tabelas):**

* **Layout:** Duas tabelas lado a lado
* **Esquerda:** Borda alaranjada (R² baixo)
* **Direita:** Borda verde (R² alto)

---

### **SLIDE 13: Modelos Bayesianos Expandidos**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** Comparação dos Modelos Bayesianos
* **Subtítulo:** Qual especificação é a mais robusta?

| Modelo | Controle | R² Bayesiano | Status |
|--------|----------|--------------|--------|
| 1 | Base | 0.754 | ✓ Robusto |
| 2 | Coalescência | 0.252 | ⚠ Frágil |
| 3 | Popularidade | 0.756 | ✓ Robusto |
| 4 | Heterogeneidade | **0.807** | ✓ MELHOR |
| 5 | Tamanho Coalizão | 0.787 | ✓ Robusto |
| 6 | Índice Necessidade | 0.949 | ✗ Problemas de convergência |
| 7 | Distância Ideológica | 0.949 | ✗ Problemas de convergência |

* **Recomendação:** Modelo 4 como especificação final

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo B - Tabela):**

* **Modelo 4:** Destaque com fundo verde, selo "RECOMENDADO"
* **Modelos 6 e 7:** Fundo vermelho, ícone de alerta
* **Nota:** "Rhat > 1.05 = Descartados"

---

### **SLIDE 14: Evolução do NdG – FHC e Lula**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** Evolução do Núcleo de Governo
* **Subtítulo:** De FHC (1995) a Lula (2010)

| Aspecto | FHC (1995-2002) | Lula (2003-2010) |
|---------|-----------------|------------------|
| Perfil | Técnico-gerencial | Político-expandido |
| Ministros CC | Clóvis Carvalho, Pedro Parente | José Dirceu, Dilma Rousseff |
| Foco | Estabilização econômica | PAC, políticas sociais |
| Ministérios | 24-27 | 33-37 |
| ICG | 14 → 37 | 63 → 69 |
| Coalescência | 55-61% | 49-50% |
| Heterogeneidade | 30-31 | 42-48 |

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo C - Comparativo):**

* **Layout:** Duas colunas (FHC esquerda, Lula direita)
* **FHC:** Tons azuis/cinza, ícone de gráfico
* **Lula:** Tons vibrantes, ícone de expansão
* **Timeline:** Barra superior conectando 1995-2010

---

### **SLIDE 15: Evolução do NdG – Dilma a Bolsonaro**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** A Inflexão e a Ruptura
* **Subtítulo:** Dilma (2011-2016), Temer (2016-2018), Bolsonaro (2019-2022)

| Governo | Perfil | ICG | Coalescência | Resultado |
|---------|--------|-----|--------------|-----------|
| Dilma | Tecnocrático, centralizador | **76** (máximo) | 35-43% | Impeachment |
| Temer | Articulador tradicional | 62* | 60% | Reformas aprovadas |
| Bolsonaro | Reativo, personalista | 58* | 40% | NdG fragmentado |

* **Insight:** O ICG atingiu o pico em Dilma I (76) – custo máximo de governar

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo D - Timeline):**

* **Timeline:** 2011 → 2022 com marcas de ruptura
* **Dilma:** Cor vermelha, ícone de alerta
* **Temer:** Cor azul, ícone de negociação
* **Bolsonaro:** Cor laranja, ícone de fragmentação

---

### **SLIDE 16: Índice de Custo do Governo (ICG)**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** O Custo Crescente de Governar
* **Subtítulo:** Índice de Custo do Governo (Bertholini & Pereira, 2017)

* **Gráfico de Linha – Evolução do ICG:**
  * FHC I: 14
  * FHC II: 37
  * Lula I: 63
  * Lula II: 69
  * Dilma I: **76**

* **Tabela Complementar – Emendas Parlamentares (R$ milhões):**

| Mandato | Emendas |
|---------|---------|
| FHC I | 160 |
| Lula I | 2.601 |
| Bolsonaro | 21.000 |

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo D - Gráfico):**

* **Gráfico de linha:** Curva ascendente
* **Gradiente:** Verde → Amarelo → Vermelho
* **Seta:** Indicando tendência de alta

---

### **SLIDE 17: Mudanças Institucionais**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** Mudanças que Enfraqueceram o Executivo
* **Subtítulo:** O poder migra para o Legislativo

* **Card 1 – EC 32/2001:**
  * MPs limitadas a 60 dias + 1 reedição

* **Card 2 – EC 86/2015:**
  * Emendas de execução obrigatória

* **Card 3 – Orçamento Secreto (RP-9):**
  * Emendas de relator sem identificação do proponente

* **Card 4 – Veto Fragilizado:**
  * Legislativo amplia poder de derrubar vetos

* **Legenda:** 1989-2012: Domínio Executivo → Pós-2013: Domínio Legislativo

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo B - Cards):**

* **Layout:** 4 cards em grid 2x2
* **Cores:** Degradê do verde (EC 32) ao vermelho (Orç. Secreto)
* **Ícones:** Representativos para cada mudança
* **Seta vertical:** "Perda de Poder do Executivo"

---

### **SLIDE 18: NdG como Mecanismo Compensatório**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** O Núcleo de Governo como Mecanismo Compensatório
* **Subtítulo:** Reinterpretando os resultados

* **Diagrama Circular (5 etapas):**
  1. Ambiente político se torna hostil
  2. Presidente expande e centraliza o NdG
  3. Sucesso legislativo se mantém (curto prazo)
  4. Custos políticos acumulam
  5. Limite estrutural é atingido (ruptura)

* **Insight Principal:**
  * NdG hierárquico = modelo para TEMPOS DIFÍCEIS
  * Não é causa do sucesso, é RESPOSTA ao ambiente adverso

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo D - Diagrama):**

* **Diagrama:** Circular com 5 etapas conectadas por setas
* **Cores:** Verde → Amarelo → Laranja → Vermelho → Preto
* **Centro:** Ícone do NdG (engrenagem)
* **Ponto 5:** Destaque de ruptura

---

### **SLIDE 19: Novo Equilíbrio de Poder**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** O Congresso Fortalecido
* **Subtítulo:** Um novo regime de poder

| ANTES (1989-2012) | DEPOIS (2013+) |
|-------------------|----------------|
| Domínio do Executivo | Domínio do Legislativo |
| Emendas = moeda de troca | Emendas obrigatórias |
| MPs como agenda forçada | MPs limitadas |
| Veto = última palavra | Veto = negociação |
| Discricionariedade orçamentária | Orçamento impositivo |

* **Conclusão:** O presidencialismo de coalizão não morreu — tornou-se mais complexo e custoso

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo C - Comparativo):**

* **Layout:** Duas colunas grandes
* **Esquerda:** Tom verde (poder Executivo)
* **Direita:** Tom azul (poder Legislativo)
* **Balança visual:** Pendendo para a direita
* **Referências:** Faria (2023), Rey (2023)

---

### **SLIDE 20: Síntese dos Achados do Capítulo 4**

**TEXTO INTEGRAL PARA O SLIDE:**

* **Título:** Capítulo 4: Síntese dos Achados

1. ✓ NdG hierárquico + grande = maior sucesso legislativo (R² = 0.70)

2. ⚠ Coalescência é governada por lógica informal (R² = 0.42) → frágil

3. 📊 Dualidade Funcional: Presidência-Organizadora vs. Presidência-Decisora

4. 📈 Custos de governar: ICG 14 → 76 (crescimento contínuo)

5. 🔄 NdG funciona como mecanismo compensatório (não causa, mas resposta)

6. ⚖ Poder migrou para o Legislativo (pós-2013)

7. 🎯 Modelo 4 (heterogeneidade) = mais robusto (R² Bayesiano = 0.807)

* **Próximo Capítulo:** Conclusões e recomendações

**ESPECIFICAÇÕES GRÁFICAS E DIAGRAMAÇÃO (Tipo A - Síntese):**

* **Layout:** Lista numerada com ícones coloridos
* **Checkmarks:** Verdes para achados confirmados
* **Alertas:** Amarelos para ressalvas
* **Fundo:** Neutro, limpo
* **Rodapé:** Seta para "Capítulo 5 →"

---

# RESUMO DOS 20 SLIDES

| # | Tema | Tipo |
|---|------|------|
| 1 | Abertura do Capítulo | Impacto |
| 2 | Metodologia: Regressão Beta | Técnico |
| 3 | Validação: Distribuição Beta | Gráficos |
| 4 | Modelo Coalescência | Dados |
| 5 | Diagnóstico Coalescência | Gráficos |
| 6 | Modelo Taxa de Sucesso | Dados |
| 7 | Predição por Estilo | Gráfico |
| 8 | Comparação dos Modelos | Comparativo |
| 9 | Robustez: Síntese | Tabela |
| 10 | Dualidade Funcional | Conceito |
| 11 | Evidência Empírica | Gráfico |
| 12 | Análise Bayesiana | Tabelas |
| 13 | Modelos Bayesianos | Tabela |
| 14 | Evolução: FHC e Lula | Comparativo |
| 15 | Evolução: Dilma a Bolsonaro | Timeline |
| 16 | Custos (ICG) | Gráfico |
| 17 | Mudanças Institucionais | Cards |
| 18 | Mecanismo Compensatório | Diagrama |
| 19 | Novo Equilíbrio | Comparativo |
| 20 | Síntese | Resumo |
