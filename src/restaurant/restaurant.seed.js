import Restaurant from './restaurat.model';
import { dbTypes } from '../db';

export const seedRestaurants = () => {
    Restaurant.find({})
        .then((foundRestaurants) => {
            if (!foundRestaurants.length) {
                const categories = [
                    'salads',
                    'soups',
                    'main',
                    'appetizers',
                    'deserts',
                    'fish',
                    'pizza',
                    'grill'
                ];

                const menu = [
                    {
                        id: new dbTypes.ObjectId(),
                        category: 'salads',
                        name: 'Cesar',
                        price: 4.50,
                        ingredients: []
                    },
                    {
                        id: new dbTypes.ObjectId(),
                        category: 'salads',
                        name: 'Green',
                        price: 4.00,
                        ingredients: []
                    },
                    {
                        id: new dbTypes.ObjectId(),
                        category: 'pizza',
                        name: 'Margarita',
                        price: 8.00,
                        ingredients: []
                    },
                    {
                        id: new dbTypes.ObjectId(),
                        category: 'fish',
                        name: 'Salmon',
                        price: 12.00,
                        ingredients: []
                    },
                    {
                        id: new dbTypes.ObjectId(),
                        category: 'deserts',
                        name: 'Cake',
                        price: 5.00,
                        ingredients: []
                    },
                    {
                        id: new dbTypes.ObjectId(),
                        category: 'soups',
                        name: 'Chicken',
                        price: 3.00,
                        ingredients: []
                    },
                    {
                        id: new dbTypes.ObjectId(),
                        category: 'grill',
                        name: 'Steak',
                        price: 10.00,
                        ingredients: []
                    }
                ];
            
                const restaurants = [
                    { name: 'Happy', type: 'unknown', minOrder: 10, deliveryPrice: 0, categories, menu },
                    { name: 'Mr. Pizza', type: 'unknown', minOrder: 10, deliveryPrice: 10, categories, menu },
                    { name: 'Test', type: 'unknown', minOrder: 10, deliveryPrice: 0, categories, menu },
                    { name: 'Friends', type: 'unknown', minOrder: 0, deliveryPrice: 5, categories, menu },
                    { name: 'Delicious', type: 'unknown', minOrder: 15, deliveryPrice: 2, categories, menu }
                ];
            
                return Restaurant.create(restaurants);
            }
        });
}

export default () => {
    seedRestaurants();
}