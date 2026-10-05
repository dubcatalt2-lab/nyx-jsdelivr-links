!function() {
  "use strict";
  const e = Object.freeze({
    frost: [ [ 1, 1, 1 ], [ .84, .9, 1 ], [ .62, .74, .9 ] ],
    arctic: [ [ .43, .74, 1 ], [ .64, .86, 1 ], [ .22, .5, .88 ] ],
    violet: [ [ .68, .55, 1 ], [ .82, .72, 1 ], [ .4, .26, .72 ] ],
    mint: [ [ .38, .88, .68 ], [ .62, 1, .8 ], [ .13, .55, .37 ] ],
    rose: [ [ 1, .55, .72 ], [ 1, .74, .84 ], [ .78, .28, .48 ] ],
    ember: [ [ 1, .62, .36 ], [ 1, .78, .52 ], [ .72, .28, .12 ] ]
  }), t = Object.freeze({
    speed: .3,
    innerLineCount: 32,
    outerLineCount: 36,
    warpIntensity: 1,
    rotation: -45,
    edgeFadeWidth: .6,
    colorCycleSpeed: 1,
    brightness: .12,
    enableMouseInteraction: !0,
    mouseInfluence: 2,
    colorVariant: "frost"
  });
  let o = {
    ...t
  };
  const n = matchMedia("(prefers-reduced-motion: reduce)");
  let a = null, r = null;
  function i(e, t, o) {
    const n = e.createShader(t);
    if (e.shaderSource(n, o), e.compileShader(n), !e.getShaderParameter(n, e.COMPILE_STATUS)) throw new Error(e.getShaderInfoLog(n) || "Shader compile failed");
    return n;
  }
  function l(n, a = !1, r = o) {
    let l = {
      ...t,
      ...r
    };
    const s = n.getContext("webgl", {
      alpha: !1,
      antialias: !1,
      depth: !1,
      stencil: !1,
      premultipliedAlpha: !1,
      powerPreference: "high-performance"
    });
    if (!s) throw new Error("WebGL unavailable");
    const u = s.createProgram();
    if (s.attachShader(u, i(s, s.VERTEX_SHADER, "\nattribute vec2 position;\nvoid main(){gl_Position=vec4(position,0.0,1.0);}")), 
    s.attachShader(u, i(s, s.FRAGMENT_SHADER, "\nprecision highp float;\nuniform float uTime;uniform vec3 uResolution;uniform float uSpeed;uniform float uInnerLines;uniform float uOuterLines;uniform float uWarpIntensity;uniform float uRotation;uniform float uEdgeFadeWidth;uniform float uColorCycleSpeed;uniform float uBrightness;uniform vec3 uColor1;uniform vec3 uColor2;uniform vec3 uColor3;uniform vec2 uMouse;uniform float uMouseInfluence;uniform bool uEnableMouse;uniform float uLightMode;\n#define HALF_PI 1.5707963\nfloat hashF(float n){return fract(sin(n*127.1)*43758.5453123);}float smoothNoise(float x){float i=floor(x);float f=fract(x);float u=f*f*(3.0-2.0*f);return mix(hashF(i),hashF(i+1.0),u);}float displaceA(float coord,float t){float r=sin(coord*2.123)*0.2;r+=sin(coord*3.234+t*4.345)*0.1;r+=sin(coord*0.589+t*0.934)*0.5;return r;}float displaceB(float coord,float t){float r=sin(coord*1.345)*0.3;r+=sin(coord*2.734+t*3.345)*0.2;r+=sin(coord*0.189+t*0.934)*0.3;return r;}vec2 rotate2D(vec2 p,float a){float c=cos(a);float s=sin(a);return vec2(p.x*c-p.y*s,p.x*s+p.y*c);}\nvoid main(){vec2 coords=gl_FragCoord.xy/uResolution.xy;coords=coords*2.0-1.0;coords=rotate2D(coords,uRotation);float halfT=uTime*uSpeed*0.5;float fullT=uTime*uSpeed;float mouseWarp=0.0;if(uEnableMouse){vec2 mPos=rotate2D(uMouse*2.0-1.0,uRotation);float mDist=length(coords-mPos);mouseWarp=uMouseInfluence*exp(-mDist*mDist*4.0);}float warpAx=coords.x+displaceA(coords.y,halfT)*uWarpIntensity+mouseWarp;float warpAy=coords.y-displaceA(coords.x*cos(fullT)*1.235,halfT)*uWarpIntensity;float warpBx=coords.x+displaceB(coords.y,halfT)*uWarpIntensity+mouseWarp;float warpBy=coords.y-displaceB(coords.x*sin(fullT)*1.235,halfT)*uWarpIntensity;vec2 fieldA=vec2(warpAx,warpAy);vec2 fieldB=vec2(warpBx,warpBy);vec2 blended=mix(fieldA,fieldB,mix(fieldA,fieldB,0.5));float fadeTop=smoothstep(uEdgeFadeWidth,uEdgeFadeWidth+0.4,blended.y);float fadeBottom=smoothstep(-uEdgeFadeWidth,-(uEdgeFadeWidth+0.4),blended.y);float vMask=1.0-max(fadeTop,fadeBottom);float tileCount=mix(uOuterLines,uInnerLines,vMask);float scaledY=blended.y*tileCount;float nY=smoothNoise(abs(scaledY));float ridge=pow(step(abs(nY-blended.x)*2.0,HALF_PI)*cos(2.0*(nY-blended.x)),5.0);float lines=0.0;for(float i=1.0;i<3.0;i+=1.0){lines+=pow(max(fract(scaledY),fract(-scaledY)),i*2.0);}float pattern=vMask*lines;float cycleT=fullT*uColorCycleSpeed;float rChannel=(pattern+lines*ridge)*(cos(blended.y+cycleT*0.234)*0.5+1.0);float gChannel=(pattern+vMask*ridge)*(sin(blended.x+cycleT*1.745)*0.5+1.0);float bChannel=(pattern+lines*ridge)*(cos(blended.x+cycleT*0.534)*0.5+1.0);vec3 col=(rChannel*uColor1+gChannel*uColor2+bChannel*uColor3)*uBrightness;float alpha=clamp(length(col),0.0,1.0);if(uLightMode>0.5){vec3 weights=pow(max(vec3(rChannel,gChannel,bChannel),vec3(0.0)),vec3(3.0));float weightSum=max(weights.r+weights.g+weights.b,0.0001);vec3 chroma=(weights.r*uColor1+weights.g*uColor2+weights.b*uColor3)/weightSum;float neutral=min(chroma.r,min(chroma.g,chroma.b));chroma=max(chroma-vec3(neutral*0.92),vec3(0.0));float peak=max(chroma.r,max(chroma.g,chroma.b));chroma=pow(clamp(chroma/max(peak,0.0001),0.0,1.0),vec3(1.08));float ink=clamp(max(rChannel,max(gChannel,bChannel))*uBrightness*1.15,0.0,0.92);gl_FragColor=vec4(mix(vec3(1.0),chroma,ink),1.0);}else{gl_FragColor=vec4(col,alpha);}}\n")), 
    s.linkProgram(u), !s.getProgramParameter(u, s.LINK_STATUS)) throw new Error(s.getProgramInfoLog(u) || "Program link failed");
    const c = s.createBuffer();
    s.bindBuffer(s.ARRAY_BUFFER, c), s.bufferData(s.ARRAY_BUFFER, new Float32Array([ -1, -1, 3, -1, -1, 3 ]), s.STATIC_DRAW);
    const d = s.getAttribLocation(u, "position"), f = {};
    [ "uTime", "uResolution", "uSpeed", "uInnerLines", "uOuterLines", "uWarpIntensity", "uRotation", "uEdgeFadeWidth", "uColorCycleSpeed", "uBrightness", "uColor1", "uColor2", "uColor3", "uMouse", "uMouseInfluence", "uEnableMouse", "uLightMode" ].forEach(e => f[e] = s.getUniformLocation(u, e));
    let m = 0, h = !1, p = [ .5, .5 ], g = [ .5, .5 ];
    const v = (t = 0) => {
      const o = n.getBoundingClientRect(), r = Math.max(1, Math.round(o.width || n.width || 1)), i = Math.max(1, Math.round(o.height || n.height || 1)), m = document.body?.classList.contains("performance-lite") ? 55e4 : 85e4, h = a ? 1 : Math.max(.42, Math.min(.85, Math.sqrt(m / (r * i)))), v = Math.max(1, Math.round(r * h)), b = Math.max(1, Math.round(i * h));
      n.width === v && n.height === b || (n.width = v, n.height = b), s.viewport(0, 0, v, b), 
      s.useProgram(u), s.bindBuffer(s.ARRAY_BUFFER, c), s.enableVertexAttribArray(d), 
      s.vertexAttribPointer(d, 2, s.FLOAT, !1, 0, 0);
      const y = function(t) {
        return e[t.colorVariant] || function() {
          const e = document.documentElement.dataset.nyxTheme || "default";
          return "ruby" === e ? [ [ 1, .58, .66 ], [ 1, .78, .82 ], [ .92, .28, .4 ] ] : "emerald" === e || "fresh" === e ? [ [ .58, 1, .78 ], [ .74, 1, .86 ], [ .21, .76, .51 ] ] : "sakura" === e ? [ [ 1, .68, .84 ], [ 1, .85, .93 ], [ .91, .39, .66 ] ] : "midnight" === e ? [ [ .67, .82, 1 ], [ .85, .93, 1 ], [ .34, .62, 1 ] ] : [ [ 1, 1, 1 ], [ 1, 1, 1 ], [ 1, 1, 1 ] ];
        }();
      }(l);
      p[0] += .05 * (g[0] - p[0]), p[1] += .05 * (g[1] - p[1]), s.uniform1f(f.uTime, .001 * t), 
      s.uniform3f(f.uResolution, v, b, v / b), s.uniform1f(f.uSpeed, l.speed), s.uniform1f(f.uInnerLines, l.innerLineCount), 
      s.uniform1f(f.uOuterLines, l.outerLineCount), s.uniform1f(f.uWarpIntensity, l.warpIntensity), 
      s.uniform1f(f.uRotation, l.rotation * Math.PI / 180), s.uniform1f(f.uEdgeFadeWidth, l.edgeFadeWidth), 
      s.uniform1f(f.uColorCycleSpeed, l.colorCycleSpeed), s.uniform1f(f.uBrightness, l.brightness), 
      s.uniform3fv(f.uColor1, y[0]), s.uniform3fv(f.uColor2, y[1]), s.uniform3fv(f.uColor3, y[2]), 
      s.uniform2f(f.uMouse, p[0], p[1]), s.uniform1f(f.uMouseInfluence, l.mouseInfluence), 
      s.uniform1i(f.uEnableMouse, a || !l.enableMouseInteraction ? 0 : 1), s.uniform1f(f.uLightMode, 0), 
      s.drawArrays(s.TRIANGLES, 0, 3);
    }, b = e => {
      m = 0, h && (v(e), m = requestAnimationFrame(b));
    };
    return {
      draw: v,
      setPointer: (e, t) => {
        const o = n.getBoundingClientRect();
        o.width && o.height && (g = [ Math.max(0, Math.min(1, (e - o.left) / o.width)), Math.max(0, Math.min(1, 1 - (t - o.top) / o.height)) ]);
      },
      resetPointer: () => {
        g = [ .5, .5 ];
      },
      update(e) {
        l = {
          ...t,
          ...e
        };
      },
      start() {
        h || (h = !0, m = requestAnimationFrame(b));
      },
      stop() {
        h = !1, m && cancelAnimationFrame(m), m = 0;
      },
      dispose(e = !0) {
        this.stop(), s.deleteBuffer(c), s.deleteProgram(u), e && s.getExtension("WEBGL_lose_context")?.loseContext();
      }
    };
  }
  function s() {
    const e = document.body?.classList.contains("browser-content-active") && !document.body?.classList.contains("nyx-built-in-content-active");
    return "lineWaves" === document.documentElement.dataset.nyxBeamWallpaper && !document.body?.classList.contains("custom-bg-active") && !document.body?.classList.contains("three-d-backgrounds") && !e;
  }
  function u() {
    if (a = document.getElementById("nyxLineWavesBg") || a, !a) return;
    const e = s();
    if (a.hidden = !e, e) try {
      r ||= l(a), r.draw(performance.now()), !s() || document.hidden || n.matches || document.body?.classList.contains("lag-reducer") ? r.stop() : r.start(), 
      a.dataset.renderer = "react-bits-line-waves";
    } catch (t) {
      a.hidden = !0, console.warn("Nyx Line Waves renderer unavailable", t);
    } else r?.stop();
  }
  function c() {
    a = document.getElementById("nyxLineWavesBg"), a && (new MutationObserver(u).observe(document.documentElement, {
      attributes: !0,
      attributeFilter: [ "data-nyx-beam-wallpaper", "data-nyx-theme" ]
    }), new MutationObserver(u).observe(document.body, {
      attributes: !0,
      attributeFilter: [ "class" ]
    }), addEventListener("resize", () => {
      s() && r?.draw(performance.now());
    }, {
      passive: !0
    }), addEventListener("pointermove", e => {
      s() && r?.setPointer(e.clientX, e.clientY);
    }, {
      passive: !0
    }), addEventListener("blur", () => r?.resetPointer(), {
      passive: !0
    }), document.addEventListener("visibilitychange", u), n.addEventListener?.("change", u), 
    a.addEventListener("webglcontextlost", e => {
      e.preventDefault(), r?.stop();
    }), a.addEventListener("webglcontextrestored", () => {
      r?.dispose(), r = null, u();
    }), u());
  }
  window.NyxLineWavesWallpaper = Object.freeze({
    palettes: e,
    apply: function(e, n = {}) {
      o = {
        ...t,
        ...n
      }, r?.update(o), u();
    },
    syncVisibility: u,
    renderPreview: function(e, t) {
      if (e) try {
        const n = l(e, !0, {
          ...o,
          colorVariant: t
        });
        n.draw(860), n.dispose(!1);
      } catch (n) {
        console.warn("Nyx Line Waves preview unavailable", n);
        const t = e.getContext("2d");
        t && (t.fillStyle = "#080c13", t.fillRect(0, 0, e.width, e.height));
      }
    },
    source: "React Bits Line Waves"
  }), "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", c, {
    once: !0
  }) : c();
}();
