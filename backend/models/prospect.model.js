const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const prospectSchema = new Schema({
    name: {
        first:  { type: String, trim: true},
        last:   { type: String, trim: true}        
    },
    age:        { type: Number , required: true, min: 18},
    position:   { type: [String], required: true},
    
}, { timestamp: true,
});

const Prospect = mongoose.model('Prospect', prospectSchema);
module.exports = Prospect;