const examSpecs = [
  { id: "korean", name: "국어", minutes: 80, count: 45, theme: "독서·문학·화법과 작문·언어", sections: 15, questionsPerSection: 3, seed: 3 },
  { id: "math", name: "수학", minutes: 100, count: 30, theme: "다항식·방정식·부등식·함수", sections: 10, questionsPerSection: 3, seed: 1 },
  { id: "english", name: "영어", minutes: 70, count: 45, theme: "듣기형 상황·장문 독해·어법·빈칸", sections: 15, questionsPerSection: 3, seed: 4 },
  { id: "history", name: "한국사", minutes: 30, count: 20, theme: "선사~근현대 흐름·자료 해석", sections: 5, questionsPerSection: 4, seed: 2 },
  { id: "social", name: "통합사회", minutes: 30, count: 20, theme: "인권·시장·환경·문화·공간", sections: 5, questionsPerSection: 4, seed: 5 },
  { id: "science", name: "통합과학", minutes: 30, count: 20, theme: "물질·생명·지구·에너지 자료 해석", sections: 5, questionsPerSection: 4, seed: 6 },
];

const circledNumbers = ["①", "②", "③", "④", "⑤"];

const koreanPassages = [
  {
    type: "독서: 사회",
    title: "빗물 저류 도시와 회복 탄력성",
    passage: v => `도시는 오랫동안 빗물을 가능한 한 빨리 하천으로 내보내는 방식으로 확장되었다. 포장 면적이 늘어나면 물이 스며들 공간이 줄고, 짧은 시간에 많은 빗물이 배수관으로 몰린다. 최근 일부 지방자치단체는 이 문제를 해결하기 위해 학교 운동장, 공원, 보도에 물이 머무를 수 있는 공간을 배치하고 있다.\n\n이 정책의 핵심은 모든 물길을 하나의 큰 시설로 집중시키는 것이 아니라 작은 저류 시설을 여러 곳에 흩어 놓는 데 있다. 비가 약하게 올 때에는 빗물이 땅속으로 천천히 스며들고, 집중 호우 때에는 잠시 저장되었다가 뒤늦게 빠져나간다. 전문가들은 이런 방식이 침수 피해를 줄일 뿐 아니라 도시 열섬 완화와 지하수 보충에도 도움이 된다고 본다. 다만 유지 관리가 부족하면 퇴적물이 쌓여 기능이 떨어질 수 있으므로 주민 참여와 점검 체계가 함께 마련되어야 한다.`,
    questions: [
      { stem: "윗글의 중심 내용으로 가장 적절한 것은?", choices: ["도시 침수는 하천 폭을 넓히는 방법으로만 해결된다", "분산형 빗물 관리가 도시의 회복 탄력성을 높일 수 있다", "투수 포장은 경관 개선 외에는 효과가 없다", "빗물은 빠르게 배출될수록 지하수 보충에 유리하다", "저류 시설은 설치 후 관리가 필요하지 않다"], answer: 1 },
      { stem: "윗글을 바탕으로 추론한 내용으로 적절하지 않은 것은?", choices: ["포장 면적 증가는 빗물 유출 속도를 빠르게 할 수 있다", "작은 저류 시설이 여러 곳에 있으면 배수 부담을 나눌 수 있다", "퇴적물 관리는 저류 시설의 기능 유지와 관련된다", "집중 호우 때 저장된 물은 항상 즉시 하천으로 흘러야 한다", "주민 참여는 시설 관리의 지속성을 높일 수 있다"], answer: 3 },
      { stem: "다음 중 윗글의 ‘분산형’ 원리와 가장 가까운 사례는?", choices: ["한 개의 대형 주차장에 모든 차량을 몰아넣는다", "교실마다 작은 재활용함을 두어 수거 부담을 줄인다", "학교 방송을 한 번만 송출하고 안내문을 없앤다", "모든 급식을 한 창구에서만 배식한다", "도서관 책을 주제와 관계없이 한 서가에 쌓아 둔다"], answer: 1 },
    ],
  },
  {
    type: "문학: 현대시",
    title: "낡은 정류장",
    passage: v => `저녁 버스가 오기 전 / 정류장 의자는 하루의 먼지를 털어 낸다 / 벗겨진 페인트 사이로 / 누군가 기다림을 접어 두고 간 자국이 보인다\n\n나는 시간표 아래에서 / 아직 도착하지 않은 발소리를 읽는다 / 떠난 사람의 뒷모습과 / 돌아올 사람의 그림자가 / 같은 유리창에 겹쳐진다\n\n바람이 노선을 한 장 넘기면 / 낯선 지명이 잠시 빛난다 / 비에 젖은 광고판은 / 어제의 약속을 조용히 말리고 / 가로등은 아직 오지 않은 버스의 얼굴을 먼저 밝힌다

우리는 모두 어딘가로 가는 중이지만 / 잠깐 멈춘 자리에서 / 서로의 방향을 배운다`,
    questions: [
      { stem: "시적 화자가 정류장에서 발견한 의미로 가장 적절한 것은?", choices: ["이동이 중단된 장소의 절망", "기다림 속에서 과거와 미래가 겹치는 순간", "도시 교통 체계의 비효율성", "낯선 지명을 피하려는 태도", "타인과의 관계를 완전히 끊으려는 의지"], answer: 1 },
      { stem: "‘아직 도착하지 않은 발소리를 읽는다’에 대한 이해로 적절한 것은?", choices: ["실제 소리를 과학적으로 분석한다", "기다림 속에서 다가올 만남을 상상한다", "버스 운행 시간을 부정확하다고 비판한다", "과거의 기억을 모두 삭제하려 한다", "화자가 정류장을 떠나지 못하도록 강요받는다"], answer: 1 },
      { stem: "윗시의 표현상 특징으로 적절한 것은?", choices: ["무생물에 행위를 부여해 정류장의 분위기를 드러낸다", "명령형 문장만 반복하여 독자를 설득한다", "역사적 사건을 시간순으로 서술한다", "전문 용어를 나열하여 객관성을 높인다", "반어를 통해 화자의 기쁨을 정반대로 표현한다"], answer: 0 },
    ],
  },
  {
    type: "언어와 매체",
    title: "온라인 회의 안내문 고쳐 쓰기",
    passage: v => `학생회는 축제 준비 회의를 온라인으로 진행하려고 다음 안내문을 작성하였다.\n\n[초안]\n내일 7시에 회의가 진행됩니다. 동아리 대표들은 회의 링크를 확인하고, 안건은 미리 읽어 오십시오. 회의에서 결정된 사항은 각 반에게 공유될 예정이며, 질문이 있는 학생은 채팅창으로 남겨 주시면 됩니다.`,
    questions: [
      { stem: "초안을 고쳐 쓰는 방안으로 가장 적절한 것은?", choices: ["‘각 반에게’를 ‘각 반에’로 고쳐 부사어와 서술어의 호응을 자연스럽게 한다", "‘안건’을 삭제하여 회의 목적을 감춘다", "‘남겨 주시면 됩니다’를 ‘남겨지면 됩니다’로 바꾸어 주체를 분명히 한다", "‘내일 7시’를 없애 시간 정보를 줄인다", "모든 문장을 의문문으로 바꾸어 공손성을 높인다"], answer: 0 },
      { stem: "안내문의 매체 특성을 고려한 추가 내용으로 적절한 것은?", choices: ["회의 링크와 접속 오류 시 연락할 담당자를 함께 제시한다", "온라인 회의임을 숨기기 위해 장소만 제시한다", "채팅 사용을 금지하고 질문 방법을 없앤다", "축제와 무관한 광고 문구를 넣는다", "회의 자료를 회의 뒤에 처음 공개한다고 알린다"], answer: 0 },
      { stem: "초안의 ‘회의가 진행됩니다’를 능동적 표현으로 바꾼 것으로 가장 적절한 것은?", choices: ["회의가 진행되어집니다", "학생회가 회의를 진행합니다", "회의에게 진행을 합니다", "진행은 회의가 됩니다", "회의를 진행되게 됩니다"], answer: 1 },
    ],
  },
];

