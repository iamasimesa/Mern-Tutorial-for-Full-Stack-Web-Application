//@desc Get goals
//@route Get /api/goals
//@access Private

const { object } = require("webidl-conversions")

const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

//@desc Set goals
//@route Post /api/goals
//@access Private

const setGoals = (req, res) => {
if(!req.body.text){
    res.status(400)
    throw new Error('Please add a text field')
}

    res.status(200).json({message: 'Set goals'})
}

//@desc Update goals
//@route PUT /api/goals/:id
//@access Private

const updateGoals = (req, res) => {
    res.status(200).json({message: `Update goale ${req.params.id}`})
}

//@desc Delete goals
//@route DELETE /api/goals/:id
//@access Private

const deleteGoals = (req, res) => {
    res.status(200).json({message: `Delete goale ${req.params.id}`})
}



module.exports = {
    getGoals,
    setGoals,
    updateGoals,
    deleteGoals
}