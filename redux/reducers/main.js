let initialState = {
  miccheck: "hello",
  config: {
    items: [{
      type: "TextField",
      label: "Person's Name",
      name: "person_name"
    }, {
      type: "DropDown",
      label: "Person's State",
      values: ["Maharashtra", "Kerala", "Tamil Nadu", "Karnataka"]
    }]
  }
}
export default (state = initialState, action) => {
  switch(action.type) {
    default:
      return state;
  }
}
