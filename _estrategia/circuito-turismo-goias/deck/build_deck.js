const pptxgen = require("pptxgenjs");
const p = new pptxgen();
p.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
p.author = "Vero — Escola de Empresários";
p.title = "Circuito Vero de Turismo — Goiás";

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
let PG=1; // capa é a página 1 (sem rodapé)
function footer(s){
  PG++;
  s.addText("CIRCUITO VERO DE TURISMO — GOIÁS",{x:MX,y:6.98,w:5,h:0.3,fontFace:BODY_F,fontSize:8.5,color:MUTE,charSpacing:1.5,margin:0,valign:"middle"});
  s.addImage({path:V_NAVY,x:W-1.85,y:6.98,w:0.34,h:0.29});
  s.addText("VERO",{x:W-1.45,y:6.98,w:0.8,h:0.3,fontFace:TITLE_F,fontSize:13,bold:true,color:NAVY,align:"left",valign:"middle",margin:0});
  s.addText(String(PG).padStart(2,"0"),{x:W-0.65,y:6.98,w:0.4,h:0.3,fontFace:BODY_F,fontSize:9,color:MUTE,align:"right",valign:"middle",margin:0});
}
function title(s,t,sub){ if(sub) label(s,sub,MX,0.55,9); s.addText(t,{x:MX,y:0.85,w:W-2*MX,h:1.0,fontFace:TITLE_F,fontSize:30,bold:true,color:NAVY,align:"left",margin:0}); }
function card(s,x,y,w,h,fill){ s.addShape(p.shapes.RECTANGLE,{x,y,w,h,fill:{color:fill||PANEL},line:{color:LINE,width:1},shadow:mkShadow()}); }
function goldEdge(s,x,y,h){ s.addShape(p.shapes.RECTANGLE,{x,y,w:0.12,h,fill:{color:GOLD}}); }
function navyTile(s,x,y,sz){ s.addShape(p.shapes.RECTANGLE,{x,y,w:sz,h:sz,fill:{color:NAVY}}); s.addImage({path:V_GOLD,x:x+sz*0.2,y:y+sz*0.22,w:sz*0.6,h:sz*0.6*(357/414)}); }

// ============ S1 — CAPA (escura) ============
let s=p.addSlide();
s.background={color:NAVY2};
s.addShape(p.shapes.RECTANGLE,{x:0,y:0,w:W,h:0.14,fill:{color:GOLD}});
s.addImage({path:V_GOLD,x:MX,y:0.85,w:1.15,h:1.15*(357/414)});
s.addText("PROPOSTA AO PODER PÚBLICO  ·  GOIÁS",{x:MX,y:2.35,w:9,h:0.35,fontFace:BODY_F,fontSize:11,bold:true,color:GOLD,charSpacing:3,margin:0});
s.addText("Circuito Vero de Turismo",{x:MX,y:2.8,w:11.6,h:1.1,fontFace:TITLE_F,fontSize:48,bold:true,color:"FFFFFF",margin:0});
s.addShape(p.shapes.RECTANGLE,{x:MX,y:4.05,w:0.75,h:0.07,fill:{color:GOLD}});
s.addText("Formação empresarial gratuita para quem sustenta o turismo\nnas cidades do interior de Goiás.",
  {x:MX,y:4.35,w:9.5,h:1.0,fontFace:BODY_F,fontSize:17,color:CREAM,margin:0});
s.addText("Uma escola para empresários de verdade.",{x:MX,y:6.05,w:9,h:0.4,fontFace:TITLE_F,fontSize:14,italic:true,color:GOLD,margin:0});
s.addText("VERO — ESCOLA DE EMPRESÁRIOS  ·  2026",{x:MX,y:6.85,w:9,h:0.3,fontFace:BODY_F,fontSize:9,color:MUTE,charSpacing:2.5,margin:0});

// ============ S2 — O PONTO DE PARTIDA ============
s=p.addSlide(); bg(s);
title(s,"O turismo do interior é feito por pequenos empresários","O ponto de partida");
s.addText("A pousada, o restaurante, o guia, o balneário, a loja que atende o visitante. O turista chega — e encontra uma rede de negócios que opera no improviso.",
  {x:MX,y:1.95,w:W-2*MX,h:0.75,fontFace:BODY_F,fontSize:14.5,color:BODY,margin:0});
