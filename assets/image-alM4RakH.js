const h=async(o,t)=>{var e=new Image,n=new Promise((c,s)=>{e.onload=async function(){var v=this.naturalWidth/this.naturalHeight,r=t/v,a=document.createElement("canvas");a.width=t,a.height=r;var g=a.getContext("2d");g.drawImage(this,0,0,t,r);var l=a.toDataURL("image/webp"),m=await(await fetch(l)).blob();c(m)},e.onerror=s}),i=URL.createObjectURL(o);return e.src=i,n};export{h as r};
