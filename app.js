const CONFIG={whatsappNumber:"919629807996",channelUrl:"https://whatsapp.com/channel/0029VbDZKEI8qIztjIeeVO22"};
const jobs=[
{id:"NV-012",title:"Office Assistant",org:"Economics & Statistics Department, Thanjavur",cat:["Government","8th","Freshers"],qual:"8th Pass",age:"18+; category-wise upper limits",salary:"₹15,700 – ₹58,100",loc:"Thanjavur, Tamil Nadu",deadline:"05 Oct 2026, 5:45 PM",date:"2026-09-21",url:"#"},
{id:"NV-008",title:"Office Assistant",org:"Government Industrial Training Institute, Kanchipuram",cat:["Government","8th"],qual:"8th Pass + Tamil reading/writing + bicycle riding",age:"Category-wise limits",salary:"₹15,700 – ₹50,000",loc:"Kanchipuram, Tamil Nadu",deadline:"30 Sep 2026, 5:45 PM",date:"2026-09-18",url:"#"},
{id:"NV-009",title:"Jeep Driver",org:"Rural Development & Panchayat Raj Department, Tiruchirappalli",cat:["Government","8th"],qual:"8th Pass + valid licence + required experience",age:"Special category recruitment",salary:"₹19,500 – ₹71,900",loc:"Tiruchirappalli, Tamil Nadu",deadline:"09 Oct 2026, 5:45 PM",date:"2026-09-18",url:"#"},
{id:"NV-010",title:"Multiple Technical & Support Posts",org:"Central Power Research Institute (CPRI)",cat:["Government","10th","ITI","Diploma","Degree"],qual:"Post-wise qualification",age:"Post-wise age limit",salary:"₹18,000 – ₹1,42,400",loc:"Various locations",deadline:"12 Oct 2026, 5:00 PM",date:"2026-09-19",url:"#"}
];
const $=s=>document.querySelector(s),wa=m=>`https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(m)}`;
function render(){
 const q=$("#search").value.toLowerCase(),c=$("#category").value;
 let a=jobs.filter(j=>(!q||[j.title,j.org,j.qual,j.age,j.loc,j.id,...j.cat].join(" ").toLowerCase().includes(q))&&(c==="All"||j.cat.includes(c)));
 if($("#sort").value==="deadline")a.sort((x,y)=>new Date(x.deadline)-new Date(y.deadline));else a.sort((x,y)=>new Date(y.date)-new Date(x.date));
 $("#results").textContent=`${a.length} job${a.length!==1?"s":""}`;$("#count").textContent=jobs.length;
 $("#grid").innerHTML=a.map(j=>`<article class="job"><div class="top"><span class="tag">${j.cat[0]}</span><span class="id">${j.id}</span></div><h3>${j.title}</h3><div class="org">${j.org}</div><div class="meta"><div>🎓 <b>Qualification:</b> ${j.qual}</div><div>📍 <b>Location:</b> ${j.loc}</div><div>💰 <b>Pay:</b> ${j.salary}</div><div>🎂 <b>Age:</b> ${j.age}</div></div><div class="deadline">⏳ Last Date: ${j.deadline}</div><div class="jobActions"><a class="official" href="${j.url}" target="_blank">Official Apply</a><a class="assist" href="${wa(`Hello Namma Velai, I need application assistance for ${j.id} - ${j.title}.`)}" target="_blank">Assistance</a></div></article>`).join("");
 $("#empty").classList.toggle("hidden",!a.length);
}
["search","category","sort"].forEach(id=>$("#"+id).addEventListener("input",render));
document.querySelectorAll(".cats button").forEach(b=>b.onclick=()=>{$("#category").value=b.dataset.cat;render();$("#jobs").scrollIntoView({behavior:"smooth"})});
$("#channel").href=CONFIG.channelUrl;$("#waService").href=wa("Hello Namma Velai, I need application assistance.");$("#waContact").href=wa("Hello Namma Velai, I need application assistance.");
$("#form").onsubmit=e=>{e.preventDefault();let f=new FormData(e.target);window.open(wa(`Hello Namma Velai,\nName: ${f.get("name")}\nJob ID: ${f.get("jobid")}\nHelp needed: ${f.get("message")}`),"_blank")};
$("#menu").onclick=()=>$("#nav").classList.toggle("open");$("#year").textContent=new Date().getFullYear();render();
