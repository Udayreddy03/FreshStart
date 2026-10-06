const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
let S={saved:[],apps:[],prog:{}};
try{S=Object.assign(S,JSON.parse(localStorage.getItem('fs')||'{}'))}catch(e){}
const save=()=>{try{localStorage.setItem('fs',JSON.stringify(S))}catch(e){}};
const R={
sd:{n:'Software Developer',i:'💻',steps:['Programming basics (Java, Python or JavaScript)','Data structures and algorithms','SQL and databases','Git and GitHub','Backend framework (Spring Boot or Node)','React','Build 2 projects','Write your resume','Interview prep','Apply for jobs'],
 sk:[['Java / Python','CS50 · MOOC.fi Java · Python.org tutorial'],['DSA','NeetCode · GeeksforGeeks · LeetCode easy'],['Web','MDN · freeCodeCamp · react.dev'],['Git','Pro Git book · GitHub Skills']],
 pj:['Expense tracker with login and REST API','Blog platform with React frontend','URL shortener with analytics','Real-time chat app']},
da:{n:'Data Analyst',i:'📊',steps:['Excel and spreadsheets','SQL','Statistics basics','Python (pandas)','Data visualisation (Power BI or Tableau)','Build 2 projects','Write your resume','Interview prep','Apply for jobs'],
 sk:[['SQL','Mode SQL tutorial · SQLBolt'],['Python','Kaggle Learn · pandas docs'],['BI tools','Microsoft Learn Power BI · Tableau free training'],['Statistics','Khan Academy']],
 pj:['Sales dashboard in Power BI','Cleaning and analysing a public Kaggle dataset','Cricket or movie data analysis in Python','Customer churn analysis with SQL']},
qa:{n:'QA Engineer',i:'🧪',steps:['Testing fundamentals (types, test cases, bug reports)','SQL basics','Manual testing practice','Selenium or Playwright','API testing with Postman','Git and CI basics','Build 2 projects','Write your resume','Interview prep','Apply for jobs'],
 sk:[['Testing basics','ISTQB Foundation syllabus (free)'],['Automation','Playwright docs · Test Automation University'],['API testing','Postman Learning Center'],['Java or Python','Any beginner course']],
 pj:['Test plan and 30 test cases for a public website','Selenium or Playwright suite for a demo shop','Postman collection for a public API','Bug report portfolio']},
ba:{n:'Business Analyst',i:'📈',steps:['Business analysis basics (requirements, stakeholders)','Excel and SQL','Documentation: BRD, user stories, use cases','Process flow diagrams','Agile and Scrum basics','Build 2 projects','Write your resume','Interview prep','Apply for jobs'],
 sk:[['Requirements','IIBA BABOK overview · YouTube BA playlists'],['Excel / SQL','Microsoft Learn · SQLBolt'],['Agile','Scrum Guide (free PDF)'],['Diagrams','draw.io · Lucidchart free tier']],
 pj:['BRD and user stories for a food delivery app','As-is / to-be process map for a college admission flow','Dashboard of KPIs in Excel','Requirements for a library system']},
cloud:{n:'Cloud Engineer',i:'☁️',steps:['Linux and networking basics','Python or Bash scripting','Cloud fundamentals (AWS, Azure or GCP)','Git and CI/CD','Docker','Build 2 projects','Cloud entry certification','Write your resume','Interview prep','Apply for jobs'],
 sk:[['Linux','OverTheWire Bandit · Linux Journey'],['Cloud','AWS Skill Builder · Microsoft Learn'],['Docker','Docker docs getting started'],['CI/CD','GitHub Actions docs']],
 pj:['Host a static site on cloud storage with a CDN','Dockerise a small app and deploy it','CI/CD pipeline with GitHub Actions','Serverless API']},
ux:{n:'UI/UX Designer',i:'🎨',steps:['Design principles and UX basics','Figma','User research and wireframes','Prototyping and usability testing','HTML and CSS basics','Build 2 case studies','Write your resume and portfolio','Interview prep','Apply for jobs'],
 sk:[['Figma','Figma tutorials (free)'],['UX','Google UX Design materials · Nielsen Norman articles'],['HTML/CSS','MDN · freeCodeCamp'],['Portfolio','Behance · Notion or Framer site']],
 pj:['Redesign a screen of a popular app with before/after','Mobile app prototype with usability test notes','Landing page in Figma and code','Design system starter kit']}};
