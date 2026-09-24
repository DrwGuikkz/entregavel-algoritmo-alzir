// ==========================================
// ALGORITMOS FUNDAMENTAIS - APP CORE
// Baseado em DrwGuikkz/Algoritmos-Fundamentais
// ==========================================

const ALGORITHMS = {
  contagem: {
    id: 'contagem',
    title: 'Contagem de Elementos',
    category: 'Contagem',
    description: 'Algoritmo que realiza a contagem progressiva de elementos de 1 a N, ou avalia a quantidade de itens que satisfazem uma condição.',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    defaultLang: 'javascript',
    inputs: [
      { id: 'n', label: 'Valor de N (Contar até)', type: 'number', default: 12, min: 1, max: 100 }
    ],
    presets: [
      { label: 'N = 10', values: { n: 10 } },
      { label: 'N = 25', values: { n: 25 } },
      { label: 'N = 50', values: { n: 50 } }
    ],
    code: {
      javascript: `function contagem(n) {
    let cont = 0;
    for (let i = 1; i <= n; i++) {
        cont++;
        console.log(\`Passo \${i}: Contador = \${cont}\`);
    }
    return cont;
}

// Execução
const n = 12;
console.log("Resultado final da contagem:", contagem(n));`,
      java: `import java.util.Scanner;

public class Contagem {
    public static void main(String[] args) {
        int n = 12; // Valor de entrada
        int cont = 0;

        for (int i = 1; i <= n; i++) {
            cont++;
            System.out.println("Passo " + i + ": Contador = " + cont);
        }

        System.out.println("Total contado: " + cont);
    }
}`
    }
  },

  ehPrimo: {
    id: 'ehPrimo',
    title: 'Verificação de Número Primo',
    category: 'Aritmética',
    description: 'Determina se um número N é primo testando a divisibilidade de 2 até √N.',
    timeComplexity: 'O(√n)',
    spaceComplexity: 'O(1)',
    defaultLang: 'javascript',
    inputs: [
      { id: 'n', label: 'Número N para testar', type: 'number', default: 29, min: 1, max: 1000 }
    ],
    presets: [
      { label: 'Primo: 29', values: { n: 29 } },
      { label: 'Composto: 35', values: { n: 35 } },
      { label: 'Primo Grande: 97', values: { n: 97 } }
    ],
    code: {
      javascript: `function ehPrimo(n) {
    if (n < 2) {
        return false;
    }

    const limite = Math.sqrt(n);
    for (let i = 2; i <= limite; i++) {
        if (n % i === 0) {
            console.log(\`Número \${n} é divisível por \${i}\`);
            return false;
        }
    }

    return true;
}

// Execução
const n = 29;
console.log(\`O número \${n} é primo?\`, ehPrimo(n));`,
      java: `public class EhPrimo {
    public static boolean ehPrimo(int n) {
        if (n <= 1) {
            return false;
        }
        if (n == 2) {
            return true;
        }
        if (n % 2 == 0) {
            return false;
        }

        for (int i = 3; i * i <= n; i += 2) {
            if (n % i == 0) {
                return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        int n = 29;
        boolean resultado = ehPrimo(n);
        System.out.println("O número " + n + " é primo? " + resultado);
    }
}`
    }
  },

  fibonacci: {
    id: 'fibonacci',
    title: 'Sequência de Fibonacci',
    category: 'Sequências',
    description: 'Gera os N primeiros termos da famosa sequência de Fibonacci onde cada termo é a soma dos dois anteriores: F(n) = F(n-1) + F(n-2).',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(n)',
    defaultLang: 'javascript',
    inputs: [
      { id: 'n', label: 'Quantidade de termos (N)', type: 'number', default: 10, min: 1, max: 40 }
    ],
    presets: [
      { label: '10 Termos', values: { n: 10 } },
      { label: '15 Termos', values: { n: 15 } },
      { label: '20 Termos', values: { n: 20 } }
    ],
    code: {
      javascript: `function fibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];

    let seq = [0, 1];
    for (let i = 2; i < n; i++) {
        let proximo = seq[i - 1] + seq[i - 2];
        seq.push(proximo);
        console.log(\`F(\${i}) = \${seq[i - 1]} + \${seq[i - 2]} = \${proximo}\`);
    }

    return seq;
}

// Execução
const n = 10;
console.log("Sequência de Fibonacci:", fibonacci(n));`,
      java: `public class Fibonacci {
    public static void main(String[] args) {
        int n = 10;
        if (n <= 0) return;

        long a = 0, b = 1;
        System.out.print("Sequência: " + a + " " + b);

        for (int i = 2; i < n; i++) {
            long c = a + b;
            System.out.print(" " + c);
            a = b;
            b = c;
        }
        System.out.println();
    }
}`
    }
  },

  ordenacao: {
    id: 'ordenacao',
    title: 'Algoritmo de Ordenação (Bubble Sort)',
    category: 'Ordenação',
    description: 'Ordena um conjunto de dados comparando pares de elementos adjacentes e flutuando o maior valor para o final a cada iteração.',
    timeComplexity: 'O(n²)',
    spaceComplexity: 'O(1)',
    defaultLang: 'javascript',
    inputs: [
      { id: 'array', label: 'Vetor de Entrada (separado por vírgula)', type: 'text', default: '29, 10, 14, 37, 13, 42, 8' }
    ],
    presets: [
      { label: 'Aleatório', values: { array: '34, 12, 89, 5, 67, 23, 45, 9' } },
      { label: 'Invertido', values: { array: '50, 40, 30, 20, 10, 5' } },
      { label: 'Quase Ordenado', values: { array: '1, 2, 4, 3, 5, 6, 7' } }
    ],
    code: {
      javascript: `function ordenacao(vetor) {
    let arr = [...vetor];
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Troca de elementos
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                console.log(\`Trocou \${arr[j + 1]} por \${arr[j]}: [\${arr.join(', ')}]\`);
            }
        }
    }

    return arr;
}

// Execução
const dados = [29, 10, 14, 37, 13, 42, 8];
console.log("Vetor Ordenado:", ordenacao(dados));`,
      java: `import java.util.Arrays;

public class Ordenacao {
    public static void ordenacao(int[] arr) {
        int n = arr.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - 1 - i; j++) {
                if (arr[j] > arr[j + 1]) {
                    int temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
    }

    public static void main(String[] args) {
        int[] dados = {29, 10, 14, 37, 13, 42, 8};
        ordenacao(dados);
        System.out.println("Vetor Ordenado: " + Arrays.toString(dados));
    }
}`
    }
  },

  somatorio: {
    id: 'somatorio',
    title: 'Somatório de Conjuntos',
    category: 'Acumulação',
    description: 'Calcula a soma acumulada de todos os números inteiros de 1 a N (ou de um conjunto de valores).',
    timeComplexity: 'O(n)',
    spaceComplexity: 'O(1)',
    defaultLang: 'javascript',
    inputs: [
      { id: 'n', label: 'Somar até N', type: 'number', default: 15, min: 1, max: 200 }
    ],
    presets: [
      { label: 'N = 10', values: { n: 10 } },
      { label: 'N = 50', values: { n: 50 } },
      { label: 'N = 100', values: { n: 100 } }
    ],
    code: {
      javascript: `function somatorio(n) {
    let soma = 0;

    for (let i = 1; i <= n; i++) {
        soma += i;
        console.log(\`Somando \${i} | Soma parcial = \${soma}\`);
    }

    return soma;
}

// Execução
const n = 15;
console.log(\`Somatório de 1 a \${n} =\`, somatorio(n));`,
      java: `public class Somatorio {
    public static int somatorio(int n) {
        int soma = 0;
        for (int i = 1; i <= n; i++) {
            soma += i;
        }
        return soma;
    }

    public static void main(String[] args) {
        int n = 15;
        System.out.println("Somatório de 1 a " + n + " = " + somatorio(n));
    }
}`
    }
  },

  maximoDivisorComum: {
    id: 'maximoDivisorComum',
    title: 'Máximo Divisor Comum (MDC)',
    category: 'Algoritmo de Euclides',
    description: 'Calcula o maior número inteiro positivo que divide dois números sem deixar resto utilizando o eficiente Algoritmo de Euclides.',
    timeComplexity: 'O(log(min(a,b)))',
    spaceComplexity: 'O(1)',
    defaultLang: 'javascript',
    inputs: [
      { id: 'a', label: 'Número A', type: 'number', default: 48, min: 1, max: 10000 },
      { id: 'b', label: 'Número B', type: 'number', default: 18, min: 1, max: 10000 }
    ],
    presets: [
      { label: 'MDC(48, 18)', values: { a: 48, b: 18 } },
      { label: 'MDC(100, 35)', values: { a: 100, b: 35 } },
      { label: 'MDC(270, 192)', values: { a: 270, b: 192 } }
    ],
    code: {
      javascript: `function maximoDivisorComum(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);

    console.log(\`Iniciando MDC entre \${a} e \${b}\`);
    while (b !== 0) {
        let resto = a % b;
        console.log(\`\${a} % \${b} = \${resto}\`);
        a = b;
        b = resto;
    }

    return a;
}

// Execução
const a = 48, b = 18;
console.log(\`MDC(\${a}, \${b}) =\`, maximoDivisorComum(a, b));`,
      java: `public class maximoDivisorComum {
    public static int mdc(int a, int b) {
        a = Math.abs(a);
        b = Math.abs(b);

        while (b != 0) {
            int resto = a % b;
            a = b;
            b = resto;
        }

        return a;
    }

    public static void main(String[] args) {
        int a = 48, b = 18;
        int resultado = mdc(a, b);
        System.out.println("MDC(" + a + ", " + b + ") = " + resultado);
    }
}`
    }
  }
};

