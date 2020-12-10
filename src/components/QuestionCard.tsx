import React from "react";
// Types
import { AnswerObject } from "../App";
// styles
import { Wraper, ButtonWraper } from "./QuestionCard.styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNr: number;
  totalQuestion: number;
};

const QuestionCard: React.FC<Props> = ({
  question,
  answers,
  callback,
  questionNr,
  totalQuestion,
  userAnswer,
}) => (
  <Wraper>
    <p className="number">
      Question: {questionNr} / {totalQuestion}
    </p>
    <p dangerouslySetInnerHTML={{ __html: question }} />
    <div>
      {answers?.map((answer) => (
        <ButtonWraper
          key={answer}
          correct={userAnswer?.correctAnswer === answer}
          userClicked={userAnswer?.answer === answer}
        >
          <button
            disabled={userAnswer ? true : false}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        </ButtonWraper>
      ))}
    </div>
  </Wraper>
);

export default QuestionCard;
