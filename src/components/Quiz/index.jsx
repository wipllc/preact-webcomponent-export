import {
  Assessment,
  Body,
  Description,
  Headline,
  NextButton,
  QuizContainer,
  Title,
} from "./styles";
import { IoMdArrowBack, IoMdArrowForward, IoMdClose } from "react-icons/io";

import { MdOutlineDragIndicator } from "react-icons/md";
import Spinner from "./Spinner";
import arrayShuffle from "array-shuffle";
import { getAudienceSlug } from "./constants";
import { getQuizResult } from "./utils";
import originalQuestions from "./data.json";
import { useMediaQuery } from "react-responsive";
import { useState } from "preact/hooks";

export default function Quiz(props) {

  const [questions, setQuestions] = useState(
    JSON.parse(JSON.stringify(originalQuestions))
  );
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]); // chosen answerss
  const [chosenAnswers, setChosenAnswers] = useState([]); // chosen answers
  const [loading, setLoading] = useState(false);

  const currentAnswers = arrayShuffle(questions[currentQuestion].answers); // current answers
  const [availableAnswers, setAvailableAnswers] = useState(currentAnswers); // available answers
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 480px)" });

  // add answer to the list of chosen answers and remove from the list of available answers
  const handleChooseAnswer = (answer) => {
    setChosenAnswers([...chosenAnswers, answer]);
    answer.selected = true;
  };

  const handleAnswerOptionClick = (chosenAnswers) => {
    const finalAnswers = [];
    chosenAnswers.map((answer) => finalAnswers.push(answer.index));
    setAnswers([...answers, finalAnswers]);

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      restartQuestion();
    }

    if (nextQuestion === questions.length) {
      setLoading(true);
      setTimeout(() => {
        doCalculationAndRedirect([...answers, finalAnswers]);
      }, 1);
    }
  };

  // restart question
  const restartQuestion = () => {
    const verification = currentQuestion >= questions.length && currentQuestion;

    if (verification < questions.length) {
      setAvailableAnswers(questions[currentQuestion + 1].answers);
      setChosenAnswers([]);
    }
  };

  // calculation and redirect
  const doCalculationAndRedirect = (values) => {
    const result = getQuizResult(values);

    document.body.style.overflow = `unset`;
    if (history) {
      const audience = getAudienceSlug(result);
      if (audience === AUDIENCE_TYPES.PEOPLE_POWER) {
        history.pushState({}, "", props.ppURL);
      } else if(audience === AUDIENCE_TYPES.IF_YOU_SAY_SO) {
        history.pushState({}, "", props.iyssURL);
      } else if(audience === AUDIENCE_TYPES.TOUGH_COOKIES) {
        history.pushState({}, "", props.tcURL);
      } else if(audience === AUDIENCE_TYPES.DONT_TREAD_ON_ME) {
        history.pushState({}, "", props.dtomURL);
      }
    }
    // router.push(`/audiences/${getAudienceSlug(result)}?quiz`);
  };

  // get random number
  const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <>
      <QuizContainer>
        <div>
          <Headline>
            <button
              type="button"
              onClick={() => {
                props.onExitClick();
              }}
            >
              <IoMdArrowBack size={16} className="arrowIcon" /> Exit Quiz
              <IoMdClose size={16} className="closeIcon" />
            </button>

            <button type="button">
              <span>Part</span> {currentQuestion + 1} / {questions.length}
            </button>
          </Headline>

          <Title>{questions[currentQuestion].title}</Title>

          <Description>{questions[currentQuestion].description}</Description>

          <Assessment>
            <span>{questions[currentQuestion].biggerRuler}</span>

            <svg
              width="341"
              height="14"
              viewBox="0 0 341 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 7L340 7.00003" stroke="black" strokeOpacity="0.33" />
              <path d="M7 1L1 7L7 13" stroke="#ababab" />
              <path d="M337 10L340 7L337 4" stroke="#ababab" />
            </svg>

            <span>{questions[currentQuestion].smallerRuler}</span>
          </Assessment>

          <Body>
            <ul>
              <li>
                <div>
                  <span>1.</span> {questions[currentQuestion].biggerRuler}
                </div>
              </li>
              <li>
                <div>
                  <span>2</span>
                </div>
              </li>
              <li>
                <div>
                  <span>3</span>
                </div>
              </li>
              <li>
                <div>
                  <span>4.</span> {questions[currentQuestion].smallerRuler}
                </div>
              </li>
            </ul>

            {isTabletOrMobile ? (
              <div
                axis="x"
                values={chosenAnswers}
                onReorder={setChosenAnswers}
              >
                {chosenAnswers.map((answer) => (
                  <div key={answer.index} value={answer}>
                    <button type="button">{answer.title}</button>
                  </div>
                ))}
              </div>
            ) : (
              <div
                axis="y"
                values={chosenAnswers}
                onReorder={setChosenAnswers}
              >
                {chosenAnswers.map((answer) => (
                  <div key={answer.index} value={answer}>
                    <button type="button">
                      <MdOutlineDragIndicator size={16} color="#FFFFFF40" />
                      {answer.title}
                    </button>
                  </div>
                ))}
              </div>
            )}

            {chosenAnswers.length === availableAnswers.length ? (
              <NextButton
                type="button"
                disabled={loading}
                onClick={() => {
                  handleAnswerOptionClick(chosenAnswers);
                  loading && onExitClick();
                }}
              >
                {loading ? (
                  <Spinner />
                ) : (
                  <>
                    {currentQuestion + 1 >= questions.length
                      ? "See Results"
                      : "Next Question"}
                    <IoMdArrowForward size={16} />
                  </>
                )}
              </NextButton>
            ) : (
              <ul>
                {availableAnswers.map((answer, index) => (
                  <li
                    key={index++}
                    initial={{
                      opacity: 0,
                      translateY:
                        index % 2 === 0
                          ? `-${getRandomInt(10, 100)}`
                          : `${getRandomInt(10, 100)}`,
                      translateX: `-${getRandomInt(10, 100)}`,
                    }}
                    animate={{ opacity: 1, translateY: 0, translateX: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.3 }}
                  >
                    <button
                      type="button"
                      disabled={answer.selected}
                      onClick={() => handleChooseAnswer(answer)}
                    >
                      {answer.selected ? ` ` : answer.title}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </Body>
        </div>
      </QuizContainer>
    </>
  );
}
