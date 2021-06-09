const animals = {
  cats: [
    {
      id: "1",
      name: "Fluffy",
      breed: "Abyssinian cat",
      age: 2,
      distance: 3.6,
      images: [
        "https://images.unsplash.com/photo-1548802673-380ab8ebc7b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80",
        "https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=658&q=80",
        "https://images.unsplash.com/photo-1505015390928-f9e55218544f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      ],
      owner: {
        avatar:
          "https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png",
        name: "Marcelo Dolza",
        date: "2021-05-25T18:39:15.870Z",
      },
    },
    {
      id: "2",
      name: "Big ears",
      breed: "Abyssinian cat",
      age: 1.5,
      distance: 7.8,
      images: [
        "https://images.pexels.com/photos/1741205/pexels-photo-1741205.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      owner: {
        avatar:
          "https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png",
        name: "Marcelo Dolza",
        date: "2021-05-25T18:39:15.870Z",
      },
    },
    {
      id: "3",
      name: "Buddy",
      breed: "Sphynx cat",
      age: 2.5,
      distance: 5.2,
      images: [
        "https://images.pexels.com/photos/991831/pexels-photo-991831.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      ],
      owner: {
        avatar:
          "https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png",
        name: "Marcelo Dolza",
        date: "2021-05-25T18:39:15.870Z",
      },
    },
    {
      id: "4",
      name: "Meow",
      breed: "Abyssinian cat",
      age: 3,
      distance: 9.1,
      images: [
        "https://images.unsplash.com/photo-1588768987479-bcebeefb8a5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
        "https://images.unsplash.com/photo-1583675829476-a31cd2f1796c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2134&q=80",
        "https://images.unsplash.com/photo-1609165367730-d1ee39fbb918?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      ],
      owner: {
        avatar:
          "https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png",
        name: "Marcelo Dolza",
        date: "2021-05-25T18:39:15.870Z",
      },
    },
  ],
  dogs: [
    {
      id: "1",
      name: "Cooper",
      breed: "Golden Retriever",
      age: 0.6,
      distance: 5.1,
      images: [
        "https://images.unsplash.com/photo-1552053831-71594a27632d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1212&q=80",
      ],
      owner: {
        avatar:
          "https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png",
        name: "Marcelo Dolza",
        date: "2021-05-25T18:39:15.870Z",
      },
    },
    {
      id: "2",
      name: "Luna",
      breed: "Samoyed",
      age: 1,
      distance: 1.5,
      images: [
        "https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      ],
      owner: {
        avatar:
          "https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png",
        name: "Marcelo Dolza",
        date: "2021-05-25T18:39:15.870Z",
      },
    },
  ],
  birds: [
    {
      id: "1",
      name: "Charlie",
      breed: "European robin",
      age: 2,
      distance: 10,
      images: [
        "https://images.unsplash.com/photo-1549216580-5e26672fabda?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      ],
      owner: {
        avatar:
          "https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png",
        name: "Marcelo Dolza",
        date: "2021-05-25T18:39:15.870Z",
      },
    },
  ],
  fish: [
    {
      id: "1",
      name: "Nemo",
      breed: "Ocellaris Clownfish",
      age: 2,
      distance: 10,
      images: [
        "https://images.unsplash.com/photo-1580863683247-eb1266c855f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=637&q=80",
        "https://images.unsplash.com/photo-1522024343969-805a5eadd461?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=650&q=80",
      ],
      owner: {
        avatar:
          "https://www.seekpng.com/png/full/115-1150622_avatar-demo2x-man-avatar-icon-png.png",
        name: "Marcelo Dolza",
        date: "2021-05-25T18:39:15.870Z",
      },
    },
  ],
};

export default animals;
