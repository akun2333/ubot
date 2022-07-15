export const QBOT = {
  login: {
    account: 10086,
    password: '10086'
  },
  admin: {
    master: [10086]
  },
  group: {
    listen: [10086, 10086],
    blackList: {
      keyword: ['腾讯'],
      message: ' Warning!'
    }
  }
}

export const MESSAGE_LIBRARY = {
  help: `你觉得机器人能帮你什么？还不如去多百度多翻文档\nbaidu: https://baidu.com\nuview-doc: https://uviewui.com`
}

export const MESSAGE_LIBRARY_KEYS = Object.keys(MESSAGE_LIBRARY)
