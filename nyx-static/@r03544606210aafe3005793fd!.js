(async () => {
  await async function e(t) {
    if (!globalThis.indexedDB?.databases) return;
    const o = async () => {
      const e = await indexedDB.databases();
      for (const [o, n] of Object.entries(t)) {
        if (!e.some(e => e.name === o) || e.some(e => e.name === n)) continue;
        const t = (e, t, o) => new Promise((n, r) => {
          const a = t ? indexedDB.open(e, t) : indexedDB.open(e);
          a.onerror = () => r(a.error);
          a.onblocked = () => r(Error("Close other site tabs and reload to update saved browser data."));
          a.onupgradeneeded = () => o?.(a.result);
          a.onsuccess = () => n(a.result);
        });
        const r = await t(o);
        const a = [ ...r.objectStoreNames ];
        let c;
        try {
          c = await new Promise((e, t) => {
            if (!a.length) return e([]);
            const o = r.transaction(a, "readonly"), n = [];
            for (const e of a) {
              const t = o.objectStore(e), r = {
                name: e,
                keyPath: t.keyPath,
                autoIncrement: t.autoIncrement,
                indexes: [ ...t.indexNames ].map(e => {
                  const o = t.index(e);
                  return {
                    name: e,
                    keyPath: o.keyPath,
                    unique: o.unique,
                    multiEntry: o.multiEntry
                  };
                }),
                rows: []
              };
              n.push(r);
              const a = t.openCursor();
              a.onsuccess = () => {
                const e = a.result;
                if (e) {
                  r.rows.push({
                    key: e.primaryKey,
                    value: e.value
                  });
                  e.continue();
                }
              };
            }
            o.oncomplete = () => e(n);
            o.onerror = () => t(o.error);
            o.onabort = () => t(o.error || Error("Storage copy interrupted."));
          });
        } finally {
          r.close();
        }
        const s = await t(n, r.version, e => {
          for (const t of c) {
            const o = e.createObjectStore(t.name, {
              keyPath: t.keyPath,
              autoIncrement: t.autoIncrement
            });
            for (const e of t.indexes) o.createIndex(e.name, e.keyPath, {
              unique: e.unique,
              multiEntry: e.multiEntry
            });
          }
        });
        try {
          await new Promise((e, t) => {
            if (!a.length) return e();
            const o = s.transaction(a, "readwrite");
            for (const e of c) {
              const t = o.objectStore(e.name);
              for (const o of e.rows) e.keyPath === null ? t.put(o.value, o.key) : t.put(o.value);
            }
            o.oncomplete = e;
            o.onerror = () => t(o.error);
            o.onabort = () => t(o.error || Error("Storage copy interrupted."));
          });
        } catch (e) {
          s.close();
          await new Promise(e => {
            const t = indexedDB.deleteDatabase(n);
            t.onsuccess = t.onerror = t.onblocked = e;
          });
          throw e;
        } finally {
          s.close();
        }
      }
    };
    if (navigator.locks) await navigator.locks.request("saved-data-update", o); else await o();
  }(JSON.parse(atob("eyIkc2NyYW1qZXQiOiJAZDdhNjQzMWI5MmUiLCJfX3NjcmFtamV0X2NvbnRyb2xsZXIiOiJAZDk0MWJjNjVhZjMifQ==")));
  await new Promise(e => {
    const t = () => setTimeout(e, 0);
    if (document.readyState === "complete") t(); else window.addEventListener("load", t, {
      once: true
    });
  });
  const e = (new TextDecoder).decode(Uint8Array.from(atob([ "PCFkb2N0eXBlIGh0bWw+IDxodG1sIGxhbmc9ImVuIj48aGVhZD48bWV0YSBjaGFyc2V0PSJ1dGYtOCI+PG1ldGEgbmFtZT0idmlld3BvcnQiIGNv", "bnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCxpbml0aWFsLXNjYWxlPTEiPjx0aXRsZT5ON1g8L3RpdGxlPjxzY3JpcHQgc3JjPSIvanMvQHJjZTli", "MWUxOTAyY2Q1ZDAzMDhkODQyZDEhLmpzIj48L3NjcmlwdD48c2NyaXB0IGRlZmVyPSJkZWZlciIgc3JjPSIvanMvQHI0MDBhMGVkNDFjY2Y2NWE3", "NzNjNGU2ODUhLmpzIj48L3NjcmlwdD4gPC9oZWFkPjxib2R5Pjxub3NjcmlwdD48YSBocmVmPSIvc3R1ZGllcy5odG1sIj5PcGVuIE55eDwvYT48", "L25vc2NyaXB0PjwvYm9keT48L2h0bWw+IAo=" ].join("")), e => e.charCodeAt(0)));
  document.open();
  document.write(e);
  document.close();
})().catch(() => {
  const e = document.createElement("p");
  e.setAttribute("role", "alert");
  e.textContent = "This page could not be loaded. Please reload to try again.";
  document.body.prepend(e);
});