// Deck — Imersão Método Vero · v5
// 62 slides · 5 módulos · notas do apresentador embutidas (as notas SÃO o roteiro).
// v5: redesenho pós-simulação de 100 empresários (ver SIMULACAO-100-EMPRESARIOS.md) —
// Vendas migrou pra tarde, Pessoas ganhou módulo próprio, exercícios ampliados,
// debrief por segmento substitui canvas de Vendas, trilha Gestão/Legado + 2 pendências novas.
// Princípio: o deck é guia, não cópia da apostila. Tela = frase-síntese/dado/comando.
// Identidade: caderno-marca-vero.html — tema claro (projetor), marinho comanda, dourado acentua.
// Grafismos do caderno: borda dourada em cartão · tile marinho c/ "V" · "V" marca d'água 5-8%
// sangrando na borda · divisória dourada curta · rótulos caps c/ tracking. Sem barras de
// largura total, sem linhas sob título, sem gradientes.

const pptxgen = require("/Users/Lucas-Lenovo/Projetos/Vero - Escola de Empresários/_imersoes/reforma-tributaria-corretores/node_modules/pptxgenjs");
const p = new pptxgen();
p.layout = "LAYOUT_WIDE"; // 13.3 x 7.5
p.author = "Vero — Escola de Empresários";
p.title = "Imersão Método Vero — v2";

// ---- Paleta (caderno de marca) ----
const NAVY="052B5A", NAVY2="192C4C", GOLD="DEBB5F", GOLD_DK="B08D2E", CREAM="F2E4B6";
const BG="FFFFFF", PANEL="F5F1E6", PANEL2="F2F4F7", BODY="3D4658", MUTE="8A91A0", LINE="E3DECF";
const RED="C0392B", REDBG="FBEDEA", GREEN="2E7D46", GREENBG="EAF3EC";
const TITLE_F="Georgia", BODY_F="Arial";
const W=13.3, H=7.5, MX=0.9;
const LOGOS="/Users/Lucas-Lenovo/Projetos/Vero - Escola de Empresários/_contexto/logos";
const V_NAVY=LOGOS+"/vero-v-navy-hd.png", V_GOLD=LOGOS+"/vero-v-gold-hd.png";
const V_RATIO=1985/2288; // h/w do símbolo (HD 2288px, borda anti-aliased)

const mkShadow=()=>({type:"outer",color:"5A5A5A",blur:7,offset:2,angle:135,opacity:0.18});
function bg(s){ s.background={color:BG}; }
function footer(s,n){
  s.addImage({path:V_NAVY,x:W-1.55,y:6.98,w:0.34,h:0.34*V_RATIO});
  s.addText("VERO",{x:W-1.15,y:6.96,w:0.95,h:0.3,fontFace:TITLE_F,fontSize:13,bold:true,color:NAVY,align:"left",valign:"middle",margin:0});
  if(n) s.addText(String(n).padStart(2,"0"),{x:MX,y:6.96,w:0.8,h:0.3,fontFace:BODY_F,fontSize:9,color:MUTE,charSpacing:2,align:"left",valign:"middle",margin:0});
}
function card(s,x,y,w,h,fill){ s.addShape(p.shapes.RECTANGLE,{x,y,w,h,fill:{color:fill||PANEL},line:{color:LINE,width:1},shadow:mkShadow()}); }
function goldEdge(s,x,y,h){ s.addShape(p.shapes.RECTANGLE,{x,y,w:0.12,h,fill:{color:GOLD}}); }
function navyTile(s,x,y,sz){ s.addShape(p.shapes.RECTANGLE,{x,y,w:sz,h:sz,fill:{color:NAVY}}); s.addImage({path:V_GOLD,x:x+sz*0.2,y:y+sz*0.22,w:sz*0.6,h:sz*0.6*V_RATIO}); }
// Divisória curta do caderno: traço dourado 18-25mm (~0.8in), nunca largura total
function divider(s,x,y){ s.addShape(p.shapes.RECTANGLE,{x,y,w:0.8,h:0.055,fill:{color:GOLD}}); }
// "V" marca d'água: 5-8% de opacidade, sangrando na borda, sempre ATRÁS do texto
function watermarkV(s,opts){ opts=opts||{};
  const w=opts.w||5.2, x=opts.x!==undefined?opts.x:(W-w*0.62), y=opts.y!==undefined?opts.y:(H-w*V_RATIO*0.72);
  s.addImage({path:opts.gold?V_GOLD:V_NAVY,x,y,w,h:w*V_RATIO,transparency:opts.t||93});
}
// Rótulo caps com tracking (padrão DM Mono caps → Arial caps no editável)
function tag(s,t,x,y,color,size){ s.addText(t.toUpperCase(),{x,y,w:10,h:0.32,fontFace:BODY_F,fontSize:size||10.5,color:color||GOLD_DK,charSpacing:3,bold:true,align:"left",margin:0}); }
function title(s,t,sub){ if(sub) tag(s,sub,MX,0.88); s.addText(t,{x:MX,y:1.18,w:W-2*MX,h:0.95,fontFace:TITLE_F,fontSize:30,bold:true,color:NAVY,align:"left",margin:0}); }

// ---- Trilha de módulos (rótulo + 5 pontos de progresso) ----
const MODULOS=["Abertura","O Método","Financeiro + Operação + Vendas","Pessoas","Fechamento"];
let MOD=0; // índice do módulo corrente (1-5)
function moduleBar(s){
  if(!MOD) return;
  tag(s,`Módulo ${MOD} · ${MODULOS[MOD-1]}`,MX,0.42,GOLD_DK,9.5);
  for(let i=0;i<5;i++){
    s.addShape(p.shapes.OVAL,{x:W-MX-1.5+i*0.28,y:0.5,w:0.13,h:0.13,fill:{color:i<MOD?GOLD:LINE}});
  }
}

let N=0;
function slide(notes,opts){ N++; const s=p.addSlide(); bg(s);
  if(notes) s.addNotes(`[Slide ${N} · Módulo ${MOD||"-"}]\n${notes}`);
  if(!(opts&&opts.noBar)) moduleBar(s);
  return s;
}

// ---- Arquétipo: CONCEITO — frase forte + aspa gigante + marca d'água ----
function quote(kicker, text, sub, notes, opts){
  opts=opts||{};
  const s=slide(notes);
  watermarkV(s,{w:5.6});
  // aspa decorativa gigante (Georgia, dourado claro, atrás do bloco de texto)
  if(!opts.noQuoteMark) s.addText("“",{x:MX-0.25,y:0.55,w:2.4,h:2.2,fontFace:TITLE_F,fontSize:150,bold:true,color:"EFE3C0",margin:0});
  if(kicker) tag(s,kicker,MX+1.7,1.5);
  goldEdge(s,MX,2.05,opts.edgeH||2.3);
  s.addText(text,{x:MX+0.4,y:2.0,w:11.2,h:opts.h||2.5,fontFace:TITLE_F,fontSize:opts.size||32,bold:true,color:opts.color||NAVY,margin:0});
  divider(s,MX+0.42,(opts.divY|| (2.0+(opts.h||2.5)+0.25)));
  if(sub) s.addText(sub,{x:MX+0.42,y:(opts.subY||5.0),w:10.6,h:0.9,fontFace:BODY_F,fontSize:15.5,italic:true,color:BODY,margin:0});
  footer(s,N);
  return s;
}

// ---- Arquétipo: NARRATIVA — citação em itálico + linha de personagem ----
function story(kicker, text, persona, notes, opts){
  opts=opts||{};
  const s=slide(notes);
  watermarkV(s,{w:6.0});
  s.addText("“",{x:MX-0.25,y:0.5,w:2.6,h:2.4,fontFace:TITLE_F,fontSize:170,bold:true,color:"EFE3C0",margin:0});
  if(kicker) tag(s,kicker,MX+1.85,1.45);
  goldEdge(s,MX,2.0,opts.edgeH||2.6);
  s.addText(text,{x:MX+0.4,y:1.95,w:11.2,h:opts.h||2.8,fontFace:TITLE_F,fontSize:opts.size||30,bold:true,italic:true,color:NAVY,margin:0});
  if(persona){
    divider(s,MX+0.42,opts.divY||5.15);
    s.addText(persona,{x:MX+0.42,y:(opts.divY||5.15)+0.15,w:10.5,h:0.45,fontFace:BODY_F,fontSize:13,color:MUTE,charSpacing:1,margin:0});
  }
  footer(s,N);
  return s;
}

// ---- Arquétipo: abertura de pilar — cartão marinho grande com "V" dourado ----
let PILAR_N=0;
function pilar(nome, pergunta, notes){
  PILAR_N++;
  const s=slide(notes);
  const x=MX-0.15, y=1.5, w=W-2*(MX-0.15), h=4.6;
  s.addShape(p.shapes.RECTANGLE,{x,y,w,h,fill:{color:NAVY},shadow:mkShadow()});
  s.addImage({path:V_GOLD,x:x+w-3.6,y:y+h-3.6*V_RATIO-0.05,w:3.6,h:3.6*V_RATIO,transparency:87});
  s.addShape(p.shapes.RECTANGLE,{x:x+0.55,y:y+0.55,w:0.8,h:0.055,fill:{color:GOLD}});
  s.addText(`PILAR ${String(PILAR_N).padStart(2,"0")} / 04`,{x:x+0.55,y:y+0.75,w:5,h:0.35,fontFace:BODY_F,fontSize:11,bold:true,color:GOLD,charSpacing:4,margin:0});
  s.addText(nome,{x:x+0.55,y:y+1.15,w:w-1.2,h:1.1,fontFace:TITLE_F,fontSize:48,bold:true,color:"FFFFFF",margin:0});
  s.addText(pergunta,{x:x+0.55,y:y+2.45,w:w-4.0,h:1.8,fontFace:TITLE_F,fontSize:25,italic:true,color:CREAM,margin:0});
  footer(s,N);
  return s;
}

