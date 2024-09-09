import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { useApiMethod } from '../../hooks/useApiMethod';
import { GetAnswerParams, roomQuestionApiDeclaration } from '../../apiDeclarations';
import { Loader } from '../Loader/Loader';
import { Typography } from '../Typography/Typography';
import { RoomQuestionAnswer } from '../../types/room';
import { useLocalizationCaptions } from '../../hooks/useLocalizationCaptions';
import { LocalizationKey } from '../../localization';
import { Gap } from '../Gap/Gap';
import { SwitcherButton } from '../SwitcherButton/SwitcherButton';
import { CodeEditor } from '../CodeEditor/CodeEditor';
import { CodeEditorLang } from '../../types/question';
import { Theme, ThemeContext } from '../../context/ThemeContext';

interface QuestionAnswerDetailsProps {
  roomId: string;
  questionId: string;
  questionTitle: string;
}

export const QuestionAnswerDetails: FunctionComponent<QuestionAnswerDetailsProps> = ({
  roomId,
  questionId,
  questionTitle,
}) => {
  const localizationCaptions = useLocalizationCaptions();
  const { themeInUi } = useContext(ThemeContext);
  const { apiMethodState, fetchData } = useApiMethod<RoomQuestionAnswer, GetAnswerParams>(roomQuestionApiDeclaration.getAnswer);
  const { process: { loading, error }, data } = apiMethodState;
  const [codeQuestionTab, setCodeQuestionTab] = useState<0 | 1>(0);
  const answerCodeEditorContent = data?.details[data?.details.length - 1]?.answerCodeEditorContent;
  const codeEditorValue = codeQuestionTab === 0 ?
    data?.codeEditor?.content || '' :
    answerCodeEditorContent;

  useEffect(() => {
    if (!roomId || !questionId) {
      return;
    }
    fetchData({
      roomId,
      questionId,
    });
  }, [roomId, questionId, fetchData]);

  if (loading) {
    return (
      <Loader />
    );
  }

  if (error) {
    return (
      <Typography error size='m'>{error}</Typography>
    );
  }

  return (
    <div className='text-left flex flex-col'>
      <Typography size='xl' bold>
        {questionTitle}
      </Typography>
      <Gap sizeRem={2.25} />
      {(data?.codeEditor || answerCodeEditorContent) && (
        <>
          <SwitcherButton
            captions={[
              localizationCaptions[LocalizationKey.QuestionCode],
              localizationCaptions[LocalizationKey.AnswerCode],
            ]}
            activeIndex={codeQuestionTab}
            {...(themeInUi === Theme.Dark && {
              variant: 'alternative',
            })}
            onClick={setCodeQuestionTab}
          />
          <Gap sizeRem={1} />
          <div className='h-32.25'>
            <CodeEditor
              language={data.codeEditor?.lang || CodeEditorLang.Plaintext}
              languages={[data.codeEditor?.lang || CodeEditorLang.Plaintext]}
              readOnly
              alwaysConsumeMouseWheel={false}
              scrollBeyondLastLine={false}
              value={codeEditorValue}
            />
          </div>
          <Gap sizeRem={2.25} />
        </>
      )}
      <Typography size='m' bold>
        {localizationCaptions[LocalizationKey.QurstionTranscription]}
      </Typography>
      <Gap sizeRem={1} />
      <div className='flex flex-col'>
        {data?.details.map(detail => detail.transcription.map(transcription => (
          <Typography key={transcription.id} size='m'>
            {transcription.user.nickname}: {transcription.payload}
          </Typography>
        )))}
      </div>
    </div>
  );
};