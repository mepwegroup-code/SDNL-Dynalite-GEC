
/* ============================================================
   GEC · DEVICE DATABASE  (spec verified — gnt-skill v2.0 · catalog 2024-ver4)
   type: 'rj45'  → ports × 3 input ; ports 1..3 khóa (special)
         'term'  → DI/DO/AO/DIM/DMX liệt kê trực tiếp (terminal)
   Trục I/O: di (input) · relays (DO) · ao (0-10V) · dim (TRIAC 220V) · dmx (RGBW)
   DDRC-GRMS-E = 48 DI (RJ45 16 port × 3) — xác nhận user 21/06/2026
============================================================ */
const DB = {"ctrl": {"DDRC-GRMS-E": {"type": "term", "di": 18, "relays": 13, "ao": 0, "dim": 0, "dmx": 64, "dali": 0, "spi": 0, "ssid": 0, "eth": 1, "rs485": 1, "can": false, "can_n": 0, "otag": "Y", "cls": "std", "pw": "100–240 VAC · L/N/PE", "desc": "Room controller · 18 DI · 13 switched outputs (7 lighting + 2 power + 4 curtain) · DMX 64ch", "w": 216, "h": 105, "depth": 74, "source": "https://dynalite.com/product/ddrc-grms-e/"}, "DDBC120-DALI": {"type": "term", "di": 0, "relays": 0, "ao": 0, "dim": 0, "dmx": 0, "dali": 1, "spi": 0, "ssid": 0, "eth": 0, "rs485": 1, "can": false, "can_n": 0, "otag": "Y", "cls": "std", "pw": "100–240 VAC · L/N/PE", "desc": "1 DALI addressable line · 64 addresses · 1 standby relay (dedicated)", "w": 105, "h": 95, "depth": 75, "source": "https://dynalite.com/product/ddbc120-dali/"}, "DDBC320-DALI": {"type": "term", "di": 0, "relays": 0, "ao": 0, "dim": 0, "dmx": 0, "dali": 3, "spi": 0, "ssid": 0, "eth": 1, "rs485": 1, "can": false, "can_n": 0, "otag": "Y", "cls": "std", "pw": "100–240 VAC · L/N/PE", "desc": "3 DALI addressable lines · 64 addresses/line · 3 standby relays (dedicated) · Ethernet", "w": 216, "h": 95, "depth": 64, "source": "https://dynalite.com/product/ddbc320-dali/"}, "DDRC420FR": {"type": "term", "di": 0, "relays": 4, "ao": 0, "dim": 0, "dmx": 0, "dali": 0, "spi": 0, "ssid": 0, "eth": 0, "rs485": 1, "can": false, "can_n": 0, "otag": "Y", "cls": "std", "pw": "100–240 VAC · L/N/PE", "desc": "4 relay feed-through · 20 A/ch · max 80 A", "w": 108, "h": 105, "depth": 64, "source": "https://dynalite.com/product/ddrc420fr/"}}, "mod": {"DDRC810DT-GL": {"type": "term", "di": 0, "relays": 8, "ao": 0, "dim": 0, "dmx": 0, "dali": 0, "spi": 0, "ssid": 0, "eth": 0, "rs485": 1, "can": false, "can_n": 0, "otag": "Y", "cls": "std", "pw": "100–240 VAC · L/N/PE", "desc": "8 relay SPDT · 10 A/ch · max 40 A", "w": 215, "h": 93, "depth": 64, "source": "https://dynalite.com/product/ddrc810dt-gl/"}, "DDRC1220FR-GL": {"type": "term", "di": 0, "relays": 12, "ao": 0, "dim": 0, "dmx": 0, "dali": 0, "spi": 0, "ssid": 0, "eth": 0, "rs485": 1, "can": false, "can_n": 0, "otag": "Y", "cls": "std", "pw": "100–240 VAC · L/N/PE", "desc": "12 relay feed-through · 20 A/ch · max 180 A", "w": 215, "h": 93, "depth": 64, "source": "https://dynalite.com/product/ddrc1220fr-gl/"}, "DDBC1200": {"type": "term", "di": 0, "relays": 0, "ao": 12, "dim": 0, "dmx": 0, "dali": 0, "spi": 0, "ssid": 0, "eth": 0, "rs485": 1, "can": false, "can_n": 0, "otag": "Y", "cls": "std", "pw": "100–240 VAC · L/N/PE", "desc": "12 outputs 0–10 V · selectable DALI broadcast; NOT addressable · no load relay", "w": 215, "h": 93, "depth": 64, "source": "https://dynalite.com/product/ddbc1200/"}, "DDMIDC8": {"type": "term", "di": 8, "relays": 0, "ao": 0, "dim": 0, "dmx": 0, "dali": 0, "spi": 0, "ssid": 0, "eth": 0, "rs485": 1, "can": false, "can_n": 0, "otag": "Y", "cls": "std", "pw": "DyNet 12–24 VDC", "desc": "8 digital inputs · 4 analog inputs (not outputs)", "w": 105, "h": 95, "depth": 59, "source": "https://dynalite.com/product/ddmidc8/"}, "DDNG485": {"type": "term", "di": 0, "relays": 0, "ao": 0, "dim": 0, "dmx": 512, "dali": 0, "spi": 0, "ssid": 0, "eth": 0, "rs485": 2, "can": false, "can_n": 0, "otag": "Y", "cls": "std", "pw": "DyNet port 1: 12–24 VDC", "desc": "DyNet ↔ DMX512 gateway · 512 signal channels; external decoder required", "w": 108, "h": 95, "depth": 64, "source": "https://dynalite.com/product/ddng485/"}, "DDMC802 + 4x DGLM202": {"type": "term", "di": 8, "relays": 0, "ao": 0, "dim": 8, "dmx": 0, "dali": 0, "spi": 0, "ssid": 0, "eth": 0, "rs485": 1, "can": false, "can_n": 0, "otag": "Y", "cls": "std", "pw": "100–240 VAC · L/N/PE", "desc": "DDMC802 configured with 4 DGLM202 · 8 leading-edge channels 2 A/ch · max 16 A", "w": 216, "h": 105, "depth": 74, "source": "https://dynalite.com/product/ddmc802/"}, "DDBC120-DALI": {"type": "term", "di": 0, "relays": 0, "ao": 0, "dim": 0, "dmx": 0, "dali": 1, "spi": 0, "ssid": 0, "eth": 0, "rs485": 1, "can": false, "can_n": 0, "otag": "Y", "cls": "std", "pw": "100–240 VAC · L/N/PE", "desc": "1 DALI addressable line · 64 addresses · 1 standby relay (dedicated)", "w": 105, "h": 95, "depth": 75, "source": "https://dynalite.com/product/ddbc120-dali/"}, "DDBC320-DALI": {"type": "term", "di": 0, "relays": 0, "ao": 0, "dim": 0, "dmx": 0, "dali": 3, "spi": 0, "ssid": 0, "eth": 1, "rs485": 1, "can": false, "can_n": 0, "otag": "Y", "cls": "std", "pw": "100–240 VAC · L/N/PE", "desc": "3 DALI addressable lines · 64 addresses/line · 3 standby relays (dedicated) · Ethernet", "w": 216, "h": 95, "depth": 64, "source": "https://dynalite.com/product/ddbc320-dali/"}, "DDRC420FR": {"type": "term", "di": 0, "relays": 4, "ao": 0, "dim": 0, "dmx": 0, "dali": 0, "spi": 0, "ssid": 0, "eth": 0, "rs485": 1, "can": false, "can_n": 0, "otag": "Y", "cls": "std", "pw": "100–240 VAC · L/N/PE", "desc": "4 relay feed-through · 20 A/ch · max 80 A", "w": 108, "h": 105, "depth": 64, "source": "https://dynalite.com/product/ddrc420fr/"}}};
/* trục I/O dùng cho optimizer + render */
const AXES = ['di','relays','ao','dim','dmx','dali','spi','ssid'];
const AXLAB = {di:'DI (input)', relays:'DO (relay)', dali:'DALI line (64 adr)',ao:'AO 0-10V', dim:'Dimmer TRIAC', dmx:'DMX RGBW', spi:'SPI pixel', ssid:'Samsung AC'};
/* danh sách EXT theo trục để bù (bin-pack lớn→nhỏ) */
const FILL = {di:['DDMIDC8'], relays:['DDRC1220FR-GL','DDRC810DT-GL'], ao:['DDBC1200'], dim:['DDMC802 + 4x DGLM202'], dmx:['DDNG485'], dali:['DDBC320-DALI','DDBC120-DALI'], spi:[], ssid:[]};
/* combo module bù đồng thời nhiều trục (DI+DO) — dùng trong optimizer */
const COMBO = [];
const SWITCHES = {
  "":           {keys:0, label:'— Trống —'},
  "SW1":        {keys:1, label:'Công tắc 1 phím'},
  "SW2":        {keys:2, label:'Công tắc 2 phím'},
  "SW3":        {keys:3, label:'Công tắc 3 phím'},
  "PIR":        {keys:1, label:'Cảm biến PIR'},
  "DOOR":       {keys:1, label:'Tiếp điểm cửa'},
  "WINDOW":     {keys:1, label:'Tiếp điểm cửa sổ'},
  "KEYCARD":    {keys:1, label:'Keycard holder'},
  "BELL":       {keys:1, label:'Nút chuông'},
  "THERMO":     {keys:1, label:'Thermostat'}
};
const SERVERS = ["GRMS","BMS","PMS","Door Lock","Core Switch","UPS"];

/* special port presets (ports 1-3 locked) */
const SPECIAL = [
  ["DND","MUR","Keycard"],
  ["Doorbell","Tiếp điểm cửa","Tiếp điểm cửa sổ"],
  ["PIR phòng ngủ","PIR phòng khách","Dự phòng"]
];

/* ============================================================ STATE */
let S = {
  project:{name:'',code:'',floors:1},
  power:{name:'DDNP1501 · DyNet PSU (bổ sung)',v:'15VDC',t:'V+ · GND'},
  mcbDefault:'5',                  // ampe mặc định Fuse trên output
  mcbTag:'FUSE',                   // nhãn thiết bị bảo vệ output (sửa được)
  tb:{ title:'SƠ ĐỒ NGUYÊN LÝ RCU', dwgno:'GEC-RCU-001', rev:'00', scale:'NTS', drawn:'', chk:'', app:'' },
  db:{
    source:'FROM DB FLOOR',
    cableIn:'2x1Cx4mm² Cu/XLPE/PVC +1Cx4mm² Cu/PVC (E)',
    main:{type:'MCB 2P', spec:'25A/6kA'},
    circuits:[
      {prot:'MCB 1P',    spec:'20A/6kA',          tag:'P', load:'FCU + THERMOSTAT',     cable:'2x1Cx1.5mm² Cu/PVC+E', contactor:'', qty:2},
      {prot:'RCBO 1P+N', spec:'10A/4.5kA/30mA',   tag:'S1', load:'MINIBAR & USB CHARGER',cable:'2x1Cx2.5mm² Cu/PVC+E', contactor:'', qty:1},
      {prot:'RCBO 1P+N', spec:'10A/4.5kA/30mA',   tag:'S2', load:'POWER SOCKET',         cable:'2x1Cx2.5mm² Cu/PVC+E', contactor:'CONTACTOR 2P 16A', qty:1},
      {prot:'MCB 1P',    spec:'10A/6kA',          tag:'PS',load:'Nguồn AC controller / DyNet PSU',       cable:'',                     contactor:'', qty:1},
      {prot:'MCB 1P',    spec:'10A/6kA',          tag:'L', load:'LIGHTING',             cable:'2x1Cx1.5mm² Cu/PVC+E', contactor:'', qty:4}
    ]
  },
  ctrls:[], mods:[],
  topo:{
    server:{
      title:'PHÒNG SERVER (ELV)',
      floor:'bottom',
      servers:'GRMS, BMS, PMS, Lock Server',
      serverBlock:'',
      rackItems:'ODF 16 PORT; CORE SWITCH 24 PORT POE +2 PORT SFP+; PDU; SERVER RCU/BMS',
      rackCode:'D-ELV-SVR-01',
      power:'NGUỒN CẤP TỪ UPS TẬP TRUNG',
      fiber:'3xCÁP QUANG 4FO_SM',
      uplink:'1x(CẤP 4P-CAT6 UTP) · KẾT NỐI TEL&DATA / PMS'
    },
    floors:[]
  },
  sel:null            // selected device key e.g. 'c0' / 'm1'
};
let uid=1; const nid=()=>uid++;

/* ---- device factory ---- */
function newCtrl(model){
  model = model || "DDRC-GRMS-E";
  const d=DB.ctrl[model], c={id:nid(),kind:'ctrl',model,label:model+' #'+(S.ctrls.length+1),
      sym:'auto', dwg:'', blk:'', scale:1, floor:1, room:'', ins:{}, outs:{}, aos:{}, dims:{}, dmxs:{}, spis:{}, ssids:{}, mcb:{}, ports:{}, di:d.di||0, relays:d.relays, dali:d.dali||0,dalies:{},daliQty:{},ao:d.ao, dim:d.dim||0, dmx:d.dmx||0, spi:d.spi||0, ssid:d.ssid||0};
  if(d.type==='rj45'){ for(let p=1;p<=d.ports;p++){ c.ports[p]={sw:'', keys:['','','']}; }
    // lock special 1-3
    for(let p=1;p<=3;p++){ c.ports[p]={sw:'LOCK', keys:[...(SPECIAL[p-1]||['','',''])]}; } }
  return c;
}
function newMod(model){
  model=model||"DDRC810DT-GL"; const d=DB.mod[model];
  return {id:nid(),kind:'mod',model,label:model+' #'+(S.mods.length+1),sym:'auto',dwg:'',blk:'',scale:1,floor:1,room:'',
      di:d.di,relays:d.relays,dali:d.dali||0,dalies:{},daliQty:{},ao:d.ao,dim:d.dim||0,dmx:d.dmx||0,spi:d.spi||0,ssid:d.ssid||0,otag:d.otag||'R',ins:{},outs:{},aos:{},dims:{},dmxs:{},spis:{},ssids:{},mcb:{}};
}
function ctrlSpec(c){ return DB.ctrl[c.model]; }

/* ============================================================ UTIL */
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const esc=s=>String(s??'').replace(/[<>&"]/g,m=>({'<':'&lt;','>':'&gt;','&':'&amp;','"':'&quot;'}[m]));
function toast(m){const t=$('#toast');$('#toastMsg').textContent=m;t.classList.add('show');clearTimeout(t._);t._=setTimeout(()=>t.classList.remove('show'),2100);}
function download(name,text,mime){const b=new Blob([text],{type:mime||'text/plain;charset=utf-8'});const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),1500);}
function allDevs(){return [...S.ctrls,...S.mods];}
function devByRef(r){const i=+r.slice(1); return r[0]==='c'?S.ctrls[i]:S.mods[i];}

/* ============================================================ TABS */
$$('.tab').forEach(t=>t.onclick=()=>{$$('.tab').forEach(x=>x.classList.remove('on'));t.classList.add('on');$$('.view').forEach(v=>v.classList.remove('on'));$('#'+t.dataset.v).classList.add('on'); if(t.dataset.v==='viewOpt'&&typeof renderOpt==='function')renderOpt();});

/* project bar */
$('#pName').oninput=e=>S.project.name=e.target.value;
$('#pCode').oninput=e=>S.project.code=e.target.value;
$('#pFloors').oninput=e=>{S.project.floors=+e.target.value||1;syncFloors();renderTopo();};
$('#pwName').oninput=e=>{S.power.name=e.target.value;renderWire();};
$('#pwV').oninput=e=>{S.power.v=e.target.value;};
$('#pwT').oninput=e=>{S.power.t=e.target.value;renderWire();};
/* title block + mcb default */
const tbBind=(id,key)=>{const el=$('#'+id);if(el)el.oninput=e=>{S.tb[key]=e.target.value;renderWire();renderTopoSVG&&renderTopoSVG();};};
tbBind('tbTitle','title');tbBind('tbNo','dwgno');tbBind('tbRev','rev');tbBind('tbScale','scale');
tbBind('tbDrawn','drawn');tbBind('tbChk','chk');tbBind('tbApp','app');
{const m=$('#mcbDef');if(m)m.oninput=e=>{S.mcbDefault=e.target.value||'10';renderIO();renderWire();};}