const JOBS=[['Junior Software Developer','Sample Tech Co.','Fresher','sd'],['Software Engineer Intern','Sample Startup','Internship','sd'],['Remote Frontend Trainee','Sample Remote Ltd.','Remote','sd'],['Graduate Data Analyst','Sample Analytics','Fresher','da'],['Data Analyst Intern','Sample Retail','Internship','da'],['QA Trainee','Sample Software','Fresher','qa'],['Remote QA Intern','Sample Remote Ltd.','Remote','qa'],['Associate Business Analyst','Sample Consulting','Fresher','ba'],['Cloud Support Associate','Sample Cloud Inc.','Fresher','cloud'],['UI/UX Design Intern','Sample Studio','Internship','ux'],['Remote Data Entry to Analyst Trainee','Sample Remote Ltd.','Remote','da']];
const QS={Technical:[['What is the difference between an array and a linked list?','Arrays give fast index access but costly inserts; linked lists give cheap inserts but sequential access.'],['What are the four pillars of OOP?','Encapsulation, abstraction, inheritance, polymorphism. Give one example of each from your project.'],['Explain INNER JOIN vs LEFT JOIN.','INNER returns matching rows only; LEFT returns all left rows plus matches, with NULLs where none.'],['What happens when you type a URL in a browser?','DNS lookup, TCP/TLS connection, HTTP request, server response, browser renders HTML/CSS/JS.'],['What is Git and why use branches?','Version control. Branches let you work on features in isolation and merge when ready.']],
Aptitude:[['A train 150 m long passes a pole in 15 s. Its speed?','10 m/s = 36 km/h.'],['If 6 workers finish a job in 10 days, how long do 15 workers take?','Work is constant: 6×10 = 60 worker-days, so 60/15 = 4 days.'],['Find the next number: 2, 6, 12, 20, 30, ?','Differences grow by 2 (4,6,8,10), so next is 42.'],['Cost price 800, sold at 20% profit. Selling price?','800 × 1.2 = 960.'],['Tip','Practise 20 timed questions daily on percentages, ratios, time-work and series.']],
HR:[['Tell me about yourself.','Two minutes: education, key skills, one project, why this role. Present, past, future.'],['Why should we hire you?','Match your skills and projects to the job description; show you learn fast.'],['What are your strengths and weaknesses?','Real strength with evidence; a real weakness plus what you are doing about it.'],['Where do you see yourself in 5 years?','Growing into deeper technical or ownership responsibility in this field.'],['Do you have any questions for us?','Ask about the team, onboarding for freshers and how success is measured in the first 6 months.']]};
const CERTS=[['AWS Certified Cloud Practitioner','Cloud','Entry-level cloud basics'],['Microsoft Azure Fundamentals (AZ-900)','Cloud','Entry-level Azure basics'],['Google Data Analytics Certificate','Data','Coursera, beginner friendly'],['Microsoft Power BI Data Analyst (PL-300)','Data','BI reporting skills'],['ISTQB Foundation Level','QA','Standard testing certification'],['IIBA ECBA','Business analysis','Entry-level BA credential'],['Oracle Java SE certification','Software','Validates core Java']];
const SCH=[['AICTE Pragati and Saksham scholarships','For eligible technical students; check scholarships.gov.in'],['National Scholarship Portal (India)','Central and state scholarships in one place'],['Company-led programmes (e.g. Google, Microsoft, Grace Hopper)','Search each programme page for current graduate openings'],['University and alumni scholarships','Ask your department; many are not advertised online'],['Free course aid on Coursera and edX','Financial aid applications for paid certificates']];

// routing
const pages=['home','jobs','roadmaps','resume','interview','skills','projects','opps','career'];
function route(){let h=(location.hash||'#home').slice(1);if(!pages.includes(h))h='home';
 $$('.v').forEach(v=>v.classList.toggle('on',v.id==h));$$('nav a.l').forEach(a=>a.classList.toggle('on',a.hash=='#'+h));
 if(h=='career')renderCareer();window.scrollTo(0,0)}
