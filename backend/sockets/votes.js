const Reactions = require('../models/reactionsModel');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('increaseVotes', async ({ id }) => {
    console.log(`Cliente votou na reação de id ${id}`);
    await Reactions.increaseVotes(id);
    const reaction = await Reactions.getById(id);
    
    io.emit('refreshCurrentVotes', reaction);
  })
}); 