const mathPassages = [
  {
    type: "수학: 다항식",
    title: "다항식의 값과 나머지",
    passage: v => `다항식 P(x)=x²+${v + 2}x+${2 * v}가 있다. P(x)를 x-a로 나누었을 때의 나머지는 P(a)와 같다. 또 Q(x)=P(x)-P(1)이라 하면 Q(1)=0이므로 Q(x)는 x-1을 인수로 가진다.`,
    questions: v => [
      { stem: "P(1)의 값은?", choices: [3 * v + 2, 3 * v + 3, 2 * v + 4, 4 * v + 1, v * v].map(String), answer: 1 },
      { stem: "P(x)를 x-2로 나누었을 때의 나머지는?", choices: [4 * v + 6, 4 * v + 8, 5 * v + 4, 3 * v + 10, 2 * v + 12].map(String), answer: 1 },
      { stem: "Q(x)=P(x)-P(1)에 대한 설명으로 옳은 것은?", choices: ["Q(1)=0이다", "Q(0)=0이다", "Q(x)는 상수다", "Q(x)는 x+1을 반드시 인수로 가진다", "P(1)은 P(2)보다 항상 크다"], answer: 0 },
    ],
  },
  {
    type: "수학: 함수",
    title: "일차함수 그래프와 교점",
    passage: v => `두 일차함수 y=${v}x+${v + 1}, y=-x+${3 * v + 4}의 그래프를 생각하자. 두 그래프의 교점은 두 식의 y값이 같아지는 x좌표를 먼저 구한 뒤, 그 값을 한 식에 대입하여 구한다.`,
    questions: v => [
      { stem: "첫 번째 그래프가 점 (2, a)를 지날 때 a의 값은?", choices: [2 * v + 1, 3 * v + 1, 2 * v + 2, v + 3, 4 * v].map(String), answer: 1 },
      { stem: "두 그래프의 교점의 x좌표는?", choices: ["1", "2", "3", "4", "5"], answer: 2 },
      { stem: "두 그래프의 교점의 y좌표는?", choices: [3 * v + 1, 4 * v + 1, 2 * v + 4, 5 * v, v + 7].map(String), answer: 1 },
    ],
  },
  {
    type: "수학: 방정식과 부등식",
    title: "문장제 조건 분석",
    passage: v => `어떤 학급은 체험학습 준비를 위해 같은 가격의 간식 ${v + 3}개와 음료 ${v + 1}개를 샀다. 간식 한 개의 가격을 x원, 음료 한 개의 가격을 x+${v * 100}원이라 할 때 전체 금액은 ${((v + 3) + (v + 1)) * 1000 + (v + 1) * v * 100}원이었다.`,
    questions: v => [
      { stem: "조건을 나타내는 방정식으로 적절한 것은?", choices: [`${v + 3}x+${v + 1}(x+${v * 100})=${((v + 3) + (v + 1)) * 1000 + (v + 1) * v * 100}`, `${v + 3}x-${v + 1}(x+${v * 100})=1000`, `${v + 1}x=${v + 3}(x+${v * 100})`, `${v + 3}(x+${v * 100})=${v + 1}x`, `${v + 3}+${v + 1}+x=${v * 100}`], answer: 0 },
      { stem: "간식 한 개의 가격 x는?", choices: ["800", "900", "1000", "1100", "1200"], answer: 2 },
      { stem: "음료 한 개의 가격은?", choices: [String(1000 + v * 100), String(900 + v * 100), String(1100 + v * 100), String(1000 - v * 100), "1000"], answer: 0 },
    ],
  },
];

