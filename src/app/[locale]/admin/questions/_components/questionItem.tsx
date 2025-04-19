"use client";
import { Question } from '@prisma/client';
import React from 'react';
import EditQuestion from './EditQuestion';
import DeleteQuestion from './DeleteQuestion';

// واجهة التفاعل مع الأسئلة
const QuestionItem = ({ question }: { question: Question[] }) => {
  return (
    <div className="space-y-4">
      {question.map((item) => (
        <div
          key={item.id}
          className="flex items-center justify-between p-4 bg-white shadow-md rounded-lg hover:bg-gray-100 transition-all duration-300"
        >
          {/* عرض السؤال والإجابة باللغة الإنجليزية */}
          <div className="flex-1 pr-4">
            <h3 className="text-xl font-semibold text-gray-800">{item.question_en}</h3>
            <p className="text-gray-600">{item.answer_en}</p>
          </div>

          {/* عرض السؤال والإجابة باللغة العربية */}
          <div className="flex-1 pl-4">
            <h3 className="text-xl font-semibold text-gray-800">{item.question_ar}</h3>
            <p className="text-gray-600">{item.answer_ar}</p>
          </div>

          {/* أزرار الحذف والتعديل */}
          <div className="flex space-x-4">
            <button
              className="text-blue-500 hover:text-blue-700 transition duration-300"
              
            >
              <EditQuestion question={item} />
            </button>

            <button
              className="text-red-500 hover:text-red-700 transition duration-300"
            
            >
             <DeleteQuestion id={item.id} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};



export default QuestionItem;
