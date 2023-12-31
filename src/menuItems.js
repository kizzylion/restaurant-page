import plantainImage from '../img/plantain.jpg';
import snail from '../img/Peppered-Snail.jpg';
import wings from '../img/chicken-wings.jpg';
import gizzard from '../img/pepper-gizzard.jpg';

const menuItems = [
    {
        title: 'Plantains',
        description: 'Coconut fried plantain on onion slaw topped with spicy curry sauce and fresh herbs.',
        pic: plantainImage,
        alt:"Picture of Plantain",
        price:"N 5,000"
    },
    {
        title: 'Chicken Wings',
        description: 'Fried sticky wings topped with peppered BBQ sauce and chips',
        pic:wings,
        alt:"Picture of Chicken wings",
        price:"N 8,000"
    },
    {
        title: 'Pepper Snails',
        description: 'Herb seasoned snails with glazed capsicum and plantains in Naija pepper sauce and chips',
        pic: snail,
        alt:"Picture of Pepper snail",
        price:"N15,000"
    },
    {
        title: 'Pepper Gizzards',
        description: 'Herb seasoned gizzards with glazed capsicum in Naija pepper sauce and chips',
        pic: gizzard,
        alt:"Picture of Pepper Gizzard",
        price:"N8,000"
    },
]

export default menuItems