const englishPassages = [
  {
    type: "English: long reading",
    title: "Explaining as a way of learning",
    passage: v => `When students explain a new idea to someone else, they often discover what they do not fully understand. An explanation cannot be made only with memorized words. The speaker must decide which point comes first, choose an example, and check whether the listener can follow each step.\n\nThis is why some teachers ask students to make short teaching videos after a lesson. The goal is not to create perfect videos. It is to make students reorganize knowledge in their own words. If a student cannot explain why a formula works or how a character changes, that difficulty becomes a useful signal for review.`,
    questions: [
      { stem: "What is the main idea of the passage?", choices: ["Teaching others can reveal and strengthen understanding", "Perfect videos are required in every class", "Memorizing words is the only way to learn", "Listeners should not ask questions", "Formulas are less important than characters"], answer: 0 },
      { stem: "According to the passage, what does a difficulty in explaining show?", choices: ["A signal for review", "A reason to stop learning", "A lack of any memory", "A perfect performance", "A listener's mistake only"], answer: 0 },
      { stem: "Which is closest in meaning to reorganize?", choices: ["arrange again", "throw away", "hide completely", "copy blindly", "delay forever"], answer: 0 },
    ],
  },
  {
    type: "English: 빈칸",
    title: "Small cues and habits",
    passage: v => `A small habit grows more easily when it is connected to a clear cue. If you put a book on your desk before going to bed, the book becomes a quiet reminder in the morning. You do not have to search for it or decide where to begin.\n\nThe cue does not do the work for you, but it lowers the first barrier. In many cases, starting is harder than continuing. A visible cue makes the desired action ________.`,
    questions: [
      { stem: "Choose the best words for the blank.", choices: ["easier to begin", "impossible to repeat", "less connected to routine", "harder to notice", "unrelated to choice"], answer: 0 },
      { stem: "Which example best matches the passage?", choices: ["Putting running shoes by the door before morning exercise", "Hiding all notebooks before studying", "Changing goals every five minutes", "Removing every reminder from a room", "Waiting until there is no decision to make"], answer: 0 },
      { stem: "What does the cue mainly reduce?", choices: ["The first barrier to action", "The value of the habit", "The need for any effort", "The number of mornings", "The meaning of reading"], answer: 0 },
    ],
  },
  {
    type: "English: 흐름",
    title: "The value of quiet time",
    passage: v => `(1) Many people think silence means nothing is happening. (2) In fact, quiet time can help the brain connect ideas that arrived separately. (3) A short break after solving a difficult problem may allow hidden patterns to appear. (4) Penguins mainly live in the Southern Hemisphere and have special feathers. (5) Therefore, planned pauses can be part of effective study rather than a waste of time.`,
    questions: [
      { stem: "Which sentence does NOT fit the flow?", choices: ["(1)", "(2)", "(3)", "(4)", "(5)"], answer: 3 },
      { stem: "What is the writer's attitude toward planned pauses?", choices: ["positive", "fearful", "indifferent", "angry", "uncertain about all pauses"], answer: 0 },
      { stem: "What can quiet time help the brain do?", choices: ["connect ideas", "forget all patterns", "avoid every problem", "replace study", "make feathers"], answer: 0 },
    ],
  },
];

