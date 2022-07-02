import './categories.styles.scss';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jacktes',
    },
    {
      id: 3,
      title: 'Sneackers',
    },
    {
      id: 4,
      title: 'Womens',
    },
    {
      id: 5,
      title: 'Mans',
    }
  ]

  return (
    <div className="categories-container">
      {categories.map((category) => (
        <div class="category-container">
          <div className="background-image"></div>
          <div class="category-body-container">
            <h2>{category.title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
      ))}

    </div>
  );
}

export default App;
