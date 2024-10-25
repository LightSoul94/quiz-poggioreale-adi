import { getQuestionsFromFirestore } from '../models/questionModel.js';

const loadQuestions = async (req, res) => {
    const nickname = req.body.nickname;
    if (!nickname) {
        return res.redirect('/');
    }

    try {
        const questions = await getQuestionsFromFirestore();
        res.render('lobby', { nickname, questions });
    } catch (error) {
        res.status(500).send('Errore nel caricamento delle domande');
    }
};

export default { loadQuestions };