let c2w=(W-2*MX-0.5)/2, c2y=2.95, c2h=2.0;
card(s,MX,c2y,c2w,c2h,REDBG); s.addShape(p.shapes.RECTANGLE,{x:MX,y:c2y,w:0.12,h:c2h,fill:{color:RED}});
s.addText("O QUE NÃO FALTA",{x:MX+0.4,y:c2y+0.3,w:c2w-0.7,h:0.3,fontFace:BODY_F,fontSize:10.5,bold:true,color:RED,charSpacing:2,margin:0});
s.addText("Esforço",{x:MX+0.4,y:c2y+0.65,w:c2w-0.7,h:0.5,fontFace:TITLE_F,fontSize:20,bold:true,color:NAVY,margin:0});
s.addText("O dono abre cedo, fecha tarde, atravessa a temporada no fôlego. Trabalho não é o problema.",
  {x:MX+0.4,y:c2y+1.2,w:c2w-0.75,h:0.7,fontFace:BODY_F,fontSize:12.5,color:BODY,margin:0});
let c2x=MX+c2w+0.5;
card(s,c2x,c2y,c2w,c2h,PANEL); goldEdge(s,c2x,c2y,c2h);
s.addText("O QUE FALTA",{x:c2x+0.4,y:c2y+0.3,w:c2w-0.7,h:0.3,fontFace:BODY_F,fontSize:10.5,bold:true,color:GOLD_DK,charSpacing:2,margin:0});
s.addText("Previsibilidade e critério",{x:c2x+0.4,y:c2y+0.65,w:c2w-0.7,h:0.5,fontFace:TITLE_F,fontSize:20,bold:true,color:NAVY,margin:0});
s.addText("Caixa que atravessa a baixa temporada, padrão de atendimento, preço com método, operação que não depende só do dono.",
  {x:c2x+0.4,y:c2y+1.2,w:c2w-0.75,h:0.7,fontFace:BODY_F,fontSize:12.5,color:BODY,margin:0});
s.addText("A cidade investe para atrair o turista.  Quem recebe o turista fica por conta própria.",
  {x:MX,y:5.5,w:W-2*MX,h:0.8,fontFace:TITLE_F,fontSize:19,italic:true,bold:true,color:NAVY,align:"center",valign:"middle",margin:0});
footer(s);

// ============ S3 — A PROPOSTA ============
s=p.addSlide(); bg(s);
title(s,"Um circuito de imersões gratuitas, cidade por cidade","A proposta");
const prop=[
  ["1 dia de imersão","Geralmente sábado. O empresário entra de manhã e sai no fim do dia com um plano preenchido para o próprio negócio."],
  ["Gratuito para o empresário","Custeado por verba pública — emenda parlamentar ou orçamento municipal. Fomento com entregável concreto."],
  ["Método, não palestra","Método Vero: diagnóstico, conteúdo aplicável e material físico de uso diário. Sem motivacional, sem teoria solta."],
];
let p3w=(W-2*MX-1.0)/3, p3y=2.1, p3h=2.6;
prop.forEach((c,i)=>{ let x=MX+i*(p3w+0.5);
  s.addShape(p.shapes.RECTANGLE,{x,y:p3y,w:p3w,h:p3h,fill:{color:NAVY},shadow:mkShadow()});
  s.addShape(p.shapes.RECTANGLE,{x,y:p3y,w:p3w,h:0.12,fill:{color:GOLD}});
  s.addText(c[0],{x:x+0.35,y:p3y+0.4,w:p3w-0.65,h:0.85,fontFace:TITLE_F,fontSize:17.5,bold:true,color:GOLD,margin:0});
  s.addText(c[1],{x:x+0.35,y:p3y+1.3,w:p3w-0.7,h:1.15,fontFace:BODY_F,fontSize:12,color:CREAM,margin:0});
});
card(s,MX,5.15,W-2*MX,1.35,PANEL); goldEdge(s,MX,5.15,1.35);
s.addText("NICHO: TURISMO",{x:MX+0.4,y:5.4,w:5,h:0.3,fontFace:BODY_F,fontSize:10.5,bold:true,color:GOLD_DK,charSpacing:2,margin:0});
s.addText("Todo o conteúdo é adaptado à realidade de quem vive de visitante: sazonalidade, temporada, fluxo irregular, dependência do clima e do calendário. Não é treinamento genérico com exemplo emprestado.",
  {x:MX+0.4,y:5.72,w:W-2*MX-0.8,h:0.65,fontFace:BODY_F,fontSize:12.5,color:BODY,margin:0});
