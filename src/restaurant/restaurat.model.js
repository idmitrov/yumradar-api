import { dbSchema, dbModel } from '../db';

const restaurantSchemaOptions = {
    timestamps: true
};

const restaurantSchema = new dbSchema({
    /**
     * @name name
     * @type {String}
     */
    name: {
        type: String,
        required: true,
        unique: true
    },
    /**
     * @name name
     * @type {String}
     */
    type: {
        type: String,
        required: true
    },
    /**
     * @name logo
     * @type {Buffer}
     */
    logo: {
        type: Buffer,
        default: null
    }
}, restaurantSchemaOptions);

const Restaurant = new dbModel('Restaurant', restaurantSchema);

export default Restaurant;
