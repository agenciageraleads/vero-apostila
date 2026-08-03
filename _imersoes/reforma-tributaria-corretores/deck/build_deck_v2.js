const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
p.author = "Vero — Escola de Empresários";
p.title = "Reforma Tributária para Corretores de Imóveis — v2";

// ---- Paleta Vero (das logos) — TEMA CLARO ----
const NAVY="052B5A", NAVY2="192C4C", GOLD="DEBB5F", GOLD_DK="B08D2E", CREAM="F2E4B6";
const BG="FFFFFF", PANEL="F5F1E6", PANEL2="F2F4F7", BODY="3D4658", MUTE="8A91A0", LINE="E3DECF";
const RED="C0392B", REDBG="FBEDEA", GREEN="2E7D46", GREENBG="EAF3EC";
const TITLE_F="Georgia", BODY_F="Arial";
const W=13.3, H=7.5, MX=0.9;
const LOGOS="/Users/Lucas-Lenovo/Vero - Escola de Empresários/_contexto/logos";
const V_NAVY=LOGOS+"/vero-v-navy.png", V_GOLD=LOGOS+"/vero-v-gold.png";

const mkShadow=()=>({type:"outer",color:"5A5A5A",blur:7,offset:2,angle:135,opacity:0.18});
function bg(s){ s.background={color:BG}; }
function label(s,t,x,y,w){ s.addText(t.toUpperCase(),{x,y,w:w||8,h:0.3,fontFace:BODY_F,fontSize:10.5,color:GOLD_DK,charSpacing:3,bold:true,align:"left",margin:0}); }
function footer(s){
  s.addImage({path:V_NAVY,x:W-1.55,y:6.98,w:0.34,h:0.29});
  s.addText("VERO",{x:W-1.15,y:6.98,w:0.95,h:0.3,fontFace:TITLE_F,fontSize:13,bold:true,color:NAVY,align:"left",valign:"middle",margin:0});
}
function title(s,t,sub){ if(sub) label(s,sub,MX,0.55,9); s.addText(t,{x:MX,y:0.85,w:W-2*MX,h:1.0,fontFace:TITLE_F,fontSize:30,bold:true,color:NAVY,align:"left",margin:0}); }
function card(s,x,y,w,h,fill){ s.addShape(p.shapes.RECTANGLE,{x,y,w,h,fill:{color:fill||PANEL},line:{color:LINE,width:1},shadow:mkShadow()}); }
function goldEdge(s,x,y,h){ s.addShape(p.shapes.RECTANGLE,{x,y,w:0.12,h,fill:{color:GOLD}}); }
function navyTile(s,x,y,sz){ s.addShape(p.shapes.RECTANGLE,{x,y,w:sz,h:sz,fill:{color:NAVY}}); s.addImage({path:V_GOLD,x:x+sz*0.2,y:y+sz*0.22,w:sz*0.6,h:sz*0.6*(357/414)}); }

// ============ S1 — Capa ============
let s=p.addSlide(); bg(s);
navyTile(s, MX, 0.6, 1.25);
s.addText("vero",{x:MX+1.5,y:0.62,w:4,h:0.7,fontFace:TITLE_F,fontSize:34,italic:true,bold:true,color:NAVY,margin:0});
s.addText("ESCOLA DE EMPRESÁRIOS  ·  HUB DE NEGÓCIOS",{x:MX+1.55,y:1.35,w:8,h:0.3,fontFace:BODY_F,fontSize:9,color:GOLD_DK,charSpacing:2.5,bold:true,margin:0});
goldEdge(s, MX, 2.75, 2.3);
s.addText("Reforma Tributária",{x:MX+0.3,y:2.65,w:11,h:1.0,fontFace:TITLE_F,fontSize:44,bold:true,color:NAVY,margin:0});
s.addText([{text:"para ",options:{color:NAVY}},{text:"Corretores de Imóveis",options:{color:GOLD_DK}}],{x:MX+0.3,y:3.65,w:11,h:0.9,fontFace:TITLE_F,fontSize:44,bold:true,margin:0});
s.addText("Como se preparar antes de a regra mudar — não depois.",{x:MX+0.3,y:4.75,w:10,h:0.5,fontFace:BODY_F,fontSize:16,italic:true,color:BODY,margin:0});
s.addText("Status não se compra. Status se comprova.",{x:MX+0.3,y:6.5,w:9,h:0.4,fontFace:BODY_F,fontSize:11,color:MUTE,charSpacing:1,margin:0});

// ============ S1b — Quem conduz ============
s=p.addSlide(); bg(s);
title(s,"Quem conduz hoje","Vero · Lucas · Ernane");
const conduz=[
  ["Vero","ESCOLA · HUB · TREINAMENTOS","Escola de empresários que elimina o improviso e forma quem opera com critério. Status não se compra — se comprova.",false],
  ["Lucas [sobrenome]","[ PAPEL NA VERO ]","[trajetória: anos de mercado e área]\n[especialidade / foco]\n[uma frase de credibilidade]",true],
  ["Ernane [sobrenome]","[ PAPEL NA VERO ]","[trajetória: anos de mercado e área]\n[especialidade / foco]\n[uma frase de credibilidade]",true],
];
let kw=(W-2*MX-1.0)/3, ky=2.5, kh=3.6;
conduz.forEach((c,i)=>{ let x=MX+i*(kw+0.5);
  card(s,x,ky,kw,kh, c[3]?PANEL2:PANEL); goldEdge(s,x,ky,kh);
  s.addText(c[0],{x:x+0.35,y:ky+0.4,w:kw-0.6,h:0.6,fontFace:TITLE_F,fontSize:22,bold:true,color:NAVY,margin:0});
  s.addText(c[1],{x:x+0.35,y:ky+1.05,w:kw-0.6,h:0.35,fontFace:BODY_F,fontSize:10,bold:true,color:GOLD_DK,charSpacing:1.5,margin:0});
  s.addText(c[2],{x:x+0.35,y:ky+1.6,w:kw-0.65,h:1.9,fontFace:BODY_F,fontSize:12.5,color:c[3]?MUTE:BODY,italic:c[3],paraSpaceAfter:4,margin:0});
});
s.addText("Os campos com [ ] serão preenchidos com a trajetória de Lucas e Ernane.",{x:MX,y:6.35,w:W-2*MX,h:0.35,fontFace:BODY_F,fontSize:10,italic:true,color:MUTE,align:"center",margin:0});
footer(s);