footer(s);

// ============ S4 — PÚBLICO-ALVO ============
s=p.addSlide(); bg(s);
title(s,"Quem senta na cadeira","Público-alvo");
const pub=[
  ["Hospedagem","Hotéis, pousadas, chalés, campings."],
  ["Alimentação","Restaurantes, bares, lanchonetes, operações de temporada."],
  ["Receptivo","Guias turísticos, agências locais, transporte de visitantes."],
  ["Atrativos","Cachoeiras, balneários, fazendas de turismo rural e de experiência."],
  ["Comércio turístico","Artesanato, conveniência, polos de moda que recebem excursões de compras."],
  ["Eventos & temporada","Negócios sazonais: praias de rio, festivais, alta estação."],
];
let g4w=(W-2*MX-1.0)/3, g4h=1.62;
pub.forEach((c,i)=>{
  let x=MX+(i%3)*(g4w+0.5), y=2.05+Math.floor(i/3)*(g4h+0.3);
  card(s,x,y,g4w,g4h); goldEdge(s,x,y,g4h);
  s.addText(c[0],{x:x+0.32,y:y+0.22,w:g4w-0.6,h:0.42,fontFace:TITLE_F,fontSize:15.5,bold:true,color:NAVY,margin:0});
  s.addText(c[1],{x:x+0.32,y:y+0.68,w:g4w-0.62,h:0.85,fontFace:BODY_F,fontSize:11,color:BODY,margin:0});
});
s.addText([
  {text:"águas e lagos   ·   praias de rio e temporada   ·   cachoeiras e chapadas   ·   cidades históricas   ·   turismo de compras / moda   ·   turismo rural",options:{color:NAVY,bold:true}},
],{x:MX,y:6.05,w:W-2*MX,h:0.35,fontFace:BODY_F,fontSize:11.5,align:"center",margin:0});
s.addText("Cada vocação turística de Goiás tem a sua temporada — e o mesmo problema de base: atravessar a baixa sem desmontar o negócio.",
  {x:MX,y:6.42,w:W-2*MX,h:0.35,fontFace:BODY_F,fontSize:11,italic:true,color:MUTE,align:"center",margin:0});
footer(s);

// ============ S5 — O FORMATO ============
s=p.addSlide(); bg(s);
title(s,"Um sábado que muda a segunda-feira","O formato");
const fmt=[
  ["Manhã · 1","Diagnóstico","Onde o negócio está: improviso ou previsibilidade. Cada empresário se localiza nos 4 níveis de maturidade do método Vero."],
  ["Manhã · 2","Financeiro no turismo","Separar empresa e vida pessoal. Caixa de temporada: guardar na alta para atravessar a baixa."],
  ["Tarde · 1","Vendas e operação","Padrão mínimo de atendimento, preço com critério, operação que funciona quando o dono não está."],
  ["Tarde · 2","Mãos na massa","Canvas preenchido pelo próprio empresário, para o próprio negócio. Sai da sala com o plano no papel."],
];
let f5y=1.95, f5h=0.92;
fmt.forEach((r,i)=>{ let y=f5y+i*(f5h+0.16);
  card(s,MX,y,W-2*MX,f5h); goldEdge(s,MX,y,f5h);
  s.addText(r[0],{x:MX+0.35,y:y+0.14,w:1.55,h:0.64,fontFace:BODY_F,fontSize:11,bold:true,color:GOLD_DK,valign:"middle",margin:0});
  s.addText(r[1],{x:MX+2.05,y:y+0.14,w:3.3,h:0.64,fontFace:TITLE_F,fontSize:16,bold:true,color:NAVY,valign:"middle",margin:0});
  s.addText(r[2],{x:MX+5.55,y:y+0.14,w:W-2*MX-5.95,h:0.64,fontFace:BODY_F,fontSize:11.5,color:BODY,valign:"middle",margin:0});
});
s.addShape(p.shapes.RECTANGLE,{x:MX,y:6.35,w:W-2*MX,h:0.55,fill:{color:NAVY}});
s.addText([
  {text:"MATERIAL QUE FICA   ",options:{color:GOLD,bold:true,fontSize:10,charSpacing:2}},
  {text:"Cada participante leva o material Vero impresso — canvas de preenchimento físico, para usar no dia a dia. Ferramenta de trabalho, não anotação de palestra.",options:{color:CREAM,fontSize:11.5}},
],{x:MX+0.35,y:6.35,w:W-2*MX-0.7,h:0.55,fontFace:BODY_F,valign:"middle",margin:0});
footer(s);

