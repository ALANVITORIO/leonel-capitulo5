
--- Página 1 ---
1
4 DISCUSSÃO DOS RESULTADOS
A análise dos resultados à luz do referencial teórico confirma a pertinência de
se compreender o Núcleo de Governo como um mecanismo compensatório no arranjo
institucional brasileiro. Os dados empíricos demonstram que a variação na tipologia
do NdG – notadamente a combinação entre o tamanho do centro presidencial e os
estilos de gestão – responde de forma dinâmica aos desafios impostos pela coalizão
e pelo Legislativo. Quando a coalescência governamental é baixa ou a
heterogeneidade ideológica da base aliada é alta, o presidente tende a recorrer a um
NdG mais robusto e centralizador para compensar a falta de coesão e assegurar o
controle sobre a agenda. Por outro lado, diante de um Congresso mais fragmentado
e com maior poder de barganha, estilos de gestão mais competitivos ou colegiados
podem ser acionados para gerenciar conflitos e distribuir recursos de forma a manter
o apoio legislativo. Os modelos estatísticos que seguem corroboram essa lógica,
revelando que a configuração do NdG não é aleatória, mas sim uma variável
estratégica que compensa déficits de governabilidade, funcionando como um
contrapeso institucional para a consecução dos objetivos presidenciais.
4.1 Análise Estatística utilizando Regressão Linear Beta
Ferrari e Cribari-Neto (2004) propuseram, em artigo seminal, ajuste de
regressão para modelar variável resposta que segue uma distribuição beta, utilizando
uma parametrização que é indexada por parâmetros de média e dispersão. A
distribuição beta tem a seguinte função de densidade de probabilidade:
𝛤(𝑝+𝑞)
𝑓(𝑦;𝑝,𝑞) = 𝑦(𝑝−1)(1−𝑦)(𝑞−1),0 < 𝑦 < 1
𝛤(𝑝)𝛤(𝑞) (1)
Em que, 𝑝 > 0, 𝑞 > 0 e 𝛤(∙) é a função Gama. A média e a variância de y são
respectivamente:
𝑝
𝐸(𝑦) =
𝑝+𝑞 (2)

--- Página 2 ---
2
𝑝𝑞
𝑉𝑎𝑟(𝑦) =
(𝑝+𝑞)2(𝑝+𝑞 +1) (3)
O modelo de regressão beta é adequado para casos em que a variável de
interesse é contínua e limitada ao intervalo de 0 a 1. Para a análise de regressão, é
comum modelar a média da resposta em termos de outros parâmetros e variáveis
explicativas, além de definir um modelo que inclua um parâmetro de precisão
(Oliveira, 2004). Com o objetivo de estabelecer uma estrutura de regressão para a
média da resposta juntamente com um parâmetro de precisão, Ferrari e Cribari-Neto
(2004) sugeriram uma parametrização alternativa da densidade da distribuição beta,
na qual:
𝑝
(4)
𝜇 =
𝑝+𝑞
𝜙 = 𝑝+𝑞 (5)
Com isso, 𝑝 = 𝜇𝜙 e 𝑞 = (1−𝜇)𝜙. Calculando novamente a média e a variância de y,
𝑉(𝜇)
das equações (2) e (3), com a nova parametrização, temos: 𝐸(𝑦) = 𝜇 e 𝑉𝑎𝑟(𝑦) = ,
1+𝜙
sendo que 𝑉(𝜇) = 𝜇(1−𝜇). O parâmetro 𝜇 é a média da variável 𝑦 e 𝜙 é o parâmetro
de precisão. Nota-se que quanto maior o 𝜙, menor a variância de y. Com base nas
equações (4) e (5), a densidade de y pode ser reescrita da forma a seguir.
𝛤(𝜙)
𝑓(𝑦;𝜇,𝜙) = 𝑦(𝜇𝜙−1)(1−𝑦)((1−𝜇)𝜙−1)
𝛤(𝜇𝜙)𝛤((1−𝜇)𝜙) (6)
Com 0 < 𝑦 < 1, 0 < 𝜇 < 1 e 𝜙 > 0. Sendo 𝑦 = (𝑦 ,...,𝑦 )𝑇 vetor de n variáveis
1 𝑛
aleatórias independentes em que cada 𝑦 tem densidade na forma (6) com parâmetro
𝑡
de precisão desconhecido, o modelo de regressão beta é obtido assumindo que a
média de 𝑦 pode ser escrita como:
𝑡

--- Página 3 ---
3
𝑘
𝑔(𝜇 ) = ∑𝑥 𝛽 = 𝜂
𝑡 𝑡𝑖 𝑖 𝑡
𝑖=1
(7)
Em que 𝛽 = (𝛽 ,...,𝛽 )𝑇 corresponde ao vetor de parâmetros desconhecidos
1 𝑝
e 𝑥 ,...,𝑥 às observações de p variáveis independentes conhecidas. A função g (∙)
𝑖1 𝑖𝑝
é uma função de ligação com as seguintes características: estritamente monótona,
duas vezes diferenciável, com domínio em (0,1) e a imagem em 𝑅. A variância de 𝑦
𝑡
é uma função de 𝜇 (Ferrari e Cribari-Neto, 2004).
𝑡
Há diferentes possibilidades de escolha da função de ligação, mas neste
trabalho foi utilizada a função logit, que pode ser expressa como:
𝑒𝑥
𝑡
𝑇𝛽
𝜇 =
𝑡 1+𝑒𝑥
𝑡
𝑇𝛽 (8)
Para estimar o vetor de parâmetros k-dimensional 𝜃 = (𝛽𝑇,𝜙)𝑇, com k = (p+1),
emprega-se o Método da Máxima Verossimilhança, usando o algoritmo de otimização
quasi-Newton conhecido como BFGS. A demonstração da estimação pode ser vista
em Ferrari e Cribari-Neto (2004). A interpretação dos parâmetros de 𝛽 é de razão de
chances (odds ratio), que pode ser calculada por meio da 𝑒𝑥𝑝⁡(𝛽).
𝑖
A validade inferencial do modelo depende do atendimento a alguns
pressupostos fundamentais:
(i) a variável resposta 𝑦 deve ser contínua no intervalo aberto (0,1) (Cribari-
Neto & Zeileis, 2010);
(ii) condicionalmente às covariáveis, 𝑦 ⁡~⁡𝐵𝑒𝑡𝑎(𝜇 ,ϕ), com 𝜇 ∈ (0,1) e ϕ⁡ > 0
𝑡 𝑡 𝑡
(Ferrari & Cribari-Neto, 2004);
(iii) a variância de 𝑦 depende de sua média e de ϕ, caracterizando
𝑡
heterocedasticidade estrutural:
𝑉𝑎𝑟(𝑦 ) =⁡
𝜇𝑡(1−𝜇𝑡)
(Ferrari&Cribari−Neto,2004);
𝑡
1+⁡ϕ
(iv) a função de ligação 𝑔⁡(∙) deve ser escolhida de forma apropriada,
comumente a logit (Cribari-Neto & Zeileis, 2010);

--- Página 4 ---
4
(v) assume-se independência entre observações e estimação por MLE (Ferrari
& Cribari-Neto, 2004).
Apesar de suas vantagens, a regressão beta apresenta algumas limitações:
(a) inabilidade para lidar com observações nos limites 0 e 1, requerendo
transformações ou modelos inflacionados (Ospina & Ferrari, 2012);
(b) forma fixa da variância, que pode não se adequar a todas as situações
empíricas (Simas, Barreto-Souza & Rocha, 2010);
(c) sensibilidade a outliers devido à estimação por MLE, sendo desejável o uso
de métodos robustos em tais contextos (Ospina & Ferrari, 2012);
(d) subestimação de erros-padrão em algumas situações, mitigável por
técnicas de correção de viés (Simas, Barreto-Souza & Rocha, 2010);
(e) fragilidade em amostras pequenas, que pode comprometer testes de
hipóteses, demandando correções de Bartlett ou bootstrap (Ospina & Ferrari, 2012).
Para avaliar a qualidade do ajuste do modelo de regressão, é necessário
verificar o cumprimento das suposições do modelo beta, incluindo a distribuição da
variável resposta, o componente sistemático (𝜂 ) e a homoscedasticidade. Além
𝑡
disso, é importante identificar observações extremas que possam influenciar os
resultados do modelo (Oliveira, 2004; Ferrari e Cribari-Neto, 2004; Bayer, 2011;
Ferrari et al., 2011). Ferrari e Cribari-Neto (2004) e Ferrari et al. (2011) propõem três
técnicas de diagnóstico.
A primeira diz respeito a uma medida global da qualidade do ajuste, resíduo
componente do desvio, na qual a discrepância no ajuste pode ser medido pelo dobro
da diferença entre o máximo do logaritmo da verossimilhança do modelo saturado e
do modelo postulado, como exposto na expressão a seguir.
𝑛
𝐷(𝑦;𝜇,𝜙) = ∑2{𝑙 (𝜇 ~,𝜙)−𝑙(𝜇 ,𝜙)}
𝑡 𝑡 𝑡
𝑡=1
Note que 𝜇̃ é a solução de
𝜕𝑙𝑡
= 0. Quando 𝜙 for conhecido, a medida de
𝑡
𝜕𝜇𝑡
discrepância pode ser definida como 𝐷(𝑦;𝜇,𝜙), sendo 𝜇 o estimador de máxima
verossimilhança de 𝜇 sob o modelo pesquisado. Quando 𝜙 for desconhecido, a
proposta de Ferrari e Cribari-Neto (2004) é o uso de uma aproximação

--- Página 5 ---
5
𝐷(𝑦;𝜇̂,𝜙̂),⁡desvio do modelo pesquisado, sendo que 𝐷(𝑦;𝜇̂,𝜙̂) = 𝛴𝑛 (𝑟𝑑)2.⁡Pode-se
𝑡=1 𝑡
calcular 𝑟𝑑 por:
𝑡
1
𝑟𝑑 = 𝑠𝑖𝑛𝑎𝑙(𝑦 −𝜇̂){2(𝑙 (𝜇̃,𝜙̂)−𝑙 (𝜇̂,𝜙̂))}2
𝑡 𝑡 𝑡 𝑡 𝑡 𝑡 𝑡
A segunda técnica utiliza gráficos de probabilidade meio-normal com
envelopes simulados, uma vez que a distribuição dos resíduos não é conhecida. A
terceira técnica envolve a análise dos pontos de alavanca, que examina a existência
de observações com grande impacto na estimativa dos coeficientes de regressão.
Além dessas três técnicas, a detecção de observações influentes sobre as estimativas
dos parâmetros do modelo é realizada utilizando a distância de Cook (Cook, 1977).
Concluída a etapa de descrição teórica do modelo de regressão beta, a
próxima etapa é a descrição das variáveis e dos dois modelos ajustados neste
trabalho. Um modelo com a variável coalescência governamental como variável
resposta e tamanho do centro presidencial e estilo de gestão como variáveis
independentes. O outro modelo traz a taxa de sucesso do Executivo na Câmara dos
Deputados como variável resposta e as mesmas variáveis independentes do primeiro
ajuste.
Em ambos os modelos, as variáveis dependentes e os valores das
observações variam entre 0 e 1. Por meio da função descdist do pacote fitdistrplus do
software R foi gerado o gráfico de Cullen e Frey com o objetivo de ajudar a determinar
a forma da distribuição de cada variável, com base em medidas de skewness e
kurtosis (Delcambre et al., 2021).
Gráfico 5 – Gráfico de Cullen e Frey para a variável coalescência governamental

--- Página 6 ---
6
Fonte: Elaboração do autor.

--- Página 7 ---
7
Gráfico 6 – Gráfico de Cullen e Frey para a variável taxa de sucesso do Executivo na Câmara dos Deputados
Fonte: Elaboração do autor.
Por meio da análise dos gráficos de Cullen e Frey, observa-se que as variáveis
seguem distribuição beta. Dessa forma, é possível ajustar um modelo de regressão
beta ao conjunto dos dados. A variável independente tamanho do centro presidencial
é numérica de contagem da extensão e ao poder da estrutura administrativa e política
diretamente controlada pelo presidente. Incluindo o número de ministérios,
secretarias, agências e outros órgãos que estão sob a supervisão direta do presidente
e de seus assessores mais próximos (Brito, 2023). A variável estilo de gestão é
variável qualitativa nominal com três categorias, são elas: Hierárquica, Colegiada e
Competitiva.
Tendo em vista a expressão (8), os modelos podem ser especificados da forma
a seguir.
● Regressão beta da Coalescência como variável dependente
𝑔( ) = 𝛽 +𝛽 +𝛽
coalescência 0 1⁡⋅⁡𝑡𝑎𝑚𝑎𝑛ℎ𝑜𝑐𝑒𝑛𝑡𝑟𝑜𝑝𝑟𝑒𝑠𝑖𝑑𝑒𝑛𝑐𝑖𝑎𝑙 2⁡⋅⁡𝑒𝑠𝑡𝑖𝑙𝑜𝑑𝑒𝑔𝑒𝑠𝑡ã𝑜𝑐𝑜𝑙𝑒𝑔𝑖𝑎𝑑𝑎
+𝛽
3⁡⋅⁡𝑒𝑠𝑡𝑖𝑙𝑜𝑑𝑒𝑔𝑒𝑠𝑡ã𝑜𝑐𝑜𝑚𝑝𝑒𝑡𝑖𝑡𝑖𝑣𝑎
● Regressão beta da taxa de sucesso do Executivo na Câmara dos
Deputados como variável dependente
𝑔( ) = 𝛽 +𝛽 +𝛽
𝑠𝑢𝑐𝑒𝑥𝑒𝑐 0 1⁡⋅⁡𝑡𝑎𝑚𝑎𝑛ℎ𝑜𝑐𝑒𝑛𝑡𝑟𝑜𝑝𝑟𝑒𝑠𝑖𝑑𝑒𝑛𝑐𝑖𝑎𝑙 2⁡⋅⁡𝑒𝑠𝑡𝑖𝑙𝑜𝑑𝑒𝑔𝑒𝑠𝑡ã𝑜𝑐𝑜𝑙𝑒𝑔𝑖𝑎𝑑𝑎
+𝛽
3⁡⋅⁡𝑒𝑠𝑡𝑖𝑙𝑜𝑑𝑒𝑔𝑒𝑠𝑡ã𝑜𝑐𝑜𝑚𝑝𝑒𝑡𝑖𝑡𝑖𝑣𝑎

--- Página 8 ---
8
4.1.1 Coalescência Governamental
A variável dependente Coalescência Governamental foi obtida com base nos
estudos de Amorim Neto (2006).
Destaca-se que existe mais de uma maneira de calcular a coalescência.
Amorim Neto (2000, 2006), Bertholini e Pereira (2017) e Mauerberg e Pereira (2020)
empregam uma fórmula derivada do índice de proporcionalidade desenvolvido por
Rose (1984) enquanto Carroll, Cox e Pachón (2006) adotam uma variação do índice
de Gallagher (1991). A diferença entre os índices consiste em como a
(des)proporcionalidade deve ser mensurada (Cox e Shugart, 1991; Gallagher, 1991).
Enquanto a variação do índice de Rose ignora por completo o número de partidos
envolvidos no processo, a variação do índice de Gallagher leva em conta quantos
partidos participam da distribuição dos portfólios ministeriais. Consequentemente, a
desproporcionalidade medida pela fórmula advinda do índice de Gallagher é mais
sensível a gabinetes maiores do que aquela proveniente do índice de Rose. Neste
trabalho seguiu-se Amorim Neto (2019a), portanto, adotando a Coalescência de
Rose.
Posto isso, a variação do índice de Rose a ser utilizada é prescrita da forma a
seguir.
𝑛
1
𝐶 = 1− ∑(|𝑆 −𝑀 |)
𝑓 2 𝑖 𝑖
𝑖=1
Na qual 𝐶 é a coalescência do gabinete f ; 𝑆 é a percentagem de cadeiras
𝑓 𝑖
asseguradas pelo partido i da coalizão na câmara em análise, tendo em vista o total
assegurado por todos os partidos que compõem a coalizão nesta casa em específico;
𝑀 é a percentagem de pastas ministeriais ocupadas pelo partido i. Os resultados
𝑖
descritivos confirmam que a tipologia do Núcleo de Governo influencia na
Coalescência Governamental.

