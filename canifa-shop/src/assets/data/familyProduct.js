import family1 from '../images/family1.webp';
import family2 from '../images/family2.webp';
import family3 from '../images/family3.webp';
import family4 from '../images/family4.webp';

const familyProduct = [
  //add selected size and selected color
  {
    id: 'f1',
    sex: 'nam',
    slug: 'ao-phong',
    title: 'Áo phông nam',
    price: 112000,
    colors: ['#bfdbfe'],
    images: [family1],
    sizes: ['S', 'L', 'M', 'XL', 'XXL'],
    selectedSize: 'S',
    selectedColor: 'green',
    discount: '30%',
  },
  {
    id: 'f2',
    sex: 'tre',
    slug: 'ao-phong',
    title: 'Áo phông bé trai',
    price: 178000,
    colors: ['#bfdbfe'],
    selectedSize: 'S',
    selectedColor: 'red',
    images: [family2],
    sizes: ['S'],
  },
  {
    id: 'f3',
    sex: 'tre',
    slug: 'ao-phong',
    title: 'áo phông bé gái',
    price: 50000,
    colors: ['#bfdbfe'],
    selectedSize: 'S',
    selectedColor: 'slate',
    images: [family3],
    sizes: ['S'],
    discount: '50%',
  },
  {
    id: 'f4',
    sex: 'tre',
    slug: 'ao-phong',
    title: 'Áo phông nam',
    price: 200000,
    colors: ['#bfdbfe'],
    selectedSize: 'S',
    selectedColor: 'slate',
    images: [family4],
    sizes: ['S', 'L', 'M', 'XL', 'XXL'],
    discount: '50%',
  },
];

export default familyProduct;