// Global App State
let currentAlgoId = 'ordenacao';
let currentLang = 'javascript';
let monacoEditor = null;
let animationSpeed = 300;
let isAnimating = false;
let animationTimer = null;
let visualSteps = [];
let currentStepIndex = 0;

// Initialize App on DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  renderSidebar();
  initMonacoEditor();
  selectAlgorithm('ordenacao');
  lucide.createIcons();
});

// Render Sidebar Navigation
function renderSidebar() {
  const nav = document.getElementById('algo-nav');
  nav.innerHTML = '';

  Object.values(ALGORITHMS).forEach(algo => {
    const btn = document.createElement('button');
    btn.id = `nav-${algo.id}`;
    btn.onclick = () => selectAlgorithm(algo.id);
    btn.className = `w-full text-left px-3 py-2.5 rounded-xl text-xs font-medium transition-all flex items-center justify-between group border ${
      algo.id === currentAlgoId
        ? 'bg-indigo-600/10 border-indigo-500/30 text-indigo-300 font-semibold shadow-sm'
        : 'border-transparent text-slate-400 hover:bg-slate-800/60 hover:text-slate-200'
    }`;

    btn.innerHTML = `
      <div class="flex items-center space-x-2.5">
        <div class="w-2 h-2 rounded-full ${algo.id === currentAlgoId ? 'bg-indigo-400 animate-pulse' : 'bg-slate-600 group-hover:bg-slate-400'}"></div>
        <span>${algo.title}</span>
      </div>
      <span class="text-[10px] px-1.5 py-0.5 rounded bg-slate-800 text-slate-400 font-mono">${algo.category}</span>
    `;

    nav.appendChild(btn);
  });
}

