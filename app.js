const examSpecs = [
  { id: "korean", name: "국어", minutes: 80, count: 45, theme: "비문학·문학·문법", seed: 3 },
  { id: "math", name: "수학", minutes: 100, count: 30, theme: "다항식·방정식·함수", seed: 1 },
  { id: "english", name: "영어", minutes: 70, count: 45, theme: "듣기형 상황·독해·어법", seed: 4 },
  { id: "history", name: "한국사", minutes: 30, count: 20, theme: "선사~근현대 흐름", seed: 2 },
  { id: "social", name: "통합사회", minutes: 30, count: 20, theme: "인권·시장·환경·문화", seed: 5 },
  { id: "science", name: "통합과학", minutes: 30, count: 20, theme: "물질·생명·지구·에너지", seed: 6 },
];

const templates = {
  korean: [
    {
      stem: "다음 글의 중심 내용으로 가장 적절한 것은?",
      passage: n => `도시는 빗물을 빠르게 흘려보내도록 설계되어 왔다. 그러나 최근에는 빗물이 머무를 틈을 만드는 방식이 주목받는다. 작은 정원과 투수 포장은 홍수를 줄이고 지하수를 보충한다. 이는 도시가 자연의 순환을 완전히 배제하기보다 일부 회복하려는 시도이다.`,
      choices: ["도시 개발은 자연 순환을 배제해야 한다", "빗물 관리 방식이 순환 회복 중심으로 바뀌고 있다", "투수 포장은 도시 미관만을 위한 장치이다", "홍수 예방에는 대형 하천 공사만 효과가 있다", "지하수 보충은 농촌에서만 필요한 일이다"],
      answer: 1,
    },
    {
      stem: "밑줄 친 표현의 문맥상 의미로 알맞은 것은?",
      passage: n => `시인은 오래된 골목을 '시간이 접힌 곳'이라 부른다. 이 표현은 낡은 담벼락에 남은 생활의 흔적이 현재의 걸음과 겹쳐 보이는 순간을 드러낸다.`,
      choices: ["시간이 실제로 멈춘 장소", "과거의 흔적과 현재의 경험이 함께 느껴지는 공간", "빠르게 재개발되는 지역", "사람의 왕래가 완전히 끊긴 곳", "기억을 지우려는 태도"],
      answer: 1,
    },
    {
      stem: "다음 문장에서 고쳐 쓰기 방안으로 적절한 것은?",
      passage: n => `동아리 대표는 회의 결과를 모두에게 공유했고, 다음 활동은 안전을 우선으로 진행되어야 한다고 강조했다.`,
      choices: ["'공유했고'를 '공유하였고'로 바꾸어 의미를 반대로 한다", "'진행되어야'를 '진행해야'로 바꾸면 주체가 더 분명해진다", "'안전'을 삭제해야 문장이 완성된다", "'모두에게'를 '모두가'로 바꾸어야 목적어가 된다", "두 절의 순서를 바꾸면 원인과 결과가 사라진다"],
      answer: 1,
    },
  ],
  math: [
    {
      stem: n => `다항식 P(x)=x²+${n + 2}x+${2 * n}에서 P(1)의 값은?`,
      passage: () => "계산 과정까지 연습할 수 있도록 수치가 매 회차 조금씩 바뀝니다.",
      choices: n => [n + 3, 3 * n + 3, 2 * n + 4, n * n + 1, 4 * n + 2].map(String),
      answer: 1,
    },
    {
      stem: n => `일차함수 y=${n}x+${n + 1}의 그래프가 점 (2, a)를 지날 때 a의 값은?`,
      passage: () => "좌표를 식에 대입하여 함숫값을 구한다.",
      choices: n => [n + 1, 2 * n + 1, 3 * n + 1, n * n, 4 * n].map(String),
      answer: 1,
    },
    {
      stem: n => `방정식 ${n}x-${n + 3}=${2 * n - 3}의 해는?`,
      passage: () => "양변에 같은 수를 더하거나 빼고, 0이 아닌 수로 나누어 해를 구한다.",
      choices: n => ["1", "2", "3", "4", "5"],
      answer: 1,
    },
  ],
  english: [
    {
      stem: "다음 글의 주제로 가장 적절한 것은?",
      passage: n => `When students explain a new idea to a friend, they often notice gaps in their own understanding. Speaking forces them to organize thoughts, choose examples, and check whether each step is clear. In this way, teaching someone else can become a powerful form of learning.`,
      choices: ["the history of school clubs", "why explaining helps learning", "rules for online classes", "the danger of group work", "how to memorize English words only"],
      answer: 1,
    },
    {
      stem: "빈칸에 들어갈 말로 가장 적절한 것은?",
      passage: n => `A small habit can grow when it is connected to a clear cue. If you place a book on your desk before sleeping, you are more likely to read it in the morning. The cue makes the action _____.`,
      choices: ["harder to notice", "easier to start", "less meaningful", "impossible to repeat", "unrelated to routine"],
      answer: 1,
    },
    {
      stem: "글의 흐름상 어색한 문장은?",
      passage: n => `(1) Many people think silence means nothing is happening. (2) In fact, quiet time can help the brain connect ideas. (3) A well-planned break may improve concentration. (4) Penguins mainly live in the Southern Hemisphere. (5) Therefore, short pauses can be part of effective study.`,
      choices: ["(1)", "(2)", "(3)", "(4)", "(5)"],
      answer: 3,
    },
  ],
  history: [
    {
      stem: "다음 설명에 해당하는 시대의 생활 모습으로 옳은 것은?",
      passage: n => "농경과 목축이 시작되고, 간석기와 빗살무늬 토기가 사용되었다.",
      choices: ["철제 농기구가 전국에 보급되었다", "움집을 짓고 정착 생활을 하였다", "과거제가 처음 실시되었다", "한글이 창제되었다", "개항장이 설치되었다"],
      answer: 1,
    },
    {
      stem: "다음 정책을 실시한 왕의 업적으로 가장 적절한 것은?",
      passage: n => "집현전을 설치하고 학문 연구를 장려했으며, 백성의 문자 생활을 돕는 새 문자를 만들었다.",
      choices: ["대동법을 전국으로 확대하였다", "훈민정음을 창제하였다", "독서삼품과를 실시하였다", "별무반을 조직하였다", "경국대전을 완성하였다"],
      answer: 1,
    },
    {
      stem: "자료의 운동에 대한 설명으로 옳은 것은?",
      passage: n => "학생과 시민이 중심이 되어 독립 만세를 외쳤고, 비폭력 시위가 전국으로 확산되었다.",
      choices: ["신분제 폐지를 요구한 갑신정변이다", "1919년에 전개된 3·1 운동이다", "을사늑약 체결 직후 조직된 의병이다", "광주 학생 항일 운동보다 늦게 일어났다", "일본의 토지 조사 사업을 직접 중단시켰다"],
      answer: 1,
    },
  ],
  social: [
    {
      stem: "다음 사례에 나타난 기본권 제한의 원칙으로 적절한 것은?",
      passage: n => "지방 자치 단체는 축제 기간 안전을 위해 일부 도로의 차량 통행을 제한하되, 응급 차량 통행로와 우회 도로를 함께 마련하였다.",
      choices: ["목적의 정당성과 피해의 최소성", "권력 분립의 완전한 배제", "문화 상대주의의 거부", "시장 가격의 자유로운 결정", "관습만을 기준으로 한 판단"],
      answer: 0,
    },
    {
      stem: "다음 상황에서 합리적 선택을 위해 가장 먼저 비교해야 할 것은?",
      passage: n => "민지는 같은 가격의 학용품 두 묶음 중 오래 쓸 수 있는 묶음과 디자인이 예쁜 묶음을 두고 고민한다.",
      choices: ["편익과 기회비용", "국가 간 무역 장벽", "기후 요소와 기후 요인", "헌법 개정 절차", "문화 전파의 방향"],
      answer: 0,
    },
    {
      stem: "지속 가능한 발전을 위한 실천으로 가장 적절한 것은?",
      passage: n => "지역 주민은 하천 정비 과정에서 생태 통로를 보전하고, 산책로 조명 시간을 줄이는 방안을 제안하였다.",
      choices: ["환경·사회·경제의 균형을 고려한다", "단기 이익만을 우선한다", "지역 주민 참여를 배제한다", "생물 다양성을 낮춘다", "에너지 소비를 늘린다"],
      answer: 0,
    },
  ],
  science: [
    {
      stem: "다음 설명에 해당하는 입자 배열의 특징으로 옳은 것은?",
      passage: n => "얼음이 물이 될 때 입자 사이의 거리는 비교적 가까운 상태를 유지하지만, 입자 운동은 더 활발해진다.",
      choices: ["고체에서 액체로 상태가 변한다", "원자가 모두 사라진다", "분자 수가 두 배가 된다", "온도가 절대 영도보다 낮아진다", "질량 보존 법칙이 성립하지 않는다"],
      answer: 0,
    },
    {
      stem: "생명 시스템의 특징으로 옳은 것은?",
      passage: n => "식물 세포는 빛에너지를 이용해 양분을 합성하고, 이 과정에서 엽록체가 중요한 역할을 한다.",
      choices: ["광합성은 엽록체에서 일어난다", "모든 세포에는 세포벽이 없다", "미토콘드리아는 유전 정보를 저장하지 않는다", "물질대사는 생명체에서 일어나지 않는다", "효소는 반응 속도와 무관하다"],
      answer: 0,
    },
    {
      stem: "지구 시스템의 상호 작용 사례로 적절한 것은?",
      passage: n => "화산 폭발로 나온 물질이 대기 중으로 퍼지고, 일부는 해양으로 흘러 들어가 생태계에 영향을 준다.",
      choices: ["권역 사이의 상호 작용", "태양계 행성의 공전 중단", "원소 주기율의 붕괴", "유전자 암호의 해독", "전기 회로의 직렬 연결만"],
      answer: 0,
    },
  ],
};