// ============ S2 — Cronograma ============
s=p.addSlide(); bg(s);
title(s,"Em que fase está a Reforma","Linha do tempo");
const tl=[["2026","Início da transição","CBS e IBS começam a ser cobrados em teste"],
          ["até 2032","Período de transição","Convivência dos dois sistemas e extinção gradual dos antigos"],
          ["após 2033","Modelo completo","O novo imposto único em pleno funcionamento"]];
let tw=(W-2*MX-1.0)/3;
s.addShape(p.shapes.LINE,{x:MX+0.2,y:2.95,w:W-2*MX-0.4,h:0,line:{color:LINE,width:1.5}});
tl.forEach((c,i)=>{ let x=MX+i*(tw+0.5);
  s.addShape(p.shapes.OVAL,{x:x+0.05,y:2.82,w:0.26,h:0.26,fill:{color:GOLD}});
  s.addText(c[0],{x,y:3.3,w:tw,h:0.7,fontFace:TITLE_F,fontSize:30,bold:true,color:NAVY,margin:0});
  s.addText(c[1],{x,y:4.05,w:tw,h:0.45,fontFace:BODY_F,fontSize:15,bold:true,color:NAVY,margin:0});
  s.addText(c[2],{x,y:4.5,w:tw,h:1.2,fontFace:BODY_F,fontSize:12,color:BODY,margin:0}); });
s.addText("Não é pra amanhã — mas começa agora. Quem se prepara cedo decide com calma; quem espera, decide no susto.",
  {x:MX,y:6.05,w:W-2*MX,h:0.5,fontFace:BODY_F,fontSize:13.5,italic:true,color:BODY,align:"center",margin:0});
footer(s);

// ============ S3 — Novo modelo ============
s=p.addSlide(); bg(s);
title(s,"Vários impostos viram um só","O que entra no lugar");
const modelos=[["CBS","Federal","Junta PIS e COFINS num imposto só."],
               ["IBS","Estados e Municípios","Junta ICMS e ISS — o ISS é o que você paga hoje."],
               ["Imposto Seletivo","Federal","Só sobre produtos específicos (cigarro, bebida...). Não é o seu caso."]];
let cw=(W-2*MX-1.0)/3, cy=2.5, ch=3.4;
modelos.forEach((m,i)=>{ let x=MX+i*(cw+0.5);
  card(s,x,cy,cw,ch); goldEdge(s,x,cy,ch);
  s.addText(m[0],{x:x+0.35,y:cy+0.45,w:cw-0.6,h:0.9,fontFace:TITLE_F,fontSize:m[0].length>4?22:34,bold:true,color:NAVY,margin:0});
  s.addText(m[1].toUpperCase(),{x:x+0.35,y:cy+1.5,w:cw-0.6,h:0.35,fontFace:BODY_F,fontSize:10,color:GOLD_DK,charSpacing:2,bold:true,margin:0});
  s.addText(m[2],{x:x+0.35,y:cy+2.0,w:cw-0.7,h:1.2,fontFace:BODY_F,fontSize:13,color:BODY,margin:0}); });
s.addText("Juntos, CBS + IBS formam o novo imposto sobre consumo. A alíquota de referência estimada é ~26,5%.",
  {x:MX,y:6.05,w:W-2*MX,h:0.5,fontFace:BODY_F,fontSize:13.5,italic:true,color:BODY,align:"center",margin:0});
footer(s);

// ============ S4 — A lógica nova (linguagem simples) ============
s=p.addSlide(); bg(s);
title(s,"Muda a lógica, não só a alíquota","Três mudanças que importam");
const logica=[["Acaba o imposto sobre imposto","O que você compra de quem também paga imposto vira desconto. Esse desconto é o 'crédito'."],
              ["O imposto vai pra onde está o cliente","Não importa mais onde você é registrado — e sim onde o cliente está."],
              ["Serviço quase não tem o que descontar","Você vende o seu trabalho, não mercadoria. Por isso o serviço sente mais."]];
let ry=2.6, rh=1.25;
logica.forEach((r,i)=>{ let y=ry+i*(rh+0.18);
  card(s,MX,y,W-2*MX,rh); goldEdge(s,MX,y,rh);
  s.addText(String(i+1),{x:MX+0.35,y:y+0.18,w:0.9,h:0.9,fontFace:TITLE_F,fontSize:36,bold:true,color:GOLD_DK,align:"center",margin:0});
  s.addText(r[0],{x:MX+1.5,y:y+0.18,w:4.6,h:0.9,fontFace:TITLE_F,fontSize:17,bold:true,color:NAVY,valign:"middle",margin:0});
  s.addText(r[1],{x:MX+6.3,y:y+0.18,w:W-2*MX-6.7,h:0.9,fontFace:BODY_F,fontSize:13,color:BODY,valign:"middle",margin:0}); });
footer(s);

// ============ S5 — Impacto por setor ============
s=p.addSlide(); bg(s);
title(s,"Não atinge todo mundo igual","Impacto por setor");
const setores=[["Indústria","tende a ganhar","Muito insumo para descontar. Paga sobre menos.",GREEN,PANEL],
               ["Comércio","pressão de margem","Tem o que descontar, mas a concorrência aperta o preço.",GOLD_DK,PANEL],
               ["Serviços","maior impacto","Quase nada para descontar. A alíquota sobe.",RED,REDBG]];
let sw=(W-2*MX-1.0)/3, sy=2.5, sh=3.2;
setores.forEach((c,i)=>{ let x=MX+i*(sw+0.5); let isServ=i===2;
  if(isServ){ s.addShape(p.shapes.RECTANGLE,{x,y:sy,w:sw,h:sh,fill:{color:RED},shadow:mkShadow()}); }
  else{ card(s,x,sy,sw,sh,c[4]); }
  s.addShape(p.shapes.RECTANGLE,{x,y:sy,w:sw,h:isServ?0.38:0.12,fill:{color:isServ?RED:c[3]}});
  let ty=sy+(isServ?0.65:0.5);
  s.addText(c[0],{x:x+0.35,y:ty,w:sw-0.6,h:0.6,fontFace:TITLE_F,fontSize:isServ?28:24,bold:true,color:isServ?CREAM:NAVY,margin:0});
  s.addText(c[1].toUpperCase(),{x:x+0.35,y:ty+0.75,w:sw-0.6,h:0.4,fontFace:BODY_F,fontSize:isServ?14:12,bold:true,color:isServ?CREAM:c[3],charSpacing:1.5,margin:0});
  s.addText(c[2],{x:x+0.35,y:ty+1.3,w:sw-0.7,h:1.2,fontFace:BODY_F,fontSize:isServ?14:13,color:isServ?CREAM:BODY,margin:0}); });