// ---- Arquétipo: nível de maturidade (S13-16) — trilha de 4 tiles + painel "o que muda" ----
const NIVEIS=[["🌱","Raiz"],["🛤️","Trilha"],["🧠","Gestão"],["🏛️","Legado"]];
function nivel(idx, frase, muda, notes){
  const s=slide(notes);
  watermarkV(s,{w:5.2});
  // trilha dos 4 níveis — o ativo em marinho com borda dourada
  let tx=MX, ty=1.35, tsz=0.95;
  NIVEIS.forEach((nv,i)=>{ let x=tx+i*(tsz+0.35);
    const active=(i===idx);
    s.addShape(p.shapes.RECTANGLE,{x,y:ty,w:tsz,h:tsz,fill:{color:active?NAVY:PANEL},line:{color:active?GOLD:LINE,width:active?2:1}});
    s.addText(nv[0],{x,y:ty+0.08,w:tsz,h:0.5,fontSize:22,align:"center",margin:0});
    s.addText(nv[1],{x,y:ty+0.55,w:tsz,h:0.32,fontFace:BODY_F,fontSize:9,bold:true,color:active?CREAM:MUTE,align:"center",margin:0});
  });
  s.addText(NIVEIS[idx][1],{x:MX,y:2.7,w:8,h:1.0,fontFace:TITLE_F,fontSize:52,bold:true,color:NAVY,margin:0});
  goldEdge(s,MX,3.95,1.35);
  s.addText(frase,{x:MX+0.4,y:3.95,w:7.6,h:1.35,fontFace:TITLE_F,fontSize:23,bold:true,color:NAVY,valign:"middle",margin:0});
  // painel "o que muda"
  const cx=MX+8.6, cw=W-MX-(MX+8.6);
  card(s,cx,2.7,cw,2.6,PANEL); goldEdge(s,cx,2.7,2.6);
  s.addText("O QUE MUDA",{x:cx+0.3,y:2.95,w:cw-0.6,h:0.3,fontFace:BODY_F,fontSize:9.5,bold:true,color:GOLD_DK,charSpacing:2,margin:0});
  s.addText(muda,{x:cx+0.3,y:3.35,w:cw-0.6,h:1.7,fontFace:TITLE_F,fontSize:17,bold:true,italic:true,color:NAVY,margin:0});
  footer(s,N);
  return s;
}

// ---- Arquétipo: exercício — número dourado, comando em cartão, chips ----
function exercicio(num, nome, pagina, minutos, extra, notes){
  const s=slide(notes);
  watermarkV(s,{w:5.0});
  // tile dourado com o número
  s.addShape(p.shapes.RECTANGLE,{x:MX,y:1.3,w:1.15,h:1.15,fill:{color:GOLD},shadow:mkShadow()});
  s.addText(String(num),{x:MX,y:1.3,w:1.15,h:1.15,fontFace:TITLE_F,fontSize:44,bold:true,color:NAVY,align:"center",valign:"middle",margin:0});
  tag(s,`Exercício ${num}`,MX+1.45,1.42,GOLD_DK,10.5);
  s.addText(nome,{x:MX+1.45,y:1.7,w:9,h:0.7,fontFace:TITLE_F,fontSize:26,bold:true,color:NAVY,margin:0});
  // cartão do comando
  card(s,MX,2.85,W-2*MX,2.15,PANEL); goldEdge(s,MX,2.85,2.15);
  s.addText(`Abra a página ${pagina}.`,{x:MX+0.45,y:3.15,w:11,h:1.0,fontFace:TITLE_F,fontSize:40,bold:true,color:NAVY,margin:0});
  if(extra) s.addText(extra,{x:MX+0.45,y:4.2,w:10.8,h:0.7,fontFace:BODY_F,fontSize:13.5,italic:true,color:BODY,margin:0});
  // chips de condição
  const chips=[`${minutos} MIN`,"SOZINHO","NA APOSTILA","POR ESCRITO"];
  let chx=MX;
  chips.forEach(c=>{
    const cw2=0.42+c.length*0.115;
    s.addShape(p.shapes.RECTANGLE,{x:chx,y:5.35,w:cw2,h:0.46,fill:{color:NAVY}});
    s.addText(c,{x:chx,y:5.35,w:cw2,h:0.46,fontFace:BODY_F,fontSize:10.5,bold:true,color:CREAM,charSpacing:2,align:"center",valign:"middle",margin:0});
    chx+=cw2+0.25;
  });
  s.addText("Escreva. Não pense em voz alta — decida no papel.",{x:MX,y:6.15,w:W-2*MX,h:0.4,fontFace:BODY_F,fontSize:12.5,italic:true,color:MUTE,margin:0});
  footer(s,N);
  return s;
}

// ---- Arquétipo: slide estático durante exercício — relógio grande ----
function exercicioHold(pagina, minutos, frase, notes){
  const s=slide(notes);
  watermarkV(s,{w:5.6});
  s.addText(`${minutos}:00`,{x:MX-0.1,y:1.5,w:5.6,h:1.9,fontFace:BODY_F,fontSize:96,bold:true,color:NAVY,charSpacing:2,margin:0});
  tag(s,`minutos · página ${pagina}`,MX,3.45,GOLD_DK,11);
  divider(s,MX+0.02,3.95);
  s.addText(frase,{x:MX,y:4.25,w:10.8,h:1.6,fontFace:TITLE_F,fontSize:25,bold:true,italic:true,color:NAVY,margin:0});
  s.addText("EM EXERCÍCIO",{x:W-MX-2.4,y:1.55,w:2.4,h:0.5,fontFace:BODY_F,fontSize:11,bold:true,color:GOLD_DK,charSpacing:3,align:"right",margin:0});
  footer(s,N);
  return s;
}

// ---- Arquétipo: debrief — pergunta em cartão painel quente ----
function debrief(pergunta, notes, opts){
  opts=opts||{};
  const s=slide(notes);
  watermarkV(s,{w:5.4});
  s.addText("?",{x:W-4.1,y:0.7,w:3.4,h:3.6,fontFace:TITLE_F,fontSize:230,bold:true,color:"F3EAD2",align:"center",margin:0});
  tag(s,"Debrief — a sala fala",MX,1.5);
  card(s,MX,2.1,W-2*MX,2.9,PANEL); goldEdge(s,MX,2.1,2.9);
  s.addText(pergunta,{x:MX+0.5,y:2.35,w:W-2*MX-1.0,h:2.4,fontFace:TITLE_F,fontSize:opts.size||30,bold:true,color:NAVY,valign:"middle",margin:0});
  s.addText("2–3 respostas · sem debate · sem correção",{x:MX,y:5.35,w:10,h:0.4,fontFace:BODY_F,fontSize:12,italic:true,color:MUTE,margin:0});
  footer(s,N);
  return s;
}

// ---- Arquétipo: debrief por segmento — 3 lentes lado a lado, FALADO (sem canvas escrito) ----
// Substitui exercício escrito quando 1 história não traduz para os 3 segmentos (comércio · serviço · indústria).
function debriefSegmentado(base, comercio, servico, industria, notes){
  const s=slide(notes);
  watermarkV(s,{w:5.2});
  tag(s,"Debrief — 3 lentes, a sala fala",MX,1.15);
  s.addText(base,{x:MX,y:1.5,w:W-2*MX,h:0.8,fontFace:TITLE_F,fontSize:19,bold:true,italic:true,color:NAVY,margin:0});
  const lentes=[["COMÉRCIO",comercio],["SERVIÇO",servico],["INDÚSTRIA",industria]];
  let lw=(W-2*MX-1.0)/3, ly=2.55, lh=3.15;
  lentes.forEach((l,i)=>{ let x=MX+i*(lw+0.5);
    card(s,x,ly,lw,lh,PANEL); goldEdge(s,x,ly,lh);
    s.addText(l[0],{x:x+0.3,y:ly+0.3,w:lw-0.6,h:0.35,fontFace:BODY_F,fontSize:11,bold:true,color:GOLD_DK,charSpacing:2,margin:0});
    s.addText(l[1],{x:x+0.3,y:ly+0.75,w:lw-0.6,h:lh-1.05,fontFace:TITLE_F,fontSize:15.5,bold:true,italic:true,color:NAVY,margin:0});
  });
  s.addText("Fale — não escreva. 2-3 respostas por lente, sem debate.",{x:MX,y:ly+lh+0.25,w:W-2*MX,h:0.4,fontFace:BODY_F,fontSize:12,italic:true,color:MUTE,margin:0});
  footer(s,N);
  return s;
}

