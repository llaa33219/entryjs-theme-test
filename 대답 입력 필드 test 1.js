// 1. 입력 필드 확인
const inputField = Entry.stage.inputField;
console.log('입력 필드:', inputField);

// 2. 속성 직접 변경
if (inputField) {
    // 글자 크기 변경
    inputField._fontSize = 30;
    inputField._fontColor = '#FF0000'; // 빨간색
    inputField._fontFamily = 'Arial, sans-serif';
    
    // 배경색 변경
    inputField._backgroundColor = '#FFFF00'; // 노란색
    
    // 테두리 변경
    inputField._borderColor = '#00FF00'; // 초록색
    inputField._borderWidth = 3;
    inputField._borderRadius = 15;
    
    // 크기 변경
    inputField._width = 600;
    inputField._height = 40;
    inputField._padding = 15;
    
    // 그림자 추가
    inputField._boxShadow = '0 4px 8px rgba(0,0,0,0.3)';
    
    // 다시 렌더링
    inputField.render();
}

// 3. 한 번에 여러 속성 변경
if (inputField) {
    Object.assign(inputField, {
        _fontSize: 40,
        _fontColor: '#FF1493', // 핑크색
        _backgroundColor: '#98FB98', // 연한 초록
        _borderColor: '#FFD700', // 금색
        _borderWidth: 5,
        _borderRadius: 25,
        _boxShadow: '0 8px 16px rgba(0,0,0,0.5)',
        _width: 700,
        _height: 50,
        _padding: 20
    });
    inputField.render();
}