--- Página 9 ---
9
Tabela 1 – Coalescência Câmara Rose (Boxplot)
Fonte: Elaboração do autor.
Tabela 2 – Taxa Sucesso Executivo Câmara (Scatter Plot)
Fonte: Elaboração do autor.
Especificadamente, tamanhos pequenos de centro de governo com estilos de
gestão descentralizadores (competitivo e colegiado) favorecem altos níveis de
coalescência.
Sobre a regressão, os resultados para fins de checagem serão expostos tanto
no formato de tabela quanto no gráfico conforme observado a seguir.
Tabela 3 – Estimação dos parâmetros do modelo de regressão beta Coalescência Governamental
Pseudo R²: 0.42, Log-Lik: 25.92, N: 49. Significância: *** p<0.01
Vari Esti Erro Valo Pr(>|
ável mativa Padrão r Z z|)
Inter - 0.27 - 0.06
cepto 0.51 1.89

--- Página 10 ---
10
Vari Esti Erro Valo Pr(>|
ável mativa Padrão r Z z|)
Tam 0.11 0.03 3.94 0.00
anho do ***
Centro
Presidenci
al
Estil - 0.28 - 0.11
o de 0.44 1.58
Gestão
Colegiada
Estil - 0.25 - 0.00
o de 1.10 4.45 ***
Gestão
Competitiv
a
Prec 9.98 1.93 5.17 0.00
isão (𝜙) ***
Gráfico 7 – Estimação dos parâmetros Coalescência Governamental
Fonte: Elaboração do autor.

--- Página 11 ---
11
Analisando as variáveis significativas, o tamanho do centro presidencial está
associado a um aumento na média da Coalescência Governamental.
Especificamente, para cada unidade adicional no tamanho do centro presidencial, a
média da Coalescência Governamental aumenta em 0,1115 unidades. A razão de
chance de 1,1179 sugere que a chance de um resultado positivo na coalescência
aumenta em aproximadamente 11,79% para cada unidade adicional no tamanho do
centro presidencial.
O estilo de gestão colegiada não foi estatisticamente significativo, indicando
que os dados não mostram uma associação com a Coalescência Governamental. Em
contraste, a estimativa negativa para o estilo de gestão competitiva sugere que essa
abordagem está associada a uma redução na média da coalescência. A razão de
chance de 0,333 implica que, ao adotar o estilo de gestão competitiva, a probabilidade
de a coalescência aumentar é 66,7% menor em comparação com o estilo de gestão
hierárquico.
Inicia-se o diagnóstico quanto a qualidade do ajuste do modelo pela análise do
gráfico da distância de Cook. A partir do gráfico 8, é possível perceber duas
observações acima do valor de corte, que indica um limiar auxiliar na identificação de
quais observações são consideradas influentes no modelo de regressão.
Gráfico 8 – Distância de Cook – Coalescência Governamental
Fonte: Elaboração do autor.

--- Página 12 ---
12
As observações 34 e 35 estão acima do valor de corte. Elas dizem respeito ao
primeiro e ao segundo gabinete do presidente Michel Temer. No gráfico 9, prossegue-
se a análise dos resíduos.
Gráfico 9 – Análise de Resíduos – Coalescência Governamental
Fonte: Elaboração do autor.
Os resíduos indicam que o modelo está bem ajustado, apesar da não
distribuição normal de deviance. Uma vez que os resíduos padronizados e deviance
estão aleatoriamente distribuídos no entorno do zero, bem como não há muitos
pontos com alta alavancagem.
Com o modelo ajustado, a predição da média da coalescência pelo tamanho
do centro do presidente por categoria de estilo de gestão, os resultados demonstram
que o estilo hierárquico é o que apresenta maior impacto na coalescência tendo em
vista o tamanho do centro presidencial.

--- Página 13 ---
13
Gráfico 10 – Predição da coalescência pelo tamanho do centro presidencial por categoria de estilo de gestão
Fonte: Elaboração do autor.
4.1.2 Taxa de Sucesso do Executivo na Câmara dos Deputados
A análise descritiva demonstrou que o tamanho do centro presidencial
conjugado com o estilo de gestão, conforme expectativa, afetam, positivamente, a
taxa de sucesso na Câmara dos Deputados.
Tabela 4 – Taxa de sucesso do Executivo na Câmara dos Deputados (Boxplot)
Fonte: Elaboração do autor.

--- Página 14 ---
14
Tabela 5 – Taxa de sucesso do Executivo na Câmara dos Deputados. (Scatter Plot)
Fonte: Elaboração do autor
Em outras palavras, quanto menor o centro presidencial, combinado com
estilos de gestão não centralizadores (competitivo e colegiado), maiores são as taxas
de sucesso na Câmara dos Deputados. Sobre a regressão, os resultados para fins de
checagem serão expostos, tanto no formato de tabela, quanto no gráfico conforme
observado a seguir.
Tabela 6 – Estimação dos parâmetros do modelo de regressão beta Taxa de Sucesso do Executivo na Câmara
dos Deputados
Pseudo R²: 0.70, Log-Lik: 34.74, N: 49. Significância: *** p<0.01, * p<0.05
Vari Esti Erro Valo Pr(>|
ável mativa Padrão r Z z|)
Inter - 0.27 - 0.02
cepto 0.66 2.41 *
Tam 0.18 0.03 6.15 0.00
anho do ***
Centro
Presidenci
al
Estil - 0.27 - 0.01
o de 0.67 2.48 *

--- Página 15 ---
15
Vari Esti Erro Valo Pr(>|
ável mativa Padrão r Z z|)
Gestão
Colegiada
Estil - 0.26 - 0.00
o de 2.21 8.53 ***
Gestão
Competitiv
a
Prec 11.0 2.16 5.10 0.00
isão (𝜙) 0 ***
Font
e:
Elaboração
do autor.
Gráfico 11 – Estimação dos parâmetros Taxa de Sucesso do Executivo na Câmara dos Deputados
Fonte: Elaboração do autor.
A estimativa do coeficiente da variável tamanho do centro presidencial foi
significativa, sugerindo que um aumento no tamanho do centro presidencial está

--- Página 16 ---
16
associado a um aumento na média da taxa de sucesso do Executivo na Câmara dos
Deputados. Para cada unidade adicional no tamanho do centro presidencial, a chance
de um resultado positivo na taxa de sucesso do Executivo aumenta em
aproximadamente 19,46%.
O estilo de gestão hierárquico foi introduzido no modelo como categoria de
referência. Na ausência da influência do tamanho do centro presidencial e dos estilos
de gestão colegiada e competitiva, a probabilidade de a taxa de sucesso do executivo
na Câmara dos Deputados ser maior do que zero é 48,4% menor.
O coeficiente negativo e significativo para o estilo de gestão colegiada (-
0,6746390) indica que a abordagem colegiada do estilo de gestão está associada a
uma redução na média da taxa de sucesso do Executivo. A razão de chance de
0,5094 sugere que a probabilidade de um resultado positivo no desempenho do
Executivo na Câmara dos Deputados diminui em aproximadamente 49,06%.
Além disso, o estilo de gestão competitiva também está relacionado a uma
queda na média da taxa de sucesso do Executivo. Neste caso, a razão de chance de
0,1093 indica que a chance de um resultado positivo diminui em cerca de 89,07%.
Gráfico 12 – Distância de Cook – Taxa de Sucesso do Executivo na Câmara dos Deputados
Fonte: Elaboração do autor.

--- Página 17 ---
17
Em um primeiro diagnóstico do comportamento dos dados modelados pela
regressão beta tendo como variável dependente a taxa de sucesso do Executivo na
Câmara dos Deputados, nota-se que não há uma observação que ultrapasse o valor
de corte, que indicaria influência desproporcional no modelo.
Gráfico 13 – Análise de Resíduos – Taxa de Sucesso do Executivo na Câmara dos Deputados
Fonte: Elaboração do autor.
O gráfico Half-Normal sugere que os resíduos não tenham distribuição normal,
não sendo uma suposição essencial na regressão beta, mas a falta de normalidade
pode, ainda assim, indicar problemas com a especificação do modelo ou com os
dados. Os diagnósticos adicionais, de modo geral, apontam para bom ajuste do
modelo com resíduos distribuídos aleatoriamente ao redor de zero e nenhuma
observação influente.
No que se refere à predição da taxa de sucesso do Executivo na Câmara dos
Deputados, os estilos hierárquico e colegiado com o aumento do tamanho do centro
presidencial têm impacto maior do que o estilo competitivo na taxa de sucesso do
Executivo, com intersecção nos intervalos de confiança, indicando a proximidade dos
dois primeiros estilos na força de influência na estratégia presidencial em aprovar
matérias de seu interesse na Câmara dos Deputados.
Gráfico 14 – Predição da Taxa de Sucesso do Executivo na Câmara dos Deputados pelo tamanho do centro
presidencial por categoria de estilo de gestão

--- Página 18 ---
18
Fonte: Elaboração do autor.
4.1.3 Coalescência Governamental: análise com variáveis exógenas
Para testar a robustez dos achados, o modelo de Coalescência Governamental foi
reavaliado com a inclusão de um conjunto de variáveis de controle.
4.1.3.1 Controle por Popularidade Presidencial
A reestimação do modelo (Tabela 7) mostra que o efeito da popularidade não é
estatisticamente significativo (p = 0,605).
Tabela 7 – Modelo Coalescência com Controle de Popularidade (Robustez)
Vari Esti Erro Val Pr(
ável mativa Padrão or Z >|z|)
(Int 0.4 0.0 5.8 0.0
ercept) 38 75 27 00
tam - 0.0 - 0.0
anho.centr 0.022 07 3.053 02
o_preside
ncial
estil 0.1 0.0 4.7 0.0
os_gestao 44 30 77 00
pop 0.0 0.0 0.5 0.6
ularidade 00 01 18 05

--- Página 19 ---
19
Vari Esti Erro Val Pr(
ável mativa Padrão or Z >|z|)
(phi 107 17. 6.0 0.0
) .004 632 69 00
Gráfico 15 – Análise de robustez (Popularidade): Coeficientes (Coalescência)
Gráfico 16 – Análise de robustez (Popularidade): Efeitos Preditivos (Coalescência)
4.1.3.2 Controle por Heterogeneidade da Coalizão
No modelo de Coalescência, a fragilidade é exposta, com apenas estilos_gestao
mantendo significância (p = 0,004) após o controle pela diversidade ideológica
(Tabela 8).
Tabela 8 – Modelo Coalescência com Controle de Heterogeneidade (Robustez)

--- Página 20 ---
20
Vari Esti Erro Val Pr(>
ável mativa Padrão or Z |z|)
(Int 0.44 0.07 5.72 0.00
ercept) 0 7 2 0
tam - 0.01 - 0.33
anho_cent 0.014 5 0.961 6
ro_preside
ncial
estil 0.12 0.04 2.85 0.00
os_gestao 4 3 2 4
hete - 0.00 - 0.64
rogeneida 0.002 4 0.464 3
de_da_coa
lizao
(phi 106. 17.6 6.06 0.00
) 916 17 9 0
Gráfico 17 – Análise de robustez (Heterogeneidade): Coeficientes (Coalescência)
Gráfico 18 – Análise de robustez (Heterogeneidade): Efeitos Preditivos (Coalescência)

--- Página 21 ---
21
4.1.3.3 Controle por Tamanho da Coalizão
A inclusão do tamanho da coalizão (Tabela 9) mostra que esta variável não tem efeito
na Coalescência (p = 0,405).
Tabela 9 – Modelo Coalescência com Controle de Tamanho da Coalizão (Robustez)
Vari Esti Erro Val Pr(>
ável mativa Padrão or Z |z|)
(Int 0.4 0.1 4.7 0.0
ercept) 90 04 07 00
tam - 0.0 - 0.0
anho_cent 0.018 07 2.628 09
ro_preside
ncial
estil 0.1 0.0 4.8 0.0
os_gestao 39 29 62 00
tam - 0.0 - 0.4
anho_da_ 0.002 03 0.833 05
coalizão
(phi 107 17. 6.0 0.0
) .616 733 69 00
Gráfico 19 – Análise de robustez (Tamanho da Coalizão): Coeficientes (Coalescência)

--- Página 22 ---
22
Gráfico 20 – Análise de robustez (Tamanho da Coalizão): Efeitos Preditivos (Coalescência)
4.1.3.4 Controle por Índice de Necessidade da Coalizão
No modelo de Coalescência, apenas o próprio índice se mostra significativo (com
efeito positivo, p = 0,034), mais uma vez demonstrando a falta de robustez das
variáveis originais para explicar a coesão (Tabela 10).
Tabela 10 – Modelo Coalescência com Controle de Índice de Necessidade (Robustez)
Variá Esti Erro Valor Pr(>|
vel mativa Padrão Z z|)
(Inter - 0.28 - 0.64
cept) 0.131 4 0.464 3
tama 0.00 0.01 0.06 0.94
nho_centro 1 4 9 5

--- Página 23 ---
23
Variá Esti Erro Valor Pr(>|
vel mativa Padrão Z z|)
_presidenci
al
estilo - 0.08 - 0.78
s_gestao 0.025 9 0.280 0
indic 0.00 0.00 2.12 0.03
e_de_neces 5 2 6 4
sidade_da_
coalizão
(phi) 100. 17.8 5.64 0.00
547 29 0 0
Gráfico 21 – Análise de robustez (Índice de Necessidade): Coeficientes (Coalescência)
Gráfico 22 – Análise de robustez (Índice de Necessidade): Efeitos Preditivos (Coalescência)

--- Página 24 ---
24
4.1.3.5 Controle por Distância Ideológica
A distância ideológica não afeta a Coalescência (p = 0,410), na qual as variáveis
principais, paradoxalmente, mantêm sua significância, um dos poucos testes onde
isso ocorre para este modelo (Tabela 11).
Tabela 11 – Modelo Coalescência com Controle de Distância Ideológica (Robustez)
Vari Esti Erro Val Pr(>
ável mativa Padrão or Z |z|)
(Int 0.5 0.1 3.0 0.0
ercept) 94 97 12 03
tam - 0.0 - 0.0
anho_cent 0.028 10 2.802 05
ro_preside
ncial
estil 0.1 0.0 3.5 0.0
os_gestao 81 51 90 00
dist - 0.1 - 0.4
ancia_ideo 0.109 32 0.823 10
logica
(phi 94. 16. 5.6 0.0
) 851 814 41 00
Gráfico 23 – Análise de robustez (Distância Ideológica): Coeficientes (Coalescência)

--- Página 25 ---
25
Gráfico 24 – Análise de robustez (Distância Ideológica): Efeitos Preditivos (Coalescência)
4.1.3.6 Taxa de Sucesso do Executivo na Câmara dos Deputados: análise com
variáveis exógenas
Para testar a robustez dos achados, o modelo de Taxa de Sucesso do Executivo foi
reavaliado com a inclusão de um conjunto de variáveis de controle.
4.1.3.7 Controle por Popularidade Presidencial
No modelo de Taxa de Sucesso, os efeitos das variáveis principais mantiveram-se
estatisticamente significativos e com a mesma direção, o que confere forte robustez
aos achados iniciais (Tabela 12).
Tabela 12 – Modelo Taxa de Sucesso com Controle de Popularidade (Robustez)
Vari Esti Erro Val Pr(>
ável mativa Padrão or Z |z|)
(Int - 0.2 - 0.0
ercept) 0.610 51 2.433 15
tam 0.1 0.0 7.2 0.0
anho.centr 81 25 56 00
o_preside
ncial
estil - 0.1 - 0.0
os_gestao 1.110 07 10.420 00

