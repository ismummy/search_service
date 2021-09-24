const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    phone_number: String,
    last_name: String,
    first_name: String,
    state: String,
    job_title: String,
    statusCode: String,
    createdAt: {
        type: Date,
        default: Date.now,
    }
})

module.exports = mongoose.model('admin_activities_logs', schema);
