import React, { useState, useEffect } from 'react';
import QuestionData from './Question.json'; // 파일 경로를 실제 파일 경로로 수정

export default function OverView(props) {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // JSON 파일에서 질문 데이터 불러오기
    setQuestions(Object.entries(QuestionData));
  }, []);

  return (
    <section className='overview-section'>
      <h2>OVERVIEW</h2>
      <div className='renewal-container'>
        <div className='question-container'>
          {questions.map(([category, items], index) => (
            <div key={index}>
              <h3>{category}</h3>
              {items.map((item, subIndex) => (
                <div key={subIndex}>
                  <p>{item.question}</p>
                  <p>{item.answer}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
        <figure>
          <img src="#" alt="#" />
        </figure>
      </div>
    </section>
  );
}