/* ============================================================ LEFT: device lists */
function renderDevLists(){
  // controllers
  $('#ctrlList').innerHTML = S.ctrls.length? '' : '<div class="empty" style="padding:14px">Chưa có controller. Bấm “+ Thêm”.</div>';
  S.ctrls.forEach((c,i)=>$('#ctrlList').appendChild(devCard(c,'c'+i)));
  $('#modList').innerHTML = S.mods.length? '' : '<div class="empty" style="padding:14px">Chưa có extension module.</div>';
  S.mods.forEach((m,i)=>$('#modList').appendChild(devCard(m,'m'+i)));
  refreshPicker();
}
function devCard(d,ref){
  const isC=d.kind==='ctrl', spec=isC?DB.ctrl[d.model]:DB.mod[d.model];
  const _io=[]; const _di=(spec.type==='rj45'?spec.ports*3:spec.di)||0;
  if(_di)_io.push(_di+'DI'); if(spec.relays)_io.push(spec.relays+'RL'); if(spec.ao)_io.push(spec.ao+'AO'); if(spec.dim)_io.push(spec.dim+'DM'); if(spec.dmx)_io.push(spec.dmx+'DMX'); if(spec.spi)_io.push(spec.spi+'SPI'); if(spec.ssid)_io.push(spec.ssid+'AC');
  const io=_io.join('/')||'—';
  const el=document.createElement('div'); el.className='dev'+(d._open?' open':'');
  el.innerHTML=`
    <div class="dh ${isC?'':'mod'}">
      <span class="chev">▸</span><span class="dot"></span>
      <span class="nm">${esc(d.label)}</span><span class="ct">${io}</span>
      <button class="iconbtn" data-del="${ref}" title="Xóa">✕</button>
    </div>
    <div class="db">
      <div class="row">
        <div class="fld"><label class="fl">Model</label>
          <select class="inp sm" data-model="${ref}">${Object.keys(isC?DB.ctrl:DB.mod).map(k=>`<option ${k===d.model?'selected':''}>${k}</option>`).join('')}</select></div>
      </div>
      <div class="row">
        <div class="fld"><label class="fl">Nhãn hiển thị</label><input class="inp sm" data-label="${ref}" value="${esc(d.label)}"></div>
        <div class="fld" style="max-width:84px"><label class="fl">Tầng</label><input class="inp sm" type="number" min="1" data-floor="${ref}" value="${d.floor}"></div>
        <div class="fld"><label class="fl">Phòng</label><input class="inp sm" data-room="${ref}" value="${esc(d.room)}"></div>
      </div>
      <div class="hint" style="margin-top:2px">${esc(spec.desc)}${isC?' · Nguồn '+esc(spec.pw):''}</div>
      <div style="height:9px"></div>
      <label class="fl">Hình khối thiết bị (block)</label>
      <div class="row">
        <select class="inp sm" data-sym="${ref}" style="max-width:185px">
          <option value="auto" ${d.sym==='auto'?'selected':''}>Tự vẽ block (primitive)</option>
          <option value="file" ${d.sym==='file'?'selected':''}>Chèn từ file DWG/DXF</option>
        </select>
      </div>
      <div data-dwgwrap="${ref}" style="display:${d.sym==='file'?'block':'none'}">
        <div class="row">
          <div class="fld"><label class="fl">Đường dẫn file .dwg / .dxf</label>
            <input class="inp sm mono" data-dwg="${ref}" placeholder="D:\\GEC\\Blocks\\${esc(d.model)}.dwg" value="${esc(d.dwg)}"></div>
        </div>
        <div class="row">
          <div class="fld"><label class="fl">Tên block (tùy chọn)</label><input class="inp sm" data-blk="${ref}" placeholder="${esc(d.model)}" value="${esc(d.blk)}"></div>
          <div class="fld" style="max-width:90px"><label class="fl">Scale</label><input class="inp sm" type="number" step="0.1" min="0.1" data-scale="${ref}" value="${d.scale}"></div>
        </div>
        <div class="hint">LISP sẽ <b>-INSERT</b> file này tại tọa độ thiết bị; nếu không tìm thấy file, in cảnh báo và bỏ qua. Khuyến nghị dùng <b>.dwg</b> (-INSERT). File <b>.dxf</b> chỉ chèn được nếu AutoCAD hỗ trợ trực tiếp — nếu không, convert sang DWG trước.</div>
      </div>
    </div>`;
  // events
  el.querySelector('.dh').onclick=ev=>{ if(ev.target.closest('[data-del]'))return; d._open=!d._open; el.classList.toggle('open'); };
  el.querySelector(`[data-del="${ref}"]`).onclick=()=>{ if(isC)S.ctrls.splice(+ref.slice(1),1); else S.mods.splice(+ref.slice(1),1); if(S.sel===ref)S.sel=null; renderDevLists(); renderIO(); renderWire(); };
  el.querySelector(`[data-model="${ref}"]`).onchange=e=>{ changeModel(d,e.target.value); };
  el.querySelector(`[data-label="${ref}"]`).oninput=e=>{d.label=e.target.value;el.querySelector('.nm').textContent=e.target.value;refreshPicker();renderWire();};
  el.querySelector(`[data-floor="${ref}"]`).oninput=e=>{d.floor=+e.target.value||1;};
  el.querySelector(`[data-room="${ref}"]`).oninput=e=>{d.room=e.target.value;};
  el.querySelector(`[data-sym="${ref}"]`).onchange=e=>{d.sym=e.target.value;el.querySelector(`[data-dwgwrap="${ref}"]`).style.display=e.target.value==='file'?'block':'none';renderWire();};
  el.querySelector(`[data-dwg="${ref}"]`).oninput=e=>{d.dwg=e.target.value;renderWire();};
  el.querySelector(`[data-blk="${ref}"]`).oninput=e=>{d.blk=e.target.value;renderWire();};
  el.querySelector(`[data-scale="${ref}"]`).oninput=e=>{d.scale=+e.target.value||1;renderWire();};
  return el;
}
function changeModel(d,model){
  d.model=model;
  if(d.kind==='ctrl'){ const f=newCtrl(model); f.label=d.label;f.floor=d.floor;f.room=d.room;f.sym=d.sym;f.dwg=d.dwg;f.blk=d.blk;f.scale=d.scale;
    const idx=S.ctrls.indexOf(d); S.ctrls[idx]=f; if(S.sel==='c'+idx)S.sel='c'+idx;
  } else { const f=newMod(model); f.label=d.label;f.floor=d.floor;f.room=d.room;f.sym=d.sym;f.dwg=d.dwg;f.blk=d.blk;f.scale=d.scale;
    const idx=S.mods.indexOf(d); S.mods[idx]=f; }
  renderDevLists(); renderIO(); renderWire();
}
$('#addCtrl').onclick=()=>{const c=newCtrl();c._open=true;S.ctrls.push(c);S.sel='c'+(S.ctrls.length-1);renderDevLists();renderIO();renderWire();};
$('#btnAllDev')&&($('#btnAllDev').onclick=()=>{
  if(!confirm('Tạo sơ đồ chứa 1 của MỖI thiết bị Dynalite trong catalog? (xóa thiết bị đang có trên sơ đồ nguyên lý)')) return;
  S.ctrls=[]; S.mods=[];
  // 1 controller mỗi model (trừ custom HRC), gán sẵn vài I/O mẫu để có nội dung
  Object.keys(DB.ctrl).forEach(m=>{ if(DB.ctrl[m].custom) return; const c=newCtrl(m); c.room='Catalog'; S.ctrls.push(c); });
  // 1 module mỗi model
  Object.keys(DB.mod).filter(m=>!DB.ctrl[m]).forEach(m=>{ const mm=newMod(m); mm.room='Catalog'; S.mods.push(mm); });
  // auto-map từng thiết bị để có tên I/O mẫu
  const oldSel=S.sel;
  S.ctrls.forEach((c,i)=>{ S.sel='c'+i; autoMap(); });
  S.mods.forEach((mm,i)=>{ S.sel='m'+i; autoMap(); });
  S.sel='c0';
  renderAll();
  $$('.tab').forEach(x=>x.classList.remove('on'));
  document.querySelector('.tab[data-v="viewWire"]').classList.add('on');
  $$('.view').forEach(v=>v.classList.remove('on')); $('#viewWire').classList.add('on');
  toast('Đã tạo sơ đồ toàn bộ '+(S.ctrls.length+S.mods.length)+' thiết bị Dynalite');
});
$('#addMod').onclick=()=>{const m=newMod();m._open=true;S.mods.push(m);renderDevLists();renderWire();};

/* ============================================================ PICKER + IO */
function refreshPicker(){
  const p=$('#ioPick'); const cur=S.sel;
  p.innerHTML = allDevs().length? '' : '<option>— chưa có thiết bị —</option>';
  S.ctrls.forEach((c,i)=>p.appendChild(new Option('🎛  '+c.label,'c'+i)));
  S.mods.forEach((m,i)=>p.appendChild(new Option('🧩  '+m.label,'m'+i)));
  if(cur && devByRef(cur)) p.value=cur; else { S.sel = allDevs().length? p.value : null; }
}
$('#ioPick').onchange=e=>{S.sel=e.target.value;renderIO();};
$('#btnAuto').onclick=()=>{autoMap();renderIO();renderWire();toast('Đã auto-map I/O theo chuẩn phòng khách sạn');};

function renderIO(){
  const ref=S.sel, host=$('#inBody'), oh=$('#outBody');
  if(!ref || !devByRef(ref)){host.innerHTML='<div class="empty">Chọn thiết bị để map input</div>';oh.innerHTML='<div class="empty">Chọn thiết bị để map output</div>';$('#ioTitle').textContent='Input / Output Mapping';$('#ioSub').textContent='';$('#inCnt').textContent=0;$('#outCnt').textContent=0;return;}
  const d=devByRef(ref);
  $('#ioTitle').textContent=d.label; $('#ioSub').textContent=d.model;
  /* ---- INPUT ---- */
  host.innerHTML=''; let inN=0;
  if(d.kind==='ctrl' && ctrlSpec(d).type==='rj45'){
    const sp=ctrlSpec(d);
    for(let p=1;p<=sp.ports;p++){
      const port=d.ports[p], locked=port.sw==='LOCK';
      const box=document.createElement('div'); box.className='port'+(locked?' lock':'');
      let keysHtml='';
      const swdef = locked? null : SWITCHES[port.sw]||SWITCHES[''];
      const kcount = locked? 3 : (swdef?swdef.keys:0);
      for(let k=0;k<3;k++){
        const show = locked? true : (k<kcount);
        if(!show) continue;
        const val=port.keys[k]||''; inN += (locked? (val?1:0) : (k<kcount?1:0));
        keysHtml+=`<div class="iorow"><span class="tag">${p}.${k+1}</span><span class="name"><input data-pk="${p}|${k}" ${locked&&k>0&&false?'':''} value="${esc(val)}" placeholder="${locked?'(đặc biệt)':'Tên phím '+(k+1)}"></span></div>`;
      }
      box.innerHTML=`<div class="ph"><span class="pn">PORT ${p}</span>${locked
          ? '<span class="lockbadge">🔒 KHÓA</span>'
          : `<select class="pselect" data-psw="${p}">${Object.keys(SWITCHES).map(s=>`<option value="${s}" ${s===port.sw?'selected':''}>${SWITCHES[s].label}</option>`).join('')}</select>`}
        </div><div class="pb">${keysHtml||'<div style="font-size:11px;color:var(--muted);padding:2px 0">Port trống — chọn loại công tắc</div>'}</div>`;
      host.appendChild(box);
    }
    host.querySelectorAll('[data-psw]').forEach(s=>s.onchange=e=>{d.ports[+e.target.dataset.psw].sw=e.target.value;renderIO();renderWire();});
    host.querySelectorAll('[data-pk]').forEach(inp=>inp.oninput=e=>{const[p,k]=e.target.dataset.pk.split('|');d.ports[+p].keys[+k]=e.target.value;renderWire();});
  } else {
    // terminal style DI
    const diN = d.kind==='ctrl'? (ctrlSpec(d).di||0) : d.di;
    if(diN===0){host.innerHTML='<div class="empty">Thiết bị không có input</div>';}
    else{
      const box=document.createElement('div');box.className='port';box.innerHTML='<div class="ph"><span class="pn">DRY CONTACT INPUT · DI1…DI'+diN+'</span></div>';
      const pb=document.createElement('div');pb.className='pb';
      for(let i=1;i<=diN;i++){const val=d.ins[i]||'';if(val)inN++;
        const r=document.createElement('div');r.className='iorow';
        r.innerHTML=`<span class="tag">DI${i}</span><span class="name"><input data-di="${i}" value="${esc(val)}" placeholder="Thiết bị / chức năng"></span>`;
        pb.appendChild(r);}
      box.appendChild(pb);host.appendChild(box);
      box.querySelectorAll('[data-di]').forEach(inp=>inp.oninput=e=>{d.ins[+e.target.dataset.di]=e.target.value;renderWire();});
    }
  }
  /* ---- OUTPUT ---- */
  oh.innerHTML=''; let outN=0;
  const _osp = d.kind==='ctrl'? ctrlSpec(d) : DB.mod[d.model];
  const relays = _osp.relays||0;
  const ao     = _osp.ao||0;
  const dim    = _osp.dim||0;
  const dmx    = _osp.dmx||0;
  const info=document.createElement('div'); info.className='hint';info.style.marginBottom='10px';info.textContent=_osp.desc+' · Nguồn: '+_osp.pw;oh.appendChild(info);
  const source=document.createElement('a');source.href=_osp.source;source.target='_blank';source.rel='noopener noreferrer';source.textContent='Tài liệu model Dynalite';oh.appendChild(source);
  const otag = d.kind==='mod'? d.otag : 'Y';
  if(relays){
    const box=document.createElement('div');box.className='port';
    box.innerHTML=`<div class="ph"><span class="pn">RELAY OUTPUT · ${otag}1…${otag}${relays}</span><span class="mcbhead" title="Nhãn thiết bị bảo vệ — sửa được, áp lên bản vẽ"><input id="mcbTagIn" value="${esc(S.mcbTag)}"><span>(A)</span></span></div>`;
    const pb=document.createElement('div');pb.className='pb';
    for(let i=1;i<=relays;i++){const v=d.outs[i]||'';if(v)outN++; const role=d.model==='DDRC-GRMS-E'?(i<3?'POWER':i<10?'LIGHTING':'CURTAIN (interlock)'):'RELAY';
      const r=document.createElement('div');r.className='iorow';
      r.innerHTML=`<span class="tag">${otag}${i}</span><span class="name"><input data-do="${i}" value="${esc(v)}" placeholder="${role}: tên tải / chức năng"></span><span class="amp" title="Fuse cấp nguồn output (Ampe)"><input data-amp="${i}" value="${esc(d.mcb[i]||S.mcbDefault)}">A</span>`;
      pb.appendChild(r);}
    box.appendChild(pb);oh.appendChild(box);
    box.querySelectorAll('[data-do]').forEach(inp=>inp.oninput=e=>{d.outs[+e.target.dataset.do]=e.target.value;renderWire();});
    box.querySelectorAll('[data-amp]').forEach(inp=>inp.oninput=e=>{d.mcb[+e.target.dataset.amp]=e.target.value;renderWire();});
    {const tg=box.querySelector('#mcbTagIn'); if(tg) tg.oninput=e=>{S.mcbTag=e.target.value;renderWire();};}
  }
  if(ao){
    const box=document.createElement('div');box.className='port';box.style.marginTop='8px';
    box.innerHTML=`<div class="ph"><span class="pn" style="color:var(--ao)">ANALOG OUTPUT 0-10V · AO1…AO${ao}</span></div>`;
    const pb=document.createElement('div');pb.className='pb';
    for(let i=1;i<=ao;i++){const v=d.aos[i]||'';if(v)outN++;
      const r=document.createElement('div');r.className='iorow';
      r.innerHTML=`<span class="tag" style="color:var(--ao);background:#f3edff">AO${i}</span><span class="name"><input data-ao="${i}" value="${esc(v)}" placeholder="LED driver / valve 0-10V"></span>`;
      pb.appendChild(r);}
    box.appendChild(pb);oh.appendChild(box);
    box.querySelectorAll('[data-ao]').forEach(inp=>inp.oninput=e=>{d.aos[+e.target.dataset.ao]=e.target.value;renderWire();});
  }
  if(_osp.dali){
    d.dalies=d.dalies||{}; d.daliQty=d.daliQty||{};
    const box=document.createElement('div');box.className='port';
    box.innerHTML='<div class="ph">DALI ADDRESSABLE · DA/DA · 64 địa chỉ/line</div>';
    for(let i=1;i<=_osp.dali;i++){
      const row=document.createElement('div');row.className='iorow';
      row.innerHTML=`<span>DA${i}</span><input class="inp sm" data-dali="${i}" value="${esc(d.dalies[i]||'')}" placeholder="Tên line DALI"><input class="inp sm" style="width:65px" type="number" min="0" max="64" data-daliqty="${i}" value="${d.daliQty[i]||0}" title="Số địa chỉ driver (0–64)">`;
      box.appendChild(row);
    }
    box.querySelectorAll('[data-dali]').forEach(inp=>inp.oninput=e=>{d.dalies[e.target.dataset.dali]=e.target.value;renderWire();});
    box.querySelectorAll('[data-daliqty]').forEach(inp=>inp.oninput=e=>{d.daliQty[e.target.dataset.daliqty]=Math.max(0,Math.floor(+e.target.value||0));e.target.setCustomValidity(+e.target.value>64?'Vượt 64 địa chỉ/line':'');renderWire();});
    oh.appendChild(box);
  }
  if(dim){
    d.dims=d.dims||{};
    const box=document.createElement('div');box.className='port';box.style.marginTop='8px';
    box.innerHTML=`<div class="ph"><span class="pn" style="color:#b45309">DIMMER TRIAC 220V · DM1…DM${dim}</span></div>`;
    const pb=document.createElement('div');pb.className='pb';
    for(let i=1;i<=dim;i++){const v=d.dims[i]||'';if(v)outN++;
      const r=document.createElement('div');r.className='iorow';
      r.innerHTML=`<span class="tag" style="color:#b45309;background:#fef3c7">DM${i}</span><span class="name"><input data-dm="${i}" value="${esc(v)}" placeholder="Đèn dim 220V (halogen/LED TRIAC)"></span>`;
      pb.appendChild(r);}
    box.appendChild(pb);oh.appendChild(box);
    box.querySelectorAll('[data-dm]').forEach(inp=>inp.oninput=e=>{d.dims[+e.target.dataset.dm]=e.target.value;renderWire();});
  }
  if(dmx){
    d.dmxs=d.dmxs||{};
    const box=document.createElement('div');box.className='port';box.style.marginTop='8px';
    box.innerHTML=`<div class="ph"><span class="pn" style="color:#be185d">DMX512 SIGNAL CHANNELS · DMX1…DMX${dmx}</span></div>`;
    const pb=document.createElement('div');pb.className='pb';
    for(let i=1;i<=dmx;i++){const v=d.dmxs[i]||'';if(v)outN++;
      const r=document.createElement('div');r.className='iorow';
      r.innerHTML=`<span class="tag" style="color:#be185d;background:#fce7f3">DMX${i}</span><span class="name"><input data-dmx="${i}" value="${esc(v)}" placeholder="Dải LED RGBW / hiệu ứng"></span>`;
      pb.appendChild(r);}
    box.appendChild(pb);oh.appendChild(box);
    box.querySelectorAll('[data-dmx]').forEach(inp=>inp.oninput=e=>{d.dmxs[+e.target.dataset.dmx]=e.target.value;renderWire();});
  }
  const spi=_osp.spi||0, ssid=_osp.ssid||0;
  if(spi){
    d.spis=d.spis||{};
    const box=document.createElement('div');box.className='port';box.style.marginTop='8px';
    box.innerHTML=`<div class="ph"><span class="pn" style="color:#0891b2">SPI PIXEL LED · SPI1…SPI${spi} <span style="font-weight:400;color:var(--muted)">(${(_osp.spi_px||680)} px/ch)</span></span></div>`;
    const pb=document.createElement('div');pb.className='pb';
    for(let i=1;i<=spi;i++){const v=d.spis[i]||'';if(v)outN++;
      const r=document.createElement('div');r.className='iorow';
      r.innerHTML=`<span class="tag" style="color:#0891b2;background:#cffafe">SPI${i}</span><span class="name"><input data-spi="${i}" value="${esc(v)}" placeholder="Dải LED pixel addressable (D+/D-/GND)"></span>`;
      pb.appendChild(r);}
    box.appendChild(pb);oh.appendChild(box);
    box.querySelectorAll('[data-spi]').forEach(inp=>inp.oninput=e=>{d.spis[+e.target.dataset.spi]=e.target.value;renderWire();});
  }
  if(ssid){
    d.ssids=d.ssids||{};
    const box=document.createElement('div');box.className='port';box.style.marginTop='8px';
    box.innerHTML=`<div class="ph"><span class="pn" style="color:#0d9488">SAMSUNG INDOOR AC · AC1…AC${ssid} <span style="font-weight:400;color:var(--muted)">(P1/P2)</span></span></div>`;
    const pb=document.createElement('div');pb.className='pb';
    for(let i=1;i<=ssid;i++){const v=d.ssids[i]||'';if(v)outN++;
      const r=document.createElement('div');r.className='iorow';
      r.innerHTML=`<span class="tag" style="color:#0d9488;background:#ccfbf1">AC${i}</span><span class="name"><input data-ssid="${i}" value="${esc(v)}" placeholder="Dàn lạnh Samsung (P1/P2)"></span>`;
      pb.appendChild(r);}
    box.appendChild(pb);oh.appendChild(box);
    box.querySelectorAll('[data-ssid]').forEach(inp=>inp.oninput=e=>{d.ssids[+e.target.dataset.ssid]=e.target.value;renderWire();});
  }
  if(!relays && !ao && !dim && !dmx && !spi && !ssid) oh.innerHTML='<div class="empty">Thiết bị không có output</div>';
  $('#inCnt').textContent=inN; $('#outCnt').textContent=outN;
}

/* auto-map defaults (hotel standard) */
function autoMap(){
  const d=devByRef(S.sel); if(!d)return;
  const OUTS=['Đèn entry','Đèn living','Đèn ngủ chính','Đèn đầu giường T','Đèn đầu giường P','Đèn WC','Đèn ban công','Đèn gương','Rèm mở','Rèm đóng','Rèm blackout mở','Rèm blackout đóng','Van FCU','Ổ cắm 24h','LED-DND','LED-MUR','Đèn hành lang','Đèn tủ','Đèn trang trí','Dự phòng'];
  if(d.kind==='ctrl' && ctrlSpec(d).type==='rj45'){
    const sw=['Đèn chính','Đèn phụ','Đèn đọc sách'];
    for(let p=4;p<=ctrlSpec(d).ports;p++){ if(d.ports[p].sw===''||!d.ports[p].sw){ d.ports[p].sw='SW3'; d.ports[p].keys=[...sw]; } }
  } else {
    const di=d.kind==='ctrl'?(ctrlSpec(d).di||0):d.di;
    const IN=['Tiếp điểm cửa','Cửa ban công','Cửa phòng ngủ','Cửa sổ WC','Keycard holder','PIR phòng ngủ','PIR phòng khách','Nút chuông','Nút DND','Nút MUR'];
    for(let i=1;i<=di;i++){ if(!d.ins[i]) d.ins[i]=IN[i-1]|| ('Input '+i); }
  }
  const _sp=d.kind==='ctrl'?ctrlSpec(d):DB.mod[d.model];
  const relays=_sp.relays||0;
  for(let i=1;i<=relays;i++){ if(!d.outs[i]) d.outs[i]=OUTS[i-1]||('Output '+i); }
  const ao=_sp.ao||0; d.aos=d.aos||{};
  for(let i=1;i<=ao;i++){ if(!d.aos[i]) d.aos[i]='Dim 0-10V '+i; }
  const dim=_sp.dim||0; d.dims=d.dims||{};
  for(let i=1;i<=dim;i++){ if(!d.dims[i]) d.dims[i]='Đèn dim 220V '+i; }
  const dmx=_sp.dmx||0; d.dmxs=d.dmxs||{};
  for(let i=1;i<=dmx;i++){ if(!d.dmxs[i]) d.dmxs[i]='LED RGBW '+i; }
  const spi=_sp.spi||0; d.spis=d.spis||{};
  for(let i=1;i<=spi;i++){ if(!d.spis[i]) d.spis[i]='Dải LED pixel '+i; }
  const ssid=_sp.ssid||0; d.ssids=d.ssids||{};
  for(let i=1;i<=ssid;i++){ if(!d.ssids[i]) d.ssids[i]='Dàn lạnh Samsung '+i; }
}

