import"./sponsor.138aeb6d.js";import"./jwt.1d42f94f.js";import"./page.d4f83d9f.js";const t=document.getElementById("settings-menu"),e=document.getElementById("settings-menu-dropdown");t?.addEventListener("click",()=>{e?.classList.toggle("hidden")});document.addEventListener("click",n=>{t?.contains(n.target)||e?.classList.add("hidden")});