const fourQuestionSets = {
  history: [
    {
      type: "한국사: 자료 해석",
      title: "신석기와 청동기 사회 비교",
      passage: v => `자료 A: 강가나 바닷가에 움집을 짓고 살며, 간석기와 빗살무늬 토기를 사용하였다. 농경과 목축이 시작되었지만 사냥과 채집도 이어졌다.\n자료 B: 민무늬 토기와 비파형 동검이 사용되었고, 고인돌이 만들어졌다. 생산력이 증가하면서 지배층과 피지배층의 차이가 커졌다.`,
      questions: [
        { stem: "자료 A에 해당하는 시대의 생활 모습으로 옳은 것은?", choices: ["움집을 짓고 정착 생활을 시작하였다", "철제 농기구가 전국적으로 보급되었다", "훈민정음이 창제되었다", "개항장이 설치되었다", "과거제가 처음 실시되었다"], answer: 0 },
        { stem: "자료 B를 통해 추론할 수 있는 사회 변화로 적절한 것은?", choices: ["계급 분화가 나타났다", "수렵만으로 생계를 유지하였다", "신분제가 완전히 사라졌다", "도시화가 중단되었다", "불교가 공인되었다"], answer: 0 },
        { stem: "A와 B를 구분하는 유물로 적절한 것은?", choices: ["빗살무늬 토기와 비파형 동검", "팔만대장경과 직지심체요절", "측우기와 거북선", "상평통보와 독립문", "신문고와 집현전"], answer: 0 },
        { stem: "B 시대의 무덤 양식으로 대표적인 것은?", choices: ["고인돌", "굴식 돌방무덤", "벽돌무덤", "석굴암", "적석목곽분"], answer: 0 },
      ],
    },
    {
      type: "한국사: 정치 제도",
      title: "조선 전기 통치 체제",
      passage: v => `조선은 유교 이념을 바탕으로 왕권과 신권의 조화를 추구하였다. 의정부와 6조가 국정을 담당했고, 사헌부·사간원·홍문관은 언론과 감찰 기능을 수행하였다. 지방에는 관찰사와 수령이 파견되었으며, 향촌 사회에서는 유향소가 수령을 보좌하거나 견제하였다.`,
      questions: [
        { stem: "사헌부·사간원·홍문관의 공통 기능으로 적절한 것은?", choices: ["언론과 감찰", "군사 지휘만 전담", "해외 무역 독점", "토지 측량만 담당", "불교 의식 주관"], answer: 0 },
        { stem: "지방 행정을 담당하기 위해 파견된 관리로 옳은 것은?", choices: ["관찰사와 수령", "화백 회의", "도병마사", "독립협회", "집강소"], answer: 0 },
        { stem: "윗글의 통치 이념과 가장 관련 깊은 것은?", choices: ["유교", "샤머니즘", "천주교", "도교만", "사회 진화론"], answer: 0 },
        { stem: "유향소에 대한 설명으로 가장 적절한 것은?", choices: ["향촌에서 수령을 보좌하거나 견제하였다", "왕명을 출납하는 중앙 최고 기구였다", "외교 문서를 번역하는 관청이었다", "전국의 군포를 폐지하였다", "근대 학교 설립을 담당하였다"], answer: 0 },
      ],
    },
  ],
  social: [
    {
      type: "통합사회: 인권과 헌법",
      title: "기본권 제한과 공공복리",
      passage: v => `어느 지방자치단체는 야간 소음 민원이 늘자 공원 확성기 사용 시간을 제한하는 조례를 만들었다. 주민 A는 표현의 자유가 침해된다고 주장했고, 주민 B는 휴식권과 건강권 보호를 위해 필요하다고 보았다. 헌법은 기본권 보장을 원칙으로 하지만, 국가 안전 보장·질서 유지·공공복리를 위해 필요한 경우 법률로 제한할 수 있다고 본다. 다만 제한하더라도 자유와 권리의 본질적인 내용은 침해할 수 없다.`,
      questions: [
        { stem: "위 사례에서 충돌하는 기본권으로 적절한 것은?", choices: ["표현의 자유와 휴식권", "재산권과 선거권", "평등권과 청구권", "근로권과 교육권", "환경권과 참정권만"], answer: 0 },
        { stem: "기본권 제한의 한계로 옳은 것은?", choices: ["본질적인 내용은 침해할 수 없다", "항상 행정 명령만으로 제한한다", "공공복리는 고려할 수 없다", "제한 사유가 없어도 가능하다", "모든 자유를 전면 금지해야 한다"], answer: 0 },
        { stem: "조례의 정당성을 판단할 때 고려할 기준으로 가장 적절한 것은?", choices: ["목적의 정당성과 수단의 적절성", "민원 수만 많으면 무조건 허용", "소수 의견의 완전 배제", "경제적 이익만의 크기", "가장 강한 처벌의 존재"], answer: 0 },
        { stem: "A의 주장과 가장 관련 깊은 권리는?", choices: ["표현의 자유", "근로의 의무", "납세의 의무", "환경 보전 의무", "병역의 의무"], answer: 0 },
      ],
    },
    {
      type: "통합사회: 시장과 선택",
      title: "희소성과 합리적 선택",
      passage: v => `민지는 한정된 용돈으로 무선 이어폰과 참고서 중 하나를 사려고 한다. 이어폰은 이동 중 음악을 듣는 만족을 주지만 가격이 높고, 참고서는 다음 시험 준비에 도움이 된다. 민지는 각 선택의 편익뿐 아니라 포기해야 하는 것의 가치도 비교하였다. 경제에서는 어떤 선택을 함으로써 포기한 대안 중 가장 큰 가치를 기회비용이라고 한다.`,
      questions: [
        { stem: "윗글의 핵심 개념으로 가장 적절한 것은?", choices: ["기회비용", "절대 왕정", "문화 사대주의", "지형성 강수", "세포 호흡"], answer: 0 },
        { stem: "민지가 참고서를 선택했다면 기회비용에 포함될 수 있는 것은?", choices: ["포기한 이어폰의 만족", "참고서를 읽는 모든 학생 수", "용돈과 무관한 지구 공전", "시험 범위의 존재 자체", "상점의 간판 색깔만"], answer: 0 },
        { stem: "합리적 선택에 대한 설명으로 옳은 것은?", choices: ["편익과 비용을 비교한다", "가격이 높은 것만 고른다", "남들이 선택한 것을 무조건 따른다", "포기하는 대안은 고려하지 않는다", "희소성이 없을 때만 필요하다"], answer: 0 },
        { stem: "용돈이 한정되어 있다는 조건은 무엇과 관련되는가?", choices: ["희소성", "문화 융합", "영해", "열대 저기압", "지질 시대"], answer: 0 },
      ],
    },
  ],
  science: [
    {
      type: "통합과학: 물질과 규칙성",
      title: "상태 변화와 입자 모형",
      passage: v => `얼음에 열을 가하면 입자의 배열이 규칙적인 고체 상태에서 입자가 더 자유롭게 움직이는 액체 상태로 변한다. 이 과정에서 온도가 일정하게 유지되는 구간이 나타날 수 있는데, 공급된 열이 입자 사이의 인력을 약하게 하는 데 사용되기 때문이다. 상태가 변해도 물질을 이루는 입자 자체가 사라지거나 새로 생기는 것은 아니므로 질량은 보존된다.`,
      questions: [
        { stem: "얼음이 물로 변할 때 입자 운동에 대한 설명으로 옳은 것은?", choices: ["입자 운동이 더 활발해진다", "입자가 모두 사라진다", "원자 종류가 바뀐다", "질량 보존이 성립하지 않는다", "분자 수가 반드시 두 배가 된다"], answer: 0 },
        { stem: "상태 변화 중 온도가 일정한 까닭으로 적절한 것은?", choices: ["열이 입자 사이 인력을 약하게 하는 데 쓰이기 때문이다", "열이 사라지기 때문이다", "입자가 움직이지 않기 때문이다", "물질이 원소로 분해되기 때문이다", "외부와 완전히 단절되기 때문이다"], answer: 0 },
        { stem: "윗글의 내용과 일치하는 것은?", choices: ["상태 변화에서도 질량은 보존된다", "액체는 입자 모형으로 설명할 수 없다", "고체 입자는 항상 멀리 떨어져 있다", "상태 변화는 화학 변화만을 뜻한다", "열을 가하면 모든 물질이 기체가 된다"], answer: 0 },
        { stem: "‘입자 사이의 인력’과 가장 관련 깊은 현상은?", choices: ["녹는점에서 에너지가 상태 변화에 쓰임", "생식 세포 형성", "지구 자기장 역전", "별의 연주 시차", "유전자 암호 해독"], answer: 0 },
      ],
    },
    {
      type: "통합과학: 생명 시스템",
      title: "광합성과 세포 소기관",
      passage: v => `식물은 엽록체에서 빛에너지를 이용해 이산화 탄소와 물로부터 포도당을 합성한다. 이 과정에서 산소가 방출되며, 만들어진 포도당은 생장과 호흡에 사용된다. 동물 세포에는 엽록체가 없지만 미토콘드리아에서 세포 호흡을 통해 생명 활동에 필요한 에너지를 얻는다. 세포의 각 구조는 서로 다른 기능을 맡아 생명 시스템을 유지한다.`,
      questions: [
        { stem: "광합성이 주로 일어나는 세포 소기관은?", choices: ["엽록체", "미토콘드리아", "세포막", "핵막", "리보솜만"], answer: 0 },
        { stem: "광합성의 산물로 적절한 것은?", choices: ["포도당과 산소", "질소와 암석", "철과 구리", "소금과 모래", "전류와 자기장"], answer: 0 },
        { stem: "미토콘드리아의 기능으로 가장 적절한 것은?", choices: ["세포 호흡을 통해 에너지를 얻는다", "빛에너지를 직접 흡수해 포도당을 만든다", "모든 유전 정보를 없앤다", "세포벽을 분해한다", "광물을 풍화시킨다"], answer: 0 },
        { stem: "윗글을 통해 알 수 있는 생명 시스템의 특징은?", choices: ["구조와 기능의 분업이 있다", "모든 세포 소기관은 같은 일을 한다", "생명 활동에는 에너지가 필요 없다", "식물과 동물 세포는 완전히 동일하다", "세포는 물질대사를 하지 않는다"], answer: 0 },
      ],
    },
  ],
};

