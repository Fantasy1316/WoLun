const state = {
  playerStatus: 0, // 0:隐藏 1:展示
  currentPlaySong: {
    id: '',
    name: '',
    singer: '',
    ablum: '',
    coverImg: ''
  }
}

const mutations = {
  SET_PLAYERSTATUS(state: any, item: any) {
    state.playerStatus = item
  },
  SET_CURRENTPLAYSONG(state: any, item: any) {
    state.currentPlaySong = item
  }
}

export default {
  state,
  mutations
}
