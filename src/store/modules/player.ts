const state = {
  playerStatus: 0, // 0:隐藏 1:展示
  currentPlaySong: {
    // 当前播放歌曲信息
    id: '',
    name: '',
    singer: '',
    ablum: '',
    coverImg: ''
  },
  playMode: 0 // 0：随机播放，1：单曲循环，2：顺序播放
}

const mutations = {
  SET_PLAYERSTATUS(state: any, item: any) {
    state.playerStatus = item
  },
  SET_CURRENTPLAYSONG(state: any, item: any) {
    state.currentPlaySong = item
  },
  SET_PLAYMODE(state: any, item: any) {
    state.playMode = item
  }
}

export default {
  state,
  mutations
}