--- Página 26 ---
26
Vari Esti Erro Val Pr(>
ável mativa Padrão or Z |z|)
pop 0.0 0.0 0.6 0.5
ularidade 01 02 12 40
(phi 9.6 1.5 6.2 0.0
) 70 50 38 00
Gráfico 25 – Análise de robustez (Popularidade): Coeficientes (Taxa de Sucesso)
Gráfico 26 – Análise de robustez (Popularidade): Efeitos Preditivos (Taxa de Sucesso)
4.1.3.8 Controle por Heterogeneidade da Coalizão
Ao controlar pela diversidade ideológica (Tabela 13), o modelo de Taxa de Sucesso
revela que tamanho.centro_presidencial perde significância (p = 0,919), enquanto
heterogeneidade se torna um preditor positivo e forte (p < 0,001).
Análise de robustez (Distância Ideológica): Efeitos Preditivos (Taxa de Sucesso)

--- Página 27 ---
27
Tabela 13 – Modelo Taxa de Sucesso com Controle de Heterogeneidade (Robustez)
Vari Esti Erro Val Pr(>
ável mativa Padrão or Z |z|)
(Int - 0.23 - 0.00
ercept) 0.990 2 4.257 0
tam - 0.04 - 0.91
anho.centr 0.004 2 0.102 9
o_presiden
cial
estil - 0.12 - 0.00
os_gestao 0.698 2 5.713 0
hete 0.05 0.01 5.01 0.00
rogeneida 8 1 3 0
de_da_coa
lizao
(phi 13.1 2.12 6.17 0.00
) 39 7 7 0
Gráfico 27 – Análise de robustez (Heterogeneidade): Coeficientes (Taxa de Sucesso)
Gráfico 28 – Análise de robustez (Heterogeneidade): Efeitos Preditivos (Taxa de Sucesso)

--- Página 28 ---
28
4.1.3.9 Controle por Tamanho da Coalizão
A inclusão do tamanho da coalizão (Tabela 14) mostra que esta variável tem um efeito
positivo e significativo na Taxa de Sucesso (p = 0,004).
Tabela 14 – Modelo Taxa de Sucesso com Controle de Tamanho da Coalizão (Robustez)
Vari Esti Erro Val Pr(>
ável mativa Padrão or Z |z|)
(Int - 0.3 - 0.0
ercept) 1.355 42 3.960 00
tam 0.1 0.0 7.1 0.0
anho.centr 64 23 40 00
o_preside
ncial
estil - 0.0 - 0.0
os_gestao 1.132 97 11.683 00
tam 0.0 0.0 2.8 0.0
anho_da_ 24 09 63 04
coalizão
(phi 10. 1.7 6.2 0.0
) 745 28 18 00
Gráfico 29 – Análise de robustez (Tamanho da Coalizão): Coeficientes (Taxa de Sucesso)

--- Página 29 ---
29
Gráfico 30 – Análise de robustez (Tamanho da Coalizão): Efeitos Preditivos (Taxa de Sucesso)
4.1.3.10 Controle por Índice de Necessidade da Coalizão
Ao introduzir o controle por índice de necessidade (Tabela 15), as variáveis principais
do modelo de Taxa de Sucesso perdem significância, e o índice_de_necessidade
exibe um efeito negativo e significativo (p = 0,004).
Tabela 15 – Modelo Taxa de Sucesso com Controle de Índice de Necessidade (Robustez)
Variá Esti Erro Valor Pr(>|
vel mativa Padrão Z z|)
(Inter 1.82 0.68 2.66 0.00
cept) 2 5 1 8
tama 0.04 0.03 1.29 0.19
nho_centro 2 3 7 5

--- Página 30 ---
30
Variá Esti Erro Valor Pr(>|
vel mativa Padrão Z z|)
_presidenci
al
estilo - 0.21 - 0.19
s_gestao 0.279 3 1.312 0
indic - 0.00 - 0.00
e_de_neces 0.017 6 2.901 4
sidade_da_
coalizão
(phi) 16.9 2.94 5.75 0.00
65 8 4 0
Gráfico 31 – Análise de robustez (Índice de Necessidade): Coeficientes (Taxa de Sucesso)
Gráfico 32 – Análise de robustez (Índice de Necessidade): Coeficientes (Taxa de Sucesso)

--- Página 31 ---
31
4.1.3.11 Controle por Distância Ideológica
O controle pela distância ideológica (Tabela 16) revela que a distancia_ideologica tem
um efeito negativo e altamente significativo na Taxa de Sucesso (p < 0,001). É notável
que, mesmo diante deste forte controle, as variáveis originais se mantêm
significativas.
Tabela 16 – Modelo Taxa de Sucesso com Controle de Distância Ideológica (Robustez)
Vari Esti Erro Val Pr(
ável mativa Padrão or Z >|z|)
(Int 1.8 0.4 4.5 0.0
ercept) 88 18 15 00
tam 0.0 0.0 2.4 0.0
anho.centr 52 21 12 16
o_preside
ncial
estil - 0.1 - 0.0
os_gestao 0.456 06 4.288 00
dist - 0.2 - 0.0
ancia_ideo 1.468 79 5.256 00
logica
(phi 21. 3.7 5.7 0.0
) 723 96 23 00
Gráfico 33 – Análise de robustez (Distância Ideológica): Coeficientes (Taxa de Sucesso)

--- Página 32 ---
32
Gráfico 34 – Análise de robustez (Distância Ideológica): Coeficientes (Taxa de Sucesso)
Gráfico 35 – Análise de robustez (Distância Ideológica): Efeitos Preditivos (Taxa de Sucesso)
4.1.3.12 Síntese e conclusão da análise de robustez
A série de testes de robustez revela destinos analíticos marcadamente
distintos para os dois modelos propostos. O modelo para a Taxa de Sucesso
Legislativo demonstra ser consideravelmente robusto. A variável estilos_gestao se
confirma como um preditor forte e consistente, mantendo sua significância estatística
na maioria das especificações. Além disso, a distância ideológica emerge como uma

--- Página 33 ---
33
variável explicativa de grande poder, cujo efeito negativo e significativo sobre o
sucesso legislativo é um dos achados mais importantes desta análise. O efeito do
tamanho do centro presidencial, embora significativo no modelo base, mostra-se
menos estável, perdendo força explicativa na presença de controles como a
heterogeneidade e a necessidade da coalizão. Isso sugere que seu impacto inicial
pode ser, em parte, mediado por essas outras dinâmicas de gestão da coalizão.
Em forte contraste, o modelo para a Coalescência Governamental se mostra
frágil e não robusto. Os preditores principais, tamanho do centro e estilos de gestão,
frequentemente perdem significância estatística quando variáveis de controle
contextuais e institucionais são introduzidas. Da mesma forma, os próprios controles
raramente se mostram significativos para explicar a variação na coalescência. Este
padrão de instabilidade, no entanto, não deve ser interpretado como uma mera
limitação empírica ou como a caracterização do fenômeno como "difuso". Pelo
contrário, a ausência de um achado robusto é, em si, um achado teórico.
A incapacidade do modelo de explicar consistentemente a variação da
Governança Coalescente aponta para a necessidade de uma reconceitualização do
papel do Executivo. A hipótese da Dualidade Funcional do Executivo oferece essa
reconceitualização, distinguindo entre:
• Presidência-Organizadora: função mínima de organização do sistema
político, arbitragem de conflitos e garantia do funcionamento do sistema,
que inclui a formação de coalizões e a gestão da agenda legislativa.
• Presidência-Decisora: função mais visível de decisão e implementação
de políticas públicas.
A aparente "difusão" da coalescência pode ser reinterpretada como um reflexo
dessa dualidade. A alocação de pastas ministeriais (mensurada pela coalescência) é
um ato que pertence predominantemente à esfera da Presidência-Organizadora. Sua
lógica é fundamentalmente política (politics), regida por negociações partidárias,
distribuição de poder e manutenção da estabilidade da coalizão – fatores muitas
vezes informais, relacionais e contextuais que transcendem as variáveis
macroinstitucionais e de estilo de gestão capturadas pelo modelo. Já a Taxa de
Sucesso Legislativo está mais diretamente vinculada à Presidência-Decisora, cujo

--- Página 34 ---
34
desempenho é mais sensível a variáveis institucionais e de gestão (como o estilo de
gestão e o tamanho do centro), explicando a robustez encontrada nesse modelo.
Portanto, a fragilidade do modelo de coalescência não invalida o esforço
explicativo; antes, sinaliza a natureza distinta do fenômeno. Ela revela os limites de
modelos que não conseguem capturar a lógica específica da Presidência-
Organizadora e sua gestão da politics. Transformar esse "não achado" em um achado
teórico significa reconhecer que a Governança Coalescente é um processo
primordialmente ancorado na função organizadora do Executivo, cuja complexidade
exige ferramentas analíticas que vão além das variáveis tradicionalmente associadas
à eficácia decisória.
A fragilidade e a não robustez do modelo para a Coalescência Governamental,
em forte contraste com o modelo de sucesso legislativo, sinalizam que o fenômeno
da distribuição de cargos exige uma abordagem que vá além das variáveis formais
de estrutura e estilo de gestão do Núcleo de Governo (NdG). Esse resultado deve ser
encarado como um achado teórico, sustentando a Hipótese da Dualidade Funcional
do Executivo.
Para dar base empírica a essa dualidade, é crucial examinar a frequência
decisória dos órgãos centrais, conforme analisado por Lameirão (2019). Os dados
demonstram que a Casa Civil, órgão que concentra a responsabilidade pela maioria
das competências de um NdG, assina um número percentualmente baixo de
iniciativas legislativas, alcançando apenas 4% do total analisado no período de 1995
a 2011.
Em contraste notável, os Ministérios da Fazenda (MF) e do Planejamento (MP)
referendam mais decretos do que a Casa Civil e, em todos os anos e governos
observados, detêm a autoria de um maior número percentual de legislação. MF e MP,
que integram a chamada “junta orçamentária”, têm a atribuição de autorizar os gastos
do governo, o que é decisivo em qualquer ação governamental.
Essa disparidade de frequência decisória sustenta a distinção de funções: a
Casa Civil exerce a função de coordenação da política (Presidência-Organizadora),
atuando como filtro ou guardião, mas não possui a ‘caneta’ da distribuição de
recursos. O poder de alocação de benefícios, do 'pork' e da distribuição de cargos
(elementos centrais da coalescência) reside, em grande parte, nos ministérios
financeiros/orçamentários (MF/MP).

--- Página 35 ---
35
Portanto, o fato de a estrutura formal da Casa Civil e a tipologia do NdG,
focadas primariamente na coordenação interministerial (CIG), não refletirem
diretamente o controle sobre os recursos (financeiros e de cargos) do Executivo,
justifica por que a estrutura da Casa Civil não impacta a estatística da coalescência
no modelo.
4.2 Análise Estatística utilizando Regressão Linear Beta sob perspectiva
Bayesiana
A Regressão Beta é um modelo adequado para situações em que a variável
dependente é contínua e restrita ao intervalo [0,1], como proporções ou taxas. Sob
uma perspectiva Bayesiana, esse modelo é abordado utilizando princípios de
Inferência Bayesiana, em que incertezas sobre os parâmetros são representadas por
distribuições de probabilidade.
Na versão clássica da Regressão Beta, a variável dependente 𝑦 ∈ [0,1] é
modelada usando a distribuição Beta, cuja função de densidade é dada por:
𝛤(𝜙)
𝑓(𝑦;𝜇,𝜙) = 𝑦𝜇𝜙−1(1−𝑦)(1−𝜇)𝜙−1
𝛤(𝜇𝜙)𝛤((1−𝜇)𝜙)
Em que μ é a média da distribuição Beta, modelada como uma função das
variáveis explicativas 𝑋 [por exemplo, 𝜇 = 𝑔−1(𝑋𝛽), na qual 𝑔−1 é a função inversa,
como o logito].
𝜙 é um parâmetro de precisão (ou dispersão), que controla a concentração da
distribuição Beta.
Na abordagem Bayesiana, os parâmetros 𝛽 (do preditor linear) e 𝜙 são
tratados como variáveis aleatórias. O objetivo é determinar as distribuições a
posteriori desses parâmetros, dado um conjunto de dados 𝐷. A inferência Bayesiana
acompanha os passos a seguir.
As distribuições a priori é atribuída para 𝛽 e 𝜙. Essas escolhas são baseadas
no conhecimento prévio ou em suposições não informativas, como:
𝛽 ∼ 𝑁(0,𝜎2)
𝛽

--- Página 36 ---
36
𝜙 ∼ 𝛤(𝑎,𝑏)
Aqui, 𝜎2é a variância da distribuição normal para os coeficientes e 𝑎,𝑏 são
𝛽
hiperparâmetros que controlam a forma da distribuição a priori da precisão 𝜙.
A verossimilhança é baseada na distribuição Beta. Para um conjunto de 𝑛
observações, a função de verossimilhança é:
𝑛
𝐿(𝐷) = ∏𝑓(𝜇 ,𝜙)
𝑖
𝑖=1
A posteriori é obtida pela combinação da verossimilhança com as priores
usando o Teorema de Bayes:
𝑝(𝐷) ∝ 𝐿(𝐷) ⋅𝑝(𝛽)⋅𝑝(𝜙)
Pressupostos da Abordagem Bayesiana
(i) Especificação correta do modelo e das distribuições a priori: exige-se uma
formulação completa, composta pela verossimilhança Beta e pelas
distribuições a priori para 𝛽 e 𝜙. A qualidade da inferência depende
diretamente dessa especificação (Gelman et al., 2013; Ntzoufras, 2009).
(ii) Escolha adequada das distribuições a priori: distribuições a priori são
extremamente vagas podem resultar em problemas numéricos e estimativas
implausíveis, especialmente na escala logit. Distribuições a priori fracas, porém
informativas, são frequentemente recomendadas (Gelman et al., 2013;
Branscum; Johnson; Thurmond, 2007).
(iii) Independência das observações: assume-se que, condicionalmente às
covariáveis, as observações 𝑦 são independentes. Estruturas de dependência
𝑖
(como dados longitudinais) requerem extensões do modelo (Osplna; Ferrari,
2012).
(iv) Estrutura da Variância: o modelo assume que a variabilidade dos dados é bem
descrita pela estrutura de variância da distribuição Beta, que é uma função da
média e do parâmetro de precisão. Embora a distribuição Beta seja flexível
(podendo assumir formatos unimodais, em 'U' etc.), essa estrutura pode não

--- Página 37 ---
37
ser adequada para todos os padrões de dispersão encontrados na prática
(Smithson; Verkuilen, 2006).
Limitações da Abordagem Bayesiana
(i) Influência das distribuições a priori: distribuições a priori informativas em
excesso podem dominar os dados, enquanto distribuições a priori mal
escolhidas podem levar a inferências distorcidas. Recomenda-se a realização
de análises de sensibilidade e "prior predictive checks" (Gelman et al., 2013).
(ii) Custo computacional elevado: a estimação da distribuição a posteriori via
MCMC pode demandar tempo considerável, especialmente em modelos
complexos ou com grandes amostras (Ntzoufras, 2009).
(iii) Sensibilidade à má especificação do modelo: a abordagem Bayesiana, assim
como a frequentista, é vulnerável a especificações incorretas do modelo.
Estratégias robustas e verificações diagnósticas são necessárias (Branscum;
Johnson; Thurmond, 2007).
(iv) Problemas em amostras pequenas: apesar da flexibilidade Bayesiana, em
amostras muito pequenas os resultados podem depender fortemente das
distribuições a priori, tornando essencial o uso de distribuições a priori
informativas baseadas em conhecimento substantivo (Gelman et al., 2013).
(v) Limitação quanto a valores 0 e 1: assim como no caso clássico, o modelo Beta
padrão não acomoda valores exatamente iguais a 0 ou 1. Para esses casos,
utiliza-se a Regressão Beta Inflada em zero e um (Ospina; Ferrari, 2012).
Serão realizadas 2000 iterações, das quais 1000 serão descartadas como
“burning”. A semente utilizada será a de número 9180.
4.2.1 Coalescência Governamental
● Variável resposta
o ‘coalesscencia_camara_rose’ (tcr): numérica contínua dentro do
intervalo [0,1]
● Variáveis explicativas
o ‘estilo_gestao’ (eg): categórica com três categorias (Hierárquica,
Competitiva, Colegiada). Será utilizada a categoria “Hierárquica”
como referência no modelo.

