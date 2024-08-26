import { ChangeEvent, Fragment, FunctionComponent } from 'react';
import { Button } from '../../../../components/Button/Button';
import { Gap } from '../../../../components/Gap/Gap';
import { useThemeClassName } from '../../../../hooks/useThemeClassName';
import { Theme, ThemeInUi } from '../../../../context/ThemeContext';
import { Typography } from '../../../../components/Typography/Typography';
import { useLocalizationCaptions } from '../../../../hooks/useLocalizationCaptions';
import { LocalizationKey } from '../../../../localization';
import { Textarea } from '../../../../components/Textarea/Textarea';
import { roomReviewMaxLength } from '../../../../constants';

export interface RoomQuestionEvaluationValue {
  mark?: number | null;
  review?: string | null;
}

interface RoomQuestionEvaluationPorps {
  readOnly?: boolean;
  value: RoomQuestionEvaluationValue;
  onChange: (newValue: RoomQuestionEvaluationValue) => void;
}

const themeClassNames: Record<ThemeInUi, Record<'active' | 'nonActive', string>> = {
  [Theme.Dark]: {
    active: '!bg-dark-blue',
    nonActive: 'bg-dark-input',
  },
  [Theme.Light]: {
    active: 'text-white !bg-dark',
    nonActive: 'bg-blue-light',
  },
};

export const RoomQuestionEvaluation: FunctionComponent<RoomQuestionEvaluationPorps> = ({
  readOnly,
  value,
  onChange,
}) => {
  const commonButtonClassName = 'w-1.75 h-1.75 min-h-unset p-0.375';
  const themeClassName = useThemeClassName(themeClassNames);
  const localizationCaptions = useLocalizationCaptions();
  const markGroups = [
    {
      marks: [1, 2, 3],
      caption: localizationCaptions[LocalizationKey.MarksGroupBad],
    },
    {
      marks: [4, 5],
      caption: localizationCaptions[LocalizationKey.MarksGroupMedium],
    },
    {
      marks: [6, 7, 8],
      caption: localizationCaptions[LocalizationKey.MarksGroupGood],
    },
    {
      marks: [9, 10],
      caption: localizationCaptions[LocalizationKey.MarksGroupPerfect],
    },
  ];

  const handleMarkChange = (mark: number) => () => {
    if (readOnly) {
      return;
    }
    onChange({
      ...value,
      mark,
    });
  };

  const handleReviewChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    if (readOnly) {
      return;
    }
    onChange({
      ...value,
      review: event.target.value,
    });
  };

  return (
    <div>
      <div className='text-left'>
        <Typography size='l' bold>
          {localizationCaptions[LocalizationKey.RoomQuestionEvaluationTitle]}
        </Typography>
      </div>
      <Gap sizeRem={1} />
      <div className='flex'>
        {markGroups.map((markGroup, markGroupIndex) => (
          <Fragment key={`markGroup${markGroupIndex}`}>
            <div>
              <div className={`rounded-l-2 rounded-r-2 overflow-hidden whitespace-nowrap ${themeClassName['nonActive']}`}>
                {markGroup.marks.map((markVal) => (
                  <Button
                    key={markVal}
                    variant='text'
                    className={`${commonButtonClassName} ${themeClassName[markVal === value.mark ? 'active' : 'nonActive']}`}
                    onClick={handleMarkChange(markVal)}
                  >
                    {markVal}
                  </Button>
                ))}
              </div>
              <Typography size='s' secondary>{markGroup.caption}</Typography>
            </div>
            {markGroupIndex !== markGroups.length - 1 && (<Gap sizeRem={0.375} horizontal />)}
          </ Fragment>
        ))}
      </div>
      <Gap sizeRem={1} />
      <div className='flex'>
        <Textarea
          className='flex-1 h-6.25'
          maxLength={roomReviewMaxLength}
          readOnly={readOnly}
          value={value.review || ''}
          onInput={handleReviewChange}
        />
      </div>
    </div>
  )
};