// ---- Arquétipo: placeholder de pendência ----
function pendente(oQue, dependeDe, notes){
  const s=slide(notes);
  card(s,MX,2.2,W-2*MX,3.1,REDBG); s.addShape(p.shapes.RECTANGLE,{x:MX,y:2.2,w:0.12,h:3.1,fill:{color:RED}});
  s.addText("[PENDENTE]",{x:MX+0.4,y:2.55,w:6,h:0.4,fontFace:BODY_F,fontSize:13,bold:true,color:RED,charSpacing:3,margin:0});
  s.addText(oQue,{x:MX+0.4,y:3.05,w:11,h:1.1,fontFace:TITLE_F,fontSize:26,bold:true,color:NAVY,margin:0});
  s.addText(`Depende de: ${dependeDe}`,{x:MX+0.4,y:4.35,w:11,h:0.6,fontFace:BODY_F,fontSize:14,italic:true,color:BODY,margin:0});
  footer(s,N);
  return s;
}

// ---- Narrativas completas (P1 da apostila) para as notas ----
const P1_RICARDO = `HISTÓRIA DO RICARDO (contar, não ler — apostila/financeiro/raiz/bloco-01/p1.md):
Ricardo tem uma gráfica há oito anos. Fatura entre R$ 80 mil e R$ 120 mil por mês, dependendo da temporada. No papel, parece que funciona. Na prática, todo mês é a mesma cena: ele olha para o extrato e pergunta pra si mesmo onde foi parar.
Não é que o dinheiro suma com farra. Ele não tem esse perfil. É que o dinheiro circula por tudo ao mesmo tempo — paga fornecedor, paga equipe, paga a parcela do equipamento, paga a conta de luz, cobre o adiantamento que ele precisou dar para fechar aquele pedido grande. Sai por todos os lados, e quando ele tenta localizar, já foi.
No fim do mês, sobrou R$ 4.200. Ou foi R$ 4.700 — ele não tem certeza, porque algumas coisas ainda estão para fechar. O que ele sabe é que faturou mais de R$ 90 mil e não consegue juntar o bastante para trocar um equipamento que está ficando para trás.
Quando alguém pergunta se o negócio está indo bem, Ricardo responde que sim. Porque vender, ele vende. O problema é que "vender bem" e "estar bem financeiramente" viraram dois mundos separados — e ele não sabe exatamente quando isso aconteceu.
O que está acontecendo não é descuido. É que sem saber o que entra, o que sai, o que é da empresa e o que é dele, qualquer número que aparece na conta parece tanto um sinal de saúde quanto uma coincidência.
FECHO: "Enquanto o dinheiro não tiver destino claro, o problema não é que ele some — é que você nunca vai saber se o que está sobrando é lucro ou só a sorte do mês."`;

const P1_MARCOS = `HISTÓRIA DO MARCOS (bloco-referência — apostila/financeiro/raiz/bloco-02/p1.md):
Marcos tem uma distribuidora há doze anos. Fatura bem. No mês em que faturou R$ 180 mil, a conta da empresa pagou: a parcela do carro que ele usa, a escola dos filhos, o plano de saúde da família, o cartão que ele não separou quando abriu o negócio, o empréstimo pessoal que contraiu quando a empresa apertou há três anos.
No fim do mês, sobrou R$ 3.200 na conta da empresa. Ele olhou, achou pouco, e não entendeu muito bem por quê.
No mês seguinte, faturou R$ 210 mil. No fim, tinha R$ 4.800. Um pouco melhor. Mas a sensação era a mesma: a empresa vendia, e ele continuava sem folga.
Em uma conversa com um cliente que também tinha negócio próprio, alguém perguntou: "Quanto você se paga todo mês?" Marcos começou a responder, travou. Pensou nos R$ 3.200, nos R$ 4.800. Pensou que esses valores não eram salário — eram o que sobrava depois de tudo. Ele não se pagava. Deixava sobrar o que sobrasse e chamava isso de retirada.
A empresa não estava sustentando ele mal. Ela estava sustentando a vida inteira dele — e ele nunca tinha colocado um preço nisso.
FECHO: "Enquanto a empresa pagar sua vida sem critério, você nunca vai saber se está rico ou se está apenas ocupado."`;

const P1_RODRIGO = `HISTÓRIA DO RODRIGO (apostila/operacao/raiz/bloco-01/p1.md):
Rodrigo tem uma empresa de 14 anos. Onze funcionários. Faturamento estável. Quando ele conta a história pra alguém de fora, parece que as coisas funcionam.
Na sexta à tarde, ele avisou a equipe que viajaria no fim de semana — aniversário da mãe, três dias fora. Deixou o WhatsApp silenciado, pediu pra não chamarem salvo emergência.
No sábado de manhã, a mensagem chegou: o fornecedor não tinha confirmado o lote da semana seguinte e ninguém sabia para quem ligar. À tarde, um cliente reclamou de um erro no pedido e a atendente não sabia se devia refazer sem cobrar. De noite, o operador de produção perguntou se podia adiantar um processo que normalmente precisava de aprovação.
Rodrigo respondeu tudo do celular, entre o jantar e a sobremesa.
Na segunda, quando voltou, duas situações tinham ficado travadas porque os funcionários preferiram esperar. Uma delas envolvia um cliente que não podia esperar — e foi embora.
Onze anos construindo, e a operação ainda precisava que ele estivesse por perto para não desandar. Não porque a equipe fosse ruim. Mas porque cada decisão de rotina — cada exceção, cada imprevisto, cada dúvida fora do script — tinha um único destino: ele.
FECHO: "Ele não está construindo um negócio. Ele está sendo o negócio — e enquanto for ele quem resolve, tudo que a empresa pode fazer é esperar ele estar disponível."`;

const P1_GUSTAVO = `HISTÓRIA DO GUSTAVO (apostila/vendas/raiz/bloco-01/p1.md):
Gustavo vende software de gestão para pequenas empresas. No mês passado, fechou 5 contratos. Todos vieram da mesma forma: ligou para antigos clientes, ouviu "ah, agora temos essa dor", marcou reunião, apresentou, negociou, fechou.
Abriu o funil ontem. 127 leads chegaram no mês passado de forma "orgânica" (site, campanhas antigas, indicação). Ele contatou 8. Fechou 2. Os 119 outros? Ninguém os contatou. Porque ELE não os contatou.
Tentou resolver isso uma vez. Pediu à equipe que entrasse em contato com os leads não tocados. Duas semanas depois: zero vendas daquele lote. Ele reclamou. Voltou a fazer pessoalmente. Fechou 3 em 10 dias. O funil voltou a funcionar.
Quando sai de férias, a empresa não vende. Quando volta, liga para 20 potenciais antigos. Fecha 4. Aquele mês deixava de ser prejuízo porque ele correu atrás.
FECHO: "Enquanto isso depender só de você, quando você parar, tudo para. E você vai achar que é culpa da equipe."`;

const P1_ANDRE = `HISTÓRIA DO ANDRÉ — versão curta, amostra de Gestão (apostila/operacao/gestao/bloco-14/p1.md):
André tem um problema que aparece toda quinta-feira. Faz dois anos. Não muda de forma — muda de nome.
Três semanas atrás ele tentou padronizar. Criou o procedimento, treinou a equipe. Na terceira semana, voltou ao padrão anterior — porque rotina tem mais força que treinamento quando ninguém acompanha.
Dois trimestres atrás ele pesquisou sistemas. O custo era alto. Ficou para o próximo trimestre.
Hoje André tem dois caminhos reais: AUTOMATIZAR (assumir que o processo tem dono, e o dono não é ele) ou ACEITAR (calcular quanto o erro custa por semana, incluir no operacional e parar de gastar energia — como escolha explícita, com nome).
Os dois caminhos são válidos. O que não funciona é o que André está fazendo: não escolheu nenhum. Continua pesquisando sistema sem comprar, tentando padrão sem sustentar, absorvendo o custo sem nomeá-lo.
FUNÇÃO DESTE SLIDE: mostrar que o método vai fundo — na Gestão o problema não é começar, é decidir o que largar. A Raiz de hoje é o primeiro degrau.`;

const P1_EDUARDO = `HISTÓRIA DO EDUARDO (apostila/pessoas/raiz/bloco-01/p1.md):
Eduardo tem uma loja de materiais de construção há nove anos. Seis funcionários, freguesia fixa, movimento forte.
Há um ano contratou o Robson pro balcão. No segundo mês, Eduardo reparou: Robson chegava dez, quinze minutos atrasado quase todo dia. Comentou uma vez, no corredor, sem dar muita importância. "Foi só hoje, patrão." Ficou por isso. O atraso continuou. Eduardo parou de comentar — sempre tinha uma coisa mais urgente.
Seis meses depois, contratou a Josiane pro caixa. Na terceira semana, ela também começou a chegar atrasada. Dessa vez Eduardo chamou atenção sério. A resposta veio na hora: "Mas o Robson chega atrasado todo santo dia e ninguém fala nada com ele."
Foi checar. Era verdade. Contou: DEZESSETE atrasos do Robson só naquele mês. Nenhum descontado, nenhum registrado, nenhuma conversa depois daquela primeira vez — há quase um ano.
Chamou o Robson pra acertar. Robson não entendeu a cobrança: "Sempre foi assim, patrão. Ninguém nunca falou nada sério comigo." E de fato não tinha.
Eduardo passou a noite tentando lembrar o dia em que soltou a corda. Não achou um dia. Foram onze meses de silêncio virando combinado — um combinado que ele nunca assinou, mas que já valia mais do que qualquer horário escrito na porta dos fundos.
FECHO: "Enquanto o que você deixa passar for mais forte do que o que você diz que espera, cada pessoa nova vai aprender a regra certa: a que ninguém escreve, mas todo mundo segue."`;