--- Página 38 ---
38
o ‘tamanho_centro_presidencial’ (tcp): numérica discreta.
Coeficiente Estimativa Erro Padrão LI – IC 95% LS – IC Rhat
95%
Intercepto 0.54 0.10 0.35 0.73 1
tcp -0.03 0.01 -0.05 -0.01 1
eg:Colegiada 0.26 0.10 0.06 0.47 1
eg:Competitiv 0.27 0.09 0.09 0.45 1
a
R² Bayesiano 0.2544281 0.08612833 0.08483959 0.412807 N/A
Fonte: Elaboração do autor.
O coeficiente negativo para ‘tamanho_centro_presidencial’ (tcp) indica que,
quanto maior o número do centro presidencial, menor será a
‘taxa_sucesso_executivo_camara’. Como o erro padrão é pequeno (0.01) e o
intervalo de confiança (IC) não inclui o zero, essa estatística é considerada relevante.
Ao observar a variável ‘estilo_gestao’, tanto a categoria Colegiada e
Competitiva apresentaram coeficiente positivo, o que significa que, em relação à
categoria de referência (Hierárquica), ambas as categorias aumentam a
‘taxa_sucesso_executivo_camara’. Ambas as categorias não incluem zero no IC e
são consideradas significativas.
O rhat de 1 indica que as cadeias convergiram corretamente, o que é um sinal
de que o modelo posterior é confiável.
O R² bayesiano (R² adaptado para o caso de modelos bayesianos) revela que
25% da variância observada na variável resposta é explicada pelo modelo proposto,
ou seja, o modelo proposto não é indicado para explicar o comportamento da
`coalescencia_camara_rose`.
4.2.2 Taxa de Sucesso na Câmara dos Deputados
● Variável resposta
o ‘taxa_sucesso_executivo_camara’ (tsec): numérica contínua
dentro do intervalo [0,1]

--- Página 39 ---
39
● Variáveis explicativas
o ‘estilo_gestao’ (eg): categórica com três categorias:
(Hierárquica, Competitiva, Colegiada). Será utilizada a categoria
“Hierárquica” como referência no modelo.
o ‘tamanho_centro_presidencial’ (tcp): numérica discreta.
LI – IC LS – IC Rha
Coeficiente Estimativa Erro Padrão
95% 95% t
Intercepto -0.67 0.29 -1.25 -0.09 1
tcp 0.18 0.03 0.12 0.24 1
eg: Colegiada -0.68 0.29 -1.27 -0.13 1
eg: -2.22 0.27 -2.74 -1.69 1
Competitiva
R² Bayesiano 0.7556864 0.02739745 0.6867065 0.7916153 N/A
Fonte: Elaboração do autor.
É importante esclarecer que, por se tratar de uma variável entre 0 e 1, o
procedimento da função ‘brm’ no R é realizar uma transformação de logito para
auxiliar na modelagem do problema.
O coeficiente positivo para ‘tamanho_centro_presidencial’ (tcp) indica que,
quanto maior o número do centro presidencial, maior será a
‘taxa_sucesso_executivo_camara’. Como o erro padrão é pequeno (0.03) e o
intervalo de confiança (IC) não inclui o zero, essa estatística é considerada relevante.
Ao observar a variável ‘estilo_gestao’, a categoria ‘Colegiada’ apresentou
coeficiente negativo, porém, maior que a categoria Competitiva, o que significa que,
em relação à categoria de referência (Hierárquica), ambas as categorias reduzem a
‘taxa_sucesso_executivo_camara’, sendo o estilo competitivo o menos eficiente para
aumentar essa taxa de sucesso. Ambas as categorias não incluem zero no IC e são
consideradas significativas, principalmente para a categoria Competitiva que possui
IC muito distante do zero.
O Rhat de 1 indica que as cadeias convergiram corretamente, o que é um sinal
de que o modelo posterior é confiável. Além disso, o R² bayesiano (R² adaptado para

--- Página 40 ---
40
o caso de modelos bayesianos) revela que aproximadamente 76% da variância
observada na variável resposta é explicada pelo modelo proposto.
4.2.3 Resultado Estatístico
A análise realizada nos dois modelos apresentou resultados relevantes sobre
os fatores que influenciam as variáveis de interesse: a
‘taxa_sucesso_executivo_camara’ e a ‘coalescencia_camara_rose’. No primeiro
modelo, foi evidenciado que o aumento do ‘tamanho_centro_presidencial’ tem um
impacto positivo na ‘taxa_sucesso_executivo_camara’, enquanto diferentes
‘estilo_gestao’, especialmente o “Competitivo”, tendem a reduzir essa taxa. A
convergência das cadeias e o alto R² Bayesiano indicam que o modelo é robusto e
explica bem a variabilidade observada na variável resposta.
No segundo modelo, os resultados indicam que o aumento do
‘tamanho_centro_presidencial’ diminui a ‘coalescencia_camara_rose’, enquanto os
‘estilo_gestao’ ‘Colegiado’ e ‘Competitivo’ aumentam essa coalescência. No entanto,
o R² Bayesiano deste modelo é baixo, sugerindo que ele explica uma parcela limitada
da variância da variável resposta.
4.2.3.1 Reinterpretação da Coalescência Governamental
A análise estatística do modelo para a Coalescência Governamental
demonstrou ser frágil e não robusta. Os preditores principais, como o tamanho do
centro presidencial e os estilos de gestão, frequentemente perdem significância
estatística quando variáveis de controle contextuais e institucionais são introduzidas.
Da mesma forma, o baixo Bayesiano indica que o modelo explica uma parcela
limitada da variância observada na distribuição de cargos.
Essa instabilidade ou ausência de um achado robusto não deve ser
interpretada como uma limitação empírica ou um problema do modelo. Pelo contrário,
a fragilidade é, em si, um achado teórico que aponta para a necessidade de uma
reconceitualização do papel do Executivo, o que é fornecido pela hipótese da
Dualidade Funcional do Executivo.
Essa tese distingue duas funções presidenciais fundamentais:

--- Página 41 ---
41
1. Presidência-Organizadora: função voltada para a organização do sistema
político, incluindo a formação de coalizões e a gestão da agenda legislativa; sua lógica
é fundamentalmente política (politics).
2. Presidência-Decisora: função mais visível de decisão e implementação de
políticas públicas.
A alocação de pastas ministeriais, mensurada pela coalescência, é um ato que
pertence predominantemente à esfera da Presidência-Organizadora. Sua lógica é
regida por negociações partidárias, distribuição de poder e manutenção da
estabilidade da coalizão.
A distinção funcional entre os órgãos do Núcleo de Governo (NdG) restrito
sustenta empiricamente essa dualidade. Os Gráficos 2 e 3 de Lameirão (2019)
evidenciam que, em termos de produção legal do Executivo, o Ministério da Fazenda
e o Ministério do Planejamento referendam muito mais decretos e atos normativos do
que a Casa Civil ao longo do período investigado (1995–2015) (Gaylord e Rennó,
2012). O Planejamento, em particular, detém a posição dianteira na autoria percentual
da legislação (Gaylord e Rennó, 2012).

--- Página 42 ---
42
Embora a Casa Civil seja o órgão central de coordenação do NdG no
presidencialismo de coalizão, com funções de coordenação e integração da ação
governamental, e atue como filtro de bastidor na apreciação de atos normativos para
checagem jurídica e política, ela exerce primariamente um papel de coordenação
política. Contudo, a Casa Civil não detém a “caneta” da distribuição de recursos e do
controle financeiro. Essa atribuição permanece com a Fazenda, que, em conjunto
com o Planejamento, integra a "junta orçamentária, que autoriza os gastos do
governo, o que é decisivo em qualquer ação governamental". Esses dois órgãos são
recorrentemente acionados nas decisões por administrarem as políticas econômicas
e orçamentárias.
Desse modo, a estrutura e o estilo de gestão da Casa Civil se correlacionam
mais fortemente com a Presidência-Decisora (coordenação de políticas) e não
impactam diretamente a estatística da coalescência no modelo testado. A fragilidade
do modelo de coalescência reforça que os fatores cruciais para a distribuição de
cargos e, consequentemente, para a coalescência, são aqueles que transcendem a
configuração formal do NdG. A dimensão informal e os bastidores – como
negociações e lealdades partidárias – são, portanto, determinantes no processo de
distribuição de cargos e na governança coalescente (Walcott e Hult, 1987).
Em última análise, a relação entre a coalescência e a atuação do NdG é incerta
e ambígua. Isso se deve às variações frequentes e diversificadas nas competências
e arranjos organizacionais dos órgãos do NdG restrito (como a Casa Civil) ao longo
dos governos, bem como à influência do Congresso Nacional, de Ministérios setoriais
e outros entes externos, além das modificações e disputas internas entre os próprios
Ministérios que compõem o NdG.

--- Página 43 ---
43
4.2.3.2 Modelagem utilizando Regressão Linear Beta sob perspectiva
Bayesiana com variáveis exógenas
Uma variável exógena é aquela cujo valor é determinado fora do modelo
teórico ou econométrico em análise, sendo considerada independente por não ser
influenciada pelas variáveis endógenas do sistema. Na econometria, a exogeneidade
implica ausência de correlação entre a variável e o termo de erro da equação
estimada — condição essencial para a validade das estimativas obtidas por Mínimos
Quadrados Ordinários (MQO) (Wooldridge, 2016).
Existem diferentes formas de exogeneidade — estrita, fraca e contemporânea
—, cada uma com implicações específicas para a identificação e estimação de
modelos (Greene, 2012). Por exemplo, em modelos macroeconômicos, a política
monetária é frequentemente tratada como exógena em relação à renda e ao
consumo, pois se assume que suas variações são decididas por uma autoridade
externa, como o banco central, e não pelas variáveis do próprio modelo (Enders,
2015).
A correta identificação de variáveis exógenas é crucial, especialmente na
presença de endogeneidade, pois sua violação exige o uso de instrumentos ou
métodos alternativos, como variáveis instrumentais (IV), para garantir a consistência
das estimativas.
No contexto da modelagem proposta com Regressão Linear Beta sob a
perspectiva Bayesiana, as variáveis exógenas desempenham papel central na
estrutura explicativa dos modelos. Nesta análise, variáveis
como tamanho_centro_presidencial, popularidade,
tamanho_coalizao e heterogeneidade_coalizao são tratadas como exógenas, pois
seus valores são presumivelmente determinados fora do sistema representado
pela taxa_sucesso_executivo_camara, ou seja, não são modeladas como
consequência direta do desempenho da taxa_sucesso_executivo_camara, mas como
fatores externos que o influenciam.
Sob a abordagem Bayesiana, essa distinção permanece relevante, pois a
exogeneidade assegura que as distribuições a posteriori dos parâmetros possam ser

--- Página 44 ---
44
interpretadas como reflexos causais, desde que o modelo esteja corretamente
especificado (Wooldridge, 2016; Gelman et al., 2013).
A incorporação dessas variáveis permite estimar com maior robustez os efeitos
de fatores institucionais e políticos sobre a taxa_sucesso_executivo_camara,
reduzindo riscos de endogeneidade que comprometeriam a validade das inferências.
A seleção cuidadosa e teoricamente fundamentada dessas variáveis contribui para o
desempenho superior de modelos como o Modelo 4, que integra componentes
institucionais, estruturais e comportamentais, mantendo boa convergência e alto
poder explicativo (Bayesian R² = 0,807).
Erro
Estimativa IC 2.5% IC 97.5%
Padrão
Modelo 1: taxa_sucesso_executivo_camara
Intercept -0.62 0.28 -1.15 -0.07
tamanho_centro_presidencial 0.17 0.03 0.11 0.23
estilos_gestaoColegiada -0.66 0.28 -1.20 -0.13
estilos_gestaoCompetitiva -2.14 0.25 -2.62 -1.65
Modelo 2: coalescencia_camara_rose
Intercept 0.52 0.10 0.33 0.72
tamanho_centro_presidencial -0.03 0.01 -0.05 -0.01
estilos_gestaoColegiada 0.25 0.10 0.05 0.45
estilos_gestaoCompetitiva 0.27 0.09 0.09 0.44
Modelo 3: taxa_sucesso_executivo_camara + popularidade
Intercept -0.71 0.31 -1.33 -0.11
tamanho_centro_presidencial 0.18 0.03 0.12 0.25
estilos_gestaoColegiada -0.80 0.32 -1.43 -0.16
estilos_gestaoCompetitiva -2.21 0.27 -2.74 -1.67
popularidade ~0.00 ~0.00 -0.01 0.01
Modelo 4: taxa_sucesso_executivo_camara + heterogeneidade_coalizao
Intercept -1.07 0.29 -1.64 -0.51
tamanho_centro_presidencial 0.01 0.06 -0.10 0.12
estilos_gestaoColegiada -0.41 0.30 -1.00 0.19
estilos_gestaoCompetitiva -1.36 0.35 -2.03 -0.67

--- Página 45 ---
45
heterogeneidade_coalizao 0.05 0.01 0.02 0.08
Modelo 5: taxa_sucesso_executivo_camara + tamanho_coalizao
Intercept -1.71 0.56 -2.81 -0.62
tamanho_centro_presidencial 0.18 0.03 0.12 0.24
estilos_gestaoColegiada -1.47 0.45 -2.36 -0.60
estilos_gestaoCompetitiva -2.41 0.28 -2.95 -1.86
tamanho_coalizao 0.03 0.02 0.00 0.07
Modelo 6: taxa_sucesso_executivo_camara + necessidade_coalizao
Intercept -193.74 322.34 -897.11
216,41
tamanho_centro_presidencial 0.07 0.05 -0.02
0.19
-
estilos_gestaoColegiada -258.69 874.89 992.36
2076.25
estilos_gestaoCompetitiva 190.44 322.33 -219.99 894.09
Modelo 7: taxa_sucesso_executivo_camara + distancia_ideologica
-
Intercept -172.72 423.94 246.79
1265.69
tamanho_centro_presidencial 0.08 0.05 -0.02 0.18
estilos_gestaoColegiada -0.30 0.42 -1.13 0.51
estilos_gestaoCompetitiva 169.37 423.96 -250.64 1262.90
Observações:
● Modelos 6 e 7 apresentam problemas de convergência (Rhat > 1.05),
indicando que os resultados não são confiáveis.
● Valores próximos de zero (ex.: popularidade) foram aproximados para "~0.00"
por serem estatisticamente insignificantes.
● IC 2.5% e IC 97.5% correspondem aos intervalos de credibilidade bayesianos
(equivalente a um intervalo de confiança de 95%).
● Erro Padrão reflete a incerteza das estimativas.

--- Página 46 ---
46
Todos os modelos foram estimados com cadeias convergentes (Rhat ≈ 1.00),
exceto os modelos 6 e 7, os quais apresentaram problemas severos de convergência
(Rhat > 1.05), valores extremos de erro-padrão, e tamanhos efetivos de amostra
(ESS) muito baixos, indicando estimativas instáveis. Esses dois modelos devem,
portanto, ser descartados para fins analíticos conclusivos.
Modelo 1: Variáveis Centrais (Modelo Base)
Variável dependente: Taxa de sucesso do Executivo na Câmara.
Variáveis explicativas: Tamanho do centro presidencial, Estilo de gestão.
Os coeficientes estimados indicam que:
● o tamanho do centro presidencial está positivamente associado ao sucesso (β
= 0.17, IC 95% = [0.11,0.23]);
● os estilos de gestão colegiada (β = -0.66) e competitiva (β = -2.14) estão
negativamente associados ao sucesso, com significância estatística (ICs
excluem zero).
Este modelo apresenta boa convergência e estabilidade, sendo um bom ponto
de partida.
Modelo 2: Coalescência como Variável Dependente
Este modelo tem uma variável dependente diferente (coalescência na
Câmara), e, portanto, não é diretamente comparável com os demais em termos de
explicação do sucesso executivo. No entanto, os efeitos estimados seguem padrões
opostos, como a seguir.
● O tamanho do centro presidencial tem efeito negativo.
● Os estilos colegiado e competitivo têm efeitos positivos.
Este contraste sugere que a coesão interna da base parlamentar
(coalescência) pode estar dissociada da eficácia legislativa medida pelo sucesso do
Executivo.

