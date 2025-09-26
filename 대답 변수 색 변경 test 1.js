// 답변 창 인스턴스 찾기
const answerVar = Entry.container.inputValue;

// 새로운 색상으로 업데이트 (예: 빨간색)
if (answerVar) {
    answerVar._adjustSingleViewBox('#FF0000'); // 빨간색
    Entry.requestUpdate = true; // 화면 업데이트
}