// ============================================================
// MÓDULO 1 — Abertura + Provocação (9h00–10h30) · slides 1–10
// ============================================================
MOD=1;

// S1 — Capa (tile marinho permitido em capa)
let s=slide(`Boas-vindas. Regras do dia: celular no silencioso, pausas marcadas, apostila sempre à mão — ela será usada o dia inteiro. Apresentar a agenda em 1 minuto (manhã: diagnóstico; tarde: os 4 pilares; fim: plano de execução).`,{noBar:true});
watermarkV(s,{w:7.5,x:W-4.6,y:2.1,t:94});
navyTile(s, MX, 0.6, 1.25);
s.addText("vero",{x:MX+1.5,y:0.62,w:4,h:0.7,fontFace:TITLE_F,fontSize:34,italic:true,bold:true,color:NAVY,margin:0});
s.addText("ESCOLA DE EMPRESÁRIOS",{x:MX+1.55,y:1.35,w:8,h:0.3,fontFace:BODY_F,fontSize:9,color:GOLD_DK,charSpacing:2.5,bold:true,margin:0});
goldEdge(s, MX, 2.75, 2.35);
s.addText("Imersão",{x:MX+0.35,y:2.62,w:11,h:1.0,fontFace:TITLE_F,fontSize:48,bold:true,color:NAVY,margin:0});
s.addText([{text:"Método ",options:{color:NAVY}},{text:"Vero",options:{color:GOLD_DK}}],{x:MX+0.35,y:3.68,w:11,h:0.95,fontFace:TITLE_F,fontSize:48,bold:true,margin:0});
divider(s,MX+0.37,4.95);
s.addText("Um dia para descobrir onde sua empresa está — e o que essa fase cobra de você.",{x:MX+0.35,y:5.15,w:9.6,h:0.6,fontFace:BODY_F,fontSize:16,italic:true,color:BODY,margin:0});
s.addText("Uma escola para empresários de verdade.",{x:MX+0.35,y:6.5,w:9,h:0.4,fontFace:BODY_F,fontSize:11.5,color:MUTE,charSpacing:1.5,margin:0});
footer(s,N);

// S2
quote(null,"Vero. Do italiano: verdadeiro.",null,
`Silêncio proposital antes do próximo slide. Deixar a palavra assentar.`,{size:40,edgeH:1.4,h:1.4,divY:3.7});

// S3
quote(null,"Uma escola para empresários de verdade.",
"Formação de verdade acontece na prática — execução, mão na massa, exemplos reais.",
`Assinatura-mestra (D-009). Desenvolver: aqui não se aprende assistindo — se aprende executando. O que este dia entrega é real: diagnóstico, método e trabalho de verdade sobre a SUA empresa.`,{size:36,edgeH:1.8,h:1.8,divY:4.15,subY:4.45});

// S4 — Quem conduz
s=slide(`Bios curtas — 1 minuto cada, sem currículo longo. Trajetória: Proativo (consultoria hands-on) → Vero (escola). "A gente viu de perto, empresa por empresa, o que separa quem se sustenta de quem improvisa. A Vero existe pra transformar isso em formação."`);
watermarkV(s,{w:5.2});
title(s,"Quem conduz hoje","Lucas · Ernane");
const conduz=[
  ["Lucas Borges","SÓCIO CONDUTOR · COAUTOR","Engenheiro eletricista e empresário. Coautor do Método Vero — lê cada conteúdo como o empresário que vai aplicar."],
  ["Ernane Coelho","SÓCIO CONDUTOR · CONTABILIDADE","Bacharel em Matemática e em Ciências Contábeis. Professor e empresário. Traduz imposto e número em decisão clara."],
];
let kw=(W-2*MX-0.5)/2, ky=2.45, kh=3.6;
conduz.forEach((c,i)=>{ let x=MX+i*(kw+0.5);
  card(s,x,ky,kw,kh); goldEdge(s,x,ky,kh);
  navyTile(s,x+kw-1.15,ky+0.4,0.75);
  s.addText(c[0],{x:x+0.4,y:ky+0.45,w:kw-1.7,h:0.6,fontFace:TITLE_F,fontSize:24,bold:true,color:NAVY,margin:0});
  s.addText(c[1],{x:x+0.4,y:ky+1.15,w:kw-0.8,h:0.35,fontFace:BODY_F,fontSize:10.5,bold:true,color:GOLD_DK,charSpacing:1.5,margin:0});
  divider(s,x+0.42,ky+1.65);
  s.addText(c[2],{x:x+0.4,y:ky+1.9,w:kw-0.85,h:1.6,fontFace:BODY_F,fontSize:13.5,color:BODY,margin:0});
});
footer(s,N);

// S5 — o que NÃO é / o que É (par com S6)
s=slide(`Quebra de expectativa, tom do dia. Ninguém sai daqui motivado — sai sabendo onde está. Motivação passa; diagnóstico fica. Sem promessa, sem fórmula, sem "você consegue".`);
watermarkV(s,{w:5.2});
tag(s,"O contrato do dia",MX,1.4);
const naoE=["Curso","Mentoria","Palestra motivacional"];
let nw2=(W-2*MX-1.0)/3, ny2=2.3, nh2=2.6;
naoE.forEach((c,i)=>{ let x=MX+i*(nw2+0.5);
  card(s,x,ny2,nw2,nh2,PANEL2);
  s.addText("NÃO É",{x:x+0.3,y:ny2+0.35,w:nw2-0.6,h:0.3,fontFace:BODY_F,fontSize:10,bold:true,color:RED,charSpacing:2.5,margin:0});
  s.addText(c,{x:x+0.3,y:ny2+0.8,w:nw2-0.6,h:1.4,fontFace:TITLE_F,fontSize:24,bold:true,color:MUTE,strike:false,margin:0});
});
s.addText("Motivação passa. Diagnóstico fica.",{x:MX,y:5.45,w:W-2*MX,h:0.6,fontFace:TITLE_F,fontSize:22,bold:true,italic:true,color:NAVY,margin:0});
footer(s,N);

// S6
quote(null,"Isto é: um diagnóstico. E o começo de um método.",
"Você sai daqui sabendo onde sua empresa está — e o que essa fase cobra de você.",
`O contrato do dia. Combinar com a sala: vamos trabalhar de verdade — apostila na mão, caneta na mão. Quem veio assistir, veio ao lugar errado.`,{size:34,edgeH:1.8,h:1.8,divY:4.15,subY:4.45});

// S7 — NARRATIVA Ricardo
story("A primeira história",
"Faturou R$ 90 mil. Sobrou R$ 4.200. Ou R$ 4.700 — ele não tem certeza.",
"Ricardo · gráfica · 8 anos de empresa",
P1_RICARDO+`\n\nCONDUÇÃO: contar a história inteira ANTES de qualquer conceito. Não explicar. Deixar a sala reconhecer.`,
{size:30,edgeH:2.5,h:2.7,divY:5.0});

// S8
quote(null,"Sem critério, qualquer decisão é um chute com aparência de critério.",null,
`Fechamento da narrativa do Ricardo. Nomear o problema: isso não é descuido, não é falta de esforço — é improviso. O Ricardo trabalha muito. E decide no escuro.`,{size:32,edgeH:2.0,h:2.1,divY:4.4});

// S9
quote(null,"Empresa sustentada por heroísmo não é empresa madura.",null,
`Frase-assinatura Vero. Ponte: "Antes de falar de método, quero ouvir vocês." Preparar a pergunta do próximo slide.`,{size:32,edgeH:1.7,h:1.8,divY:4.1});

// S10
debrief("O que na sua empresa só funciona porque você está lá?",
`Aquecimento verbal — 2 ou 3 respostas, sem escrever ainda. Não corrigir nenhuma resposta; só recolher. Fechar: "Guardem essa resposta. Ela volta à tarde." → PAUSA (10h30–10h45).`,{size:30});

// ============================================================
// MÓDULO 2 — O Método + Diagnóstico (10h45–12h30) · slides 11–24
// ============================================================
MOD=2;

// S11
quote(null,"Existe um jeito de parar de improvisar. Não é dica. É método.",null,
`Ponte pós-pausa. Reforçar: método não é fórmula de crescimento — é critério de operação.`,{size:32,edgeH:1.9,h:2.0,divY:4.3});

// S12 — Os 4 níveis (visão geral)
s=slide(`Visão geral em 1 minuto — os detalhes vêm nos próximos 4 slides, um nível por vez. Frase-chave: "Todo empresário está em algum destes quatro lugares. Nenhum é melhor que o outro."`);
watermarkV(s,{w:5.2});
title(s,"Os 4 níveis de maturidade","O Método Vero");
const niveisTxt=[["🌱","Raiz","O empresário para de se perder"],["🛤️","Trilha","Para de recomeçar"],["🧠","Gestão","Para de acumular"],["🏛️","Legado","Para de ser necessário"]];
let nw=(W-2*MX-1.5)/4, ny=2.5, nh=3.4;
niveisTxt.forEach((c,i)=>{ let x=MX+i*(nw+0.5);
  card(s,x,ny,nw,nh); goldEdge(s,x,ny,nh);
  s.addText(String(i+1).padStart(2,"0"),{x:x+0.28,y:ny+0.3,w:1.4,h:0.4,fontFace:BODY_F,fontSize:12,bold:true,color:GOLD_DK,charSpacing:2,margin:0});
  s.addText(c[0],{x:x+0.24,y:ny+0.75,w:1.0,h:0.8,fontSize:34,margin:0});
  s.addText(c[1],{x:x+0.28,y:ny+1.65,w:nw-0.5,h:0.6,fontFace:TITLE_F,fontSize:22,bold:true,color:NAVY,margin:0});
  divider(s,x+0.3,ny+2.3);
  s.addText(c[2],{x:x+0.28,y:ny+2.45,w:nw-0.5,h:0.9,fontFace:BODY_F,fontSize:12,color:BODY,margin:0});
});
footer(s,N);