const exams = Object.fromEntries(examSpecs.map(spec => [spec.id, buildQuestions(spec)]));
let currentSubject = examSpecs[0].id;
let remainingSeconds = 0;
let timerId = null;

const subjectSelect = document.querySelector("#subjectSelect");
const overview = document.querySelector("#overview");
const examForm = document.querySelector("#examForm");
const result = document.querySelector("#result");
const activeSubject = document.querySelector("#activeSubject");
const timer = document.querySelector("#timer");
const timerHint = document.querySelector("#timerHint");

function buildQuestions(spec) {
  const pool = templates[spec.id];
  return Array.from({ length: spec.count }, (_, index) => {
    const base = pool[index % pool.length];
    const n = spec.seed + index + 1;
    const choices = typeof base.choices === "function" ? base.choices(n) : base.choices;
    return {
      number: index + 1,
      stem: typeof base.stem === "function" ? base.stem(n) : base.stem,
      passage: base.passage(n),
      choices: rotateChoices(choices, index),
      answer: (base.answer - (index % choices.length) + choices.length) % choices.length,
      tag: spec.theme,
    };
  });
}

function rotateChoices(choices, step) {
  const offset = step % choices.length;
  return [...choices.slice(offset), ...choices.slice(0, offset)];
}

function renderSetup() {
  subjectSelect.innerHTML = examSpecs
    .map(spec => `<option value="${spec.id}">${spec.name} · ${spec.count}문항 · ${spec.minutes}분</option>`)
    .join("");
  overview.innerHTML = examSpecs
    .map(spec => `<article class="subject-card"><strong>${spec.name}</strong><span>${spec.count}문항 / ${spec.minutes}분</span><br><span>${spec.theme}</span></article>`)
    .join("");
  renderSubject(currentSubject);
}

