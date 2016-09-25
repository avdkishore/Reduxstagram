// reducer takes in two things

//action & copy of the part of the store it should handle

export default function posts(state = [], action) {
  console.log(state, action);
  return state;
}
