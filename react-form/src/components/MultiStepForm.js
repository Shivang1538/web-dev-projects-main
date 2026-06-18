import { FormItem } from "./FormItem";

export const MultiStepForm = ({ step, onPageUpdate, list, pagesAnswers }) => {
  const currentAnswers = pagesAnswers[step] || {};

  const updateAnswers = (value, category) => {
    onPageUpdate(step, { ...currentAnswers, [category]: value });
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
