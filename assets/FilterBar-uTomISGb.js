import{R as r,j as e,p as c,q as u,b as x,v as h,w as a,N as j,O as p}from"./vendor-TeGnUX-f.js";import{E as m,F as f}from"./index-IetW687g.js";import{S}from"./SelectCategory-_KIUwvc3.js";import"./search-Z-5xCiDt.js";function g(){const[n,t]=r.useState(new Set(["Todas"])),l=m(s=>s.setProvince),o=r.useMemo(()=>Array.from(n).join(", ").replaceAll("_"," "),[n]),d=s=>{t(s);const i=Array.from(s)[0];console.log(i),l(i)};return e.jsxs(c,{children:[e.jsx(u,{children:e.jsxs(x,{variant:"bordered",className:"capitalize",style:{paddingLeft:"10px"},children:[e.jsx("p",{children:"Provincia"}),e.jsx("p",{style:{width:"100%",display:"flex"},children:o})]})}),e.jsxs(h,{variant:"flat",disallowEmptySelection:!0,selectionMode:"single",selectedKeys:n,onSelectionChange:d,style:{padding:"20px"},children:[e.jsx(a,{children:"Todas"},"todas"),e.jsx(a,{children:"Santiago de Cuba"},"Santiago de Cuba"),e.jsx(a,{children:"Guantanamo"},"Guantanamo"),e.jsx(a,{children:"Granma"},"Granma"),e.jsx(a,{children:"Holguin"},"Holguin"),e.jsx(a,{children:"Las Tunas"},"Las Tunas"),e.jsx(a,{children:"Sancti Spiritus"},"Sancti Spiritus"),e.jsx(a,{children:"Villa Clara"},"Villa Clara"),e.jsx(a,{children:"Cienfuegos"},"Cienfuegos"),e.jsx(a,{children:"Matanzas"},"Matanzas"),e.jsx(a,{children:"Artemisa"},"Artemisa"),e.jsx(a,{children:"La Habana"},"La Habana"),e.jsx(a,{children:"Mayabeque"},"Mayabeque"),e.jsx(a,{children:"Pinar del Rio"},"Pinar del Rio"),e.jsx(a,{children:"La Isla de la Juventud"},"La Isla de la Juventud")]})]})}function w(){const n=f(t=>t.setShowFilter);return e.jsx(j,{isBordered:!0,disableAnimation:!0,onFocus:()=>n(!0),children:e.jsxs(p,{as:"div",style:{gap:"30px",display:"flex",justifyContent:"center"},children:[e.jsx(g,{}),e.jsx(S,{})]})})}export{w as default};
