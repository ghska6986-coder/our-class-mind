"use strict";

// 1. 문항: 각 유형별로 5문항씩, 총 20문항입니다.
// type에는 explorer / planner / creator / helper 중 하나를 적습니다.
const questions = [
  { text: "새로운 놀이가 생기면 먼저 해 보고 싶어요.", type: "explorer" },
  { text: "숙제나 준비물을 미리 챙기면 마음이 편해요.", type: "planner" },
  { text: "평범한 물건을 보면 새로운 사용 방법이 떠올라요.", type: "creator" },
  { text: "친구가 속상해 보이면 먼저 괜찮은지 물어봐요.", type: "helper" },
  { text: "처음 가는 곳을 둘러보는 일이 즐거워요.", type: "explorer" },
  { text: "활동을 시작하기 전에 순서를 정하는 편이에요.", type: "planner" },
  { text: "그림이나 이야기로 내 생각을 표현하는 걸 좋아해요.", type: "creator" },
  { text: "모둠에서 친구들의 의견을 골고루 들으려고 해요.", type: "helper" },
  { text: "어려워 보여도 재미있다면 도전해 보고 싶어요.", type: "explorer" },
  { text: "약속한 시간과 규칙을 잘 지키려고 노력해요.", type: "planner" },
  { text: "하나의 문제에도 여러 가지 해결 방법을 생각해요.", type: "creator" },
  { text: "누군가 도움이 필요하면 내가 할 수 있는 일을 찾아요.", type: "helper" },
  { text: "새로운 친구에게 먼저 말을 걸어 볼 수 있어요.", type: "explorer" },
  { text: "내 물건과 공부 자료를 정리하는 것이 좋아요.", type: "planner" },
  { text: "정해진 방법 말고 나만의 방법을 시도하고 싶어요.", type: "creator" },
  { text: "친구들이 다투면 서로의 마음을 이해하려고 해요.", type: "helper" },
  { text: "활동 중 예상하지 못한 일이 생겨도 새롭게 해 볼 용기가 있어요.", type: "explorer" },
  { text: "큰 과제는 작은 단계로 나누어 끝내는 편이에요.", type: "planner" },
  { text: "상상한 것을 만들거나 꾸미는 시간이 즐거워요.", type: "creator" },
  { text: "우리 모둠의 모든 친구가 함께 참여하면 기뻐요.", type: "helper" },
];

const options = [
  { score: 5, label: "매우 그렇다" },
  { score: 4, label: "그렇다" },
  { score: 3, label: "보통이다" },
  { score: 2, label: "그렇지 않다" },
  { score: 1, label: "전혀 그렇지 않다" },
];

// 2. 성향별 캐릭터와 설명: 이 부분을 바꾸면 결과 문구를 수정할 수 있어요.
const types = {
  explorer: {
    name: "탐험가형", subtitle: "호기심 가득한 도전가 🧭", image: "assets/explorer.svg",
    description: "새로운 경험을 좋아하고 모르는 것을 발견할 때 신나요. 변화가 생겨도 용기를 내어 시작해 보는 모습이 있어요.",
    strength: "새로운 일을 시작하는 용기, 호기심, 적극적으로 시도하는 힘",
    advice: "도전하기 전에 주변 친구들의 생각도 한 번 들어 보면 더 멋진 탐험이 될 거예요.",
    match: "planner", matchText: "계획가형 친구와 함께하면 새로운 도전에 꼼꼼한 준비가 더해질 수 있어요. 서로의 장점을 배워 보세요!",
  },
  planner: {
    name: "계획가형", subtitle: "차근차근 준비하는 해결사 📚", image: "assets/planner.svg",
    description: "할 일을 미리 살피고 순서를 정하는 걸 좋아해요. 약속과 규칙을 소중히 여기며 꾸준히 실천하려고 해요.",
    strength: "꼼꼼한 준비, 책임감, 순서대로 해결하는 힘",
    advice: "계획이 바뀌어도 괜찮아요. 가끔은 예상 밖의 재미를 발견해 보세요.",
    match: "explorer", matchText: "탐험가형 친구의 도전 정신에 나의 준비성이 더해지면 든든한 팀이 될 수 있어요.",
  },
  creator: {
    name: "아이디어형", subtitle: "상상이 반짝이는 창작가 💡", image: "assets/creator.svg",
    description: "다른 시선으로 세상을 바라보고 새로운 생각을 떠올리는 걸 즐겨요. 나만의 방식으로 표현하는 데 흥미가 있어요.",
    strength: "창의적인 생각, 풍부한 상상력, 다양한 해결 방법 찾기",
    advice: "떠오른 생각 중 하나를 골라 작은 실천으로 옮겨 보면 아이디어가 더 빛날 거예요.",
    match: "helper", matchText: "배려형 친구와 함께하면 다양한 아이디어에 모두의 마음을 담아 볼 수 있어요.",
  },
  helper: {
    name: "배려형", subtitle: "함께하는 마음이 따뜻한 친구 💖", image: "assets/helper.svg",
    description: "친구의 마음을 잘 살피고 함께하는 시간을 중요하게 생각해요. 서로의 의견을 존중하며 힘을 나누려는 모습이 있어요.",
    strength: "공감하는 마음, 경청, 함께 협력하는 힘",
    advice: "친구를 돌보는 만큼 나의 마음과 원하는 것도 소중하게 표현해 보세요.",
    match: "creator", matchText: "아이디어형 친구의 새로운 생각에 나의 공감 능력이 더해지면 모두가 즐거운 활동을 만들 수 있어요.",
  },
};

