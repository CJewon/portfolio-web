import React, { useState, useEffect } from 'react';
import QuestionData from './Question.json'; // 파일 경로를 실제 파일 경로로 수정

export default function End(props) {
  const [questions, setQuestions] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    // JSON 파일에서 질문 데이터 불러오기
    setQuestions(Object.entries(QuestionData));
  }, []);

  useEffect(() => {
    // 네번째 다섯번째 카테고리 선택
    if (questions.length > 1) {
      setSelectedCategories([questions[3][0], questions[4][0]]);
    }
  }, [questions]);

  return (
    <section className='end-section'>
      <h2>END</h2>
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
      </div>
    </section>
  );
}