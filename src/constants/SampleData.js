export const sampleChats = [
  {
    avatar: [
      "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
    ],
    name: "Alice Johnson",
    _id: "abcdef12345",
    groupChat: false,
    members: ["123", "456"],
  },
  {
    avatar: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtEHnKL1bXQvj4YY2RkB_FyLsIYZYaDM4-A&s",
    ],
    name: "Bob Smith",
    _id: "ghijk67890",
    groupChat: false,
    members: ["789", "101"],
  },
  {
    avatar: [
      "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
      "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
    ],
    name: "Project Team",
    _id: "lmnop11223",
    groupChat: true,
    members: ["123", "456", "789", "101", "102"],
  },
];

export const sampleUser = [
  {
    avatar: [
      "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
    ],
    name: "Alice Johnson",
    _id: "abcdef12345",
  },
  {
    avatar: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtEHnKL1bXQvj4YY2RkB_FyLsIYZYaDM4-A&s",
    ],
    name: "Bob Smith",
    _id: "ghijk67890",
  },
  {
    avatar: [
      "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
    ],
    name: "Project Team",
    _id: "lmnop11223",
  },
];

export const sampleNotifications = [
  {
    sender: {
      avatar: [
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      ],
      name: "Alice Johnson",
    },
    _id: "abcdef12345",
  },
  {
    sender: {
      avatar: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtEHnKL1bXQvj4YY2RkB_FyLsIYZYaDM4-A&s",
      ],
      name: "Bob Smith",
    },
    _id: "ghijk67890",
  },
];

export const sampleMessage = [
  {
    attachments: [],
    content: "Mohit ka Message hai",
    _id: "12235818",
    sender: {
      _id: "19815dwdw",
      name: "Mohit",
    },
    chat: "chatId",
    createdAt: "2024-06-12T00:00:00",
  },
  {
    attachments: [
      {
        public_id: "dwdwd18561",
        url: "https://ajitdhivar.com/profile.png",
      },
    ],
    content: "",
    _id: "fef794",
    sender: {
      _id: "efe56",
      name: "Mohit",
    },
    chat: "chatId",
    createdAt: "2024-07-12T00:00:00",
  },
];

export const dashboardData = {
  users: [
    {
      name: "Alice Johnson",
      avatar: [
        "https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg",
      ],
      _id: "abcdef12345",
      username: "alice.johnson",
      friends: 20,
      groups: 5,
    },
    {
      name: "Bob Smith",
      avatar: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGtEHnKL1bXQvj4YY2RkB_FyLsIYZYaDM4-A&s",
      ],
      _id: "ghijk67890",
      username: "bob.smith",
      friends: 20,
      groups: 6,
    },
  ],
  chats: [
    {
      name: "Mohit Kumawat",
      avatar: [
        "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
      ],
      _id: "1",
      groupChat: true,
      members: [
        {
          _id: "1",
          avatar:
            "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
        },
        {
          _id: "2",
          avatar:
            "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
        },
      ],
      totalMembers: 2,
      totalMessages: 20,
      creator: {
        name: "Mohit",
        avatar: [
          "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
        ],
      },
    },
    {
      name: "Ashutos",
      avatar: [
        "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
      ],
      _id: "2",
      groupChat: true,
      members: [
        {
          _id: "1",
          avatar:
            "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
        },
        {
          _id: "2",
          avatar:
            "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
        },
      ],
      totalMembers: 2,
      totalMessages: 30,
      creator: {
        name: "Ashutos",
        avatar: [
          "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
        ],
      },
    },
  ],

  messages: [
    {
      attachments: [],
      content: "Mohit ka Message hai",
      _id: "12235818",
      sender: {
        avatar:
          "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
        name: "Mohit",
      },
      chat: "chatId",
      groupChat: false,
      createdAt: "2024-06-12T00:00:00",
    },
    {
      attachments: [
        {
          public_id: "dwdwd18561",
          url: "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
        },
      ],
      content: "Ashutos ka messsage",
      _id: "fef794",
      sender: {
        avatar:
          "https://www.signivis.com/img/custom/avatars/member-avatar-01.png",
        name: "Ashutos",
      },
      chat: "chatId",
      groupChat: true,
      createdAt: "2024-07-12T00:00:00",
    },
  ],
};
