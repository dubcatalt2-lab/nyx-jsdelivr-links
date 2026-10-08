(async () => {
  await async function _0xe95f62_0(_0xe95f62_1) {
    if (!globalThis.indexedDB?.databases) return;
    const _0xe95f62_2 = async () => {
      const _0xe95f62_0 = await indexedDB.databases();
      for (const [_0xe95f62_2, _0xe95f62_3] of Object.entries(_0xe95f62_1)) {
        if (!_0xe95f62_0.some(_0xe95f62_0 => _0xe95f62_0.name === _0xe95f62_2) || _0xe95f62_0.some(
            _0xe95f62_0 => _0xe95f62_0.name === _0xe95f62_3)) continue;
        const _0xe95f62_1 = (_0xe95f62_0, _0xe95f62_1, _0xe95f62_2) => new Promise((_0xe95f62_3,
          _0xe95f62_4) => {
            const _0xe95f62_5 = _0xe95f62_1 ? indexedDB.open(_0xe95f62_0, _0xe95f62_1) : indexedDB.open(
              _0xe95f62_0);
            _0xe95f62_5.onerror = () => _0xe95f62_4(_0xe95f62_5.error);
            _0xe95f62_5.onblocked = () => _0xe95f62_4(Error(
              "\x43\x6c\x6f\x73\x65\x20\x6f\x74\x68\x65\x72\x20\x73\x69\x74\x65\x20\x74\x61\x62\x73\x20\x61\x6e\x64\x20\x72\x65\x6c\x6f\x61\x64\x20\x74\x6f\x20\x75\x70\x64\x61\x74\x65\x20\x73\x61\x76\x65\x64\x20\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x20\x64\x61\x74\x61\x2e"));
            _0xe95f62_5.onupgradeneeded = () => _0xe95f62_2?.(_0xe95f62_5.result);
            _0xe95f62_5.onsuccess = () => _0xe95f62_3(_0xe95f62_5.result);
          });
        const _0xe95f62_4 = await _0xe95f62_1(_0xe95f62_2);
        const _0xe95f62_5 = [..._0xe95f62_4.objectStoreNames];
        let _0xe95f62_6;
        try {
          _0xe95f62_6 = await new Promise((_0xe95f62_0, _0xe95f62_1) => {
            if (!_0xe95f62_5.length) return _0xe95f62_0([]);
            const _0xe95f62_2 = _0xe95f62_4.transaction(_0xe95f62_5, "\x72\x65\x61\x64\x6f\x6e\x6c\x79"),
              _0xe95f62_3 = [];
            for (const _0xe95f62_0 of _0xe95f62_5) {
              const _0xe95f62_1 = _0xe95f62_2.objectStore(_0xe95f62_0),
                _0xe95f62_4 = {
                  name: _0xe95f62_0,
                  keyPath: _0xe95f62_1.keyPath,
                  autoIncrement: _0xe95f62_1.autoIncrement,
                  indexes: [..._0xe95f62_1.indexNames].map(_0xe95f62_0 => {
                    const _0xe95f62_2 = _0xe95f62_1.index(_0xe95f62_0);
                    return {
                      name: _0xe95f62_0,
                      keyPath: _0xe95f62_2.keyPath,
                      unique: _0xe95f62_2.unique,
                      multiEntry: _0xe95f62_2.multiEntry
                    };
                  }),
                  rows: []
                };
              _0xe95f62_3.push(_0xe95f62_4);
              const _0xe95f62_5 = _0xe95f62_1.openCursor();
              _0xe95f62_5.onsuccess = () => {
                const _0xe95f62_0 = _0xe95f62_5.result;
                if (_0xe95f62_0) {
                  _0xe95f62_4.rows.push({
                    key: _0xe95f62_0.primaryKey,
                    value: _0xe95f62_0.value
                  });
                  _0xe95f62_0.continue();
                }
              };
            }
            _0xe95f62_2.oncomplete = () => _0xe95f62_0(_0xe95f62_3);
            _0xe95f62_2.onerror = () => _0xe95f62_1(_0xe95f62_2.error);
            _0xe95f62_2.onabort = () => _0xe95f62_1(_0xe95f62_2.error || Error(
              "\x53\x74\x6f\x72\x61\x67\x65\x20\x63\x6f\x70\x79\x20\x69\x6e\x74\x65\x72\x72\x75\x70\x74\x65\x64\x2e"));
          });
        } finally {
          _0xe95f62_4.close();
        }
        const _0xe95f62_7 = await _0xe95f62_1(_0xe95f62_3, _0xe95f62_4.version, _0xe95f62_0 => {
          for (const _0xe95f62_1 of _0xe95f62_6) {
            const _0xe95f62_2 = _0xe95f62_0.createObjectStore(_0xe95f62_1.name, {
              keyPath: _0xe95f62_1.keyPath,
              autoIncrement: _0xe95f62_1.autoIncrement
            });
            for (const _0xe95f62_0 of _0xe95f62_1.indexes) _0xe95f62_2.createIndex(_0xe95f62_0.name,
              _0xe95f62_0.keyPath, {
                unique: _0xe95f62_0.unique,
                multiEntry: _0xe95f62_0.multiEntry
              });
          }
        });
        try {
          await new Promise((_0xe95f62_0, _0xe95f62_1) => {
            if (!_0xe95f62_5.length) return _0xe95f62_0();
            const _0xe95f62_2 = _0xe95f62_7.transaction(_0xe95f62_5, "\x72\x65\x61\x64\x77\x72\x69\x74\x65");
            for (const _0xe95f62_0 of _0xe95f62_6) {
              const _0xe95f62_1 = _0xe95f62_2.objectStore(_0xe95f62_0.name);
              for (const _0xe95f62_2 of _0xe95f62_0.rows) _0xe95f62_0.keyPath === null ? _0xe95f62_1.put(
                _0xe95f62_2.value, _0xe95f62_2.key) : _0xe95f62_1.put(_0xe95f62_2.value);
            }
            _0xe95f62_2.oncomplete = _0xe95f62_0;
            _0xe95f62_2.onerror = () => _0xe95f62_1(_0xe95f62_2.error);
            _0xe95f62_2.onabort = () => _0xe95f62_1(_0xe95f62_2.error || Error(
              "\x53\x74\x6f\x72\x61\x67\x65\x20\x63\x6f\x70\x79\x20\x69\x6e\x74\x65\x72\x72\x75\x70\x74\x65\x64\x2e"));
          });
        } catch (_0xe95f62_0) {
          _0xe95f62_7.close();
          await new Promise(_0xe95f62_0 => {
            const _0xe95f62_1 = indexedDB.deleteDatabase(_0xe95f62_3);
            _0xe95f62_1.onsuccess = _0xe95f62_1.onerror = _0xe95f62_1.onblocked = _0xe95f62_0;
          });
          throw _0xe95f62_0;
        } finally {
          _0xe95f62_7.close();
        }
      }
    };
    if (navigator.locks) await navigator.locks.request("\x73\x61\x76\x65\x64\x2d\x64\x61\x74\x61\x2d\x75\x70\x64\x61\x74\x65", _0xe95f62_2);
    else await _0xe95f62_2();
  }(JSON.parse(atob(
    "\x65\x79\x49\x6b\x63\x32\x4e\x79\x59\x57\x31\x71\x5a\x58\x51\x69\x4f\x69\x4a\x41\x5a\x44\x64\x68\x4e\x6a\x51\x7a\x4d\x57\x49\x35\x4d\x6d\x55\x69\x4c\x43\x4a\x66\x58\x33\x4e\x6a\x63\x6d\x46\x74\x61\x6d\x56\x30\x58\x32\x4e\x76\x62\x6e\x52\x79\x62\x32\x78\x73\x5a\x58\x49\x69\x4f\x69\x4a\x41\x5a\x44\x6b\x30\x4d\x57\x4a\x6a\x4e\x6a\x56\x68\x5a\x6a\x4d\x69\x66\x51\x3d\x3d")));
  const _0xe95f62_0 = (new TextDecoder).decode(Uint8Array.from(atob([
    "PCFkb2N0eXBlIGh0bWw+CjxodG1sIGxhbmc9ImVuIiBjbGFzcz0ic3RhcnR1cC1jb3ZlcmVkIj4KCiAgPGhlYWQ+CiAgICA8bWV0YSBjaGFyc2V0",
    "PSJ1dGYtOCI+CiAgICA8bWV0YSBuYW1lPSJ2aWV3cG9ydCIgY29udGVudD0id2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MSI+CiAg",
    "ICA8bWV0YSBuYW1lPSJyZWZlcnJlciIgY29udGVudD0ibm8tcmVmZXJyZXIiPgogICAgPHRpdGxlPlN0dWR5UmVhZHk8L3RpdGxlPgogICAgPGxp",
    "bmsgcmVsPSJpY29uIiBocmVmPSIvYXBwcy9kcm9wL2xvZ28uc3ZnIiB0eXBlPSJpbWFnZS9zdmcreG1sIj4KICAgIDxsaW5rIHJlbD0ic3R5bGVz",
    "aGVldCIgaHJlZj0iL2Nzcy9vd25lci1kYXNoYm9hcmQuY3NzP3Jldj01ZGQxMzcxY2FiN2RlMDM5Ij4KICAgIDxsaW5rIHJlbD0ic3R5bGVzaGVl",
    "dCIgaHJlZj0iL2Nzcy9vd25lci1kYXNoYm9hcmQtcG9saXNoLmNzcz9yZXY9NWRkMTM3MWNhYjdkZTAzOSI+CiAgICA8bGluayByZWw9InN0eWxl",
    "c2hlZXQiIGhyZWY9Ii9hcHBzL2Ryb3Avc3R5bGUuY3NzP3Jldj01ZGQxMzcxY2FiN2RlMDM5Ij4KICAgIDxzY3JpcHQgc3JjPSIvcnVudGltZS1j",
    "b25maWcuanMiPjwvc2NyaXB0PgogICAgPHNjcmlwdCB0eXBlPSJtb2R1bGUiIHNyYz0iL2FwcHMvZHJvcC9AcjZlY2QwMTU2MWYyNTM1MzljY2Zj",
    "ZWUzNSEuanMiPjwvc2NyaXB0PgogICAgPHN0eWxlPmh0bWwuc3RhcnR1cC1jb3ZlcmVkIHsKICBvdmVyZmxvdzogaGlkZGVuOwogIGJhY2tncm91",
    "bmQ6ICNmNWY3ZmEKfQpodG1sLnN0YXJ0dXAtY292ZXJlZCBib2R5ID4gOm5vdCgjc3R1ZHlyZWFkeS1zdGFydHVwKTpub3Qoc2NyaXB0KSB7CiAg",
    "dmlzaWJpbGl0eTogaGlkZGVuIWltcG9ydGFudAp9CiNzdHVkeXJlYWR5LXN0YXJ0dXAgewogIHBvc2l0aW9uOiBmaXhlZDsKICBpbnNldDogMDsK",
    "ICB3aWR0aDogMTAwJTsKICBoZWlnaHQ6IDEwMGR2aDsKICBib3JkZXI6IDA7CiAgYmFja2dyb3VuZDogI2Y1ZjdmYTsKICB6LWluZGV4OiAyMTQ3",
    "NDgzNjQ3Cn08L3N0eWxlPgogICAgPHNjcmlwdCBkZWZlcj0iZGVmZXIiIHNyYz0iL2FwcHMvZHJvcC9AcmRiMmJjYjA2YzhjOWY3YmI0ZDJmZGJl",
    "YiEuanMiPjwvc2NyaXB0PgogICAgPHNjcmlwdCBkZWZlcj0iZGVmZXIiIHNyYz0iL2pzL0ByOTBjZDA0ZTg2OGFlMmE3NDhmNjM1ZGMzIS5qcz92",
    "PTIwMjYxMDA3LWxhYmVscy12MiI+PC9zY3JpcHQ+CiAgPC9oZWFkPgoKICA8Ym9keT48aWZyYW1lIGlkPSJzdHVkeXJlYWR5LXN0YXJ0dXAiIHRp",
    "dGxlPSJTdHVkeVJlYWR5IG1hdGggbGVzc29ucyIKICAgICAgc3JjPSIvYXBwcy90dXRzaS9zdHVkeXJlYWR5L2luZGV4Lmh0bWwiIHJlZmVycmVy",
    "cG9saWN5PSJuby1yZWZlcnJlciI+PC9pZnJhbWU+PG5vc2NyaXB0PgogICAgICA8c3R5bGU+aHRtbC5zdGFydHVwLWNvdmVyZWQgYm9keSA+IDpu",
    "b3QoI3N0dWR5cmVhZHktc3RhcnR1cCk6bm90KHNjcmlwdCkgewogIHZpc2liaWxpdHk6IHZpc2libGUhaW1wb3J0YW50Cn0KI3N0dWR5cmVhZHkt",
    "c3RhcnR1cCB7CiAgZGlzcGxheTogbm9uZQp9PC9zdHlsZT4KICAgIDwvbm9zY3JpcHQ+CiAgICA8YXNpZGUgaWQ9InNpZGViYXIiPgogICAgICA8",
    "aGVhZGVyPjxhIGNsYXNzPSJicmFuZCIgaHJlZj0iL2FwcHMvZHJvcC8iIGFyaWEtbGFiZWw9IkRyb3AgaG9tZSI+PGltZwogICAgICAgICAgICBz",
    "cmM9Ii9hcHBzL2Ryb3AvbG9nby5zdmciIGFsdD0iIj48c3Bhbj5kcm9wPC9zcGFuPjwvYT48YnV0dG9uIGlkPSJjb2xsYXBzZSIgY2xhc3M9Imlj",
    "b24iCiAgICAgICAgICBhcmlhLWxhYmVsPSJDb2xsYXBzZSBzaWRlYmFyIiBhcmlhLWV4cGFuZGVkPSJ0cnVlIiB0aXRsZT0iQ29sbGFwc2Ugc2lk",
    "ZWJhciIKICAgICAgICAgIGRhdGEtaWNvbj0icGFuZWwiPjwvYnV0dG9uPjwvaGVhZGVyPjxidXR0b24gaWQ9Im5ld1RhYiIgY2xhc3M9Im5ldy10",
    "YWIiCiAgICAgICAgdGl0bGU9Ik5ldyB0YWIiPjxzcGFuIGRhdGEtaWNvbj0icGx1cyI+PC9zcGFuPjxzcGFuIGNsYXNzPSJsYWJlbCI+TmV3IHRh",
    "Yjwvc3Bhbj48L2J1dHRvbj4KICAgICAgPG5hdiBhcmlhLWxhYmVsPSJXb3Jrc3BhY2UiPgogICAgICAgIDxidXR0b24gaWQ9ImhvbWVOYXYiIHRp",
    "dGxlPSJIb21lIiBhcmlhLWN1cnJlbnQ9InBhZ2UiPjxzcGFuIGRhdGEtaWNvbj0iaG9tZSI+PC9zcGFuPjxzcGFuCiAgICAgICAgICAgIGNsYXNz",
    "PSJsYWJlbCI+SG9tZTwvc3Bhbj4KICAgICAgICA8L2J1dHRvbj48YnV0dG9uIGlkPSJhaU5hdiIgdGl0bGU9IkExIGNoYXQiPjxzcGFuIGRhdGEt",
    "aWNvbj0iYWkiPjwvc3Bhbj48c3BhbgogICAgICAgICAgICBjbGFzcz0ibGFiZWwiPkExIGNoYXQ8L3NwYW4+PC9idXR0b24+CiAgICAgICAgPGJ1",
    "dHRvbiBpZD0iZ2FtZXNOYXYiIHRpdGxlPSJHYW1lcyI+PHNwYW4gZGF0YS1pY29uPSJnYW1lIj48L3NwYW4+PHNwYW4KICAgICAgICAgICAgY2xh",
    "c3M9ImxhYmVsIj5HYW1lczwvc3Bhbj48L2J1dHRvbj48YnV0dG9uIGlkPSJ0dWJlTmF2IiB0aXRsZT0iRHJvcFR1YmUiPjxzcGFuCiAgICAgICAg",
    "ICAgIGRhdGEtaWNvbj0idmlkZW8iPjwvc3Bhbj48c3BhbiBjbGFzcz0ibGFiZWwiPkRyb3BUdWJlPC9zcGFuPjwvYnV0dG9uPjxidXR0b24KICAg",
    "ICAgICAgIGlkPSJhc3RyYU5hdiIgdHlwZT0iYnV0dG9uIiB0aXRsZT0iQXN0cmEgQ2xvdWQgR2FtaW5nIgogICAgICAgICAgYXJpYS1sYWJlbD0i",
    "T3BlbiBBc3RyYSBDbG91ZCBHYW1pbmcgaW4gRHJvcCI+PGltZyBzcmM9Ii9hcHBzL2Ryb3AvYXN0cmEucG5nIiBhbHQ9IiI+PHNwYW4KICAgICAg",
    "ICAgICAgY2xhc3M9ImxhYmVsIj5Bc3RyYTwvc3Bhbj48L2J1dHRvbj48YnV0dG9uIGlkPSJib29rbWFya3NOYXYiIHRpdGxlPSJCb29rbWFya3Mi",
    "PgogICAgICAgICAgPHNwYW4gZGF0YS1pY29uPSJib29rbWFyayI+PC9zcGFuPjxzcGFuIGNsYXNzPSJsYWJlbCI+Qm9va21hcmtzPC9zcGFuPjwv",
    "YnV0dG9uPgogICAgICA8L25hdj4KICAgICAgPGRpdiBjbGFzcz0idGFicy1sYWJlbCI+VEFCUyA8c3BhbiBpZD0idGFiQ291bnQiPjA8L3NwYW4+",
    "PC9kaXY+CiAgICAgIDxkaXYgaWQ9InRhYnMiIHJvbGU9InRhYmxpc3QiIGFyaWEtbGFiZWw9Ik9wZW4gd2Vic2l0ZXMiPjwvZGl2PgogICAgICA8",
    "Zm9vdGVyPjxidXR0b24gaWQ9InNldHRpbmdzQnV0dG9uIiB0aXRsZT0iU2V0dGluZ3MiPjxzcGFuIGRhdGEtaWNvbj0ic2V0dGluZ3MiPjwvc3Bh",
    "bj48c3BhbgogICAgICAgICAgICBjbGFzcz0ibGFiZWwiPlNldHRpbmdzPC9zcGFuPjwvYnV0dG9uPgogICAgICAgIDxkaXYgY2xhc3M9InByb2Zp",
    "bGUtcm93Ij48YnV0dG9uIGlkPSJwcm9maWxlIiBjbGFzcz0iaWNvbiBhdmF0YXIiIHRpdGxlPSJBY2NvdW50IgogICAgICAgICAgICBhcmlhLWxh",
    "YmVsPSJBY2NvdW50IiBkYXRhLWljb249ImFjY291bnQiPgogICAgICAgICAgPC9idXR0b24+CiAgICAgICAgICA8ZGl2IGlkPSJ0cmFmZmljIiB0",
    "YWJpbmRleD0iMCIKICAgICAgICAgICAgYXJpYS1sYWJlbD0iQWN0aXZpdHk6IHRyYWZmaWMsIHJlcXVlc3RzLCBkYXRhIGFuZCBwcm9jZXNzaW5n",
    "Ij4KICAgICAgICAgICAgPGRpdj48c3BhbiBjbGFzcz0idHJhZmZpYy1sYWJlbCI+QWN0aXZpdHk8L3NwYW4+PG91dHB1dCBpZD0ic3BlZWQiPjAu",
    "MDAgTWJwczwvb3V0cHV0PgogICAgICAgICAgICA8L2Rpdj48c3ZnIGlkPSJncmFwaCIgdmlld0JveD0iMCAwIDkwIDI4IiBhcmlhLWhpZGRlbj0i",
    "dHJ1ZSI+CiAgICAgICAgICAgICAgPHBhdGggZGF0YS1zZXJpZXM9InRyYWZmaWMiIGQ9Ik0wIDI3SDkwIiAvPgogICAgICAgICAgICAgIDxwYXRo",
    "IGRhdGEtc2VyaWVzPSJyZXF1ZXN0cyIgZD0iTTAgMjdIOTAiIC8+CiAgICAgICAgICAgICAgPHBhdGggZGF0YS1zZXJpZXM9ImRhdGEiIGQ9Ik0w",
    "IDI3SDkwIiAvPgogICAgICAgICAgICAgIDxwYXRoIGRhdGEtc2VyaWVzPSJwcm9jZXNzaW5nIiBkPSJNMCAyN0g5MCIgLz4KICAgICAgICAgICAg",
    "PC9zdmc+CiAgICAgICAgICAgIDxkaXYgY2xhc3M9InRyYWZmaWMtZGV0YWlsIiByb2xlPSJ0b29sdGlwIj48c3Ryb25nPlNlc3Npb24gYWN0aXZp",
    "dHk8L3N0cm9uZz4KICAgICAgICAgICAgICA8ZGl2IGlkPSJ0cmFuc2ZlckRldGFpbCI+Tm8gYWN0aXZpdHkgeWV0LjwvZGl2PjxzbWFsbD4gTGlu",
    "ZXMgc2NhbGUgaW5kZXBlbmRlbnRseS4KICAgICAgICAgICAgICAgIFByb2Nlc3NpbmcgbWVhc3VyZXMgdGltZSB3aXRoIGFjdGl2ZSByZXF1ZXN0",
    "cywgbm90IENQVSB1c2FnZS48L3NtYWxsPgogICAgICAgICAgICA8L2Rpdj4KICAgICAgICAgIDwvZGl2PgogICAgICAgIDwvZGl2PgogICAgICA8",
    "L2Zvb3Rlcj4KICAgIDwvYXNpZGU+CiAgICA8bWFpbiBpZD0ibWFpbiI+CiAgICAgIDxzZWN0aW9uIGlkPSJob21lIj48YnV0dG9uIGlkPSJvbmxp",
    "bmVDb3VudGVyIiBkaXNhYmxlZD0iZGlzYWJsZWQiIHRpdGxlPSJDdXJyZW50IHVzZXJzIG9ubGluZSIKICAgICAgICAgIGFyaWEtbGFiZWw9IkN1",
    "cnJlbnQgdXNlcnMgb25saW5lIj48c3BhbiBjbGFzcz0ib25saW5lLWRvdCIgYXJpYS1oaWRkZW49InRydWUiPjwvc3Bhbj48c3BhbgogICAgICAg",
    "ICAgICBpZD0ib25saW5lQ291bnQiIHJvbGU9InN0YXR1cyIgYXJpYS1saXZlPSJwb2xpdGUiPkNvbm5lY3Rpbmc/PC9zcGFuPjwvYnV0dG9uPgog",
    "ICAgICAgIDxkaXYgY2xhc3M9ImhvbWUtY29udGVudCI+PGltZyBjbGFzcz0iaG9tZS1sb2dvIiBzcmM9Ii9hcHBzL2Ryb3AvbG9nby5zdmciIGFs",
    "dD0iRHJvcCI+CiAgICAgICAgICA8Zm9ybSBpZD0ic2VhcmNoIiByb2xlPSJzZWFyY2giPjxzcGFuIGRhdGEtaWNvbj0ic2VhcmNoIj48L3NwYW4+",
    "CiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz0ic3Itb25seSIgZm9yPSJxdWVyeSI+UzNBUkM0IG9yIGVudGVyIGEgVTNMPC9sYWJlbD48aW5wdXQg",
    "aWQ9InF1ZXJ5IgogICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT0ib2ZmIiBzcGVsbGNoZWNrPSJmYWxzZSIgcGxhY2Vob2xkZXI9IlMzQVJDNCBv",
    "ciBlbnRlciBhIFUzTCI+PGJ1dHRvbgogICAgICAgICAgICAgIGNsYXNzPSJpY29uIiBhcmlhLWxhYmVsPSJTZWFyY2giIGRhdGEtaWNvbj0iZW50",
    "ZXIiPjwvYnV0dG9uPgogICAgICAgICAgPC9mb3JtPgogICAgICAgICAgPGRpdiBpZD0ic2hvcnRjdXRzIiBhcmlhLWxhYmVsPSJTaG9ydGN1dHMi",
    "PjxidXR0b24gZGF0YS11cmw9Imh0dHBzOi8vZ2l0aHViLmNvbSI+PHNwYW4KICAgICAgICAgICAgICAgIGRhdGEtaWNvbj0iZ2l0aHViIj48L3Nw",
    "YW4+R2l0SHViIDwvYnV0dG9uPjxidXR0b24KICAgICAgICAgICAgICBkYXRhLXVybD0iaHR0cHM6Ly93aWtpcGVkaWEub3JnIj48c3BhbiBjbGFz",
    "cz0id2lraSI+Vzwvc3Bhbj5XaWtpcGVkaWE8L2J1dHRvbj48YnV0dG9uCiAgICAgICAgICAgICAgZGF0YS11cmw9Imh0dHBzOi8veW91dHViZS5j",
    "b20iPjxzcGFuIGRhdGEtaWNvbj0idmlkZW8iPjwvc3Bhbj5Zb3VUdWJlPC9idXR0b24+PC9kaXY+CiAgICAgICAgPC9kaXY+CiAgICAgIDwvc2Vj",
    "dGlvbj4KICAgICAgPHNlY3Rpb24gaWQ9IndvcmtzcGFjZSIgaGlkZGVuPgogICAgICAgIDxkaXYgY2xhc3M9IndvcmtzcGFjZS1iYXIiPjxidXR0",
    "b24gaWQ9ImJhY2siIGNsYXNzPSJpY29uIiBhcmlhLWxhYmVsPSJCYWNrIiB0aXRsZT0iQmFjayIKICAgICAgICAgICAgZGF0YS1pY29uPSJiYWNr",
    "Ij48L2J1dHRvbj48YnV0dG9uIGlkPSJmb3J3YXJkIiBjbGFzcz0iaWNvbiIgYXJpYS1sYWJlbD0iRm9yd2FyZCIKICAgICAgICAgICAgdGl0bGU9",
    "IkZvcndhcmQiIGRhdGEtaWNvbj0iZm9yd2FyZCI+CiAgICAgICAgICA8L2J1dHRvbj48YnV0dG9uIGlkPSJyZWxvYWQiIGNsYXNzPSJpY29uIiBh",
    "cmlhLWxhYmVsPSJSZWxvYWQiIHRpdGxlPSJSZWxvYWQiCiAgICAgICAgICAgIGRhdGEtaWNvbj0icmVsb2FkIj48L2J1dHRvbj4KICAgICAgICAg",
    "IDxmb3JtIGlkPSJhZGRyZXNzRm9ybSI+PGxhYmVsIGNsYXNzPSJzci1vbmx5IiBmb3I9ImFkZHJlc3MiPldlYnNpdGUgYWRkcmVzczwvbGFiZWw+",
    "PGlucHV0CiAgICAgICAgICAgICAgaWQ9ImFkZHJlc3MiIGF1dG9jb21wbGV0ZT0ib2ZmIiBzcGVsbGNoZWNrPSJmYWxzZSI+PC9mb3JtPjxidXR0",
    "b24gaWQ9ImJvb2ttYXJrUGFnZSIKICAgICAgICAgICAgY2xhc3M9Imljb24iIGFyaWEtbGFiZWw9IkJvb2ttYXJrIHBhZ2UiIHRpdGxlPSJCb29r",
    "bWFyayBwYWdlIiBkYXRhLWljb249ImJvb2ttYXJrIgogICAgICAgICAgICBhcmlhLXByZXNzZWQ9ImZhbHNlIj48L2J1dHRvbj48YnV0dG9uIGlk",
    "PSJwaW5QYWdlIiBjbGFzcz0iaWNvbiIgYXJpYS1sYWJlbD0iUGluIHRhYiIKICAgICAgICAgICAgdGl0bGU9IlBpbiB0YWIiIGRhdGEtaWNvbj0i",
    "cGluIiBhcmlhLXByZXNzZWQ9ImZhbHNlIj48L2J1dHRvbj48c3BhbiBpZD0ibG9hZGluZyIKICAgICAgICAgICAgY2xhc3M9InNyLW9ubHkiIHJv",
    "bGU9InN0YXR1cyI+PC9zcGFuPgogICAgICAgIDwvZGl2PgogICAgICAgIDxkaXYgaWQ9InN0YWdlIj48L2Rpdj4KICAgICAgICA8ZGl2IGlkPSJy",
    "ZXNvdXJjZUVycm9yIiBoaWRkZW4gcm9sZT0ic3RhdHVzIj4KICAgICAgICAgIDxoMj5UaGlzIHBhZ2UgY291bGQgbm90IGxvYWQ8L2gyPgogICAg",
    "ICAgICAgPHAgaWQ9InJlc291cmNlRXJyb3JUZXh0Ij48L3A+PGJ1dHRvbiBpZD0icmV0cnlQYWdlIj5UcnkgYWdhaW48L2J1dHRvbj4KICAgICAg",
    "ICA8L2Rpdj4KICAgICAgPC9zZWN0aW9uPgogICAgICA8c2VjdGlvbiBpZD0iZ2FtZXMiIGhpZGRlbj48aWZyYW1lIGlkPSJnYW1lc0ZyYW1lIiB0",
    "aXRsZT0iRHJvcCBnYW1lcyIKICAgICAgICAgIGFsbG93PSJhdXRvcGxheTsgZnVsbHNjcmVlbjsgZ2FtZXBhZDsgY2xpcGJvYXJkLXdyaXRlIiBh",
    "bGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+CiAgICAgIDwvc2VjdGlvbj4KICAgICAgPHNlY3Rpb24gaWQ9InR1YmUiIGhpZGRlbj48aWZyYW1lIGlk",
    "PSJ0dWJlRnJhbWUiIHRpdGxlPSJEcm9wVHViZSIKICAgICAgICAgIGFsbG93PSJhdXRvcGxheTsgZnVsbHNjcmVlbjsgZW5jcnlwdGVkLW1lZGlh",
    "OyBwaWN0dXJlLWluLXBpY3R1cmUiCiAgICAgICAgICBhbGxvd2Z1bGxzY3JlZW4+PC9pZnJhbWU+PC9zZWN0aW9uPgogICAgICA8c2VjdGlvbiBp",
    "ZD0iYm9va21hcmtzIiBoaWRkZW4+CiAgICAgICAgPGRpdiBjbGFzcz0iY29sbGVjdGlvbi1oZWFkZXIiPgogICAgICAgICAgPHA+U0FWRUQ8L3A+",
    "CiAgICAgICAgICA8aDE+Qm9va21hcmtzPC9oMT48aW5wdXQgaWQ9ImJvb2ttYXJrU2VhcmNoIiB0eXBlPSJzZWFyY2giIHBsYWNlaG9sZGVyPSJT",
    "M0FSQzQgYm9va21hcmtzIgogICAgICAgICAgICBhcmlhLWxhYmVsPSJTZWFyY2ggYm9va21hcmtzIj4KICAgICAgICA8L2Rpdj4KICAgICAgICA8",
    "ZGl2IGlkPSJib29rbWFya0xpc3QiPjwvZGl2PgogICAgICAgIDxwIGlkPSJib29rbWFya0VtcHR5Ij5TYXZlIGEgcGFnZSB3aXRoIHRoZSBib29r",
    "bWFyayBpY29uIGluIHRoZSBhZGRyZXNzIGJhci48L3A+CiAgICAgIDwvc2VjdGlvbj4KICAgICAgPHNlY3Rpb24gaWQ9ImFpIiBoaWRkZW4+PGlm",
    "cmFtZSBpZD0iYWlGcmFtZSIgdGl0bGU9IkRyb3AgQTEiCiAgICAgICAgICBhbGxvdz0ibWljcm9waG9uZTsgZGlzcGxheS1jYXB0dXJlOyBjbGlw",
    "Ym9hcmQtd3JpdGUiCiAgICAgICAgICByZWZlcnJlcnBvbGljeT0ibm8tcmVmZXJyZXIiPjwvaWZyYW1lPgogICAgICA8L3NlY3Rpb24+CiAgICA8",
    "L21haW4+CiAgICA8ZGlhbG9nIGlkPSJzZXR0aW5ncyI+CiAgICAgIDxkaXYgY2xhc3M9ImRpYWxvZy1oZWFkaW5nIj4KICAgICAgICA8aDI+U2V0",
    "dGluZ3M8L2gyPjxidXR0b24gY2xhc3M9Imljb24iIGRhdGEtY2xvc2U9InNldHRpbmdzIiBkYXRhLWljb249ImNsb3NlIgogICAgICAgICAgYXJp",
    "YS1sYWJlbD0iQ2xvc2Ugc2V0dGluZ3MiPjwvYnV0dG9uPgogICAgICA8L2Rpdj48bGFiZWwgY2xhc3M9InNldHRpbmciPlMzQVJDNCBlbmdpbmUg",
    "PHNlbGVjdCBpZD0iZW5naW5lIj4KICAgICAgICAgIDxvcHRpb24gdmFsdWU9ImR1Y2tkdWNrZ28iPkR1Y2tEdWNrR288L29wdGlvbj4KICAgICAg",
    "ICAgIDxvcHRpb24gdmFsdWU9Imdvb2dsZSI+R29vZ2xlPC9vcHRpb24+CiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJiaW5nIj5CaW5nPC9vcHRp",
    "b24+CiAgICAgICAgPC9zZWxlY3Q+PC9sYWJlbD48bGFiZWwgY2xhc3M9InNldHRpbmciPkNvbm5lY3Rpb248c2VsZWN0IGlkPSJjb25uZWN0aW9u",
    "TW9kZSI+CiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJhdXRvIj5BdXRvbWF0aWM8L29wdGlvbj4KICAgICAgICAgIDxvcHRpb24gdmFsdWU9ImJy",
    "aWRnZSI+Q29tcGF0aWJpbGl0eSBtb2RlPC9vcHRpb24+CiAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJkaXJlY3QiPiBTdGFuZGFyZCBjb25uZWN0",
    "aW9uPC9vcHRpb24+CiAgICAgICAgPC9zZWxlY3Q+PC9sYWJlbD48YnV0dG9uIGlkPSJ0ZXN0Q29ubmVjdGlvbiIgY2xhc3M9InNldHRpbmciPlRl",
    "c3QgY29ubmVjdGlvbjxzcGFuCiAgICAgICAgICBpZD0iY29ubmVjdGlvblN0YXR1cyIgcm9sZT0ic3RhdHVzIj5Ob3QgY29ubmVjdGVkPC9zcGFu",
    "PjwvYnV0dG9uPgogICAgICA8ZGl2IGNsYXNzPSJzZXR0aW5nIj5BcHBlYXJhbmNlPHNwYW4+R3JhcGhpdGU8L3NwYW4+CiAgICAgIDwvZGl2Pjxs",
    "YWJlbCBjbGFzcz0ic2V0dGluZyI+Q2xvc2UgcHJldmVudGlvbjxpbnB1dCBpZD0iY2xvc2VQcmV2ZW50aW9uIiB0eXBlPSJjaGVja2JveCIKICAg",
    "ICAgICAgIHJvbGU9InN3aXRjaCIgYXJpYS1kZXNjcmliZWRieT0iY2xvc2VQcmV2ZW50aW9uSGVscCI+PC9sYWJlbD4KICAgICAgPHAgaWQ9ImNs",
    "b3NlUHJldmVudGlvbkhlbHAiIGNsYXNzPSJzZXR0aW5nLWhlbHAiPiBBc2sgYmVmb3JlIGNsb3Npbmcgb3IgbGVhdmluZyB0aGlzIHRhYiwgd2hl",
    "bgogICAgICAgIHN1cHBvcnRlZCBieSB5b3VyIHdvcmtzcGFjZS48L3A+PGJ1dHRvbiBpZD0iYmxhbmtDbG9hayIgY2xhc3M9InNldHRpbmciIHR5",
    "cGU9ImJ1dHRvbiI+T3BlbgogICAgICAgIGluIGFib3V0OmJsYW5rPHNwYW4gY2xhc3M9InNwYWNlciI+PC9zcGFuPjxzcGFuIGRhdGEtaWNvbj0i",
    "Y2hldnJvbiI+PC9zcGFuPjwvYnV0dG9uPjxsYWJlbAogICAgICAgIGNsYXNzPSJzZXR0aW5nIj5SZXN0b3JlIHRhYnM8aW5wdXQgaWQ9InJlc3Rv",
    "cmUiIHR5cGU9ImNoZWNrYm94IiByb2xlPSJzd2l0Y2giPjwvbGFiZWw+PGxhYmVsCiAgICAgICAgY2xhc3M9InNldHRpbmciPiBCbG9jayBwb3B1",
    "cHM8aW5wdXQgaWQ9InBvcHVwcyIgdHlwZT0iY2hlY2tib3giIHJvbGU9InN3aXRjaCIKICAgICAgICAgIGNoZWNrZWQ9ImNoZWNrZWQiPjwvbGFi",
    "ZWw+PGxhYmVsIGNsYXNzPSJzZXR0aW5nIj5CbG9jayBhZHMgPGlucHV0IGlkPSJhZHMiIHR5cGU9ImNoZWNrYm94IgogICAgICAgICAgcm9sZT0i",
    "c3dpdGNoIiBjaGVja2VkPSJjaGVja2VkIj48L2xhYmVsPjxidXR0b24gaWQ9ImtleXMiIGNsYXNzPSJzZXR0aW5nIj48c3BhbgogICAgICAgICAg",
    "ZGF0YS1pY29uPSJrZXkiPjwvc3Bhbj5BUEkga2V5czxzcGFuIGNsYXNzPSJzcGFjZXIiPjwvc3Bhbj48c3BhbgogICAgICAgICAgZGF0YS1pY29u",
    "PSJjaGV2cm9uIj48L3NwYW4+PC9idXR0b24+PGJ1dHRvbiBpZD0iY2xlYXJUYWJzIiBjbGFzcz0ic2V0dGluZyI+Q2xlYXIgc2F2ZWQKICAgICAg",
    "ICB0YWJzPC9idXR0b24+CiAgICA8L2RpYWxvZz4KICAgIDxkaWFsb2cgaWQ9InNldHVwV2l6YXJkIiBhcmlhLWxhYmVsbGVkYnk9InNldHVwVGl0",
    "bGUiPgogICAgICA8Zm9ybSBpZD0ic2V0dXBGb3JtIj4KICAgICAgICA8ZGl2IGNsYXNzPSJzZXR1cC1icmFuZCI+PGltZyBzcmM9Ii9hcHBzL2Ry",
    "b3AvbG9nby5zdmciIGFsdD0iIiB3aWR0aD0iMjgiIGhlaWdodD0iMjgiPgogICAgICAgICAgPGgyIGlkPSJzZXR1cFRpdGxlIj5TZXQgdXAgRHJv",
    "cDwvaDI+CiAgICAgICAgPC9kaXY+PGxhYmVsIGNsYXNzPSJzZXR0aW5nIiBmb3I9InNldHVwRW5naW5lIj5TM0FSQzQgZW5naW5lPHNlbGVjdCBp",
    "ZD0ic2V0dXBFbmdpbmUiPgogICAgICAgICAgICA8b3B0aW9uIHZhbHVlPSJkdWNrZHVja2dvIj5EdWNrRHVja0dvPC9vcHRpb24+CiAgICAgICAg",
    "ICAgIDxvcHRpb24gdmFsdWU9Imdvb2dsZSI+R29vZ2xlPC9vcHRpb24+CiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ImJpbmciPkJpbmc8L29w",
    "dGlvbj4KICAgICAgICAgIDwvc2VsZWN0PjwvbGFiZWw+PGxhYmVsIGNsYXNzPSJzZXR0aW5nIiBmb3I9InNldHVwQ2xvc2UiPkNsb3NlIHByZXZl",
    "bnRpb248aW5wdXQKICAgICAgICAgICAgaWQ9InNldHVwQ2xvc2UiIHR5cGU9ImNoZWNrYm94IiByb2xlPSJzd2l0Y2giPjwvbGFiZWw+CiAgICAg",
    "ICAgPGRpdiBjbGFzcz0ic2V0dXAtYWN0aW9ucyI+PGJ1dHRvbiBpZD0ic2V0dXBTa2lwIiB0eXBlPSJidXR0b24iPlNraXA8L2J1dHRvbj48YnV0",
    "dG9uCiAgICAgICAgICAgIHR5cGU9InN1Ym1pdCIgY2xhc3M9InNldHVwLWRvbmUiPkRvbmU8L2J1dHRvbj48L2Rpdj4KICAgICAgPC9mb3JtPgog",
    "ICAgPC9kaWFsb2c+CiAgICA8ZGlhbG9nIGlkPSJhY2NvdW50TWVudSI+CiAgICAgIDxkaXYgY2xhc3M9ImRpYWxvZy1oZWFkaW5nIj4KICAgICAg",
    "ICA8aDIgaWQ9ImFjY291bnROYW1lIj5Ecm9wIGFjY291bnQ8L2gyPjxidXR0b24gY2xhc3M9Imljb24iIGRhdGEtY2xvc2U9ImFjY291bnRNZW51",
    "IgogICAgICAgICAgZGF0YS1pY29uPSJjbG9zZSIgYXJpYS1sYWJlbD0iQ2xvc2UgYWNjb3VudCI+PC9idXR0b24+CiAgICAgIDwvZGl2PgogICAg",
    "ICA8cCBpZD0iYWNjb3VudFJvbGUiIGNsYXNzPSJhY2NvdW50LXJvbGUiIHJvbGU9InN0YXR1cyI+R3Vlc3QgPC9wPjxidXR0b24gaWQ9ImFjY291",
    "bnRBY3Rpb24iCiAgICAgICAgY2xhc3M9InNldHRpbmciPlNpZ24gaW48L2J1dHRvbj48YnV0dG9uIGlkPSJjcmVhdGVBY2NvdW50IiBjbGFzcz0i",
    "c2V0dGluZyI+IENyZWF0ZSBhIERyb3AKICAgICAgICBhY2NvdW50PC9idXR0b24+PGJ1dHRvbiBpZD0iYWNjb3VudEtleXMiIGNsYXNzPSJzZXR0",
    "aW5nIj5BUEkga2V5czwvYnV0dG9uPgogICAgPC9kaWFsb2c+CiAgICA8ZGl2IGlkPSJub3RpY2UiIHJvbGU9InN0YXR1cyIgaGlkZGVuPjwvZGl2",
    "\x50\x67\x6f\x67\x49\x44\x77\x76\x59\x6d\x39\x6b\x65\x54\x34\x4b\x43\x6a\x77\x76\x61\x48\x52\x74\x62\x44\x34\x4b\x43\x67\x3d\x3d"
  ].join("")), _0xe95f62_0 => _0xe95f62_0.charCodeAt(0)));
  document.open();
  document.write(_0xe95f62_0);
  document.close();
})().catch(() => {
  const _0xe95f62_0 = document.createElement("\x70");
  _0xe95f62_0.setAttribute("\x72\x6f\x6c\x65", "\x61\x6c\x65\x72\x74");
  _0xe95f62_0.textContent = "\x53\x61\x76\x65\x64\x20\x77\x6f\x72\x6b\x73\x70\x61\x63\x65\x20\x64\x61\x74\x61\x20\x63\x6f\x75\x6c\x64\x20\x6e\x6f\x74\x20\x62\x65\x20\x75\x70\x64\x61\x74\x65\x64\x2e\x20\x43\x6c\x6f\x73\x65\x20\x6f\x74\x68\x65\x72\x20\x73\x69\x74\x65\x20\x74\x61\x62\x73\x20\x61\x6e\x64\x20\x72\x65\x6c\x6f\x61\x64\x2e";
  document.body.prepend(_0xe95f62_0);
});
