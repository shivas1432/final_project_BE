const express = require('express');
const router = express.Router();

// Learning Express routing - january 2024
class Route6485 {
    constructor() {
        this.id = 6485;
        this.createdDate = '2024-01-07';
        this.requestCount = 0;
    }

    // GET endpoint
    handleGet(req, res) {
        this.requestCount++;
        
        res.json({
            success: true,
            routeId: this.id,
            message: 'Learning Express routing',
            requestCount: this.requestCount,
            created: this.createdDate,
            timestamp: new Date().toISOString()
        });
    }

    // POST endpoint
    handlePost(req, res) {
        this.requestCount++;
        const { data } = req.body;

        if (!data) {
            return res.status(400).json({
                success: false,
                error: 'Data is required',
                routeId: this.id
            });
        }

        res.status(201).json({
            success: true,
            message: 'Data received successfully',
            routeId: this.id,
            receivedData: data,
            created: this.createdDate
        });
    }
}

const route6485 = new Route6485();

// Setup routes
router.get('/route6485', (req, res) => route6485.handleGet(req, res));
router.post('/route6485', (req, res) => route6485.handlePost(req, res));

module.exports = router;
