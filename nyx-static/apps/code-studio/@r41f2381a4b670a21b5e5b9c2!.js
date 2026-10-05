(() => {
  "use strict";
  const e = "nyx.codeStudio.v1", t = 24e3, n = {
    html: {
      file: "index.html",
      help: "Build a small page and see it safely in the preview.",
      starter: "<!doctype html>\n<html>\n  <head>\n    <style>\n      body { font-family: system-ui; padding: 2rem; color: #172033; }\n      button { padding: .7rem 1rem; border: 0; border-radius: .6rem; background: #4f6ee8; color: white; }\n    </style>\n  </head>\n  <body>\n    <h1>Hello, Nyx</h1>\n    <p>Make this page your own.</p>\n    <button onclick=\"this.textContent = 'Nice work!'\">Try it</button>\n  </body>\n</html>",
      run: !0
    },
    css: {
      file: "styles.css",
      help: "Write styles and preview them on a small sample card.",
      starter: "body {\n  margin: 0;\n  min-height: 100vh;\n  display: grid;\n  place-items: center;\n  background: #e8eefc;\n  font-family: system-ui;\n}\n\n.card {\n  max-width: 20rem;\n  padding: 2rem;\n  border-radius: 1.25rem;\n  background: white;\n  box-shadow: 0 18px 45px rgba(46, 67, 122, .18);\n}",
      run: !0
    },
    javascript: {
      file: "app.js",
      help: "Run JavaScript in an isolated browser preview.",
      starter: 'const message = document.querySelector("#message");\nconst button = document.querySelector("button");\n\nbutton.addEventListener("click", () => {\n  message.textContent = "You changed the page with JavaScript.";\n});',
      run: !0
    },
    typescript: {
      file: "app.ts",
      help: "Compile and run TypeScript in an isolated environment. Do not include secrets.",
      starter: 'type Student = {\n  name: string;\n  projects: number;\n};\n\nconst student: Student = { name: "Nyx learner", projects: 1 };\nconsole.log(`${student.name} has ${student.projects} project.`);',
      runner: !0
    },
    python: {
      file: "main.py",
      help: "Run Python in an isolated environment. Do not include secrets.",
      starter: 'def greet(name: str) -> str:\n    return f"Hello, {name}!"\n\nprint(greet("Nyx learner"))',
      runner: !0
    },
    java: {
      file: "Main.java",
      help: "Compile and run Java in an isolated environment. Do not include secrets.",
      starter: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, Nyx learner!");\n  }\n}',
      runner: !0
    },
    c: {
      file: "main.c",
      help: "Compile and run C in an isolated environment. Do not include secrets.",
      starter: '#include <stdio.h>\n\nint main(void) {\n  puts("Hello, Nyx learner!");\n  return 0;\n}',
      runner: !0
    },
    cpp: {
      file: "main.cpp",
      help: "Compile and run C++ in an isolated environment. Do not include secrets.",
      starter: '#include <iostream>\n\nint main() {\n  std::cout << "Hello, Nyx learner!\\n";\n  return 0;\n}',
      runner: !0
    },
    csharp: {
      file: "Program.cs",
      help: "Compile and run C# in an isolated environment. Do not include secrets.",
      starter: 'using System;\n\npublic class Program {\n  public static void Main() {\n    Console.WriteLine("Hello, Nyx learner!");\n  }\n}',
      runner: !0
    },
    go: {
      file: "main.go",
      help: "Compile and run Go in an isolated environment. Do not include secrets.",
      starter: 'package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello, Nyx learner!")\n}',
      runner: !0
    },
    rust: {
      file: "main.rs",
      help: "Compile and run Rust in an isolated environment. Do not include secrets.",
      starter: 'fn main() {\n    println!("Hello, Nyx learner!");\n}',
      runner: !0
    },
    php: {
      file: "index.php",
      help: "Run PHP in an isolated environment. Do not include secrets.",
      starter: '<?php\n$name = "Nyx learner";\necho "Hello, {$name}!\\n";',
      runner: !0
    },
    ruby: {
      file: "main.rb",
      help: "Run Ruby in an isolated environment. Do not include secrets.",
      starter: 'def greet(name)\n  "Hello, #{name}!"\nend\n\nputs greet("Nyx learner")',
      runner: !0
    },
    sql: {
      file: "query.sql",
      help: "Run SQLite statements in an isolated temporary database. Do not include secrets.",
      starter: 'CREATE TABLE learners (\n  student_name TEXT,\n  completed_projects INTEGER\n);\n\nINSERT INTO learners VALUES ("Nyx learner", 2);\n\nSELECT student_name, completed_projects\nFROM learners\nORDER BY completed_projects DESC;',
      runner: !0
    },
    json: {
      file: "data.json",
      help: "Validate JSON and inspect its formatted result.",
      starter: '{\n  "project": "Nyx Code Studio",\n  "languages": ["JavaScript", "Python", "Rust"],\n  "ready": true\n}',
      run: !0
    },
    markdown: {
      file: "README.md",
      help: "Write Markdown and see a safe rendered preview.",
      starter: "# My project\n\nBuild something useful, then write down what it does.\n\n- Clear goal\n- Small next step\n- Test your work",
      run: !0
    }
  }, r = {
    html: [ "Landing page", "<main><h1>My project</h1><p>A clear place to start.</p></main>" ],
    javascript: [ "Click counter", 'let count = 0;\ndocument.querySelector("button").addEventListener("click", () => {\n  count += 1;\n  document.querySelector("#message").textContent = `Clicked ${count} times`;\n});' ],
    python: [ "Simple list", 'tasks = ["Plan", "Build", "Test"]\nfor task in tasks:\n    print(f"- {task}")' ],
    json: [ "Project data", '{\n  "name": "My project",\n  "version": 1,\n  "complete": false\n}' ],
    markdown: [ "Project notes", "# Project notes\n\n## Next up\n\n1. Build a small version\n2. Test it\n3. Improve it" ]
  }, o = {
    shell: document.querySelector("[data-code-studio]"),
    workbench: document.querySelector("[data-workbench]"),
    language: document.querySelector("[data-language]"),
    help: document.querySelector("[data-language-help]"),
    files: document.querySelectorAll("[data-file-name]"),
    input: document.querySelector("[data-code-input]"),
    highlight: document.querySelector("[data-highlight] code"),
    lineNumbers: document.querySelector("[data-line-numbers]"),
    cursor: document.querySelector("[data-cursor-position]"),
    editorWrap: document.querySelector("[data-editor-wrap]"),
    editorCard: document.querySelector(".editor-card"),
    languageBadge: document.querySelector("[data-language-badge]"),
    languageStatus: document.querySelector("[data-language-status]"),
    starters: document.querySelector("[data-starters]"),
    runButtons: document.querySelectorAll("[data-run], [data-run-empty]"),
    reset: document.querySelector("[data-reset]"),
    clear: document.querySelector("[data-clear-code]"),
    download: document.querySelector("[data-download-code]"),
    preview: document.querySelector("[data-preview]"),
    previewEmpty: document.querySelector("[data-preview-empty]"),
    output: document.querySelector("[data-output]"),
    previewState: document.querySelector("[data-preview-state]"),
    previewStateLabel: document.querySelector("[data-preview-state-label]"),
    refreshPreview: document.querySelector("[data-refresh-preview]"),
    fullscreenPreview: document.querySelector("[data-fullscreen-preview]"),
    resultCard: document.querySelector("[data-result-card]"),
    problemCount: document.querySelector("[data-problem-count]"),
    resultTabs: document.querySelectorAll("[data-result-mode]"),
    saveState: document.querySelector("[data-save-state]"),
    saveLabel: document.querySelector("[data-save-label]"),
    form: document.querySelector("[data-ai-form]"),
    prompt: document.querySelector("[data-ai-prompt-input]"),
    send: document.querySelector("[data-ai-send]"),
    answer: document.querySelector("[data-ai-answer]"),
    aiStatus: document.querySelector("[data-ai-status]"),
    aiStatusLabel: document.querySelector("[data-ai-status-label]")
  }, a = /^(?:as|async|await|break|case|catch|class|const|continue|def|default|delete|do|else|enum|export|extends|false|finally|fn|for|from|function|go|if|implements|import|in|instanceof|interface|let|match|new|null|package|private|protected|public|return|select|static|struct|switch|this|throw|true|try|type|typeof|using|var|void|while|yield|SELECT|FROM|WHERE|ORDER|BY|GROUP|INSERT|UPDATE|DELETE|CREATE|TABLE|JOIN|AS|AND|OR|NOT|NULL)$/, s = "nyx.codeStudio.layout.v1";
  let i = function() {
    let r = {};
    try {
      r = JSON.parse(localStorage.getItem(e) || "{}") || {};
    } catch {}
    const o = {};
    for (const [e, l] of Object.entries(r.codes || {})) {
      const a = 2 === r.schema ? e : n[e]?.file;
      b(a) && "string" == typeof l && (o[a] = l.slice(0, t));
    }
    const a = 2 === r.schema ? r.file : n[r.language]?.file, s = b(a) ? a : Object.keys(o)[0] || "index.html";
    Object.hasOwn(o, s) || (o[s] = n[w(s)].starter);
    const i = (Array.isArray(r.versions) ? r.versions : []).map(e => ({
      ...e,
      file: e.file || n[e.language]?.file
    })).filter(e => b(e.file) && "string" == typeof e.code).slice(-20);
    return {
      schema: 2,
      file: s,
      language: w(s),
      codes: o,
      versions: i
    };
  }(), l = null, c = [], d = null, u = "Run a file to see activity here.", p = "", m = !1, h = "", g = [], f = [], y = 0, v = !1;
  function w(e) {
    return {
      html: "html",
      htm: "html",
      css: "css",
      js: "javascript",
      mjs: "javascript",
      ts: "typescript",
      py: "python",
      java: "java",
      c: "c",
      cpp: "cpp",
      cs: "csharp",
      go: "go",
      rs: "rust",
      php: "php",
      rb: "ruby",
      sql: "sql",
      json: "json",
      md: "markdown"
    }[String(e).split(".").pop().toLowerCase()] || null;
  }
  function b(e) {
    return "string" == typeof e && e.length <= 120 && /^[a-zA-Z0-9_-][a-zA-Z0-9_./-]*$/.test(e) && !e.split("/").some(e => !e || "." === e || ".." === e) && Boolean(w(e));
  }
  function S(e, t = "") {
    o.saveLabel.textContent = e, o.saveState.classList.toggle("is-saving", "saving" === t), 
    o.saveState.classList.toggle("is-error", "error" === t);
  }
  function x() {
    try {
      return localStorage.setItem(e, JSON.stringify(i)), S("Saved locally"), !0;
    } catch {
      return S("Could not save", "error"), !1;
    }
  }
  function E() {
    return String(i.codes[i.file] ?? n[i.language].starter).slice(0, t);
  }
  function C(e) {
    i.codes[i.file] = String(e || "").slice(0, t), o.input.value = E(), A(), T(), x();
  }
  function k(e) {
    return String(e || "").replace(/[&<>"']/g, e => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;"
    }[e]));
  }
  function L(e, t, n) {
    let r = "";
    for (let o = 0; o < e.length; o += 1) {
      const a = k(e[o]);
      r += n.has(t + o) ? `<span class="matching-bracket">${a}</span>` : a;
    }
    return r;
  }
  function N(e, t, n) {
    return /^<!--|^\/\*|^\/\/|^#(?![0-9a-f]{3,8}\b)/i.test(e) ? "syntax-comment" : /^<\/?[a-z]/i.test(e) ? "syntax-tag" : /^['"`]/.test(e) ? t.slice(n).trimStart().startsWith(":") ? "syntax-property" : "syntax-string" : /^\d/.test(e) ? "syntax-number" : a.test(e) ? "syntax-keyword" : "syntax-operator";
  }
  function q(e) {
    const t = String(e || ""), n = function(e, t) {
      const n = {
        "(": ")",
        "[": "]",
        "{": "}"
      }, r = {
        ")": "(",
        "]": "[",
        "}": "{"
      };
      let o = t;
      n[e[o]] || r[e[o]] || (o = t - 1);
      const a = e[o];
      if (!a || !n[a] && !r[a]) return new Set;
      const s = Boolean(n[a]), i = s ? n[a] : r[a];
      let l = 0;
      for (let c = o; s ? c < e.length : c >= 0; c += s ? 1 : -1) {
        const t = e[c];
        if (t === a) l += 1; else if (t === i && (l -= 1, 0 === l)) return new Set([ o, c ]);
      }
      return new Set([ o ]);
    }(t, o.input.selectionStart), r = "html" === i.language ? /<!--[\s\S]*?-->|<\/?[A-Za-z][^>]*>|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b/g : /\/\*[\s\S]*?\*\/|\/\/[^\n]*|#(?![0-9a-fA-F]{3,8}\b)[^\n]*|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|`(?:\\.|[^`\\])*`|\b\d+(?:\.\d+)?\b|\b[A-Za-z_][\w$]*\b|[=+\-*\/%!<>:&|]+/g;
    let a = "", s = 0;
    for (const o of t.matchAll(r)) {
      const e = o.index || 0;
      a += L(t.slice(s, e), s, n), a += `<span class="${N(o[0], t, e + o[0].length)}">${L(o[0], e, n)}</span>`, 
      s = e + o[0].length;
    }
    return a + L(t.slice(s), s, n) + "\n";
  }
  function A() {
    o.highlight.innerHTML = q(o.input.value), o.lineNumbers.textContent = Array.from({
      length: o.input.value.split("\n").length
    }, (e, t) => t + 1).join("\n"), document.querySelectorAll("[data-starters] button").forEach(e => e.classList.toggle("is-active", o.input.value === e.dataset.code)), 
    j(), o.input.scrollTop = o.highlight.parentElement.scrollTop, o.input.scrollLeft = o.highlight.parentElement.scrollLeft;
  }
  function j() {
    const e = o.input.value.slice(0, o.input.selectionStart), t = e.split("\n").length, n = `Ln ${t}, Col ${e.length - e.lastIndexOf("\n")}`;
    o.cursor.textContent = n, o.editorWrap.style.setProperty("--active-line", String(t - 1)), 
    document.querySelectorAll("[data-cursor-status]").forEach(e => e.textContent = n), 
    o.highlight.innerHTML = q(o.input.value);
  }
  function O() {
    return "cpp" === i.language ? "C++" : "csharp" === i.language ? "C#" : i.language[0].toUpperCase() + i.language.slice(1);
  }
  function T() {
    y += 1, P(!1), m = !1, p = "", h = "", g = [], f = [], o.preview.removeAttribute("srcdoc"), 
    o.refreshPreview.disabled = !0, o.problemCount.textContent = "0", $("Not run", ""), 
    J("output");
  }
  function R() {
    const e = n[i.language];
    o.language.value = i.language, o.help.textContent = e.help, o.files.forEach(e => e.textContent = i.file), 
    o.languageStatus.textContent = O(), o.languageBadge.textContent = O(), o.input.value = E(), 
    function() {
      ce.replaceChildren();
      for (const e of Object.keys(i.codes)) {
        const t = document.createElement("option");
        t.value = e, t.textContent = e, ce.append(t);
      }
      ce.value = i.file;
    }(), function() {
      const e = [ [ "Default starter", n[i.language].starter ] ];
      r[i.language] && e.push(r[i.language]), o.starters.replaceChildren(), e.forEach(([e, t]) => {
        const n = document.createElement("button");
        n.type = "button", n.textContent = e, n.dataset.code = t, n.classList.toggle("is-active", E() === t), 
        n.addEventListener("click", () => C(t)), o.starters.append(n);
      });
    }(), A(), T(), x();
  }
  function $(e, t) {
    o.previewStateLabel.textContent = e, o.previewState.className = "preview-state" + (t ? ` is-${t}` : "");
  }
  function P(e) {
    v = Boolean(e), o.runButtons.forEach(e => {
      e.disabled = v, e.classList.toggle("is-running", v);
      const t = e.querySelector("[data-run-label]");
      t ? t.textContent = v ? "Running..." : "Run code" : e.matches("[data-run-empty]") && (e.textContent = v ? "Running..." : "Run code");
    }), o.refreshPreview.disabled = v || !m;
  }
  function M() {
    const e = function() {
      const e = f.map(e => ({
        ...e
      }));
      if ("json" === i.language && !e.some(e => "Invalid JSON" === e.title)) try {
        JSON.parse(E());
      } catch (t) {
        e.push({
          title: "Invalid JSON",
          detail: t.message
        });
      }
      return o.problemCount.textContent = String(e.length), e;
    }(), t = document.createElement("div");
    t.className = "problem-list", (e.length ? e : [ {
      title: "No problems found",
      detail: `${i.file} passed the available browser checks.`,
      clear: !0
    } ]).forEach(e => {
      const n = document.createElement("div");
      n.className = "problem-row" + (e.clear ? " is-clear" : "");
      const r = document.createElement("i");
      r.textContent = e.clear ? "\u2713" : "!";
      const o = document.createElement("div"), a = document.createElement("strong"), s = document.createElement("span");
      a.textContent = e.title, s.textContent = e.detail, o.append(a, s), n.append(r, o), 
      t.append(n);
    }), o.output.replaceChildren(t);
  }
  function I() {
    o.output.replaceChildren(), (g.length ? g : u.split("\n").map((e, t) => ({
      text: e.replace(/^>\s*/, ""),
      tone: 0 === t ? "prompt" : "muted"
    }))).forEach((e, t) => {
      const n = document.createElement("div");
      n.className = "terminal-line";
      const r = document.createElement("span");
      r.className = "prompt" === e.tone ? "terminal-prompt" : "terminal-muted", r.textContent = "prompt" === e.tone ? "\u276f" : "\xb7";
      const a = document.createElement("span");
      a.textContent = e.text, n.append(r, a), o.output.append(n);
    });
  }
  function J(e = "output") {
    return o.resultTabs.forEach(t => t.classList.toggle("is-active", t.dataset.resultMode === e)), 
    o.preview.hidden = !0, o.previewEmpty.hidden = !0, o.output.hidden = !0, "terminal" === e ? (o.output.hidden = !1, 
    void I()) : "problems" === e ? (o.output.hidden = !1, void M()) : o.preview.srcdoc ? void (o.preview.hidden = !1) : m ? (o.output.hidden = !1, 
    void (o.output.textContent = p)) : void (o.previewEmpty.hidden = !1);
  }
  async function D() {
    if (v) return;
    const e = E(), t = i.language, r = ++y;
    if (m = !0, o.refreshPreview.disabled = !1, u = `Run ${i.file}\nCompleted ${(new Date).toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit"
    })}`, g = [ {
      text: `Run ${i.file}`,
      tone: "prompt"
    }, {
      text: `Started ${(new Date).toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit"
      })}`,
      tone: "muted"
    } ], f = [], o.problemCount.textContent = "0", n[i.language].run && [ "html", "css", "javascript" ].includes(i.language)) {
      const t = "<meta http-equiv=\"Content-Security-Policy\" content=\"default-src 'none'; style-src 'unsafe-inline'; script-src 'unsafe-inline'; img-src data:\">";
      h = `preview-${Date.now()}-${Math.random().toString(36).slice(2)}`;
      const n = `<script>(()=>{const runId=${JSON.stringify(h)};const send=(kind,args)=>parent.postMessage({type:'nyx-code-preview',runId,kind,text:args.map(value=>{try{return typeof value==='string'?value:JSON.stringify(value)}catch{return String(value)}}).join(' ')},'*');['log','info','warn','error'].forEach(kind=>{const original=console[kind]?.bind(console);console[kind]=(...args)=>{original?.(...args);send(kind,args)}});addEventListener('error',event=>send('error',[event.message||'Preview error']));addEventListener('unhandledrejection',event=>send('error',[event.reason?.message||event.reason||'Unhandled promise rejection']))})()<\/script>`;
      try {
        o.preview.srcdoc = `${t}${n}${function(e) {
          let t = "html" === i.language ? i.file : Object.hasOwn(i.codes, "index.html") ? "index.html" : Object.keys(i.codes).find(e => "html" === w(e));
          if (t && "html" !== i.language) {
            const e = (new DOMParser).parseFromString(i.codes[t], "text/html"), n = new URL(t, "https://workspace.invalid/");
            [ ...e.querySelectorAll("link[href],script[src]") ].some(e => {
              try {
                return new URL(e.getAttribute("href") || e.getAttribute("src"), n).pathname.slice(1) === i.file;
              } catch {
                return !1;
              }
            }) || (t = null);
          }
          if (t) {
            const n = (new DOMParser).parseFromString(t === i.file ? e : i.codes[t], "text/html"), r = new URL(t, "https://workspace.invalid/"), o = e => {
              const t = new URL(e, r);
              return t.origin === r.origin ? decodeURIComponent(t.pathname.slice(1)) : null;
            };
            for (const e of n.querySelectorAll('link[rel="stylesheet"][href]')) {
              const t = o(e.getAttribute("href"));
              if (!t) continue;
              if (!Object.hasOwn(i.codes, t)) throw Error("Missing workspace file: " + t);
              const r = n.createElement("style");
              r.textContent = i.codes[t], e.replaceWith(r);
            }
            for (const e of n.querySelectorAll("script[src]")) {
              const t = o(e.getAttribute("src"));
              if (t) {
                if (!Object.hasOwn(i.codes, t)) throw Error("Missing workspace file: " + t);
                if ("module" === e.type) throw Error("Use classic scripts for this preview. Module imports need a build server.");
                e.hasAttribute("defer") && (e.removeAttribute("defer"), n.body.append(e)), e.removeAttribute("src"), 
                e.removeAttribute("integrity"), e.textContent = i.codes[t].replace(/<\/script/gi, "<\\/script");
              }
            }
            return "<!doctype html>" + n.documentElement.outerHTML;
          }
          return "css" === i.language ? `<!doctype html><style>${e}</style><article class="card"><h1>Styled card</h1><p>Your CSS is running in this safe preview.</p></article>` : `<!doctype html><h1>JavaScript preview</h1><p id="message">Press the button to test your code.</p><button>Try it</button><script>${e.replace(/<\/script/gi, "<\\/script")}<\/script>`;
        }(e)}`;
      } catch (a) {
        return p = a.message, f = [ {
          title: "Preview needs a file",
          detail: a.message
        } ], o.preview.removeAttribute("srcdoc"), $("Needs a fix", "note"), void J("problems");
      }
      return $("Live", "live"), void J("output");
    }
    if (o.preview.removeAttribute("srcdoc"), "json" !== i.language) {
      if ("markdown" === i.language) return h = "", o.preview.srcdoc = `<!doctype html><meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'"><style>html,body{min-height:100%;margin:0;background:#fff}body{font:15px/1.6 system-ui;padding:1.4rem;color:#172033}code{background:#edf1f9;padding:.1rem .25rem;border-radius:.25rem}h1,h2,h3{line-height:1.2}</style><p>${function(e) {
        return k(e).replace(/^### (.*)$/gm, "<h3>$1</h3>").replace(/^## (.*)$/gm, "<h2>$1</h2>").replace(/^# (.*)$/gm, "<h1>$1</h1>").replace(/^[-*] (.*)$/gm, "<li>$1</li>").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>").replace(/\n{2,}/g, "</p><p>").replace(/\n/g, "<br>");
      }(e)}</p>`, $("Rendered", "live"), void J("output");
      if (n[i.language].runner) {
        p = "Running your code...", $("Running...", "note"), P(!0), J("output");
        const n = new AbortController, s = setTimeout(() => n.abort(), 18e3);
        try {
          const o = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/code-studio/run", {
            method: "POST",
            headers: {
              "content-type": "application/json"
            },
            body: JSON.stringify({
              language: t,
              code: e
            }),
            signal: n.signal
          }), a = (o.headers.get("content-type") || "").includes("application/json") ? await o.json() : {};
          if (r !== y) return;
          if (!o.ok) throw new Error(a.error || "The isolated code runner could not complete this request.");
          const s = String(a.stdout || "").trimEnd(), i = String(a.diagnostics || "").trimEnd();
          p = [ s, i ].filter(Boolean).join("\n\n") || "Program finished with no output.";
          const l = Number.isFinite(Number(a.time)) ? ` in ${Number(a.time).toFixed(3)}s` : "";
          g.push({
            text: `${a.status || "Finished"}${l}`,
            tone: a.ok ? "prompt" : "muted"
          }), a.ok ? $("Completed", "live") : (f = [ {
            title: a.status || "Run failed",
            detail: i || s || "The program did not finish successfully."
          } ], $("Needs a fix", "note"));
        } catch (a) {
          if (r !== y) return;
          const e = "AbortError" === a?.name ? "The code run took too long. Try a smaller program." : String(a?.message || "The isolated code runner is temporarily unavailable.");
          p = e, f = [ {
            title: "Could not run code",
            detail: e
          } ], g.push({
            text: e,
            tone: "muted"
          }), $("Run failed", "note");
        } finally {
          clearTimeout(s), r === y && (o.problemCount.textContent = String(f.length), P(!1), 
          J(document.querySelector(".result-tab.is-active")?.dataset.resultMode || "output"));
        }
      }
    } else {
      try {
        p = JSON.stringify(JSON.parse(e), null, 2), $("Valid JSON", "live");
      } catch (a) {
        p = `JSON error: ${a.message}`, f = [ {
          title: "Invalid JSON",
          detail: a.message
        } ], o.problemCount.textContent = "1", $("Needs a fix", "note");
      }
      J("output");
    }
  }
  const B = [ "--studio-accent", "--studio-accent-strong", "--studio-accent-soft", "--studio-accent-line", "--studio-theme-hover-accent", "--studio-theme-hover-soft", "--studio-theme-hover-line" ];
  function U() {
    document.body.classList.remove("theme-ruby", "theme-emerald", "theme-sakura", "theme-fresh", "theme-custom"), 
    B.forEach(e => document.documentElement.style.removeProperty(e));
  }
  function Y(e, t) {
    i.versions = i.versions || [], i.versions.at(-1)?.file === e && i.versions.at(-1)?.code === t || (i.versions.push({
      file: e,
      language: w(e),
      code: t,
      at: Date.now()
    }), i.versions = i.versions.slice(-20));
  }
  function W(e) {
    Object.hasOwn(i.codes, e) && (i.codes[i.file] = E(), i.file = e, i.language = w(e), 
    R());
  }
  const H = document.createElement("button");
  H.type = "button", H.className = "tool-button", H.textContent = "Versions", H.title = "Restore a saved code version", 
  document.querySelector("[data-download-code]").after(H);
  const F = document.createElement("dialog");
  F.className = "studio-versions", F.setAttribute("aria-label", "Saved code versions");
  const z = document.createElement("h2");
  z.textContent = "Saved versions (last 20)";
  const K = document.createElement("select");
  K.setAttribute("aria-label", "Saved version");
  const _ = document.createElement("textarea");
  _.readOnly = !0, _.setAttribute("aria-label", "Saved code");
  const V = document.createElement("button");
  V.textContent = "Restore version", V.className = "tool-button";
  const G = document.createElement("button");
  G.textContent = "Close", G.className = "tool-button", F.append(z, K, _, V, G), document.body.append(F), 
  K.onchange = () => {
    _.value = i.versions?.[Number(K.value)]?.code || "";
  }, H.onclick = () => {
    K.replaceChildren(), (i.versions || []).forEach((e, t) => {
      const n = document.createElement("option");
      n.value = t, n.textContent = e.file + " - " + new Date(e.at).toLocaleString(), K.append(n);
    }), V.disabled = !i.versions?.length, K.onchange(), F.showModal();
  }, G.onclick = () => F.close(), V.onclick = () => {
    const e = i.versions?.[Number(K.value)];
    e && (Y(i.file, E()), i.codes[e.file] = e.code, i.file = e.file, i.language = w(e.file), 
    R(), F.close());
  };
  const Z = document.createElement("select");
  Z.className = "studio-model-picker", Z.setAttribute("aria-label", "AI model"), Z.disabled = !0, 
  document.querySelector(".assistant-brand").after(Z);
  let X = "";
  try {
    X = localStorage.getItem("nyx.codeStudio.model") || "";
  } catch {}
  function Q() {
    return c.filter(e => e.model === X).slice(0, 1);
  }
  async function ee() {
    if (parent !== window) {
      const e = `code-${Date.now()}-${Math.random().toString(36).slice(2)}`, t = await new Promise(t => {
        let n = !1;
        const r = e => {
          n || (n = !0, clearTimeout(a), removeEventListener("message", o), t(String(e || "")));
        }, o = t => {
          t.source === parent && t.origin === location.origin && "nyx:account-token-response" === t.data?.type && t.data.requestId === e && r(t.data.token);
        }, a = setTimeout(() => r(""), 2200);
        addEventListener("message", o), parent.postMessage({
          type: "nyx:account-token-request",
          requestId: e
        }, location.origin);
      });
      if (t) return t;
    }
    l || (l = (async () => {
      try {
        const e = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/founder-profile/auth-config", {
          cache: "no-store"
        }), t = await e.json();
        if (!t?.enabled || !t?.apiKey || !t?.projectId) return null;
        const [{initializeApp: n, getApps: r}, {getAuth: o, setPersistence: a, browserLocalPersistence: s}] = await Promise.all([ import("https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js"), import("https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js") ]), i = o(r().find(e => "nyx-code-studio" === e.name) || n({
          apiKey: t.apiKey,
          authDomain: `${t.projectId}.firebaseapp.com`,
          projectId: t.projectId
        }, "nyx-code-studio"));
        try {
          await a(i, s);
        } catch {}
        return "function" == typeof i.authStateReady && await i.authStateReady(), i;
      } catch {
        return null;
      }
    })());
    try {
      const e = await l;
      return e?.currentUser ? await e.currentUser.getIdToken() : "";
    } catch {
      return "";
    }
  }
  async function te(e = "shared", t = null) {
    const n = null === t ? await ee() : t;
    return {
      "content-type": "application/json",
      "x-nyx-ai-provider": e,
      ...n ? {
        Authorization: `Bearer ${n}`
      } : {}
    };
  }
  function ne(e = !1) {
    return !e && c.length ? Promise.resolve(Q()) : (!e && d || (d = async function() {
      try {
        const e = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyx-ai/providers", {
          headers: {
            accept: "application/json"
          }
        }), t = await e.json(), n = e.ok && Array.isArray(t?.providers) ? t.providers.map(e => String(e?.id || "")) : [], r = [ "shared" ].filter(e => n.includes(e)), o = await ee(), a = (await Promise.all(r.map(async e => {
          try {
            const t = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyx-ai/models", {
              headers: await te(e, o)
            }), n = await t.json();
            return (t.ok && Array.isArray(n?.models) ? n.models : []).filter(e => e?.id).map(t => ({
              provider: e,
              model: String(t.id),
              label: String(t.label || t.id)
            }));
          } catch {
            return null;
          }
        }))).flat().filter(Boolean);
        c = a;
      } catch {
        c = [];
      }
      return function() {
        Z.replaceChildren();
        for (const e of c) {
          const t = document.createElement("option");
          t.value = e.model, t.textContent = e.label || e.model, Z.append(t);
        }
        if (c.some(e => e.model === X) || (X = c[0]?.model || ""), Z.value = X, Z.disabled = !c.length, 
        !c.length) {
          const e = document.createElement("option");
          e.textContent = "Models unavailable", Z.append(e);
        }
      }(), c;
    }()), d.then(() => Q()));
  }
  async function re(e, t, n) {
    const r = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/nyx-ai", {
      method: "POST",
      signal: AbortSignal.timeout(125e3),
      headers: await te(e.provider, n),
      body: JSON.stringify({
        ...t,
        model: e.model
      })
    }), o = await r.json().catch(() => ({}));
    if (!r.ok) {
      const e = new Error(o?.error || (r.status >= 500 ? "Nyx AI is temporarily unavailable. Please try again." : `Nyx AI could not help (${r.status}).`));
      throw e.status = r.status, e;
    }
    const a = function(e) {
      const t = e?.text || e?.response || e?.choices?.[0]?.message?.content || e?.choices?.[0]?.text || "";
      return (Array.isArray(t) ? t.filter(e => "text" === e?.type).map(e => e.text || "").join("") : "string" == typeof t ? t : "").trim();
    }(o);
    if ("code-edit" === t.task && "length" === o?.finishReason) throw new Error("The model reached its reply limit. Your files are unchanged. Ask for one smaller change at a time.");
    if (!a) throw new Error("The model returned no answer. Try another model or a smaller request. Your files are unchanged.");
    return a;
  }
  function oe(e, t = !1) {
    o.aiStatusLabel.textContent = e, o.aiStatus.classList.toggle("is-working", t);
  }
  function ae(e, t, n = !1) {
    o.answer.querySelector("[data-ai-empty]")?.remove();
    const r = document.createElement("article");
    r.className = `ai-message is-${e}${n ? " is-error" : ""}`;
    const a = document.createElement("header");
    a.textContent = "user" === e ? "You" : "Nyx AI";
    const s = document.createElement("p");
    return s.textContent = t, r.append(a, s), o.answer.append(r), o.answer.scrollTop = o.answer.scrollHeight, 
    r;
  }
  Z.onchange = () => {
    X = Z.value;
    try {
      localStorage.setItem("nyx.codeStudio.model", X);
    } catch {}
  };
  let se = !1;
  const ie = document.createElement("select");
  ie.className = "studio-model-picker", ie.setAttribute("aria-label", "Assistant mode");
  for (const [ve, we] of [ [ "agent", "Agent - edit code" ], [ "ask", "Ask - explain code" ] ]) {
    const e = document.createElement("option");
    e.value = ve, e.textContent = we, ie.append(e);
  }
  const le = document.createElement("div");
  le.className = "assistant-settings", Z.before(le);
  for (const [ve, we] of [ [ "Model", Z ], [ "Mode", ie ] ]) {
    const e = document.createElement("label");
    e.textContent = ve, e.append(we), le.append(e);
  }
  ie.onchange = () => {
    o.prompt.placeholder = "agent" === ie.value ? "Describe the change to make\u2026" : "Ask a question about your code\u2026", 
    document.querySelector("#assistant-title").textContent = "agent" === ie.value ? "Code agent" : "Ask Nyx";
  };
  const ce = document.createElement("select");
  ce.className = "studio-model-picker", ce.setAttribute("aria-label", "Workspace files");
  const de = document.createElement("label");
  de.className = "workspace-file-field", de.textContent = "Open file", de.append(ce), 
  document.querySelector(".project-controls").prepend(de), ce.onchange = () => W(ce.value);
  const ue = document.createElement("button");
  ue.type = "button", ue.className = "tool-button", ue.textContent = "+ New file", 
  ue.dataset.newFile = "", de.after(ue);
  const pe = document.createElement("dialog");
  async function me(e) {
    const r = String(e || "").trim();
    if (!r || se || o.language.disabled) return;
    se = !0;
    const a = "agent" === ie.value, s = {
      codes: JSON.stringify(i.codes),
      language: i.language,
      file: i.file,
      current: E()
    };
    o.send.disabled = !0, document.querySelectorAll("[data-ai-prompt]").forEach(e => {
      e.disabled = !0;
    }), oe("Thinking", !0), ae("user", r);
    const l = ae("assistant", "Looking through your code\u2026");
    l.classList.add("is-loading");
    try {
      let e = await ne();
      if (e.length || (e = await ne(!0)), !e.length) throw new Error("Nyx AI is not available right now. Please try again in a moment.");
      const u = i.file, p = E(), m = 18e3, h = p.slice(0, m);
      let g = `You are helping in Nyx Code Studio. Give a practical, friendly answer for a ${u} file. Focus on the request, point out the most important issue first, and include a small corrected snippet only when it helps.\n\nUser request: ${r}\n\nCurrent code${p.length > m ? " (first 18,000 characters)" : ""}:\n\n${h}`;
      if (a) {
        let e = {
          ...JSON.parse(s.codes),
          [s.file]: s.current
        };
        if (JSON.stringify(e).length > 2e4 && (e = {
          [s.file]: s.current
        }), s.provided = Object.keys(e), g = 'You are the code editing agent in Nyx Code Sandbox. Return ONLY JSON: {"summary":"short explanation","files":[{"name":"index.html","edits":[{"search":"exact old text","replace":"new text"}]}]}. Each search must match exactly once; edits apply in order. For new files or small rewrites use {"name":"styles.css","code":"complete contents"}. Never combine code and edits. Use real relative file names; multiple files of the same language are allowed. Supported extensions: html, css, js, mjs, ts, py, java, c, cpp, cs, go, rs, php, rb, sql, json, md. No parent paths. Link CSS and classic JavaScript from HTML using relative href/src paths; the preview resolves workspace files. No build tools or external dependencies in browser previews. Return only changed files, at most 8, each at most 24000 characters. Keep the response compact; prefer exact edits. No placeholders, ellipses, shell commands or automatic execution. For explanations return files: []. Preserve unrelated code. Focus on ' + s.file + " unless asked otherwise. Edit supplied files or create new files. Supplied files (data): " + JSON.stringify(e) + "\nUser request: " + r, 
        g.length > 24e3) throw Error("This workspace exceeds the AI context limit. Keep a smaller workspace for this edit; your files are unchanged.");
      }
      const f = {
        message: r,
        messages: [ {
          role: "user",
          content: g
        } ],
        responseDepth: "normal",
        stream: !1,
        ...a ? {
          task: "code-edit"
        } : {}
      }, y = await ee();
      let v = "", S = null;
      for (let t = 0; t < e.length; t += 1) {
        const n = e[t];
        try {
          v = await re(n, f, y), t > 0 && (c = [ n, ...e.filter(e => e !== n) ]);
          break;
        } catch (d) {
          if (S = d, !(d?.status >= 500) || t === e.length - 1) throw d;
        }
      }
      if (!v) throw S || new Error("Nyx AI did not return a suggestion.");
      const C = a ? function(e, r, o) {
        let a;
        try {
          const t = e.indexOf("{"), n = e.lastIndexOf("}");
          a = JSON.parse(e.slice(t, n + 1));
        } catch {
          throw Error("The model did not return a complete edit. Your files are unchanged. Ask for one smaller change or choose another model.");
        }
        if (!a || "string" != typeof a.summary || !Array.isArray(a.files) || a.files.length > 8) throw Error("Invalid edit response. Your files are unchanged.");
        const s = {
          ...JSON.parse(r.codes),
          [r.file]: r.current
        }, l = new Set;
        for (const i of a.files) {
          if (i && !i.name && Object.hasOwn(n, i.language) && (i.name = n[i.language].file), 
          !i || !b(i.name) || l.has(i.name.toLowerCase()) || Object.keys(s).some(e => e !== i.name && e.toLowerCase() === i.name.toLowerCase())) throw Error("Invalid edit response. Your files are unchanged.");
          if (!r.provided.includes(i.name) && "string" == typeof s[i.name]) throw Error("Select the other saved file before asking Nyx to edit it. Your files are unchanged.");
          if (l.add(i.name.toLowerCase()), Array.isArray(i.edits)) {
            if (void 0 !== i.code || !i.edits.length || i.edits.length > 16 || "string" != typeof s[i.name]) throw Error("Invalid edit response. Your files are unchanged.");
            let e = s[i.name];
            for (const n of i.edits) {
              if ("string" != typeof n?.search || !n.search || "string" != typeof n.replace) throw Error("Invalid edit response. Your files are unchanged.");
              const r = e.indexOf(n.search);
              if (r < 0 || e.indexOf(n.search, r + 1) >= 0) throw Error("The edit did not match a unique part of your file. Your files are unchanged. Try a more specific request.");
              if (e = e.slice(0, r) + n.replace + e.slice(r + n.search.length), e.length > t) throw Error("The edited file is too large. Your files are unchanged.");
            }
            i.code = e;
          }
          if ("string" != typeof i.code || i.code.length > t) throw Error("Invalid or oversized file. Your files are unchanged.");
        }
        if (JSON.stringify(i.codes) !== r.codes || i.file !== r.file || E() !== r.current) throw Error("Your code changed while Nyx was working. Keeping your edits; ask again to use the latest version.");
        if (a.files = a.files.filter(e => e.code !== s[e.name]), !a.files.length) return o.querySelector("p").textContent = "No files changed. " + a.summary, 
        !1;
        if (new Set([ ...Object.keys(i.codes), ...a.files.map(e => e.name) ]).size > 32) throw Error("This workspace can hold 32 files.");
        const c = JSON.parse(JSON.stringify(i));
        Y(i.file, E());
        for (const t of a.files) "string" == typeof i.codes[t.name] && Y(t.name, i.codes[t.name]), 
        i.codes[t.name] = t.code;
        if (i.file = a.files[0].name, i.language = w(i.file), !x()) throw i = c, Error("Could not save the edited files. Your original code is unchanged.");
        R();
        const d = JSON.stringify(i.codes);
        o.querySelector("p").textContent = a.summary + "\nUpdated: " + a.files.map(e => e.name).join(", ") + ". Review your files, then press Run code.";
        const u = document.createElement("button");
        return u.type = "button", u.className = "tool-button", u.textContent = "Undo changes", 
        u.onclick = () => {
          if (JSON.stringify(i.codes) !== d) return void ae("assistant", "You have edited these files since this change. Use Versions to restore an earlier file without losing your work.", !0);
          const e = i;
          i = c, x() ? (R(), u.disabled = !0, u.textContent = "Changes undone") : i = e;
        }, o.append(u), !0;
      }(v, s, l) : (l.querySelector("p").textContent = v, !0);
      C && (o.prompt.value = "");
    } catch (d) {
      l.classList.add("is-error"), l.querySelector("p").textContent = "TimeoutError" === d?.name ? "Nyx AI timed out. Your files are unchanged. Try again." : d?.message || "Nyx AI could not complete that suggestion.";
    } finally {
      l.classList.remove("is-loading"), se = !1, o.send.disabled = !1, document.querySelectorAll("[data-ai-prompt]").forEach(e => {
        e.disabled = !1;
      }), oe("Ready"), o.answer.scrollTop = o.answer.scrollHeight;
    }
  }
  function he() {
    try {
      return JSON.parse(localStorage.getItem(s) || "{}");
    } catch {
      return {};
    }
  }
  function ge() {
    const e = he(), t = {
      assistantWidth: document.querySelector(".assistant-panel").getBoundingClientRect().width || e.assistantWidth || 318,
      previewWidth: o.resultCard.getBoundingClientRect().width || e.previewWidth || 420,
      aiCollapsed: document.body.classList.contains("ai-collapsed"),
      previewCollapsed: document.body.classList.contains("preview-collapsed")
    };
    try {
      localStorage.setItem(s, JSON.stringify(t));
    } catch {}
  }
  function fe(e, t, n = !0) {
    const r = "assistant" === e ? "ai-collapsed" : "preview-collapsed";
    document.body.classList.toggle(r, t), document.querySelectorAll(`[data-toggle-panel="${e}"]`).forEach(e => e.setAttribute("aria-pressed", String(!t))), 
    n && ge();
  }
  function ye(e) {
    document.body.classList.toggle("mobile-show-ai", "ai" === e), document.body.classList.toggle("mobile-show-preview", "preview" === e), 
    document.querySelectorAll(".mobile-view-switcher [data-mobile-view]").forEach(t => t.classList.toggle("is-active", t.dataset.mobileView === e));
  }
  pe.className = "studio-file-dialog", pe.setAttribute("aria-label", "Create file"), 
  pe.innerHTML = '<form><h2>New file</h2><label>File name<input name="filename" placeholder="styles.css" maxlength="120" required autocomplete="off"></label><p role="alert"></p><div><button type="button" class="tool-button" data-cancel>Cancel</button><button class="tool-button" type="submit">Create file</button></div></form>', 
  document.body.append(pe), ue.onclick = () => {
    pe.querySelector("form").reset(), pe.querySelector("[role=alert]").textContent = "", 
    pe.showModal(), pe.querySelector("input").focus();
  }, pe.querySelector("[data-cancel]").onclick = () => pe.close(), pe.querySelector("form").onsubmit = e => {
    e.preventDefault();
    const t = pe.querySelector("input").value.trim(), n = pe.querySelector("[role=alert]");
    if (!b(t)) return void (n.textContent = "Use a file name such as index.html, styles.css or app.js.");
    if (Object.keys(i.codes).some(e => e.toLowerCase() === t.toLowerCase())) return void (n.textContent = "A file with that name already exists.");
    if (Object.keys(i.codes).length >= 32) return void (n.textContent = "This workspace can hold 32 files.");
    const r = JSON.parse(JSON.stringify(i));
    if (i.codes[t] = "", i.file = t, i.language = w(t), !x()) return i = r, void (n.textContent = "Could not save the new file.");
    R(), pe.close(), o.input.focus();
  }, document.querySelector("[data-close-assistant]").addEventListener("click", () => {
    matchMedia("(min-width: 941px)").matches ? fe("assistant", !0) : ye("editor");
  }), o.language.addEventListener("change", () => function(e) {
    if (!n[e]) return;
    const t = Object.keys(i.codes).find(t => w(t) === e) || n[e].file;
    Object.hasOwn(i.codes, t) || (i.codes[t] = n[e].starter), W(t);
  }(o.language.value)), o.input.addEventListener("input", () => {
    i.codes[i.file] = o.input.value.slice(0, t), S("Saving\u2026", "saving"), A(), x();
  }), o.input.addEventListener("scroll", () => {
    o.highlight.parentElement.scrollTop = o.input.scrollTop, o.highlight.parentElement.scrollLeft = o.input.scrollLeft, 
    o.lineNumbers.scrollTop = o.input.scrollTop, o.editorWrap.style.setProperty("--editor-scroll-top", `${o.input.scrollTop}px`);
  }), o.input.addEventListener("keyup", j), o.input.addEventListener("click", j), 
  o.input.addEventListener("keydown", e => {
    if ("Tab" === e.key) {
      e.preventDefault();
      const t = o.input.selectionStart, n = o.input.selectionEnd;
      o.input.setRangeText("  ", t, n, "end"), o.input.dispatchEvent(new Event("input"));
    } else (e.ctrlKey || e.metaKey) && "Enter" === e.key && (e.preventDefault(), D(), 
    matchMedia("(max-width: 940px)").matches && ye("preview"));
  }), o.runButtons.forEach(e => e.addEventListener("click", () => {
    D(), matchMedia("(max-width: 940px)").matches && ye("preview");
  })), document.querySelectorAll("[data-reset]").forEach(e => e.addEventListener("click", () => {
    C(n[i.language].starter);
  })), document.querySelector("[data-load-starter]").addEventListener("click", () => C(n[i.language].starter)), 
  o.clear.addEventListener("click", () => C("")), o.download.addEventListener("click", function() {
    const e = new Blob([ E() ], {
      type: "text/plain;charset=utf-8"
    }), t = URL.createObjectURL(e), n = document.createElement("a");
    n.href = t, n.download = i.file, document.body.append(n), n.click(), n.remove(), 
    setTimeout(() => URL.revokeObjectURL(t), 0), u = `Exported ${i.file}\nSaved from this browser`, 
    g = [ {
      text: `Exported ${i.file}`,
      tone: "prompt"
    }, {
      text: "Saved from this browser",
      tone: "muted"
    } ];
  }), o.refreshPreview.addEventListener("click", D), o.fullscreenPreview.addEventListener("click", async () => {
    try {
      document.fullscreenElement ? await document.exitFullscreen() : await o.resultCard.requestFullscreen();
    } catch {}
  }), o.resultTabs.forEach(e => e.addEventListener("click", () => J(e.dataset.resultMode))), 
  document.querySelectorAll("[data-toggle-panel]").forEach(e => e.addEventListener("click", () => fe(e.dataset.togglePanel, !document.body.classList.contains("assistant" === e.dataset.togglePanel ? "ai-collapsed" : "preview-collapsed")))), 
  document.querySelectorAll("[data-resize-panel]").forEach(function(e) {
    const t = e.dataset.resizePanel;
    e.addEventListener("pointerdown", e => {
      if (0 !== e.button) return;
      e.preventDefault();
      const n = e.clientX, r = document.querySelector(".assistant-panel").getBoundingClientRect().width, a = o.resultCard.getBoundingClientRect().width, s = e => {
        const s = e.clientX - n;
        if ("assistant" === t) document.documentElement.style.setProperty("--assistant-width", `${Math.max(250, Math.min(420, r + s))}px`); else {
          const e = Math.max(280, o.workbench.getBoundingClientRect().width - 380);
          document.documentElement.style.setProperty("--preview-width", `${Math.max(280, Math.min(e, a - s))}px`);
        }
      }, i = () => {
        document.body.classList.remove("is-resizing"), removeEventListener("pointermove", s), 
        removeEventListener("pointerup", i), ge();
      };
      document.body.classList.add("is-resizing"), addEventListener("pointermove", s), 
      addEventListener("pointerup", i, {
        once: !0
      });
    }), e.addEventListener("keydown", e => {
      [ "ArrowLeft", "ArrowRight" ].includes(e.key) && (e.preventDefault(), (e => {
        if ("assistant" === t) {
          const t = document.querySelector(".assistant-panel").getBoundingClientRect().width;
          document.documentElement.style.setProperty("--assistant-width", `${Math.max(250, Math.min(420, t + e))}px`);
        } else {
          const t = o.resultCard.getBoundingClientRect().width, n = Math.max(280, o.workbench.getBoundingClientRect().width - 380);
          document.documentElement.style.setProperty("--preview-width", `${Math.max(280, Math.min(n, t - e))}px`);
        }
      })("ArrowRight" === e.key ? 16 : -16), ge());
    }), e.addEventListener("dblclick", () => {
      document.documentElement.style.removeProperty("assistant" === t ? "--assistant-width" : "--preview-width"), 
      ge();
    });
  }), document.querySelectorAll("[data-mobile-view]").forEach(e => e.addEventListener("click", () => ye(e.dataset.mobileView))), 
  document.querySelectorAll("[data-command]").forEach(e => e.addEventListener("click", () => function(e) {
    if ("reset" !== e) {
      if ("edit" !== e) return "select" === e ? (o.input.focus(), void o.input.select()) : void ("preview" !== e ? "language" !== e ? "run" !== e ? "terminal" === e && J("terminal") : D() : o.language.focus() : J("output"));
      o.input.focus();
    } else C(n[i.language].starter);
  }(e.dataset.command))), o.form.addEventListener("submit", e => {
    e.preventDefault(), me(o.prompt.value);
  }), o.prompt.addEventListener("keydown", e => {
    "Enter" !== e.key || e.shiftKey || (e.preventDefault(), o.form.requestSubmit());
  }), document.querySelectorAll("[data-ai-prompt]").forEach(e => e.addEventListener("click", () => {
    ie.value = e.dataset.aiMode || "agent", ie.onchange(), me(e.dataset.aiPrompt);
  })), addEventListener("message", e => {
    const t = e.data;
    if (e.source !== o.preview.contentWindow || "nyx-code-preview" !== t?.type || t.runId !== h) return;
    const n = [ "log", "info", "warn", "error" ].includes(t.kind) ? t.kind : "log", r = String(t.text || "(empty message)").slice(0, 2e3);
    g.push({
      text: `${n}: ${r}`,
      tone: "error" === n || "warn" === n ? "muted" : "prompt"
    }), "warn" !== n && "error" !== n || f.push({
      title: "error" === n ? "Preview error" : "Preview warning",
      detail: r
    }), o.problemCount.textContent = String(f.length);
    const a = document.querySelector(".result-tab.is-active")?.dataset.resultMode;
    "terminal" === a && I(), "problems" === a && M();
  }), addEventListener("storage", e => {
    "nyx.theme" !== e.key && "nyx.customThemeColor" !== e.key || U();
  }), function() {
    const e = he();
    Number.isFinite(e.assistantWidth) && e.assistantWidth > 0 && document.documentElement.style.setProperty("--assistant-width", `${Math.max(250, Math.min(420, e.assistantWidth))}px`), 
    Number.isFinite(e.previewWidth) && e.previewWidth > 0 && document.documentElement.style.setProperty("--preview-width", `${Math.max(280, Math.min(680, e.previewWidth))}px`), 
    fe("assistant", Boolean(e.aiCollapsed), !1), fe("preview", Boolean(e.previewCollapsed), !1);
  }(), U(), R(), ye("editor"), ne();
})();
