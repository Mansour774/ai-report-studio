let step = 0;
let data = {};

function start(){
let input = document.getElementById("input").value;

data.raw = input;
step = 0;

showQuestion();
}

function showQuestion(){

document.getElementById("questions").innerHTML = `
<h3>🧠 ما اسم النشاط؟</h3>
<input id="a">
<button onclick="next()">التالي</button>
`;
}

function next(){

data.q1 = document.getElementById("a").value;

document.getElementById("questions").innerHTML = `
<h3>📍 أين الموقع؟</h3>
<input id="b">
<button onclick="generate()">توليد التقرير</button>
`;
}

function generate(){

data.q2 = document.getElementById("b").value;

let report = `
📄 تقرير احترافي

🟢 النشاط:
${data.raw}

🧠 اسم النشاط:
${data.q1}

📍 الموقع:
${data.q2}

📊 تحليل:
تم إعداد التقرير وفق منهجيات المتابعة والتقييم.
`;

document.getElementById("output").innerText = report;
}
