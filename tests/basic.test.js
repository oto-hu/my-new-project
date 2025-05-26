/**
 * 基本的な動作テスト
 */
describe('Basic functionality', () => {
  test('Math operations work', () => {
    expect(1 + 1).toBe(2);
    expect(2 * 3).toBe(6);
  });

  test('DOM manipulation works', () => {
    const element = document.createElement('div');
    element.textContent = 'Test content';
    expect(element.textContent).toBe('Test content');
  });

  // もしjs/script.jsファイルに関数がある場合のテスト例
  // test('Custom functions work', () => {
  //   // 実際のJavaScriptファイルの関数をテスト
  // });
});
