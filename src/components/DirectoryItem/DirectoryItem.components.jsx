import {BackgroundImage, DirectoryBodyContainer, DirectoryItemContainer } from './DirectoryItem.styles'

import { useNavigate } from 'react-router-dom';

const DirectoryItem = ({ title, imageUrl, route}) => {
  const navigate = useNavigate();

  const onNavigateHandler =  () => navigate(route);

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