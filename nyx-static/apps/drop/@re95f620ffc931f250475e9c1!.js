(async () => {
  await async function I(g) {
    if (!globalThis.indexedDB?.databases) return;
    const C = async () => {
      const I = await indexedDB.databases();
      for (const [C, A] of Object.entries(g)) {
        if (!I.some(I => I.name === C) || I.some(I => I.name === A)) continue;
        const g = (I, g, C) => new Promise((A, i) => {
          const G = g ? indexedDB.open(I, g) : indexedDB.open(I);
          G.onerror = () => i(G.error);
          G.onblocked = () => i(Error("Close other site tabs and reload to update saved browser data."));
          G.onupgradeneeded = () => C?.(G.result);
          G.onsuccess = () => A(G.result);
        });
        const i = await g(C);
        const G = [...i.objectStoreNames];
        let b;
        try {
          b = await new Promise((I, g) => {
            if (!G.length) return I([]);
            const C = i.transaction(G, "readonly"),
              A = [];
            for (const I of G) {
              const g = C.objectStore(I),
                i = {
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
              A.push(i);
              const G = g.openCursor();
              G.onsuccess = () => {
                const I = G.result;
                if (I) {
                  i.rows.push({
                    key: I.primaryKey,
                    value: I.value
                  });
                  I.continue();
                }
              };
            }
            C.oncomplete = () => I(A);
            C.onerror = () => g(C.error);
            C.onabort = () => g(C.error || Error("Storage copy interrupted."));
          });
        } finally {
          i.close();
        }
        const l = await g(A, i.version, I => {
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
            if (!G.length) return I();
            const C = l.transaction(G, "readwrite");
            for (const I of b) {
              const g = C.objectStore(I.name);
              for (const C of I.rows) I.keyPath === null ? g.put(C.value, C.key) : g.put(C.value);
            }
            C.oncomplete = I;
            C.onerror = () => g(C.error);
            C.onabort = () => g(C.error || Error("Storage copy interrupted."));
          });
        } catch (I) {
          l.close();
          await new Promise(I => {
            const g = indexedDB.deleteDatabase(A);
            g.onsuccess = g.onerror = g.onblocked = I;
          });
          throw I;
        } finally {
          l.close();
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
    "aGVldCIgaHJlZj0iL2Nzcy9vd25lci1kYXNoYm9hcmQuY3NzP3Jldj00OTU1ZDZjMWI3NjdhNTllIj4KICAgIDxsaW5rIHJlbD0ic3R5bGVzaGVl",
    "dCIgaHJlZj0iL2Nzcy9vd25lci1kYXNoYm9hcmQtcG9saXNoLmNzcz9yZXY9NDk1NWQ2YzFiNzY3YTU5ZSI+CiAgICA8bGluayByZWw9InN0eWxl",
    "c2hlZXQiIGhyZWY9Ii9hcHBzL2Ryb3Avc3R5bGUuY3NzP3Jldj00OTU1ZDZjMWI3NjdhNTllIj4KICAgIDxzY3JpcHQgc3JjPSIvcnVudGltZS1j",
    "b25maWcuanMiPjwvc2NyaXB0PgogICAgPHNjcmlwdCB0eXBlPSJtb2R1bGUiIHNyYz0iL2FwcHMvZHJvcC9AcjZlY2QwMTU2MWYyNTM1MzljY2Zj",
    "ZWUzNSEuanMiPjwvc2NyaXB0PgogICAgPHN0eWxlPmh0bWwuc3RhcnR1cC1jb3ZlcmVkIHsKICBvdmVyZmxvdzogaGlkZGVuOwogIGJhY2tncm91",
    "bmQ6ICNmNWY3ZmEKfQpodG1sLnN0YXJ0dXAtY292ZXJlZCBib2R5ID4gOm5vdCgjc3R1ZHlyZWFkeS1zdGFydHVwKTpub3Qoc2NyaXB0KSB7CiAg",
    "dmlzaWJpbGl0eTogaGlkZGVuIWltcG9ydGFudAp9CiNzdHVkeXJlYWR5LXN0YXJ0dXAgewogIHBvc2l0aW9uOiBmaXhlZDsKICBpbnNldDogMDsK",
    "ICB3aWR0aDogMTAwJTsKICBoZWlnaHQ6IDEwMGR2aDsKICBib3JkZXI6IDA7CiAgYmFja2dyb3VuZDogI2Y1ZjdmYTsKICB6LWluZGV4OiAyMTQ3",
    "NDgzNjQ3Cn08L3N0eWxlPgogICAgPHNjcmlwdCBkZWZlcj0iZGVmZXIiIHNyYz0iL2FwcHMvZHJvcC9AcmRiMmJjYjA2YzhjOWY3YmI0ZDJmZGJl",
    "YiEuanMiPjwvc2NyaXB0PgogIDwvaGVhZD4KCiAgPGJvZHk+PGlmcmFtZSBpZD0ic3R1ZHlyZWFkeS1zdGFydHVwIiB0aXRsZT0iU3R1ZHlSZWFk",
    "eSBtYXRoIGxlc3NvbnMiCiAgICAgIHNyYz0iL2FwcHMvdHV0c2kvc3R1ZHlyZWFkeS9pbmRleC5odG1sIiByZWZlcnJlcnBvbGljeT0ibm8tcmVm",
    "ZXJyZXIiPjwvaWZyYW1lPjxub3NjcmlwdD4KICAgICAgPHN0eWxlPmh0bWwuc3RhcnR1cC1jb3ZlcmVkIGJvZHkgPiA6bm90KCNzdHVkeXJlYWR5",
    "LXN0YXJ0dXApOm5vdChzY3JpcHQpIHsKICB2aXNpYmlsaXR5OiB2aXNpYmxlIWltcG9ydGFudAp9CiNzdHVkeXJlYWR5LXN0YXJ0dXAgewogIGRp",
    "c3BsYXk6IG5vbmUKfTwvc3R5bGU+CiAgICA8L25vc2NyaXB0PgogICAgPGFzaWRlIGlkPSJzaWRlYmFyIj4KICAgICAgPGhlYWRlcj48YSBjbGFz",
    "cz0iYnJhbmQiIGhyZWY9Ii9hcHBzL2Ryb3AvIiBhcmlhLWxhYmVsPSJEcm9wIGhvbWUiPjxpbWcKICAgICAgICAgICAgc3JjPSIvYXBwcy9kcm9w",
    "L2xvZ28uc3ZnIiBhbHQ9IiI+PHNwYW4+ZHJvcDwvc3Bhbj48L2E+PGJ1dHRvbiBpZD0iY29sbGFwc2UiIGNsYXNzPSJpY29uIgogICAgICAgICAg",
    "YXJpYS1sYWJlbD0iQ29sbGFwc2Ugc2lkZWJhciIgYXJpYS1leHBhbmRlZD0idHJ1ZSIgdGl0bGU9IkNvbGxhcHNlIHNpZGViYXIiCiAgICAgICAg",
    "ICBkYXRhLWljb249InBhbmVsIj48L2J1dHRvbj48L2hlYWRlcj48YnV0dG9uIGlkPSJuZXdUYWIiIGNsYXNzPSJuZXctdGFiIgogICAgICAgIHRp",
    "dGxlPSJOZXcgdGFiIj48c3BhbiBkYXRhLWljb249InBsdXMiPjwvc3Bhbj48c3BhbiBjbGFzcz0ibGFiZWwiPk5ldyB0YWI8L3NwYW4+PC9idXR0",
    "b24+CiAgICAgIDxuYXYgYXJpYS1sYWJlbD0iV29ya3NwYWNlIj4KICAgICAgICA8YnV0dG9uIGlkPSJob21lTmF2IiB0aXRsZT0iSG9tZSIgYXJp",
    "YS1jdXJyZW50PSJwYWdlIj48c3BhbiBkYXRhLWljb249ImhvbWUiPjwvc3Bhbj48c3BhbgogICAgICAgICAgICBjbGFzcz0ibGFiZWwiPkhvbWU8",
    "L3NwYW4+CiAgICAgICAgPC9idXR0b24+PGJ1dHRvbiBpZD0iYWlOYXYiIHRpdGxlPSJBMSBjaGF0Ij48c3BhbiBkYXRhLWljb249ImFpIj48L3Nw",
    "YW4+PHNwYW4KICAgICAgICAgICAgY2xhc3M9ImxhYmVsIj5BMSBjaGF0PC9zcGFuPjwvYnV0dG9uPgogICAgICAgIDxidXR0b24gaWQ9ImdhbWVz",
    "TmF2IiB0aXRsZT0iR2FtZXMiPjxzcGFuIGRhdGEtaWNvbj0iZ2FtZSI+PC9zcGFuPjxzcGFuCiAgICAgICAgICAgIGNsYXNzPSJsYWJlbCI+R2Ft",
    "ZXM8L3NwYW4+PC9idXR0b24+PGJ1dHRvbiBpZD0idHViZU5hdiIgdGl0bGU9IkRyb3BUdWJlIj48c3BhbgogICAgICAgICAgICBkYXRhLWljb249",
    "InZpZGVvIj48L3NwYW4+PHNwYW4gY2xhc3M9ImxhYmVsIj5Ecm9wVHViZTwvc3Bhbj48L2J1dHRvbj48YnV0dG9uCiAgICAgICAgICBpZD0iYXN0",
    "cmFOYXYiIHR5cGU9ImJ1dHRvbiIgdGl0bGU9IkFzdHJhIENsb3VkIEdhbWluZyIKICAgICAgICAgIGFyaWEtbGFiZWw9Ik9wZW4gQXN0cmEgQ2xv",
    "dWQgR2FtaW5nIGluIERyb3AiPjxpbWcgc3JjPSIvYXBwcy9kcm9wL2FzdHJhLnBuZyIgYWx0PSIiPjxzcGFuCiAgICAgICAgICAgIGNsYXNzPSJs",
    "YWJlbCI+QXN0cmE8L3NwYW4+PC9idXR0b24+PGJ1dHRvbiBpZD0iYm9va21hcmtzTmF2IiB0aXRsZT0iQm9va21hcmtzIj4KICAgICAgICAgIDxz",
    "cGFuIGRhdGEtaWNvbj0iYm9va21hcmsiPjwvc3Bhbj48c3BhbiBjbGFzcz0ibGFiZWwiPkJvb2ttYXJrczwvc3Bhbj48L2J1dHRvbj4KICAgICAg",
    "PC9uYXY+CiAgICAgIDxkaXYgY2xhc3M9InRhYnMtbGFiZWwiPlRBQlMgPHNwYW4gaWQ9InRhYkNvdW50Ij4wPC9zcGFuPjwvZGl2PgogICAgICA8",
    "ZGl2IGlkPSJ0YWJzIiByb2xlPSJ0YWJsaXN0IiBhcmlhLWxhYmVsPSJPcGVuIHdlYnNpdGVzIj48L2Rpdj4KICAgICAgPGZvb3Rlcj48YnV0dG9u",
    "IGlkPSJzZXR0aW5nc0J1dHRvbiIgdGl0bGU9IlNldHRpbmdzIj48c3BhbiBkYXRhLWljb249InNldHRpbmdzIj48L3NwYW4+PHNwYW4KICAgICAg",
    "ICAgICAgY2xhc3M9ImxhYmVsIj5TZXR0aW5nczwvc3Bhbj48L2J1dHRvbj4KICAgICAgICA8ZGl2IGNsYXNzPSJwcm9maWxlLXJvdyI+PGJ1dHRv",
    "biBpZD0icHJvZmlsZSIgY2xhc3M9Imljb24gYXZhdGFyIiB0aXRsZT0iQWNjb3VudCIKICAgICAgICAgICAgYXJpYS1sYWJlbD0iQWNjb3VudCIg",
    "ZGF0YS1pY29uPSJhY2NvdW50Ij4KICAgICAgICAgIDwvYnV0dG9uPgogICAgICAgICAgPGRpdiBpZD0idHJhZmZpYyIgdGFiaW5kZXg9IjAiCiAg",
    "ICAgICAgICAgIGFyaWEtbGFiZWw9IkFjdGl2aXR5OiB0cmFmZmljLCByZXF1ZXN0cywgZGF0YSBhbmQgcHJvY2Vzc2luZyI+CiAgICAgICAgICAg",
    "IDxkaXY+PHNwYW4gY2xhc3M9InRyYWZmaWMtbGFiZWwiPkFjdGl2aXR5PC9zcGFuPjxvdXRwdXQgaWQ9InNwZWVkIj4wLjAwIE1icHM8L291dHB1",
    "dD4KICAgICAgICAgICAgPC9kaXY+PHN2ZyBpZD0iZ3JhcGgiIHZpZXdCb3g9IjAgMCA5MCAyOCIgYXJpYS1oaWRkZW49InRydWUiPgogICAgICAg",
    "ICAgICAgIDxwYXRoIGRhdGEtc2VyaWVzPSJ0cmFmZmljIiBkPSJNMCAyN0g5MCIgLz4KICAgICAgICAgICAgICA8cGF0aCBkYXRhLXNlcmllcz0i",
    "cmVxdWVzdHMiIGQ9Ik0wIDI3SDkwIiAvPgogICAgICAgICAgICAgIDxwYXRoIGRhdGEtc2VyaWVzPSJkYXRhIiBkPSJNMCAyN0g5MCIgLz4KICAg",
    "ICAgICAgICAgICA8cGF0aCBkYXRhLXNlcmllcz0icHJvY2Vzc2luZyIgZD0iTTAgMjdIOTAiIC8+CiAgICAgICAgICAgIDwvc3ZnPgogICAgICAg",
    "ICAgICA8ZGl2IGNsYXNzPSJ0cmFmZmljLWRldGFpbCIgcm9sZT0idG9vbHRpcCI+PHN0cm9uZz5TZXNzaW9uIGFjdGl2aXR5PC9zdHJvbmc+CiAg",
    "ICAgICAgICAgICAgPGRpdiBpZD0idHJhbnNmZXJEZXRhaWwiPk5vIGFjdGl2aXR5IHlldC48L2Rpdj48c21hbGw+IExpbmVzIHNjYWxlIGluZGVw",
    "ZW5kZW50bHkuCiAgICAgICAgICAgICAgICBQcm9jZXNzaW5nIG1lYXN1cmVzIHRpbWUgd2l0aCBhY3RpdmUgcmVxdWVzdHMsIG5vdCBDUFUgdXNh",
    "Z2UuPC9zbWFsbD4KICAgICAgICAgICAgPC9kaXY+CiAgICAgICAgICA8L2Rpdj4KICAgICAgICA8L2Rpdj4KICAgICAgPC9mb290ZXI+CiAgICA8",
    "L2FzaWRlPgogICAgPG1haW4gaWQ9Im1haW4iPgogICAgICA8c2VjdGlvbiBpZD0iaG9tZSI+PGJ1dHRvbiBpZD0ib25saW5lQ291bnRlciIgZGlz",
    "YWJsZWQ9ImRpc2FibGVkIiB0aXRsZT0iQ3VycmVudCB1c2VycyBvbmxpbmUiCiAgICAgICAgICBhcmlhLWxhYmVsPSJDdXJyZW50IHVzZXJzIG9u",
    "bGluZSI+PHNwYW4gY2xhc3M9Im9ubGluZS1kb3QiIGFyaWEtaGlkZGVuPSJ0cnVlIj48L3NwYW4+PHNwYW4KICAgICAgICAgICAgaWQ9Im9ubGlu",
    "ZUNvdW50IiByb2xlPSJzdGF0dXMiIGFyaWEtbGl2ZT0icG9saXRlIj5Db25uZWN0aW5nPzwvc3Bhbj48L2J1dHRvbj4KICAgICAgICA8ZGl2IGNs",
    "YXNzPSJob21lLWNvbnRlbnQiPjxpbWcgY2xhc3M9ImhvbWUtbG9nbyIgc3JjPSIvYXBwcy9kcm9wL2xvZ28uc3ZnIiBhbHQ9IkRyb3AiPgogICAg",
    "ICAgICAgPGZvcm0gaWQ9InNlYXJjaCIgcm9sZT0ic2VhcmNoIj48c3BhbiBkYXRhLWljb249InNlYXJjaCI+PC9zcGFuPgogICAgICAgICAgICA8",
    "bGFiZWwgY2xhc3M9InNyLW9ubHkiIGZvcj0icXVlcnkiPlMzQVJDNCBvciBlbnRlciBhIFUzTDwvbGFiZWw+PGlucHV0IGlkPSJxdWVyeSIKICAg",
    "ICAgICAgICAgICBhdXRvY29tcGxldGU9Im9mZiIgc3BlbGxjaGVjaz0iZmFsc2UiIHBsYWNlaG9sZGVyPSJTM0FSQzQgb3IgZW50ZXIgYSBVM0wi",
    "PjxidXR0b24KICAgICAgICAgICAgICBjbGFzcz0iaWNvbiIgYXJpYS1sYWJlbD0iU2VhcmNoIiBkYXRhLWljb249ImVudGVyIj48L2J1dHRvbj4K",
    "ICAgICAgICAgIDwvZm9ybT4KICAgICAgICAgIDxkaXYgaWQ9InNob3J0Y3V0cyIgYXJpYS1sYWJlbD0iU2hvcnRjdXRzIj48YnV0dG9uIGRhdGEt",
    "dXJsPSJodHRwczovL2dpdGh1Yi5jb20iPjxzcGFuCiAgICAgICAgICAgICAgICBkYXRhLWljb249ImdpdGh1YiI+PC9zcGFuPkdpdEh1YiA8L2J1",
    "dHRvbj48YnV0dG9uCiAgICAgICAgICAgICAgZGF0YS11cmw9Imh0dHBzOi8vd2lraXBlZGlhLm9yZyI+PHNwYW4gY2xhc3M9Indpa2kiPlc8L3Nw",
    "YW4+V2lraXBlZGlhPC9idXR0b24+PGJ1dHRvbgogICAgICAgICAgICAgIGRhdGEtdXJsPSJodHRwczovL3lvdXR1YmUuY29tIj48c3BhbiBkYXRh",
    "LWljb249InZpZGVvIj48L3NwYW4+WW91VHViZTwvYnV0dG9uPjwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICA8L3NlY3Rpb24+CiAgICAgIDxz",
    "ZWN0aW9uIGlkPSJicm93c2VyIiBoaWRkZW4+CiAgICAgICAgPGRpdiBjbGFzcz0iYnJvd3Nlci1iYXIiPjxidXR0b24gaWQ9ImJhY2siIGNsYXNz",
    "PSJpY29uIiBhcmlhLWxhYmVsPSJCYWNrIiB0aXRsZT0iQmFjayIKICAgICAgICAgICAgZGF0YS1pY29uPSJiYWNrIj48L2J1dHRvbj48YnV0dG9u",
    "IGlkPSJmb3J3YXJkIiBjbGFzcz0iaWNvbiIgYXJpYS1sYWJlbD0iRm9yd2FyZCIKICAgICAgICAgICAgdGl0bGU9IkZvcndhcmQiIGRhdGEtaWNv",
    "bj0iZm9yd2FyZCI+CiAgICAgICAgICA8L2J1dHRvbj48YnV0dG9uIGlkPSJyZWxvYWQiIGNsYXNzPSJpY29uIiBhcmlhLWxhYmVsPSJSZWxvYWQi",
    "IHRpdGxlPSJSZWxvYWQiCiAgICAgICAgICAgIGRhdGEtaWNvbj0icmVsb2FkIj48L2J1dHRvbj4KICAgICAgICAgIDxmb3JtIGlkPSJhZGRyZXNz",
    "Rm9ybSI+PGxhYmVsIGNsYXNzPSJzci1vbmx5IiBmb3I9ImFkZHJlc3MiPldlYnNpdGUgYWRkcmVzczwvbGFiZWw+PGlucHV0CiAgICAgICAgICAg",
    "ICAgaWQ9ImFkZHJlc3MiIGF1dG9jb21wbGV0ZT0ib2ZmIiBzcGVsbGNoZWNrPSJmYWxzZSI+PC9mb3JtPjxidXR0b24gaWQ9ImJvb2ttYXJrUGFn",
    "ZSIKICAgICAgICAgICAgY2xhc3M9Imljb24iIGFyaWEtbGFiZWw9IkJvb2ttYXJrIHBhZ2UiIHRpdGxlPSJCb29rbWFyayBwYWdlIiBkYXRhLWlj",
    "b249ImJvb2ttYXJrIgogICAgICAgICAgICBhcmlhLXByZXNzZWQ9ImZhbHNlIj48L2J1dHRvbj48YnV0dG9uIGlkPSJwaW5QYWdlIiBjbGFzcz0i",
    "aWNvbiIgYXJpYS1sYWJlbD0iUGluIHRhYiIKICAgICAgICAgICAgdGl0bGU9IlBpbiB0YWIiIGRhdGEtaWNvbj0icGluIiBhcmlhLXByZXNzZWQ9",
    "ImZhbHNlIj48L2J1dHRvbj48c3BhbiBpZD0ibG9hZGluZyIKICAgICAgICAgICAgY2xhc3M9InNyLW9ubHkiIHJvbGU9InN0YXR1cyI+PC9zcGFu",
    "PgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXYgaWQ9InN0YWdlIj48L2Rpdj4KICAgICAgICA8ZGl2IGlkPSJicm93c2VFcnJvciIgaGlkZGVu",
    "IHJvbGU9InN0YXR1cyI+CiAgICAgICAgICA8aDI+VGhpcyBwYWdlIGNvdWxkIG5vdCBsb2FkPC9oMj4KICAgICAgICAgIDxwIGlkPSJicm93c2VF",
    "cnJvclRleHQiPjwvcD48YnV0dG9uIGlkPSJyZXRyeVBhZ2UiPlRyeSBhZ2FpbjwvYnV0dG9uPgogICAgICAgIDwvZGl2PgogICAgICA8L3NlY3Rp",
    "b24+CiAgICAgIDxzZWN0aW9uIGlkPSJnYW1lcyIgaGlkZGVuPjxpZnJhbWUgaWQ9ImdhbWVzRnJhbWUiIHRpdGxlPSJEcm9wIGdhbWVzIgogICAg",
    "ICAgICAgYWxsb3c9ImF1dG9wbGF5OyBmdWxsc2NyZWVuOyBnYW1lcGFkOyBjbGlwYm9hcmQtd3JpdGUiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFt",
    "ZT4KICAgICAgPC9zZWN0aW9uPgogICAgICA8c2VjdGlvbiBpZD0idHViZSIgaGlkZGVuPjxpZnJhbWUgaWQ9InR1YmVGcmFtZSIgdGl0bGU9IkRy",
    "b3BUdWJlIgogICAgICAgICAgYWxsb3c9ImF1dG9wbGF5OyBmdWxsc2NyZWVuOyBlbmNyeXB0ZWQtbWVkaWE7IHBpY3R1cmUtaW4tcGljdHVyZSIK",
    "ICAgICAgICAgIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT48L3NlY3Rpb24+CiAgICAgIDxzZWN0aW9uIGlkPSJib29rbWFya3MiIGhpZGRlbj4K",
    "ICAgICAgICA8ZGl2IGNsYXNzPSJjb2xsZWN0aW9uLWhlYWRlciI+CiAgICAgICAgICA8cD5TQVZFRDwvcD4KICAgICAgICAgIDxoMT5Cb29rbWFy",
    "a3M8L2gxPjxpbnB1dCBpZD0iYm9va21hcmtTZWFyY2giIHR5cGU9InNlYXJjaCIgcGxhY2Vob2xkZXI9IlMzQVJDNCBib29rbWFya3MiCiAgICAg",
    "ICAgICAgIGFyaWEtbGFiZWw9IlNlYXJjaCBib29rbWFya3MiPgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXYgaWQ9ImJvb2ttYXJrTGlzdCI+",
    "PC9kaXY+CiAgICAgICAgPHAgaWQ9ImJvb2ttYXJrRW1wdHkiPlNhdmUgYSBwYWdlIHdpdGggdGhlIGJvb2ttYXJrIGljb24gaW4gdGhlIGFkZHJl",
    "c3MgYmFyLjwvcD4KICAgICAgPC9zZWN0aW9uPgogICAgICA8c2VjdGlvbiBpZD0iYWkiIGhpZGRlbj48aWZyYW1lIGlkPSJhaUZyYW1lIiB0aXRs",
    "ZT0iRHJvcCBBMSIKICAgICAgICAgIGFsbG93PSJtaWNyb3Bob25lOyBkaXNwbGF5LWNhcHR1cmU7IGNsaXBib2FyZC13cml0ZSIKICAgICAgICAg",
    "IHJlZmVycmVycG9saWN5PSJuby1yZWZlcnJlciI+PC9pZnJhbWU+CiAgICAgIDwvc2VjdGlvbj4KICAgIDwvbWFpbj4KICAgIDxkaWFsb2cgaWQ9",
    "InNldHRpbmdzIj4KICAgICAgPGRpdiBjbGFzcz0iZGlhbG9nLWhlYWRpbmciPgogICAgICAgIDxoMj5TZXR0aW5nczwvaDI+PGJ1dHRvbiBjbGFz",
    "cz0iaWNvbiIgZGF0YS1jbG9zZT0ic2V0dGluZ3MiIGRhdGEtaWNvbj0iY2xvc2UiCiAgICAgICAgICBhcmlhLWxhYmVsPSJDbG9zZSBzZXR0aW5n",
    "cyI+PC9idXR0b24+CiAgICAgIDwvZGl2PjxsYWJlbCBjbGFzcz0ic2V0dGluZyI+UzNBUkM0IGVuZ2luZSA8c2VsZWN0IGlkPSJlbmdpbmUiPgog",
    "ICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iZHVja2R1Y2tnbyI+RHVja0R1Y2tHbzwvb3B0aW9uPgogICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iZ29v",
    "Z2xlIj5Hb29nbGU8L29wdGlvbj4KICAgICAgICAgIDxvcHRpb24gdmFsdWU9ImJpbmciPkJpbmc8L29wdGlvbj4KICAgICAgICA8L3NlbGVjdD48",
    "L2xhYmVsPjxsYWJlbCBjbGFzcz0ic2V0dGluZyI+Q29ubmVjdGlvbjxzZWxlY3QgaWQ9ImNvbm5lY3Rpb25Nb2RlIj4KICAgICAgICAgIDxvcHRp",
    "b24gdmFsdWU9ImF1dG8iPkF1dG9tYXRpYzwvb3B0aW9uPgogICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iYnJpZGdlIj5IVFRQIGJyaWRnZTwvb3B0",
    "aW9uPgogICAgICAgICAgPG9wdGlvbiB2YWx1ZT0iZGlyZWN0Ij5XZWJTb2NrZXQ8L29wdGlvbj4KICAgICAgICA8L3NlbGVjdD48L2xhYmVsPjxi",
    "dXR0b24gaWQ9InRlc3RDb25uZWN0aW9uIiBjbGFzcz0ic2V0dGluZyI+VGVzdCBjb25uZWN0aW9uPHNwYW4KICAgICAgICAgIGlkPSJjb25uZWN0",
    "aW9uU3RhdHVzIiByb2xlPSJzdGF0dXMiPiBOb3QgY29ubmVjdGVkPC9zcGFuPjwvYnV0dG9uPgogICAgICA8ZGl2IGNsYXNzPSJzZXR0aW5nIj5B",
    "cHBlYXJhbmNlPHNwYW4+R3JhcGhpdGU8L3NwYW4+PC9kaXY+PGxhYmVsIGNsYXNzPSJzZXR0aW5nIj4gQ2xvc2UKICAgICAgICBwcmV2ZW50aW9u",
    "PGlucHV0IGlkPSJjbG9zZVByZXZlbnRpb24iIHR5cGU9ImNoZWNrYm94IiByb2xlPSJzd2l0Y2giCiAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5",
    "PSJjbG9zZVByZXZlbnRpb25IZWxwIj4KICAgICAgPC9sYWJlbD4KICAgICAgPHAgaWQ9ImNsb3NlUHJldmVudGlvbkhlbHAiIGNsYXNzPSJzZXR0",
    "aW5nLWhlbHAiPiBBc2sgYmVmb3JlIGNsb3Npbmcgb3IgbGVhdmluZyB0aGlzIHRhYiwgd2hlbgogICAgICAgIHN1cHBvcnRlZCBieSB5b3VyIGJy",
    "b3dzZXIuPC9wPjxidXR0b24gaWQ9ImJsYW5rQ2xvYWsiIGNsYXNzPSJzZXR0aW5nIiB0eXBlPSJidXR0b24iPk9wZW4gaW4KICAgICAgICBhYm91",
    "dDpibGFuazxzcGFuIGNsYXNzPSJzcGFjZXIiPjwvc3Bhbj48c3BhbiBkYXRhLWljb249ImNoZXZyb24iPjwvc3Bhbj48L2J1dHRvbj48bGFiZWwK",
    "ICAgICAgICBjbGFzcz0ic2V0dGluZyI+UmVzdG9yZSB0YWJzPGlucHV0IGlkPSJyZXN0b3JlIiB0eXBlPSJjaGVja2JveCIgcm9sZT0ic3dpdGNo",
    "Ij48L2xhYmVsPjxsYWJlbAogICAgICAgIGNsYXNzPSJzZXR0aW5nIj4gQmxvY2sgcG9wdXBzPGlucHV0IGlkPSJwb3B1cHMiIHR5cGU9ImNoZWNr",
    "Ym94IiByb2xlPSJzd2l0Y2giCiAgICAgICAgICBjaGVja2VkPSJjaGVja2VkIj48L2xhYmVsPjxsYWJlbCBjbGFzcz0ic2V0dGluZyI+QmxvY2sg",
    "YWRzIDxpbnB1dCBpZD0iYWRzIiB0eXBlPSJjaGVja2JveCIKICAgICAgICAgIHJvbGU9InN3aXRjaCIgY2hlY2tlZD0iY2hlY2tlZCI+PC9sYWJl",
    "bD48YnV0dG9uIGlkPSJrZXlzIiBjbGFzcz0ic2V0dGluZyI+PHNwYW4KICAgICAgICAgIGRhdGEtaWNvbj0ia2V5Ij48L3NwYW4+QVBJIGtleXM8",
    "c3BhbiBjbGFzcz0ic3BhY2VyIj48L3NwYW4+PHNwYW4KICAgICAgICAgIGRhdGEtaWNvbj0iY2hldnJvbiI+PC9zcGFuPjwvYnV0dG9uPjxidXR0",
    "b24gaWQ9ImNsZWFyVGFicyIgY2xhc3M9InNldHRpbmciPkNsZWFyIHNhdmVkCiAgICAgICAgdGFiczwvYnV0dG9uPgogICAgPC9kaWFsb2c+CiAg",
    "ICA8ZGlhbG9nIGlkPSJzZXR1cFdpemFyZCIgYXJpYS1sYWJlbGxlZGJ5PSJzZXR1cFRpdGxlIj4KICAgICAgPGZvcm0gaWQ9InNldHVwRm9ybSI+",
    "CiAgICAgICAgPGRpdiBjbGFzcz0ic2V0dXAtYnJhbmQiPjxpbWcgc3JjPSIvYXBwcy9kcm9wL2xvZ28uc3ZnIiBhbHQ9IiIgd2lkdGg9IjI4IiBo",
    "ZWlnaHQ9IjI4Ij4KICAgICAgICAgIDxoMiBpZD0ic2V0dXBUaXRsZSI+U2V0IHVwIERyb3A8L2gyPgogICAgICAgIDwvZGl2PjxsYWJlbCBjbGFz",
    "cz0ic2V0dGluZyIgZm9yPSJzZXR1cEVuZ2luZSI+UzNBUkM0IGVuZ2luZTxzZWxlY3QgaWQ9InNldHVwRW5naW5lIj4KICAgICAgICAgICAgPG9w",
    "dGlvbiB2YWx1ZT0iZHVja2R1Y2tnbyI+RHVja0R1Y2tHbzwvb3B0aW9uPgogICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJnb29nbGUiPkdvb2ds",
    "ZTwvb3B0aW9uPgogICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJiaW5nIj5CaW5nPC9vcHRpb24+CiAgICAgICAgICA8L3NlbGVjdD48L2xhYmVs",
    "PjxsYWJlbCBjbGFzcz0ic2V0dGluZyIgZm9yPSJzZXR1cENsb3NlIj5DbG9zZSBwcmV2ZW50aW9uPGlucHV0CiAgICAgICAgICAgIGlkPSJzZXR1",
    "cENsb3NlIiB0eXBlPSJjaGVja2JveCIgcm9sZT0ic3dpdGNoIj48L2xhYmVsPgogICAgICAgIDxkaXYgY2xhc3M9InNldHVwLWFjdGlvbnMiPjxi",
    "dXR0b24gaWQ9InNldHVwU2tpcCIgdHlwZT0iYnV0dG9uIj5Ta2lwPC9idXR0b24+PGJ1dHRvbgogICAgICAgICAgICB0eXBlPSJzdWJtaXQiIGNs",
    "YXNzPSJzZXR1cC1kb25lIj5Eb25lPC9idXR0b24+PC9kaXY+CiAgICAgIDwvZm9ybT4KICAgIDwvZGlhbG9nPgogICAgPGRpYWxvZyBpZD0iYWNj",
    "b3VudE1lbnUiPgogICAgICA8ZGl2IGNsYXNzPSJkaWFsb2ctaGVhZGluZyI+CiAgICAgICAgPGgyIGlkPSJhY2NvdW50TmFtZSI+RHJvcCBhY2Nv",
    "dW50PC9oMj48YnV0dG9uIGNsYXNzPSJpY29uIiBkYXRhLWNsb3NlPSJhY2NvdW50TWVudSIKICAgICAgICAgIGRhdGEtaWNvbj0iY2xvc2UiIGFy",
    "aWEtbGFiZWw9IkNsb3NlIGFjY291bnQiPjwvYnV0dG9uPgogICAgICA8L2Rpdj4KICAgICAgPHAgaWQ9ImFjY291bnRSb2xlIiBjbGFzcz0iYWNj",
    "b3VudC1yb2xlIiByb2xlPSJzdGF0dXMiPkd1ZXN0IDwvcD48YnV0dG9uIGlkPSJhY2NvdW50QWN0aW9uIgogICAgICAgIGNsYXNzPSJzZXR0aW5n",
    "Ij5TaWduIGluPC9idXR0b24+PGJ1dHRvbiBpZD0iY3JlYXRlQWNjb3VudCIgY2xhc3M9InNldHRpbmciPiBDcmVhdGUgYSBEcm9wCiAgICAgICAg",
    "YWNjb3VudDwvYnV0dG9uPjxidXR0b24gaWQ9ImFjY291bnRLZXlzIiBjbGFzcz0ic2V0dGluZyI+QVBJIGtleXM8L2J1dHRvbj4KICAgIDwvZGlh",
    "bG9nPgogICAgPGRpdiBpZD0ibm90aWNlIiByb2xlPSJzdGF0dXMiIGhpZGRlbj48L2Rpdj4KICA8L2JvZHk+Cgo8L2h0bWw+Cgo="
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
