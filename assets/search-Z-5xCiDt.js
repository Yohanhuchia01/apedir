import{d as n,j as c}from"./index-IetW687g.js";const g=async e=>{const{data:a,error:i}=await n.from("bussiness").select("*").or(`name.ilike.%${e}%, address.ilike.%${e}%`).order("privileges",{ascending:!1});if(i){console.log(i);return}const r=await Promise.all(a.map(async s=>{const t=await c("bussiness_perfil",s.perfil_pic);return{...s,perfil_pic:t}}));return console.log(r),r},u=async e=>{const{data:a,error:i}=await n.from("products").select("id, name, image, price, currency, category(bussiness(*))").or(`name.ilike.%${e}%`),r=await Promise.all(a.map(async s=>{const t=s.category.bussiness.value_url,o=s.category.bussiness.province,l=await c("products",s.image);return{...s,image:l,url:t,province:o}}));return console.log(r),r},p=async e=>{const{data:a,error:i}=await n.from("events").select("id, name, image, bussiness(*)").or(`name.ilike.%${e}%`);return await Promise.all(a.map(async s=>{const t=s.bussiness.province,o=await c("events",s.image);return{...s,image:o,province:t}}))},d=async()=>{const{data:e,error:a}=await n.from("bussiness_categories").select("*");return e};export{g as a,u as b,p as c,d as g};