// 3. 저장 기능을 나중에 Firebase로 바꾸기 위한 연결 지점입니다.
// 첫 번째 버전에서는 어디에도 데이터를 보내거나 저장하지 않습니다.
const resultRepository = {
  async saveResult(_record) {
    return { saved: false, message: "첫 번째 버전: 저장 기능이 연결되지 않았습니다." };
  },
};

const $ = (id) => document.getElementById(id);
let student = null;
let answers = Array(questions.length).fill(null);
let currentIndex = 0;
const screenIds = ["welcomeScreen", "infoScreen", "quizScreen", "resultScreen"];

function showScreen(id) {
  for (const name of screenIds) $(name).classList.toggle("hidden", name !== id);
  window.scrollTo({ top: 0, behavior: "instant" });
}

function validatePositiveInteger(value, max) {
  const number = Number(value);
  return Number.isInteger(number) && number >= 1 && number <= max;
}

function enterQuiz(event) {
  event.preventDefault();
  const grade = $("grade").value;
  const classNumber = $("classNumber").value;
  const studentNumber = $("studentNumber").value;
  const name = $("studentName").value.trim();
  if (!["4", "5", "6"].includes(grade) || !validatePositiveInteger(classNumber, 30) || !validatePositiveInteger(studentNumber, 50) || !name || !$("privacyCheck").checked) {
    $("infoError").textContent = "학년·반·번호·이름을 확인하고 개인정보 안내를 읽은 뒤 체크해 주세요.";
    return;
  }
  $("infoError").textContent = "";
  student = { grade, classNumber: Number(classNumber), studentNumber: Number(studentNumber), name };
  answers = Array(questions.length).fill(null);
  currentIndex = 0;
  showScreen("quizScreen");
  renderQuestion();
}

function renderQuestion() {
  const item = questions[currentIndex];
  $("questionCount").textContent = `${currentIndex + 1} / ${questions.length}`;
  $("progressFill").style.width = `${(currentIndex + 1) / questions.length * 100}%`;
  $("progressbar").setAttribute("aria-valuenow", String(currentIndex + 1));
  $("questionText").textContent = `${currentIndex + 1}. ${item.text}`;
  $("choices").replaceChildren();
  options.forEach((option, index) => {
    const selected = answers[currentIndex] === option.score;
    const button = document.createElement("button");
    button.type = "button";
    button.className = `choice${selected ? " selected" : ""}`;
    button.setAttribute("role", "radio");
    button.setAttribute("aria-checked", selected ? "true" : "false");
    const circle = document.createElement("span");
    circle.className = "choice-indicator";
    circle.setAttribute("aria-hidden", "true");
    circle.textContent = "✓";
    const label = document.createElement("span");
    label.textContent = option.label;
    button.append(circle, label);
    button.addEventListener("click", () => {
      answers[currentIndex] = option.score;
      renderQuestion();
    });
    $("choices").append(button);
  });
  $("prevBtn").textContent = currentIndex === 0 ? "← 정보 입력" : "← 이전 문제";
  $("nextBtn").disabled = answers[currentIndex] === null;
  $("nextBtn").textContent = currentIndex === questions.length - 1 ? "결과 보기 🎉" : "다음 문제 →";
  $("answerHint").textContent = answers[currentIndex] === null ? "답을 하나 선택해 주세요." : "선택했어요! 다음 문제로 이동할 수 있어요.";
}

