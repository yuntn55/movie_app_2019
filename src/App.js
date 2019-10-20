import React from 'react';
import PropTypes from 'prop-types';

const foodILike = [
  {
    id: 1,
    name: 'ramen',
    image: "https://post-phinf.pstatic.net/MjAxODA5MDVfNjMg/MDAxNTM2MTI0OTM5NTQz.cAZ9lWOJ4u4ORIi9peQyAaStYG3rAdwbEUfWbqkOEv0g.REuEsEXqMkgl0Kr_b-pOLht9urrO4Yp6SkC57uPV_F8g.JPEG/00.jpg?type=w1200",
    rating: 4,
  },
  {
    id: 2,
    name: 'pizza',
    image: "https://www.7thpizza.com/files/MENU/46E2916B041C448CA1BD9E4C36EF6BFA.jpg",
    rating: 3,
  },
  {
    id: 3,
    name: 'hambuk',
    image: "https://img.hankyung.com/photo/201908/01.20330262.1.jpg",
    rating: 4.4,
  },
  {
    id: 4,
    name: 'sussi',
    image: "https://post-phinf.pstatic.net/MjAxNzA5MjlfMjQ1/MDAxNTA2NjY2NzY3MzU5.Axf2AYXQsgcBTYICtkR5SeE-uBkSShilKIXEzrFskYcg.dTgf2RYciMN-rfpmGWLO2Nz0cWPZqMLKhnMLAt6fKlUg.JPEG/%EB%A6%AC%ED%8B%80%EC%8A%A4%ED%83%80_%EC%9D%B4%EB%A7%88%ED%8A%B8%ED%9A%8C17.jpg?type=w800_q75",
    rating: 3.2,
  },
];

function Food({ name, picture, rating }) {
  return <div>
    <h2>i love {name}</h2>
    <h4>{rating}/5.0</h4>
    <img src={picture} width='200' height='200' alt={name}></img>
  </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}

function App() {
  return (
    <div>
      {foodILike.map(dish =>
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      )}
    </div>
  );
}

export default App;
