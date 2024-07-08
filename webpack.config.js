const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 진입 파일 (JavaScript)
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, './'),
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader', // HTML 파일 처리
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',    // CSS를 <style> 태그로 주입
          'css-loader',      // CSS 파일 처리
          'raw-loader',      // CSS 내용을 문자열로 로드
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource', // 이미지 파일 처리
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // 템플릿 파일 경로 수정 (./ 추가)
      inject: 'body', 
      scriptLoading: 'blocking', // 스크립트 로딩 방식을 blocking으로 설정
    }),
  ],
};
