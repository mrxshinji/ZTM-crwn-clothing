import {BackgroundImage, DirectoryBodyContainer, DirectoryItemContainer } from './DirectoryItem.styles'

import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import { categoriesType } from '../CategoryMenu/CategoryMenu.components'

type DirectoryItemProps = {
  category: categoriesType
}

const DirectoryItem: FC<DirectoryItemProps> = ({ category}:DirectoryItemProps) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
        <BackgroundImage imageUrl={imageUrl} />
        <DirectoryBodyContainer>
          <h2>{title}</h2>
          <p>Show now</p>
        </DirectoryBodyContainer>
      </DirectoryItemContainer>
    );
};

export default DirectoryItem