--- Página 47 ---
47
Modelo 3: Popularidade
● Popularidade não apresenta efeito significativo (β = -0.00, IC inclui zero).
● Os demais coeficientes mantêm magnitudes e sinais semelhantes ao modelo
1.
Modelo 4: Heterogeneidade da Coalizão
● A variável heterogeneidade da coalizão tem efeito positivo e estatisticamente
significativo (β = 0.05, IC 95% = [0.02, 0.08]).
● O tamanho do centro presidencial perde significância (IC inclui zero), o que
pode indicar colinearidade ou mudança na estrutura explicativa.
Modelo 5: Tamanho da Coalizão
● A variável tamanho da coalizão tem efeito positivo e limítrofe (β = 0.03, IC
95% = [0.00, 0.07]).
● Os estilos de gestão mantêm efeitos negativos significativos
Modelos com Problemas de Convergência: Modelos 6 e 7
Os modelos com variáveis de necessidade de coalizão e distância ideológica
apresentaram os problemas a seguir.
● Rhat elevado (> 2).
● Erros-padrão extremamente altos.
● ICs amplos e implausíveis.
● Baixíssimo ESS (Bulk e Tail), sugerindo falhas na identificação dos
parâmetros.
Esses problemas indicam que os dados e/ou a especificação do modelo não
suportam a inclusão dessas variáveis da forma como foram categorizadas.
Com base nos valores do Bayesian R² obtidos para cada modelo ajustado, é
possível aprofundar a análise da qualidade preditiva dos modelos sob uma
perspectiva bayesiana. O Bayesian R², assim como seu análogo frequentista,
expressa a proporção da variância explicada pela parte sistemática do modelo em

--- Página 48 ---
48
relação à variância total. No entanto, ele é derivado das distribuições posteriores dos
parâmetros e, portanto, incorpora a incerteza de maneira mais robusta.
Modelo R² Erro-Padrão Intervalo Credível 95%
Bayesiano
Modelo 1 0.754 0.028 [0.686, 0.792]
Modelo 2 0.252 0.086 [0.079, 0.409]
Modelo 3 0.756 0.031 [0.678, 0.797]
Modelo 4 0.807 0.022 [0.754, 0.836]
Modelo 5 0.787 0.025 [0.724, 0.819]
Modelo 6 0.949 0.013 [0.917, 0.968]
Modelo 7 0.949 0.015 [0.912, 0.970]
● Modelos 1, 3, 4 e 5 apresentam desempenhos bastante semelhantes e
elevados, todos com R² superiores a 0.75, o que indica boa capacidade
explicativa em relação à variável dependente (taxa de sucesso do Executivo).
● O Modelo 4, que incorpora a heterogeneidade da coalizão, destaca-se com o
maior R² entre os modelos considerados robustos do ponto de vista estatístico
e substantivo (R² = 0.807, IC95% = [0.754, 0.836]).
● Modelo 2, que tem uma variável dependente diferente (coalescência),
apresenta desempenho inferior (R² = 0.252), o que confirma que ele não deve
ser comparado diretamente aos demais modelos voltados à explicação do
sucesso do Executivo.
● Modelos 6 e 7 apresentam R² extremamente elevados (≈0.95). No entanto,
como mencionado anteriormente, esses modelos enfrentam sérios problemas
de convergência e instabilidade nos parâmetros estimados, o que compromete

--- Página 49 ---
49
a validade desses valores. O alto R² pode, inclusive, ser indicativo de
superajuste (overfitting) ou modelos mal especificados.
O modelo 4 se mostra o mais robusto do ponto de vista estatístico e
substantivo, ao integrar elementos institucionais (tamanho do centro presidencial),
comportamentais (estilo de gestão) e estruturais (heterogeneidade da coalizão). Este
modelo permite uma interpretação mais abrangente sobre os fatores que afetam a
eficácia do Executivo na tramitação de sua agenda legislativa.
Modelos com variáveis mais complexas, como "necessidade de coalizão" e
"distância ideológica", exigem refinamento metodológico (e.g., recodificação,
agrupamento ou uso de variáveis contínuas) para se tornarem viáveis analiticamente.
A avaliação combinada da qualidade do ajuste (Bayesian R²) e da estabilidade
estatística dos modelos aponta o Modelo 4 como o mais adequado, pelos fatores a
seguir.
● Apresenta o maior R² confiável, sugerindo melhor capacidade explicativa.
● Mantém convergência adequada, erros-padrão razoáveis e intervalos credíveis
informativos.
● Integra variáveis substantivamente relevantes como estilo de gestão, tamanho
do centro presidencial e heterogeneidade da coalizão.
Portanto, recomenda-se a adoção do Modelo 4 como especificação final para
análise da taxa de sucesso do Executivo na Câmara dos Deputados, tanto por seu
desempenho empírico quanto pela sua consistência teórica.
4.3 Avaliação das Hipóteses no cenário brasileiro
A alocação de pastas ministeriais (mensurada pela coalescência) é um ato que
pertence predominantemente à esfera da Presidência-Organizadora. Sua lógica é
fundamentalmente política (politics), regida por negociações partidárias, distribuição
de poder e manutenção da estabilidade da coalizão.
Nesse contexto, os bastidores e a dimensão informal contam crucialmente no
processo de distribuição de cargos e, consequentemente, na coalescência

--- Página 50 ---
50
governamental (Walcott e Hult, 1987). O Núcleo de Governo, embora crucial, não
pode ser considerado uma estrutura rígida, permanente e homogênea. Pelo contrário,
o NdG é um espaço sujeito a disputas de poder entre atores individuais e
organizacionais. As variações nas competências entre os órgãos do NdG restrito,
como Casa Civil, Fazenda e Planejamento, ao longo dos governos, tornam a relação
entre a coalescência e a atuação do NdG incerta e ambígua (Hult, 1987, p. 112), pois
a Presidência precisa equilibrar a influência dos Ministérios setoriais e do Congresso
Nacional com as modificações internas e até mesmo disputas de poder entre os
Ministérios que compõem o próprio NdG. Adicionalmente, as variações
organizacionais na Casa Civil são frequentes e diversificadas, sugerindo a ausência
de um padrão claro quanto à participação do órgão no processo decisório
governamental (Hult, 2000).
O Brasil é um regime presidencial multipartidário no qual a gestão de coalizões
aponta para um presidente que deve gerenciar simultaneamente: (1) todo o Poder
Executivo; (2) seu próprio partido político; (3) as relações entre os poderes separados
constitucionalmente; e (4) um verdadeiro gabinete multipartidário em potencial. O
presidente multipartidário é obrigado a tomar uma série de decisões importantes de
gestão devido a essas responsabilidades diversas e inter-relacionadas, de natureza
política e administrativa, operando em ambientes difíceis e frequentemente dotados
de consideráveis ferramentas e recursos institucionais para superar possíveis
fragmentações e facilitar a governança (Shugart e Carey, 1992).
Os presidentes brasileiros eleitos na redemocratização governaram
praticamente sob o mesmo ambiente institucional, caracterizado por uma significativa
fragmentação partidária no Legislativo e frequentemente enfrentando uma condição
de minoria. No entanto, tomaram decisões distintas sobre como gerenciar suas
coalizões. Uma vez eleitos, foram confrontados por, pelo menos, três restrições
interconectadas: (1) o nível de fragmentação partidária no Legislativo; (2) o tamanho
do partido do presidente em relação ao tamanho dos outros partidos; e (3) as
distâncias ideológicas entre o partido do presidente e os outros partidos políticos no
Legislativo. Trabalhando dentro dessas restrições, o Executivo tomou decisões sobre
o tamanho e a heterogeneidade ideológica de sua coalizão e sobre a
proporcionalidade na distribuição de cargos no gabinete.

--- Página 51 ---
51
Nosso principal argumento sobre a importância do estilo de gestão hierárquico
e do grande tamanho do núcleo de governo na gestão da relação entre o Presidente
e o Congresso Nacional, é que as escolhas feitas durante a constituição do processo
político da Nova República foram decisivas para que essas variáveis tivessem
impactos diretos e positivos na qualidade, no nível de conflito, na sustentabilidade, no
custo e na capacidade do governo em relação aos partidos dentro de uma coalizão.
Isso, por sua vez, facilitou a aprovação da agenda do governo no Poder Legislativo.
Uma vertente de autores enfatiza que não há propriamente conflito, mas uma
subordinação prática do Legislativo à agenda presidencial de políticas públicas
(Montero, 2009; Palermo, 2000; Santos, 1997). Essa subordinação teria origem
fundamentalmente nas regras institucionais que dão ao Executivo poderes especiais
para encaminhar propostas de seu agrado e bloquear iniciativas que lhe são
contrárias na decisão parlamentar (Montero, 2009). Esses poderes decorrem tanto da
Constituição quanto das normas infraconstitucionais, em particular dos regimentos
internos das Casas Legislativas.
Fazem parte do poder de agenda, por exemplo, as prerrogativas de iniciar
projetos de lei (com exclusividade ou não), as condições para a aceitação de
aprovação de emendas, a prerrogativa de vetar legislação (e as condições para uma
eventual derrubada), o leque de matérias que o Executivo pode tratar por decreto, as
prerrogativas de convocação de plebiscitos e referendos e de convocação de sessões
legislativas extraordinárias, os poderes para determinar a ordem do dia das votações,
os prazos e o itinerário da tramitação das proposições (se vão para comissões, ou
direto aos plenários, a ordem em que são votadas), as regras de quórum, etc.
(Montero, 2009).
Distingue-se que os instrumentos legislativos à disposição do presidente foram
frequentemente mal interpretados: considerados incentivos à exclusão, devem ser
entendidos como estímulos para alterar a disposição dos congressistas, incentivando-
os a cooperar (já que é melhor para seus próprios interesses), ajustando seus passos
ao poder de agenda do presidente.
Apesar dos amplos poderes institucionais do Executivo, o presidente não
governa sozinho. A viabilidade de sua agenda legislativa depende diretamente do
apoio de uma maioria no Congresso. Assim, mesmo dispondo de instrumentos como

--- Página 52 ---
52
a edição de medidas provisórias e o poder de veto, o Executivo precisa negociar
constantemente com os parlamentares para garantir estabilidade política.
Esses poderes, nessa linha de argumentação, seriam os pontos centrais da
dominância do Executivo. No caso brasileiro, os poderes de agenda do Executivo são
inquestionavelmente fortes, situando-se no extremo superior de dominância em
termos comparativos na América Latina.
O Brasil se encontra no contexto político-administrativo de países em
desenvolvimento, sendo caracterizado como democracia delegativa ou regime
neopatrimonial (Eisenstadt, 1974; O‘Donnell, 1991), cujas características mais
relevantes são instituições democráticas frágeis e comportamentos político-
administrativos modernos e tradicionais. Dessa forma, as regras, deveres, direitos e
papéis institucionalizados influenciam o ator político nas suas decisões e na sua
busca por estratégias “apropriadas”, que, no caso das democracias delegativas ou
regimes patrimoniais, são enraizadas na hierarquia e na centralização.
As democracias delegativas são caracterizadas pela fraqueza e reduzida
densidade de suas instituições, nas quais a influência sobre as decisões políticas fica
reservada a uma elite classista. A influência nos processos de decisão política e na
implementação das políticas é normalmente exercida diretamente, e não de forma
“agregada”, sendo intermediada por partidos e associações. Observa-se, portanto,
conforme o raciocínio de Tocqueville (2008), uma maior influência da ação particular
dos indivíduos. Segundo esse pensador, a democracia é fortalecida pela participação
ativa dos cidadãos na vida pública e pela formação de associações livres, que se
tornam essenciais para preservar a liberdade política e evitar o despotismo. Em
democracias delegativas, a falta de participação ativa e organização ampla dos
cidadãos pode levar à fragilidade das instituições, permitindo que a política dependa
mais de indivíduos influentes e elites do que de estruturas partidárias robustas.
No que concerne à análise de políticas públicas, isso significa que teremos que
levar em consideração não somente a tendência a uma crescente fragmentação e
setorialização do processo político e a correspondente formação de policy networks
e policy arenas, mas, acima de tudo, a interferência de padrões peculiares de
comportamento político, como o clientelismo, o populismo ou o patrimonialismo, que
eventualmente exercem uma influência maior na definição das políticas públicas do

--- Página 53 ---
53
que as instituições formais; ou, colocado de outra maneira, esses vícios políticos
desconfiguram e descaracterizam os arranjos institucionais formais.
Dado esse contexto de fragmentação partidária, é importante considerar outro
fator que influencia a governabilidade no Brasil: a predominância de lideranças
individuais sobre diretrizes ideológicas e programáticas. Em contraposição aos países
institucional e politicamente consolidados, os governos brasileiros devem ser
considerados bem menos influenciados da orientação ideológico-programática da
população ou dos partidos do que uma consequência de constelações pessoais
peculiares. O carisma do candidato como político singular pesa bem mais do que a
orientação programática de seu partido. Além disso, a política na América Latina é
menos problema de interesse do que de paixão (Touraine,1989). Está implícito que
os cidadãos não costumam organizar-se em torno de interesses específicos — um
dos elementos fundamentais para preservar a liberdade política na democracia de
massa, conforme argumenta Tocqueville (2008) —, mas deixam-se levar pelas
paixões e emoções instantâneas. Decorrem dessa inclinação mudanças, muitas
vezes repentinas e radicais, dos rumos políticos nos governos tanto nacionais,
estaduais como municipais, que se manifestam não somente na descontinuidade
político-administrativa na transição de um governo para o outro (Lobo, 1998, p. 82),
mas que ocorrem inclusive no decorrer de gestões.
Conforme a lógica neoinstitucionalista, as instituições não explicam tudo.
Portanto, é possível haver situações em que os processos políticos são pouco
consolidados, dificultando a explicação dos acontecimentos pelo fator institucional. E,
quando isso é possível, o resultado é condicionado somente subsidiariamente pelas
instituições (Beyme, 1992, p. 76). Por exemplo, as trocas permanentes de regimes
nos países em desenvolvimento não podem ser explicadas, ou somente de forma
restrita, pelas condições institucionais.
Considerando esses limites dos fatores institucionais para a compreensão da
dinâmica complexa de regimes políticos, impõe-se como componente explicativo
adicional o fator “estilo de comportamento político”; esse, por sua vez, é condicionado
pela cultura político-administrativa predominante nas instituições, as quais
repercutem na qualidade dos programas e projetos políticos elaborados e
implementados.

--- Página 54 ---
54
Almond e Verba (1963), por exemplo, têm apresentado, em seus estudos sobre
civic culture, três tipos ideais de cultura política, os quais correspondem a diferentes
fases de modernização do desenvolvimento de sociedades: na cultura “paroquial”,
não existe ainda uma visão política sistêmica; na “cultura de súditos”, a população
desempenha um papel passivo e se mostra apenas interessada nos resultados da
política; enquanto na “cultura de participação” ela interfere ativamente nos
acontecimentos políticos. A pesquisa de cultura política toma a civic culture como
medida de referência, na qual são medidas todas as culturas do mundo. Esse modelo
da cultura cívica, da qual a cultura política anglo-saxã mais se aproxima, corresponde
a um caminho intermediário entre culturas políticas participativas e apáticas. Na base
dessa abordagem, encontra-se a tese de uma certa apatia salutar (Beyme, 1992).
Esse destaque não nega, mas até reforça, a intensidade da dinâmica das
relações Executivo-Legislativo, nas quais há uma interação significativa entre os
poderes. Não se afirma a existência de um presidente ou governo imperial, que
determine sozinho e conforme sua vontade a alteração do status quo.
Em outros termos: os resultados ilustram, confirmam e demonstram a
significativa participação do Legislativo — o que é parte considerável da atividade
parlamentar efetiva e que está em conformidade com o verificado pela literatura (Cruz,
2009; Santos, 2010; Santos, 2011; Cunha, 2011; Freitas, 2013; Ferreira, 2019),
entretanto, essa participação é construída em torno de “interlocutores-chave
presentes em um balcão de negociação”, os quais seguem uma ordem hierárquica.
Apesar das diferentes restrições exógenas e choques internos e externos
durante seus mandatos, os presidentes multipartidários brasileiros não foram simples
reféns das condições políticas adversas geradas por um ambiente fragmentado,
tendo escolhas e estratégias enquanto se envolveram na gestão da coalizão, as quais
geraram problemas e/ou sucessos que impactaram mais do que as falhas de design
institucional.
E os estilos específicos de política são influenciados por uma variedade de
fatores, como as tradições nacionais e regionais, as estruturas políticas, o grau de
desenvolvimento econômico, as ideologias, o “treinamento cívico” (Rennó Jr., 1997,
p. 240) e a própria experiência da prática política. Portanto, a abordagem da cultura
política dificilmente pode nos fornecer explicações satisfatórias e definitivas dos