// S13–S16 — um nível por vez
nivel(0,"O problema não é esforço. É previsibilidade.","O empresário para de se perder.",
`Raiz: quem está aqui trabalha MUITO — o esforço não é o problema. O que falta é saber o que entra, o que sai, o que depende de quem. É a fase do Ricardo. Sem vergonha: é onde a maioria está.`);

nivel(1,"O problema não é ignorância. É inconsistência.","O empresário para de recomeçar.",
`Trilha: o empresário já sabe o que fazer — mas não sustenta. Começa o controle, para. Começa o processo, abandona. A Trilha instala o que se repete.`);

nivel(2,"O problema não é execução. É excesso.","O empresário para de acumular.",
`Gestão: aqui a empresa funciona — e por isso acumula: projetos, produtos, frentes, custos. O problema muda de natureza: não é fazer, é escolher o que largar. Renúncia.`);

nivel(3,"O problema não é controle. É dependência invisível.","O empresário para de ser necessário.",
`Legado: a pergunta final — a empresa existe sem você? Dependência invisível: tudo parece funcionar até o dono se afastar. Empresa madura se sustenta sem heroísmo.`);

// S17
quote(null,"Nenhuma fase é melhor que outra. Cada fase cobra um preço diferente.",null,
`Anti-ranking. Tirar a vergonha de estar na Raiz e a arrogância de se declarar Legado. A pergunta não é "em qual fase eu queria estar" — é "qual preço estou pagando sem saber".`,{size:32,edgeH:2.0,h:2.1,divY:4.4});

// S18 — Os 4 pilares
s=slide(`Todo negócio se sustenta — ou vaza — por estes quatro. Um minuto por pilar, sem aprofundar: a tarde inteira é sobre eles. Ordem de apresentação = ordem da tarde.`);
watermarkV(s,{w:5.2});
title(s,"Os 4 pilares","Onde a maturidade se comprova");
const pilares=[["01","Financeiro","O dinheiro tem destino ou tem sorte?"],["02","Vendas","A venda acontece sem você?"],["03","Operação","A entrega depende de quem?"],["04","Pessoas","O sistema sustenta o comportamento?"]];
let pw2=(W-2*MX-0.5)/2, ph2=1.7, py2=2.35;
pilares.forEach((c,i)=>{ let col=i%2,row=Math.floor(i/2); let x=MX+col*(pw2+0.5),y=py2+row*(ph2+0.3);
  card(s,x,y,pw2,ph2); goldEdge(s,x,y,ph2);
  s.addText(c[0],{x:x+0.35,y:y+0.3,w:1.0,h:1.1,fontFace:TITLE_F,fontSize:36,bold:true,color:"E9DDBA",margin:0});
  s.addText(c[1],{x:x+1.35,y:y+0.28,w:pw2-1.7,h:0.55,fontFace:TITLE_F,fontSize:21,bold:true,color:NAVY,margin:0});
  s.addText(c[2],{x:x+1.35,y:y+0.9,w:pw2-1.7,h:0.6,fontFace:BODY_F,fontSize:13,italic:true,color:BODY,margin:0});
});
footer(s,N);

// S19 — O Mapa Vero
s=slide(`ÚNICO SLIDE DENSO DO DECK — é o mapa do método. Explicar a leitura: cada LINHA é um nível de maturidade, cada COLUNA é um pilar. A mesma empresa pode estar em fases diferentes por pilar — e quase sempre está. É exatamente isso que o diagnóstico vai mostrar.`);
title(s,"O Mapa Vero","4 níveis × 4 pilares");
const rows=[
  ["🌱 Raiz","Dinheiro some sem explicação","Venda depende do dono","Operação depende do dono","Contratação por desespero"],
  ["🛤️ Trilha","Fluxo que se repete","Processo que se repete","Padrão mínimo","Papéis claros"],
  ["🧠 Gestão","Dinheiro decide projeto","Onde competir","O que largar","Formar líderes"],
  ["🏛️ Legado","Governança financeira","Venda institucional","Processos absorvem erro","Cultura sem fundador"],
];
const colNames=["Financeiro","Vendas","Operação","Pessoas"];
let mx0=MX, my0=2.25, cw=(W-2*MX-1.6)/4, ch=0.88, lw=1.6;
colNames.forEach((c,j)=>{
  s.addShape(p.shapes.RECTANGLE,{x:mx0+lw+j*cw,y:my0,w:cw-0.06,h:0.5,fill:{color:NAVY}});
  s.addText(c,{x:mx0+lw+j*cw,y:my0,w:cw-0.06,h:0.5,fontFace:BODY_F,fontSize:12,bold:true,color:CREAM,align:"center",valign:"middle",margin:0});
});
rows.forEach((r,i)=>{ let y=my0+0.56+i*(ch+0.06);
  s.addShape(p.shapes.RECTANGLE,{x:mx0,y,w:lw-0.06,h:ch,fill:{color:PANEL}});
  s.addShape(p.shapes.RECTANGLE,{x:mx0,y,w:0.07,h:ch,fill:{color:GOLD}});
  s.addText(r[0],{x:mx0+0.16,y,w:lw-0.26,h:ch,fontFace:BODY_F,fontSize:11.5,bold:true,color:NAVY,valign:"middle",margin:0});
  r.slice(1).forEach((cell,j)=>{
    s.addShape(p.shapes.RECTANGLE,{x:mx0+lw+j*cw,y,w:cw-0.06,h:ch,fill:{color:"FBFAF6"},line:{color:LINE,width:0.75}});
    s.addText(cell,{x:mx0+lw+j*cw+0.1,y,w:cw-0.26,h:ch,fontFace:BODY_F,fontSize:10,color:BODY,valign:"middle",margin:0});
  });
});
s.addText("A mesma empresa quase nunca está na mesma fase nos 4 pilares.",{x:MX,y:6.62,w:W-2*MX,h:0.35,fontFace:BODY_F,fontSize:12.5,italic:true,color:GOLD_DK,align:"center",margin:0});
footer(s,N);

// S20 — Diagnóstico → Execução → Comprovação
s=slide(`A lógica da escola — SEM oferta ainda. Só mostrar que o mapa se percorre executando, não assistindo. A oferta vem no fim do dia; agora é só a mecânica.`);
watermarkV(s,{w:5.2});
tag(s,"Como se percorre o mapa",MX,1.5);
const etp=["Diagnóstico","Execução","Comprovação"];
let ew=(W-2*MX-2.4)/3, ey2=2.6, eh2=2.0;
etp.forEach((c,i)=>{ let x=MX+i*(ew+1.2);
  card(s,x,ey2,ew,eh2,i===2?GREENBG:PANEL); goldEdge(s,x,ey2,eh2);
  s.addText(String(i+1).padStart(2,"0"),{x:x+0.3,y:ey2+0.3,w:2,h:0.4,fontFace:BODY_F,fontSize:12,bold:true,color:i===2?GREEN:GOLD_DK,charSpacing:2,margin:0});
  s.addText(c,{x:x+0.3,y:ey2+0.75,w:ew-0.6,h:0.9,fontFace:TITLE_F,fontSize:23,bold:true,color:NAVY,valign:"middle",margin:0});
  if(i<2) s.addText("→",{x:x+ew+0.15,y:ey2+0.55,w:0.9,h:0.9,fontFace:TITLE_F,fontSize:38,bold:true,color:GOLD_DK,align:"center",margin:0});
});
s.addText("Sem pular etapa. Sem comprar atalho.",{x:MX,y:5.15,w:W-2*MX,h:0.6,fontFace:TITLE_F,fontSize:22,bold:true,italic:true,color:NAVY,margin:0});
footer(s,N);

// S21 — EXERCÍCIO 1
exercicio(1,"Diagnóstico de Fase","[X]",15,
"Marque, em cada pilar, a fase em que sua empresa ESTÁ. Não a fase em que você queria que ela estivesse.",
`Canvas Diagnóstico de Fase (Íris — entregável #5). Explicar o preenchimento em 1 minuto ANTES de liberar. Avisar: ninguém entrega, ninguém corrige — o diagnóstico é do empresário, não nosso.`);

// S22 — hold
exercicioHold("[X]",15,"Marque onde você ESTÁ — não onde queria estar.",
`Slide fica parado durante o exercício. Condutores circulam pela sala. Não resolver dúvida de conteúdo — só de preenchimento. Anotar mentalmente 2-3 casos para o debrief.`);

// S23
debrief("Quem se encontrou na Raiz em pelo menos um pilar?",
`Mãos levantadas — leitura da sala. 2-3 falas voluntárias. Validar sem consolar: "Estar na Raiz não é atraso. É ponto de partida com nome." Se alguém se declarar Legado em tudo, não confrontar — plantar: "A tarde testa isso."`);

