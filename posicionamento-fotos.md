# ESTRUTURA DOS SLIDES COM IMAGENS – CAPÍTULO 4

Pasta de imagens: `imagens_pdf/`

---

## SLIDE 3: Validação dos Dados – Distribuição Beta
**Layout:** Duas colunas lado a lado

| Posição | Arquivo | Descrição |
|---------|---------|-----------|
| **Esquerda** | `SLIDE_03_cullen_frey_coalescencia.jpeg` | Gráfico de Cullen e Frey – Coalescência Governamental |
| **Direita** | `SLIDE_03_cullen_frey_taxa_sucesso.jpeg` | Gráfico de Cullen e Frey – Taxa de Sucesso |

**Nota:** Ambos confirmam distribuição Beta (ponto dentro da região beta)

---

## SLIDE 4: Modelo 1 – Coalescência Governamental
**Layout:** Tabela superior + Gráfico inferior

| Posição | Arquivo | Descrição |
|---------|---------|-----------|
| **Topo** | `SLIDE_04_boxplot_coalescencia.png` | Tabela 1 – Boxplot Coalescência |
| **Base** | `SLIDE_04_estimacao_parametros_coalescencia.png` | Gráfico 7 – Estimação dos parâmetros |
| **Opcional** | `SLIDE_04_scatter_taxa_sucesso.png` | Scatter Plot (se precisar comparar) |

**Dados do slide:**
- Pseudo R² = 0.42
- TCP: +0.11 (p < 0.01)
- Competitiva: -1.10 (p < 0.01)

---

## SLIDE 5: Diagnóstico do Modelo de Coalescência
**Layout:** Dois gráficos lado a lado

| Posição | Arquivo | Descrição |
|---------|---------|-----------|
| **Esquerda** | `SLIDE_05_distancia_cook_coalescencia.png` | Gráfico 8 – Distância de Cook (obs. 34 e 35 = Temer) |
| **Direita** | `SLIDE_05_analise_residuos_coalescencia.png` | Gráfico 9 – Resíduos (distribuição ao redor do zero) |

**Legenda:** Alerta amarelo para outliers (Temer), check verde para resíduos

---

## SLIDE 6: Modelo 2 – Taxa de Sucesso
**Layout:** Tabela superior + Gráfico inferior (selo "ROBUSTO")

| Posição | Arquivo | Descrição |
|---------|---------|-----------|
| **Topo** | `SLIDE_06_boxplot_taxa_sucesso.png` | Tabela 4 – Boxplot Taxa Sucesso |
| **Base** | `SLIDE_06_estimacao_parametros_sucesso.png` | Gráfico 11 – Estimação dos parâmetros |
| **Canto** | `SLIDE_06_distancia_cook_sucesso.png` | Gráfico 12 – Distância de Cook (sem outliers) |

**Dados do slide:**
- Pseudo R² = 0.70 (DESTACAR)
- TCP: +0.18 (p < 0.01)
- Competitiva: -2.21 (p < 0.01)

---

## SLIDE 7: Diagnóstico do Modelo de Sucesso
**Layout:** Gráfico de resíduos + predição

| Posição | Arquivo | Descrição |
|---------|---------|-----------|
| **Esquerda** | `SLIDE_06_analise_residuos_sucesso.png` | Gráfico 13 – Análise de Resíduos |
| **Direita** | `SLIDE_07_predicao_taxa_sucesso_estilo.png` | Gráfico 14 – Predição por Estilo de Gestão |

**Cores das linhas:**
- 🟢 Hierárquico (topo)
- 🟡 Colegiado (meio)
- 🔴 Competitivo (base)

---

## SLIDE 8: Comparação dos Modelos
**Layout:** Tabela comparativa (sem imagens externas, usar dados)

| Aspecto | Coalescência | Taxa de Sucesso |
|---------|--------------|-----------------|
| R² | 0.42 | 0.70 |
| Robustez | ⚠ Frágil | ✓ Robusto |
| Outliers | Sim (Temer) | Não |

**Opcional:** Inserir miniaturas dos gráficos de diagnóstico lado a lado

---

## SLIDE 9: Testes de Robustez – Síntese
**Layout:** Grid 2x2 ou seleção dos 4 principais

| Posição | Arquivo | Contexto |
|---------|---------|----------|
| **Opcional 1** | `SLIDE_09_robustez_heterogeneidade_sucesso_coef.png` | Melhor controle (Modelo 4) |
| **Opcional 2** | `SLIDE_09_robustez_popularidade_sucesso_coef.png` | Sem efeito da popularidade |
| **Opcional 3** | `SLIDE_09_robustez_distancia_sucesso_coef.png` | Efeito negativo forte |
| **Síntese** | `SLIDE_09_robustez_sintese_comparativo.png` | Comparativo geral |

**Nota:** Escolher 2-3 imagens mais representativas. O slide deve mostrar:
- Coalescência: variáveis perdem significância
- Taxa Sucesso: mantém significância

---

## SLIDE 10: Dualidade Funcional do Executivo
**Layout:** Conceitual (pode usar ícones, sem imagens do PDF)

**Sem imagens do PDF** – usar diagrama conceitual

---

## SLIDE 11: Evidência Empírica – Quem tem a "Caneta"?
**Layout:** Gráfico de barras horizontal

| Posição | Arquivo | Descrição |
|---------|---------|-----------|
| **Principal** | `SLIDE_11_frequencia_decisoria_lameirao.png` | Gráfico barras – Frequência decisória 1995-2011 |
| **Detalhe** | `SLIDE_11_frequencia_decisoria_detalhe.png` | Complemento/segundo gráfico |

