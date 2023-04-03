const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            default:
                "https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg",
        },
        chatMessageModel: [
            {
                message: {
                    type: String,
                },
                senderId: {
                    type: String,
                },
                receiverId: {
                    type: String,
                },
                timestamp: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
    UserModel,
};