// S24
quote(null,"Agora você sabe onde está. À tarde: o que cada fase cobra de você.",null,
`Fechamento da manhã + logística do almoço (12h30–14h00, voltar pontual). Pedir que levem a apostila — o diagnóstico marcado nela volta a ser usado.`,{size:32,edgeH:2.0,h:2.1,divY:4.4});

// ============================================================
// MÓDULO 3 — Financeiro + Operação (14h00–15h45) · slides 25–38
// ============================================================
MOD=3;

// S25
pilar("Financeiro","Dinheiro entra. E some.",
`Abertura da tarde. Energia de recomeço pós-almoço: retomar o diagnóstico da manhã ("quem marcou Raiz no Financeiro?"). Este pilar vem primeiro porque sem ele nenhum outro se enxerga.`);

// S26 — NARRATIVA Marcos
story("A história que define este pilar",
"Quanto você ganha? Não a empresa — você.",
"Marcos · distribuidora · 12 anos de empresa",
P1_MARCOS+`\n\nCONDUÇÃO: esta é a pergunta que trava todo mundo. Fazer a pergunta pra sala ANTES de contar a história — deixar o silêncio acontecer — e então contar o Marcos.`,
{size:36,edgeH:2.0,h:2.1,divY:4.5});

// S27 — beat com números grandes
s=slide(`Continuação da história: o momento em que o cliente pergunta "quanto você se paga?" e o Marcos trava. A empresa sustentava a vida inteira dele — e ele nunca tinha colocado preço nisso.`);
watermarkV(s,{w:5.4});
let bw=(W-2*MX-0.5)/2, by=1.7, bh=2.9;
card(s,MX,by,bw,bh,PANEL); goldEdge(s,MX,by,bh);
s.addText("FATUROU",{x:MX+0.4,y:by+0.4,w:bw-0.8,h:0.35,fontFace:BODY_F,fontSize:11,bold:true,color:GOLD_DK,charSpacing:2.5,margin:0});
s.addText("R$ 180 mil",{x:MX+0.4,y:by+0.85,w:bw-0.8,h:1.1,fontFace:TITLE_F,fontSize:54,bold:true,color:NAVY,margin:0});
s.addText("no mês",{x:MX+0.4,y:by+2.1,w:bw-0.8,h:0.4,fontFace:BODY_F,fontSize:13,italic:true,color:MUTE,margin:0});
let b2x=MX+bw+0.5;
card(s,b2x,by,bw,bh,REDBG); s.addShape(p.shapes.RECTANGLE,{x:b2x,y:by,w:0.12,h:bh,fill:{color:RED}});
s.addText("SOBROU",{x:b2x+0.4,y:by+0.4,w:bw-0.8,h:0.35,fontFace:BODY_F,fontSize:11,bold:true,color:RED,charSpacing:2.5,margin:0});
s.addText("R$ 3.200",{x:b2x+0.4,y:by+0.85,w:bw-0.8,h:1.1,fontFace:TITLE_F,fontSize:54,bold:true,color:RED,margin:0});
s.addText("na conta da empresa",{x:b2x+0.4,y:by+2.1,w:bw-0.8,h:0.4,fontFace:BODY_F,fontSize:13,italic:true,color:MUTE,margin:0});
divider(s,MX+0.02,5.05);
s.addText("Ele não se pagava — deixava sobrar.",{x:MX,y:5.3,w:W-2*MX,h:0.8,fontFace:TITLE_F,fontSize:28,bold:true,italic:true,color:NAVY,margin:0});
footer(s,N);

// S28
quote(null,"Quem não sabe quanto ganha não está construindo riqueza. Está administrando a própria dependência.",null,
`Fechamento do bloco Financeiro. Deixar claro: não é sobre ganhar pouco — é sobre não saber. O exercício a seguir coloca número nisso.`,{size:29,edgeH:2.3,h:2.5,divY:4.75});

// S29 — EXERCÍCIO 2
exercicio(2,"Financeiro","[Y]",18,
"O canvas separa: o que a empresa paga da SUA vida · quanto você se paga · o que sobra de verdade.",
`Canvas do bloco Financeiro Raiz 02 (P2) adaptado na Apostila da Imersão. Instruir: número real, não número redondo. Quem não souber, estima — a estimativa já é o diagnóstico. 18 min (ampliado — é o exercício mais citado como transformador; não apressar).`);

// S30 — hold
exercicioHold("[Y]",18,"Se travar na pergunta do pró-labore — é exatamente aí que o exercício está funcionando.",
`Circular. Provocar individualmente quem parou no campo do pró-labore: "Esse branco aí é o exercício funcionando."`);

// S31
debrief("O que esse número que você escreveu muda?",
`2-3 falas. Não aconselhar caso a caso — apontar o padrão: quem separou empresa e vida enxerga; quem mistura, opera no escuro. Ponte: "Dinheiro é o primeiro vazamento. O segundo é a operação."`);

// S32
pilar("Operação","Quando você sai, o que para?",
`Abertura do pilar. Retomar a resposta do slide 10 (manhã): "Lembra do que você respondeu de manhã — o que só funciona porque você está lá? Agora é a hora dessa resposta."`);

// S33 — NARRATIVA Rodrigo
story("A segunda história",
"Três dias fora. A operação ligou o fim de semana inteiro. Na segunda, um cliente tinha ido embora.",
"Rodrigo · 14 anos de empresa · 11 funcionários",
P1_RODRIGO+`\n\nCONDUÇÃO: contar devagar a sequência do fim de semana (sábado manhã → tarde → noite). A sala vai rir de reconhecimento. Deixar rir — e então fechar com a segunda-feira.`,
{size:28,edgeH:2.6,h:2.8,divY:5.1});

// S34 — beat
quote(null,"Ele não pode adoecer.",null,
`O beat mais duro do dia. O preço real não é o fim de semana perdido: é não poder se afastar NUNCA — não pode renegociar com calma, não pode avaliar expansão, não pode parar. Pausar depois desta frase.`,{size:46,edgeH:1.4,h:1.4,divY:3.7});

// S35
quote(null,"Ele não está construindo um negócio. Ele está sendo o negócio.",null,
`Fechamento do bloco Operação. Conectar: dependência do dono não é dedicação — é estrutura que nunca foi montada sem ele no centro.`,{size:32,edgeH:2.0,h:2.1,divY:4.4});

// S36 — EXERCÍCIO 3
exercicio(3,"Operação","[Z]",18,
"O canvas mapeia: quais decisões só você toma · o que trava quando você some · onde está o improviso diário.",
`Canvas do bloco Operação Raiz 01 (P2) adaptado. Instruir: listar decisões REAIS da última semana, não categorias abstratas. 18 min (ampliado).`);

// S37 — hold
exercicioHold("[Z]",18,"Liste as decisões da última semana que passaram por você — todas.",
`Circular. Quem terminar rápido provavelmente listou pouco: provocar com "e as exceções? e as aprovações de WhatsApp?"`);

// S38
debrief("Quantas decisões da sua lista podiam ter regra — e não têm?",
`2-3 falas. Ponte para Vendas (mesmo módulo, sem pausa ainda): "Financeiro mostrou o vazamento do dinheiro. Operação, o vazamento do SEU tempo. Falta um: o vazamento da receita — o que só vende porque você corre atrás."`);

// S39 — VENDAS entra ainda no Módulo 3 (redesenho pós-simulação: Vendas migrado pra antes das 16h,
// junto com Financeiro/Operação — evita a fadiga da tarde tardia. Ver SIMULACAO-100-EMPRESARIOS.md.)
pilar("Vendas","Se você não ligar pessoalmente, quantas vendas fecham sozinhas?",
`Terceiro pilar da tarde, ainda sem pausa. Pergunta direta pra sala antes da história — respostas curtas, sem debate.`);

// S40 — NARRATIVA Gustavo — números grandes
s=slide(P1_GUSTAVO+`\n\nCONDUÇÃO: os números carregam a história — falar devagar: cento e vinte e sete… oito… dois. O detalhe da equipe que tentou e não vendeu é o espelho mais cruel: ele reclamou da equipe, mas o processo era ele.`);
watermarkV(s,{w:5.4});
tag(s,"A terceira história",MX,1.35);
const funil=[["127","leads no mês",NAVY,PANEL],["8","ele contatou",GOLD_DK,PANEL],["2","fechou",GOLD_DK,PANEL],["119","ninguém ligou",RED,REDBG]];
let fw=(W-2*MX-1.5)/4, fy=1.95, fh=2.9;
funil.forEach((c,i)=>{ let x=MX+i*(fw+0.5);
  card(s,x,fy,fw,fh,c[3]);
  s.addText(c[0],{x:x+0.25,y:fy+0.45,w:fw-0.5,h:1.3,fontFace:TITLE_F,fontSize:58,bold:true,color:c[2],align:"center",margin:0});
  divider(s,x+fw/2-0.4,fy+1.95);
  s.addText(c[1],{x:x+0.25,y:fy+2.1,w:fw-0.5,h:0.5,fontFace:BODY_F,fontSize:13,italic:true,color:BODY,align:"center",margin:0});
});
divider(s,MX+0.02,5.3);
s.addText("Gustavo · software de gestão — a venda era ele.",{x:MX,y:5.5,w:W-2*MX,h:0.7,fontFace:TITLE_F,fontSize:24,bold:true,italic:true,color:NAVY,margin:0});
footer(s,N);

