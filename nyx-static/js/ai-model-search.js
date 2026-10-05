(() => {
  const e = {
    image: [ "image", "images", "picture", "pictures", "photo", "photos", "art", "draw", "drawing", "generate", "generation", "generator" ],
    vision: [ "vision", "see", "analyze", "analyse", "describe", "recognize", "ocr", "screenshot", "screenshots" ],
    video: [ "video", "videos", "movie", "movies", "animation", "animate" ],
    audio: [ "audio", "speech", "voice", "sound", "speak", "tts" ],
    transcription: [ "transcribe", "transcription", "stt" ],
    coding: [ "code", "coding", "coder", "programming", "debug", "debugging", "developer" ],
    reasoning: [ "reason", "reasoning", "think", "thinking", "math", "mathematics", "logic" ],
    embeddings: [ "embedding", "embeddings" ],
    rerank: [ "rerank", "ranking" ],
    free: [ "free" ],
    text: [ "text", "write", "writing", "chat", "conversation", "summarize", "summary" ]
  }, i = new Set([ "a", "an", "the", "for", "to", "that", "can", "do", "make", "create", "best", "model", "models", "and", "with", "of", "me", "i", "want", "some", "please" ]);
  globalThis.NyxModelSearch = {
    search: function(a, o, n) {
      const t = String(o).toLowerCase().trim().split(/\s+/).filter(Boolean), r = new Set, s = [];
      for (const g of t) {
        const a = Object.keys(e).find(i => e[i].includes(g));
        a ? r.add(a) : i.has(g) || s.push(g);
      }
      (r.has("video") || r.has("audio") || r.has("vision") || r.has("transcription")) && r.delete("image");
      const d = e => e.outputModalities || [ ...!1 !== e.text ? [ "text" ] : [], ...e.imageGeneration ? [ "image" ] : [] ], c = e => {
        const i = `${e.id} ${e.label}`.toLowerCase(), a = i === o || e.id.toLowerCase() === o || e.label.toLowerCase() === o ? 1e5 : 0, n = r.has("coding") && !Number.isFinite(e.codingRank) && /codex|coder|code|devstral|programming/.test(i) ? 1e3 : 0, t = r.has("coding") ? e.codingRank ?? e.catalogRank : e.catalogRank;
        return a + n + (Number.isFinite(t) ? Math.max(0, 900 - t) : 0);
      };
      return a.filter(e => [ ...r ].every(i => ((e, i) => "image" === i ? e.imageGeneration : "vision" === i ? e.vision : "coding" === i ? !1 !== e.text : "reasoning" === i ? e.reasoning : "free" === i ? e.free || e.id.endsWith(":free") || "openrouter/free" === e.id : "audio" === i ? d(e).some(e => "speech" === e || "audio" === e) : d(e).includes(i))(e, i)) && s.every(i => `${e.label} ${e.id} ${n(e).label}`.toLowerCase().includes(i))).sort((e, i) => c(i) - c(e) || e.label.localeCompare(i.label));
    }
  };
})();
