(async () => {
  await async function I(g) {
    if (!globalThis.indexedDB?.databases) return;
    const C = async () => {
      const I = await indexedDB.databases();
      for (const [C, i] of Object.entries(g)) {
        if (!I.some(I => I.name === C) || I.some(I => I.name === i)) continue;
        const g = (I, g, C) => new Promise((i, A) => {
          const c = g ? indexedDB.open(I, g) : indexedDB.open(I);
          c.onerror = () => A(c.error);
          c.onblocked = () => A(Error("Close other site tabs and reload to update saved browser data."));
          c.onupgradeneeded = () => C?.(c.result);
          c.onsuccess = () => i(c.result);
        });
        const A = await g(C);
        const c = [...A.objectStoreNames];
        let b;
        try {
          b = await new Promise((I, g) => {
            if (!c.length) return I([]);
            const C = A.transaction(c, "readonly"),
              i = [];
            for (const I of c) {
              const g = C.objectStore(I),
                A = {
                  name: I,
                  keyPath: g.keyPath,
                  autoIncrement: g.autoIncrement,
                  indexes: [...g.indexNames].map(I => {
                    const C = g.index(I);
                    return {
                      name: I,
                      keyPath: C.keyPath,
                      unique: C.unique,
                      multiEntry: C.multiEntry
                    };
                  }),
                  rows: []
                };
              i.push(A);
              const c = g.openCursor();
              c.onsuccess = () => {
                const I = c.result;
                if (I) {
                  A.rows.push({
                    key: I.primaryKey,
                    value: I.value
                  });
                  I.continue();
                }
              };
            }
            C.oncomplete = () => I(i);
            C.onerror = () => g(C.error);
            C.onabort = () => g(C.error || Error("Storage copy interrupted."));
          });
        } finally {
          A.close();
        }
        const G = await g(i, A.version, I => {
          for (const g of b) {
            const C = I.createObjectStore(g.name, {
              keyPath: g.keyPath,
              autoIncrement: g.autoIncrement
            });
            for (const I of g.indexes) C.createIndex(I.name, I.keyPath, {
              unique: I.unique,
              multiEntry: I.multiEntry
            });
          }
        });
        try {
          await new Promise((I, g) => {
            if (!c.length) return I();
            const C = G.transaction(c, "readwrite");
            for (const I of b) {
              const g = C.objectStore(I.name);
              for (const C of I.rows) I.keyPath === null ? g.put(C.value, C.key) : g.put(C.value);
            }
            C.oncomplete = I;
            C.onerror = () => g(C.error);
            C.onabort = () => g(C.error || Error("Storage copy interrupted."));
          });
        } catch (I) {
          G.close();
          await new Promise(I => {
            const g = indexedDB.deleteDatabase(i);
            g.onsuccess = g.onerror = g.onblocked = I;
          });
          throw I;
        } finally {
          G.close();
        }
      }
    };
    if (navigator.locks) await navigator.locks.request("saved-data-update", C);
    else await C();
  }(JSON.parse(atob(
    "eyIkc2NyYW1qZXQiOiJAZDdhNjQzMWI5MmUiLCJfX3NjcmFtamV0X2NvbnRyb2xsZXIiOiJAZDk0MWJjNjVhZjMifQ==")));
  const I = (new TextDecoder).decode(Uint8Array.from(atob([
    "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIiBjbGFzcz0ic3RhcnR1cC1jb3ZlcmVkIj4KCiAgPGhlYWQ+CiAgICA8bWV0YSBjaGFyc2V0",
    "PSJ1dGYtOCI+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSI+CiAg",
    "ICA8bWV0YSBuYW1lPSJyZWZlcnJlciIgY29udGVudD0ibm8tcmVmZXJyZXIiPgogICAgPHRpdGxlPlN0dWR5UmVhZHk8L3RpdGxlPgogICAgPGxp",
    "bmsgcmVsPSJpY29uIiBocmVmPSIvYXBwcy9kcm9wL2xvZ28uc3ZnIiB0eXBlPSJpbWFnZS9zdmcreG1sIj4KICAgIDxsaW5rIHJlbD0ic3R5bGVz",
    "aGVldCIgaHJlZj0iL2Nzcy9vd25lci1kYXNoYm9hcmQuY3NzP3Jldj1lZGI3YjA1MzcxNDUyNTg0Ij4KICAgIDxsaW5rIHJlbD0ic3R5bGVzaGVl",
    "dCIgaHJlZj0iL2Nzcy9vd25lci1kYXNoYm9hcmQtcG9saXNoLmNzcz9yZXY9ZWRiN2IwNTM3MTQ1MjU4NCI+CiAgICA8bGluayByZWw9InN0eWxl",
    "c2hlZXQiIGhyZWY9Ii9hcHBzL2Ryb3Avc3R5bGUuY3NzP3Jldj1lZGI3YjA1MzcxNDUyNTg0Ij4KICAgIDxzY3JpcHQgc3JjPSIvcnVudGltZS1j",
    "b25maWcuanMiPjwvc2NyaXB0PgogICAgPHNjcmlwdCB0eXBlPSJtb2R1bGUiIHNyYz0iL2FwcHMvZHJvcC9AcmFlZDI5MzYxZmY4MDJmNzJhMmE2",
    "NTAwNiEubWpzIj48L3NjcmlwdD4KICAgIDxzdHlsZT5odG1sLnN0YXJ0dXAtY292ZXJlZCB7CiAgb3ZlcmZsb3c6IGhpZGRlbjsKICBiYWNrZ3Jv",
    "dW5kOiAjZjVmN2ZhCn0KaHRtbC5zdGFydHVwLWNvdmVyZWQgYm9keSA+IDpub3QoI3N0dWR5cmVhZHktc3RhcnR1cCk6bm90KHNjcmlwdCkgewog",
    "IHZpc2liaWxpdHk6IGhpZGRlbiFpbXBvcnRhbnQKfQojc3R1ZHlyZWFkeS1zdGFydHVwIHsKICBwb3NpdGlvbjogZml4ZWQ7CiAgaW5zZXQ6IDA7",
    "CiAgd2lkdGg6IDEwMCU7CiAgaGVpZ2h0OiAxMDBkdmg7CiAgYm9yZGVyOiAwOwogIGJhY2tncm91bmQ6ICNmNWY3ZmE7CiAgei1pbmRleDogMjE0",
    "NzQ4MzY0Nwp9PC9zdHlsZT4KICAgIDxzY3JpcHQgZGVmZXI9ImRlZmVyIiBzcmM9Ii9hcHBzL2Ryb3AvQHJkYjJiY2IwNmM4YzlmN2JiNGQyZmRi",
    "ZWIhLmpzIj48L3NjcmlwdD4KICA8L2hlYWQ+CgogIDxib2R5PjxpZnJhbWUgaWQ9InN0dWR5cmVhZHktc3RhcnR1cCIgdGl0bGU9IlN0dWR5UmVh",
    "ZHkgbWF0aCBsZXNzb25zIgogICAgICBzcmM9Ii9hcHBzL3R1dHNpL3N0dWR5cmVhZHkvaW5kZXguaHRtbCIgcmVmZXJyZXJwb2xpY3k9Im5vLXJl",
    "ZmVycmVyIj48L2lmcmFtZT48bm9zY3JpcHQ+CiAgICAgIDxzdHlsZT5odG1sLnN0YXJ0dXAtY292ZXJlZCBib2R5ID4gOm5vdCgjc3R1ZHlyZWFk",
    "eS1zdGFydHVwKTpub3Qoc2NyaXB0KSB7CiAgdmlzaWJpbGl0eTogdmlzaWJsZSFpbXBvcnRhbnQKfQojc3R1ZHlyZWFkeS1zdGFydHVwIHsKICBk",
    "aXNwbGF5OiBub25lCn08L3N0eWxlPgogICAgPC9ub3NjcmlwdD4KICAgIDxhc2lkZSBpZD0ic2lkZWJhciI+CiAgICAgIDxoZWFkZXI+PGEgY2xh",
    "c3M9ImJyYW5kIiBocmVmPSIvYXBwcy9kcm9wLyIgYXJpYS1sYWJlbD0iRHJvcCBob21lIj48aW1nCiAgICAgICAgICAgIHNyYz0iL2FwcHMvZHJv",
    "cC9sb2dvLnN2ZyIgYWx0PSIiPjxzcGFuPmRyb3A8L3NwYW4+PC9hPjxidXR0b24gaWQ9ImNvbGxhcHNlIiBjbGFzcz0iaWNvbiIKICAgICAgICAg",
    "IGFyaWEtbGFiZWw9IkNvbGxhcHNlIHNpZGViYXIiIGFyaWEtZXhwYW5kZWQ9InRydWUiIHRpdGxlPSJDb2xsYXBzZSBzaWRlYmFyIgogICAgICAg",
    "ICAgZGF0YS1pY29uPSJwYW5lbCI+PC9idXR0b24+PC9oZWFkZXI+PGJ1dHRvbiBpZD0ibmV3VGFiIiBjbGFzcz0ibmV3LXRhYiIKICAgICAgICB0",
    "aXRsZT0iTmV3IHRhYiI+PHNwYW4gZGF0YS1pY29uPSJwbHVzIj48L3NwYW4+PHNwYW4gY2xhc3M9ImxhYmVsIj5OZXcgdGFiPC9zcGFuPjwvYnV0",
    "dG9uPgogICAgICA8bmF2IGFyaWEtbGFiZWw9IldvcmtzcGFjZSI+CiAgICAgICAgPGJ1dHRvbiBpZD0iaG9tZU5hdiIgdGl0bGU9IkhvbWUiIGFy",
    "aWEtY3VycmVudD0icGFnZSI+PHNwYW4gZGF0YS1pY29uPSJob21lIj48L3NwYW4+PHNwYW4KICAgICAgICAgICAgY2xhc3M9ImxhYmVsIj5Ib21l",
    "PC9zcGFuPgogICAgICAgIDwvYnV0dG9uPjxidXR0b24gaWQ9ImFpTmF2IiB0aXRsZT0iQTEgY2hhdCI+PHNwYW4gZGF0YS1pY29uPSJhaSI+PC9z",
    "cGFuPjxzcGFuCiAgICAgICAgICAgIGNsYXNzPSJsYWJlbCI+QTEgY2hhdDwvc3Bhbj48L2J1dHRvbj4KICAgICAgICA8YnV0dG9uIGlkPSJnYW1l",
    "c05hdiIgdGl0bGU9IkdhbWVzIj48c3BhbiBkYXRhLWljb249ImdhbWUiPjwvc3Bhbj48c3BhbgogICAgICAgICAgICBjbGFzcz0ibGFiZWwiPkdh",
    "bWVzPC9zcGFuPjwvYnV0dG9uPjxidXR0b24gaWQ9InR1YmVOYXYiIHRpdGxlPSJEcm9wVHViZSI+PHNwYW4KICAgICAgICAgICAgZGF0YS1pY29u",
    "PSJ2aWRlbyI+PC9zcGFuPjxzcGFuIGNsYXNzPSJsYWJlbCI+RHJvcFR1YmU8L3NwYW4+PC9idXR0b24+PGJ1dHRvbgogICAgICAgICAgaWQ9ImFz",
    "dHJhTmF2IiB0eXBlPSJidXR0b24iIHRpdGxlPSJBc3RyYSBDbG91ZCBHYW1pbmciCiAgICAgICAgICBhcmlhLWxhYmVsPSJPcGVuIEFzdHJhIENs",
    "b3VkIEdhbWluZyBpbiBEcm9wIj48aW1nIHNyYz0iL2FwcHMvZHJvcC9hc3RyYS5wbmciIGFsdD0iIj48c3BhbgogICAgICAgICAgICBjbGFzcz0i",
    "bGFiZWwiPkFzdHJhPC9zcGFuPjwvYnV0dG9uPjxidXR0b24gaWQ9ImJvb2ttYXJrc05hdiIgdGl0bGU9IkJvb2ttYXJrcyI+CiAgICAgICAgICA8",
    "c3BhbiBkYXRhLWljb249ImJvb2ttYXJrIj48L3NwYW4+PHNwYW4gY2xhc3M9ImxhYmVsIj5Cb29rbWFya3M8L3NwYW4+PC9idXR0b24+CiAgICAg",
    "IDwvbmF2PgogICAgICA8ZGl2IGNsYXNzPSJ0YWJzLWxhYmVsIj5UQUJTIDxzcGFuIGlkPSJ0YWJDb3VudCI+MDwvc3Bhbj48L2Rpdj4KICAgICAg",
    "PGRpdiBpZD0idGFicyIgcm9sZT0idGFibGlzdCIgYXJpYS1sYWJlbD0iT3BlbiB3ZWJzaXRlcyI+PC9kaXY+CiAgICAgIDxmb290ZXI+PGJ1dHRv",
    "biBpZD0ic2V0dGluZ3NCdXR0b24iIHRpdGxlPSJTZXR0aW5ncyI+PHNwYW4gZGF0YS1pY29uPSJzZXR0aW5ncyI+PC9zcGFuPjxzcGFuCiAgICAg",
    "ICAgICAgIGNsYXNzPSJsYWJlbCI+U2V0dGluZ3M8L3NwYW4+PC9idXR0b24+CiAgICAgICAgPGRpdiBjbGFzcz0icHJvZmlsZS1yb3ciPjxidXR0",
    "b24gaWQ9InByb2ZpbGUiIGNsYXNzPSJpY29uIGF2YXRhciIgdGl0bGU9IkFjY291bnQiCiAgICAgICAgICAgIGFyaWEtbGFiZWw9IkFjY291bnQi",
    "IGRhdGEtaWNvbj0iYWNjb3VudCI+CiAgICAgICAgICA8L2J1dHRvbj4KICAgICAgICAgIDxkaXYgaWQ9InRyYWZmaWMiIHRhYmluZGV4PSIwIgog",
    "ICAgICAgICAgICBhcmlhLWxhYmVsPSJBY3Rpdml0eTogdHJhZmZpYywgcmVxdWVzdHMsIGRhdGEgYW5kIHByb2Nlc3NpbmciPgogICAgICAgICAg",
    "ICA8ZGl2PjxzcGFuIGNsYXNzPSJ0cmFmZmljLWxhYmVsIj5BY3Rpdml0eTwvc3Bhbj48b3V0cHV0IGlkPSJzcGVlZCI+MC4wMCBNYnBzPC9vdXRw",
    "dXQ+CiAgICAgICAgICAgIDwvZGl2PjxzdmcgaWQ9ImdyYXBoIiB2aWV3Qm94PSIwIDAgOTAgMjgiIGFyaWEtaGlkZGVuPSJ0cnVlIj4KICAgICAg",
    "ICAgICAgICA8cGF0aCBkYXRhLXNlcmllcz0idHJhZmZpYyIgZD0iTTAgMjdIOTAiIC8+CiAgICAgICAgICAgICAgPHBhdGggZGF0YS1zZXJpZXM9",
    "InJlcXVlc3RzIiBkPSJNMCAyN0g5MCIgLz4KICAgICAgICAgICAgICA8cGF0aCBkYXRhLXNlcmllcz0iZGF0YSIgZD0iTTAgMjdIOTAiIC8+CiAg",
    "ICAgICAgICAgICAgPHBhdGggZGF0YS1zZXJpZXM9InByb2Nlc3NpbmciIGQ9Ik0wIDI3SDkwIiAvPgogICAgICAgICAgICA8L3N2Zz4KICAgICAg",
    "ICAgICAgPGRpdiBjbGFzcz0idHJhZmZpYy1kZXRhaWwiIHJvbGU9InRvb2x0aXAiPjxzdHJvbmc+U2Vzc2lvbiBhY3Rpdml0eTwvc3Ryb25nPgog",
    "ICAgICAgICAgICAgIDxkaXYgaWQ9InRyYW5zZmVyRGV0YWlsIj5ObyBhY3Rpdml0eSB5ZXQuPC9kaXY+PHNtYWxsPiBMaW5lcyBzY2FsZSBpbmRl",
    "cGVuZGVudGx5LgogICAgICAgICAgICAgICAgUHJvY2Vzc2luZyBtZWFzdXJlcyB0aW1lIHdpdGggYWN0aXZlIHJlcXVlc3RzLCBub3QgQ1BVIHVz",
    "YWdlLjwvc21hbGw+CiAgICAgICAgICAgIDwvZGl2PgogICAgICAgICAgPC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvZm9vdGVyPgogICAg",
    "PC9hc2lkZT4KICAgIDxtYWluIGlkPSJtYWluIj4KICAgICAgPHNlY3Rpb24gaWQ9ImhvbWUiPjxidXR0b24gaWQ9Im9ubGluZUNvdW50ZXIiIGRp",
    "c2FibGVkPSJkaXNhYmxlZCIgdGl0bGU9IkN1cnJlbnQgdXNlcnMgb25saW5lIgogICAgICAgICAgYXJpYS1sYWJlbD0iQ3VycmVudCB1c2VycyBv",
    "bmxpbmUiPjxzcGFuIGNsYXNzPSJvbmxpbmUtZG90IiBhcmlhLWhpZGRlbj0idHJ1ZSI+PC9zcGFuPjxzcGFuCiAgICAgICAgICAgIGlkPSJvbmxp",
    "bmVDb3VudCIgcm9sZT0ic3RhdHVzIiBhcmlhLWxpdmU9InBvbGl0ZSI+Q29ubmVjdGluZz88L3NwYW4+PC9idXR0b24+CiAgICAgICAgPGRpdiBj",
    "bGFzcz0iaG9tZS1jb250ZW50Ij48aW1nIGNsYXNzPSJob21lLWxvZ28iIHNyYz0iL2FwcHMvZHJvcC9sb2dvLnN2ZyIgYWx0PSJEcm9wIj4KICAg",
    "ICAgICAgIDxmb3JtIGlkPSJzZWFyY2giIHJvbGU9InNlYXJjaCI+PHNwYW4gZGF0YS1pY29uPSJzZWFyY2giPjwvc3Bhbj4KICAgICAgICAgICAg",
    "PGxhYmVsIGNsYXNzPSJzci1vbmx5IiBmb3I9InF1ZXJ5Ij5TM0FSQzQgb3IgZW50ZXIgYSBVM0w8L2xhYmVsPjxpbnB1dCBpZD0icXVlcnkiCiAg",
    "ICAgICAgICAgICAgYXV0b2NvbXBsZXRlPSJvZmYiIHNwZWxsY2hlY2s9ImZhbHNlIiBwbGFjZWhvbGRlcj0iUzNBUkM0IG9yIGVudGVyIGEgVTNM",
    "Ij48YnV0dG9uCiAgICAgICAgICAgICAgY2xhc3M9Imljb24iIGFyaWEtbGFiZWw9IlNlYXJjaCIgZGF0YS1pY29uPSJlbnRlciI+PC9idXR0b24+",
    "CiAgICAgICAgICA8L2Zvcm0+CiAgICAgICAgICA8ZGl2IGlkPSJzaG9ydGN1dHMiIGFyaWEtbGFiZWw9IlNob3J0Y3V0cyI+PGJ1dHRvbiBkYXRh",
    "LXVybD0iaHR0cHM6Ly9naXRodWIuY29tIj48c3BhbgogICAgICAgICAgICAgICAgZGF0YS1pY29uPSJnaXRodWIiPjwvc3Bhbj5HaXRIdWIgPC9i",
    "dXR0b24+PGJ1dHRvbgogICAgICAgICAgICAgIGRhdGEtdXJsPSJodHRwczovL3dpa2lwZWRpYS5vcmciPjxzcGFuIGNsYXNzPSJ3aWtpIj5XPC9z",
    "cGFuPldpa2lwZWRpYTwvYnV0dG9uPjxidXR0b24KICAgICAgICAgICAgICBkYXRhLXVybD0iaHR0cHM6Ly95b3V0dWJlLmNvbSI+PHNwYW4gZGF0",
    "YS1pY29uPSJ2aWRlbyI+PC9zcGFuPllvdVR1YmU8L2J1dHRvbj48L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgPC9zZWN0aW9uPgogICAgICA8",
    "c2VjdGlvbiBpZD0iYnJvd3NlciIgaGlkZGVuPgogICAgICAgIDxkaXYgY2xhc3M9ImJyb3dzZXItYmFyIj48YnV0dG9uIGlkPSJiYWNrIiBjbGFz",
    "cz0iaWNvbiIgYXJpYS1sYWJlbD0iQmFjayIgdGl0bGU9IkJhY2siCiAgICAgICAgICAgIGRhdGEtaWNvbj0iYmFjayI+PC9idXR0b24+PGJ1dHRv",
    "biBpZD0iZm9yd2FyZCIgY2xhc3M9Imljb24iIGFyaWEtbGFiZWw9IkZvcndhcmQiCiAgICAgICAgICAgIHRpdGxlPSJGb3J3YXJkIiBkYXRhLWlj",
    "b249ImZvcndhcmQiPgogICAgICAgICAgPC9idXR0b24+PGJ1dHRvbiBpZD0icmVsb2FkIiBjbGFzcz0iaWNvbiIgYXJpYS1sYWJlbD0iUmVsb2Fk",
    "IiB0aXRsZT0iUmVsb2FkIgogICAgICAgICAgICBkYXRhLWljb249InJlbG9hZCI+PC9idXR0b24+CiAgICAgICAgICA8Zm9ybSBpZD0iYWRkcmVz",
    "c0Zvcm0iPjxsYWJlbCBjbGFzcz0ic3Itb25seSIgZm9yPSJhZGRyZXNzIj5XZWJzaXRlIGFkZHJlc3M8L2xhYmVsPjxpbnB1dAogICAgICAgICAg",
    "ICAgIGlkPSJhZGRyZXNzIiBhdXRvY29tcGxldGU9Im9mZiIgc3BlbGxjaGVjaz0iZmFsc2UiPjwvZm9ybT48YnV0dG9uIGlkPSJib29rbWFya1Bh",
    "Z2UiCiAgICAgICAgICAgIGNsYXNzPSJpY29uIiBhcmlhLWxhYmVsPSJCb29rbWFyayBwYWdlIiB0aXRsZT0iQm9va21hcmsgcGFnZSIgZGF0YS1p",
    "Y29uPSJib29rbWFyayIKICAgICAgICAgICAgYXJpYS1wcmVzc2VkPSJmYWxzZSI+PC9idXR0b24+PGJ1dHRvbiBpZD0icGluUGFnZSIgY2xhc3M9",
    "Imljb24iIGFyaWEtbGFiZWw9IlBpbiB0YWIiCiAgICAgICAgICAgIHRpdGxlPSJQaW4gdGFiIiBkYXRhLWljb249InBpbiIgYXJpYS1wcmVzc2Vk",
    "PSJmYWxzZSI+PC9idXR0b24+PHNwYW4gaWQ9ImxvYWRpbmciCiAgICAgICAgICAgIGNsYXNzPSJzci1vbmx5IiByb2xlPSJzdGF0dXMiPjwvc3Bh",
    "bj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGlkPSJzdGFnZSI+PC9kaXY+CiAgICAgICAgPGRpdiBpZD0iYnJvd3NlRXJyb3IiIGhpZGRl",
    "biByb2xlPSJzdGF0dXMiPgogICAgICAgICAgPGgyPlRoaXMgcGFnZSBjb3VsZCBub3QgbG9hZDwvaDI+CiAgICAgICAgICA8cCBpZD0iYnJvd3Nl",
    "RXJyb3JUZXh0Ij48L3A+PGJ1dHRvbiBpZD0icmV0cnlQYWdlIj5UcnkgYWdhaW48L2J1dHRvbj4KICAgICAgICA8L2Rpdj4KICAgICAgPC9zZWN0",
    "aW9uPgogICAgICA8c2VjdGlvbiBpZD0iZ2FtZXMiIGhpZGRlbj48aWZyYW1lIGlkPSJnYW1lc0ZyYW1lIiB0aXRsZT0iRHJvcCBnYW1lcyIKICAg",
    "ICAgICAgIGFsbG93PSJhdXRvcGxheTsgZnVsbHNjcmVlbjsgZ2FtZXBhZDsgY2xpcGJvYXJkLXdyaXRlIiBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJh",
    "bWU+CiAgICAgIDwvc2VjdGlvbj4KICAgICAgPHNlY3Rpb24gaWQ9InR1YmUiIGhpZGRlbj48aWZyYW1lIGlkPSJ0dWJlRnJhbWUiIHRpdGxlPSJE",
    "cm9wVHViZSIKICAgICAgICAgIGFsbG93PSJhdXRvcGxheTsgZnVsbHNjcmVlbjsgZW5jcnlwdGVkLW1lZGlhOyBwaWN0dXJlLWluLXBpY3R1cmUi",
    "CiAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+PC9zZWN0aW9uPgogICAgICA8c2VjdGlvbiBpZD0iYm9va21hcmtzIiBoaWRkZW4+",
    "CiAgICAgICAgPGRpdiBjbGFzcz0iY29sbGVjdGlvbi1oZWFkZXIiPgogICAgICAgICAgPHA+U0FWRUQ8L3A+CiAgICAgICAgICA8aDE+Qm9va21h",
    "cmtzPC9oMT48aW5wdXQgaWQ9ImJvb2ttYXJrU2VhcmNoIiB0eXBlPSJzZWFyY2giIHBsYWNlaG9sZGVyPSJTM0FSQzQgYm9va21hcmtzIgogICAg",
    "ICAgICAgICBhcmlhLWxhYmVsPSJTZWFyY2ggYm9va21hcmtzIj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8ZGl2IGlkPSJib29rbWFya0xpc3Qi",
    "PjwvZGl2PgogICAgICAgIDxwIGlkPSJib29rbWFya0VtcHR5Ij5TYXZlIGEgcGFnZSB3aXRoIHRoZSBib29rbWFyayBpY29uIGluIHRoZSBhZGRy",
    "ZXNzIGJhci48L3A+CiAgICAgIDwvc2VjdGlvbj4KICAgICAgPHNlY3Rpb24gaWQ9ImFpIiBoaWRkZW4+PGlmcmFtZSBpZD0iYWlGcmFtZSIgdGl0",
    "bGU9IkRyb3AgQTEiCiAgICAgICAgICBhbGxvdz0ibWljcm9waG9uZTsgZGlzcGxheS1jYXB0dXJlOyBjbGlwYm9hcmQtd3JpdGUiCiAgICAgICAg",
    "ICByZWZlcnJlcnBvbGljeT0ibm8tcmVmZXJyZXIiPjwvaWZyYW1lPgogICAgICA8L3NlY3Rpb24+CiAgICA8L21haW4+CiAgICA8ZGlhbG9nIGlk",
    "PSJzZXR0aW5ncyI+CiAgICAgIDxkaXYgY2xhc3M9ImRpYWxvZy1oZWFkaW5nIj4KICAgICAgICA8aDI+U2V0dGluZ3M8L2gyPjxidXR0b24gY2xh",
    "c3M9Imljb24iIGRhdGEtY2xvc2U9InNldHRpbmdzIiBkYXRhLWljb249ImNsb3NlIgogICAgICAgICAgYXJpYS1sYWJlbD0iQ2xvc2Ugc2V0dGlu",
    "Z3MiPjwvYnV0dG9uPgogICAgICA8L2Rpdj48bGFiZWwgY2xhc3M9InNldHRpbmciPlMzQVJDNCBlbmdpbmUgPHNlbGVjdCBpZD0iZW5naW5lIj4K",
    "ICAgICAgICAgIDxvcHRpb24gdmFsdWU9ImR1Y2tkdWNrZ28iPkR1Y2tEdWNrR288L29wdGlvbj4KICAgICAgICAgIDxvcHRpb24gdmFsdWU9Imdv",
    "b2dsZSI+R29vZ2xlPC9vcHRpb24+CiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJiaW5nIj5CaW5nPC9vcHRpb24+CiAgICAgICAgPC9zZWxlY3Q+",
    "PC9sYWJlbD48bGFiZWwgY2xhc3M9InNldHRpbmciPkNvbm5lY3Rpb248c2VsZWN0IGlkPSJjb25uZWN0aW9uTW9kZSI+CiAgICAgICAgICA8b3B0",
    "aW9uIHZhbHVlPSJhdXRvIj5BdXRvbWF0aWM8L29wdGlvbj4KICAgICAgICAgIDxvcHRpb24gdmFsdWU9ImJyaWRnZSI+SFRUUCBicmlkZ2U8L29w",
    "dGlvbj4KICAgICAgICAgIDxvcHRpb24gdmFsdWU9ImRpcmVjdCI+V2ViU29ja2V0PC9vcHRpb24+CiAgICAgICAgPC9zZWxlY3Q+PC9sYWJlbD48",
    "YnV0dG9uIGlkPSJ0ZXN0Q29ubmVjdGlvbiIgY2xhc3M9InNldHRpbmciPlRlc3QgY29ubmVjdGlvbjxzcGFuCiAgICAgICAgICBpZD0iY29ubmVj",
    "dGlvblN0YXR1cyIgcm9sZT0ic3RhdHVzIj4gTm90IGNvbm5lY3RlZDwvc3Bhbj48L2J1dHRvbj4KICAgICAgPGRpdiBjbGFzcz0ic2V0dGluZyI+",
    "QXBwZWFyYW5jZTxzcGFuPkdyYXBoaXRlPC9zcGFuPjwvZGl2PjxsYWJlbCBjbGFzcz0ic2V0dGluZyI+IENsb3NlCiAgICAgICAgcHJldmVudGlv",
    "bjxpbnB1dCBpZD0iY2xvc2VQcmV2ZW50aW9uIiB0eXBlPSJjaGVja2JveCIgcm9sZT0ic3dpdGNoIgogICAgICAgICAgYXJpYS1kZXNjcmliZWRi",
    "eT0iY2xvc2VQcmV2ZW50aW9uSGVscCI+CiAgICAgIDwvbGFiZWw+CiAgICAgIDxwIGlkPSJjbG9zZVByZXZlbnRpb25IZWxwIiBjbGFzcz0ic2V0",
    "dGluZy1oZWxwIj4gQXNrIGJlZm9yZSBjbG9zaW5nIG9yIGxlYXZpbmcgdGhpcyB0YWIsIHdoZW4KICAgICAgICBzdXBwb3J0ZWQgYnkgeW91ciBi",
    "cm93c2VyLjwvcD48YnV0dG9uIGlkPSJibGFua0Nsb2FrIiBjbGFzcz0ic2V0dGluZyIgdHlwZT0iYnV0dG9uIj5PcGVuIGluCiAgICAgICAgYWJv",
    "dXQ6Ymxhbms8c3BhbiBjbGFzcz0ic3BhY2VyIj48L3NwYW4+PHNwYW4gZGF0YS1pY29uPSJjaGV2cm9uIj48L3NwYW4+PC9idXR0b24+PGxhYmVs",
    "CiAgICAgICAgY2xhc3M9InNldHRpbmciPlJlc3RvcmUgdGFiczxpbnB1dCBpZD0icmVzdG9yZSIgdHlwZT0iY2hlY2tib3giIHJvbGU9InN3aXRj",
    "aCI+PC9sYWJlbD48bGFiZWwKICAgICAgICBjbGFzcz0ic2V0dGluZyI+IEJsb2NrIHBvcHVwczxpbnB1dCBpZD0icG9wdXBzIiB0eXBlPSJjaGVj",
    "a2JveCIgcm9sZT0ic3dpdGNoIgogICAgICAgICAgY2hlY2tlZD0iY2hlY2tlZCI+PC9sYWJlbD48bGFiZWwgY2xhc3M9InNldHRpbmciPkJsb2Nr",
    "IGFkcyA8aW5wdXQgaWQ9ImFkcyIgdHlwZT0iY2hlY2tib3giCiAgICAgICAgICByb2xlPSJzd2l0Y2giIGNoZWNrZWQ9ImNoZWNrZWQiPjwvbGFi",
    "ZWw+PGJ1dHRvbiBpZD0ia2V5cyIgY2xhc3M9InNldHRpbmciPjxzcGFuCiAgICAgICAgICBkYXRhLWljb249ImtleSI+PC9zcGFuPkFQSSBrZXlz",
    "PHNwYW4gY2xhc3M9InNwYWNlciI+PC9zcGFuPjxzcGFuCiAgICAgICAgICBkYXRhLWljb249ImNoZXZyb24iPjwvc3Bhbj48L2J1dHRvbj48YnV0",
    "dG9uIGlkPSJjbGVhclRhYnMiIGNsYXNzPSJzZXR0aW5nIj5DbGVhciBzYXZlZAogICAgICAgIHRhYnM8L2J1dHRvbj4KICAgIDwvZGlhbG9nPgog",
    "ICAgPGRpYWxvZyBpZD0ic2V0dXBXaXphcmQiIGFyaWEtbGFiZWxsZWRieT0ic2V0dXBUaXRsZSI+CiAgICAgIDxmb3JtIGlkPSJzZXR1cEZvcm0i",
    "PgogICAgICAgIDxkaXYgY2xhc3M9InNldHVwLWJyYW5kIj48aW1nIHNyYz0iL2FwcHMvZHJvcC9sb2dvLnN2ZyIgYWx0PSIiIHdpZHRoPSIyOCIg",
    "aGVpZ2h0PSIyOCI+CiAgICAgICAgICA8aDIgaWQ9InNldHVwVGl0bGUiPlNldCB1cCBEcm9wPC9oMj4KICAgICAgICA8L2Rpdj48bGFiZWwgY2xh",
    "c3M9InNldHRpbmciIGZvcj0ic2V0dXBFbmdpbmUiPlMzQVJDNCBlbmdpbmU8c2VsZWN0IGlkPSJzZXR1cEVuZ2luZSI+CiAgICAgICAgICAgIDxv",
    "cHRpb24gdmFsdWU9ImR1Y2tkdWNrZ28iPkR1Y2tEdWNrR288L29wdGlvbj4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iZ29vZ2xlIj5Hb29n",
    "bGU8L29wdGlvbj4KICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iYmluZyI+QmluZzwvb3B0aW9uPgogICAgICAgICAgPC9zZWxlY3Q+PC9sYWJl",
    "bD48bGFiZWwgY2xhc3M9InNldHRpbmciIGZvcj0ic2V0dXBDbG9zZSI+Q2xvc2UgcHJldmVudGlvbjxpbnB1dAogICAgICAgICAgICBpZD0ic2V0",
    "dXBDbG9zZSIgdHlwZT0iY2hlY2tib3giIHJvbGU9InN3aXRjaCI+PC9sYWJlbD4KICAgICAgICA8ZGl2IGNsYXNzPSJzZXR1cC1hY3Rpb25zIj48",
    "YnV0dG9uIGlkPSJzZXR1cFNraXAiIHR5cGU9ImJ1dHRvbiI+U2tpcDwvYnV0dG9uPjxidXR0b24KICAgICAgICAgICAgdHlwZT0ic3VibWl0IiBj",
    "bGFzcz0ic2V0dXAtZG9uZSI+RG9uZTwvYnV0dG9uPjwvZGl2PgogICAgICA8L2Zvcm0+CiAgICA8L2RpYWxvZz4KICAgIDxkaWFsb2cgaWQ9ImFj",
    "Y291bnRNZW51Ij4KICAgICAgPGRpdiBjbGFzcz0iZGlhbG9nLWhlYWRpbmciPgogICAgICAgIDxoMiBpZD0iYWNjb3VudE5hbWUiPkRyb3AgYWNj",
    "b3VudDwvaDI+PGJ1dHRvbiBjbGFzcz0iaWNvbiIgZGF0YS1jbG9zZT0iYWNjb3VudE1lbnUiCiAgICAgICAgICBkYXRhLWljb249ImNsb3NlIiBh",
    "cmlhLWxhYmVsPSJDbG9zZSBhY2NvdW50Ij48L2J1dHRvbj4KICAgICAgPC9kaXY+CiAgICAgIDxwIGlkPSJhY2NvdW50Um9sZSIgY2xhc3M9ImFj",
    "Y291bnQtcm9sZSIgcm9sZT0ic3RhdHVzIj5HdWVzdCA8L3A+PGJ1dHRvbiBpZD0iYWNjb3VudEFjdGlvbiIKICAgICAgICBjbGFzcz0ic2V0dGlu",
    "ZyI+U2lnbiBpbjwvYnV0dG9uPjxidXR0b24gaWQ9ImNyZWF0ZUFjY291bnQiIGNsYXNzPSJzZXR0aW5nIj4gQ3JlYXRlIGEgRHJvcAogICAgICAg",
    "IGFjY291bnQ8L2J1dHRvbj48YnV0dG9uIGlkPSJhY2NvdW50S2V5cyIgY2xhc3M9InNldHRpbmciPkFQSSBrZXlzPC9idXR0b24+CiAgICA8L2Rp",
    "YWxvZz4KICAgIDxkaXYgaWQ9Im5vdGljZSIgcm9sZT0ic3RhdHVzIiBoaWRkZW4+PC9kaXY+CiAgPC9ib2R5PgoKPC9odG1sPgoK"
  ].join("")), I => I.charCodeAt(0)));
  document.open();
  document.write(I);
  document.close();
})().catch(() => {
  const I = document.createElement("p");
  I.setAttribute("role", "alert");
  I.textContent = "Saved browser data could not be updated. Close other site tabs and reload.";
  document.body.prepend(I);
});
