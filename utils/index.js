let fs = require('fs');

module.exports.throwError = function (command, threadID, messageID) {
    const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
    return global.client.api.sendMessage(global.getText("utils", "throwError", ((threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX: global.config.PREFIX), command), threadID, messageID);
}