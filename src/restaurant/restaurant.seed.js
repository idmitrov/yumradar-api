import Restaurant from './restaurat.model';

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
                        category: 'salads',
                        name: 'Cesar',
                        price: 4.50,
                        ingredients: []
                    },
                    {
                        category: 'salads',
                        name: 'Green',
                        price: 4.00,
                        ingredients: []
                    },
                    {
                        category: 'pizza',
                        name: 'Margarita',
                        price: 8.00,
                        ingredients: []
                    },
                    {
                        category: 'fish',
                        name: 'Salmon',
                        price: 12.00,
                        ingredients: []
                    },
                    {
                        category: 'deserts',
                        name: 'Cake',
                        price: 5.00,
                        ingredients: []
                    },
                    {
                        category: 'soups',
                        name: 'Chicken',
                        price: 3.00,
                        ingredients: []
                    },
                    {
                        category: 'grill',
                        name: 'Steak',
                        price: 10.00,
                        ingredients: []
                    }
                ];
            
                const restaurants = [
                    { name: 'Happy', type: 'unknown', categories, menu },
                    { name: 'McR', type: 'unknown', categories, menu },
                    { name: 'Test restaurant', type: 'unknown', categories, menu },
                    { name: 'Friends', type: 'unknown', categories, menu },
                    { name: 'Delicious', type: 'unknown', categories, menu }
                ];
            
                return Restaurant.create(restaurants);
            }
        });
}

export default () => {
    seedRestaurants();
}