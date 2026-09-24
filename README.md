# 🧠 Algoritmos Fundamentais - Interface Web Interativa

Repositório dedicado ao estudo, implementação, prática e **visualização interativa em tempo real** dos algoritmos fundamentais em **Java** e **JavaScript**.

---

## 💻 Recursos da Interface Web Interativa

Uma aplicação front-end moderna construída para permitir a execução, modificação e análise passo a passo de cada algoritmo.

- ⚡ **Editor de Código Monaco (VS Code Engine)**: Modifique o código em tempo real tanto em JavaScript quanto em Java e execute no sandbox com captura de logs no console.
- 📊 **Visualizações Gráficas em Tempo Real**:
  - **Ordenação (Bubble Sort)**: Animação de gráfico de barras destacando comparações, trocas e posições ordenadas.
  - **Verificação de Número Primo**: Teste em tempo real de divisores de 2 até $\sqrt{N}$.
  - **Sequência de Fibonacci**: Geração dinâmica de termos $F(n) = F(n-1) + F(n-2)$.
  - **Somatório**: Acumulador visual e inserção de novos elementos na soma total.
  - **Máximo Divisor Comum (MDC)**: Tabela das etapas do Algoritmo de Euclides ($a = b \times q + r$).
  - **Contagem**: Contador progressivo com barra de progresso.
- ⏱️ **Medição de Desempenho & Complexidade**: Medidor de tempo de execução em milissegundos, contador de passos e exibição das complexidades $O(n)$, $O(\sqrt{n})$, $O(n^2)$ e $O(\log n)$.

---

## 🗂️ Estrutura do Repositório

```text
Algoritmos-Fundamentais/
│
├── index.html                  # Interface Front-End principal (SPA)
├── style.css                   # Estilização CSS e animações
├── app.js                      # Motores dos algoritmos, visualizadores e editor
│
├── Algoritmos-Fundamentais/
│   ├── Java/
│   │   ├── Contagem.java
│   │   ├── EhPrimo.java
│   │   ├── Fibonacci.java
│   │   ├── Ordenacao.java
│   │   ├── Somatorio.java
│   │   └── maximoDivisorComum.java
│   │
│   └── Javascript/
│       ├── Contagem.js
│       ├── EhPrimo.js
│       ├── Fibonacci.js
│       ├── Ordenacao.js
│       ├── Somatorio.js
│       └── maximoDivisorComum.js
│
└── README.md
```

---

## 🚀 Como Executar

### 1. Direct File / Navegador
Basta abrir o arquivo [`index.html`](index.html) diretamente em qualquer navegador moderno.

### 2. Servidor Local
Para executar localmente utilizando Python:
```bash
python -m http.server 8080
```
E acesse `http://localhost:8080` no navegador.

---

## 👨‍💻 Autor

Desenvolvido por **DrwGuikkz**.