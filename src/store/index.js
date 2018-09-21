/***
 **                                                          _ooOoo_
 **                                                         o8888888o
 **                                                         88" . "88
 **                                                         (| -_- |)
 **                                                          O\ = /O
 **                                                      ____/`---'\____
 **                                                    .   ' \\| |// `.
 **                                                     / \\||| : |||// \
 **                                                   / _||||| -:- |||||- \
 **                                                     | | \\\ - /// | |
 **                                                   | \_| ''\---/'' | |
 **                                                    \ .-\__ `-` ___/-. /
 **                                                 ___`. .' /--.--\ `. . __
 **                                              ."" '< `.___\_<|>_/___.' >'"".
 **                                             | | : `- \`.;`\ _ /`;.`/ - ` : | |
 **                                               \ \ `-. \_ __\ /__ _/ .-` / /
 **                                       ======`-.____`-.___\_____/___.-`____.-'======
 **                                                          `=---='
 **
 **                                       .............................................
 **                                              佛祖保佑             永无BUG
 **                                      佛曰:
 **                                              写字楼里写字间，写字间里程序员；
 **                                              程序人员写程序，又拿程序换酒钱。
 **                                              酒醒只在网上坐，酒醉还来网下眠；
 **                                              酒醉酒醒日复日，网上网下年复年。
 **                                              但愿老死电脑间，不愿鞠躬老板前；
 **                                              奔驰宝马贵者趣，公交自行程序员。
 **                                              别人笑我忒疯癫，我笑自己命太贱；
 **                                              不见满街漂亮妹，哪个归得程序员？
 */
/**
 * Created by liangshan on 2017/7/13.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

Vue.use(Vuex)

// const PROTOCOL = location.protocol
// let allPath = ['/register', '/login']
// let allPath = ['Register', 'Login']
const store = new Vuex.Store({
  actions: actions.actions,
  mutations: mutations.mutations,
  getters: getters.getters,
  state: {
    theme: 'dark',
    logo: '/html/static/images/new_logo.png',
    themeColor: 'rgb(79, 192, 141)',
    themeImages2: ['/html/static/images/themes/bg.jpg'],
    themeImages: [{
      label: '风景',
      sublist: [{
        label: '风景1',
        img: '/html/static/images/themes/bg.jpg'
      }, {
        label: '风景2',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537768398&di=449d2f7d25e45d84858aeee276fca91b&imgtype=jpg&er=1&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fe%2F52fc5991e5688.jpg'
      }, {
        label: '风景3',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537173679284&di=59a836020a224b636800e34e9cf0b246&imgtype=0&src=http%3A%2F%2Fs9.knowsky.com%2Fbizhi%2Fl%2F1-5000%2F2009528155448360620259.jpg'
      }, {
        label: '风景4',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537173679284&di=979674124c7ae45489a64bd439920500&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fa%2F587c5ce7a7131.jpg'
      }, {
        label: '风景5',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537173679283&di=f58c136d3a43df65c834e66b04a4c577&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1301%2F28%2Fc1%2F17792394_1359358658037.jpg'
      }, {
        label: '风景6',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537173679283&di=5d29914665b6e9856ab145346c5dfaab&imgtype=0&src=http%3A%2F%2Fs9.knowsky.com%2Fbizhi%2Fl%2F1-5000%2F200952811402685335493.jpg'
      }, {
        label: '风景7',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537173679283&di=7e9ce6a180540a8146f9a9b8377d585d&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F7%2F5782fbca545ee.jpg%3Fdown'
      }, {
        label: '风景8',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537173679282&di=82d94356f425195542c7bedcbabcd412&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F5%2F5930c3286fa8f.jpg'
      }, {
        label: '风景9',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537173679282&di=936bcc931066b550fbd821ad1c01af85&imgtype=0&src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1307%2F10%2Fc3%2F23153395_1373426315890.jpg'
      }, {
        label: '风景10',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537173679282&di=c6dc0c4db21329917136fae8d1c12f68&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2Fa%2F5879b516a8982.jpg'
      }]
    }, {
      label: '卡通',
      sublist: [{
        label: '人物1',
        img: 'https://static.dei2.com/plugins_admin/img/bg.jpg'
      }, {
        label: '人物2',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537032993975&di=6c4a07a14f56ae4ab598bcdc1eb71ccd&imgtype=0&src=http%3A%2F%2Fpic13.nipic.com%2F20110413%2F6998579_231733141000_2.jpg'
      }, {
        label: '人物3',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537032993975&di=263fc8a258bf38c2911fb72eaf7c5a06&imgtype=0&src=http%3A%2F%2Fpic39.nipic.com%2F20140312%2F18176675_134521167152_2.jpg'
      }, {
        label: '人物4',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537042117109&di=f5ebee272ba132a1d868f91a79d76559&imgtype=0&src=http%3A%2F%2Fi2.hdslb.com%2Fbfs%2Farchive%2F36fa4d9b32a1efead39ba26c6e3442fc9e9d8c71.jpg'
      }, {
        label: '人物5',
        img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537042302797&di=09905ffc4e551e42710444c12ca18abd&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fwallpaper%2F9%2F568394f497aa0.jpg'
      }]
    }],
    activeThemeIndex: [0, 1],
    bodyStyles: {},
    events: {
      bodyClick: 'body-click',
      windowResize: 'window-resize'
    },
    localStorageKeys: {
      activeTools: 'local-active-tools',
      inactiveTools: 'local-inactive-tools',
      maxToolCount: 'local-max-tool-count',
      activeThemeIndex: 'local-active-theme-index',
      blankHomePage: 'local-blank-home-page'
    },
    blankHomePage: 'default',
    tools: [],
    activeTools: [],
    inactiveTools: [],
    maxToolCount: 4,
    assets: {},
    requestInfo: {},
    loginInfo: {},
    allRoles: [{
      value: 1,
      name: '超级管理员'
    }, {
      value: 2,
      name: '管理员'
    }, {
      value: 3,
      name: '开发者'
    }, {
      value: 4,
      name: '普通用户'
    }],
    needlessLogin: ['Login', 'Register', 'Forget', 'ActivityPreview', 'ArticleList', 'ArticleView'] // 不需要登录的页面
  }
})

export default store

global.store = store