addEventListener('hashchange',route);

// chips helper
function chips(el,items,cb,first){el.innerHTML='';items.forEach(([k,l],i)=>{const b=document.createElement('button');b.className='chip';b.textContent=l;b.onclick=()=>{[...el.children].forEach(c=>c.classList.remove('on'));b.classList.add('on');cb(k)};el.appendChild(b);if(i==(first||0))b.click()})}
const roleItems=Object.entries(R).map(([k,r])=>[k,r.i+' '+r.n]);

// home
$('#roleTiles').innerHTML=Object.entries(R).map(([k,r])=>`<a class="tile" href="#roadmaps" data-k="${k}"><b>${r.i} ${r.n}</b><span>See the roadmap</span></a>`).join('');
$$('#roleTiles a').forEach(a=>a.onclick=()=>{$('#rRole').value=a.dataset.k;setTimeout(genRoad,0)});

// jobs
chips($('#jobChips'),[['all','All'],['Fresher','Fresher jobs'],['Internship','Internships'],['Remote','Remote']],t=>{
 $('#jobList').innerHTML=JOBS.filter(j=>t=='all'||j[2]==t).map(j=>{const id=j[0]+'|'+j[1],s=S.saved.includes(id);
 return `<div class="row"><div><b>${j[0]}</b><br><span class="sub">${j[1]}</span> <span class="tag">${j[2]}</span></div><button class="btn s ${s?'g':''}" data-id="${id}">${s?'Saved':'Save job'}</button></div>`}).join('');
 $$('#jobList button').forEach(b=>b.onclick=()=>{const id=b.dataset.id,i=S.saved.indexOf(id);i<0?S.saved.push(id):S.saved.splice(i,1);save();b.textContent=i<0?'Saved':'Save job';b.classList.toggle('g',i<0)})});

// roadmap
$('#rRole').innerHTML=Object.entries(R).map(([k,r])=>`<option value="${k}">${r.n}</option>`).join('');
const SW=[['Java','java'],['Python','python'],['JavaScript','javascript'],['TypeScript','typescript'],['C / C++','c++'],['HTML','html'],['CSS','css'],['React','react'],['Angular','angular'],['Node.js','node'],['Spring Boot','spring'],['REST APIs','api'],['SQL','sql'],['MongoDB','mongodb'],['Data structures & algorithms','data structures'],['OOP','oop'],['Git & GitHub','git'],['Linux','linux'],['Bash scripting','bash'],['Docker','docker'],['CI/CD','ci/cd'],['Cloud basics','cloud'],['Manual testing','manual testing'],['Selenium / Playwright','selenium'],['Postman','postman'],['Excel','excel'],['pandas','pandas'],['Power BI / Tableau','power bi'],['Statistics','statistics'],['Agile / Scrum','agile'],['Figma','figma']];
const SEL=new Set();
$('#rSkills').innerHTML=SW.map(s=>`<button type="button" class="chip" aria-pressed="false" data-k="${s[1]}">${s[0]}</button>`).join('');
$$('#rSkills .chip').forEach(b=>b.onclick=()=>{const k=b.dataset.k,on=!SEL.has(k);on?SEL.add(k):SEL.delete(k);b.classList.toggle('on',on);b.setAttribute('aria-pressed',on)});
function genRoad(){const k=$('#rRole').value,r=R[k],known=[...SEL];
 const items=r.steps.map(s=>({s,k:known.some(w=>w.length>1&&s.toLowerCase().includes(w))}));
 const first=items.filter(x=>!x.k).map(x=>x.s.split(' (')[0]).join(' → ');
 $('#rOut').innerHTML=`<h3>Your roadmap to ${r.n}</h3><p class="sub">${$('#rDeg').value||'Graduate'} · ${$('#rExp').value}</p><p><b>${first}</b></p><ul class="steps">${items.map((x,i)=>{const key=k+':'+x.s,c=S.prog[key]||x.k;return `<li class="${x.k?'k':''}"><input type="checkbox" data-key="${key}" ${c?'checked':''} aria-label="${x.s}"><span>${x.s}${x.k?' <span class="tag">you have this</span>':''}</span></li>`}).join('')}</ul>`;
 $$('#rOut input').forEach(c=>c.onchange=()=>{S.prog[c.dataset.key]=c.checked;save()});location.hash='#roadmaps'}