/* ============================================================ LAYOUT ENGINE (shared SVG + LISP)
   Trả về mảng primitive trong toạ độ CAD (Y hướng lên), đơn vị mm.
   t: rect | line | text | ins
============================================================ */
function fname(d){ return d.label+' ('+d.model+')'; }
function deviceInputs(d){
  // → [{pin, name}]
  const arr=[];
  if(d.kind==='ctrl' && ctrlSpec(d).type==='rj45'){
    const sp=ctrlSpec(d);
    for(let p=1;p<=sp.ports;p++){const port=d.ports[p];
      const locked=port.sw==='LOCK'; const sw=locked?null:SWITCHES[port.sw]; const kc=locked?3:(sw?sw.keys:0);
      for(let k=0;k<3;k++){ if(locked||k<kc){ const nm=port.keys[k]||''; if(nm) arr.push({pin:p+'.'+(k+1),name:nm,sw:locked?'SPECIAL':(port.sw||'')}); } }
    }
  } else {
    const di=d.kind==='ctrl'?(ctrlSpec(d).di||0):d.di;
    for(let i=1;i<=di;i++){ if(d.ins[i]) arr.push({pin:'DI'+i,name:d.ins[i]}); }
  }
  return arr;
}
function deviceOutputs(d){
  const sp=d.kind==='ctrl'?ctrlSpec(d):DB.mod[d.model];
  const arr=[]; const relays=sp.relays||0, ao=sp.ao||0, dim=sp.dim||0, dmx=sp.dmx||0;
  const otag=d.kind==='mod'?d.otag:'Y';
  const mcb=d.mcb||{};
  for(let i=1;i<=relays;i++){ if(d.outs[i]) arr.push({pin:otag+i,name:d.outs[i],kind:'rl',amp:(mcb[i]||S.mcbDefault)}); }
  for(let i=1;i<=sp.dali;i++){ const qty=(d.daliQty||{})[i]||0; const name=(d.dalies||{})[i]; if(name||qty) arr.push({pin:'DA'+i+' (DA/DA)',name:(name||'DALI line '+i)+' · '+qty+'/64'+(qty>64?' — VƯỢT GIỚI HẠN':''),kind:'dali'}); }
  for(let i=1;i<=ao;i++){ if(d.aos[i]) arr.push({pin:'AO'+i,name:d.aos[i],kind:'ao'}); }
  for(let i=1;i<=dim;i++){ if((d.dims||{})[i]) arr.push({pin:'DM'+i,name:d.dims[i],kind:'dim'}); }
  for(let i=1;i<=dmx;i++){ if((d.dmxs||{})[i]) arr.push({pin:'DMX'+i,name:d.dmxs[i],kind:'dmx'}); }
  const spi=sp.spi||0, ssid=sp.ssid||0;
  for(let i=1;i<=spi;i++){ if((d.spis||{})[i]) arr.push({pin:'SPI'+i,name:d.spis[i],kind:'spi'}); }
  for(let i=1;i<=ssid;i++){ if((d.ssids||{})[i]) arr.push({pin:'AC'+i,name:d.ssids[i],kind:'ssid'}); }
  return arr;
}

const L={CTRL:'GEC-CTRL',IN:'GEC-IN',OUT:'GEC-OUT',WIRE:'GEC-WIRE',TXT:'GEC-TXT',FRAME:'GEC-FRAME',NET:'GEC-NET',PWR:'GEC-PWR',MCB:'GEC-MCB',TB:'GEC-TITLE',BUS:'GEC-BUS'};

/* ---- symbol helpers (RJ45 jack, switch plate, keycard) ---- */
function symRJ45(P,xr,y,lay){            // RJ45 jack, right edge at xr (toward controller)
  const w=9,h=5.4,xl=xr-w;
  P.push({t:'rect',x1:xl,y1:y-h/2,x2:xr,y2:y+h/2,layer:lay});
  P.push({t:'rect',x1:xl+w*0.34,y1:y+h/2,x2:xl+w*0.66,y2:y+h/2+1.3,layer:lay}); // tab
  for(let k=0;k<4;k++){const px=xl+1.4+k*1.7;P.push({t:'line',x1:px,y1:y-h/2,x2:px,y2:y-h/2+1.5,layer:lay});}
}
function symKeycard(P,xr,y,lay){        // keycard holder, right edge xr
  const w=7,h=7,xl=xr-w;
  P.push({t:'rect',x1:xl,y1:y-h/2,x2:xr,y2:y+h/2,layer:lay});
  P.push({t:'line',x1:xl+1.5,y1:y+h/2-1,x2:xr-1.5,y2:y+h/2-1,layer:lay});
  P.push({t:'line',x1:(xl+xr)/2,y1:y+h/2-1,x2:(xl+xr)/2,y2:y-0.5,layer:lay});
}
function symSwitch(P,xr,y,lay,nkeys){   // wall switch plate with nkeys cells, right edge xr
  const w=Math.max(7,nkeys*4.5),h=7,xl=xr-w;
  P.push({t:'rect',x1:xl,y1:y-h/2,x2:xr,y2:y+h/2,layer:lay});
  for(let k=1;k<nkeys;k++){const cx=xl+w*k/nkeys;P.push({t:'line',x1:cx,y1:y-h/2,x2:cx,y2:y+h/2,layer:lay});}
  for(let k=0;k<nkeys;k++){const cx=xl+w*(k+0.5)/nkeys;P.push({t:'text',x:cx,y:y-1.0,h:2.0,str:String(k+1),layer:L.TXT,anc:'m'});}
  return w;
}
function devKindFromKeys(joined){
  const j=joined.toLowerCase();
  if(/card|keycard/.test(j)) return 'KEY CARD';
  if(/dnd|mur/.test(j)) return 'DND/MUR';
  if(/bell|chuông|chuong|doorbell/.test(j)) return 'BELL';
  if(/pir|motion|cảm biến|cam bien/.test(j)) return 'SENSOR';
  if(/cửa|cua|door|window|sổ|so\b/.test(j)) return 'CONTACT';
  return null;
}

function buildWiring(){
  const P=[]; const RS=9, HEAD=16, BW=92, LEAD=34, DEVBW=46, FRW=58, FRH=7, GAPX=210, GAPY=34;
  let cursorY=0;
  const devs=allDevs();
  if(!devs.length){ return {P,bounds:[0,0,100,40]}; }
  const bx=DEVBW+LEAD+30, bxr=bx+BW;       // device block x-range
  const OUTW=104;                          // output zone width OUTSIDE box (MCB·N&TE·load)
  // intra-panel bus rails (vertical, far right of outputs): 12V / GND / CH1 / CL1 / CH2 / CL2 / A1 / B1 / (A2 / B2) / ETH
  const RAILLAB=['V+','GND','D+','D−','SHLD','PORT2 D+','PORT2 D−','ETH'];
  const RAILX=[]; let _rx=bxr+OUTW+16;
  RAILLAB.forEach(()=>{RAILX.push(_rx); _rx+=12;});
  const tapPts=RAILLAB.map(()=>[]);        // collected connection points per rail
  devs.forEach(d=>{
    const outs=deviceOutputs(d);
    const spec = d.kind==='ctrl'?ctrlSpec(d):DB.mod[d.model];
    const isRJ = (d.kind==='ctrl' && spec.type==='rj45');
    // ---- build input row list (rj45: per-port ; else per-DI) ----
    let inList;
    if(isRJ){
      inList=[];
      for(let p=1;p<=spec.ports;p++){
        const port=d.ports[p]; const locked=port.sw==='LOCK';
        const named=port.keys.map((k,idx)=>({i:idx+1,name:k})).filter(o=>o.name);
        if(!named.length) continue;
        const joined=named.map(o=>o.name).join(' ');
        const dk=devKindFromKeys(joined);
        inList.push({port:p,jack:'Port'+p,dev:(dk||'S'+p),kind:dk,keys:named});
      }
    } else {
      inList=deviceInputs(d).map(io=>({term:true,pin:io.pin,name:io.name}));
    }
    const rows=Math.max(inList.length,outs.length,2);
    const boxH=HEAD+rows*RS+10;            // +10 for comms strip at bottom
    const topY=cursorY, botY=cursorY-boxH;
    // ----- device block -----
    if(d.sym==='file' && d.dwg){
      P.push({t:'ins',path:d.dwg,blk:d.blk||d.model,x:bx+BW/2,y:topY-boxH/2,scale:d.scale,rot:0,layer:L.CTRL});
      P.push({t:'rect',x1:bx,y1:botY,x2:bxr,y2:topY,layer:L.FRAME,dash:1});
    } else {
      P.push({t:'rect',x1:bx,y1:botY,x2:bxr,y2:topY,layer:L.CTRL});
    }
    P.push({t:'text',x:bx+BW/2,y:topY-7.5,h:3.0,str:d.model,layer:L.TXT,anc:'m'});
    P.push({t:'text',x:bx+BW/2,y:topY-11.5,h:2.0,str:d.label,layer:L.TXT,anc:'m'});
    const rs=spec.rs485||0;
    P.push({t:'text',x:bx+BW/2,y:topY-14.6,h:1.7,str:'DyNet RS-485 ×'+rs,layer:L.NET,anc:'m'});
    P.push({t:'line',x1:bx,y1:topY-HEAD,x2:bxr,y2:topY-HEAD,layer:L.CTRL});

    // ----- inputs (left) -----
    if(isRJ){
      inList.forEach((row,i)=>{
        const y=topY-HEAD-i*RS-RS*0.5;
        // jack INSIDE box near left edge + Port label
        symRJ45(P,bx+11,y,L.IN);                       // jack body [bx+2 , bx+11]
        P.push({t:'line',x1:bx,y1:y,x2:bx+2,y2:y,layer:L.WIRE});
        P.push({t:'text',x:bx+14,y:y+0.6,h:1.9,str:row.jack,layer:L.IN,anc:'l'});
        // external: wire box edge -> switch symbol with cable slash
        const symR=bx-26, swW=(row.kind==='KEY CARD')?7:Math.max(7,row.keys.length*4.5);
        P.push({t:'line',x1:bx,y1:y,x2:symR,y2:y,layer:L.WIRE});
        const sm=(bx+symR)/2;
        P.push({t:'line',x1:sm-1.3,y1:y-2,x2:sm+1.3,y2:y+2,layer:L.WIRE});
        if(row.kind==='KEY CARD') symKeycard(P,symR,y,L.IN); else symSwitch(P,symR,y,L.IN,row.keys.length);
        const lx=symR-swW-3;
        P.push({t:'text',x:lx,y:y+1.4,h:2.0,str:row.dev,layer:L.IN,anc:'r'});
        const ktxt=row.keys.map(o=>o.i+'-'+o.name).join('   ');
        P.push({t:'text',x:lx,y:y-2.2,h:1.6,str:ktxt,layer:L.TXT,anc:'r'});
        const guard=lx-Math.max(row.dev.length,ktxt.length)*1.15;
        P.push({t:'line',x1:guard,y1:y,x2:guard,y2:y,layer:L.TXT});
      });
    } else {
      inList.forEach((io,i)=>{
        const y=topY-HEAD-i*RS-RS*0.5;
        P.push({t:'line',x1:bx,y1:y,x2:bx-LEAD,y2:y,layer:L.WIRE});
        P.push({t:'text',x:bx+2,y:y+0.6,h:2.0,str:io.pin,layer:L.IN,anc:'l'});
        const dxr=bx-LEAD, dxl=dxr-DEVBW;
        // text-only device name (no rect frame)
        P.push({t:'text',x:(dxl+dxr)/2,y:y-0.7,h:1.9,str:io.name,layer:L.TXT,anc:'m'});
      });
    }

    // ----- outputs: L# (relay input) + relay contact R# + Y# (relay output) INSIDE box · MCB · N&TE · load OUTSIDE -----
    const ntY=[]; let ntx1=0,ntx2=0;
    outs.forEach((io,i)=>{
      const y=topY-HEAD-i*RS-RS*0.5;
      if(io.kind==='dali'||io.kind==='ao'||io.kind==='dim'||io.kind==='dmx'||io.kind==='spi'||io.kind==='ssid'){
        const lay = io.kind==='dali'?'GEC-AO':io.kind==='ao'?'GEC-AO':(io.kind==='dim'?'GEC-DIM':(io.kind==='dmx'?'GEC-DMX':(io.kind==='spi'?'GEC-SPI':'GEC-SSID')));
        P.push({t:'text',x:bxr-2,y:y+0.6,h:1.8,str:io.pin,layer:lay,anc:'r'});
        const fxl=bxr+34, fxr=fxl+FRW;
        P.push({t:'line',x1:bxr,y1:y,x2:fxl,y2:y,layer:L.WIRE});
        // analog/dimmer/dmx load in equal-sized REC frame
        P.push({t:'rect',x1:fxl,y1:y-RS/2+0.5,x2:fxr,y2:y+RS/2-0.5,layer:lay});
        P.push({t:'text',x:(fxl+fxr)/2,y:y+1,h:1.8,str:io.name,layer:L.TXT,anc:'m'});
        return;
      }
      const rn=String(io.pin).replace(/\D/g,'');
      // L# label (relay INPUT side) + relay NO contact + Y# label (relay OUTPUT side) INSIDE box
      P.push({t:'text',x:bxr-26,y:y+0.6,h:1.8,str:'L'+rn,layer:L.OUT,anc:'r'});
      const cx1=bxr-22, cx2=bxr-11;
      P.push({t:'dot',x:cx1,y:y,layer:L.OUT});
      P.push({t:'line',x1:cx1,y1:y,x2:cx2-0.5,y2:y+2.6,layer:L.OUT});   // open arm
      P.push({t:'dot',x:cx2,y:y,layer:L.OUT});
      P.push({t:'text',x:(cx1+cx2)/2,y:y+2.9,h:1.6,str:'R'+rn,layer:L.OUT,anc:'m'});
      P.push({t:'text',x:bxr-2,y:y+0.6,h:1.8,str:'Y'+rn,layer:L.OUT,anc:'r'});  // Y# output label
      P.push({t:'line',x1:cx2,y1:y,x2:bxr,y2:y,layer:L.WIRE});           // contact -> edge terminal
      // external: Fuse -> N&TE bus -> load (in equal REC frame)
      const mx1=bxr+5, mx2=mx1+12;
      P.push({t:'line',x1:bxr,y1:y,x2:mx1,y2:y,layer:L.WIRE});
      P.push({t:'rect',x1:mx1,y1:y-2,x2:mx2,y2:y+2,layer:L.MCB});
      P.push({t:'line',x1:mx1+1,y1:y-1.4,x2:mx2-1,y2:y+1.4,layer:L.MCB});
      P.push({t:'text',x:(mx1+mx2)/2,y:y-3.4,h:1.4,str:(S.mcbTag||'FUSE')+'-'+io.amp+'A',layer:L.MCB,anc:'m'});
      ntx1=mx2+9; ntx2=ntx1+4;
      const lxl=ntx2+9, lxr=lxl+FRW;
      P.push({t:'line',x1:mx2,y1:y,x2:lxl,y2:y,layer:L.WIRE});
      // load in equal-sized REC frame
      P.push({t:'rect',x1:lxl,y1:y-RS/2+0.5,x2:lxr,y2:y+RS/2-0.5,layer:L.OUT});
      P.push({t:'text',x:(lxl+lxr)/2,y:y+1,h:1.8,str:io.name,layer:L.TXT,anc:'m'});
      P.push({t:'line',x1:lxl,y1:y-1.6,x2:ntx1,y2:y-1.6,layer:L.NET});
      P.push({t:'dot',x:ntx1,y:y-1.6,layer:L.NET});
      P.push({t:'line',x1:lxl,y1:y-3.0,x2:ntx2,y2:y-3.0,layer:L.NET});
      P.push({t:'dot',x:ntx2,y:y-3.0,layer:L.NET});
      ntY.push(y);
    });
    if(ntY.length){
      const yT=Math.max(...ntY)+5, yB=Math.min(...ntY)-5;
      P.push({t:'line',x1:ntx1,y1:yB,x2:ntx1,y2:yT,layer:L.NET});
      P.push({t:'line',x1:ntx2,y1:yB,x2:ntx2,y2:yT,layer:L.NET});
      P.push({t:'text',x:ntx1,y:yT+1.5,h:1.8,str:'N',layer:L.NET,anc:'m'});
      P.push({t:'text',x:ntx2,y:yT+1.5,h:1.8,str:'TE',layer:L.NET,anc:'m'});
    }
    // ----- comms terminal strip (bottom of block): 12V GND | CH1 CL1 CH2 CL2 | A1 B1 (A2 B2) | ETH -----
    const cy=botY+5;                        // strip baseline inside block bottom
    P.push({t:'line',x1:bx,y1:botY+10,x2:bxr,y2:botY+10,layer:L.CTRL});
    // build pin list for THIS device based on its capabilities
    const cSpec=spec;
    const devPins=[{lab:'GND',ri:1},{lab:'D+',ri:2},{lab:'D−',ri:3},{lab:'SHLD',ri:4}];
    if(!/^100/.test(cSpec.pw||'')) devPins.unshift({lab:'V+ IN',ri:0});
    else P.push({t:'text',x:bx+2,y:topY+4,h:1.8,str:'AC IN: L / N / PE · '+cSpec.pw,layer:L.PWR,anc:'l'});
    if(cSpec.rs485>=2){devPins.push({lab:'P2 D+',ri:5},{lab:'P2 D−',ri:6});}
    if(cSpec.eth) devPins.push({lab:'ETH',ri:7});
    const pinSpacing=Math.min(15, (BW-10)/devPins.length);
    const pinStartX=bx+8;
    // Only 12V, GND, CH1, CL1 loop to bus rails; other pins shown as labels only (reserved)
    const loopRails=new Set([0,1,2,3,4]); // 12V=0, GND=1, CH1=2, CL1=3
    let loopK=0; // counter for looped pins (stagger lead-Y)
    devPins.forEach((p,k)=>{
      const px=pinStartX+k*pinSpacing;
      const isPwr=(p.ri<=1);
      const isCan=(p.ri===2||p.ri===3);
      const doLoop=loopRails.has(p.ri);
      P.push({t:'text',x:px,y:cy-1,h:1.6,str:p.lab,layer:(isPwr?L.PWR:(isCan?L.NET:L.WIRE)),anc:'m'});
      if(doLoop){
        // connect to bus rail
        const yLead=botY-6-loopK*4;
        P.push({t:'line',x1:px,y1:botY,x2:px,y2:yLead,layer:(isPwr?L.PWR:L.NET)});
        P.push({t:'line',x1:px,y1:yLead,x2:RAILX[p.ri],y2:yLead,layer:(isPwr?L.PWR:L.NET)});
        P.push({t:'dot',x:RAILX[p.ri],y:yLead,layer:(isPwr?L.PWR:L.NET)});
        tapPts[p.ri].push(yLead);
        loopK++;
      } else {
        // stub: short line down + small tick mark (reserved port, no bus connection)
        P.push({t:'line',x1:px,y1:botY,x2:px,y2:botY-4,layer:L.WIRE});
      }
    });
    cursorY = botY - GAPY;
  });
  // ----- vertical bus rails spanning all taps -----
  const yTopRail=2;
  const lastUsedRail=RAILX.length-1;
  RAILX.forEach((rx,k)=>{
    const pts=tapPts[k]; if(!pts.length)return;
    const yBot=Math.min(...pts)-8;
    const isPwr=(k<=1);
    P.push({t:'line',x1:rx,y1:yTopRail,x2:rx,y2:yBot,layer:(isPwr?L.PWR:L.NET)});
    P.push({t:'text',x:rx,y:yTopRail+3,h:2.0,str:RAILLAB[k],layer:(isPwr?L.PWR:L.NET),anc:'m'});
  });
  // bus group caption
  const usedRailIdxs=RAILX.map((_,k)=>k).filter(k=>tapPts[k].length>0); if(!usedRailIdxs.includes(0))usedRailIdxs.unshift(0);
  const capXl=RAILX[Math.min(...usedRailIdxs)], capXr=RAILX[Math.max(...usedRailIdxs)];
  const capX=(capXl+capXr)/2;
  P.push({t:'text',x:capX,y:yTopRail+8,h:2.0,str:'BUS NỘI BỘ',layer:L.NET,anc:'m'});
  P.push({t:'text',x:capX,y:yTopRail+11,h:1.5,str:'DyNet RS-485 · D+/D− · SHLD · GND',layer:L.NET,anc:'m'});
  // ----- power supply (12VDC) feeding 12V/GND rails -----
  const allTapFlat=[].concat(...tapPts);
  const railBot=allTapFlat.length?Math.min(...allTapFlat)-8:(yTopRail-40);
  const py=railBot-18, pxl=RAILX[0]-14, pxr=RAILX[Math.max(...usedRailIdxs)]+14;
  P.push({t:'rect',x1:pxl,y1:py-20,x2:pxr,y2:py,layer:L.PWR});
  P.push({t:'text',x:(pxl+pxr)/2,y:py-6,h:2.5,str:S.power.name,layer:L.TXT,anc:'m'});
  P.push({t:'text',x:(pxl+pxr)/2,y:py-10,h:2.1,str:(S.power.v||'15VDC')+'  ·  '+(S.power.t||'V+ · GND'),layer:L.TXT,anc:'m'});
  // PSU output terminals up to 12V & GND rails
  P.push({t:'text',x:RAILX[0],y:py-15.5,h:1.8,str:'V+ 15V',layer:L.PWR,anc:'m'});
  P.push({t:'text',x:RAILX[1],y:py-15.5,h:1.8,str:'GND',layer:L.PWR,anc:'m'});
  P.push({t:'line',x1:RAILX[0],y1:py,x2:RAILX[0],y2:railBot,layer:L.PWR});
  P.push({t:'line',x1:RAILX[1],y1:py,x2:RAILX[1],y2:railBot,layer:L.PWR});
  P.push({t:'dot',x:RAILX[0],y:railBot,layer:L.PWR});
  P.push({t:'dot',x:RAILX[1],y:railBot,layer:L.PWR});
  // ----- AC IN: power feed into PSU, auto-linked to DB-RCU "PS" circuit -----
  const ps=dbPSCircuit();
  const acx=(pxl+pxr)/2, acRectB=py-20, acTail=acRectB-15;
  P.push({t:'line',x1:acx,y1:acTail,x2:acx,y2:acRectB,layer:L.MCB});           // feed line
  P.push({t:'line',x1:acx-1.7,y1:acRectB-3.2,x2:acx,y2:acRectB,layer:L.MCB});  // arrow head into PSU
  P.push({t:'line',x1:acx+1.7,y1:acRectB-3.2,x2:acx,y2:acRectB,layer:L.MCB});
  P.push({t:'text',x:acx,y:acTail-2.4,h:2.1,str:'AC IN · '+(ps?(ps.prot+' '+ps.spec):'MCB DB-RCU'),layer:L.MCB,anc:'m'});
  P.push({t:'text',x:acx,y:acTail-5.6,h:1.7,str:'Cấp nguồn từ DB-RCU'+(ps&&ps.tag?(' ('+ps.tag+')'):''),layer:L.TXT,anc:'m'});
  // sheet frame + title block (GEC form)
  addSheetFrame(P, S.project.name||'-');
  // bounds
  const b=bounds(P); return {P,bounds:b};
}