// Select Algorithm
function selectAlgorithm(algoId) {
  currentAlgoId = algoId;
  renderSidebar();

  const algo = ALGORITHMS[algoId];
  document.getElementById('algo-title').textContent = algo.title;
  document.getElementById('algo-description').textContent = algo.description;
  document.getElementById('algo-category').textContent = algo.category;
  document.getElementById('metric-time-complexity').textContent = algo.timeComplexity;
  document.getElementById('metric-space-complexity').textContent = algo.spaceComplexity;

  // Render Inputs
  renderInputs(algo);

  // Render Presets
  renderPresets(algo);

  // Update Monaco Code
  updateEditorCode();

  // Reset visualizer & prepare initial state
  resetVisualizer();

  lucide.createIcons();
}

// Switch Programming Language (JS / Java)
function switchLanguage(lang) {
  currentLang = lang;
  
  const jsBtn = document.getElementById('lang-js-btn');
  const javaBtn = document.getElementById('lang-java-btn');
  const langTag = document.getElementById('current-lang-tag');

  if (lang === 'javascript') {
    jsBtn.className = "px-3 py-1.5 rounded-md text-slate-300 transition-all flex items-center space-x-1.5 bg-indigo-600 text-white font-semibold shadow";
    javaBtn.className = "px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 transition-all flex items-center space-x-1.5";
    langTag.className = "text-[10px] font-bold px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-300 uppercase";
    langTag.textContent = "JavaScript";
  } else {
    javaBtn.className = "px-3 py-1.5 rounded-md text-slate-300 transition-all flex items-center space-x-1.5 bg-orange-600 text-white font-semibold shadow";
    jsBtn.className = "px-3 py-1.5 rounded-md text-slate-400 hover:text-slate-200 transition-all flex items-center space-x-1.5";
    langTag.className = "text-[10px] font-bold px-2 py-0.5 rounded bg-orange-500/20 text-orange-300 uppercase";
    langTag.textContent = "Java";
  }

  updateEditorCode();
}