function getBaseGroups(subjectId) {
  if (subjectId === "korean") return koreanPassages;
  if (subjectId === "math") return mathPassages;
  if (subjectId === "english") return englishPassages;
  return fourQuestionSets[subjectId];
}

const exams = Object.fromEntries(examSpecs.map(spec => [spec.id, buildSections(spec)]));
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

function buildSections(spec) {
  const groups = getBaseGroups(spec.id);
  let number = 1;
  return Array.from({ length: spec.sections }, (_, sectionIndex) => {
    const base = groups[sectionIndex % groups.length];
    const variant = spec.seed + sectionIndex + 1;
    const rawQuestions = typeof base.questions === "function" ? base.questions(variant) : base.questions;
    const questions = rawQuestions.slice(0, spec.questionsPerSection).map((item, itemIndex) => {
      const choices = typeof item.choices === "function" ? item.choices(variant) : item.choices;
      const step = sectionIndex + itemIndex;
      const question = {
        number: number,
        stem: typeof item.stem === "function" ? item.stem(variant) : item.stem,
        choices: rotateChoices(choices, step),
        answer: (item.answer - (step % choices.length) + choices.length) % choices.length,
      };
      number += 1;
      return question;
    });
    return {
      number: sectionIndex + 1,
      title: `${base.type} — ${base.title}`,
      passage: base.passage(variant),
      questions,
    };
  });
}