/* ---- topology helpers ---- */
function parseRCU(s){
  return (s||'').split(',').map(t=>t.trim()).filter(Boolean).map(t=>{
    let m=t.match(/(?:type\s*)?(\d+)\s*[x×:]\s*(\d+)/i);
    if(m) return {type:'RCU TYPE '+m[1], qty:+m[2]};
    m=t.match(/(\d+)/);
    return m?{type:'RCU TYPE '+m[1], qty:1}:{type:t, qty:1};
  });
}
function symPC(P,cx,by,lay){            // computer icon, by = floor baseline
  P.push({t:'rect',x1:cx-7,y1:by+4,x2:cx+7,y2:by+15,layer:lay});
  P.push({t:'rect',x1:cx-5.4,y1:by+5.4,x2:cx+5.4,y2:by+13.4,layer:lay});
  P.push({t:'line',x1:cx,y1:by+4,x2:cx,y2:by+1.6,layer:lay});
  P.push({t:'line',x1:cx-4,y1:by+1.6,x2:cx+4,y2:by+1.6,layer:lay});
}
function rackBox(P,x0,x1,yTop,items,code,lay){   // returns {bottom, core, x0, x1}
  const rh=6.4; let y=yTop, core=null;
  items.forEach(it=>{
    const isCore=/switch|core/i.test(it);
    P.push({t:'rect',x1:x0,y1:y-rh,x2:x1,y2:y,layer:isCore?L.OUT:lay});
    P.push({t:'text',x:(x0+x1)/2,y:y-rh+1.7,h:2.0,str:it,layer:L.TXT,anc:'m'});
    if(isCore&&core===null)core=y-rh/2;
    y-=rh;
  });
  if(code){
    P.push({t:'rect',x1:x0,y1:y-rh,x2:x1,y2:y,layer:L.NET});
    P.push({t:'text',x:(x0+x1)/2,y:y-rh+1.7,h:2.0,str:code,layer:L.TXT,anc:'m'});
    y-=rh;
  }
  return {bottom:y, core:(core!=null?core:yTop-rh/2), x0, x1};
}

function buildTopology(){
  const P=[]; const T=S.topo; const fl=T.floors||[];
  if(!fl.length) return {P,bounds:[0,0,100,40]};
  const sv=T.server||{};

  /* ══════════════════════════════════════════════════════════
     TOPOLOGY per DXF reference (SDNLTT.dxf)
     Layout (left → right):
       FLOOR_LABEL | RACK (Switch+PP) | RISER | RCU#1 ··· RCU#N  xN
     Server room (IT ROOM) at bottom:
       2 IT cabinets (Switch+PP+ODF), UPS, Servers
     All routing orthogonal (H/V only)
  ══════════════════════════════════════════════════════════ */

  const FH=42;                           // floor band height
  const LBL_X=4;                         // floor label left
  const RACKX0=50;                       // rack box left
  const RACKW=54;                        // rack box width
  const RACKX1=RACKX0+RACKW;
  const RISERX=RACKX1+16;               // vertical riser X
  const RCUX0=RISERX+30;                // first RCU icon X
  const RW=18, RH=16, RPITCH=28;        // RCU icon dimensions
  const srvIdx=(sv.floor==null||sv.floor===''||sv.floor==='bottom')?-1:parseInt(sv.floor);

  // pre-calc max rooms for width
  let maxRooms=1;
  fl.forEach(f=>{const r=parseRCU(f.rcu); maxRooms=Math.max(maxRooms,r.reduce((a,b)=>a+b.qty,0));});
  const showMax=Math.min(maxRooms,5);
  const contentRight=RCUX0+(showMax+1)*RPITCH+60;

  /* ── DRAW FLOORS (top → bottom) ── */
  let curY=0, serverAnchorY=null;
  const floorData=[];

  fl.forEach((f,idx)=>{
    const fy=curY;
    const midY=fy-FH*0.5;
    const botY=fy-FH;
    const rcus=parseRCU(f.rcu);
    const rooms=rcus.reduce((a,b)=>a+b.qty,0);
    const hasRooms=rooms>0;
    const flName=f.name||((idx+1)+'/F');
    const flNameEN=f.nameEN||flName;

    // floor separator (center line)
    P.push({t:'line',x1:0,y1:botY,x2:contentRight,y2:botY,layer:L.WIRE,dash:1});

    // floor label — bilingual (EN above, VN below)
    P.push({t:'text',x:LBL_X,y:midY+3,h:2.4,str:flNameEN,layer:L.TXT,anc:'l'});
    P.push({t:'text',x:LBL_X,y:midY-1.5,h:2.0,str:flName,layer:L.TXT,anc:'l'});

    if(hasRooms){
      /* ── RACK box (contains SWITCH + PATCH PANEL) ── */
      const ryt=midY+FH*0.36, ryb=midY-FH*0.36;
      P.push({t:'rect',x1:RACKX0,y1:ryb,x2:RACKX1,y2:ryt,layer:L.NET});
      // SWITCH row (top half)
      const swMidY=(ryt+midY)/2;
      P.push({t:'rect',x1:RACKX0+2,y1:midY+1,x2:RACKX1-2,y2:ryt-2,layer:L.NET});
      P.push({t:'text',x:(RACKX0+RACKX1)/2,y:swMidY+1,h:1.3,str:'1xSWITCH '+rooms+' PORT',layer:L.TXT,anc:'m'});
      // PATCH PANEL row (bottom half)
      const ppMidY=(midY+ryb)/2;
      P.push({t:'rect',x1:RACKX0+2,y1:ryb+2,x2:RACKX1-2,y2:midY-1,layer:L.NET});
      P.push({t:'text',x:(RACKX0+RACKX1)/2,y:ppMidY+1,h:1.3,str:'1xPATCH PANEL '+rooms+' PORT',layer:L.TXT,anc:'m'});
      // "LẮP TRONG TỦ RACK MẠNG / IN DATA RACK" label below rack
      P.push({t:'text',x:(RACKX0+RACKX1)/2,y:ryb-3,h:1.1,str:'LẮP TRONG TỦ RACK MẠNG',layer:L.TXT,anc:'m'});
      P.push({t:'text',x:(RACKX0+RACKX1)/2,y:ryb-5.5,h:1.0,str:'IN DATA RACK',layer:L.TXT,anc:'m'});

      /* ── RACK → RISER (orthogonal: right stub → riser dot) ── */
      P.push({t:'line',x1:RACKX1,y1:midY,x2:RISERX,y2:midY,layer:L.NET});
      P.push({t:'dot',x:RISERX,y:midY,layer:L.NET});

      /* ── RISER → RCU horizontal bus (right from riser) ── */
      const show=Math.min(rooms,5);
      const rcuBusEndX=RCUX0+(show-1)*RPITCH+RW+6;
      P.push({t:'line',x1:RISERX,y1:midY,x2:rcuBusEndX,y2:midY,layer:L.NET});
      // "CAT6 UTP" label on bus
      P.push({t:'text',x:(RISERX+RCUX0)/2,y:midY+3,h:1.2,str:'CAT6 UTP',layer:L.IN,anc:'m'});

      /* ── RCU icons along bus ── */
      for(let i=0;i<show;i++){
        const bx=RCUX0+i*RPITCH;
        const bmx=bx+RW/2;
        // vertical stub down from bus to RCU box
        P.push({t:'line',x1:bmx,y1:midY,x2:bmx,y2:midY-3,layer:L.NET});
        P.push({t:'dot',x:bmx,y:midY,layer:L.NET});
        // RCU box
        P.push({t:'rect',x1:bx,y1:midY-3-RH,x2:bx+RW,y2:midY-3,layer:L.CTRL});
        P.push({t:'text',x:bmx,y:midY-3-RH/2+1,h:1.2,str:'RCU',layer:L.TXT,anc:'m'});
      }
      // "..........  xN" label after last RCU
      if(rooms>2){
        const dotX=RCUX0+show*RPITCH-RPITCH/2;
        P.push({t:'text',x:rcuBusEndX+6,y:midY-3-RH/2+1,h:1.4,str:'..........',layer:L.TXT,anc:'l'});
        P.push({t:'text',x:rcuBusEndX+50,y:midY-3-RH/2+1,h:1.6,str:'x'+rooms,layer:L.TXT,anc:'l'});
      }
      // Bilingual RCU label (below icons)
      P.push({t:'text',x:RCUX0+show*RPITCH/2,y:midY-3-RH-4,h:1.1,str:'ROOM CONTROLLER UNIT (RCU)',layer:L.IN,anc:'m'});
      P.push({t:'text',x:RCUX0+show*RPITCH/2,y:midY-3-RH-7,h:1.0,str:'BỘ ĐIỀU KHIỂN PHÒNG (RCU)',layer:L.IN,anc:'m'});
    }

    floorData.push({midY, hasRooms, name:flName});
    f._midY=midY;
    curY-=FH;
    if(idx===srvIdx){ serverAnchorY=curY-10; curY-=140; }
  });

  if(serverAnchorY===null) serverAnchorY=curY-20;
  const topMidY=floorData[0].midY;

  /* ── VERTICAL RISER (straight line through all floors) ── */
  const riserTop=topMidY+FH*0.4;
  const riserBot=serverAnchorY+8;
  P.push({t:'line',x1:RISERX,y1:riserTop,x2:RISERX,y2:riserBot,layer:L.NET});
  // riser label (rotated conceptually — placed alongside)
  P.push({t:'text',x:RISERX-4,y:(riserTop+riserBot)/2+8,h:1.6,str:'RISER',layer:L.NET,anc:'r'});
  P.push({t:'text',x:RISERX-4,y:(riserTop+riserBot)/2+3,h:1.3,str:sv.fiber||'CÁP QUANG',layer:L.IN,anc:'r'});
  P.push({t:'text',x:RISERX-4,y:(riserTop+riserBot)/2-2,h:1.3,str:'4FO SM',layer:L.IN,anc:'r'});

  /* ══════════════════════════════════════════════════════════
     IT ROOM / SERVER ROOM — per DXF reference
     Layout: 2 cabinet racks side by side, UPS, server boxes
  ══════════════════════════════════════════════════════════ */
  const SRtop=serverAnchorY;
  const SRbot=SRtop-120;
  const SRxl=RACKX0-8, SRxr=contentRight-10;

  // outer frame
  P.push({t:'rect',x1:SRxl,y1:SRbot,x2:SRxr,y2:SRtop,layer:L.CTRL});
  P.push({t:'text',x:LBL_X,y:(SRtop+SRbot)/2+3,h:2.2,str:'IT ROOM',layer:L.TXT,anc:'l'});
  P.push({t:'text',x:LBL_X,y:(SRtop+SRbot)/2-2,h:1.8,str:'PHÒNG MÁY',layer:L.TXT,anc:'l'});

  // ── CABINET 1 (left — ODF + Switch + PP) ──
  const cab1X0=SRxl+10, cab1X1=cab1X0+60;
  const cabYt=SRtop-10, cabYb=SRtop-70;
  P.push({t:'rect',x1:cab1X0,y1:cabYb,x2:cab1X1,y2:cabYt,layer:L.NET});
  // ODF row
  P.push({t:'rect',x1:cab1X0+2,y1:cabYt-4,x2:cab1X1-2,y2:cabYt-14,layer:L.NET});
  P.push({t:'text',x:(cab1X0+cab1X1)/2,y:cabYt-8,h:1.3,str:'ODF 16 PORT',layer:L.TXT,anc:'m'});
  // SWITCH row
  P.push({t:'rect',x1:cab1X0+2,y1:cabYt-18,x2:cab1X1-2,y2:cabYt-28,layer:L.NET});
  P.push({t:'text',x:(cab1X0+cab1X1)/2,y:cabYt-22,h:1.3,str:'1xSWITCH 24 PORT',layer:L.TXT,anc:'m'});
  // PATCH PANEL row
  P.push({t:'rect',x1:cab1X0+2,y1:cabYt-32,x2:cab1X1-2,y2:cabYt-42,layer:L.NET});
  P.push({t:'text',x:(cab1X0+cab1X1)/2,y:cabYt-36,h:1.3,str:'1xPATCH PANEL 24P',layer:L.TXT,anc:'m'});
  // PDU row
  P.push({t:'rect',x1:cab1X0+2,y1:cabYt-46,x2:cab1X1-2,y2:cabYt-56,layer:L.PWR});
  P.push({t:'text',x:(cab1X0+cab1X1)/2,y:cabYt-50,h:1.3,str:'PDU',layer:L.TXT,anc:'m'});

  // ── Riser connects to cabinet 1 (orthogonal) ──
  const cab1MidX=(cab1X0+cab1X1)/2;
  P.push({t:'line',x1:RISERX,y1:riserBot,x2:RISERX,y2:cabYt,layer:L.NET});
  P.push({t:'line',x1:RISERX,y1:cabYt,x2:cab1X1,y2:cabYt,layer:L.NET});
  P.push({t:'dot',x:RISERX,y:cabYt,layer:L.NET});

  // ── UPS (below cabinet 1) ──
  const upsW=56, upsH=16;
  const upsYt=cabYb-8, upsYb=upsYt-upsH;
  P.push({t:'rect',x1:cab1X0+2,y1:upsYb,x2:cab1X0+2+upsW,y2:upsYt,layer:L.PWR});
  P.push({t:'text',x:cab1X0+2+upsW/2,y:upsYt-4,h:1.3,str:'UPS ONLINE 1KVA',layer:L.TXT,anc:'m'});
  P.push({t:'text',x:cab1X0+2+upsW/2,y:upsYt-9,h:1.1,str:'15 MINUTES',layer:L.TXT,anc:'m'});
  // 220V AC label
  P.push({t:'text',x:cab1X0+2+upsW/2,y:upsYb-3,h:1.4,str:'220V AC',layer:L.PWR,anc:'m'});

  // ── CABINET 2 (right — mirrors cab1 for redundancy/expansion) ──
  const cab2X0=cab1X1+24, cab2X1=cab2X0+60;
  P.push({t:'rect',x1:cab2X0,y1:cabYb,x2:cab2X1,y2:cabYt,layer:L.NET});
  P.push({t:'rect',x1:cab2X0+2,y1:cabYt-4,x2:cab2X1-2,y2:cabYt-14,layer:L.NET});
  P.push({t:'text',x:(cab2X0+cab2X1)/2,y:cabYt-8,h:1.3,str:'ODF 16 PORT',layer:L.TXT,anc:'m'});
  P.push({t:'rect',x1:cab2X0+2,y1:cabYt-18,x2:cab2X1-2,y2:cabYt-28,layer:L.NET});
  P.push({t:'text',x:(cab2X0+cab2X1)/2,y:cabYt-22,h:1.3,str:'1xSWITCH 24 PORT',layer:L.TXT,anc:'m'});
  P.push({t:'rect',x1:cab2X0+2,y1:cabYt-32,x2:cab2X1-2,y2:cabYt-42,layer:L.NET});
  P.push({t:'text',x:(cab2X0+cab2X1)/2,y:cabYt-36,h:1.3,str:'1xPATCH PANEL 24P',layer:L.TXT,anc:'m'});
  P.push({t:'rect',x1:cab2X0+2,y1:cabYt-46,x2:cab2X1-2,y2:cabYt-56,layer:L.PWR});
  P.push({t:'text',x:(cab2X0+cab2X1)/2,y:cabYt-50,h:1.3,str:'PDU',layer:L.TXT,anc:'m'});
  // inter-cabinet link (horizontal)
  P.push({t:'line',x1:cab1X1,y1:(cabYt+cabYb)/2,x2:cab2X0,y2:(cabYt+cabYb)/2,layer:L.NET});

  // ── SERVER boxes (right side of IT room) ──
  const servers=(sv.servers||'').split(',').map(s=>s.trim()).filter(Boolean);
  if(servers.length){
    const svX0=cab2X1+20;
    const svW=50, svH=14, svGap=6;
    let sy=cabYt-4;

    // vertical bus from cabinet 2 right to servers
    const busX=cab2X1+10;
    P.push({t:'line',x1:cab2X1,y1:(cabYt+cabYb)/2,x2:busX,y2:(cabYt+cabYb)/2,layer:L.NET});
    P.push({t:'line',x1:busX,y1:cabYt-4,x2:busX,y2:sy-servers.length*(svH+svGap),layer:L.NET});

    servers.forEach((s,i)=>{
      const by=sy-i*(svH+svGap);
      const bmidY=by-svH/2;
      // horizontal stub from bus to server box
      P.push({t:'line',x1:busX,y1:bmidY,x2:svX0,y2:bmidY,layer:L.NET});
      P.push({t:'dot',x:busX,y:bmidY,layer:L.NET});
      // server box
      const isPMS=/PMS|WORK/i.test(s);
      P.push({t:'rect',x1:svX0,y1:by-svH,x2:svX0+svW,y2:by,layer:isPMS?L.WIRE:L.NET,dash:isPMS?1:0});
      P.push({t:'text',x:svX0+svW/2,y:bmidY+1,h:1.3,str:s,layer:L.TXT,anc:'m'});
    });
    // "CẤP BỞI ĐƠN VỊ VẬN HÀNH" for PMS
    if(servers.some(s=>/PMS/i.test(s))){
      P.push({t:'text',x:svX0+svW+4,y:cabYt-20,h:1.1,str:'(CẤP BỞI ĐƠN VỊ VẬN HÀNH)',layer:L.WIRE,anc:'l'});
    }
  }

  /* ── TITLE BLOCK & FRAME ── */
  addSheetFrame(P, S.project.name||'-', 'SƠ ĐỒ TỔNG THỂ HỆ THỐNG RCU (System Topology)');
  return {P,bounds:bounds(P)};
}