// Render Input Form Controls
function renderInputs(algo) {
  const container = document.getElementById('input-controls-container');
  container.innerHTML = '';

  algo.inputs.forEach(input => {
    const wrapper = document.createElement('div');
    wrapper.className = 'space-y-1';

    wrapper.innerHTML = `
      <label for="input-${input.id}" class="text-xs font-medium text-slate-300">${input.label}</label>
      <input type="${input.type}" id="input-${input.id}" value="${input.default}" 
             ${input.min !== undefined ? `min="${input.min}"` : ''} 
             ${input.max !== undefined ? `max="${input.max}"` : ''}
             class="w-full bg-slate-950 border border-slate-800 focus:border-indigo-500 rounded-lg px-3 py-1.5 text-xs font-mono text-slate-100 outline-none transition-colors"
             onchange="resetVisualizer()" />
    `;

    container.appendChild(wrapper);
  });
}

// Render Preset Buttons
function renderPresets(algo) {
  const container = document.getElementById('preset-buttons');
  container.innerHTML = '';

  algo.presets.forEach(preset => {
    const btn = document.createElement('button');
    btn.className = 'px-2 py-1 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded text-[11px] font-medium transition-colors';
    btn.textContent = preset.label;
    btn.onclick = () => {
      Object.entries(preset.values).forEach(([id, val]) => {
        const inp = document.getElementById(`input-${id}`);
        if (inp) inp.value = val;
      });
      resetVisualizer();
    };
    container.appendChild(btn);
  });
}

