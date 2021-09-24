const Log = require('../database/Models/logs')
const broker = require('../utils/broker')

class Search {

    search = async (req, res, next) => {
        try {
            const {searchKeyword} = req.query

            const data = await Log.find({
                $or: [
                    {phone_number: {$regex: searchKeyword, $options: "i"}},
                    {last_name: {$regex: searchKeyword, $options: "i"}},
                    {first_name: {$regex: searchKeyword, $options: "i"}},
                    {state: {$regex: searchKeyword, $options: "i"}},
                    {job_title: {$regex: searchKeyword, $options: "i"}},
                    {statusCode: {$regex: searchKeyword, $options: "i"}},
                ],
            })
            const messageBroker = await broker.getInstance()
            const result =  Buffer.from(JSON.stringify({searchKeyword, data}))

            await messageBroker.send(process.env.LOGGER_EVENT,result )

            return res.status(200).json({data, success: true, message: "Fetched!"})
        } catch (e) {
            next(e)
        }
    }

    addLog = async (req, res, next) => {
        try {
            const {phone_number, last_name, first_name, state, job_title, statusCode} = req.body;

            const data = await Log.create({phone_number, last_name, first_name, state, job_title, statusCode})
            return res.status(201).json({data, success: true, message: "Added"})
        } catch (e) {
            next(e)
        }
    }
}

module.exports = new Search()