// ============ S6 — O QUE A CIDADE GANHA ============
s=p.addSlide(); bg(s);
title(s,"O que a cidade ganha","Retorno público");
const ganha=[
  ["Base empresarial qualificada","O dinheiro público que atrai o turista passa a encontrar negócios preparados para recebê-lo."],
  ["Turista que volta","Serviço com padrão gera experiência melhor. Experiência melhor gera retorno e recomendação — o marketing mais barato que existe."],
  ["Emprego que se sustenta","Negócio que atravessa a baixa temporada não demite a cada ciclo. Emprego estável no interior é resultado de empresa estável."],
  ["Prestação de contas simples","Lista de presença, material entregue, registro fotográfico e diagnóstico aplicado. Fomento com entregável físico e verificável."],
];
let g6w=(W-2*MX-0.5)/2, g6h=1.68;
ganha.forEach((c,i)=>{
  let x=MX+(i%2)*(g6w+0.5), y=2.05+Math.floor(i/2)*(g6h+0.3);
  card(s,x,y,g6w,g6h); goldEdge(s,x,y,g6h);
  s.addText(c[0],{x:x+0.35,y:y+0.22,w:g6w-0.65,h:0.42,fontFace:TITLE_F,fontSize:16,bold:true,color:NAVY,margin:0});
  s.addText(c[1],{x:x+0.35,y:y+0.68,w:g6w-0.68,h:0.9,fontFace:BODY_F,fontSize:11.5,color:BODY,margin:0});
});
s.addText("Fomentar empreendedorismo não é dar palestra. É deixar método na mão de quem opera.",
  {x:MX,y:6.15,w:W-2*MX,h:0.6,fontFace:TITLE_F,fontSize:18,italic:true,bold:true,color:NAVY,align:"center",valign:"middle",margin:0});
footer(s);

// ============ S7 — CUSTEIO ============
s=p.addSlide(); bg(s);
title(s,"Quem paga — e por que faz sentido","Modelo de custeio");
const fontes=[
  ["Emenda parlamentar","Deputado estadual ou federal destina emenda de fomento ao turismo e ao empreendedorismo para o município. Ação com nome, data, cidade e entregável — fácil de mostrar."],
  ["Orçamento municipal","Prefeitura contrata via secretaria de Turismo, Desenvolvimento Econômico ou Cultura. Investimento na base econômica da própria cidade."],
  ["Parcerias institucionais","Goiás Turismo, Sebrae-GO, sistema Fecomércio, associações comerciais e CDLs — apoio, mobilização e contrapartida local."],
];
let f7y=1.95, f7h=0.98;
fontes.forEach((r,i)=>{ let y=f7y+i*(f7h+0.16);
  card(s,MX,y,W-2*MX,f7h); goldEdge(s,MX,y,f7h);
  s.addText(r[0],{x:MX+0.35,y:y+0.15,w:3.2,h:0.68,fontFace:TITLE_F,fontSize:15.5,bold:true,color:NAVY,valign:"middle",margin:0});
  s.addText(r[1],{x:MX+3.75,y:y+0.15,w:W-2*MX-4.15,h:0.68,fontFace:BODY_F,fontSize:11.5,color:BODY,valign:"middle",margin:0});
});
let n7w=(W-2*MX-0.5)/2, n7y=5.55, n7h=1.25;
[["Para o empresário: custo zero","Quem mais precisa é quem menos pode pagar. O circuito remove a barreira de entrada."],
 ["Para o público: custo definido","Valor fechado por cidade — condução, material impresso e estrutura. Sem mensalidade, sem cauda de contrato."]
].forEach((c,i)=>{ let x=MX+i*(n7w+0.5);
  s.addShape(p.shapes.RECTANGLE,{x,y:n7y,w:n7w,h:n7h,fill:{color:NAVY},shadow:mkShadow()});
  s.addText(c[0],{x:x+0.35,y:n7y+0.18,w:n7w-0.65,h:0.35,fontFace:BODY_F,fontSize:13,bold:true,color:GOLD,margin:0});
  s.addText(c[1],{x:x+0.35,y:n7y+0.55,w:n7w-0.68,h:0.6,fontFace:BODY_F,fontSize:11,color:CREAM,margin:0});
});
footer(s);

