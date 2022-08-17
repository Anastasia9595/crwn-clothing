

import {BackgroundImage, Body, DirectoryItemContainer, NavLink} from './directory-item.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <DirectoryItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <NavLink to={`/shop/${title.toLowerCase()}`}>
          <h2>{title}</h2>SHOP NOW</NavLink>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
