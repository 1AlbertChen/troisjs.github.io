import{A as e,a as o,c as r,d as t,S as s,o as a,p as n}from"./trois.module.c1a598e6.js";import{v as i,r as f,o as l,c,w as d,a as m,F as u,l as h}from"./app.99386eb2.js";import"./OrbitControls.9727ee0a.js";const b={components:{AmbientLight:e,Camera:o,PointLight:r,Renderer:t,Scene:s,ToonMaterial:a,Torus:n},data:()=>({n:30,cscale:i.scale(["#dd3e1b","#0b509c"])}),mounted(){this.$refs.renderer.onBeforeRender((()=>{const e=Date.now();let o,r;for(let t=1;t<=this.n;t++)o=this.$refs["mesh"+t].mesh,r=e-500*t,o.rotation.x=15e-5*r,o.rotation.y=2e-4*r,o.rotation.z=17e-5*r}))},methods:{color(e){return this.cscale(e/this.n).css()},onClick(e){this.cscale=i.scale([i.random(),i.random(),i.random()])}}};b.render=function(e,o,r,t,s,a){const n=f("Camera"),i=f("AmbientLight"),b=f("PointLight"),p=f("ToonMaterial"),g=f("Torus"),C=f("Scene"),k=f("Renderer");return l(),c(k,{ref:"renderer",antialias:"","orbit-ctrl":"",onClick:a.onClick},{default:d((()=>[m(n,{position:{z:15}}),m(C,{background:"#ffffff"},{default:d((()=>[m(i,{color:"#808080"}),m(b,{color:"#ffffff",position:{y:50,z:0}}),m(b,{color:"#ffffff",position:{y:-50,z:0}}),m(b,{color:"#ffffff",position:{y:0,z:0}}),(l(!0),c(u,null,h(s.n,(e=>(l(),c(g,{key:e,ref:`mesh${e}`,radius:.2*e,tube:.1,"radial-segments":8,"tubular-segments":4*(e+2)},{default:d((()=>[m(p,{color:a.color(e)},null,8,["color"])])),_:2},1032,["radius","tube","tubular-segments"])))),128))])),_:1})])),_:1},8,["onClick"])};export default b;
