import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, onDelete, onUpdateCorrectAnswer }) {  

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
      {questions.map((q) => (
          <QuestionItem 
            key={q.id} 
            question={q} 
            onDelete={onDelete}  
            onUpdateCorrectAnswer={onUpdateCorrectAnswer} 
          />
        ))}
      </ul>
    </section>
  );
}

export default QuestionList;