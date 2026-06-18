import { useState, useEffect } from "react";
import { FormItem } from "./FormItem";

export const MultiStepForm = ({ step, onPageUpdate, list, pagesAnswers }) => {
  const [answers, setAnswers] = useState({ index: step, ...(pagesAnswers[step] || {}) });

  useEffect(() => {
    setAnswers({ index: step, ...(pagesAnswers[step] || {}) });
  }, [step, pagesAnswers]);

  useEffect(() => {
    if (Object.keys(answers).length > 1) {
      onPageUpdate(step, answers);
    }
  }, [answers, onPageUpdate, step]);

  const updateAnswers = (value, category) => {
    setAnswers({...answers, [category]: value});
  };

  return (
    <div className="text-left">
      {
        list[step - 1].items?.map((item, index) => {
          return (
            <FormItem key={`${index}_${item.label}`} item={item} onChange={updateAnswers} answer={pagesAnswers[step] ? pagesAnswers[step][item.value] : null} />
          )
        })
      }
    </div>
  );
};
