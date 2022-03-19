const zombie = {
  eatBrains() {
    return 'yun 🧠';
  }
}

const chad = Object.create(zombie, {name: {value: "clone"}});
chad.__proto__;
Object.getPrototypeOf(chad);

const babyChat = Object.create(chad, {baby: {value: true}});

