import React, { useState, useEffect } from 'react';
import Question from './Question.json'; // 파일 경로를 실제 파일 경로로 수정

export default function Design(props) {
  const [questions, setQuestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    // JSON 파일에서 질문 데이터 불러오기
    setQuestions(Object.entries(Question));
  }, []);

  useEffect(() => {
    // 세 번째 질문선택
    if (questions.length > 0) {
      setSelectedCategory(questions[2][0]);
    }
  }, [questions]);

  return (
    <section className='design-section'>
      <h2>Design</h2>
      <div className='renewal-container'>
        <div className='question-container'>
          <div>
            {selectedCategory && Question[selectedCategory].map((item, index) => (
                <div key={index}>
                  <h3>Q : {item.question}</h3>
                  <p>A : {item.answer}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}