// ============ S8 — EXPANSÃO ============
s=p.addSlide(); bg(s);
title(s,"De baixo para cima — como o próprio método ensina","Expansão");
const fases=[
  ["F1","Piloto — cidades menores","3 a 5 cidades turísticas menos frequentadas. Validar formato, material e custo. Começamos onde ninguém chega, não onde todos já estão."],
  ["F2","Circuitos regionais","Roteiros completos por vocação: águas, rios de temporada, chapadas, cidades históricas, polos de compras."],
  ["F3","Estado inteiro","Cidades-polo e capilaridade estadual, com equipe multidisciplinar formada para conduzir múltiplas frentes."],
  ["→","Horizonte: Ministério do Turismo","O circuito comprovado em Goiás como referência de política nacional de qualificação do pequeno empresário do turismo."],
];
let e8y=1.95, e8h=0.95;
fases.forEach((r,i)=>{ let y=e8y+i*(e8h+0.14);
  if(i===3){ s.addShape(p.shapes.RECTANGLE,{x:MX,y,w:W-2*MX,h:e8h,fill:{color:NAVY},shadow:mkShadow()}); }
  else { card(s,MX,y,W-2*MX,e8h); goldEdge(s,MX,y,e8h); }
  s.addText(r[0],{x:MX+0.3,y:y+0.12,w:0.9,h:0.71,fontFace:TITLE_F,fontSize:26,bold:true,color:i===3?GOLD:GOLD_DK,align:"center",valign:"middle",margin:0});
  s.addText(r[1],{x:MX+1.45,y:y+0.12,w:4.1,h:0.71,fontFace:TITLE_F,fontSize:15.5,bold:true,color:i===3?CREAM:NAVY,valign:"middle",margin:0});
  s.addText(r[2],{x:MX+5.75,y:y+0.12,w:W-2*MX-6.15,h:0.71,fontFace:BODY_F,fontSize:11,color:i===3?CREAM:BODY,valign:"middle",margin:0});
});
s.addText("Ninguém pula fase. O piloto comprova, o circuito escala. O ministério é consequência — não promessa.",
  {x:MX,y:6.35,w:W-2*MX,h:0.5,fontFace:TITLE_F,fontSize:15,italic:true,bold:true,color:NAVY,align:"center",valign:"middle",margin:0});
footer(s);

// ============ S9 — QUEM É A VERO ============
s=p.addSlide(); bg(s);
title(s,"Vero — Escola de Empresários","Quem conduz");
s.addText("A Vero é uma escola de formação e validação operacional de empresários. Não é curso motivacional, não é mentoria, não é autoajuda. É método: 4 níveis de maturidade, 4 pilares de gestão, material próprio construído para quem opera — não para quem assiste.",
  {x:MX,y:1.95,w:W-2*MX,h:0.95,fontFace:BODY_F,fontSize:14,color:BODY,margin:0});
let q9w=(W-2*MX-0.5)/2, q9y=3.15, q9h=2.7;
card(s,MX,q9y,q9w,q9h); goldEdge(s,MX,q9y,q9h);
s.addText("POSICIONAMENTO",{x:MX+0.4,y:q9y+0.32,w:q9w-0.7,h:0.3,fontFace:BODY_F,fontSize:10.5,bold:true,color:GOLD_DK,charSpacing:2,margin:0});
s.addText("“Uma escola para\nempresários de verdade.”",{x:MX+0.4,y:q9y+0.72,w:q9w-0.7,h:1.0,fontFace:TITLE_F,fontSize:19,bold:true,italic:true,color:NAVY,margin:0});
s.addText("Quem executa, permanece. O método cobra execução — do aluno e de quem ensina.",
  {x:MX+0.4,y:q9y+1.85,w:q9w-0.75,h:0.7,fontFace:BODY_F,fontSize:12,color:BODY,margin:0});
