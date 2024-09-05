import { LocalizationLang } from './context/LocalizationContext';

export const enum LocalizationKey {
  SpeechRecognitionLang,
  AppName,
  LoginRequired,
  WelcomeMessage,
  HighlightsRoomsPageName,
  CurrentRoomsPageName,
  ClosedRoomsPageName,
  RoomsPageName,
  QuestionsPageName,
  CategoriesPageName,
  RoomReviewPageName,
  CandidateOpinion,
  CandidateMarks,
  DoNotRate,
  UnauthorizedMessage,
  Page,
  LogOut,
  Edit,
  Viewer,
  Viewers,
  Expert,
  Examinee,
  Save,
  Saved,
  CreateQuestion,
  EditQuestion,
  QuestionText,
  QuestionType,
  QuestionTypePublic,
  QuestionTypePrivate,
  QuestionCodeEditor,
  QuestionAddCodeEditor,
  QuestionRemoveCodeEditor,
  QuestionAnswerOptionDefaultName,
  QuestionAnswerOptions,
  QuestionAddAnswerOption,
  QuestionDeleteAnswerOption,
  QuestionAnswerOptionName,
  CreateCategory,
  CategoryName,
  CategoryParent,
  Create,
  Continue,
  Cancel,
  Close,
  CloselWithoutSave,
  Stay,
  Error,
  NotSelected,
  QuestionCreatedSuccessfully,
  QuestionUpdatedSuccessfully,
  ShowClosedQuestions,
  SelectActiveQuestion,
  CreatingRoomQuestion,
  CategoryCreatedSuccessfully,
  CategoryUpdatedSuccessfully,
  LoadingRoom,
  ErrorLoadingRoom,
  LoadingRoomState,
  ErrorLoadingRoomState,
  RoomCreated,
  ErrorSendingActiveQuestion,
  ErrorCreatingRoomQuestion,
  ReactionsLoadingError,
  ErrorSendingReaction,
  GetRoomEvent,
  ErrorGetRoomEvent,
  ErrorSendingRoomEvent,
  TermsOfUsageAcceptance,
  TermsOfUsage,
  Login,
  LikeTable,
  DislikeTable,
  Like,
  Dislike,
  CodeEditor,
  Question,
  ActiveQuestion,
  QuestionsSummary,
  FailedToCalculateMark,
  RoomAnayticsSummary,
  MarkNotCalculated,
  MarkWithPlus,
  MarkWithMinus,
  MarkAveragePrefix,
  MarkAverage,
  MarkPostfixCool,
  MarkPostfixAverage,
  MarkPostfixBad,
  MarkSmmary,
  CloseRoom,
  CloseRoomWithoutReview,
  StartRoom,
  StartReviewRoom,
  CloseRoomModalTitle,
  StartReviewRoomModalTitle,
  CloseRoomLoading,
  Yes,
  No,
  RoomStatusNew,
  RoomStatusActive,
  RoomStatusReview,
  RoomStatusClose,
  Reviews,
  AddReview,
  AddReviewPlaceholder,
  Send,
  WithLove,
  TagsPlaceholder,
  TagsLoading,
  NoTags,
  SearchByTags,
  BuildHash,
  CreateRoom,
  NewRoom,
  EditRoom,
  AddingRoomQuestions,
  CreatingRoom,
  CreateRoomStep1,
  CreateRoomStep2,
  RoomName,
  RoomNamePrompt,
  RoomDateAndTime,
  RoomQuestions,
  RoomSelectedQuestions,
  RoomDuration,
  AddRoomQuestions,
  RoomParticipants,
  RoomExperts,
  RoomExaminees,
  SearchByValue,
  Recognized,
  UserStreamError,
  ChatWelcomeMessage,
  ChatWelcomeMessageNickname,
  ChatMessagePlaceholder,
  SendToChat,
  SearchByName,
  ParticipatingRooms,
  RootCategories,
  Category,
  Subcategory,
  SelectCategorySubcategory,
  ClosedRooms,
  ToRooms,
  Warning,
  CallRecording,
  VoiceRecognitionNotSupported,
  VoiceRecognition,
  Archive,
  ArchiveLoading,
  NoQuestionsSelector,
  Join,
  JoiningRoom,
  JoinAs,
  SetupDevices,
  Camera,
  Microphone,
  Settings,
  Chat,
  ScreenShare,
  Exit,
  ChatTab,
  RecognitionTab,
  Theme,
  ThemeSystem,
  ThemeLight,
  ThemeDark,
  Language,
  FontSize,
  You,
  NoRecords,
  ConnectionError,
  RoomConnectionError,
  LocalizationLangEn,
  LocalizationLangRu,
  AiAssistantName,
  AiAssistantWelcomePrompt,
  ErrorApplyRoomInvite,
  RoomInvitesLoading,
  Invitations,
  InviteViaLink,
  RefreshAll,
  NextRoomQuestion,
  CopiedToClipboard,
  Of,
  RoomQuestionEvaluationTitle,
  SaveRoomQuestionEvaluationWarningLine1,
  SaveRoomQuestionEvaluationWarningLine2,
  CloseRoomWithoutQuestionEvaluationWarningLine1,
  CloseRoomWithoutQuestionEvaluationWarningLine2,
  MarksGroupBad,
  MarksGroupMedium,
  MarksGroupGood,
  MarksGroupPerfect,
  NotFound,
  AverageCandidateMark,
  MarksForQuestions,
  OpinionsAndMarks,
  QuestionAnswerDetails,
  EmptyRoomNameError,
  RoomEmptyStartTimeError,
  RoomStartTimeMustBeGreaterError,
  RoomEmptyQuestionsListError,
  InterviewHistoryTitle,
  RoomReviewSave,
  RoomReviewAlreadyGiven,
  RoomReviewWaiting,
  EmptyCommentQuestionEvaluation,
  WeAwareOfProblem,
  CurrentQuestionNotBeSaved,
  CurrentRoomNotBeSaved,
  LoadingAccountError,
  LoadingAccountErrorTitle,
};

