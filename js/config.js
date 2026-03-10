// 全局常量配置
const PROXY_URL = '/proxy/';    // 适用于 Cloudflare, Netlify (带重写), Vercel (带重写)
// const HOPLAYER_URL = 'https://hoplayer.com/index.html';
const SEARCH_HISTORY_KEY = 'videoSearchHistory';
const MAX_HISTORY_ITEMS = 5;

// 密码保护配置
// 注意：PASSWORD 环境变量是必需的，所有部署都必须设置密码以确保安全
const PASSWORD_CONFIG = {
    localStorageKey: 'passwordVerified',  // 存储验证状态的键名
    verificationTTL: 90 * 24 * 60 * 60 * 1000  // 验证有效期（90天，约3个月）
};

// 网站信息配置
const SITE_CONFIG = {
    name: 'LibreTV',
    url: 'https://libretv.is-an.org',
    description: '免费在线视频搜索与观看平台',
    logo: 'image/logo.png',
    version: '1.0.3'
};

// API站点配置
const API_SITES = {
    "feifan":{name: "非凡资源",baseUrl: "http://ffzy5.tv/api.php/provide/vod"},
    "wolong":{name: "卧龙资源",baseUrl: "https://wolongzyw.com/api.php/provide/vod"},
    "zuida":{name: "最大资源",baseUrl: "https://api.zuidapi.com/api.php/provide/vod"},
    "baiduyun":{name: "百度云资源",baseUrl: "https://api.apibdzy.com/api.php/provide/vod"},
    "baofeng":{name: "暴风资源",baseUrl: "https://bfzyapi.com/api.php/provide/vod"},
    "jisu":{name: "极速资源",baseUrl: "https://jszyapi.com/api.php/provide/vod"},
    "tianya":{name: "天涯资源",baseUrl: "https://tyyszy.com/api.php/provide/vod"},
    "wujin":{name: "无尽资源",baseUrl: "https://api.wujinapi.com/api.php/provide/vod"},
    "modu":{name: "魔都资源",baseUrl: "https://www.mdzyapi.com/api.php/provide/vod"},
    "sanliuling":{name: "360资源",baseUrl: "https://360zy.com/api.php/provide/vod"},
    "dytt":{name: "电影天堂",baseUrl: "http://caiji.dyttzyapi.com/api.php/provide/vod"},
    "ruyi":{name: "如意资源",baseUrl: "https://cj.rycjapi.com/api.php/provide/vod"},
    "wangwang":{name: "旺旺资源",baseUrl: "https://wwzy.tv/api.php/provide/vod"},
    "hongniu":{name: "红牛资源",baseUrl: "https://www.hongniuzy2.com/api.php/provide/vod"},
    "guangsu":{name: "光速资源",baseUrl: "https://api.guangsuapi.com/api.php/provide/vod"},
    "ikun":{name: "iKun资源",baseUrl: "https://ikunzyapi.com/api.php/provide/vod"},
    "youku":{name: "优酷资源",baseUrl: "https://api.ukuapi.com/api.php/provide/vod"},
    "huya":{name: "虎牙资源",baseUrl: "https://www.huyaapi.com/api.php/provide/vod"},
    "xinlang":{name: "新浪资源",baseUrl: "http://api.xinlangapi.com/xinlangapi.php/provide/vod"},
    "lezi":{name: "乐子资源",baseUrl: "https://cj.lziapi.com/api.php/provide/vod"},
    "haihua":{name: "海豚资源",baseUrl: "https://hhzyapi.com/api.php/provide/vod"},
    "jiangyu":{name: "鲸鱼资源",baseUrl: "https://jyzyapi.com/provide/vod"},
    "aidan":{name: "爱蛋资源",baseUrl: "https://lovedan.net/api.php/provide/vod"},
    "moduzy":{name: "魔都影视",baseUrl: "https://www.moduzy.com/api.php/provide/vod"},
    "feifanapi":{name: "非凡API",baseUrl: "https://api.ffzyapi.com/api.php/provide/vod"},
    "feifancj":{name: "非凡采集",baseUrl: "http://cj.ffzyapi.com/api.php/provide/vod"},
    "feifancj2":{name: "非凡采集HTTPS",baseUrl: "https://cj.ffzyapi.com/api.php/provide/vod"},
    "feifan1":{name: "非凡线路1",baseUrl: "http://ffzy1.tv/api.php/provide/vod"},
    "wolong2":{name: "卧龙采集",baseUrl: "https://collect.wolongzyw.com/api.php/provide/vod"},
    "baofeng2":{name: "暴风APP",baseUrl: "https://app.bfzyapi.com/api.php/provide/vod"},
    "wujin2":{name: "无尽ME",baseUrl: "https://api.wujinapi.me/api.php/provide/vod"},
    "tianyazy":{name: "天涯海角",baseUrl: "https://tyyszyapi.com/api.php/provide/vod"},
    "guangsu2":{name: "光速HTTP",baseUrl: "http://api.guangsuapi.com/api.php/provide/vod"},
    "xinlang2":{name: "新浪HTTPS",baseUrl: "https://api.xinlangapi.com/xinlangapi.php/provide/vod"},
    "yilingba2":{name: "1080JSON",baseUrl: "https://api.1080zyku.com/inc/apijson.php"},
    "lezi2":{name: "乐子HTTP",baseUrl: "http://cj.lziapi.com/api.php/provide/vod"},
    "uku88":{name: "U酷资源88",baseUrl: "https://api.ukuapi88.com/api.php/provide/vod"},
    "wujincc":{name: "无尽CC",baseUrl: "https://api.wujinapi.cc/api.php/provide/vod"},
    "yaya":{name: "丫丫点播",baseUrl: "https://cj.yayazy.net/api.php/provide/vod"},
    "wolongcc":{name: "卧龙CC",baseUrl: "https://collect.wolongzy.cc/api.php/provide/vod"},
    "wujinnet":{name: "无尽NET",baseUrl: "https://api.wujinapi.net/api.php/provide/vod"},
    "wangwangapi":{name: "旺旺API",baseUrl: "https://api.wwzy.tv/api.php/provide/vod"},
    "zuidame":{name: "最大点播",baseUrl: "http://zuidazy.me/api.php/provide/vod"},
    "yinghua":{name: "樱花资源",baseUrl: "https://m3u8.apiyhzy.com/api.php/provide/vod"},
    "bubugao":{name: "步步高资源",baseUrl: "https://api.yparse.com/api/json"},
    "niuniu":{name: "牛牛点播",baseUrl: "https://api.niuniuzy.me/api.php/provide/vod"},
    "suoni":{name: "索尼资源",baseUrl: "https://suoniapi.com/api.php/provide/vod"},
    "maotai":{name: "茅台资源",baseUrl: "https://caiji.maotaizy.cc/api.php/provide/vod"},
    "dbzy":{name: "豆瓣资源",baseUrl: "https://dbzy.tv/api.php/provide/vod"},
    "subo":{name: "速博资源",baseUrl: "https://subocaiji.com/api.php/provide/vod"},
    "jinying":{name: "金鹰点播",baseUrl: "https://jinyingzy.com/api.php/provide/vod"},
    "shandian":{name: "閃電资源",baseUrl: "https://sdzyapi.com/api.php/provide/vod"},
    "piaoling":{name: "飘零资源",baseUrl: "https://p2100.net/api.php/provide/vod"},
    "modudongman":{name: "魔都动漫",baseUrl: "https://caiji.moduapi.cc/api.php/provide/vod"},
    "hongniu3":{name: "红牛资源3",baseUrl: "https://www.hongniuzy3.com/api.php/provide/vod"},
    "suonisd":{name: "索尼-闪电",baseUrl: "https://xsd.sdzyapi.com/api.php/provide/vod"},
    "leba":{name: "乐播资源",baseUrl: "https://lbapi9.com/api.php/provide/vod",adult: true},
    "ck":{name: "CK",baseUrl: "https://www.ckzy1.com/api.php/provide/vod",adult: true},
    "jkun":{name: "jkun",baseUrl: "https://jkunzyapi.com/api.php/provide/vod",adult: true},
    "155":{name: "155",baseUrl: "https://155api.com/api.php/provide/vod",adult: true},
    "lsb":{name: "lsb",baseUrl: "https://apilsbzy1.com/api.php/provide/vod",adult: true},
    "hsck":{name: "黄色仓库",baseUrl: "https://hsckzy.vip/api.php/provide/vod",adult: true},
    "yutu":{name: "玉兔",baseUrl: "https://yutuzy10.com/api.php/provide/vod",adult: true},
    "msnii":{name: "美少女资源站",baseUrl: "https://www.msnii.com/api/json.php",adult: true},
    "xrbsp":{name: "淫水机资源站",baseUrl: "https://www.xrbsp.com/api/json.php",adult: true},
    "gdlsp":{name: "香奶儿资源站",baseUrl: "https://www.gdlsp.com/api/json.php",adult: true},
    "kxgav":{name: "白嫖资源站",baseUrl: "https://www.kxgav.com/api/json.php",adult: true},
    "pgxdy":{name: "黄AV资源站",baseUrl: "https://www.pgxdy.com/api/json.php",adult: true},
    "baiwan":{name: "百万资源",baseUrl: "https://api.bwzyz.com/api.php/provide/vod",adult: true},
    "madou":{name: "91麻豆",baseUrl: "https://91md.me/api.php/provide/vod",adult: true},
    "aosika":{name: "奥斯卡资源",baseUrl: "https://aosikazy.com/api.php/provide/vod",adult: true},
    "naixiang":{name: "奶香香",baseUrl: "https://Naixxzy.com/api.php/provide/vod",adult: true},
    "senlin":{name: "森林资源",baseUrl: "https://slapibf.com/api.php/provide/vod",adult: true},
    "fanhao":{name: "番号资源",baseUrl: "http://fhapi9.com/api.php/provide/vod",adult: true},
    "jingpin":{name: "精品资源",baseUrl: "https://www.jingpinx.com/api.php/provide/vod",adult: true},
    "shayu":{name: "鲨鱼资源",baseUrl: "https://shayuapi.com/api.php/provide/vod",adult: true},
    "xiaoji":{name: "小鸡资源",baseUrl: "https://api.xiaojizy.live/provide/vod",adult: true},
    "xibao":{name: "细胞采集",baseUrl: "https://www.xxibaozyw.com/api.php/provide/vod",adult: true}
    // dyttzy: {
    //     api: 'http://caiji.dyttzyapi.com/api.php/provide/vod',
    //     name: '电影天堂资源',
    //     detail: 'http://caiji.dyttzyapi.com', 
    // },
    // ruyi: {
    //     api: 'https://cj.rycjapi.com/api.php/provide/vod',
    //     name: '如意资源',
    // },
    // bfzy: {
    //     api: 'https://bfzyapi.com/api.php/provide/vod',
    //     name: '暴风资源',
    // },
    // tyyszy: {
    //     api: 'https://tyyszy.com/api.php/provide/vod',
    //     name: '天涯资源',
    // },
    // xiaomaomi: {
    //     api: 'https://zy.xmm.hk/api.php/provide/vod',
    //     name: '小猫咪资源',
    // },
    // ffzy: {
    //     api: 'http://ffzy5.tv/api.php/provide/vod',
    //     name: '非凡影视',
    //     detail: 'http://ffzy5.tv', 
    // },
    // heimuer: {
    //     api: 'https://json.heimuer.xyz/api.php/provide/vod',
    //     name: '黑木耳',
    //     detail: 'https://heimuer.tv', 
    // },
    // zy360: {
    //     api: 'https://360zy.com/api.php/provide/vod',
    //     name: '360资源',
    // },
    // iqiyi: {
    //     api: 'https://www.iqiyizyapi.com/api.php/provide/vod',
    //     name: 'iqiyi资源',
    // },
    // wolong: {
    //     api: 'https://wolongzyw.com/api.php/provide/vod',
    //     name: '卧龙资源',
    // }, 
    // hwba: {
    //     api: 'https://cjhwba.com/api.php/provide/vod',
    //     name: '华为吧资源',
    // },
    // jisu: {
    //     api: 'https://jszyapi.com/api.php/provide/vod',
    //     name: '极速资源',
    //     detail: 'https://jszyapi.com', 
    // },
    // dbzy: {
    //     api: 'https://dbzy.tv/api.php/provide/vod',
    //     name: '豆瓣资源',
    // },
    // mozhua: {
    //     api: 'https://mozhuazy.com/api.php/provide/vod',
    //     name: '魔爪资源',
    // },
    // mdzy: {
    //     api: 'https://www.mdzyapi.com/api.php/provide/vod',
    //     name: '魔都资源',
    // },
    // zuid: {
    //     api: 'https://api.zuidapi.com/api.php/provide/vod',
    //     name: '最大资源'
    // },
    // yinghua: {
    //     api: 'https://m3u8.apiyhzy.com/api.php/provide/vod',
    //     name: '樱花资源'
    // },
    // baidu: {
    //     api: 'https://api.apibdzy.com/api.php/provide/vod',
    //     name: '百度云资源'
    // },
    // wujin: {
    //     api: 'https://api.wujinapi.me/api.php/provide/vod',
    //     name: '无尽资源'
    // },
    // wwzy: {
    //     api: 'https://wwzy.tv/api.php/provide/vod',
    //     name: '旺旺短剧'
    // },
    // ikun: {
    //     api: 'https://ikunzyapi.com/api.php/provide/vod',
    //     name: 'iKun资源'
    // },
    // lzi: {
    //     api: 'https://cj.lziapi.com/api.php/provide/vod/',
    //     name: '量子资源站'
    // },
    // testSource: {
    //     api: 'https://www.example.com/api.php/provide/vod',
    //     name: '空内容测试源',
    //     adult: true
    // }
};