/* ---- protection symbols for DB-RCU SLD ---- */
function symProt(P,x1,x2,y,type){
  P.push({t:'dot',x:x1,y:y,layer:L.BUS});
  P.push({t:'line',x1:x1,y1:y,x2:x2-0.5,y2:y+3,layer:L.MCB});     // open switch arm
  P.push({t:'dot',x:x2,y:y,layer:L.BUS});
  if(/RCBO/i.test(type)){                                          // residual square
    P.push({t:'rect',x1:x1-2.4,y1:y-1.2,x2:x1+0.4,y2:y+1.6,layer:L.MCB});
  } else {                                                         // MCB thermal cross
    const m=(x1+x2)/2; P.push({t:'line',x1:m-1,y1:y-2.4,x2:m+1,y2:y-0.6,layer:L.MCB});
    P.push({t:'line',x1:m+1,y1:y-2.4,x2:m-1,y2:y-0.6,layer:L.MCB});
  }
}
function symContactor(P,x1,x2,y){
  P.push({t:'dot',x:x1,y:y,layer:L.BUS});
  P.push({t:'line',x1:x1,y1:y,x2:x2-0.5,y2:y+3,layer:L.CTRL});
  P.push({t:'dot',x:x2,y:y,layer:L.BUS});
  P.push({t:'line',x1:(x1+x2)/2-2,y1:y+3,x2:(x1+x2)/2+2,y2:y+3,layer:L.CTRL}); // coil bar
}

/* find the DB-RCU circuit that powers the RCU 12VDC PSU */
function dbPSCircuit(){
  const cs=(S.db&&S.db.circuits)||[];
  return cs.find(c=>/^ps\b/i.test((c.tag||'').trim()))
      || cs.find(c=>/\bps\b|12\s*vdc|\brcu\b|nguồn/i.test(c.load||''))
      || null;
}

function buildDB(){
  const P=[]; const RSd=22, BUSX=78;
  const db=S.db||{circuits:[]};
  // expand circuits by quantity, auto-number tags when qty>1
  const rows=[];
  (db.circuits||[]).forEach(c=>{
    const q=Math.max(1,parseInt(c.qty)||1);
    for(let k=1;k<=q;k++) rows.push({prot:c.prot,spec:c.spec,tag:(c.tag||'')+(q>1?k:''),load:c.load,cable:c.cable,contactor:c.contactor});
  });
  const topY=0;
  const PX1=BUSX+26, PX2=PX1+16;        // protection symbol
  const TAGX=BUSX+250;                   // terminal + tag
  const LOADX=TAGX+44;
  rows.forEach((r,i)=>{
    const y=topY-i*RSd;
    P.push({t:'line',x1:BUSX,y1:y,x2:PX1,y2:y,layer:L.BUS});
    symProt(P,PX1,PX2,y,r.prot);
    P.push({t:'text',x:(PX1+PX2)/2,y:y+7,h:2.3,str:r.prot,layer:L.TXT,anc:'m'});
    P.push({t:'text',x:(PX1+PX2)/2,y:y+4,h:2.0,str:r.spec,layer:L.TXT,anc:'m'});
    let fromX=PX2;
    if(r.contactor){
      const cx1=PX2+22, cx2=cx1+16;
      P.push({t:'line',x1:PX2,y1:y,x2:cx1,y2:y,layer:L.BUS});
      symContactor(P,cx1,cx2,y);
      P.push({t:'text',x:(cx1+cx2)/2,y:y+7,h:2.0,str:r.contactor,layer:L.TXT,anc:'m'});
      // RCU control box below contactor
      const mid=(cx1+cx2)/2;
      P.push({t:'rect',x1:mid-8,y1:y-11,x2:mid+8,y2:y-5,layer:L.CTRL});
      P.push({t:'text',x:mid,y:y-9.5,h:2.2,str:'RCU',layer:L.TXT,anc:'m'});
      P.push({t:'line',x1:mid,y1:y+3,x2:mid,y2:y-5,layer:L.WIRE,dash:1});
      fromX=cx2;
    }
    P.push({t:'line',x1:fromX,y1:y,x2:TAGX,y2:y,layer:L.BUS});
    // terminal ø + tag
    P.push({t:'dot',x:TAGX,y:y,layer:L.BUS});
    P.push({t:'text',x:TAGX,y:y+2.6,h:2.0,str:r.tag,layer:L.OUT,anc:'m'});
    // cable slash + note
    const slx=TAGX+12;
    P.push({t:'line',x1:slx-1.5,y1:y-2.2,x2:slx+1.5,y2:y+2.2,layer:L.WIRE});
    if(r.cable) P.push({t:'text',x:slx+4,y:y+3,h:1.7,str:r.cable,layer:L.IN,anc:'l'});
    // feeder to load + arrow head
    P.push({t:'line',x1:TAGX,y1:y,x2:LOADX,y2:y,layer:L.BUS});
    P.push({t:'line',x1:LOADX-3.5,y1:y+1.8,x2:LOADX,y2:y,layer:L.BUS});
    P.push({t:'line',x1:LOADX-3.5,y1:y-1.8,x2:LOADX,y2:y,layer:L.BUS});
    P.push({t:'text',x:LOADX+4,y:y-0.9,h:2.5,str:r.load||'',layer:L.IN,anc:'l'});
    // load text guard for bounds
    P.push({t:'line',x1:LOADX+6+(r.load||'').length*1.5,y1:y,x2:LOADX+6+(r.load||'').length*1.5,y2:y,layer:L.TXT});
  });
  // ---- vertical busbar (thick red) ----
  const yTop=topY+8, yMain=topY-rows.length*RSd-6;
  P.push({t:'rect',x1:BUSX-1.1,y1:yMain,x2:BUSX+1.1,y2:yTop,layer:L.BUS});
  // ---- main incoming (bottom) ----
  const my=yMain, mpx1=BUSX-86, mpx2=mpx1+16;
  P.push({t:'line',x1:mpx1-34,y1:my,x2:mpx1,y2:my,layer:L.BUS});
  // source arrow
  P.push({t:'line',x1:mpx1-34,y1:my,x2:mpx1-30,y2:my+1.6,layer:L.BUS});
  P.push({t:'line',x1:mpx1-34,y1:my,x2:mpx1-30,y2:my-1.6,layer:L.BUS});
  P.push({t:'text',x:mpx1-36,y:my-0.9,h:2.5,str:db.source||'FROM DB FLOOR',layer:L.IN,anc:'r'});
  if(db.cableIn) P.push({t:'text',x:mpx1-36,y:my-5,h:1.6,str:db.cableIn,layer:L.IN,anc:'r'});
  P.push({t:'line',x1:mpx1-36-((db.cableIn||'').length*1.05),y1:my,x2:mpx1-36-((db.cableIn||'').length*1.05),y2:my,layer:L.TXT});
  symProt(P,mpx1,mpx2,my,(db.main&&db.main.type)||'MCB 2P');
  P.push({t:'text',x:(mpx1+mpx2)/2,y:my+7,h:2.3,str:(db.main&&db.main.type)||'MCB 2P',layer:L.TXT,anc:'m'});
  P.push({t:'text',x:(mpx1+mpx2)/2,y:my+4,h:2.0,str:(db.main&&db.main.spec)||'',layer:L.TXT,anc:'m'});
  P.push({t:'line',x1:mpx2,y1:my,x2:BUSX,y2:my,layer:L.BUS});
  // ---- DB-RCU enclosure (dashed) + label ----
  const cb=bounds(P);
  const m=8;
  P.push({t:'rect',x1:cb[0]-m,y1:cb[1]-m,x2:cb[2]+m,y2:cb[3]+m,layer:L.TB,dash:1});
  P.push({t:'text',x:cb[0]-m+3,y:cb[3]+m-5,h:3.2,str:'DB-RCU',layer:L.TXT,anc:'l'});
  addSheetFrame(P, S.project.name||'-', 'TỦ NGUỒN DB-RCU (Power distribution SLD)');
  return {P,bounds:bounds(P)};
}

/* ---- sheet border + GEC title block (drawing form) ---- */
function addSheetFrame(P, projName, subtitle){
  const cb=bounds(P);                       // content bounds
  if(cb[0]===0&&cb[2]===100) return;        // empty
  const M=22, [x0,y0,x1,y1]=cb;
  const TBW=190, TBH=54, pad=5;
  const fx0=x0-M, fy1=y1+M, fx1=x1+M, fy0=y0-M-(TBH+12);  // reserve bottom band for title block
  // outer border (double line)
  P.push({t:'rect',x1:fx0,y1:fy0,x2:fx1,y2:fy1,layer:L.TB});
  P.push({t:'rect',x1:fx0+3,y1:fy0+3,x2:fx1-3,y2:fy1-3,layer:L.TB});
  // ---- title block bottom-right (in reserved band) ----
  const bx1=fx1-3-pad, by0=fy0+3+pad, bx0=bx1-TBW, by1=by0+TBH;
  const t=S.tb||{};
  P.push({t:'rect',x1:bx0,y1:by0,x2:bx1,y2:by1,layer:L.TB});
  // brand strip (left)
  const brW=40, brx=bx0+brW;
  P.push({t:'line',x1:brx,y1:by0,x2:brx,y2:by1,layer:L.TB});
  P.push({t:'text',x:bx0+brW/2,y:by0+TBH*0.60,h:5.0,str:'GEC',layer:L.CTRL,anc:'m'});
  P.push({t:'text',x:bx0+brW/2,y:by0+TBH*0.40,h:2.0,str:'SOLUTIONS',layer:L.TXT,anc:'m'});
  P.push({t:'text',x:bx0+brW/2,y:by0+TBH*0.18,h:1.5,str:'ELV · BMS · RCU',layer:L.TXT,anc:'m'});
  // right area rows
  const rx0=brx, rx1=bx1, RW=rx1-rx0;
  const yA=by1-15, yB=by1-27, yC=by1-39;    // row dividers
  [yA,yB,yC].forEach(yy=>P.push({t:'line',x1:rx0,y1:yy,x2:rx1,y2:yy,layer:L.TB}));
  // row1: drawing title (tall)
  P.push({t:'text',x:rx0+4,y:by1-7,h:3.4,str:(t.title||'SƠ ĐỒ NGUYÊN LÝ'),layer:L.TXT,anc:'l'});
  P.push({t:'text',x:rx0+4,y:by1-12,h:1.8,str:(subtitle||'WIRING DIAGRAM (Auto-gen · AutoLISP)'),layer:L.TXT,anc:'l'});
  // row2: project
  P.push({t:'text',x:rx0+4,y:yA-7.5,h:2.3,str:'DỰ ÁN: '+(projName||'-')+(S.project.code?('  ['+S.project.code+']'):''),layer:L.TXT,anc:'l'});
  // row3: drawn / checked / approved (3 cells)
  const c1=rx0+RW*0.42, c2=rx0+RW*0.71;
  P.push({t:'line',x1:c1,y1:yB,x2:c1,y2:yA,layer:L.TB});
  P.push({t:'line',x1:c2,y1:yB,x2:c2,y2:yA,layer:L.TB});
  P.push({t:'text',x:rx0+3,y:yB+5.5,h:1.6,str:'VẼ',layer:L.TXT,anc:'l'});
  P.push({t:'text',x:rx0+3,y:yB+1.5,h:2.0,str:(t.drawn||'—'),layer:L.TXT,anc:'l'});
  P.push({t:'text',x:c1+3,y:yB+5.5,h:1.6,str:'K.TRA',layer:L.TXT,anc:'l'});
  P.push({t:'text',x:c1+3,y:yB+1.5,h:2.0,str:(t.chk||'—'),layer:L.TXT,anc:'l'});
  P.push({t:'text',x:c2+3,y:yB+5.5,h:1.6,str:'DUYỆT',layer:L.TXT,anc:'l'});
  P.push({t:'text',x:c2+3,y:yB+1.5,h:2.0,str:(t.app||'—'),layer:L.TXT,anc:'l'});
  // row4: dwg no / rev / scale / date (4 cells)
  const d1=rx0+RW*0.40, d2=rx0+RW*0.62, d3=rx0+RW*0.80;
  [d1,d2,d3].forEach(xx=>P.push({t:'line',x1:xx,y1:by0,x2:xx,y2:yC,layer:L.TB}));
  P.push({t:'text',x:rx0+3,y:yC-5.5,h:1.6,str:'SỐ BV',layer:L.TXT,anc:'l'});
  P.push({t:'text',x:rx0+3,y:yC-9.5,h:2.0,str:(t.dwgno||'GEC-RCU-001'),layer:L.TXT,anc:'l'});
  P.push({t:'text',x:d1+3,y:yC-5.5,h:1.6,str:'REV',layer:L.TXT,anc:'l'});
  P.push({t:'text',x:d1+3,y:yC-9.5,h:2.2,str:(t.rev||'00'),layer:L.OUT,anc:'l'});
  P.push({t:'text',x:d2+3,y:yC-5.5,h:1.6,str:'T.LỆ',layer:L.TXT,anc:'l'});
  P.push({t:'text',x:d2+3,y:yC-9.5,h:2.0,str:(t.scale||'NTS'),layer:L.TXT,anc:'l'});
  P.push({t:'text',x:d3+3,y:yC-5.5,h:1.6,str:'NGÀY',layer:L.TXT,anc:'l'});
  P.push({t:'text',x:d3+3,y:yC-9.5,h:1.8,str:new Date().toISOString().slice(0,10),layer:L.TXT,anc:'l'});
}

function bounds(P){
  let xn=1e9,yn=1e9,xx=-1e9,yx=-1e9;
  const upd=(x,y)=>{xn=Math.min(xn,x);yn=Math.min(yn,y);xx=Math.max(xx,x);yx=Math.max(yx,y);};
  P.forEach(p=>{
    if(p.t==='line'){upd(p.x1,p.y1);upd(p.x2,p.y2);}
    else if(p.t==='rect'){upd(p.x1,p.y1);upd(p.x2,p.y2);}
    else if(p.t==='text'){upd(p.x-2,p.y);upd(p.x+2,p.y+p.h);}
    else if(p.t==='ins'){upd(p.x-30,p.y-30);upd(p.x+30,p.y+30);}
    else if(p.t==='dot'){upd(p.x,p.y);}
  });
  if(xn===1e9)return[0,0,100,40];
  const pad=14; return [xn-pad,yn-pad,xx+pad,yx+pad];
}

/* ============================================================ SVG RENDER (flip Y) */
function primsToSVG(P,b){
  const [x0,y0,x1,y1]=b, W=x1-x0, H=y1-y0;
  const fy=y=>(y1-y); // flip
  let s=`<g>`;
  P.forEach(p=>{
    if(p.t==='line'){const sw=p.layer===L.NET?0.9:(p.layer===L.PWR?0.8:(p.layer===L.WIRE?0.4:0.6));
      s+=`<line x1="${p.x1.toFixed(2)}" y1="${fy(p.y1).toFixed(2)}" x2="${p.x2.toFixed(2)}" y2="${fy(p.y2).toFixed(2)}" stroke="${col(p.layer)}" stroke-width="${sw}"/>`;}
    else if(p.t==='rect'){const x=Math.min(p.x1,p.x2),y2=Math.max(p.y1,p.y2),w=Math.abs(p.x2-p.x1),h=Math.abs(p.y2-p.y1);
      s+=`<rect x="${x.toFixed(2)}" y="${fy(y2).toFixed(2)}" width="${w.toFixed(2)}" height="${h.toFixed(2)}" fill="${fill(p.layer)}" stroke="${col(p.layer)}" stroke-width="0.6" ${p.dash?'stroke-dasharray="2 1.5"':''} rx="0.6"/>`;}
    else if(p.t==='text'){const anc=p.anc==='m'?'middle':p.anc==='r'?'end':'start';
      s+=`<text x="${p.x.toFixed(2)}" y="${fy(p.y).toFixed(2)}" font-size="${(p.h*1.05).toFixed(2)}" text-anchor="${anc}" fill="${col(p.layer)}" font-family="JetBrains Mono,monospace">${esc(p.str)}</text>`;}
    else if(p.t==='ins'){s+=`<rect x="${(p.x-28).toFixed(2)}" y="${fy(p.y+18).toFixed(2)}" width="56" height="36" fill="#eef6fb" stroke="${col(L.CTRL)}" stroke-dasharray="1.5 1.2" rx="1"/><text x="${p.x.toFixed(2)}" y="${fy(p.y).toFixed(2)}" font-size="3" text-anchor="middle" fill="${col(L.CTRL)}" font-family="JetBrains Mono">⮻ DWG: ${esc(p.blk)}</text>`;}
    else if(p.t==='dot'){s+=`<circle cx="${p.x.toFixed(2)}" cy="${fy(p.y).toFixed(2)}" r="0.9" fill="${col(p.layer)}"/>`;}
  });
  s+=`</g>`;
  return {svg:s,vb:`${x0} ${y0===undefined?0:0} ${W} ${H}`,W,H,x0,y0};
}
function col(l){return {[L.CTRL]:'#0284C7',[L.IN]:'#16a34a',[L.OUT]:'#dc2626','GEC-AO':'#7c3aed','GEC-DIM':'#b45309','GEC-DMX':'#be185d','GEC-SPI':'#0891b2','GEC-SSID':'#0d9488',[L.WIRE]:'#64748b',[L.TXT]:'#15293a',[L.FRAME]:'#7c3aed',[L.NET]:'#0f2a3f',[L.PWR]:'#d97706',[L.MCB]:'#b91c1c',[L.TB]:'#0f2a3f',[L.BUS]:'#dc2626'}[l]||'#333';}
function fill(l){return {[L.CTRL]:'#f0f9ff',[L.IN]:'#f0fdf4',[L.OUT]:'#fef2f2','GEC-AO':'#faf5ff','GEC-DIM':'#fffbeb','GEC-DMX':'#fdf2f8','GEC-SPI':'#ecfeff','GEC-SSID':'#f0fdfa',[L.FRAME]:'#faf5ff',[L.NET]:'#eef3f7',[L.PWR]:'#fff7ed',[L.MCB]:'#fff1f1',[L.TB]:'none',[L.BUS]:'#dc2626'}[l]||'none';}

