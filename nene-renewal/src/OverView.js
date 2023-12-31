import React, { useState, useEffect } from 'react';
import QuestionData from './Question.json'; // 파일 경로를 실제 파일 경로로 수정

export default function OverView(props) {
  const [questions, setQuestions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    // JSON 파일에서 질문 데이터 불러오기
    setQuestions(Object.entries(QuestionData));
  }, []);

  // Object.entries()는 JavaScript에서 객체의 [키, 값] 쌍으로 이루어진 배열을 반환하는 메서드입니다. 이 메서드는 객체의 각 프로퍼티에 대해 [키, 값] 쌍을 가진 배열을 생성하고, 이 배열들을 모두 담은 배열을 반환합니다.

  useEffect(() => {
    // 첫 번째와 두 번째 질문 선택
    if (questions.length > 1) {
      setSelectedCategories([questions[0][0], questions[1][0]]);
    }
  }, [questions]);

  return (
    <section className='overview-section'>
      <h2>OVERVIEW</h2>
      <div className='renewal-container'>
        <div className='question-container'>
          {selectedCategories.map((selectedCategory) => (
            <>
              {selectedCategory && (
                QuestionData[selectedCategory].map((item, index) => (
                  <div key={index}>
                    <h3>Q : {item.question}</h3>
                    <p>A : {item.answer}</p>
                  </div>
                ))
              )}
            </>
          ))}
        </div>
        <figure>
          <img src="#" alt="#" />
        </figure>
      </div>
    </section>
  );
}