export const LocalizationCaptions: Record<LocalizationLang, Record<LocalizationKey, string>> = {
  [LocalizationLang.en]: {
    [LocalizationKey.SpeechRecognitionLang]: 'en',
    [LocalizationKey.AppName]: 'Interview Platform',
    [LocalizationKey.LoginRequired]: 'To view this page you need to log in to your account',
    [LocalizationKey.WelcomeMessage]: 'Welcome',
    [LocalizationKey.HighlightsRoomsPageName]: 'Home',
    [LocalizationKey.CurrentRoomsPageName]: 'Current rooms',
    [LocalizationKey.ClosedRoomsPageName]: 'Closed rooms',
    [LocalizationKey.RoomsPageName]: 'Meetings',
    [LocalizationKey.QuestionsPageName]: 'Questions',
    [LocalizationKey.CategoriesPageName]: 'Categories',
    [LocalizationKey.RoomReviewPageName]: 'Interview results',
    [LocalizationKey.CandidateOpinion]: 'Your opinion about candidate',
    [LocalizationKey.CandidateMarks]: 'Your assessments of the candidate and comments on questions',
    [LocalizationKey.DoNotRate]: 'Do not rate',
    [LocalizationKey.UnauthorizedMessage]: 'Unauthorized',
    [LocalizationKey.Page]: 'Page',
    [LocalizationKey.LogOut]: 'Logout',
    [LocalizationKey.Edit]: 'Edit',
    [LocalizationKey.Viewer]: 'Viewer',
    [LocalizationKey.Viewers]: 'Viewerss',
    [LocalizationKey.Expert]: 'Expert',
    [LocalizationKey.Examinee]: 'Examinee',
    [LocalizationKey.Save]: 'Save',
    [LocalizationKey.Saved]: 'Saved',
    [LocalizationKey.CreateQuestion]: 'Creating question',
    [LocalizationKey.EditQuestion]: 'Editing question',
    [LocalizationKey.QuestionText]: 'Text',
    [LocalizationKey.QuestionType]: 'Type',
    [LocalizationKey.QuestionTypePrivate]: 'Private',
    [LocalizationKey.QuestionCodeEditor]: 'Question code',
    [LocalizationKey.QuestionAddCodeEditor]: 'Add question code',
    [LocalizationKey.QuestionRemoveCodeEditor]: 'Remove code',
    [LocalizationKey.QuestionAnswerOptionDefaultName]: 'Answer',
    [LocalizationKey.QuestionAnswerOptions]: 'Answer options',
    [LocalizationKey.QuestionAddAnswerOption]: 'Add answer option',
    [LocalizationKey.QuestionDeleteAnswerOption]: 'Delete answer option',
    [LocalizationKey.QuestionAnswerOptionName]: 'Answer option name',
    [LocalizationKey.QuestionTypePublic]: 'Public',
    [LocalizationKey.CreateCategory]: 'Create category',
    [LocalizationKey.CategoryName]: 'Category name',
    [LocalizationKey.CategoryParent]: 'Category parent',
    [LocalizationKey.Create]: 'Create',
    [LocalizationKey.Continue]: 'Continue',
    [LocalizationKey.Cancel]: 'Cancel',
    [LocalizationKey.Close]: 'Close',
    [LocalizationKey.CloselWithoutSave]: 'Exit without saving',
    [LocalizationKey.Stay]: 'Stay',
    [LocalizationKey.Error]: 'Error',
    [LocalizationKey.NotSelected]: 'Not selected',
    [LocalizationKey.QuestionCreatedSuccessfully]: 'Question created successfully',
    [LocalizationKey.QuestionUpdatedSuccessfully]: 'Question updated successfully',
    [LocalizationKey.ShowClosedQuestions]: 'Show closed questions',
    [LocalizationKey.SelectActiveQuestion]: 'Select current question',
    [LocalizationKey.CreatingRoomQuestion]: 'Creating current question',
    [LocalizationKey.CategoryCreatedSuccessfully]: 'Category created successfully',
    [LocalizationKey.CategoryUpdatedSuccessfully]: 'Category updated successfully',
    [LocalizationKey.LoadingRoom]: 'Loading meeting',
    [LocalizationKey.ErrorLoadingRoom]: 'Error loading meeting',
    [LocalizationKey.LoadingRoomState]: 'Loading meeting state',
    [LocalizationKey.ErrorLoadingRoomState]: 'Error loading meeting state',
    [LocalizationKey.RoomCreated]: 'Meeting created',
    [LocalizationKey.ErrorSendingActiveQuestion]: 'Error sending current question',
    [LocalizationKey.ErrorCreatingRoomQuestion]: 'Error creating question',
    [LocalizationKey.ReactionsLoadingError]: 'Reactions loading error',
    [LocalizationKey.ErrorSendingReaction]: 'Error sending reaction',
    [LocalizationKey.GetRoomEvent]: 'Receiving meeting event',
    [LocalizationKey.ErrorGetRoomEvent]: 'Error receiving meeting event',
    [LocalizationKey.ErrorSendingRoomEvent]: 'Error sending meeting event',
    [LocalizationKey.TermsOfUsageAcceptance]: 'By login, you acknowledge that you have read, understood, and agree to ',
    [LocalizationKey.TermsOfUsage]: 'Terms of usage',
    [LocalizationKey.Login]: 'Login',
    [LocalizationKey.LikeTable]: '👍',
    [LocalizationKey.DislikeTable]: '👎',
    [LocalizationKey.Like]: 'Like',
    [LocalizationKey.Dislike]: 'Dislike',
    [LocalizationKey.CodeEditor]: 'Code editor',
    [LocalizationKey.Question]: 'Question',
    [LocalizationKey.ActiveQuestion]: 'Current question',
    [LocalizationKey.QuestionsSummary]: 'Questions summary',
    [LocalizationKey.FailedToCalculateMark]: 'Failed to calculate mark',
    [LocalizationKey.RoomAnayticsSummary]: 'Meeting anaytics',
    [LocalizationKey.MarkNotCalculated]: 'Mark not calculated',
    [LocalizationKey.MarkWithPlus]: 'with plus',
    [LocalizationKey.MarkWithMinus]: 'witn minus',
    [LocalizationKey.MarkAveragePrefix]: 'Clear',
    [LocalizationKey.MarkAverage]: 'average',
    [LocalizationKey.MarkPostfixCool]: 'Cool.',
    [LocalizationKey.MarkPostfixAverage]: 'Average.',
    [LocalizationKey.MarkPostfixBad]: 'Bad.',
    [LocalizationKey.MarkSmmary]: 'Mark smmary',
    [LocalizationKey.CloseRoom]: 'Close meeting',
    [LocalizationKey.CloseRoomWithoutReview]: 'Close meeting without waiting for evaluations',
    [LocalizationKey.StartRoom]: 'Start interview',
    [LocalizationKey.StartReviewRoom]: 'Start meeting review.',
    [LocalizationKey.CloseRoomModalTitle]: 'Do you really want to close meeting?',
    [LocalizationKey.StartReviewRoomModalTitle]: 'Start filling out meeting report?',
    [LocalizationKey.CloseRoomLoading]: 'Closing meeting',
    [LocalizationKey.Yes]: 'Yes ✔️',
    [LocalizationKey.No]: 'No ❌',
    [LocalizationKey.RoomStatusNew]: 'Waiting to start',
    [LocalizationKey.RoomStatusActive]: 'Active',
    [LocalizationKey.RoomStatusReview]: 'Review',
    [LocalizationKey.RoomStatusClose]: 'Close',
    [LocalizationKey.Reviews]: 'Reviews',
    [LocalizationKey.AddReview]: 'Add review',
    [LocalizationKey.AddReviewPlaceholder]: 'Write a review here',
    [LocalizationKey.Send]: 'Send',
    [LocalizationKey.WithLove]: 'WithLove',
    [LocalizationKey.TagsPlaceholder]: 'Select tags',
    [LocalizationKey.TagsLoading]: 'Loading tags',
    [LocalizationKey.NoTags]: 'No tags',
    [LocalizationKey.SearchByTags]: 'Search by tags',
    [LocalizationKey.BuildHash]: 'Build',
    [LocalizationKey.CreateRoom]: 'Create meeting',
    [LocalizationKey.NewRoom]: 'New room',
    [LocalizationKey.EditRoom]: 'Editing room',
    [LocalizationKey.AddingRoomQuestions]: 'Adding Interview Questions',
    [LocalizationKey.CreatingRoom]: 'Creating meeting',
    [LocalizationKey.CreateRoomStep1]: 'Step 1 - Filling the Room',
    [LocalizationKey.CreateRoomStep2]: 'Step 2 - Inviting Participants',
    [LocalizationKey.RoomName]: 'Meeting name',
    [LocalizationKey.RoomNamePrompt]: 'In the title, indicate the name of the candidate and the position for which the interview will be held',
    [LocalizationKey.RoomDateAndTime]: 'Date and time',
    [LocalizationKey.RoomQuestions]: 'Questions list',
    [LocalizationKey.RoomSelectedQuestions]: 'Selected questions',
    [LocalizationKey.RoomDuration]: 'Duration',
    [LocalizationKey.AddRoomQuestions]: 'Add questions',
    [LocalizationKey.RoomParticipants]: 'Participants',
    [LocalizationKey.RoomExperts]: 'Experts',
    [LocalizationKey.RoomExaminees]: 'Examinees',
    [LocalizationKey.SearchByValue]: 'Search by value',
    [LocalizationKey.Recognized]: '🗣️',
    [LocalizationKey.UserStreamError]: 'Unable to access camera and microphone',
    [LocalizationKey.ChatWelcomeMessage]: 'Welcome to chat',
    [LocalizationKey.ChatWelcomeMessageNickname]: 'System',
    [LocalizationKey.ChatMessagePlaceholder]: 'Write to chat',
    [LocalizationKey.SendToChat]: 'Send',
    [LocalizationKey.SearchByName]: 'Search by name',
    [LocalizationKey.ParticipatingRooms]: 'I\'m participating',
    [LocalizationKey.RootCategories]: 'Root categories',
    [LocalizationKey.Category]: 'Category',
    [LocalizationKey.Subcategory]: 'Subcategory',
    [LocalizationKey.SelectCategorySubcategory]: 'To search and add a question, specify a category and subcategory, and then select questions from the list',
    [LocalizationKey.ClosedRooms]: 'Closed',
    [LocalizationKey.ToRooms]: 'Go to meetings',
    [LocalizationKey.Warning]: 'WARNING!',
    [LocalizationKey.CallRecording]: 'The meeting is being recorded',
    [LocalizationKey.VoiceRecognitionNotSupported]: 'Voice recognition is not supported by your browser',
    [LocalizationKey.VoiceRecognition]: 'Transcription',
    [LocalizationKey.Archive]: 'Archive',
    [LocalizationKey.ArchiveLoading]: 'Archiving...',
    [LocalizationKey.NoQuestionsSelector]: 'No questions available',
    [LocalizationKey.Join]: 'Join',
    [LocalizationKey.JoiningRoom]: 'Ready to join?',
    [LocalizationKey.JoinAs]: 'Join as',
    [LocalizationKey.SetupDevices]: 'Set up camera and microphone',
    [LocalizationKey.Camera]: 'Camera',
    [LocalizationKey.Microphone]: 'Mic',
    [LocalizationKey.Settings]: 'Settings',
    [LocalizationKey.Chat]: 'Chat',
    [LocalizationKey.ScreenShare]: 'Screen share',
    [LocalizationKey.Exit]: 'Leave',
    [LocalizationKey.ChatTab]: 'Chat',
    [LocalizationKey.RecognitionTab]: 'Transcription',
    [LocalizationKey.Theme]: 'Theme',
    [LocalizationKey.ThemeSystem]: 'System',
    [LocalizationKey.ThemeLight]: 'Light theme',
    [LocalizationKey.ThemeDark]: 'Dark theme',
    [LocalizationKey.Language]: 'Language',
    [LocalizationKey.FontSize]: 'FontSize',
    [LocalizationKey.You]: 'You',
    [LocalizationKey.NoRecords]: 'List is empty',
    [LocalizationKey.ConnectionError]: 'Connection error',
    [LocalizationKey.RoomConnectionError]: 'Connection to the room has been lost',
    [LocalizationKey.LocalizationLangEn]: 'English',
    [LocalizationKey.LocalizationLangRu]: 'Русский',
    [LocalizationKey.AiAssistantName]: 'Michael (Alpha)',
    [LocalizationKey.AiAssistantWelcomePrompt]: 'Hi Michael',
    [LocalizationKey.ErrorApplyRoomInvite]: 'Meeting invitation is invalid',
    [LocalizationKey.RoomInvitesLoading]: 'Loading room invites',
    [LocalizationKey.Invitations]: 'Invitations',
    [LocalizationKey.InviteViaLink]: 'Invite via link',
    [LocalizationKey.RefreshAll]: 'Refresh all',
    [LocalizationKey.NextRoomQuestion]: 'Next question',
    [LocalizationKey.CopiedToClipboard]: 'Copied to clipboard',
    [LocalizationKey.Of]: 'of',
    [LocalizationKey.RoomQuestionEvaluationTitle]: 'Rate the answer',
    [LocalizationKey.SaveRoomQuestionEvaluationWarningLine1]: 'Are you sure you want to save review?',
    [LocalizationKey.SaveRoomQuestionEvaluationWarningLine2]: 'After saving, editing will not be possible.',
    [LocalizationKey.CloseRoomWithoutQuestionEvaluationWarningLine1]: 'Are you sure you want to close review without waiting for other participants\' reviews?',
    [LocalizationKey.CloseRoomWithoutQuestionEvaluationWarningLine2]: 'If other participants leave review, review will end automatically.',
    [LocalizationKey.MarksGroupBad]: 'Bad',
    [LocalizationKey.MarksGroupMedium]: 'Med.',
    [LocalizationKey.MarksGroupGood]: 'Good',
    [LocalizationKey.MarksGroupPerfect]: 'Perfect',
    [LocalizationKey.NotFound]: 'Not found',
    [LocalizationKey.AverageCandidateMark]: 'Average candidate score',
    [LocalizationKey.MarksForQuestions]: 'Points for questions',
    [LocalizationKey.OpinionsAndMarks]: 'Opinions and ratings',
    [LocalizationKey.QuestionAnswerDetails]: 'Question answer details',
    [LocalizationKey.EmptyRoomNameError]: 'Please provide the meeting name',
    [LocalizationKey.RoomEmptyStartTimeError]: 'Please enter meeting start time',
    [LocalizationKey.RoomStartTimeMustBeGreaterError]: 'Meeting start time must be greater than the current time',
    [LocalizationKey.RoomEmptyQuestionsListError]: 'Please add questions to the list of questions',
    [LocalizationKey.InterviewHistoryTitle]: 'Interview history',
    [LocalizationKey.RoomReviewAlreadyGiven]: 'You have already given feedback on the interview. Waiting for evaluation from other participants.',
    [LocalizationKey.RoomReviewSave]: 'Finish review',
    [LocalizationKey.RoomReviewWaiting]: 'Waiting for evaluation from other participants.',
    [LocalizationKey.EmptyCommentQuestionEvaluation]: 'Write a comment to answer the question',
    [LocalizationKey.WeAwareOfProblem]: 'We are already aware of the problem and are working on a solution',
    [LocalizationKey.CurrentQuestionNotBeSaved]: 'Current question will not be saved',
    [LocalizationKey.CurrentRoomNotBeSaved]: 'Current room will not be saved',
    [LocalizationKey.LoadingAccountError]: 'Failed to load user profile',
    [LocalizationKey.LoadingAccountErrorTitle]: 'Account loading error',
  },
  [LocalizationLang.ru]: {
    [LocalizationKey.SpeechRecognitionLang]: 'ru',
    [LocalizationKey.AppName]: 'Interview Platform',
    [LocalizationKey.LoginRequired]: 'Для просмотра данной страницы необходимо войти в аккаунт',
    [LocalizationKey.WelcomeMessage]: 'Добро пожаловать',
    [LocalizationKey.HighlightsRoomsPageName]: 'Главная',
    [LocalizationKey.CurrentRoomsPageName]: 'Актуальные комнаты',
    [LocalizationKey.ClosedRoomsPageName]: 'Завершенные комнаты',
    [LocalizationKey.RoomsPageName]: 'Встречи',
    [LocalizationKey.QuestionsPageName]: 'Вопросы',
    [LocalizationKey.CategoriesPageName]: 'Категории',
    [LocalizationKey.RoomReviewPageName]: 'Результаты собеседования',
    [LocalizationKey.CandidateOpinion]: 'Ваше мнение о кандидате',
    [LocalizationKey.CandidateMarks]: 'Ваши оценки кандидата и комментарии к вопросам',
    [LocalizationKey.DoNotRate]: 'Не оценивать',
    [LocalizationKey.UnauthorizedMessage]: 'Неавторизован',
    [LocalizationKey.Page]: 'Страница',
    [LocalizationKey.LogOut]: 'Выйти',
    [LocalizationKey.Edit]: 'Редактировать',
    [LocalizationKey.Viewer]: 'Зритель',
    [LocalizationKey.Viewers]: 'Зрители',
    [LocalizationKey.Expert]: 'Собеседующий',
    [LocalizationKey.Examinee]: 'Собеседуемый',
    [LocalizationKey.Save]: 'Сохранить',
    [LocalizationKey.Saved]: 'Сохранено',
    [LocalizationKey.CreateQuestion]: 'Создание вопроса',
    [LocalizationKey.EditQuestion]: 'Редактирование вопроса',
    [LocalizationKey.QuestionText]: 'Текст вопроса',
    [LocalizationKey.QuestionType]: 'Тип вопроса',
    [LocalizationKey.QuestionTypePrivate]: 'Личный',
    [LocalizationKey.QuestionCodeEditor]: 'Код к вопросу',
    [LocalizationKey.QuestionAddCodeEditor]: 'Добавить код вопроса',
    [LocalizationKey.QuestionRemoveCodeEditor]: 'Удалить код',
    [LocalizationKey.QuestionAnswerOptionDefaultName]: 'Ответ',
    [LocalizationKey.QuestionAnswerOptions]: 'Варианты ответа',
    [LocalizationKey.QuestionAddAnswerOption]: 'Добавить вариант ответа',
    [LocalizationKey.QuestionDeleteAnswerOption]: 'Удалить вариант ответа',
    [LocalizationKey.QuestionAnswerOptionName]: 'Название варианта ответа',
    [LocalizationKey.QuestionTypePublic]: 'Публичный',
    [LocalizationKey.CreateCategory]: 'Создать категорию',
    [LocalizationKey.CategoryName]: 'Имя категории',
    [LocalizationKey.CategoryParent]: 'Родительская категория',
    [LocalizationKey.Create]: 'Создать',
    [LocalizationKey.Continue]: 'Дальше',
    [LocalizationKey.Cancel]: 'Отменить',
    [LocalizationKey.Close]: 'Закрыть',
    [LocalizationKey.CloselWithoutSave]: 'Выйти без сохранения',
    [LocalizationKey.Stay]: 'Остаться',
    [LocalizationKey.Error]: 'Ошибка',
    [LocalizationKey.NotSelected]: 'Не выбрано',
    [LocalizationKey.QuestionCreatedSuccessfully]: 'Вопрос успешно создан',
    [LocalizationKey.QuestionUpdatedSuccessfully]: 'Вопрос успешно обновлён',
    [LocalizationKey.ShowClosedQuestions]: 'Показывать закрытые вопросы',
    [LocalizationKey.SelectActiveQuestion]: 'Установить текущий вопрос',
    [LocalizationKey.CreatingRoomQuestion]: 'Создание текущего вопроса',
    [LocalizationKey.CategoryCreatedSuccessfully]: 'Категория успешно создана',
    [LocalizationKey.CategoryUpdatedSuccessfully]: 'Категория успешно обновлёна',
    [LocalizationKey.LoadingRoom]: 'Загрузка встречи',
    [LocalizationKey.ErrorLoadingRoom]: 'Ошибка загрузки встречи',
    [LocalizationKey.LoadingRoomState]: 'Загрузка состояния встречи',
    [LocalizationKey.ErrorLoadingRoomState]: 'Ошибка загрузки состояния встречи',
    [LocalizationKey.RoomCreated]: 'Встреча успешно создана',
    [LocalizationKey.ErrorSendingActiveQuestion]: 'Ошибка в установке вопроса',
    [LocalizationKey.ErrorCreatingRoomQuestion]: 'Ошибка создания текущего вопроса',
    [LocalizationKey.ReactionsLoadingError]: 'Ошибка загрузки реакций',
    [LocalizationKey.ErrorSendingReaction]: 'Ошибка в отправке реакции',
    [LocalizationKey.GetRoomEvent]: 'Получение событий',
    [LocalizationKey.ErrorGetRoomEvent]: 'Ошибка в получении событий',
    [LocalizationKey.ErrorSendingRoomEvent]: 'Ошибка в отправке собтия',
    [LocalizationKey.TermsOfUsageAcceptance]: 'Входя, вы подтверждаете, что прочитали, поняли и соглашаетесь с ',
    [LocalizationKey.TermsOfUsage]: 'Условия использования',
    [LocalizationKey.Login]: 'Войти',
    [LocalizationKey.LikeTable]: '👍',
    [LocalizationKey.DislikeTable]: '👎',
    [LocalizationKey.Like]: 'Хорошо',
    [LocalizationKey.Dislike]: 'Плохо',
    [LocalizationKey.CodeEditor]: 'Редактор кода',
    [LocalizationKey.Question]: 'Вопрос',
    [LocalizationKey.ActiveQuestion]: 'Текущий вопрос',
    [LocalizationKey.QuestionsSummary]: 'Отчёт по воросам',
    [LocalizationKey.FailedToCalculateMark]: 'Ошибка при подсчёте оценки',
    [LocalizationKey.RoomAnayticsSummary]: 'Анадитика по встрече',
    [LocalizationKey.MarkNotCalculated]: 'Оценка не рассчитана',
    [LocalizationKey.MarkWithPlus]: 'с плюсом',
    [LocalizationKey.MarkWithMinus]: 'с минусом',
    [LocalizationKey.MarkAveragePrefix]: 'Средне',
    [LocalizationKey.MarkAverage]: 'средне',
    [LocalizationKey.MarkPostfixCool]: 'Круто.',
    [LocalizationKey.MarkPostfixAverage]: 'Средне.',
    [LocalizationKey.MarkPostfixBad]: 'Плохо.',
    [LocalizationKey.MarkSmmary]: 'Итог',
    [LocalizationKey.CloseRoom]: 'Закрыть встречу',
    [LocalizationKey.CloseRoomWithoutReview]: 'Закрыть встречу не дожидаясь оценок',
    [LocalizationKey.StartRoom]: 'Начать собеседование',
    [LocalizationKey.StartReviewRoom]: 'Начать разбор встречи',
    [LocalizationKey.CloseRoomModalTitle]: 'Действительно хотите закрыть встречу?',
    [LocalizationKey.StartReviewRoomModalTitle]: 'Начать заполнение отчёта по встрече?',
    [LocalizationKey.CloseRoomLoading]: 'Закрытие встречи',
    [LocalizationKey.Yes]: 'Да ✔️',
    [LocalizationKey.No]: 'Нет ❌',
    [LocalizationKey.RoomStatusNew]: 'Ожидание начала',
    [LocalizationKey.RoomStatusActive]: 'Идёт встреча',
    [LocalizationKey.RoomStatusReview]: 'Разбор',
    [LocalizationKey.RoomStatusClose]: 'Закрыта',
    [LocalizationKey.Reviews]: 'Отзывы',
    [LocalizationKey.AddReview]: 'Написать отзыв',
    [LocalizationKey.AddReviewPlaceholder]: 'Написать отзыв',
    [LocalizationKey.Send]: 'Отправить',
    [LocalizationKey.WithLove]: 'С любовью',
    [LocalizationKey.TagsPlaceholder]: 'Выбрать тэги',
    [LocalizationKey.TagsLoading]: 'Загрузка тэгов',
    [LocalizationKey.NoTags]: 'Тэги отсутствуют',
    [LocalizationKey.SearchByTags]: 'Поиск по тэгам',
    [LocalizationKey.BuildHash]: 'Сборка',
    [LocalizationKey.CreateRoom]: 'Создать встречу',
    [LocalizationKey.NewRoom]: 'Новая комната',
    [LocalizationKey.EditRoom]: 'Редактирование комнаты',
    [LocalizationKey.AddingRoomQuestions]: 'Добавление вопросов для собеседования',
    [LocalizationKey.CreatingRoom]: 'Создание встречи',
    [LocalizationKey.CreateRoomStep1]: 'Шаг 1 - Наполнение комнаты',
    [LocalizationKey.CreateRoomStep2]: 'Шаг 2 - Приглашение участников',
    [LocalizationKey.RoomName]: 'Имя встречи',
    [LocalizationKey.RoomNamePrompt]: 'В названии укажите имя кандидата и должность, на которую пройдет собеседование',
    [LocalizationKey.RoomDateAndTime]: 'Дата и время',
    [LocalizationKey.RoomQuestions]: 'Список вопросов',
    [LocalizationKey.RoomSelectedQuestions]: 'Выбрано вопросов',
    [LocalizationKey.RoomDuration]: 'Длительность',
    [LocalizationKey.AddRoomQuestions]: 'Добавить вопросы',
    [LocalizationKey.RoomParticipants]: 'Участники',
    [LocalizationKey.RoomExperts]: 'Собеседующие',
    [LocalizationKey.RoomExaminees]: 'Собеседуемые',
    [LocalizationKey.SearchByValue]: 'Поиск по содержимому',
    [LocalizationKey.Recognized]: '🗣️',
    [LocalizationKey.UserStreamError]: 'Не удалось получить доступ к камере и микрофону',
    [LocalizationKey.ChatWelcomeMessage]: 'Добро пожаловать',
    [LocalizationKey.ChatWelcomeMessageNickname]: 'Система',
    [LocalizationKey.ChatMessagePlaceholder]: 'Написать в чат',
    [LocalizationKey.SendToChat]: 'Чат',
    [LocalizationKey.SearchByName]: 'Поиск по имени',
    [LocalizationKey.ParticipatingRooms]: 'Я участвую',
    [LocalizationKey.RootCategories]: 'Корневые категории',
    [LocalizationKey.Category]: 'Категория',
    [LocalizationKey.Subcategory]: 'Подкатегория',
    [LocalizationKey.SelectCategorySubcategory]: 'Для поиска и добавления вопроса укажите категорию и подкатегорию, а затем выберите вопросы из списка',
    [LocalizationKey.ClosedRooms]: 'Закрытые',
    [LocalizationKey.ToRooms]: 'Перейти ко встречам',
    [LocalizationKey.Warning]: 'ВНИМАНИЕ!',
    [LocalizationKey.CallRecording]: 'Встреча записывается',
    [LocalizationKey.VoiceRecognitionNotSupported]: 'Распознавание голоса не поддерживается вашим браузером',
    [LocalizationKey.VoiceRecognition]: 'Транскрипция',
    [LocalizationKey.Archive]: 'В архив',
    [LocalizationKey.ArchiveLoading]: 'Ахивирование...',
    [LocalizationKey.NoQuestionsSelector]: 'Нет доступных вопросов',
    [LocalizationKey.Join]: 'Присоединиться',
    [LocalizationKey.JoiningRoom]: 'Готовы присоединиться?',
    [LocalizationKey.JoinAs]: 'Подключиться как',
    [LocalizationKey.SetupDevices]: 'Настроить камеру и микрофон',
    [LocalizationKey.Camera]: 'Камера',
    [LocalizationKey.Microphone]: 'Аудио',
    [LocalizationKey.Settings]: 'Настройки',
    [LocalizationKey.Chat]: 'Чат',
    [LocalizationKey.ScreenShare]: 'Демонстрация',
    [LocalizationKey.Exit]: 'Выйти',
    [LocalizationKey.ChatTab]: 'Чат',
    [LocalizationKey.RecognitionTab]: 'Транскрипция',
    [LocalizationKey.Theme]: 'Тема оформления',
    [LocalizationKey.ThemeSystem]: 'Системная',
    [LocalizationKey.ThemeLight]: 'Светлая тема',
    [LocalizationKey.ThemeDark]: 'Тёмная тема',
    [LocalizationKey.Language]: 'Язык',
    [LocalizationKey.FontSize]: 'Размер шрифта',
    [LocalizationKey.You]: 'Вы',
    [LocalizationKey.NoRecords]: 'Список пуст',
    [LocalizationKey.ConnectionError]: 'Ошибка подключения',
    [LocalizationKey.RoomConnectionError]: 'Соединение с комнатой потеряно',
    [LocalizationKey.LocalizationLangEn]: 'English',
    [LocalizationKey.LocalizationLangRu]: 'Русский',
    [LocalizationKey.AiAssistantName]: 'Михаил (Альфа)',
    [LocalizationKey.AiAssistantWelcomePrompt]: 'Привет Михаил',
    [LocalizationKey.ErrorApplyRoomInvite]: 'Приглашение на встречу недействительно',
    [LocalizationKey.RoomInvitesLoading]: 'Загрузка приглашений в комнату',
    [LocalizationKey.Invitations]: 'Приглашения',
    [LocalizationKey.InviteViaLink]: 'Пригласить по ссылке',
    [LocalizationKey.RefreshAll]: 'Обновить все',
    [LocalizationKey.NextRoomQuestion]: 'Следующий вопрос',
    [LocalizationKey.CopiedToClipboard]: 'Скопировано в буфер обмена',
    [LocalizationKey.Of]: 'из',
    [LocalizationKey.RoomQuestionEvaluationTitle]: 'Оцените ответ',
    [LocalizationKey.SaveRoomQuestionEvaluationWarningLine1]: 'Вы действительно хотите сохранить отзыв?',
    [LocalizationKey.SaveRoomQuestionEvaluationWarningLine2]: 'После сохранения редактирование будет невозможным.',
    [LocalizationKey.CloseRoomWithoutQuestionEvaluationWarningLine1]: 'Вы действительно хотите закрыть оценивание не дожидаясь оценок других участников?',
    [LocalizationKey.CloseRoomWithoutQuestionEvaluationWarningLine2]: 'Если остальные участники оставят отзывы, оценивание завершится автоматически.',
    [LocalizationKey.MarksGroupBad]: 'Плохо',
    [LocalizationKey.MarksGroupMedium]: 'Удовлетв.',
    [LocalizationKey.MarksGroupGood]: 'Хорошо',
    [LocalizationKey.MarksGroupPerfect]: 'Отлично',
    [LocalizationKey.NotFound]: 'Не найдено',
    [LocalizationKey.AverageCandidateMark]: 'Средний балл кандидата',
    [LocalizationKey.MarksForQuestions]: 'Баллы за вопросы',
    [LocalizationKey.OpinionsAndMarks]: 'Мнения и оценки',
    [LocalizationKey.QuestionAnswerDetails]: 'Детали ответа на вопрос',
    [LocalizationKey.EmptyRoomNameError]: 'Пожалуйста, укажите имя встречи',
    [LocalizationKey.RoomEmptyStartTimeError]: 'Пожалуйста, укажите время начала встречи',
    [LocalizationKey.RoomStartTimeMustBeGreaterError]: 'Время начала встречи должно быть больше текущего времени',
    [LocalizationKey.RoomEmptyQuestionsListError]: 'Пожалуйста, добавьте вопросы в список вопросов',
    [LocalizationKey.InterviewHistoryTitle]: 'История собеседований',
    [LocalizationKey.RoomReviewAlreadyGiven]: 'Вы уже дали отзыв о собеседовании. Ожидание оценки от остальных участников.',
    [LocalizationKey.RoomReviewSave]: 'Завершить заполнение',
    [LocalizationKey.RoomReviewWaiting]: 'Ожидание оценки от остальных участников.',
    [LocalizationKey.EmptyCommentQuestionEvaluation]: 'Напишите комментарий  к ответу на вопрос',
    [LocalizationKey.WeAwareOfProblem]: 'Мы уже знаем о проблеме и работаем над ее решением',
    [LocalizationKey.CurrentQuestionNotBeSaved]: 'Текущий вопрос не будет сохранен',
    [LocalizationKey.CurrentRoomNotBeSaved]: 'Текущая комната не будет сохранена',
    [LocalizationKey.LoadingAccountError]: 'Не удалось загрузить профиль пользователя',
    [LocalizationKey.LoadingAccountErrorTitle]: 'Ошибка загрузки профиля',
  },
}