let zoomW=1, zoomT=1, zoomD=1;
function paintSVG(elId,P,b,zoom){
  const [x0,y0,x1,y1]=b, W=x1-x0, H=y1-y0;
  const r=primsToSVG(P,b);
  const el=$('#'+elId);
  el.setAttribute('viewBox',`${x0} ${0} ${W} ${H}`);
  el.innerHTML=r.svg;
  el.style.transform=`scale(${zoom})`; el.style.transformOrigin='top left';
  // adjust container scroll size
}
function renderWire(){
  const {P,bounds:b}=buildWiring();
  paintSVG('svgWire',P,b,zoomW);
  $('#lispWire').textContent=primsToLisp(P,'SO DO NGUYEN LY CHI TIET (WIRING DIAGRAM)');
}
function renderTopoSVG(){
  const {P,bounds:b}=buildTopology();
  paintSVG('svgTopo',P,b,zoomT);
  $('#lispTopo').textContent=primsToLisp(P,'SO DO TONG THE HE THONG (SYSTEM TOPOLOGY)');
}
function renderDB(){
  const {P,bounds:b}=buildDB();
  paintSVG('svgDB',P,b,zoomD);
  $('#lispDB').textContent=primsToLisp(P,'TU NGUON DB-RCU (POWER DISTRIBUTION)');
  if(typeof renderWire==='function' && !renderDB._busy){ renderDB._busy=1; renderWire(); renderDB._busy=0; } // auto-update PSU AC-IN on wiring
}

/* zoom + view toggles */
$('#zoomWire').onclick=e=>{const z=e.target.dataset.z;if(!z||z==='drag')return;if(z==='+')zoomW=Math.min(zoomW*1.25,6);else if(z==='-')zoomW=Math.max(zoomW/1.25,.2);else if(z==='f')zoomW=1;renderWire();};
$('#zoomTopo').onclick=e=>{const z=e.target.dataset.z;if(!z||z==='drag')return;if(z==='+')zoomT=Math.min(zoomT*1.25,6);else if(z==='-')zoomT=Math.max(zoomT/1.25,.2);else if(z==='f')zoomT=1;renderTopoSVG();};
/* floating zoom: draggable within its preview area */
function makeZoomDraggable(id){
  const z=$('#'+id), handle=z.querySelector('.zhandle'); if(!handle)return;
  const wrap=z.closest('.pvwrap'); let drag=null;
  handle.addEventListener('mousedown',e=>{
    const wr=wrap.getBoundingClientRect(), zr=z.getBoundingClientRect();
    drag={dx:e.clientX-zr.left, dy:e.clientY-zr.top, wr};
    z.style.right='auto'; z.style.bottom='auto';
    e.preventDefault();
  });
  document.addEventListener('mousemove',e=>{
    if(!drag)return; const wr=wrap.getBoundingClientRect(), zr=z.getBoundingClientRect();
    let nx=e.clientX-wr.left-drag.dx, ny=e.clientY-wr.top-drag.dy;
    nx=Math.max(2,Math.min(nx,wr.width-zr.width-2));
    ny=Math.max(2,Math.min(ny,wr.height-zr.height-2));
    z.style.left=nx+'px'; z.style.top=ny+'px';
  });
  document.addEventListener('mouseup',()=>{drag=null;});
}
makeZoomDraggable('zoomWire'); makeZoomDraggable('zoomTopo'); makeZoomDraggable('zoomDB');
$$('.pvbar .seg button[data-pv]').forEach(b=>b.onclick=()=>{$$('[data-pv]').forEach(x=>x.classList.remove('on'));b.classList.add('on');const code=b.dataset.pv==='code';$('#svgWire').classList.toggle('off',code);$('#codeWire').classList.toggle('on',code);});
$$('.pvbar .seg button[data-pvt]').forEach(b=>b.onclick=()=>{$$('[data-pvt]').forEach(x=>x.classList.remove('on'));b.classList.add('on');const code=b.dataset.pvt==='code';$('#svgTopo').classList.toggle('off',code);$('#codeTopo').classList.toggle('on',code);});
$('#zoomDB').onclick=e=>{const z=e.target.dataset.z;if(!z||z==='drag')return;if(z==='+')zoomD=Math.min(zoomD*1.25,6);else if(z==='-')zoomD=Math.max(zoomD/1.25,.2);else if(z==='f')zoomD=1;renderDB();};
$$('.pvbar .seg button[data-pvd]').forEach(b=>b.onclick=()=>{$$('[data-pvd]').forEach(x=>x.classList.remove('on'));b.classList.add('on');const code=b.dataset.pvd==='code';$('#svgDB').classList.toggle('off',code);$('#codeDB').classList.toggle('on',code);});