s.addText([{text:"Corretagem de imóveis é ",options:{color:NAVY}},{text:"serviço",options:{color:RED,bold:true}},{text:".  O lado mais pressionado da reforma.",options:{color:NAVY}}],
  {x:MX,y:6.05,w:W-2*MX,h:0.5,fontFace:BODY_F,fontSize:16,bold:true,align:"center",margin:0});
footer(s);

// ============ S6 — Produto x Serviço (a mecânica do crédito) ============
s=p.addSlide(); bg(s);
title(s,"Produto x serviço: quem tem o que descontar","A mecânica do crédito");
s.addText("VALIDAR",{x:W-2.6,y:0.6,w:1.7,h:0.3,fontFace:BODY_F,fontSize:9,bold:true,color:GOLD_DK,charSpacing:2,align:"right",margin:0});
s.addText("Mesma receita no mês: R$ 20.000  ·  IVA de referência ~26,5% (CBS + IBS)",{x:MX,y:1.85,w:W-2*MX,h:0.35,fontFace:BODY_F,fontSize:12.5,color:GOLD_DK,bold:true,margin:0});
let qlx=MX, qrx=MX+5.85, qpw=5.3, qph=3.45, qpy=2.45;
card(s,qlx,qpy,qpw,qph,GREENBG); s.addShape(p.shapes.RECTANGLE,{x:qlx,y:qpy,w:qpw,h:0.12,fill:{color:GREEN}});
s.addText("LOJA (VENDE PRODUTO)",{x:qlx+0.35,y:qpy+0.35,w:qpw-0.7,h:0.32,fontFace:BODY_F,fontSize:11,bold:true,color:GREEN,charSpacing:1.5,margin:0});
s.addText([{text:"Comprou mercadoria: ",options:{color:MUTE,fontSize:13}},{text:"R$ 12.000",options:{color:NAVY,bold:true,fontSize:13}}],{x:qlx+0.35,y:qpy+0.82,w:qpw-0.7,h:0.3,fontFace:BODY_F,margin:0});
s.addText([{text:"IVA sobre a venda (26,5%): ",options:{color:MUTE,fontSize:13}},{text:"R$ 5.300",options:{color:BODY,fontSize:13}}],{x:qlx+0.35,y:qpy+1.18,w:qpw-0.7,h:0.3,fontFace:BODY_F,margin:0});
s.addText([{text:"Desconta a mercadoria: ",options:{color:MUTE,fontSize:13}},{text:"− R$ 3.180",options:{color:GREEN,bold:true,fontSize:13}}],{x:qlx+0.35,y:qpy+1.54,w:qpw-0.7,h:0.3,fontFace:BODY_F,margin:0});
s.addShape(p.shapes.LINE,{x:qlx+0.35,y:qpy+1.95,w:qpw-0.7,h:0,line:{color:GREEN,width:1}});
s.addText("Paga: R$ 2.120",{x:qlx+0.35,y:qpy+2.05,w:qpw-0.7,h:0.35,fontFace:TITLE_F,fontSize:16,bold:true,color:NAVY,margin:0});
s.addText("= 10,6% da receita",{x:qlx+0.35,y:qpy+2.5,w:qpw-0.7,h:0.55,fontFace:TITLE_F,fontSize:22,bold:true,color:GREEN,margin:0});
card(s,qrx,qpy,qpw,qph,REDBG); s.addShape(p.shapes.RECTANGLE,{x:qrx,y:qpy,w:qpw,h:0.12,fill:{color:RED}});
s.addText("CORRETOR (VENDE SERVIÇO)",{x:qrx+0.35,y:qpy+0.35,w:qpw-0.7,h:0.32,fontFace:BODY_F,fontSize:11,bold:true,color:RED,charSpacing:1.5,margin:0});
s.addText([{text:"Insumo com crédito: ",options:{color:MUTE,fontSize:13}},{text:"≈ R$ 0",options:{color:NAVY,bold:true,fontSize:13}}],{x:qrx+0.35,y:qpy+0.82,w:qpw-0.7,h:0.3,fontFace:BODY_F,margin:0});
s.addText([{text:"IVA sobre a comissão (26,5%): ",options:{color:MUTE,fontSize:13}},{text:"R$ 5.300",options:{color:BODY,fontSize:13}}],{x:qrx+0.35,y:qpy+1.18,w:qpw-0.7,h:0.3,fontFace:BODY_F,margin:0});
s.addText([{text:"Tem o que descontar: ",options:{color:MUTE,fontSize:13}},{text:"quase nada",options:{color:RED,bold:true,fontSize:13}}],{x:qrx+0.35,y:qpy+1.54,w:qpw-0.7,h:0.3,fontFace:BODY_F,margin:0});
s.addShape(p.shapes.LINE,{x:qrx+0.35,y:qpy+1.95,w:qpw-0.7,h:0,line:{color:RED,width:1}});
s.addText("Paga: R$ 5.300",{x:qrx+0.35,y:qpy+2.05,w:qpw-0.7,h:0.35,fontFace:TITLE_F,fontSize:16,bold:true,color:NAVY,margin:0});
s.addText("= 26,5% da receita",{x:qrx+0.35,y:qpy+2.5,w:qpw-0.7,h:0.55,fontFace:TITLE_F,fontSize:22,bold:true,color:RED,margin:0});
s.addText("Mesma receita. A loja desconta o que comprou; você vende seu trabalho e não tem o que descontar. Não é punição — é a mecânica do crédito.",
  {x:MX,y:6.05,w:W-2*MX,h:0.6,fontFace:BODY_F,fontSize:13,italic:true,color:BODY,align:"center",margin:0});
footer(s);