// S41
quote(null,"Quando você parar, tudo para. E você vai achar que é culpa da equipe.",null,
`Fechamento do bloco Vendas. Conectar com Operação: é a MESMA dependência, agora na receita. Venda que depende do dono não é comercial — é heroísmo com CNPJ.`,{size:31,edgeH:2.1,h:2.3,divY:4.6});

// S42 — DEBRIEF SEGMENTADO (substitui exercício escrito — redesenho pós-simulação)
// Gustavo é serviço (software); a simulação mostrou que comércio e indústria tiveram que
// "traduzir na marra". Em vez de forçar 1 canvas único, nomeamos a tradução ao vivo, falada.
debriefSegmentado(
  "Gustavo é serviço. O mesmo buraco existe em qualquer segmento — só muda de nome.",
  "Quantas vendas do mês vieram de cliente que voltou sozinho — sem você ligar, sem promoção?",
  "Quantos contratos recorrentes existem só porque um dia VOCÊ ligou pessoalmente — e nunca mais precisou de novo?",
  "Quantos pedidos grandes do ano passaram pela sua palavra pessoal com o comprador — não pelo catálogo, não pelo representante?",
  `Sem canvas escrito aqui — módulo redesenhado após simulação (exemplo único de Vendas não traduzia bem pra comércio/indústria). Pedir 2-3 respostas FALADAS por lente. Ponte pro fechamento do bloco: "Financeiro, Operação, Vendas — três vazamentos, uma raiz: você no centro de tudo. Falta um pilar. E ele não é sobre dinheiro nem processo — é sobre gente." → PAUSA (horário local do dia, ver PLANO.md).`
);

// ============================================================
// MÓDULO 4 — Pessoas (pós-pausa — redesenho: módulo só com este pilar, sem fadiga da tarde)
// ============================================================
MOD=4;

// S43
pilar("Pessoas","O comportamento que você reclama é o comportamento que o seu sistema permite.",
`Abertura pós-pausa — módulo dedicado só a este pilar (redesenho: dá o espaço que a simulação mostrou faltar no fim da tarde). Frase de efeito — pausar depois dela. A história do Eduardo mostra essa frase acontecendo em câmera lenta.`);

// S45 — NARRATIVA Eduardo — números grandes (mesmo padrão do funil do Gustavo)
s=slide(P1_EDUARDO+`\n\nCONDUÇÃO: contar a história ANTES de revelar os números — deixar o "dezessete" cair como surpresa, igual caiu pro Eduardo. A fala do Robson ("sempre foi assim, patrão") é o clímax: ninguém combinou, mas todo mundo faz assim.`);
watermarkV(s,{w:5.4});
tag(s,"A quarta história",MX,1.35);
const toler=[["17","atrasos em um mês",NAVY,PANEL],["0","descontados ou registrados",RED,REDBG],["1","conversa em onze meses",GOLD_DK,PANEL],["3ª","semana: a funcionária nova repetiu",RED,REDBG]];
let tw2=(W-2*MX-1.5)/4, ty2=1.95, th2=2.9;
toler.forEach((c,i)=>{ let x=MX+i*(tw2+0.5);
  card(s,x,ty2,tw2,th2,c[3]);
  s.addText(c[0],{x:x+0.25,y:ty2+0.45,w:tw2-0.5,h:1.3,fontFace:TITLE_F,fontSize:58,bold:true,color:c[2],align:"center",margin:0});
  divider(s,x+tw2/2-0.4,ty2+1.95);
  s.addText(c[1],{x:x+0.25,y:ty2+2.1,w:tw2-0.5,h:0.7,fontFace:BODY_F,fontSize:13,italic:true,color:BODY,align:"center",margin:0});
});
divider(s,MX+0.02,5.3);
s.addText("Eduardo · materiais de construção — o combinado que ninguém assinou.",{x:MX,y:5.5,w:W-2*MX,h:0.7,fontFace:TITLE_F,fontSize:24,bold:true,italic:true,color:NAVY,margin:0});
footer(s,N);

// S46
quote(null,"O que você deixa passar é mais forte do que o que você diz que espera.",
"Cada pessoa nova aprende a regra certa: a que ninguém escreve — mas todo mundo segue.",
`Fechamento do bloco Pessoas (fecho da P1 do Eduardo). Pausar. Ponte pro exercício: "Vamos contar os dias — o que VOCÊ está deixando passar?"`,{size:29,edgeH:2.1,h:2.3,divY:4.6});

// S47 — EXERCÍCIO 5
exercicio(5,"Pessoas","[V]",18,
"O Mapa de Tolerância expõe: o que você deixa passar · a regra que deveria existir · frequência × gravidade.",
`Canvas do bloco Pessoas Raiz 01 (P2) — "Mapa de Tolerância": 5 comportamentos tolerados + regra que deveria existir, depois posicionar no quadrante Frequência × Gravidade. Alerta máximo = frequente E grave. Instruir: sem embelezar; se mais de uma pessoa repete o comportamento, o problema não é a pessoa. 18 min (ampliado — é o outro exercício mais citado como transformador, ao lado do pró-labore).`);

// S47b — hold (novo — este exercício não tinha slide de espera; módulo agora tem folga pra isso)
exercicioHold("[V]",18,"Comportamento repetido mais de uma vez não é traço de personalidade. É regra que ninguém escreveu.",
`Circular. Quem travar no quadrante: provocar "isso caiu em frequente-e-grave ou você tá suavizando pra não encarar?"`);

// S48
debrief("O problema que você tem com gente: é da pessoa ou do sistema que a cerca?",
`Fechamento dos 4 pilares. Amarrar: dinheiro, tempo, receita, gente — os quatro vazamentos têm a mesma raiz: improviso. Ponte para o fechamento do dia.`,{size:28});

// ============================================================
// MÓDULO 5 — Fechamento + Oferta (17h15–18h00) · slides 49–58
// ============================================================
MOD=5;

// S49
quote("O Mapa Vero","Hoje você marcou onde está.",
"De manhã era um mapa. Agora é o SEU mapa.",
`Retomar o mapa 4×4 com o diagnóstico da manhã. Pedir que abram a página do diagnóstico preenchido. "Isso que está aí não é opinião — é o retrato que você mesmo fez."`,{size:38,edgeH:1.7,h:1.7,divY:4.05,subY:4.35});

// S50 — NARRATIVA André
story("Mais adiante no método",
"O erro não é escolher um caminho. É continuar pagando o preço dos dois sem assumir nenhum.",
"André · amostra da fase Gestão — o método não fica na Raiz",
P1_ANDRE,
{size:28,edgeH:2.5,h:2.7,divY:5.0});

// S51
quote(null,"O diagnóstico é o começo. O que vem depois chama-se execução sustentada.",null,
`Ponte para o plano pessoal. "Diagnóstico sem execução vira lembrança de evento. O próximo exercício é o compromisso — de vocês com vocês, não conosco."`,{size:31,edgeH:2.1,h:2.3,divY:4.6});

// S52 — EXERCÍCIO 6 (tempo dobrado — redesenho pós-simulação: era o mais elogiado e o mais espremido)
exercicio(6,"Plano de execução","última",20,
"1 decisão por pilar. Prazo: 30 dias. Escreva o que você VAI fazer — não o que deveria.",
`Página final da Apostila da Imersão. Último exercício do dia — silêncio total na sala. Instruir: decisão pequena e real vale mais que promessa grande. 20 min (dobrado — era o exercício mais citado como acionável E o mais curto do dia).`);

// S52b — hold (novo — este exercício não tinha slide de espera)
exercicioHold("última",20,"Não escreva o que você deveria fazer. Escreva o que você VAI fazer — com data.",
`Circular sem pressa. Este é o exercício que vira compromisso — não interromper o silêncio da sala.`);

// S52c — PENDENTE: objeção de tempo (redesenho pós-simulação — item mais citado entre quem já disse "sim")
pendente("Quanto tempo por semana o método exige — dito com número",
"Lucas + Ernane: carga horária real de validação/acompanhamento por nível + como funciona sem exigir presença física",
`PLACEHOLDER — a simulação de 100 empresários apontou "falta de tempo pra executar" como a objeção Nº1 de quem JÁ disse SIM (maior preditor de abandono/churn, não de recusa na hora). Ninguém no palco responde isso hoje com número. Precisa: horas/semana por nível + explicar que a validação não exige o dono presente/parado. Ver SIMULACAO-100-EMPRESARIOS.md, objeção #2. Posicionar este slide na fala antes do Exercício 6, dito em voz alta pelo condutor.`);

