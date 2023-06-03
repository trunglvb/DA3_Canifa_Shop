import { v4 as uuidv4 } from 'uuid';
export const filterPrice = [
  {
    id: uuidv4(),
    min: 0,
    max: 200000,
  },
  {
    id: uuidv4(),
    min: 200000,
    max: 400000,
  },
  {
    id: uuidv4(),
    min: 400000,
    max: 600000,
  },
  {
    id: uuidv4(),
    min: 600000,
    max: 800000,
  },
  {
    id: uuidv4(),
    min: 800000,
    max: 1000000,
  },
  {
    id: uuidv4(),
    min: 1000000,
    max: 1600000,
  },
  {
    id: uuidv4(),
    min: 1600000,
    max: null,
  },
];
