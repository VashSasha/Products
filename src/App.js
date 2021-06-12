
import './App.css';
import Product from './Product'
import React from 'react';
// import Dropdown from './Dropdown'

const productArr = [{
  id: 1,
  name: 'M-prod',
  imgUrl: require('./img/product1.png').default,
},
{
  id: 2,
  name: "Pantene",
  imgUrl: require('./img/image 23.png').default,
}, {
  id: 3,
  name: "Concept",
  imgUrl: require('./img/product2.jpg').default,
}

]
export default class App extends React.Component {
  constructor() {
    super()
    this.productArr = productArr
  }
  render() {
    return (
      <Product productArr={this.productArr} />
    )
  }
}

/**1. Сделать плавное наведение (для всех) и клик (для некоторых) кнопок
2. Сделать развертывание при клике, реализовать выбор цвета (учесть слайдер и то, что ниже будут еще варианты цвета). При отводе курсора за пределы блока - закрывать селект. Важно, выпадающий список делать без использования тега select. 3. Сделать изменение изображения при наведении (изображение заменять по примеру в левом блоке взаимодействий)
4. Обьем товара - по умолчанию 100 мл, реализовать возможность выбора литража. 5. Выбор количества (возле кнопки купить) сделать базово 1 (меньше нельзя). Реализовать увеличение и уменьшение к-ва товара.
6. Плюсом будет связка цены с количеством и обьемом товара.

Результат - скинуть ссылку на github репозиторий с проектом и папкой билд на почту test_results@sysale.uaz */