// ============ S7 — Sua comissão: hoje x depois ============
s=p.addSlide(); bg(s);
title(s,"Sua comissão: hoje x depois","O que muda no seu bolso");
s.addText("VALIDAR",{x:W-2.6,y:0.6,w:1.7,h:0.3,fontFace:BODY_F,fontSize:9,bold:true,color:GOLD_DK,charSpacing:2,align:"right",margin:0});
s.addText("Corretor PJ no Lucro Presumido · R$ 20.000/mês em comissões · só os impostos que a reforma troca",{x:MX,y:1.85,w:W-2*MX,h:0.35,fontFace:BODY_F,fontSize:12.5,color:GOLD_DK,bold:true,margin:0});
let cbx=MX, cby=2.45, cbw=3.7, cbh=2.9;
card(s,cbx,cby,cbw,cbh);
s.addText("HOJE",{x:cbx+0.3,y:cby+0.25,w:cbw-0.6,h:0.3,fontFace:BODY_F,fontSize:11,color:MUTE,charSpacing:2,bold:true,margin:0});
s.addText("R$ 1.730",{x:cbx+0.3,y:cby+0.65,w:cbw-0.6,h:0.8,fontFace:TITLE_F,fontSize:30,bold:true,color:NAVY,margin:0});
s.addText("ISS 5% → R$ 1.000\nPIS/COFINS 3,65% → R$ 730",{x:cbx+0.3,y:cby+1.5,w:cbw-0.6,h:1.2,fontFace:BODY_F,fontSize:12,color:BODY,margin:0});
let cdx=cbx+cbw+0.5;
card(s,cdx,cby,cbw,cbh,REDBG);
s.addText("DEPOIS",{x:cdx+0.3,y:cby+0.25,w:cbw-0.6,h:0.3,fontFace:BODY_F,fontSize:11,color:RED,charSpacing:2,bold:true,margin:0});
s.addText("R$ 5.300",{x:cdx+0.3,y:cby+0.65,w:cbw-0.6,h:0.8,fontFace:TITLE_F,fontSize:30,bold:true,color:RED,margin:0});
s.addText("IBS/CBS 26,5% → R$ 5.300\nCrédito a descontar: ≈ R$ 0",{x:cdx+0.3,y:cby+1.5,w:cbw-0.6,h:1.2,fontFace:BODY_F,fontSize:12,color:BODY,margin:0});
let cgx=cdx+cbw+0.5;
s.addShape(p.shapes.RECTANGLE,{x:cgx,y:cby,w:W-MX-cgx,h:cbh,fill:{color:RED},shadow:mkShadow()});
s.addText("≈ 3x",{x:cgx,y:cby+0.45,w:W-MX-cgx,h:1.0,fontFace:TITLE_F,fontSize:50,bold:true,color:"FFFFFF",align:"center",margin:0});
s.addText("mais imposto sobre\na comissão",{x:cgx,y:cby+1.6,w:W-MX-cgx,h:0.8,fontFace:BODY_F,fontSize:14,bold:true,color:CREAM,align:"center",margin:0});
s.addText("de 8,65% para 26,5%",{x:cgx,y:cby+2.45,w:W-MX-cgx,h:0.3,fontFace:BODY_F,fontSize:11,italic:true,color:CREAM,align:"center",margin:0});
s.addText("Comparação só de ISS/PIS/COFINS → IBS/CBS. Imposto de Renda é outra conta. E a conta muda conforme o seu caso — é o próximo slide.",
  {x:MX,y:5.6,w:W-2*MX,h:0.6,fontFace:BODY_F,fontSize:12.5,italic:true,color:BODY,margin:0});
footer(s);

// ============ S7b — Mas depende do seu caso ============
s=p.addSlide(); bg(s);
title(s,"Mas depende do seu caso","Antes de entrar em pânico");
s.addText("VALIDAR",{x:W-2.6,y:0.6,w:1.7,h:0.3,fontFace:BODY_F,fontSize:9,bold:true,color:GOLD_DK,charSpacing:2,align:"right",margin:0});
const casos=[
  ["Autônomo (carnê/RPA)","Tende a ficar de fora do IBS/CBS — paga IRPF e INSS, não o novo imposto.",GREENBG,GREEN],
  ["MEI","Corretor não pode (CRECI). Já é uma decisão tomada por você.",PANEL,GOLD_DK],
  ["PJ no Simples","Segue no Simples. No dia a dia, muda pouco.",PANEL,GOLD_DK],
  ["PJ no Lucro Presumido","É aqui que a conta sobe — o caso do slide anterior.",REDBG,RED],
];
let zw=(W-2*MX-1.5)/4, zy=2.5, zh=3.0;
casos.forEach((c,i)=>{ let x=MX+i*(zw+0.5);
  card(s,x,zy,zw,zh,c[2]); s.addShape(p.shapes.RECTANGLE,{x,y:zy,w:zw,h:0.12,fill:{color:c[3]}});
  s.addText(c[0],{x:x+0.28,y:zy+0.4,w:zw-0.5,h:0.9,fontFace:TITLE_F,fontSize:16,bold:true,color:NAVY,margin:0});
  s.addText(c[1],{x:x+0.28,y:zy+1.45,w:zw-0.5,h:1.45,fontFace:BODY_F,fontSize:12,color:BODY,margin:0});
});
s.addText([{text:"Pode haver ainda redução de 30% para profissões regulamentadas",options:{color:NAVY,bold:true}},{text:" — se a corretagem entrar na lista, a alíquota cai para ~18,5%.  ",options:{color:BODY}},{text:"[confirmar com contador]",options:{color:GOLD_DK,italic:true}}],
  {x:MX,y:5.95,w:W-2*MX,h:0.6,fontFace:BODY_F,fontSize:12.5,align:"center",margin:0});
footer(s);

