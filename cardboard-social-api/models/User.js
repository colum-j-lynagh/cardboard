const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const userSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    text: true,
  },
  last_name: {
    type: String,
    required: [true, 'Last Name is required'],
    trim: true,
    text: true,
  },
  username: {
    type: String,
    required: [true, 'Username is required'],
    trim: true,
    text: true,
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'Email Address is required'],
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  profile_photo: {
    type: String,
    default: '',
  },
  cover_banner: {
    type: String,
    default: '',
  },
  gender: {
    type: String,
    required: [true, 'Gender is required'],
    trim: true,
  },
  birth_day: {
    type: Number,
    required: true,
  },
  birth_month: {
    type: Number,
    required: true,
  },
  birth_year: {
    type: Number,
    required: true,
  },
  verified_user: {
    type: Boolean,
    default: false,
  },
  followers: {
    type: Array,
    default: [],
  },
  following: {
    type: Array,
    default: [],
  },
  search: [
    {
      user: {
        type: ObjectId,
        ref: 'User',
      },
    },
  ],
  details: {
    bio: {
      type: String,
    },
    collection_bio: {
      type: String,
    },
    location: {
      type: String,
    },
    instagram: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
  },
  favourite_posts: [
    {
      post: {
        type: ObjectId,
        ref: 'Post',
      },
      savedAt: {
        type: Date,
        default: new.Date()
      }
    }
  ]
}, {
  timestamp: true
});

module.exports = mongoose.model('User', userSchema)