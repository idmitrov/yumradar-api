import Restaurant from './restaurat.model';

export default {
    create(name, type) {
        const restaurat = new Restaurant({ name, type });

        return restaurat.save();
    },
    filter() {
        return Restaurant.find({});
    },
    getDetails(restauratName) {
        return Restaurant.findOne({ name: restauratName });
    }
}