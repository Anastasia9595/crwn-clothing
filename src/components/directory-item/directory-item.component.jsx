
import { Link } from 'react-router-dom';
import './directory-item.styles.scss';

const DirectoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className='directory-item-container'>
      <div
        className='background-image'
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className='body'>
      <Link className='Description' to={`/shop/${title.toLowerCase()}`}>
        <h2>{title}</h2>
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
