// 1. 입력 필드 가져오기
const inputField = Entry.stage.inputField;

// 2. 먼저 현재 상태 확인
console.log('입력 필드:', inputField);
console.log('숨겨져 있는지:', inputField._isHidden);

// 3. 속성들을 직접 수정하고 render 호출
if (inputField && !inputField._isHidden) {
    // 속성들을 직접 수정
    inputField._fontSize = 30;
    inputField._fontColor = '#FF0000';
    inputField._backgroundColor = '#FFFF00';
    inputField._borderColor = '#00FF00';
    inputField._borderWidth = 3;
    inputField._borderRadius = 15;
    inputField._boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
    inputField._width = 600;
    inputField._height = 40;
    inputField._padding = 15;
    
    // render 호출
    inputField.render();
}

// 4. 여러 속성 한 번에 변경
if (inputField && !inputField._isHidden) {
    // 새로운 속성들로 덮어쓰기
    Object.assign(inputField, {
        _fontSize: 40,
        _fontColor: '#FF1493',
        _backgroundColor: '#98FB98',
        _borderColor: '#FFD700',
        _borderWidth: 5,
        _borderRadius: 25,
        _boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
        _width: 700,
        _height: 50,
        _padding: 20
    });
    
    // 다시 렌더링
    inputField.render();
}

// 5. 현재 속성값 확인
if (inputField) {
    console.log('글자 크기:', inputField._fontSize);
    console.log('글자 색상:', inputField._fontColor);
    console.log('배경색:', inputField._backgroundColor);
    console.log('테두리 색상:', inputField._borderColor);
    console.log('테두리 두께:', inputField._borderWidth);
    console.log('너비:', inputField._width);
    console.log('높이:', inputField._height);
}
