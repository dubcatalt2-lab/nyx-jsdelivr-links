!function() {
  "use strict";
  const e = Object.freeze({
    obsidian: {
      label: "Obsidian",
      summary: "Quiet dark fabric",
      lightColor: "#718478"
    },
    frost: {
      label: "Frost",
      summary: "Soft white light",
      lightColor: "#ffffff"
    },
    arctic: {
      label: "Arctic",
      summary: "Cool blue beams",
      lightColor: "#73c9ff"
    },
    violet: {
      label: "Violet",
      summary: "Muted violet light",
      lightColor: "#a98cff"
    },
    mint: {
      label: "Mint",
      summary: "Quiet green light",
      lightColor: "#75e7be"
    },
    rose: {
      label: "Rose",
      summary: "Soft rose light",
      lightColor: "#f5a0c8"
    },
    ember: {
      label: "Ember",
      summary: "Warm amber light",
      lightColor: "#ffad73"
    },
    lineWaves: {
      label: "Waves",
      summary: "Flowing contour lines",
      lightColor: "#9ec8ff"
    }
  }), t = Object.freeze({
    beamWidth: 3,
    beamHeight: 30,
    beamNumber: 20,
    lightColor: "#ffffff",
    speed: 2,
    noiseIntensity: 1.75,
    scale: .2,
    rotation: 30
  });
  class n {
    constructor(e, n = {}, i = !1) {
      if (!window.THREE) throw new Error("Three.js is unavailable");
      this.THREE = window.THREE, this.canvas = e, this.preview = i, this.options = {
        ...t,
        ...n
      }, this.time = 0, this.lastFrame = 0, this.frame = 0, this.running = !1, this.renderer = new this.THREE.WebGLRenderer({
        canvas: e,
        antialias: i,
        alpha: !1,
        powerPreference: "high-performance",
        preserveDrawingBuffer: i
      }), this.renderer.setClearColor(0, 1), this.renderer.outputEncoding = this.THREE.sRGBEncoding, 
      this.renderer.toneMapping = this.THREE.ACESFilmicToneMapping, this.renderer.toneMappingExposure = 1, 
      this.scene = new this.THREE.Scene, this.scene.background = new this.THREE.Color(0), 
      this.camera = new this.THREE.OrthographicCamera(-1, 1, 1, -1, .1, 1e3), this.camera.position.set(0, 0, 20), 
      this.group = new this.THREE.Group, this.scene.add(this.group), this.ambient = new this.THREE.AmbientLight(16777215, 1), 
      this.scene.add(this.ambient), this.directional = new this.THREE.DirectionalLight(this.options.lightColor, 1), 
      this.directional.position.set(0, 3, 10), this.scene.add(this.directional), this.rebuildMesh(), 
      this.resize();
    }
    rebuildMesh() {
      this.mesh && (this.group.remove(this.mesh), this.mesh.geometry.dispose(), this.mesh.material.dispose());
      const e = this.options, t = function(e, t, n, i, s = 0, r = 100) {
        const o = new e.BufferGeometry, a = t * (r + 1) * 2, c = t * r * 2, l = new Float32Array(3 * a), d = new Uint32Array(3 * c), h = new Float32Array(2 * a);
        let g = 0, m = 0, f = 0;
        const u = -(t * n + (t - 1) * s) / 2;
        for (let v = 0; v < t; v++) {
          const e = u + v * (n + s), t = 300 * Math.random(), o = 300 * Math.random();
          for (let s = 0; s <= r; s++) {
            const a = i * (s / r - .5);
            l.set([ e, a, 0, e + n, a, 0 ], 3 * g);
            const c = s / r;
            if (h.set([ t, c + o, t + 1, c + o ], f), s < r) {
              const e = g, t = g + 1, n = g + 2, i = g + 3;
              d.set([ e, t, n, n, t, i ], m), m += 6;
            }
            g += 2, f += 4;
          }
        }
        return o.setAttribute("position", new e.BufferAttribute(l, 3)), o.setAttribute("uv", new e.BufferAttribute(h, 2)), 
        o.setIndex(new e.BufferAttribute(d, 1)), o.computeVertexNormals(), o;
      }(this.THREE, e.beamNumber, e.beamWidth, e.beamHeight, 0, 100), n = function(e, t) {
        return function(e, t, n) {
          const i = e.ShaderLib.physical, s = e.UniformsUtils.clone(i.uniforms), r = new t(n.material || {});
          r.color && (s.diffuse.value = r.color), "roughness" in r && (s.roughness.value = r.roughness), 
          "metalness" in r && (s.metalness.value = r.metalness), "envMap" in r && (s.envMap.value = r.envMap), 
          "envMapIntensity" in r && (s.envMapIntensity.value = r.envMapIntensity), Object.entries(n.uniforms || {}).forEach(([e, t]) => {
            s[e] = t && "object" == typeof t && "value" in t ? t : {
              value: t
            };
          });
          let o = `${n.header}\n${n.vertexHeader || ""}\n${i.vertexShader}`, a = `${n.header}\n${n.fragmentHeader || ""}\n${i.fragmentShader}`;
          return Object.entries(n.vertex || {}).forEach(([e, t]) => {
            o = o.replace(e, `${e}\n${t}`);
          }), Object.entries(n.fragment || {}).forEach(([e, t]) => {
            a = a.replace(e, `${e}\n${t}`);
          }), r.dispose(), new e.ShaderMaterial({
            defines: {
              ...i.defines || {}
            },
            uniforms: s,
            vertexShader: o,
            fragmentShader: a,
            lights: !0,
            fog: Boolean(n.material?.fog)
          });
        }(e, e.MeshStandardMaterial, {
          header: "\nvarying vec3 vEye;\nvarying float vNoise;\nvarying vec2 vUv;\nvarying vec3 vPosition;\nuniform float time;\nuniform float uSpeed;\nuniform float uNoiseIntensity;\nuniform float uScale;\n\nfloat random (in vec2 st) {\n  return fract(sin(dot(st.xy, vec2(12.9898,78.233))) * 43758.5453123);\n}\nfloat noise (in vec2 st) {\n  vec2 i = floor(st);\n  vec2 f = fract(st);\n  float a = random(i);\n  float b = random(i + vec2(1.0, 0.0));\n  float c = random(i + vec2(0.0, 1.0));\n  float d = random(i + vec2(1.0, 1.0));\n  vec2 u = f * f * (3.0 - 2.0 * f);\n  return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;\n}\nvec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}\nvec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}\nvec3 fade(vec3 t){return t*t*t*(t*(t*6.0-15.0)+10.0);}\nfloat cnoise(vec3 P){\n  vec3 Pi0 = floor(P);\n  vec3 Pi1 = Pi0 + vec3(1.0);\n  Pi0 = mod(Pi0, 289.0);\n  Pi1 = mod(Pi1, 289.0);\n  vec3 Pf0 = fract(P);\n  vec3 Pf1 = Pf0 - vec3(1.0);\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n  vec4 gx0 = ixy0 / 7.0;\n  vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n  vec4 gx1 = ixy1 / 7.0;\n  vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000,g000),dot(g010,g010),dot(g100,g100),dot(g110,g110)));\n  g000 *= norm0.x; g010 *= norm0.y; g100 *= norm0.z; g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001,g001),dot(g011,g011),dot(g101,g101),dot(g111,g111)));\n  g001 *= norm1.x; g011 *= norm1.y; g101 *= norm1.z; g111 *= norm1.w;\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x,Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x,Pf1.y,Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy,Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy,Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x,Pf0.y,Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x,Pf1.yz));\n  float n111 = dot(g111, Pf1);\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000,n100,n010,n110),vec4(n001,n101,n011,n111),fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy,n_z.zw,fade_xyz.y);\n  float n_xyz = mix(n_yz.x,n_yz.y,fade_xyz.x);\n  return 2.2 * n_xyz;\n}",
          vertexHeader: "\nfloat getPos(vec3 pos) {\n  vec3 noisePos = vec3(pos.x * 0., pos.y - uv.y, pos.z + time * uSpeed * 3.) * uScale;\n  return cnoise(noisePos);\n}\nvec3 getCurrentPos(vec3 pos) {\n  vec3 newpos = pos;\n  newpos.z += getPos(pos);\n  return newpos;\n}\nvec3 getNormal(vec3 pos) {\n  vec3 curpos = getCurrentPos(pos);\n  vec3 nextposX = getCurrentPos(pos + vec3(0.01, 0.0, 0.0));\n  vec3 nextposZ = getCurrentPos(pos + vec3(0.0, -0.01, 0.0));\n  vec3 tangentX = normalize(nextposX - curpos);\n  vec3 tangentZ = normalize(nextposZ - curpos);\n  return normalize(cross(tangentZ, tangentX));\n}",
          vertex: {
            "#include <begin_vertex>": "transformed.z += getPos(transformed.xyz);",
            "#include <beginnormal_vertex>": "objectNormal = getNormal(position.xyz);"
          },
          fragment: {
            "#include <dithering_fragment>": "float randomNoise = noise(gl_FragCoord.xy);\ngl_FragColor.rgb -= randomNoise / 15. * uNoiseIntensity;"
          },
          material: {
            fog: !0
          },
          uniforms: {
            diffuse: new e.Color(0, 0, 0),
            time: {
              value: 0
            },
            roughness: .3,
            metalness: .3,
            uSpeed: {
              value: t.speed
            },
            envMapIntensity: 10,
            uNoiseIntensity: t.noiseIntensity,
            uScale: t.scale
          }
        });
      }(this.THREE, e);
      this.mesh = new this.THREE.Mesh(t, n), this.mesh.frustumCulled = !1, this.group.rotation.set(0, 0, this.THREE.MathUtils.degToRad(e.rotation)), 
      this.group.add(this.mesh), this.directional.color.set(e.lightColor);
    }
    resize() {
      const e = this.canvas.getBoundingClientRect(), t = Math.max(1, Math.round(e.width || this.canvas.width || 1)), n = Math.max(1, Math.round(e.height || this.canvas.height || 1)), i = Math.max(.58, Math.min(1, Math.sqrt(14e5 / (t * n))));
      this.renderScale = i, this.canvas.dataset.renderScale = i.toFixed(3), this.renderer.setPixelRatio(i), 
      this.renderer.setSize(t, n, !1);
      const s = t / n, r = 40 * Math.tan(this.THREE.MathUtils.degToRad(15)), o = r * s;
      this.camera.left = -o / 2, this.camera.right = o / 2, this.camera.top = r / 2, this.camera.bottom = -r / 2, 
      this.camera.updateProjectionMatrix();
    }
    update(e) {
      this.options = {
        ...this.options,
        ...e
      }, this.rebuildMesh(), this.renderOnce();
    }
    renderOnce(e = this.time) {
      this.mesh?.material?.uniforms?.time && (this.mesh.material.uniforms.time.value = e), 
      this.renderer.render(this.scene, this.camera);
    }
    tick=e => {
      if (this.frame = 0, !this.running) return;
      const t = this.lastFrame ? Math.min(.1, (e - this.lastFrame) / 1e3) : 0;
      this.lastFrame = e, this.time += .1 * t, this.renderOnce(), this.frame = requestAnimationFrame(this.tick);
    };
    start() {
      this.running || (this.running = !0, this.lastFrame = 0, this.frame = requestAnimationFrame(this.tick));
    }
    stop() {
      this.running = !1, this.frame && cancelAnimationFrame(this.frame), this.frame = 0, 
      this.lastFrame = 0;
    }
    dispose() {
      this.stop(), this.mesh?.geometry?.dispose(), this.mesh?.material?.dispose(), this.renderer?.dispose();
    }
  }
  let i = null, s = null, r = "frost", o = {
    ...t
  };
  const a = matchMedia("(prefers-reduced-motion: reduce)");
  function c() {
    if ("obsidian" === document.documentElement.dataset.nyxBeamWallpaper || document.documentElement.dataset.nyxBeamWallpaper?.startsWith("photo-")) return s?.stop(), 
    void (i && (i.hidden = !0));
    if (!i) return;
    const e = document.body, t = e?.classList.contains("browser-content-active") && !e.classList.contains("nyx-built-in-content-active"), r = "lineWaves" === document.documentElement?.dataset.nyxBeamWallpaper, c = !e || r || e.classList.contains("custom-bg-active") || e.classList.contains("three-d-backgrounds") || t;
    if (i.hidden = c, c) return void s?.stop();
    const l = function() {
      if (s || !i || !window.THREE) return s;
      try {
        s = new n(i, o), i.dataset.renderer = "react-bits";
      } catch (e) {
        i.dataset.renderer = "fallback", console.warn("Nyx Beams renderer unavailable", e);
      }
      return s;
    }();
    l?.resize(), l?.renderOnce(), !s || !i || i.hidden || document.hidden || a.matches || document.body?.classList.contains("lag-reducer") ? l?.stop() : l?.start();
  }
  function l(n = "frost", a = {}) {
    r = e[n] ? n : "frost", o = {
      ...t,
      ...o,
      lightColor: e[r].lightColor,
      ...a
    }, i = document.getElementById("nyxBeamsBg") || i, i && (i.dataset.preset = r, i.dataset.lightColor = o.lightColor), 
    s && s.update(o), c();
  }
  function d() {
    i = document.getElementById("nyxBeamsBg"), i && (l(localStorage.getItem("nyx.beamWallpaper") || "frost"), 
    new MutationObserver(c).observe(document.body, {
      attributes: !0,
      attributeFilter: [ "class" ]
    }), new ResizeObserver(() => {
      i.hidden || (s?.resize(), s?.renderOnce());
    }).observe(i), document.addEventListener("visibilitychange", () => document.hidden ? s?.stop() : c()), 
    a.addEventListener?.("change", c), i.addEventListener("webglcontextlost", e => {
      e.preventDefault(), s?.stop();
    }), i.addEventListener("webglcontextrestored", () => {
      s?.dispose(), s = null, c();
    }));
  }
  window.NyxBeamsWallpaper = Object.freeze({
    presets: e,
    apply: l,
    renderPreview: function(i, s) {
      if ("obsidian" === s) {
        const e = i?.getContext("2d");
        if (e) {
          e.fillStyle = "#0b100d", e.fillRect(0, 0, i.width, i.height);
          const t = new Image;
          t.onload = () => e.drawImage(t, 0, 0, i.width, i.height), t.src = "/gh/dubcatalt2-lab/nyx-jsdelivr-links@main/nyx-static/assets/backgrounds/obsidian-fabric.svg";
        }
        return;
      }
      if (!i || !window.THREE) return;
      const r = e[s] || e.frost, o = document.createElement("canvas");
      let a;
      o.style.width = "240px", o.style.height = "135px", o.width = 240, o.height = 135;
      try {
        a = new n(o, {
          ...t,
          lightColor: r.lightColor,
          speed: 0
        }, !0), a.time = .56, a.renderOnce();
        const e = new Image;
        e.onload = () => i.getContext("2d")?.drawImage(e, 0, 0, i.width, i.height), e.src = o.toDataURL("image/png");
      } catch (c) {
        const e = i.getContext("2d");
        e && (e.fillStyle = "#000", e.fillRect(0, 0, i.width, i.height));
      } finally {
        a?.dispose();
      }
    },
    syncVisibility: c,
    source: "React Bits Beams"
  }), "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", d, {
    once: !0
  }) : d();
}();