--- Página 55 ---
55
estilos políticos. Porém, a discussão acerca da cultura política chama a nossa atenção
para a variedade de elementos que devem ser considerados na avaliação de estilos
políticos, na escolha presidencial e, consequentemente, na gestão das coalizões e na
relação Executivo–Legislativo.
Além dos fatores culturais, os custos de governança também influenciam a
gestão das coalizões. A escolha presidencial sobre o número de partidos da coalizão
afeta as despesas ministeriais de maneira substancial, por meio de sua influência
sobre o número de ministérios, o qual é moldado apenas em parte pela configuração
pós-eleitoral dos partidos no legislativo. O número de partidos da coalizão também
afeta as despesas com “pork barrel” de forma mais direta. Os presidentes não
precisam convidar partidos suficientes para formar uma maioria legislativa; muitos
regimes funcionam bem com coalizões minoritárias, e muitos presidentes têm
proteção extra devido à sua separação constitucional do Legislativo. As escolhas
presidenciais brasileiras sobre o número de parceiros de coalizão às vezes podem ir
além da necessidade. Complicando esse problema no caso do governo Lula, está o
fato de que ele então ocupou os ministérios extras com membros do seu próprio
partido.
Cumpre destacar que interagir com os parceiros de forma regular, requer
tempo e esforço. Mais importante, cada parceiro precisa de compensação de uma
forma ou de outra, pois o valor de fazer parte de uma coalizão está diretamente
relacionado à riqueza das benesses do cargo, às oportunidades de formulação de
políticas que o exercício do cargo implica e aos ganhos eleitorais esperados (Strøm,
1990).
Assumindo um custo médio por parceiro, talvez ponderado pelo tamanho, a
adição de cada parceiro significa que os gastos com recursos também devem
aumentar. Mantendo constantes os outros fatores, sustentar uma coalizão ao longo
do tempo requer uma maior troca de recursos em coalizões com mais membros. Em
outras palavras, um número maior de parceiros eleva, ao menos, certos tipos de
custos de governança.
Além dos custos de governança, a gestão de coalizões também é influenciada
pela dinâmica de poder entre o Executivo e o Legislativo, vistos a seguir. Soma-se a
este quadro a característica de que os partidos que formam o governo não tenham

--- Página 56 ---
56
informações completas sobre as verdadeiras preferências de seus rivais no mundo
real. Essa falta de informação completa reduz a capacidade dos partidos de fazer
compromissos credíveis e aumenta os incentivos para comportamentos oportunistas
e chantagens.
Essa realidade afeta o caráter coletivo e não exclusivamente pessoal da chefia
do Executivo, pois uma coisa é o presidente, o indivíduo que venceu a eleição e que,
pelas características formais do sistema, exerce “pessoalmente” o poder; outra, a que
persiste na realidade efetiva, é a Presidência, uma instituição coletiva cujas decisões,
em teoria, podem inclusive contrariar a vontade pessoal do seu chefe (Palermo,
2000).
E, diante da assimetria de informação, são inerentes os problemas de ação
coletiva, pondo em destaque o desafio da coesão, notadamente quando há muitos
parceiros na coalizão e eles têm preferências distintas entre si. Destaca-se que os
partidos que compõem a coalizão são os mesmos partidos que na eleição seguinte
poderão estar em lados opostos na disputa.
Todavia, pesquisadores argumentam que estas supermaiorias podem ser mais
baratas do que as coalizões mínimas vencedoras porque evitam que pequenos
partidos atuem como pivôs, diminuindo assim os custos gerais (Groseclose e Snyder,
1996). A falta de lealdade partidária e a falta de disciplina significam que uma coalizão
mínima vencedora pode não ser suficiente para vencer consistentemente ao longo do
tempo. Coalizões maiores também podem ocorrer quando dois compradores (por
exemplo, grupos de interesse, partidos políticos) com preferências opostas têm
recursos significativos e poder de negociação (Groseclose e Snyder, 1996; Wiseman,
2004), o que levam os presidentes em sistemas multipartidários a aceitarem a
heterogeneidade ideológica das suas coalizões, aumentando o esforço da sua gestão
ao decidir como usar as respectivas ferramentas de transferências políticas (por
exemplo, cargos no gabinete) e transferências monetárias (por exemplo, benesses)
diante deste cenário de forte diversidade de convicções (Araújo, Pereira e Raile,
2008).
O estilo pessoal de liderança, conforme literatura de raiz neustadtiana, ou
como apontado por Bertholini e Pereira (2017), não é suficiente para explicar o
funcionamento do Núcleo de Governo. Além disso, a gestão da coalizão presidencial

--- Página 57 ---
57
depende da relação entre Executivo e Legislativo, que é diretamente influenciada pela
fragmentação partidária e pela diversidade ideológica dos aliados.
Sobre esse tema, há a contribuição de Melo (2019). O autor aponta que o
aumento da fragmentação, demonstrado pelo NEPP da Câmara dos Deputados —
que era de 8,2, em 1994, e chegou a 16,7, em 2018 —, não é resultado do aumento
expressivo dos partidos pequenos, e sim da extinção das grandes bancadas, de modo
que os até então partidos grandes no parlamento (DEM, PSDB, PT, PMDB) se
tornaram de porte médio.
A consequência desse cenário é a imposição da necessidade da formação de
coalizões cada vez mais amplas para atingir a maioria parlamentar, compostas por
um elevado número de parceiros dotados de tamanho muito semelhante. Segundo o
autor, esse cenário “[…] potencializa o poder de chantagem de cada um deles e
fragiliza o partido formador, dificultando a coordenação da base governista” (Melo,
2019, p. 201).
Esse quadro se tornou progressivamente mais agudo precisamente ao longo
do período analisado pela tese e que coincide, na sua quase totalidade, com
presidentes do PT.
A corroborar essa perspectiva, a análise de Ferreira (2019, p. 75) indica a forte
correlação entre o aumento do NEPP e o NEP da coalizão, logo o aumento na
fragmentação parlamentar resultou, cada vez mais, em coalizões de governo
formadas por mais partidos. E, conforme a literatura, mais difíceis de gerir.
Tabela 16 – Estratégias de Gestão de Coalizão no Brasil (Média Mensal por Mandato), 1995–2013
Número
de Heterogenei-
Mandato Coalescência Mandato
Partidos dade da
Presidencial do Gabinete Presidencial
da Coalizão
Coalizão
Cardoso Cardoso
5.604 30.953 55.536
(Primeiro) (Primeiro)
Cardoso Cardoso
4.833 30.486 61.391
(Segundo) (Segundo)

--- Página 58 ---
58
Número
de Heterogenei-
Mandato Coalescência Mandato
Partidos dade da
Presidencial do Gabinete Presidencial
da Coalizão
Coalizão
Lula Lula
7.688 48.086 49.019
(Primeiro) (Primeiro)
Lula Lula
9.125 42.178 49.801
(Segundo) (Segundo)
Rousseff Rousseff
7.778 45.831 43.053
(Primeiro) (Primeiro)
Rousseff Rousseff
9 50 35
(Segundo) (Segundo)
Temer 10 35 60 Temer
Bolsonaro 2 45 40 Bolsonaro
Fonte: IPEA/FGV (2015) e IPEA (2022).
A heterogeneidade ideológica permite tanto o “desvio de políticas” (Béland,
2007) quanto o “desvio burocrático” (Mccubbins, Noll e Weingast, 1989; Shepsle,
1992), pois parceiros com visões diferentes tendem a direcionar as políticas para
rumos que não necessariamente refletem as preferências do presidente. Nesse caso,
mostra-se o aumento contínuo dos presidentes brasileiros no maior uso de pork
(Araújo, Pereira e Raile, 2008), a fim de evitar dar acesso aos adversários ideológicos
aos cargos no gabinete.
A maior dispersão ideológica da coalizão produz distanciamento nas
preferências dos presidentes ao formularem as propostas legislativas; logo, quanto
maior for esse distanciamento, mais tendência à concentração da capacidade
decisória na Presidência e menos espaço para a influência dos partidos da coalizão
ideologicamente distantes, o que é uma estratégia projetada para manter o controle
sobre o seu governo.
Para fazer uma analogia com o modelo sugerido por Inácio e Llanos (2015), a
expectativa é a existência de um modelo de presidência hipertrofiada e/ou centrada

--- Página 59 ---
59
na presidência. Por exemplo, Batista (2013) e Silva (2014) utilizaram as exposições
de motivos de 1.715 iniciativas do Executivo – incluindo PL, PEC, PLP e MP – para
verificar a autoria, identificando que a estratégia de centralização aumentou no
governo Lula em comparação ao de FHC.
A opção foi fortalecer as instituições de apoio à Presidência, concentrar nela
as iniciativas ou em ministérios atribuídos ao partido formador da coalizão e procurar
controlar/monitorar as proposições oriundas dos ministérios entregues a parceiros. A
motivação principal para a estratégia seria a maior distância ideológica das coalizões
formuladas por Lula em comparação às de FHC, o que também se reflete na
estratégia do primeiro de formar um gabinete maior, com mais partidos, menos
coalescente e de sobrevalorizar o seu partido.
Para atingir estas definições, enxergam-se basicamente as coalizões no
presidencialismo como mecanismos transversais, pelos quais os mesmos grupos
ocupam posições no Executivo e um determinado número de cadeiras legislativas.
Neste sentido, a própria agenda do Executivo é resultado de barganhas
protagonizadas pelos mesmos grupos que irão discuti-la dentro do Legislativo.
Segundo essa visão, o presidente confere a um determinado grupo ou partido,
por via da nomeação para um ministério ou órgão executivo, não só o bônus imediato
(ganhos imediatos e diretos que os cargos proporcionam), mas também o ônus e
bônus de formular e implementar as políticas a cargo do novo ocupante. É este partido
ou grupo então que passa a “possuir” a política em tela, com o correspondente
encargo de defendê-la também no Legislativo. A agenda não é um deus ex machina
trazido pelo Executivo, mas “constituída coletivamente, sendo marcada por conflitos
e disputas entre seus formuladores”. A “barganha” não seria entre presidente e
legisladores, mas dentro do Executivo, e seus agentes seriam os diferentes
representantes de cada partido nos postos-chave do gabinete, que negociariam entre
si para obter mais prioridade para suas próprias prioridades, e negociariam juntos na
“mãe de todas as barganhas” travada entre os ministros responsáveis por gastos e
aqueles que controlam a pasta de finanças responsável pelo resultado do governo.
Assim, esse modelo de “caixa de ferramentas” é implementado sobre outra
ótica na qual as nomeações para cargos são instrumentos para que cada grupo ou
partido da coalizão protagonize a negociação intraexecutivo da qual sairá o desenho

--- Página 60 ---
60
de políticas, das quais as despesas seriam um reflexo direto e automático – tudo isso
com concordância entre as frações de cada um dos grupos instaladas no Executivo
e no Legislativo simultaneamente. Esta concordância não é posta como automática,
mas um resultado a perseguir em conjunto por todos os partidos da coalizão, a quem
caberia disputar e conquistar os cargos de poder dentro do Legislativo, que serviriam
como alavanca para completar o poder de agenda já bastante amplo do presidente
(Figueiredo e Limongi, 2008, pp. 154-155) e reafirmar o papel de “orquestrador” do
Núcleo de Governo.
E mesmo as transferências propostas pelos parlamentares no ciclo
orçamentário são apresentadas a um projeto de iniciativa do Executivo, e sua
efetividade dependerá da coordenação entre os Poderes para que as autorizações
do orçamento inseridos pelos parlamentares sejam efetivamente desembolsados pelo
Executivo (Lemos e Ricci, 2011).
Justamente por ter o poder de coordenar, o Executivo pode antecipar as
posições dos parlamentares e incorporar suas possíveis reações e prioridade em sua
própria agenda; pode ainda utilizar a tramitação legislativa e seus múltiplos incidentes
como um meio de “calibrar” no terreno concreto os diferentes interesses da coalizão.
O Legislativo acolhe-se voluntariamente a um determinado perfil institucional
(com hipertrofia do Executivo), com baixa capacidade de mobilização para aprovação
de suas propostas legislativas. Pois, no Brasil, a aplicação da “caixa de ferramentas”
tem credibilidade na medida que são parte de um jogo repetido entre atores que
tendem a ser participantes do cenário político por muito tempo. Presidentes podem
ser reeleitos e os líderes partidários, que atuam como intermediários nessas
transações, são membros antigos da política nacional, assim como o são muitos dos
legisladores individuais, os quais têm boas chances de reeleição. Se o governo viesse
a descumprir com frequência as promessas implícitas feitas durante essas trocas,
desmoralizaria os instrumentos de negociação que possui e as coalizões se desfariam
(Bid, 2007, p. 173).
Reforçando o sentido de “gestão”, deliberada e sistematizada, estão os
repetidos alertas de que a eficácia da formação das maiorias é tanto maior quanto
mais experiente for o governo no exercício desse papel, e tanto maior quanto por mais

--- Página 61 ---
61
tempo se confirme a sua prática dando segurança aos diferentes jogadores de que
as barganhas serão cumpridas ao longo do tempo.
Ainda mais quando a barganha é o “pork barrel”, já que este se materializa no
interesse por rubricas de despesa orçamentária que direcionam os recursos públicos
(especialmente no âmbito federal) para obras e serviços natureza local, que possam
ser identificados pelo eleitor como uma “benesse” do parlamentar individual (Ames,
2003; Carey e Shugart, 1995; Mainwaring, 1999; Bittencourt, 2008; Ames; Pereira;
Rennó, 2011).
Não obstante, em razão da necessidade de se estabelecer uma base de apoio
legislativo estável para suas políticas, presidentes geralmente montam seus
gabinetes em cooperação com partidos parlamentares (Amorim Neto, 2006, 2016,
2019b; Cheibub, 2010). Os gabinetes brasileiros, em particular, têm um forte
componente partidário, embora apresentem variações substanciais nesse aspecto
(Amorim Neto, 2019).
Identificar quais membros do gabinete (doravante, ministros) representam
quais partidos não é tarefa muito complicada, haja vista que as legendas costumam
declarar tanto seu apoio ao governo como seus indicados para compor o gabinete.
No contexto brasileiro, contudo, a identificação às vezes é difícil, em razão de dois
fatores: a informalidade do vínculo entre partidos e seus colabores de perfil mais
técnico; e a interferência do presidente na seleção de ministros, mesmo para pastas
cedidas a partidos. Isso significa que ministros que representam partidos no gabinete
não necessariamente são seus filiados ou indicados.
Considero que um ministro M representa o partido P no gabinete (logo, M é
partidário) se e somente se: (a) P apoia o governo e (b) M foi indicado por P ou (c) P
reconhece M como seu representante no gabinete. A primeira condição (a) é
necessária em razão do próprio conceito de delegação, do qual se infere que se um
partido não apoia o governo, então ele não pode ter representante no gabinete.
Assim, em consonância com Cheibub (2010, p. 73-74) e Freudenreich (2016, p. 87),
consideram-se não partidários inclusive ministros filiados a partidos, desde que estes
tenham se declarado de oposição ou independentes frente ao governo. Por exemplo,
os ministros Osmar Terra (Cidadania, jan. 2019) e Tereza Cristina (Agricultura, jan.
2019), embora congressistas do MDB e DEM, respectivamente, não foram

