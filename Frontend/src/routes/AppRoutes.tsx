import React, { FunctionComponent } from 'react';
import { Routes, Route, useLocation, matchPath } from 'react-router-dom';
import { inviteParamName, pathnames } from '../constants';
import { Home } from '../pages/Home/Home';
import { Rooms } from '../pages/Rooms/Rooms';
import { Questions } from '../pages/Questions/Questions';
import { QuestionCreate } from '../pages/QuestionCreate/QuestionCreate';
import { NotFound } from '../pages/NotFound/NotFound';
import { RoomCreate } from '../pages/RoomCreate/RoomCreate';
import { Room } from '../pages/Room/Room';
import { Session } from '../pages/Session/Session';
import { RoomParticipants } from '../pages/RoomParticipants/RoomParticipants';
import { ProtectedRoute } from './ProtectedRoute';
import { User } from '../types/user';
import { Terms } from '../pages/Terms/Terms';
import { RoomAnayticsSummary } from '../pages/RoomAnayticsSummary/RoomAnayticsSummary';
import { NavMenu } from '../components/NavMenu/NavMenu';
import { REACT_APP_BUILD_HASH } from '../config';
import { LocalizationCaption } from '../components/LocalizationCaption/LocalizationCaption';
import { LocalizationKey } from '../localization';
import { Categories } from '../pages/Categories/Categories';
import { checkAdmin } from '../utils/checkAdmin';
import { CategoriesCreate } from '../pages/CategoriesCreate/CategoriesCreate';

interface AppRoutesProps {
  user: User | null;
}

const renderFooter = () => (
  <footer>
    <div><LocalizationCaption captionKey={LocalizationKey.BuildHash} />: {REACT_APP_BUILD_HASH}</div>
  </footer>
);

export const AppRoutes: FunctionComponent<AppRoutesProps> = ({
  user,
}) => {
  const admin = checkAdmin(user);
  const location = useLocation();
  const fullScreenPage = matchPath(
    { path: pathnames.room.replace(`/:${inviteParamName}?`, ''), end: false, },
    location.pathname,
  );
  const authenticated = !!user;

  return (
    <>
      {!fullScreenPage && (
        <NavMenu admin={admin} />
      )}
      <div className={`App ${fullScreenPage ? 'full-screen-page' : ''}`}>
        <div className="App-content">
          <Routes>
            <Route path={pathnames.home} element={<Home />} />
            <Route path={pathnames.terms} element={<Terms />} />
            <Route path={pathnames.roomsCreate}
              element={
                <ProtectedRoute allowed={authenticated}>
                  <RoomCreate />
                </ProtectedRoute>
              }
            />
            <Route path={pathnames.roomsParticipants}
              element={
                <ProtectedRoute allowed={authenticated}>
                  <RoomParticipants />
                </ProtectedRoute>
              }
            />
            <Route path={pathnames.roomAnalyticsSummary}
              element={
                <ProtectedRoute allowed={authenticated}>
                  <RoomAnayticsSummary />
                </ProtectedRoute>
              }
            />
            <Route path={pathnames.room}
              element={
                <ProtectedRoute allowed={authenticated}>
                  <Room />
                </ProtectedRoute>
              }
            />
            <Route path={pathnames.rooms}
              element={
                <ProtectedRoute allowed={authenticated}>
                  <Rooms />
                </ProtectedRoute>
              }
            />
            <Route path={pathnames.questionsCreate}
              element={
                <ProtectedRoute allowed={authenticated}>
                  <QuestionCreate edit={false} />
                </ProtectedRoute>
              }
            />
            <Route path={pathnames.questionsEdit}
              element={
                <ProtectedRoute allowed={authenticated}>
                  <QuestionCreate edit={true} />
                </ProtectedRoute>
              }
            />
            <Route path={pathnames.questions}
              element={
                <ProtectedRoute allowed={authenticated}>
                  <Questions />
                </ProtectedRoute>
              }
            />
            <Route path={pathnames.session}
              element={
                <ProtectedRoute allowed={authenticated}>
                  <Session />
                </ProtectedRoute>
              }
            />
            <Route path={pathnames.categoriesCreate}
              element={
                <ProtectedRoute allowed={authenticated}>
                  <CategoriesCreate edit={false} />
                </ProtectedRoute>
              }
            />
            <Route path={pathnames.categoriesEdit}
              element={
                <ProtectedRoute allowed={authenticated}>
                  <CategoriesCreate edit={true} />
                </ProtectedRoute>
              }
            />
            <Route path={pathnames.categories}
              element={
                <ProtectedRoute allowed={authenticated}>
                  <Categories />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        {!fullScreenPage && renderFooter()}
      </div>
    </>
  );
};