// ============ S7c — A carteira de locação ============
s=p.addSlide(); bg(s);
title(s,"A carteira de locação","O aluguel no dia a dia");
s.addText("VALIDAR",{x:W-2.6,y:0.6,w:1.7,h:0.3,fontFace:BODY_F,fontSize:9,bold:true,color:GOLD_DK,charSpacing:2,align:"right",margin:0});
s.addText("Exemplo: aluguel de R$ 2.500/mês · imobiliária administra (taxa 10% = R$ 250) · confirme os números com seu contador",{x:MX,y:1.85,w:W-2*MX,h:0.35,fontFace:BODY_F,fontSize:12.5,color:GOLD_DK,bold:true,margin:0});
let lcx=MX, lrx=MX+5.85, lpw=5.3, lph=3.3, lpy=2.4;
card(s,lcx,lpy,lpw,lph,PANEL); goldEdge(s,lcx,lpy,lph);
s.addText("A TAXA DE ADMINISTRAÇÃO",{x:lcx+0.35,y:lpy+0.35,w:lpw-0.7,h:0.32,fontFace:BODY_F,fontSize:11,bold:true,color:GOLD_DK,charSpacing:1.5,margin:0});
s.addText("R$ 250 / mês",{x:lcx+0.35,y:lpy+0.75,w:lpw-0.7,h:0.7,fontFace:TITLE_F,fontSize:26,bold:true,color:NAVY,margin:0});
s.addText([
  {text:"É serviço da imobiliária — hoje ISS ~2–5%.",options:{breakLine:true,bullet:true}},
  {text:"Depois entra na alíquota cheia de IBS/CBS.",options:{breakLine:true,bullet:true}},
  {text:"A mordida na sua taxa de administração sobe.",options:{bullet:true}},
],{x:lcx+0.35,y:lpy+1.55,w:lpw-0.75,h:1.6,fontFace:BODY_F,fontSize:12.5,color:BODY,paraSpaceAfter:6,margin:0});
card(s,lrx,lpy,lpw,lph,PANEL); goldEdge(s,lrx,lpy,lph);
s.addText("O ALUGUEL",{x:lrx+0.35,y:lpy+0.35,w:lpw-0.7,h:0.32,fontFace:BODY_F,fontSize:11,bold:true,color:GOLD_DK,charSpacing:1.5,margin:0});
s.addText("R$ 2.500 / mês",{x:lrx+0.35,y:lpy+0.75,w:lpw-0.7,h:0.7,fontFace:TITLE_F,fontSize:26,bold:true,color:NAVY,margin:0});
s.addText([
  {text:"Regime específico de imóveis: redução de 50% na alíquota (~13,25%).",options:{breakLine:true,bullet:true}},
  {text:"Redutor social na locação residencial; pequeno locador pode ser isento.",options:{breakLine:true,bullet:true}},
  {text:"Quem absorve: proprietário, inquilino ou a margem da imobiliária?",options:{bullet:true}},
],{x:lrx+0.35,y:lpy+1.55,w:lpw-0.75,h:1.6,fontFace:BODY_F,fontSize:12.5,color:BODY,paraSpaceAfter:6,margin:0});
s.addText("Na locação, a conta tem dois donos: o serviço da imobiliária e o aluguel. Quem não souber quem absorve a alta, descobre no reajuste.",
  {x:MX,y:6.05,w:W-2*MX,h:0.6,fontFace:BODY_F,fontSize:13.5,italic:true,color:BODY,align:"center",margin:0});
footer(s);

// ============ S8 — Corretor de imóveis ============
s=p.addSlide(); bg(s);
title(s,"O que muda para o corretor de imóveis","Onde a fiscalização aperta");
card(s,MX,2.5,5.6,3.6); goldEdge(s,MX,2.5,3.6);
s.addText("CIB — o 'CPF do imóvel'",{x:MX+0.35,y:2.8,w:5.0,h:0.6,fontFace:TITLE_F,fontSize:21,bold:true,color:GOLD_DK,margin:0});
s.addText([
  {text:"Identificação única nacional de cada imóvel.",options:{breakLine:true,bullet:true}},
  {text:"Locação, venda, cartório e regularização passam a conversar direto com o fisco.",options:{breakLine:true,bullet:true}},
  {text:"Cruzamento de dados fica muito mais forte.",options:{bullet:true}},
],{x:MX+0.35,y:3.55,w:5.0,h:2.3,fontFace:BODY_F,fontSize:13.5,color:NAVY,paraSpaceAfter:8,margin:0});
let rx=MX+6.1;
card(s,rx,2.5,W-MX-rx,3.6);
s.addText("IBS / CBS sobre aluguel",{x:rx+0.35,y:2.8,w:W-MX-rx-0.6,h:0.6,fontFace:TITLE_F,fontSize:21,bold:true,color:NAVY,margin:0});
s.addText([
  {text:"O imposto sobre locação não alcança todo mundo da mesma forma.",options:{breakLine:true,bullet:true}},
  {text:"Quem tem carteira de aluguéis precisa de estratégia para reduzir a mordida.",options:{breakLine:true,bullet:true}},
  {text:"O improviso aqui vira autuação.",options:{bullet:true}},
],{x:rx+0.35,y:3.55,w:W-MX-rx-0.7,h:2.3,fontFace:BODY_F,fontSize:13.5,color:BODY,paraSpaceAfter:8,margin:0});
footer(s);

// ============ S9 — MEI ============
s=p.addSlide(); bg(s);
title(s,"Corretor de imóveis pode ser MEI?","MEI · profissão regulamentada");
s.addText("VALIDAR",{x:W-2.6,y:0.6,w:1.7,h:0.3,fontFace:BODY_F,fontSize:9,bold:true,color:GOLD_DK,charSpacing:2,align:"right",margin:0});
card(s,MX,2.6,W-2*MX,1.5,REDBG); goldEdge(s,MX,2.6,1.5);
s.addText([{text:"Corretagem de imóveis é profissão regulamentada (CRECI).  ",options:{color:NAVY}},{text:"Em regra, NÃO se enquadra no MEI.",options:{color:RED,bold:true}}],
  {x:MX+0.35,y:2.6,w:W-2*MX-0.7,h:1.5,fontFace:BODY_F,fontSize:18,valign:"middle",margin:0});
s.addText([
  {text:"Muita gente opera achando que pode — e descobre tarde.",options:{breakLine:true,bullet:true,color:NAVY}},
  {text:"O enquadramento certo (autônomo, PJ no Simples, etc.) muda quanto você paga na reforma.",options:{breakLine:true,bullet:true,color:BODY}},
  {text:"Escolher errado hoje é pagar a conta depois.",options:{bullet:true,color:BODY}},
],{x:MX+0.2,y:4.4,w:W-2*MX-0.4,h:1.8,fontFace:BODY_F,fontSize:14.5,paraSpaceAfter:10,margin:0});
footer(s);

// ============ S10 — Imposto de Renda ============
s=p.addSlide(); bg(s);
title(s,"Imposto de Renda: o que muda","Lucros, dividendos e retiradas");
s.addText("VALIDAR REGRA",{x:W-3.1,y:0.6,w:2.2,h:0.3,fontFace:BODY_F,fontSize:9,bold:true,color:GOLD_DK,charSpacing:2,align:"right",margin:0});
const ir=[["1996","Dividendos eram isentos","Desde 1996, sócio recebia lucro sem IR.",PANEL,GOLD_DK],
          ["Agora","Passam a ser tributados","Retiradas acima de R$ 50 mil viram fato gerador — até 15% de imposto.",PANEL,GOLD_DK],
          ["Saída","Planejamento, não susto","Estrutura societária, holdings e retiradas planejadas para não pagar a mais.",GREENBG,GREEN]];
