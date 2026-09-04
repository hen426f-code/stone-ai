import { MANUAL } from "./_lib/knowledge.js";

const CORS = { "Access-Control-Allow-Origin":"*","Access-Control-Allow-Methods":"POST, OPTIONS","Access-Control-Allow-Headers":"Content-Type" };

const KNOWLEDGE = "אתה עוזר AI חכם ומלא — ענה על כל שאלה בכל נושא, בדיוק כמו עוזר AI כללי מתקדם: חישובים, ניסוח, עסקים, תרגום, טכנולוגיה, ייעוץ, כל דבר. בנוסף לכל היכולות הכלליות שלך, יש לך התמחות עמוקה בעולם חיתוך האבן: אתה מכיר לעומק את מכונת ה-GMM eXtra CNC ואת מכשיר המדידה Proliner של Prodim, כולל המדריכים הרשמיים שלהם. כשהשאלה בתחום הזה — ענה כמומחה מדויק לפי הידע שלהלן. כשהשאלה בכל נושא אחר — ענה בחופשיות ובאיכות גבוהה, בלי להגביל את עצמך לתחום האבן. ענה בעברית פשוטה וברורה. היה מדויק; בנתון טכני שאינך בטוח בו אמור זאת ואל תמציא. בתקלה תן: הסיבה, תיקון עכשיו, ומניעה. בטיחות קודמת.\n\nמכונה: GMM eXtra CNC, ממשק עברית על Windows, סיסמה רמה1=1975. מצב עיקרי חתכים מתוך CAD — חותך לאורך קווי DXF. צירים X,Y,Z,W(סיבוב),R(הטיה). קלט: DXF לתיקיית CadCut.\n\nפורמט DXF: AutoCAD R12. כל חתיכה = פוליליין סגור אחד. בלי קווים כפולים/חופפים. סוג קו: CONTINUOUS=רגיל, DASHEDM=TAB, POINTLINE=UTL, HIDDEN=מסמן תכונה. צבע=עדיפות: 0 ראשון..9 אחרון. שכבה=עומק: 1000-<מ\"מ>=עובי הלוח. חריץ 8מ\"מ=1000-8.\n\nגרונג (מיטרה, זווית 46 מעלות אצל הן): כדי לבחור שקו ייחתך בגרונג, שמים אותו בשכבה עם הזווית בשם: 1000DPT12INC46 (DPT=עומק, INC=זווית). רק קווים בשכבה זו נחתכים ב-46. אפשרות שנייה: לצייר קשת שמרכזה על אמצע הקו ורדיוס=הזווית. המכונה קוראת את ההטיה מה-DXF ומטה את הראש (ציר R) אוטומטית; במכונה עם R ידני מסובבים ידית לזווית שעל המסך. כלל: לאורך הקו מנקודה 1 ל-2, INC חיובי מטה שמאלה.\n\nמקרא צבעים Prodim (המכונה קוראת ישירות): ירוק=עיבוד/חיתוך, שחור=קיר(עיון), אדום=ארון(עיון), כחול=כיור, ורוד=כיריים, תורכיז=שקע, חום=חיבור, כתום=גרונג(46).\n\nחומרים: פורצלן 12מ\"מ 320x160; דקטון 12מ\"מ 330x150; סינטטי 20מ\"מ 303x140. עומק החיתוך בקובץ חייב=עובי הלוח.\n\nסדר חיתוך (חוק הן): מהחוץ פנימה — קודם המעטפת, בסוף פתחים/חריצים, כדי שהחתיכה לא תזוז.\nוואקום: מופעל כשמשולש אזהרה צהוב עם סימן קריאה מראה שהחיתוך יפגע בחתיכה שנחתכה. מזיזים לכיוון מקום פנוי, בלי סיבוב, כ-175-200 מ\"מ. יש וואקום אוטומטי. כשיש מקום מזיזים כפול כדי לאפשר הארכות.\nהארכות: מאריכים בצד יציאת המסור (לא ההתחלה), לפחות 85 מ\"מ (הן עושה 88), אחרת המסור פוצע ביציאה (קריטי בפורצלן ודקטון).\nחריצים: חיתוך בעומק חלקי (8מ\"מ בלוח 12).\n\nתקלה Z slab less than Z table: החיתוך יגיע לשולחן. תיקון: עומק חיתוך=עובי לוח; מדידת לוח מחדש; הקטן overflow; כייל Z שולחן.\n\nהתוכנה: קלט מ-Prodim/צילום/PDF/ידני. בוחרים חומר, והעומק והפלטה נקבעים אוטומטית. מסדרת חתיכות על הלוח, מוציאה DXF למכונה ו-PDF, ומדווחת שאריות.\n\nחשוב מאוד — אתה יושב בתוך תוכנה שכן יודעת לייצר סקיצות, תוכניות חיתוך וקבצי DXF. לעולם אל תאמר \"אני לא יכול לצייר\" או \"אני עוזר טקסטואלי בלבד\". כשמבקשים ממך סקיצה/תוכנית חיתוך/קובץ DXF — הפנה את המשתמש לשימוש בתוכנה עצמה, בקצרה ובפועל: מידות ידועות (למשל 204x63) → במסך הראשי לבחור \"הזנה ידנית\", לבחור צורה (ישר / L / U), להזין אורך ועומק לכל צלע, ואז לסמן לכל צלע עיבוד חזית או גרונג בלחיצה על \"עוד\" ליד החתיכה. קובץ מודד → \"קובץ מפרוליינר\". שרטוט ביד → \"צילום מידות מדף\". שרטוט דיגיטלי → \"קובץ PDF עם מידות\". בכל המסלולים המערכת מציגה ציור חי לאישור, מציעה קומבינציות חלוקה, ומפיקה תוכנית חיתוך ב-PDF וקובץ DXF מוכן למכונה. אם חסר מידע (עובי/חומר/מיקום פתחים) — שאל שאלה קצרה אחת ואז הפנה לפעולה. אל תיתן הוראות לתוכנות חיצוניות כמו AutoCAD אלא אם המשתמש ביקש זאת במפורש.\n\n=== מכשיר המדידה Proliner (Prodim) ===\nמכשיר מדידה תלת-ממדי עם עט על חוט. שלט 4 כפתורים: 1=נקודה בודדת, 2=מצב רציף (קווים/רדיוסים), 3=סיום קונטור (לחיצה ארוכה=שכבה חדשה שאפשר לתת לה שם), 4=מחיקת נקודה אחרונה (לחיצה ארוכה=מחיקת קונטור).\nמבנה: נקודה → קו → קונטור → שכבה.\nהמכשיר מודד בתלת-ממד ומקרין למישור דו-ממדי. אפשרויות מישור: אופקי / אנכי / ממוצע / קונטור ראשון; מישור יחיד או מרובה.\nפונקציית Leap: ארבעה עוגני leap מאפשרים להזיז את המכשיר ולהמשיך את אותה מדידה. חשוב: אסור שהעוגנים יהיו קרובים זה לזה, על קו אחד, או בצורה סימטרית.\nסדר עבודה בחמישה שלבים: מיקום המכשיר → קביעת מישור היטל (3 נקודות ומעלה) → מדידת קונטור חיצוני (קיר, חזית הבלוק, תמיכות) → קונטור פנימי (ארונות, פתחים, כיורים, ברזים) → עריכה וייצוא DXF.\nפיצוי עט 2.5 מ\"מ: העט מודד ממרכז הקצה אבל נוגעים באובייקט עם החוץ — הפרש 2.5 מ\"מ. הגדרה: פיצוי שמאל / ימין / ללא. אם עבדו בלי פיצוי, כל המידות סוטות ב-2.5 מ\"מ וצריך לתקן. זה מקור טעות שיטתי נפוץ.\nקונטור פתוח מול סגור: אפשר להשאיר קונטור פתוח או לסגור אוטומטית.\nשיקוף: אם מישור ההיטל גבוה מהמכשיר, המדידה יוצאת משוקפת (מראה) — קובץ משוקף יגרום לחיתוך הפוך. אם משהו נראה הפוך, זו הסיבה הראשונה לבדוק.\nאזהרה מהמדריך: כשמודדים עם פיצוי אין למדוד צמוד מדי — צריך להשאיר מרווח להתקנה.\nתחזוקה: לנקות את חוט המדידה שבועית במטלית יבשה בלבד, בלי חומרים או חומרי סיכה. להתחיל מדידה לפני ניקוי החוט כדי לשמוע את התראת הסוף.\nProliner CT (תוספת בתשלום): עריכת תבניות בשטח, קיזוז קווים, מידות זוויתיות ורדיאליות, קווי חיתוך, הערות, רדיוסים אוטומטיים ל-CNC, ספריות כיורים ופתחים, הצבת אלמנטים על לוח וירטואלי לחישוב חומר, אישור לקוח בחתימה בשטח, דוחות ממותגים, וייצוא DXF ו-PDF.";

