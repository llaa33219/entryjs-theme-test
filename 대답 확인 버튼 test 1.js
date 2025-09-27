const button = Entry.stage.inputSubmitButton;
if (!button) {
    console.log('버튼이 아직 생성되지 않았습니다. `Entry.stage.showInputField()`로 먼저 띄워 주세요.');
}

button.x = 220;          // 위치
button.y = 85;
button.scaleX = 1.2;     // 크기
button.scaleY = 1.2;
button.alpha = 0.8;      // 투명도 (0~1)
Entry.requestUpdate = true;
