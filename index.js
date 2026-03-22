// QuickAIBot - Creates flashcards and quizzes from notes
// Built with AI Trend App Builder

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        app: 'QuickAIBot',
        description: 'Creates flashcards and quizzes from notes',
        status: 'running',
        built_at: '2026-03-22 09:00:02'
    });
});

app.get('/api/trend', (req, res) => {
    res.json({
        topic: 'AI Study Assistant',
        keywords: ["education AI","study tool","learning"]
    });
});

app.listen(PORT, () => {
    console.log(`QuickAIBot running on port `);
});