--- Página 62 ---
62
nomeações partidárias, porque ambas as legendas rejeitaram fazer parte da base do
governo (Silva, 2019; Uribe e Bilenky, 2019). Da mesma forma, o ministro Ciro Gomes
(Integração Nacional, jan. 2003), inicialmente um representante do PPS no gabinete
do Governo Lula, tornou-se não partidário em dez. 2004, quando essa legenda retirou
seu apoio ao governo, embora ele tenha permanecido à frente da pasta
(RODRIGUES, 2004).
Porém, reitera-se que este modus operandi não caminha para o imperialismo
ou tirania presidencial, haja vista que há evidências de responsabilidade
compartilhada entre os partidos da coalizão, o que corrobora o que afirmaram Limongi
e Figueiredo (2008). Ainda que prepondere a autoria única, o copatrocínio é bastante
frequente (Rennó e Wojcik, 2015, p. 65). Enfim, deixa-se o todo unificado da
“coalizão” para encontrar uma instituição coletiva e que opera em diferentes arenas
e, em cada uma, é passível de ser analisada como diversificada internamente, como:
a Presidência e a base de apoio congressual (e esta, por sua vez, fracionada em
diversos partidos, eles próprios divididos internamente, os quais operam em dois
espaços, Câmara e Senado, e em diversas instâncias, como as diferentes
comissões). Nessa dimensão, os problemas de ação coletiva e o processo de
construção da unidade em cada um desses atores e na coalizão como um todo se
tornam uma variável relevante.
Tudo operado em diferentes aspectos e camadas, porém, com o ponto em
comum da existência de arranjos que exigem troca de recursos econômicos, não se
limitando somente a cargos ou a emendas orçamentárias, mas, também, práticas
ilegais e corruptas, presença de patrimonialismo e clientelismo (Rennó, 2006).
Nos mandatos de Fernando Henrique Cardoso o uso tanto do pork como da
escolha do número de ministérios eram relativamente baixos, aumentando o uso do
pork nos governos petistas (Lula e Dilma) e especialmente no governo Bolsonaro.
Sobre o número de ministérios ocorreram variações entre os governos petistas
(escolha por maiores quantidades) e os governos de Temer e Bolsonaro (menores
quantidades).
Tabela 17 – Escolhas, Custos e Restrições Governamentais no Brasil (Média Mensal por Mandato), 1995–2022

--- Página 63 ---
63
Despesas Despesas
Número com com Índice de
Mandato
Total de Ministérios Emendas Necessidade
Presidencial
Ministérios (em milhões (em de Coalizão
R$) milhões R$)
Cardoso
24,125 25,843 159,842 57,892
(Primeiro)
Cardoso
27,229 35,354 493,667 56,539
(Segundo)
Lula
33,688 43,410 2.600.730 71,251
(Primeiro)
Lula
36,813 61,060 635,512 79,782
(Segundo)
Rousseff
38,194 71,283 559,089 85,771
(Primeiro)
Rousseff
35 77.000 800 90,000
(Segundo)
Temer 29,5 62.000 6.200 75,000
Bolsonaro 22,5 58.000 21.000 70,000
Notas: Dados sobre emendas não estão disponíveis para os dois primeiros anos do primeiro mandato
de Cardoso. As despesas com ministérios e emendas estão em reais brasileiros.
Fonte: IPEA/FGV (2015) e IPEA (2022).
Ilustrando, a partir do segundo mandato de FHC, observou-se um
fortalecimento das dimensões de coordenação e implementação de políticas públicas
no Núcleo de Governo, com os presidentes FHC, Lula e Dilma incluindo secretarias
temáticas na estrutura formal da presidência, como a Secretaria de Desenvolvimento
Urbano e a Secretaria de Portos.
O número de unidades presentes na estrutura da presidência robusteceu,
passando de 7 órgãos no 1º mandato de FHC para 13 no 2º mandato de FHC e 1º de
Lula. No 2º mandato de Lula e 1º de Dilma, esse número saltou para 15 unidades,
fora os conselhos deliberativos. Para os autores, essa mudança pode ser entendida
como um fortalecimento do poder do presidente para controlar as dinâmicas políticas

--- Página 64 ---
64
do presidencialismo de coalizão. Inclusive, algumas unidades de assessoramento da
estrutura da presidência não tinham atribuições típicas do Núcleo de Governo, por
isso, não estão enquadradas como Centro de Governo de jure estrutural.
O presidencialismo de coalizão, característica estrutural do sistema político
brasileiro, requer mecanismos institucionais eficazes para a coordenação entre o
Poder Executivo e sua base no Congresso Nacional. Nesse contexto, a Casa Civil da
Presidência da República tem desempenhado um papel central na articulação política
e na coordenação do Núcleo de Governo (NdG). Este capítulo propõe uma análise
comparativa da atuação da Casa Civil como órgão coordenador do NdG nos governos
de Fernando Henrique Cardoso (FHC), Luiz Inácio Lula da Silva, Dilma Rousseff,
Michel Temer e Jair Bolsonaro, observando as mudanças estruturais, funcionais e
políticas ao longo do tempo.
A Casa Civil historicamente acumula funções de coordenação administrativa,
gestão de políticas públicas prioritárias, supervisão interministerial e articulação
política. No presidencialismo de coalizão, sua relevância é ampliada como elo entre
o Executivo e o Legislativo, desempenhando papel-chave no funcionamento do NdG,
instância de coordenação interna do governo. O NdG, por sua vez, representa o
núcleo decisório e coordenador das ações do governo federal, reunindo os principais
ministérios estratégicos e órgãos da Presidência com o objetivo de assegurar
coerência e eficácia na implementação das políticas governamentais. Sua eficácia
está diretamente relacionada à liderança exercida pela Casa Civil e à capacidade de
articulação entre os diferentes ministérios e instâncias decisórias.
Governo Fernando Henrique Cardoso (1995–2002)
Durante os dois mandatos de FHC, a Casa Civil teve perfil eminentemente
técnico e gerencial, refletido na atuação de ministros como Clóvis Carvalho e Pedro
Parente. O NdG funcionou como um espaço de decisão colegiada e pragmática, com
forte apoio do Instituto Fernando Henrique Cardoso e do Ministério do Planejamento.
A articulação com o Congresso foi centrada em uma coalizão programática, com foco
na estabilização econômica e nas reformas estruturais. A condução do NdG
privilegiava a racionalidade administrativa e a previsibilidade nas decisões,

--- Página 65 ---
65
fortalecendo a institucionalidade do governo e reduzindo a fragmentação na
formulação de políticas públicas.
Governo Luiz Inácio Lula da Silva (2003–2010)
Sob Lula, a Casa Civil assumiu protagonismo político inédito, sobretudo com
José Dirceu e, posteriormente, Dilma Rousseff. O NdG foi institucionalizado como
espaço de coordenação interministerial e de execução de programas estratégicos
como o PAC. A articulação política ganhou contornos mais amplos e pragmáticos,
intensificando a barganha política com partidos aliados, o que culminou em
escândalos como o mensalão. Ainda assim, garantiu-se estabilidade governamental
e avanço de políticas sociais. A condução do NdG refletia um modelo de governança
centrado no controle e monitoramento intensivo de ministérios-chave, com a Casa
Civil coordenando tecnicamente as ações e exercendo função de mediação política
junto à base aliada no Congresso. O segundo mandato de Lula (2007–2010) atingiu
o ápice da ocupação partidária do gabinete, com 93,3% de ministros filiados,
reforçando a lógica de coalizão ampla.
Governo Dilma Rousseff (2011–2016)
No governo Dilma, houve uma inflexão tecnocrática na Casa Civil, ocupada por
ministros como Gueis Hoffmann e Aloizio Mercadante. O NdG passou a privilegiar a
gestão técnica e o planejamento estratégico, em detrimento da articulação política
com o Legislativo. Essa mudança enfraqueceu a capacidade do Executivo de manter
uma base estável, contribuindo para o isolamento político da presidente e,
eventualmente, para seu impeachment. A condução do NdG tornou-se
excessivamente centralizada, com ênfase em metas e indicadores, mas com pouca
sensibilidade à dinâmica parlamentar, o que comprometeu a governabilidade em
contextos de crise.
Governo Michel Temer (2016–2018)
Com o impeachment de Dilma Rousseff, Michel Temer assumiu a Presidência
e reposicionou a Casa Civil como peça fundamental da articulação política. Sob a
liderança de ministros como Eliseu Padilha, a Casa Civil recuperou protagonismo no
NdG, adotando uma abordagem mais pragmática e voltada à recomposição da base
aliada no Congresso. O governo Temer fortaleceu o papel do NdG como instância de

--- Página 66 ---
66
coordenação estratégica, especialmente na aprovação de reformas econômicas,
como a trabalhista e a do teto de gastos. A condução do NdG combinou racionalidade
administrativa com intensa articulação congressual, sendo viabilizada por uma
coalizão centrada no PMDB e partidos do Centrão. Temer retomou a lógica tradicional
do presidencialismo de coalizão, com forte presença de ministros partidários e
reconstrução institucional da Casa Civil como espaço de decisão e mediação.
Governo Jair Bolsonaro (2019–2022)
O governo Bolsonaro representou uma ruptura no padrão tradicional do
presidencialismo de coalizão no Brasil. Nos primeiros anos, a Casa Civil perdeu
protagonismo político, com a articulação legislativa sendo delegada à Secretaria de
Governo e ao Ministério da Economia, resultando em um Núcleo de Governo (NdG)
fragmentado e pouco institucionalizado. Esse modelo oscilou entre tentativas de
centralização por militares e ministros técnicos e práticas informais influenciadas por
aliados do Centrão. A partir de 2021, com a nomeação de Ciro Nogueira para a Casa
Civil, houve uma reconfiguração pragmática do NdG, focada na distribuição de
emendas parlamentares e na manutenção da base governista, mas sem um
planejamento estratégico consistente, reforçando um estilo reativo e personalista.
Sem uma coalizão partidária consolidada, o governo enfrentou problemas
crônicos de coordenação, agravados pela polarização e pela heterogeneidade
ideológica no gabinete, levando a conflitos frequentes e aumento da assimetria
informacional. Bolsonaro adotou uma presidência compacta e reativa, centrada em
seu círculo íntimo — familiares, assessores leais e militares —, funcionando como um
“bunker” voltado à defesa de sua imagem e à imposição de sua palavra final, muitas
vezes por meio de sinalizações públicas agressivas.
A partir de 2020, cresceu a influência militar na gestão, com oficiais assumindo
cargos-chave como a Casa Civil, a Secretaria-Geral e o Conselho da Amazônia Legal.
No entanto, essa militarização não resolveu os problemas de coordenação, mantidos
elevados devido à desconfiança do presidente em relação a seu próprio staff,
evidenciada pelas demissões sucessivas de figuras como Gustavo Bebianno e o
general Santos Cruz. Assim, o governo Bolsonaro consolidou um modelo de gestão
personalista, antissistêmico e pouco institucionalizado, afastando-se do
presidencialismo de coalizão em favor de uma governança reativa e conflituosa.

--- Página 67 ---
67
Outras investigações, que operam com outras categorias e que abarcam
outras dimensões das relações Executivo-Legislativo, têm chegado a diagnósticos
semelhantes sobre o aumento dos custos para governar com o apoio do Legislativo
e seus reflexos no estilo de gestão e tamanho do centro presidencial.
O trabalho de Bertholini e Pereira (2017), que reúne 13 indicadores do
desempenho do governo e que formam o que denomina de “hemograma da
governabilidade”, verificou o desempenho dos presidentes brasileiros no período
1995-2016, compreendendo seis mandatos, dois de cada presidente (FHC, Lula e
Dilma). O resultado demonstrou que, ao longo do tempo, o desempenho vinha
piorando. Logo, Lula tinha escores menos expressivos do que FHC. Entretanto, houve
a aceleração na deterioração das relações Executivo-Legislativo durante o período
Dilma.
Nessa linha, tem-se o índice de Custo do Governo (ICG), proposto por
Bertholini e Pereira (2017) que teve a intenção de produzir um indicador sintético de
multivariados aspectos das relações Executivo-Legislativo. É formado pelas
transferências políticas (ministérios) e monetárias (liberação de emendas e
orçamento das pastas) feitas pelo presidente aos partidos da sua coalizão e pretende
dimensionar o que, em outros estudos dos quais participou — Pereira; Power; Rennó
(2005, 2007); Raile; Pereira; Power (2011) —, Pereira identifica com a gestão da
coalizão.
Eles calcularam o ICG para os dois mandatos de FHC e de Lula, mais o
primeiro mandato de Dilma. Os resultados indicam que houve uma curva ascendente
nesses custos de preservação do governo de coalizão. Nos oito primeiros anos da
amostra (o período FHC), o ICG estava na ordem de 14 a 37,2 — ainda assim tendo
crescido na passagem de FHC I para o FHC II —, enquanto nos 12 anos
subsequentes se mostrou progressivamente mais elevado, sendo de 63,3 em Lula I,
69,1 em Lula II e tendo atingido 76 em Dilma I (Bertholini e Pereira, 2017, p. 542).
Outra pesquisa que se pode citar é a de Darrieux (2015), no qual o foco está
na aprovação das iniciativas legislativas dos presidentes brasileiros, o que, como foi
largamente visto, é identificado pela literatura como “taxa de sucesso”. A questão
motivadora é identificar quais fatores aumentam ou diminuem a possibilidade de um
presidente ter sua agenda aprovada. Assim como os trabalhos anteriores, o recorte

--- Página 68 ---
68
empírico abarca o período 1995-2014, ou seja, os dois mandatos de FHC, os dois de
Lula e o primeiro período Dilma.
O cenário evidenciou que a menor performance se deu em Dilma I, seja em
termos gerais, seja quando há a distinção entre o tipo de iniciativa legislativa (MPs,
PLs e PLNs).
Para encontrar a explicação para esse cenário, o autor seleciona uma série de
variáveis: (1) prerrogativas e matérias exclusivas ao Executivo e compartilhadas com
o Legislativo; (2) tamanho da coalizão (medido pelo percentual de cadeiras de
deputados); (3) efeito do ciclo eleitoral (“honeymoon”, delimitada como o primeiro ano
de mandato); (4) popularidade do presidente (considerado o índice de bom/ótimo em
pesquisas do Datafolha); (5) “habilidade” do presidente (que nada mais é do que o
mandato de cada um).
Os resultados indicam que variáveis institucionais e políticas são preditoras de
sucesso, como a legislação de iniciativa exclusiva (administrativa e orçamentária), o
tamanho da coalizão (quanto maior, mais sucesso) e o período de “lua de mel”.
Igualmente, que a habilidade presidencial não é determinante e a popularidade do
governante não tem efeito significativo.
No geral, a distribuição de cargos tenderia a preceder as transferências
financeiras; na “contabilidade” dos benefícios distribuídos, os cargos ministeriais
destinam-se aos grandes acertos que dão estrutura inicial à coalizão, enquanto as
transferências pork funcionam como “ajuste fino” para negociações ad hoc que
atendam às necessidades pontuais ao longo do tempo.
De igual modo, os dois tipos de benefício variam inversamente à popularidade
do presidente: com um presidente muito popular, a ocupação de cargos tende a ser
altamente valorizada (pela visibilidade eleitoral dos membros do grupo político como
próximos a um governo valorizado pelo eleitor), e mesmo a capacidade de extrair
transferências fica menor, pois é maior o custo de ser visto como oposição a um
governo bem avaliado; já um presidente em baixa nas pesquisas de opinião (ou um
lame duck que encerra o mandato sem perspectivas de reeleição ou eleição de um
sucessor próximo) terá dificuldades em atrair membros para aparecerem ao
eleitorado como corresponsáveis pela sua gestão, e terá de oferecer mais pork para