function renderSubject(subjectId) {
  currentSubject = subjectId;
  const spec = examSpecs.find(item => item.id === subjectId);
  document.querySelector("#subjectTitle").textContent = `${spec.name} 모의고사`;
  document.querySelector("#subjectMeta").textContent = `${spec.count}문항 · 제한 시간 ${spec.minutes}분 · 출제 범위: ${spec.theme}`;
  activeSubject.textContent = `${spec.name} 대기 중`;
  remainingSeconds = spec.minutes * 60;
  updateTimer();
  result.hidden = true;
  examForm.innerHTML = exams[subjectId].map(renderQuestion).join("");
}

function renderQuestion(question) {
  return `<article class="question-card">
    <h3>${question.number}. ${question.stem}</h3>
    <p class="passage">${question.passage}</p>
    <div class="choices">
      ${question.choices.map((choice, index) => `<label class="choice"><input type="radio" name="q${question.number}" value="${index}"><span>${String.fromCharCode(9312 + index)} ${choice}</span></label>`).join("")}
    </div>
  </article>`;
}

function startTimer() {
  clearInterval(timerId);
  const spec = examSpecs.find(item => item.id === currentSubject);
  remainingSeconds = spec.minutes * 60;
  activeSubject.textContent = `${spec.name} 진행 중`;
  timerHint.textContent = "실전처럼 중간에 멈추지 않고 풀어 보세요.";
  updateTimer();
  timerId = setInterval(() => {
    remainingSeconds -= 1;
    updateTimer();
    if (remainingSeconds <= 0) {
      clearInterval(timerId);
      timerHint.innerHTML = '<span class="expired">시간 종료: 자동 채점되었습니다.</span>';
      gradeExam();
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerId);
  timerHint.textContent = "일시정지 상태입니다. 시작을 누르면 처음부터 다시 시작합니다.";
}

function updateTimer() {
  const minutes = Math.max(0, Math.floor(remainingSeconds / 60));
  const seconds = Math.max(0, remainingSeconds % 60);
  timer.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function gradeExam() {
  clearInterval(timerId);
  const questions = exams[currentSubject];
  const incorrect = [];
  const score = questions.reduce((total, question) => {
    const checked = examForm.querySelector(`input[name="q${question.number}"]:checked`);
    const isCorrect = checked && Number(checked.value) === question.answer;
    if (!isCorrect) incorrect.push(question.number);
    return total + (isCorrect ? 1 : 0);
  }, 0);
  const spec = examSpecs.find(item => item.id === currentSubject);
  result.hidden = false;
  result.innerHTML = `<h2>${spec.name} 채점 결과</h2>
    <p><strong>${score}</strong> / ${questions.length}문항 정답 (${Math.round((score / questions.length) * 100)}%)</p>
    <p>오답 번호</p>
    <div class="review-list">${incorrect.length ? incorrect.join(", ") : "전 문항 정답입니다."}</div>`;
  result.scrollIntoView({ behavior: "smooth", block: "start" });
}

subjectSelect.addEventListener("change", event => {
  clearInterval(timerId);
  renderSubject(event.target.value);
});
document.querySelector("#startBtn").addEventListener("click", startTimer);
document.querySelector("#pauseBtn").addEventListener("click", pauseTimer);
document.querySelector("#submitBtn").addEventListener("click", gradeExam);

renderSetup();
