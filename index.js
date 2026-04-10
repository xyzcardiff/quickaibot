// QuickAIBot - Auto-generates social media content calendar
// Built with AI Trend App Builder

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        app: 'QuickAIBot',
        description: 'Auto-generates social media content calendar',
        status: 'running',
        built_at: '2026-04-10 09:00:27'
    });
});

app.get('/api/trend', (req, res) => {
    res.json({
        topic: 'AI Content Calendar',
        keywords: ["content AI","social media","scheduler"]
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`QuickAIBot running on port ${PORT}`);
});
