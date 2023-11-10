import { Component } from 'react';

export default class CategoriesButton extends Component {
  render() {
    const { categories } = this.props;
    return (
      <>
        {categories.map(category => (
          <button type="button" key={category}>
            {category}
          </button>
        ))}
      </>
    );
  }
}