let iw=(W-2*MX-1.0)/3, iy=2.6, ih=3.3;
ir.forEach((c,i)=>{ let x=MX+i*(iw+0.5);
  card(s,x,iy,iw,ih,c[3]);
  s.addText(c[0].toUpperCase(),{x:x+0.3,y:iy+0.35,w:iw-0.6,h:0.4,fontFace:BODY_F,fontSize:12,bold:true,color:c[4],charSpacing:2,margin:0});
  s.addText(c[1],{x:x+0.3,y:iy+0.9,w:iw-0.6,h:0.9,fontFace:TITLE_F,fontSize:18,bold:true,color:NAVY,margin:0});
  s.addText(c[2],{x:x+0.3,y:iy+1.95,w:iw-0.6,h:1.2,fontFace:BODY_F,fontSize:13,color:BODY,margin:0}); });
footer(s);

// ============ S11 — Consequências ============
s=p.addSlide(); bg(s);
title(s,"O preço de não se preparar","Consequências");
const cons=[["Perda financeira","Pagar imposto a mais reduz sua margem."],
            ["Multas e autuações","Divergências viram penalidade."],
            ["Restrição de mercado","Dificuldade de atender quem já se adaptou."],
            ["Margem apertada","Impossível competir em igualdade."]];
let qw=(W-2*MX-0.5)/2, qh=1.55, qy=2.5;
cons.forEach((c,i)=>{ let col=i%2,row=Math.floor(i/2); let x=MX+col*(qw+0.5),y=qy+row*(qh+0.3);
  card(s,x,y,qw,qh,REDBG);
  s.addShape(p.shapes.RECTANGLE,{x,y,w:0.12,h:qh,fill:{color:RED}});
  s.addText(c[0],{x:x+0.3,y:y+0.28,w:qw-0.6,h:0.5,fontFace:TITLE_F,fontSize:18,bold:true,color:NAVY,margin:0});
  s.addText(c[1],{x:x+0.3,y:y+0.85,w:qw-0.6,h:0.55,fontFace:BODY_F,fontSize:13,color:BODY,margin:0}); });
footer(s);

// ============ S13 — 3 perguntas pro seu contador ============
s=p.addSlide(); bg(s);
title(s,"3 perguntas pro seu contador","Saia daqui com tarefa, não com susto");
const prep=[["No meu caso, vou pagar mais?","Pelo meu enquadramento (autônomo, Simples ou PJ), a reforma sobe a minha conta?"],
            ["Vale a pena mudar de regime?","Simples, Lucro Presumido, virar PJ — o que me protege melhor?"],
            ["E a minha carteira de locação?","Como ficam os aluguéis que eu administro e o imposto sobre eles?"],
            ["O que faço nos próximos 90 dias?","Qual é o primeiro passo que não pode esperar?"]];
let pw=(W-2*MX-0.5)/2, phh=1.55, py0=2.5;
prep.forEach((c,i)=>{ let col=i%2,row=Math.floor(i/2); let x=MX+col*(pw+0.5),y=py0+row*(phh+0.3);
  card(s,x,y,pw,phh); goldEdge(s,x,y,phh);
  s.addText(String(i+1).padStart(2,"0"),{x:x+0.3,y:y+0.22,w:0.9,h:0.5,fontFace:BODY_F,fontSize:13,bold:true,color:GOLD_DK,charSpacing:1,margin:0});
  s.addText(c[0],{x:x+0.3,y:y+0.55,w:pw-0.6,h:0.5,fontFace:TITLE_F,fontSize:17,bold:true,color:NAVY,margin:0});
  s.addText(c[1],{x:x+0.3,y:y+1.02,w:pw-0.6,h:0.5,fontFace:BODY_F,fontSize:12,color:BODY,margin:0}); });
footer(s);

// ============ S14 — Oportunidades para quem age ============
s=p.addSlide(); bg(s);
title(s,"Quem age agora sai na frente","Oportunidades da reforma");
const oporsAcc=[
  "Um sistema, uma linguagem. Menos obrigações acessórias no longo prazo.",
  "Alíquota clara, base limpa. Precificar e planejar com mais critério.",
  "O corretor preparado atende quem já se adaptou — e fecha negócios que o concorrente despreparado perde."
];
const oporsT=["Menos burocracia","Carga mais previsível","Vantagem competitiva"];
let ow=(W-2*MX-1.0)/3, oy=2.6, oh=3.3;
oporsT.forEach((t,i)=>{ let x=MX+i*(ow+0.5);
  card(s,x,oy,ow,oh,i===2?GREENBG:PANEL); goldEdge(s,x,oy,oh);
  s.addText(String(i+1),{x:x+0.3,y:oy+0.3,w:1,h:0.7,fontFace:TITLE_F,fontSize:30,bold:true,color:i===2?GREEN:GOLD_DK,margin:0});
  s.addText(t,{x:x+0.3,y:oy+1.05,w:ow-0.6,h:0.8,fontFace:TITLE_F,fontSize:19,bold:true,color:NAVY,margin:0});
  s.addText(oporsAcc[i],{x:x+0.3,y:oy+1.95,w:ow-0.6,h:1.3,fontFace:BODY_F,fontSize:13,color:BODY,margin:0}); });
s.addText("A reforma é neutra. O que diferencia é a preparação — quem age agora compete no mesmo campo que as grandes empresas.",
  {x:MX,y:6.1,w:W-2*MX,h:0.5,fontFace:BODY_F,fontSize:13.5,italic:true,color:BODY,align:"center",margin:0});
footer(s);

// ============ S15 — Mãos na massa ============
s=p.addSlide(); bg(s);
s.addText("EXERCÍCIO",{x:MX,y:2.1,w:6,h:0.4,fontFace:BODY_F,fontSize:12,bold:true,color:GOLD_DK,charSpacing:4,margin:0});
goldEdge(s,MX,2.65,1.0);
s.addText("Mãos na massa",{x:MX+0.3,y:2.6,w:11,h:1.0,fontFace:TITLE_F,fontSize:48,bold:true,color:NAVY,margin:0});
s.addText("Agora não é teoria. Pegue a folha e descubra, no seu caso, onde a reforma ajuda e onde atrapalha — e o que você precisa fazer para se preparar.",
  {x:MX+0.3,y:3.9,w:10.5,h:1.2,fontFace:BODY_F,fontSize:18,color:BODY,margin:0});
footer(s);

// ============ S15b — A Vero ============
s=p.addSlide(); bg(s);
title(s,"A Vero","Escola · Hub de negócios · Treinamentos modulares");
const frentes=[["Escola","Formação por critério, em fases. O empresário para de se perder, recomeçar e acumular."],
               ["Hub de negócios","Especialistas no tema certo, na hora certa — como esta sessão de hoje."],
               ["Treinamentos modulares","Temas práticos e curtos. Você escolhe o módulo que resolve a sua dor agora."]];