let q9x=MX+q9w+0.5;
card(s,q9x,q9y,q9w,q9h); goldEdge(s,q9x,q9y,q9h);
s.addText("CONDUÇÃO PRESENCIAL",{x:q9x+0.4,y:q9y+0.32,w:q9w-0.7,h:0.3,fontFace:BODY_F,fontSize:10.5,bold:true,color:GOLD_DK,charSpacing:2,margin:0});
s.addText("Lucas e Ernane",{x:q9x+0.4,y:q9y+0.72,w:q9w-0.7,h:0.55,fontFace:TITLE_F,fontSize:19,bold:true,color:NAVY,margin:0});
s.addText("Imersões conduzidas pelos sócios, com material didático próprio da escola nos pilares Financeiro, Vendas, Operação e Pessoas.",
  {x:q9x+0.4,y:q9y+1.35,w:q9w-0.75,h:1.1,fontFace:BODY_F,fontSize:12,color:BODY,margin:0});
footer(s);

// ============ S10 — FECHO (escuro) ============
s=p.addSlide();
s.background={color:NAVY2};
s.addShape(p.shapes.RECTANGLE,{x:0,y:0,w:W,h:0.14,fill:{color:GOLD}});
s.addText("PRÓXIMOS PASSOS",{x:MX,y:0.75,w:9,h:0.35,fontFace:BODY_F,fontSize:11,bold:true,color:GOLD,charSpacing:3,margin:0});
s.addText("Começar pequeno. Comprovar. Expandir.",{x:MX,y:1.15,w:11.5,h:0.85,fontFace:TITLE_F,fontSize:34,bold:true,color:"FFFFFF",margin:0});
const passos=[
  ["01","Definir a cidade-piloto","Junto com prefeitura ou gabinete parlamentar interessado."],
  ["02","Fechar data e mobilização","Sábado de imersão + convocação dos empresários locais via secretaria e associações."],
  ["03","Realizar, registrar, prestar contas","Imersão entregue, material na mão do empresário, relatório para o financiador."],
];
let s10y=2.45, s10h=1.0;
passos.forEach((r,i)=>{ let y=s10y+i*(s10h+0.18);
  s.addShape(p.shapes.RECTANGLE,{x:MX,y,w:W-2*MX,h:s10h,fill:{color:NAVY}});
  s.addShape(p.shapes.RECTANGLE,{x:MX,y,w:0.12,h:s10h,fill:{color:GOLD}});
  s.addText(r[0],{x:MX+0.35,y:y+0.14,w:0.85,h:0.72,fontFace:TITLE_F,fontSize:24,bold:true,color:GOLD,align:"center",valign:"middle",margin:0});
  s.addText(r[1],{x:MX+1.45,y:y+0.14,w:4.3,h:0.72,fontFace:TITLE_F,fontSize:16,bold:true,color:"FFFFFF",valign:"middle",margin:0});
  s.addText(r[2],{x:MX+5.95,y:y+0.14,w:W-2*MX-6.35,h:0.72,fontFace:BODY_F,fontSize:11.5,color:CREAM,valign:"middle",margin:0});
});
s.addImage({path:V_GOLD,x:MX,y:6.35,w:0.62,h:0.62*(357/414)});
s.addText("VERO — ESCOLA DE EMPRESÁRIOS  ·  GOIÁS  ·  2026",{x:MX+0.85,y:6.45,w:9,h:0.35,fontFace:BODY_F,fontSize:9.5,color:MUTE,charSpacing:2.5,valign:"middle",margin:0});

p.writeFile({fileName:"/Users/Lucas-Lenovo/Vero - Escola de Empresários/_estrategia/circuito-turismo-goias/deck/Circuito_Vero_Turismo_Goias.pptx"})
 .then(f=>console.log("OK:",f));