// 定义合并方法
function extendAPISites(newSites) {
    Object.assign(API_SITES, newSites);
}

// 暴露到全局
window.API_SITES = API_SITES;
window.extendAPISites = extendAPISites;


// 添加聚合搜索的配置选项
const AGGREGATED_SEARCH_CONFIG = {
    enabled: true,             // 是否启用聚合搜索
    timeout: 8000,            // 单个源超时时间（毫秒）
    maxResults: 10000,          // 最大结果数量
    parallelRequests: true,   // 是否并行请求所有源
    showSourceBadges: true    // 是否显示来源徽章
};

// 抽象API请求配置
const API_CONFIG = {
    search: {
        // 只拼接参数部分，不再包含 /api.php/provide/vod/
        path: '?ac=videolist&wd=',
        pagePath: '?ac=videolist&wd={query}&pg={page}',
        maxPages: 50, // 最大获取页数
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    },
    detail: {
        // 只拼接参数部分
        path: '?ac=videolist&ids=',
        headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
            'Accept': 'application/json'
        }
    }
};

// 优化后的正则表达式模式
const M3U8_PATTERN = /\$https?:\/\/[^"'\s]+?\.m3u8/g;

// 添加自定义播放器URL
const CUSTOM_PLAYER_URL = 'player.html'; // 使用相对路径引用本地player.html

// 增加视频播放相关配置
const PLAYER_CONFIG = {
    autoplay: true,
    allowFullscreen: true,
    width: '100%',
    height: '600',
    timeout: 15000,  // 播放器加载超时时间
    filterAds: true,  // 是否启用广告过滤
    autoPlayNext: true,  // 默认启用自动连播功能
    adFilteringEnabled: true, // 默认开启分片广告过滤
    adFilteringStorage: 'adFilteringEnabled' // 存储广告过滤设置的键名
};

// 增加错误信息本地化
const ERROR_MESSAGES = {
    NETWORK_ERROR: '网络连接错误，请检查网络设置',
    TIMEOUT_ERROR: '请求超时，服务器响应时间过长',
    API_ERROR: 'API接口返回错误，请尝试更换数据源',
    PLAYER_ERROR: '播放器加载失败，请尝试其他视频源',
    UNKNOWN_ERROR: '发生未知错误，请刷新页面重试'
};

// 添加进一步安全设置
const SECURITY_CONFIG = {
    enableXSSProtection: true,  // 是否启用XSS保护
    sanitizeUrls: true,         // 是否清理URL
    maxQueryLength: 100,        // 最大搜索长度
    // allowedApiDomains 不再需要，因为所有请求都通过内部代理
};

// 添加多个自定义API源的配置
const CUSTOM_API_CONFIG = {
    separator: ',',           // 分隔符
    maxSources: 5,            // 最大允许的自定义源数量
    testTimeout: 5000,        // 测试超时时间(毫秒)
    namePrefix: 'Custom-',    // 自定义源名称前缀
    validateUrl: true,        // 验证URL格式
    cacheResults: true,       // 缓存测试结果
    cacheExpiry: 5184000000,  // 缓存过期时间(2个月)
    adultPropName: 'isAdult' // 用于标记成人内容的属性名
};

// 隐藏内置黄色采集站API的变量
const HIDE_BUILTIN_ADULT_APIS = false;