// S53 — A escola
s=slide(`Como a escola funciona por dentro — 3 minutos, factual, sem promessa: fases → blocos → execução → validação → certificação. A apostila completa (4 pilares × 4 fases) é o material do aluno; hoje vocês usaram a edição da imersão. O aluno recebe o material da fase em que está — e avança comprovando execução, não pagando.`);
watermarkV(s,{w:5.2});
title(s,"A escola","Como o método vira formação");
const etapas=[["Fases","Você entra na fase em que o diagnóstico te colocou — não na que você queria."],["Blocos","Cada bloco: uma narrativa + um canvas. Sentido e ação. Nada de aula gravada."],["Execução","O canvas preenchido vira compromisso de execução na SUA empresa."],["Validação","Execução comprovada libera a próxima etapa. Sem execução, não há avanço."],["Certificação","O certificado Vero atesta operação com critério — não presença."]];
let ey=2.3, eh=0.82;
etapas.forEach((c,i)=>{ let y=ey+i*(eh+0.12);
  card(s,MX,y,W-2*MX,eh); goldEdge(s,MX,y,eh);
  s.addText(String(i+1).padStart(2,"0"),{x:MX+0.3,y:y+0.14,w:0.7,h:0.55,fontFace:BODY_F,fontSize:14,bold:true,color:GOLD_DK,valign:"middle",margin:0});
  s.addText(c[0],{x:MX+1.05,y:y+0.14,w:2.3,h:0.55,fontFace:TITLE_F,fontSize:16,bold:true,color:NAVY,valign:"middle",margin:0});
  s.addText(c[1],{x:MX+3.5,y:y+0.14,w:W-2*MX-3.9,h:0.55,fontFace:BODY_F,fontSize:12.5,color:BODY,valign:"middle",margin:0});
});
footer(s,N);

// S54
quote(null,"O aluno não avança pagando. Avança executando.",null,
`A régua da escola — fecha o círculo com o slide 3 ("empresários de verdade"). Aqui a venda começa sem pedir nada: o filtro é o próprio método. "Se isso afasta alguém, era pra afastar."`,{size:34,edgeH:1.7,h:1.8,divY:4.1});

// S54b — PENDENTE: prova de caixa / caso-piloto (redesenho pós-simulação)
pendente("Prova de execução — 1-2 casos com número real",
"Lucas + Ernane: um caso Proativo (ou piloto Vero) com resultado em R$/dias — NÃO fabricar número",
`PLACEHOLDER — a simulação apontou "ninguém me mostrou um caso com número" como objeção forte, concentrada em Gestão (maior tíquete, pior conversão: 20%) e em quem já queimou dinheiro com mentoria antes. Precisa de 1-2 casos REAIS (mesmo que da consultoria Proativo) com ponte explícita "este canvas → este resultado em reais". Ver SIMULACAO-100-EMPRESARIOS.md, objeção #5 e risco #5. Posicionar antes da oferta — é o que credencia o preço que vem a seguir.`);

// S54c — Trilha Gestão/Legado (redesenho pós-simulação: maior tíquete, pior conversão — 20% em Gestão)
s=slide(`A simulação de 100 empresários mostrou conversão de só 20% em Gestão (vs. 45% em Raiz) — o público de maior tíquete diagnosticado na manhã genérica sente que "a manhã foi básica demais" e pede prova/conversa antes de assinar. Este momento nomeia isso no palco: quem se diagnosticou em Gestão/Legado não recebe a oferta padrão de matrícula — recebe um convite pra aprofundar.`);
watermarkV(s,{w:5.2});
title(s,"Se você se diagnosticou em Gestão ou Legado","Hoje foi a base. O seu nível pede outra conversa");
card(s,MX,2.5,W-2*MX,3.1,PANEL); goldEdge(s,MX,2.5,3.1);
const gestaoItens=[["Material de profundidade do seu nível","Leva hoje — não é o que foi usado na sala de manhã."],["Conversa individual, ainda hoje","Ernane fica disponível na saída. Sem fila de matrícula — fila de diagnóstico."],["Turma própria, não a turma de hoje","Gestão e Legado não entram na mesma cadência da Raiz/Trilha."]];
let giy=2.85;
gestaoItens.forEach((it,i)=>{ let y=giy+i*0.75;
  s.addText(it[0],{x:MX+0.4,y,w:5.0,h:0.65,fontFace:TITLE_F,fontSize:15,bold:true,color:NAVY,valign:"middle",margin:0});
  s.addText(it[1],{x:MX+5.6,y,w:W-2*MX-6.0,h:0.65,fontFace:BODY_F,fontSize:12.5,italic:true,color:BODY,valign:"middle",margin:0});
});
footer(s,N);

// S55 — PENDENTE oferta (Raiz/Trilha — a maioria da sala)
pendente("A oferta — investimento, formato e condição de turma (Raiz/Trilha)",
"Pricing e formato da matrícula — decisão Lucas + Ernane (entregável #6). Faixas já documentadas em MODELO DE NEGÓCIO VERO.docx; falta fixar valor exato + estrutura de ciclo — ver proposta em _estrategia/proposta-reenquadramento-mensalidade.md",
`PLACEHOLDER — slide central do fechamento comercial, para quem se diagnosticou em Raiz ou Trilha (Gestão/Legado tem o momento próprio no slide anterior). Estrutura sugerida: o que está incluído (fase + material + validação) · entrada · ciclo de manutenção NOMEADO (ver proposta de reenquadramento) · condição de Fundador da turma de hoje. Sem desconto teatral — condição real, prazo real. Liderar com O QUE CHEGA TODO MÊS, preço depois — é a ordem que a simulação recomendou.`);

// S56 — Como entrar
s=slide(`CTA prático: matrícula ou lista da próxima turma. Repetir o QR verbalmente ("aponta a câmera agora — leva 10 segundos"). Ernane circula com apoio a quem quiser conversar individualmente no fim.`);
watermarkV(s,{w:5.2});
title(s,"Como entrar","Próxima turma");
card(s,MX,2.4,5.8,3.4,PANEL); goldEdge(s,MX,2.4,3.4);
s.addText("MATRÍCULA",{x:MX+0.35,y:2.75,w:5,h:0.35,fontFace:BODY_F,fontSize:12,bold:true,color:GOLD_DK,charSpacing:2,margin:0});
s.addText("Turma limitada — a validação individual exige turma pequena.",{x:MX+0.35,y:3.25,w:5.1,h:1.0,fontFace:BODY_F,fontSize:14,color:NAVY,margin:0});
divider(s,MX+0.37,4.65);
s.addText("[ link / condição da turma ]",{x:MX+0.35,y:4.9,w:5,h:0.4,fontFace:BODY_F,fontSize:12,italic:true,color:MUTE,margin:0});
let qx=MX+6.3;
s.addShape(p.shapes.RECTANGLE,{x:qx,y:2.4,w:2.6,h:2.6,fill:{color:PANEL2},line:{color:LINE,width:1}});
s.addText("QR",{x:qx,y:3.35,w:2.6,h:0.7,fontFace:BODY_F,fontSize:20,color:MUTE,align:"center",margin:0});
navyTile(s,qx+3.0,2.45,1.0);
s.addText("vero",{x:qx+4.15,y:2.55,w:3,h:0.6,fontFace:TITLE_F,fontSize:26,italic:true,bold:true,color:NAVY,margin:0});
footer(s,N);

// S57
quote(null,"Quem executa, permanece.",null,
`Fechamento. Frase seca, sem discurso depois dela. Agradecer em uma linha e apontar o último slide (contato).`,{size:46,edgeH:1.4,h:1.4,divY:3.7});

// S58 — Fecho (tile marinho permitido em fecho)
s=slide(`Encerramento e agradecimento. Deixar este slide projetado enquanto a sala se desfaz — QR da comunidade/agenda visível.`,{noBar:true});
const fx=MX-0.15, fy2=1.2, fw2=W-2*(MX-0.15), fh2=5.0;
s.addShape(p.shapes.RECTANGLE,{x:fx,y:fy2,w:fw2,h:fh2,fill:{color:NAVY},shadow:mkShadow()});
s.addImage({path:V_GOLD,x:fx+fw2-4.0,y:fy2+fh2-4.0*V_RATIO-0.05,w:4.0,h:4.0*V_RATIO,transparency:87});
s.addShape(p.shapes.RECTANGLE,{x:fx+0.6,y:fy2+0.6,w:0.8,h:0.055,fill:{color:GOLD}});
s.addText("vero",{x:fx+0.6,y:fy2+0.85,w:4,h:0.8,fontFace:TITLE_F,fontSize:40,italic:true,bold:true,color:CREAM,margin:0});
s.addText("Uma escola para empresários de verdade.",{x:fx+0.6,y:fy2+1.85,w:fw2-4.5,h:1.0,fontFace:TITLE_F,fontSize:28,bold:true,color:"FFFFFF",margin:0});
s.addText("COMUNIDADE · AGENDA",{x:fx+0.6,y:fy2+3.2,w:5,h:0.35,fontFace:BODY_F,fontSize:11,bold:true,color:GOLD,charSpacing:2,margin:0});
s.addText("[ link da Comunidade do WhatsApp ]",{x:fx+0.6,y:fy2+3.6,w:5,h:0.4,fontFace:BODY_F,fontSize:12,italic:true,color:CREAM,margin:0});
s.addShape(p.shapes.RECTANGLE,{x:fx+0.6,y:fy2+4.05,w:1.6,h:1.6-0.75,fill:{color:"FFFFFF"}});
s.addText("QR",{x:fx+0.6,y:fy2+4.15,w:1.6,h:0.6,fontFace:BODY_F,fontSize:14,color:MUTE,align:"center",margin:0});
footer(s,N);

// ============================================================
const out="/Users/Lucas-Lenovo/Projetos/Vero - Escola de Empresários/_imersoes/imersao-metodo-vero/deck/Vero_Imersao_Metodo_v5.pptx";
p.writeFile({fileName:out}).then(f=>console.log("OK:",f,"— slides:",N));