function flattenQuestions(subjectId) {
  return exams[subjectId].flatMap(section => section.questions);
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
    .map(spec => `<article class="subject-card"><strong>${spec.name}</strong><span>${spec.count}문항 / ${spec.minutes}분</span><br><span>${spec.sections}개 지문·자료 세트</span><br><span>${spec.theme}</span></article>`)
    .join("");
  renderSubject(currentSubject);
}

function renderSubject(subjectId) {
  currentSubject = subjectId;
  const spec = examSpecs.find(item => item.id === subjectId);
  document.querySelector("#subjectTitle").textContent = `${spec.name} 모의고사`;
  document.querySelector("#subjectMeta").textContent = `${spec.count}문항 · 제한 시간 ${spec.minutes}분 · ${spec.sections}개 지문/자료 세트 · 출제 범위: ${spec.theme}`;
  activeSubject.textContent = `${spec.name} 대기 중`;
  remainingSeconds = spec.minutes * 60;
  updateTimer();
  result.hidden = true;
  examForm.innerHTML = exams[subjectId].map(renderSection).join("");
}

function renderSection(section) {
  const numbers = section.questions.map(question => question.number);
  return `<section class="passage-set" aria-labelledby="section-${section.number}">
    <div class="set-header">
      <p>문항 ${numbers[0]}~${numbers[numbers.length - 1]}</p>
      <h3 id="section-${section.number}">${section.title}</h3>
    </div>
    <div class="passage">${section.passage}</div>
    <div class="set-questions">
      ${section.questions.map(renderQuestion).join("")}
    </div>
  </section>`;
}

function renderQuestion(question) {
  return `<article class="question-card">
    <h4>${question.number}. ${question.stem}</h4>
    <div class="choices">
      ${question.choices.map((choice, index) => `<label class="choice"><input type="radio" name="q${question.number}" value="${index}"><span>${circledNumbers[index]} ${choice}</span></label>`).join("")}
    </div>
  </article>`;
}

function startTimer() {
  clearInterval(timerId);
  const spec = examSpecs.find(item => item.id === currentSubject);
  remainingSeconds = spec.minutes * 60;
  activeSubject.textContent = `${spec.name} 진행 중`;
  timerHint.textContent = "실전처럼 중간에 멈추지 않고 지문 세트 단위로 풀어 보세요.";
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
  const questions = flattenQuestions(currentSubject);
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
