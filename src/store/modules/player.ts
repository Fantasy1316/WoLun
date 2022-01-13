const state = {
  playerStatus: 0, // 0:隐藏 1:展示
  currentPlaySong: {
    // 当前播放歌曲信息
    id: '',
    name: '等你下课（with杨代瑞）',
    singer: '周杰伦',
    ablum: '《范特西》',
    coverImg: 'http://img.fechen.cn/uploadfile/static/2022/01/11/fantic.jpg',
    bgiUrl:
      'http://img.fechen.cn/uploadfile/static/2022/01/13/0A40CA801895449E80ECD91ED1B09297-bgi.jpg'
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