$('#rGo').onclick=genRoad;

// resume
function renderRes(){const v={};$$('[data-r]').forEach(e=>v[e.dataset.r]=e.value.trim());
 const sec=(t,x)=>x?`<h4>${t}</h4><p>${x.replace(/</g,'&lt;')}</p>`:'';const e=x=>(x||'').replace(/</g,'&lt;');
 $('#resOut').innerHTML=`<h3>${e(v.name)||'Your Name'}</h3><p>${e(v.contact)||'email · phone'}</p>${sec('Summary',v.sum)}${sec('Education',v.edu)}${sec('Skills',v.sk)}${sec('Projects',v.pr)}${sec('Certifications and achievements',v.ce)}`}
$$('[data-r]').forEach(e=>e.oninput=renderRes);renderRes();

// interview
chips($('#qChips'),Object.keys(QS).map(k=>[k,k]),t=>{$('#qList').innerHTML=QS[t].map(q=>`<details><summary>${q[0]}</summary><p class="sub">${q[1]}</p></details>`).join('')});

// skills / projects
chips($('#skChips'),roleItems,k=>{$('#skOut').innerHTML=R[k].sk.map(s=>`<div class="row"><b>${s[0]}</b><span class="sub">${s[1]}</span></div>`).join('')});
chips($('#pjChips'),roleItems,k=>{$('#pjOut').innerHTML=R[k].pj.map(p=>`<div class="row"><span>${p}</span><span class="tag">Put it on GitHub</span></div>`).join('')});

// opps
$('#certs').innerHTML=CERTS.map(c=>`<div class="row"><div><b>${c[0]}</b><br><span class="sub">${c[2]}</span></div><span class="tag">${c[1]}</span></div>`).join('');
$('#schol').innerHTML=SCH.map(c=>`<div class="row"><div><b>${c[0]}</b><br><span class="sub">${c[1]}</span></div></div>`).join('');

// career
function renderCareer(){const keys=Object.keys(S.prog),done=keys.filter(k=>S.prog[k]).length;
 $('#pBar').style.width=(keys.length?done/keys.length*100:0)+'%';$('#pTxt').textContent=keys.length?`${done} of ${keys.length} roadmap steps done`:'No roadmap steps yet. Generate a roadmap to start tracking.';
 $('#savedList').innerHTML=S.saved.length?S.saved.map(id=>`<div class="row"><span>${id.replace('|',' · ')}</span><button class="btn s g" data-s="${id}">Remove</button></div>`).join(''):'<p class="sub">Nothing saved. Save jobs from Find Jobs.</p>';
 $$('[data-s]').forEach(b=>b.onclick=()=>{S.saved=S.saved.filter(x=>x!=b.dataset.s);save();renderCareer()});
 const st=['Applied','Interview','Offer','Rejected'];
 $('#appList').innerHTML=S.apps.length?S.apps.map((a,i)=>`<div class="row"><span><b>${a.t}</b> · ${a.c}</span><span><select data-i="${i}" style="width:auto">${st.map(s=>`<option ${s==a.s?'selected':''}>${s}</option>`).join('')}</select> <button class="btn s g" data-d="${i}">Delete</button></span></div>`).join(''):'<p class="sub">No applications yet. Add the first one above.</p>';
 $$('[data-i]').forEach(s=>s.onchange=()=>{S.apps[s.dataset.i].s=s.value;save()});
 $$('[data-d]').forEach(b=>b.onclick=()=>{S.apps.splice(b.dataset.d,1);save();renderCareer()})}
$('#aAdd').onclick=()=>{const t=$('#aT').value.trim(),c=$('#aC').value.trim();if(!t)return;S.apps.push({t:t.replace(/</g,'&lt;'),c:c.replace(/</g,'&lt;'),s:'Applied'});$('#aT').value=$('#aC').value='';save();renderCareer()};
route();
