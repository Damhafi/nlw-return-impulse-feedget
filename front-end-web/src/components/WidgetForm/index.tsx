//REACT
import { useState } from "react";

//IMPORTS COMPONENTS
import { CloseButton } from "../CloseButton";

//IMPORTS IMAGES
import bugImageUrl from "../../assets/bug.svg";
import ideiaImageUrl from "../../assets/ideia.svg";
import outroImageUrl from "../../assets/outro.svg";
import { FeedbackTypeStep } from "./Steps/FeedBackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";

export const feedbacktypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Botão de Reportar Problema",
    },
  },
  IDEIA: {
    title: "IDEIA",
    image: {
      source: ideiaImageUrl,
      alt: "Botão de Reportar Ideia",
    },
  },
  OUTRO: {
    title: "OUTRO",
    image: {
      source: outroImageUrl,
      alt: "Botão de Reportar Algo",
    },
  },
};

export type FeedbackType = keyof typeof feedbacktypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSend, setFeedbackSend] = useState(false);

  function handleRestartFeedback() {
    setFeedbackSend(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem) md:w-auto">
      {feedbackSend ? (
        <FeedbackSuccessStep 
        onFeedbackRestartRequest={handleRestartFeedback}/>
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContentStep
              feedbackType={feedbackType}
              onFeedbackRestartRequest={handleRestartFeedback}
              onFeedbackSend={() => setFeedbackSend(true)}
            />
          )}
        </>
      )}

      <footer className="text-xs text-neutral-400">
        Feito por{" "}
        <a href="" className="underline underline-offset-2">
          Hafi
        </a>
      </footer>
    </div>
  );
}
