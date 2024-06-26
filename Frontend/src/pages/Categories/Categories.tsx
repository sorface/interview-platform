import React, { ChangeEventHandler, FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { GetCategoriesParams, categoriesApiDeclaration } from '../../apiDeclarations';
import { Field } from '../../components/FieldsBlock/Field';
import { HeaderWithLink } from '../../components/HeaderWithLink/HeaderWithLink';
import { MainContentWrapper } from '../../components/MainContentWrapper/MainContentWrapper';
import { IconNames, pathnames } from '../../constants';
import { useApiMethod } from '../../hooks/useApiMethod';
import { ProcessWrapper } from '../../components/ProcessWrapper/ProcessWrapper';
import { QustionsSearch } from '../../components/QustionsSearch/QustionsSearch';
import { ActionModal } from '../../components/ActionModal/ActionModal';
import { LocalizationKey } from '../../localization';
import { useLocalizationCaptions } from '../../hooks/useLocalizationCaptions';
import { ItemsGrid } from '../../components/ItemsGrid/ItemsGrid';
import { Category } from '../../types/category';
import { ThemedIcon } from '../Room/components/ThemedIcon/ThemedIcon';

import './Categories.css';

const pageSize = 30;
const initialPageNumber = 1;

export const Categories: FunctionComponent = () => {
  const localizationCaptions = useLocalizationCaptions();
  const [pageNumber, setPageNumber] = useState(initialPageNumber);
  const [searchValue, setSearchValue] = useState('');
  const [showOnlyWithoutParent, setShowOnlyWithoutParent] = useState(false);
  const [categoryParent, setCategoryParent] = useState('');

  const { apiMethodState: categoriesState, fetchData: fetchCategories } = useApiMethod<Category[], GetCategoriesParams>(categoriesApiDeclaration.getPage);
  const { process: { loading, error }, data: categories } = categoriesState;

  const { apiMethodState: rootCategoriesState, fetchData: fetchRootCategories } = useApiMethod<Category[], GetCategoriesParams>(categoriesApiDeclaration.getPage);
  const { process: { loading: rootCategoriesLoading, error: rootCategoriesError }, data: rootCategories } = rootCategoriesState;

  const { apiMethodState: archiveCategoryState, fetchData: archiveCategory } = useApiMethod<Category, Category['id']>(categoriesApiDeclaration.archive);
  const { process: { loading: archiveLoading, error: archiveError }, data: archivedCategory } = archiveCategoryState;

  useEffect(() => {
    fetchCategories({
      PageNumber: pageNumber,
      PageSize: pageSize,
      name: searchValue,
      showOnlyWithoutParent,
      ...(categoryParent && { parentId: categoryParent }),
    });
  }, [pageNumber, searchValue, archivedCategory, showOnlyWithoutParent, categoryParent, fetchCategories]);

  useEffect(() => {
    fetchRootCategories({
      PageNumber: 1,
      PageSize: pageSize,
      name: '',
      showOnlyWithoutParent: true,
    });
  }, [archivedCategory, fetchRootCategories]);

  const handleNextPage = useCallback(() => {
    setPageNumber(pageNumber + 1);
  }, [pageNumber]);

  const handleOnlyWithoutParentChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setShowOnlyWithoutParent(e.target.checked);
  };

  const handleCategoryParentChange: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setCategoryParent(e.target.value);
  };

  const createCategoryItem = useCallback((category: Category) => (
    <li key={category.id}>
      <Field className="category-item">
        <span>{category.name}</span>
        {!category.parentId && <ThemedIcon name={IconNames.Clipboard} />}
        <div className="category-controls">
          <Link to={pathnames.categoriesEdit.replace(':id', category.id)}>
            <button>
              🖊️
            </button>
          </Link>
          <ActionModal
            openButtonCaption='📁'
            error={archiveError}
            loading={archiveLoading}
            title={localizationCaptions[LocalizationKey.Archive]}
            loadingCaption={localizationCaptions[LocalizationKey.ArchiveLoading]}
            onAction={() => { archiveCategory(category.id) }}
          />
        </div>
      </Field>
    </li>
  ), [archiveLoading, archiveError, localizationCaptions, archiveCategory]);

  return (
    <MainContentWrapper className="categories-page">
      <HeaderWithLink
        linkVisible={true}
        path={pathnames.categoriesCreate}
        linkCaption="+"
        linkFloat="right"
      >
        <div>
          <QustionsSearch
            onSearchChange={setSearchValue}
          />
        </div>
        <div className="categories-additional-filters">
          <input
            id="showOnlyWithoutParent"
            type="checkbox"
            checked={showOnlyWithoutParent}
            onChange={handleOnlyWithoutParentChange}
          />
          <label htmlFor="showOnlyWithoutParent">{localizationCaptions[LocalizationKey.RootCategories]}</label>
          <label htmlFor="parentID">{localizationCaptions[LocalizationKey.Category]}:</label>
          <select id="parentID" value={categoryParent} onChange={handleCategoryParentChange}>
            <option value=''>{localizationCaptions[LocalizationKey.NotSelected]}</option>
            {rootCategories?.map(rootCategory => (
              <option key={rootCategory.id} value={rootCategory.id}>{rootCategory.name}</option>
            ))}
          </select>
        </div>
      </HeaderWithLink>
      <ProcessWrapper
        loading={false}
        error={error || archiveError || rootCategoriesError}
      >
        <ItemsGrid
          currentData={categories}
          loading={loading || rootCategoriesLoading}
          triggerResetAccumData={`${searchValue}${showOnlyWithoutParent}${archivedCategory}${categoryParent}`}
          loaderClassName='category-item field-wrap'
          renderItem={createCategoryItem}
          nextPageAvailable={categories?.length === pageSize}
          handleNextPage={handleNextPage}
        />
      </ProcessWrapper>
    </MainContentWrapper>
  );
};
