const express = require('express')
const router = express.Router()
const checkIfValidSummoner = require('../middleware/checkIfValidSummoner')
const checkSummonerRanks = require('../middleware/checkSummonerRanks')
const { LolApi } = new require('twisted')
const api = new LolApi(require("../constants/constants.json").API_KEY)
const {PATH} =  require("../constants/constants.json")
const checkSummonerMastery = require('../middleware/checkSummonerMastery')
const checkSummonerMatchHistory = require('../middleware/checkMatchHistory')
router.get("/getChallengerPlayers/:region", (req, res) => {

})


router.get("/playerData/:region/:name", checkIfValidSummoner, checkSummonerRanks,checkSummonerMastery,checkSummonerMatchHistory,(req, res) => {
    const { userData } = req
    console.log(userData)
    const data = {
        userData: {
            username: req.params.name,
            region: req.params.region,
            profilePicture: `${PATH}/img/profileicon/${userData.profileIconId}`,
            summonerLevel:userData.summonerLevel,
            ranked: userData.ranked
            
        },
        mastery:req.mastery,
        matches:req.matches
    }
    //console.log(userData)


    res.json(data)
})


module.exports = router