function moveNext() {
  if (answers[currentIndex] === null) return;
  if (currentIndex < questions.length - 1) {
    currentIndex += 1;
    renderQuestion();
    window.scrollTo({ top: 0, behavior: "instant" });
  } else {
    showResult();
  }
}

function calculateResult() {
  const totals = { explorer: 0, planner: 0, creator: 0, helper: 0 };
  questions.forEach((question, index) => { totals[question.type] += answers[index]; });
  // 동점이면 '공동 강점'으로 표시하고, 결과 대표 유형은 지정된 순서의 첫 유형으로 정합니다.
  const highest = Math.max(...Object.values(totals));
  const tied = Object.keys(totals).filter(key => totals[key] === highest);
  return { totals, typeKey: tied[0], tied };
}

function showResult() {
  if (!student || answers.some(value => value === null)) return;
  const { totals, typeKey, tied } = calculateResult();
  const type = types[typeKey];
  const match = types[type.match];
  $("resultStudent").textContent = `${student.grade}학년 ${student.classNumber}반 ${student.studentNumber}번 ${student.name} 학생의 결과`;
  $("resultCharacter").src = type.image;
  $("resultCharacter").alt = `${type.name} 캐릭터`;
  $("resultType").textContent = type.name;
  $("resultSubtitle").textContent = type.subtitle;
  $("resultDescription").textContent = type.description;
  $("resultStrength").textContent = type.strength;
  $("resultAdvice").textContent = type.advice;
  $("matchCharacter").src = match.image;
  $("matchCharacter").alt = `${match.name} 캐릭터`;
  $("matchName").textContent = match.name;
  $("matchDescription").textContent = type.matchText;
  $("resultTie").textContent = tied.length > 1 ? `여러 모습이 비슷하게 나타났어요: ${tied.map(key => types[key].name).join(", ")} (공동 강점)` : "";
  $("scoreBars").replaceChildren();
  Object.keys(types).forEach(key => {
    const row = document.createElement("div");
    row.className = "score-row";
    const label = document.createElement("span");
    label.textContent = types[key].name;
    const track = document.createElement("div");
    track.className = "score-track";
    const fill = document.createElement("div");
    fill.className = "score-fill";
    fill.style.width = `${totals[key] / 25 * 100}%`;
    track.append(fill);
    const output = document.createElement("output");
    output.textContent = `${totals[key]} / 25`;
    row.append(label, track, output);
    $("scoreBars").append(row);
  });
  // 개인정보를 서버에 보내지 않습니다. Firebase 연결 이후에만 별도 동의와 권한 설정을 거쳐 저장하세요.
  $("saveStatus").textContent = "첫 번째 버전: 결과는 온라인 데이터베이스에 저장되지 않습니다.";
  showScreen("resultScreen");
}

function restart() {
  student = null;
  answers = Array(questions.length).fill(null);
  currentIndex = 0;
  $("studentForm").reset();
  $("infoError").textContent = "";
  showScreen("welcomeScreen");
}

$("startBtn").addEventListener("click", () => showScreen("infoScreen"));
$("infoBackBtn").addEventListener("click", () => showScreen("welcomeScreen"));
$("studentForm").addEventListener("submit", enterQuiz);
$("prevBtn").addEventListener("click", () => {
  if (currentIndex === 0) showScreen("infoScreen");
  else { currentIndex -= 1; renderQuestion(); window.scrollTo({ top: 0, behavior: "instant" }); }
});
$("nextBtn").addEventListener("click", moveNext);
$("restartBtn").addEventListener("click", restart);
$("printBtn").addEventListener("click", () => window.print());

// 데이터는 새로고침 시 초기화되며, localStorage / 쿠키 / 네트워크에 기록되지 않습니다.