**Dados do gráfico:**
- Casa Civil: 4% (coordenação)
- Min. Fazenda: 35% (recursos)
- Min. Planejamento: 42% (autorização)

**Interpretação visual:** Casa Civil em cinza (baixo), MF/MP em verde (alto)

---

## SLIDE 12: Análise Bayesiana – Confirmação
**Layout:** Duas tabelas lado a lado

**Sem imagens do PDF** – montar tabelas com dados:

| Coalescência (R² = 0.25) | Taxa Sucesso (R² = 0.76) |
|--------------------------|--------------------------|
| TCP: -0.03 | TCP: +0.18 |
| Colegiada: +0.26 | Colegiada: -0.68 |
| Competitiva: +0.27 | Competitiva: -2.22 |

---

## SLIDE 13: Modelos Bayesianos Expandidos
**Layout:** Tabela comparativa

**Sem imagens do PDF** – usar dados:

| Modelo | Controle | R² | Status |
|--------|----------|-----|--------|
| 1 | Base | 0.754 | ✓ |
| 4 | Heterogeneidade | **0.807** | ✓ **RECOMENDADO** |
| 6 | Necessidade | 0.949 | ✗ (convergência) |

---

## SLIDE 14: Evolução – FHC e Lula
**Layout:** Comparativo lado a lado

**Sem imagens do PDF** – usar tabela/timeline:

| FHC (1995-2002) | Lula (2003-2010) |
|-----------------|------------------|
| 24-27 ministérios | 33-37 ministérios |
| ICG: 14→37 | ICG: 63→69 |
| Coalescência: 55-61% | Coalescência: 49-50% |

---

## SLIDE 15: Evolução – Dilma a Bolsonaro
**Layout:** Timeline 2011-2022

**Sem imagens do PDF** – usar timeline:

- **2011-2016** Dilma: ICG 76 (pico), impeachment
- **2016-2018** Temer: ICG 62, reformas
- **2019-2022** Bolsonaro: ICG 58, NdG fragmentado

---

## SLIDE 16: Índice de Custo do Governo (ICG)
**Layout:** Gráfico de linha ascendente

**Sem imagens do PDF** – montar gráfico:

```
FHC I (14) ──→ FHC II (37) ──→ Lula I (63) ──→ Lula II (69) ──→ Dilma I (76)
   Verde         Amarelo          Laranja         Vermelho         Vermelho escuro
```

---

## SLIDE 17: Mudanças Institucionais
**Layout:** Cards 2x2

**Sem imagens do PDF** – usar cards com ícones:

- **EC 32/2001:** MPs limitadas
- **EC 86/2015:** Emendas obrigatórias
- **RP-9:** Orçamento secreto
- **Veto:** Poder reduzido

---

## SLIDE 18: NdG como Mecanismo Compensatório
**Layout:** Diagrama circular

**Sem imagens do PDF** – usar diagrama:

```
[Ambiente hostil] → [Expande NdG] → [Sucesso mantido] → [Custos acumulam] → [Ruptura]
         ↑___________________________________________________________________________↓
```

---

## SLIDE 19: Novo Equilíbrio de Poder
**Layout:** Comparativo ANTES vs DEPOIS

**Sem imagens do PDF** – usar tabela:

| ANTES (1989-2012) | DEPOIS (2013+) |
|-------------------|----------------|
| Domínio Executivo | Domínio Legislativo |
| Emendas = barganha | Emendas = obrigação |

---

## SLIDE 20: Síntese
**Layout:** Lista numerada com ícones

**Sem imagens do PDF** – checklist textual

---

# RESUMO DAS IMAGENS UTILIZADAS

## Slides COM imagens do PDF (11 slides):
- **Slide 3:** 2 imagens (Cullen-Frey)
- **Slide 4:** 2-3 imagens (Boxplot + Estimação)
- **Slide 5:** 2 imagens (Cook + Resíduos)
- **Slide 6:** 2-3 imagens (Boxplot + Estimação + Cook)
- **Slide 7:** 1-2 imagens (Predição + Resíduos)
- **Slide 9:** 1-3 imagens (seleção de robustez)
- **Slide 11:** 1-2 imagens (Frequência decisória)

**Total: ~15 imagens utilizadas de 36 extraídas**

## Slides SEM imagens do PDF (9 slides):
Slides 1, 2, 8, 10, 12, 13, 14, 15, 16, 17, 18, 19, 20 → Usar tabelas, diagramas e ícones

---

# CHECKLIST DE IMAGENS NA PASTA

- [x] SLIDE_03_cullen_frey_coalescencia.jpeg
- [x] SLIDE_03_cullen_frey_taxa_sucesso.jpeg
- [x] SLIDE_04_boxplot_coalescencia.png
- [x] SLIDE_04_estimacao_parametros_coalescencia.png
- [x] SLIDE_04_scatter_taxa_sucesso.png
- [x] SLIDE_05_distancia_cook_coalescencia.png
- [x] SLIDE_05_analise_residuos_coalescencia.png
- [x] SLIDE_06_boxplot_taxa_sucesso.png
- [x] SLIDE_06_estimacao_parametros_sucesso.png
- [x] SLIDE_06_distancia_cook_sucesso.png
- [x] SLIDE_06_analise_residuos_sucesso.png
- [x] SLIDE_07_predicao_taxa_sucesso_estilo.png
- [x] SLIDE_07_predicao_coalescencia_estilo.png
- [x] SLIDE_07_predicao_coalescencia_estilo_zoom.png
- [x] SLIDE_09_robustez_*.png (16 imagens de robustez)
- [x] SLIDE_11_frequencia_decisoria_lameirao.png
- [x] SLIDE_11_frequencia_decisoria_detalhe.png