const SYN = {
  "גרונג":"inclination mitre incline INC angle bevel","מיטרה":"inclination mitre INC angle",
  "זווית":"inclination angle INC degrees","הטיה":"inclination incline tilt R axis",
  "וואקום":"suction cup ventosa vacuum","יניקה":"suction cup vacuum",
  "הארכה":"extension overrun debordo overflow exit","הארכות":"extension overrun overflow",
  "חריץ":"groove partial depth","חריצים":"groove partial depth",
  "שכבה":"layer depth DPT","שכבות":"layer depth","צבע":"color priority order","סדר":"order priority sequence color",
  "עומק":"depth DPT thickness","קידוח":"drill core hole","קידוחים":"drill core holes",
  "כיור":"sink hole opening","פתח":"opening hole cut","כיריים":"hob cooktop opening",
  "תקלה":"alarm error fault warning","שגיאה":"error alarm fault","התראה":"alarm warning error",
  "מסור":"blade disc saw","דיסק":"disc blade diameter","להב":"blade disc",
  "פרוליינר":"dxf cad cut import","קומבינציות":"nesting slab pieces layout","נסטינג":"nesting slab",
  "מהירות":"speed velocity feed","לוח":"slab thickness","פלטה":"slab","עיבוד":"processing cut",
  "מדידה":"tastatura probing feeler measure","חיבור":"joint seam","קיזוז":"compensation tool offset",
  "תבנית":"template scan","כרסום":"milling contouring cutter",
};
function expand(q){ let ex=q.toLowerCase(); for(const [he,en] of Object.entries(SYN)) if(q.includes(he)) ex+=" "+en; return ex; }
function pickChapters(question,k=2,cap=14000){
  const q=expand(question); const terms=q.split(/[^a-z0-9\u0590-\u05FF]+/).filter(w=>w.length>2);
  const scored=[];
  for(const [name,text] of Object.entries(MANUAL)){
    const lc=(name+" "+text).toLowerCase(); let s=0;
    for(const t of terms){ let i=lc.indexOf(t); if(i>=0){ s+=2; if(lc.indexOf(t,i+t.length)>=0) s+=1; } }
    if(/incl|mitre|angle|INC/i.test(q) && name.includes("0230")) s+=6;
    scored.push({name,text,s});
  }
  scored.sort((a,b)=>b.s-a.s);
  const top=scored.filter(c=>c.s>0).slice(0,k);
  let out=""; for(const c of top) out+="\n\n### "+c.name+"\n"+c.text.slice(0,cap);
  return out;
}
export async function onRequestPost({ request, env }){
  try{
    if(!env.ANTHROPIC_API_KEY) return json({error:"missing_key",message:"המפתח לא הוגדר בשרת."},500);
    const body=await request.json(); const messages=Array.isArray(body.messages)?body.messages:[];
    if(!messages.length) return json({error:"no_messages"},400);
    let lastText="";
    for(let i=messages.length-1;i>=0;i--){ const m=messages[i]; if(m.role!=="user") continue;
      if(typeof m.content==="string") lastText=m.content;
      else if(Array.isArray(m.content)) lastText=m.content.filter(x=>x.type==="text").map(x=>x.text).join(" ");
      break; }
    const excerpts=pickChapters(lastText,2);
    // מצב קריאת שרטוט: הקשר נקי לגמרי, בלי מוח הידע ובלי המדריך
    const VISION_SYS = "אתה קורא שרטוטי מדידה של משטחי אבן בכתב יד. תפקידך היחיד: לקרוא את המספרים והצורה מהתמונה במדויק. עבוד בשני שלבים: (1) סרוק את כל התמונה ורשום לעצמך כל מספר שאתה רואה ואת מיקומו; (2) רק אז שייך כל מספר לצלע/עומק/פתח. חוקים מוחלטים: לעולם אל תמציא מספר שלא כתוב; אם ערך לא ברור או חסר החזר null ורשום שאלה; ספרה קטנה מוגבהת אחרי מספר היא השבר העשרוני (113 עם 5 מוגבה = 113.5); אל תעגל מספרים; החזר אך ורק JSON תקין בלי שום טקסט נוסף.";
    const system = (body.mode==="vision") ? VISION_SYS
                 : KNOWLEDGE+(excerpts?"\n\n=== קטעים רלוונטיים ממדריך המכונה ==="+excerpts:"");
    const r=await fetch("https://api.anthropic.com/v1/messages",{ method:"POST",
      headers:{"Content-Type":"application/json","x-api-key":env.ANTHROPIC_API_KEY,"anthropic-version":"2023-06-01"},
      body:JSON.stringify({model:body.model||"claude-sonnet-4-6",max_tokens:Math.min(body.max_tokens||1200,4000),system,messages}) });
    const data=await r.json();
    if(!r.ok) return json({error:"api_error",status:r.status,detail:data},r.status);
    const text=(data.content||[]).filter(x=>x.type==="text").map(x=>x.text).join("\n").trim();
    return json({text});
  }catch(e){ return json({error:"server_error",message:String((e&&e.message)||e)},500); }
}
export function onRequestOptions(){ return new Response(null,{status:204,headers:CORS}); }
function json(obj,status=200){ return new Response(JSON.stringify(obj),{status,headers:{"Content-Type":"application/json",...CORS}}); }
