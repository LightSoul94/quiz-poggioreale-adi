const loadQuestions = async (req, res) => {
    const nickname = req.body.nickname;
    if (!nickname) {
        return res.redirect('/');
    }

    res.render('lobby', { nickname });
};

export default { loadQuestions };