const quiz = [
  {
    question: '第１問：サザエさんに登場するマスオさんの同僚である穴子さんの唇の厚さは何センチでしょうか？',
    answers: [ '① 6センチ', '② 4.7センチ', '③ 13.5センチ'],
    correct: '③ 13.5センチ',
    explanation: '\n穴子さんの唇の厚さは、約13.5センチと言われています。かなり分厚いですよね。ちなみに、年齢は27歳だそうです。'
  }, {
    question: '第２問：たい焼きになる前は、何の形で売られていたでしょうか？',
    answers: [ '① 亀', '② カニ', '③ 金魚'],
    correct: '① 亀',
    explanation: '\n最初は、鯛ではなく亀の形で売り出したのですが全く売れなかった為、高級魚である鯛の形に変えられました。'
  }, {
    question: '第３問：一目惚れをしやすい年齢は何歳でしょうか？',
    answers: [ '① 5歳', '② 14歳', '③ 23歳'],
    correct: '② 14歳',
    explanation: '\n14歳の時は、恋愛ホルモンが最も活発に活動するからだそうです。'
  }
];

const $window = window;
const $doc = document;
const $question = $doc.getElementById('js-question');
const $buttons = $doc.querySelectorAll('.btn');

const quizLen = quiz.length;
let quizCount = 0;
let score = 0;

const init = () => {
  $question.textContent = quiz[quizCount].question;
  
  const buttonLen = $buttons.length;
  let btnIndex = 0;
  
  while(btnIndex < buttonLen){
    $buttons[btnIndex].textContent = quiz[quizCount].answers[btnIndex];
    btnIndex++;
  }
};

const goToNext = () => {
  quizCount++;
  if(quizCount < quizLen){
    init(quizCount);
  } else {
   // $window.alert('終了します');
    showEnd();
  }
};

const judge = (elm) => {
  if(elm.textContent === quiz[quizCount].correct){
    $window.alert('正解です。' + quiz[quizCount].explanation);
    score++;
  } else {
    $window.alert('不正解です。');
  }
  goToNext();
};

const showEnd = () => {
  $question.textContent = 'あなたのスコアは' + score + '/' + quizLen + 'でした。';
  
  const $items = $doc.getElementById('js-items');
  $items.style.visibility = 'hidden';
};

init();

let answersIndex = 0;
let answersLen = quiz[quizCount].answers.length;

while(answersIndex < answersLen){
  $buttons[answersIndex].addEventListener('click', (e) => {
    judge(e.target);
  });
  answersIndex++;
}