// Initialize Monaco Editor
function initMonacoEditor() {
  require.config({ paths: { vs: 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.39.0/min/vs' } });
  require(['vs/editor/ed.main'], function () {
    monacoEditor = monaco.editor.create(document.getElementById('monaco-editor-container'), {
      value: ALGORITHMS[currentAlgoId].code[currentLang],
      language: currentLang,
      theme: 'vs-dark',
      automaticLayout: true,
      fontSize: 13,
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      padding: { top: 12, bottom: 12 }
    });
  });
}

// Update Editor Code when changing algorithm or language
function updateEditorCode() {
  if (monacoEditor) {
    const code = ALGORITHMS[currentAlgoId].code[currentLang];
    monaco.editor.setModelLanguage(monacoEditor.getModel(), currentLang);
    monacoEditor.setValue(code);
  }
}

// Restore Original Code
function restoreOriginalCode() {
  updateEditorCode();
  logConsole("Código restaurado para a versão original do repositório DrwGuikkz.");
}

// Log message to execution console
function logConsole(msg, isError = false) {
  const consoleElem = document.getElementById('console-output');
  const timestamp = new Date().toLocaleTimeString();
  const formatted = `[${timestamp}] ${msg}\n`;
  
  if (isError) {
    consoleElem.innerHTML += `<span class="text-red-400">${formatted}</span>`;
  } else {
    consoleElem.innerHTML += `<span class="text-slate-300">${formatted}</span>`;
  }
  consoleElem.scrollTop = consoleElem.scrollHeight;
}

function clearConsole() {
  document.getElementById('console-output').textContent = '';
}

// Update animation speed
function updateSpeed(val) {
  animationSpeed = parseInt(val);
  document.getElementById('speed-label').textContent = `${val}ms`;
}

// Execute user modified code from Monaco Editor
function runUserModifiedCode() {
  if (!monacoEditor) return;

  const code = monacoEditor.getValue();
  clearConsole();
  logConsole(`--- Executando código modificado em (${currentLang.toUpperCase()}) ---`);

  const t0 = performance.now();

  try {
    if (currentLang === 'javascript') {
      // Capture console.log calls
      let logs = [];
      const customConsole = {
        log: (...args) => logs.push(args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ')),
        error: (...args) => logs.push('[ERRO] ' + args.join(' '))
      };

      const runFn = new Function('console', code);
      runFn(customConsole);

      const t1 = performance.now();
      logs.forEach(l => logConsole(l));
      logConsole(`Execução concluída com sucesso em ${(t1 - t0).toFixed(2)} ms.`);
    } else {
      // Java Emulation Runner
      logConsole("Simulador Java: Compilando e executando classe Java...");
      
      // Extract main or methods and execute logic
      let logs = [];
      const simulatedConsole = {
        println: (msg) => logs.push(String(msg)),
        print: (msg) => logs.push(String(msg))
      };

      // Convert Java System.out.println to JS console
      let jsEquivalent = code
        .replace(/System\.out\.println\((.*?)\);/g, 'console.println($1);')
        .replace(/System\.out\.print\((.*?)\);/g, 'console.print($1);')
        .replace(/public\s+class\s+\w+\s*\{/g, '')
        .replace(/public\s+static\s+void\s+main\(String\[\]\s+args\)\s*\{/g, 'function main() {')
        .replace(/int\[\]\s+(\w+)\s*=\s*\{/g, 'let $1 = [')
        .replace(/int\s+/g, 'let ')
        .replace(/boolean\s+/g, 'let ')
        .replace(/long\s+/g, 'let ')
        .replace(/String\s+/g, 'let ')
        .replace(/Arrays\.toString\((.*?)\)/g, 'JSON.stringify($1)');

      try {
        const runJavaFn = new Function('console', jsEquivalent + '\n if(typeof main === "function") main();');
        runJavaFn(simulatedConsole);
        logs.forEach(l => logConsole(l));
        const t1 = performance.now();
        logConsole(`Execução Java simulada em ${(t1 - t0).toFixed(2)} ms.`);
      } catch (err) {
        logConsole(`Erro de sintaxe/execução no código Java: ${err.message}`, true);
      }
    }
  } catch (err) {
    logConsole(`Erro de Execução: ${err.message}`, true);
  }
}

// Reset Visualizer State
function resetVisualizer() {
  if (animationTimer) clearTimeout(animationTimer);
  isAnimating = false;
  currentStepIndex = 0;
  visualSteps = [];

  document.getElementById('step-count').textContent = '0';
  document.getElementById('execution-time').textContent = '0.00 ms';
  document.getElementById('vis-status').innerHTML = `<span>Pronto para iniciar. Clique em <strong>Executar Algoritmo</strong> ou <strong>Passo a Passo</strong>.</span>`;
  
  // Render initial visual state according to selected algorithm
  renderInitialVisualState();
}

// Render Initial Visualizer Layout before execution
function renderInitialVisualState() {
  const container = document.getElementById('visualizer-container');
  container.innerHTML = '';

  switch (currentAlgoId) {
    case 'ordenacao': {
      const inputArr = getArrayInput();
      const maxVal = Math.max(...inputArr, 1);
      
      const flexWrapper = document.createElement('div');
      flexWrapper.className = 'w-full h-56 flex items-end justify-center space-x-3 px-4';

      inputArr.forEach((val, idx) => {
        const heightPct = Math.max((val / maxVal) * 100, 10);
        const barWrapper = document.createElement('div');
        barWrapper.className = 'flex flex-col items-center space-y-1 flex-1 max-w-[48px]';

        barWrapper.innerHTML = `
          <span class="text-[11px] font-mono font-bold text-slate-300" id="bar-val-${idx}">${val}</span>
          <div id="bar-${idx}" class="array-bar default w-full" style="height: ${heightPct}%"></div>
          <span class="text-[10px] font-mono text-slate-500">${idx}</span>
        `;
        flexWrapper.appendChild(barWrapper);
      });

      container.appendChild(flexWrapper);
      break;
    }

    case 'ehPrimo': {
      const n = getNumberInput('n', 29);
      container.innerHTML = `
        <div class="flex flex-col items-center space-y-4 w-full">
          <div class="text-center">
            <span class="text-xs text-slate-400">Número a Testar:</span>
            <div class="text-4xl font-extrabold font-mono text-indigo-400 mt-1">${n}</div>
          </div>
          <div id="prime-steps-grid" class="flex flex-wrap items-center justify-center gap-2 max-w-xl">
            <span class="text-xs text-slate-500">Divisores de 2 até √${n} (${Math.floor(Math.sqrt(n))}) serão testados aqui...</span>
          </div>
        </div>
      `;
      break;
    }

    case 'fibonacci': {
      const n = getNumberInput('n', 10);
      container.innerHTML = `
        <div class="flex flex-col items-center space-y-4 w-full">
          <div class="text-xs text-slate-400">Gerando os primeiros <strong>${n}</strong> números de Fibonacci:</div>
          <div id="fibo-container" class="flex flex-wrap items-center justify-center gap-3 max-w-2xl min-h-[80px]">
            <!-- Fibonacci nodes -->
          </div>
        </div>
      `;
      break;
    }

    case 'somatorio': {
      const n = getNumberInput('n', 15);
      container.innerHTML = `
        <div class="flex flex-col items-center space-y-4 w-full">
          <div class="flex items-center justify-between w-full max-w-md bg-slate-900/80 p-3 rounded-xl border border-slate-800">
            <span class="text-xs text-slate-400">Soma de 1 até ${n}:</span>
            <span id="sum-accumulator" class="text-2xl font-bold font-mono text-emerald-400">0</span>
          </div>
          <div id="sum-items-grid" class="flex flex-wrap justify-center gap-1.5 max-w-lg">
            <!-- Numbers to sum -->
          </div>
        </div>
      `;
      break;
    }

    case 'maximoDivisorComum': {
      const a = getNumberInput('a', 48);
      const b = getNumberInput('b', 18);
      container.innerHTML = `
        <div class="w-full max-w-md space-y-3">
          <div class="flex items-center justify-around bg-slate-900 p-3 rounded-xl border border-slate-800 text-center">
            <div>
              <div class="text-[10px] text-slate-400 uppercase">Número A</div>
              <div class="text-xl font-bold font-mono text-indigo-400">${a}</div>
            </div>
            <div class="text-slate-600 font-bold">MDC</div>
            <div>
              <div class="text-[10px] text-slate-400 uppercase">Número B</div>
              <div class="text-xl font-bold font-mono text-purple-400">${b}</div>
            </div>
          </div>
          <div id="euclid-table" class="space-y-2 text-xs font-mono">
            <!-- Euclid steps will be rendered here -->
          </div>
        </div>
      `;
      break;
    }

    case 'contagem': {
      const n = getNumberInput('n', 12);
      container.innerHTML = `
        <div class="flex flex-col items-center space-y-4 w-full">
          <div class="text-center">
            <div class="text-xs text-slate-400">Total de Elementos a Contar</div>
            <div id="counter-display" class="text-5xl font-extrabold font-mono text-indigo-400 mt-2">0 / ${n}</div>
          </div>
          <div class="w-full max-w-md bg-slate-800/80 rounded-full h-3 overflow-hidden border border-slate-700">
            <div id="counter-progress" class="bg-gradient-to-r from-indigo-500 to-purple-500 h-full w-0 transition-all duration-300"></div>
          </div>
          <div id="counter-grid" class="flex flex-wrap justify-center gap-2 max-w-md"></div>
        </div>
      `;
      break;
    }
  }
}

// Generate Steps for Execution
function generateSteps() {
  visualSteps = [];

  switch (currentAlgoId) {
    case 'ordenacao': {
      const arr = getArrayInput();
      const n = arr.length;
      let state = [...arr];

      for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
          visualSteps.push({
            type: 'compare',
            arr: [...state],
            j: j,
            j1: j + 1,
            msg: `Comparando elementos nas posições ${j} (${state[j]}) e ${j + 1} (${state[j + 1]})`
          });

          if (state[j] > state[j + 1]) {
            let temp = state[j];
            state[j] = state[j + 1];
            state[j + 1] = temp;

            visualSteps.push({
              type: 'swap',
              arr: [...state],
              j: j,
              j1: j + 1,
              msg: `Troca realizada: ${state[j + 1]} é maior que ${state[j]}. Novo estado: [${state.join(', ')}]`
            });
          }
        }
        visualSteps.push({
          type: 'sorted_index',
          arr: [...state],
          sortedIdx: n - 1 - i,
          msg: `Elemento ${state[n - 1 - i]} fixado na posição final ${n - 1 - i}.`
        });
      }

      visualSteps.push({
        type: 'complete',
        arr: [...state],
        msg: `Ordenação concluída com sucesso! Vetor final: [${state.join(', ')}]`
      });
      break;
    }

    case 'ehPrimo': {
      const n = getNumberInput('n', 29);
      if (n < 2) {
        visualSteps.push({ type: 'not-prime', n: n, msg: `Número ${n} é menor que 2, portanto NÃO é primo.` });
        break;
      }

      const limit = Math.floor(Math.sqrt(n));
      let isP = true;

      for (let i = 2; i <= limit; i++) {
        const isDivisible = n % i === 0;
        visualSteps.push({
          type: isDivisible ? 'divisor-found' : 'test-divisor',
          n: n,
          i: i,
          isDivisible: isDivisible,
          msg: isDivisible 
            ? `Divisível por ${i}! (${n} % ${i} = 0). O número ${n} NÃO é primo.`
            : `Testando divisor ${i}: ${n} % ${i} = ${n % i} (Não divide exatamente).`
        });

        if (isDivisible) {
          isP = false;
          break;
        }
      }

      if (isP) {
        visualSteps.push({ type: 'prime-result', n: n, isPrime: true, msg: `Nenhum divisor encontrado até √${n} (${limit}). O número ${n} É PRIMO! 🎉` });
      } else {
        visualSteps.push({ type: 'prime-result', n: n, isPrime: false, msg: `O número ${n} NÃO É PRIMO.` });
      }
      break;
    }

    case 'fibonacci': {
      const n = getNumberInput('n', 10);
      let seq = [];

      if (n >= 1) {
        seq.push(0);
        visualSteps.push({ type: 'add', term: 0, idx: 0, seq: [...seq], msg: 'Termo F(0) = 0' });
      }
      if (n >= 2) {
        seq.push(1);
        visualSteps.push({ type: 'add', term: 1, idx: 1, seq: [...seq], msg: 'Termo F(1) = 1' });
      }

      for (let i = 2; i < n; i++) {
        let next = seq[i - 1] + seq[i - 2];
        seq.push(next);
        visualSteps.push({
          type: 'calc',
          term: next,
          idx: i,
          a: seq[i - 2],
          b: seq[i - 1],
          seq: [...seq],
          msg: `F(${i}) = F(${i - 1}) + F(${i - 2}) = ${seq[i - 1]} + ${seq[i - 2]} = ${next}`
        });
      }

      visualSteps.push({ type: 'complete', seq: [...seq], msg: `Sequência de ${n} termos finalizada.` });
      break;
    }

    case 'somatorio': {
      const n = getNumberInput('n', 15);
      let soma = 0;

      for (let i = 1; i <= n; i++) {
        soma += i;
        visualSteps.push({
          type: 'add-sum',
          val: i,
          currentSum: soma,
          n: n,
          msg: `Adicionando +${i} | Soma parcial = ${soma}`
        });
      }

      visualSteps.push({ type: 'complete-sum', total: soma, n: n, msg: `Somatório total de 1 a ${n} é igual a ${soma}.` });
      break;
    }

    case 'maximoDivisorComum': {
      let a = getNumberInput('a', 48);
      let b = getNumberInput('b', 18);
      let origA = a, origB = b;

      while (b !== 0) {
        let resto = a % b;
        let q = Math.floor(a / b);
        visualSteps.push({
          type: 'euclid-step',
          a: a,
          b: b,
          q: q,
          resto: resto,
          msg: `${a} = ${b} × ${q} + ${resto} (Resto: ${resto})`
        });
        a = b;
        b = resto;
      }

      visualSteps.push({
        type: 'euclid-complete',
        mdc: a,
        origA: origA,
        origB: origB,
        msg: `Resto 0 alcançado! O Máximo Divisor Comum MDC(${origA}, ${origB}) é ${a}.`
      });
      break;
    }

    case 'contagem': {
      const n = getNumberInput('n', 12);
      for (let i = 1; i <= n; i++) {
        visualSteps.push({
          type: 'count-step',
          val: i,
          total: n,
          msg: `Elemento ${i} contado com sucesso. (Progresso: ${i}/${n})`
        });
      }
      visualSteps.push({ type: 'count-complete', total: n, msg: `Contagem concluída! Total de ${n} elementos computados.` });
      break;
    }
  }
}

// Execute Full Algorithm with animation
function executeAlgorithm() {
  if (isAnimating) return;
  generateSteps();
  currentStepIndex = 0;
  isAnimating = true;

  const t0 = performance.now();

  function animate() {
    if (currentStepIndex < visualSteps.length) {
      applyStep(visualSteps[currentStepIndex]);
      currentStepIndex++;
      document.getElementById('step-count').textContent = currentStepIndex;
      animationTimer = setTimeout(animate, animationSpeed);
    } else {
      isAnimating = false;
      const t1 = performance.now();
      document.getElementById('execution-time').textContent = `${(t1 - t0).toFixed(2)} ms`;
      logConsole(`Execução e visualização do algoritmo ${ALGORITHMS[currentAlgoId].title} concluídas.`);
    }
  }

  animate();
}

// Step visualizer single step forward
function stepVisualizer() {
  if (visualSteps.length === 0) {
    generateSteps();
    currentStepIndex = 0;
  }

  if (currentStepIndex < visualSteps.length) {
    applyStep(visualSteps[currentStepIndex]);
    currentStepIndex++;
    document.getElementById('step-count').textContent = currentStepIndex;
  } else {
    document.getElementById('vis-status').innerHTML = `<span class="text-emerald-400 font-bold">Todos os passos foram concluídos!</span>`;
  }
}

// Apply single visual step to DOM UI
function applyStep(step) {
  const statusElem = document.getElementById('vis-status');
  statusElem.innerHTML = `<span>${step.msg}</span>`;

  switch (currentAlgoId) {
    case 'ordenacao': {
      const arr = step.arr;
      const maxVal = Math.max(...arr, 1);

      arr.forEach((val, idx) => {
        const bar = document.getElementById(`bar-${idx}`);
        const valTxt = document.getElementById(`bar-val-${idx}`);

        if (bar) {
          const heightPct = Math.max((val / maxVal) * 100, 10);
          bar.style.height = `${heightPct}%`;
          valTxt.textContent = val;

          // Classes reset
          bar.className = 'array-bar default w-full';

          if (step.type === 'compare' && (idx === step.j || idx === step.j1)) {
            bar.className = 'array-bar comparing w-full';
          } else if (step.type === 'swap' && (idx === step.j || idx === step.j1)) {
            bar.className = 'array-bar swapping w-full';
          } else if (step.type === 'complete' || (step.sortedIdx !== undefined && idx >= step.sortedIdx)) {
            bar.className = 'array-bar sorted w-full';
          }
        }
      });
      break;
    }

    case 'ehPrimo': {
      const grid = document.getElementById('prime-steps-grid');
      if (step.type === 'test-divisor' || step.type === 'divisor-found') {
        const node = document.createElement('div');
        node.className = `node-card px-3 py-2 rounded-lg border text-xs font-mono font-bold flex flex-col items-center ${
          step.isDivisible ? 'not-prime' : 'active'
        }`;
        node.innerHTML = `
          <span>d = ${step.i}</span>
          <span class="text-[10px] font-normal opacity-80">${step.n} % ${step.i} = ${step.n % step.i}</span>
        `;
        grid.appendChild(node);
      }
      break;
    }

    case 'fibonacci': {
      const container = document.getElementById('fibo-container');
      const node = document.createElement('div');
      node.className = 'node-card bg-slate-900 border border-indigo-500/40 p-3 rounded-xl text-center shadow-lg active min-w-[64px]';
      node.innerHTML = `
        <div class="text-[10px] text-indigo-400 font-mono">F(${step.idx})</div>
        <div class="text-xl font-bold font-mono text-white mt-0.5">${step.term}</div>
      `;
      container.appendChild(node);
      break;
    }

    case 'somatorio': {
      const acc = document.getElementById('sum-accumulator');
      const grid = document.getElementById('sum-items-grid');

      if (step.currentSum !== undefined) {
        acc.textContent = step.currentSum;

        const badge = document.createElement('span');
        badge.className = 'px-2 py-1 bg-indigo-600/20 text-indigo-300 border border-indigo-500/30 rounded text-xs font-mono font-bold animate-bounce';
        badge.textContent = `+${step.val}`;
        grid.appendChild(badge);
      }
      break;
    }

    case 'maximoDivisorComum': {
      const table = document.getElementById('euclid-table');
      if (step.type === 'euclid-step') {
        const row = document.createElement('div');
        row.className = 'bg-slate-950 p-2.5 rounded-lg border border-slate-800 flex items-center justify-between';
        row.innerHTML = `
          <span class="text-slate-300">${step.a} ÷ ${step.b}</span>
          <span class="text-purple-400">Quociente: ${step.q}</span>
          <span class="${step.resto === 0 ? 'text-emerald-400 font-bold' : 'text-amber-400'}">Resto: ${step.resto}</span>
        `;
        table.appendChild(row);
      }
      break;
    }

    case 'contagem': {
      const disp = document.getElementById('counter-display');
      const prog = document.getElementById('counter-progress');
      const grid = document.getElementById('counter-grid');

      if (step.val !== undefined) {
        disp.textContent = `${step.val} / ${step.total}`;
        const pct = (step.val / step.total) * 100;
        prog.style.width = `${pct}%`;

        const badge = document.createElement('div');
        badge.className = 'w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center font-mono font-bold text-xs shadow';
        badge.textContent = step.val;
        grid.appendChild(badge);
      }
      break;
    }
  }
}

// Helper: Get Array Input
function getArrayInput() {
  const inp = document.getElementById('input-array');
  if (!inp) return [29, 10, 14, 37, 13, 42, 8];

  const raw = inp.value.split(',').map(s => parseInt(s.trim())).filter(n => !isNaN(n));
  return raw.length > 0 ? raw : [29, 10, 14, 37, 13, 42, 8];
}

// Helper: Get Number Input
function getNumberInput(id, defaultVal) {
  const inp = document.getElementById(`input-${id}`);
  if (!inp) return defaultVal;
  const val = parseInt(inp.value);
  return isNaN(val) ? defaultVal : val;
}