/* ============================================================ LISP GENERATOR */
function lnum(n){return (Math.round(n*1000)/1000).toString();}
function lstr(s){return '"'+String(s).replace(/\\/g,'\\\\').replace(/"/g,'\\"')+'"';}
function primsToLisp(P,title){
  const head=
`;;; ============================================================
;;; GEC SOLUTIONS · AUTO-GENERATED AutoLISP
;;; ${title}
;;; Du an : ${S.project.name||'-'}  |  Ma: ${S.project.code||'-'}
;;; Ngay  : ${new Date().toISOString().slice(0,10)}
;;; Don vi: mm  |  Goc dat: (0,0)
;;; HD: mo AutoCAD -> APPLOAD file .lsp -> go lenh:  GECDRAW
;;; ============================================================
(defun _ent (lst) (entmake lst))
(defun _ml (n c)  (if (not (tblsearch "LAYER" n))
  (_ent (list '(0 . "LAYER") '(100 . "AcDbSymbolTableRecord") '(100 . "AcDbLayerTableRecord") (cons 2 n) (cons 70 0) (cons 62 c) '(6 . "Continuous")))))
(defun _mstyle ()
  (if (not (tblsearch "STYLE" "GEC"))
    (_ent (list '(0 . "STYLE") '(100 . "AcDbSymbolTableRecord") '(100 . "AcDbTextStyleTableRecord")
      (cons 2 "GEC") (cons 70 0) (cons 40 0.0) (cons 41 1.0) (cons 50 0.0) (cons 71 0) (cons 42 2.5)
      (cons 3 "arial.ttf") (cons 4 "")))))
(defun _L (x1 y1 x2 y2 lay)
  (_ent (list '(0 . "LINE") (cons 8 lay) (list 10 x1 y1 0.0) (list 11 x2 y2 0.0))))
(defun _R (x1 y1 x2 y2 lay)
  (_ent (list '(0 . "LWPOLYLINE") '(100 . "AcDbEntity") (cons 8 lay) '(100 . "AcDbPolyline")
    '(90 . 4) '(70 . 1) (list 10 x1 y1) (list 10 x2 y1) (list 10 x2 y2) (list 10 x1 y2))))
(defun _D (x y lay)
  (_ent (list '(0 . "CIRCLE") (cons 8 lay) (list 10 x y 0.0) (cons 40 0.9))))
(defun _T (x y h s lay anc / e)
  (setq e (list '(0 . "TEXT") (cons 8 lay) (cons 7 "GEC") (cons 10 (list x y 0.0)) (cons 40 h) (cons 1 s)))
  (cond ((= anc "m") (setq e (append e (list (cons 72 1) (cons 73 0) (cons 11 (list x y 0.0))))))
        ((= anc "r") (setq e (append e (list (cons 72 2) (cons 73 0) (cons 11 (list x y 0.0)))))))
  (_ent e))
(defun _INS (path blk x y scl rot lay / e)
  (if (findfile path)
    (progn (command "_.-INSERT" path (list x y 0.0) scl scl rot)
           (if (entlast) (command "_.CHPROP" (entlast) "" "_LA" lay "")))
    (progn (princ (strcat "\\n[GEC] Khong tim thay block: " path " -> ve khung tham chieu."))
           (_R (- x 28)(- y 18)(+ x 28)(+ y 18) lay)
           (_T x y 3.0 (strcat "DWG? " blk) lay "m"))))
(defun _layers ()
  (_ml "GEC-CTRL" 5)(_ml "GEC-IN" 3)(_ml "GEC-OUT" 1)(_ml "GEC-AO" 6)
  (_ml "GEC-DIM" 40)(_ml "GEC-DMX" 240)(_ml "GEC-SPI" 130)(_ml "GEC-SSID" 90)
  (_ml "GEC-WIRE" 8)(_ml "GEC-TXT" 7)(_ml "GEC-FRAME" 214)(_ml "GEC-NET" 4)(_ml "GEC-PWR" 30)
  (_ml "GEC-MCB" 1)(_ml "GEC-TITLE" 7)(_ml "GEC-BUS" 1)
  (_mstyle))
;;; ------------------------------------------------------------
(defun c:GECDRAW ( / )
  (_layers)
  (setvar "CMDECHO" 0)`;
  let definitions='';
  const blocks=new Map(P.filter(p=>p.t==='cadblock').map(p=>[p.name,p.geom]));
  for(const [name,geom] of blocks){
    definitions+=`\n(if (not (tblsearch "BLOCK" ${lstr(name)})) (progn (_ent (list '(0 . "BLOCK") (cons 2 ${lstr(name)}) '(70 . 0) '(10 0.0 0.0 0.0)))`;
    for(const e of geom.g){
      if(e[0]==='L')definitions+=`\n(_L ${e[1]} ${e[2]} ${e[3]} ${e[4]} "0")`;
      else if(e[0]==='P')for(let i=1;i<e.length-2;i+=2)definitions+=`\n(_L ${e[i]} ${e[i+1]} ${e[i+2]} ${e[i+3]} "0")`;
    }
    definitions+='\n(_ent (list \'(0 . "ENDBLK")))))';
  }
  let body='';
  P.forEach(p=>{
    if(p.t==='cadblock') body+=`\n  (_ent (list '(0 . "INSERT") (cons 2 ${lstr(p.name)}) '(8 . "GEC-CTRL") (list 10 ${lnum(p.x)} ${lnum(p.y)} 0.0) (cons 41 ${lnum(p.scale)}) (cons 42 ${lnum(p.scale)}) '(43 . 1.0)))`;

    if(p.t==='line') body+=`\n  (_L ${lnum(p.x1)} ${lnum(p.y1)} ${lnum(p.x2)} ${lnum(p.y2)} ${lstr(p.layer)})`;
    else if(p.t==='rect') body+=`\n  (_R ${lnum(Math.min(p.x1,p.x2))} ${lnum(Math.min(p.y1,p.y2))} ${lnum(Math.max(p.x1,p.x2))} ${lnum(Math.max(p.y1,p.y2))} ${lstr(p.layer)})`;
    else if(p.t==='text') body+=`\n  (_T ${lnum(p.x)} ${lnum(p.y)} ${lnum(p.h)} ${lstr(p.str)} ${lstr(p.layer)} ${lstr(p.anc||'l')})`;
    else if(p.t==='ins') body+=`\n  (_INS ${lstr(p.path)} ${lstr(p.blk)} ${lnum(p.x)} ${lnum(p.y)} ${lnum(p.scale)} ${lnum(p.rot)} ${lstr(p.layer)})`;
    else if(p.t==='dot') body+=`\n  (_D ${lnum(p.x)} ${lnum(p.y)} ${lstr(p.layer)})`;
  });
  const tail=`
  (setvar "CMDECHO" 1)
  (command "_.ZOOM" "_E")
  (princ "\\n[GEC] Da ve xong so do. (c) GEC Solutions")
  (princ))
(princ "\\n>> Da nap. Go lenh GECDRAW de ve so do.")
(princ)`;
  return head+definitions+body+tail;
}

/* ============================================================ EXPORT LISP */
/* ---- PDF A3 portrait export (raster vẽ từ SVG) ---- */
async function exportPDF(which){
  if(!(window.jspdf&&window.jspdf.jsPDF)){toast('Thư viện PDF chưa tải xong — thử lại sau vài giây');return;}
  toast('Đang tạo PDF A3…');
  const {P,bounds:b}= which==='topo'?buildTopology():which==='db'?buildDB():buildWiring();
  const [x0,y0,x1,y1]=b, W=x1-x0, H=y1-y0;
  if(W<=0||H<=0){toast('Chưa có nội dung để xuất');return;}
  const r=primsToSVG(P,b);
  const SC=4;
  const svgStr=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x0} 0 ${W} ${H}" width="${(W*SC).toFixed(0)}" height="${(H*SC).toFixed(0)}"><rect x="${x0}" y="0" width="${W}" height="${H}" fill="#ffffff"/>${r.svg}</svg>`;
  const url='data:image/svg+xml;charset=utf-8,'+encodeURIComponent(svgStr);
  const img=new Image();
  try{ await new Promise((res,rej)=>{img.onload=res;img.onerror=()=>rej(new Error('svg load'));img.src=url;}); }
  catch(e){ toast('Lỗi dựng ảnh sơ đồ'); return; }
  const cv=document.createElement('canvas'); cv.width=Math.round(W*SC); cv.height=Math.round(H*SC);
  const ctx=cv.getContext('2d'); ctx.fillStyle='#fff'; ctx.fillRect(0,0,cv.width,cv.height); ctx.drawImage(img,0,0,cv.width,cv.height);
  let png; try{ png=cv.toDataURL('image/png'); }catch(e){ toast('Trình duyệt chặn xuất ảnh'); return; }
  const { jsPDF }=window.jspdf;
  const pdf=new jsPDF({unit:'mm',format:'a3',orientation:'portrait'});
  const pw=297, ph=420, mg=8, availW=pw-2*mg, availH=ph-2*mg, ar=W/H;
  let dw=availW, dh=dw/ar; if(dh>availH){ dh=availH; dw=dh*ar; }
  const ox=(pw-dw)/2, oy=(ph-dh)/2;
  pdf.addImage(png,'PNG',ox,oy,dw,dh,undefined,'FAST');
  const fn=(S.project.code||S.project.name||'GEC').replace(/[^\w-]+/g,'_')+'_'+(which==='topo'?'Topology':which==='db'?'DB-RCU':'SoDoNguyenLy')+'_A3_'+new Date().toISOString().slice(0,10)+'.pdf';
  pdf.save(fn); toast('Đã xuất '+fn);
}
$('#pdfWire').onclick=()=>exportPDF('wire');
$('#pdfTopo').onclick=()=>exportPDF('topo');
$('#pdfDB').onclick=()=>exportPDF('db');
$('#dlDB').onclick=()=>{const {P}=buildDB();download('diagram_db.lsp',primsToLisp(P,'TU NGUON DB-RCU (POWER DISTRIBUTION)'));toast('Đã xuất diagram_db.lsp');};
$('#dlDetail').onclick=()=>{const {P}=buildWiring();download('diagram_detail.lsp',primsToLisp(P,'SO DO NGUYEN LY CHI TIET (WIRING DIAGRAM)'));toast('Đã xuất diagram_detail.lsp');};
$('#dlTopo').onclick=()=>{const {P}=buildTopology();download('diagram_topology.lsp',primsToLisp(P,'SO DO TONG THE HE THONG (SYSTEM TOPOLOGY)'));toast('Đã xuất diagram_topology.lsp');};
$('#btnLisp').onclick=e=>{e.stopPropagation();const m=$('#lispMenu');m.style.display=m.style.display==='none'?'block':'none';};
document.addEventListener('click',()=>{$('#lispMenu').style.display='none';});
$('#lispMenu').onclick=e=>{e.stopPropagation();};
function lispFileName(type){
  const code=(S.project.code||'NOCODE').replace(/\s+/g,'_').toUpperCase();
  const d=new Date(),dd=String(d.getDate()).padStart(2,'0'),mm=String(d.getMonth()+1).padStart(2,'0'),yy=d.getFullYear();
  return 'GEC-'+code+'-'+type+'-'+dd+mm+yy+'-Ver 1.lsp';
}
function exportOneLisp(type){
  if(type==='wire'){const{P}=buildWiring();const fn=lispFileName('SDNL');download(fn,primsToLisp(P,'SO DO NGUYEN LY CHI TIET (WIRING DIAGRAM)'));return fn;}
  else if(type==='topo'){const{P}=buildTopology();const fn=lispFileName('SDTT');download(fn,primsToLisp(P,'SO DO TONG THE HE THONG (SYSTEM TOPOLOGY)'));return fn;}
  else if(type==='db'){const{P}=buildDB();const fn=lispFileName('DB');download(fn,primsToLisp(P,'TU NGUON DB-RCU (POWER DISTRIBUTION)'));return fn;}
  else if(type==='panel'){const fn=lispFileName('RCU_LAYOUT');if(typeof exportLisp==='function'){exportLisp(fn);}else{toast('Chưa có dữ liệu panel');return null;}return fn;}
  return null;
}
document.querySelectorAll('[data-lm]').forEach(b=>b.onclick=()=>{
  const w=b.dataset.lm;$('#lispMenu').style.display='none';
  if(w==='all'){
    let ok=0;['wire','topo','db','panel'].forEach((t,i)=>{setTimeout(()=>{const fn=exportOneLisp(t);if(fn){ok++;toast((i+1)+'/4: '+fn);}},i*400);});
  } else {
    const fn=exportOneLisp(w);if(fn)toast('Đã xuất: '+fn);
  }
});

/* ============================================================ TOPOLOGY UI */
function syncFloors(){
  const n=S.project.floors;
  while(S.topo.floors.length<n) S.topo.floors.push({name:'TẦNG '+(S.topo.floors.length+1),rcu:'1x2, 2x1',rack:{on:false,items:'ODF 4 PORT; 1xPATCH PANEL 24 PORT; 1xSWITCH 24 PORT POE +2 PORT SFP+; PDU',code:'D-ELV-T-01'}});
  while(S.topo.floors.length>n) S.topo.floors.pop();
}
$('#addFloor').onclick=()=>{S.topo.floors.push({name:'TẦNG '+(S.topo.floors.length+1),rcu:'1x2',rack:{on:false,items:'ODF 4 PORT; 1xPATCH PANEL 24 PORT; 1xSWITCH 24 PORT POE +2 PORT SFP+; PDU',code:'D-ELV-T-01'}});S.project.floors=S.topo.floors.length;$('#pFloors').value=S.project.floors;renderTopo();};

function renderTopo(){
  const sv=S.topo.server;
  const sb=(id,key)=>{const el=$('#'+id);if(el){el.value=sv[key]||'';el.oninput=e=>{sv[key]=e.target.value;renderTopoSVG();};}};
  sb('svTitle','title'); sb('svServers','servers'); sb('svRackItems','rackItems');
  sb('svRackCode','rackCode'); sb('svFiber','fiber'); sb('svPower','power'); sb('svUplink','uplink'); sb('svBlock','serverBlock');
  // server floor placement
  const ff=$('#svFloor');
  if(ff){ ff.innerHTML='<option value="bottom">Dưới cùng (hầm/kỹ thuật)</option>'+S.topo.floors.map((f,i)=>`<option value="${i}" ${String(sv.floor)===String(i)?'selected':''}>${esc(f.name||('TẦNG '+(i+1)))}</option>`).join('');
    if(String(sv.floor)==='bottom')ff.value='bottom';
    ff.onchange=e=>{sv.floor=e.target.value;renderTopoSVG();}; }
  // floor cards
  const host=$('#floorList'); host.innerHTML='';
  S.topo.floors.forEach((f,i)=>{
    if(!f.rack) f.rack={on:false,items:'ODF 4 PORT; 1xPATCH PANEL 24 PORT; 1xSWITCH 24 PORT POE +2 PORT SFP+; PDU',code:'D-ELV-T-01'};
    const rooms=parseRCU(f.rcu).reduce((a,b)=>a+b.qty,0);
    const el=document.createElement('div');el.className='floorcard';
    el.innerHTML=`
      <div class="fh"><span class="fn">${esc(f.name||('TẦNG '+(i+1)))} · ${rooms} phòng</span>
        <button class="iconbtn" data-rmf="${i}" style="margin-left:auto" title="Xóa tầng">✕</button></div>
      <div class="fb">
        <div class="row"><div class="fld"><label class="fl">Tên / ký hiệu tầng</label><input class="inp sm" data-fname="${i}" value="${esc(f.name)}"></div></div>
        <div class="row"><div class="fld"><label class="fl">RCU theo TYPE × số phòng (vd 1x2, 2x1, 3x1)</label><input class="inp sm" data-frcu="${i}" value="${esc(f.rcu||'')}" placeholder="1x2, 2x1, 3x1"></div></div>
        <div class="row"><div class="fld"><label class="miniswitch"><input type="checkbox" data-frk="${i}" ${f.rack.on?'checked':''}> Tủ rack tầng (D-ELV)</label></div></div>
        <div class="row" style="display:${f.rack.on?'flex':'none'}" data-frkwrap="${i}">
          <div class="fld"><label class="fl">Thiết bị rack (cách nhau ;)</label><input class="inp sm" data-frki="${i}" value="${esc(f.rack.items)}"></div>
          <div class="fld" style="max-width:118px"><label class="fl">Mã rack</label><input class="inp sm" data-frkc="${i}" value="${esc(f.rack.code)}"></div>
        </div>
      </div>`;
    host.appendChild(el);
    const q=s=>el.querySelector(s);
    q(`[data-fname="${i}"]`).oninput=e=>{f.name=e.target.value;el.querySelector('.fn').textContent=`${f.name} · ${rooms} phòng`;renderTopoSVG();};
    q(`[data-frcu="${i}"]`).oninput=e=>{f.rcu=e.target.value;const rm=parseRCU(f.rcu).reduce((a,b)=>a+b.qty,0);el.querySelector('.fn').textContent=`${f.name||('TẦNG '+(i+1))} · ${rm} phòng`;renderTopoSVG();};
    q(`[data-frk="${i}"]`).onchange=e=>{f.rack.on=e.target.checked;q(`[data-frkwrap="${i}"]`).style.display=f.rack.on?'flex':'none';renderTopoSVG();};
    q(`[data-frki="${i}"]`).oninput=e=>{f.rack.items=e.target.value;renderTopoSVG();};
    q(`[data-frkc="${i}"]`).oninput=e=>{f.rack.code=e.target.value;renderTopoSVG();};
    q(`[data-rmf="${i}"]`).onclick=()=>{S.topo.floors.splice(i,1);S.project.floors=Math.max(1,S.topo.floors.length);$('#pFloors').value=S.project.floors;renderTopo();};
  });
  renderTopoSVG();
}

/* ============================================================ EXCEL/CSV TEMPLATE + IMPORT (đơn giản hóa V4)
   NGUYÊN TẮC:
   • Mỗi sơ đồ chỉ có 1 controller → KHÔNG cần ID controller.
   • Mỗi extension quy ước: <model> #<n>  (vd DDRC810DT-GL #1, DDRC810DT-GL #2).
   • Mỗi I/O là 1 dòng: Thiết bị | Cổng | Tên/Chức năng | (Fuse A).
     - Controller: để Thiết bị = tên model (DDRC-GRMS-E...). Chỉ 1 controller / file.
     - Cổng input  : DI1, DI2...  hoặc  P4.1 (port.key cho loại RJ45).
     - Cổng output : DO1, DO2... (relay)  ·  AO1 (0-10V)  ·  DM1 (dimmer)  ·  DMX1 (RGBW).
   • 1 sheet "Mapping" duy nhất + sheet "Topology" (tùy chọn).
============================================================ */
function tplRows(){
  return [
    ["Thiết bị","Cổng","Tên / Chức năng","Fuse(A)"],
    ["DDRC-GRMS-E","DI1","Đèn chính",""],
    ["DDRC-GRMS-E","DI2","Đèn phụ",""],
    ["DDRC-GRMS-E","DO1","Đèn entry","10"],
    ["DDRC-GRMS-E","DO2","Đèn living","10"],
    ["DDRC810DT-GL #1","DO1","Đèn hành lang","10"],
    ["DDRC810DT-GL #1","DO2","Đèn tủ áo","10"],
    ["DDBC1200 #1","AO1","LED driver 0-10V",""],
    ["DDMC802 + 4x DGLM202 #1","DM1","Đèn ngủ dimmer",""],
    ["DMX-4CH-24V #1","DMX1","Dải LED RGBW",""]
  ];
}
$('#btnTpl').onclick=()=>{
  const wb=XLSX.utils.book_new();
  const topo=[["Floor","RCU theo TYPE × số phòng","Tủ rack tầng (Y/N)","Server (Y/N)","ServerType"],
              ["TẦNG 1","1x2, 2x1","Y","N",""],
              ["TẦNG 3","2x2","N","Y","GRMS;BMS;PMS;Door Lock"]];
  XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(tplRows()),'Mapping');
  XLSX.utils.book_append_sheet(wb,XLSX.utils.aoa_to_sheet(topo),'Topology');
  XLSX.writeFile(wb,'GEC_SDNL_Template_V4.xlsx');
  toast('Đã xuất template Excel đơn giản (1 sheet Mapping + Topology)');
};
$('#btnImport').onclick=()=>$('#fileImp').click();
$('#fileImp').onchange=e=>{
  const f=e.target.files[0]; if(!f)return;
  const rd=new FileReader();
  const isCSV=/\.csv$/i.test(f.name);
  rd.onload=ev=>{
    try{
      let wb;
      if(isCSV){ wb=XLSX.read(ev.target.result,{type:'string'}); /* CSV → 1 sheet = Mapping */
                 wb.SheetNames=['Mapping']; wb.Sheets={'Mapping':wb.Sheets[wb.SheetNames[0]]||Object.values(wb.Sheets)[0]}; }
      else     { wb=XLSX.read(ev.target.result,{type:'binary'}); }
      importWB(wb); toast('Đã import dữ liệu từ '+f.name);
    }catch(err){ toast('Lỗi đọc file: '+err.message); }
    e.target.value='';
  };
  if(isCSV) rd.readAsText(f); else rd.readAsBinaryString(f);
};
function sheetAOA(wb,name){const ws=wb.Sheets[name];return ws?XLSX.utils.sheet_to_json(ws,{header:1,defval:''}):null;}
/* model match: chuẩn hóa, tách " #n" → trả {model, idx} */
function parseDevCell(s){
  s=String(s||'').trim(); if(!s) return null;
  let idx=1; const m=s.match(/#\s*(\d+)\s*$/); if(m){idx=+m[1]; s=s.replace(/#\s*\d+\s*$/,'').trim();}
  // exact controller?
  if(DB.ctrl[s]) return {model:s, kind:'ctrl', idx};
  if(DB.mod[s])  return {model:s, kind:'mod',  idx};
  // fuzzy: bỏ khoảng trắng + uppercase
  const norm=x=>x.toUpperCase().replace(/[\s_]+/g,'').replace(/[‐-–—]/g,'-');
  const ns=norm(s);
  for(const k in DB.ctrl){ if(norm(k)===ns) return {model:k, kind:'ctrl', idx}; }
  for(const k in DB.mod){ if(norm(k)===ns) return {model:k, kind:'mod', idx}; }
  return {model:s, kind:'?', idx};
}
/* gán 1 cổng vào thiết bị */
function assignPort(dev, port, name, fuse){
  port=String(port||'').trim().toUpperCase().replace(/\s+/g,''); name=name||'';
  if(!port) return;
  const isCtrlRJ = dev.kind==='ctrl' && ctrlSpec(dev).type==='rj45';
  // RJ45 port.key  (P4.1 / 4.1 / PORT4.1)
  let pm=port.match(/^P?(?:ORT)?(\d+)[.\-:](\d+)$/);
  if(pm && isCtrlRJ){ const p=+pm[1], k=+pm[2]; if(dev.ports[p]){ if(p>3 && (dev.ports[p].sw===''||!dev.ports[p].sw||dev.ports[p].sw==='LOCK'&&p>3)) {} if(p>3 && dev.ports[p].sw!=='LOCK'){ if(!dev.ports[p].sw) dev.ports[p].sw='SW3'; } dev.ports[p].keys[k-1]=name; } return; }
  // analog / dimmer / dmx / relay / di
  let t=port.match(/^([A-Z]+)(\d+)$/); if(!t){ return; }
  const pre=t[1], num=+t[2];
  if(pre==='DA'||pre==='DALI') (dev.dalies=dev.dalies||{})[num]=name;
  else if(pre==='AO'||pre==='A') dev.aos[num]=name;
  else if(pre==='DM'||pre==='DIM') (dev.dims=dev.dims||{})[num]=name;
  else if(pre==='DMX') (dev.dmxs=dev.dmxs||{})[num]=name;
  else if(pre==='DI'||pre==='IN'){ dev.ins[num]=name; }
  else { /* DO / R / Y / NO → relay */ dev.outs[num]=name; if(fuse!==''&&fuse!=null) dev.mcb[num]=String(fuse); }
}
function importWB(wb){
  // ---- Topology (đơn giản: Floor | RCU | rack Y/N | server Y/N | type) ----
  const topo=sheetAOA(wb,'Topology');
  if(topo&&topo.length>1){
    const floors=[];
    topo.slice(1).forEach(r=>{ if(String(r[0]).trim()==='') return;
      const rackOn=/^y/i.test(String(r[2]||''));
      floors.push({ name:String(r[0]).trim(), rcu:String(r[1]||'1x1').trim(),
        rack:{on:rackOn,items:'ODF 4 PORT; 1xPATCH PANEL 24 PORT; 1xSWITCH 24 PORT POE +2 PORT SFP+; PDU',code:'D-ELV-T-01'} });
    });
    if(floors.length){ S.topo.floors=floors; S.project.floors=floors.length; $('#pFloors').value=floors.length; }
  }
  // ---- Mapping (1 sheet phẳng) ----
  const map=sheetAOA(wb,'Mapping') || sheetAOA(wb,'mapping') || sheetAOA(wb, (wb.SheetNames||[])[0]);
  if(map&&map.length>1){
    const ctrls=[]; const modsByKey={}; // key = model + '#' + idx
    map.slice(1).forEach(r=>{
      const pd=parseDevCell(r[0]); if(!pd) return; if(pd.kind==='?') throw new Error('Model không có trong catalog Dynalite: '+pd.model);
      const port=r[1], name=r[2], fuse=r[3];
      if(pd.kind==='ctrl'){
        // chỉ 1 controller → dùng controller đầu tiên gặp; trùng model thì gom chung
        let c=ctrls.find(x=>x.model===pd.model && x._importIdx===pd.idx);
        if(!c){ if(ctrls.length){ /* đã có 1 controller khác → vẫn cho thêm nhưng cảnh báo nhẹ */ }
          c=newCtrl(pd.model); c.label=pd.model+' #'+pd.idx; c._importIdx=pd.idx; ctrls.push(c); }
        assignPort(c, port, name, fuse);
      } else {
        const key=pd.model+'#'+pd.idx;
        let m=modsByKey[key];
        if(!m){ m=newMod(DB.mod[pd.model]?pd.model:'DDRC810DT-GL'); m.label=pd.model+' #'+pd.idx; modsByKey[key]=m; }
        assignPort(m, port, name, fuse);
      }
    });
    if(ctrls.length){ S.ctrls=ctrls; }
    const mods=Object.values(modsByKey);
    if(mods.length){ S.mods=mods; }
    S.sel = S.ctrls.length? 'c0' : (S.mods.length?'m0':null);
  }
  syncFloors(); renderAll();
}

/* ============================================================ COLUMN RESIZE */
(function(){
  let drag=null;
  function startVar(g){return g.dataset.g;}
  $$('.gutter').forEach(g=>{
    g.addEventListener('mousedown',e=>{
      const v=g.dataset.g;
      const sec=g.closest('.view');
      drag={v,sec,rect:sec.getBoundingClientRect()};
      g.classList.add('drag'); document.body.classList.add('col-resizing');
      e.preventDefault();
    });
  });
  document.addEventListener('mousemove',e=>{
    if(!drag)return;
    const {v,sec,rect}=drag;
    if(v==='w1'){ const w=Math.max(220,Math.min(e.clientX-rect.left,rect.width-260-(parseInt(getComputedStyle(sec).getPropertyValue('--w3'))||600))); sec.style.setProperty('--w1',w+'px'); }
    else if(v==='w3'){ const w=Math.max(300,Math.min(rect.right-e.clientX,rect.width-260-(parseInt(getComputedStyle(sec).getPropertyValue('--w1'))||320))); sec.style.setProperty('--w3',w+'px'); }
    else if(v==='tw1'){ const w=Math.max(260,Math.min(e.clientX-rect.left,rect.width-300)); sec.style.setProperty('--tw1',w+'px'); }
    else if(v==='dw1'){ const w=Math.max(220,Math.min(e.clientX-rect.left,rect.width-260-(parseInt(getComputedStyle(sec).getPropertyValue('--dw3'))||600))); sec.style.setProperty('--dw1',w+'px'); }
    else if(v==='dw3'){ const w=Math.max(300,Math.min(rect.right-e.clientX,rect.width-260-(parseInt(getComputedStyle(sec).getPropertyValue('--dw1'))||320))); sec.style.setProperty('--dw3',w+'px'); }
  });
  document.addEventListener('mouseup',()=>{
    if(!drag)return;
    $$('.gutter').forEach(g=>g.classList.remove('drag'));
    document.body.classList.remove('col-resizing'); drag=null;
    renderWire(); renderTopoSVG&&renderTopoSVG();
  });
})();

/* ============================================================ HELP MODAL */
$('#helpBody').innerHTML=`<h3>SDNL Dynalite GEC</h3><p>Thêm controller/module → nhập DI, relay, AO, DALI và DMX → xem sơ đồ → xuất AutoLISP hoặc PDF A3. Trong AutoCAD, APPLOAD rồi gõ GECDRAW.</p><h3>Catalog Signify Dynalite</h3><p>Thiết bị phân tán dùng DyNet RS-485: D+, D−, GND, SHLD. Nguồn AC L/N/PE độc lập với nguồn bus. Không dùng CAN BUS. Bản vẽ là sơ đồ chức năng; số terminal thực, bảo vệ và đấu dây theo installation instructions của đúng revision thiết bị.</p><p>DDBC120-DALI: 1 line, DDBC320-DALI: 3 line, tối đa 64 địa chỉ driver/line. Nhập số driver tại từng line để kiểm tra. Relay đi kèm chỉ cắt nguồn standby của line, không cộng vào relay tải độc lập. DDBC1200: 12 ngõ ra 0–10 V hoặc DALI broadcast; không có 12 line DALI địa chỉ.</p><p>DDRC-GRMS-E có 18 DI, 13 switched outputs gồm 7 chiếu sáng, 2 nguồn và 4 kênh rèm. Các kênh rèm có NO/NC và liên động; không dùng như 13 relay chiếu sáng độc lập. DMX là tín hiệu, cần decoder/driver riêng; 64ch trên GRMS-E, 512ch trên DDNG485. DDMC802 trong catalog đã cấu hình 4 × DGLM202; cần đặt mua các module này.</p><p>SPI và Samsung P1/P2 không có quy đổi trực tiếp trong catalog này. Khi cần các chức năng đó phải thiết kế gateway bên thứ ba; không tự đổi thành Dynalite.</p><h3>Bố trí tủ và block</h3><p>Thư viện đã thay toàn bộ module điều khiển cũ bằng Dynalite. Hình block là ký hiệu chức năng GEC tạo theo kích thước datasheet, không phải block CAD chính hãng. Có thể nạp DXF hãng để tham chiếu. Mặt cắt dùng chiều sâu riêng của từng thiết bị. Nút xuất LISP bố trí tủ xuất các mặt nhìn và block module chỉnh sửa được.</p><h3>Excel / dữ liệu</h3><p>Tải template Mapping; dùng đúng model Dynalite, hậu tố #1/#2 cho các thiết bị cùng model. Cổng DI1, DO1, AO1, DM1, DMX1 hoặc DA1. File GNT cũ cần thiết kế lại theo số kênh thực tế, ứng dụng sẽ từ chối model lạ.</p>`;
$('#btnHelp').onclick=()=>$('#helpModal').classList.add('show');
$('#helpClose').onclick=()=>$('#helpModal').classList.remove('show');
$('#helpModal').onclick=e=>{ if(e.target.id==='helpModal') $('#helpModal').classList.remove('show'); };
document.addEventListener('keydown',e=>{ if(e.key==='Escape') $('#helpModal').classList.remove('show'); });

/* ============================================================ INIT */
/* ============================================================ DB-RCU PANEL UI */
const PROT_OPTS=['MCB 1P','MCB 2P','RCBO 1P+N','RCBO 2P','MCB 3P'];
function bindDBIncoming(){
  const set=(id,fn)=>{const el=$('#'+id);if(el)el.oninput=e=>{fn(e.target.value);renderDB();};};
  // populate main MCB type dropdown
  const mt=$('#dbMainType');
  if(mt){ const opts=['MCB 2P','MCB 3P','MCB 4P','RCBO 2P','RCCB 2P','MCCB 3P','MCB 1P'];
    if(!opts.includes(S.db.main.type))opts.unshift(S.db.main.type);
    mt.innerHTML=opts.map(o=>`<option ${o===S.db.main.type?'selected':''}>${o}</option>`).join('');
    mt.onchange=e=>{S.db.main.type=e.target.value;renderDB();};
  }
  set('dbSrc',v=>S.db.source=v);
  set('dbMainSpec',v=>S.db.main.spec=v);
  set('dbCableIn',v=>S.db.cableIn=v);
  $('#dbSrc')&&($('#dbSrc').value=S.db.source);
  $('#dbMainSpec')&&($('#dbMainSpec').value=S.db.main.spec);
  $('#dbCableIn')&&($('#dbCableIn').value=S.db.cableIn);
}
function renderDBPanel(){
  bindDBIncoming();
  const host=$('#cktList'); if(!host)return; host.innerHTML='';
  S.db.circuits.forEach((c,i)=>{
    const el=document.createElement('div'); el.className='floorcard';
    const hasCt=!!c.contactor;
    el.innerHTML=`
      <div class="fh"><span class="fn">${esc(c.tag||'?')} · ${esc(c.prot)} ×${esc(String(c.qty||1))}</span>
        <button class="iconbtn" data-rmc="${i}" style="margin-left:auto" title="Xóa mạch">✕</button></div>
      <div class="fb">
        <div class="row">
          <div class="fld"><label class="fl">Thiết bị bảo vệ</label><select class="inp sm" data-prot="${i}">${PROT_OPTS.map(p=>`<option ${p===c.prot?'selected':''}>${p}</option>`).join('')}</select></div>
          <div class="fld" style="max-width:60px"><label class="fl">SL</label><input class="inp sm" type="number" min="1" data-qty="${i}" value="${esc(String(c.qty||1))}"></div>
          <div class="fld"><label class="fl">Thông số</label><input class="inp sm" data-spec="${i}" value="${esc(c.spec)}" placeholder="20A/6kA"></div>
          <div class="fld" style="max-width:74px"><label class="fl">Nhãn</label><input class="inp sm" data-tag="${i}" value="${esc(c.tag)}" placeholder="P/S/L"></div>
        </div>
        <div class="row">
          <div class="fld"><label class="fl">Tải ngõ ra cấp nguồn</label><input class="inp sm" data-load="${i}" value="${esc(c.load)}" placeholder="FCU+THERMOSTAT / LIGHTING…"></div>
          <div class="fld"><label class="fl">Cáp ngõ ra</label><input class="inp sm mono" data-cable="${i}" value="${esc(c.cable)}" placeholder="2x1Cx1.5mm² Cu/PVC+E"></div>
        </div>
        <div class="row"><div class="fld"><label class="miniswitch"><input type="checkbox" data-ctk="${i}" ${hasCt?'checked':''}> Có Contactor (điều khiển qua RCU)</label>
          <input class="inp sm" data-ct="${i}" value="${esc(c.contactor)}" placeholder="CONTACTOR 2P 16A" style="margin-top:6px;display:${hasCt?'block':'none'}"></div></div>
      </div>`;
    host.appendChild(el);
    const q=s=>el.querySelector(s);
    q(`[data-prot="${i}"]`).onchange=e=>{c.prot=e.target.value;renderDBPanel();renderDB();};
    q(`[data-qty="${i}"]`).oninput=e=>{c.qty=Math.max(1,+e.target.value||1);renderDB();el.querySelector('.fn').textContent=`${c.tag||'?'} · ${c.prot} ×${c.qty}`;};
    q(`[data-spec="${i}"]`).oninput=e=>{c.spec=e.target.value;renderDB();};
    q(`[data-tag="${i}"]`).oninput=e=>{c.tag=e.target.value;renderDB();};
    q(`[data-load="${i}"]`).oninput=e=>{c.load=e.target.value;renderDB();};
    q(`[data-cable="${i}"]`).oninput=e=>{c.cable=e.target.value;renderDB();};
    q(`[data-ctk="${i}"]`).onchange=e=>{c.contactor=e.target.checked?(c.contactor||'CONTACTOR 2P 16A'):'';renderDBPanel();renderDB();};
    q(`[data-ct="${i}"]`).oninput=e=>{c.contactor=e.target.value;renderDB();};
    q(`[data-rmc="${i}"]`).onclick=()=>{S.db.circuits.splice(i,1);renderDBPanel();renderDB();};
  });
  // summary + count
  const counts={}; let total=0;
  S.db.circuits.forEach(c=>{const qn=Math.max(1,parseInt(c.qty)||1);counts[c.prot]=(counts[c.prot]||0)+qn;total+=qn;});
  const cnt=$('#dbCount'); if(cnt)cnt.textContent=total+' mạch ra';
  const sum=$('#dbSummary');
  if(sum)sum.innerHTML=`<b>MCB chính:</b> ${esc(S.db.main.type)} · ${esc(S.db.main.spec)}<br>`
    +Object.entries(counts).map(([k,v])=>`${esc(k)}: <b>${v}</b>`).join(' &nbsp;·&nbsp; ')
    +`<br><b>Tổng nhánh ra:</b> ${total}`;
  renderDB();
}
$('#addCkt')&&($('#addCkt').onclick=()=>{S.db.circuits.push({prot:'MCB 1P',spec:'10A/6kA',tag:'L',load:'',cable:'2x1Cx1.5mm² Cu/PVC+E',contactor:'',qty:1});renderDBPanel();});


/* ============================================================ TAB 6 · OPTIMAL DEVICE SELECTION
   Thuật toán 3 bước (DI/DO/AO/DIM/DMX):
   1) Duyệt mọi Main hợp lệ → ít module nhất, hòa thì ít dư nhất (hoặc ghim base).
   2) Bù DI bằng EXT-24/48IN; bù DO bin-pack {20,12,8,6}RL; bù AO/DIM/DMX bằng EXT tương ứng.
   3) Ra 2 PA: tiết kiệm (né master, 0% dự phòng) · tối ưu (cho phép master, + dự phòng).
============================================================ */
const OPT_AXES=['di','relays','ao','dim','dmx','dali','spi','ssid'];
const OPT_AXLAB={di:'DI input',relays:'DO relay',dali:'DALI line (64 adr)',ao:'AO 0-10V',dim:'Dimmer TRIAC',dmx:'DMX RGBW',spi:'SPI pixel',ssid:'Samsung AC'};
const MASTER_CLS=new Set(['master']);            // class bị né ở PA tiết kiệm
function ctrlCap(model){ const base=DB.ctrl[model]; const d=model==='DDRC-GRMS-E'?{...base,relays:7}:base; return {di:d.di||0,relays:d.relays||0,dali:d.dali||0,ao:d.ao||0,dim:d.dim||0,dmx:d.dmx||0,spi:d.spi||0,ssid:d.ssid||0}; }
function modCap(model){ const d=DB.mod[model]; return {di:d.di||0,relays:d.relays||0,dali:d.dali||0,ao:d.ao||0,dim:d.dim||0,dmx:d.dmx||0,spi:d.spi||0,ssid:d.ssid||0}; }
/* main hợp lệ = controller thực (có eth/bus, không phải custom/aux). */
function validMains(allowMaster){
  return Object.keys(DB.ctrl).filter(m=>{
    const d=DB.ctrl[m];
    if(d.custom) return false;                   // "HRC/RCU khác" bỏ khỏi auto
    if(!allowMaster && MASTER_CLS.has(d.cls)) return false;
    return true;
  });
}
/* bin-pack 1 trục: cover `need` bằng list module (đã sort lớn→nhỏ theo trục ax).
   trả {mods:[{model,qty,cap}], used, count} hoặc null nếu trục này không có module bù. */
function fillAxis(need, ax){
  if(need<=0) return {mods:[],count:0,used:0};
  const list=(FILL[ax]||[]).map(m=>({model:m,cap:modCap(m)[ax]})).filter(o=>o.cap>0).sort((a,b)=>b.cap-a.cap);
  if(!list.length) return null;                  // không bù được trục này
  if(!Number.isFinite(need)||need>10000) return null;
  const max=Math.max(...list.map(x=>x.cap)), limit=Math.ceil(need)+max;
  const dp=Array(limit+1).fill(Infinity), prev=Array(limit+1);dp[0]=0;
  for(let n=1;n<=limit;n++)for(const item of list){if(n>=item.cap&&dp[n-item.cap]+1<dp[n]){dp[n]=dp[n-item.cap]+1;prev[n]=item;}}
  let used=Math.ceil(need);for(let n=used;n<=limit;n++)if(dp[n]<dp[used])used=n;
  const picked={};let remaining=used;
  while(remaining>0){const item=prev[remaining];if(!item)return null;picked[item.model]=(picked[item.model]||0)+1;remaining-=item.cap;}
  const count=dp[used], mods=Object.keys(picked).map(model=>({model,qty:picked[model],cap:modCap(model)[ax]*picked[model]}));
  return {mods,count,used};
}
/* build 1 config cho 1 main model với req (đã áp dự phòng).
   trả null nếu trục nào đó cần >0 mà main+module đều không cover (vd DMX mà main không có gateway và FILL.dmx rỗng → vẫn có DMX-4CH nên ok). */
function buildConfig(mainModel, req, useCombo){
  const mc=ctrlCap(mainModel);
  const ext={};       // model → qty
  let extCount=0, waste=0; const provide={};
  // remaining-after-main per axis
  const rem={};
  for(const ax of OPT_AXES){ rem[ax]=Math.max(0,(req[ax]||0)-(mc[ax]||0)); provide[ax]=mc[ax]||0; }
  // Optional bundled devices (none in the current Dynalite catalog).
  if(useCombo){
    COMBO.forEach(cb=>{
      while(rem.di>0 && rem.relays>0){
        ext[cb.model]=(ext[cb.model]||0)+1; extCount++;
        provide.di+=cb.di; provide.relays+=cb.relays;
        rem.di=Math.max(0,rem.di-cb.di); rem.relays=Math.max(0,rem.relays-cb.relays);
      }
    });
  }
  // ---- per-axis fill cho phần còn lại ----
  for(const ax of OPT_AXES){
    if(rem[ax]<=0) continue;
    const f=fillAxis(rem[ax], ax);
    if(!f) return null;                          // không có module bù trục này
    f.mods.forEach(m=>{ ext[m.model]=(ext[m.model]||0)+m.qty; });
    extCount+=f.count;
    for(const item of f.mods){const cap=modCap(item.model);for(const axis of OPT_AXES){provide[axis]+=(cap[axis]||0)*item.qty;rem[axis]=Math.max(0,(req[axis]||0)-provide[axis]);}}
  }
  for(const ax of OPT_AXES){ waste+=Math.max(0,(provide[ax]||0)-(req[ax]||0)); }
  return {main:mainModel, ext, modules:extCount, waste, provide};
}
/* chọn config tốt nhất trong tập main cho req. tie: ít module → (base ghim) → ít dư. */
function pickBest(req, allowMaster, tie){
  const mains=validMains(allowMaster);
  let best=null;
  mains.forEach(m=>{
    const candidates=[buildConfig(m, req, false), buildConfig(m, req, true)].filter(Boolean);
    if(!candidates.length) return;
    // chọn candidate ít thiết bị hơn (hòa → ít dư hơn)
    candidates.forEach(c=>{ c.totalDev=1+c.modules; });
    candidates.sort((a,b)=> (a.totalDev-b.totalDev) || (a.waste-b.waste));
    const cfg=candidates[0];
    const totalDev=cfg.totalDev;
    if(!best){ best=cfg; return; }
    // so sánh
    if(totalDev!==best.totalDev){ if(totalDev<best.totalDev) best=cfg; return; }
    // hòa số thiết bị
    if(tie==='base'){
      const score=x=>(x.main==='DDRC-GRMS-E'?0:1);
      if(score(cfg)!==score(best)){ if(score(cfg)<score(best)) best=cfg; return; }
    }
    if(cfg.waste!==best.waste){ if(cfg.waste<best.waste) best=cfg; return; }
    // cuối: ưu tiên main nhỏ DI hơn (ít over-spec)
    if(ctrlCap(cfg.main).di < ctrlCap(best.main).di) best=cfg;
  });
  return best;
}
function applySpare(req, pct){
  const r={}; const f=1+(pct||0)/100;
  OPT_AXES.forEach(ax=>{ r[ax]=Math.ceil((req[ax]||0)*f); });
  return r;
}
function getReq(){
  const ids=['reqDI','reqDO','reqAO','reqDIM','reqDMX','reqDALI','reqSPI','reqAC'];
  for(const id of ids){const el=$('#'+id);el.value=Math.max(0,Math.min(10000,Math.ceil(Number(el.value)||0)));}
  return { di:+($('#reqDI').value)||0, relays:+($('#reqDO').value)||0, dali:+($('#reqDALI').value)||0,ao:+($('#reqAO').value)||0,
           dim:+($('#reqDIM').value)||0, dmx:+($('#reqDMX').value)||0,
           spi:+(($('#reqSPI')||{}).value)||0, ssid:+(($('#reqAC')||{}).value)||0 };
}
function fillBarRow(ax, prov, req){
  const need=req[ax]||0, have=prov[ax]||0;
  if(need===0 && have===0) return '';
  const pct = have>0? Math.min(100, Math.round(need/have*100)) : 0;
  const cls = pct>=80?'ok':(pct>=1?'hi':'ok');
  return `<div class="fillrow"><span class="fl-lab">${OPT_AXLAB[ax]}</span>
    <span class="fl-track"><span class="fl-fill ${cls}" style="width:${pct}%"></span></span>
    <span class="fl-num">${need}/${have} · ${pct}%</span></div>`;
}
function planCard(cfg, kind, reqRaw, reqEff){
  if(!cfg) return `<div class="plan ${kind==='save'?'save':'opt'}"><div class="ph">${kind==='save'?'PA TIẾT KIỆM':'PA TỐI ƯU'}</div><div class="opt-empty">Không tìm được cấu hình phù hợp cho yêu cầu này.</div></div>`;
  const title = kind==='save'? 'PA TIẾT KIỆM (né master · 0% dự phòng)' : 'PA TỐI ƯU (cho phép master · +dự phòng)';
  const tag = kind==='save'? 'base rẻ + mở rộng' : 'ít đấu nối, vận hành gọn';
  // BOM rows: main + ext
  let rows=`<tr><td class="mono">${esc(cfg.main)}</td><td>${esc(DB.ctrl[cfg.main].desc)}</td><td><span class="role main">MAIN</span></td><td class="qty">1</td></tr>`;
  Object.keys(cfg.ext).forEach(m=>{
    rows+=`<tr><td class="mono">${esc(m)}</td><td>${esc(DB.mod[m].desc)}</td><td><span class="role ext">EXT</span></td><td class="qty">${cfg.ext[m]}</td></tr>`;
  });
  let bars=''; OPT_AXES.forEach(ax=>{ bars+=fillBarRow(ax,cfg.provide,reqRaw); });
  const sig = cfg.main+'|'+Object.keys(cfg.ext).map(m=>m+'x'+cfg.ext[m]).join(',');
  return `<div class="plan ${kind==='save'?'save':'opt'}">
    <div class="ph">${title}<span class="tagp">${tag}</span></div>
    <div class="pb"><table class="bom"><thead><tr><th>Mã hiệu</th><th>Mô tả</th><th>Vai trò</th><th>SL</th></tr></thead><tbody>${rows}</tbody></table></div>
    <div class="fillbars"><div style="font-size:10.5px;color:var(--muted);font-weight:700;text-transform:uppercase;letter-spacing:.4px;margin-bottom:8px">Tỷ lệ lấp đầy (cần / có)</div>${bars||'<div style="font-size:12px;color:var(--muted)">—</div>'}</div>
    <div class="plan-foot"><span class="mods">${cfg.totalDev} thiết bị</span> · <span>tổng dư ${cfg.waste} kênh</span>
      <button class="btn pri sm applybtn" data-apply="${esc(sig)}">Nạp vào sơ đồ →</button></div>
  </div>`;
}
function renderOpt(){
  const host=$('#optResult'); if(!host) return;
  const reqRaw=getReq();
  const tie=$('#optTie')?$('#optTie').value:'waste';
  const sumNeed=OPT_AXES.reduce((a,ax)=>a+(reqRaw[ax]||0),0);
  if(sumNeed===0){ host.innerHTML='<div class="card"><div class="opt-empty">Nhập số kênh I/O rồi bấm <b>Tính cấu hình</b>.</div></div>'; return; }
  const spSave=+($('#optSpareSave').value)||0, spOpt=+($('#optSpareOpt').value)||0;
  const reqSave=applySpare(reqRaw, spSave);
  const reqOpt =applySpare(reqRaw, spOpt);
  const cfgSave=pickBest(reqSave, false, tie);   // né master
  const cfgOpt =pickBest(reqOpt,  true,  tie);   // cho phép master
  let html='';
  html+=`<div class="opt-note" style="margin-bottom:14px">Yêu cầu: <b>${reqRaw.di}</b> DI · <b>${reqRaw.relays}</b> DO`
       +(reqRaw.ao?` · <b>${reqRaw.ao}</b> AO`:'')+(reqRaw.dim?` · <b>${reqRaw.dim}</b> DIM`:'')+(reqRaw.dmx?` · <b>${reqRaw.dmx}</b> DMX`:'')+(reqRaw.spi?` · <b>${reqRaw.spi}</b> SPI`:'')+(reqRaw.ssid?` · <b>${reqRaw.ssid}</b> AC`:'')
       +`. Tie-break: <b>${tie==='base'?'ghim base DDRC-GRMS-E':'ít dư nhất'}</b>. So giá <code>06_Pricing</code> để chốt.</div>`;
  html+=planCard(cfgSave,'save',reqRaw,reqSave);
  html+=planCard(cfgOpt,'opt',reqRaw,reqOpt);
  // so sánh nhanh
  if(cfgSave&&cfgOpt){
    html+=`<div class="opt-note">⚖️ <b>Giao điểm chi phí:</b> PA tiết kiệm dùng <b>${cfgSave.totalDev}</b> thiết bị (dư ${cfgSave.waste}), PA tối ưu <b>${cfgOpt.totalDev}</b> thiết bị (dư ${cfgOpt.waste}). `
      +(cfgSave.main!==cfgOpt.main? `Main khác nhau: <b>${cfgSave.main}</b> vs <b>${cfgOpt.main}</b> — `:'')
      +`chốt theo đơn giá thực tế.</div>`;
  }
  host.innerHTML=html;
  host.querySelectorAll('[data-apply]').forEach(b=>b.onclick=()=>applyConfigToWire(b.dataset.apply));
}
/* nạp 1 config (sig = "MAIN|EXTxN,EXTxM") vào tab Sơ đồ nguyên lý */
function applyConfigToWire(sig){
  const [main, extStr]=sig.split('|');
  S.ctrls=[]; S.mods=[];
  const c=newCtrl(DB.ctrl[main]?main:'DDRC-GRMS-E'); c._open=true; c.room=$('#pName')&&$('#pName').value? '' : ''; S.ctrls.push(c);
  if(extStr){ extStr.split(',').filter(Boolean).forEach(tok=>{
    const m=tok.match(/^(.+)x(\d+)$/); if(!m) return; const model=m[1], qty=+m[2];
    for(let i=0;i<qty;i++){ const mm=newMod(DB.mod[model]?model:'DDRC810DT-GL'); S.mods.push(mm); }
  }); }
  S.sel='c0';
  autoMap();
  renderAll();
  // chuyển sang tab sơ đồ nguyên lý
  $$('.tab').forEach(x=>x.classList.remove('on'));
  document.querySelector('.tab[data-v="viewWire"]').classList.add('on');
  $$('.view').forEach(v=>v.classList.remove('on'));
  $('#viewWire').classList.add('on');
  toast('Đã nạp cấu hình vào Sơ đồ nguyên lý — kiểm tra & gán tên I/O');
}
/* bind controls */
function bindOpt(){
  const run=()=>renderOpt();
  ['reqDALI','reqDI','reqDO','reqAO','reqDIM','reqDMX','reqSPI','reqAC'].forEach(id=>{const el=$('#'+id);if(el)el.onchange=run;});
  $('#optTie')&&($('#optTie').onchange=run);
  $('#optSpareSave')&&($('#optSpareSave').oninput=run);
  $('#optSpareOpt')&&($('#optSpareOpt').oninput=run);
  $('#optRun')&&($('#optRun').onclick=run);
  document.querySelectorAll('[data-preset]').forEach(b=>b.onclick=()=>{
    const p=b.dataset.preset.split(',').map(Number);$('#reqDALI').value=0;
    $('#reqDI').value=p[0]||0;$('#reqDO').value=p[1]||0;$('#reqAO').value=p[2]||0;$('#reqDIM').value=p[3]||0;$('#reqDMX').value=p[4]||0;
    if($('#reqSPI'))$('#reqSPI').value=p[5]||0; if($('#reqAC'))$('#reqAC').value=p[6]||0;
    renderOpt();
  });
  // lấy yêu cầu từ sơ đồ hiện tại (tổng I/O đang đặt tên)
  $('#optFromWire')&&($('#optFromWire').onclick=()=>{
    let di=0,doo=0,ao=0,dim=0,dmx=0,dali=0,spi=0,ssidc=0;
    allDevs().forEach(d=>{
      di+=deviceInputs(d).length;
      let _spi=0,_ssid=0;
      deviceOutputs(d).forEach(o=>{ if(o.kind==='dali')dali++; else if(o.kind==='rl')doo++; else if(o.kind==='ao')ao++; else if(o.kind==='dim')dim++; else if(o.kind==='dmx')dmx++; else if(o.kind==='spi')_spi++; else if(o.kind==='ssid')_ssid++; });
      spi+=_spi; ssidc+=_ssid;
    });
    $('#reqDALI').value=dali;$('#reqDI').value=di;$('#reqDO').value=doo;$('#reqAO').value=ao;$('#reqDIM').value=dim;$('#reqDMX').value=dmx;
    if($('#reqSPI'))$('#reqSPI').value=spi; if($('#reqAC'))$('#reqAC').value=ssidc;
    renderOpt();
    toast('Đã lấy yêu cầu I/O từ sơ đồ hiện tại');
  });
}

function renderAll(){ renderDevLists(); renderIO(); renderWire(); renderTopo(); renderDBPanel(); }
bindOpt();
function seed(){
  // dự án mẫu nhỏ để mở ra là thấy ngay
  const c=newCtrl('DDRC-GRMS-E'); c._open=true; c.room='Standard Room'; S.ctrls.push(c);
  const m=newMod('DDRC810DT-GL'); m.room='Standard Room'; m._open=true;
  ['Đèn hành lang','Đèn tủ áo','Đèn trang trí','Đèn ban công','Quạt hút WC','Đèn gương','Ổ cắm bình nóng lạnh','Dự phòng'].forEach((n,i)=>m.outs[i+1]=n);
  S.mods.push(m);
  S.sel='c0';
  S.project.floors=4; $('#pFloors').value=4; syncFloors();
  S.topo.floors[0].name='TẦNG 3'; S.topo.floors[0].rcu='1x2, 2x2, 3x2';
  S.topo.floors[1].name='TẦNG 2'; S.topo.floors[1].rcu='1x2, 2x1, 3x1, 4x1';
  S.topo.floors[2].name='TẦNG 1'; S.topo.floors[2].rcu='1x1, 2x1';
  S.topo.floors[2].rack={on:true,items:'ODF 4 PORT; 1xPATCH PANEL 24 PORT; 1xSWITCH 24 PORT POE +2 PORT SFP+; PDU',code:'D-ELV-T1-01'};
  S.topo.floors[3].name='TẦNG TRỆT'; S.topo.floors[3].rcu='1x1';
  S.topo.server.floor='bottom';
  autoMap();
}
seed(); renderAll(); renderOpt();