let fw=(W-2*MX-1.0)/3, fy=2.6, fh=3.3;
frentes.forEach((c,i)=>{ let x=MX+i*(fw+0.5);
  card(s,x,fy,fw,fh); goldEdge(s,x,fy,fh);
  s.addText(String(i+1),{x:x+0.3,y:fy+0.3,w:1,h:0.7,fontFace:TITLE_F,fontSize:30,bold:true,color:GOLD_DK,margin:0});
  s.addText(c[0],{x:x+0.3,y:fy+1.05,w:fw-0.6,h:0.8,fontFace:TITLE_F,fontSize:19,bold:true,color:NAVY,margin:0});
  s.addText(c[1],{x:x+0.3,y:fy+1.95,w:fw-0.6,h:1.3,fontFace:BODY_F,fontSize:13,color:BODY,margin:0}); });
footer(s);

// ============ PF1 — A ponte: reforma → vida pessoal ============
s=p.addSlide(); bg(s);
s.addText("FINANÇAS PESSOAIS",{x:MX,y:2.0,w:6,h:0.4,fontFace:BODY_F,fontSize:12,bold:true,color:GOLD_DK,charSpacing:4,margin:0});
goldEdge(s,MX,2.55,1.7);
s.addText([
  {text:"A reforma aperta o negócio. ",options:{color:NAVY}},
  {text:"E em casa?",options:{color:GOLD_DK}},
],{x:MX+0.3,y:2.45,w:11.5,h:1.0,fontFace:TITLE_F,fontSize:40,bold:true,margin:0});
s.addText("Quando a margem encolhe, a primeira defesa não é vender mais — é parar de vazar dinheiro na vida pessoal.",
  {x:MX+0.3,y:3.8,w:10.8,h:0.9,fontFace:BODY_F,fontSize:18,color:BODY,margin:0});
s.addText("E lembra do Imposto de Renda? O que sobra pra você também muda. Vida pessoal sem critério vira pressão no negócio.",
  {x:MX+0.3,y:4.95,w:10.8,h:0.9,fontFace:BODY_F,fontSize:15,italic:true,color:MUTE,margin:0});
footer(s);

// ============ PF2 — Os dois erros que mais custam ============
s=p.addSlide(); bg(s);
title(s,"Os dois erros que mais custam","Onde o corretor se perde");
let e1x=MX, e2x=MX+5.85, epw=5.3, eph=3.5, epy=2.4;
card(s,e1x,epy,epw,eph,REDBG); s.addShape(p.shapes.RECTANGLE,{x:e1x,y:epy,w:epw,h:0.12,fill:{color:RED}});
s.addText("1",{x:e1x+0.35,y:epy+0.3,w:1,h:0.7,fontFace:TITLE_F,fontSize:30,bold:true,color:RED,margin:0});
s.addText("A conta da empresa não é a sua conta",{x:e1x+0.35,y:epy+1.05,w:epw-0.7,h:0.9,fontFace:TITLE_F,fontSize:19,bold:true,color:NAVY,margin:0});
s.addText("A comissão cai na conta e some misturada com o pessoal. Você nunca sabe quanto a empresa deu — nem quanto você custa.",{x:e1x+0.35,y:epy+2.0,w:epw-0.75,h:1.3,fontFace:BODY_F,fontSize:13,color:BODY,margin:0});
card(s,e2x,epy,epw,eph,REDBG); s.addShape(p.shapes.RECTANGLE,{x:e2x,y:epy,w:epw,h:0.12,fill:{color:RED}});
s.addText("2",{x:e2x+0.35,y:epy+0.3,w:1,h:0.7,fontFace:TITLE_F,fontSize:30,bold:true,color:RED,margin:0});
s.addText("Renda variável, boletos fixos",{x:e2x+0.35,y:epy+1.05,w:epw-0.7,h:0.9,fontFace:TITLE_F,fontSize:19,bold:true,color:NAVY,margin:0});
s.addText("Mês de 3 vendas, mês de zero. Quem gasta no ritmo do mês bom quebra no mês seco. Critério: pagar-se um pró-labore fixo.",{x:e2x+0.35,y:epy+2.0,w:epw-0.75,h:1.3,fontFace:BODY_F,fontSize:13,color:BODY,margin:0});
s.addText("Improviso na vida pessoal vira pressão no negócio.",{x:MX,y:6.1,w:W-2*MX,h:0.5,fontFace:BODY_F,fontSize:15,bold:true,italic:true,color:NAVY,align:"center",margin:0});
footer(s);

// ============ PF3 — Seu número e sua reserva ============
s=p.addSlide(); bg(s);
title(s,"Seu número e sua reserva","O que te tira do escuro");
let r1x=MX, r2x=MX+5.85, rpw=5.3, rph=3.5, rpy=2.4;
card(s,r1x,rpy,rpw,rph,PANEL); goldEdge(s,r1x,rpy,rph);
s.addText("CUSTO DE VIDA MÍNIMO",{x:r1x+0.35,y:rpy+0.38,w:rpw-0.7,h:0.32,fontFace:BODY_F,fontSize:11,bold:true,color:GOLD_DK,charSpacing:1.5,margin:0});
s.addText("Quanto sua vida custa por mês",{x:r1x+0.35,y:rpy+0.85,w:rpw-0.7,h:0.8,fontFace:TITLE_F,fontSize:18,bold:true,color:NAVY,margin:0});
s.addText("É o número de comissões que você é obrigado a fechar para se manter vivo. Quem não sabe o próprio número, vende no escuro.",{x:r1x+0.35,y:rpy+1.7,w:rpw-0.75,h:1.6,fontFace:BODY_F,fontSize:13,color:BODY,margin:0});
card(s,r2x,rpy,rpw,rph,GREENBG); s.addShape(p.shapes.RECTANGLE,{x:r2x,y:rpy,w:rpw,h:0.12,fill:{color:GREEN}});
s.addText("RESERVA DE OSCILAÇÃO",{x:r2x+0.35,y:rpy+0.38,w:rpw-0.7,h:0.32,fontFace:BODY_F,fontSize:11,bold:true,color:GREEN,charSpacing:1.5,margin:0});
s.addText("Não é luxo. É o caixa do mês seco",{x:r2x+0.35,y:rpy+0.85,w:rpw-0.7,h:0.8,fontFace:TITLE_F,fontSize:18,bold:true,color:NAVY,margin:0});
s.addText("Guarda no mês bom o que paga o mês fraco. Diferente da reserva de emergência, que cobre o imprevisto — não a sazonalidade.",{x:r2x+0.35,y:rpy+1.7,w:rpw-0.75,h:1.6,fontFace:BODY_F,fontSize:13,color:BODY,margin:0});
footer(s);

