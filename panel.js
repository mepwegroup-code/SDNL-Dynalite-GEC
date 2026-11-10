
/* ============================================================
   GEC · Panel Designer v2 + Cost  (tab 4 & 5)
   6 mặt + Technical Data + chiều cao thật + mặt cắt bề dày +
   import Block từ DXF. Namespaced IIFE.
   Reuse global: S, DB, download(), toast()
   ============================================================ */
(function(){
const q=id=>document.getElementById(id);
const MODv=18;
const ceil=w=>Math.max(1,Math.ceil(w/MODv));
const fmt=n=>Math.round(n||0).toLocaleString('vi-VN');

/* ---- CSS ---- */
const css=`
.pdwrap{height:100%;overflow:auto;padding:12px;display:grid;grid-template-columns:380px 1fr;gap:12px;align-content:start}
@media(max-width:1000px){.pdwrap{grid-template-columns:1fr}}
.pdcol{min-width:0;display:flex;flex-direction:column;gap:12px}
.pd-lib{max-height:180px;overflow:auto;margin:8px 0;border:1px solid var(--line);border-radius:8px}
.pd-li{display:flex;justify-content:space-between;align-items:center;padding:6px 9px;border-bottom:1px solid var(--line);cursor:pointer;font-size:12px;gap:8px}
.pd-li:last-child{border-bottom:none}.pd-li:hover{background:var(--chip)}
.pd-li .mm{font-size:10px;color:var(--muted);font-family:'JetBrains Mono',monospace}
.pd-tbl{width:100%;border-collapse:collapse;font-size:12px}
.pd-tbl th,.pd-tbl td{padding:4px 5px;border-bottom:1px solid var(--line);text-align:right}
.pd-tbl th{background:var(--chip);color:var(--navy);font-size:10px;text-transform:uppercase}
.pd-tbl th:first-child,.pd-tbl td:first-child{text-align:left}
.pd-tbl input,.pd-tbl select{width:42px;padding:3px;border:1px solid var(--line);border-radius:5px;font-size:11px;text-align:right}
.pd-tbl select{width:76px;text-align:left}
.pd-tbl .blk{width:96px;text-align:left}
.pd-seg{display:inline-flex;border:1px solid var(--line);border-radius:8px;overflow:hidden}
.pd-seg button{border:none;background:#fff;padding:7px 13px;font-weight:600;font-size:12px;cursor:pointer;color:var(--muted)}
.pd-seg button.on{background:var(--navy);color:#fff}
.pd-zone{border:1px dashed var(--sky);border-radius:9px;padding:8px;margin-bottom:9px;background:#f2fbff}
.pd-zone h4{font-size:12px;margin:0 0 7px;color:var(--navy);display:flex;font-weight:700}
.pd-zone h4 span{margin-left:auto;font-weight:500;color:var(--muted);font-family:'JetBrains Mono',monospace;font-size:11px}
.pd-list{display:flex;flex-wrap:wrap;gap:5px;min-height:30px}
.pd-blk{border:1px solid var(--navy);background:#e0f2fe;border-radius:5px;padding:4px 6px;font-size:11px;font-weight:600;color:var(--navy);display:flex;flex-direction:column;line-height:1.15;cursor:grab;user-select:none}
.pd-blk i{font-style:normal;font-size:9px;color:var(--sky-d)}
.pd-blk.ctrl{background:#dbeafe;border-color:#2563eb}.pd-blk.pwr{background:#fef3c7;border-color:#d97706}.pd-blk.term{background:#e2e8f0;border-color:#64748b}
.pd-blk.over{outline:2px solid #ef4444}.pd-blk.lock{cursor:not-allowed}
.pd-tabs{display:flex;gap:4px;flex-wrap:wrap;margin-bottom:8px}
.pd-tabs button{border:1px solid var(--line);background:#fff;border-radius:7px;padding:4px 9px;font-size:11px;color:var(--muted);cursor:pointer}
.pd-tabs button.on{background:#e0f2fe;color:var(--sky-d);border-color:#bae6fd}
.pdbar{display:flex;gap:6px;margin-bottom:8px}
.pd-td{width:100%;border-collapse:collapse;font-size:11px;margin-top:4px}
.pd-td td{border:1px solid var(--line);padding:3px 6px}
.pd-td td:nth-child(odd){background:var(--chip);font-weight:600;color:var(--navy);width:130px}
.pd-td input{border:none;background:transparent;width:100%;font-size:11px;font-family:inherit}
.pd-total{background:linear-gradient(120deg,var(--navy),var(--navy-2));color:#fff}.pd-total .h{color:#eaf4fb}
.pd-big{font-family:'JetBrains Mono',monospace;font-size:24px;font-weight:800;letter-spacing:-1px}
@media print{header,.tabs{display:none!important}.view{position:static!important;overflow:visible!important}.view:not(.on){display:none!important}.view.on{display:block!important}.pdwrap{overflow:visible!important;display:block!important}}
`;
const st=document.createElement('style');st.textContent=css;document.head.appendChild(st);

/* ---- LIBRARY (W×H×depth thật, mm) ---- */
const LIB=[
{"c": "DDRC-GRMS-E", "d": "Room controller · 18 DI · 13 switched outputs (7 lighting + 2 power + 4 curtain) · DMX 64ch", "g": "CTRL", "w": 216, "h": 105, "depth": 74, "z": "TỦ", "block": "DDRC-GRMS-E"},
{"c": "DDRC420FR", "d": "4 relay feed-through · 20 A/ch · max 80 A", "g": "CTRL", "w": 108, "h": 105, "depth": 64, "z": "TỦ", "block": "DDRC420FR"},
{"c": "DDRC810DT-GL", "d": "8 relay SPDT · 10 A/ch · max 40 A", "g": "CTRL", "w": 215, "h": 93, "depth": 64, "z": "TỦ", "block": "DDRC810DT-GL"},
{"c": "DDRC1220FR-GL", "d": "12 relay feed-through · 20 A/ch · max 180 A", "g": "CTRL", "w": 215, "h": 93, "depth": 64, "z": "TỦ", "block": "DDRC1220FR-GL"},
{"c": "DDBC120-DALI", "d": "1 DALI addressable line · 64 addresses · 1 standby relay (dedicated)", "g": "CTRL", "w": 105, "h": 95, "depth": 75, "z": "TỦ", "block": "DDBC120-DALI"},
{"c": "DDBC320-DALI", "d": "3 DALI addressable lines · 64 addresses/line · 3 standby relays (dedicated) · Ethernet", "g": "CTRL", "w": 216, "h": 95, "depth": 64, "z": "TỦ", "block": "DDBC320-DALI"},
{"c": "DDBC1200", "d": "12 outputs 0–10 V · selectable DALI broadcast; NOT addressable · no load relay", "g": "CTRL", "w": 215, "h": 93, "depth": 64, "z": "TỦ", "block": "DDBC1200"},
{"c": "DDMIDC8", "d": "8 digital inputs · 4 analog inputs (not outputs)", "g": "CTRL", "w": 105, "h": 95, "depth": 59, "z": "TỦ", "block": "DDMIDC8"},
{"c": "DDNG485", "d": "DyNet ↔ DMX512 gateway · 512 signal channels; external decoder required", "g": "DMX", "w": 108, "h": 95, "depth": 64, "z": "TỦ", "block": "DDNG485"},
{"c": "DDMC802 + 4x DGLM202", "d": "DDMC802 configured with 4 DGLM202 · 8 leading-edge channels 2 A/ch · max 16 A", "g": "CTRL", "w": 216, "h": 105, "depth": 74, "z": "TỦ", "block": "DDMC802 + 4x DGLM202"},
{"c": "DDNP1501", "d": "DyNet network PSU · 15 VDC / 1.5 A · R8", "g": "PSU", "w": 108, "h": 95, "depth": 64, "z": "TỦ", "block": "DDNP1501"},
 {c:"SDR-240-24",d:"PSU Mean Well 240W",g:"PSU",w:63,h:125,z:"CỬA"},
 {c:"SDR-960-240",d:"PSU Mean Well 960W",g:"PSU",w:110,h:125,z:"CỬA"},
 {c:"MCB-1P",d:"MCB 1 pole",g:"PWR",w:18,h:90,z:"CỬA"},
 {c:"MCB-2P",d:"MCB 2 pole",g:"PWR",w:36,h:90,z:"CỬA"},
 {c:"MCB-3P",d:"MCB 3 pole",g:"PWR",w:54,h:90,z:"CỬA"},
 {c:"RCBO-1P+N",d:"RCBO 1P+N 30mA",g:"PWR",w:36,h:90,z:"CỬA"},
 {c:"RCBO-2P",d:"RCBO 2P 30mA",g:"PWR",w:36,h:90,z:"CỬA"},
 {c:"iCT-2P",d:"Contactor iCT 2P 25A",g:"PWR",w:36,h:90,z:"TỦ"},
 {c:"iCT-4P",d:"Contactor iCT 4P 25A",g:"PWR",w:54,h:90,z:"TỦ"},
 {c:"FUSE-1P",d:"Cầu chì 1P",g:"PWR",w:18,h:90,z:"CỬA"},
 {c:"LAMP-Y",d:"Đèn báo pha",g:"AUX",w:18,h:64,z:"CỬA"},
 {c:"TERM-6",d:"Terminal thường W6",g:"TERM",w:6,h:60,z:"TỦ"},
 {c:"TERM-FUSE-8",d:"Terminal cầu chì W8",g:"TERM",w:8,h:60,z:"TỦ"}
];
const byc=c=>LIB.find(x=>x.c===c);
/* độ sâu thiết bị (mm) cho mặt cắt */
/* Catalog depth is used for Dynalite modules; accessory depth defaults to 90 mm. */
function depOf(d){
  const device=byc(d.c); if(device&&device.depth) return device.depth;
  if(d.g==='TERM') return 45;          // terminal/dải kẹp — thấp (khác biệt)
  if(d.g==='AUX')  return 40;          // phụ kiện (đèn báo...) — thấp
  // Generic electrical accessory fallback.
  return 90;
}
function ord(it){if(it.g==="PWR"){if(/^MCB-[234]P/.test(it.c))return 1;if(/^MCB-1P|^FUSE/.test(it.c))return 2;if(/^RCBO/.test(it.c))return 3;if(/^iCT/.test(it.c))return 8;return 5;}return {PSU:4,CTRL:5,DMX:7,AUX:6,TERM:10}[it.g]||5;}
const cls=g=>g==='CTRL'?'ctrl':g==='PWR'?'pwr':g==='TERM'?'term':'';
const short=c=>c;

/* ---- DXF block library (import) ---- */
let DXFLIB=[]; // {name,w,h,geom:[{t,..}]}
const BLKALIAS={};
DXFLIB=[];
function resolveGeom(d){
 if(!d) return null;
 const key=d.c||d.model||d.block;
 const sp=DB.ctrl[key]||DB.mod[key];
 if(!sp && key!=='DDNP1501') return BLOCKGEOM[d.block]||null;
 const w=sp?sp.w:108, h=sp?sp.h:95;
 const g=[['P',0,0,w,0,w,h,0,h,0,0],['P',4,15,w-4,15,w-4,h-15,4,h-15,4,15]];
 const terminals=(n,y)=>{for(let i=0;i<n;i++){const x=6+(w-12)*(i+.5)/n;g.push(['P',x-2,y,x+2,y,x+2,y+7,x-2,y+7,x-2,y]);}};
 terminals(sp?3+sp.di:3,h-9);
 terminals(sp?sp.relays*2+sp.ao*2+sp.dali*2+(sp.dmx?3:0)+5:5,2);
 return {w,h,ox:0,oy:0,g};
}
function parseDXF(text){
 const L=text.split(/\r\n|\r|\n/);const pr=[];
 for(let i=0;i+1<L.length;i+=2)pr.push([parseInt(L[i].trim()),L[i+1]]);
 const out=[];let i=0,n=pr.length;
 while(i<n){
   if(pr[i][0]===0&&pr[i][1].trim()==='BLOCK'){
     let name='',geom=[],xmin=1e9,ymin=1e9,xmax=-1e9,ymax=-1e9;i++;
     // header of block
     while(i<n&&!(pr[i][0]===0)){if(pr[i][0]===2)name=pr[i][1].trim();i++;}
     // entities until ENDBLK
     while(i<n&&!(pr[i][0]===0&&pr[i][1].trim()==='ENDBLK')){
       const et=pr[i][1].trim();
       if(pr[i][0]===0&&(et==='LINE'||et==='LWPOLYLINE'||et==='POLYLINE'||et==='CIRCLE'||et==='ARC')){
         i++;let e={t:et,pts:[],x:0,y:0,x2:0,y2:0,r:0};let lastx=null;
         while(i<n&&pr[i][0]!==0){const c=pr[i][0],v=parseFloat(pr[i][1]);
           if(c===10){e.x=v;lastx=v;}if(c===20){e.y=v;if(lastx!==null){e.pts.push([lastx,v]);lastx=null;}}
           if(c===11)e.x2=v;if(c===21)e.y2=v;if(c===40)e.r=v;i++;}
         let xs,ys;
         if(e.t==='LINE'){xs=[e.x,e.x2];ys=[e.y,e.y2];}
         else if(e.t==='CIRCLE'||e.t==='ARC'){xs=[e.x-e.r,e.x+e.r];ys=[e.y-e.r,e.y+e.r];}
         else {xs=e.pts.map(p=>p[0]);ys=e.pts.map(p=>p[1]);}
         xs.forEach(v=>{if(!isNaN(v)){if(v<xmin)xmin=v;if(v>xmax)xmax=v;}});ys.forEach(v=>{if(!isNaN(v)){if(v<ymin)ymin=v;if(v>ymax)ymax=v;}});
         geom.push(e);
       } else i++;
     }
     if(name&&!name.startsWith('*')&&xmax>xmin)out.push({name,w:Math.round(xmax-xmin),h:Math.round(ymax-ymin),ox:xmin,oy:ymin,geom});
   } else i++;
 }
 return out;
}

/* ---- STATE ---- */
let SELD=[], PANEL=[], DOOR=[], MODE='auto', curView=0, sortP=null, sortD=null, pendingRow=null;
/* ---- Catalog máng cáp (Rộng×Cao mm) ---- */
const DUCTCAT=[
 {k:"25x45",w:25,h:45},{k:"25x60",w:25,h:60},{k:"33x33",w:33,h:33},
 {k:"40x60",w:40,h:60},{k:"45x45",w:45,h:45},{k:"60x40",w:60,h:40},
 {k:"60x60",w:60,h:60},{k:"80x80",w:80,h:80},{k:"100x80",w:100,h:80}
];
function ductByK(k){return DUCTCAT.find(d=>d.k===k)||DUCTCAT[3];}
/* ---- state máng ---- */
let VDUCT={left:{on:true,size:"40x60"}, right:{on:true,size:"40x60"}}; // máng dọc trái/phải riêng
let HDUCT={top:{on:true,size:"40x60"}, sizes:[]};                    // máng ngang: top + 1 máng/gap (size riêng)
const HDDEF="40x60";                                                  // size mặc định cho máng ngang mới
const VIEWS=["Internal Front","External Front","Top","Bottom","Mặt cắt L/R"];

const CLR=25;       // khoảng cách thiết bị cách máng (mép trên+dưới), mm
const PLATETH=20;   // tấm panel luôn dày 20mm
function geo(){const W=+q('pdW').value,H=+q('pdH').value,D=+q('pdD').value,mgX=+q('pdMgX').value,mgY=+q('pdMgY').value,pitch=Math.max(+q('pdPitch').value||110,...SELD.map(d=>d.h||90)),gap=+q('pdGap').value;
 // tấm panel = vùng trong lề (luôn có, dày 20mm)
 const plateW=Math.max(0,W-2*mgX), plateH=Math.max(0,H-2*mgY), plate=PLATETH;
 // máng dọc trái/phải riêng size
 const vL=VDUCT.left.on?ductByK(VDUCT.left.size):null, vR=VDUCT.right.on?ductByK(VDUCT.right.size):null;
 const vLW=vL?vL.w:0, vRW=vR?vR.w:0;
 const railLen=Math.max(0,plateW-vLW-vRW);
 // máng ngang: top + list sizes[] (mỗi gap 1 máng)
 const hTop=HDUCT.top.on?ductByK(HDUCT.top.size):null;
 const hSizes=(HDUCT.sizes||[]).map(k=>ductByK(k));
 const hTotalH=(hTop?hTop.h:0)+hSizes.reduce((a,d)=>a+d.h,0);
 // mỗi hàng thiết bị chiếm: pitch + 2*CLR (thiết bị cách máng 25mm mỗi mép) — nhưng pitch đã gồm rail+thiết bị
 // usableH cho các hàng = plateH - máng ngang ; số hàng tính theo (pitch + 2*CLR)
 const rowUnit=pitch+2*CLR;
 const usableH=Math.max(0,plateH-hTotalH);
 const rows=Math.max(0,Math.floor(usableH/rowUnit));
 return {W,H,D,mgX,mgY,pitch,railLen,usableH,rows,gap,plate,
   plateW,plateH, vL,vR,vLW,vRW, hTop,hSizes,hTotalH, rowUnit, CLR};}
/* đồng bộ HDUCT.sizes = số gap giữa các hàng (rows-1). Fixed-point: lặp tới khi ổn định
   (thêm máng → giảm hàng → giảm gap...). Giữ size cũ, máng mới = HDDEF. */
function syncHDucts(){
  for(let it=0; it<12; it++){
    const rows=geo().rows;
    const wantGaps=Math.max(0, rows-1);
    const cur=HDUCT.sizes||[];
    if(cur.length===wantGaps) break;
    if(cur.length>wantGaps) HDUCT.sizes=cur.slice(0,wantGaps);
    else { HDUCT.sizes=cur.slice(); while(HDUCT.sizes.length<wantGaps) HDUCT.sizes.push(HDDEF); }
  }
}
function packMM(arr,cap){let r=0,x=0,out=[];arr.forEach(d=>{if(x>0&&x+d.w>cap){r++;x=0;}out.push({...d,row:r,x});x+=d.w;});return {out,rows:out.length?Math.max(...out.map(o=>o.row))+1:0};}
function expand(list){let a=[];list.slice().sort((x,y)=>ord(x)-ord(y)).forEach(d=>{for(let k=0;k<d.qty;k++)a.push({c:d.c,g:d.g,w:+d.w,h:d.h,block:d.block||d.c});});return a;}
function arrange(){if(typeof syncHDucts==='function')syncHDucts();const G=geo();if(MODE==='auto'){const all=expand(SELD);const pk=packMM(all,G.railLen);let i=pk.out.findIndex(o=>o.row>=G.rows);if(i<0)i=pk.out.length;PANEL=pk.out.slice(0,i).map(o=>({c:o.c,g:o.g,w:o.w,h:o.h,block:o.block}));DOOR=pk.out.slice(i).map(o=>({c:o.c,g:o.g,w:o.w,h:o.h,block:o.block}));}render();}

/* ---- library + selection ---- */
function renderLib(){const s=(q('pdSearch').value||'').toLowerCase();
 if(q('pdDxfStat')&&!q('pdDxfStat').textContent)q('pdDxfStat').textContent='11 block chức năng Dynalite (GEC)';
 q('pdLib').innerHTML=LIB.filter(x=>(x.c+x.d).toLowerCase().includes(s)).map(x=>
  `<div class="pd-li" data-add="${x.c}"><div><b>${x.c}</b>${x.dxf?' <span style="font-size:8.5px;background:#0EA5E9;color:#fff;padding:1px 4px;border-radius:7px;vertical-align:middle">DXF</span>':''}<div style="font-size:10px;color:var(--muted)">${x.d}</div></div><span class="mm">${x.w}×${x.h}·${x.g==='TERM'?'dải':ceil(x.w)+'md'}</span></div>`).join('');
 q('pdLib').querySelectorAll('[data-add]').forEach(el=>el.onclick=()=>addDev(el.dataset.add));}
function addDev(c){const b=byc(c);if(!b)return;const e=SELD.find(x=>x.c===c);if(e)e.qty++;else SELD.push({...b,qty:1,price:0,block:(b.block||c)});renderSel();arrange();}
function blkOptions(sel){const names=[...new Set([sel,...DXFLIB.map(b=>b.name)])];
 return names.map(nu=>`<option ${nu===sel?'selected':''}>${nu}</option>`).join('')+'<option value="__up">＋ Tải DXF…</option>';}
function renderSel(){
 q('pdSelBody').innerHTML=SELD.map((x,i)=>`<tr>
  <td><b>${x.c}</b></td>
  <td><input type="number" min="1" value="${x.qty}" data-k="qty" data-i="${i}"></td>
  <td style="text-align:center;font-family:JetBrains Mono">${x.g==='TERM'?'dải':ceil(x.w)}</td>
  <td><select data-k="z" data-i="${i}"><option ${x.z==='CỬA'?'selected':''}>CỬA</option><option ${x.z==='TỦ'?'selected':''}>TỦ</option><option ${x.z==='TỰ DO'?'selected':''}>TỰ DO</option></select></td>
  <td><select class="blk" data-blk="${i}">${blkOptions(x.block||x.c)}</select></td>
  <td><button class="tinybtn" data-del="${i}">✕</button></td></tr>`).join('')||'<tr><td colspan="6" class="hint">Chưa chọn thiết bị</td></tr>';
 q('pdSelBody').querySelectorAll('[data-k]').forEach(el=>el.onchange=e=>{const i=+e.target.dataset.i,k=e.target.dataset.k;SELD[i][k]=k==='z'?e.target.value:+e.target.value;renderSel();arrange();});
 q('pdSelBody').querySelectorAll('[data-blk]').forEach(el=>el.onchange=e=>{const i=+e.target.dataset.blk;if(e.target.value==='__up'){pendingRow=i;q('pdDxfFile').click();renderSel();}else{SELD[i].block=e.target.value;const m=DXFLIB.find(b=>b.name===e.target.value);if(m){SELD[i].w=m.w;SELD[i].h=m.h;}renderSel();arrange();}});
 q('pdSelBody').querySelectorAll('[data-del]').forEach(el=>el.onclick=()=>{SELD.splice(+el.dataset.del,1);renderSel();arrange();});
 calcCost();
}

/* ---- zones + drag ---- */
function renderZones(){const G=geo();fillZone('pdZonePanel',PANEL,G);fillZone('pdZoneDoor',DOOR,G);
 const pP=packMM(PANEL,G.railLen),pD=packMM(DOOR,G.railLen);
 q('pdPanelMod').textContent=`${PANEL.reduce((a,d)=>a+ceil(d.w),0)}md · ${pP.rows}/${G.rows} hàng`;
 q('pdDoorMod').textContent=`${DOOR.reduce((a,d)=>a+ceil(d.w),0)}md · ${pD.rows} hàng`;
 if(sortP){sortP.destroy();sortP=null;}if(sortD){sortD.destroy();sortD=null;}
 if(MODE==='manual'&&window.Sortable){sortP=Sortable.create(q('pdZonePanel'),{group:'pz',animation:140,onEnd:syncZones});sortD=Sortable.create(q('pdZoneDoor'),{group:'pz',animation:140,onEnd:syncZones});}}
function fillZone(id,arr,G){const pk=packMM(arr,G.railLen);
 q(id).innerHTML=pk.out.map(d=>`<div class="pd-blk ${cls(d.g)} ${d.row>=G.rows?'over':''} ${MODE==='auto'?'lock':''}" data-c="${d.c}" data-g="${d.g}" data-w="${d.w}" data-h="${d.h}" data-b="${d.block||d.c}">${short(d.c)}<i>${d.g==='TERM'?d.w+'mm':ceil(d.w)+'md'} · H${d.h}</i></div>`).join('')||'<span class="hint">— trống —</span>';}
function syncZones(){const rd=id=>Array.from(q(id).querySelectorAll('.pd-blk')).map(el=>({c:el.dataset.c,g:el.dataset.g,w:+el.dataset.w,h:+el.dataset.h,block:el.dataset.b}));
 PANEL=rd('pdZonePanel');DOOR=rd('pdZoneDoor');render();}

/* ---- preview (6 mặt) ---- */
function renderViewTabs(){q('pdViewTabs').innerHTML=VIEWS.map((v,i)=>`<button class="${i===curView?'on':''}" data-v="${i}">${v}</button>`).join('');
 q('pdViewTabs').querySelectorAll('[data-v]').forEach(b=>b.onclick=()=>{curView=+b.dataset.v;render();});}
function render(){renderViewTabs();renderZones();renderTech();if(typeof ductStat==='function')ductStat();if(typeof renderHDList==='function')renderHDList();
 const G=geo();const pP=packMM(PANEL,G.railLen),pD=packMM(DOOR,G.railLen);
 const over=pP.rows>G.rows||pD.rows>G.rows;
 q('pdStat').innerHTML=over?'<span style="color:#ef4444">⚠ tràn hàng</span>':(DOOR.length?'<span style="color:#0284C7">✓ dùng cả Door</span>':'<span style="color:#16a34a">✓ vừa Internal Front</span>');
 const v=curView;
 if(v===0)q('pdView').innerHTML=internalFront(G,pP,pD);
 else if(v===1)q('pdView').innerHTML=externalFront(G);
 else if(v===2)q('pdView').innerHTML=topBottom(G,'TOP');
 else if(v===3)q('pdView').innerHTML=topBottom(G,'BOTTOM');
 else q('pdView').innerHTML=sectionView(G,pP,pD);
 calcCost();}

function internalFront(G,pP,pD){try{
 const sc=Math.min(300/G.H,0.72),sw=G.W*sc,sh=G.H*sc,gap=54,PADL=54,PADT=72;
 const totalMdP=PANEL.reduce((a,d)=>a+ceil(d.w),0), totalMdD=DOOR.reduce((a,d)=>a+ceil(d.w),0);
 const mdPerRow=Math.floor(G.railLen/18);
 const a=plate(PADL,PADT,G,pP,sc,'PANEL '+G.plateW+'×'+G.plateH,true);
 const b=plate(PADL+sw+gap,PADT,G,pD,sc,'Cánh cửa – '+totalMdD+' md',false);
 const secW=G.D*sc*0.95, secX=PADL+sw*2+gap*2;
 const c=sectionMini(secX,PADT,G,pP,pD,sc);
 const svgW=secX+secW+110, px=PADL, py=PADT;
 let dims=dim(px,py-14,px+sw,py-14,'W = '+G.W);
 dims+=dim(px-14,py,px-14,py+sh,'H = '+G.H);
 dims+=dim(PADL+sw+gap,py-14,PADL+sw*2+gap,py-14,'W = '+G.W);
 dims+=dim(secX,py-14,secX+secW,py-14,'D = '+G.D);
 // title
 const title='<text x="'+(PADL+sw/2)+'" y="'+(PADT+sh+24)+'" text-anchor="middle" font-size="13" font-weight="700" fill="#0F2A3F" letter-spacing="1">INTERNAL FRONT VIEW</text>';
 // đường gióng ngang: nối hàng ở panel sang mặt cắt (mảnh, xám) để thấy rõ dóng khớp
 let proj='';
 try{ const pT0=PADT+G.mgY*sc; const PBp=panelBands(G,sc,pT0);
   PBp.bands.forEach(bd=>{ if(bd.type==='row'){ const midY=bd.devTop+bd.devBandH/2;
     proj+='<line x1="'+PADL+'" y1="'+midY+'" x2="'+(secX+G.D*sc*0.85)+'" y2="'+midY+'" stroke="#cbd5e1" stroke-width="0.4" stroke-dasharray="2 3" opacity="0.7"/>'; } });
 }catch(e){}
 return '<svg viewBox="0 0 '+svgW+' '+(PADT+sh+40)+'" style="width:100%"><defs>'+hatch()+ductHatch()+sectHatch()+arrM()+'</defs>'+proj+a+b+c+dims+title+'</svg>';
}catch(e){return '<div style="color:red;padding:20px">internalFront error: '+e.message+'</div>';}}
const BLOCKGEOM={};
/* vẽ hình học block (đã flatten từ DXF) fit vào ô (bx,dy,bw,dh); fallback rect nếu không có geom */
function blockCellSVG(d, bx, dy, bw, dh, co){
  const bg = resolveGeom(d);
  // nền + viền ô
  let g='<rect x="'+bx+'" y="'+dy+'" width="'+(bw-.6)+'" height="'+dh+'" fill="'+co[0]+'" stroke="'+co[1]+'" stroke-width=".6"/>';
  if(bg && bg.g && bg.g.length && bw>10 && dh>10){
    const pad=0.8, aw=bw-2*pad, ah=dh-2*pad;
    const gw=bg.w||1, gh=bg.h||1, sca=Math.min(aw/gw, ah/gh);
    const offx=bx+pad+(aw-gw*sca)/2, offy=dy+pad+(ah-gh*sca)/2;
    // DXF y-up → SVG y-down: Y' = offy + (gh - (y-oy))*sca ; X' = offx + (x-ox)*sca
    const TX=x=>offx+(x-bg.ox)*sca;
    const TY=y=>offy+(gh-(y-bg.oy))*sca;
    let p='';
    for(const e of bg.g){
      if(e[0]==='L'){ p+='<line x1="'+TX(e[1]).toFixed(1)+'" y1="'+TY(e[2]).toFixed(1)+'" x2="'+TX(e[3]).toFixed(1)+'" y2="'+TY(e[4]).toFixed(1)+'"/>'; }
      else if(e[0]==='P'){ const co2=e.slice(1); let dpath=''; for(let k=0;k<co2.length;k+=2){ dpath+=(k===0?'M':'L')+TX(co2[k]).toFixed(1)+' '+TY(co2[k+1]).toFixed(1)+' '; } p+='<path d="'+dpath+'"/>'; }
      else if(e[0]==='C'){ p+='<circle cx="'+TX(e[1]).toFixed(1)+'" cy="'+TY(e[2]).toFixed(1)+'" r="'+(e[3]*sca).toFixed(1)+'"/>'; }
    }
    g+='<g fill="none" stroke="'+co[1]+'" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round" vector-effect="non-scaling-stroke">'+p+'</g>';
  }
  return g;
}
/* ===== BỐ CỤC BAND DỌC DÙNG CHUNG (Internal Front ↔ Mặt cắt khớp 100%) =====
   topY = mép trên tấm panel (pT) ; sc = scale. Trả list band theo thứ tự dọc top→down. */
function panelBands(G, sc, topY){
  const clrPx=G.CLR*sc, rg=Math.max(13,G.pitch*sc);
  const bands=[]; let cy=topY;
  if(G.hTop){ const h=G.hTop.h*sc; bands.push({type:'duct',y:cy,h,duct:G.hTop}); cy+=h; }
  const totalRows=Math.max(0,G.rows);
  for(let r=0;r<totalRows;r++){
    const rowTop=cy, devTop=rowTop+clrPx, devBandH=Math.max(8,rg-2*clrPx), baseY=devTop+devBandH;
    bands.push({type:'row',y:rowTop,h:rg,rowIdx:r,devTop,devBandH,baseY,clrPx});
    cy=rowTop+rg;
    if(r<totalRows-1 && G.hSizes[r]){ const h=G.hSizes[r].h*sc; bands.push({type:'duct',y:cy,h,duct:G.hSizes[r]}); cy+=h; }
  }
  return {bands, bottomY:cy};
}
function plate(x0,y0,G,pk,sc,label,isPanel){
 const sw=G.W*sc,sh=G.H*sc,fill=q('pdFill').checked;
 // margins: panel dùng mgX/mgY ; cửa dùng cố định 40mm (<50mm so mép cánh)
 const DOORMG=40;
 const mgXmm = isPanel? G.mgX : DOORMG, mgYmm = isPanel? G.mgY : DOORMG;
 let g='<text x="'+(x0+sw/2)+'" y="'+(y0-38)+'" text-anchor="middle" font-size="12" font-weight="700" fill="#0F2A3F">'+label+'</text>';
 // cabinet / door panel outer
 g+='<rect x="'+x0+'" y="'+y0+'" width="'+sw+'" height="'+sh+'" rx="4" fill="#fff" stroke="#0F2A3F" stroke-width="1.6"/>';
 // mounting plate = inner margin area (LUÔN có, dày 20mm)
 const pL=x0+mgXmm*sc,pT=y0+mgYmm*sc,pR=x0+sw-mgXmm*sc,pB=y0+sh-mgYmm*sc, pW=pR-pL, pH=pB-pT;
 const plateWmm=Math.max(0,G.W-2*mgXmm), plateHmm=Math.max(0,G.H-2*mgYmm);
 g+='<rect x="'+pL+'" y="'+pT+'" width="'+pW+'" height="'+pH+'" fill="#eef6fb" stroke="#7aa7c7" stroke-width="1.2"/>';
 g+='<text x="'+(pL+3)+'" y="'+(pT+9)+'" font-size="6.5" fill="#7aa7c7" font-weight="600">TẤM PANEL '+plateWmm+'×'+plateHmm+' (dày '+PLATETH+'mm'+(isPanel?', đáy tủ':', cánh cửa lề '+DOORMG+'mm')+')</text>';

 // ===== vertical ducts (trái/phải riêng size) — full plate height =====
 const vLW = G.vL? G.vL.w*sc : 0, vRW = G.vR? G.vR.w*sc : 0;
 const railL = pL+vLW, railR = pR-vRW, railW = Math.max(2, railR-railL);
 // railLen mm cho zone này: với panel = G.railLen ; cửa = plateWmm - máng dọc
 const railLenMM = isPanel? G.railLen : Math.max(0, plateWmm-(G.vL?G.vL.w:0)-(G.vR?G.vR.w:0));
 const mm2 = railLenMM>0? railW/railLenMM : 1;
 if(G.vL){ const lab=G.vL.k.replace('x','X');
   g+='<rect x="'+pL+'" y="'+pT+'" width="'+vLW+'" height="'+pH+'" fill="url(#pd)" stroke="#16a34a" stroke-width="0.9"/>';
   g+='<text x="'+(pL+vLW/2)+'" y="'+(pT+pH/2)+'" font-size="7" fill="#15803d" font-weight="700" text-anchor="middle" transform="rotate(-90 '+(pL+vLW/2)+' '+(pT+pH/2)+')">'+lab+'</text>'; }
 if(G.vR){ const lab=G.vR.k.replace('x','X');
   g+='<rect x="'+(pR-vRW)+'" y="'+pT+'" width="'+vRW+'" height="'+pH+'" fill="url(#pd)" stroke="#16a34a" stroke-width="0.9"/>';
   g+='<text x="'+(pR-vRW/2)+'" y="'+(pT+pH/2)+'" font-size="7" fill="#15803d" font-weight="700" text-anchor="middle" transform="rotate(-90 '+(pR-vRW/2)+' '+(pT+pH/2)+')">'+lab+'</text>'; }

 // ===== horizontal ducts (top + per-gap sizes) interleaved with device rows =====
 const clrPx = G.CLR*sc;             // 25mm clearance (mép trên/dưới thiết bị ↔ máng)
 const rg = Math.max(13, G.pitch*sc), railTh=2.2;
 const byR={};pk.out.forEach(d=>{(byR[d.row]=byR[d.row]||[]).push(d);});
 const totalRows=Math.max(0,G.rows);
 const drawHDuct=(yy,duct)=>{ const hpx=duct.h*sc; const lab=duct.k.replace('x','X');
   g+='<rect x="'+railL+'" y="'+yy+'" width="'+railW+'" height="'+hpx+'" fill="url(#pd)" stroke="#2563eb" stroke-width="0.9"/>';
   g+='<text x="'+(railL+railW/2)+'" y="'+(yy+hpx/2+2.5)+'" text-anchor="middle" font-size="7.5" fill="#1e40af" font-weight="700">'+lab+'</text>';
   return hpx; };
 // ===== dùng band layout chung để vị trí Y khớp với mặt cắt =====
 const PB=panelBands(G,sc,pT);
 PB.bands.forEach(bd=>{
   if(bd.type==='duct'){ drawHDuct(bd.y,bd.duct); return; }
   const r=bd.rowIdx, rowTop=bd.y, devTop=bd.devTop, devBandH=bd.devBandH, baseY=bd.baseY;
   g+='<rect x="'+railL+'" y="'+rowTop+'" width="'+railW+'" height="'+rg+'" fill="url(#ph)" opacity="0.4"/>';
   const railY=devTop+Math.max(6,devBandH)*0.62;
   g+='<rect x="'+railL+'" y="'+railY+'" width="'+railW+'" height="'+railTh+'" fill="#94a3b8"/>';
   let used=0;
   (byR[r]||[]).forEach(d=>{const _bgH=resolveGeom(d);const _isG=_bgH&&_bgH.g&&_bgH.g.length;const _wmm=_isG&&_bgH.w?_bgH.w:(d.w||100);const _hmm=_isG&&_bgH.h?_bgH.h:(d.h||90);const dH=Math.min(devBandH,Math.max(8,_hmm*sc));const bx=railL+d.x*mm2,bw=Math.max(2, _isG? _wmm*(dH/_hmm) : _wmm*mm2);used=d.x+d.w;
     const dy=baseY-dH;
     const co=devCol(d.g); g+=blockCellSVG(d,bx,dy,bw,dH,co)+devLabel(d,bx,bw,dy,dH,co);});
   if(fill&&used<railLenMM){const fx=railL+used*mm2;g+='<rect x="'+fx+'" y="'+(baseY-devBandH)+'" width="'+((railLenMM-used)*mm2-1)+'" height="'+devBandH+'" fill="none" stroke="#cbd5e1" stroke-dasharray="3 2"/>';}
   g+='<text x="'+(railL-3)+'" y="'+(devTop+devBandH/2+2)+'" text-anchor="end" font-size="6" fill="#94a3b8">H'+(r+1)+'</text>';
 });
 g+='<text x="'+(railL+railW/2)+'" y="'+(pT-2)+'" text-anchor="middle" font-size="7" fill="#0EA5E9" font-weight="600">'+Math.floor(railLenMM/18)+' md/hàng · '+totalRows+' hàng · cách máng '+G.CLR+'mm</text>';
 return g;
}

function sectionMini(x0,y0,G,pP,pD,sc){
 // Mặt cắt dọc — 2 phía: PANEL (mặt sau, trái) + CÁNH CỬA (mặt trước, phải). Dóng ngang khớp Internal Front.
 const GEC='stroke="#0F2A3F" stroke-width="1.2" fill="none"';
 const HID='stroke="#5b6b7a" stroke-width="0.6" fill="none" stroke-dasharray="5 2"';
 const CEN='stroke="#d11" stroke-width="0.55" fill="none" stroke-dasharray="9 2 2 2"';
 const DOORMG=40;
 const sw=G.D*sc*0.95, sh=G.H*sc, mm=sw/G.D, pl=Math.max(3,G.plate*mm);
 const pT=y0+G.mgY*sc, pB=y0+sh-G.mgY*sc;
 const hasDoor=DOOR.length>0;
 let g='<text x="'+(x0+sw/2)+'" y="'+(y0-38)+'" text-anchor="middle" font-size="12" font-weight="700" fill="#0F2A3F">SECTION VIEW (mặt cắt dọc)</text>';
 // khung tủ
 g+='<rect x="'+x0+'" y="'+y0+'" width="'+sw+'" height="'+sh+'" '+GEC+'/>';
 // --- tấm panel mặt SAU (trái) ---
 g+='<rect x="'+x0+'" y="'+pT+'" width="'+pl+'" height="'+(pB-pT)+'" fill="url(#sh)" '+GEC+'/>';
 g+='<text x="'+(x0+pl/2)+'" y="'+(pB-2)+'" font-size="5" fill="#7aa7c7" font-weight="600" text-anchor="middle" transform="rotate(-90 '+(x0+pl/2)+' '+(pB-2)+')">PANEL SAU</text>';
 const baseX=x0+pl;                      // gốc lắp TB panel (chiếu sang phải)
 // --- tấm cánh cửa mặt TRƯỚC (phải) nếu có door ---
 const doorPlX=x0+sw-pl;                  // mép trong cánh cửa (TB door chiếu sang trái)
 if(hasDoor){
   g+='<rect x="'+(x0+sw-pl)+'" y="'+pT+'" width="'+pl+'" height="'+(pB-pT)+'" fill="url(#sh)" '+GEC+'/>';
   g+='<text x="'+(x0+sw-pl/2)+'" y="'+(pB-2)+'" font-size="5" fill="#2563eb" font-weight="600" text-anchor="middle" transform="rotate(-90 '+(x0+sw-pl/2)+' '+(pB-2)+')">CÁNH CỬA</text>';
 }
 // đường tâm DỌC giữa chiều sâu thiết bị panel
 const axisX=baseX+(90*mm)/2;
 g+='<line x1="'+axisX+'" y1="'+(y0-6)+'" x2="'+axisX+'" y2="'+(y0+sh+6)+'" '+CEN+'/>';
 // ===== PANEL side: panelBands(topY=pT) — khớp Internal Front =====
 const PBp=panelBands(G,sc,pT);
 const byRp={};pP.out.forEach(d=>{(byRp[d.row]=byRp[d.row]||[]).push(d);});
 PBp.bands.forEach(bd=>{
   if(bd.type==='duct'){ const dep=bd.duct.w*mm;
     g+='<rect x="'+baseX+'" y="'+bd.y+'" width="'+dep+'" height="'+bd.h+'" fill="url(#sh)" '+GEC+'/>';
     g+='<text x="'+(baseX+dep+2)+'" y="'+(bd.y+bd.h/2+2)+'" font-size="5" fill="#1e40af">'+bd.duct.k.replace('x','X')+'</text>'; return; }
   const r=bd.rowIdx, items=byRp[r]||[];
   const dep=(items.length?Math.max(...items.map(depOf)):90)*mm;
   const ry=bd.devTop, ph=bd.devBandH;
   g+='<rect x="'+baseX+'" y="'+ry+'" width="'+dep+'" height="'+ph+'" '+GEC+'/>';
   g+='<line x1="'+baseX+'" y1="'+(ry+ph*0.3)+'" x2="'+(baseX+dep)+'" y2="'+(ry+ph*0.3)+'" '+HID+'/>';
   const midY=ry+ph/2;
   g+='<line x1="'+(x0-6)+'" y1="'+midY+'" x2="'+(baseX+dep+6)+'" y2="'+midY+'" '+CEN+'/>';
   g+='<text x="'+(baseX+dep/2)+'" y="'+(ry+ph-2)+'" text-anchor="middle" font-size="5" fill="#0F2A3F">'+(items.length?short(items[0].c):'')+'</text>';
   g+='<text x="'+(x0-9)+'" y="'+(midY+2)+'" text-anchor="end" font-size="5.5" fill="#94a3b8">H'+(r+1)+'</text>';
 });
 // ===== DOOR side: panelBands(topY=pT_door với lề 40mm) — TB chiếu sang TRÁI =====
 if(hasDoor){
   const pTd=y0+DOORMG*sc;
   const PBd=panelBands(G,sc,pTd);
   const byRd={};pD.out.forEach(d=>{(byRd[d.row]=byRd[d.row]||[]).push(d);});
   PBd.bands.forEach(bd=>{
     if(bd.type==='duct'){ const dep=bd.duct.w*mm;
       g+='<rect x="'+(doorPlX-dep)+'" y="'+bd.y+'" width="'+dep+'" height="'+bd.h+'" fill="url(#sh)" '+GEC+'/>';
       g+='<text x="'+(doorPlX-dep-2)+'" y="'+(bd.y+bd.h/2+2)+'" font-size="5" fill="#1e40af" text-anchor="end">'+bd.duct.k.replace('x','X')+'</text>'; return; }
     const r=bd.rowIdx, items=byRd[r]||[];
     const dep=(items.length?Math.max(...items.map(depOf)):90)*mm;
     const ry=bd.devTop, ph=bd.devBandH;
     g+='<rect x="'+(doorPlX-dep)+'" y="'+ry+'" width="'+dep+'" height="'+ph+'" fill="#dbeafe" '+GEC.replace('#0F2A3F','#1e3a8a')+'/>';
     g+='<line x1="'+(doorPlX-dep)+'" y1="'+(ry+ph*0.3)+'" x2="'+doorPlX+'" y2="'+(ry+ph*0.3)+'" '+HID+'/>';
     const midY=ry+ph/2;
     g+='<line x1="'+(doorPlX-dep-6)+'" y1="'+midY+'" x2="'+(x0+sw+6)+'" y2="'+midY+'" '+CEN+'/>';
     g+='<text x="'+(doorPlX-dep/2)+'" y="'+(ry+ph-2)+'" text-anchor="middle" font-size="5" fill="#1e3a8a">'+(items.length?short(items[0].c):'')+'</text>';
     g+='<text x="'+(x0+sw+9)+'" y="'+(midY+2)+'" text-anchor="start" font-size="5.5" fill="#94a3b8">D'+(r+1)+'</text>';
   });
 }
 g+='<text x="'+x0+'" y="'+(y0+sh+12)+'" font-size="5.8" fill="#64748b">— liền · -- đứt · ·- tâm · TB theo catalog · PANEL (trái) + CỬA (phải) · dóng ngang khớp</text>';
 return g;}

function externalFront(G){const sc=Math.min(330/G.H,0.78),sw=G.W*sc,sh=G.H*sc,x0=120,y0=48;
 let g=`<text x="${x0+sw/2}" y="16" text-anchor="middle" font-size="12" font-weight="700" fill="#0F2A3F">EXTERNAL FRONT VIEW</text>`;
 g+=`<rect x="${x0}" y="${y0}" width="${sw}" height="${sh}" rx="5" fill="#fff" stroke="#0F2A3F" stroke-width="1.4"/>`;
 g+=`<rect x="${x0+8}" y="${y0+8}" width="${sw-16}" height="${sh-16}" fill="none" stroke="#94a3b8" stroke-dasharray="5 3"/>`;
 g+=`<rect x="${x0+sw-26}" y="${y0+sh/2-10}" width="9" height="20" rx="2" fill="#fff" stroke="#0F2A3F"/>`; // lock
 g+=`<rect x="${x0+sw/2-40}" y="${y0+18}" width="80" height="14" fill="#0F2A3F"/><text x="${x0+sw/2}" y="${y0+28}" text-anchor="middle" font-size="8" fill="#fff">RCU-ST</text>`;
 g+=`<rect x="${x0+sw/2-30}" y="${y0+sh-34}" width="60" height="20" fill="none" stroke="#94a3b8"/><line x1="${x0+sw/2-30}" y1="${y0+sh-34}" x2="${x0+sw/2+30}" y2="${y0+sh-14}" stroke="#cbd5e1"/><line x1="${x0+sw/2+30}" y1="${y0+sh-34}" x2="${x0+sw/2-30}" y2="${y0+sh-14}" stroke="#cbd5e1"/><text x="${x0+sw/2}" y="${y0+sh-2}" text-anchor="middle" font-size="7" fill="#64748b">OPENING FOR CABLE EXIT</text>`;
 g+=dim(x0,y0-14,x0+sw,y0-14,'W='+G.W);
 return `<svg viewBox="0 0 ${x0*2+sw} ${sh+50}" style="max-width:520px"><defs>${arrM()}</defs>${g}</svg>`;}
function topBottom(G,which){const sc=Math.min(360/G.W,0.85),sw=G.W*sc,sd=Math.max(34,G.D*sc),x0=50,y0=50;
 let g=`<text x="${x0+sw/2}" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#0F2A3F">${which} VIEW (EXTERNAL)</text>`;
 g+=`<rect x="${x0}" y="${y0}" width="${sw}" height="${sd}" rx="3" fill="#fff" stroke="#0F2A3F" stroke-width="1.4"/>`;
 // cable entry slots
 const ne=Math.max(2,Math.round(sw/70));for(let k=0;k<ne;k++){const ex=x0+sw*(k+1)/(ne+1)-9;g+=`<rect x="${ex}" y="${y0+sd/2-4}" width="18" height="8" rx="2" fill="${which==='TOP'?'#e0f2fe':'#fff'}" stroke="#0369a1"/>`;}
 g+=`<text x="${x0+sw/2}" y="${y0+sd+16}" text-anchor="middle" font-size="9" fill="#64748b">CABLES ENTRY · ${which}</text>`;
 g+=dim(x0,y0-14,x0+sw,y0-14,'W='+G.W)+dim(x0+sw+10,y0,x0+sw+10,y0+sd,'D='+G.D);
 return `<svg viewBox="0 0 ${x0*2+sw+30} ${sd+70}" style="max-width:520px"><defs>${arrM()}</defs>${g}</svg>`;}
function sectionView(G,pP,pD){
 // ===== MẶT CẮT theo chiều dài tấm panel — chuẩn nét vẽ kỹ thuật =====
 // nét: liền đậm (thấy) · đứt (khuất) · chấm-gạch đỏ (đường tâm)
 const GEC='stroke="#0F2A3F" stroke-width="1.4" fill="none"';        // nét liền (cạnh thấy)
 const HID='stroke="#5b6b7a" stroke-width="0.7" fill="none" stroke-dasharray="6 2.5"';  // nét đứt (khuất)
 const CEN='stroke="#d11" stroke-width="0.6" fill="none" stroke-dasharray="11 2 2.5 2"';// nét chấm-gạch (tâm)
 const sc=Math.min(300/G.plateH,0.66);
 const plateLen=G.plateH*sc;
 const x0=86, y0=46;
 const dsc=Math.max(150,G.D*sc*2.0), mm=dsc/G.D;
 const plateTh=Math.max(4,G.plate*mm);
 const rg=(G.pitch+2*G.CLR)*sc, clrPx=G.CLR*sc;
 let g=`<text x="${x0+dsc/2}" y="18" text-anchor="middle" font-size="12" font-weight="700" fill="#0F2A3F">MẶT CẮT L/R (theo chiều dài tấm panel)</text>`;
 // --- khung tủ: nét liền đậm ---
 g+=`<rect x="${x0}" y="${y0}" width="${dsc}" height="${plateLen}" ${GEC}/>`;
 // --- tấm panel (đáy tủ) — phần bị cắt: gạch mặt cắt 45° + nét liền ---
 g+=`<rect x="${x0}" y="${y0}" width="${plateTh}" height="${plateLen}" fill="url(#sh)" ${GEC}/>`;
 g+=`<text x="${x0+plateTh+2}" y="${y0+plateLen-3}" font-size="6" fill="#7aa7c7" font-weight="600" transform="rotate(-90 ${x0+plateTh+2} ${y0+plateLen-3})">TẤM PANEL (đáy tủ, dày ${G.plate})</text>`;
 const baseX=x0+plateTh;
 // --- đường tâm DỌC tổng thể (giữa chiều sâu cụm thiết bị) ---
 const axisX=baseX+(90*mm)/2;   // tâm theo chiều sâu thiết bị 90mm
 g+=`<line x1="${axisX}" y1="${y0-8}" x2="${axisX}" y2="${y0+plateLen+8}" ${CEN}/>`;
 // --- máng ngang (nét liền) tại vị trí dọc ---
 const drawHD=(yy,duct)=>{ const hpx=duct.h*sc, dep=duct.w*mm;
   g+=`<rect x="${baseX}" y="${yy}" width="${dep}" height="${hpx}" fill="url(#sh)" ${GEC}/>`;
   g+=`<text x="${baseX+dep+3}" y="${yy+hpx/2+2}" font-size="6" fill="#1e40af" font-weight="600">${duct.k.replace('x','X')}</text>`; return hpx; };
 let cy=y0;
 if(G.hTop){ cy+=drawHD(cy,G.hTop); }
 const totalRows=Math.max(0,G.rows);
 const byR={};pP.out.forEach(d=>{(byR[d.row]=byR[d.row]||[]).push(d);});
 for(let r=0;r<totalRows;r++){
   const rowTop=cy, ry=rowTop+clrPx;
   const items=byR[r]||[];
   const dep=(items.length?Math.max(...items.map(depOf)):90)*mm;   // chiều sâu (TB chính 90mm)
   const ph=Math.max(8, Math.min(rg-2*clrPx, 90*sc));               // chiều cao theo dọc
   // profile thiết bị: NÉT LIỀN
   g+=`<rect x="${baseX}" y="${ry}" width="${dep}" height="${ph}" ${GEC}/>`;
   // mép sau thiết bị (khuất) + chân DIN: NÉT ĐỨT
   g+=`<line x1="${baseX}" y1="${ry+ph*0.30}" x2="${baseX+dep}" y2="${ry+ph*0.30}" ${HID}/>`;
   g+=`<line x1="${baseX+dep*0.62}" y1="${ry}" x2="${baseX+dep*0.62}" y2="${ry+ph}" ${HID}/>`;
   // đường tâm NGANG qua giữa thiết bị (chấm-gạch đỏ)
   const midY=ry+ph/2;
   g+=`<line x1="${x0-10}" y1="${midY}" x2="${baseX+dep+10}" y2="${midY}" ${CEN}/>`;
   const lab=items.length? short(items[0].c) : '—';
   g+=`<text x="${baseX+dep/2}" y="${ry+ph-2}" text-anchor="middle" font-size="6" fill="#0F2A3F" font-family="JetBrains Mono">${lab}</text>`;
   g+=`<text x="${x0-13}" y="${midY+2}" text-anchor="end" font-size="6" fill="#64748b" font-weight="600">H${r+1}</text>`;
   cy=rowTop+rg;
   if(r<totalRows-1 && G.hSizes[r]){ cy+=drawHD(cy,G.hSizes[r]); }
 }
 // ===== CÁNH CỬA (mặt trước, phải) — TB door chiếu sang TRÁI, dùng lề 40mm =====
 if(DOOR.length){
   const DOORMG=40, doorPlX=x0+dsc-plateTh;
   g+=`<rect x="${doorPlX}" y="${y0}" width="${plateTh}" height="${plateLen}" fill="url(#sh)" ${GEC}/>`;
   g+=`<text x="${doorPlX+plateTh/2}" y="${y0+plateLen-3}" font-size="5.5" fill="#2563eb" font-weight="600" text-anchor="middle" transform="rotate(-90 ${doorPlX+plateTh/2} ${y0+plateLen-3})">CÁNH CỬA</text>`;
   const byRd={};pD.out.forEach(d=>{(byRd[d.row]=byRd[d.row]||[]).push(d);});
   // door dùng plateH theo lề 40 — nhưng để dóng trong cùng khung, dùng cùng y0 + (DOORMG-mgY)*sc offset
   const offD=(DOORMG-G.mgY)*sc;
   let cyd=y0+offD; const drawHDd=(yy,duct)=>{const hpx=duct.h*sc,dep=duct.w*mm;g+=`<rect x="${doorPlX-dep}" y="${yy}" width="${dep}" height="${hpx}" fill="url(#sh)" ${GEC}/>`;g+=`<text x="${doorPlX-dep-3}" y="${yy+hpx/2+2}" font-size="5.5" fill="#1e40af" text-anchor="end">${duct.k.replace('x','X')}</text>`;return hpx;};
   if(G.hTop){ cyd+=drawHDd(cyd,G.hTop); }
   for(let r=0;r<totalRows;r++){
     const rowTop=cyd, ry=rowTop+clrPx, items=byRd[r]||[];
     const dep=(items.length?Math.max(...items.map(depOf)):90)*mm, ph=Math.max(8,Math.min(rg-2*clrPx,90*sc));
     g+=`<rect x="${doorPlX-dep}" y="${ry}" width="${dep}" height="${ph}" fill="#dbeafe" stroke="#1e3a8a" stroke-width="1.2"/>`;
     g+=`<line x1="${doorPlX-dep}" y1="${ry+ph*0.3}" x2="${doorPlX}" y2="${ry+ph*0.3}" ${HID}/>`;
     const midY=ry+ph/2;
     g+=`<line x1="${doorPlX-dep-10}" y1="${midY}" x2="${x0+dsc+10}" y2="${midY}" ${CEN}/>`;
     g+=`<text x="${doorPlX-dep/2}" y="${ry+ph-2}" text-anchor="middle" font-size="5.5" fill="#1e3a8a" font-family="JetBrains Mono">${items.length?short(items[0].c):''}</text>`;
     g+=`<text x="${x0+dsc+13}" y="${midY+2}" text-anchor="start" font-size="6" fill="#64748b" font-weight="600">D${r+1}</text>`;
     cyd=rowTop+rg;
     if(r<totalRows-1 && G.hSizes[r]) cyd+=drawHDd(cyd,G.hSizes[r]);
   }
 }
 // --- kích thước (đường gióng + đường kích thước) ---
 g+=dim(x0-22,y0,x0-22,y0+plateLen,'L = '+G.plateH);
 g+=dim(x0,y0-16,x0+dsc,y0-16,'D = '+G.D);
 g+=dim(baseX,y0+plateLen+14,baseX+90*mm,y0+plateLen+14,'90');   // chiều cao TB
 // --- chú thích loại nét ---
 const ly=y0+plateLen+30;
 g+=`<line x1="${x0}" y1="${ly}" x2="${x0+18}" y2="${ly}" ${GEC}/><text x="${x0+22}" y="${ly+2.5}" font-size="6.5" fill="#0F2A3F">Nét liền: cạnh thấy</text>`;
 g+=`<line x1="${x0+120}" y1="${ly}" x2="${x0+138}" y2="${ly}" ${HID}/><text x="${x0+142}" y="${ly+2.5}" font-size="6.5" fill="#5b6b7a">Nét đứt: cạnh khuất</text>`;
 g+=`<line x1="${x0}" y1="${ly+12}" x2="${x0+18}" y2="${ly+12}" ${CEN}/><text x="${x0+22}" y="${ly+14.5}" font-size="6.5" fill="#d11">Chấm-gạch: đường tâm</text>`;
 g+=`<rect x="${x0+120}" y="${ly+8}" width="14" height="7" fill="url(#sh)" ${GEC}/><text x="${x0+138}" y="${ly+14.5}" font-size="6.5" fill="#0F2A3F">Gạch: mặt cắt</text>`;
 g+=`<text x="${x0}" y="${ly+26}" font-size="7.5" fill="#64748b">Chiều sâu theo catalog · cách máng ${G.CLR}mm · đối chiếu hàng H1..H${totalRows} với Internal Front.</text>`;
 return `<svg viewBox="0 0 ${x0+dsc+95} ${plateLen+96}" style="max-width:560px"><defs>${hatch()}${ductHatch()}${sectHatch()}${arrM()}</defs>${g}</svg>`;}

function renderTech(){const G=geo();const f=(k,v)=>`<td>${k}</td><td><input value="${v}" data-td="${k}"></td>`;
 q('pdTechData').innerHTML=`<table class="pd-td">
  <tr>${f('SWITCHGEAR NAME','RCU-ST')}${f('FORMS OF SEPARATION','1')}</tr>
  <tr>${f('TOTAL WIDTH (mm)',G.W)}${f('OPERATION','FRONT')}</tr>
  <tr>${f('DEPTH (mm)',G.D)}${f('LOCATION','INDOOR')}</tr>
  <tr>${f('HEIGHT (mm)',G.H)}${f('ACCESSIBILITY','WALL MOUNTED')}</tr>
  <tr>${f('POWER COATING','RAL 7035 · INDOOR')}${f('CABLES ENTRY','TOP & BOTTOM')}</tr>
  <tr>${f('FINISHING','EPOXY POWDER COATING')}${f('FRAME/DOOR THICKNESS','1.2 mm')}</tr>
  <tr>${f('MATERIAL','ELECTRO-GALVANISED STEEL')}${f('IP PROTECTION','IP41')}</tr>
  <tr>${f('THICKNESS','MIN 65 MICRONS')}${f('LABEL','WHITE/BLACK')}</tr></table>`;}

const hatch=()=>`<pattern id="ph" width="6" height="6" patternUnits="userSpaceOnUse"><rect width="6" height="6" fill="#dbe4ec"/><line x1="3" y1="1" x2="3" y2="5" stroke="#9fb3c8" stroke-width=".7"/></pattern>`;
const ductHatch=()=>`<pattern id="pd" width="7" height="7" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="7" height="7" fill="#eafaf0"/><line x1="0" y1="0" x2="0" y2="7" stroke="#86efac" stroke-width="1.1"/></pattern>`;
const sectHatch=()=>`<pattern id="sh" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><rect width="5" height="5" fill="#fff"/><line x1="0" y1="0" x2="0" y2="5" stroke="#9aa7b2" stroke-width="0.5"/></pattern>`;
function devCol(gp){ return gp==='CTRL'?['#dbeafe','#2563eb']:gp==='PWR'?['#fef3c7','#d97706']:gp==='TERM'?['#e2e8f0','#64748b']:['#bae6fd','#0369a1']; }
function devLabel(d,bx,bw,dy,dH,co){ if(bw<=20) return ''; const _bg=resolveGeom(d); const hasG=_bg&&_bg.g&&_bg.g.length;
  /* V15: label centered in body clear-zone (between terminal strips), full SKU, halo for legibility */
  const txt=(d.c||''); const fs=Math.min(7, bw/(Math.max(6,txt.length)*0.62)); const cx=bx+bw/2, cy=dy+dH/2+fs/3;
  const halo='<rect x="'+(cx-txt.length*fs*0.32)+'" y="'+(cy-fs)+'" width="'+(txt.length*fs*0.64)+'" height="'+(fs*1.35)+'" fill="#dbeafe" opacity="0.78" rx="1.5"/>';
  return halo+'<text x="'+cx+'" y="'+cy+'" text-anchor="middle" font-size="'+fs+'" fill="'+co[1]+'" font-family="JetBrains Mono" font-weight="600">'+txt+'</text>'; }
const arrM=()=>`<marker id="am" markerWidth="8" markerHeight="8" refX="5" refY="3" orient="auto-start-reverse"><path d="M0,0 L6,3 L0,6 Z" fill="#64748b"/></marker>`;
const dim=(x1,y1,x2,y2,t)=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#64748b" stroke-width=".8" marker-start="url(#am)" marker-end="url(#am)"/><text x="${(x1+x2)/2}" y="${y1===y2?y1-3:(y1+y2)/2}" text-anchor="middle" font-size="9" fill="#64748b">${t}</text>`;

/* ---- COST ---- */
function calcCost(){if(!q('pdCostShell'))return;const G=geo(),t=+q('pdTShell').value,tp=+q('pdTPlate').value,pSteel=+q('pdPSteel').value,waste=1+(+q('pdWaste').value)/100,pPaint=+q('pdPPaint').value,pLabor=+q('pdPLabor').value,STEEL=7.85;
 const shellArea=(G.W*G.H+2*G.H*G.D+2*G.W*G.D+G.W*G.H)/1e6,plateArea=Math.max(0,(G.W-100)*(G.H-100))/1e6;
 const kg=(shellArea*t+plateArea*tp)*STEEL*waste;
 const totMd=SELD.reduce((a,x)=>a+(x.g==='TERM'?x.qty:ceil(x.w)*x.qty),0);
 const railM=G.rows*G.railLen/1000,ductM=(G.rows*G.railLen+2*G.usableH)/1000,perim=2*(G.W+G.H)/1000;
 const acc=[['Tôn vỏ + panel',kg.toFixed(1),'kg',pSteel,kg*pSteel],['Sơn tĩnh điện',shellArea.toFixed(2),'m²',pPaint,shellArea*pPaint],['Khóa·bản lề·gioăng',1,'bộ',180000,180000+perim*25000],['Ray DIN + máng',(railM+ductM).toFixed(1),'m',32000,(railM+ductM)*32000],['Đồng·dây·ốc cáp',1,'lô',520000,520000],['Terminal + ghen số',totMd,'md',6000,totMd*6000],['Nhân công đấu nối',totMd,'md',pLabor,totMd*pLabor]];
 const shellCost=acc.reduce((a,r)=>a+r[4],0);
 q('pdCostShell').innerHTML='<table class="pd-tbl"><thead><tr><th>Hạng mục</th><th>KL</th><th>ĐVT</th><th>Đơn giá</th><th>T.tiền</th></tr></thead><tbody>'+acc.map(r=>`<tr><td>${r[0]}</td><td>${r[1]}</td><td style="text-align:center">${r[2]}</td><td>${fmt(r[3])}</td><td>${fmt(r[4])}</td></tr>`).join('')+`<tr style="font-weight:700"><td colspan="4">Cộng vỏ tủ + gia công</td><td>${fmt(shellCost)}</td></tr></tbody></table>`;
 let devCost=0;
 let rowsHtml='';
 SELD.forEach((x,i)=>{
   const unit=+x.price||0, line=unit*x.qty;
   devCost+=line;
   rowsHtml+='<tr><td><b>'+x.c+'</b></td>'
     +'<td style="text-align:center">'+x.qty+'</td>'
     +'<td><input type="number" min="0" step="1000" value="'+unit+'" data-price="'+i+'" style="width:100px"></td>'
     +'<td style="text-align:right">'+fmt(line)+'</td></tr>';
 });
 q('pdDevCost').innerHTML=SELD.length
   ? '<table class="pd-tbl"><thead><tr><th>Thiết bị</th><th>SL</th><th>Đơn giá</th><th>Thành tiền</th></tr></thead><tbody>'
     +rowsHtml
     +'<tr style="font-weight:700"><td colspan="3">Cộng thiết bị</td><td style="text-align:right">'+fmt(devCost)+'</td></tr>'
     +'</tbody></table>'
   : '<span class="hint">Chưa có thiết bị — thêm ở tab “Bố trí tủ điện”.</span>';
 q('pdDevCost').querySelectorAll('[data-price]').forEach(el=>el.onchange=e=>{
   const i=+e.target.dataset.price; if(SELD[i]){SELD[i].price=+e.target.value||0; calcCost();}
 });
 const total=shellCost+devCost;
 const factor=+q('pdFactor').value||1;
 q('pdTotCost').textContent=fmt(total);
 q('pdTotKg').textContent=fmt(kg)+' kg';
 q('pdSell').textContent=fmt(total*factor);
}

/* ---- PANEL LISP EXPORT (RCU LAYOUT) ---- */
function panelPrims(){
 const G=geo(), P=[];
 const DOORMG=40;
 // helper push
 const R=(x1,y1,x2,y2,lay,dash)=>P.push(Object.assign({t:'rect',x1,y1,x2,y2,layer:lay},dash?{dash:1}:{}));
 const L=(x1,y1,x2,y2,lay)=>P.push({t:'line',x1,y1,x2,y2,layer:lay});
 const T=(x,y,h,str,lay,anc)=>P.push({t:'text',x,y,h,str,layer:lay,anc:anc||'l'});
 // ===== ONE FRONT VIEW (panel hoặc cửa) tại gốc (ox,oy), Y-up =====
 // trả về chiều rộng đã vẽ
 function frontView(ox,oy,isPanel,arr,title){
   const mgX=isPanel?G.mgX:DOORMG, mgY=isPanel?G.mgY:DOORMG;
   const plateW=Math.max(0,G.W-2*mgX), plateH=Math.max(0,G.H-2*mgY);
   // cabinet
   R(ox,oy,ox+G.W,oy+G.H,'GEC-FRAME');
   T(ox+G.W/2, oy+G.H+30, 8, title, 'GEC-TITLE','m');
   T(ox+G.W/2, oy+G.H+18, 5, G.W+'x'+G.H+'x'+G.D, 'GEC-TXT','m');
   // mounting plate (always, 20mm)
   const plL=ox+mgX, plB=oy+mgY, plR=ox+G.W-mgX, plT=oy+G.H-mgY;
   R(plL,plB,plR,plT,'GEC-NET');
   T(plL+3, plT-8, 3, 'TAM PANEL '+plateW+'x'+plateH+' (day 20mm'+(isPanel?', day tu':', canh cua le 40')+')', 'GEC-TXT','l');
   // vertical ducts
   const vL=G.vL, vR=G.vR;
   const vLW=vL?vL.w:0, vRW=vR?vR.w:0;
   if(vL){ R(plL,plB,plL+vLW,plT,'GEC-IN'); T(plL+vLW/2, (plB+plT)/2, 3, vL.k.replace('x','X'),'GEC-IN','m'); }
   if(vR){ R(plR-vRW,plB,plR,plT,'GEC-IN'); T(plR-vRW/2, (plB+plT)/2, 3, vR.k.replace('x','X'),'GEC-IN','m'); }
   const railL=plL+vLW, railR=plR-vRW, railW=Math.max(1,railR-railL);
   const railLenMM = isPanel? G.railLen : Math.max(0,plateW-vLW-vRW);
   const mm2 = railLenMM>0? railW/railLenMM : 1;
   // rows top→down (Y-up: top = plT)
   const pk=packMM(arr, railLenMM);
   const rows=Math.max(pk.rows, G.rows);
   // build top-down band positions (in mm, Y measured down from plT)
   let yCur=plT;  // current top edge (high Y), go downward = decrease Y
   const drawHD=(yTopEdge,duct)=>{ const h=duct.h; R(railL,yTopEdge-h,railR,yTopEdge,'GEC-OUT'); T((railL+railR)/2,yTopEdge-h/2,3,duct.k.replace('x','X'),'GEC-OUT','m'); return h; };
   if(G.hTop){ yCur-=drawHD(yCur,G.hTop); }
   const byR={};pk.out.forEach(d=>{(byR[d.row]=byR[d.row]||[]).push(d);});
   for(let r=0;r<rows;r++){
     const bandTop=yCur, devTop=bandTop-G.CLR, devBot=devTop-(G.pitch); // band = pitch + 2*CLR
     // DIN rail line near top of device area
     L(railL, devTop-2, railR, devTop-2, 'GEC-BUS');
     (byR[r]||[]).forEach(d=>{const _bgH=resolveGeom(d);const _isG=_bgH&&_bgH.g&&_bgH.g.length;const _wmm=_isG&&_bgH.w?_bgH.w:(d.w||100);const _hmm=_isG&&_bgH.h?_bgH.h:(d.h||90);const dh=Math.min(G.pitch,Math.max(6,_hmm));const bx=railL+d.x*mm2, bw=Math.max(2, _isG? _wmm*(dh/_hmm) : _wmm*mm2);
       const by=devTop-dh;
       R(bx,by,bx+bw,devTop,'GEC-CTRL');
       if(_isG)P.push({t:'cadblock',name:'GEC_DYN_'+d.c.replace(/[^A-Za-z0-9_-]/g,'_'),geom:_bgH,x:bx,y:by,scale:dh/_hmm});
       if(bw>14)T(bx+bw/2,by+dh/2,3,short(d.c),'GEC-TXT','m'); });
     T(railL-6, devTop-G.pitch/2, 2.5, 'H'+(r+1), 'GEC-TXT','r');
     yCur = bandTop-(G.pitch+2*G.CLR);
     if(r<rows-1 && G.hSizes[r]){ yCur-=drawHD(yCur,G.hSizes[r]); }
   }
   return G.W;
 }
 // ===== TOP/BOTTOM VIEW =====
 function topBot(ox,oy,which){
   R(ox,oy,ox+G.W,oy+G.D,'GEC-FRAME');
   T(ox+G.W/2, oy+G.D+16, 6, which+' VIEW', 'GEC-TITLE','m');
   const ne=Math.max(2,Math.round(G.W/120));
   for(let k=0;k<ne;k++){const ex=ox+G.W*(k+1)/(ne+1);R(ex-12,oy+G.D/2-5,ex+12,oy+G.D/2+5,'GEC-NET');}
   T(ox+G.W/2, oy+G.D/2, 3, which==='TOP'?'CABLE ENTRY':'CABLE ENTRY/EXIT','GEC-TXT','m');
   return G.W;
 }
 // ===== SECTION L/R (theo chiều dài panel = plateH) =====
 function section(ox,oy){
   const plateH=Math.max(0,G.H-2*G.mgY);
   R(ox,oy,ox+G.D,oy+plateH,'GEC-FRAME');
   T(ox+G.D/2, oy+plateH+16, 6, 'MAT CAT L/R (L='+plateH+')','GEC-TITLE','m');
   // panel plate ở đáy (mép trái)
   R(ox,oy,ox+20,oy+plateH,'GEC-NET'); T(ox+10,oy+plateH/2,3,'PANEL','GEC-TXT','m');
   const baseX=ox+20;
   const pk=packMM(PANEL,G.railLen);
   const byR={};pk.out.forEach(d=>{(byR[d.row]=byR[d.row]||[]).push(d);});
   const rows=Math.max(0,G.rows);
   let yCur=oy+plateH;
   const drawHD=(yTop,duct)=>{R(baseX,yTop-duct.h,baseX+duct.w,yTop,'GEC-OUT');T(baseX+duct.w+3,yTop-duct.h/2,2.5,duct.k.replace('x','X'),'GEC-OUT','l');return duct.h;};
   if(G.hTop){ yCur-=drawHD(yCur,G.hTop); }
   for(let r=0;r<rows;r++){
     const items=byR[r]||[]; const dep=items.length?Math.max(...items.map(depOf)):90;
     const top=yCur-G.CLR, h=90;
     R(baseX,top-h,baseX+dep,top,'GEC-CTRL'); T(baseX+dep/2,top-h/2,2.5,items.length?short(items[0].c):'-','GEC-TXT','m');
     T(ox-4, top-h/2, 2.5, 'H'+(r+1),'GEC-TXT','r');
     yCur -= (G.pitch+2*G.CLR);
     if(r<rows-1 && G.hSizes[r]) yCur-=drawHD(yCur,G.hSizes[r]);
   }
   T(ox, oy-8, 2.8, 'Chieu sau Dynalite theo catalog · cach mang '+G.CLR+'mm · doi chieu hang H1..H'+rows, 'GEC-TXT','l');
   return G.D;
 }
 // ===== EXTERNAL FRONT (mặt ngoài cánh) =====
 function extFront(ox,oy){
   R(ox,oy,ox+G.W,oy+G.H,'GEC-FRAME');
   T(ox+G.W/2, oy+G.H+16, 6, 'EXTERNAL FRONT VIEW','GEC-TITLE','m');
   R(ox+10,oy+10,ox+G.W-10,oy+G.H-10,'GEC-WIRE',1);
   R(ox+G.W-30,oy+G.H/2-12,ox+G.W-20,oy+G.H/2+12,'GEC-CTRL'); // lock
   T(ox+G.W/2, oy+G.H-20, 4, 'RCU-ST', 'GEC-TXT','m');
   return G.W;
 }
 // ===== LAYOUT all views in a grid (mm), gaps =====
 const GAPX=140, GAPY=120;
 let cx=0;
 // row 1: External | Internal(panel) | Internal(door if any)
 extFront(cx,0); cx+=G.W+GAPX;
 frontView(cx,0,true,PANEL,'INTERNAL FRONT VIEW (PANEL)'); cx+=G.W+GAPX;
 if(DOOR.length){ frontView(cx,0,false,DOOR,'INTERNAL FRONT VIEW (DOOR)'); cx+=G.W+GAPX; }
 // row 2 (below): Top | Bottom | Section
 const row2y = -(G.D+G.H+GAPY); // below row1 (Y-up → negative)
 let cx2=0;
 topBot(cx2, row2y+(G.H-G.D), 'TOP'); cx2+=G.W+GAPX;
 topBot(cx2, row2y+(G.H-G.D), 'BOTTOM'); cx2+=G.W+GAPX;
 section(cx2, row2y); cx2+=G.D+GAPX;
 // overall title
 T(0, G.H+70, 11, 'BO TRI TU DIEN RCU — FULL VIEWS (External/Internal/Top/Bottom/Section)', 'GEC-TITLE','l');
 return P;
}
function exportLisp(customFn){
 const P=panelPrims();
 const fn=customFn||(typeof lispFileName==='function'?lispFileName('RCU_LAYOUT'):'GEC_RCU_LAYOUT.lsp');
 download(fn,primsToLisp(P,'BO TRI TU DIEN RCU — 5 VIEWS (EXT/INT/TOP/BOTTOM/SECTION)'));
 toast('Đã xuất '+fn);
 return fn;
}
window.exportLisp=exportLisp;

/* ---- IMPORT từ sơ đồ nguyên lý (DB circuits) ---- */
const PROT2CODE={'MCB 1P':'MCB-1P','MCB 2P':'MCB-2P','MCB 3P':'MCB-3P','RCBO 1P+N':'RCBO-1P+N','RCBO 2P':'RCBO-2P','FUSE 1P':'FUSE-1P'};
function importFromDiagram(){
 const cs=(S&&S.db&&S.db.circuits)||[];
 if(!cs.length){toast('Sơ đồ nguyên lý chưa có mạch');return;}
 const add=(code,n)=>{const b=byc(code);if(!b)return;const e=SELD.find(x=>x.c===code);if(e)e.qty+=n;else SELD.push({...b,qty:n,price:0,block:(b.block||code)});};
 if(S.db.main&&PROT2CODE[S.db.main.type])add(PROT2CODE[S.db.main.type],1);
 allDevs().forEach(d=>add(d.model,1));
 cs.forEach(c=>{const n=Math.max(1,parseInt(c.qty)||1);if(PROT2CODE[c.prot])add(PROT2CODE[c.prot],n);if(/CONTACTOR/i.test(c.contactor||''))add(/4P/.test(c.contactor)?'iCT-4P':'iCT-2P',n);});
 renderSel();arrange();toast('Đã lấy thiết bị bảo vệ từ sơ đồ nguyên lý');
}

/* ============================================================ WIRING / BOOTSTRAP */
['pdW','pdH','pdD','pdMgX','pdMgY','pdPitch','pdGap','pdPlate'].forEach(id=>{const el=q(id);if(el)el.oninput=()=>arrange();});
/* ---- máng cáp v2: populate + bind ---- */
function ductOpts(sel){return DUCTCAT.map(d=>'<option value="'+d.k+'" '+(d.k===sel?'selected':'')+'>'+d.k+' mm</option>').join('');}
function fillDuctSelects(){
  if(q('pdVLsize'))q('pdVLsize').innerHTML=ductOpts(VDUCT.left.size);
  if(q('pdVRsize'))q('pdVRsize').innerHTML=ductOpts(VDUCT.right.size);
  if(q('pdHTsize'))q('pdHTsize').innerHTML=ductOpts(HDUCT.top.size);
  if(q('pdVLon'))q('pdVLon').checked=VDUCT.left.on;
  if(q('pdVRon'))q('pdVRon').checked=VDUCT.right.on;
  if(q('pdHTon'))q('pdHTon').checked=HDUCT.top.on;
}
/* render danh sách máng ngang tự sinh (mỗi gap 1 dropdown size) */
function renderHDList(){
  const host=q('pdHDlist'); if(!host)return;
  const sizes=HDUCT.sizes||[];
  if(!sizes.length){ host.innerHTML='<span class="hint">— không có hàng nào để chèn máng ngang (chỉ ≤1 hàng) —</span>'; return; }
  host.innerHTML=sizes.map((k,i)=>'<div style="display:flex;align-items:center;gap:7px"><span style="font-size:11px;color:var(--muted);min-width:64px">Máng #'+(i+1)+' (sau H'+(i+1)+')</span><select class="inp sm" data-hd="'+i+'" style="flex:1">'+ductOpts(k)+'</select></div>').join('');
  host.querySelectorAll('[data-hd]').forEach(el=>el.onchange=e=>{const i=+e.target.dataset.hd;HDUCT.sizes[i]=e.target.value;arrange();});
}
function ductStat(){
  const G=geo(); const el=q('pdDuctStat'); if(!el)return;
  const mdRow=Math.floor(G.railLen/18);
  const vinfo=(G.vL?('T '+G.vL.k):'T off')+' · '+(G.vR?('P '+G.vR.k):'P off');
  el.innerHTML='Tấm panel <b>'+G.plateW+'×'+G.plateH+'mm</b> (dày '+G.plate+'mm) · máng dọc ['+vinfo+'] → rail <b>'+Math.round(G.railLen)+'mm ('+mdRow+' md/hàng)</b> · máng ngang '+((G.hTop?1:0)+G.hSizes.length)+' cái → <b>'+G.rows+' hàng</b> DIN · thiết bị cách máng '+G.CLR+'mm.';
}
if(q('pdVLon'))q('pdVLon').onchange=e=>{VDUCT.left.on=e.target.checked;arrange();};
if(q('pdVRon'))q('pdVRon').onchange=e=>{VDUCT.right.on=e.target.checked;arrange();};
if(q('pdVLsize'))q('pdVLsize').onchange=e=>{VDUCT.left.size=e.target.value;arrange();};
if(q('pdVRsize'))q('pdVRsize').onchange=e=>{VDUCT.right.size=e.target.value;arrange();};
if(q('pdHTon'))q('pdHTon').onchange=e=>{HDUCT.top.on=e.target.checked;arrange();};
if(q('pdHTsize'))q('pdHTsize').onchange=e=>{HDUCT.top.size=e.target.value;arrange();};
fillDuctSelects();
q('pdFill')&&(q('pdFill').onchange=()=>render());
q('pdSearch')&&(q('pdSearch').oninput=()=>renderLib());
q('pdModeAuto')&&(q('pdModeAuto').onclick=()=>{MODE='auto';q('pdModeAuto').classList.add('on');q('pdModeManual').classList.remove('on');arrange();});
q('pdModeManual')&&(q('pdModeManual').onclick=()=>{MODE='manual';q('pdModeManual').classList.add('on');q('pdModeAuto').classList.remove('on');render();});
q('pdExpLisp')&&(q('pdExpLisp').onclick=()=>exportLisp());
q('pdExpPdf')&&(q('pdExpPdf').onclick=()=>window.print());
q('pdLoadDxf')&&(q('pdLoadDxf').onclick=()=>q('pdDxfFile').click());
q('pdImportS')&&(q('pdImportS').onclick=importFromDiagram);
q('pdAddCustom')&&(q('pdAddCustom').onclick=()=>{const c=(prompt('Mã thiết bị tùy chỉnh:')||'').trim();if(!c)return;const w=+prompt('Rộng (mm):','36')||36;const h=+prompt('Cao (mm):','90')||90;SELD.push({c,d:'Custom',g:'CTRL',w,h,z:'TỰ DO',qty:1,price:0,block:c});renderSel();arrange();});
q('pdDxfFile')&&(q('pdDxfFile').onchange=e=>{const f=e.target.files[0];if(!f)return;const rd=new FileReader();rd.onload=()=>{try{const lib=parseDXF(rd.result)||[];if(lib.length){DXFLIB=DXFLIB.concat(lib);if(q('pdDxfStat'))q('pdDxfStat').textContent=DXFLIB.length+' block';if(pendingRow!=null&&SELD[pendingRow]){SELD[pendingRow].block=lib[0].name;SELD[pendingRow].w=lib[0].w;SELD[pendingRow].h=lib[0].h;pendingRow=null;}renderSel();arrange();toast('Đã nạp '+lib.length+' block DXF');}else toast('Không đọc được block DXF');}catch(err){toast('Lỗi DXF: '+err.message);}};rd.readAsText(f);e.target.value='';});
['pdTShell','pdTPlate','pdPSteel','pdWaste','pdPPaint','pdPLabor'].forEach(id=>{const el=q(id);if(!el)return;if(el.tagName==='SELECT')el.onchange=()=>calcCost();else el.oninput=()=>calcCost();});

/* Hook main tab nav: vào tab 4/5 thì render lại (HTML đã hiện sẵn) */
document.querySelectorAll('.tab').forEach(t=>t.addEventListener('click',()=>{const v=t.dataset.v;if(v==='viewLayout'){renderLib();renderSel();arrange();}else if(v==='viewCost'){calcCost();}}));

/* Defaults + initial render */
function loadDefaults(){['DDRC-GRMS-E','DDRC810DT-GL','DDNP1501','MCB-2P','MCB-1P','iCT-2P','RCBO-2P','LAMP-Y'].forEach(c=>{if(byc(c))addDev(c);});}
renderLib();
if(!SELD.length)loadDefaults();
renderSel();
arrange();
})();
