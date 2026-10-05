(() => {
  "use strict";
  const e = "nyx.codeTutorials.v1", t = {
    javascript: {
      name: "JavaScript",
      items: [ [ "Start with values", "Values let your program remember information. Use const for a value that should not change.", 'const learner = "Nyx student";\nconsole.log(`Hello, ${learner}!`);' ], [ "Make a choice", "An if statement lets your code choose what to do next.", 'const finished = true;\nif (finished) console.log("Nice work!");' ], [ "Use a function", "Functions keep a useful action in one clear place.", 'function greet(name) {\n  return `Hello, ${name}!`;\n}\nconsole.log(greet("friend"));' ] ]
    },
    python: {
      name: "Python",
      items: [ [ "Start with variables", "Python uses names to hold values you will use again.", 'learner = "Nyx student"\nprint(f"Hello, {learner}!")' ], [ "Make a choice", "Indent the work that should happen when a condition is true.", 'finished = True\nif finished:\n    print("Nice work!")' ], [ "Use a function", "Functions make your idea easy to reuse.", 'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("friend"))' ] ]
    },
    html: {
      name: "HTML",
      items: [ [ "Build a page", "HTML gives a page its meaningful structure.", "<main>\n  <h1>Hello, Nyx</h1>\n  <p>My first page.</p>\n</main>" ], [ "Add a link", "An anchor connects your page to another place.", '<a href="https://nyxlearning.org">Visit Nyx</a>' ], [ "Group related content", "Use sections when a part of the page has its own purpose.", "<section>\n  <h2>About me</h2>\n  <p>I am learning HTML.</p>\n</section>" ] ]
    },
    css: {
      name: "CSS",
      items: [ [ "Style a page", "CSS changes how HTML looks. A rule has a selector and declarations.", "body {\n  font-family: system-ui;\n  color: #172033;\n}" ], [ "Use spacing", "Padding adds room inside an element. Margin adds room around it.", ".card {\n  padding: 1rem;\n  margin: 1rem;\n}" ], [ "Use a layout", "Grid is a clean way to arrange content.", ".cards {\n  display: grid;\n  gap: 1rem;\n}" ] ]
    },
    java: {
      name: "Java",
      items: [ [ "Print a message", "Java starts execution in a main method.", 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, Nyx!");\n  }\n}' ], [ "Use a variable", "Give data a type and a useful name.", 'String learner = "Nyx student";\nSystem.out.println(learner);' ], [ "Use a method", "Methods package work you want to do again.", 'static String greet(String name) {\n  return "Hello, " + name;\n}' ] ]
    },
    cpp: {
      name: "C++",
      items: [ [ "Print a message", "Include iostream to use standard output.", '#include <iostream>\n\nint main() {\n  std::cout << "Hello, Nyx!\\n";\n}' ], [ "Use a variable", "C++ values have types.", 'std::string learner = "Nyx student";\nstd::cout << learner;' ], [ "Use a function", "Functions can return a value to the caller.", 'std::string greet(std::string name) {\n  return "Hello, " + name;\n}' ] ]
    },
    sql: {
      name: "SQL",
      items: [ [ "Read rows", "SELECT chooses the data you want to see.", "SELECT name, completed_projects\nFROM learners;" ], [ "Filter rows", "WHERE keeps only rows that match a condition.", "SELECT name\nFROM learners\nWHERE completed_projects >= 1;" ], [ "Order results", "ORDER BY puts results in a useful order.", "SELECT name, completed_projects\nFROM learners\nORDER BY completed_projects DESC;" ] ]
    }
  }, n = {
    list: document.querySelector("[data-course-list]"),
    label: document.querySelector("[data-course-label]"),
    title: document.querySelector("[data-lesson-title]"),
    progress: document.querySelector("[data-progress-label]"),
    copy: document.querySelector("[data-lesson-copy]"),
    example: document.querySelector("[data-example-code]"),
    practice: document.querySelector("[data-practice-code]"),
    output: document.querySelector("[data-practice-output]"),
    runner: document.querySelector("[data-practice-runner]"),
    save: document.querySelector("[data-save-state]"),
    account: document.querySelector("[data-account-note]")
  };
  let a = function() {
    try {
      return {
        ...JSON.parse(localStorage.getItem(e) || "{}"),
        course: "javascript",
        lesson: 0,
        completed: {}
      };
    } catch {
      return {
        course: "javascript",
        lesson: 0,
        completed: {}
      };
    }
  }(), o = 0;
  function r() {
    try {
      localStorage.setItem(e, JSON.stringify(a)), n.save.textContent = "Saved on this device";
    } catch {
      n.save.textContent = "Could not save locally";
    }
    clearTimeout(o), o = setTimeout(l, 650);
  }
  function s(e) {
    return t[e].items.filter((t, n) => a.completed[`${e}:${n}`]).length;
  }
  function c() {
    const [e, o, i] = t[a.course].items[a.lesson];
    n.label.textContent = t[a.course].name, n.title.textContent = e, n.copy.replaceChildren(), 
    o.split("\n").filter(Boolean).forEach(e => {
      const t = document.createElement("p");
      t.textContent = e, n.copy.append(t);
    }), n.example.textContent = i, n.practice.value = a.drafts?.[`${a.course}:${a.lesson}`] || i, 
    n.progress.textContent = `${s(a.course)} of ${t[a.course].items.length} finished`, 
    n.list.replaceChildren(), Object.entries(t).forEach(([e, t]) => {
      const o = document.createElement("button");
      o.type = "button", o.className = e === a.course ? "active" : "", o.innerHTML = `<strong>${t.name}</strong><small>${s(e)} of ${t.items.length} finished</small>`, 
      o.addEventListener("click", () => {
        a.course = e, a.lesson = 0, c(), r();
      }), n.list.append(o);
    });
  }
  async function i() {
    if (parent === window) return "";
    const e = `tutorials-${Date.now()}-${Math.random().toString(36).slice(2)}`;
    return new Promise(t => {
      let n = !1;
      const a = e => {
        n || (n = !0, clearTimeout(r), removeEventListener("message", o), t(String(e || "")));
      }, o = t => {
        t.source === parent && t.origin === location.origin && "nyx:account-token-response" === t.data?.type && t.data.requestId === e && a(t.data.token);
      }, r = setTimeout(() => a(""), 2200);
      addEventListener("message", o), parent.postMessage({
        type: "nyx:account-token-request",
        requestId: e
      }, location.origin);
    });
  }
  async function l() {
    const e = await i();
    if (e) try {
      (await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/account/cloud-games/code-tutorials", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${e}`
        },
        body: JSON.stringify({
          storage: {
            progress: JSON.stringify(a)
          }
        })
      })).ok && (n.save.textContent = "Progress saved to your account", n.account.textContent = "Your lesson progress is saved to this account.");
    } catch {}
  }
  document.querySelector("[data-copy-example]").addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(n.example.textContent), n.output.textContent = "Example copied.";
    } catch {
      n.output.textContent = "Select and copy the example from the lesson.";
    }
  }), document.querySelector("[data-run-practice]").addEventListener("click", function() {
    const e = n.practice.value.trim();
    if (e) if ("javascript" === a.course) {
      n.output.textContent = "Running JavaScript\u2026";
      const t = e.replace(/<\/script/gi, "<\\/script");
      n.runner.srcdoc = `<!doctype html><script>const send=(kind,text)=>parent.postMessage({type:'nyx:tutorial-run',kind,text:String(text)},'*');console.log=(...values)=>send('log',values.join(' '));try{${t};send('done','')}catch(error){send('error',error.message)}<\/script>`;
    } else "html" === a.course ? n.output.textContent = "HTML saved. Open Code Sandbox to preview it in a browser." : "css" === a.course ? n.output.textContent = "CSS saved. Try it in Code Sandbox with a small HTML page." : n.output.textContent = `${t[a.course].name} example saved. Run this language in its usual environment when you are ready.`; else n.output.textContent = "Write a small example first.";
  }), document.querySelector("[data-finish-lesson]").addEventListener("click", () => {
    a.completed[`${a.course}:${a.lesson}`] = !0, n.output.textContent = "Lesson complete. Keep going when you are ready.", 
    r(), c();
  }), document.querySelector("[data-previous]").addEventListener("click", () => {
    a.lesson = Math.max(0, a.lesson - 1), c(), r();
  }), document.querySelector("[data-next]").addEventListener("click", () => {
    a.lesson = (a.lesson + 1) % t[a.course].items.length, c(), r();
  }), n.practice.addEventListener("input", () => {
    a.drafts = {
      ...a.drafts || {},
      [`${a.course}:${a.lesson}`]: n.practice.value
    }, r();
  }), addEventListener("message", e => {
    e.source === n.runner.contentWindow && "nyx:tutorial-run" === e.data?.type && ("log" === e.data.kind && (n.output.textContent = ("Running JavaScript\u2026" === n.output.textContent ? "" : `${n.output.textContent}\n`) + e.data.text), 
    "error" === e.data.kind && (n.output.textContent = `Check your JavaScript: ${e.data.text}`), 
    "done" === e.data.kind && "Running JavaScript\u2026" === n.output.textContent && (n.output.textContent = "JavaScript ran without console output."));
  }), addEventListener("storage", e => {
    "nyx.theme" === e.key && location.reload();
  }), function() {
    try {
      const e = localStorage.getItem("nyx.theme");
      [ "ruby", "emerald", "sakura", "fresh" ].includes(e) && document.body.classList.add(`theme-${e}`);
    } catch {}
  }(), c(), async function() {
    const e = await i();
    if (e) try {
      const t = await fetch("/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/api/account/cloud-games/code-tutorials", {
        headers: {
          Authorization: `Bearer ${e}`
        }
      }), o = await t.json(), r = JSON.parse(o?.storage?.progress || "null");
      r && "object" == typeof r && (a = {
        ...a,
        ...r,
        completed: {
          ...a.completed,
          ...r.completed
        }
      }, n.account.textContent = "Your lesson progress is saved to this account.", c());
    } catch {}
  }();
})();
