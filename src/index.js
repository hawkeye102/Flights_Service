const express = require('express');
const { serverconfig, logger } = require('./config');
const apiRoutes = require('./routes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes);

app.listen(serverconfig.PORT, () => {
    console.log(`The server is running on port: ${serverconfig.PORT}`);
    logger.info("Successfully started the server", "root", {});
});