import{o as e,c as a,d as t}from"./app.0247f905.js";const r='{"title":"Camera","description":"","frontmatter":{},"headers":[{"level":3,"title":"Props from THREE.PerspectiveCamera","slug":"props-from-three-perspectivecamera"},{"level":3,"title":"Access ThreeJS camera","slug":"access-threejs-camera"}],"relativePath":"guide/core/camera.md","lastUpdated":1622582166461}',s={},n=t('<h1 id="camera"><a class="header-anchor" href="#camera" aria-hidden="true">#</a> Camera</h1><p>See <a href="https://github.com/troisjs/trois/blob/master/src/core/PerspectiveCamera.ts" target="_blank" rel="noopener noreferrer">PerspectiveCamera.ts</a> and <a href="https://threejs.org/docs/#api/en/cameras/PerspectiveCamera" target="_blank" rel="noopener noreferrer">THREE.PerspectiveCamera</a>.</p><h3 id="props-from-three-perspectivecamera"><a class="header-anchor" href="#props-from-three-perspectivecamera" aria-hidden="true">#</a> Props from <code>THREE.PerspectiveCamera</code></h3><table><tbody><tr><th>Name</th><th>Description</th><th>Type</th><th>Default</th></tr><tr><td><code>aspect</code></td><td>Camera frustum aspect ratio.</td><td>Number</td><td>1</td></tr><tr><td><code>far</code></td><td>Camera frustum far plane.</td><td>Number</td><td>2000</td></tr><tr><td><code>fov</code></td><td>Camera frustum vertical field of view.</td><td>Number</td><td>50</td></tr><tr><td><code>near</code></td><td>Camera frustum near plane.</td><td>Number</td><td>0.1</td></tr><tr><td><code>position</code></td><td>Camera position.</td><td>Object</td><td>{ x: 0, y: 0, z: 0 }</td></tr><tr><td><code>lookAt</code></td><td>Camera target</td><td>Object</td><td></td></tr></tbody></table><h3 id="access-threejs-camera"><a class="header-anchor" href="#access-threejs-camera" aria-hidden="true">#</a> Access ThreeJS camera</h3><p>You should set a <em>ref</em> on the camera :</p><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Camera</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>camera<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre></div><p>You can then access ThreeJS camera in your component script :</p><div class="language-js"><pre><code><span class="token keyword">const</span> scene <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$ref<span class="token punctuation">.</span>camera<span class="token punctuation">.</span>camera<span class="token punctuation">;</span>\n</code></pre></div>',9);s.render=function(t,r,s,c,o,d){return e(),a("div",null,[n])};export default s;export{r as __pageData};
