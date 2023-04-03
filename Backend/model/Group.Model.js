const mongoose = require("mongoose");
const groupSchema = new mongoose.Schema(
    {
        roomId: {
            type: Date,
            default: Date.now(),
        },
        admin: {
            type: String,
        },
        groupOfUsers: [],
        listOfMsg: [
            {
                msg: {
                    type: String,
                },
                senderId: {
                    type: String,
                },
                senderName: {
                    type: String,
                },
                timestamp: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
        groupName: {
            type: String,
        },
        groupImg: {
            type: String,
            default:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2wmdkvMJBxZ022ttr_BPjL3Wf6aesVk8WNg&usqp=CAU",
        },
    },
    {
        timestamps: true,
    }
);

const GroupModel = mongoose.model("group", groupSchema);

module.exports = {
    GroupModel,
};