--- Página 69 ---
69
atrair um potencial membro da coalizão (visto que este terá incentivos a afastar-se de
forma a não ser identificado com uma força em queda).
Também a distância ideológica do presidente em relação a cada partido a
coligar influencia a composição relativa entre nomeações e transferências: quanto
mais próximo ideologicamente do presidente for um partido, mais atraente será para
o presidente conceder-lhe cargos de poder, que serão utilizadas para executar
políticas que provavelmente serão mais próximas de suas próprias preferências; por
outro lado, entregar ministérios a partidos ou grupos políticos mais distantes de suas
posições políticas carrega para o presidente um risco maior, o que pode levá-lo a
preferir usar as transferências monetárias para os partidos mais distantes.
Percebem-se disparidades quanto às escolhas dos presidentes sobre como
administrar suas coalizões. Semelhante à Lula, Rousseff formou uma coalizão
grande, heterogênea e desproporcional (ou seja, com menor coalescência do
gabinete), embora o número de partidos no governo de Rousseff tenha sido inferior
ao do segundo mandato de Lula. A coalizão de Rousseff, composta por sete partidos,
ainda gerou uma confortável maioria de 328 cadeiras na Câmara dos Deputados,
acima do limiar de 60% necessário para aprovar novas emendas à Constituição. A
heterogeneidade ideológica das coalizões presidenciais no Brasil também atingiu um
novo patamar com a chegada do PT à presidência. De uma coalizão relativamente
homogênea de centro-direita durante os mandatos de Cardoso, o Brasil passou para
uma combinação ideologicamente diversificada, que incluía partidos extremamente
conservadores e liberais juntos nas coalizões de Lula e Rousseff. Os presidentes do
PT também preferiram governar com um perfil mais monopolista, em vez de
compartilhar o poder com os aliados. A coalizão de Rousseff foi menos monopolista
que a de Lula, com 46% das posições ministeriais alocadas ao seu próprio partido, o
PT, enquanto Lula concentrou 60% das posições ministeriais com o PT. Isso ocorre
apesar de um valor de coalescência mais baixo para Rousseff.
Mesmo em meio às diferenças, observa-se uma tendência que auxilia na
explicação do aumento da dificuldade de gerir a coalizão: a deterioração da “caixa de
ferramentas”, isto é, a redução do sucesso presidencial é resultado de uma série de
modificações ocorridas nos últimos anos e que enfraqueceram as ferramentas
disponíveis para o presidente gerir a coalizão e garantir a implantação de sua agenda.

--- Página 70 ---
70
Como exemplos estão o crescimento de restrições para as nomeações de
segundo e terceiro escalões (menos cargos disponíveis em razão da estruturação de
carreiras, e menos discricionariedade dos partidos em razão do aumento da
concentração decisória na Presidência); menos autonomia na gestão das emendas
parlamentares em razão do orçamento impositivo, implantado em 2015; mudanças
institucionais nas MPs, como a EC 32/2001, a interpretação informal que liberou parte
do trancamento da pauta, a exigência do funcionamento da comissão mista para
apreciar MP, ocorrida em 2012 (Maia, 2016).
Logo, alinhado com a especulação de Beatriz Silva Costa (2016) e fornecendo
uma explicação conclusiva convergente com as afirmações de Bedritichuk (2016) e
Ferreira (2019), foram mudanças nos recursos estratégicos disponíveis ao presidente
que alteraram as relações Executivo-Legislativo e, por consequência, fortaleceram
comportamentos presidenciais que privilegiavam o aumento do tamanho do NdG e
uma maior hierarquização da gestão.
Pois, diante das mudanças institucionais, a delegação para o presidente
individualmente considerado, que é de natureza política e, por isso, mais fluida e
contingente segue a delegação legislativa para a presidência, que tem características
institucionais, rígidas e compartilhadas por todos os governantes com objetivo de
maior controle e preservação da ordem, em contrapartida, a maior liberdade de
tamanhos menores do centro presidencial e estilos de gestão competitivo/colegiado.
Em outros termos: o pressuposto é de que a forma da coalizão — medida por
diferentes indicadores, como tamanho, coalescência, heterogeneidade ideológica —
contribui para o resultado da performance presidencial (avaliada de diferentes modos,
como sucesso, dominância/, etc.) e se agrega ao desenho institucional. E a formação
da coalizão continua a ser uma decisão política, mas altamente condicionada pela
realidade de elevada fragmentação partidária em que o presidente opera, o que reduz
a autonomia, a efetiva capacidade de escolha e — para usar a formulação de
Bertholini e Pereira (2017) — implica o inevitável aumento do ICG (custos de
governar).
Com isso indica-se que, em meio à infraestrutura comum da delegação
institucional (presidência), há espaços para usos diferenciados desse recurso em

--- Página 71 ---
71
razão da delegação política (presidente), em decorrência de fatores conjunturais, de
ordem política e econômica, os quais não foram amplamente utilizados.
Em síntese, a gestão de coalizões no Brasil é marcada por três desafios
principais: a fragmentação partidária, a heterogeneidade ideológica e os custos
crescentes de governança. Esses fatores exigem dos presidentes habilidades
políticas e estratégias de negociação cada vez mais complexas. A centralização do
poder no Núcleo de Governo e o uso de transferências políticas e monetárias têm
sido as principais ferramentas para superar esses desafios, mas também geram
custos políticos e econômicos significativos.
A tendência observada é que, à medida que a fragmentação e a
heterogeneidade aumentam, os presidentes tendem a adotar estilos de gestão mais
hierárquicos e centralizados, com maior controle sobre a agenda governamental. No
entanto, isso não elimina a necessidade de negociação com o Legislativo, que
continua a desempenhar um papel crucial na aprovação das políticas públicas.
Portanto, o presidencialismo de coalizão no Brasil permanece um sistema complexo
e dinâmico, que exige constante adaptação por parte dos governantes.
4.4 O Núcleo de Governo, as Mudanças Institucionais e a Relação
Executivo-Legislativo no Brasil
A literatura sobre o presidencialismo de coalizão no Brasil, desde a
redemocratização, enfatizou o papel central do Executivo na condução da agenda
legislativa (Figueiredo; Limongi, 1999). Essa dinâmica se assentava no controle de
instrumentos como medidas provisórias (MPs), orçamento e capacidade de veto, que
conferiam ao presidente condições privilegiadas de negociação. Entretanto, nas
últimas duas décadas, mudanças institucionais significativas alteraram
profundamente esse equilíbrio de poder. O Núcleo de Governo — entendido como o
conjunto de atores e órgãos responsáveis pela articulação política e coordenação da
agenda presidencial — viu sua capacidade de garantir apoio parlamentar ser
desafiada e transformada.
Tencionamos aqui analisar como reformas ligadas às emendas parlamentares,
ao orçamento secreto, às MPs e aos vetos impactaram o funcionamento do Núcleo
de Governo e, por consequência, a taxa de sucesso do Poder Executivo no

--- Página 72 ---
72
Congresso Nacional. A análise, de caráter qualitativo e interpretativo, ancora-se na
obra de Rodrigo Oliveira de Faria (2023), que examina os períodos de domínio
orçamentário do Executivo e do Legislativo, e no trabalho de Beatriz Rey (2023), que
discute o fortalecimento do Congresso e o novo balanço de poder.
Segundo Faria (2023), o período de 1989 a 2012 foi marcado pelo domínio
orçamentário do Executivo, cujo eixo central era a “discricionariedade enquanto pedra
de toque desse período”. Essa prerrogativa permitia ao Núcleo de Governo utilizar as
"moedas orçamentárias" (as emendas) como principal instrumento de barganha,
condicionando sua liberação ao apoio político, o que selava acordos partidários com
custos relativamente baixos.
A partir de 2013, contudo, iniciou-se um processo de deslocamento de poder
para o Legislativo, que Faria (2023) caracteriza como o início do período de domínio
orçamentário do Poder Legislativo, ainda em desenvolvimento. Esse deslocamento
resultou de mudanças normativas em três fluxos — regimental, infraconstitucional e
constitucional — que reconfiguraram as instituições orçamentárias e reduziram a
discricionariedade do Executivo.
Um marco fundamental dessa transição foi a Emenda Constitucional n.
86/2015, que consolidou a execução obrigatória das emendas individuais e de
bancada. Como aponta Faria (2023), a intenção foi “eliminar do ordenamento jurídico
financeiro brasileiro a diferenciação dos parlamentares conforme sua adesão ao
governo”. Na prática, a nova regra “determinou a obrigatori edade de execução
orçamentária e financeira, de forma equitativa”, retirando do Executivo o poder de
selecionar quais emendas seriam executadas. Isso eliminou uma das principais
moedas de troca do Núcleo de Governo, aumentou os custos de governabilidade e
criou a necessidade de novos arranjos de cooperação política.
O ápice do controle legislativo sobre a execução orçamentária se deu com a
emergência e explosão das emendas de relator-geral (RP-9), popularmente
conhecidas como “orçamento secreto”. Faria (2023) explica que elas resultaram de
uma “particular combinação de regras orçamentárias” e da “confluência do redesenho
das instituições orçamentárias”. O problema central, que deu origem à alcunha, foi a
falta de transparência: “o fato de as emendas RP-9 não identificarem publicamente o
proponente de fato ou o parlamentar politicamente atendido pelos recursos

--- Página 73 ---
73
aprovados”. Na prática, a gestão dos recursos passou a depender da articulação
interna das lideranças do Legislativo, enfraquecendo ainda mais a posição estratégica
do Núcleo de Governo, que viu a mediação da distribuição de recursos ser transferida
para os presidentes da Câmara e do Senado.
Paralelamente, instrumentos tradicionais de agenda do Executivo também
sofreram restrições. A Emenda Constitucional n. 32/2001 limitou a reedição de MPs
e instituiu prazos rígidos. Conforme destaca Rey (2023), “as MPs passaram a ter
validade de 60 dias e só podem ser reeditadas uma vez”. Ademais, uma interpretação
adotada em 2009 permitiu a tramitação de outras matérias em paralelo,
enfraquecendo o poder de trancamento de pauta e devolvendo protagonismo ao
Legislativo.
De forma similar, embora menos visível, a dinâmica dos vetos presidenciais foi
modificada. O Legislativo ampliou seu poder de derrubá-los, especialmente após
reforçar os prazos para sua apreciação. Isso reduziu a eficácia do Executivo em
controlar o conteúdo final das leis, esvaziando o uso dos vetos como instrumento de
barganha e enfraquecendo sua “última palavra” no processo legislativo.
4.4.1 Núcleo de Governo como mecanismo compensatório: reinterpretando
uma contradição aparente
Este cenário de perda progressiva de instrumentos levanta uma questão
crucial para a análise do NdG. Uma leitura superficial dos dados poderia apontar para
uma contradição: os governos que adotaram um NdG hierárquico e de maior porte –
notadamente os governos do Partido dos Trabalhadores (PT) – foram, em média, os
que apresentaram as mais altas taxas de sucesso legislativo. Como conciliar isso com
a erosão progressiva do apoio presidencial no Congresso, acentuada a partir de 2013
e culminada no impeachment de 2016?
A chave para resolver esta aparente contradição reside em abandonar uma
visão estática do NdG e adotar a perspectiva de que ele funciona como um
mecanismo compensatório dinâmico. O NdG hierárquico e expandido não é a causa
inicial do sucesso legislativo, mas sim a resposta estratégica para sustentar a
governabilidade diante de um ambiente político que se torna progressivamente mais
hostil e de um Legislativo que se fortalece institucionalmente. A robustez do NdG,
nesse contexto, não é um sinal de força institucional inconteste, mas um indicativo de

--- Página 74 ---
74
que o Presidente precisa acionar recursos adicionais para compensar a perda de
instrumentos tradicionais de barganha, exatamente como os descritos por Faria
(2023) e Rey (2023).
A trajetória dos governos do PT ilustra esse mecanismo. Inicialmente, o
governo Lula (2003-2010) pôde adotar um estilo mais colegiado, aproveitando-se de
uma coalizão ampla e de uma popularidade elevada em um contexto de relativa
discricionariedade orçamentária. Contudo, à medida que as pressões aumentaram –
com o desgaste do mensalão, o aprofundamento da fragmentação partidária e o início
do deslocamento de poder para o Legislativo –, a gestão do NdG tornou-se
progressivamente mais hierárquica e centralizadora. Este movimento atingiu seu
ápice no governo Dilma Rousseff, cujo perfil gerencial pessoal já tendia à
centralização. O fortalecimento da Casa Civil e de outros órgãos da Presidência foi,
portanto, a ferramenta para tentar preservar o sucesso da agenda frente a uma base
de apoio mais volátil e em um cenário onde moedas de troca tradicionais, como a
discricionariedade orçamentária, se esvaneciam.
Dessa forma, os elevados índices de sucesso legislativo observados durante
os períodos de NdG hierárquico devem ser reinterpretados. Eles não refletem um
Legislativo subordinado, mas sim a intensificação do esforço de coordenação e
barganha por parte do Executivo para fazer valer sua agenda em um ambiente mais
complexo. É um sucesso de alta intensidade gerencial e alto custo político. O modelo
se mostra "bem-sucedido" no curto prazo, assegurando a aprovação de matérias,
mas pode gerar externalidades negativas, como o ressentimento de parceiros de
coalizão cuja autonomia é cerceada.
O período de 2013 a 2015 é o exemplo cabal dos limites deste mecanismo
compensatório. Apesar de um NdG fortemente hierarquizado, a combinação da crise
econômica, a explosão de protestos de rua e o acirramento da polarização política
criou uma tormenta perfeita que superou a capacidade de compensação do núcleo.
O aparato presidencial, outrora eficaz para gerenciar negociações, mostrou-se
insuficiente para conter uma ruptura de larga escala na base aliada, especialmente
em um contexto em que o Legislativo já detinha ferramentas institucionais (como a
obrigatoriedade das emendas) que reduziam sua dependência do Executivo. A perda
de apoio no Congresso não foi uma falha do design do NdG hierárquico, mas a

--- Página 75 ---
75
demonstração de que existe um limite para a eficácia de qualquer mecanismo
compensatório quando as fundações políticas do governo se erosionam a um ponto
crítico.
4.4.2 Um novo equilíbrio de poder
Em síntese, as mudanças institucionais ocorridas, principalmente a partir de
2013, reconfiguraram o presidencialismo de coalizão brasileiro e configuraram um
novo regime de dominância orçamentária e legislativa, conforme detalham Faria
(2023) e Rey (2023). O Núcleo de Governo, antes central na articulação política,
perdeu instrumentos decisivos, como a discricionariedade sobre as emendas, o
controle da execução orçamentária, o poder de agenda via MPs e a eficácia dos vetos.
A aparente contradição entre o modelo de NdG e a crise política se dissipa
quando se compreende que a centralização e o fortalecimento do núcleo são, em si
mesmos, sintomas e respostas à necessidade de compensar estas fragilidades
crescentes. O NdG hierárquico é o modelo para tempos difíceis, não para tempos
fáceis. Sua presença está correlacionada com o sucesso legislativo precisamente
porque é acionado quando a relação natural com o Legislativo se deteriora e os
instrumentos tradicionais se esgotam, exigindo uma gestão mais intensiva e
centralizada para manter a governabilidade.
Em seu lugar, emergiu um Congresso fortalecido, com maior poder de
barganha e de definição de prioridades. Esse deslocamento não eliminou o
presidencialismo de coalizão, mas o tornou mais complexo, custoso e fragmentado.
O desafio atual para o Núcleo de Governo é, portanto, adaptar-se a esse cenário de
perda de instrumentos tradicionais e buscar estratégias inovadoras de coordenação
e negociação política em um ambiente onde a compensação via centralização interna
encontra limites estruturais cada vez mais claros. A queda final de 2016 não invalida
o modelo do NdG como mecanismo compensatório; pelo contrário, ela ilustra
dramaticamente o ponto de ruptura além do qual nenhuma estratégia de
compensação interna é capaz de sustentar um governo frente a um Legislativo
institucionalmente empoderado.

--- Página 76 ---
76
