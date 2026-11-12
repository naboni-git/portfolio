/* Certificate image paths */
window.__CERT={
  "c-01": "images/certs/c-01.jpg",
  "c-02": "images/certs/c-02.jpg",
  "c-03": "images/certs/c-03.jpg",
  "c-04": "images/certs/c-04.jpg",
  "c-05": "images/certs/c-05.jpg",
  "c-06": "images/certs/c-06.jpg",
  "c-07": "images/certs/c-07.jpg",
  "c-08": "images/certs/c-08.jpg",
  "c-09": "images/certs/c-09.jpg",
  "c-10": "images/certs/c-10.jpg",
  "slip": "images/certs/slip.jpg"
};

(function(){
  var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* theme toggle */
  var root=document.documentElement;
  document.getElementById('theme').addEventListener('click',function(){
    var dark=root.getAttribute('data-theme')==='dark'||(!root.getAttribute('data-theme')&&matchMedia('(prefers-color-scheme: dark)').matches);
    root.setAttribute('data-theme',dark?'light':'dark');
  });

  /* ring + meter animate from zero to the true value */
  var ring=document.getElementById('ring'),fill=document.getElementById('fill');
  if(!reduce){
    ring.style.transition='none';ring.setAttribute('stroke-dashoffset','100');fill.style.width='0%';
    requestAnimationFrame(function(){requestAnimationFrame(function(){
      ring.style.transition='';ring.setAttribute('stroke-dashoffset','8.3');fill.style.width='91.7%';
    });});
  }

  /* role text decode */
  var roleEl=document.getElementById('role');
  if(!reduce){
    var final=roleEl.textContent,glyphs='01#$%&@*+<>/',t=0;
    var iv=setInterval(function(){
      t++;var out='';
      for(var i=0;i<final.length;i++){
        out+=(final[i]===' '||final[i]==='·'||i<t*1.6)?final[i]:glyphs[Math.floor(Math.random()*glyphs.length)];
      }
      roleEl.textContent=out;
      if(t*1.6>=final.length){clearInterval(iv);roleEl.textContent=final}
    },45);
  }

  /* achievements filter */
  var fbtns=document.querySelectorAll('#filters .chip'),cards=document.querySelectorAll('#cards .card');
  fbtns.forEach(function(b){b.addEventListener('click',function(){
    fbtns.forEach(function(x){x.setAttribute('aria-pressed',x===b?'true':'false')});
    var f=b.dataset.f;
    cards.forEach(function(c){c.hidden=!(f==='all'||c.dataset.c.split(' ').indexOf(f)>-1)});
  })});

  /* skills */
  var skills=[
    ['Penetration testing','sec'],['Malware analysis','sec'],['Red/Blue teaming','sec'],['CTF competitions','sec'],['TryHackMe labs','sec'],['INSA training','sec'],
    ['JavaScript','web'],['React.js','web'],['Next.js','web'],['Node.js','web'],['PostgreSQL','web'],['MongoDB','web'],
    ['C++','cs'],['Object-Oriented Programming','cs'],['Data Structures & Algorithms','cs'],['Git / GitHub','cs']
  ];
  var box=document.getElementById('skillbox');
  skills.forEach(function(s){var d=document.createElement('span');d.className='skill';d.dataset.g=s[1];d.textContent=s[0];box.appendChild(d)});
  var tabs=document.querySelectorAll('#tabs .chip');
  tabs.forEach(function(b){b.addEventListener('click',function(){
    tabs.forEach(function(x){x.setAttribute('aria-selected',x===b?'true':'false')});
    box.querySelectorAll('.skill').forEach(function(e){e.hidden=!(b.dataset.g==='all'||e.dataset.g===b.dataset.g)});
  })});

  /* terminal */
  var out=document.getElementById('out'),ti=document.getElementById('ti'),hints=document.getElementById('hints');
  var C={
    help:'Commands: whoami, creator, score, skills, education, achievements, languages, contact, clear',
    whoami:'Naboni Abrham. Computer Science student at Addis Ababa University, passionate about cybersecurity. Addis Ababa, Ethiopia.',
    score:'ESSLCE entrance exam: 550.00 / 600 (91.7%). English 94, SAT 78, Maths 95, Physics 95, Chemistry 95, Biology 93.',
    skills:'Cyber: pentesting, malware analysis, Red/Blue teaming, CTFs, TryHackMe\nWeb: JavaScript, React.js, Next.js, Node.js, PostgreSQL, MongoDB\nCS: C++, OOP, Data Structures & Algorithms, Git/GitHub',
    education:'2025-2029  BSc Computer Science, Addis Ababa University\nHigh School Diploma, ODA Special Boarding School. 4.0 GPA, Rank 1 with Distinction.',
    achievements:'Top 5 National Winner and National Tax & Customs Ambassador (#1 in three rounds out of 243 schools)\nWon Round 1 of The Great Debate, then judged Round 2\n12-week STEMpower electronics and programming program\n45-day National Youth Service training',
    creator:'Content creator on TikTok (@naboniya, 4K+ followers) inspiring high schoolers and other students to achieve. Also on Instagram, X, YouTube and Facebook as @naboniya.',
    languages:'English (Advanced), Amharic (Native), Oromo (Native)',
    contact:'naboniabrham1999@gmail.com | +251 985 851 691 | @naboniya on TikTok, Instagram, X, YouTube, Facebook | linkedin.com/in/naboni-abrham-code | github.com/naboni-git'
  };
  function line(txt,cls){var d=document.createElement('div');if(cls)d.className=cls;d.textContent=txt;out.appendChild(d)}
  function run(cmd){
    cmd=cmd.trim().toLowerCase();if(!cmd)return;
    line('$ '+cmd,'cmd');
    if(cmd==='clear'){out.textContent='';return}
    line(C[cmd]||('command not found: '+cmd+'. Try help.'),C[cmd]?'ok':'');
    out.scrollTop=out.scrollHeight;
  }
  line('Welcome. Type help to see what I can tell you.','ok');
  ['help','whoami','creator','score','skills','contact'].forEach(function(c){
    var b=document.createElement('button');b.type='button';b.textContent=c;b.addEventListener('click',function(){run(c)});hints.appendChild(b)});
  document.getElementById('tf').addEventListener('submit',function(e){e.preventDefault();run(ti.value);ti.value=''});

  /* certificates */
  var CERTS=[['slip','ESSLCE result: subject scores, 550.00 / 600'],['c-10','Grade 12 National Examination pass certificate, ODA'],['c-02','Top 5 National Quiz certificate, Customs Commission and Ministry of Revenues'],['c-07','Education Festival certificate, Oromia Education Bureau'],['c-04','Certificate of Excellence: English Club, The Great Debate'],['c-05','Certificate of Excellence: mini-media, ODA Boarding School'],['c-03','Certificate of Participation: Mini Media Club'],['c-06','Nationwide Maths Competition certificate'],['c-08','Nationwide Maths Competition certificate (A+)'],['c-01','STEMpower Ethiopia recommendation letter, Foka STEM Center'],['c-09','Skills for Safety certificate, Voice of HERs']];
  var gal=document.getElementById('gal');
  CERTS.forEach(function(c){
    var b=document.createElement('button');b.type='button';
    var im=document.createElement('img');im.src=window.__CERT[c[0]];im.alt=c[1];im.loading='lazy';
    var sp=document.createElement('span');sp.textContent=c[1];
    b.appendChild(im);b.appendChild(sp);
    b.addEventListener('click',function(){open_(c)});gal.appendChild(b)});
  var lb=null;
  function close_(){if(lb){lb.remove();lb=null;document.removeEventListener('keydown',esc)}}
  function esc(e){if(e.key==='Escape')close_()}
  function open_(c){
    close_();lb=document.createElement('div');lb.className='lb';lb.setAttribute('role','dialog');lb.setAttribute('aria-label',c[1]);
    var im=document.createElement('img');im.src=window.__CERT[c[0]];im.alt=c[1];
    var p=document.createElement('p');p.textContent=c[1];
    var x=document.createElement('button');x.type='button';x.textContent='✕';x.setAttribute('aria-label','Close');
    x.addEventListener('click',close_);lb.addEventListener('click',function(e){if(e.target===lb)close_()});
    lb.appendChild(im);lb.appendChild(p);lb.appendChild(x);document.body.appendChild(lb);x.focus();document.addEventListener('keydown',esc)}

  /* copy buttons */
  document.querySelectorAll('[data-copy]').forEach(function(b){b.addEventListener('click',function(){
    var v=b.dataset.copy,old=b.textContent;
    function done(){b.textContent='Copied';setTimeout(function(){b.textContent=old},1400)}
    if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(v).then(done,function(){b.textContent='Select text';setTimeout(function(){b.textContent=old},1600)})}
    else{b.textContent='Select text';setTimeout(function(){b.textContent=old},1600)}
  })});
})();