// ============ PF4 — A planilha (bônus da comunidade) ============
s=p.addSlide(); bg(s);
title(s,"Sua ferramenta começa simples","Bônus da comunidade");
card(s,MX,2.5,6.6,3.5,PANEL); goldEdge(s,MX,2.5,3.5);
s.addText("PLANILHA DE CONTROLE DE GASTOS",{x:MX+0.35,y:2.85,w:6.0,h:0.35,fontFace:BODY_F,fontSize:11,bold:true,color:GOLD_DK,charSpacing:1.5,margin:0});
s.addText([
  {text:"Painel com seu custo de vida mínimo, % por categoria e reserva.",options:{breakLine:true,bullet:true,color:NAVY}},
  {text:"Lançamentos já com exemplos do dia a dia do corretor.",options:{breakLine:true,bullet:true,color:BODY}},
  {text:"O primeiro passo para parar de improvisar em casa.",options:{bullet:true,color:BODY}},
],{x:MX+0.35,y:3.4,w:6.0,h:2.4,fontFace:BODY_F,fontSize:14,paraSpaceAfter:10,margin:0});
let pqx=MX+7.1;
card(s,pqx,2.5,W-MX-pqx,3.5,PANEL2);
s.addText("Excel ou Google Sheets",{x:pqx+0.35,y:2.9,w:W-MX-pqx-0.7,h:0.5,fontFace:TITLE_F,fontSize:17,bold:true,color:NAVY,margin:0});
s.addText("Abre no celular ou no computador. Você preenche, ela mostra onde o dinheiro vaza.",{x:pqx+0.35,y:3.6,w:W-MX-pqx-0.7,h:1.2,fontFace:BODY_F,fontSize:13,color:BODY,margin:0});
s.addText("Entregue na comunidade →",{x:pqx+0.35,y:5.2,w:W-MX-pqx-0.7,h:0.4,fontFace:BODY_F,fontSize:12,italic:true,color:GOLD_DK,margin:0});
footer(s);

// ============ PF5 — Como preencher a planilha ============
s=p.addSlide(); bg(s);
title(s,"Como preencher a planilha","3 passos, uns 10 minutos");
const passos=[
  ["Comece pelos campos em amarelo","Sua renda do mês e quanto você já tem de reserva. Só isso já te dá o diagnóstico."],
  ["Lance seus gastos","Na aba Lançamentos: data, categoria, valor — e marque se é fixo (todo mês) ou variável. As categorias já vêm prontas."],
  ["Leia o Painel","Ele se monta sozinho: seu custo de vida mínimo, pra onde o dinheiro vai e quanto falta pra sua reserva."],
];
let xw=(W-2*MX-1.0)/3, xy=2.6, xh=3.0;
passos.forEach((c,i)=>{ let x=MX+i*(xw+0.5);
  card(s,x,xy,xw,xh); goldEdge(s,x,xy,xh);
  s.addText(String(i+1),{x:x+0.3,y:xy+0.3,w:1,h:0.7,fontFace:TITLE_F,fontSize:32,bold:true,color:GOLD_DK,margin:0});
  s.addText(c[0],{x:x+0.3,y:xy+1.0,w:xw-0.6,h:0.85,fontFace:TITLE_F,fontSize:17,bold:true,color:NAVY,margin:0});
  s.addText(c[1],{x:x+0.3,y:xy+1.85,w:xw-0.6,h:1.1,fontFace:BODY_F,fontSize:12.5,color:BODY,margin:0});
});
s.addText("Não precisa estar perfeito. Comece com uma semana de gastos — o resto vem.",
  {x:MX,y:6.05,w:W-2*MX,h:0.5,fontFace:BODY_F,fontSize:13.5,italic:true,color:BODY,align:"center",margin:0});
footer(s);

// ============ S16 — Fechamento + CTA ============
s=p.addSlide(); bg(s);
goldEdge(s,MX,1.0,2.0);
s.addText([
  {text:'“A reforma não é só mudança de imposto. ',options:{color:NAVY}},
  {text:"É mudança de lógica.",options:{color:GOLD_DK}},
  {text:' Quem entender a cadeia e agir antes paga melhor e compete melhor.”',options:{color:NAVY}},
],{x:MX+0.35,y:0.9,w:11.2,h:2.0,fontFace:TITLE_F,fontSize:26,italic:true,margin:0});
s.addText("Sem preparo, a reforma vira um detector de empresa mal gerida.",{x:MX+0.35,y:3.0,w:11,h:0.5,fontFace:BODY_F,fontSize:15,color:BODY,margin:0});
card(s,MX,4.1,5.6,2.3,PANEL);
s.addText("ENTRE NA COMUNIDADE",{x:MX+0.35,y:4.4,w:5,h:0.35,fontFace:BODY_F,fontSize:12,bold:true,color:GOLD_DK,charSpacing:2,margin:0});
s.addText("Agenda das próximas imersões, materiais, os próximos módulos — e a planilha de controle de gastos de bônus.",{x:MX+0.35,y:4.85,w:5,h:1.15,fontFace:BODY_F,fontSize:13,color:NAVY,margin:0});
s.addText("[ link da Comunidade do WhatsApp ]",{x:MX+0.35,y:5.85,w:5,h:0.4,fontFace:BODY_F,fontSize:11,italic:true,color:MUTE,margin:0});
let qx=MX+6.1;
s.addShape(p.shapes.RECTANGLE,{x:qx,y:4.1,w:2.3,h:2.3,fill:{color:PANEL2},line:{color:LINE,width:1}});
s.addText("QR",{x:qx,y:4.95,w:2.3,h:0.6,fontFace:BODY_F,fontSize:18,color:MUTE,align:"center",margin:0});
navyTile(s, qx+2.7, 4.15, 1.0);
s.addText("vero",{x:qx+3.85,y:4.25,w:3,h:0.6,fontFace:TITLE_F,fontSize:26,italic:true,bold:true,color:NAVY,margin:0});
s.addText("Status não se compra.\nStatus se comprova.",{x:qx+3.85,y:5.05,w:4,h:1.0,fontFace:BODY_F,fontSize:13,color:GOLD_DK,margin:0});

const out="/Users/Lucas-Lenovo/Vero - Escola de Empresários/_imersoes/reforma-tributaria-corretores/deck/Vero_Reforma_Tributaria_Corretores_v2.pptx";
p.writeFile({fileName:out}).then(f=>console.log("OK:",f));
