(function(e) {
    function a(a) {
        for (var i, o, s = a[0], d = a[1], l = a[2], u = 0, c = []; u < s.length; u++) o = s[u], Object.prototype.hasOwnProperty.call(n, o) && n[o] && c.push(n[o][0]), n[o] = 0;
        for (i in d) Object.prototype.hasOwnProperty.call(d, i) && (e[i] = d[i]);
        m && m(a);
        while (c.length) c.shift()();
        return r.push.apply(r, l || []), t()
    }

    function t() {
        for (var e, a = 0; a < r.length; a++) {
            for (var t = r[a], i = !0, o = 1; o < t.length; o++) {
                var d = t[o];
                0 !== n[d] && (i = !1)
            }
            i && (r.splice(a--, 1), e = s(s.s = t[0]))
        }
        return e
    }
    var i = {},
        n = {
            index: 0
        },
        r = [];

    function o(e) {
        return s.p + "static/js/" + ({
            "pages-home-aboutus": "pages-home-aboutus",
            "pages-home-cert": "pages-home-cert",
            "pages-home-download": "pages-home-download",
            "pages-home-earn": "pages-home-earn",
            "pages-home-earnlist": "pages-home-earnlist",
            "pages-home-index": "pages-home-index",
            "pages-home-joinus": "pages-home-joinus",
            "pages-home-language": "pages-home-language",
            "pages-home-rules": "pages-home-rules",
            "pages-login-forget~pages-login-login~pages-login-phoneCode~pages-login-register": "pages-login-forget~pages-login-login~pages-login-phoneCode~pages-login-register",
            "pages-login-forget~pages-login-login~pages-login-register": "pages-login-forget~pages-login-login~pages-login-register",
            "pages-login-forget": "pages-login-forget",
            "pages-login-login": "pages-login-login",
            "pages-login-register": "pages-login-register",
            "pages-login-phoneCode": "pages-login-phoneCode",
            "pages-login-registerNext": "pages-login-registerNext",
            "pages-mine-authentication": "pages-mine-authentication",
            "pages-mine-funds": "pages-mine-funds",
            "pages-mine-googleAuth~pages-mine-inviteFriends~pages-mine-recharge": "pages-mine-googleAuth~pages-mine-inviteFriends~pages-mine-recharge",
            "pages-mine-googleAuth": "pages-mine-googleAuth",
            "pages-mine-inviteFriends": "pages-mine-inviteFriends",
            "pages-mine-recharge": "pages-mine-recharge",
            "pages-mine-rechargeRecords": "pages-mine-rechargeRecords",
            "pages-mine-teamIncomes": "pages-mine-teamIncomes",
            "pages-mine-ucenter~pages-mine-userinfo": "pages-mine-ucenter~pages-mine-userinfo",
            "pages-mine-ucenter": "pages-mine-ucenter",
            "pages-mine-userinfo": "pages-mine-userinfo",
            "pages-mine-withdraw": "pages-mine-withdraw",
            "pages-mine-withdrawalRecords": "pages-mine-withdrawalRecords",
            "pages-team-index": "pages-team-index",
            "pages-team-myTeam": "pages-team-myTeam",
            "pages-transaction-incomeStatistics": "pages-transaction-incomeStatistics",
            "pages-transaction-index": "pages-transaction-index"
        }[e] || e) + "." + {
            "pages-home-aboutus": "682bc87a",
            "pages-home-cert": "6913aa92",
            "pages-home-download": "008831c5",
            "pages-home-earn": "22af2113",
            "pages-home-earnlist": "6b567185",
            "pages-home-index": "23b2cf8e",
            "pages-home-joinus": "ab2a2592",
            "pages-home-language": "93a587eb",
            "pages-home-rules": "5647189e",
            "pages-login-forget~pages-login-login~pages-login-phoneCode~pages-login-register": "2b532bd7",
            "pages-login-forget~pages-login-login~pages-login-register": "b8211178",
            "pages-login-forget": "ba67d24f",
            "pages-login-login": "8b18c8c9",
            "pages-login-register": "0c72ce95",
            "pages-login-phoneCode": "f9c30235",
            "pages-login-registerNext": "a6f42b69",
            "pages-mine-authentication": "c4cb47f7",
            "pages-mine-funds": "2ecf87df",
            "pages-mine-googleAuth~pages-mine-inviteFriends~pages-mine-recharge": "ca557a14",
            "pages-mine-googleAuth": "cb50ec2c",
            "pages-mine-inviteFriends": "5423f563",
            "pages-mine-recharge": "efbfa028",
            "pages-mine-rechargeRecords": "69153e04",
            "pages-mine-teamIncomes": "91e4d5e1",
            "pages-mine-ucenter~pages-mine-userinfo": "c63c2827",
            "pages-mine-ucenter": "1c4b5923",
            "pages-mine-userinfo": "3f358cda",
            "pages-mine-withdraw": "b4748268",
            "pages-mine-withdrawalRecords": "b810dd69",
            "pages-team-index": "63af102d",
            "pages-team-myTeam": "c424fe6a",
            "pages-transaction-incomeStatistics": "1132869e",
            "pages-transaction-index": "0f64fc6c"
        }[e] + ".js"
    }

    function s(a) {
        if (i[a]) return i[a].exports;
        var t = i[a] = {
            i: a,
            l: !1,
            exports: {}
        };
        return e[a].call(t.exports, t, t.exports, s), t.l = !0, t.exports
    }
    s.e = function(e) {
        var a = [],
            t = n[e];
        if (0 !== t)
            if (t) a.push(t[2]);
            else {
                var i = new Promise((function(a, i) {
                    t = n[e] = [a, i]
                }));
                a.push(t[2] = i);
                var r, d = document.createElement("script");
                d.charset = "utf-8", d.timeout = 120, s.nc && d.setAttribute("nonce", s.nc), d.src = o(e);
                var l = new Error;
                r = function(a) {
                    d.onerror = d.onload = null, clearTimeout(u);
                    var t = n[e];
                    if (0 !== t) {
                        if (t) {
                            var i = a && ("load" === a.type ? "missing" : a.type),
                                r = a && a.target && a.target.src;
                            l.message = "Loading chunk " + e + " failed.\n(" + i + ": " + r + ")", l.name = "ChunkLoadError", l.type = i, l.request = r, t[1](l)
                        }
                        n[e] = void 0
                    }
                };
                var u = setTimeout((function() {
                    r({
                        type: "timeout",
                        target: d
                    })
                }), 12e4);
                d.onerror = d.onload = r, document.head.appendChild(d)
            }
        return Promise.all(a)
    }, s.m = e, s.c = i, s.d = function(e, a, t) {
        s.o(e, a) || Object.defineProperty(e, a, {
            enumerable: !0,
            get: t
        })
    }, s.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, s.t = function(e, a) {
        if (1 & a && (e = s(e)), 8 & a) return e;
        if (4 & a && "object" === typeof e && e && e.__esModule) return e;
        var t = Object.create(null);
        if (s.r(t), Object.defineProperty(t, "default", {
                enumerable: !0,
                value: e
            }), 2 & a && "string" != typeof e)
            for (var i in e) s.d(t, i, function(a) {
                return e[a]
            }.bind(null, i));
        return t
    }, s.n = function(e) {
        var a = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return s.d(a, "a", a), a
    }, s.o = function(e, a) {
        return Object.prototype.hasOwnProperty.call(e, a)
    }, s.p = "/", s.oe = function(e) {
        throw console.error(e), e
    };
    var d = window["webpackJsonp"] = window["webpackJsonp"] || [],
        l = d.push.bind(d);
    d.push = a, d = d.slice();
    for (var u = 0; u < d.length; u++) a(d[u]);
    var m = l;
    r.push([0, "chunk-vendors"]), t()
})({
    0: function(e, a, t) {
        e.exports = t("4621")
    },
    "056c": function(e, a, t) {
        "use strict";
        var i = t("c024"),
            n = t.n(i);
        n.a
    },
    "06f6": function(e, a, t) {
        "use strict";

        function i(e) {
            uni.setTabBarItem({
                index: 0,
                text: e.$i18n.messages[e.$i18n.locale].tabBar.home
            }), uni.setTabBarItem({
                index: 1,
                text: e.$i18n.messages[e.$i18n.locale].tabBar.trade
            }), uni.setTabBarItem({
                index: 2,
                text: e.$i18n.messages[e.$i18n.locale].tabBar.team
            }), uni.setTabBarItem({
                index: 3,
                text: e.$i18n.messages[e.$i18n.locale].tabBar.mine
            })
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.tabLang = i
    },
    "0c47d": function(e, a) {
        e.exports = "data:image/png;base64,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"
    },
    "0d11": function(e, a, t) {
        "use strict";
        t.r(a);
        var i = t("9649"),
            n = t("c9a4");
        for (var r in n) "default" !== r && function(e) {
            t.d(a, e, (function() {
                return n[e]
            }))
        }(r);
        t("056c");
        var o, s = t("f0c5"),
            d = Object(s["a"])(n["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], o);
        a["default"] = d.exports
    },
    "0fc0": function(e) {
        e.exports = JSON.parse('{"tabBar":{"home":"首页","trade":"交易大厅","team":"我的团队","mine":"我的"},"funcs":{"aboutus":"关于WOTC","rules":"平台规则","download":"下载中心","cert":"资质证书","setting":"语言","customer":"客户服务","activities":"活动公告","joinus":"加入WOTC","earn":"闲币赚息"},"home":{"index":{"trade_data":"交易数据","no_register":"请先注册成为会员","no_message":"没有信息"},"download":{"google_play":"Worldotc for Android","google_play_tip":"应用商店下载","ios":"Worldotc for iOS","ios_tip":"点击跳转到官网进行下载"},"language":{"language":"语言"},"earn":{"title":"闲币赚息","total_profit":"总收益","access_detail":"存取明细","available_balance":"可用余额","storage_balance":"已存入金额","item_title":"协议列表","time":"时间","profit":"收益","btn":"立即购买","msg":{"earn_success":"交易成功"},"trade":{"sell_title":"订单收益","sell_time":"时间：","profit_fee":"利率：","input_amount":"输入金额：","input_amount_tip":"0.00","input_amount_msg":"请输入金额","sell_income":"预期收益：","sell_btn":"买入","cancel_btn":"取消","input_amount_min_tip":"金额低于最小值: ","input_amount_max_tip":"金额超过最大值: ","note":"存入闲置资产以赚取收益","cancel":"取消"}},"earnlist":{"title":"存取明细","type_undo":"未完成","type_done":"已完成","type":"类型","amount":"金额","profit":"收益","buy_date":"存入日期：","send_date":"结算日期："}},"login":{"login":{"title":"登录","password":"密码","passwd_tip":"请输入6~16位密码","mobile":"手机号码","mobile_tip":"请输入您的手机号","register":"注册","forgot_pwd":"忘记密码","btn":"登录"},"phoneCode":{"custom_phone_code_tip":"请输入国际区号","confirm":"确定","msg":"当前地区暂未开放注册"},"register":{"title":"注册","smscode":"短信验证码","smscode_placeholder":"请输入短信验证码","smscode_tip":"请输入短信验证码","smscode_send_text":"发送验证码","login":"登录","next_step":"下一步","password":"密码","passwd_tip":"请输入6~16位密码","nickname":"昵称","nickname_tip":"请输入您的昵称","invite_code":"推荐码","invite_code_tip":"请输入您的推荐码","submit":"提交","reg_success":"注册成功","mobile_tip":"请输入您的手机号"},"forget":{"title":"忘记密码","password":"密码","passwd_tip":"请输入6~16位密码","smscode":"短信验证码","smscode_placeholder":"请输入短信验证码","smscode_send_text":"发送验证码","submit":"提交","success":"密码修改成功"}},"mine":{"ucenter":{"logout":"退出","invite_code":"推荐码: ","my_total_assets":"我的总资产","my_account":"我的账户","recharge":"充值","withdraw":"提现","personal_info":"个人信息","google_auth":"安全中心","recharge_record":"充值记录","withdraw_record":"提现记录","fund_detail":"资金明细","auth":"身份认证","team_profit":"团队收益","invite_friend":"邀请好友","tip":"提示","set_withdraw_address":"请先绑定提现地址","set":"设置","cancel":"取消"},"googleauth":{"title":"安全中心","googleauth_tip":"请绑定谷歌验证器","open_googleauth":"打开谷歌验证器","setting_tip":"开始扫描我们平台中提供的二维码,或者手动输入平台中提供的16位密钥，添加成功后输入动态密码验证即可完成绑定。","copy":"复制秘钥","copy_success":"复制成功","vercode":"谷歌验证码","bind":"验证并绑定","unbind":"解除绑定","vercode_tip":"请输入验证码","bind_success":"绑定成功","notice":"温馨提示","bind_tip":"您已绑定了谷歌验证器","unbind_tip":"如需解除绑定，请获取短信验证码进行验证","unbind_success":"解绑成功"},"userinfo":{"title":"个人信息","modify":"修改","nickname":"昵称","mobile":"手机号码","address":"提现地址","login_pwd":"登录密码","input_tip":"请填写内容","set":"设置","cancel":"取消","nickname_tip":"请输入昵称","login_pwd_tip":"请输入密码","withdraw_address_tip":"请输入提现地址","old_pass":"原密码","new_pass":"新密码","old_pass_tip":"请输入原密码","new_pass_tip":"请输入新密码","pass_tip":"若遗忘密码请在登录页面通过手机验证码取回","vercode":"谷歌验证码","code_tip":"请输入谷歌验证码"},"recharge":{"title":"充值","recharge_tip":"充值提示","recharge_tip_mark1":"充值地址仅支持TRC20-USDT，最低充值10USDT。","recharge_tip_mark2":"请勿向充值地址转入其他资产，以免造成资金损失。","qrcode":"二维码","copy":"复制","copy_success":"复制成功"},"rechargeRecords":{"title":"充值记录","time":"时间","amount":"金额","status":"状态","payway":"充值方式：","orderno":"订单号：","recharge_status":{"1":"已完成","2":"充值失败","3":"已取消"}},"withdraw":{"title":"提现","available_balance":"可用余额","real_money":"实际到账(手续费：3%)","smscode":"短信验证码","smscode_placeholder":"请输入短信验证码","smscode_send_text":"发送验证码","address":"提现地址","submit":"提交","withdraw_success":"提现成功","withdraw_tip":"最低提现金额：","withdraw_amount_tip":"请输入提现金额","vercode_tip":"验证码不可为空","password":"密码","passwd_tip":"请输入6~16位密码","vercode":"谷歌验证码","code_tip":"请输入谷歌验证码","tips":"温馨提示：为了您的资金安全，请至安全中心绑定谷歌验证器。"},"withdrawalRecords":{"title":"提现记录","time":"时间","amount":"金额","status":"状态","withdraw_way":"提现地址：","orderno":"订单号：","withdraw_status":{"0":"提现中","1":"提现成功","2":"提现取消"}},"funds":{"title":"资金明细","time":"时间","amount":"金额","status":"状态","fund_status":{"10":"领取收益","11":"任务奖励","20":"存入","21":"取出","30":"OTC交易","31":"OTC收益","50":"充值","51":"充值","52":"充值","60":"提现","61":"提现","62":"提现"}},"authentication":{"title":"身份认证","auth_status":{"0":"未认证","1":"审核中","2":"已认证","3":"已拒绝"},"auth_photo_hold_example":"示例","auth_problem_tips":"温馨提示：如遇到问题，请联系客服","submit":"立即认证","uploading":"上传中.."},"teamIncomes":{"title":"团队收益","level":"等级","userid":"ID","time":"时间","amount":"金额"},"inviteFriends":{"title":"邀请好友","invite_code":"推荐码","invite_friend_tip":"马上享受大额收益，快去邀请吧","invite_friend_btn":"点击复制","share_rule":{"title":"返佣规则","title_tip":"好友注册后赚取的每笔利润，您都将获得相应比例的佣金","rate_title":"佣金比例规则如下","rate_user_level":"用户等级","rate_way":"规则","rate_num":"佣金比例","rate_lv1_desc":"直接邀请的用户","rate_lv2_desc":"LV1邀请的用户","rate_lv3_desc":"LV2邀请的用户","rate_lv4_desc":"lv3以下邀请的所有用户","hint":"佣金以USDT结算，可随时提现到您的钱包"},"copy_success":"复制成功"}},"team":{"index":{"team_total_income":"总收益","team_residual_income":"剩余收益","receive":"领取","team_info":"团队详情","team_user_list":"查看明细","team_total_profit":"总收益","team_total_num":"总人数","team_total_recharge":"总充值","people_num":"人数","people_profit":"收益","team_invite_task":"邀请任务要求","team_invite_task_tip":"邀请{need_num}位用户成功交易，领取奖励{amount}USDT","progress":"进度","team_receive":"领取","team_hasreceive":"已领取","receive_success":"领取成功"},"myTeam":{"title":"团队明细","team_total_profit":"总收益","team_total_num":"总人数","team_total_recharge":"总充值","team_lv1":"Level 1","team_lv2":"Level 2","team_lv3":"Level 3","team_lv_count":"数量：","team_lv_income":"收益：","team_lv_recharge":"充值：","team_lv_invite":"邀请人数：","team_lv_mobile":"手机号：","team_lv_time":"注册时间："}},"transaction":{"index":{"total_assets":"总资产","trade_stat":"收益统计","tran_title":"WOTC交易介绍","tran_desc":"WOTC拥有全球加密货币匹配系统。为用户提供USDT交易全球加密货币平台。确保交易稳定性和利润最大化","accepting":"交易处理中","wallet_balance":"钱包余额","order_amount":"交易金额","order_amount_tip":"请输入正确的金额","order_amount_all":"全部","btn":"开始筛选","trade_success":"交易成功：","trade_amount":"成交金额：","trade_profit":"成交收益：","record":"交易列表","tradingtime":"剩余时间:{%s}","time":"时间","amount":"成交金额","profit":"利润","sell_time":"卖出时间：","sell_amount":"卖出金额：","income_time":"收入时间：","income_amount":"收入金额：","order_num":"订单号：","search":"AI智能匹配中...","msg":{"amount_tip":"余额低于{deal_amount}，无法筛选","order_amount_tip":"请输入正确的金额"},"sell":{"symbol":"加密货币：","service_provider":"MSB认证服务商：","market_price":"USDT交易价格：","trade_price":"交易价格：","order_amount":"订单金额：","confirm":"开始交易","cancel":"取消","trading":"交易中..."},"sell_success":{"title":"收入和资金将在3小时后自动存入您的账户!","orderNo":"订单号：","trade_price":"交易金额：","profit":"利润：","amount":"总额：","tip":"已转入交易钱包，随后将自动转入余额钱包","confirm":"确认"}},"incomeStatistics":{"title":"收益统计","total_orders_num":"总完成交易数","total_money":"总金额","total_profit":"总利润","date":"日期","order_num":"交易数","money":"金额","profit":"利润"}},"main":{"more":"更多 >","got_it":"知道了","loading":"加载中...","modify_success":"修改成功"},"infomation":{"aboutus":{"1":"World Over The Counter 是由一班经验丰富的专业团队、以及庞大流动资金池支持组成。","2":"World Over The Counter 的场外交易（OTC）服务，适用于由10美元至数百万美元以上金额规模的交易，覆盖多种法定货币、USDT、及其他主要加密货币。 World Over The Counter场外交易服务的最大优势，是我们为投资者、高净值资产人士，提供强大的交易深度、度身订制服务、以及高度私隐保障。 World Over The Counter 的场外交易服务，让客户免除在普遍交易平台常见的交易滑价损失，是加密货币大额交易者的最佳选择。","3":"World Over The Counter 的场外交易 OTC 服务，适用于法定货币、USDT、或其他加密货币。 World Over The Counter专注让你可以自由简便地进行加密货币交易，毋须担心交易深度及买卖盘配对等繁复问题。同时，我们透过完善的交易执行及结算服务，为你带来灵活、安全保障的优质交易体验。","4":"1：申请  World Over The Counter场外交易账户 (个人账户)","5":"2：将法定货币或加密货币存入你的账户","6":"3：交易执行后，USDT会于三个小时后自动存入到你的账户余额","7":"为你而设的场外交易方案","8":"专业交易员","9":"我们拥有世界数一数二的比特币和加密货币交易员。我们专业的经验可追遡于过去多年前由比特币的诞生开始，我们一直为数以千计客人在适当的时间及正确的地方提供最合适的价格服务。","10":"不一样的交易体验","11":"与一般交易所和大型场外交易所不同，World Over The Counter 会为你提供度身定制的最佳流动性资金安排及交易方案，完全切合你的交易需求。成功设置你的账户后，我们将与你进行交流咨询，并提供取最理想的解决方案，满足你的计划需求及期望成果。我们致力成为有信誉，可靠，便捷以及 社群发展。我们致力与每位客户建立良好及持久的关系，在任何时候都能够提供最优质服","12":"国际服务","13":"World Over The Counter 的总部位于美国特罗拉多州，致力为国际客户提供全球加密货币交易平台及交易服务，并已获得来自亚洲、美洲、澳洲、欧洲、非洲多国客户的高度赞赏与信任","14":"可信和可靠","15":"World Over The Counter 相信诚实和透明度高是成功的关键，并对客户资料的稳私与保密高度重视，凭借专业的态度，得到客人的信赖和支持。 我们致力建立可信赖的形象，与您携手并进。无论您身在何处，都可以安心地使用我们提供的完善服务。"},"cert":{"1":"World Over The Counter Limited 营业执照","2":"World Over The Counter Limited 营业执照注册证书","3":"已在此加盖了科罗拉多州的国玺，并正式生成、执行并发布了此官方证书。","4":"科罗拉多州将根据适用法律对此进行监管。","5":"在科罗拉多州国务卿官方网站查询证书编号查看该公司详细信息。","6":"World Over The Counter Foundation 营业执照","7":"World Over The Counter Foundation 营业执照注册证书。","8":"因为WOTC积极参与世界慈善基金会，将他们的爱传递给世界。","9":"该证书由科罗拉多州国务卿办公室批准并编号。","10":"未来WOTC将会参与世界各大慈善基金并让更多的人得到帮助。","11":"慈善基金的证书也更好的带给该公司的所有成员更好的资产保护。","12":"在科罗拉多州国务卿官方网站查询证书编号查看该公司详细信息。","13":"在视频中我们可以看到WOTC团队成员与美国佛罗里达州PALM BEACH CHRISTIAN PREPARATORY SCHOOL谈成初步合作。WOTC为学校提供赞助。并帮助学校的每一位学生减轻学业负担。为教育行业贡献一份力量。","14":"WOTC团队成员在全世界展开的慈善活动。在努力的帮助更多人。他们就像黎明中的一束光。让我们的光能够照亮更多人。","15":"也许你们有一天会看到WOTC的团队成员在你的家门口经过，请不要惊讶。因为我们已经火爆全球。我们知道许多竞争对手经常通过诽谤、并制造谣言伤害我们。但我们通过团结的力量让这些谣言消亡。WOTC从未让任何人失望。","16":"感谢所有对WOTC信任和支持的成员。让我们恭贺WOTC的慈善基金会建立成功。","17":"MSB证书官方查询网址：","18":"https://www.fincen.gov/msb-state-selector","19":"营业执照官方查询网址：","20":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","21":"基金会官方查询网址：","22":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","23":"以上所有内容解释权归World Over The Counter Limited所有","24":"美国MSB牌照是由美国财政部监管，并颁发的一类金融牌照，主要收监管对象是金钱服务相关的业务与公司，包括了数字货币、虚拟货币的交易，ICO发行，以及外汇兑换，国际汇款等等的业务。"},"joinus":{"1":"World Over The Counter 欢迎任何人士接触联络，共同参与加密货币领域。无论你想进行加密货币买卖交易，或是想了解更多有关比特币和加密货币的资讯，World Over The Counter 都会全力为你服务。","2":"假如有任何疑问或意见，欢迎随时电邮或致电我们。我们更加鼓励所有客户参与我们的加密货币社群，推动社群发展。","3":"World Over The Counter 致力将交易费用及限制降低，为客户提供较大多数场外交易平台更低的交易门槛，任何金额的交易，我们都会为你带来最适合的交易方案，从而让USDT及加密货币可以为全民服务使用。","4":"目前全球超过10亿人口没有或缺乏银行服务，但是他们大部分都可以使用智能电话。","5":"他们可以随时使用智能电话的电子钱包，让去中心化加密货币为他们带来最大价值效益 — World Over The Counter 会继续以此为目标，推动加密货币迈向全民普及。","6":"不论在线上或线下，World Over The Counter 一直致力发展一个活跃、互动的加密货币用户社群，透过提供知识资讯、互相交流，共同发展及参与全球比特币及加密货币社群。","7":"无论你是加密货币新手、或是资深专家，我们都欢迎你加入！","8":"World Over The Counter请提供你的联络方法及简单资料，让我们了解如何为你提供协助，我们将尽快回覆。","9":"邮箱：worldoverthecounter@gmail.com","10":""},"rules":{"1":"使用条款","2":"购买USDT时，切勿使用不属于你的钱包地址。请使用自己的钱包地址。请不要将USDT发送给疑似诈骗的人！","3":"当你同意我们的使用条款，即表示你亦同意我们的个人资料收集声明和隐私政策, 私隐政策以及 Cookie 政策。","4":"们不会为18岁以下人士提供服务、设备和其他事项。如果你为未满 18 岁并使用我们的网站，你应联络向你承担监护权的人与我们联系，以行使适当的存取、更正、取消和反对权利。","5":"交易规则","6":"Worldotc是美国MSB认证的加密货币场外交易所.提供USDT和全球加密货币的交易平台，为用户提供了交易准确性和便利性.输入你想要的购买的虚拟货币金额。","7":"每3个小时结算一次收益，每次利润将是你投资金额的0.4%！","8":"每天24小时结算高达8次，最高收益3.2%！","9":"最快23天投入资金翻倍！","10":"每月最大利润为1.572倍！","11":"充值提款规则","12":"绑定你的TRC20地址进行提款，全天24小时进行提款，提款手续费为3% 。","13":"提款时间1分钟到账。","14":"注意：每个TRC20地址只能绑定一个投资账号","15":"使用你的币安或者钱包进行充值，最低投资金额 11USDT，最低提款金额 5USDT","16":"邀请规则","17":"你的朋友进行投资赚钱你可以获得的佣金收入：","18":"Lv1 直接邀请的用户 （总交易利润的15%）","19":"Lv2 L1邀请的用户 （总交易利润的10%）","20":"Lv3 L2邀请的用户 （总交易利润的 5%）","21":"邀请任务奖励","22":"每邀请10个LV1成员完成投资，可以获得邀请奖励 10 USDT","23":"注：每位受邀LV1下属需完成投资才算有效用户。","24":"温馨提示：如对奖励及规则有任何疑问，请联系客服经理。"}},"serverCodes":{"401":"参数不对","406":"余额不足","407":"交易金额不正确","408":"无效参数","409":"密码由6~16位字母加数字组成","410":"验证码错误","411":"用户名或密码错误","412":"账户冻结，请联系客服","413":"请正确填写手机号码","414":"手机号已被注册过，请选择其他手机号","415":"获取验证码频率间隔1分钟","416":"请求频繁，稍后再试","417":"验证码已失效，请重新发送验证码","418":"手机未验证或验证已过期，请重新开始注册","419":"昵称由2~8位字符组成","420":"请输入正确的邀请码","421":"手机号没被注册过，无需找回密码","422":"重复请求","423":"验证码发送成功","424":"当日发送验证码数量已达上限","425":"验证码发送失败","426":"地址无法修改，请联系客服","427":"验证失败","428":"您已经绑定了谷歌验证器","429":"原密码验证失败","500":"网络异常，请稍候再试","501":"暂停登录","502":"暂停注册","503":"未登录","605":"请输入正确的数量","606":"提币数量低于最低值","607":"提币数量高于最高值","608":"请输入正确的提币地址","609":"地址格式不正确","610":"密码错误","706":"此地址已被使用，请更换。","708":"不存在此用户","712":"请实名认证后再提现","713":"当前无收益可领取","714":"当前任务奖励已领取","715":"未达到领取条件"}}')
    },
    "1a6d": function(e, a, t) {
        e.exports = t.p + "static/img/XLM.45bcb337.png"
    },
    "1c8d": function(e, a) {
        e.exports = "data:image/png;base64,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"
    },
    "1eab": function(e, a) {
        e.exports = "data:image/png;base64,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"
    },
    "211d": function(e, a, t) {
        "use strict";
        var i = t("4ea4");
        t("4160"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.modelPatch = r;
        var n = i(t("5530"));

        function r() {
            var e = ["showLoading", "showToast"];
            e.forEach((function(e) {
                var a = uni[e];
                uni[e] = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return e = (0, n.default)((0, n.default)({}, e), {}, {
                        mask: !0
                    }), a.call(this, e)
                }
            }))
        }
    },
    "21b3": function(e) {
        e.exports = JSON.parse('{"tabBar":{"home":"Home","trade":"Trading Floor","team":"Mein Team","mine":"Mein"},"funcs":{"aboutus":"ÜberWOTC","rules":"Plattformregeln","download":"Download Center","cert":"Qualifikationszertifikat","setting":"Sprache","customer":"Kundenservice","activities":"Event Ankündigung","joinus":"BeitretenWOTC","earn":"Freies Geld verdient Zinsen"},"home":{"index":{"trade_data":"Transaktionsdaten","no_register":"Bitte zuerst als Mitglied registrieren","no_message":"Keine Informationen\'"},"download":{"google_play":"Worldotc for Android","google_play_tip":"App Store Download","ios":"Worldotc for iOS","ios_tip":"Zum Download auf die offizielle Website klicken"},"language":{"language":"Sprache"},"earn":{"title":"Freies Geld verdient Zinsen","total_profit":"Gesamterlös","access_detail":"Access Details","available_balance":"Verfügbare Salden","storage_balance":"Betrag hinterlegt","item_title":"Liste der Abkommen","time":"Zeit","profit":"Payoff","btn":"jetzt kaufen","msg":{"earn_success":"Deal erfolgreich"},"trade":{"sell_title":"Rückgabe auf Bestellung","sell_time":"Zeit:","profit_fee":"Zinssatz:","input_amount":"Geben Sie den Betrag ein:","input_amount_tip":"0,00","input_amount_msg":"Bitte geben Sie den Betrag ein","sell_income":"Erwartete Renditen:","sell_btn":"Kaufen","cancel_btn":"Abgesagt","input_amount_min_tip":"Betrag unter Minimum:: ","input_amount_max_tip":"Betrag, der den Höchstwert überschreitet:: ","note":"Ungenutzte Vermögenswerte für den Gewinn hinterlegen\'","cancel":"Abgesagt"}},"earnlist":{"title":"Access Details","type_undo":"Unvollendet","type_done":"Abgeschlossen","type":"Typ","amount":"Betrag","profit":"Payoff","buy_date":"Datum der Einzahlung:","send_date":"Datum der Abrechnung:"}},"login":{"login":{"title":"Anmelden","password":"Cipher","passwd_tip":"Bitte ein 6 ~ 16 Bit Passwort eingeben","mobile":"Handy Nummer","mobile_tip":"Bitte geben Sie Ihre Handynummer ein","register":"Anmelden","forgot_pwd":"Passwort vergessen","btn":"Anmelden"},"phoneCode":{"custom_phone_code_tip":"Bitte eine internationale Vorwahl eingeben","confirm":"OK","msg":"Aktueller Bereich ist nicht für die Registrierung geöffnet"},"register":{"title":"Anmelden","smscode":"SMS Verifizierungscode","smscode_placeholder":"Bitte geben Sie einen SMS-Bestätigungscode ein","smscode_tip":"Bitte geben Sie einen SMS-Bestätigungscode ein","smscode_send_text":"Authentifizierungscode senden","login":"Einloggen","next_step":"Nächster Schritt","password":"Cipher","passwd_tip":"Bitte ein 6 ~ 16 Bit Passwort eingeben","nickname":"Nickname","nickname_tip":"Bitte geben Sie Ihren Benutzernamen ein","invite_code":"Empfohlener Code","invite_code_tip":"Bitte geben Sie Ihren empfohlenen Code ein","submit":"Einreichung","reg_success":"Registration Success","mobile_tip":"Bitte geben Sie Ihre Handynummer ein"},"forget":{"title":"Passwort vergessen","password":"Cipher","passwd_tip":"Bitte ein 6 ~ 16 Bit Passwort eingeben","smscode":"SMS Verifizierungscode","smscode_placeholder":"Bitte geben Sie einen SMS-Bestätigungscode ein","smscode_send_text":"Authentifizierungscode senden","submit":"Einreichung","success":"Passwortänderung war erfolgreich"}},"mine":{"ucenter":{"logout":"Exit","invite_code":"Empfohlener Code:: ","my_total_assets":"Mein gesamtes Vermögen","my_account":"Mein Konto","recharge":"Aufladen","withdraw":"Rückzug","personal_info":"Persönliche Daten","google_auth":"Sicherheitscenter","recharge_record":"Recharge Records","withdraw_record":"Entnahmeaufzeichnungen","fund_detail":"Details der Fonds","auth":"Identitätsauthentifizierung","team_profit":"Team Earnings","invite_friend":"Buddy einladen","tip":"Tipps","set_withdraw_address":"Bitte binden Sie zuerst die Auszahlungsadresse","set":"Einstellungen","cancel":"Abgesagt"},"googleauth":{"title":"Sicherheitscenter","googleauth_tip":"Bitte Google Authenticator binden","open_googleauth":"Öffnen Sie Google Authenticator","setting_tip":"Beginnen Sie mit dem Scannen des auf unserer Plattform bereitgestellten QR-Codes oder geben Sie den auf der Plattform bereitgestellten 16-stelligen Schlüssel manuell ein. Geben Sie nach erfolgreicher Hinzufügung die dynamische Passwortverifizierung ein, um die Bindung abzuschließen。","copy":"Schlüssel kopieren","copy_success":"Erfolgreich kopieren","vercode":"Google-Bestätigungscode","bind":"Authentifizieren und binden","unbind":"lösen","vercode_tip":"Bitte geben Sie den Bestätigungscode ein","bind_success":"Bindung erfolgreich","notice":"Freundliche Tipps","bind_tip":"Sie sind an Google Authenticator gebunden","unbind_tip":"Um die Bindung aufzuheben, erhalten Sie zur Bestätigung einen SMS-Bestätigungscode","unbind_success":"Bindung erfolgreich lösen"},"userinfo":{"title":"Persönliche Daten","modify":"Modifikation","nickname":"Nickname","mobile":"Handy Nummer","address":"Rücknahme Adresse","login_pwd":"Login Passwort","input_tip":"Bitte den Inhalt ausfüllen","set":"Einstellungen","cancel":"Cancel","nickname_tip":"Bitte geben Sie einen Spitznamen ein","login_pwd_tip":"Bitte Passwort eingeben","withdraw_address_tip":"Bitte geben Sie die Auszahlungsadresse ein","old_pass":"Altes Passwort","new_pass":"Neues Passwort","old_pass_tip":"Bitte geben Sie das ursprüngliche Passwort ein","new_pass_tip":"Bitte geben Sie ein neues Passwort ein","pass_tip":"Wenn Sie Ihr Passwort vergessen haben, rufen Sie es bitte von Ihrem Handy-Verifizierungscode auf der Anmeldeseite ab","vercode":"Google-Bestätigungscode","code_tip":"Bitte geben Sie den Google-Bestätigungscode ein"},"recharge":{"title":"Aufladen","recharge_tip":"Aufladen Tipps","recharge_tip_mark1":"Die Einzahlungsadresse unterstützt nur TRC20-USDT und die Mindesteinzahlung beträgt 10USDT.","recharge_tip_mark2":"Bitte überweisen Sie keine anderen Vermögenswerte an die Depotadresse, um Verluste zu vermeiden.","qrcode":"Zweidimensionaler Code","copy":"Replikation","copy_success":"Replikationserfolg"},"rechargeRecords":{"title":"Hinterlegungsnachweis","time":"Zeit","amount":"Betrag","status":"Staat","payway":"Aufladen:","orderno":"Bestellnummer:","recharge_status":{"1":"Abgeschlossen","2":"Aufladen fehlgeschlagen","3":"Abgesagt"}},"withdraw":{"title":"Rückzug","available_balance":"Verfügbare Salden","real_money":"Tatsächliche Quittung (Bearbeitungsgebühr: 3%)","smscode":"SMS Verifizierungscode","smscode_placeholder":"Bitte geben Sie einen SMS-Bestätigungscode ein","smscode_send_text":"Authentifizierungscode senden","address":"Rücknahme Adresse","submit":"Einreichung","withdraw_success":"Rückzug Erfolg","withdraw_tip":"Minimum Auszahlung: ","withdraw_amount_tip":"Bitte den Betrag der Auszahlung eingeben","vercode_tip":"Der Authentifizierungscode kann nicht leer sein","password":"Passwort","passwd_tip":"Bitte geben Sie ein 6- bis 16-stelliges Passwort ein","vercode":"Google-Bestätigungscode","code_tip":"Bitte geben Sie den Google-Bestätigungscode ein","tips":"Erinnerung: Zur Sicherheit Ihrer Gelder gehen Sie bitte zum Sicherheitscenter, um Google Authenticator zu binden。"},"withdrawalRecords":{"title":"Entnahmeaufzeichnungen","time":"Zeit","amount":"Betrag","status":"Staat","withdraw_way":"Adresse des Widerrufs:","orderno":"Bestellnummer:","withdraw_status":{"0":"Im Rückzug","1":"Rückzug Erfolg","2":"Rücktritt Stornierung"}},"funds":{"title":"Details der Fonds","time":"Zeit","amount":"Betrag","status":"Staat","fund_status":{"10":"Einnahmen erhalten","11":"Mission Rewards","20":"Save In","21":"Herausnehmen","30":"OTCDer Deal","31":"OTCEinnahmen","50":"Aufladen","51":"Aufladen","52":"Aufladen","60":"Rückzug","61":"Rückzug","62":"Rückzug"}},"authentication":{"title":"Identitätsauthentifizierung","auth_status":{"0":"Uncredited","1":"Unter der Überprüfung","2":"Zertifiziert","3":"Abgelehnt"},"auth_photo_hold_example":"Beispiele","auth_problem_tips":"Tipps: Wenn Sie Probleme haben, wenden Sie sich bitte an den Kundenservice</u>","submit":"Jetzt zertifiziert","uploading":"Hochgeladen....."},"teamIncomes":{"title":"Team Earnings","level":"Rang","userid":"ID","time":"Zeit","amount":"Betrag"},"inviteFriends":{"title":"Buddy einladen","invite_code":"Empfohlener Code","invite_friend_tip":"Genießen Sie das große Geld sofort, gehen Sie und laden Sie ein.","invite_friend_btn":"Klicken Sie auf Kopieren","share_rule":{"title":"Rabattregeln","title_tip":"Für jeden Gewinn, den ein Freund bei der Registrierung erzielt, erhalten Sie eine anteilige Provision","rate_title":"Die Regeln für die Provisionsverhältnisse lauten wie folgt","rate_user_level":"User Rank","rate_way":"Regeln","rate_num":"\'Kommissionsanteil\'","rate_lv1_desc":"Direkt eingeladene Benutzer","rate_lv2_desc":"1 eingeladener Nutzer","rate_lv3_desc":"2 eingeladene Benutzer","rate_lv4_desc":"3 Alle Benutzer eingeladen unten","hint":"Provision zu begleichen und kann jederzeit in Ihre Brieftasche ausgezahlt werden"},"copy_success":"Replikationserfolg"}},"team":{"index":{"team_total_income":"Gesamterlös","team_residual_income":"Überschüssige Erträge","receive":"Empfangen","team_info":"Team Details","team_user_list":"Siehe Details","team_total_profit":"Gesamterlös","team_total_num":"Gesamtzahl","team_total_recharge":"Total aufladen","people_num":"Anzahl der Personen","people_profit":"Payoff","team_invite_task":"Einladung zur Mission Anforderungen","team_invite_task_tip":"{need_num} lädt LV1-Benutzer ein, erfolgreich zu handeln und {amount} USDT zu erhalten","progress":"Fortschritt","team_receive":"Empfangen","team_hasreceive":"Erhalten","receive_success":"Erfolg erhalten"},"myTeam":{"title":"Team Details","team_total_profit":"Gesamterlös","team_total_num":"Gesamtzahl","team_total_recharge":"Total aufladen","team_lv1":"Level 1","team_lv2":"Level 2","team_lv3":"Level 3","team_lv_count":"Menge：","team_lv_income":"Vorteile：","team_lv_recharge":"Aufladen:","team_lv_invite":"Anzahl der Einladungen:","team_lv_mobile":"Handy Nummer:","team_lv_time":"Zeit der Registrierung:"}},"transaction":{"index":{"total_assets":"Bilanzsumme","trade_stat":"Ertragsstatistik","tran_title":"WOTCEinführung in die Transaktion","tran_desc":"WOTCHat ein globales Kryptowährungs-Matching-System. Bietet Benutzern eine globale Kryptowährungsplattform. Sicherstellung der Transaktionsstabilität und Gewinnmaximierung ","accepting":"Transaktionsverarbeitung","wallet_balance":"Wallet Balance","order_amount":"Transaktionsbetrag","order_amount_tip":"Bitte den richtigen Betrag eingeben","order_amount_all":"Alle","btn":"Filter starten","trade_success":"Deal Erfolg:","trade_amount":"Betrag der Transaktion:","trade_profit":"Ergebnis der Transaktion:","record":"Liste der Transaktionen","tradingtime":"Verbleibende Zeit:{%s}","time":"Zeit","amount":"Transaktionsbetrag","profit":"Profit","sell_time":"Zeit verkaufen:","sell_amount":"Betrag verkauft:","income_time":"Einkommen Zeit:","income_amount":"Profit:","order_num":"Bestellnummer:","search":"AIGutes Essen in......","msg":{"amount_tip":"Balance kleiner als (), unfähig zu filtern","order_amount_tip":"Bitte den richtigen Betrag eingeben"},"sell":{"symbol":"Kryptowährung:","service_provider":"MSBZertifizierter Dienstleister:","market_price":"USDTPreis der Transaktion:","trade_price":"Preis der Transaktion:","order_amount":"Menge der Bestellung:","confirm":"Start Trading","cancel":"Abgesagt","trading":"In der Branche..."},"sell_success":{"title":"Einnahmen und Gelder werden nach 3 Stunden automatisch auf Ihr Konto eingezahlt!!","orderNo":"Bestellnummer:","trade_price":"Betrag der Transaktion:","profit":"Profit:","amount":"Total:","tip":"In Transaktions-Wallet übertragen und dann automatisch in Balance-Wallet übertragen","confirm":"Bestätigung"}},"incomeStatistics":{"title":"Ertragsstatistik","total_orders_num":"Gesamtzahl der abgeschlossenen Transaktionen","total_money":"Gesamtbetrag","total_profit":"Gesamtgewinn","date":"Datum","order_num":"Anzahl der Transaktionen","money":"Betrag","profit":"Profit"}},"main":{"more":"Mehr >","got_it":"O.K.","loading":"Wird geladen...","modify_success":"Modifikation erfolgreich"},"infomation":{"aboutus":{"1":"World Over The Counter ist ein Team von erfahrenen Fachleuten, die von einem großen Liquiditätspool unterstützt werden.。","2":"World Over The Counter’s Over-the-Counter (OTC) Service für Transaktionen von 10 bis mehr als $ Millionen, die mehrere gesetzliche Zahlungsmittel, USDT und andere wichtige Kryptowährungen abdecken. Der größte Vorteil von World Over The Counter Over-the-Counter-Services ist unsere starke Handelstiefe, Anpassung und hoher Datenschutz für Investoren und vermögende Vermögensinhaber. World Over The Counter Over-the-Counter-Dienste, die Kunden von den rutschigen Preisverlusten befreien, die auf beliebten Handelsplattformen üblich sind, sind die beste Wahl für große Kryptowährungshändler. 。","3":"World Over The Counter’s OTC-Service gilt für gesetzliche Zahlungsmittel, USDT oder andere Kryptowährungen. World Over The Counter konzentriert sich darauf, Ihnen den freien und einfachen Handel mit Kryptowährungen zu ermöglichen, ohne sich um die Komplexität der Handelstiefe und des Kaufs und Verkaufs der Paarung kümmern zu müssen. Gleichzeitig bieten wir Ihnen eine flexible, sichere und qualitativ hochwertige Transaktionserfahrung durch umfassende Transaktionsausführungs- und Abwicklungsdienstleistungen. 。","4":"1: Antrag auf World Over The Counter OTC Account (Persönliches Konto)","5":"2: Hinterlegen Sie gesetzliche Zahlungsmittel oder Kryptowährung auf Ihrem Konto,","6":"3: Nachdem die Transaktion ausgeführt wurde, wird USDT in drei Stunden automatisch auf Ihr Kontoguthaben eingezahlt.","7":"Ein OTC-Programm für Sie.","8":"Professioneller Händler,","9":"Wir haben einen der weltweit führenden Bitcoin- und Kryptowährungshändler. Unsere berufliche Erfahrung kann viele Jahre seit der Geburt von Bitcoin zurückverfolgt werden, und wir bieten den besten Preis-Service für Tausende von Gästen zur richtigen Zeit und am richtigen Ort.Wir haben einen der weltweit führenden Bitcoin- und Kryptowährungshändler. Unsere berufliche Erfahrung kann viele Jahre seit der Geburt von Bitcoin zurückverfolgt werden, und wir bieten den besten Preis-Service für Tausende von Gästen zur richtigen Zeit und am richtigen Ort.","10":"Eine andere Transaktionserfahrung.","11":"Im Gegensatz zu allgemeinen und großen außerbörslichen Börsen bietet World Over The Counter Ihnen die besten Liquiditätsfinanzierungsvereinbarungen und Handelsoptionen, die auf Ihre Handelsbedürfnisse zugeschnitten sind. Wenn Ihr Konto erfolgreich eingerichtet wurde, kommunizieren wir mit Ihnen und bieten die ideale Lösung, um Ihre Programmanforderungen und -erwartungen zu erfüllen. Wir streben nach Glaubwürdigkeit, Zuverlässigkeit, Komfort und Community-Entwicklung. Wir bemühen uns, eine gute und dauerhafte Beziehung zu jedem Kunden aufzubauen und jederzeit den bestmöglichen Service zu liefern.","12":"Internationaler Service,","13":"World Over The Counter, mit Hauptsitz im US-Bundesstaat Colorado, widmet sich der Bereitstellung globaler Kryptowährungshandelsplattformen und Handelsdienstleistungen für internationale Kunden und wurde von Kunden aus Asien, Amerika, Australien, Europa und Afrika. ","14":"Glaubwürdig und zuverlässig.","15":"World Over The Counter glaubt, dass Ehrlichkeit und Transparenz der Schlüssel zum Erfolg sind und legt großen Wert auf die Privatsphäre und Vertraulichkeit von Kundeninformationen, um das Vertrauen und die Unterstützung der Gäste mit einer professionellen Einstellung zu gewinnen. Wir setzen uns dafür ein, ein vertrauenswürdiges Image aufzubauen und Hand in Hand mit Ihnen zu arbeiten. Wo auch immer Sie sich befinden, Sie können die gesamte Palette von Dienstleistungen, die wir anbieten, in Ruhe nutzen. "},"cert":{"1":"World Over The Counter Limited Geschäftslizenz","2":"World Over The Counter Limited Business License Registrierungszertifikat.","3":"Das Great Seal of the State of Colorado wurde hier gestempelt und dieses offizielle Zertifikat wurde ordnungsgemäß erstellt, ausgeführt und ausgestellt.","4":"Colorado wird dies in Übereinstimmung mit geltendem Recht regeln.","5":"Überprüfen Sie die Zertifikatsnummer auf der offiziellen Website des Colorado Secretary of State, um die Unternehmensdetails anzuzeigen.","6":"Geschäftslizenz der World Over The Counter Foundation","7":"Registrierungszertifikat für die Geschäftslizenz der World Over The Counter Foundation.","8":"Denn WOTC beteiligt sich aktiv an weltweiten Wohltätigkeitsstiftungen und verbreitet ihre Liebe in der Welt.","9":"Dieses Zertifikat wird vom Büro des Außenministers von Colorado genehmigt und nummeriert.","10":"In Zukunft wird sich WOTC an den wichtigsten Wohltätigkeitsfonds der Welt beteiligen und mehr Menschen helfen.","11":"Das Zertifikat der gemeinnützigen Stiftung bringt zudem einen besseren Vermögensschutz für alle Mitglieder des Unternehmens.","12":"Überprüfen Sie die Zertifikatsnummer auf der offiziellen Website des Colorado Secretary of State, um die Unternehmensdetails anzuzeigen.","13":"Im Video sehen wir die WOTC-Teammitglieder und die PALM BEACH CHRISTIAN PREPARATORY SCHOOL in Florida, USA, bei Verhandlungen über eine vorläufige Zusammenarbeit. WOTC sponsert Schulen. Und helfen Sie jedem Schüler in der Schule, seine akademische Belastung zu reduzieren. Tragen Sie zur Bildungsbranche bei.","14":"Wohltätigkeitsaktivitäten, die von WOTC-Teammitgliedern auf der ganzen Welt durchgeführt werden. Versuchen, mehr Menschen zu helfen. Sie sind wie ein Lichtstrahl in der Morgendämmerung. Lass unser Licht auf mehr Menschen scheinen.","15":"Seien Sie nicht überrascht, wenn Sie eines Tages ein Mitglied des WOTC-Teams an Ihrer Tür vorbeigehen sehen. Weil wir bereits auf der ganzen Welt beliebt sind. Wir wissen, dass viele Konkurrenten uns oft durch Verleumdungen und Gerüchte schaden. Aber wir lassen diese Gerüchte durch die Kraft der Solidarität sterben. WOTC hat noch nie jemanden im Stich gelassen.","16":"Vielen Dank an alle Mitglieder, die WOTC vertrauen und ihn unterstützen. Lassen Sie uns zur erfolgreichen Gründung der gemeinnützigen Stiftung von WOTC gratulieren.","17":"Offizielle MSB-Zertifikatsabfrage-Website:","18":"https://www.fincen.gov/msb-state-selector","19":"Offizielle Website für Gewerbescheinanfragen:","20":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","21":"Offizielle Website der Stiftung:","22":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","23":"Das Auslegungsrecht für alle oben genannten Inhalte liegt bei World Over The Counter Limited","24":"US-MSB-Lizenzen sind Finanzlizenzen, die vom US-Finanzministerium reguliert und ausgestellt werden, hauptsächlich für Unternehmen und Unternehmen im Zusammenhang mit Gelddienstleistungen, einschließlich Transaktionen in digitalen Währungen, virtuellen Währungen, ICO-Emissionen, Devisen, internationale Überweisungen usw."},"joinus":{"1":"World Over The Counter heißt jeden willkommen, sich mit der Kryptowährungs-Community in Verbindung zu setzen und ihr beizutreten. Egal, ob Sie Kryptowährungen kaufen und verkaufen oder mehr über Bitcoin und Kryptowährungen erfahren möchten, World Over The Counter wird Ihr Bestes geben.","2":"Wenn Sie Fragen oder Kommentare haben, senden Sie uns bitte eine E-Mail oder rufen Sie uns jederzeit an. Wir ermutigen alle unsere Kunden, an unserer Kryptowährungs-Community teilzunehmen und sie zu fördern.","3":"World Over The Counter verpflichtet sich, die Transaktionskosten und -beschränkungen zu senken und Kunden mit niedrigeren Transaktionsschwellen auf einer größeren Mehrheit der außerbörslichen Handelsplattformen zu versorgen, und jeder Transaktionsbetrag, den wir Ihnen anbieten können, ist der richtige Deal für, so dass USDT und Kryptowährung für alle verwendet werden können.","4":"Derzeit haben mehr als 1 Milliarde Menschen weltweit keine Bankdienstleistungen, aber die meisten von ihnen haben Zugang zu Smartphones.","5":"Sie können immer Smartphone-Wallets verwenden, damit dezentrale Kryptowährungen für sie den größten Nutzen bringen - und World Over The Counter wird weiterhin darauf abzielen, Kryptowährungen in Richtung universellen Zugangs zu bewegen.","6":"Sowohl online als auch offline hat sich World Over The Counter verpflichtet, eine aktive und interaktive Kryptowährungs-Benutzergemeinschaft zu entwickeln, die sich durch Wissen und Kommunikation an der globalen Bitcoin- und Kryptowährungs-Gemeinschaft entwickelt und beteiligt.","7":"Egal, ob Sie ein Kryptowährungs-Neuling oder ein Senior-Experte sind, wir begrüßen Sie! ,","8":"World Over The Counter Bitte geben Sie Ihre Kontaktmethoden und einfache Informationen, wie Sie helfen können, und wir werden so schnell wie möglich antworten.","9":"E-Mail:worldoverthecounter@gmail.com","10":""},"rules":{"1":"Nutzungsbedingungen","2":"Verwenden Sie beim Kauf von USDT niemals eine Wallet-Adresse, die nicht Ihnen gehört. Bitte verwenden Sie Ihre Wallet-Adresse. Bitte senden Sie USDT nicht an Betrugsverdächtige! , ","3":"Wenn Sie unseren Nutzungsbedingungen zustimmen, stimmen Sie unserer Erklärung zur Erfassung personenbezogener Daten und unserer Datenschutzrichtlinie, unserer Datenschutzrichtlinie und unserer Cookie-Richtlinie zu.","4":"Sie werden keine Dienstleistungen, Ausrüstung und andere Angelegenheiten für Personen unter 18 Jahren anbieten. Wenn Sie unter 18 Jahre alt sind und unsere Website nutzen, sollten Sie sich an die Person wenden, bei der Sie das Sorgerecht haben, um entsprechende Zugangs-, Berichtigungs-, Löschungs- und Widerspruchsrechte auszuüben.","5":"Regeln für Transaktionen,","6":"Worldotc ist eine amerikanische MSB - zertifizierte Kryptowährung über - die - Gegenbörse. Die USDT- und globale Kryptowährungshandelsplattform bietet Benutzern Transaktionsgenauigkeit und Komfort. Geben Sie den Betrag der virtuellen Währung ein, die Sie kaufen möchten. ","7":"Die Einnahmen werden alle 3 Stunden abgerechnet, und jeder Gewinn beträgt 0,4% Ihrer Investition.","8":"Abrechnung bis zu 8 mal am Tag, maximale Einnahmen von 3,2%! ,","9":"Die schnellste 23-Tage-Investition verdoppelt sich! ,","10":"Maximaler monatlicher Gewinn von 1.572 mal! ,","11":"Regeln zur Auszahlung von Guthaben,","12":"Binden Sie Ihre TRC20-Adresse für die Auszahlung, 24 Stunden am Tag für eine 3% Abhebungsgebühr.","13":"Die Auszahlungszeit beträgt 1 Minute.","14":"Beachten Sie, dass pro TRC20-Adresse nur ein Anlagekonto gebunden werden kann.","15":"Laden Sie mit Ihrer Währung oder Brieftasche mit einer Mindestinvestition von 11 USDT und einer Mindestauszahlung von 5 USDT auf.","16":"Einladungsregel,","17":"Ihre Freunde verdienen Geld, indem sie in die Provisionen investieren, die Sie verdienen können:,","18":"Lv1 direkt eingeladene Benutzer (15% des gesamten Transaktionsgewinns).","19":"Lv2L1 lud Benutzer ein (10% des gesamten Transaktionsgewinns).","20":"Lv3L2 lud Benutzer ein (5% des gesamten Transaktionsgewinns).","21":"Einladen von Aufgabenbelohnungen.","22":"Für jeweils 10 LV1-Mitglieder, die eingeladen wurden, die Investition abzuschließen, eine Einladungsbelohnung von 10USDT","23":"Hinweis : Jeder eingeladene Untergebene muss die LV1-Investition abschließen, um als gültiger Benutzer angesehen zu werden","24":"Erinnerung: Wenn Sie Fragen zu den Belohnungen und Regeln haben, wenden Sie sich bitte an den Kundendienstleiter."}},"serverCodes":{"401":"Parameter sind nicht richtig.","406":"unzureichende Balance.","407":"Falscher Betrag der Transaktion.","408":"Ungültiger Parameter.","409":"Das Passwort besteht aus einem Buchstaben plus einer Zahl,","410":"Validierungscode Fehler.","411":"Benutzername oder Passwort Fehler,","412":"Konto einfrieren, bitte kontaktieren Sie den Kundendienst.","413":"Bitte geben Sie Ihre Handynummer korrekt ein.","414":"Die Telefonnummer wurde registriert, bitte wählen Sie eine andere Telefonnummer.","415":"Holen Sie sich Authentifizierungscode-Frequenz-Intervall von 1 Minute.","416":"Häufige Anfragen, versuchen Sie es später noch einmal.","417":"Der Authentifizierungscode ist ungültig, bitte senden Sie den Authentifizierungscode erneut.","418":"Wenn das Telefon nicht verifiziert ist oder die Verifizierung abgelaufen ist, beginnen Sie bitte erneut mit der Registrierung.","419":"Der Spitzname besteht aus 2 ~ 8-Bit-Zeichen.","420":"Bitte den richtigen Einladungscode eingeben.","421":"Die Telefonnummer wurde nicht registriert und es muss kein Passwort abgerufen werden.","422":"Wiederholen Sie Anfrage,","423":"Authentifizierungscode erfolgreich gesendet.","424":"Die Anzahl der an diesem Tag gesendeten Verifizierungscodes hat die Obergrenze erreicht.","425":"Bestätigungscode konnte nicht gesendet werden","426":"Die Adresse kann nicht geändert werden, wenden Sie sich bitte an den Kundendienst","427":"Überprüfung fehlgeschlagen","428":"Sie haben Google Authenticator bereits gebunden","429":"Die Überprüfung des ursprünglichen Passworts ist fehlgeschlagen","500":"Netzwerkausnahme, bitte später erneut versuchen.","501":"Login sperren,","502":"Registrierung aussetzen,","503":"Du bist nicht angemeldet.","605":"Bitte geben Sie die richtige Menge ein","606":"Die Anzahl der Noten ist niedriger als das Minimum.","607":"Die Anzahl der Angebote ist höher als das Maximum.","608":"Bitte geben Sie die korrekte Ausschreibungsadresse ein.","609":"Das Adressformat ist falsch.","610":"Fehler bei der Eingabe des Passworts","706":"Diese Adresse wurde verwendet, bitte ersetzen. ,","708":"Dieser Benutzer existiert nicht.","712":"Bitte überprüfen Sie Ihren richtigen Namen und ziehen Sie ihn dann zurück.","713":"Derzeit sind keine Erlöse zu zahlen.","714":"Aktueller Task Award erhalten.","715":"Nichterfüllung der Bedingungen für den Empfang"}}')
    },
    "237a": function(e, a) {
        e.exports = "data:image/png;base64,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"
    },
    2405: function(e) {
        e.exports = JSON.parse('{"tabBar":{"home":"Inicio","trade":"Comercio","team":"Mi equipo","mine":"Personal"},"funcs":{"aboutus":"Acerca de WOTC","rules":"Reglas","download":"Centro de descargas","cert":"Certificaciones","setting":"Ldioma","customer":"Servicio al cliente","activities":"Notificación ","joinus":"Únete a WOTC","earn":"Fund"},"home":{"index":{"trade_data":"Notificación de transacción","no_register":"Por favor regístrese como miembro primero","no_message":"Sin mensaje"},"download":{"google_play":"Worldotc for Android","google_play_tip":"Descargar desde APP Store","ios":"Worldotc for iOS","ios_tip":"Haga clic para ir al sitio web oficial y descargar"},"language":{"language":"Ldioma"},"earn":{"title":"Fund","total_profit":"Beneficio total","access_detail":"Detalles de acceso","available_balance":"Saldo disponible","storage_balance":"Importe ya depositado","item_title":"Lista de protocolos","time":"Tiempo","profit":"Beneficio","btn":"Comprar ahora","msg":{"earn_success":"Compra exitosa"},"trade":{"sell_title":"Beneficio","sell_time":"Tiempo：","profit_fee":"Tasa de interés:","input_amount":"Cantidad de entrada:","input_amount_tip":"0.00","input_amount_msg":"Cantidad de entrada","sell_income":"Beneficio previsto:","sell_btn":"Vendido","cancel_btn":"Cancelar","input_amount_min_tip":"Por debajo delvalor minimo: isto: ","input_amount_max_tip":"Exceder el valor máximo: ","note":"Inversión ociosa","cancel":"Cancelar"}},"earnlist":{"title":"Detalles de acceso","type_undo":"Inacabado","type_done":"Acabado","type":"Tipo","amount":"Importe","profit":"Beneficio","buy_date":"Fecha de depositar：","send_date":"Fecha de liquidación："}},"login":{"login":{"title":"Acceso","password":"Contraseña","passwd_tip":"Ingrese una contraseña de 6 - 16 dígitos","mobile":"Número de móvil","mobile_tip":"Ingrese su número de móvil","register":"Registro","forgot_pwd":"Olvida la contraseña?","btn":"Acceso"},"phoneCode":{"custom_phone_code_tip":"Ingrese el código de área internacional","confirm":"Confirmar","msg":"El área actual no está abierta para registrarse en este momento"},"register":{"title":"Registro","smscode":"Código de verificación SMS","smscode_placeholder":"Introduzca el Code","smscode_tip":"Introduzca el Code","smscode_send_text":"Enviar código de verificación","login":"Acceso","next_step":"Siguiente paso","password":"Contraseña","passwd_tip":"Ingrese una contraseña de 6 - 16 dígitos","nickname":"Apodo","nickname_tip":"Ingrese su apodo","invite_code":"Código de invitación","invite_code_tip":" Ingrese su código de invitación","submit":"Entregar","reg_success":"Registro exitoso","mobile_tip":"Ingrese su número de móvil"},"forget":{"title":"Olvida la contraseña?","password":"Contraseña","passwd_tip":"Ingrese una contraseña de 6 - 16 dígitos","smscode":"Código de verificación SMS","smscode_placeholder":"Introduzca el Code","smscode_send_text":"Enviar código de verificación","submit":"Entregar","success":"Contraseña cambiada con éxito"}},"mine":{"ucenter":{"logout":"Abandonar","invite_code":"Código de invitación:  ","my_total_assets":"Mis activos totales","my_account":"Mi cuenta","recharge":"Recarga","withdraw":"Retiro","personal_info":"Información personal","google_auth":"Centro de Seguridad","recharge_record":"Registro de recarga","withdraw_record":"Registro de retiro","fund_detail":"Detalles del fondo","auth":"Autenticación","team_profit":"Beneficios del equipo","invite_friend":"Invitar amigos","tip":"Nota","set_withdraw_address":"Vincule primero la dirección de retiro","set":"Configurar","cancel":"Cancelar"},"googleauth":{"title":"Centro de Seguridad","googleauth_tip":"Por favor vincular Google Authenticator","open_googleauth":"Abra el Autenticador de Google","setting_tip":"Comience a escanear el código QR provisto en nuestra plataforma, o ingrese manualmente la clave de 16 dígitos provista en la plataforma. Después de agregar con éxito, ingrese la verificación de contraseña dinámica para completar el enlace。","copy":"copiar clave","copy_success":"Copiar con éxito","vercode":"Código de verificación de Google","bind":"Autenticar y enlazar","unbind":"desvincularse","vercode_tip":"por favor ingrese el código de verificación","bind_success":"Encuadernación exitosa","notice":"Consejos amables","bind_tip":"Estás atado a Google Authenticator","unbind_tip":"Para desvincular, obtenga el código de verificación de SMS para la verificación","unbind_success":"Desvincular con éxito"},"userinfo":{"title":"Información personal","modify":"Modificar","nickname":"Apodo","mobile":"Número de móvil","address":"Dirección de retiro","login_pwd":"Contraseña de acceso","input_tip":"Por favor complete el contenido","set":"Configurar","cancel":"Cancelar","nickname_tip":"Por favor ingrese un apodo","login_pwd_tip":"Por favor, ingrese contraseña","withdraw_address_tip":"Por favor ingrese la dirección de retiro","old_pass":"Contraseña anterior","new_pass":"Nueva contraseña","old_pass_tip":"Por favor ingrese la contraseña original","new_pass_tip":"Por favor ingrese una nueva contraseña","pass_tip":"Si olvida su contraseña, recupérela del código de verificación de su teléfono móvil en la página de inicio de sesión","vercode":"Código de verificación de Google","code_tip":"Por favor ingrese el código de verificación de Google"},"recharge":{"title":"Recarga","recharge_tip":"Recordatorio de recarga","recharge_tip_mark1":"La dirección de depósito solo admite TRC20-USDT, y el depósito mínimo es de 10 USDT. ","recharge_tip_mark2":"No transfiera otros activos a la dirección de depósito para evitar la pérdida de fondos.","qrcode":"Código QR","copy":"Copiar","copy_success":"Copia exitosa "},"rechargeRecords":{"title":"Registro de depósito","time":"Tiempo","amount":"Importe","status":"Estado","payway":"Forma de recarga","orderno":"No. del pedido：","recharge_status":{"1":"Acabado","2":"Recarga fallida","3":"Cancelado"}},"withdraw":{"title":"Retiro","available_balance":"Saldo disponible","real_money":"Abono real a la cuenta (tarifa de manejo: 3%)","smscode":"Código de verificación de SMS","smscode_placeholder":"Introduzca el Code","smscode_send_text":"Enviar código de verificación","address":"Dirección de retiro","submit":"Entregar","withdraw_success":"Éxito de retiro","withdraw_tip":"Cantidad mínima de retiro:","withdraw_amount_tip":"Por favor ingrese el monto del retiro","vercode_tip":"El código de verificación no puede estar vacío","password":"contraseña","passwd_tip":"Por favor, introduzca una contraseña de 6~16 dígitos","vercode":"Código de verificación de Google","code_tip":"Por favor ingrese el código de verificación de Google","tips":"Recordatorio: para la seguridad de sus fondos, vaya al Centro de seguridad para vincular Google Authenticator。"},"withdrawalRecords":{"title":"Registro de retiro","time":"Tiempo","amount":"Importe","status":"Estado","withdraw_way":"Dirección de retiro：","orderno":"No. del pedido：","withdraw_status":{"0":"Retirando","1":"Éxito de retiro","2":"Cancelación de retiro"}},"funds":{"title":"Detalles del fondo","time":"Tiempo","amount":"Importe","status":"Estado","fund_status":{"10":"Recibir beneficios","11":"Recompensas de misión","20":"Depositar","21":"Sacar","30":"Negociación extrabursátil","31":"Ingresos OTC","50":"Recarga","51":"Recarga","52":"Recarga","60":"Retiro","61":"Retiro","62":"Retiro"}},"authentication":{"title":"Autenticación","auth_status":{"0":"No autenticado","1":"Bajo revisión","2":"Verificado","3":"Rechazado"},"auth_photo_hold_example":"Ejemplo","auth_problem_tips":"Recordatorio: si tiene problemas,comuníquese con el servicio de atención al cliente ","submit":"Autenticarse ahora","uploading":"Subiendo.."},"teamIncomes":{"title":"Beneficios del equipo","level":"Nivel","userid":"ID","time":"Tiempo","amount":"Importe"},"inviteFriends":{"title":"Invitar amigos","invite_code":"Código de invitación: ","invite_friend_tip":"Disfruta de grandes ingresos de inmediato, ve e invítalo","invite_friend_btn":"Haga clic para copiar","share_rule":{"title":"Regla del reembolso de comisiones","title_tip":"Por cada beneficio que obtengan sus amigos después de registrarse, obtendrá un porcentaje correspondiente de comisiones","rate_title":"Las reglas para la proporción de comisión son las siguientes","rate_user_level":"Nivel del usuario","rate_way":"Regla","rate_num":"Proporción de comisiones","rate_lv1_desc":"Invitación directa","rate_lv2_desc":"LV1→Invitado","rate_lv3_desc":"LV2→Invitado","rate_lv4_desc":"Todos los usuarios invitados por debajo de lv3","hint":"La comisión se liquida en USDT, que puede retirarse a su Wallet en cualquier momento"},"copy_success":"Copia exitosa"}},"team":{"index":{"team_total_income":"Beneficio total","team_residual_income":"Beneficios residuales","receive":"Recibir","team_info":"Detalles del equipo","team_user_list":"Ver detalles","team_total_profit":"Beneficio total","team_total_num":"Personas totales","team_total_recharge":"Recarga total","people_num":"Cantidad","people_profit":"Beneficio","team_invite_task":"Requisitos de la misión de invitación","team_invite_task_tip":"{need_num} Invite a los usuarios de LV1 a comerciar con éxito y recibir recompensas {amount} USDT","progress":"Calendario","team_receive":"Recibir","team_hasreceive":"Recibió","receive_success":"Recibido con éxito"},"myTeam":{"title":"Detalles del equipo","team_total_profit":"Beneficio total","team_total_num":"Personas totales","team_total_recharge":"Recarga total","team_lv1":"Level 1","team_lv2":"Level 2","team_lv3":"Level 3","team_lv_count":"Cantidad：","team_lv_income":"Beneficio:","team_lv_recharge":"Recarga","team_lv_invite":"Número de invitados：","team_lv_mobile":"Número de móvil：","team_lv_time":"Tiempo de registrar："}},"transaction":{"index":{"total_assets":"Activos totales","trade_stat":"Estadísticas de beneficios","tran_title":"Introducción al comercio WOTC","tran_desc":"WOTC tiene un sistema global de coincidencia de criptomonedas ¡Brinda a los usuarios una plataforma global de criptomonedas de comercio USDT ¡Garantiza la estabilidad de las transacciones y maximiza las ganancias","accepting":"Procesando","wallet_balance":"Saldo de Wallet","order_amount":"Importe comercial","order_amount_tip":"0.00","order_amount_all":"Todos","btn":"Empezar a filtrar","trade_success":"Transacción exitosa：","trade_amount":"Importe comercial：","trade_profit":"Beneficio comercial：","record":"Lista de transacciones","tradingtime":"Tiempo restante:{%s}","time":"Tiempo","amount":"Importe comercial","profit":"Beneficio","sell_time":"Tiempo de venta：","sell_amount":"Importe de venta：","income_time":"Tiempo de ingreso：","income_amount":"Número de ingresos：","order_num":"No. del pedido：","search":"Coincidencia inteligente con IA...","msg":{"amount_tip":"El saldo está por debajo de {deal_amount} y no se puede filtrar","order_amount_tip":"Por favor ingrese la cantidad correcta"},"sell":{"symbol":"Criptomoneda：","service_provider":"Proveedor de servicios certificado MSB:","market_price":"Precio comercial del USDT:","trade_price":"Precio comercial：","order_amount":"Importe del pedido：","confirm":"Comienza a negociar","cancel":"Cancelar","trading":"En transacción..."},"sell_success":{"title":"¡Las ganancias y los fondos se depositarán automáticamente en su cuenta después de 3 horas!","orderNo":"No. del pedido:","trade_price":"Importe comercial","profit":"Beneficio","amount":"Importe total：","tip":"Se ha transferido a la billetera comercial y se transferirá automáticamente a la billetera de saldo","confirm":"Confirmar"}},"incomeStatistics":{"title":"Estadísticas de beneficios","total_orders_num":"Canti total","total_money":"Importe total","total_profit":"Beneficio total","date":"Fecha","order_num":"Cantidad","money":"Importe","profit":"Beneficio"}},"main":{"more":"Más >","got_it":"Comprendido","loading":"Cargando...","modify_success":"Modificado con éxito"},"infomation":{"aboutus":{"1":"World Over The Counter Está compuesto por un equipo profesional experimentado y el apoyo de un gran fondo de liquidez.","2":"World Over The Counter Nuestros servicios extrabursátiles (OTC) son adecuados para transacciones que van desde $ 10 a millones de dólares, cubriendo una variedad de monedas fiduciarias, USDT y otras criptomonedas importantes. World Over The La mayor ventaja de los servicios comerciales OTC de Counter es que brindamos a los inversores y a las personas de alto poder adquisitivo una gran profundidad comercial, servicios personalizados y un alto grado de protección de la privacidad. World Over The Counter El servicio de negociación extrabursátil permite a los clientes evitar las pérdidas por deslizamiento de negociación que son comunes en las plataformas de negociación comunes, y es la mejor opción para los grandes comerciantes de criptomonedas.","3":"World Over The Counter Servicios OTC de venta libre para monedas fiduciarias, USDT u otras criptomonedas。 World Over The Counter Focus le permite intercambiar criptomonedas de forma libre y sencilla sin preocuparse por cuestiones complicadas como la profundidad de la transacción y la coincidencia de órdenes. Al mismo tiempo, le brindamos una experiencia comercial flexible, segura y de alta calidad a través de servicios integrales de ejecución y liquidación de transacciones.","4":"1: Aplicar  World Over The Cuenta de contador OTC (cuenta personal)","5":"2: deposite fiat o criptomonedas en su cuenta","6":"3: Después de ejecutar la transacción, USDT se depositará automáticamente en el saldo de su cuenta tres horas después","7":"Soluciones OTC para usted","8":"comerciante profesional","9":"Tenemos algunos de los mejores comerciantes de bitcoins y criptomonedas del mundo. Nuestra experiencia profesional se remonta al nacimiento de Bitcoin hace muchos años, y hemos atendido a miles de clientes con el mejor precio en el momento y el lugar correctos.","10":"Experiencia comercial diferente","11":"Diferente de los intercambios generales y los grandes intercambios OTC，World Over The Counter Le proporcionaremos acuerdos de financiación de liquidez óptimos hechos a medida y soluciones comerciales que satisfagan completamente sus necesidades comerciales. Después de configurar con éxito su cuenta, lo consultaremos y le proporcionaremos la mejor solución para satisfacer las necesidades de su programa y los resultados deseados. Estamos comprometidos a ser respetables, confiables, convenientes y de desarrollo comunitario. Nos comprometemos a construir una buena y duradera relación con cada cliente, brindando en todo momento un servicio de la más alta calidad.","12":"Servicio internacional","13":"World Over The Counter Con sede en Colorado, EE. UU., se compromete a proporcionar a los clientes internacionales plataformas y servicios comerciales globales de comercio de criptomonedas, y ha ganado grandes elogios y confianza de clientes en Asia, América, Australia, Europa y África.","14":"creible y fiable","15":"World Over The Counter Creemos que la honestidad y la transparencia son las claves del éxito, y damos gran importancia a la privacidad y confidencialidad de la información del cliente.Con nuestra actitud profesional, nos hemos ganado la confianza y el apoyo de nuestros clientes. Estamos comprometidos en construir una imagen de confianza que vaya de la mano contigo. No importa dónde se encuentre, puede utilizar nuestros servicios integrales con tranquilidad."},"cert":{"1":"World Over The Counter Limited licencia de negocios","2":"World Over The Counter Limited Certificado de registro de licencia comercial.","3":"El Gran Sello del Estado de Colorado ha sido estampado aquí y este certificado oficial ha sido debidamente generado, ejecutado y emitido.","4":"Colorado regulará esto de acuerdo con la ley aplicable.","5":"Consulte el número de certificado en el sitio web oficial de la Secretaría de Estado de Colorado para ver los detalles de la empresa.","6":"World Over The Counter Foundation licencia de negocios","7":"World Over The Counter Foundation Certificado de registro de licencia comercial.","8":"Porque WOTC participa activamente en fundaciones benéficas mundiales, contagiando su amor al mundo.","9":"Este certificado está aprobado y numerado por la Oficina del Secretario de Estado de Colorado.","10":"En el futuro, WOTC participará en los principales fondos de caridad del mundo y ayudará a más personas.","11":"El certificado de la fundación benéfica también brinda una mejor protección de los activos para todos los miembros de la empresa.","12":"Consulte el número de certificado en el sitio web oficial de la Secretaría de Estado de Colorado para ver los detalles de la empresa.","13":"En el video podemos ver a los miembros del equipo de WOTC y la ESCUELA PREPARATORIA CRISTIANA DE PALM BEACH en Florida, EE. UU., negociando una cooperación preliminar. WOTC patrocina escuelas. Y ayudar a todos los estudiantes de la escuela a reducir su carga académica. Contribuir a la industria de la educación.","14":"Actividades benéficas realizadas por miembros del equipo de WOTC en todo el mundo. Tratando de ayudar a más personas. Son como un rayo de luz en el amanecer. Que nuestra luz brille para más personas.","15":"No se sorprendan si algún día ven a un miembro del equipo de WOTC pasar por su puerta. Porque ya somos populares en todo el mundo. Sabemos que muchos competidores a menudo nos perjudican calumniándonos y creando rumores. Pero dejamos que estos rumores mueran por el poder de la solidaridad. WOTC nunca ha defraudado a nadie.","16":"Gracias a todos los miembros que confían y apoyan a WOTC. Felicitemos el exitoso establecimiento de la fundación benéfica de WOTC.","17":"Sitio web oficial de consulta del certificado MSB:","18":"https://www.fincen.gov/msb-state-selector","19":"Sitio web oficial para consultas sobre licencias comerciales:","20":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","21":"Web oficial de la fundación:","22":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","23":"El derecho de interpretación de todo el contenido anterior pertenece a World Over The Counter Limited","24":"La licencia MSB de EE. UU. es un tipo de licencia financiera supervisada y emitida por el Departamento del Tesoro de EE. UU. Los principales objetos de supervisión son las empresas y empresas relacionadas con los servicios monetarios, incluida la moneda digital, las transacciones de moneda virtual, la emisión de ICO, así como el cambio de divisas, remesas internacionales etc. negocio."},"joinus":{"1":"World Over The Counter Cualquiera es bienvenido a contactar y participar en el campo de las criptomonedas. Ya sea que desee comprar o vender criptomonedas, o aprender más sobre Bitcoin y las criptomonedas，World Over The Counter Haré todo lo posible para servirte.。","2":"Si tiene alguna pregunta o comentario, no dude en enviarnos un correo electrónico o llamarnos. Alentamos además a todos los clientes a participar en nuestra comunidad de criptomonedas y promover el desarrollo de la comunidad.。","3":"World Over The Counter Comprometidos a reducir las tarifas y restricciones de transacción, brindando a los clientes umbrales de transacción más bajos que la mayoría de las plataformas de negociación OTC, le brindaremos las soluciones de transacción más adecuadas para cualquier cantidad de transacciones.，Para que el USDT y las criptomonedas puedan ser utilizados por todo el mundo。","4":"Actualmente, más de mil millones de personas en el mundo no están bancarizadas o no están bancarizadas, pero la mayoría de ellas tiene acceso a teléfonos inteligentes.","5":"Pueden usar la billetera electrónica de su teléfono inteligente en cualquier momento y dejar que la criptomoneda descentralizada les brinde los beneficios más valiosos. — World Over The Counter Continuaremos tomando esto como nuestro objetivo y promoveremos la popularización universal de las criptomonedas.","6":"Ya sea en línea o fuera de línea，World Over The Counter Se ha comprometido a desarrollar una comunidad de usuarios de criptomonedas activa e interactiva, a través de la provisión de conocimiento e información, intercambio mutuo, desarrollo común y participación en la comunidad global de bitcoins y criptomonedas.。","7":"Ya sea que sea nuevo en criptomonedas o un experto experimentado, ¡lo invitamos a unirse a nosotros!","8":"World Over The Proporcione su información de contacto y una breve información, háganos saber cómo ayudarlo, le responderemos lo antes posible","9":"Correo：worldoverthecounter@gmail.com","10":""},"rules":{"1":"Términos de Uso","2":"Cuando compre USDT, nunca use una dirección de billetera que no le pertenezca. Utilice su propia dirección de billetera. No envíe USDT a presuntos estafadores！","3":"Cuando acepta nuestros Términos de uso, también acepta nuestra Declaración de recopilación de información personal y Política de privacidad, Política de privacidad y Política de cookies.。","4":"No proporcionamos servicios, equipos y otros asuntos a personas menores de 18 años. Si es menor de 18 años y utiliza nuestro sitio web, deberá ponerse en contacto con nosotros dirigiéndose a la persona que asume su custodia para ejercer los oportunos derechos de acceso, rectificación, cancelación y oposición.。","5":"Reglas comerciales","6":"WorldotcEs un intercambio extrabursátil de criptomonedas certificado por MSB de EE. UU. Proporciona una plataforma de comercio para USDT y criptomonedas globales, brindando a los usuarios precisión y comodidad en las transacciones. Ingrese la cantidad de moneda virtual que desea comprar。","7":"Las ganancias se liquidan cada 3 horas, y cada ganancia será el 0,4% del monto de su inversión！","8":"Liquidación hasta 8 veces al día las 24 horas del día, con una renta máxima del 3,2%！","9":"¡Duplique su inversión en tan solo 23 días!","10":"La ganancia máxima por mes es 157.2%！","11":"Reglas de depósito y retiro","12":"Vincule su dirección TRC20 para el retiro, las 24 horas del día, y la tarifa de retiro es de 3% 。","13":"El tiempo de retiro llega en 1 minuto.","14":"Nota: cada dirección TRC20 solo puede vincularse a una cuenta de inversión","15":"Deposite usando su Binance o billetera, el monto mínimo de inversión es 11 USDT y el monto mínimo de retiro es 5 USDT","16":"Reglas de invitación","17":"Tus amigos ganan dinero invirtiendo y tú puedes obtener ingresos por comisiones:","18":"Usuarios invitados directamente por Lv1 (15% del beneficio comercial total)","19":"Lv2 L1 usuarios invitados (10% de la ganancia comercial total)","20":"Lv3 L2 usuarios invitados (5% de la ganancia comercial total)","21":"Invitar recompensa de misión","22":"Cada vez que invite a 10 miembros LV1 para completar la inversión, puede obtener una recompensa de invitación 10 USDT","23":"Nota: Cada subordinado LV1 invitado debe completar la inversión para ser considerado un usuario válido.","24":"Recordatorio: si tiene alguna pregunta sobre las recompensas y las reglas, comuníquese con el gerente de servicio al cliente."}},"serverCodes":{"401":"Parámetro incorrecto","406":"Saldo insuficiente","407":"Importe de transacción incorrecta","408":"Parámetro incorrecto","409":"La contraseña consiste en 6-16 Caracteres mas números","410":"Error de código de Verificación","411":"Usuario y/o Contraseña Incorrectos","412":"Cuenta Congelada, Comuníquese con el Servicio al cliente","413":"Ingrese el numero telefónico Correctamente","414":"Se ha registrado el numero de móvil, intente con otro numero","415":"Obtener intervalo de frecuencia del código de verificación 1 minuto","416":"Solicitud frecuente, Intente nuevamente mas tarde","417":"El código de verificación ha vencido, Vuelva a solicitarlo","418":"El teléfono no esta verificado o se ha vencido, intente nuevamente el registro","419":"El apodo consta de 2-8 caracteres","420":"Por favor ingrese el codigo de invitacion correcto","421":"El número de teléfono no ha sido registrado, no es necesario recuperar la contraseña","422":"Repetir solicitud","423":"Código de verificación enviado con éxito","424":"El numero de codigos de verificacion enviados en el dia ha alcanzado el limite","425":"No se pudo enviar el código de verificación","426":"La dirección no se puede modificar, póngase en contacto con el servicio de atención al cliente","427":"Fallo en la verificación","428":"Ya ha vinculado Google Authenticator","429":"La verificación de la contraseña original falló","500":"La red es anómala, inténtalo de nuevo más tarde","501":"Suspender inicio de sesión","502":"Registro suspendido","503":"No registrado","605":"Por favor ingrese la cantidad correcta","606":"El monto del retiro es inferior al valor mínimo","607":"La cantidad de monedas extraídas es superior al valor máximo","608":"Por favor ingrese la direccion de retiro correcta","609":"Formato de dirección incorrecto","610":"La contraseña original es incorrecta","706":"Esta dirección ya está en uso, por favor cambiala.","708":"Este usuario no existe","712":"Por favor, verifica tu nombre real antes de retirar","713":"No hay ingresos disponibles actualmente","714":"Se ha recibido la recompensa de la mision actual","715":"No cumple con los requisitos para recibir"}}')
    },
    "260a": function(e, a, t) {
        "use strict";
        var i = t("4ea4");
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0, t("96cf");
        var n = i(t("1da1")),
            r = t("6df7"),
            o = (t("b4c6"), i(t("bee9"))),
            s = {
                state: {
                    news: {},
                    deal: {},
                    userinfo: {},
                    modelOrderInfo: {},
                    modelSuccessful: {},
                    modelState: {
                        showModel: !1,
                        modelType: 1
                    }
                },
                mutations: {
                    newsMutation: function(e, a) {
                        var t = o.default.get("newsTitle");
                        a && (1 === a.is_notice && a.title !== t ? (a.showModel = !0, e.news = a) : (a.showModel = !1, e.news = a))
                    },
                    dealInfoMutation: function(e, a) {
                        var t = a.modelState,
                            i = a.payload,
                            n = i.deal,
                            r = void 0 === n ? {} : n,
                            o = i.userinfo,
                            s = void 0 === o ? {} : o;
                        e.modelState = t, e.deal = r, e.userinfo = s
                    },
                    createOrderMutation: function(e, a) {
                        var i = a.modelState,
                            n = a.payload,
                            r = n.code,
                            o = n.data,
                            s = void 0 === o ? {} : o,
                            d = uni.getStorageSync("lang"),
                            l = t("5096")("./text-".concat(d, ".json"));
                        200 === r ? (e.modelState = i, e.modelOrderInfo = s) : uni.showToast({
                            title: l.serverCodes[r]
                        })
                    },
                    submitOrderMutation: function(e, a) {
                        var t = a.modelState,
                            i = a.payload;
                        console.log(i);
                        var n = i.code,
                            r = i.data,
                            o = void 0 === r ? {} : r;
                        200 !== n && (t.modelType = 1), e.modelState = t, e.modelSuccessful = o
                    },
                    hideModelMutation: function(e, a) {
                        e.modelState = a
                    }
                },
                actions: {
                    newsActions: function(e, a) {
                        return (0, n.default)(regeneratorRuntime.mark((function t() {
                            var i;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        i = e.commit, i("newsMutation", a);
                                    case 2:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    dealInfoAction: function(e, a) {
                        return (0, n.default)(regeneratorRuntime.mark((function t() {
                            var i, n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return i = e.commit, n = {
                                            showModel: !1,
                                            modelType: 1
                                        }, t.t0 = i, t.t1 = n, t.next = 6, (0, r.getDealInfo)(a);
                                    case 6:
                                        t.t2 = t.sent, t.t3 = {
                                            modelState: t.t1,
                                            payload: t.t2
                                        }, (0, t.t0)("dealInfoMutation", t.t3);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    createOrderAction: function(e, a) {
                        return (0, n.default)(regeneratorRuntime.mark((function t() {
                            var i, n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return i = e.commit, n = {
                                            showModel: !0,
                                            modelType: 1
                                        }, t.t0 = i, t.t1 = n, t.next = 6, (0, r.createOrder)(a);
                                    case 6:
                                        t.t2 = t.sent, t.t3 = {
                                            modelState: t.t1,
                                            payload: t.t2
                                        }, (0, t.t0)("createOrderMutation", t.t3);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    submitOrderAction: function(e, a) {
                        return (0, n.default)(regeneratorRuntime.mark((function t() {
                            var i, n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return i = e.commit, n = {
                                            showModel: !0,
                                            modelType: 2
                                        }, t.t0 = i, t.t1 = n, t.next = 6, (0, r.submitOrder)(a);
                                    case 6:
                                        t.t2 = t.sent, t.t3 = {
                                            modelState: t.t1,
                                            payload: t.t2
                                        }, (0, t.t0)("submitOrderMutation", t.t3);
                                    case 9:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    hideModelAction: function(e, a) {
                        return (0, n.default)(regeneratorRuntime.mark((function a() {
                            var t, i;
                            return regeneratorRuntime.wrap((function(a) {
                                while (1) switch (a.prev = a.next) {
                                    case 0:
                                        t = e.commit, i = {
                                            showModel: !1,
                                            modelType: 1
                                        }, t("hideModelMutation", i);
                                    case 3:
                                    case "end":
                                        return a.stop()
                                }
                            }), a)
                        })))()
                    },
                    successModelAction: function(e, a) {
                        return (0, n.default)(regeneratorRuntime.mark((function t() {
                            var i, n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return i = e.commit, n = {
                                            showModel: !1,
                                            modelType: 1
                                        }, t.t0 = i, t.t1 = n, t.next = 6, (0, r.getDealInfo)(a);
                                    case 6:
                                        t.t2 = t.sent, t.t3 = {
                                            modelState: t.t1,
                                            payload: t.t2
                                        }, (0, t.t0)("dealInfoMutation", t.t3), i("hideModelMutation", n);
                                    case 10:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            };
        a.default = s
    },
    "2aeb": function(e) {
        e.exports = JSON.parse('{"tabBar":{"home":"Page d\'accueil","trade":"Salle des marchés","team":"Mon équipe","mine":"Je"},"funcs":{"aboutus":"À propos WOTC","rules":"Règles de la plateforme","download":"Centre de téléchargement","cert":"Certificats","setting":"Langue","customer":"Service Clients","activities":"Prochains événements","joinus":"Participer WOTC","earn":"Fund"},"home":{"index":{"trade_data":"Données de transaction","no_register":"Veuillez d\'abord vous inscrire en tant que membre","no_message":"Pas de message"},"download":{"google_play":"Worldotc for Android","google_play_tip":"Téléchargement de l\'App Store","ios":"Worldotc for iOS","ios_tip":"Cliquez pour accéder au site officiel pour télécharger"},"language":{"language":"Langue"},"earn":{"title":"Fund","total_profit":"Revenu total","access_detail":"Détails du dépôt","available_balance":"Solde disponible","storage_balance":"Montant déposé","item_title":"Liste des protocoles","time":"Temps","profit":"Le revenu","btn":"Acheter maintenant","msg":{"earn_success":"Transaction réussie"},"trade":{"sell_title":"Revenus de la commande","sell_time":"Temps：","profit_fee":"Taux d\'intérêt：","input_amount":"Entrer le montant：","input_amount_tip":"0.00","input_amount_msg":"Veuillez entrer le montant","sell_income":"Bénéfice attendu：","sell_btn":"Achat","cancel_btn":"Annuler","input_amount_min_tip":"Le montant est inférieur au minimum: ","input_amount_max_tip":"Le montant dépasse le maximum: ","note":"Investissement oisif","cancel":"Annuler"}},"earnlist":{"title":"Détails du dépôt","type_undo":"Non terminé","type_done":"A été complété","type":"Taper","amount":"Montants","profit":"Le revenu","buy_date":"Date de dépôt：","send_date":"Date de règlement："}},"login":{"login":{"title":"Connexion","password":"le mot de passe","passwd_tip":"Veuillez entrer un mot de passe de 6 à 16 chiffres","mobile":"numéro de portable","mobile_tip":"Veuillez saisir votre numéro de portable","register":"Enregistrer","forgot_pwd":"Mot de passe oublié","btn":"Connexion"},"phoneCode":{"custom_phone_code_tip":"Veuillez saisir l\'indicatif régional international","confirm":"Confirmer","msg":"L\'inscription n\'est pas ouverte actuellement dans cette région"},"register":{"title":"Enregistrer","smscode":"Code de vérification SMS","smscode_placeholder":"Entrez le code","smscode_tip":"Entrez le code","smscode_send_text":"Envoyer le code de vérification","login":"Connexion","next_step":"L\'étape suivante","password":"le mot de passe","passwd_tip":"Veuillez entrer un mot de passe de 6 à 16 chiffres","nickname":"Surnom","nickname_tip":"s\'il vous plait, entrez ton surnom","invite_code":"Code de Parrainage","invite_code_tip":"Veuillez saisir votre code de parrainage","submit":"Nous faire parvenir","reg_success":"Succès de l\'inscription","mobile_tip":"Entrez votre numéro de téléphone mobile"},"forget":{"title":"Mot de passe oublié","password":"Le mot de passe","passwd_tip":"Veuillez entrer un mot de passe de 6 à 16 chiffres","smscode":"Code de vérification SMS","smscode_placeholder":"Veuillez entrer le code de vérification par SMS","smscode_send_text":"Envoyer le code de vérification","submit":"Nous faire parvenir","success":"Réinitialisation du mot de passe terminée"}},"mine":{"ucenter":{"logout":"Quitter","invite_code":"Code de Parrainage: ","my_total_assets":"Mon actif total","my_account":"Mon compte","recharge":"Recharger","withdraw":"rétraction","personal_info":"Renseignements personnels","google_auth":"Centre de sécurité","recharge_record":"Enregistrement de recharge","withdraw_record":"Record retrait ","fund_detail":"Détails du financement","auth":"Authentification","team_profit":"Bénéfices d\'équipe","invite_friend":"Inviter des amis","tip":"Avis","set_withdraw_address":"Veuillez d\'abord lier l\'adresse de retrait","set":"Paramètres","cancel":"Annuler"},"googleauth":{"title":"Centre de sécurité","googleauth_tip":"Veuillez lier Google Authenticator","open_googleauth":"Ouvrir l\'authentificateur Google","setting_tip":"Commencez à scanner le code QR fourni sur notre plate-forme ou entrez manuellement la clé à 16 chiffres fournie dans la plate-forme. Une fois l\'ajout réussi, entrez la vérification dynamique du mot de passe pour terminer la liaison.。","copy":"Copier la clé","copy_success":"Copier avec succès","vercode":"Code de vérification Google","bind":"Authentifier et lier","unbind":"Délier","vercode_tip":"Veuillez entrer le code de vérification","bind_success":"La liaison a réussi","notice":"Conseils aimables","bind_tip":"Vous êtes lié à Google Authenticator","unbind_tip":"Pour dissocier, veuillez obtenir le code de vérification par SMS pour vérification","unbind_success":"Délier avec succès"},"userinfo":{"title":"Renseignements personnels","modify":"Réviser","nickname":"Surnom","mobile":"Numéro de portable","address":"Adresse retrait","login_pwd":"Mot de passe de connexion","input_tip":"Veuillez remplir le contenu","set":"Paramètres","cancel":"Annuler","nickname_tip":"Veuillez entrer un pseudo","login_pwd_tip":"Veuillez entrer le mot de passe","withdraw_address_tip":"Merci de saisir l\'adresse de retrait","old_pass":"Ancien mot de passe","new_pass":"Nouveau mot de passe","old_pass_tip":"Veuillez saisir le mot de passe d\'origine","new_pass_tip":"Veuillez entrer un nouveau mot de passe","pass_tip":"Si vous oubliez votre mot de passe, veuillez le récupérer à partir du code de vérification de votre téléphone portable sur la page de connexion","vercode":"Code de vérification Google","code_tip":"Veuillez entrer le code de vérification Google"},"recharge":{"title":"Recharger","recharge_tip":"Conseils de recharge","recharge_tip_mark1":"L\'adresse de dépôt ne prend en charge que TRC20-USDT, et le dépôt minimum est de 10USDT.","recharge_tip_mark2":" Veuillez ne pas transférer d\'autres actifs à l\'adresse de dépôt pour éviter les pertes.","qrcode":"QR Code","copy":"Copie","copy_success":"Copier avec succès"},"rechargeRecords":{"title":"Enregistrement de recharge","time":"Temps","amount":"Montant","status":"Etat","payway":"Méthode de recharge：","orderno":"Numéro de commande：","recharge_status":{"1":"A été complété","2":"Échec de la recharge","3":"Annulé"}},"withdraw":{"title":"Se désister","available_balance":"Solde disponible","real_money":"Arrivée effective (frais de traitement : 3%)","smscode":"Code de vérification SMS","smscode_placeholder":"Entrez le code","smscode_send_text":"Envoyer le code de vérification","address":"Adresse retrait","submit":"Soumettre","withdraw_success":"Succès du retrait","withdraw_tip":"Montant minimum de retrait：","withdraw_amount_tip":"Veuillez entrer le montant du retrait","vercode_tip":"Le code de vérification ne peut pas être vide","password":"Le mot de passe","passwd_tip":"Veuillez entrer un mot de passe de 6 à 16 chiffres","vercode":"Code de vérification Google","code_tip":"Veuillez entrer le code de vérification Google","tips":"Rappel : Pour la sécurité de vos fonds, veuillez vous rendre dans le Centre de sécurité pour lier Google Authenticator。"},"withdrawalRecords":{"title":"Enregistrement des retraits","time":"Temps","amount":"Montant","status":"Etat","withdraw_way":"Adresse retrait：","orderno":"Numéro de commande：","withdraw_status":{"0":"Retrait attend","1":"Succès du retrait","2":"Annulation du retrait"}},"funds":{"title":"Détails du financement","time":"Temps","amount":"Montant","status":"Etat","fund_status":{"10":"Recevoir des prestations","11":"Récompenses de missions","20":"Faire des économies","21":"Prendre","30":"OTC échange","31":"OTC le revenu","50":"Recharger","51":"Recharger","52":"Recharger","60":"rétraction","61":"rétraction","62":"rétraction"}},"authentication":{"title":"Authentification","auth_status":{"0":"Non certifié","1":"En cours d\'examen","2":"Agréé","3":"Rejeté"},"auth_photo_hold_example":"Exemple","auth_problem_tips":"Rappel : Si vous rencontrez des problèmes, veuillez contacter le service client","submit":"S\'authentifier maintenant","uploading":"Sous certification.."},"teamIncomes":{"title":"Bénéfices d\'équipe","level":"Niveau","userid":"ID","time":"Temps","amount":"Montant"},"inviteFriends":{"title":"Inviter des amis","invite_code":"Code de Parrainage","invite_friend_tip":"Bénéficiez immédiatement de gros avantages, allez inviter","invite_friend_btn":"Cliquez pour copier","share_rule":{"title":"Règles de remise de commission","title_tip":"Pour chaque profit que votre ami gagne après son inscription, vous recevrez un pourcentage correspondant de la commission","rate_title":"Les règles du ratio de commission sont les suivantes","rate_user_level":"Niveau de l\'utilisateur","rate_way":"Règle","rate_num":"Taux de commission","rate_lv1_desc":"Utilisateurs directement invités","rate_lv2_desc":"Utilisateurs invités par LV1","rate_lv3_desc":"Utilisateurs invités par LV2","rate_lv4_desc":"Tous les utilisateurs invités ci-dessous lv3","hint":"La commission est réglée en USDT et peut être retirée dans votre portefeuille à tout moment"},"copy_success":"Copier avec succès"}},"team":{"index":{"team_total_income":"Revenu total","team_residual_income":"Revenu résiduel","receive":"Recevoir","team_info":"Détails de l\'équipe","team_user_list":"Voir les détails","team_total_profit":"Revenu total","team_total_num":"Nombre total de personnes","team_total_recharge":"Recharge totale","people_num":"Nombre de personnes","people_profit":"Le revenu","team_invite_task":"Inviter les exigences de la mission","team_invite_task_tip":"Invitez {need_num} utilisateurs à échanger avec succès et à recevoir des récompenses de {amount} USDT","progress":"la progression","team_receive":"Recevoir","team_hasreceive":"Reçu","receive_success":"Reçu avec succès"},"myTeam":{"title":"Détails de l\'équipe","team_total_profit":"Revenu total","team_total_num":"Nombre total de personnes","team_total_recharge":"Recharge totale","team_lv1":"Level 1","team_lv2":"Level 2","team_lv3":"Level 3","team_lv_count":"Quantité：","team_lv_income":"le revenu：","team_lv_recharge":"recharger：","team_lv_invite":"Nombre d\'invités：","team_lv_mobile":"Numéro de téléphone：","team_lv_time":"Heure d\'inscription："}},"transaction":{"index":{"total_assets":"Total des actifs","trade_stat":"Statistiques sur le revenu","tran_title":"WOTC Présentation de la transaction","tran_desc":"WOTCPossède un système mondial de correspondance de crypto-monnaie. Fournissez aux utilisateurs une plate-forme mondiale de crypto-monnaie pour le trading USDT. Assurer la stabilité des transactions et maximiser les profits","accepting":"Transaction en cours","wallet_balance":"Solde du portefeuille","order_amount":"Montant de la transaction","order_amount_tip":"Veuillez entrer le montant correct","order_amount_all":"Tous","btn":"Commencer le filtrage","trade_success":"Transaction réussie：","trade_amount":"Montant transaction réussie：","trade_profit":"Bénéfice de succès：","record":"Liste des transactions","tradingtime":"Temps restant:{%s}","time":"Temps","amount":"Montant transaction réussie","profit":"Profit","sell_time":"Temps de vente：","sell_amount":"Montant vendu：","income_time":"Temps de revenu：","income_amount":"Montant du revenu：","order_num":"Numéro de commande：","search":"Correspondance d\'intelligence artificielle...","msg":{"amount_tip":"Le solde est inférieur à {deal_amount} et ne peut pas être filtré","order_amount_tip":"Veuillez entrer le montant correct"},"sell":{"symbol":"Crypto-monnaie：","service_provider":"MSB Fournisseur de services de certification：","market_price":"USDT Prix de vente：","trade_price":"Prix de vente：","order_amount":"Montant de la commande：","confirm":"Commencer à négocier","cancel":"Annuler","trading":"En transaction..."},"sell_success":{"title":"Les gains et les fonds seront automatiquement déposés sur votre compte après 3 heures!","orderNo":"Numéro de commande：","trade_price":"Montant de la transaction：","profit":"Profit：","amount":"Montant forfaitaire：","tip":"Il a été transféré sur le portefeuille de trading et sera automatiquement transféré sur le portefeuille de solde","confirm":"Confirmer"}},"incomeStatistics":{"title":"Statistiques sur le revenu","total_orders_num":"Total des transactions terminées","total_money":"Montant forfaitaire","total_profit":"Bénéfice total","date":"Date","order_num":"Le nombre de transactions","money":"Montants","profit":"Profit"}},"main":{"more":"Plus >","got_it":"Entendu","loading":"Chargement...","modify_success":"Modifié avec succès"},"infomation":{"aboutus":{"1":"World Over The Counter is composed of a team of experienced professionals and a huge liquidity pool.","2":"World Over The Counter Our over-the-counter (OTC) services are suitable for transactions ranging from $10 to millions of dollars, covering a variety of fiat currencies, USDT, and other major cryptocurrencies. The biggest advantage of World Over The Counter OTC trading services is that we provide investors and high net worth individuals with strong trading depth, tailor-made services, and a high degree of privacy protection. World Over The Counter\'s over-the-counter trading service allows customers to avoid trading slippage losses that are common on common trading platforms, and is the best choice for large cryptocurrency traders.","3":"World Over The Counter Over-the-counter OTC services for fiat currencies, USDT, or other cryptocurrencies. World Over The Counter focuses on allowing you to freely and easily trade cryptocurrencies without worrying about complicated issues such as transaction depth and order matching. At the same time, we bring you a flexible, safe and high-quality trading experience through comprehensive transaction execution and settlement services. ","4":"1：Apply for a World Over The Counter OTC account (personal account)","5":"2：Deposit fiat or cryptocurrency into your account","6":"3：After the transaction is executed, USDT will be automatically deposited into your account balance three hours later","7":"OTC solutions for you","8":"professional trader","9":"We have some of the best bitcoin and cryptocurrency traders in the world. Our professional experience can be traced back to the birth of Bitcoin many years ago, and we have been serving thousands of customers with the best price at the right time and the right place.","10":"Different trading experience","11":"Different from general exchanges and large over-the-counter exchanges, World Over The Counter will provide you with tailor-made optimal liquidity funding arrangements and trading solutions that fully meet your trading needs. After successfully setting up your account, we will consult with you and provide you with the best solution to meet your program needs and desired outcomes. We are committed to being reputable, reliable, convenient and community development. We are committed to building a good and lasting relationship with each client, providing the highest quality service at all times.","12":"International service","13":"World Over The Counter Headquartered in Colorado, USA, it is committed to providing international customers with global cryptocurrency trading platforms and trading services, and has won high praise and trust from customers in Asia, America, Australia, Europe, and Africa.","14":"credible and reliable","15":"World Over The Counter We believe that honesty and transparency are the keys to success, and attach great importance to the privacy and confidentiality of customer information. With our professional attitude, we have won the trust and support of our customers. We are committed to building a trustworthy image that goes hand in hand with you. No matter where you are, you can use our comprehensive services with peace of mind。"},"cert":{"1":"World Over The Counter Limited licence d\'exploitation","2":"World Over The Counter Limited Certificat d\'enregistrement de la licence commerciale.","3":"Le grand sceau de l\'État du Colorado a été apposé ici et ce certificat officiel a été dûment généré, signé et délivré.","4":"Le Colorado réglementera cela conformément à la loi applicable.","5":"Vérifiez le numéro de certificat sur le site officiel du secrétaire d\'État du Colorado pour afficher les détails de l\'entreprise.","6":"World Over The Counter Foundation licence d\'exploitation","7":"World Over The Counter Foundation Certificat d\'enregistrement de la licence commerciale.","8":"Parce que WOTC participe activement à des fondations caritatives mondiales, répandant leur amour dans le monde.","9":"Ce certificat est approuvé et numéroté par le bureau du secrétaire d\'État du Colorado.","10":"À l\'avenir, WOTC participera aux principaux fonds caritatifs du monde et aidera davantage de personnes.","11":"Le certificat de fondation caritative apporte également une meilleure protection des actifs à tous les membres de l\'entreprise.","12":"Vérifiez le numéro de certificat sur le site officiel du secrétaire d\'État du Colorado pour afficher les détails de l\'entreprise.","13":"Dans la vidéo, nous pouvons voir les membres de l\'équipe WOTC et la PALM BEACH CHRISTIAN PREPARATORY SCHOOL en Floride, aux États-Unis, négocier une coopération préliminaire. WOTC parraine des écoles. Et aidez chaque élève de l\'école à réduire son fardeau scolaire. Contribuer à l\'industrie de l\'éducation.","14":"Activités caritatives menées par les membres de l\'équipe WOTC dans le monde entier. Essayer d\'aider plus de gens. Ils sont comme un rayon de lumière à l\'aube. Laissez notre lumière briller sur plus de gens.","15":"Ne soyez pas surpris si vous voyez un jour un membre de l\'équipe WOTC passer devant votre porte. Parce que nous sommes déjà populaires dans le monde entier. Nous savons que de nombreux concurrents nous font souvent du mal en calomniant et en créant des rumeurs. Mais nous laissons ces rumeurs s\'éteindre par le pouvoir de la solidarité. WOTC n\'a jamais laissé personne tomber.","16":"Merci à tous les membres qui font confiance et soutiennent WOTC. Félicitons la création réussie de la fondation caritative de WOTC.","17":"Site officiel de requête du certificat MSB :","18":"https://www.fincen.gov/msb-state-selector","19":"Site officiel pour les demandes de licence commerciale :","20":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","21":"Site officiel de la fondation :","22":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","23":"Le droit d\'interprétation de tout le contenu ci-dessus appartient à World Over The Counter Limited","24":"The US MSB license is a type of financial license supervised and issued by the US Treasury Department. The main objects of supervision are money service-related businesses and companies, including digital currency, virtual currency transactions, ICO issuance, as well as foreign exchange, international remittances etc. business."},"joinus":{"1":"World Over The Counter welcomes anyone to get in touch and get involved in the cryptocurrency space. Whether you want to buy or sell cryptocurrencies, or to learn more about Bitcoin and cryptocurrencies, World Over The Counter has you covered.","2":"If you have any questions or comments, please feel free to email or call us. We further encourage all customers to participate in our cryptocurrency community and promote the development of the community. ","3":"World Over The Counter Committed to reducing transaction fees and restrictions, providing customers with lower transaction thresholds than most OTC trading platforms, we will bring you the most suitable transaction solutions for any amount of transactions, so that USDT and cryptocurrencies can be used for all people. service usage. ","4":"More than a billion people in the world are currently unbanked or unbanked, but most of them have access to smartphones. ","5":"They can use their smartphone\'s e-wallet at any time, allowing decentralized cryptocurrencies to bring them the most value benefits - and World Over The Counter will continue to do this as it drives the universal adoption of cryptocurrencies.","6":"Whether online or offline, World Over The Counter has always been committed to developing an active and interactive community of cryptocurrency users, through providing knowledge, exchange, and mutual development and participation in the global Bitcoin and cryptocurrency community.","7":"Whether you are new to cryptocurrency or a seasoned expert, we welcome you to join us!","8":"World Over The Counter Please provide your contact information and brief information to let us know how we can assist you and we will reply as soon as possible.","9":"Mail：worldoverthecounter@gmail.com","10":""},"rules":{"1":"Terms of use","2":"When buying USDT, never use a wallet address that does not belong to you. Please use your own wallet address. Please do not send USDT to suspected scammers！","3":"When you agree to our Terms of Use, you also agree to our Personal Information Collection Statement and Privacy Policy, Privacy Policy and Cookie Policy.","4":"We do not provide services, equipment and other matters to persons under the age of 18. If you are under the age of 18 and use our website, you should contact us by contacting the person assuming custody of you to exercise the appropriate rights of access, correction, cancellation and objection.","5":"Trading Rules","6":"WorldotcIt is a US MSB certified cryptocurrency over-the-counter exchange. It provides a trading platform for USDT and global cryptocurrencies, providing users with transaction accuracy and convenience. Enter the amount of virtual currency you want to buy.","7":"The income is settled every 3 hours, and each profit will be 0.4% of your investment amount!","8":"Settlement up to 8 times 24 hours a day, the highest income is 3.2%!","9":"Double your investment in 23 days at the fastest!","10":"The maximum profit per month is 1.572 times！","11":"Deposit and withdrawal rules","12":"Bind your TRC20 address to withdraw funds, 24 hours a day, and the withdrawal fee is 3% .","13":"Withdrawal time arrives in 1 minute.","14":"Note: Each TRC20 address can only be bound to one investment account","15":"Deposit using your Binance or wallet, the minimum investment amount is 11USDT, and the minimum withdrawal amount is 5USDT","16":"Invitation Rules","17":"Your friends make money by investing and you can earn commission income:","18":"Lv1 Directly invited users (15% of total trading profit)","19":"Lv2Users invited by L1 (10% of total trading profit)","20":"Lv3Users invited by L2 (5% of total trading profit)","21":"Invite mission reward","22":"Every time you invite 10 LV1 members to complete the investment, you can get an invitation reward of 10 USDT","23":"Note: Each invited LV1 subordinate must complete the investment to be considered a valid user.","24":"Reminder: If you have any questions about rewards and rules, please contact the customer service manager."}},"serverCodes":{"401":"Paramètre est erroné","406":"Solde insuffisant","407":"Montant de la transaction incorrect","408":"Paramètre invalide","409":"Le mot de passe se compose de 6 à 16 lettres et chiffres","410":"Erreur de code de vérification","411":"Mauvais nom d\'utilisateur ou mot de passe","412":"Compte gelé, merci de contacter le service client","413":"Veuillez entrer des numéros de téléphone valides","414":"Le numéro de téléphone a déjà été enregistré, veuillez sélectionner un autre numéro de téléphone","415":"Obtenir l\'intervalle de fréquence du code de vérification 1 minute","416":"Trop de tentatives, réessayez plus tard","417":"Le code de vérification a expiré, veuillez renvoyer le code de vérification","418":"Le téléphone n\'est pas vérifié ou la vérification a expiré, veuillez recommencer l\'enregistrement","419":"Le surnom se compose de 2 à 8 caractères","420":"Veuillez entrer le bon code d\'invitation","421":"Le numéro de téléphone n\'a pas été enregistré, pas besoin de récupérer le mot de passe","422":"Répéter la demande","423":"Code de vérification envoyé avec succès","424":"Le nombre de codes de vérification envoyés le jour a atteint la limite supérieure","425":"Échec de l\'envoi du code de vérification","426":"L\'adresse n\'est pas modifiable, merci de contacter le service client","427":"échec de la vérification","428":"Vous avez déjà lié Google Authenticator","429":"La vérification du mot de passe d\'origine a échoué","500":"Le réseau est anormal, veuillez réessayer plus tard","501":"Suspendre la connexion","502":"Inscription suspendue","503":"Pas connecté","605":"Veuillez entrer la bonne quantité","606":"Le montant du retrait est inférieur à la valeur minimale","607":"Le montant des pièces retirées est supérieur à la valeur maximale","608":"Veuillez entrer la bonne adresse de retrait","609":"Format d\'adresse incorrect","610":"Le mot de passe d\'origine est erroné","706":"Cette adresse est déjà utilisée, veuillez la remplacer。","708":"Cet utilisateur n\'existe pas","712":"Veuillez vérifier votre véritable identité avant de retirer","713":"Aucun revenu actuellement disponible","714":"La récompense de la mission actuelle a été reçue","715":"Ne remplissant pas les conditions requises pour recevoir"}}')
    },
    "2b1b": function(e) {
        e.exports = JSON.parse('{"tabBar":{"home":"Σπίτι","trade":"Ο όροφος συναλλαγών","team":"Η ομάδα μου","mine":"Δικος μου"},"funcs":{"aboutus":"Σχετικά μεWOTC","rules":"Κανόνες πλατφόρμας","download":"Κέντρο λήψης","cert":"«Πιστοποιητικό προσόντων»","setting":"Γλώσσα","customer":"Εξυπηρέτηση πελατών","activities":"Ανακοίνωση εκδήλωσης","joinus":"Συμμετοχή WOTC","earn":"Το δωρεάν χρήμα κερδίζει τόκους"},"home":{"index":{"trade_data":"Στοιχεία συναλλαγής","no_register":"Παρακαλώ εγγραφείτε ως μέλος πρώτα","no_message":"«Καμία πληροφορία»"},"download":{"google_play":"Worldotc for Android","google_play_tip":"Λήψη App Store","ios":"Worldotc for iOS","ios_tip":"Κάντε κλικ για να μεταβείτε στον επίσημο ιστότοπο για λήψη"},"language":{"language":"Γλώσσα"},"earn":{"title":"Το δωρεάν χρήμα κερδίζει τόκους","total_profit":"Συνολικό κέρδος.","access_detail":"Λεπτομέρειες πρόσβασης","available_balance":"Διαθέσιμα υπόλοιπα","storage_balance":"Ποσό που κατατέθηκε","item_title":"Κατάλογος συμφωνιών","time":"Χρόνος","profit":"Εξόφληση","btn":"αγορασε τωρα","msg":{"earn_success":"Η συμφωνία επιτυχής"},"trade":{"sell_title":"Επιστροφή στις παραγγελίες","sell_time":"Χρόνος:","profit_fee":"Επιτόκιο:","input_amount":"Εισάγετε το ποσό:","input_amount_tip":"0.00","input_amount_msg":"Παρακαλώ εισάγετε το ποσό","sell_income":"Αναμενόμενες επιστροφές:","sell_btn":"Αγορά","cancel_btn":"Ακυρώθηκε","input_amount_min_tip":"Ποσό κάτω από το ελάχιστο:","input_amount_max_tip":"Ποσό που υπερβαίνει το μέγιστο: ","note":"«Καταθέστε αδρανή περιουσιακά στοιχεία για κέρδος»","cancel":"Ακυρώθηκε"}},"earnlist":{"title":"Λεπτομέρειες πρόσβασης","type_undo":"Ημιτελής","type_done":"Ολοκληρώθηκε το","type":"Τύπος","amount":"Ποσό","profit":"Εξόφληση","buy_date":"Ημερομηνία κατάθεσης:","send_date":"Ημερομηνία διακανονισμού:"}},"login":{"login":{"title":"Σύνδεση","password":"Κρυπτογράφημα","passwd_tip":"Παρακαλώ εισάγετε έναν κωδικό πρόσβασης 6 ~ 16 bit","mobile":"Αριθμός κινητού τηλεφώνου","mobile_tip":"Παρακαλώ εισάγετε τον αριθμό του κινητού σας τηλεφώνου","register":"Εγγραφείτε","forgot_pwd":"Χαμένος κωδικός","btn":"Σύνδεση"},"phoneCode":{"custom_phone_code_tip":"Παρακαλώ εισάγετε έναν διεθνή κωδικό περιοχής","confirm":"ΕΝΤΑΞΕΙ","msg":"Η τρέχουσα περιοχή δεν είναι ανοιχτή για εγγραφή"},"register":{"title":"Εγγραφείτε","smscode":"Κωδικός επαλήθευσης SMS","smscode_placeholder":"Παρακαλώ εισάγετε έναν κωδικό επαλήθευσης SMS","smscode_tip":"Παρακαλώ εισάγετε έναν κωδικό επαλήθευσης SMS","smscode_send_text":"Αποστολή κωδικού ελέγχου ταυτότητας","login":"Σύνδεση","next_step":"Επόμενο βήμα","password":"Κωδικός πρόσβασης","passwd_tip":"Παρακαλώ εισάγετε έναν κωδικό πρόσβασης 6 ~ 16 bit","nickname":"Παρατσούκλι","nickname_tip":"Παρακαλώ εισάγετε το ψευδώνυμό σας","invite_code":"Προτεινόμενος κωδικός","invite_code_tip":"Παρακαλώ εισάγετε τον προτεινόμενο κωδικό σας","submit":"Υποβολή","reg_success":"Επιτυχία εγγραφής","mobile_tip":"Παρακαλώ εισάγετε τον αριθμό του κινητού σας τηλεφώνου"},"forget":{"title":"Χαμένος κωδικός","password":"Κωδικός πρόσβασης","passwd_tip":"Παρακαλώ εισάγετε έναν κωδικό πρόσβασης 6 ~ 16 bit","smscode":"Κωδικός επαλήθευσης SMS","smscode_placeholder":"Παρακαλώ εισάγετε έναν κωδικό επαλήθευσης SMS","smscode_send_text":"Αποστολή κωδικού ελέγχου ταυτότητας","submit":"Υποβολή","success":"Η τροποποίηση του κωδικού πρόσβασης ήταν επιτυχής"}},"mine":{"ucenter":{"logout":"Εξοδος","invite_code":"Προτεινόμενος κωδικός:","my_total_assets":"Το σύνολο του ενεργητικού μου","my_account":"Ο λογαριασμός μου","recharge":"Επαναφόρτιση","withdraw":"Απόσυρση","personal_info":"Προσωπικές πληροφορίες","google_auth":"Κέντρο ασφαλείας","recharge_record":"Recharge Records","withdraw_record":"Αρχεία απόσυρσης","fund_detail":"Λεπτομέρειες κεφαλαίων","auth":"Επαλήθευση ταυτότητας","team_profit":"Κέρδη ομάδας","invite_friend":"Καλέστε φιλαράκο","tip":"Συμβουλές","set_withdraw_address":"Παρακαλώ δεσμεύστε πρώτα τη διεύθυνση ανάληψης","set":"Ρυθμίσεις","cancel":"Ακυρώθηκε"},"googleauth":{"title":"Κέντρο ασφαλείας","googleauth_tip":"Παρακαλούμε δεσμεύστε τον Επαληθευτή Google","open_googleauth":"Ανοίξτε τον Επαληθευτή Google","setting_tip":"Ξεκινήστε τη σάρωση του κωδικού QR που παρέχεται στην πλατφόρμα μας ή εισαγάγετε μη αυτόματα το κλειδί 16 ψηφίων που παρέχεται στην πλατφόρμα. Μετά την επιτυχή προσθήκη, εισαγάγετε τη δυναμική επαλήθευση κωδικού πρόσβασης για να ολοκληρώσετε τη δέσμευση。","copy":"κλειδί αντιγραφής","copy_success":"Αντιγραφή με επιτυχία","vercode":"Κωδικός επαλήθευσης Google","bind":"Έλεγχος ταυτότητας και δέσμευση","unbind":"αποδεσμεύω","vercode_tip":"παρακαλούμε εισάγετε τον κωδικό επαλήθευσης","bind_success":"Το δέσιμο πέτυχε","notice":"ΦΙΛΙΚΗ υπενθύμιση","bind_tip":"Είστε δεσμευμένοι στο Google Authenticator","unbind_tip":"Εάν πρέπει να ακυρώσετε τη δέσμευση, λάβετε τον κωδικό επαλήθευσης SMS για επαλήθευση","unbind_success":"Το Unbinding πέτυχε"},"userinfo":{"title":"Προσωπικές πληροφορίες","modify":"Τροποποίηση","nickname":"Παρατσούκλι","mobile":"Αριθμός κινητού τηλεφώνου","address":"Διεύθυνση υπαναχώρησης","login_pwd":"Κωδικός σύνδεσης","input_tip":"Παρακαλώ συμπληρώστε το περιεχόμενο","set":"Ρυθμίσεις","cancel":"Ακυρώθηκε","nickname_tip":"Παρακαλούμε εισάγετε ένα ψευδώνυμο","login_pwd_tip":"Παρακαλώ εισάγετε κωδικό πρόσβασης","withdraw_address_tip":"Παρακαλούμε εισάγετε τη διεύθυνση ανάληψης","old_pass":"παλιό κωδικό πρόσβασης","new_pass":"νέος κωδικός πρόσβασης","old_pass_tip":"Παρακαλούμε εισάγετε τον αρχικό κωδικό πρόσβασης","new_pass_tip":"Παρακαλώ εισάγετε έναν νέο κωδικό πρόσβασης","pass_tip":"Εάν ξεχάσετε τον κωδικό πρόσβασής σας, ανακτήστε τον από τον κωδικό επαλήθευσης του κινητού σας τηλεφώνου στη σελίδα σύνδεσης","vercode":"Κωδικός επαλήθευσης Google","code_tip":"Εισαγάγετε τον κωδικό επαλήθευσης της Google"},"recharge":{"title":"Επαναφόρτιση","recharge_tip":"*Συμβουλές επαναφόρτισης","recharge_tip_mark1":"Η διεύθυνση κατάθεσης υποστηρίζει μόνο TRC20-USDT και η ελάχιστη κατάθεση είναι 10 USDT.","recharge_tip_mark2":"Μην μεταφέρετε άλλα περιουσιακά στοιχεία στη διεύθυνση κατάθεσης για να αποφύγετε την απώλεια κεφαλαίων.","qrcode":"Δισδιάστατος κώδικας","copy":"Αντιγραφή","copy_success":"Επιτυχία αναπαραγωγής"},"rechargeRecords":{"title":"Ρεκόρ επαναφόρτισης","time":"Χρόνος","amount":"Ποσό","status":"Κατάσταση","payway":"Επαναφόρτιση:","orderno":"Αριθμός παραγγελίας:","recharge_status":{"1":"Ολοκληρώθηκε το","2":"Η επαναφόρτιση απέτυχε","3":"Ακυρώθηκε"}},"withdraw":{"title":"Απόσυρση","available_balance":"Διαθέσιμα υπόλοιπα","real_money":"Πραγματική απόδειξη (τέλος χειρισμού: 3%)","smscode":"Κωδικός επαλήθευσης SMS","smscode_placeholder":"Παρακαλώ εισάγετε έναν κωδικό επαλήθευσης SMS","smscode_send_text":"Αποστολή κωδικού ελέγχου ταυτότητας","address":"Διεύθυνση υπαναχώρησης","submit":"Υποβολή","withdraw_success":"Επιτυχία απόσυρσης","withdraw_tip":"Ελάχιστη απόσυρση: ","withdraw_amount_tip":"Παρακαλώ εισάγετε το ποσό της ανάληψης","vercode_tip":"Ο κωδικός ελέγχου ταυτότητας δεν μπορεί να είναι κενός","password":"Κωδικός πρόσβασης","passwd_tip":"Εισαγάγετε έναν κωδικό πρόσβασης 6-16 ψηφίων","vercode":"Κωδικός επαλήθευσης Google","code_tip":"Εισαγάγετε τον κωδικό επαλήθευσης της Google","tips":"Υπενθύμιση: Για την ασφάλεια των κεφαλαίων σας, μεταβείτε στο Κέντρο ασφαλείας για να δεσμεύσετε τον Επαληθευτή Google。"},"withdrawalRecords":{"title":"Αρχεία απόσυρσης","time":"Χρόνος","amount":"Ποσό","status":"Κατάσταση","withdraw_way":"Διεύθυνση υπαναχώρησης:","orderno":"Αριθμός παραγγελίας:","withdraw_status":{"0":"«Σε απόσυρση»","1":"Επιτυχία απόσυρσης","2":"Ακύρωση απόσυρσης"}},"funds":{"title":"Λεπτομέρειες κεφαλαίων","time":"Χρόνος","amount":"Ποσό","status":"Κατάσταση","fund_status":{"10":"Λήψη εσόδων","11":"Αποστολές ανταμοιβές","20":"Αποθήκευση σε","21":"Βγάζω","30":"OTC Η συμφωνία","31":"OTC Κέρδη","50":"Επαναφόρτιση","51":"Επαναφόρτιση","52":"Επαναφόρτιση","60":"Απόσυρση","61":"Απόσυρση","62":"Απόσυρση"}},"authentication":{"title":"Επαλήθευση ταυτότητας","auth_status":{"0":"Χωρίς πιστώσεις","1":"Υπό εξέταση","2":"Πιστοποιημένο","3":"Απορρίφθηκε"},"auth_photo_hold_example":"Παραδείγματα","auth_problem_tips":"Συμβουλές: Εάν αντιμετωπίζετε προβλήματα, επικοινωνήστε με την εξυπηρέτηση πελατών","submit":"Πιστοποιήθηκε τώρα","uploading":"Μεταφορτώθηκε..."},"teamIncomes":{"title":"Κέρδη ομάδας","level":"Τάξη","userid":"ID","time":"Χρόνος","amount":"Ποσό"},"inviteFriends":{"title":"Καλέστε φιλαράκο","invite_code":"Προτεινόμενος κωδικός","invite_friend_tip":"«Απολαύστε τα πολλά χρήματα αμέσως, πηγαίνετε να προσκαλέσετε».","invite_friend_btn":"Κάντε κλικ στην Αντιγραφή","share_rule":{"title":"Κανόνες έκπτωσης","title_tip":"Για κάθε κέρδος που αποκομίζει ένας φίλος κατά την εγγραφή σας, θα λαμβάνετε μια αναλογική προμήθεια","rate_title":"Οι κανόνες για τις αναλογίες προμήθειας έχουν ως εξής","rate_user_level":"Κατάταξη χρήστη","rate_way":"Κανόνες","rate_num":"«αναλογία της Επιτροπής»","rate_lv1_desc":"Άμεσα προσκεκλημένοι χρήστες","rate_lv2_desc":"1 Προσκεκλημένος Χρήστης","rate_lv3_desc":"2 προσκεκλημένοι χρήστες","rate_lv4_desc":"3 Όλοι οι χρήστες προσκλήθηκαν παρακάτω","hint":"Προμήθεια διακανονισμού και μπορεί να εξαργυρωθεί στο πορτοφόλι σας ανά πάσα στιγμή"},"copy_success":"Επιτυχία αναπαραγωγής"}},"team":{"index":{"team_total_income":"Συνολικά έσοδα","team_residual_income":"«Πλεονάσματα»","receive":"Λήψη","team_info":"Στοιχεία ομάδας","team_user_list":"Δείτε λεπτομέρειες","team_total_profit":"Συνολικά έσοδα","team_total_num":"Συνολικός αριθμός","team_total_recharge":"Ολική επαναφόρτιση","people_num":"Αριθμός των ανθρώπων","people_profit":"Εξόφληση","team_invite_task":"Πρόσκληση σε Απαιτήσεις Αποστολής","team_invite_task_tip":"Το {need_num} προσκαλεί τους χρήστες του LV1 να πραγματοποιήσουν επιτυχείς συναλλαγές και να λάβουν {amount} USDT","progress":"Πρόοδος","team_receive":"Λήψη","team_hasreceive":"Ελαβε","receive_success":"Λήψη της επιτυχίας"},"myTeam":{"title":"Στοιχεία ομάδας","team_total_profit":"Συνολικά έσοδα","team_total_num":"Συνολικός αριθμός","team_total_recharge":"Ολική επαναφόρτιση","team_lv1":"Level 1","team_lv2":"Level 2","team_lv3":"Level 3","team_lv_count":"Ποσότητα:","team_lv_income":"Οφέλη:","team_lv_recharge":"Επαναφόρτιση:","team_lv_invite":"Αριθμός προσκλήσεων:","team_lv_mobile":"Αριθμός κινητού τηλεφώνου:","team_lv_time":"Ώρα εγγραφής:"}},"transaction":{"index":{"total_assets":"Το σύνολο του ενεργητικού","trade_stat":"«Στατιστικές εσόδων»","tran_title":"WOTC Εισαγωγή στη συναλλαγή","tran_desc":"Διαθέτει παγκόσμιο σύστημα αντιστοίχισης κρυπτονομισμάτων. Παρέχει στους χρήστες μια παγκόσμια πλατφόρμα κρυπτονομισμάτων συναλλαγών. Διασφάλιση σταθερότητας συναλλαγών και μεγιστοποίησης κερδών.","accepting":"Επεξεργασία συναλλαγών","wallet_balance":"Υπόλοιπο πορτοφολιού","order_amount":"Ποσό Συναλλαγής","order_amount_tip":"Παρακαλώ εισάγετε το σωστό ποσό","order_amount_all":"Ολα","btn":"Έναρξη φιλτραρίσματος","trade_success":"Επιτυχία συμφωνίας:","trade_amount":"Ποσό Συναλλαγής:","trade_profit":"Κέρδη από συναλλαγές:","record":"Λίστα συναλλαγών","tradingtime":"Υπολειπόμενος χρόνος:{%s}","time":"Χρόνος","amount":"Ποσό Συναλλαγής","profit":"Κέρδος","sell_time":"Ώρα πώλησης:","sell_amount":"Ποσό που πωλήθηκε:","income_time":"Χρόνος εισοδήματος:","income_amount":"Κέρδος:","order_num":"Αριθμός παραγγελίας:","search":"Έξυπνος αγώνας σε...","msg":{"amount_tip":"Υπόλοιπο μικρότερο από (), δεν είναι δυνατό το φιλτράρισμα","order_amount_tip":"Παρακαλώ εισάγετε το σωστό ποσό"},"sell":{"symbol":"Κρυπτονόμισμα:","service_provider":"Πιστοποιημένος πάροχος υπηρεσιών:","market_price":"Τιμή συναλλαγής:","trade_price":"Τιμή συναλλαγής:","order_amount":"Ποσό παραγγελίας:","confirm":"Ξεκινήστε τις συναλλαγές","cancel":"Ακυρώθηκε","trading":"«Στο εμπόριο…»"},"sell_success":{"title":"Τα έσοδα και τα χρήματα θα κατατεθούν αυτόματα στον λογαριασμό σας μετά από 3 ώρες!","orderNo":"Αριθμός παραγγελίας:","trade_price":"Ποσό Συναλλαγής:","profit":"Κέρδος:","amount":"Σύνολο:","tip":"Μεταφέρθηκε στο πορτοφόλι συναλλαγών και στη συνέχεια μεταφέρθηκε αυτόματα στο πορτοφόλι ισορροπίας","confirm":"Επιβεβαίωση"}},"incomeStatistics":{"title":"«Στατιστικές εσόδων»","total_orders_num":"Συνολικός αριθμός ολοκληρωμένων συναλλαγών","total_money":"Συνολικό ποσό","total_profit":"Συνολικό κέρδος","date":"Ημερομηνία","order_num":"Αριθμός συναλλαγών","money":"Ποσό","profit":"Κέρδος"}},"main":{"more":"Περισσότερα >","got_it":"ΕΝΤΑΞΕΙ.","loading":"Φόρτωση...","modify_success":"Η τροποποίηση επιτυχής"},"infomation":{"aboutus":{"1":"Η World Over The Counter είναι μια ομάδα έμπειρων επαγγελματιών που υποστηρίζονται από μια μεγάλη δεξαμενή ρευστότητας.","2":"Υπηρεσία World Over The Counter\'s Over-the-Counter (OTC) για συναλλαγές που κυμαίνονται από $10 έως περισσότερα από εκατομμύρια $, που καλύπτουν πολλαπλά νομικά νομίσματα, USDT και άλλα μεγάλα κρυπτονομίσματα. Το μεγαλύτερο πλεονέκτημα του World Over The Counter εξωχρηματιστηριακά Οι υπηρεσίες είναι το ισχυρό μας βάθος συναλλαγών, η προσαρμογή και η υψηλή προστασία απορρήτου για τους επενδυτές και τους κατόχους περιουσιακών στοιχείων υψηλής καθαρής αξίας. , είναι η καλύτερη επιλογή για μεγάλους εμπόρους κρυπτονομισμάτων., ","3":"Η υπηρεσία OTC του World Over The Counter ισχύει για νόμιμο χρήμα, USDT ή άλλο κρυπτονόμισμα. Το World Over The Counter επικεντρώνεται στο να σας επιτρέπει να κάνετε συναλλαγές σε κρυπτονομίσματα ελεύθερα και εύκολα χωρίς να ανησυχείτε για την πολυπλοκότητα του βάθους συναλλαγών και του ζεύγους αγορών και πωλήσεων. Ταυτόχρονα, σας παρέχουμε μια ευέλικτη, ασφαλή και υψηλής ποιότητας εμπειρία συναλλαγών μέσω ολοκληρωμένων υπηρεσιών εκτέλεσης συναλλαγών και διακανονισμού.","4":"1: Αίτηση για World Over The Counter OTC Λογαριασμός (Προσωπικός Λογαριασμός)","5":"2: Καταθέστε νόμιμο χρήμα ή κρυπτονόμισμα στον λογαριασμό σας,","6":"3: Μετά την εκτέλεση της συναλλαγής, το USDT θα κατατεθεί αυτόματα στο υπόλοιπο του λογαριασμού σας σε τρεις ώρες.","7":"Ένα πρόγραμμα OTC για εσάς.","8":"Επαγγελματίας έμπορος,","9":"Έχουμε έναν από τους κορυφαίους εμπόρους bitcoin και κρυπτονομισμάτων στον κόσμο. Η επαγγελματική μας εμπειρία μπορεί να ανιχνευθεί πολλά χρόνια από τη γέννηση του Bitcoin και παρέχουμε την καλύτερη υπηρεσία τιμών για χιλιάδες επισκέπτες την κατάλληλη στιγμή και στο σωστό μέρος .","10":"Μια διαφορετική εμπειρία συναλλαγής.","11":"Σε αντίθεση με τα γενικά και μεγάλα εξωχρηματιστηριακά χρηματιστήρια, το World Over The Counter σάς παρέχει τις καλύτερες ρυθμίσεις χρηματοδότησης ρευστότητας και επιλογές συναλλαγών προσαρμοσμένες στις συναλλακτικές σας ανάγκες. Όταν ο λογαριασμός σας ρυθμιστεί επιτυχώς, θα επικοινωνήσουμε μαζί σας και θα παρέχουμε το ιδανικό λύση για την κάλυψη των αναγκών και των προσδοκιών του προγράμματος σας. Προσπαθούμε για αξιοπιστία, αξιοπιστία, ευκολία και ανάπτυξη της κοινότητας. Προσπαθούμε να οικοδομήσουμε μια καλή και διαρκή σχέση με κάθε πελάτη και να παρέχουμε την καλύτερη δυνατή εξυπηρέτηση ανά πάσα στιγμή.","12":"«Διεθνής Υπηρεσία»,","13":"«Η World Over The Counter, με έδρα στην πολιτεία Colorado των ΗΠΑ, είναι αφιερωμένη στην παροχή παγκόσμιων πλατφορμών συναλλαγών κρυπτονομισμάτων και υπηρεσιών συναλλαγών σε διεθνείς πελάτες και έχει εκτιμηθεί και εμπιστευτεί ιδιαίτερα από πελάτες από την Ασία, την Αμερική, την Αυστραλία, την Ευρώπη και την Αφρική. ","14":"Αξιόπιστο και αξιόπιστο.","15":"Η World Over The Counter πιστεύει ότι η ειλικρίνεια και η διαφάνεια είναι το κλειδί για την επιτυχία και αποδίδει μεγάλη σημασία στο απόρρητο και την εμπιστευτικότητα των πληροφοριών των πελατών, κερδίζοντας την εμπιστοσύνη και την υποστήριξη των επισκεπτών με επαγγελματική συμπεριφορά. Δεσμευόμαστε να χτίσουμε μια αξιόπιστη εικόνα και να εργαζόμαστε χέρι-χέρι μαζί σας. Όπου κι αν βρίσκεστε, μπορείτε να χρησιμοποιήσετε το πλήρες φάσμα των υπηρεσιών που παρέχουμε με το κεφάλι σας ήσυχο."},"cert":{"1":"World Over The Couter Limited άδεια επιχείρησης","2":"World Over The Couter Limited Πιστοποιητικό εγγραφής άδειας επιχείρησης","3":"Η Μεγάλη Σφραγίδα της Πολιτείας του Κολοράντο έχει σφραγιστεί εδώ και αυτό το επίσημο πιστοποιητικό έχει δημιουργηθεί, εκτελεστεί και εκδοθεί δεόντως.","4":"Το Κολοράντο θα το ρυθμίσει σύμφωνα με την ισχύουσα νομοθεσία.","5":"Ελέγξτε τον αριθμό πιστοποιητικού στον επίσημο ιστότοπο του Υπουργού Εξωτερικών του Κολοράντο για να δείτε τα στοιχεία της εταιρείας.","6":"World Over The Couter Foundation άδεια επιχείρησης","7":"World Over The Couter Foundation Πιστοποιητικό εγγραφής άδειας επιχείρησης.","8":"Γιατί το WOTC συμμετέχει ενεργά σε παγκόσμια φιλανθρωπικά ιδρύματα, σκορπίζοντας την αγάπη τους στον κόσμο.","9":"Αυτό το πιστοποιητικό έχει εγκριθεί και αριθμηθεί από το Γραφείο του Υπουργείου Εξωτερικών του Κολοράντο.","10":"Στο μέλλον, το WOTC θα συμμετέχει στα μεγάλα φιλανθρωπικά ταμεία του κόσμου και θα βοηθά περισσότερους ανθρώπους.","11":"Το πιστοποιητικό του φιλανθρωπικού ιδρύματος προσφέρει επίσης καλύτερη προστασία των περιουσιακών στοιχείων σε όλα τα μέλη της εταιρείας.","12":"Ελέγξτε τον αριθμό πιστοποιητικού στον επίσημο ιστότοπο του Υπουργού Εξωτερικών του Κολοράντο για να δείτε τα στοιχεία της εταιρείας.","13":"Στο βίντεο βλέπουμε τα μέλη της ομάδας WOTC και το PALM BEACH CHRISTIAN PREPARATORY SCHOOL στη Φλόριντα των ΗΠΑ να διαπραγματεύονται μια προκαταρκτική συνεργασία. Το WOTC χορηγεί σχολεία. Και βοηθήστε κάθε μαθητή στο σχολείο να μειώσει τον ακαδημαϊκό του φόρτο. Συμβολή στον κλάδο της εκπαίδευσης.","14":"Φιλανθρωπικές δραστηριότητες που πραγματοποιούνται από μέλη της ομάδας WOTC σε όλο τον κόσμο. ","15":"Προσπαθώντας να βοηθήσω περισσότερους ανθρώπους. Είναι σαν μια αχτίδα φωτός στην αυγή. Αφήστε το φως μας να λάμψει σε περισσότερους ανθρώπους.Μην εκπλαγείτε αν δείτε ένα μέλος της ομάδας WOTC να περνάει από την πόρτα σας μια μέρα. Γιατί είμαστε ήδη δημοφιλείς σε όλο τον κόσμο. Γνωρίζουμε ότι πολλοί ανταγωνιστές μας βλάπτουν συχνά συκοφαντώντας και δημιουργώντας φήμες. Αλλά αφήσαμε αυτές τις φήμες να πεθάνουν μέσω της δύναμης της αλληλεγγύης. Το WOTC δεν έχει απογοητεύσει ποτέ κανέναν.","16":"Ευχαριστούμε όλα τα μέλη που εμπιστεύονται και υποστηρίζουν το WOTC. Ας συγχαρούμε την επιτυχή ίδρυση του φιλανθρωπικού ιδρύματος WOTC.","17":"Επίσημος ιστότοπος ερωτημάτων πιστοποιητικού MSB:","18":"https://www.fincen.gov/msb-state-selector","19":"Επίσημος ιστότοπος για έρευνα άδειας επιχείρησης:","20":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","21":"Επίσημος ιστότοπος του ιδρύματος:","22":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","23":"Το δικαίωμα ερμηνείας όλου του παραπάνω περιεχομένου ανήκει στην World Over The Counter Limited","24":"Οι άδειες MSB των ΗΠΑ είναι οικονομικές άδειες που ρυθμίζονται και εκδίδονται από το Υπουργείο Οικονομικών των Ηνωμένων Πολιτειών, κυρίως για επιχειρήσεις και εταιρείες που σχετίζονται με χρηματικές υπηρεσίες, συμπεριλαμβανομένων συναλλαγών σε ψηφιακά νομίσματα, εικονικά νομίσματα, έκδοση ICO, συνάλλαγμα, διεθνή εμβάσματα κ.λπ."},"joinus":{"1":"Το World Over The Counter καλωσορίζει οποιονδήποτε να επικοινωνήσει και να συμμετάσχει στην κοινότητα κρυπτονομισμάτων. Είτε θέλετε να αγοράσετε και να πουλήσετε κρυπτονομίσματα είτε να μάθετε περισσότερα για το bitcoin και τα κρυπτονομίσματα, το World Over The Counter θα κάνει το καλύτερο δυνατό.","2":"Εάν έχετε ερωτήσεις ή σχόλια, στείλτε μας email ή καλέστε μας ανά πάσα στιγμή. Ενθαρρύνουμε όλους τους πελάτες μας να συμμετάσχουν στην κοινότητα κρυπτονομισμάτων μας και να την προωθήσουν.","3":"Το World Over The Counter έχει δεσμευτεί να μειώσει το κόστος και τους περιορισμούς συναλλαγών, παρέχοντας στους πελάτες χαμηλότερα όρια συναλλαγών στη μεγαλύτερη πλειονότητα των εξωχρηματιστηριακών πλατφορμών συναλλαγών, και κάθε ποσό συναλλαγής που μπορούμε να σας προσφέρουμε είναι η σωστή συμφωνία. ότι το USDT και το κρυπτονόμισμα μπορούν να χρησιμοποιηθούν για όλους».","4":"«Προς το παρόν, περισσότεροι από 1 δισεκατομμύριο άνθρωποι σε όλο τον κόσμο δεν έχουν ή δεν διαθέτουν τραπεζικές υπηρεσίες, αλλά οι περισσότεροι από αυτούς έχουν πρόσβαση σε έξυπνα τηλέφωνα».","5":"«Μπορούν πάντα να χρησιμοποιούν πορτοφόλια έξυπνων τηλεφώνων, έτσι ώστε τα αποκεντρωμένα κρυπτονομίσματα να προσφέρουν τη μεγαλύτερη αξία για αυτούς - και το World Over The Counter θα συνεχίσει να στοχεύει στην προώθηση των κρυπτονομισμάτων προς την καθολική πρόσβαση».","6":"«Τόσο online όσο και εκτός σύνδεσης, το World Over The Counter έχει δεσμευτεί να αναπτύξει μια ενεργή και διαδραστική κοινότητα χρηστών κρυπτονομισμάτων, να αναπτύσσει και να συμμετέχει στην παγκόσμια κοινότητα του bitcoin και των κρυπτονομισμάτων μέσω γνώσης και επικοινωνίας».","7":"Είτε είστε αρχάριος στα κρυπτονομίσματα είτε ανώτερος εμπειρογνώμονας, σας καλωσορίζουμε!","8":"World Over The Counter, παρέχετε τις μεθόδους επικοινωνίας σας και απλές πληροφορίες για το πώς να σας βοηθήσουμε και θα σας απαντήσουμε το συντομότερο δυνατό.","9":"E-mail：worldoverthecounter@gmail.com","10":""},"rules":{"1":"Οροι χρήσης,","2":"Όταν αγοράζετε USDT, μην χρησιμοποιείτε ποτέ διεύθυνση πορτοφολιού που δεν σας ανήκει. Χρησιμοποιήστε τη διεύθυνση του πορτοφολιού σας. Μην στέλνετε USDT σε κάποιον ύποπτο για απάτη!","3":"Όταν συμφωνείτε με τους Όρους Χρήσης μας, δηλαδή, συμφωνείτε με τη Δήλωση Συλλογής Προσωπικών Δεδομένων και την Πολιτική Απορρήτου, την Πολιτική Απορρήτου και την Πολιτική Cookies.","4":"Δεν θα παρέχουν υπηρεσίες, εξοπλισμό και άλλα θέματα για άτομα κάτω των 18 ετών. Εάν είστε κάτω των 18 ετών και χρησιμοποιείτε τον ιστότοπό μας, θα πρέπει να επικοινωνήσετε με το άτομο στο οποίο έχετε την επιμέλεια για να ασκήσετε την κατάλληλη πρόσβαση, διόρθωση, ακύρωση και δικαιώματα αντίρρησης».Κανόνες συναλλαγής","5":"Κανόνες συναλλαγών","6":"Το Worldotc είναι ένα αμερικανικό ανταλλακτήριο MSB - πιστοποιημένο κρυπτονόμισμα εξωχρηματιστηριακό. Η πλατφόρμα συναλλαγών USDT και η παγκόσμια πλατφόρμα κρυπτονομισμάτων παρέχει στους χρήστες ακρίβεια και ευκολία συναλλαγών. Εισαγάγετε την ποσότητα του εικονικού νομίσματος που θέλετε να αγοράσετε. ","7":"Τα κέρδη διακανονίζονται κάθε 3 ώρες και κάθε κέρδος θα είναι το 0,4% της επένδυσής σας.","8":"Διακανονισμός έως και 8 φορές την ημέρα, μέγιστες αποδοχές 3,2%!","9":"Η ταχύτερη επένδυση 23 ημερών διπλασιάζεται!","10":"Μέγιστο μηνιαίο κέρδος 1.572 φορές!","11":"Κανόνες ανάληψης επαναφόρτισης,","12":"Δεσμεύστε τη διεύθυνσή σας TRC20 για ανάληψη, 24 ώρες την ημέρα με χρέωση ανάληψης 3%.","13":"Ο χρόνος απόσυρσης είναι 1 λεπτό.","14":"Λάβετε υπόψη ότι μόνο ένας επενδυτικός λογαριασμός μπορεί να δεσμευτεί ανά διεύθυνση TRC20.","15":"Επαναφόρτιση με το νόμισμα ή το πορτοφόλι σας με ελάχιστη επένδυση 11 USDT και ελάχιστη ανάληψη 5 USDT.","16":"Κανόνας πρόσκλησης,","17":"Οι φίλοι σας κερδίζουν χρήματα επενδύοντας στα έσοδα από προμήθειες που μπορείτε να κερδίσετε:","18":"Το Lv1 προσκάλεσε απευθείας χρήστες (15% του συνολικού κέρδους συναλλαγών).","19":"Lv2 L1 προσκεκλημένοι χρήστες (10% του συνολικού κέρδους συναλλαγής).","20":"Lv3 L2 προσκεκλημένοι χρήστες (5% του συνολικού κέρδους συναλλαγής).","21":"«Πρόσκληση ανταμοιβών εργασιών».","22":"Για κάθε 10 μέλη LV1 που προσκαλούνται να ολοκληρώσουν την επένδυση, μια ανταμοιβή πρόσκλησης 10 USD","23":"Σημείωση: Κάθε προσκεκλημένος υφιστάμενος πρέπει να ολοκληρώσει την επένδυση LV1 για να θεωρείται έγκυρος χρήστης.","24":"Υπενθύμιση: Εάν έχετε οποιεσδήποτε ερωτήσεις σχετικά με τις ανταμοιβές και τους κανόνες, επικοινωνήστε με τον υπεύθυνο εξυπηρέτησης πελατών"}},"serverCodes":{"401":"Οι παράμετροι δεν είναι σωστές.","406":"«ανεπαρκής ισορροπία».","407":"Εσφαλμένο ποσό συναλλαγής.","408":"Μη έγκυρη παράμετρος.","409":"Ο κωδικός πρόσβασης αποτελείται από ένα γράμμα συν έναν αριθμό,","410":"Σφάλμα κωδικού επικύρωσης.","411":"Σφάλμα ονόματος χρήστη ή κωδικού πρόσβασης,","412":"Πάγωμα λογαριασμού, επικοινωνήστε με την εξυπηρέτηση πελατών.","413":"Συμπληρώστε σωστά τον αριθμό του κινητού σας τηλεφώνου.","414":"Ο αριθμός τηλεφώνου έχει καταχωρηθεί, επιλέξτε άλλο αριθμό τηλεφώνου.","415":"Λήψη διαστήματος συχνότητας κωδικού ελέγχου ταυτότητας 1 λεπτού.","416":"Συχνά αιτήματα, δοκιμάστε ξανά αργότερα.","417":"Ο κωδικός ελέγχου ταυτότητας δεν είναι έγκυρος, στείλτε ξανά τον κωδικό ελέγχου ταυτότητας.","418":"Εάν το τηλέφωνο δεν έχει επαληθευτεί ή η επαλήθευση έχει λήξει, ξεκινήστε ξανά την εγγραφή.","419":"Το ψευδώνυμο αποτελείται από 2 ~ 8-bit χαρακτήρες.","420":"Παρακαλώ εισάγετε τον σωστό κωδικό πρόσκλησης.","421":"Ο αριθμός τηλεφώνου δεν έχει καταχωρηθεί και δεν χρειάζεται να ανακτηθεί κωδικός πρόσβασης.","422":"Επανάληψη αίτησης,","423":"Ο κωδικός ελέγχου ταυτότητας εστάλη με επιτυχία.","424":"Ο αριθμός των κωδικών επαλήθευσης που στάλθηκαν εκείνη την ημέρα έχει φτάσει στο ανώτατο όριο.","425":"Αποτυχία αποστολής κωδικού επαλήθευσης","426":"Η διεύθυνση δεν μπορεί να τροποποιηθεί, επικοινωνήστε με την εξυπηρέτηση πελατών","427":"η επαλήθευση απέτυχε","428":"Έχετε ήδη δεσμεύσει τον Επαληθευτή Google","429":"Η επαλήθευση του αρχικού κωδικού πρόσβασης απέτυχε","500":"Εξαίρεση δικτύου, δοκιμάστε ξανά αργότερα.","501":"Αναστολή σύνδεσης,","502":"Αναστολή Εγγραφής,","503":"Δεν έχω συνδεθεί.","605":"Παρακαλώ εισάγετε τη σωστή ποσότητα. ","606":"Ο αριθμός των σημειώσεων είναι μικρότερος από τον ελάχιστο.","607":"«Ο αριθμός των προσφορών είναι μεγαλύτερος από τον μέγιστο».","608":"Παρακαλώ εισάγετε τη σωστή διεύθυνση προσφοράς.","609":"Λανθασμένη μορφή διεύθυνσης.","610":"Σφάλμα αρχικού κωδικού πρόσβασης,","706":"Αυτή η διεύθυνση έχει χρησιμοποιηθεί, αντικαταστήστε.","708":"Αυτός ο χρήστης δεν υπάρχει.","712":"Παρακαλώ επαληθεύστε το πραγματικό σας όνομα και στη συνέχεια αποσύρετε.","713":"«Προς το παρόν δεν καταβάλλονται έσοδα».","714":"Έλαβε το βραβείο τρέχουσας εργασίας.","715":"«Μη τήρηση των προϋποθέσεων παραλαβής»"}}')
    },
    "30e5": function(e, a, t) {
        var i = t("24fb");
        a = i(!1), a.push([e.i, '@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */.box{width:100%;height:100%;min-height:100vh;background-color:#ebeaea}.box .container{margin-top:%?30?%;padding:0 %?30?%}.box .container .list{padding:%?30?%;border-radius:%?20?%;background-color:#fff}.box .container .list .item{border-bottom:%?2?% solid #d9d9d9;color:#a4a4a4;position:relative}.box .container .list .item .div{width:33%}.box .container .list .item.title{display:flex;align-items:center;justify-content:space-between;min-height:%?70?%;color:#000;font-size:%?26?%;font-weight:700}.box .container .list .item.title .amount{color:#000}.box .container .list .item:last-child{border-bottom:0}.box .container .list .item .cont{display:flex;align-items:center;justify-content:space-between;height:%?80?%}.box .container .list .item .info .time{padding:%?10?% 0}.box .container .list .item .time{font-size:%?24?%}.box .container .list .item .amount{font-size:%?26?%;color:#facd19}.box .container .list .item .status{font-size:%?24?%}.box .container .list .item .img{width:%?40?%;height:%?40?%;position:absolute;right:0;display:flex;justify-content:flex-end;align-items:center}.box .container .list .item .img .pour{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.box .container .list .item img{width:%?14?%;height:%?8?%}.box .container .more_btn{margin-top:%?20?%}.box .container .more_btn .btn{background-color:#facd19}.uni-input{width:100%}body{font-family:webfont;font-size:%?28?%}@font-face{font-family:webfont;font-display:swap;src:url(//at.alicdn.com/t/webfont_g1z399sgcm9.eot);\r\n  /* IE9*/src:url(//at.alicdn.com/t/webfont_g1z399sgcm9.eot#iefix) format("embedded-opentype"),url(//at.alicdn.com/t/webfont_g1z399sgcm9.woff2) format("woff2"),url(//at.alicdn.com/t/webfont_g1z399sgcm9.woff) format("woff"),url(//at.alicdn.com/t/webfont_g1z399sgcm9.ttf) format("truetype"),url(//at.alicdn.com/t/webfont_g1z399sgcm9.svg#Alibaba-PuHuiTi-Regular) format("svg")\r\n  /* iOS 4.1- */}.web-font{font-family:webfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.u-relative,\r\n.u-rela{position:relative}.u-absolute,\r\n.u-abso{position:absolute}uni-image{display:inline-block}uni-view,\r\nuni-text{box-sizing:border-box}.u-font-xs{font-size:%?22?%}.u-font-sm{font-size:%?26?%}.u-font-md{font-size:%?28?%}.u-font-lg{font-size:%?30?%}.u-font-xl{font-size:%?34?%}.u-flex{display:flex;flex-direction:row;align-items:center}.u-flex-wrap{flex-wrap:wrap}.u-flex-nowrap{flex-wrap:nowrap}.u-col-center{align-items:center}.u-col-top{align-items:flex-start}.u-col-bottom{align-items:flex-end}.u-row-center{justify-content:center}.u-row-left{justify-content:flex-start}.u-row-right{justify-content:flex-end}.u-row-between{justify-content:space-between}.u-row-around{justify-content:space-around}.u-text-left{text-align:left}.u-text-center{text-align:center}.u-text-right{text-align:right}.u-flex-col{display:flex;flex-direction:column}.u-flex-0{flex:0}.u-flex-1{flex:1}.u-flex-2{flex:2}.u-flex-3{flex:3}.u-flex-4{flex:4}.u-flex-5{flex:5}.u-flex-6{flex:6}.u-flex-7{flex:7}.u-flex-8{flex:8}.u-flex-9{flex:9}.u-flex-10{flex:10}.u-flex-11{flex:11}.u-flex-12{flex:12}.u-font-9{font-size:9px}.u-font-10{font-size:10px}.u-font-11{font-size:11px}.u-font-12{font-size:12px}.u-font-13{font-size:13px}.u-font-14{font-size:14px}.u-font-15{font-size:15px}.u-font-16{font-size:16px}.u-font-17{font-size:17px}.u-font-18{font-size:18px}.u-font-19{font-size:19px}.u-font-20{font-size:%?20?%}.u-font-21{font-size:%?21?%}.u-font-22{font-size:%?22?%}.u-font-23{font-size:%?23?%}.u-font-24{font-size:%?24?%}.u-font-25{font-size:%?25?%}.u-font-26{font-size:%?26?%}.u-font-27{font-size:%?27?%}.u-font-28{font-size:%?28?%}.u-font-29{font-size:%?29?%}.u-font-30{font-size:%?30?%}.u-font-31{font-size:%?31?%}.u-font-32{font-size:%?32?%}.u-font-33{font-size:%?33?%}.u-font-34{font-size:%?34?%}.u-font-35{font-size:%?35?%}.u-font-36{font-size:%?36?%}.u-font-37{font-size:%?37?%}.u-font-38{font-size:%?38?%}.u-font-39{font-size:%?39?%}.u-font-40{font-size:%?40?%}.u-margin-0, .u-m-0{margin:%?0?%!important}.u-padding-0, .u-p-0{padding:%?0?%!important}.u-m-l-0{margin-left:%?0?%!important}.u-p-l-0{padding-left:%?0?%!important}.u-margin-left-0{margin-left:%?0?%!important}.u-padding-left-0{padding-left:%?0?%!important}.u-m-t-0{margin-top:%?0?%!important}.u-p-t-0{padding-top:%?0?%!important}.u-margin-top-0{margin-top:%?0?%!important}.u-padding-top-0{padding-top:%?0?%!important}.u-m-r-0{margin-right:%?0?%!important}.u-p-r-0{padding-right:%?0?%!important}.u-margin-right-0{margin-right:%?0?%!important}.u-padding-right-0{padding-right:%?0?%!important}.u-m-b-0{margin-bottom:%?0?%!important}.u-p-b-0{padding-bottom:%?0?%!important}.u-margin-bottom-0{margin-bottom:%?0?%!important}.u-padding-bottom-0{padding-bottom:%?0?%!important}.u-margin-2, .u-m-2{margin:%?2?%!important}.u-padding-2, .u-p-2{padding:%?2?%!important}.u-m-l-2{margin-left:%?2?%!important}.u-p-l-2{padding-left:%?2?%!important}.u-margin-left-2{margin-left:%?2?%!important}.u-padding-left-2{padding-left:%?2?%!important}.u-m-t-2{margin-top:%?2?%!important}.u-p-t-2{padding-top:%?2?%!important}.u-margin-top-2{margin-top:%?2?%!important}.u-padding-top-2{padding-top:%?2?%!important}.u-m-r-2{margin-right:%?2?%!important}.u-p-r-2{padding-right:%?2?%!important}.u-margin-right-2{margin-right:%?2?%!important}.u-padding-right-2{padding-right:%?2?%!important}.u-m-b-2{margin-bottom:%?2?%!important}.u-p-b-2{padding-bottom:%?2?%!important}.u-margin-bottom-2{margin-bottom:%?2?%!important}.u-padding-bottom-2{padding-bottom:%?2?%!important}.u-margin-4, .u-m-4{margin:%?4?%!important}.u-padding-4, .u-p-4{padding:%?4?%!important}.u-m-l-4{margin-left:%?4?%!important}.u-p-l-4{padding-left:%?4?%!important}.u-margin-left-4{margin-left:%?4?%!important}.u-padding-left-4{padding-left:%?4?%!important}.u-m-t-4{margin-top:%?4?%!important}.u-p-t-4{padding-top:%?4?%!important}.u-margin-top-4{margin-top:%?4?%!important}.u-padding-top-4{padding-top:%?4?%!important}.u-m-r-4{margin-right:%?4?%!important}.u-p-r-4{padding-right:%?4?%!important}.u-margin-right-4{margin-right:%?4?%!important}.u-padding-right-4{padding-right:%?4?%!important}.u-m-b-4{margin-bottom:%?4?%!important}.u-p-b-4{padding-bottom:%?4?%!important}.u-margin-bottom-4{margin-bottom:%?4?%!important}.u-padding-bottom-4{padding-bottom:%?4?%!important}.u-margin-5, .u-m-5{margin:%?5?%!important}.u-padding-5, .u-p-5{padding:%?5?%!important}.u-m-l-5{margin-left:%?5?%!important}.u-p-l-5{padding-left:%?5?%!important}.u-margin-left-5{margin-left:%?5?%!important}.u-padding-left-5{padding-left:%?5?%!important}.u-m-t-5{margin-top:%?5?%!important}.u-p-t-5{padding-top:%?5?%!important}.u-margin-top-5{margin-top:%?5?%!important}.u-padding-top-5{padding-top:%?5?%!important}.u-m-r-5{margin-right:%?5?%!important}.u-p-r-5{padding-right:%?5?%!important}.u-margin-right-5{margin-right:%?5?%!important}.u-padding-right-5{padding-right:%?5?%!important}.u-m-b-5{margin-bottom:%?5?%!important}.u-p-b-5{padding-bottom:%?5?%!important}.u-margin-bottom-5{margin-bottom:%?5?%!important}.u-padding-bottom-5{padding-bottom:%?5?%!important}.u-margin-6, .u-m-6{margin:%?6?%!important}.u-padding-6, .u-p-6{padding:%?6?%!important}.u-m-l-6{margin-left:%?6?%!important}.u-p-l-6{padding-left:%?6?%!important}.u-margin-left-6{margin-left:%?6?%!important}.u-padding-left-6{padding-left:%?6?%!important}.u-m-t-6{margin-top:%?6?%!important}.u-p-t-6{padding-top:%?6?%!important}.u-margin-top-6{margin-top:%?6?%!important}.u-padding-top-6{padding-top:%?6?%!important}.u-m-r-6{margin-right:%?6?%!important}.u-p-r-6{padding-right:%?6?%!important}.u-margin-right-6{margin-right:%?6?%!important}.u-padding-right-6{padding-right:%?6?%!important}.u-m-b-6{margin-bottom:%?6?%!important}.u-p-b-6{padding-bottom:%?6?%!important}.u-margin-bottom-6{margin-bottom:%?6?%!important}.u-padding-bottom-6{padding-bottom:%?6?%!important}.u-margin-8, .u-m-8{margin:%?8?%!important}.u-padding-8, .u-p-8{padding:%?8?%!important}.u-m-l-8{margin-left:%?8?%!important}.u-p-l-8{padding-left:%?8?%!important}.u-margin-left-8{margin-left:%?8?%!important}.u-padding-left-8{padding-left:%?8?%!important}.u-m-t-8{margin-top:%?8?%!important}.u-p-t-8{padding-top:%?8?%!important}.u-margin-top-8{margin-top:%?8?%!important}.u-padding-top-8{padding-top:%?8?%!important}.u-m-r-8{margin-right:%?8?%!important}.u-p-r-8{padding-right:%?8?%!important}.u-margin-right-8{margin-right:%?8?%!important}.u-padding-right-8{padding-right:%?8?%!important}.u-m-b-8{margin-bottom:%?8?%!important}.u-p-b-8{padding-bottom:%?8?%!important}.u-margin-bottom-8{margin-bottom:%?8?%!important}.u-padding-bottom-8{padding-bottom:%?8?%!important}.u-margin-10, .u-m-10{margin:%?10?%!important}.u-padding-10, .u-p-10{padding:%?10?%!important}.u-m-l-10{margin-left:%?10?%!important}.u-p-l-10{padding-left:%?10?%!important}.u-margin-left-10{margin-left:%?10?%!important}.u-padding-left-10{padding-left:%?10?%!important}.u-m-t-10{margin-top:%?10?%!important}.u-p-t-10{padding-top:%?10?%!important}.u-margin-top-10{margin-top:%?10?%!important}.u-padding-top-10{padding-top:%?10?%!important}.u-m-r-10{margin-right:%?10?%!important}.u-p-r-10{padding-right:%?10?%!important}.u-margin-right-10{margin-right:%?10?%!important}.u-padding-right-10{padding-right:%?10?%!important}.u-m-b-10{margin-bottom:%?10?%!important}.u-p-b-10{padding-bottom:%?10?%!important}.u-margin-bottom-10{margin-bottom:%?10?%!important}.u-padding-bottom-10{padding-bottom:%?10?%!important}.u-margin-12, .u-m-12{margin:%?12?%!important}.u-padding-12, .u-p-12{padding:%?12?%!important}.u-m-l-12{margin-left:%?12?%!important}.u-p-l-12{padding-left:%?12?%!important}.u-margin-left-12{margin-left:%?12?%!important}.u-padding-left-12{padding-left:%?12?%!important}.u-m-t-12{margin-top:%?12?%!important}.u-p-t-12{padding-top:%?12?%!important}.u-margin-top-12{margin-top:%?12?%!important}.u-padding-top-12{padding-top:%?12?%!important}.u-m-r-12{margin-right:%?12?%!important}.u-p-r-12{padding-right:%?12?%!important}.u-margin-right-12{margin-right:%?12?%!important}.u-padding-right-12{padding-right:%?12?%!important}.u-m-b-12{margin-bottom:%?12?%!important}.u-p-b-12{padding-bottom:%?12?%!important}.u-margin-bottom-12{margin-bottom:%?12?%!important}.u-padding-bottom-12{padding-bottom:%?12?%!important}.u-margin-14, .u-m-14{margin:%?14?%!important}.u-padding-14, .u-p-14{padding:%?14?%!important}.u-m-l-14{margin-left:%?14?%!important}.u-p-l-14{padding-left:%?14?%!important}.u-margin-left-14{margin-left:%?14?%!important}.u-padding-left-14{padding-left:%?14?%!important}.u-m-t-14{margin-top:%?14?%!important}.u-p-t-14{padding-top:%?14?%!important}.u-margin-top-14{margin-top:%?14?%!important}.u-padding-top-14{padding-top:%?14?%!important}.u-m-r-14{margin-right:%?14?%!important}.u-p-r-14{padding-right:%?14?%!important}.u-margin-right-14{margin-right:%?14?%!important}.u-padding-right-14{padding-right:%?14?%!important}.u-m-b-14{margin-bottom:%?14?%!important}.u-p-b-14{padding-bottom:%?14?%!important}.u-margin-bottom-14{margin-bottom:%?14?%!important}.u-padding-bottom-14{padding-bottom:%?14?%!important}.u-margin-15, .u-m-15{margin:%?15?%!important}.u-padding-15, .u-p-15{padding:%?15?%!important}.u-m-l-15{margin-left:%?15?%!important}.u-p-l-15{padding-left:%?15?%!important}.u-margin-left-15{margin-left:%?15?%!important}.u-padding-left-15{padding-left:%?15?%!important}.u-m-t-15{margin-top:%?15?%!important}.u-p-t-15{padding-top:%?15?%!important}.u-margin-top-15{margin-top:%?15?%!important}.u-padding-top-15{padding-top:%?15?%!important}.u-m-r-15{margin-right:%?15?%!important}.u-p-r-15{padding-right:%?15?%!important}.u-margin-right-15{margin-right:%?15?%!important}.u-padding-right-15{padding-right:%?15?%!important}.u-m-b-15{margin-bottom:%?15?%!important}.u-p-b-15{padding-bottom:%?15?%!important}.u-margin-bottom-15{margin-bottom:%?15?%!important}.u-padding-bottom-15{padding-bottom:%?15?%!important}.u-margin-16, .u-m-16{margin:%?16?%!important}.u-padding-16, .u-p-16{padding:%?16?%!important}.u-m-l-16{margin-left:%?16?%!important}.u-p-l-16{padding-left:%?16?%!important}.u-margin-left-16{margin-left:%?16?%!important}.u-padding-left-16{padding-left:%?16?%!important}.u-m-t-16{margin-top:%?16?%!important}.u-p-t-16{padding-top:%?16?%!important}.u-margin-top-16{margin-top:%?16?%!important}.u-padding-top-16{padding-top:%?16?%!important}.u-m-r-16{margin-right:%?16?%!important}.u-p-r-16{padding-right:%?16?%!important}.u-margin-right-16{margin-right:%?16?%!important}.u-padding-right-16{padding-right:%?16?%!important}.u-m-b-16{margin-bottom:%?16?%!important}.u-p-b-16{padding-bottom:%?16?%!important}.u-margin-bottom-16{margin-bottom:%?16?%!important}.u-padding-bottom-16{padding-bottom:%?16?%!important}.u-margin-18, .u-m-18{margin:%?18?%!important}.u-padding-18, .u-p-18{padding:%?18?%!important}.u-m-l-18{margin-left:%?18?%!important}.u-p-l-18{padding-left:%?18?%!important}.u-margin-left-18{margin-left:%?18?%!important}.u-padding-left-18{padding-left:%?18?%!important}.u-m-t-18{margin-top:%?18?%!important}.u-p-t-18{padding-top:%?18?%!important}.u-margin-top-18{margin-top:%?18?%!important}.u-padding-top-18{padding-top:%?18?%!important}.u-m-r-18{margin-right:%?18?%!important}.u-p-r-18{padding-right:%?18?%!important}.u-margin-right-18{margin-right:%?18?%!important}.u-padding-right-18{padding-right:%?18?%!important}.u-m-b-18{margin-bottom:%?18?%!important}.u-p-b-18{padding-bottom:%?18?%!important}.u-margin-bottom-18{margin-bottom:%?18?%!important}.u-padding-bottom-18{padding-bottom:%?18?%!important}.u-margin-20, .u-m-20{margin:%?20?%!important}.u-padding-20, .u-p-20{padding:%?20?%!important}.u-m-l-20{margin-left:%?20?%!important}.u-p-l-20{padding-left:%?20?%!important}.u-margin-left-20{margin-left:%?20?%!important}.u-padding-left-20{padding-left:%?20?%!important}.u-m-t-20{margin-top:%?20?%!important}.u-p-t-20{padding-top:%?20?%!important}.u-margin-top-20{margin-top:%?20?%!important}.u-padding-top-20{padding-top:%?20?%!important}.u-m-r-20{margin-right:%?20?%!important}.u-p-r-20{padding-right:%?20?%!important}.u-margin-right-20{margin-right:%?20?%!important}.u-padding-right-20{padding-right:%?20?%!important}.u-m-b-20{margin-bottom:%?20?%!important}.u-p-b-20{padding-bottom:%?20?%!important}.u-margin-bottom-20{margin-bottom:%?20?%!important}.u-padding-bottom-20{padding-bottom:%?20?%!important}.u-margin-22, .u-m-22{margin:%?22?%!important}.u-padding-22, .u-p-22{padding:%?22?%!important}.u-m-l-22{margin-left:%?22?%!important}.u-p-l-22{padding-left:%?22?%!important}.u-margin-left-22{margin-left:%?22?%!important}.u-padding-left-22{padding-left:%?22?%!important}.u-m-t-22{margin-top:%?22?%!important}.u-p-t-22{padding-top:%?22?%!important}.u-margin-top-22{margin-top:%?22?%!important}.u-padding-top-22{padding-top:%?22?%!important}.u-m-r-22{margin-right:%?22?%!important}.u-p-r-22{padding-right:%?22?%!important}.u-margin-right-22{margin-right:%?22?%!important}.u-padding-right-22{padding-right:%?22?%!important}.u-m-b-22{margin-bottom:%?22?%!important}.u-p-b-22{padding-bottom:%?22?%!important}.u-margin-bottom-22{margin-bottom:%?22?%!important}.u-padding-bottom-22{padding-bottom:%?22?%!important}.u-margin-24, .u-m-24{margin:%?24?%!important}.u-padding-24, .u-p-24{padding:%?24?%!important}.u-m-l-24{margin-left:%?24?%!important}.u-p-l-24{padding-left:%?24?%!important}.u-margin-left-24{margin-left:%?24?%!important}.u-padding-left-24{padding-left:%?24?%!important}.u-m-t-24{margin-top:%?24?%!important}.u-p-t-24{padding-top:%?24?%!important}.u-margin-top-24{margin-top:%?24?%!important}.u-padding-top-24{padding-top:%?24?%!important}.u-m-r-24{margin-right:%?24?%!important}.u-p-r-24{padding-right:%?24?%!important}.u-margin-right-24{margin-right:%?24?%!important}.u-padding-right-24{padding-right:%?24?%!important}.u-m-b-24{margin-bottom:%?24?%!important}.u-p-b-24{padding-bottom:%?24?%!important}.u-margin-bottom-24{margin-bottom:%?24?%!important}.u-padding-bottom-24{padding-bottom:%?24?%!important}.u-margin-25, .u-m-25{margin:%?25?%!important}.u-padding-25, .u-p-25{padding:%?25?%!important}.u-m-l-25{margin-left:%?25?%!important}.u-p-l-25{padding-left:%?25?%!important}.u-margin-left-25{margin-left:%?25?%!important}.u-padding-left-25{padding-left:%?25?%!important}.u-m-t-25{margin-top:%?25?%!important}.u-p-t-25{padding-top:%?25?%!important}.u-margin-top-25{margin-top:%?25?%!important}.u-padding-top-25{padding-top:%?25?%!important}.u-m-r-25{margin-right:%?25?%!important}.u-p-r-25{padding-right:%?25?%!important}.u-margin-right-25{margin-right:%?25?%!important}.u-padding-right-25{padding-right:%?25?%!important}.u-m-b-25{margin-bottom:%?25?%!important}.u-p-b-25{padding-bottom:%?25?%!important}.u-margin-bottom-25{margin-bottom:%?25?%!important}.u-padding-bottom-25{padding-bottom:%?25?%!important}.u-margin-26, .u-m-26{margin:%?26?%!important}.u-padding-26, .u-p-26{padding:%?26?%!important}.u-m-l-26{margin-left:%?26?%!important}.u-p-l-26{padding-left:%?26?%!important}.u-margin-left-26{margin-left:%?26?%!important}.u-padding-left-26{padding-left:%?26?%!important}.u-m-t-26{margin-top:%?26?%!important}.u-p-t-26{padding-top:%?26?%!important}.u-margin-top-26{margin-top:%?26?%!important}.u-padding-top-26{padding-top:%?26?%!important}.u-m-r-26{margin-right:%?26?%!important}.u-p-r-26{padding-right:%?26?%!important}.u-margin-right-26{margin-right:%?26?%!important}.u-padding-right-26{padding-right:%?26?%!important}.u-m-b-26{margin-bottom:%?26?%!important}.u-p-b-26{padding-bottom:%?26?%!important}.u-margin-bottom-26{margin-bottom:%?26?%!important}.u-padding-bottom-26{padding-bottom:%?26?%!important}.u-margin-28, .u-m-28{margin:%?28?%!important}.u-padding-28, .u-p-28{padding:%?28?%!important}.u-m-l-28{margin-left:%?28?%!important}.u-p-l-28{padding-left:%?28?%!important}.u-margin-left-28{margin-left:%?28?%!important}.u-padding-left-28{padding-left:%?28?%!important}.u-m-t-28{margin-top:%?28?%!important}.u-p-t-28{padding-top:%?28?%!important}.u-margin-top-28{margin-top:%?28?%!important}.u-padding-top-28{padding-top:%?28?%!important}.u-m-r-28{margin-right:%?28?%!important}.u-p-r-28{padding-right:%?28?%!important}.u-margin-right-28{margin-right:%?28?%!important}.u-padding-right-28{padding-right:%?28?%!important}.u-m-b-28{margin-bottom:%?28?%!important}.u-p-b-28{padding-bottom:%?28?%!important}.u-margin-bottom-28{margin-bottom:%?28?%!important}.u-padding-bottom-28{padding-bottom:%?28?%!important}.u-margin-30, .u-m-30{margin:%?30?%!important}.u-padding-30, .u-p-30{padding:%?30?%!important}.u-m-l-30{margin-left:%?30?%!important}.u-p-l-30{padding-left:%?30?%!important}.u-margin-left-30{margin-left:%?30?%!important}.u-padding-left-30{padding-left:%?30?%!important}.u-m-t-30{margin-top:%?30?%!important}.u-p-t-30{padding-top:%?30?%!important}.u-margin-top-30{margin-top:%?30?%!important}.u-padding-top-30{padding-top:%?30?%!important}.u-m-r-30{margin-right:%?30?%!important}.u-p-r-30{padding-right:%?30?%!important}.u-margin-right-30{margin-right:%?30?%!important}.u-padding-right-30{padding-right:%?30?%!important}.u-m-b-30{margin-bottom:%?30?%!important}.u-p-b-30{padding-bottom:%?30?%!important}.u-margin-bottom-30{margin-bottom:%?30?%!important}.u-padding-bottom-30{padding-bottom:%?30?%!important}.u-margin-32, .u-m-32{margin:%?32?%!important}.u-padding-32, .u-p-32{padding:%?32?%!important}.u-m-l-32{margin-left:%?32?%!important}.u-p-l-32{padding-left:%?32?%!important}.u-margin-left-32{margin-left:%?32?%!important}.u-padding-left-32{padding-left:%?32?%!important}.u-m-t-32{margin-top:%?32?%!important}.u-p-t-32{padding-top:%?32?%!important}.u-margin-top-32{margin-top:%?32?%!important}.u-padding-top-32{padding-top:%?32?%!important}.u-m-r-32{margin-right:%?32?%!important}.u-p-r-32{padding-right:%?32?%!important}.u-margin-right-32{margin-right:%?32?%!important}.u-padding-right-32{padding-right:%?32?%!important}.u-m-b-32{margin-bottom:%?32?%!important}.u-p-b-32{padding-bottom:%?32?%!important}.u-margin-bottom-32{margin-bottom:%?32?%!important}.u-padding-bottom-32{padding-bottom:%?32?%!important}.u-margin-34, .u-m-34{margin:%?34?%!important}.u-padding-34, .u-p-34{padding:%?34?%!important}.u-m-l-34{margin-left:%?34?%!important}.u-p-l-34{padding-left:%?34?%!important}.u-margin-left-34{margin-left:%?34?%!important}.u-padding-left-34{padding-left:%?34?%!important}.u-m-t-34{margin-top:%?34?%!important}.u-p-t-34{padding-top:%?34?%!important}.u-margin-top-34{margin-top:%?34?%!important}.u-padding-top-34{padding-top:%?34?%!important}.u-m-r-34{margin-right:%?34?%!important}.u-p-r-34{padding-right:%?34?%!important}.u-margin-right-34{margin-right:%?34?%!important}.u-padding-right-34{padding-right:%?34?%!important}.u-m-b-34{margin-bottom:%?34?%!important}.u-p-b-34{padding-bottom:%?34?%!important}.u-margin-bottom-34{margin-bottom:%?34?%!important}.u-padding-bottom-34{padding-bottom:%?34?%!important}.u-margin-35, .u-m-35{margin:%?35?%!important}.u-padding-35, .u-p-35{padding:%?35?%!important}.u-m-l-35{margin-left:%?35?%!important}.u-p-l-35{padding-left:%?35?%!important}.u-margin-left-35{margin-left:%?35?%!important}.u-padding-left-35{padding-left:%?35?%!important}.u-m-t-35{margin-top:%?35?%!important}.u-p-t-35{padding-top:%?35?%!important}.u-margin-top-35{margin-top:%?35?%!important}.u-padding-top-35{padding-top:%?35?%!important}.u-m-r-35{margin-right:%?35?%!important}.u-p-r-35{padding-right:%?35?%!important}.u-margin-right-35{margin-right:%?35?%!important}.u-padding-right-35{padding-right:%?35?%!important}.u-m-b-35{margin-bottom:%?35?%!important}.u-p-b-35{padding-bottom:%?35?%!important}.u-margin-bottom-35{margin-bottom:%?35?%!important}.u-padding-bottom-35{padding-bottom:%?35?%!important}.u-margin-36, .u-m-36{margin:%?36?%!important}.u-padding-36, .u-p-36{padding:%?36?%!important}.u-m-l-36{margin-left:%?36?%!important}.u-p-l-36{padding-left:%?36?%!important}.u-margin-left-36{margin-left:%?36?%!important}.u-padding-left-36{padding-left:%?36?%!important}.u-m-t-36{margin-top:%?36?%!important}.u-p-t-36{padding-top:%?36?%!important}.u-margin-top-36{margin-top:%?36?%!important}.u-padding-top-36{padding-top:%?36?%!important}.u-m-r-36{margin-right:%?36?%!important}.u-p-r-36{padding-right:%?36?%!important}.u-margin-right-36{margin-right:%?36?%!important}.u-padding-right-36{padding-right:%?36?%!important}.u-m-b-36{margin-bottom:%?36?%!important}.u-p-b-36{padding-bottom:%?36?%!important}.u-margin-bottom-36{margin-bottom:%?36?%!important}.u-padding-bottom-36{padding-bottom:%?36?%!important}.u-margin-38, .u-m-38{margin:%?38?%!important}.u-padding-38, .u-p-38{padding:%?38?%!important}.u-m-l-38{margin-left:%?38?%!important}.u-p-l-38{padding-left:%?38?%!important}.u-margin-left-38{margin-left:%?38?%!important}.u-padding-left-38{padding-left:%?38?%!important}.u-m-t-38{margin-top:%?38?%!important}.u-p-t-38{padding-top:%?38?%!important}.u-margin-top-38{margin-top:%?38?%!important}.u-padding-top-38{padding-top:%?38?%!important}.u-m-r-38{margin-right:%?38?%!important}.u-p-r-38{padding-right:%?38?%!important}.u-margin-right-38{margin-right:%?38?%!important}.u-padding-right-38{padding-right:%?38?%!important}.u-m-b-38{margin-bottom:%?38?%!important}.u-p-b-38{padding-bottom:%?38?%!important}.u-margin-bottom-38{margin-bottom:%?38?%!important}.u-padding-bottom-38{padding-bottom:%?38?%!important}.u-margin-40, .u-m-40{margin:%?40?%!important}.u-padding-40, .u-p-40{padding:%?40?%!important}.u-m-l-40{margin-left:%?40?%!important}.u-p-l-40{padding-left:%?40?%!important}.u-margin-left-40{margin-left:%?40?%!important}.u-padding-left-40{padding-left:%?40?%!important}.u-m-t-40{margin-top:%?40?%!important}.u-p-t-40{padding-top:%?40?%!important}.u-margin-top-40{margin-top:%?40?%!important}.u-padding-top-40{padding-top:%?40?%!important}.u-m-r-40{margin-right:%?40?%!important}.u-p-r-40{padding-right:%?40?%!important}.u-margin-right-40{margin-right:%?40?%!important}.u-padding-right-40{padding-right:%?40?%!important}.u-m-b-40{margin-bottom:%?40?%!important}.u-p-b-40{padding-bottom:%?40?%!important}.u-margin-bottom-40{margin-bottom:%?40?%!important}.u-padding-bottom-40{padding-bottom:%?40?%!important}.u-margin-42, .u-m-42{margin:%?42?%!important}.u-padding-42, .u-p-42{padding:%?42?%!important}.u-m-l-42{margin-left:%?42?%!important}.u-p-l-42{padding-left:%?42?%!important}.u-margin-left-42{margin-left:%?42?%!important}.u-padding-left-42{padding-left:%?42?%!important}.u-m-t-42{margin-top:%?42?%!important}.u-p-t-42{padding-top:%?42?%!important}.u-margin-top-42{margin-top:%?42?%!important}.u-padding-top-42{padding-top:%?42?%!important}.u-m-r-42{margin-right:%?42?%!important}.u-p-r-42{padding-right:%?42?%!important}.u-margin-right-42{margin-right:%?42?%!important}.u-padding-right-42{padding-right:%?42?%!important}.u-m-b-42{margin-bottom:%?42?%!important}.u-p-b-42{padding-bottom:%?42?%!important}.u-margin-bottom-42{margin-bottom:%?42?%!important}.u-padding-bottom-42{padding-bottom:%?42?%!important}.u-margin-44, .u-m-44{margin:%?44?%!important}.u-padding-44, .u-p-44{padding:%?44?%!important}.u-m-l-44{margin-left:%?44?%!important}.u-p-l-44{padding-left:%?44?%!important}.u-margin-left-44{margin-left:%?44?%!important}.u-padding-left-44{padding-left:%?44?%!important}.u-m-t-44{margin-top:%?44?%!important}.u-p-t-44{padding-top:%?44?%!important}.u-margin-top-44{margin-top:%?44?%!important}.u-padding-top-44{padding-top:%?44?%!important}.u-m-r-44{margin-right:%?44?%!important}.u-p-r-44{padding-right:%?44?%!important}.u-margin-right-44{margin-right:%?44?%!important}.u-padding-right-44{padding-right:%?44?%!important}.u-m-b-44{margin-bottom:%?44?%!important}.u-p-b-44{padding-bottom:%?44?%!important}.u-margin-bottom-44{margin-bottom:%?44?%!important}.u-padding-bottom-44{padding-bottom:%?44?%!important}.u-margin-45, .u-m-45{margin:%?45?%!important}.u-padding-45, .u-p-45{padding:%?45?%!important}.u-m-l-45{margin-left:%?45?%!important}.u-p-l-45{padding-left:%?45?%!important}.u-margin-left-45{margin-left:%?45?%!important}.u-padding-left-45{padding-left:%?45?%!important}.u-m-t-45{margin-top:%?45?%!important}.u-p-t-45{padding-top:%?45?%!important}.u-margin-top-45{margin-top:%?45?%!important}.u-padding-top-45{padding-top:%?45?%!important}.u-m-r-45{margin-right:%?45?%!important}.u-p-r-45{padding-right:%?45?%!important}.u-margin-right-45{margin-right:%?45?%!important}.u-padding-right-45{padding-right:%?45?%!important}.u-m-b-45{margin-bottom:%?45?%!important}.u-p-b-45{padding-bottom:%?45?%!important}.u-margin-bottom-45{margin-bottom:%?45?%!important}.u-padding-bottom-45{padding-bottom:%?45?%!important}.u-margin-46, .u-m-46{margin:%?46?%!important}.u-padding-46, .u-p-46{padding:%?46?%!important}.u-m-l-46{margin-left:%?46?%!important}.u-p-l-46{padding-left:%?46?%!important}.u-margin-left-46{margin-left:%?46?%!important}.u-padding-left-46{padding-left:%?46?%!important}.u-m-t-46{margin-top:%?46?%!important}.u-p-t-46{padding-top:%?46?%!important}.u-margin-top-46{margin-top:%?46?%!important}.u-padding-top-46{padding-top:%?46?%!important}.u-m-r-46{margin-right:%?46?%!important}.u-p-r-46{padding-right:%?46?%!important}.u-margin-right-46{margin-right:%?46?%!important}.u-padding-right-46{padding-right:%?46?%!important}.u-m-b-46{margin-bottom:%?46?%!important}.u-p-b-46{padding-bottom:%?46?%!important}.u-margin-bottom-46{margin-bottom:%?46?%!important}.u-padding-bottom-46{padding-bottom:%?46?%!important}.u-margin-48, .u-m-48{margin:%?48?%!important}.u-padding-48, .u-p-48{padding:%?48?%!important}.u-m-l-48{margin-left:%?48?%!important}.u-p-l-48{padding-left:%?48?%!important}.u-margin-left-48{margin-left:%?48?%!important}.u-padding-left-48{padding-left:%?48?%!important}.u-m-t-48{margin-top:%?48?%!important}.u-p-t-48{padding-top:%?48?%!important}.u-margin-top-48{margin-top:%?48?%!important}.u-padding-top-48{padding-top:%?48?%!important}.u-m-r-48{margin-right:%?48?%!important}.u-p-r-48{padding-right:%?48?%!important}.u-margin-right-48{margin-right:%?48?%!important}.u-padding-right-48{padding-right:%?48?%!important}.u-m-b-48{margin-bottom:%?48?%!important}.u-p-b-48{padding-bottom:%?48?%!important}.u-margin-bottom-48{margin-bottom:%?48?%!important}.u-padding-bottom-48{padding-bottom:%?48?%!important}.u-margin-50, .u-m-50{margin:%?50?%!important}.u-padding-50, .u-p-50{padding:%?50?%!important}.u-m-l-50{margin-left:%?50?%!important}.u-p-l-50{padding-left:%?50?%!important}.u-margin-left-50{margin-left:%?50?%!important}.u-padding-left-50{padding-left:%?50?%!important}.u-m-t-50{margin-top:%?50?%!important}.u-p-t-50{padding-top:%?50?%!important}.u-margin-top-50{margin-top:%?50?%!important}.u-padding-top-50{padding-top:%?50?%!important}.u-m-r-50{margin-right:%?50?%!important}.u-p-r-50{padding-right:%?50?%!important}.u-margin-right-50{margin-right:%?50?%!important}.u-padding-right-50{padding-right:%?50?%!important}.u-m-b-50{margin-bottom:%?50?%!important}.u-p-b-50{padding-bottom:%?50?%!important}.u-margin-bottom-50{margin-bottom:%?50?%!important}.u-padding-bottom-50{padding-bottom:%?50?%!important}.u-margin-52, .u-m-52{margin:%?52?%!important}.u-padding-52, .u-p-52{padding:%?52?%!important}.u-m-l-52{margin-left:%?52?%!important}.u-p-l-52{padding-left:%?52?%!important}.u-margin-left-52{margin-left:%?52?%!important}.u-padding-left-52{padding-left:%?52?%!important}.u-m-t-52{margin-top:%?52?%!important}.u-p-t-52{padding-top:%?52?%!important}.u-margin-top-52{margin-top:%?52?%!important}.u-padding-top-52{padding-top:%?52?%!important}.u-m-r-52{margin-right:%?52?%!important}.u-p-r-52{padding-right:%?52?%!important}.u-margin-right-52{margin-right:%?52?%!important}.u-padding-right-52{padding-right:%?52?%!important}.u-m-b-52{margin-bottom:%?52?%!important}.u-p-b-52{padding-bottom:%?52?%!important}.u-margin-bottom-52{margin-bottom:%?52?%!important}.u-padding-bottom-52{padding-bottom:%?52?%!important}.u-margin-54, .u-m-54{margin:%?54?%!important}.u-padding-54, .u-p-54{padding:%?54?%!important}.u-m-l-54{margin-left:%?54?%!important}.u-p-l-54{padding-left:%?54?%!important}.u-margin-left-54{margin-left:%?54?%!important}.u-padding-left-54{padding-left:%?54?%!important}.u-m-t-54{margin-top:%?54?%!important}.u-p-t-54{padding-top:%?54?%!important}.u-margin-top-54{margin-top:%?54?%!important}.u-padding-top-54{padding-top:%?54?%!important}.u-m-r-54{margin-right:%?54?%!important}.u-p-r-54{padding-right:%?54?%!important}.u-margin-right-54{margin-right:%?54?%!important}.u-padding-right-54{padding-right:%?54?%!important}.u-m-b-54{margin-bottom:%?54?%!important}.u-p-b-54{padding-bottom:%?54?%!important}.u-margin-bottom-54{margin-bottom:%?54?%!important}.u-padding-bottom-54{padding-bottom:%?54?%!important}.u-margin-55, .u-m-55{margin:%?55?%!important}.u-padding-55, .u-p-55{padding:%?55?%!important}.u-m-l-55{margin-left:%?55?%!important}.u-p-l-55{padding-left:%?55?%!important}.u-margin-left-55{margin-left:%?55?%!important}.u-padding-left-55{padding-left:%?55?%!important}.u-m-t-55{margin-top:%?55?%!important}.u-p-t-55{padding-top:%?55?%!important}.u-margin-top-55{margin-top:%?55?%!important}.u-padding-top-55{padding-top:%?55?%!important}.u-m-r-55{margin-right:%?55?%!important}.u-p-r-55{padding-right:%?55?%!important}.u-margin-right-55{margin-right:%?55?%!important}.u-padding-right-55{padding-right:%?55?%!important}.u-m-b-55{margin-bottom:%?55?%!important}.u-p-b-55{padding-bottom:%?55?%!important}.u-margin-bottom-55{margin-bottom:%?55?%!important}.u-padding-bottom-55{padding-bottom:%?55?%!important}.u-margin-56, .u-m-56{margin:%?56?%!important}.u-padding-56, .u-p-56{padding:%?56?%!important}.u-m-l-56{margin-left:%?56?%!important}.u-p-l-56{padding-left:%?56?%!important}.u-margin-left-56{margin-left:%?56?%!important}.u-padding-left-56{padding-left:%?56?%!important}.u-m-t-56{margin-top:%?56?%!important}.u-p-t-56{padding-top:%?56?%!important}.u-margin-top-56{margin-top:%?56?%!important}.u-padding-top-56{padding-top:%?56?%!important}.u-m-r-56{margin-right:%?56?%!important}.u-p-r-56{padding-right:%?56?%!important}.u-margin-right-56{margin-right:%?56?%!important}.u-padding-right-56{padding-right:%?56?%!important}.u-m-b-56{margin-bottom:%?56?%!important}.u-p-b-56{padding-bottom:%?56?%!important}.u-margin-bottom-56{margin-bottom:%?56?%!important}.u-padding-bottom-56{padding-bottom:%?56?%!important}.u-margin-58, .u-m-58{margin:%?58?%!important}.u-padding-58, .u-p-58{padding:%?58?%!important}.u-m-l-58{margin-left:%?58?%!important}.u-p-l-58{padding-left:%?58?%!important}.u-margin-left-58{margin-left:%?58?%!important}.u-padding-left-58{padding-left:%?58?%!important}.u-m-t-58{margin-top:%?58?%!important}.u-p-t-58{padding-top:%?58?%!important}.u-margin-top-58{margin-top:%?58?%!important}.u-padding-top-58{padding-top:%?58?%!important}.u-m-r-58{margin-right:%?58?%!important}.u-p-r-58{padding-right:%?58?%!important}.u-margin-right-58{margin-right:%?58?%!important}.u-padding-right-58{padding-right:%?58?%!important}.u-m-b-58{margin-bottom:%?58?%!important}.u-p-b-58{padding-bottom:%?58?%!important}.u-margin-bottom-58{margin-bottom:%?58?%!important}.u-padding-bottom-58{padding-bottom:%?58?%!important}.u-margin-60, .u-m-60{margin:%?60?%!important}.u-padding-60, .u-p-60{padding:%?60?%!important}.u-m-l-60{margin-left:%?60?%!important}.u-p-l-60{padding-left:%?60?%!important}.u-margin-left-60{margin-left:%?60?%!important}.u-padding-left-60{padding-left:%?60?%!important}.u-m-t-60{margin-top:%?60?%!important}.u-p-t-60{padding-top:%?60?%!important}.u-margin-top-60{margin-top:%?60?%!important}.u-padding-top-60{padding-top:%?60?%!important}.u-m-r-60{margin-right:%?60?%!important}.u-p-r-60{padding-right:%?60?%!important}.u-margin-right-60{margin-right:%?60?%!important}.u-padding-right-60{padding-right:%?60?%!important}.u-m-b-60{margin-bottom:%?60?%!important}.u-p-b-60{padding-bottom:%?60?%!important}.u-margin-bottom-60{margin-bottom:%?60?%!important}.u-padding-bottom-60{padding-bottom:%?60?%!important}.u-margin-62, .u-m-62{margin:%?62?%!important}.u-padding-62, .u-p-62{padding:%?62?%!important}.u-m-l-62{margin-left:%?62?%!important}.u-p-l-62{padding-left:%?62?%!important}.u-margin-left-62{margin-left:%?62?%!important}.u-padding-left-62{padding-left:%?62?%!important}.u-m-t-62{margin-top:%?62?%!important}.u-p-t-62{padding-top:%?62?%!important}.u-margin-top-62{margin-top:%?62?%!important}.u-padding-top-62{padding-top:%?62?%!important}.u-m-r-62{margin-right:%?62?%!important}.u-p-r-62{padding-right:%?62?%!important}.u-margin-right-62{margin-right:%?62?%!important}.u-padding-right-62{padding-right:%?62?%!important}.u-m-b-62{margin-bottom:%?62?%!important}.u-p-b-62{padding-bottom:%?62?%!important}.u-margin-bottom-62{margin-bottom:%?62?%!important}.u-padding-bottom-62{padding-bottom:%?62?%!important}.u-margin-64, .u-m-64{margin:%?64?%!important}.u-padding-64, .u-p-64{padding:%?64?%!important}.u-m-l-64{margin-left:%?64?%!important}.u-p-l-64{padding-left:%?64?%!important}.u-margin-left-64{margin-left:%?64?%!important}.u-padding-left-64{padding-left:%?64?%!important}.u-m-t-64{margin-top:%?64?%!important}.u-p-t-64{padding-top:%?64?%!important}.u-margin-top-64{margin-top:%?64?%!important}.u-padding-top-64{padding-top:%?64?%!important}.u-m-r-64{margin-right:%?64?%!important}.u-p-r-64{padding-right:%?64?%!important}.u-margin-right-64{margin-right:%?64?%!important}.u-padding-right-64{padding-right:%?64?%!important}.u-m-b-64{margin-bottom:%?64?%!important}.u-p-b-64{padding-bottom:%?64?%!important}.u-margin-bottom-64{margin-bottom:%?64?%!important}.u-padding-bottom-64{padding-bottom:%?64?%!important}.u-margin-65, .u-m-65{margin:%?65?%!important}.u-padding-65, .u-p-65{padding:%?65?%!important}.u-m-l-65{margin-left:%?65?%!important}.u-p-l-65{padding-left:%?65?%!important}.u-margin-left-65{margin-left:%?65?%!important}.u-padding-left-65{padding-left:%?65?%!important}.u-m-t-65{margin-top:%?65?%!important}.u-p-t-65{padding-top:%?65?%!important}.u-margin-top-65{margin-top:%?65?%!important}.u-padding-top-65{padding-top:%?65?%!important}.u-m-r-65{margin-right:%?65?%!important}.u-p-r-65{padding-right:%?65?%!important}.u-margin-right-65{margin-right:%?65?%!important}.u-padding-right-65{padding-right:%?65?%!important}.u-m-b-65{margin-bottom:%?65?%!important}.u-p-b-65{padding-bottom:%?65?%!important}.u-margin-bottom-65{margin-bottom:%?65?%!important}.u-padding-bottom-65{padding-bottom:%?65?%!important}.u-margin-66, .u-m-66{margin:%?66?%!important}.u-padding-66, .u-p-66{padding:%?66?%!important}.u-m-l-66{margin-left:%?66?%!important}.u-p-l-66{padding-left:%?66?%!important}.u-margin-left-66{margin-left:%?66?%!important}.u-padding-left-66{padding-left:%?66?%!important}.u-m-t-66{margin-top:%?66?%!important}.u-p-t-66{padding-top:%?66?%!important}.u-margin-top-66{margin-top:%?66?%!important}.u-padding-top-66{padding-top:%?66?%!important}.u-m-r-66{margin-right:%?66?%!important}.u-p-r-66{padding-right:%?66?%!important}.u-margin-right-66{margin-right:%?66?%!important}.u-padding-right-66{padding-right:%?66?%!important}.u-m-b-66{margin-bottom:%?66?%!important}.u-p-b-66{padding-bottom:%?66?%!important}.u-margin-bottom-66{margin-bottom:%?66?%!important}.u-padding-bottom-66{padding-bottom:%?66?%!important}.u-margin-68, .u-m-68{margin:%?68?%!important}.u-padding-68, .u-p-68{padding:%?68?%!important}.u-m-l-68{margin-left:%?68?%!important}.u-p-l-68{padding-left:%?68?%!important}.u-margin-left-68{margin-left:%?68?%!important}.u-padding-left-68{padding-left:%?68?%!important}.u-m-t-68{margin-top:%?68?%!important}.u-p-t-68{padding-top:%?68?%!important}.u-margin-top-68{margin-top:%?68?%!important}.u-padding-top-68{padding-top:%?68?%!important}.u-m-r-68{margin-right:%?68?%!important}.u-p-r-68{padding-right:%?68?%!important}.u-margin-right-68{margin-right:%?68?%!important}.u-padding-right-68{padding-right:%?68?%!important}.u-m-b-68{margin-bottom:%?68?%!important}.u-p-b-68{padding-bottom:%?68?%!important}.u-margin-bottom-68{margin-bottom:%?68?%!important}.u-padding-bottom-68{padding-bottom:%?68?%!important}.u-margin-70, .u-m-70{margin:%?70?%!important}.u-padding-70, .u-p-70{padding:%?70?%!important}.u-m-l-70{margin-left:%?70?%!important}.u-p-l-70{padding-left:%?70?%!important}.u-margin-left-70{margin-left:%?70?%!important}.u-padding-left-70{padding-left:%?70?%!important}.u-m-t-70{margin-top:%?70?%!important}.u-p-t-70{padding-top:%?70?%!important}.u-margin-top-70{margin-top:%?70?%!important}.u-padding-top-70{padding-top:%?70?%!important}.u-m-r-70{margin-right:%?70?%!important}.u-p-r-70{padding-right:%?70?%!important}.u-margin-right-70{margin-right:%?70?%!important}.u-padding-right-70{padding-right:%?70?%!important}.u-m-b-70{margin-bottom:%?70?%!important}.u-p-b-70{padding-bottom:%?70?%!important}.u-margin-bottom-70{margin-bottom:%?70?%!important}.u-padding-bottom-70{padding-bottom:%?70?%!important}.u-margin-72, .u-m-72{margin:%?72?%!important}.u-padding-72, .u-p-72{padding:%?72?%!important}.u-m-l-72{margin-left:%?72?%!important}.u-p-l-72{padding-left:%?72?%!important}.u-margin-left-72{margin-left:%?72?%!important}.u-padding-left-72{padding-left:%?72?%!important}.u-m-t-72{margin-top:%?72?%!important}.u-p-t-72{padding-top:%?72?%!important}.u-margin-top-72{margin-top:%?72?%!important}.u-padding-top-72{padding-top:%?72?%!important}.u-m-r-72{margin-right:%?72?%!important}.u-p-r-72{padding-right:%?72?%!important}.u-margin-right-72{margin-right:%?72?%!important}.u-padding-right-72{padding-right:%?72?%!important}.u-m-b-72{margin-bottom:%?72?%!important}.u-p-b-72{padding-bottom:%?72?%!important}.u-margin-bottom-72{margin-bottom:%?72?%!important}.u-padding-bottom-72{padding-bottom:%?72?%!important}.u-margin-74, .u-m-74{margin:%?74?%!important}.u-padding-74, .u-p-74{padding:%?74?%!important}.u-m-l-74{margin-left:%?74?%!important}.u-p-l-74{padding-left:%?74?%!important}.u-margin-left-74{margin-left:%?74?%!important}.u-padding-left-74{padding-left:%?74?%!important}.u-m-t-74{margin-top:%?74?%!important}.u-p-t-74{padding-top:%?74?%!important}.u-margin-top-74{margin-top:%?74?%!important}.u-padding-top-74{padding-top:%?74?%!important}.u-m-r-74{margin-right:%?74?%!important}.u-p-r-74{padding-right:%?74?%!important}.u-margin-right-74{margin-right:%?74?%!important}.u-padding-right-74{padding-right:%?74?%!important}.u-m-b-74{margin-bottom:%?74?%!important}.u-p-b-74{padding-bottom:%?74?%!important}.u-margin-bottom-74{margin-bottom:%?74?%!important}.u-padding-bottom-74{padding-bottom:%?74?%!important}.u-margin-75, .u-m-75{margin:%?75?%!important}.u-padding-75, .u-p-75{padding:%?75?%!important}.u-m-l-75{margin-left:%?75?%!important}.u-p-l-75{padding-left:%?75?%!important}.u-margin-left-75{margin-left:%?75?%!important}.u-padding-left-75{padding-left:%?75?%!important}.u-m-t-75{margin-top:%?75?%!important}.u-p-t-75{padding-top:%?75?%!important}.u-margin-top-75{margin-top:%?75?%!important}.u-padding-top-75{padding-top:%?75?%!important}.u-m-r-75{margin-right:%?75?%!important}.u-p-r-75{padding-right:%?75?%!important}.u-margin-right-75{margin-right:%?75?%!important}.u-padding-right-75{padding-right:%?75?%!important}.u-m-b-75{margin-bottom:%?75?%!important}.u-p-b-75{padding-bottom:%?75?%!important}.u-margin-bottom-75{margin-bottom:%?75?%!important}.u-padding-bottom-75{padding-bottom:%?75?%!important}.u-margin-76, .u-m-76{margin:%?76?%!important}.u-padding-76, .u-p-76{padding:%?76?%!important}.u-m-l-76{margin-left:%?76?%!important}.u-p-l-76{padding-left:%?76?%!important}.u-margin-left-76{margin-left:%?76?%!important}.u-padding-left-76{padding-left:%?76?%!important}.u-m-t-76{margin-top:%?76?%!important}.u-p-t-76{padding-top:%?76?%!important}.u-margin-top-76{margin-top:%?76?%!important}.u-padding-top-76{padding-top:%?76?%!important}.u-m-r-76{margin-right:%?76?%!important}.u-p-r-76{padding-right:%?76?%!important}.u-margin-right-76{margin-right:%?76?%!important}.u-padding-right-76{padding-right:%?76?%!important}.u-m-b-76{margin-bottom:%?76?%!important}.u-p-b-76{padding-bottom:%?76?%!important}.u-margin-bottom-76{margin-bottom:%?76?%!important}.u-padding-bottom-76{padding-bottom:%?76?%!important}.u-margin-78, .u-m-78{margin:%?78?%!important}.u-padding-78, .u-p-78{padding:%?78?%!important}.u-m-l-78{margin-left:%?78?%!important}.u-p-l-78{padding-left:%?78?%!important}.u-margin-left-78{margin-left:%?78?%!important}.u-padding-left-78{padding-left:%?78?%!important}.u-m-t-78{margin-top:%?78?%!important}.u-p-t-78{padding-top:%?78?%!important}.u-margin-top-78{margin-top:%?78?%!important}.u-padding-top-78{padding-top:%?78?%!important}.u-m-r-78{margin-right:%?78?%!important}.u-p-r-78{padding-right:%?78?%!important}.u-margin-right-78{margin-right:%?78?%!important}.u-padding-right-78{padding-right:%?78?%!important}.u-m-b-78{margin-bottom:%?78?%!important}.u-p-b-78{padding-bottom:%?78?%!important}.u-margin-bottom-78{margin-bottom:%?78?%!important}.u-padding-bottom-78{padding-bottom:%?78?%!important}.u-margin-80, .u-m-80{margin:%?80?%!important}.u-padding-80, .u-p-80{padding:%?80?%!important}.u-m-l-80{margin-left:%?80?%!important}.u-p-l-80{padding-left:%?80?%!important}.u-margin-left-80{margin-left:%?80?%!important}.u-padding-left-80{padding-left:%?80?%!important}.u-m-t-80{margin-top:%?80?%!important}.u-p-t-80{padding-top:%?80?%!important}.u-margin-top-80{margin-top:%?80?%!important}.u-padding-top-80{padding-top:%?80?%!important}.u-m-r-80{margin-right:%?80?%!important}.u-p-r-80{padding-right:%?80?%!important}.u-margin-right-80{margin-right:%?80?%!important}.u-padding-right-80{padding-right:%?80?%!important}.u-m-b-80{margin-bottom:%?80?%!important}.u-p-b-80{padding-bottom:%?80?%!important}.u-margin-bottom-80{margin-bottom:%?80?%!important}.u-padding-bottom-80{padding-bottom:%?80?%!important}.u-reset-nvue{flex-direction:row;align-items:center}.u-type-primary-light{color:#ecf5ff}.u-type-warning-light{color:#fdf6ec}.u-type-success-light{color:#dbf1e1}.u-type-error-light{color:#fef0f0}.u-type-info-light{color:#f4f4f5}.u-type-primary-light-bg{background-color:#ecf5ff}.u-type-warning-light-bg{background-color:#fdf6ec}.u-type-success-light-bg{background-color:#dbf1e1}.u-type-error-light-bg{background-color:#fef0f0}.u-type-info-light-bg{background-color:#f4f4f5}.u-type-primary-dark{color:#2b85e4}.u-type-warning-dark{color:#f29100}.u-type-success-dark{color:#18b566}.u-type-error-dark{color:#dd6161}.u-type-info-dark{color:#82848a}.u-type-primary-dark-bg{background-color:#2b85e4}.u-type-warning-dark-bg{background-color:#f29100}.u-type-success-dark-bg{background-color:#18b566}.u-type-error-dark-bg{background-color:#dd6161}.u-type-info-dark-bg{background-color:#82848a}.u-type-primary-disabled{color:#a0cfff}.u-type-warning-disabled{color:#fcbd71}.u-type-success-disabled{color:#71d5a1}.u-type-error-disabled{color:#fab6b6}.u-type-info-disabled{color:#c8c9cc}.u-type-primary{color:#2979ff}.u-type-warning{color:#f90}.u-type-success{color:#19be6b}.u-type-error{color:#fa3534}.u-type-info{color:#909399}.u-type-primary-bg{background-color:#2979ff}.u-type-warning-bg{background-color:#f90}.u-type-success-bg{background-color:#19be6b}.u-type-error-bg{background-color:#fa3534}.u-type-info-bg{background-color:#909399}.u-main-color{color:#303133}.u-content-color{color:#606266}.u-tips-color{color:#909399}.u-light-color{color:#c0c4cc}uni-page-body{color:#303133;font-size:%?28?%}\r\n/* start--去除webkit的默认样式--start */.u-fix-ios-appearance{-webkit-appearance:none}\r\n/* end--去除webkit的默认样式--end */\r\n/* start--icon图标外层套一个view，让其达到更好的垂直居中的效果--start */.u-icon-wrap{display:flex;align-items:center}\r\n/* end-icon图标外层套一个view，让其达到更好的垂直居中的效果--end */\r\n/* start--iPhoneX底部安全区定义--start */.safe-area-inset-bottom{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}\r\n/* end-iPhoneX底部安全区定义--end */\r\n/* start--各种hover点击反馈相关的类名-start */.u-hover-class{opacity:.6}.u-cell-hover{background-color:#f7f8f9!important}\r\n/* end--各种hover点击反馈相关的类名--end */\r\n/* start--文本行数限制--start */.u-line-1{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.u-line-2{-webkit-line-clamp:2}.u-line-3{-webkit-line-clamp:3}.u-line-4{-webkit-line-clamp:4}.u-line-5{-webkit-line-clamp:5}.u-line-2, .u-line-3, .u-line-4, .u-line-5{overflow:hidden;word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical}\r\n/* end--文本行数限制--end */\r\n/* start--Retina 屏幕下的 1px 边框--start */.u-border,\r\n.u-border-bottom,\r\n.u-border-left,\r\n.u-border-right,\r\n.u-border-top,\r\n.u-border-top-bottom{position:relative}.u-border-bottom:after,\r\n.u-border-left:after,\r\n.u-border-right:after,\r\n.u-border-top-bottom:after,\r\n.u-border-top:after,\r\n.u-border:after{content:" ";position:absolute;left:0;top:0;pointer-events:none;box-sizing:border-box;-webkit-transform-origin:0 0;transform-origin:0 0;width:199.8%;height:199.7%;-webkit-transform:scale(.5);transform:scale(.5);border:0 solid #e4e7ed;z-index:2}.u-border-top:after{border-top-width:1px}.u-border-left:after{border-left-width:1px}.u-border-right:after{border-right-width:1px}.u-border-bottom:after{border-bottom-width:1px}.u-border-top-bottom:after{border-width:1px 0}.u-border:after{border-width:1px}\r\n/* end--Retina 屏幕下的 1px 边框--end */\r\n/* start--clearfix--start */.u-clearfix:after,\r\n.clearfix:after{content:"";display:table;clear:both}\r\n/* end--clearfix--end */\r\n/* start--高斯模糊tabbar底部处理--start */.u-blur-effect-inset{width:%?750?%;height:var(--window-bottom);background-color:#fff}\r\n/* end--高斯模糊tabbar底部处理--end */\r\n/* start--提升H5端uni.toast()的层级，避免被uView的modal等遮盖--start */uni-toast{z-index:10090}uni-toast .uni-toast{z-index:10090}\r\n/* end--提升H5端uni.toast()的层级，避免被uView的modal等遮盖--end */\r\n/* start--去除button的所有默认样式--start */.u-reset-button{padding:0;font-size:inherit;line-height:inherit;background-color:initial;color:inherit}.u-reset-button::after{border:none}\r\n/* end--去除button的所有默认样式--end */\r\n/* H5的时候，隐藏滚动条 */::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}', ""]), e.exports = a
    },
    3209: function(e) {
        e.exports = JSON.parse('{"tabBar":{"home":"ホームページ","trade":"トレーディングフロア","team":"私のチーム","mine":"私の"},"funcs":{"aboutus":"約WOTC","rules":"プラットフォームルール","download":"ダウンロードセンター","cert":"資格証明書","setting":"言語","customer":"顧客サービス","activities":"イベントアナウンス","joinus":"加入WOTC","earn":"無料のお金は利子を稼ぐ"},"home":{"index":{"trade_data":"取引データ","no_register":"まずは会員登録してください","no_message":"情報なし"},"download":{"google_play":"Worldotc for Android","google_play_tip":"AppStoreダウンロード","ios":"Worldotc for iOS","ios_tip":"クリックして公式ウェブサイトにジャンプしてダウンロードしてください"},"language":{"language":"言語"},"earn":{"title":"無料のお金は利子を稼ぐ","total_profit":"総収入","access_detail":"アクセスの詳細","available_balance":"利用可能な残高","storage_balance":"預け入れ金額","item_title":"契約リスト","time":"時間","profit":"精算","btn":"今買う","msg":{"earn_success":"取引成功"},"trade":{"sell_title":"注文の返品","sell_time":"時間：","profit_fee":"金利：","input_amount":"金額を入力します：","input_amount_tip":"0.00","input_amount_msg":"金額を入力してください","sell_income":"期待収益：","sell_btn":"買う","cancel_btn":"キャンセル","input_amount_min_tip":"最小額を下回る金額：: ","input_amount_max_tip":"最大額を超える金額：: ","note":"利益のために遊休資産を預ける","cancel":"キャンセル"}},"earnlist":{"title":"アクセスの詳細","type_undo":"未完成","type_done":"完了","type":"タイプ","amount":"額","profit":"精算","buy_date":"入金日：","send_date":"決済日："}},"login":{"login":{"title":"ログイン","password":"暗号","passwd_tip":"6~6〜16ビットのパスワードを入力してください","mobile":"携帯電話番号","mobile_tip":"携帯電話番号を入力してください","register":"サインアップ","forgot_pwd":"パスワードを紛失した","btn":"ログイン"},"phoneCode":{"custom_phone_code_tip":"国際市外局番を入力してください","confirm":"わかった","msg":"現在のエリアは登録できません"},"register":{"title":"サインアップ","smscode":"SMS検証コード","smscode_placeholder":"SMS確認コードを入力してください","smscode_tip":"SMS確認コードを入力してください","smscode_send_text":"認証コードを送信する","login":"ログイン","next_step":"次のステップ","password":"ニックネーム","passwd_tip":"6〜16ビットのパスワードを入力してください","nickname":"ニックネーム","nickname_tip":"ニックネームを入力してください","invite_code":"推奨コード","invite_code_tip":"推奨コードを入力してください","submit":"提出","reg_success":"登録完了","mobile_tip":"携帯電話番号を入力してください"},"forget":{"title":"パスワードを紛失した","password":"ニックネーム","passwd_tip":"6〜16ビットのパスワードを入力してください","smscode":"SMS検証コード","smscode_placeholder":"SMS確認コードを入力してください","smscode_send_text":"認証コードを送信する","submit":"提出","success":"パスワードの変更に成功しました"}},"mine":{"ucenter":{"logout":"出口","invite_code":"推奨コード: ","my_total_assets":"私の総資産","my_account":"マイアカウント","recharge":"リチャージ","withdraw":"撤退","personal_info":"個人情報","google_auth":"セキュリティセンター","recharge_record":"リチャージレコード","withdraw_record":"撤退記録","fund_detail":"資金の詳細","auth":"ID認証","team_profit":"チームの収益","invite_friend":"バディを招待","tip":"チップ","set_withdraw_address":"最初に引き出しアドレスをバインドしてください","set":"設定","cancel":"キャンセル"},"googleauth":{"title":"セキュリティセンター","googleauth_tip":"Google認証システムをバインドしてください","open_googleauth":"Google認証システムを開く","setting_tip":"プラットフォームで提供されているQRコードのスキャンを開始するか、プラットフォームで提供されている16桁のキーを手動で入力します。追加が成功したら、動的パスワード検証を入力してバインドを完了します。。","copy":"コピーキー","copy_success":"正常にコピー","vercode":"Google確認コード","bind":"認証してバインドする","unbind":"バインドを解除する","vercode_tip":"確認コードを入力してください","bind_success":"バインドに成功しました","notice":"親切なヒント","bind_tip":"あなたはGoogle認証システムにバインドされています","unbind_tip":"バインドを解除するには、確認用のSMS確認コードを取得してください","unbind_success":"正常にバインド解除"},"userinfo":{"title":"個人情報","modify":"変形","nickname":"ニックネーム","mobile":"携帯電話番号","address":"引き出しアドレス","login_pwd":"ログインパスワード","input_tip":"内容を記入してください","set":"設定","cancel":"キャンセル","nickname_tip":"ニックネームを入力してください","login_pwd_tip":"パスワードを入力してください","withdraw_address_tip":"引き出し先住所を入力してください","old_pass":"以前のパスワード","new_pass":"新しいパスワード","old_pass_tip":"元のパスワードを入力してください","new_pass_tip":"新しいパスワードを入力してください","pass_tip":"パスワードを忘れた場合は、ログインページの携帯電話確認コードから取得してください。","vercode":"Google確認コード","code_tip":"Googleの確認コードを入力してください"},"recharge":{"title":"リチャージ","recharge_tip":"*充電のヒント","recharge_tip_mark1":"デポジットアドレスはTRC20-USDTのみを受け入れ、最小デポジットは10USDTです。","recharge_tip_mark2":"紛失を防ぐため、他の商品をデポジットアドレスに転送しないでください。","qrcode":"二次元コード","copy":"レプリケーション","copy_success":"レプリケーションの成功"},"rechargeRecords":{"title":"充電記録","time":"時間","amount":"額","status":"州","payway":"リチャージ：","orderno":"注文番号：","recharge_status":{"1":"完了","2":"充電に失敗しました","3":"キャンセル"}},"withdraw":{"title":"撤退","available_balance":"利用可能な残高","real_money":"実際の領収書（手数料：3％）","smscode":"SMS検証コード","smscode_placeholder":"SMS確認コードを入力してください","smscode_send_text":"認証コードを送信する","address":"引き出しアドレス","submit":"提出","withdraw_success":"撤退の成功","withdraw_tip":"最低引き出し額：","withdraw_amount_tip":"引き出し額を入力してください","vercode_tip":"認証コードを空にすることはできません","password":"パスワード","passwd_tip":"6〜16桁のパスワードを入力してください","vercode":"Google確認コード","code_tip":"Googleの確認コードを入力してください","tips":"注意：資金の安全のため、セキュリティセンターにアクセスしてGoogle認証システムをバインドしてください。"},"withdrawalRecords":{"title":"撤退記録","time":"時間","amount":"額","status":"州","withdraw_way":"引き出しアドレス：","orderno":"注文番号：","withdraw_status":{"0":"撤退中","1":"撤退の成功","2":"撤退キャンセル"}},"funds":{"title":"資金の詳細","time":"時間","amount":"額","status":"州","fund_status":{"10":"収益の受け取り","11":"ミッションリワード","20":"保存する","21":"テイクアウト","30":"OTCディール","31":"OTC収益","50":"リチャージ","51":"リチャージ","52":"リチャージ","60":"撤退","61":"撤退","62":"撤退"}},"authentication":{"title":"ID認証","auth_status":{"0":"クレジットなし","1":"審査中","2":"認証済み","3":"拒否されました"},"auth_photo_hold_example":"例","auth_problem_tips":"ヒント：問題がある場合は、カスタマーサービスに<b style=\'color:blue;\'>連絡してください</u>","submit":"今すぐ認定","uploading":"アップロードしました.."},"teamIncomes":{"title":"チームの収益","level":"ランク","userid":"ID","time":"時間","amount":"額"},"inviteFriends":{"title":"バディを招待","invite_code":"推奨コード","invite_friend_tip":"すぐに大金を楽しんで、行って招待してください。","invite_friend_btn":"コピーをクリック","share_rule":{"title":"リベートルール","title_tip":"登録時に友人が稼いだ利益ごとに、比例した手数料を受け取ります","rate_title":"手数料比率のルールは以下の通りです","rate_user_level":"ユーザーランク","rate_way":"ルール","rate_num":"コミッション比率","rate_lv1_desc":"直接招待されたユーザー","rate_lv2_desc":"1人の招待ユーザー","rate_lv3_desc":"2人の招待ユーザー","rate_lv4_desc":"以下に招待された3人のユーザー","hint":"決済の手数料で、いつでもウォレットにキャッシュアウトできます"},"copy_success":"レプリケーションの成功"}},"team":{"index":{"team_total_income":"総収入","team_residual_income":"剰余金","receive":"受信","team_info":"チームの詳細","team_user_list":"詳細を見る","team_total_profit":"総収入","team_total_num":"総数","team_total_recharge":"トータルリチャージ","people_num":"人々の数","people_profit":"精算","team_invite_task":"ミッション要件への招待","team_invite_task_tip":"{need_num} LV1ユーザーを招待して、取引を成功させ、報酬を受け取る{amount} USDT","progress":"進捗","team_receive":"受信","team_hasreceive":"受け取った","receive_success":"成功を収める"},"myTeam":{"title":"チームの詳細","team_total_profit":"総収入","team_total_num":"総数","team_total_recharge":"トータルリチャージ","team_lv1":"Level 1","team_lv2":"Level 2","team_lv3":"Level 3","team_lv_count":"量：","team_lv_income":"利点：","team_lv_recharge":"リチャージ：","team_lv_invite":"招待数：","team_lv_mobile":"携帯電話番号：","team_lv_time":"登録時間："}},"transaction":{"index":{"total_assets":"総資産","trade_stat":"収益統計","tran_title":"取引紹介","tran_desc":"WOTCグローバル暗号通貨マッチングシステムを備えています。ユーザーに取引グローバル暗号通貨プラットフォームを提供します。トランザクションの安定性と利益の最大化を保証します。","accepting":"トランザクション処理","wallet_balance":"ウォレットバランス","order_amount":"取引金額","order_amount_tip":"正しい金額を入力してください","order_amount_all":"全て","btn":"フィルタリングを開始","trade_success":"取引の成功：","trade_amount":"取引金額：","trade_profit":"取引収益：","record":"取引一覧","tradingtime":"残り時間:{%s}","time":"時間","amount":"取引金額","profit":"利益","sell_time":"販売時間：","sell_amount":"販売額：","income_time":"収入時間：","income_amount":"利益：","order_num":"注文番号：","search":"AIスマートマッチイン...","msg":{"amount_tip":"バランスが{deal_amount}，未満、フィルタリングできません","order_amount_tip":"正しい金額を入力してください"},"sell":{"symbol":"暗号通貨：","service_provider":"MSB認定サービスプロバイダー：：","market_price":"USDT取引価格：：","trade_price":"取引価格：","order_amount":"注文金額：","confirm":"取引開始","cancel":"キャンセル","trading":"貿易で..."},"sell_success":{"title":"収益と資金は、3時間後に自動的にアカウントに振り込まれます！!","orderNo":"注文番号：","trade_price":"取引金額：","profit":"利益：","amount":"合計：","tip":"トランザクションウォレットに転送された後、自動的にバランスウォレットに転送されます","confirm":"確認"}},"incomeStatistics":{"title":"収益統計","total_orders_num":"完了したトランザクションの総数","total_money":"合計金額","total_profit":"利益総額","date":"日にち","order_num":"取引件数","money":"額","profit":"利益"}},"main":{"more":"もっと >","got_it":"わかった。","loading":"読み込み中...","modify_success":"変更成功"},"infomation":{"aboutus":{"1":"World Over The Counterは、大量の流動性に支えられた経験豊富な専門家のチームです。。","2":"World Over The Counterの店頭（OTC）サービスは、複数の法定通貨、USDT、およびその他の主要な暗号通貨をカバーする、1,000万ドルから数百万ドルを超える取引に対応します。World Over The Counter店頭サービスの最大の利点は、強力な取引の深さです。 、カスタマイズ、および投資家と高額の資産保有者のための高いプライバシー保護。人気のある取引プラットフォームで一般的な滑りやすい価格損失から顧客を免除するWorld Over The Counterの店頭サービスは、大規模な暗号通貨トレーダーにとって最良の選択です。。","3":"World Over The CounterのOTCサービスは、法定通貨、USDT、またはその他の暗号通貨に適用されます。World Over The Counterは、取引の深さやペアリングの売買の複雑さを心配することなく、暗号通貨を自由かつ簡単に取引できるようにすることに重点を置いています。同時に、私たちはあなたに提供します包括的な取引実行および決済サービスを通じて、柔軟で安全かつ高品質の取引経験を持ちます。。","4":"1：World Over The Counter OTCアカウント（個人アカウント）の申請","5":"2：あなたのアカウントに法定通貨または暗号通貨を預けてください。","6":"3：取引が実行された後、USDTは3時間以内にアカウントの残高に自動的に入金されます","7":"あなたのためのOTCスキーム。","8":"プロのトレーダー","9":"私たちは世界トップのビットコインと暗号通貨のトレーダーの1つです。私たちの専門的な経験はビットコインの誕生から何年もさかのぼることができ、適切なタイミングで適切な場所で何千人ものゲストに最高の価格のサービスを提供してきました。","10":"異なるトランザクションエクスペリエンス。","11":"一般的な大規模な店頭取引所とは異なり、World Over The Counterは、取引ニーズに合わせた最高の流動性資金調達の取り決めと取引オプションを提供します。アカウントが正常に設定されると、私たちはあなたと連絡を取り、満たすための理想的なソリューションを提供しますあなたのプログラムのニーズと期待。私たちは信頼性、信頼性、利便性、コミュニティ開発に努めています。私たちは各顧客との良好で永続的な関係を構築し、常に最高のサービスを提供するよう努めています。","12":"国際サービス","13":"米国コロラド州に本社を置き、国際的な顧客に世界的に有名な通貨取引プラットフォームと取引サービスを提供することに尽力しており、アジア、アメリカ、オーストラリア、ヨーロッパ、アフリカの顧客から高い評価と信頼を得ています。","14":"信頼でき、信頼できる。","15":"World Over The Counterは、誠実さと透明性が成功の鍵であると信じており、顧客情報のプライバシーと機密性を非常に重要視し、専門的な態度でゲストの信頼とサポートを獲得しています。どこにいても、安心してご利用いただけるサービスをご利用いただけます。。"},"cert":{"1":"World Over The Counter Limited 営業許可証","2":"World Over The Counter Limited 営業許可登録証","3":"コロラド州の国章がここで押され、この公式証明書が正式に作成、作成、発行されました.","4":"コロラド州は、適用法に従ってこれを管理します.","5":"会社の詳細を表示するには、コロラド州務長官の公式ウェブサイトで証明書番号を確認してください.","6":"World Over The Counter Foundation 営業許可証","7":"World Over The Counter Foundation 営業許可登録証","8":"WOTC は世界の慈善団体に積極的に参加し、その愛を世界に広めています.","9":"この証明書は、コロラド州務長官室によって承認され、番号が付けられています.","10":"将来、WOTCは世界の主要な慈善基金に参加し、より多くの人々を支援します.","11":"慈善財団の証明書は、会社のすべてのメンバーにより良い資産保護をもたらします.","12":"会社の詳細を表示するには、コロラド州務長官の公式ウェブサイトで証明書番号を確認してください.","13":"ビデオでは、WOTC チームのメンバーと、米国フロリダ州にあるパーム ビーチ クリスチャン準備学校が予備的な協力について交渉している様子を見ることができます。 WOTC は学校を後援しています。そして、学校のすべての生徒が学業負担を軽減できるように支援します。教育業界に貢献します。","14":"世界中のWOTCチームメンバーによるチャリティー活動。より多くの人を助けようとしています。彼らは夜明けの光線のようなものです。私たちの光が、より多くの人々を照らしますように。","15":"ある日、WOTC チームのメンバーがあなたのドアを通り過ぎるのを見ても、驚かないでください。私たちはすでに世界中で人気があるからです。多くの競合他社が中傷や噂の作成によって私たちを傷つけることが多いことを私たちは知っています。しかし、私たちは連帯の力によってこれらのうわさを消滅させます。 WOTC は誰もがっかりさせたことはありません。","16":"WOTCを信頼し、応援してくださっている会員の皆様に感謝申し上げます。 WOTC の慈善財団の設立の成功を祝福しましょう。","17":"MSB 証明書の公式クエリ Web サイト:","18":"https://www.fincen.gov/msb-state-selector","19":"事業許可照会公式サイト：","20":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","21":"財団の公式ウェブサイト：","22":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","23":"上記すべての内容の解釈権は World Over The Counter Limited に帰属します","24":"USMSBライセンスは、主にデジタル通貨、仮想通貨、ICO発行、外国為替、国際送金などの取引を含む、マネーサービスに関連する企業および企業向けに、米国財務省によって規制および発行される金融ライセンスです。"},"joinus":{"1":"World Over The Counter 誰でも暗号通貨の分野に連絡して参加することを歓迎します。 暗号通貨を購入または販売する場合でも、ビットコインと暗号通貨について詳しく知りたい場合でも、World Over The Counter あなたに仕えるために最善を尽くします。","2":"ご質問やご意見がございましたら、いつでもメールまたはお電話でお問い合わせください。すべてのお客様に暗号通貨コミュニティに参加して宣伝することをお勧めします。","3":"World Over The Counterは、取引コストと制限の削減に取り組んでおり、店頭取引プラットフォームの大部分で顧客に低い取引しきい値を提供します。私たちが提供できる取引量は、適切な取引です。 USDTと暗号通貨はすべてに使用できます。","4":"現在、世界中で10億人以上が銀行サービスを利用していないか、利用していませんが、そのほとんどがスマートフォンを利用できます。","5":"彼らはいつでもスマートフォンウォレットを使用できるので、分散型暗号通貨は彼らに最大の価値をもたらします-そしてWorld Over The Counterは暗号通貨をユニバーサルアクセスに向けて動かすことを目指し続けます。","6":"オンラインとオフラインの両方で、World Over The Counterは、アクティブでインタラクティブな暗号通貨ユーザーコミュニティの開発、知識とコミュニケーションを通じてグローバルビットコインと暗号通貨コミュニティの開発と参加に取り組んでいます。","7":"あなたが暗号通貨の初心者であろうと上級の専門家であろうと、私たちはあなたを歓迎します！","8":"World Over The Counterは、連絡方法と支援方法に関する簡単な情報を提供してください。できるだけ早く返信します。","9":"Eメール：worldoverthecounter@gmail.com","10":""},"rules":{"1":"利用規約、","2":"USDTを購入するときは、自分のものではないウォレットアドレスを使用しないでください。ウォレットアドレスを使用してください。詐欺の疑いのある人にUSDTを送信しないでください！","3":"当社の利用規約に同意する場合、つまり、当社の個人データ収集ステートメントとプライバシーポリシー、プライバシーポリシー、およびCookieポリシーに同意するものとします。","4":"18歳未満の方にはサービス、設備等の提供はいたしません。18歳未満で当ウェブサイトをご利用の場合は、お住まいの方にご連絡の上、適切なアクセス、訂正、キャンセルをお願いいたします。と異議申し立ての権利。","5":"取引ルール","6":"Worldotcは、アメリカのMSBであり、店頭証券取引所で認定された暗号通貨です。 USDTとグローバル暗号通貨取引プラットフォームは、ユーザーにトランザクションの正確さと便利さを提供します。購入したい仮想通貨の金額を入力します。","7":"収益は3時間ごとに決済され、各利益は投資の0.4％になります。","8":"1日8回までの決済、最大収益3.2％！","9":"最速の23日間の投資は2倍になります！","10":"最大月間利益は1.572倍！","11":"リチャージ引き出しルール","12":"TRC20アドレスを24時間、3％の引き出し手数料で引き出しにバインドします 。","13":"引き出し時間は1分です。","14":"TRC20アドレスごとにバインドできる投資口座は1つだけであることに注意してください。","15":"最低投資額11USDT、最低引き出し額5 USDTで、通貨またはウォレットでリチャージしてください。","16":"招待ルール","17":"あなたの友達はあなたが稼ぐことができる手数料収入に投資することによってお金を稼ぎます：、","18":"Lv1は直接ユーザーを招待しました（総取引利益の15％）。","19":"Lv2L1はユーザーを招待しました（総取引利益の10％）。","20":"Lv3L2はユーザーを招待しました（総取引利益の5％）。","21":"タスクリワードの招待。","22":"投資を完了するために招待されたLV1メンバー10人ごとに、招待報酬10USDT","23":"注：有効なユーザーと見なされるには、招待された各部下がLV1への投資を完了する必要があります。","24":"注意：報酬とルールについて質問がある場合は、カスタマーサービスマネージャーに連絡してください"}},"serverCodes":{"401":"パラメータが正しくありません。","406":"残高不足。","407":"取引金額が正しくありません。","408":"無効なパラメーター。","409":"パスワードは文字と数字で構成されています。","410":"検証コードエラー。","411":"ユーザー名またはパスワードのエラー","412":"アカウントがフリーズしました。カスタマーサービスにご連絡ください。","413":"携帯電話番号を正しく入力してください。","414":"電話番号は登録済みです。別の電話番号を選択してください。","415":"1分の認証コード頻度間隔を取得してください。","416":"頻繁なリクエストです。しばらくしてからもう一度お試しください。","417":"認証コードが無効です。認証コードを再送してください。","418":"電話が未確認であるか、確認の有効期限が切れている場合は、再度登録を開始してください。","419":"ニックネームは2〜8ビットの文字で構成されています。","420":"正しい招待コードを入力してください。","421":"電話番号は登録されておらず、パスワードを取得する必要はありません。","422":"再送要求","423":"認証コードが正常に送信されました。","424":"当日送信された確認コードの数が上限に達しました。","425":"確認コードの送信に失敗しました","426":"住所は変更できません。カスタマーサービスにご連絡ください","427":"検証に失敗しました","428":"すでにGoogle認証システムをバインドしています","429":"元のパスワードの検証に失敗しました","500":"ネットワークの例外です。しばらくしてからもう一度お試しください。","501":"ログインを一時停止します","502":"登録の一時停止","503":"ログインしていない。","605":"正しい数量を入力してください。","606":"ノートの数が最小数より少なくなっています。","607":"入札件数が上限を上回っています。","608":"正しい入札住所を入力してください。","609":"アドレス形式が正しくありません。","610":"元のパスワードエラー","706":"このアドレスは使用されています。置き換えてください。","708":"このユーザーは存在しません。","712":"本名を確認してから撤回してください。","713":"現在、収益は支払われません。","714":"現在のタスク賞を受賞しました。","715":"受け取るための条件を満たさない"}}')
    },
    3546: function(e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = {
            state: {
                country: {
                    name: "English",
                    lang: "en",
                    disabled: !1
                },
                phoneCode: {
                    english_name: "United States",
                    chinese_name: "美国",
                    country_code: "US",
                    phone_code: "1"
                },
                phone: ""
            },
            mutations: {
                countryMutation: function(e, a) {
                    a && (e.country = a)
                },
                phoneCodeMutation: function(e, a) {
                    a && (e.phoneCode = a)
                },
                phoneMutation: function(e, a) {
                    e.phone = a
                }
            },
            actions: {
                countryAction: function(e, a) {
                    var t = e.commit;
                    t("countryMutation", a)
                },
                phoneCodeAction: function(e, a) {
                    var t = e.commit;
                    t("phoneCodeMutation", a)
                },
                phoneAction: function(e, a) {
                    var t = e.commit;
                    t("phoneMutation", a)
                }
            }
        };
        a.default = i
    },
    "37c5": function(e, a, t) {
        e.exports = t.p + "static/img/ADA.cd3f1764.png"
    },
    4027: function(e, a, t) {
        "use strict";
        var i = t("4ea4");
        t("caad"), t("d3b7"), t("2532"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = a.domianUrl = a.baseUrl = void 0;
        var n = i(t("5530")),
            r = i(t("bee9")),
            o = (t("f862"), "https://otcserver.com/");
        a.baseUrl = o;
        var s = "https://www.worldotc.com/";
        a.domianUrl = s;
        var d = function() {
                var e, a, i, s = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    d = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "GET",
                    u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                    m = uni.getStorageSync("lang"),
                    c = t("5096")("./text-".concat(m, ".json"));
                uni.getSystemInfo({
                    success: function(t) {
                        e = t.uniPlatform, i = t.deviceId, a = t.platform
                    }
                });
                var p = {
                    urls: ["gateway/user/setUsername", "gateway/user/loginPasswd", "gateway/user/withdrawAddress"]
                };
                return r.default.get("token") && (u = {
                    "Content-Type": "application/json",
                    token: r.default.get("token"),
                    userid: r.default.get("user_id")
                }), u = (0, n.default)((0, n.default)({}, u), {}, {
                    guid: i,
                    platform: a,
                    platfromtype: e
                }), "gateway/user/submitOrder" === s ? uni.showLoading({
                    title: c.transaction.index.sell.trading
                }) : "gateway/user/createOrder" !== s && uni.showLoading({
                    title: c.main.loading
                }), new Promise((function(e, a) {
                    uni.request({
                        method: l,
                        url: o + s,
                        data: d,
                        header: u,
                        dataType: "json",
                        success: function(a) {
                            uni.hideLoading();
                            var t = a.data,
                                i = t.code,
                                n = t.msg;
                            200 == i ? (p.urls.includes(s) ? uni.showToast({
                                title: c.main.modify_success
                            }) : n && uni.showToast({
                                title: c.serverCodes[n]
                            }), e(a.data)) : 503 === i ? (uni.reLaunch({
                                url: "/pages/login/login"
                            }), r.default.remove("token"), r.default.remove("user_id")) : uni.showToast({
                                title: c.serverCodes[i],
                                icon: "error"
                            })
                        },
                        fail: function(e) {
                            a(e)
                        },
                        complete: function() {
                            uni.hideLoading()
                        }
                    })
                }))
            },
            l = d;
        a.default = l
    },
    "456b": function(e, a, t) {
        e.exports = t.p + "static/img/SHIB.5517881a.png"
    },
    4621: function(e, a, t) {
        "use strict";
        var i = t("4ea4"),
            n = i(t("5530"));
        t("e260"), t("e6cf"), t("cca6"), t("a79d"), t("c2d9"), t("1c31");
        var r = i(t("0d11")),
            o = (i(t("26cb")), i(t("5fa0"))),
            s = t("d7fa"),
            d = t("eb89"),
            l = i(t("99a3")),
            u = i(t("69c9")),
            m = i(t("4027")),
            c = i(t("a925")),
            p = i(t("e143"));
        p.default.use(u.default), p.default.use(l.default), p.default.prototype.$request = m.default, p.default.use(c.default), (0, s.routeGuard)(), (0, d.modelPatch)();
        var g = new c.default({
            locale: null == uni.getStorageSync("lang") ? "zh" : uni.getStorageSync("lang"),
            messages: {
                zh: t("0fc0"),
                en: t("fe09"),
                ar: t("6436"),
                de: t("21b3"),
                es: t("2405"),
                pt: t("4926"),
                it: t("8134"),
                tr: t("ea22"),
                ro: t("60f1"),
                ja: t("3209"),
                my: t("850e"),
                gr: t("2b1b"),
                fr: t("2aeb")
            }
        });
        p.default.prototype._i18n = g, p.default.prototype.$store = o.default, p.default.config.productionTip = !1, r.default.mpType = "app";
        var f = new p.default((0, n.default)((0, n.default)({
            i18n: g
        }, r.default), {}, {
            store: o.default
        }));
        f.$mount()
    },
    4926: function(e) {
        e.exports = JSON.parse('{"tabBar":{"home":"Home","trade":"Trading Floor","team":"My Team","mine":"Meu"},"funcs":{"aboutus":"Sobre WOTC","rules":"Regras da Plataforma","download":"Centro de Download","cert":"Certificado de Qualificação","setting":"Linguagem","customer":"Atendimento ao Cliente","activities":"Anúncio de Evento","joinus":"Aderir WOTC","earn":"Dinheiro grátis rende juros"},"home":{"index":{"trade_data":"Dados da Transação","no_register":"Por favor, inscreva-se como membro primeiro","no_message":"\'Nenhuma informação\'"},"download":{"google_play":"Worldotc for Android","google_play_tip":"Download da App Store","ios":"Worldotc for iOS","ios_tip":"Clique para ir para o site oficial para download"},"language":{"language":"Linguagem"},"earn":{"title":"Dinheiro grátis rende juros","total_profit":"Receitas totais","access_detail":"Detalhes de Acesso","available_balance":"Saldos disponíveis","storage_balance":"Montante depositado","item_title":"Lista de acordos","time":"Tempo","profit":"Payoff","btn":"comprar agora","msg":{"earn_success":"Deal Successful"},"trade":{"sell_title":"Retorno em Ordens","sell_time":"Tempo:","profit_fee":"Taxa de juro:","input_amount":"Digite o Valor:","input_amount_tip":"0.00","input_amount_msg":"Por favor, digite o valor","sell_income":"Retornos esperados:","sell_btn":"Comprar","cancel_btn":"Cancelado","input_amount_min_tip":"Montante abaixo do mínimo: ","input_amount_max_tip":"Montante superior ao máximo: ","note":"\'Depósito de ativos ociosos para fins lucrativos\'","cancel":"Cancelado"}},"earnlist":{"title":"Detalhes de Acesso","type_undo":"Inacabado","type_done":"Concluído","type":"Tipo","amount":"Montante","profit":"Payoff","buy_date":"Data do depósito:","send_date":"Data de liquidação:"}},"login":{"login":{"title":"Entrar","password":"Cifra","passwd_tip":"Por favor insira uma senha de 6 ~ 16 bits","mobile":"Número de telemóvel","mobile_tip":"Por favor introduza o seu número de telemóvel","register":"Inscreva-se","forgot_pwd":"Perdeu a senha","btn":"Entrar"},"phoneCode":{"custom_phone_code_tip":"Por favor insira um código de área internacional","confirm":"OK","msg":"A área atual não está aberta para inscrição"},"register":{"title":"Inscreva-se","smscode":"Código de Verificação SMS","smscode_placeholder":"Por favor, digite um código de verificação SMS","smscode_tip":"Por favor, digite um código de verificação SMS","smscode_send_text":"Enviar código de autenticação","login":"Entrar","next_step":"Próximo Passo","password":"Cifra","passwd_tip":"Por favor insira uma senha de 6 ~ 16 bits","nickname":"Apelido","nickname_tip":"Por favor introduza a sua alcunha","invite_code":"Código Recomendado","invite_code_tip":"Por favor introduza o seu código recomendado","submit":"Submissão","reg_success":"Registo de Sucesso","mobile_tip":"Por favor introduza o seu número de telemóvel"},"forget":{"title":"Perdeu a senha","password":"Cifra","passwd_tip":"Por favor insira uma senha de 6 ~ 16 bits","smscode":"Código de Verificação SMS","smscode_placeholder":"Por favor, digite um código de verificação SMS","smscode_send_text":"Enviar código de autenticação","submit":"Submissão","success":"A modificação da senha foi bem sucedida"}},"mine":{"ucenter":{"logout":"Saída","invite_code":"Código recomendado:: ","my_total_assets":"Meus Ativos Totais","my_account":"A Minha Conta","recharge":"Recarga","withdraw":"Retirada","personal_info":"Informações pessoais","google_auth":"Centro de Segurança","recharge_record":"Recharge Records","withdraw_record":"Registros de Retirada","fund_detail":"Detalhes dos fundos","auth":"Autenticação de Identidade","team_profit":"Ganhos em equipa","invite_friend":"Convide o Buddy","tip":"Dicas","set_withdraw_address":"Por favor, vincule o endereço de retirada primeiro","set":"Configurações","cancel":"Cancelado"},"googleauth":{"title":"Centro de Segurança","googleauth_tip":"Vincule o Google Authenticator","open_googleauth":"Abra o Google Authenticator","setting_tip":"Comece a digitalizar o código QR fornecido em nossa plataforma ou insira manualmente a chave de 16 dígitos fornecida na plataforma. Após a adição bem-sucedida, insira a verificação de senha dinâmica para concluir a vinculação。","copy":"copiar chave","copy_success":"Copiar com sucesso","vercode":"Código de verificação do Google","bind":"Autenticar e vincular","unbind":"desatar","vercode_tip":"por favor insira o código de verificação","bind_success":"Vinculação bem-sucedida","notice":"Dicas gentis","bind_tip":"Você está vinculado ao Google Authenticator","unbind_tip":"Para desvincular, obtenha o código de verificação por SMS para verificação","unbind_success":"Desvincular com sucesso"},"userinfo":{"title":"Informações pessoais","modify":"Modificação","nickname":"Apelido","mobile":"Número de telemóvel","address":"Endereço de Retirada","login_pwd":"Senha de Login","input_tip":"Por favor, preencha o conteúdo","set":"Configurações","cancel":"Cancelado","nickname_tip":"Por favor, insira um apelido","login_pwd_tip":"Por favor, digite a senha","withdraw_address_tip":"Por favor, insira o endereço de retirada","old_pass":"Senha Antiga","new_pass":"Nova Senha","old_pass_tip":"Por favor, digite a senha original","new_pass_tip":"Por favor, digite uma nova senha","pass_tip":"Se você esquecer sua senha, recupere-a no código de verificação do seu celular na página de login","vercode":"Código de verificação do Google","code_tip":"Insira o código de verificação do Google"},"recharge":{"title":"Recarga","recharge_tip":"*Dicas de recarga","recharge_tip_mark1":"O endereço de depósito suporta apenas TRC20-USDT, e o depósito mínimo é de 10USDT.","recharge_tip_mark2":"Por favor, não transfira outros ativos para o endereço de depósito para evitar perdas.","qrcode":"Código Bidimensional","copy":"Replicação","copy_success":"Sucesso de Replicação"},"rechargeRecords":{"title":"Registro de recarga","time":"Tempo","amount":"Montante","status":"Estado","payway":"Recarga:","orderno":"Número de ordem:","recharge_status":{"1":"Concluído","2":"A recarga foi mal- sucedida","3":"Cancelado"}},"withdraw":{"title":"Retirada","available_balance":"Saldos disponíveis","real_money":"Recibo real (taxa de manuseio: 3%)","smscode":"Código de Verificação SMS","smscode_placeholder":"Por favor, digite um código de verificação SMS","smscode_send_text":"Enviar código de autenticação","address":"Endereço de Retirada","submit":"Submissão","withdraw_success":"Retirada de Sucesso","withdraw_tip":"Retirada mínima: ","withdraw_amount_tip":"Indicar o montante da retirada","vercode_tip":"O código de autenticação não pode estar vazio","password":"senha","passwd_tip":"Por favor, digite uma senha de 6 a 16 dígitos","vercode":"Código de verificação do Google","code_tip":"Por favor, insira o código de verificação do Google","tips":"Lembrete: para a segurança de seus fundos, acesse a Central de segurança para vincular o Google Authenticator。"},"withdrawalRecords":{"title":"Registros de Retirada","time":"Tempo","amount":"Montante","status":"Estado","withdraw_way":"Endereço de retirada:","orderno":"Número de ordem:","withdraw_status":{"0":"In Withdrawal","1":"Retirada de Sucesso","2":"Cancelamento da retirada"}},"funds":{"title":"Detalhes dos fundos","time":"Tempo","amount":"Montante","status":"Estado","fund_status":{"10":"Receitas de Recebimento","11":"Recompensas de Missão","20":"Salvar em","21":"Take Out","30":"O Negócio","31":"Ganhos","50":"Recarga","51":"Recarga","52":"Recarga","60":"Retirada","61":"Retirada","62":"Retirada"}},"authentication":{"title":"Autenticação de Identidade","auth_status":{"0":"Não creditado","1":"Em análise","2":"Certificado","3":"Rejeitado"},"auth_photo_hold_example":"Exemplos","auth_problem_tips":"Dicas: Se você tiver problemas, entre em contato com o serviço ao cliente","submit":"Certified Now","uploading":"Uploaded..."},"teamIncomes":{"title":"Ganhos em equipa","level":"Patente","userid":"ID","time":"Tempo","amount":"Montante"},"inviteFriends":{"title":"Convide o Buddy","invite_code":"Código Recomendado","invite_friend_tip":"Aproveite o grande dinheiro imediatamente, vá e convide.","invite_friend_btn":"Clique em Copiar","share_rule":{"title":"Regras de desconto","title_tip":"Para cada lucro feito por um amigo no momento da inscrição, você receberá uma comissão proporcional","rate_title":"As regras para proporções de comissão são as seguintes","rate_user_level":"Classificação do utilizador","rate_way":"Regras","rate_num":"Proporção da Comissão","rate_lv1_desc":"Utilizadores Directamente Convidados","rate_lv2_desc":"1 utilizador convidado","rate_lv3_desc":"2 Utilizadores Convidados","rate_lv4_desc":"3 Todos os usuários convidados abaixo","hint":"Comissão para liquidar e pode ser sacado para sua carteira a qualquer momento"},"copy_success":"Sucesso de Replicação"}},"team":{"index":{"team_total_income":"Receitas totais","team_residual_income":"Lucro Excedente","receive":"Recepção","team_info":"Detalhes da Equipa","team_user_list":"Ver os Detalhes","team_total_profit":"Receitas totais","team_total_num":"Número Total","team_total_recharge":"Recarga total","people_num":"Número de pessoas","people_profit":"Payoff","team_invite_task":"Convite aos Requisitos da Missão","team_invite_task_tip":"{need_num} convidar usuários LV1 para negociar com sucesso e receber uma recompensa de {amount} USDT","progress":"Progresso","team_receive":"Recepção","team_hasreceive":"Recebido","receive_success":"Recebendo o Sucesso"},"myTeam":{"title":"Detalhes da Equipa","team_total_profit":"Receitas totais","team_total_num":"Número Total","team_total_recharge":"Recarga total","team_lv1":"Level 1","team_lv2":"Level 2","team_lv3":"Level 3","team_lv_count":"Quantidade:","team_lv_income":"Benefícios:","team_lv_recharge":"Recarga:","team_lv_invite":"Número de convites:","team_lv_mobile":"Número de telefone móvel:","team_lv_time":"Hora de Registo:"}},"transaction":{"index":{"total_assets":"Total dos ativos","trade_stat":"Estatísticas de Receitas","tran_title":"Introdução à Transação","tran_desc":"Tem um sistema global de combinação de criptomoedas. Fornece aos usuários uma plataforma global de negociação de criptomoedas. Assegurar a estabilidade das transacções e a maximização dos lucros","accepting":"Processamento de Transações","wallet_balance":"Saldo da Carteira","order_amount":"Montante da transação","order_amount_tip":"Por favor, insira o valor correto","order_amount_all":"Todos","btn":"Iniciar a filtragem","trade_success":"Deal Success:","trade_amount":"Montante da transação:","trade_profit":"Ganhos de transação:","record":"Lista de transações","tradingtime":"Tempo restante:{%s}","time":"Tempo","amount":"Montante da transação","profit":"Lucrar","sell_time":"Tempo de Venda:","sell_amount":"Montante vendido:","income_time":"Tempo de Renda:","income_amount":"Lucrar:","order_num":"Número de ordem:","search":"Smart Match em...","msg":{"amount_tip":"Saldo inferior a (), incapaz de filtrar","order_amount_tip":"Por favor, insira o valor correto"},"sell":{"symbol":"Criptomoeda:","service_provider":"Prestador de serviços certificado:","market_price":"Preço de transação:","trade_price":"Preço de transação:","order_amount":"Valor do pedido:","confirm":"Iniciar a Negociação","cancel":"Cancelado","trading":"No ramo de negócios..."},"sell_success":{"title":"Receita e fundos serão automaticamente depositados em sua conta após 3 horas!!","orderNo":"Número de ordem:","trade_price":"Montante da transação:","profit":"Lucro:","amount":"Total:","tip":"Transferido para a carteira de transacções e transferido automaticamente para a carteira de saldos","confirm":"Confirmação"}},"incomeStatistics":{"title":"Estatísticas de Receitas","total_orders_num":"Número total de operações concluídas","total_money":"Montante total","total_profit":"Lucro total","date":"Encontro","order_num":"Número de transações","money":"Montante","profit":"Lucrar"}},"main":{"more":"Mais  >","got_it":"OK","loading":"A carregar a...","modify_success":"Modificação bem sucedida"},"infomation":{"aboutus":{"1":"A World Over The Counter é uma equipe de profissionais experientes, apoiada por um grande conjunto de liquidez.","2":"O serviço Over-the-Counter (OTC) do World Over The Counter para transações que variam de US$ 10 a mais de US$ milhões, cobrindo vários títulos legais, USDT e outras importantes criptomoedas. A maior vantagem dos serviços de balcão do World Over The Counter é nossa forte profundidade de negociação, personalização e alta proteção de privacidade para investidores e detentores de ativos de alto valor líquido. Os serviços over-the-counter da World Over The Counter, que isentam os clientes das perdas de preços escorregadias que são comuns em plataformas de negociação populares, são a melhor escolha para grandes comerciantes de criptomoedas. , ","3":"O serviço OTC da World Over The Counter aplica-se a moeda legal, USDT ou outra moeda criptografada. O World Over The Counter está focado em permitir que você negocie em criptomoedas de forma livre e fácil sem se preocupar com a complexidade da profundidade de negociação e do emparelhamento de compra e venda. Ao mesmo tempo, fornecemos uma experiência de transação flexível, segura e de alta qualidade por meio de serviços abrangentes de execução e liquidação de transações. ","4":"1: Aplicação para Conta OTC World Over The Counter (Conta Pessoal),","5":"2: Deposite moeda legal ou criptomoeda na sua conta,","6":"3: Após a execução da transação, o USDT será automaticamente depositado no saldo da sua conta em três horas.","7":"Um esquema OTC para você.","8":"Profissional Trader,","9":"Temos um dos maiores comerciantes de bitcoin e criptomoedas do mundo. Nossa experiência profissional pode ser rastreada muitos anos desde o nascimento do Bitcoin, e temos vindo a fornecer o melhor serviço de preço para milhares de hóspedes no momento certo e no lugar certo. ","10":"Uma Experiência de Transação Diferente.","11":"Ao contrário das bolsas gerais e grandes, o World Over The Counter oferece os melhores arranjos de financiamento de liquidez e opções de negociação adaptadas às suas necessidades de negociação. Quando sua conta for configurada com sucesso, nos comunicaremos com você e forneceremos a solução ideal para atender às necessidades e expectativas do seu programa. Nós nos esforçamos para a credibilidade, confiabilidade, conveniência e desenvolvimento da comunidade. Nós nos esforçamos para construir um relacionamento bom e duradouro com cada cliente e entregar o melhor serviço possível em todos os momentos","12":"Serviço Internacional,","13":"A World Over The Counter, com sede no estado americano de Colorado, dedica-se a fornecer plataformas de negociação de criptomoedas globais e serviços de negociação para clientes internacionais, e tem sido altamente apreciada e confiável por clientes da Ásia, Américas, Austrália, Europa e África.","14":"Credível e de confiança.","15":"O World Over The Counter acredita que a honestidade e a transparência são fundamentais para o sucesso e atribui grande importância à privacidade e confidencialidade das informações do cliente, ganhando a confiança e o apoio dos hóspedes com uma atitude profissional. Estamos empenhados em construir uma imagem confiável e trabalhar de mãos dadas com você. Onde quer que você esteja, você pode usar a gama completa de serviços que fornecemos com paz de espírito. "},"cert":{"1":"World Over The Counter Limited alvará de funcionamento","2":"World Over The Counter Limited Certificado de registro de licença comercial.","3":"O Grande Selo do Estado do Colorado foi carimbado aqui e este certificado oficial foi devidamente gerado, executado e emitido.","4":"O Colorado regulará isso de acordo com a lei aplicável.","5":"Verifique o número do certificado no site oficial da Secretaria de Estado do Colorado para ver os detalhes da empresa.","6":"World Over The Counter Foundation alvará de funcionamento","7":"World Over The Counter Foundation Certificado de registro de licença comercial.","8":"Porque a WOTC participa ativamente de fundações beneficentes mundiais, espalhando seu amor pelo mundo.","9":"Este certificado é aprovado e numerado pelo Gabinete do Secretário de Estado do Colorado.","10":"No futuro, a WOTC participará dos principais fundos de caridade do mundo e ajudará mais pessoas.","11":"O certificado da fundação beneficente também traz melhor proteção patrimonial para todos os membros da empresa.","12":"Verifique o número do certificado no site oficial da Secretaria de Estado do Colorado para ver os detalhes da empresa.","13":"No vídeo podemos ver os membros da equipe WOTC e a PALM BEACH CHRISTIAN PREPARATORY SCHOOL na Flórida, EUA, negociando uma cooperação preliminar. WOTC patrocina escolas. E ajude todos os alunos da escola a reduzir sua carga acadêmica. Contribuir para a indústria da educação.","14":"Atividades beneficentes realizadas por membros da equipe WOTC em todo o mundo. Tentando ajudar mais pessoas. São como um raio de luz na aurora. Que nossa luz brilhe sobre mais pessoas.","15":"Não se surpreenda se vocês virem um membro da equipe WOTC passar pela sua porta um dia. Porque já somos populares em todo o mundo. Sabemos que muitos concorrentes muitas vezes nos prejudicam caluniando e criando boatos. Mas deixamos esses rumores morrerem pelo poder da solidariedade. WOTC nunca decepcionou ninguém.","16":"Obrigado a todos os membros que confiam e apoiam o WOTC. Vamos parabenizar o estabelecimento bem-sucedido da fundação de caridade da WOTC.","17":"Site oficial de consulta do certificado MSB:","18":"https://www.fincen.gov/msb-state-selector","19":"Site oficial para consulta de licença comercial:","20":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","21":"Site oficial da fundação:","22":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","23":"O direito de interpretação de todo o conteúdo acima pertence à World Over The Counter Limited","24":"O World Over The Counter acredita que a honestidade e a transparência são fundamentais para o sucesso e atribui grande importância à privacidade e confidencialidade das informações do cliente, ganhando a confiança e o apoio dos hóspedes com uma atitude profissional. Estamos empenhados em construir uma imagem confiável e trabalhar de mãos dadas com você. Onde quer que você esteja, você pode usar a gama completa de serviços que fornecemos com paz de espírito. "},"joinus":{"1":"O World Over The Counter dá as boas-vindas a qualquer pessoa para entrar em contato e se juntar à comunidade de criptomoedas. Se você quiser comprar e vender criptomoedas ou aprender mais sobre bitcoin e criptomoedas, o World Over The Counter fará o seu melhor","2":"Se você tiver alguma dúvida ou comentários, envie um e-mail ou ligue para nós a qualquer momento. Encorajamos todos os nossos clientes a participar na nossa comunidade de criptomoedas e a promovê-la. ","3":"O World Over The Counter está comprometido em reduzir os custos e restrições de transação, fornecendo aos clientes limiares de transação mais baixos em uma maioria maior de plataformas de negociação de balcão, e qualquer quantidade de transação que possamos oferecer a você é o acordo certo, para que a USDT e a criptomoeda possam ser usadas para todos.","4":"Atualmente, mais de 1 bilhão de pessoas em todo o mundo não têm ou não têm serviços bancários, mas a maioria deles tem acesso a smartphones.","5":"Eles sempre podem usar carteiras de telefones inteligentes para que criptomoedas descentralizadas ofereçam o maior valor para eles - e o World Over The Counter continuará buscando mover criptomoedas para o acesso universal. — World Over The Counter 。","6":"Online e offline, o World Over The Counter tem se comprometido a desenvolver uma comunidade de usuários de criptomoedas ativa e interativa, desenvolvendo e participando da comunidade global de bitcoin e criptomoedas através do conhecimento e da comunicação.","7":"Se você é um novato criptomoeda ou um especialista sênior, nós recebê-lo! ,","8":"World Over The Counter por favor forneça seus métodos de contato e informações simples sobre como ajudá-lo e nós responderemos o mais rápido possível. ,","9":"E-mail:worldoverthecounter@gmail.com","10":""},"rules":{"1":"Termos de Utilização,","2":"Ao comprar o USDT, nunca use um endereço de carteira que não pertença a você. Por favor, use seu endereço de carteira. Por favor, não envie USDT para alguém suspeito de fraude! , ","3":"Quando você concorda com nossos Termos de Uso, isto é, você concorda com nossa Declaração de Coleta de Dados Pessoais e Política de Privacidade, Política de Privacidade e Política de Cookies.","4":"Não fornecerão serviços, equipamentos e outros assuntos para menores de 18 anos. Se você tiver menos de 18 anos e usar nosso site, entre em contato com a pessoa a quem você tem a custódia para exercer os direitos de acesso, correção, cancelamento e objeção adequados. ","5":"Regras de transação,","6":"Worldotc é um MSB americano - certificado criptomoeda sobre - o - contra-câmbio. A USDT e a plataforma global de negociação de criptomoedas oferecem aos usuários precisão e conveniência de transações. Digite a quantidade de moeda virtual que você deseja comprar. ","7":"Os ganhos são liquidados a cada 3 horas, e cada lucro será 0,4% do seu investimento.","8":"Liquidação até 8 vezes por dia, lucro máximo de 3,2%! ,","9":"O investimento mais rápido de 23 dias duplica! ,","10":"Lucro máximo mensal de 1.572 vezes! ,","11":"Regras de Retirada de Recarga,","12":"Vincule seu endereço TRC20 para retirada, 24 horas por dia por uma taxa de retirada de 3%.","13":"O intervalo é de 1 minuto.","14":"Note que apenas uma conta de investimento pode ser vinculada por endereço TRC20.","15":"Recarregue com a sua moeda ou carteira com um investimento mínimo de 11 USDT e um levantamento mínimo de 5 USDT.","16":"Regra do convite,","17":"Seus amigos ganham dinheiro investindo na comissão que você pode ganhar:,","18":"Lv1 convidou diretamente usuários (15% do lucro total da transação).","19":"Lv2l1 convidou usuários (10% do lucro total da transação).","20":"Lv3l2 convidou usuários (5% do lucro total da transação).","21":"Recompensas convidando tarefa.","22":"Para cada 10 membros LV1 convidados para completar o investimento, um convite recompensa 10USDT","23":"Nota: Cada subordinado convidado precisa completar o investimento em LV1 para ser considerado um usuário válido.","24":"Lembrete: Se você tiver alguma dúvida sobre as recompensas e regras, entre em contato com o gerente de atendimento ao cliente."}},"serverCodes":{"401":"Os parâmetros não estão certos.","406":"equilíbrio insuficiente.","407":"Montante incorreto da transação.","408":"Parâmetro inválido.","409":"A senha consiste em uma letra mais um número,","410":"Erro no Código de Validação.","411":"Erro de utilizador ou senha","412":"Congelamento da conta, entre em contato com o atendimento ao cliente","413":"Por favor, preencha o seu número de telemóvel correctamente.","414":"O número de telefone foi registrado, selecione outro número de telefone","415":"Obter intervalo de frequência do código de autenticação de 1 minuto.","416":"Pedidos frequentes, tente novamente mais tarde.","417":"O código de autenticação é inválido, por favor reenviar o código de autenticação.","418":"Se o telefone não for verificado ou a verificação tiver expirado, por favor, comece a registrar novamente.","419":"O apelido consiste em 2 ~ caracteres de 8 bits.","420":"Introduza o código de convite correcto.","421":"O número de telefone não foi registrado e nenhuma senha precisa ser recuperada.","422":"Repetir Pedido,","423":"Código de autenticação enviado com sucesso.","424":"O número de códigos de verificação enviados nesse dia atingiu o limite máximo.","425":"Falha ao enviar o código de verificação","426":"O endereço não pode ser modificado, entre em contato com o atendimento ao cliente","427":"falha na verificação","428":"Você já vinculou o Google Authenticator","429":"Falha na verificação da senha original","500":"Exceção de rede, por favor tente novamente mais tarde.","501":"Suspender o Login,","502":"Suspender o Registo,","503":"Não entrou no sistema.","605":"Por favor, introduza a quantidade correcta.","606":"O número de notas é inferior ao mínimo.","607":"O número de propostas é superior ao máximo.","608":"Por favor, insira o endereço correto da proposta.","609":"Formato do endereço incorreto.","610":"Erro da Senha Original,","706":"Este endereço foi usado, por favor substitua. ,","708":"Este usuário não existe.","712":"Por favor, verifique o seu nome verdadeiro e depois retire-o.","713":"Actualmente, não há rendimentos a pagar.","714":"Prêmio Tarefa Atual Recebido.","715":"Incumprimento das condições de recepção"}}')
    },
    "4fd2": function(e, a) {
        e.exports = "data:image/png;base64,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"
    },
    5096: function(e, a, t) {
        var i = {
            "./text-ar.json": "6436",
            "./text-de.json": "21b3",
            "./text-en.json": "fe09",
            "./text-es.json": "2405",
            "./text-fr.json": "2aeb",
            "./text-gr.json": "2b1b",
            "./text-it.json": "8134",
            "./text-ja.json": "3209",
            "./text-my.json": "850e",
            "./text-pt.json": "4926",
            "./text-ro.json": "60f1",
            "./text-tr.json": "ea22",
            "./text-zh.json": "0fc0"
        };

        function n(e) {
            var a = r(e);
            return t(a)
        }

        function r(e) {
            if (!t.o(i, e)) {
                var a = new Error("Cannot find module '" + e + "'");
                throw a.code = "MODULE_NOT_FOUND", a
            }
            return i[e]
        }
        n.keys = function() {
            return Object.keys(i)
        }, n.resolve = r, e.exports = n, n.id = "5096"
    },
    "52bb": function(e, a) {
        e.exports = "data:image/png;base64,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"
    },
    "5fa0": function(e, a, t) {
        "use strict";
        var i = t("4ea4");
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var n = i(t("e143")),
            r = i(t("26cb")),
            o = i(t("5d5d")),
            s = i(t("260a")),
            d = i(t("3546")),
            l = i(t("a8cc"));
        n.default.use(r.default);
        var u = ["main.userinfo", "login.country", "login.phoneCode"],
            m = new r.default.Store({
                state: {},
                mutations: {},
                actions: {},
                modules: {
                    login: d.default,
                    home: s.default,
                    main: l.default
                },
                plugins: [(0, o.default)({
                    storage: window.localStorage,
                    paths: u
                })]
            }),
            c = m;
        a.default = c
    },
    "60cc": function(e, a) {
        e.exports = "data:image/png;base64,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"
    },
    "60f1": function(e) {
        e.exports = JSON.parse('{"tabBar":{"home":"Acasă","trade":"Plaza de tranzacționare","team":"Echipa mea","mine":"A mea"},"funcs":{"aboutus":"DespreWOTC","rules":"Reguli platformei","download":"Centrul de descărcare","cert":"Certificat de calificare","setting":"Limba","customer":"Serviciu clienți","activities":"Anunțul evenimentului","joinus":"A te alaturaWOTC","earn":"Banii gratuiti câștigă dobândă"},"home":{"index":{"trade_data":"Datele tranzacției","no_register":"Vă rugăm să vă înregistrați mai întâi ca membru","no_message":"Fara informatii"},"download":{"google_play":"Worldotc for Android","google_play_tip":"Descărcare App Store","ios":"Worldotc for iOS","ios_tip":"Faceți clic pentru a sări pe site-ul oficial pentru descărcare"},"language":{"language":"Limba"},"earn":{"title":"Banii gratuiti câștigă dobândă","total_profit":"Incasări totale","access_detail":"Detalii de acces","available_balance":"Solduri disponibile","storage_balance":"Suma depusă","item_title":"Lista acordurilor","time":"Timp","profit":"Plata","btn":"Cumpără acum","msg":{"earn_success":"Afacere de succes"},"trade":{"sell_title":"Returul comenzilor","sell_time":"Timp:","profit_fee":"Rata dobânzii:","input_amount":"Introduceți suma:","input_amount_tip":"0,00","input_amount_msg":"Vă rugăm să introduceți suma","sell_income":"Retururi așteptate:","sell_btn":"Cumpără","cancel_btn":"Anulat","input_amount_min_tip":"Suma sub minim:: ","input_amount_max_tip":"Suma care depășește maximul: ","note":"Depuneți activele inactive pentru profit","cancel":"Anulat"}},"earnlist":{"title":"Detalii de acces","type_undo":"Neterminat","type_done":"Efectuat","type":"Tip","amount":"Cantitate","profit":"Plata","buy_date":"Data depunerii:","send_date":"Data de decontare:"}},"login":{"login":{"title":"Autentificare","password":"Cifru","passwd_tip":"Vă rugăm să introduceți o parolă de 6 ~ 16 biți","mobile":"Numar de telefon mobil","mobile_tip":"Vă rugăm să introduceți numărul de telefon mobil","register":"Inscrie-te","forgot_pwd":"Parola pierdută","btn":"Autentificare"},"phoneCode":{"custom_phone_code_tip":"Vă rugăm să introduceți un prefix internațional","confirm":"O.K","msg":"Zona actuală nu este deschisă pentru înregistrare"},"register":{"title":"Inscrie-te","smscode":"Cod de verificare SMS","smscode_placeholder":"Vă rugăm să introduceți un cod de verificare prin SMS","smscode_tip":"Vă rugăm să introduceți un cod de verificare prin SMS","smscode_send_text":"Trimite codul de autentificare","login":"Autentificare","next_step":"Urmatorul pas","password":"parola","passwd_tip":"Vă rugăm să introduceți o parolă de 6 ~ 16 biți","nickname":"Poreclă","nickname_tip":"Te rugăm să introduci porecla ta","invite_code":"Cod recomandat","invite_code_tip":"Vă rugăm să introduceți codul recomandat","submit":"Supunere","reg_success":"Înregistrare cu succes","mobile_tip":"Vă rugăm să introduceți numărul de telefon mobil"},"forget":{"title":"Parola pierdută","password":"parola","passwd_tip":"Vă rugăm să introduceți o parolă de 6 ~ 16 biți","smscode":"Cod de verificare SMS","smscode_placeholder":"Vă rugăm să introduceți un cod de verificare prin SMS","smscode_send_text":"Trimite codul de autentificare","submit":"Supunere","success":"Modificarea parolei a avut succes"}},"mine":{"ucenter":{"logout":"Ieșire","invite_code":"Cod recomandat:","my_total_assets":"Activele mele totale","my_account":"Contul meu","recharge":"REÎNCĂRCĂ","withdraw":"Retragere","personal_info":"Informatii personale","google_auth":"Centru de securitate","recharge_record":"Reîncărcare înregistrări","withdraw_record":"Înregistrări de retragere","fund_detail":"Detalii despre fonduri","auth":"Autentificarea identității","team_profit":"Câștiguri ale echipei","invite_friend":"Invită prietenul","tip":"Sfaturi","set_withdraw_address":"Vă rugăm să legați mai întâi adresa de retragere","set":"Setări","cancel":"Anulat"},"googleauth":{"title":"Centru de securitate","googleauth_tip":"Vă rugăm să legați Google Authenticator","open_googleauth":"Deschideți Google Authenticator","setting_tip":"Începeți să scanați codul QR furnizat în platforma noastră sau introduceți manual cheia din 16 cifre furnizată în platformă. După adăugarea cu succes, introduceți verificarea dinamică a parolei pentru a finaliza legarea。","copy":"cheie de copiere","copy_success":"Copiați cu succes","vercode":"Cod de verificare Google","bind":"Autentificați și legați","unbind":"legare la capăt","vercode_tip":"vă rugăm să introduceți codul de verificare","bind_success":"Legarea a reușit","notice":"memento prietenos","bind_tip":"Sunteți legat de Google Authenticator","unbind_tip":"Pentru a deconecta, vă rugăm să primiți codul de verificare prin SMS pentru verificare","unbind_success":"Deconectați cu succes"},"userinfo":{"title":"Informatii personale","modify":"Modificare","nickname":"Poreclă","mobile":"Numar de telefon mobil","address":"Adresa de retragere","login_pwd":"Parola de logare","input_tip":"Vă rugăm să completați conținutul","set":"Setări","cancel":"Anulat","nickname_tip":"Vă rugăm să introduceți o poreclă","login_pwd_tip":"Te rog introdu parola","withdraw_address_tip":"Vă rugăm să introduceți adresa de retragere","old_pass":"Parola veche","new_pass":"Parolă Nouă","old_pass_tip":"Vă rugăm să introduceți parola inițială","new_pass_tip":"Vă rugăm să introduceți o nouă parolă","pass_tip":"Dacă ați uitat parola, vă rugăm să o preluați din codul de verificare a telefonului mobil de pe pagina de conectare","vercode":"Cod de verificare Google","code_tip":"Vă rugăm să introduceți codul de verificare Google"},"recharge":{"title":"REÎNCĂRCĂ","recharge_tip":"*Sfaturi pentru reîncărcare","recharge_tip_mark1":"Adresa de depozit acceptă doar TRC20-USDT, iar depunerea minimă este de 10USDT.","recharge_tip_mark2":"Vă rugăm să nu transferați alte bunuri la adresa de depozit pentru a evita pierderea.","qrcode":"Cod bidimensional","copy":"Replicare","copy_success":"Replicare succes"},"rechargeRecords":{"title":"Record de reîncărcared","time":"Timp","amount":"Cantitate","status":"Stat","payway":"REÎNCĂRCĂ:","orderno":"Număr de ordine:","recharge_status":{"1":"Efectuat","2":"Reîncărcarea eșuată","3":"Anulat"}},"withdraw":{"title":"Retragere","available_balance":"Solduri disponibile","real_money":"Chitanță reală (taxă de manipulare: 3%)","smscode":"Cod de verificare SMS","smscode_placeholder":"Vă rugăm să introduceți un cod de verificare prin SMS","smscode_send_text":"Trimite codul de autentificare","address":"Adresa de retragere","submit":"Supunere","withdraw_success":"Succes la retragere","withdraw_tip":"Retragere minimă: ","withdraw_amount_tip":"Vă rugăm să introduceți suma retragerii","vercode_tip":"Codul de autentificare nu poate fi gol","password":"parola","passwd_tip":"Vă rugăm să introduceți o parolă de 6-16 cifre","vercode":"Cod de verificare Google","code_tip":"Vă rugăm să introduceți codul de verificare Google","tips":"Memento: pentru siguranța fondurilor dvs., accesați Centrul de securitate pentru a lega Google Authenticator。"},"withdrawalRecords":{"title":"Înregistrări de retragere","time":"Timp","amount":"Cantitate","status":"Stat","withdraw_way":"Adresa de retragere:","orderno":"Număr de ordine:","withdraw_status":{"0":"În retragere","1":"Succes la retragere","2":"Anularea retragerii"}},"funds":{"title":"Detalii despre fonduri","time":"Timp","amount":"Cantitate","status":"Stat","fund_status":{"10":"Primirea veniturilor","11":"Recompense pentru misiune","20":"Salvați în","21":"Scoate","30":"OTCIntelegerea","31":"OTCCâștiguri","50":"REÎNCĂRCĂ","51":"REÎNCĂRCĂ","52":"REÎNCĂRCĂ","60":"Retragere","61":"Retragere","62":"Retragere"}},"authentication":{"title":"Autentificarea identității","auth_status":{"0":"Necreditat","1":"În curs de revizuire","2":"Certificat","3":"Respins"},"auth_photo_hold_example":"Exemple","auth_problem_tips":"Sfaturi: dacă aveți probleme,<b style=\'color:blue;\'> vă rugăm să contactați serviciul pentru clienți</u>","submit":"Certificat acum","uploading":"Încărcat..."},"teamIncomes":{"title":"Câștiguri ale echipei","level":"Rang","userid":"ID","time":"Timp","amount":"Cantitate"},"inviteFriends":{"title":"Invită prietenul","invite_code":"Cod recomandat","invite_friend_tip":"Bucură-te de banii mari imediat, du-te și invită","invite_friend_btn":"Faceți clic pe Copiere","share_rule":{"title":"Reguli de reducere","title_tip":"Pentru fiecare profit realizat de un prieten la înregistrare, vei primi un comision proporțional","rate_title":"Regulile pentru proporțiile comisiilor sunt următoarele","rate_user_level":"Rang de utilizator","rate_way":"Reguli","rate_num":"Proporția comisiei","rate_lv1_desc":"Utilizatori direct invitați","rate_lv2_desc":"LV1 utilizator invitat","rate_lv3_desc":"LV2 utilizatori invitați","rate_lv4_desc":"lv3 Toți utilizatorii invitați mai jos","hint":"Comision de achitat și USDT，și poate fi încasat în portofel în orice moment"},"copy_success":"Replicare succes"}},"team":{"index":{"team_total_income":"Incasări totale","team_residual_income":"Câștiguri excedentare","receive":"Primirea","team_info":"Detaliile echipei","team_user_list":"Vezi detalii","team_total_profit":"Incasări totale","team_total_num":"Numărul total","team_total_recharge":"Încărcare totală","people_num":"Numărul de persoane","people_profit":"Plata","team_invite_task":"Invitația la cerințele misiunii","team_invite_task_tip":"{need_num} invită utilizatorii LV1 să tranzacționeze cu succes și să obțină {amount} USDT","progress":"Progres","team_receive":"Primirea","team_hasreceive":"Primit","receive_success":"Primirea succesului"},"myTeam":{"title":"Detaliile echipei","team_total_profit":"Incasări totale","team_total_num":"Numărul total","team_total_recharge":"Încărcare totală","team_lv1":"Level 1","team_lv2":"Level 2","team_lv3":"Level 3","team_lv_count":"Cantitate:","team_lv_income":"Beneficii:","team_lv_recharge":"REÎNCĂRCĂ:","team_lv_invite":"Numărul de invitații:","team_lv_mobile":"Numar de telefon mobil:","team_lv_time":"Timp de înregistrare:"}},"transaction":{"index":{"total_assets":"Total active","trade_stat":"Statistici privind veniturile","tran_title":"WOTC Introducerea tranzacției","tran_desc":"Are un sistem global de potrivire a criptomonedei. Oferă utilizatorilor o platformă globală de tranzacționare a criptomonedei. Asigurarea stabilității tranzacțiilor și maximizarea profitului","accepting":"Procesarea tranzacției","wallet_balance":"Soldul portofelului","order_amount":"Suma tranzacției","order_amount_tip":"Vă rugăm să introduceți suma corectă","order_amount_all":"Toate","btn":"Începeți filtrarea","trade_success":"Succesul afacerii:","trade_amount":"Suma tranzacției:","trade_profit":"Câștiguri din tranzacție:","record":"Lista tranzacțiilor","tradingtime":"Timp rămas:{%s}","time":"Timp","amount":"Suma tranzacției","profit":"Profit","sell_time":"Timp de vânzare:","sell_amount":"Suma vândută:","income_time":"Timp de venit:","income_amount":"Profit:","order_num":"Număr de ordine:","search":"AI Potrivire inteligentă în...","msg":{"amount_tip":"Soldul mai mic de{deal_amount}， nu se poate filtra","order_amount_tip":"Vă rugăm să introduceți suma corectă"},"sell":{"symbol":"Criptomonedă:","service_provider":"MSB Furnizor de servicii certificat:","market_price":"USDTPrețul tranzacției:","trade_price":"Prețul tranzacției:","order_amount":"Cantitatea comenzii:","confirm":"Începeți tranzacționarea","cancel":"Anulat","trading":"În comerț..."},"sell_success":{"title":"Veniturile și fondurile vor fi depuse automat în contul dumneavoastră după 3 ore!","orderNo":"Număr de ordine:","trade_price":"Suma tranzacției:","profit":"Profit:","amount":"Total:","tip":"Transferat în portofelul de tranzacții și apoi transferat automat în portofelul de sold","confirm":"Confirmare"}},"incomeStatistics":{"title":"Statistici privind veniturile","total_orders_num":"Numărul total de tranzacții finalizate","total_money":"Valoare totală","total_profit":"Profit total","date":"Data","order_num":"Numărul de tranzacții","money":"Cantitate","profit":"Profit"}},"main":{"more":"Mai multe>","got_it":"O.K.","loading":"Se încarcă...","modify_success":"Modificare reușită"},"infomation":{"aboutus":{"1":"World Over The Counter este o echipă de profesioniști cu experiență, susținută de un bazin mare de lichidități.","2":"Serviciul World Over The Counter Over-the-Counter (OTC) pentru tranzacții care variază de la 10 USD până la peste milioane USD, care acoperă cursuri legale multiple, USDT și alte criptomonede majore. Cel mai mare avantaj al World Over The Counter over-the-counter serviciile reprezintă profunzimea noastră puternică de tranzacționare, personalizarea și protecția ridicată a confidențialității pentru investitori și deținătorii de active cu valoare netă ridicată. Serviciile de tranzacționare de la World Over The Counter, care scutesc clienții de pierderile alunecoase de preț care sunt comune pe platformele de tranzacționare populare , sunt cea mai bună alegere pentru comercianții mari de criptomonede.,","3":"Serviciul OTC al World Over The Counter se aplică pentru moneda legală, USDT sau alte criptomonede. World Over The Counter se concentrează pe a vă permite să tranzacționați criptomonede în mod liber și ușor, fără să vă faceți griji cu privire la complexitatea profunzimii tranzacționării și a asocierii de cumpărare și vânzare. În același timp, vă oferim o experiență de tranzacționare flexibilă, sigură și de înaltă calitate prin servicii complete de execuție și decontare a tranzacțiilor.","4":"1: Cerere pentru contul OTC World Over The Counter (cont personal)","5":"2: Depuneți moneda legală sau criptomonedă în contul dvs.","6":"3: După ce tranzacția este executată, USDT va fi depus automat în soldul contului dumneavoastră în trei ore.","7":"O schemă OTC pentru tine","8":"Comerciant profesionist","9":"Avem unul dintre cei mai buni comercianți de bitcoin și criptomonede din lume. Experiența noastră profesională poate fi urmărită cu mulți ani de la nașterea Bitcoin și oferim cel mai bun preț serviciu pentru mii de oaspeți la momentul potrivit și la locul potrivit. .","10":"O experiență de tranzacție diferită","11":"Spre deosebire de bursele over-the-counter generale și mari, World Over The Counter vă oferă cele mai bune aranjamente de finanțare cu lichiditate și opțiuni de tranzacționare adaptate nevoilor dvs. de tranzacționare. Când contul dvs. este configurat cu succes, vom comunica cu dvs. și vă vom oferi cea mai bună soluție. soluție pentru a satisface nevoile și așteptările programului dumneavoastră. Ne străduim pentru credibilitate, fiabilitate, comoditate și dezvoltarea comunității. Ne străduim să construim o relație bună și de durată cu fiecare client și să oferim cele mai bune servicii posibile în orice moment.","12":"Serviciul internațional","13":"World Over The Counter, cu sediul în statul american Colorado, este dedicată furnizării de platforme globale de tranzacționare cu criptomonede și servicii de tranzacționare clienților internaționali și a fost foarte apreciată și de încredere de către clienții din Asia, America, Australia, Europa și Africa.","14":"Credibil și de încredere","15":"World Over The Counter consideră că onestitatea și transparența sunt cheia succesului și acordă o mare importanță confidențialității și confidențialității informațiilor despre clienți, câștigând încrederea și sprijinul oaspeților cu o atitudine profesională. Ne angajăm să construim o imagine de încredere și să lucrăm mână în mână cu tine. Oriunde te-ai afla, poți folosi cu liniște sufletul întreaga gamă de servicii pe care le oferim."},"cert":{"1":"World Over The Counter Limited Licență de afaceri","2":"World Over The Counter Limited Certificat de înregistrare a licenței de afaceri.","3":"Marele Sigiliu al statului Colorado a fost ștampilat aici și acest certificat oficial a fost întocmit, executat și emis în mod corespunzător.","4":"Colorado va guverna acest lucru în conformitate cu legea aplicabilă.","5":"Verificați numărul certificatului de pe site-ul oficial al Secretarului de Stat din Colorado pentru a vedea detaliile companiei.","6":"World Over The Counter Foundation Licență de afaceri","7":"World Over The Counter Foundation Certificat de înregistrare a licenței de afaceri.","8":"Pentru că WOTC participă activ la World Charity Foundation pentru a transmite dragostea lor lumii.","9":"Acest certificat este aprobat și numerotat de către Biroul Secretarului de Stat din Colorado.","10":"În viitor, WOTC va participa la marile fonduri caritabile din lume și va ajuta mai mulți oameni.","11":"Certificatul fundației caritabile oferă, de asemenea, o mai bună protecție a activelor tuturor membrilor companiei.","12":"Verificați numărul certificatului de pe site-ul oficial al Secretarului de Stat din Colorado pentru a vedea detaliile companiei.","13":"În videoclip îi putem vedea pe membrii echipei WOTC și la PALM BEACH CHRISTIAN PREPARATORY SCHOOL din Florida, SUA, negociind o cooperare preliminară. WOTC sponsorizează școli. Și ajutați fiecare elev din școală să își reducă sarcina academică. Contribuie la industria educației.","14":"Activități caritabile desfășurate de membrii echipei WOTC din întreaga lume. Încerc să ajuți mai mulți oameni. Sunt ca o rază de lumină în zori. Lasă lumina noastră să strălucească asupra mai multor oameni.","15":"Nu fiți surprinși dacă veți vedea un membru al echipei WOTC trecând pe lângă ușa voastră într-o zi. Pentru că deja suntem populari în toată lumea. Știm că mulți concurenți ne fac rău adesea calomniind și creând zvonuri. Dar lăsăm aceste zvonuri să moară prin puterea solidarității. WOTC nu a dezamăgit niciodată pe nimeni.","16":"Mulțumim tuturor membrilor care au încredere și susțin WOTC. Să felicităm pentru înființarea cu succes a fundației caritabile WOTC.","17":"Site-ul web oficial de interogare a certificatului MSB:","18":"https://www.fincen.gov/msb-state-selector","19":"Site-ul oficial pentru solicitarea licenței de afaceri:","20":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","21":"Site-ul oficial al fundației:","22":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","23":"Dreptul de interpretare a întregului conținut de mai sus aparține World Over The Counter Limited","24":"Licențele MSB din SUA sunt licențe financiare reglementate și emise de Departamentul Trezoreriei Statelor Unite, în principal pentru afaceri și companii legate de servicii monetare, inclusiv tranzacții în monede digitale, monede virtuale, emitere ICO, schimb valutar, remitențe internaționale etc."},"joinus":{"1":"World Over The Counter salută pe oricine să contacteze și să se alăture comunității criptomonede. Indiferent dacă doriți să cumpărați și să vindeți criptomonede sau să aflați mai multe despre bitcoin și criptomonede, World Over The Counter va face tot posibilul.","2":"Dacă aveți întrebări sau comentarii, vă rugăm să ne contactați prin e-mail sau să ne sunați în orice moment. Încurajăm toți clienții noștri să participe la comunitatea noastră de criptomonede și să o promoveze.","3":"World Over The Counter se angajează să reducă costurile și restricțiile de tranzacție, oferind clienților praguri de tranzacție mai mici pe o mare majoritate a platformelor de tranzacționare la bursă și orice cantitate de tranzacție pe care ți-o putem oferi este oferta potrivită, deci că USDT și criptomoneda pot fi folosite pentru toți.","4":"În prezent, peste 1 miliard de oameni din întreaga lume nu au sau nu au servicii bancare, dar majoritatea au acces la telefoane inteligente","5":"Ei pot folosi oricând portofele pentru telefoane inteligente, astfel încât criptomonedele descentralizate să le ofere cea mai mare valoare – iar World Over The Counter va continua să urmărească mutarea criptomonedelor către acces universal.","6":"Atât online, cât și offline, World Over The Counter s-a angajat să dezvolte o comunitate activă și interactivă de utilizatori de criptomonede, dezvoltând și participând la comunitatea globală de bitcoin și criptomonede prin cunoștințe și comunicare.","7":"Fie că sunteți un novice în criptomonede sau un expert senior, vă așteptăm cu drag!","8":"World Over The Counter, vă rugăm să furnizați metodele dumneavoastră de contact și informații simple despre cum să vă asiste și vă vom răspunde cât mai curând posibil.","9":"E-mail: worldoverthecounter@gmail.com","10":""},"rules":{"1":"Termeni de utilizare,","2":"Când cumpărați USDT, nu utilizați niciodată o adresă de portofel care nu vă aparține. Vă rugăm să utilizați adresa de portofel. Vă rugăm să nu trimiteți USDT cuiva suspectat de fraudă!","3":"Când sunteți de acord cu Termenii noștri de utilizare, adică sunteți de acord cu Declarația noastră de colectare a datelor cu caracter personal și cu Politica de confidențialitate, cu Politica de confidențialitate și cu Politica privind cookie-urile.","4":"Nu vor furniza servicii, echipamente și alte chestiuni pentru persoanele sub 18 ani. Dacă aveți sub 18 ani și utilizați site-ul nostru, ar trebui să contactați persoana pe care o aveți în custodie pentru a exercita accesul, corectarea, anularea corespunzătoare. și drepturi de obiecție.","5":"Reguli de tranzacție","6":"Worldotc este o bursă americană de criptomonede certificată MSB. USDT și platforma globală de tranzacționare cu criptomonede oferă utilizatorilor precizie și comoditate ale tranzacțiilor. Introduceți suma de monedă virtuală pe care doriți să o cumpărați.","7":"Câștigurile sunt decontate la fiecare 3 ore, iar fiecare profit va fi de 0,4% din investiția ta","8":"Decontare de până la 8 ori pe zi, câștig maxim de 3,2%!","9":"Cea mai rapidă investiție de 23 de zile se dublează!","10":"Profit lunar maxim de 1.572 de ori!","11":"Reguli de retragere a reîncărcării","12":"Leagă-ți adresa TRC20 pentru retragere, 24 de ore pe zi pentru o taxă de retragere de 3%.","13":"Timpul de retragere este de 1 minut","14":"Rețineți că un singur cont de investiții poate fi legat pentru fiecare adresă TRC20.","15":"Reîncărcați cu moneda sau portofelul dumneavoastră cu o investiție minimă de 11 USDT și o retragere minimă de 5 USDT.","16":"Regula invitației","17":"Prietenii tăi fac bani investind în veniturile din comisioane pe care le poți câștiga:,","18":"Lv1 au invitat direct utilizatorii (15% din profitul total al tranzacției）","19":"Utilizatori invitați Lv2L1 (10% din profitul total al tranzacției）","20":"Utilizatori invitați Lv3L2 (5% din profitul total al tranzacției）","21":"Recompense pentru sarcini invitatoare.","22":"Pentru fiecare 10 membri LV1 invitați să finalizeze investiția, o invitație recompensează 10USDT","23":"Notă: Fiecare subordonat invitat trebuie să finalizeze investiția LV1 pentru a fi considerat un utilizator valid.","24":"Memento: dacă aveți întrebări despre recompense și reguli, vă rugăm să contactați managerul serviciului pentru clienți."}},"serverCodes":{"401":"Parametrii nu sunt corecti","406":"echilibru insuficient.","407":"Suma tranzacție incorectă","408":"Parametru invalid.","409":"Parola constă dintr-o literă plus un număr.","410":"Eroare cod de validare.","411":"Eroare de nume de utilizator sau parolă","412":"Înghețarea contului, vă rugăm să contactați serviciul pentru clienți.","413":"Vă rugăm să completați corect numărul de telefon mobil.","414":"Numărul de telefon a fost înregistrat, vă rugăm să selectați un alt număr de telefon.","415":"Obțineți intervalul de frecvență al codului de autentificare de 1 minut.","416":"Solicitări frecvente, încercați din nou mai târziu.","417":"Codul de autentificare este invalid, vă rugăm să retrimiteți codul de autentificare.","418":"Dacă telefonul nu este verificat sau verificarea a expirat, vă rugăm să începeți din nou înregistrarea.","419":"Porecla este formată din caractere de 2 ~ 8 biți.","420":"Vă rugăm să introduceți codul de invitație corect.","421":"Numărul de telefon nu a fost înregistrat și nu trebuie să fie preluată parola.","422":"Repetați cererea","423":"Codul de autentificare a fost trimis cu succes","424":"Numărul de coduri de verificare trimise în acea zi a atins limita superioară.","425":"Nu s-a putut trimite codul de verificare","426":"Adresa nu poate fi modificată, vă rugăm să contactați serviciul clienți","427":"verificare esuata","428":"Ați legat deja Google Authenticator","429":"Verificarea parolei originale a eșuat","500":"Excepție de rețea, vă rugăm să încercați din nou mai târziu.","501":"Suspendați autentificarea","502":"Suspendați înregistrarea","503":"Nu sunt autentificat.","605":"Vă rugăm să introduceți cantitatea corectă","606":"Numărul de note este mai mic decât minimul","607":"Numărul de licitații este mai mare decât maximul","608":"Vă rugăm să introduceți adresa corectă a ofertei.","609":"Format de adresă incorect","610":"Eroare de parolă originală","706":"Această adresă a fost folosită, vă rugăm să înlocuiți.","708":"Acest utilizator nu exista.","712":"Vă rugăm să vă verificați numele real și apoi să îl retrageți.","713":"În prezent, nu se plătesc venituri","714":"Premiul pentru sarcina curentă a fost primit","715":"Nerespectarea condițiilor de primire"}}')
    },
    6436: function(e) {
        e.exports = JSON.parse('{"tabBar":{"home":"مسكن","trade":"طابق التجارة","team":"فريقي","mine":"مِلكِي"},"funcs":{"aboutus":"حولWOTC","rules":"قواعد المنصة","download":"مركز التحميل","cert":"شهادة التأهيل","setting":"لغة","customer":"خدمة الزبائن","activities":"إعلان عن الحدث","joinus":"انضمWOTC","earn":"المال المجاني يدر فائدة"},"home":{"index":{"trade_data":"بيانات المعاملات","no_register":"الرجاء التسجيل كعضو أول","no_message":"لا يوجد معلومات\'"},"download":{"google_play":"Worldotc for Android","google_play_tip":"تنزيل متجر التطبيقات","ios":"Worldotc for iOS","ios_tip":"انقر للانتقال إلى الموقع الرسمي للتنزيل"},"language":{"language":"لغة"},"earn":{"title":"المال المجاني يدر فائدة","total_profit":"إجمالي العائدات","access_detail":"تفاصيل الوصول","available_balance":"الأرصدة المتاحة","storage_balance":"المبلغ المودع","item_title":"قائمة الاتفاقات","time":"زمن","profit":"سدد دينك","btn":"اشتري الآن","msg":{"earn_success":"الصفقة ناجحة"},"trade":{"sell_title":"العودة على الطلبات","sell_time":"زمن：","profit_fee":"سعر الفائدة","input_amount":"أدخل المبلغ","input_amount_tip":"0.00","input_amount_msg":"الرجاء إدخال المبلغ","sell_income":"العوائد المتوقعة","sell_btn":"يشتري","cancel_btn":"ألغيت","input_amount_min_tip":"المبلغ أقل من الحد الأدنى:: ","input_amount_max_tip":"المبلغ يتجاوز الحد الأقصى: ","note":"إيداع الأصول الخاملة من أجل الربح","cancel":"ألغيت"}},"earnlist":{"title":"تفاصيل الوصول","type_undo":"غير مكتمل","type_done":"مكتمل","type":"يكتب","amount":"مقدار","profit":"سدد دينك","buy_date":"تاريخ الإيداع","send_date":"تاريخ التسوية"}},"login":{"login":{"title":"تسجيل الدخول","password":"الشفرة","passwd_tip":"الرجاء إدخال كلمة مرور 6 ~ 16 بت","mobile":"رقم الهاتف الجوال","mobile_tip":"الرجاء إدخال رقم هاتفك المحمول","register":"اشتراك","forgot_pwd":"كلمة مرور مفقودة","btn":"تسجيل الدخول"},"phoneCode":{"custom_phone_code_tip":"الرجاء إدخال رمز المنطقة الدولية","confirm":"نعم","msg":"المنطقة الحالية ليست مفتوحة للتسجيل"},"register":{"title":"اشتراك","smscode":"رمز التحقق عبر الرسائل القصيرة","smscode_placeholder":"الرجاء إدخال رمز التحقق عبر الرسائل القصيرة","smscode_tip":"الرجاء إدخال رمز التحقق عبر الرسائل القصيرة","smscode_send_text":"إرسال رمز المصادقة","login":"تسجيل الدخول","next_step":"الخطوة التالية","password":"كلمه السر","passwd_tip":"الرجاء إدخال كلمة مرور 6 ~ 16 بت","nickname":"كنية","nickname_tip":"الرجاء إدخال اسم الشهرة الخاص بك","invite_code":"الرمز الموصى به","invite_code_tip":"الرجاء إدخال الرمز الموصى به","submit":"استسلام","reg_success":"نجاح التسجيل","mobile_tip":"الرجاء إدخال رقم هاتفك المحمول"},"forget":{"title":"كلمة مرور مفقودة","password":"كلمة المرور","passwd_tip":"الرجاء إدخال كلمة مرور 6 ~ 16 بت","smscode":"رمز التحقق عبر الرسائل القصيرة","smscode_placeholder":"الرجاء إدخال رمز التحقق عبر الرسائل القصيرة","smscode_send_text":"إرسال رمز المصادقة","submit":"استسلام","success":"تم تعديل كلمة المرور بنجاح"}},"mine":{"ucenter":{"logout":"مخرج","invite_code":"الرمز الموصى به: ","my_total_assets":"إجمالي أصولي","my_account":"حسابي","recharge":"تعبئة رصيد","withdraw":"انسحاب","personal_info":"معلومات شخصية","google_auth":"مركز الأمن","recharge_record":"سجلات إعادة الشحن","withdraw_record":"سجلات السحب","fund_detail":"تفاصيل الأموال","auth":"مصادقة الهوية","team_profit":"أرباح الفريق","invite_friend":"دعوة الأصدقاء","tip":"نصائح","set_withdraw_address":"الرجاء ربط عنوان السحب أول","set":"إعدادات","cancel":"ألغيت"},"googleauth":{"title":"مركز الأمن","googleauth_tip":"الرجاء ربط Google Authenticator","open_googleauth":"افتح Google Authenticator","setting_tip":"ابدأ في مسح رمز الاستجابة السريعة المقدم في نظامنا الأساسي ، أو أدخل يدويًا المفتاح المكون من 16 رقمًا المتوفر في النظام الأساسي. بعد الإضافة الناجحة ، أدخل التحقق من كلمة المرور الديناميكي لإكمال الربط。","copy":"مفتاح النسخ","copy_success":"تم النسخ بنجاح","vercode":"رمز التحقق جوجل","bind":"المصادقة والربط","unbind":"فك الارتباط","vercode_tip":"الرجاء إدخال رمز التحقق","bind_success":"نجح التجليد","notice":"نصائح نوع","bind_tip":"أنت ملزم بـ Google Authenticator","unbind_tip":"لإلغاء الربط ، يرجى الحصول على رمز التحقق عبر الرسائل القصيرة للتحقق","unbind_success":"فك الارتباط بنجاح"},"userinfo":{"title":"معلومات شخصية","modify":"تعديل","nickname":"كنية","mobile":"رقم الهاتف الجوال","address":"عنوان الانسحاب","login_pwd":"كلمة سر الدخول","input_tip":"الرجاء ملء المحتوى","set":"إعدادات","cancel":"ألغيت","nickname_tip":"يرجى إدخال اسم مستعار","login_pwd_tip":"الرجاء إدخال كلمة المرور","withdraw_address_tip":"الرجاء إدخال عنوان السحب","old_pass":"كلمة المرور القديمة","new_pass":"كلمة السر الجديدة","old_pass_tip":"الرجاء إدخال كلمة المرور الأصلية","new_pass_tip":"الرجاء إدخال كلمة مرور جديدة","pass_tip":"إذا نسيت كلمة المرور الخاصة بك ، فيرجى استردادها من رمز التحقق الخاص بهاتفك المحمول في صفحة تسجيل الدخول","vercode":"رمز التحقق جوجل","code_tip":"الرجاء إدخال رمز التحقق جوجل"},"recharge":{"title":"سجل شيبمنت","recharge_tip":"تعبئة رصيد","recharge_tip_mark1":"عنوان الإيداع يدعم TRC20-USDT فقط ، والحد الأدنى للإيداع هو 10 دولارات","recharge_tip_mark2":"أمريكية ، يرجى عدم تحويل الأصول الأخرى إلى عنوان الإيداع لتجنب فقدان الأموال.","qrcode":"رمز ثنائي الأبعاد","copy":"تكرار","copy_success":"نجاح النسخ المتماثل"},"rechargeRecords":{"title":"سجلات السحب","time":"زمن","amount":"مقدار","status":"حالة","payway":"تعبئة رصيد","orderno":"رقم الطلب","recharge_status":{"1":"مكتمل","2":"فشل إعادة الشحن","3":"ألغيت"}},"withdraw":{"title":"انسحاب","available_balance":"الأرصدة المتاحة","real_money":"إيصال فعلي (رسوم المناولة: 3٪)","smscode":"رمز التحقق عبر الرسائل القصيرة","smscode_placeholder":"الرجاء إدخال رمز التحقق عبر الرسائل القصيرة","smscode_send_text":"إرسال رمز المصادقة","address":"عنوان الانسحاب","submit":"استسلام","withdraw_success":"نجاح الانسحاب","withdraw_tip":"الحد الأدنى للسحب: ","withdraw_amount_tip":"الرجاء إدخال مبلغ السحب","vercode_tip":"لا يمكن أن يكون رمز المصادقة فارغًا","password":"كلمه السر","passwd_tip":"الرجاء إدخال كلمة مرور مكونة من 6 إلى 16 رقمًا","vercode":"رمز التحقق جوجل","code_tip":"الرجاء إدخال رمز التحقق جوجل","tips":"تذكير: من أجل سلامة أموالك ، يرجى الانتقال إلى مركز الأمان لربط Google Authenticator。"},"withdrawalRecords":{"title":"سجلات السحب","time":"زمن","amount":"مقدار","status":"حالة","withdraw_way":"عنوان الانسحاب","orderno":"رقم الطلب","withdraw_status":{"0":"في الانسحاب","1":"نجاح الانسحاب","2":"إلغاء الانسحاب"}},"funds":{"title":"تفاصيل الأموال","time":"زمن","amount":"مقدار","status":"حالة","fund_status":{"10":"استلام العائدات","11":"مكافآت المهمة","20":"أحفظ في","21":"أخرج","30":"OTCالصفقة","31":"OTCالأرباح","50":"تعبئة رصيد","51":"تعبئة رصيد","52":"تعبئة رصيد","60":"انسحاب","61":"انسحاب","62":"انسحاب"}},"authentication":{"title":"مصادقة الهوية","auth_status":{"0":"غير معتمد","1":"قيد المراجعة","2":"معتمد","3":"مرفوض"},"auth_photo_hold_example":"أمثلة","auth_problem_tips":"نصائح: إذا كانت لديك مشاكل ، يرجى الاتصال بخدمة العملاء","submit":"معتمد الآن","uploading":"محمّل.."},"teamIncomes":{"title":"أرباح الفريق","level":"مرتبة","userid":"ID","time":"زمن","amount":"مقدار"},"inviteFriends":{"title":"دعوة الأصدقاء","invite_code":"الرمز الموصى به","invite_friend_tip":"استمتع بالمال الوفير على الفور ، اذهب وادع","invite_friend_btn":"انقر فوق نسخ","share_rule":{"title":"قواعد الخصم","title_tip":"مقابل كل ربح يحققه صديق عند التسجيل ، ستحصل على عمولة متناسبة","rate_title":"قواعد نسب العمولة هي كما يلي","rate_user_level":"رتبة المستخدم","rate_way":"قواعد","rate_num":"نسبة العمولة","rate_lv1_desc":"المستخدمون المدعوون مباشرة","rate_lv2_desc":"1 مستخدم تمت دعوته","rate_lv3_desc":"2 من المستخدمين المدعوين","rate_lv4_desc":"3 جميع المستخدمين المدعوين أدناه","hint":"عمولة تسوية ويمكن صرفها إلى محفظتك في أي وقت"},"copy_success":"نجاح النسخ المتماثل"}},"team":{"index":{"team_total_income":"إجمالي العائدات","team_residual_income":"الأرباح الفائضة","receive":"يستلم","team_info":"تفاصيل الفريق","team_user_list":"انظر التفاصيل","team_total_profit":"إجمالي العائدات","team_total_num":"الرقم الإجمالي","team_total_recharge":"إجمالي إعادة الشحن","people_num":"عدد الاشخاص","people_profit":"سدد دينك","team_invite_task":"دعوة إلى متطلبات المهمة","team_invite_task_tip":"{need_num} يدعو مستخدمي LV1 للتداول بنجاح والحصول على {amount} USDT","progress":"تقدم","team_receive":"يستلم","team_hasreceive":"تلقى","receive_success":"تلقي النجاح"},"myTeam":{"title":"تفاصيل الفريق","team_total_profit":"إجمالي العائدات","team_total_num":"الرقم الإجمالي","team_total_recharge":"إجمالي إعادة الشحن","team_lv1":"Level 1","team_lv2":"Level 2","team_lv3":"Level 3","team_lv_count":"كمية","team_lv_income":"فوائد","team_lv_recharge":"تعبئة رصيد","team_lv_invite":"عدد الدعوات","team_lv_mobile":"رقم الهاتف الجوال","team_lv_time":"وقت التسجيل"}},"transaction":{"index":{"total_assets":"إجمالي الأصول","trade_stat":"إحصائيات الإيرادات","tran_title":"WOTCمقدمة الصفقة","tran_desc":"WOTCلديه نظام مطابقة عالمي للعملات المشفرة. يزود المستخدمين بمنصة تداول عالمية للعملات المشفرة. يضمن استقرار المعاملات وتعظيم الأرباح","accepting":"معالجة المعاملات","wallet_balance":"رصيد المحفظة","order_amount":"قيمة التحويل","order_amount_tip":"الرجاء إدخال المبلغ الصحيح","order_amount_all":"الجميع","btn":"بدء التصفية","trade_success":"نجاح الصفقة","trade_amount":"قيمة التحويل","trade_profit":"أرباح المعاملات","record":"قائمة المعاملات","tradingtime":"الوقت المتبقي:{%s}","time":"زمن","amount":"قيمة التحويل","profit":"ربح","sell_time":"وقت البيع","sell_amount":"المبلغ المباع","income_time":"وقت الدخل","income_amount":"ربح","order_num":"رقم الطلب","search":"المطابقة الذكية في ...","msg":{"amount_tip":"رصيد أقل من () ، غير قادر على التصفية","order_amount_tip":"الرجاء إدخال المبلغ الصحيح"},"sell":{"symbol":"عملة مشفرة","service_provider":"MSBمقدم الخدمة المعتمد：","market_price":"USDTسعر الصفقة：","trade_price":"سعر الصفقة","order_amount":"كمية الطلب","confirm":"بدء التداول","cancel":"ألغيت","trading":"في التجارة..."},"sell_success":{"title":"سيتم إيداع الإيرادات والأموال تلقائيًا في حسابك بعد 3 ساعات!","orderNo":"رقم الطلب:","trade_price":"قيمة التحويل","profit":"ربح","amount":"المجموع","tip":"تم التحويل إلى محفظة المعاملات ومن ثم تحويلها تلقائيًا إلى محفظة الرصيد","confirm":"تأكيد"}},"incomeStatistics":{"title":"إحصائيات الإيرادات","total_orders_num":"إجمالي عدد المعاملات المنجزة","total_money":"المبلغ الإجمالي","total_profit":"اجمالي الربح","date":"تاريخ","order_num":"عدد المعاملات","money":"مقدار","profit":"ربح"}},"main":{"more":"المزيد >","got_it":"نعم","loading":"جار التحميل...","modify_success":"التعديل ناجح"},"infomation":{"aboutus":{"1":"World Over The Counter هي فريق من المحترفين ذوي الخبرة مدعومين بمجموعة كبيرة من السيولة","2":"خدمة World Over The Counter\'s Over-the Counter (OTC) للمعاملات التي تتراوح من 10 دولارات إلى أكثر من ملايين الدولارات ، والتي تغطي العديد من المناقصات القانونية ، و USDT ، وغيرها من العملات المشفرة الرئيسية. أعظم ميزة لـ World Over The Counter بدون وصفة طبية الخدمات هي عمق التداول القوي لدينا ، والتخصيص ، وحماية الخصوصية العالية للمستثمرين وأصحاب الأصول ذوي الثروات العالية.خدمات World Over The Counter التي لا تحتاج إلى وصفة طبية ، والتي تعفي العملاء من خسائر الأسعار الزلقة الشائعة على منصات التداول الشهيرة ، هي الخيار الأفضل لمتداولي العملات المشفرة الكبار","3":"تنطبق خدمة OTC من World Over The Counter على العطاء القانوني أو USDT أو أي عملة معماة أخرى. تركز World Over The Counter على السماح لك بالتداول في العملات المشفرة بحرية وسهولة دون القلق بشأن مدى تعقيد عمق التداول وإقران الشراء والبيع. في الوقت نفسه ، نوفر لك تجربة معاملات مرنة وآمنة وعالية الجودة من خلال خدمات تنفيذ وتسوية شاملة للمعاملات","4":"1：1: طلب الحصول على حساب World Over The Counter OTC (حساب شخصي)","5":"2: إيداع العطاء القانوني أو العملة المشفرة في حسابك","6":"3: بعد تنفيذ المعاملة ، سيتم إيداع USDT تلقائيًا في رصيد حسابك في غضون ثلاث ساعات","7":"مخطط OTC من أجلك","8":"التاجر المحترف","9":"لدينا واحد من أفضل متداولي البيتكوين والعملات المشفرة في العالم. يمكن تتبع خبرتنا المهنية إلى سنوات عديدة منذ ولادة Bitcoin ، ونحن نقدم أفضل خدمة أسعار لآلاف الضيوف في الوقت المناسب وفي المكان المناسب . ","10":"تجربة معاملة مختلفة","11":"على عكس البورصات العامة والكبيرة خارج البورصة ، توفر لك World Over The Counter أفضل ترتيبات تمويل السيولة وخيارات التداول المصممة لاحتياجات التداول الخاصة بك. عندما يتم إعداد حسابك بنجاح ، سوف نتواصل معك ونقدم لك الخيار المثالي حل يلبي احتياجات وتوقعات برنامجك. نسعى جاهدين لتحقيق المصداقية والموثوقية والراحة وتنمية المجتمع. ونحن نسعى جاهدين لبناء علاقة جيدة ودائمة مع كل عميل وتقديم أفضل خدمة ممكنة في جميع الأوقات","12":"الخدمة الدولية","13":"يقع مقرها الرئيسي في كولورادو بالولايات المتحدة الأمريكية ، وهي ملتزمة بتزويد العملاء الدوليين بمنصات تداول العملات ذات الشهرة العالمية وخدمات التداول ، وقد حازت على ثناء وثقة العملاء في آسيا وأمريكا وأستراليا وأوروبا وأفريقيا.","14":"مصداقية وموثوق بها","15":"تؤمن World Over The Counter بأن الصدق والشفافية هما مفتاح النجاح ، وتولي أهمية كبيرة لخصوصية وسرية معلومات العملاء ، واكتساب ثقة ودعم الضيوف بموقف احترافي. نحن ملتزمون ببناء صورة موثوق بها والعمل يدا بيد معك. أينما كنت ، يمكنك استخدام مجموعة كاملة من الخدمات التي نقدمها مع راحة البال"},"cert":{"1":"World Over The Counter Limited رخصة أعمال","2":"World Over The Counter Limited شهادة تسجيل الرخصة التجارية","3":"تم ختم الختم العظيم لولاية كولورادو هنا وتم إنشاء هذه الشهادة الرسمية وتنفيذها وإصدارها حسب الأصول.","4":"ستقوم كولورادو بتنظيم هذا وفقًا للقانون المعمول به.","5":" من رقم الشهادة على الموقع الرسمي لوزير خارجية كولورادو لعرض تفاصيل الشركة.","6":"World Over The Counter Foundation رخصة أعمال","7":"World Over The Counter Foundation شهادة تسجيل الرخصة التجارية.","8":"لأن WOTC تشارك بنشاط في المؤسسات الخيرية العالمية ، وتنشر حبهم للعالم.","9":"تمت الموافقة على هذه الشهادة وترقيمها من قبل مكتب وزير خارجية كولورادو.","10":"في المستقبل ، ستشارك WOTC في الصناديق الخيرية الرئيسية في العالم وتساعد المزيد من الناس.","11":"توفر شهادة المؤسسة الخيرية أيضًا حماية أفضل للأصول لجميع أعضاء الشركة.","12":"تحقق من رقم الشهادة على الموقع الرسمي لوزير خارجية كولورادو لعرض تفاصيل الشركة.","13":" في الفيديو ، يمكننا أن نرى أعضاء فريق WOTC ومدرسة PALM BEACH CHRISTIAN PREATORY SCHOOL في فلوريدا ، الولايات المتحدة الأمريكية ، يتفاوضون على تعاون أولي. ترعى WOTC المدارس. وتساعد كل طالب في المدرسة على تقليل الأعباء الأكاديمية. المساهمة في صناعة التعليم.","14":"الأنشطة الخيرية التي يقوم بها أعضاء فريق WOTC حول العالم. تحاول مساعدة المزيد من الناس. إنهم مثل شعاع نور في الفجر. دع ضوءنا يضيء على المزيد من الناس.","15":"لا تتفاجأ إذا رأيت يا رفاق أحد أعضاء فريق WOTC يمر من باب منزلك يومًا ما. لأننا بالفعل مشهورون في جميع أنحاء العالم. نحن نعلم أن العديد من المنافسين غالبًا ما يؤذوننا من خلال الافتراء وخلق الشائعات. لكننا تركنا هذه الشائعات تموت من خلال قوة التضامن. WOTC لم تخذل أحدا.","16":"شكراً لجميع الأعضاء الذين يثقون ويدعمون WOTC. دعونا نهنئ التأسيس الناجح لمؤسسة WOTC الخيرية.","17":"موقع الاستعلام الرسمي لشهادة MSB:","18":"https://www.fincen.gov/msb-state-selector","19":"الموقع الرسمي للاستعلام عن الرخصة التجارية:","20":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","21":"الموقع الرسمي للمؤسسة:","22":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","23":" حق التفسير لجميع المحتويات المذكورة أعلاه ينتمي إلى World Over The Counter Limited","24":"تراخيص MSB الأمريكية هي تراخيص مالية منظمة وصادرة عن وزارة الخزانة الأمريكية ، بشكل أساسي للشركات والشركات ذات الصلة بالخدمات المالية ، بما في ذلك المعاملات بالعملات الرقمية ، والعملات الافتراضية ، وإصدار ICO ، والصرف الأجنبي ، والتحويلات الدولية ، وما إلى ذلك"},"joinus":{"1":"World Over The Counter ترحب بأي شخص للاتصال والانضمام إلى مجتمع العملات المشفرة. سواء كنت ترغب في شراء وبيع العملات المشفرة أو معرفة المزيد عن البيتكوين والعملات المشفرة ، فإن World Over The Counter ستبذل قصارى جهدك。","2":"إذا كان لديك أي أسئلة أو تعليقات ، يرجى مراسلتنا عبر البريد الإلكتروني أو الاتصال بنا في أي وقت. نحن نشجع جميع عملائنا على المشاركة في مجتمع العملات المشفرة والترويج لها。","3":"تلتزم World Over The Counter بخفض تكاليف المعاملات والقيود عليها ، مما يوفر للعملاء حدًا أدنى للمعاملات على أغلبية أكبر من منصات التداول خارج البورصة ، وأي قدر من المعاملات يمكننا أن نقدمه لك هو الصفقة المناسبة ، لذلك يمكن استخدام USDT والعملات المشفرة للجميع。","4":"في الوقت الحاضر ، أكثر من مليار شخص في جميع أنحاء العالم ليس لديهم أو يفتقرون إلى الخدمات المصرفية ، لكن معظمهم لديهم إمكانية الوصول إلى الهواتف الذكية。","5":"يمكنهم دائمًا استخدام محافظ الهواتف الذكية بحيث تقدم العملات المشفرة اللامركزية أكبر قيمة لهم - وستستمر World Over The Counter في توجيه العملات المشفرة نحو الوصول الشامل.。","6":"عبر الإنترنت وغير متصل ، التزمت World Over The Counter بتطوير مجتمع مستخدم نشط وتفاعلي للعملات المشفرة ، وتطوير مجتمع البيتكوين والعملات المشفرة العالمي والمشاركة فيه من خلال المعرفة والتواصل。","7":"سواء كنت مبتدئًا في مجال العملات المشفرة أو خبيرًا كبيرًا ، نرحب بك！","8":"World Over The Counter يرجى تقديم طرق الاتصال الخاصة بك ومعلومات بسيطة حول كيفية مساعدتك وسنقوم بالرد في أقرب وقت ممكن.،。","9":"البريد الإلكتروني ：worldoverthecounter@gmail.com","10":""},"rules":{"1":"شروط الاستخدام","2":"عند شراء USDT ، لا تستخدم أبدًا عنوان محفظة لا يخصك. يُرجى استخدام عنوان محفظتك. يُرجى عدم إرسال USDT إلى شخص يشتبه في قيامه بالاحتيال","3":"عندما توافق على شروط الاستخدام الخاصة بنا ، فهذا يعني أنك توافق على بيان جمع البيانات الشخصية وسياسة الخصوصية وسياسة الخصوصية وسياسة ملفات تعريف الارتباط。","4":"لن يقدموا خدمات ومعدات ومسائل أخرى للأشخاص الذين تقل أعمارهم عن 18 عامًا. إذا كان عمرك أقل من 18 عامًا وتستخدم موقعنا على الويب ، فيجب عليك الاتصال بالشخص الذي لديك حق الوصاية لممارسة الوصول والتصحيح والإلغاء المناسبين وحقوق الاعتراض。","5":"قواعد المعاملات","6":"Worldotc هي عملة مشفرة أمريكية معتمدة من MSB. توفر منصة تداول USDT ومنصة تداول العملات المشفرة العالمية للمستخدمين دقة وراحة في المعاملات. أدخل مبلغ العملة الافتراضية التي تريد شراءها。","7":"يتم تسوية الأرباح كل 3 ساعات ، وسيكون كل ربح 0.4٪ من استثمارك.！","8":"تسوية تصل إلى 8 مرات في اليوم ، بحد أقصى للأرباح 3.2٪ !،","9":"أسرع استثمار لمدة 23 يومًا يتضاعف","10":"أقصى ربح شهري 1.572 مرة !","11":"إعادة شحن قواعد السحب","12":"اربط عنوان TRC20 الخاص بك للسحب ، 24 ساعة في اليوم مقابل 3٪ رسوم سحب 。","13":"وقت الانسحاب 1 دقيقة","14":"لاحظ أنه يمكن ربط حساب استثمار واحد فقط لكل عنوان TRC20","15":"أعد الشحن بعملتك أو محفظتك باستثمار 11 دولارًا أمريكيًا كحد أدنى وسحب بحد أدنى 5 دولارات أمريكية.","16":"قاعدة الدعوة","17":"يكسب أصدقاؤك المال من خلال الاستثمار في دخل العمولة الذي يمكنك كسبه","18":"Lv1 دعا المستخدمين مباشرة (15٪ من إجمالي ربح الصفقة)","19":"Lv2L1 دعا المستخدمين (10٪ من إجمالي ربح الصفقة)","20":"دعا Lv3L2 المستخدمين (5٪ من إجمالي ربح الصفقة)","21":"دعوة مكافآت المها","22":"مقابل كل 10 أعضاء LV1 تمت دعوتهم لإكمال الاستثمار ، تكافئ الدعوة 10 دولارات أمريكية","23":"ملاحظة: يحتاج كل مرؤوس تمت دعوته إلى إكمال استثمار LV1 ليعتبر مستخدمًا صالحًا。","24":"تذكير: إذا كان لديك أي أسئلة حول المكافآت والقواعد ، يرجى الاتصال بمدير خدمة العملاء "}},"serverCodes":{"401":"المعلمات ليست صحيحة","406":"رصيد غير كاف","407":"مبلغ الصفقة غير صحيح","408":"معلمة غير صالحة","409":"تتكون كلمة المرور من حرف ورقم ","410":"خطأ في رمز التحقق.","411":"خطا فى الاسم او الرقم السرى المستخدم","412":"تجميد الحساب ، يرجى الاتصال بخدمة العملاء","413":"الرجاء إدخال رقم هاتفك المحمول بشكل صحيح.","414":"تم تسجيل رقم الهاتف ، يرجى تحديد رقم هاتف آخر","415":"احصل على الفاصل الزمني لتردد رمز المصادقة لمدة دقيقة واحدة","416":"طلبات متكررة ، حاول مرة أخرى في وقت لاحق","417":"رمز المصادقة غير صالح ، يرجى إعادة إرسال رمز المصادقة","418":"إذا لم يتم التحقق من الهاتف أو انتهت صلاحية التحقق ، فيرجى بدء التسجيل مرة أخرى","419":"اللقب يتكون من حرفين إلى 8 بت","420":"الرجاء إدخال رمز الدعوة الصحيح","421":"لم يتم تسجيل رقم الهاتف ولا يلزم استرجاع كلمة المرور","422":"كرر الطلب","423":"تم إرسال رمز المصادقة بنجاح","424":"لقد وصل عدد رموز التحقق المرسلة في ذلك اليوم إلى الحد الأقصى","425":"فشل في إرسال رمز التحقق","426":"لا يمكن تعديل العنوان ، يرجى الاتصال بخدمة العملاء","427":"فشل التحقق","428":"لقد سبق لك ربط Google Authenticator","429":"فشل التحقق من كلمة المرور الأصلية","500":"استثناء الشبكة ، يرجى المحاولة مرة أخرى في وقت لاحق","501":"تعليق تسجيل الدخول ","502":"تعليق التسجيل","503":"لم تقم بتسجيل الدخول.","605":"الرجاء إدخال الكمية الصحيحة","606":"عدد الأوراق النقدية أقل من الحد الأدنى.","607":"عدد المناقصات أكبر من الحد الأقصى","608":"الرجاء إدخال عنوان المناقصة الصحيح","609":"تنسيق العنوان غير صحيح","610":"خطأ كلمة المرور الأصلية","706":"تم استخدام هذا العنوان ، يرجى استبداله","708":"هذا المستخدم غير موجود","712":"يرجى التحقق من اسمك الحقيقي ثم سحبه","713":"حاليا لا توجد عائدات مستحقة الدفع","714":"تم استلام جائزة المهمة الحالية","715":"عدم استيفاء شروط الاستلام"}}')
    },
    "65d1": function(e, a, t) {
        "use strict";
        var i = t("4ea4");
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.getinfo = r, a.setUsername = o, a.setLoginPasswd = s, a.setWallet = d, a.rechargeList = l, a.withdrawList = u, a.fundsList = m, a.getIncomes = c, a.getUposs = p, a.authCamera = g, a.checkAuth = f, a.withdrawWallet = h, a.recharge = v, a.googleAuth = A;
        var n = i(t("4027"));

        function r(e) {
            return (0, n.default)("gateway/sso/getinfo", e, "POST")
        }

        function o(e) {
            return (0, n.default)("gateway/user/setUsername", e, "POST")
        }

        function s(e) {
            return (0, n.default)("gateway/user/loginPasswd", e, "POST")
        }

        function d(e) {
            return (0, n.default)("gateway/user/withdrawAddress", e, "POST")
        }

        function l(e) {
            return (0, n.default)("gateway/pay/rechargeHistory", e, "POST")
        }

        function u(e) {
            return (0, n.default)("gateway/pay/withdrawHistory", e, "POST")
        }

        function m(e) {
            return (0, n.default)("gateway/pay/funds", e, "POST")
        }

        function c(e) {
            return (0, n.default)("gateway/user/getProfitDetal", e)
        }

        function p() {
            return (0, n.default)("gateway/uposs")
        }

        function g(e) {
            return (0, n.default)("gateway/uposs/camera", e, "POST")
        }

        function f(e) {
            return (0, n.default)("gateway/user/auth", e, "POST")
        }

        function h(e) {
            return (0, n.default)("gateway/pay/withdrawWallet", e, "POST")
        }

        function v(e) {
            return (0, n.default)("gateway/pay/recharge", e, "POST")
        }

        function A(e) {
            return (0, n.default)("gateway/sso/googleauth", e, "POST")
        }
    },
    "6dcc": function(e, a, t) {
        e.exports = t.p + "static/img/SOL.f3839da5.png"
    },
    "6df7": function(e, a, t) {
        "use strict";
        var i = t("4ea4");
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.getDealInfo = r, a.getDealLogs = o, a.incomeStat = s, a.createOrder = d, a.submitOrder = l;
        var n = i(t("4027"));

        function r(e) {
            return (0, n.default)("gateway/user/getDealInfo", e, "POST")
        }

        function o(e) {
            return (0, n.default)("gateway/user/getDealLogs", e)
        }

        function s(e) {
            return (0, n.default)("gateway/user/incomeStat", e)
        }

        function d(e) {
            return (0, n.default)("gateway/user/createOrder", e, "POST")
        }

        function l(e) {
            return (0, n.default)("gateway/user/submitOrder", e, "POST")
        }
    },
    7910: function(e, a) {
        e.exports = "data:image/png;base64,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"
    },
    8134: function(e) {
        e.exports = JSON.parse('{"tabBar":{"home":"Casa","trade":"Piano di scambio","team":"La mia squadra","mine":"Il mio"},"funcs":{"aboutus":"Di WOTC","rules":"Regole della piattaforma","download":"Centro Download","cert":"Certificato di qualificazione","setting":"Lingua","customer":"Assistenza clienti ","activities":"Annuncio evento","joinus":"GiunturaWOTC","earn":"Il denaro gratis fa guadagnare interessi"},"home":{"index":{"trade_data":"Dati della transazione","no_register":"Per favore registrati prima come membro","no_message":"\'Nessuna informazione\'"},"download":{"google_play":"Clicca per passare al sito ufficiale per il download","google_play_tip":"Download dell\'App Store","ios":"Clicca per passare al sito ufficiale per il download","ios_tip":"Clicca per passare al sito ufficiale per il download"},"language":{"language":"Lingua"},"earn":{"title":"Il denaro gratis fa guadagnare interessi","total_profit":"Ricavo totale","access_detail":"Dettagli di accesso","available_balance":"Saldi disponibili","storage_balance":"Importo depositato","item_title":"Elenco accordi","time":"Volta","profit":"Saldare","btn":"acquista ora","msg":{"earn_success":"Affare riuscito"},"trade":{"sell_title":"Reso sugli ordini","sell_time":"Volta:","profit_fee":"Tasso d\'interesse:","input_amount":"Inserire l\'importo:","input_amount_tip":"0.00","input_amount_msg":"Inserisci l\'importo","sell_income":"Rendimenti previsti:","sell_btn":"Acquistare","cancel_btn":"Annullato","input_amount_min_tip":"Importo inferiore al minimo:","input_amount_max_tip":"Importo eccedente il massimo:","note":"Deposita attività inattive a scopo di lucro","cancel":"Annullato"}},"earnlist":{"title":"Dettagli di accesso","type_undo":"Incompiuto","type_done":"Completato","type":"Tipo","amount":"Quantità","profit":"Saldare","buy_date":"Data di deposito:","send_date":"Data di regolamento:"}},"login":{"login":{"title":"Accesso","password":"Cifra","passwd_tip":"Inserisci una password a 6 ~ 16 bit ","mobile":"Numero di cellulare","mobile_tip":"Inserisci il tuo numero di cellulare","register":"Iscrizione","forgot_pwd":"Password dimenticata?","btn":"Accesso"},"phoneCode":{"custom_phone_code_tip":"Inserisci un prefisso internazionale","confirm":"OK","msg":"L\'area attuale non è aperta per la registrazione"},"register":{"title":"Iscrizione","smscode":"Codice di verifica SMS","smscode_placeholder":"Inserisci un codice di verifica SMS","smscode_tip":"Inserisci un codice di verifica SMS","smscode_send_text":"Invia codice di autenticazione","login":"Invia codice di autenticazione","next_step":"Accesso","password":"Passo successivo","passwd_tip":"Inserisci una password a 6 ~ 16 bit","nickname":"soprannome","nickname_tip":"Inserisci il tuo nickname","invite_code":"Codice consigliato","invite_code_tip":"Inserisci il codice consigliato","submit":"Sottomissione","reg_success":"Registrazione avvenuta","mobile_tip":"Inserisci il tuo numero di cellulare"},"forget":{"title":"Inserisci il tuo numero di cellulare?","password":"Parola d\'ordine","passwd_tip":"Inserisci una password a 6 ~ 16 bit","smscode":"Codice di verifica SMS","smscode_placeholder":"Inserisci un codice di verifica SMS","smscode_send_text":"Invia codice di autenticazione","submit":"Sottomissione","success":"Modifica password riuscita"}},"mine":{"ucenter":{"logout":"Uscita","invite_code":"Codice consigliato:","my_total_assets":"Le mie risorse totali","my_account":"Il mio account","recharge":"Ricaricare","withdraw":"Ritiro","personal_info":"Informazione personale","google_auth":"Centro di sicurezza","recharge_record":"Ricarica record","withdraw_record":"Registri di prelievo","fund_detail":"Dettagli dei fondi","auth":"Autenticazione identitàe","team_profit":"Guadagni di squadra","invite_friend":"Invita amico","tip":"Consigli","set_withdraw_address":"Si prega di vincolare prima l\'indirizzo di prelievo","set":"Impostazioni","cancel":"Annullato"},"googleauth":{"title":"Centro di sicurezza","googleauth_tip":"Si prega di associare Google Authenticator","open_googleauth":"Apri Google Authenticator","setting_tip":"Inizia a scansionare il codice QR fornito nella nostra piattaforma, oppure inserisci manualmente la chiave di 16 cifre fornita nella piattaforma.Dopo l\'aggiunta riuscita, inserisci la verifica dinamica della password per completare l\'associazione。","copy":"chiave di copia","copy_success":"Copia con successo","vercode":"Codice di verifica di Google","bind":"Autenticare e vincolare","unbind":"Necessità di sciogliere","vercode_tip":"si prega di inserire il codice di verifica","bind_success":"Rilegatura riuscita","notice":"Consigli gentili","bind_tip":"Sei legato a Google Authenticator","unbind_tip":"Per annullare l\'associazione, ricevi il codice di verifica via SMS per la verifica","unbind_success":"Disassociare con successo"},"userinfo":{"title":"Informazione personale","modify":"Modifica","nickname":"soprannome","mobile":"Numero di cellulare","address":"Indirizzo di prelievo","login_pwd":"Password per il login","input_tip":"Si prega di compilare il contenuto","set":"Impostazioni","cancel":" Annullato","nickname_tip":"Per favore inserisci un nickname","login_pwd_tip":"Per favore, inserisci la password","withdraw_address_tip":"Si prega di inserire l\'indirizzo per il ritiro","old_pass":"vecchia password","new_pass":"nuova password","old_pass_tip":"Si prega di inserire la password originale","new_pass_tip":"Si prega di inserire una nuova password","pass_tip":"Se dimentichi la password, recuperala dal codice di verifica del tuo cellulare nella pagina di accesso","vercode":"Codice di verifica di Google","code_tip":"Si prega di inserire il codice di verifica di Google"},"recharge":{"title":"Ricaricare","recharge_tip":"*Suggerimenti per la ricarica","recharge_tip_mark1":"L\'indirizzo di deposito supporta solo TRC20-USDT e il deposito minimo è 10USDT.","recharge_tip_mark2":"Si prega di non trasferire altre merci all\'indirizzo di deposito per evitare perdite.","qrcode":"Codice bidimensionale","copy":"Replica","copy_success":"Replica riuscita"},"rechargeRecords":{"title":"Registro di ricarica","time":"Volta ","amount":"Quantità","status":"Stato","payway":"Ricaricare","orderno":"Numero d\'ordine:","recharge_status":{"1":"Completato","2":"Ricarica fallita","3":"Annullato"}},"withdraw":{"title":"","available_balance":"Saldi disponibili","real_money":"Scontrino effettivo (spese di gestione: 3%)","smscode":"Codice di verifica SMS","smscode_placeholder":"Inserisci un codice di verifica SMS","smscode_send_text":"Invia codice di autenticazione","address":"Indirizzo di prelievo","submit":"Sottomissione","withdraw_success":"Ritiro riuscito","withdraw_tip":"Prelievo minimo: ","withdraw_amount_tip":"Inserisci l\'importo del prelievo","vercode_tip":"Il codice di autenticazione non può essere vuoto","password":"parola d\'ordine","passwd_tip":"Si prega di inserire una password di 6~16 cifre","vercode":"Codice di verifica di Google","code_tip":"Inserisci il codice di verifica di Google","tips":"Promemoria: per la sicurezza dei tuoi fondi, vai al Centro sicurezza per associare Google Authenticator。"},"withdrawalRecords":{"title":"DRegistri di prelievo","time":"Volta ","amount":"Quantità","status":"Stato","withdraw_way":"Indirizzo di prelievo:","orderno":"Numero d\'ordine:","withdraw_status":{"0":"In ritiro","1":"Ritiro riuscito","2":"Annullamento del prelievo"}},"funds":{"title":"Dettagli dei fondi","time":"Volta","amount":"Quantità","status":"Stato","fund_status":{"10":"Ricezione dei proventi","11":"Ricompense Missione","20":"Risparmia","21":"Portare fuori","30":"OTCL\'affare","31":"OTCGuadagno","50":"Ricaricare","51":"Ricaricare","52":"Ricaricare","60":"Ritiro","61":"Ritiro","62":"Ritiro"}},"authentication":{"title":"Autenticazione identità","auth_status":{"0":"Non accreditato","1":"In corso di revisione","2":"Certificato","3":"Respinto"},"auth_photo_hold_example":"Esempi","auth_problem_tips":"Suggerimenti: in caso di problemi, contattare il servizio clienti</u>","submit":"Certificato ora","uploading":"Caricato....."},"teamIncomes":{"title":"Guadagni di squadra","level":"Rango","userid":"Volta","time":"Volta ","amount":"Quantità"},"inviteFriends":{"title":"Invita amico","invite_code":"ICodice consigliato","invite_friend_tip":"Goditi subito un sacco di soldi, vai e invita.","invite_friend_btn":"Fai clic su Copia","share_rule":{"title":"Regole di sconto","title_tip":"Per ogni profitto realizzato da un amico al momento della registrazione, riceverai una commissione proporzionale","rate_title":"Le regole per le proporzioni delle commissioni sono le seguenti","rate_user_level":"BClassifica utente","rate_way":"Regole","rate_num":"Proporzione della Commissione","rate_lv1_desc":"Utenti invitati direttamente","rate_lv2_desc":"1 Utente invitato","rate_lv3_desc":"2 Utenti invitati","rate_lv4_desc":"3 Tutti gli utenti invitati di seguito","hint":"Commissione da saldare e può essere incassata sul tuo portafoglio in qualsiasi momento"},"copy_success":"Replica riuscita"}},"team":{"index":{"team_total_income":"Ricavo totale","team_residual_income":"Guadagno eccedente","receive":"Ricezione","team_info":"Dettagli squadra","team_user_list":"Guarda i detagli","team_total_profit":"Ricavo totale","team_total_num":"Numero totale","team_total_recharge":"Ricarica totale","people_num":"Numero di persone","people_profit":"Saldare","team_invite_task":"Invito ai requisiti della missione","team_invite_task_tip":"{need_num} invita gli utenti LV1 a fare trading con successo e ottenere {amount} USDT","progress":"Progresso","team_receive":"Ricezione","team_hasreceive":"Ricevuto","receive_success":"Ricevere il successo"},"myTeam":{"title":"Dettagli squadra","team_total_profit":"Ricavo totale","team_total_num":"Numero totale","team_total_recharge":"Ricarica totale","team_lv1":"Level 1","team_lv2":"Level 2","team_lv3":"Level 3","team_lv_count":"Quantità:","team_lv_income":"Benefici","team_lv_recharge":"Ricaricare:","team_lv_invite":"Numero di inviti:","team_lv_mobile":"Numero di cellulare:","team_lv_time":"Ora di registrazione:"}},"transaction":{"index":{"total_assets":"Totale attivo","trade_stat":"Statistiche delle entrate","tran_title":"WOTCIntroduzione alla transazione","tran_desc":"WOTCDispone di un sistema globale di corrispondenza delle criptovalute. Fornisce agli utenti una piattaforma di trading globale di criptovalute. Garantisce la stabilità delle transazioni e la massimizzazione dei profitti ","accepting":"Transazione in corso","wallet_balance":"Saldo portafoglio","order_amount":"Importo della transazione","order_amount_tip":"Inserisci l\'importo corretto","order_amount_all":"Tutto","btn":"Inizia filtraggio","trade_success":"Transazione riuscita:","trade_amount":"Importo della transazione:","trade_profit":"Guadagni da transazione:","record":"Elenco delle transazioni","tradingtime":"Tempo rimasto:{%s}","time":"Volta ","amount":"Importo della transazione","profit":"Profitto","sell_time":"Tempo di vendita:","sell_amount":"Importo venduto:","income_time":"Tempo di reddito:","income_amount":"Profitto:","order_num":"Numero d\'ordine:","search":"AIPartita intelligente tra......","msg":{"amount_tip":"Bilancia inferiore a {deal_amount}, impossibile filtrare","order_amount_tip":"Inserisci l\'importo corretto"},"sell":{"symbol":"Crittovaluta:","service_provider":"Fornitore di servizi certificato:","market_price":"Prezzo della transazione:","trade_price":"Prezzo della transazione:","order_amount":"Ammontare dell\'ordine:","confirm":"Inizia a fare trading","cancel":"Annullato","trading":"Nel commercio..."},"sell_success":{"title":"Entrate e fondi verranno automaticamente depositati sul tuo conto dopo 3 ore!","orderNo":"Numero d\'ordine:","trade_price":"Importo della transazione:","profit":"Profitto:","amount":"Totale","tip":"Trasferito al portafoglio delle transazioni e quindi trasferito automaticamente al portafoglio del saldo","confirm":"Conferma"}},"incomeStatistics":{"title":"Statistiche delle entrate","total_orders_num":"Numero totale di transazioni completate","total_money":"Samletbeløb","total_profit":"Samlet overskud,","date":"Dato","order_num":"Numero di transazioni","money":"Quantità","profit":"Profitto"}},"main":{"more":"Altro >","got_it":"OK ","loading":"Caricamento in corso...","modify_success":"Modifica riuscita"},"infomation":{"aboutus":{"1":"World Over The Counter è composto da un team di professionisti esperti e da un enorme pool di liquidità。","2":"I servizi da banco (OTC) di World Over The Counter sono adatti per transazioni che vanno da $ 10 a milioni di dollari, coprendo una varietà di valute legali, USDT e altre importanti criptovalute. Il più grande vantaggio dei servizi di trading OTC di World Over The Counter è che forniamo agli investitori e agli individui con un patrimonio netto elevato una forte profondità di trading, servizi su misura e un alto grado di protezione della privacy. Il servizio di trading da banco di World Over The Counter consente ai clienti di evitare perdite di slippage di trading comuni sulle piattaforme di trading comuni ed è la scelta migliore per i grandi trader di criptovalute.","3":"Il servizio OTC di World Over The Counter per valute legali, USDT o altre criptovalute. World Over The Counter si concentra sul permetterti di scambiare liberamente e facilmente criptovalute senza preoccuparti di problemi complicati come la profondità delle transazioni e la corrispondenza degli ordini. Allo stesso tempo, ti offriamo un\'esperienza di trading flessibile, sicura e di alta qualità attraverso servizi completi di esecuzione di transazioni e regolamento.","4":"1：Richiedi un conto OTC World Over The Counter (account personale)","5":"2：Deposita fiat o criptovaluta sul tuo conto","6":"3：Dopo che la transazione è stata eseguita, USDT verrà automaticamente depositato sul saldo del tuo conto tre ore dopo","7":"Soluzioni OTC per te","8":"commerciante professionista","9":"Abbiamo alcuni dei migliori trader di bitcoin e criptovalute al mondo. La nostra esperienza professionale può essere fatta risalire alla nascita di Bitcoin molti anni fa, serviamo migliaia di clienti al momento giusto e nel posto giusto con il servizio di prezzo più adatto","10":"Esperienza di trading diversa","11":"Diversamente dalle borse generali e dalle grandi borse over-the-counter, World Over The Counter ti fornirà accordi di finanziamento della liquidità ottimali su misura e soluzioni di trading che soddisfano pienamente le tue esigenze di trading. Dopo aver impostato correttamente il tuo account, ci consulteremo con te e ti forniremo la soluzione migliore per soddisfare le esigenze del tuo programma e i risultati desiderati. Ci impegniamo a essere affidabili, affidabili, convenienti e allo sviluppo della comunità. Ci impegniamo a costruire un rapporto buono e duraturo con ogni cliente, fornendo sempre un servizio della massima qualità.","12":"Servizio internazionale","13":"Con sede a Colorado, negli Stati Uniti, World Over The Counter si impegna a fornire ai clienti internazionali una piattaforma di trading di criptovaluta globale e servizi di trading e ha ottenuto elogi e fiducia da clienti in Asia, America, Australia, Europa e Africa.","14":"credibile e affidabile","15":"World Over The Counter crede che l\'onestà e la trasparenza siano le chiavi del successo e attribuisce grande importanza alla privacy e riservatezza delle informazioni sui clienti.Con un atteggiamento professionale, ha conquistato la fiducia e il supporto dei clienti. Ci impegniamo a costruire un\'immagine affidabile che vada di pari passo con te. Non importa dove ti trovi, puoi utilizzare i nostri servizi completi in tutta tranquillità。"},"cert":{"1":"World Over The Counter Limited licenza d\'affari","2":"World Over The Counter Limited Certificato di registrazione della licenza commerciale.","3":"Il Gran Sigillo dello Stato del Colorado è stato timbrato qui e questo certificato ufficiale è stato debitamente generato, eseguito ed emesso.","4":"Il Colorado regolerà questo in conformità con la legge applicabile.","5":"Controllare il numero del certificato sul sito Web ufficiale del Segretario di Stato del Colorado per visualizzare i dettagli dell\'azienda.","6":"World Over The Counter Foundation licenza d\'affari","7":"World Over The Counter Foundation Certificato di registrazione della licenza commerciale.","8":"Perché il WOTC partecipa attivamente alle fondazioni di beneficenza mondiali, diffondendo il loro amore nel mondo.","9":"Questo certificato è approvato e numerato dall\'Ufficio del Segretario di Stato del Colorado.","10":"In futuro, il WOTC parteciperà ai principali fondi di beneficenza del mondo e aiuterà più persone.","11":"Il certificato della fondazione di beneficenza offre anche una migliore protezione patrimoniale a tutti i membri dell\'azienda.","12":"Controllare il numero del certificato sul sito Web ufficiale del Segretario di Stato del Colorado per visualizzare i dettagli dell\'azienda.","13":"Nel video possiamo vedere i membri del team WOTC e la PALM BEACH CHRISTIAN PREPARATORY SCHOOL in Florida, USA, che stanno negoziando una cooperazione preliminare. WOTC sponsorizza le scuole. E aiuta ogni studente della scuola a ridurre il proprio carico scolastico. Contribuire al settore dell\'istruzione.","14":"Attività di beneficenza svolte dai membri del team WOTC in tutto il mondo. Cercando di aiutare più persone. Sono come un raggio di luce nell\'alba. Lascia che la nostra luce risplenda su più persone.","15":"Non sorprendetevi se un giorno vedrete un membro del team WOTC passare davanti alla vostra porta. Perché siamo già apprezzati in tutto il mondo. Sappiamo che molti concorrenti spesso ci danneggiano diffamando e creando voci. Ma lasciamo morire queste voci attraverso il potere della solidarietà. WOTC non ha mai deluso nessuno.","16":"Grazie a tutti i membri che si fidano e supportano WOTC. Ci congratuliamo con la creazione di successo della fondazione di beneficenza del WOTC.","17":"Sito Web di query ufficiale del certificato MSB:","18":"https://www.fincen.gov/msb-state-selector","19":"Sito ufficiale per la richiesta di licenza commerciale:","20":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","21":"Sito ufficiale della fondazione:","22":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","23":"Il diritto di interpretazione di tutto il contenuto di cui sopra appartiene a World Over The Counter Limited","24":"La licenza US MSB è un tipo di licenza finanziaria supervisionata e rilasciata dal Dipartimento del Tesoro degli Stati Uniti.Gli oggetti principali della supervisione sono le imprese e le società legate ai servizi monetari, tra cui valuta digitale, transazioni in valuta virtuale, emissione di ICO, nonché valuta estera, rimesse internazionali ecc. affari."},"joinus":{"1":"World Over The Counter dà il benvenuto a chiunque voglia mettersi in contatto e farsi coinvolgere nello spazio delle criptovalute. Che tu voglia acquistare o vendere criptovalute, o per saperne di più su Bitcoin e criptovalute, World Over The Counter è qui per te。","2":"Se hai domande o commenti, non esitare a contattarci via email o chiamarci. Incoraggiamo ulteriormente tutti i clienti a partecipare alla nostra comunità di criptovalute e promuoviamo lo sviluppo della comunità。","3":"World Over The Counter si impegna a ridurre le commissioni e le restrizioni di transazione, fornendo ai clienti soglie di transazione inferiori rispetto alla maggior parte delle piattaforme di trading OTC.Per qualsiasi importo di transazioni, ti forniremo la soluzione di trading più adatta, in modo che possano essere utilizzati USDT e criptomonete al servizio di tutto il popolo。","4":"Più di 1 miliardo di persone nel mondo sono attualmente unbanked o unbanked, ma la maggior parte di loro ha accesso a uno smartphone.","5":"Possono utilizzare il portafoglio elettronico del loro smartphone in qualsiasi momento e lasciare che la criptovaluta decentralizzata porti loro i maggiori vantaggi: World Over The Counter continuerà a farlo come obiettivo per promuovere l\'adozione universale della criptovaluta。","6":"Sia online che offline, World Over The Counter si è impegnata a sviluppare una comunità attiva e interattiva di utenti di criptovaluta, attraverso la fornitura di conoscenza, scambio, sviluppo reciproco e partecipazione alla comunità globale di Bitcoin e criptovaluta。","7":"Che tu sia un principiante della criptovaluta o un esperto esperto, ti invitiamo a unirti a noi！","8":"World Over The Counter Fornisci le tue informazioni di contatto e brevi informazioni, facci sapere come aiutarti, ti risponderemo il prima possibile.","9":"Posta：worldoverthecounter@gmail.com","10":""},"rules":{"1":"Termini di utilizzo","2":"Quando acquisti USDT, non utilizzare mai un indirizzo di portafoglio che non ti appartiene. Si prega di utilizzare il proprio indirizzo di portafoglio. Si prega di non inviare USDT a sospetti truffatori！","3":"Quando accetti i nostri Termini di utilizzo, accetti anche la nostra Informativa sulla raccolta di informazioni personali e l\'Informativa sulla privacy, l\'Informativa sulla privacy e l\'Informativa sui cookie. ","4":"Non forniamo servizi, attrezzature e altre questioni a persone di età inferiore ai 18 anni. Se hai meno di 18 anni e utilizzi il nostro sito web, dovresti contattarci contattando la persona che ti assume la custodia per esercitare gli opportuni diritti di accesso, correzione, cancellazione e opposizione。","5":"Regole di trading","6":"Worldotc è uno scambio over-the-counter di criptovaluta certificato MSB degli Stati Uniti. Fornisce una piattaforma di trading per USDT e criptovalute globali, fornendo agli utenti accuratezza e convenienza delle transazioni. Inserisci la quantità di valuta virtuale che desideri acquistare。","7":"I profitti vengono regolati ogni 3 ore e ogni profitto sarà lo 0,4% dell\'importo dell\'investimento！","8":"Liquidazione fino a 8 volte al giorno 24 ore su 24, con un reddito massimo del 3,2%！","9":"Raddoppia il tuo investimento in soli 23 giorni！","10":"Il profitto massimo al mese è 1.572 volte！","11":"Regole di deposito e prelievo","12":"Associa il tuo indirizzo TRC20 per prelevare fondi, 24 ore al giorno, e la commissione di prelievo è del 3% .","13":"Il tempo di ritiro arriva in 1 minuto.","14":"Nota: ogni indirizzo TRC20 può essere associato a un solo conto di investimento","15":"Deposita utilizzando Binance o portafoglio, l\'importo minimo di investimento è 11USDT e l\'importo minimo di prelievo è 5USDT","16":"Regole di invito","17":"I tuoi amici guadagnano investendo e tu puoi guadagnare commissioni：","18":"Lv1 Utenti invitati direttamente (15% del profitto di trading totale)","19":"Lv2 L1Utenti invitati (10% del profitto totale del trading)","20":"Lv3 L2Utenti invitati (5% del profitto totale del trading）","21":" Invita la ricompensa della missione","22":"Ogni volta che inviti 10 membri LV1 a completare l\'investimento, puoi ottenere un premio invito di 10 USDT","23":"Nota: ogni subordinato LV1 invitato deve completare l\'investimento per essere considerato un utente valido.","24":"Promemoria: in caso di domande sui premi e sulle regole, contattare il responsabile del servizio clienti."}},"serverCodes":{"401":"parametro è sbagliato","406":"Equilibrio insufficiente","407":"Transazioni annullate interrotte","408":"parametro non valido","409":"La password è composta da 6~16 lettere e numeri","410":"Errore del codice di verifica","411":"nome utente o password errati","412":"Account bloccato, contatta il servizio clienti","413":"Si prega di inserire numeri di telefono validi","414":"Il numero di telefono è già stato registrato, selezionare un altro numero di telefono","415":"Ottieni intervallo di frequenza del codice di verifica 1 minuto","416":"Richieste frequenti, riprova più tardi","417":"Il codice di verifica è scaduto, invia nuovamente il codice di verifica","418":"Il telefono non è verificato o la verifica è scaduta, riavvia la registrazione","419":"Il soprannome è composto da 2~8 caratteri","420":"Si prega di inserire il codice di invito corretto","421":"Il numero di telefono non è stato registrato, non è necessario recuperare la password","422":"ripetere la richiesta","423":"Codice di verifica inviato correttamente","424":"Il numero di codici di verifica inviati il ​​giorno ha raggiunto il limite massimo","425":"Impossibile inviare il codice di verifica","426":"L\'indirizzo non può essere modificato, si prega di contattare il servizio clienti","427":"verifica fallita","428":"Hai già associato Google Authenticator","429":"Verifica della password originale non riuscita","500":"La rete è anormale, riprova più tardi","501":"Sospendi il login","502":"Iscrizione sospesa","503":"accesso non effettuato","605":"Si prega di inserire la quantità corretta","606":"L\'importo del prelievo è inferiore al valore minimo","607":"La quantità di monete prelevate è superiore al valore massimo","608":"Inserisci l\'indirizzo corretto per il prelievo","609":"Formato dell\'indirizzo non corretto","610":"La password originale è sbagliata","706":"Questo indirizzo è già in uso, cambialo.","708":"tale utente non esiste","712":"Verifica il tuo vero nome prima di prelevare denaro","713":"Nessun reddito disponibile al momento","714":"La ricompensa della missione attuale è stata ricevuta","715":"Non soddisfa i requisiti per la ricezione"}}')
    },
    "84a8": function(e, a) {
        e.exports = "data:image/png;base64,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"
    },
    "850e": function(e) {
        e.exports = JSON.parse('{"tabBar":{"home":"Rumah","trade":"Tingkat Dagangan","team":"Pasukan saya","mine":"milik saya"},"funcs":{"aboutus":"Tentang WOTC","rules":"Peraturan Platform","download":"Pusat Muat Turun","cert":"Sijil Kelayakan","setting":"Bahasa","customer":"Khidmat Pelanggan","activities":"Pengumuman Acara","joinus":"Sertai WOTC","earn":"Wang percuma mendapat faedah"},"home":{"index":{"trade_data":"Data Transaksi","no_register":"Sila daftar sebagai ahli dahulu","no_message":"Tiada maklumat\'"},"download":{"google_play":"Worldotc for Android","google_play_tip":"Muat Turun App Store","ios":"Worldotc for iOS","ios_tip":"Klik untuk melompat ke tapak web rasmi untuk muat turun"},"language":{"language":"Bahasa"},"earn":{"title":"Wang percuma mendapat faedah","total_profit":"Jumlah Hasil","access_detail":"Butiran Akses","available_balance":"Baki yang tersedia","storage_balance":"Jumlah yang didepositkan","item_title":"Senarai perjanjian","time":"Masa","profit":"Bayaran","btn":"beli sekarang","msg":{"earn_success":"Deal Berjaya"},"trade":{"sell_title":"Pulangan Pesanan","sell_time":"Masa:","profit_fee":"Kadar bunga:","input_amount":"Masukkan Jumlah:","input_amount_tip":"0.00","input_amount_msg":"Sila masukkan jumlah","sell_income":"Pulangan yang dijangkakan:","sell_btn":"Beli","cancel_btn":"Dibatalkan","input_amount_min_tip":"Jumlah di bawah minimum:: ","input_amount_max_tip":"Jumlah melebihi maksimum:: ","note":"Depositkan aset terbiar untuk keuntungan\'","cancel":"Dibatalkan"}},"earnlist":{"title":"Butiran Akses","type_undo":"Belum selesai","type_done":"Selesai","type":"Jenis","amount":"Jumlah","profit":"Bayaran","buy_date":"Tarikh Deposit:","send_date":"Tarikh penyelesaian:"}},"login":{"login":{"title":"Log masuk","password":"Sifir","passwd_tip":"Sila masukkan kata laluan 6 ~ 16 bit","mobile":"Nombor Telefon Bimbit","mobile_tip":"Sila masukkan nombor telefon bimbit anda","register":"“Daftar”","forgot_pwd":"Kata Laluan Hilang","btn":"Log masuk"},"phoneCode":{"custom_phone_code_tip":"Sila masukkan kod kawasan antarabangsa","confirm":"OKEY","msg":"Kawasan semasa tidak dibuka untuk pendaftaran"},"register":{"title":"“Daftar”","smscode":"Kod Pengesahan SMS","smscode_placeholder":"Sila masukkan kod pengesahan SMS","smscode_tip":"Sila masukkan kod pengesahan SMS","smscode_send_text":"Hantar kod pengesahan","login":"Log masuk","next_step":"Langkah seterusnya","password":"kata laluan","passwd_tip":"Sila masukkan kata laluan 6 ~ 16 bit","nickname":"Nama panggilan","nickname_tip":"Sila masukkan nama panggilan anda","invite_code":"Kod Disyorkan","invite_code_tip":"Sila masukkan kod disyorkan anda","submit":"Penyerahan","reg_success":"Pendaftaran berjaya","mobile_tip":"Sila masukkan nombor telefon bimbit anda"},"forget":{"title":"Kata Laluan Hilang","password":"Kata Laluan","passwd_tip":"Sila masukkan kata laluan 6 ~ 16 bit","smscode":"Kod Pengesahan SMS","smscode_placeholder":"Sila masukkan kod pengesahan SMS","smscode_send_text":"Hantar kod pengesahan","submit":"Penyerahan","success":"Pengubahsuaian kata laluan berjaya"}},"mine":{"ucenter":{"logout":"Keluar","invite_code":"Kod Disyorkan:: ","my_total_assets":"Jumlah Aset Saya","my_account":"Akaun saya","recharge":"Caj semula","withdraw":"Mengeluarkan","personal_info":"Maklumat peribadi","google_auth":"Pusat keselamatan","recharge_record":"Rekod Rekod","withdraw_record":"Rekod Pengeluaran","fund_detail":"Butiran dana","auth":"Pengesahan Identiti","team_profit":"Pendapatan Pasukan","invite_friend":"Jemput kawan","tip":"“Petua”","set_withdraw_address":"Sila ikat alamat pengeluaran dahulu","set":"“Tetapan”","cancel":"Dibatalkan"},"googleauth":{"title":"Pusat keselamatan","googleauth_tip":"Sila ikat Google Authenticator","open_googleauth":"Buka Google Authenticator","setting_tip":"Mula mengimbas kod QR yang disediakan dalam platform kami, atau masukkan kekunci 16 digit yang disediakan secara manual dalam platform. Selepas penambahan berjaya, masukkan pengesahan kata laluan dinamik untuk melengkapkan pengikatan。","copy":"kunci salin","copy_success":"Berjaya menyalin","vercode":"Kod pengesahan Google","bind":"Sahkan dan ikat","unbind":"buka ikatan","vercode_tip":"sila masukkan kod pengesahan","bind_success":"Pengikatan berjaya","notice":"peringatan mesra","bind_tip":"Anda terikat dengan Google Authenticator","unbind_tip":"Untuk melepaskan ikatan, sila dapatkan kod pengesahan SMS untuk pengesahan","unbind_success":"Berjaya melepaskan ikatan"},"userinfo":{"title":"Maklumat peribadi","modify":"Pengubahsuaian","nickname":"Nama panggilan","mobile":"Nombor Telefon Bimbit","address":"Alamat Pengeluaran","login_pwd":"Log Masuk Kata Laluan","input_tip":"Sila isi kandungan","set":"tetapan","cancel":"Dibatalkan","nickname_tip":"Sila masukkan nama panggilan","login_pwd_tip":"Sila masukkan kata laluan","withdraw_address_tip":"Sila masukkan alamat penarikan","old_pass":"kata laluan lama","new_pass":"kata laluan baharu","old_pass_tip":"Sila masukkan kata laluan asal","new_pass_tip":"Sila masukkan kata laluan baharu","pass_tip":"Jika anda terlupa kata laluan anda, sila dapatkannya daripada kod pengesahan telefon mudah alih anda pada halaman log masuk","vercode":"Kod pengesahan Google","code_tip":"Sila masukkan kod pengesahan google"},"recharge":{"title":"Caj semula","recharge_tip":"*Petua cas semula","recharge_tip_mark1":"Alamat deposit hanya menyokong TRC20-USDT, dan deposit minimum ialah 10USDT.","recharge_tip_mark2":"Sila jangan pindahkan aset lain ke alamat deposit untuk mengelakkan kehilangan dana.","qrcode":"Kod Dua Dimensi","copy":"Replikasi","copy_success":"Kejayaan Replikasi"},"rechargeRecords":{"title":"Rekod cas semula","time":"Masa","amount":"Jumlah","status":"Negeri","payway":"Caj semula:","orderno":"Nombor Pesanan:","recharge_status":{"1":"Selesai","2":"Caj semula gagal","3":"Dibatalkan"}},"withdraw":{"title":"Mengeluarkan","available_balance":"Baki yang tersedia","real_money":"Resit sebenar (yuran pengendalian: 3%)","smscode":"Kod Pengesahan SMS","smscode_placeholder":"Sila masukkan kod pengesahan SMS","smscode_send_text":"Hantar kod pengesahan","address":"Alamat Pengeluaran","submit":"Penyerahan","withdraw_success":"Kejayaan Pengeluaran","withdraw_tip":"Pengeluaran minimum: ","withdraw_amount_tip":"Sila masukkan jumlah pengeluaran","vercode_tip":"Kod pengesahan tidak boleh kosong","password":"kata laluan","passwd_tip":"Sila masukkan kata laluan 6~16 digit","vercode":"Kod pengesahan Google","code_tip":"Sila masukkan kod pengesahan google","tips":"Peringatan: Untuk keselamatan dana anda, sila pergi ke Pusat Keselamatan untuk mengikat Pengesah Google。"},"withdrawalRecords":{"title":"Rekod Pengeluaran","time":"Masa","amount":"Jumlah","status":"Negeri","withdraw_way":"Alamat Pengeluaran:","orderno":"Nombor Pesanan:","withdraw_status":{"0":"Dalam Pengeluaran","1":"Kejayaan Pengeluaran","2":"Pembatalan pengeluaran"}},"funds":{"title":"Butiran dana","time":"Masa","amount":"Jumlah","status":"Negeri","fund_status":{"10":"Menerima Hasil","11":"Ganjaran Misi","20":"Simpan Dalam","21":"Bawa Keluar","30":"OTC Perjanjian","31":"OTC Pendapatan","50":"Caj semula","51":"Caj semula","52":"Caj semula","60":"Mengeluarkan","61":"Mengeluarkan","62":"Mengeluarkan"}},"authentication":{"title":"Pengesahan Identiti","auth_status":{"0":"Tidak dikreditkan","1":"Ditinjau","2":"Disahkan","3":"Ditolak"},"auth_photo_hold_example":"Contoh","auth_problem_tips":"Petua: Jika anda menghadapi masalah, sila hubungi perkhidmatan pelanggan","submit":"Diperakui Sekarang","uploading":"Dimuat naik....."},"teamIncomes":{"title":"Pendapatan Pasukan","level":"Pangkat","userid":"ID","time":"Masa","amount":"Jumlah"},"inviteFriends":{"title":"Jemput kawan","invite_code":"Kod Disyorkan","invite_friend_tip":"Nikmati wang yang besar dengan segera, pergi dan jemput.","invite_friend_btn":"Klik Salin","share_rule":{"title":"Peraturan rebat","title_tip":"Untuk setiap keuntungan yang dibuat oleh rakan semasa pendaftaran, anda akan menerima komisen berkadar","rate_title":"Peraturan untuk perkadaran komisen adalah seperti berikut","rate_user_level":"Kedudukan Pengguna","rate_way":"Peraturan","rate_num":"Perkadaran komisen\'","rate_lv1_desc":"Pengguna Dijemput Terus","rate_lv2_desc":"1 Pengguna Jemputan","rate_lv3_desc":"2 Pengguna Jemputan","rate_lv4_desc":"3 Semua pengguna dijemput di bawah","hint":"Komisen untuk menyelesaikan dan boleh ditunaikan ke dompet anda pada bila-bila masa"},"copy_success":"Kejayaan Replikasi"}},"team":{"index":{"team_total_income":"Jumlah Hasil","team_residual_income":"Pendapatan Lebihan","receive":"Menerima","team_info":"Butiran Pasukan","team_user_list":"Lihat butiran","team_total_profit":"Jumlah Hasil","team_total_num":"Jumlah nombor","team_total_recharge":"Caj semula keseluruhan","people_num":"Bilangan orang","people_profit":"Bayaran","team_invite_task":"Jemputan kepada Keperluan Misi","team_invite_task_tip":"{need_num} menjemput pengguna LV1 untuk berjaya berdagang dan mendapat {amount} USDT","progress":"Kemajuan","team_receive":"Menerima","team_hasreceive":"Menerima","receive_success":"Menerima Kejayaan"},"myTeam":{"title":"Butiran Pasukan","team_total_profit":"Jumlah Hasil","team_total_num":"Jumlah nombor","team_total_recharge":"Caj semula keseluruhan","team_lv1":"Level 1","team_lv2":"Level 2","team_lv3":"Level 3","team_lv_count":"Kuantiti:","team_lv_income":"Faedah:","team_lv_recharge":"Caj semula:","team_lv_invite":"Bilangan jemputan:","team_lv_mobile":"Nombor Telefon Bimbit:","team_lv_time":"Masa Pendaftaran:"}},"transaction":{"index":{"total_assets":"Jumlah aset","trade_stat":"Statistik Hasil","tran_title":"WOTC Pengenalan Transaksi","tran_desc":"WOTC Mempunyai sistem padanan mata wang kripto global. Menyediakan pengguna dengan platform mata wang kripto global perdagangan. Memastikan kestabilan urus niaga dan memaksimumkan keuntungan ","accepting":"Pemprosesan Transaksi","wallet_balance":"Baki Dompet","order_amount":"Jumlah transaksi","order_amount_tip":"Sila masukkan jumlah yang betul","order_amount_all":"Semua","btn":"Mulakan penapisan","trade_success":"Kejayaan Urusan:","trade_amount":"Jumlah transaksi:","trade_profit":"Pendapatan urus niaga:","record":"Senarai urus niaga","tradingtime":"Masa yang tinggal:{%s}","time":"Masa","amount":"Jumlah transaksi","profit":"Keuntungan","sell_time":"Masa Jualan:","sell_amount":"Jumlah yang dijual:","income_time":"Masa Pendapatan:","income_amount":"Keuntungan:","order_num":"Nombor Pesanan:","search":"AIPadanan Pintar dalam...","msg":{"amount_tip":"Baki kurang daripada (), tidak dapat ditapis","order_amount_tip":"Sila masukkan jumlah yang betul"},"sell":{"symbol":"Mata wang kripto:","service_provider":"MSB Pembekal Perkhidmatan Diperakui:：","market_price":"USDT Harga Transaksi:：","trade_price":"Harga Transaksi:","order_amount":"Jumlah Pesanan:","confirm":"Mulakan Berdagang","cancel":"Dibatalkan","trading":"Dalam perdagangan..."},"sell_success":{"title":"Hasil dan dana akan didepositkan secara automatik ke dalam akaun anda selepas 3 jam!!","orderNo":"Nombor Pesanan:","trade_price":"Jumlah transaksi:","profit":"Keuntungan:","amount":"Jumlah:","tip":"Dipindahkan ke dompet transaksi dan kemudian dipindahkan secara automatik ke dompet baki","confirm":"Pengesahan"}},"incomeStatistics":{"title":"Statistik Hasil","total_orders_num":"Jumlah urus niaga selesai","total_money":"Jumlah keseluruhan","total_profit":"Jumlah keuntungan","date":"Tarikh","order_num":"Bilangan transaksi","money":"Jumlah","profit":"Keuntungan"}},"main":{"more":"Lagi > >","got_it":"OKEY.","loading":"Memuatkan......","modify_success":"Pengubahsuaian Berjaya"},"infomation":{"aboutus":{"1":"World Over The Counter ialah pasukan profesional berpengalaman yang disokong oleh kumpulan mudah tunai yang besar.。","2":"Perkhidmatan Over-the-Counter (OTC) World Over The Counter untuk urus niaga antara $10 hingga lebih daripada $ juta, meliputi pelbagai tender sah, USDT dan mata wang kripto utama lain. Kelebihan terbesar World Over The Counter over-the-counter perkhidmatan ialah kedalaman dagangan kami yang kukuh, penyesuaian dan perlindungan privasi yang tinggi untuk pelabur dan pemegang aset bernilai tinggi. Perkhidmatan over-the-counter World Over The Counter, yang mengecualikan pelanggan daripada kerugian harga licin yang biasa berlaku pada platform dagangan popular , adalah pilihan terbaik untuk pedagang mata wang kripto yang besar.,","3":"Perkhidmatan OTC World Over The Counter terpakai kepada tender yang sah, USDT, atau mata wang kripto lain. World Over The Counter tertumpu pada membolehkan anda berdagang dalam mata wang kripto secara bebas dan mudah tanpa perlu risau tentang kerumitan kedalaman dagangan dan berpasangan jual beli. Pada pada masa yang sama, kami menyediakan anda pengalaman transaksi yang fleksibel, selamat dan berkualiti tinggi melalui perkhidmatan pelaksanaan dan penyelesaian transaksi yang komprehensif.","4":"1: Permohonan untuk Akaun OTC World Over The Counter (Akaun Peribadi),","5":"2: Deposit sah atau mata wang kripto dalam akaun anda,","6":"3: Selepas transaksi dilaksanakan, USDT akan didepositkan secara automatik ke dalam baki akaun anda dalam masa tiga jam.","7":"Skim OTC untuk Anda.","8":"Pedagang Profesional,","9":"Kami mempunyai salah satu peniaga bitcoin dan mata wang kripto terkemuka dunia. Pengalaman profesional kami boleh dikesan sejak bertahun-tahun sejak kelahiran Bitcoin, dan kami telah menyediakan perkhidmatan harga terbaik untuk beribu-ribu tetamu pada masa yang betul dan di tempat yang betul .","10":"Pengalaman Transaksi yang Berbeza.","11":"Tidak seperti bursa umum dan besar di kaunter, World Over The Counter memberikan anda pengaturan pendanaan kecairan terbaik dan pilihan perdagangan yang disesuaikan dengan keperluan dagangan anda. Apabila akaun anda berjaya disediakan, kami akan berkomunikasi dengan anda dan memberikan yang ideal penyelesaian untuk memenuhi keperluan dan jangkaan program anda. Kami berusaha untuk kredibiliti, kebolehpercayaan, kemudahan dan pembangunan komuniti. Kami berusaha untuk membina hubungan yang baik dan berkekalan dengan setiap pelanggan dan memberikan perkhidmatan yang terbaik pada setiap masa.","12":"Perkhidmatan Antarabangsa,","13":"World Over The Counter, yang beribu pejabat di negeri Colorado A.S., berdedikasi untuk menyediakan platform dagangan mata wang kripto global dan perkhidmatan perdagangan kepada pelanggan antarabangsa, dan telah sangat dihargai dan dipercayai oleh pelanggan dari Asia, Amerika, Australia, Eropah dan Afrika. ","14":"Boleh Dipercayai dan Boleh Dipercayai.","15":"World Over The Counter percaya bahawa kejujuran dan ketelusan adalah kunci kejayaan, dan sangat mementingkan privasi dan kerahsiaan maklumat pelanggan, mendapatkan kepercayaan dan sokongan tetamu dengan sikap profesional. Kami komited untuk membina imej yang dipercayai dan bekerja berganding bahu dengan anda. Di mana sahaja anda berada, anda boleh menggunakan rangkaian penuh perkhidmatan yang kami sediakan dengan tenang."},"cert":{"1":"World Over The Counter Limited Lesen perniagaan","2":"World Over The Couter Limited Sijil Pendaftaran Lesen Perniagaan","3":"Meterai Besar Negeri Colorado telah dicop di sini dan sijil rasmi ini telah disediakan, dilaksanakan dan dikeluarkan dengan sewajarnya.","4":"Colorado akan mentadbir perkara ini mengikut undang-undang yang terpakai.","5":"Semak nombor sijil di laman web rasmi Setiausaha Negara Colorado untuk melihat butiran syarikat.","6":"World Over The Counter Foundation Lesen Perniagaan","7":"World Over The Couter Foundation Sijil Pendaftaran Lesen Perniagaan","8":"Kerana WOTC mengambil bahagian secara aktif dalam yayasan amal dunia, menyebarkan cinta mereka kepada dunia.","9":"Sijil ini diluluskan dan dinomborkan oleh Pejabat Setiausaha Negara Colorado.","10":"Pada masa hadapan, WOTC akan mengambil bahagian dalam dana amal utama dunia dan membantu lebih ramai orang.","11":"Sijil yayasan amal juga membawa perlindungan aset yang lebih baik kepada semua ahli syarikat.","12":"Semak nombor sijil di laman web rasmi Setiausaha Negara Colorado untuk melihat butiran syarikat.","13":"Dalam video itu kita dapat melihat ahli pasukan WOTC dan SEKOLAH PERSEDIAAN KRISTIAN PALM BEACH di Florida, Amerika Syarikat, sedang merundingkan kerjasama awal. WOTC menaja sekolah. Dan membantu setiap pelajar di sekolah untuk mengurangkan beban akademik mereka. Menyumbang kepada industri pendidikan.","14":"Aktiviti amal yang dijalankan oleh ahli pasukan WOTC di seluruh dunia. Cuba membantu lebih ramai orang. Mereka bagaikan pancaran cahaya di waktu fajar. Biarkan cahaya kita menyinari lebih ramai orang.","15":"Jangan terkejut jika anda akan melihat ahli pasukan WOTC melalui pintu anda suatu hari nanti. Kerana kita sudah popular di seluruh dunia. Kita tahu bahawa ramai pesaing sering memudaratkan kita dengan memfitnah dan mencipta khabar angin. Tetapi kami membiarkan khabar angin ini mati melalui kuasa perpaduan. WOTC tidak pernah mengecewakan sesiapa.","16":"Terima kasih kepada semua ahli yang mempercayai dan menyokong WOTC. Marilah kita mengucapkan tahniah atas kejayaan penubuhan yayasan amal WOTC.","17":"Laman web pertanyaan rasmi sijil MSB:","18":"https://www.fincen.gov/msb-state-selector","19":"Laman web rasmi untuk pertanyaan lesen perniagaan:","20":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","21":"Laman web rasmi yayasan:","22":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","23":"Hak tafsiran semua kandungan di atas adalah milik World Over The Couter Limited","24":"Lesen MSB AS ialah lesen kewangan yang dikawal selia dan dikeluarkan oleh Jabatan Perbendaharaan Amerika Syarikat, terutamanya untuk perniagaan dan syarikat yang berkaitan dengan perkhidmatan wang, termasuk transaksi dalam mata wang digital, mata wang maya, terbitan ICO, pertukaran asing, kiriman wang antarabangsa, dll."},"joinus":{"1":"World Over The Counter mengalu-alukan sesiapa sahaja untuk menghubungi dan menyertai komuniti mata wang kripto. Sama ada anda ingin membeli dan menjual mata wang kripto atau mengetahui lebih lanjut tentang bitcoin dan mata wang kripto, World Over The Counter akan melakukan yang terbaik.","2":"Jika anda mempunyai sebarang soalan atau komen, sila e-mel atau hubungi kami pada bila-bila masa. Kami menggalakkan semua pelanggan kami untuk mengambil bahagian dalam komuniti mata wang kripto kami dan mempromosikannya.","3":"World Over The Counter komited untuk mengurangkan kos transaksi dan sekatan, menyediakan pelanggan dengan ambang transaksi yang lebih rendah pada majoriti lebih besar platform dagangan di kaunter, dan sebarang jumlah transaksi yang boleh kami tawarkan kepada anda adalah tawaran yang tepat, jadi bahawa USDT dan mata wang kripto boleh digunakan untuk semua.","4":"Pada masa ini, lebih daripada 1 bilion orang di seluruh dunia tidak mempunyai atau kekurangan perkhidmatan perbankan, tetapi kebanyakan mereka mempunyai akses kepada telefon pintar.","5":"Mereka sentiasa boleh menggunakan dompet telefon pintar supaya mata wang kripto terdesentralisasi memberikan nilai paling tinggi untuk mereka - dan World Over The Counter akan terus menyasarkan untuk menggerakkan mata wang kripto ke arah akses universal.","6":"Dalam dan luar talian, World Over The Counter telah komited untuk membangunkan komuniti pengguna mata wang kripto yang aktif dan interaktif, membangun dan mengambil bahagian dalam komuniti bitcoin dan mata wang kripto global melalui pengetahuan dan komunikasi.","7":"Sama ada anda seorang pemula mata wang kripto atau pakar kanan, kami mengalu-alukan anda!,","8":"World Over The Counter, sila berikan kaedah hubungan anda dan maklumat ringkas tentang cara membantu anda dan kami akan membalas secepat mungkin.,","9":"E-mel：worldoverthecounter@gmail.com","10":""},"rules":{"1":"Syarat Penggunaan,","2":"Apabila membeli USDT, jangan sekali-kali menggunakan alamat dompet yang bukan milik anda. Sila gunakan alamat dompet anda. Tolong jangan hantar USDT kepada seseorang yang disyaki melakukan penipuan!,","3":"Apabila anda bersetuju dengan Syarat Penggunaan kami, iaitu, anda bersetuju dengan Penyata Pengumpulan Data Peribadi dan Dasar Privasi, Dasar Privasi dan Dasar Kuki kami.","4":"Mereka tidak akan menyediakan perkhidmatan, peralatan dan perkara lain untuk orang yang berumur di bawah 18 tahun. Jika anda berumur di bawah 18 tahun dan menggunakan laman web kami, anda harus menghubungi orang yang anda miliki jagaan untuk menggunakan akses, pembetulan, pembatalan yang sesuai dan hak bantahan.","5":"Peraturan Transaksi,","6":"Worldotc ialah pertukaran mata wang kripto Amerika MSB - diperakui di kaunter. Platform dagangan USDT dan mata wang kripto global menyediakan pengguna dengan ketepatan dan kemudahan transaksi. Masukkan jumlah mata wang maya yang anda ingin beli.","7":"Pendapatan diselesaikan setiap 3 jam, dan setiap keuntungan akan menjadi 0.4% daripada pelaburan anda0.4%！","8":"Penyelesaian sehingga 8 kali sehari, pendapatan maksimum 3.2%!,","9":"Pelaburan 23 hari terpantas berganda!,","10":"Keuntungan bulanan maksimum 1.572 kali ganda!,","11":"Peraturan Pengeluaran Caj semula,","12":"Ikat alamat TRC20 anda untuk pengeluaran, 24 jam sehari untuk yuran pengeluaran 3%.","13":"Masa pengeluaran ialah 1 minit.","14":"Perhatikan bahawa hanya satu akaun pelaburan boleh terikat bagi setiap alamat TRC20.","15":"Caj semula dengan mata wang atau dompet anda dengan pelaburan minimum 11 USDT dan pengeluaran minimum 5 USDT.","16":"Peraturan Jemputan,","17":"Rakan anda menjana wang dengan melabur dalam pendapatan komisen yang anda boleh perolehi:,","18":"Pengguna yang dijemput terus Lv1 (15% daripada jumlah keuntungan transaksi).","19":"Lv2L1 menjemput pengguna (10% daripada jumlah keuntungan transaksi).","20":"Pengguna yang dijemput Lv3L2 (5% daripada jumlah keuntungan transaksi).","21":"Ganjaran Tugas Menjemput.","22":"Untuk setiap 10 ahli LV1 yang dijemput untuk melengkapkan pelaburan, ganjaran jemputan 10USDT","23":"Nota: Setiap orang bawahan yang dijemput perlu melengkapkan pelaburan LV1 untuk dianggap sebagai pengguna yang sah.","24":"Peringatan: Jika anda mempunyai sebarang soalan tentang ganjaran dan peraturan, sila hubungi pengurus perkhidmatan pelanggan"}},"serverCodes":{"401":"Parameter Tidak Betul.","406":"baki tidak mencukupi.","407":"Jumlah Transaksi Salah.","408":"Parameter tidak sah.","409":"Kata laluan terdiri daripada huruf tambah nombor,","410":"Ralat Kod Pengesahan.","411":"Ralat nama pengguna atau kata laluan,","412":"Pembekuan akaun, sila hubungi perkhidmatan pelanggan.","413":"Sila isikan nombor telefon bimbit anda dengan betul.","414":"Nombor telefon telah didaftarkan, sila pilih nombor telefon lain.","415":"Dapatkan selang kekerapan kod pengesahan 1 minit.","416":"Permintaan yang kerap, cuba lagi kemudian.","417":"Kod pengesahan tidak sah, sila hantar semula kod pengesahan.","418":"Jika telefon tidak disahkan atau pengesahan telah tamat tempoh, sila mula mendaftar semula.","419":"Nama panggilan terdiri daripada 2 ~ aksara 8-bit.","420":"Sila masukkan kod jemputan yang betul.","421":"Nombor telefon belum didaftarkan dan kata laluan tidak perlu diambil.","422":"Permintaan Ulang,","423":"Kod Pengesahan Berjaya Dihantar.","424":"Bilangan kod pengesahan yang dihantar pada hari itu telah mencapai had atas.","425":"Gagal menghantar kod pengesahan","426":"Alamat tidak boleh diubah suai, sila hubungi khidmat pelanggan","427":"pengesahan gagal","428":"Anda telah mengikat Google Authenticator","429":"Pengesahan kata laluan asal gagal","500":"Pengecualian rangkaian, sila cuba lagi kemudian.","501":"Tangguhkan Log Masuk,","502":"Tangguhkan Pendaftaran,","503":"Tidak log masuk.","605":"Sila masukkan kuantiti yang betul.","606":"Bilangan nota adalah lebih rendah daripada minimum.","607":"Jumlah tender lebih tinggi daripada maksimum.","608":"Sila masukkan alamat tender yang betul.","609":"Format Alamat Salah.","610":"Ralat Kata Laluan Asal,","706":"Alamat ini telah digunakan, sila ganti.,","708":"Pengguna ini tidak wujud.","712":"Sila sahkan nama sebenar anda dan kemudian tarik baliknya.","713":"Pada masa ini tiada hasil yang perlu dibayar.","714":"Anugerah Tugas Semasa Diterima.","715":"Kegagalan memenuhi syarat untuk menerima","716":"Anugerah Tugas Semasa Diterima."}}')
    },
    9649: function(e, a, t) {
        "use strict";
        var i;
        t.d(a, "b", (function() {
            return n
        })), t.d(a, "c", (function() {
            return r
        })), t.d(a, "a", (function() {
            return i
        }));
        var n = function() {
                var e = this,
                    a = e.$createElement,
                    t = e._self._c || a;
                return t("App", {
                    attrs: {
                        keepAliveInclude: e.keepAliveInclude
                    }
                })
            },
            r = []
    },
    "98aa": function(e, a, t) {
        e.exports = t.p + "static/img/WBTC.7ccd78dd.png"
    },
    a261: function(e, a) {
        e.exports = "data:image/png;base64,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"
    },
    a8cc: function(e, a, t) {
        "use strict";
        var i = t("4ea4");
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0, t("96cf");
        var n = i(t("1da1")),
            r = t("65d1"),
            o = {
                state: {
                    userinfo: {}
                },
                mutations: {
                    userinfoMutations: function(e, a) {
                        var t = a.userinfo,
                            i = void 0 === t ? {} : t;
                        e.userinfo = i
                    }
                },
                actions: {
                    userinfoActions: function(e, a) {
                        return (0, n.default)(regeneratorRuntime.mark((function t() {
                            var i, n;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return i = e.commit, t.next = 3, (0, r.getinfo)(a);
                                    case 3:
                                        return n = t.sent, i("userinfoMutations", n), t.abrupt("return", n);
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    usernameAction: function(e, a) {
                        return (0, n.default)(regeneratorRuntime.mark((function t() {
                            var i;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return i = e.commit, t.next = 3, (0, r.setUsername)(a);
                                    case 3:
                                        setTimeout((0, n.default)(regeneratorRuntime.mark((function e() {
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.t0 = i, e.next = 3, (0, r.getinfo)();
                                                    case 3:
                                                        e.t1 = e.sent, (0, e.t0)("userinfoMutations", e.t1);
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))), 1e3);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    pwdAction: function(e, a) {
                        return (0, n.default)(regeneratorRuntime.mark((function t() {
                            var i;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return i = e.commit, t.next = 3, (0, r.setLoginPasswd)(a);
                                    case 3:
                                        setTimeout((0, n.default)(regeneratorRuntime.mark((function e() {
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.t0 = i, e.next = 3, (0, r.getinfo)();
                                                    case 3:
                                                        e.t1 = e.sent, (0, e.t0)("userinfoMutations", e.t1);
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))), 1e3);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    },
                    walletAction: function(e, a) {
                        return (0, n.default)(regeneratorRuntime.mark((function t() {
                            var i;
                            return regeneratorRuntime.wrap((function(t) {
                                while (1) switch (t.prev = t.next) {
                                    case 0:
                                        return i = e.commit, t.next = 3, (0, r.setWallet)(a);
                                    case 3:
                                        setTimeout((0, n.default)(regeneratorRuntime.mark((function e() {
                                            return regeneratorRuntime.wrap((function(e) {
                                                while (1) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.t0 = i, e.next = 3, (0, r.getinfo)();
                                                    case 3:
                                                        e.t1 = e.sent, (0, e.t0)("userinfoMutations", e.t1);
                                                    case 5:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))), 1e3);
                                    case 4:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }
                }
            };
        a.default = o
    },
    b4c6: function(e, a, t) {
        "use strict";
        var i = t("4ea4");
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.notice = r, a.getShare = o, a.getShareDetal = s, a.receiveProfit = d, a.receiveTask = l, a.customerservice = u, a.getEarn = m, a.createEarnOrder = c, a.getEarnLogs = p;
        var n = i(t("4027"));

        function r(e) {
            return (0, n.default)("gateway/sso/notice", e)
        }

        function o(e) {
            return (0, n.default)("gateway/user/getShare", e)
        }

        function s(e) {
            return (0, n.default)("gateway/user/getShareDetal", e)
        }

        function d(e) {
            return (0, n.default)("gateway/user/receiveProfit", e)
        }

        function l(e) {
            return (0, n.default)("gateway/user/receiveTask", e, "POST")
        }

        function u(e) {
            return (0, n.default)("gateway/user/customerservice", e)
        }

        function m(e) {
            return (0, n.default)("gateway/user/getEarn", e)
        }

        function c(e) {
            return (0, n.default)("gateway/user/createEarnOrder", e)
        }

        function p(e) {
            return (0, n.default)("gateway/user/getEarnLogs", e)
        }
    },
    b8a2: function(e, a) {
        e.exports = "data:image/png;base64,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"
    },
    ba8b: function(e, a, t) {
        e.exports = t.p + "static/img/NEAR.c357aa5c.png"
    },
    bee9: function(e, a, t) {
        "use strict";

        function i(e, a) {
            var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            try {
                if (t) return uni.setStorageSync(e, a);
                uni.setStorage({
                    key: e,
                    data: a,
                    success: function(e) {}
                })
            } catch (i) {
                return !1
            }
        }

        function n(e) {
            var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            try {
                if (a) return uni.getStorageSync(e);
                var t = "";
                return uni.getStorage({
                    key: e,
                    success: function(e) {
                        t = e.data
                    }
                }), t
            } catch (i) {
                return !1
            }
        }

        function r() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
            try {
                if (e) return uni.getStorageInfoSync();
                var a = "";
                return uni.getStorageInfo({
                    success: function(e) {
                        a = e
                    }
                }), a
            } catch (t) {
                return !1
            }
        }

        function o(e) {
            var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            try {
                if (a) return uni.removeStorageSync(e);
                uni.removeStorage({
                    key: e
                })
            } catch (t) {
                return !1
            }
        }

        function s() {
            var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
            try {
                if (e) return uni.clearStorageSync();
                uni.clearStorage()
            } catch (a) {
                return !1
            }
        }

        function d(e) {
            var a = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            try {
                if (a) return null !== uni.getStorageSync(e);
                var t = !1;
                return uni.getStorage({
                    key: e,
                    success: function(e) {
                        t = null !== e.data
                    }
                }), t
            } catch (i) {
                return !1
            }
        }
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var l = {
                get: n,
                set: i,
                info: r,
                remove: o,
                clear: s,
                has: d
            },
            u = l;
        a.default = u
    },
    c024: function(e, a, t) {
        var i = t("30e5");
        "string" === typeof i && (i = [
            [e.i, i, ""]
        ]), i.locals && (e.exports = i.locals);
        var n = t("4f06").default;
        n("51d1f5f6", i, !0, {
            sourceMap: !1,
            shadowMode: !1
        })
    },
    c2d9: function(e, a, t) {
        "use strict";
        (function(e) {
            var a = t("4ea4");
            t("13d5"), t("d3b7"), t("ac1f"), t("5319"), t("ddb0");
            var i = a(t("e143")),
                n = {
                    keys: function() {
                        return []
                    }
                };
            e["____8D1BE5B____"] = !0, delete e["____8D1BE5B____"], e.__uniConfig = {
                globalStyle: {
                    rpxCalcBaseDeviceWidth: 375,
                    rpxCalcIncludeWidth: 750,
                    navigationBarTextStyle: "black",
                    navigationBarTitleText: "World Over The Counter",
                    navigationBarBackgroundColor: "#ebeaea",
                    backgroundColor: "#ebeaea"
                },
                tabBar: {
                    color: "#a4a4a4",
                    selectedColor: "#434643",
                    backgroundColor: "#FFFFFF",
                    height: "150rpx",
                    iconWidth: "58rpx",
                    list: [{
                        pagePath: "pages/home/index",
                        iconPath: "static/tabbar/home.png",
                        selectedIconPath: "static/tabbar/home_cur.png",
                        text: "首页",
                        redDot: !1,
                        badge: ""
                    }, {
                        pagePath: "pages/transaction/index",
                        iconPath: "static/tabbar/trade.png",
                        selectedIconPath: "static/tabbar/trade_cur.png",
                        text: "交易",
                        redDot: !1,
                        badge: ""
                    }, {
                        pagePath: "pages/team/index",
                        iconPath: "static/tabbar/team.png",
                        selectedIconPath: "static/tabbar/team_cur.png",
                        text: "团队",
                        redDot: !1,
                        badge: ""
                    }, {
                        pagePath: "pages/mine/ucenter",
                        iconPath: "static/tabbar/my.png",
                        selectedIconPath: "static/tabbar/my_cur.png",
                        text: "我的",
                        redDot: !1,
                        badge: ""
                    }],
                    borderStyle: "black"
                }
            }, e.__uniConfig.compilerVersion = "3.5.3", e.__uniConfig.uniPlatform = "h5", e.__uniConfig.appId = "__UNI__8D1BE5B", e.__uniConfig.appName = "WorldOTC", e.__uniConfig.appVersion = "1.0.3", e.__uniConfig.appVersionCode = "103", e.__uniConfig.router = {
                mode: "hash",
                base: "/"
            }, e.__uniConfig.publicPath = "/", e.__uniConfig["async"] = {
                loading: "AsyncLoading",
                error: "AsyncError",
                delay: 200,
                timeout: 6e4
            }, e.__uniConfig.debug = !1, e.__uniConfig.networkTimeout = {
                request: 6e4,
                connectSocket: 6e4,
                uploadFile: 6e4,
                downloadFile: 6e4
            }, e.__uniConfig.sdkConfigs = {}, e.__uniConfig.qqMapKey = void 0, e.__uniConfig.googleMapKey = void 0, e.__uniConfig.locale = "", e.__uniConfig.fallbackLocale = void 0, e.__uniConfig.locales = n.keys().reduce((function(e, a) {
                var t = a.replace(/\.\/(uni-app.)?(.*).json/, "$2"),
                    i = n(a);
                return Object.assign(e[t] || (e[t] = {}), i.common || i), e
            }), {}), e.__uniConfig.nvue = {
                "flex-direction": "column"
            }, e.__uniConfig.__webpack_chunk_load__ = t.e, i.default.component("pages-home-index", (function(e) {
                var a = {
                    component: t.e("pages-home-index").then(function() {
                        return e(t("0381"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-login-login", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-login-forget~pages-login-login~pages-login-phoneCode~pages-login-register"), t.e("pages-login-forget~pages-login-login~pages-login-register"), t.e("pages-login-login")]).then(function() {
                        return e(t("bf9d"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-mine-ucenter", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-mine-ucenter~pages-mine-userinfo"), t.e("pages-mine-ucenter")]).then(function() {
                        return e(t("e897"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-login-forget", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-login-forget~pages-login-login~pages-login-phoneCode~pages-login-register"), t.e("pages-login-forget~pages-login-login~pages-login-register"), t.e("pages-login-forget")]).then(function() {
                        return e(t("fe7e"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-login-register", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-login-forget~pages-login-login~pages-login-phoneCode~pages-login-register"), t.e("pages-login-forget~pages-login-login~pages-login-register"), t.e("pages-login-register")]).then(function() {
                        return e(t("6ec0"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-login-registerNext", (function(e) {
                var a = {
                    component: t.e("pages-login-registerNext").then(function() {
                        return e(t("c42f"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-home-language", (function(e) {
                var a = {
                    component: t.e("pages-home-language").then(function() {
                        return e(t("ff72"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-login-phoneCode", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-login-forget~pages-login-login~pages-login-phoneCode~pages-login-register"), t.e("pages-login-phoneCode")]).then(function() {
                        return e(t("ccc1"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-mine-recharge", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-mine-googleAuth~pages-mine-inviteFriends~pages-mine-recharge"), t.e("pages-mine-recharge")]).then(function() {
                        return e(t("2731"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-mine-googleAuth", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-mine-googleAuth~pages-mine-inviteFriends~pages-mine-recharge"), t.e("pages-mine-googleAuth")]).then(function() {
                        return e(t("c423"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-mine-userinfo", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-mine-ucenter~pages-mine-userinfo"), t.e("pages-mine-userinfo")]).then(function() {
                        return e(t("8907"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-mine-rechargeRecords", (function(e) {
                var a = {
                    component: t.e("pages-mine-rechargeRecords").then(function() {
                        return e(t("d3f6"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-mine-authentication", (function(e) {
                var a = {
                    component: t.e("pages-mine-authentication").then(function() {
                        return e(t("d7b4"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-mine-inviteFriends", (function(e) {
                var a = {
                    component: Promise.all([t.e("pages-mine-googleAuth~pages-mine-inviteFriends~pages-mine-recharge"), t.e("pages-mine-inviteFriends")]).then(function() {
                        return e(t("641d"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-mine-withdrawalRecords", (function(e) {
                var a = {
                    component: t.e("pages-mine-withdrawalRecords").then(function() {
                        return e(t("84f9"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-mine-funds", (function(e) {
                var a = {
                    component: t.e("pages-mine-funds").then(function() {
                        return e(t("bc69"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-mine-teamIncomes", (function(e) {
                var a = {
                    component: t.e("pages-mine-teamIncomes").then(function() {
                        return e(t("6b22"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-mine-withdraw", (function(e) {
                var a = {
                    component: t.e("pages-mine-withdraw").then(function() {
                        return e(t("dcd0"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-home-aboutus", (function(e) {
                var a = {
                    component: t.e("pages-home-aboutus").then(function() {
                        return e(t("b342"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-home-joinus", (function(e) {
                var a = {
                    component: t.e("pages-home-joinus").then(function() {
                        return e(t("2f93"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-home-cert", (function(e) {
                var a = {
                    component: t.e("pages-home-cert").then(function() {
                        return e(t("b680"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-home-download", (function(e) {
                var a = {
                    component: t.e("pages-home-download").then(function() {
                        return e(t("0b1b"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-home-rules", (function(e) {
                var a = {
                    component: t.e("pages-home-rules").then(function() {
                        return e(t("1e3a"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-transaction-index", (function(e) {
                var a = {
                    component: t.e("pages-transaction-index").then(function() {
                        return e(t("be0f"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-transaction-incomeStatistics", (function(e) {
                var a = {
                    component: t.e("pages-transaction-incomeStatistics").then(function() {
                        return e(t("6164"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-team-index", (function(e) {
                var a = {
                    component: t.e("pages-team-index").then(function() {
                        return e(t("ba16"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-team-myTeam", (function(e) {
                var a = {
                    component: t.e("pages-team-myTeam").then(function() {
                        return e(t("3fb7"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-home-earn", (function(e) {
                var a = {
                    component: t.e("pages-home-earn").then(function() {
                        return e(t("ec31"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), i.default.component("pages-home-earnlist", (function(e) {
                var a = {
                    component: t.e("pages-home-earnlist").then(function() {
                        return e(t("52a0"))
                    }.bind(null, t)).catch(t.oe),
                    delay: __uniConfig["async"].delay,
                    timeout: __uniConfig["async"].timeout
                };
                return __uniConfig["async"]["loading"] && (a.loading = {
                    name: "SystemAsyncLoading",
                    render: function(e) {
                        return e(__uniConfig["async"]["loading"])
                    }
                }), __uniConfig["async"]["error"] && (a.error = {
                    name: "SystemAsyncError",
                    render: function(e) {
                        return e(__uniConfig["async"]["error"])
                    }
                }), a
            })), e.__uniRoutes = [{
                path: "/",
                alias: "/pages/home/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isEntry: !0,
                                isTabBar: !0,
                                tabBarIndex: 0
                            }, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-home-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 1,
                    name: "pages-home-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/home/index",
                    isQuit: !0,
                    isEntry: !0,
                    isTabBar: !0,
                    tabBarIndex: 0,
                    windowTop: 0
                }
            }, {
                path: "/pages/login/login",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-login-login", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-login-login",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/login/login",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/ucenter",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 3
                            }, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-mine-ucenter", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 2,
                    name: "pages-mine-ucenter",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/mine/ucenter",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 3,
                    windowTop: 0
                }
            }, {
                path: "/pages/login/forget",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-login-forget", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-login-forget",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/login/forget",
                    windowTop: 0
                }
            }, {
                path: "/pages/login/register",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-login-register", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-login-register",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/login/register",
                    windowTop: 0
                }
            }, {
                path: "/pages/login/registerNext",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-login-registerNext", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-login-registerNext",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/login/registerNext",
                    windowTop: 0
                }
            }, {
                path: "/pages/home/language",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-home-language", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-home-language",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/home/language",
                    windowTop: 0
                }
            }, {
                path: "/pages/login/phoneCode",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-login-phoneCode", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-login-phoneCode",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/login/phoneCode",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/recharge",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-mine-recharge", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-recharge",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/mine/recharge",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/googleAuth",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-mine-googleAuth", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-googleAuth",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/mine/googleAuth",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/userinfo",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-mine-userinfo", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-userinfo",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/mine/userinfo",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/rechargeRecords",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-mine-rechargeRecords", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-rechargeRecords",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/mine/rechargeRecords",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/authentication",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-mine-authentication", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-authentication",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/mine/authentication",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/inviteFriends",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-mine-inviteFriends", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-inviteFriends",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/mine/inviteFriends",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/withdrawalRecords",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-mine-withdrawalRecords", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-withdrawalRecords",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/mine/withdrawalRecords",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/funds",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-mine-funds", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-funds",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/mine/funds",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/teamIncomes",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-mine-teamIncomes", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-teamIncomes",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/mine/teamIncomes",
                    windowTop: 0
                }
            }, {
                path: "/pages/mine/withdraw",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-mine-withdraw", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-mine-withdraw",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/mine/withdraw",
                    windowTop: 0
                }
            }, {
                path: "/pages/home/aboutus",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-home-aboutus", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-home-aboutus",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/home/aboutus",
                    windowTop: 0
                }
            }, {
                path: "/pages/home/joinus",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-home-joinus", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-home-joinus",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/home/joinus",
                    windowTop: 0
                }
            }, {
                path: "/pages/home/cert",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-home-cert", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-home-cert",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/home/cert",
                    windowTop: 0
                }
            }, {
                path: "/pages/home/download",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-home-download", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-home-download",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/home/download",
                    windowTop: 0
                }
            }, {
                path: "/pages/home/rules",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-home-rules", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-home-rules",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/home/rules",
                    windowTop: 0
                }
            }, {
                path: "/pages/transaction/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 1
                            }, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-transaction-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 3,
                    name: "pages-transaction-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/transaction/index",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 1,
                    windowTop: 0
                }
            }, {
                path: "/pages/transaction/incomeStatistics",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-transaction-incomeStatistics", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-transaction-incomeStatistics",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/transaction/incomeStatistics",
                    windowTop: 0
                }
            }, {
                path: "/pages/team/index",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({
                                isQuit: !0,
                                isTabBar: !0,
                                tabBarIndex: 2
                            }, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-team-index", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    id: 4,
                    name: "pages-team-index",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/team/index",
                    isQuit: !0,
                    isTabBar: !0,
                    tabBarIndex: 2,
                    windowTop: 0
                }
            }, {
                path: "/pages/team/myTeam",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-team-myTeam", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-team-myTeam",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/team/myTeam",
                    windowTop: 0
                }
            }, {
                path: "/pages/home/earn",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-home-earn", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-home-earn",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/home/earn",
                    windowTop: 0
                }
            }, {
                path: "/pages/home/earnlist",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: Object.assign({}, __uniConfig.globalStyle, {
                                enablePullDownRefresh: !1,
                                navigationStyle: "custom"
                            })
                        }, [e("pages-home-earnlist", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "pages-home-earnlist",
                    isNVue: !1,
                    maxWidth: 0,
                    pagePath: "pages/home/earnlist",
                    windowTop: 0
                }
            }, {
                path: "/preview-image",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-preview-image", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "preview-image",
                    pagePath: "/preview-image"
                }
            }, {
                path: "/choose-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-choose-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "choose-location",
                    pagePath: "/choose-location"
                }
            }, {
                path: "/open-location",
                component: {
                    render: function(e) {
                        return e("Page", {
                            props: {
                                navigationStyle: "custom"
                            }
                        }, [e("system-open-location", {
                            slot: "page"
                        })])
                    }
                },
                meta: {
                    name: "open-location",
                    pagePath: "/open-location"
                }
            }], e.UniApp && new e.UniApp
        }).call(this, t("c8ba"))
    },
    c9a4: function(e, a, t) {
        "use strict";
        t.r(a);
        var i = t("f848"),
            n = t.n(i);
        for (var r in i) "default" !== r && function(e) {
            t.d(a, e, (function() {
                return i[e]
            }))
        }(r);
        a["default"] = n.a
    },
    cacc: function(e, a) {
        e.exports = "data:image/png;base64,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"
    },
    ce25: function(e, a, t) {
        e.exports = t.p + "static/img/LEO.b8dff3f8.png"
    },
    d697: function(e, a) {
        e.exports = "data:image/png;base64,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"
    },
    d7fa: function(e, a, t) {
        "use strict";
        var i = t("4ea4");
        t("caad"), t("d81d"), t("2532"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.routeGuard = d;
        var n = i(t("bee9")),
            r = t("4027"),
            o = ["gateway/sso/index"],
            s = o.map((function(e) {
                return r.baseUrl + e
            }));

        function d() {
            uni.addInterceptor("request", {
                invoke: function(e) {
                    n.default.get("token") || s.includes(e.url) || uni.reLaunch({
                        url: "pages/login/login"
                    })
                },
                fail: function() {
                    1 === getCurrentPages().length && "pages/home/index" !== getCurrentPages()[0].route && uni.reLaunch({
                        url: "/pages/home/index"
                    });
                    var e = uni.getStorageSync("lang"),
                        a = t("5096")("./text-".concat(e, ".json"));
                    uni.showToast({
                        title: a.serverCodes["500"],
                        icon: "error"
                    })
                }
            })
        }
    },
    dc88: function(e, a) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEgHpUWHRSYXcgcHJvZmlsZSB0eXBlIHhtcAAASMelV1myo0gM/Ncp5gggVamo49gG/iZiPvv4k6kCAwa7/brtCJZapFRqK+TXv//JP/j1te/EHjaXoXTeu/ndc0nauXr24tUnG1Wn+X6/z6oYr544kovlNFqXxtIlw9rBq6Sh3Ao2Ziu3NOXkuEOgGTap2myTdvYog93K4NjoI5V5rx3f/eFTMc4JNQBN8pk47NYmnssDySYGY3fuSM8d2uUhjbkTJbi5xJBlncx1BJ7ekg0YKVYx1pvjvTPD7AOjiuceMzPuA669megYgzdcHVdYqN3LXxfzFCiwJmtKyV9MU4lJmjeUhH9nN5gzl/jpVLBKp0BcQnPlP5Aororr2BQAUbEC/5CRMsAsaOD8EQUgwFVwhHoNpioYwop13nsBYXMBsUTViN37ggSf8YayaXMRnk3wOMKUAXg6gge13eqrTSS22AUBHSCoP2i8NOu5ENeMjZmup6nQ2gT3Z8GIpwGWABEM5lMn3wFfcJ+2bzbINS9pRAr8RMUgR24gcLwwxEpKuXhzybVwuZJ+FM4MLXA61sxZIwzmIBnpSvGNUWHMNP3UkRgpGYLIg2Yqmf1xyq4zVyBbF82dDjlKBzcgrE3rGxU5pXangsg7yGi5hohm+OcU6cmMQx3AtOuds5GJ3UHs6AyZ6l5qEysHudpSGFe8h1imM3K7JfUHsVmYY96g9heQvxYtTXakwM098nykuHB05TOKbo5gnJADxHGimgwy1x7cvljd0NjbDTWhwmVm/Qy1lSnFHcUEZQr1HnWyJiAH1aw5zjoJacyzJxcR7RDFEAxCpogkkE1R0hYhHGv0iBuKK1Ta4Lwi2CCQIQfZeDJHCeaYAzVWdDFLPmGaYWtx0sjtdkLAMLTyrAkrgkPDwBMENSRXjEA0TICHiM3CXGOpDXQUkcKrg2UWNl3ggTsMNQf3dO0FOvq0ttYJRI89WtnDffKVGkrcFWjYX/iuEf8DNBJbJSLCiL7cC1II8sCSAQ3rPhs2+hrGthZwFQgv3Ela3BguBXTUn2P/IK3lOIboqTYd8QvDmykCDECEZXRpirRNwAqiyNtiSuYT1g0wtwC5Yx8SF2Q7Cps9dD7q+p12JhPYUjZ2epMqBbcuGjXTskL7SmRMM3HBAcgIFMZAjDPASblQ+za4Z+Sqa1wE6MKxnEjexw0OUM/5F5MzHdRvY7KCQ+htveLG89va4SMhdoWWB7CX1QhQucrk10T+JjBljczPgXlEUAoYyw3rnxb/vTj2QTxBbM+DVk5RTOmBb/rXu/YlS/+az2H4mX6I7qPLLtTLkftvqGeNBHsDiw+4zZE0VVp2xUSK+K5RtVMULPqKmcSRHLUcWXhNvRy5D9LbVYN6BQILurHiE/Vy5P7PqZc3R4c9zdxG3qigHVrns3vk5/65do989M8Pepzsm9xlj/ucGs9Dhnx5gHmbGqt75G9TY3WPfO+frY7ui1ocXsGsvK+FuwJ8+UlzXCXr99cm//Wjs81cfPlmmhfeBmzhV6v8D58Ndp/XqFGgAAAGp0lEQVRo3u2be4hUVRzHP+feOzP7crfUXU00nylLqWxpmmIGERYaZeajh2D9Y+EjIyGilFIS0kosRaM/MlQs1EQiUBNENAwzETRf+Ejxtb4fu+7OzL3n9MeZ1dlp7507M3d3fH1hWO7Muef+Pufc8/id32+FUop7SUa+DbgP3Myyki86vhFo3eVAFTAIeAzokqb8KWAv8AewGzgdlCEnV7gAB6iewAhgKNAb6OrjnicSDdQX2A6sSzRAoBLJk1YAPTwGeDUBW5hjXVHgd2AN8BNQn21FyT0c1BieAOwDfgZGBwALEEE33A/onp4EmLlWmivwIGBTwqjKACDd1B1YCGwDnssX8AxgK/BsM4KmaiCwEZjXksBtgLXArCzvD0LT0bO5n8kwJ+AKYD3wcp5AkzUoYUtG0JkAV6BbtZ8Q4OuTQeW+60x8EuoJ7AAe8fscv+twK2C9IegRd6C27paRblJK/15SBIbQ16kyE3NufRTqY6Dw10hKgWlAiV4L2irYAAxBb14CAV4JVGGAE5cYcRsJSI8bDAChUIQRQjQCNkywJZw9B06NBEtRVAiWYSPTICsgJBSOYaBESJdWdAVWA08FAfwJMNww4MwZxQsD6pg3USAx8XK0TCFwZJxxn9ocqi6mvHXidTTgxGkgZtO3Ms6IfjCkyqBDG5OQoZBp+lkBIQNOXqhn7ByQMkRxAUjFQGAJ8E4uwH2Bzxou7BgUFwp6dSrA3/C3iMZtHAmWBXVRqD4m6VMZZ9poyZvDTEKmlVSX/51u2zKFdCRO40afiO7pTdkCL2lEZkJ9vKGd0+vUJcmpaxalxXCjDs4dtXl/fIy5k8NYRsQ3XFM6fx0Qoql3YQl6ExRv6j6vbnoNvdA3UiYz7879ktoaRSgM547ZzJoU4+upESwjd5/Fw47uwHtuP7oBm8Cc3ExyWLZJgjCpPq6YNj7KjAkFBLAd9qOPgNJMgF8ivf/qqd2HbX7dZkEcevWsZ/6UCC24MWsNvJ4J8PjcnmczbaFDLGqBZfP524rmc71d9ZZf4G7Ai9k/RzF7aYwtO8IYxdCv0mHU0+GWhgV4kibW5VTgMvQ+OcuBJpm/sp6Zi8JUdLaQNZKRgyAPvdugUalfpFrSH3jGqwa3Bak2GufjxTYLVli07WJhCsBUDO6TybzuXz5PlwenAx4KPO56uw1F4eQnSa7U2Czf4PDtKsGh4xHa9TAoCMOlq1BcrGj/oN+Jyu9OWqtTuUIBUnoW6wN0IOlAMBW4N/CQW4tGSgQXrpls3BnleLVgxz7YvEdw5N8QVpHFwz1BSXAcbUhJRFJY4H9mPngyyj8nDEoLDc+9jSHg1GWBaRraMXEvWoR+a9e5AXfGZeZWCtpXwN9HChg23QEHEAYFpYIOnfWgd2xdtsGLUoD/yIbi+7W1fPVlK+hhgFReRSEUoWOFQAjvosCjXsCeL4hjQzgE5e1MwhaYlu5RKZu+USn87kIBKGllQgeTdhUCKT0cCMXNnvXRnmXJF6nAnrc3PChs3WqAIGWYQEgRscDxaHqRWTs22nHdlqGWdDAZhv8aeSm3JXDAajQ27gXgmBdw8+wS8qtrXsAt4ru1sK56AZ/Mt3XNoINewHuB6nxbGKBi6HNrV+AtwK58Wxmg9gDHvYB3oANkd4v+TP0iFfgiOlB2t2hNOmCAA+jQxZ2uPcBmP8AAy/JtbQBa2tSXbsCrgDP5tjgH1QLLMwGOkRRiuQM1HziXCTDAdzRD2lAL6CzwhduP6ZyHd/NtfRaaBNRkC7wNWJBvggy0GvjFq4Af93BaAvx2135gXLpCfv3hMcCxTJ6uFAgFJYV+PU6DSIg0p2quOg+8gj5a9JTfkMAZYBg6qaXcrxWWqai5EaOsSGJ7mSIgZEqUcrLxyOvRGXsH/BTONNeyGzpVKH3WjAIpFGVWLRFDYivvlyksJFfiYepUQSZO+VlgOGkcnlyyaY8Cz6OTPft7FTQMEAiOXSzRp5tevEof95aWQGkx3m/DLR0CxqJTjX0rmyjXUXRk7htgiluhhsPx8gcAocezqxqiB8o37I/oJbMuU+NzOcSbih47u70KqUTvSeXxkbqMj0P1Q+hs3QnZwOYKDPAbOg/kQ3wkheWgC8BsoB96rc1aQRzTRoG56EDcZPRMnt3i8n/tAj5Ap0/NBK7nWmGQkerLwCJgMTAAGJn4W4VOXfSjOvQQ+QsdANuKS/rR7QDcIIn+n4XtievO6DhtJTr1uIxb4Y8outcuAofRPXq0GWy6KXH/H7Xuct1zwP8BwuX2DZHelYMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDMtMTNUMDU6NDc6NDIrMDA6MDBzC5JRAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTAzLTEzVDA1OjQ3OjQyKzAwOjAwAlYq7QAAAABJRU5ErkJggg=="
    },
    e340: function(e, a, t) {
        e.exports = t.p + "static/img/CRO.ef2d0914.png"
    },
    ea22: function(e) {
        e.exports = JSON.parse('{"tabBar":{"home":"Ev","trade":"Ticari kat","team":"Benim takımım","mine":"Bana ait"},"funcs":{"aboutus":"Hakkında WOTC","rules":"Platform Kuralları","download":"İndirme Merkezi","cert":"Yeterlilik belgesi","setting":"Dil","customer":"Müşteri servisi","activities":"Etkinlik Duyurusu","joinus":"KatılmakWOTC","earn":"Bedava para faiz getirir"},"home":{"index":{"trade_data":"Işlem verileri","no_register":"Lütfen önce üye olun","no_message":"\'Bilgi yok\'"},"download":{"google_play":"Worldotc for Android","google_play_tip":"App Store İndirme","ios":"Worldotc for iOS","ios_tip":"İndirmek için resmi web sitesine gitmek için tıklayın"},"language":{"language":"Dil"},"earn":{"title":"Bedava para faiz getirir","total_profit":"Toplam Gelir","access_detail":"Erişim Ayrıntıları","available_balance":"Kullanılabilir bakiyeler","storage_balance":"Yatırılan miktar","item_title":"Anlaşmaların listesi","time":"Zaman","profit":"Hesabı kapatmak","btn":"şimdi al","msg":{"earn_success":"Anlaşma Başarılı"},"trade":{"sell_title":"Siparişlerin İadesi","sell_time":"Zaman：","profit_fee":"Faiz oranı：","input_amount":"Miktarı girin:","input_amount_tip":"0.00","input_amount_msg":"Lütfen miktarı girin","sell_income":"Beklenen getiriler:","sell_btn":"Satın almak","cancel_btn":"İptal edildi","input_amount_min_tip":"Minumun altındaki miktar:","input_amount_max_tip":"Maksimumu aşan tutar: ","note":"\'Kâr için atıl varlıkları yatırın\'","cancel":"İptal edildi"}},"earnlist":{"title":"Erişim Ayrıntıları","type_undo":"Bitmemiş","type_done":"Tamamlanmış","type":"Tip","amount":"Tutar","profit":"Hesabı kapatmak","buy_date":"Para Yatırma Tarihi:","send_date":"Yerleşim tarihi:"}},"login":{"login":{"title":"Giriş yapmak","password":"Şifre","passwd_tip":"Lütfen 6 ~ 16 bitlik bir şifre girin","mobile":"Cep telefonu numarası","mobile_tip":"Lütfen cep telefonu numaranızı giriniz","register":"Üye olmak","forgot_pwd":"Kayıp Şifre","btn":"Giriş yapmak"},"phoneCode":{"custom_phone_code_tip":"Lütfen uluslararası bir alan kodu girin","confirm":"TAMAM","msg":"Mevcut alan kayıt için açık değil"},"register":{"title":"Üye olmak","smscode":"SMS Doğrulama Kodu","smscode_placeholder":"Lütfen bir SMS doğrulama kodu girin","smscode_tip":"Lütfen bir SMS doğrulama kodu girin","smscode_send_text":"Kimlik doğrulama kodu gönder","login":"Giriş yapmak","next_step":"Sonraki adım","password":"şifre","passwd_tip":"Lütfen 6 ~ 16 bitlik bir şifre girin","nickname":"Takma ad","nickname_tip":"Lütfen takma adınızı giriniz","invite_code":"Önerilen Kod","invite_code_tip":"Lütfen önerilen kodunuzu girin","submit":"Gönderme","reg_success":"Başarılı Kayıt","mobile_tip":"Lütfen cep telefonu numaranızı giriniz"},"forget":{"title":"Kayıp Şifre","password":"Şifre","passwd_tip":"Lütfen 6 ~ 16 bitlik bir şifre girin","smscode":"SMS Doğrulama Kodu","smscode_placeholder":"Lütfen bir SMS doğrulama kodu girin","smscode_send_text":"Kimlik doğrulama kodu gönder","submit":"Gönderme","success":"Parola değişikliği başarılı oldu"}},"mine":{"ucenter":{"logout":"Çıkış","invite_code":"Önerilen Kod: ","my_total_assets":"Toplam Varlıklarım","my_account":"Hesabım","recharge":"Şarj","withdraw":"Para çekme","personal_info":"Kişisel bilgi","google_auth":"Güvenlik Merkezi","recharge_record":"Kayıtları Şarj Et","withdraw_record":"Çekilme Kayıtları","fund_detail":"Fonların detayları","auth":"Kimlik Doğrulama","team_profit":"Takım Kazançları","invite_friend":"Arkadaşını Davet Et","tip":"İpuçları","set_withdraw_address":"Lütfen önce para çekme adresini bağlayın","set":"Ayarlar","cancel":"İptal edildi"},"googleauth":{"title":"Güvenlik Merkezi","googleauth_tip":"Lütfen Google Authenticator\'ı bağlayın","open_googleauth":"Google Authenticator\'ı açın","setting_tip":"Platformumuzda sağlanan QR kodunu taramaya başlayın veya platformda sağlanan 16 haneli anahtarı manuel olarak girin.Başarılı eklemeden sonra, bağlamayı tamamlamak için dinamik şifre doğrulamasını girin。","copy":"Anahtarı kopyala","copy_success":"Başarıyla kopyala","vercode":"Google doğrulama kodu","bind":"Kimlik doğrulama ve bağlama","unbind":"çözmek","vercode_tip":"lütfen doğrulama kodunu girin","bind_success":"bağlama başarılı","notice":"Tür ipuçları","bind_tip":"Google Authenticator\'a bağlısınız","unbind_tip":"Bağlantıyı kaldırmak için lütfen doğrulama için SMS doğrulama kodu alın","unbind_success":"Bağlantıyı başarıyla kaldır"},"userinfo":{"title":"Kişisel bilgi","modify":"Değişiklik","nickname":"Takma ad","mobile":"Cep telefonu numarası","address":"Çekilme Adresi","login_pwd":"Giriş şifresi","input_tip":"Lütfen içeriği doldurun","set":"Ayarlar","cancel":"İptal edildi","nickname_tip":"Lütfen bir takma isim giriniz","login_pwd_tip":"Lütfen şifre giriniz","withdraw_address_tip":"Lütfen para çekme adresini girin","old_pass":"eski Şifre","new_pass":"Yeni Şifre","old_pass_tip":"Lütfen orijinal şifreyi girin","new_pass_tip":"Lütfen yeni bir şifre girin","pass_tip":"Şifrenizi unutursanız, lütfen giriş sayfasındaki cep telefonu doğrulama kodunuzdan şifrenizi alınız.","vercode":"Google doğrulama kodu","code_tip":"Lütfen google doğrulama kodunu girin"},"recharge":{"title":"Şarj","recharge_tip":"*Şarj İpuçları","recharge_tip_mark1":"Para yatırma adresi yalnızca TRC20-USDT\'yi destekler ve minimum depozito 10USDT\'dir.","recharge_tip_mark2":"Kaybı önlemek için lütfen diğer malları depozito adresine transfer etmeyin.","qrcode":"İki Boyutlu Kod","copy":"Çoğaltma","copy_success":"Çoğaltma Başarısı"},"rechargeRecords":{"title":"mevduat kaydı","time":"Zaman","amount":"Tutar","status":"Durum","payway":"Şarj：","orderno":"Sipariş numarası：","recharge_status":{"1":"Tamamlanmış","2":"Şarj başarısız oldu","3":"İptal edildi"}},"withdraw":{"title":"Para çekme","available_balance":"Kullanılabilir bakiyeler","real_money":"Gerçek makbuz (işleme ücreti: %3)","smscode":"SMS Doğrulama Kodu","smscode_placeholder":"Lütfen bir SMS doğrulama kodu girin","smscode_send_text":"Kimlik doğrulama kodu gönder","address":"Çekilme Adresi","submit":"Gönderme","withdraw_success":"Çekilme Başarısı","withdraw_tip":"Minimum para çekme: ","withdraw_amount_tip":"Lütfen para çekme miktarını girin","vercode_tip":"Kimlik doğrulama kodu boş olamaz","password":"şifre","passwd_tip":"Lütfen 6~16 haneli bir şifre girin","vercode":"Google doğrulama kodu","code_tip":"Lütfen google doğrulama kodunu girin","tips":"Hatırlatma: Paranızın güvenliği için lütfen Google Authenticator\'ı bağlamak için Güvenlik Merkezine gidin.。"},"withdrawalRecords":{"title":"Çekilme Kayıtları","time":"Zaman","amount":"Tutar","status":"Durum","withdraw_way":"Çekilme Adresi:","orderno":"Sipariş numarası：","withdraw_status":{"0":"Çekilmede","1":"Çekilme Başarısı","2":"Çekilme iptali"}},"funds":{"title":"Fonların detayları","time":"Zaman","amount":"Tutar","status":"Durum","fund_status":{"10":"Gelirlerin Alınması","11":"Görev Ödülleri","20":"İçine kaydet","21":"Çıkarmak","30":"OTCAnlaşma","31":"OTCKazanç","50":"Şarj","51":"Şarj","52":"Şarj","60":"Para çekme","61":"Para çekme","62":"Para çekme"}},"authentication":{"title":"Kimlik Doğrulama","auth_status":{"0":"İtibarsız","1":"İnceleme altında","2":"Sertifikalı","3":"Reddedildi"},"auth_photo_hold_example":"Örnekler","auth_problem_tips":"İpuçları: Sorun yaşarsanız lütfen müşteri hizmetleriyle iletişime geçin</u>","submit":"Şimdi Sertifikalı","uploading":"Yüklendi..."},"teamIncomes":{"title":"Takım Kazançları","level":"Rütbe","userid":"ID","time":"Zaman","amount":"Tutar"},"inviteFriends":{"title":"Arkadaşını Davet Et","invite_code":"Önerilen Kod","invite_friend_tip":"Hemen büyük paranın tadını çıkarın, gidin ve davet edin.","invite_friend_btn":"Kopyala\'yı tıklayın","share_rule":{"title":"İndirim Kuralları","title_tip":"Kayıt sırasında bir arkadaşınız tarafından yapılan her kâr için orantılı bir komisyon alacaksınız","rate_title":"Komisyon oranlarına ilişkin kurallar aşağıdaki gibidir","rate_user_level":"Kullanıcı Sıralaması","rate_way":"Tüzük","rate_num":"\'Komisyon oranı\'","rate_lv1_desc":"Doğrudan Davet Edilen Kullanıcılar","rate_lv2_desc":"LV1 Davetli Kullanıcı","rate_lv3_desc":"LV2 Davetli Kullanıcı","rate_lv4_desc":"lv3 Aşağıdan tüm kullanıcılar davet edildi","hint":"Anlaşma komisyonu ve istediğiniz zaman cüzdanınıza çekilebilir"},"copy_success":"Çoğaltma Başarısı"}},"team":{"index":{"team_total_income":"Toplam Gelir","team_residual_income":"Fazla Kazanç","receive":"alma","team_info":"Takım Detayları","team_user_list":"Ayrıntılara bakınız","team_total_profit":"Toplam Gelir","team_total_num":"Toplam sayısı","team_total_recharge":"Toplam şarj","people_num":"İnsanların sayısı","people_profit":"Hesabı kapatmak","team_invite_task":"Görev Gereksinimlerine Davet","team_invite_task_tip":"{need_num}, LV1 kullanıcılarını başarıyla ticaret yapmaya ve {amount} USDT ödülü almaya davet ediyor","progress":"İlerlemek","team_receive":"alma","team_hasreceive":"Alınan","receive_success":"Başarı Almak"},"myTeam":{"title":"Takım Detayları","team_total_profit":"Toplam Gelir","team_total_num":"Toplam sayısı","team_total_recharge":"Toplam şarj","team_lv1":"Level 1","team_lv2":"Level 2","team_lv3":"Level 3","team_lv_count":"Miktar:","team_lv_income":"Faydalar:","team_lv_recharge":"Şarj:","team_lv_invite":"Davetiye sayısı：","team_lv_mobile":"Cep telefonu numarası:","team_lv_time":"Kayıt Zamanı:："}},"transaction":{"index":{"total_assets":"Toplam varlıklar","trade_stat":"Gelir İstatistikleri","tran_title":"WOTC İşlem Tanıtımı","tran_desc":"WOTCKüresel bir kripto para eşleştirme sistemine sahiptir. Kullanıcılara küresel bir kripto para birimi ticareti platformu sağlar. İşlem istikrarını ve kâr maksimizasyonunu sağlama","accepting":"Hareket işleme","wallet_balance":"Cüzdan Bakiyesi","order_amount":"İşlem tutarı","order_amount_tip":"Lütfen doğru miktarı girin","order_amount_all":"Herşey","btn":"Filtrelemeye başla","trade_success":"Anlaşma Başarılı:","trade_amount":"İşlem tutarı：","trade_profit":"İşlem kazançları:：","record":"İşlemlerin listesi","tradingtime":"Kalan zaman:{%s}","time":"Zaman","amount":"İşlem tutarı","profit":"Kâr","sell_time":"Satış Zamanı:","sell_amount":"Satılan miktar：","income_time":"Gelir Süresi：","income_amount":"Kâr：","order_num":"Sipariş numarası:","search":"AIAkıllı Eşleşme...","msg":{"amount_tip":"Bakiye (() değerinden az, filtre uygulanamıyor","order_amount_tip":"Lütfen doğru miktarı girin"},"sell":{"symbol":"Kripto para:","service_provider":"MSBSertifikalı Hizmet Sağlayıcı:","market_price":"USDTİşlem Fiyatı：","trade_price":"İşlem Fiyatı:","order_amount":"Sipariş miktarı:","confirm":"Ticarete başlamak","cancel":"İptal edildi","trading":"Ticarette..."},"sell_success":{"title":"Gelir ve fonlar 3 saat sonra hesabınıza otomatik olarak yatırılacaktır!","orderNo":"Sipariş numarası:","trade_price":"İşlem tutarı:","profit":"Kâr:","amount":"Toplam:","tip":"İşlem cüzdanına aktarıldı ve ardından otomatik olarak bakiye cüzdanına aktarıldı","confirm":"Onayla"}},"incomeStatistics":{"title":"Gelir İstatistikleri","total_orders_num":"Toplam tamamlanan işlem sayısı","total_money":"Toplam tutar","total_profit":"Toplam kar","date":"Tarih","order_num":"İşlem sayısı","money":"Tutar","profit":"Kâr"}},"main":{"more":"Daha fazla >","got_it":"TAMAM.","loading":"Yükleniyor...","modify_success":"Değişiklik Başarılı"},"infomation":{"aboutus":{"1":"World Over The Counter, büyük bir likidite havuzu tarafından desteklenen deneyimli profesyonellerden oluşan bir ekiptir.","2":"Birden fazla yasal ihaleyi, USDT\'yi ve diğer büyük kripto para birimlerini kapsayan, 10 dolardan milyon dolara kadar değişen işlemler için World Over The Counter\'un Tezgah Üstü (OTC) hizmeti. World Over The Counter\'ın en büyük avantajı tezgah üstü hizmetler, yatırımcılar ve yüksek net değerli varlık sahipleri için güçlü ticaret derinliğimiz, özelleştirmemiz ve yüksek gizlilik korumamızdır. World Over The Counter\'un, müşterileri popüler ticaret platformlarında yaygın olan kaygan fiyat kayıplarından muaf tutan tezgah üstü hizmetleri , büyük kripto para yatırımcıları için en iyi seçimdir., ","3":"World Over The Counter\'un OTC hizmeti, yasal ihale, USDT veya diğer kripto para birimi için geçerlidir. World Over The Counter, ticaret derinliğinin karmaşıklığı ve alım ve satım eşleştirmesi hakkında endişelenmeden kripto para biriminde özgürce ve kolayca ticaret yapmanıza izin vermeye odaklanmıştır. aynı zamanda kapsamlı işlem yürütme ve mutabakat hizmetleriyle size esnek, güvenli ve kaliteli bir işlem deneyimi sunuyoruz.","4":"1：World Over The Counter OTC Hesabı (Kişisel Hesap) Başvurusu","5":"2: Hesabınıza yasal ödeme veya kripto para yatırın","6":"3: İşlem gerçekleştirildikten sonra, USDT otomatik olarak üç saat içinde hesap bakiyenize yatırılacaktır.","7":"Sizin İçin Bir OTC Planı.","8":"Profesyonel Tüccar","9":"Dünyanın en iyi bitcoin ve kripto para tüccarlarından birine sahibiz. Profesyonel deneyimimiz Bitcoin\'in doğuşundan uzun yıllara kadar uzanıyor ve binlerce misafir için doğru zamanda ve doğru yerde en iyi fiyat hizmetini sunuyoruz. ","10":"Farklı Bir İşlem Deneyimi.","11":"Genel ve büyük tezgah üstü borsaların aksine, World Over The Counter size en iyi likidite finansmanı düzenlemelerini ve alım satım ihtiyaçlarınıza göre uyarlanmış alım satım seçeneklerini sunar. Hesabınız başarıyla kurulduğunda, sizinle iletişim kuracağız ve ideal olanı sağlayacağız. program ihtiyaçlarınızı ve beklentilerinizi karşılayacak çözüm. Güvenilirlik, güvenilirlik, rahatlık ve topluluk gelişimi için çalışıyoruz. Her müşteriyle iyi ve kalıcı bir ilişki kurmaya ve her zaman mümkün olan en iyi hizmeti sunmaya çalışıyoruz. ","12":"Uluslararası Hizmet","13":"Genel merkezi ABD\'nin Colorado eyaletinde bulunan World Over The Counter, kendisini uluslararası müşterilere küresel kripto para ticaret platformları ve ticaret hizmetleri sunmaya adamıştır ve Asya, Amerika, Avustralya, Avrupa ve Afrika\'dan gelen müşteriler tarafından çok takdir edilmiş ve güvenilmiştir. ","14":"Güvenilir ve Güvenilir.","15":"World Over The Counter, dürüstlük ve şeffaflığın başarının anahtarı olduğuna inanır ve müşteri bilgilerinin mahremiyetine ve gizliliğine büyük önem verir, profesyonel bir tavırla misafirlerin güvenini ve desteğini kazanır. Güvenilir bir imaj oluşturmaya ve çalışmaya kararlıyız. Sizlerle el ele. Nerede olursanız olun, sunduğumuz tüm hizmetlerden gönül rahatlığıyla yararlanabilirsiniz."},"cert":{"1":"World Over The Counter Limited İşletme lisansı","2":"World Over The Counter Limited İşletme Ruhsatı Tescil Belgesi.","3":"Colorado Eyaleti\'nin Büyük Mührü buraya damgalanmıştır ve bu resmi sertifika usulüne uygun olarak hazırlanmış, yürütülmüş ve yayınlanmıştır.","4":"Colorado bunu geçerli yasalara göre yönetecektir.","5":"Şirket ayrıntılarını görüntülemek için Colorado Eyalet Sekreteri\'nin resmi web sitesindeki sertifika numarasını kontrol edin.","6":"World Over The Counter Foundation İşletme Ruhsatı","7":"World Over The Counter Vakıf İşletme Ruhsatı Tescil Belgesi.","8":"Çünkü WOTC, dünya hayır kurumlarına aktif olarak katılarak sevgilerini dünyaya yayar.","9":"Bu sertifika Colorado Eyalet Sekreteri Ofisi tarafından onaylanmış ve numaralandırılmıştır.","10":"Gelecekte, WOTC dünyanın en büyük hayır kurumlarına katılacak ve daha fazla insanın yardım almasına izin verecek.","11":"Hayırsever vakfın sertifikası ayrıca şirketin tüm üyelerine daha iyi varlık koruması sağlar.","12":"Şirket ayrıntılarını görüntülemek için Colorado Eyalet Sekreteri\'nin resmi web sitesindeki sertifika numarasını kontrol edin.","13":"Videoda, WOTC ekip üyelerini ve ABD Florida\'daki PALM BEACH CHRISTIAN HAZIRLIK OKULU\'nu bir ön işbirliği müzakerelerini görebiliriz. WOTC okullara sponsor olur. Ve okuldaki her öğrencinin akademik yükünü azaltmasına yardımcı olun. Eğitim sektörüne katkıda bulunun.","14":"WDünya çapında WOTC ekip üyeleri tarafından yürütülen hayır faaliyetleri. Daha fazla insana yardım etmeye çalışıyorum. Şafakta bir ışık huzmesi gibidirler. Işığımız daha çok insanı aydınlatsın.","15":"Bir gün kapınızın önünden bir WOTC ekip üyesinin geçtiğini görürseniz şaşırmayın. Çünkü biz zaten tüm dünyada popüleriz. Pek çok rakibin bize sıklıkla iftira atarak ve dedikodu üreterek zarar verdiğini biliyoruz. Ama dayanışmanın gücüyle bu söylentilerin ölmesine izin verdik. WOTC asla kimseyi hayal kırıklığına uğratmadı.","16":"WOTC\'ye güvenen ve destekleyen tüm üyelere teşekkür ederiz. WOTC\'nin yardım vakfının başarılı kuruluşunu kutlayalım.","17":"MSB sertifikası resmi sorgu web sitesi:","18":"https://www.fincen.gov/msb-state-selector","19":"İşletme ruhsatı sorgulama için resmi web sitesi:","20":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","21":"Vakfın resmi web sitesi:","22":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","23":"Yukarıdaki tüm içeriğin yorum hakkı World Over The Counter Limited\'e aittir.","24":"ABD MSB lisansları, esas olarak dijital para birimleri, sanal para birimleri, ICO ihracı, döviz, uluslararası havaleler vb. dahil olmak üzere para hizmetleriyle ilgili işletmeler ve şirketler için Amerika Birleşik Devletleri Hazine Bakanlığı tarafından düzenlenen ve verilen finansal lisanslardır. "},"joinus":{"1":"World Over The Counter, kripto para topluluğuyla iletişime geçmek ve katılmak isteyen herkesi bekler Herhangi bir sorunuz veya yorumunuz varsa, lütfen istediğiniz zaman bize e-posta gönderin veya bizi arayın. Tüm müşterilerimizi kripto para topluluğumuza katılmaya ve tanıtmaya teşvik ediyoruz.","2":"World Over The Counter, işlem maliyetlerini ve kısıtlamaları düşürmeyi, müşterilere tezgah üstü ticaret platformlarının büyük çoğunluğunda daha düşük işlem eşikleri sağlamayı taahhüt eder ve size sunabileceğimiz herhangi bir işlem miktarı sizin için doğru anlaşmadır, bu nedenle USDT ve kripto para birimi herkes için kullanılabilir.","3":"World Over The Counter, kripto para topluluğuyla iletişime geçmek ve katılmak isteyen herkesi bekler.","4":"Şu anda dünya çapında 1 milyardan fazla insan bankacılık hizmetlerine sahip değil veya yoksun, ancak çoğunun akıllı telefonlara erişimi var.","5":"Merkezi olmayan kripto para birimlerinin kendileri için en yüksek değeri sağlaması için her zaman akıllı telefon cüzdanlarını kullanabilirler ve World Over The Counter, kripto para birimlerini evrensel erişime taşımayı hedeflemeye devam edecek.”","6":"Hem çevrimiçi hem de çevrimdışı, World Over The Counter, aktif ve etkileşimli bir kripto para birimi kullanıcı topluluğu geliştirmeye, bilgi ve iletişim yoluyla küresel bitcoin ve kripto para birimi topluluğunu geliştirmeye ve bunlara katılmaya kendini adamıştır.","7":"İster bir kripto para birimi acemi, ister kıdemli bir uzman olun, sizi bekliyoruz!","8":"World Over The Counter, lütfen iletişim yöntemlerinizi ve size nasıl yardımcı olabileceğinizle ilgili basit bilgileri sağlayın, mümkün olan en kısa sürede yanıt vereceğiz.","9":"E-mail: worldoverthecounter@gmail.com","10":""},"rules":{"1":"Kullanım Şartları,","2":"USDT satın alırken asla size ait olmayan bir cüzdan adresi kullanmayın. Lütfen cüzdan adresinizi kullanın. Lütfen dolandırıcı olduğundan şüphelenilen birine USDT göndermeyin!, ","3":"Kullanım Koşullarımızı kabul ettiğinizde, yani Kişisel Veri Toplama Bildirimimizi ve Gizlilik Politikamızı, Gizlilik Politikamızı ve Çerez Politikamızı kabul etmiş olursunuz.","4":"18 yaşından küçük kişilere hizmet, ekipman ve diğer hususları sağlamayacaklardır. 18 yaşından küçükseniz ve sitemizi kullanıyorsanız, uygun erişim, düzeltme, iptal işlemlerini gerçekleştirmek için velayeti size ait olan kişiyle iletişime geçmelisiniz. ve itiraz hakları.","5":"İşlem Kuralları","6":"Worldotc, bir Amerikan MSB sertifikalı kripto para birimidir. USDT ve küresel kripto para ticaret platformu, kullanıcılara işlem doğruluğu ve kolaylığı sağlar. Satın almak istediğiniz sanal para birimi miktarını girin. ","7":"Kazançlar her 3 saatte bir ödenir ve her kâr, yatırımınızın %0,4\'ü olacaktır.","8":"Günde 8 defaya kadar takas, maksimum %3,2 kazanç！","9":"En hızlı 23 günlük yatırım ikiye katlanır!","10":"Aylık maksimum 1.572 kat kar!,","11":"Yükleme Para Çekme Kuralları","12":"Çekmek için TRC20 adresinizi, günde 24 saat, %3\'lük bir para çekme ücreti karşılığında bağlayın.。","13":"Çekilme süresi 1 dakikadır.。","14":"Her TRC20 adresi için yalnızca bir yatırım hesabının bağlanabileceğini unutmayın.","15":"Minimum 11 USDT yatırım ve minimum 5 USDT para çekme ile para biriminiz veya cüzdanınızla şarj edin.","16":"Davet Kuralı","17":"Arkadaşlarınız kazanabileceğiniz komisyon gelirine yatırım yaparak para kazanıyor:","18":"Lv1 kullanıcıları doğrudan davet etti (toplam işlem kârının %15\'i).","19":"Lv2 L1 kullanıcıları davet etti (toplam işlem kârının %10\'u).","20":"Lv3 L2 davetli kullanıcıları (toplam işlem kârının %5\'i).","21":"Davet Görev Ödülleri.","22":"Yatırımı tamamlamaya davet edilen her 10 LV1 üyesi için 10USDT davetiye ödülü","23":"Not: Davet edilen her astın geçerli bir kullanıcı olarak kabul edilmesi için LV1 yatırımını tamamlaması gerekir.","24":"Hatırlatma: Ödüller ve kurallar hakkında herhangi bir sorunuz varsa, lütfen müşteri hizmetleri müdürüyle iletişime geçin."}},"serverCodes":{"401":"Parametreler Doğru Değil.","406":"yetersiz bakiye.","407":"Yanlış İşlem Tutarı.","408":"Geçersiz parametre.","409":"Parola bir harf artı bir sayıdan oluşur","410":"Doğrulama Kodu Hatası.","411":"Kullanıcı adı veya şifre hatası","412":"Hesap dondurun, lütfen müşteri hizmetleri ile iletişime geçin.","413":"Lütfen cep telefonu numaranızı doğru giriniz.","414":"Telefon numarası kaydedildi, lütfen başka bir telefon numarası seçin.","415":"1 dakikalık kimlik doğrulama kodu frekans aralığı alın.","416":"Sık istekler, daha sonra tekrar deneyin.","417":"Doğrulama kodu geçersiz, lütfen doğrulama kodunu yeniden gönderin.","418":"Telefon doğrulanmamışsa veya doğrulama süresi dolmuşsa, lütfen yeniden kaydolmaya başlayın.","419":"Takma ad 2 ~ 8 bit karakterlerden oluşur.","420":"Lütfen doğru davetiye kodunu girin.","421":"Telefon numarası kaydedilmedi ve şifrenin alınmasına gerek yok.","422":"Tekrar İsteği","423":"Kimlik Doğrulama Kodu Başarıyla Gönderildi.","424":"O gün gönderilen doğrulama kodlarının sayısı üst sınıra ulaştı.","425":"Doğrulama kodu gönderilemedi","426":"Adres değiştirilemez, lütfen müşteri hizmetleri ile iletişime geçin.","427":"doğrulama başarısız oldu","428":"Google Authenticator\'ı zaten bağladınız","429":"Orijinal şifre doğrulaması başarısız oldu","500":"Ağ istisnası, lütfen daha sonra tekrar deneyin.","501":"Girişi Askıya Al","502":"Kaydı Durdur","503":"Giriş yapmadınız.","605":"Lütfen doğru miktarı girin.","606":"Not sayısı minimumdan düşük.","607":"İhale sayısı maksimumdan daha yüksek.","608":"Lütfen doğru ihale adresini girin.","609":"Adres Biçimi Yanlış.","610":"Orijinal Şifre Hatası","706":"Bu adres kullanıldı, lütfen değiştirin.","708":"Böyle bir kullanıcı yoktur.","712":"Lütfen gerçek adınızı doğrulayın ve ardından geri çekin.","713":"Şu anda herhangi bir gelir ödenmiyor.","714":"Mevcut Görev Ödülü Alındı.","715":"Alma koşullarının yerine getirilmemesi"}}')
    },
    ea3e: function(e, a) {
        e.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMAAAADACAMAAABlApw1AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAgVBMVEUAAAD////z8/Py8vLy8vL09PTz8/Pz8/Pz8/Py8vLy8vLy8vLz8/Pz8/Pz8/Pz8/Px8fHv7+/y8vLy8vL19fX4+Pj6+vr/////7/f/sNb/3+7/v97/z+b/oM3/gL3/YKz/QJv/f73/cLX/MJP/IIv/AHr/UKP/kMX/kMT/X6z/0OaTO0PVAAAAE3RSTlMAEDBQcJCgr7/f74BAYM8gkBCwbvfkhAAAAAFiS0dEAf8CLd4AAAAHdElNRQfmARIGLh4+PKxmAAANY0lEQVR42tVd62KjKhDeNmma2KZNNxcNxEtUkpx9/wc8clNQQVAMu/Nnd7tJnY/55sKA8OuXc3l5XSzfVu/rzSbYEwk2m/V69bFcvL64f5pj1Zdva6Z1vwTrt+WnbzUVym/fvvaG8vW2+Patr6z859vGVPkaxGrhW22u/bLNmsPxeDydTqEg1T+Px8OhBeJ9690QL9u1rLqsd1cwDvEb661Px/58CyTlQ0M5iSCClSevrqgzRvk+EJutB/U/ggnaM2kwbFbP9YbvhjujtW9jeCKE71U9+NO0Z1x6MoSGPMfp2rfM8AwIXP2DM/WJGRiEzXJm9T837rijgDBngn55n0t9EcJ8PFoGjrnfFuYLM6WF7/XM6hMI8xlhEczIHkFmMsLLjg7N3OpXcqJPevtxSh8afA7zqy8YwSGNtsGzhp8K9YTAGY0+njn8ohE+nKjPgv+swUdlhHcHjsDo/zT6cDk5cgSq/1Ppw+XgAsFr4E1/juB1uv5Ppn8jxBGCCQi2fvXnrjw6nG59hB+HCF796z+JRZ75PxkBjZ/e9ecIrKNpj/6RTwS2+eClZ/yjs1cEdlXFex9/APSJ4N1G/49+/l+82sCiNt2q6of44gnBwSodfAfK+icBHhGYhiLqwIpflPpCYOHIO139H2WeEJD5wZuxA6gTGMg85QPiyAZ9R5LBdBMAmPkBYOoGK40DULmmnhCQRcGJBCKS534AEDcY6L8PEghLVCR+EBAS6SPRMIGwgNITgsGSYmHYQbmg2AsAQiLdsrIJgYjEyE9hh0m0Ueu/NCIQkSvyUhadtFUd8WDTOdit9JKSjzo/Xtn0sKLSDwKNCb7tJsEAlT6KiqM6H1sZoBKICh8IsB+vlAawakLfkY+igvjxtwMDVJIjH0UFNsHOhQEqKZCHlHzqD0QjDIBrCh8IDr2BaDNqGeaCPBQVvblgO3IdI0Yeioq+stomCUtyRc8vKo7dmc2neRXUlht6fkruFqWrMQagaSwquwjg41Zkt8dswDqR9CcY48KAcgeg3qLi8ihREc+DoRNJR7owa5VCpCgq4so4pmEWWEFtdxrX41w4YiH0juSiIily5tiVi5dmPn63enLLjb/HuvCdDVuOpKKi+ifKqHmqVGeW6+yKElIQ/UxlUGUCNvBRIamZIiz0B1GF5jZctV4sM/pBSgW/R6+GnR/0T3mgKQBuFEyjQYKfLQHIHBqfBMIbU62qKZqiIqEA0Nkcwd2yMpfi0GLCdoi6U1rVFHVRETMAZTiEIOJfSW6WDz4IuWxUFuOS8WUn7Lks4FwYgBrRf0g1/wR5SgyXl6GdHIVc9jVlPxCoNcvqcY44AM4L7ORZGF3iJE+xJI9zHVxBWqaXqiCxnJ6emg7R6CBKJeEBsKopOIKMI2hgoo5kOeQQUPXfd8vnNoF0iguQ4eZEAYgz5c6VrJl/Qb2S0u/GJbLucRzqZLybuKXgXj/6XKlUUFBMmtnOvR8BKmNuIcuFk8YJJrkAlrLOolfOe84hITj+h3QQIEKWPQ7sBF9TswAV2EzK/mP5C7YCaUhdRCEFwP2BwhIBd4LP6ZvisqLWsmA1BDeBQOwLUsulisLActkBOwHehrOcDgA2ZQQJN49GW3HKH6sB3Kv/rD6R2yA4snJoqg9jSZtwA5nazGklz8yVAFIKILw/zB96Yl68drCtFQiK3iklOImkEuKmAnALIXWXi3mP48TquWCqD2NJUDN0OdWbuEPLBOxnXclCyPzIIhvgeq6aDk8OQuSx4lBjLauUHNHxloYUlEoAWXixnEDTMPTqZmduIgw10RJntytC7QyrQFAByMPEMhnTMDSxkKhNUAokIiEIBxSQonaRA3pZlIdnWHmNXTI+ks0TS0d7E2ORRBmqZ5QQtof12gMAhmdSSlkEIR5HP1xtrixRnc5ItFFvTwNZl0EhpGnCxg1oNbRy9XJA3HQmEhZJlQLTdh7j3mFDohNZbHKRBqjgfARws4gMcKH/cBTfBHfGRVDKyWQF4Lc7AIAqwNVScyHltrmckzwryBfSmNOqMHsaB7AmfXUX+odydPmj/mDW6XQBAGGc3ApbE5BZpSsAUp2j3ViH5879TV9wt5vXEABOKgm50sz0g0jJnj36PoUTh3k2I7WEk0oCB1GqVv6AQwo0tsrSB2wHq6vF7B7r7gjAmTqgRIwoSW95zzC3pwXFLTkLMHLzeZlDAGm36vlT5pfwcks7BolQn2QJx2reo3MIgAQQacEVlLTA73HKDPVLSbcFW/mAIwB0UCU6p3WDpbOQDJFSMqs1W3cAqErSjzC5IYgLPNtqi3pqSZO5FQAnYZT4pdSeBVKl1hJNhwXZVKQkjDpJZEmnCBA8tWcvAtAiMG5NuMvEt+5I15XFve8LegSmgZQAcFLMEXXkZboL+Vl5VVA6yqcjoMXcbyddlb6hBgDoImKsM4KRH1AALiY0NLfa7loBqQaBSSyiExoXjbmsE4QmQzCpSY9k45ODST2w8jxDCAb2pJN6B22VdBSDQrZVJC3HmuBA2irTG1vUAPYM4mVeFPe2ioZLItrYmt5aLFXpakDuTcKCPUwa/oVshWNqLfEYaYBqDhFh1Wm8AZ2oOuxTtLk7NZMB0/Hq+WZC6jpuiFguswfbE7y9vpsGoBxrgKpcymgELjl6mUlD3+fLlNPiaGJXvUiCdaT+20Ao7ADgJaZJYejBHjZm5yXAOnLm810vQoUx9H2+3WNKGAKmD+sTKAJoZjJ163fo+2Q6M22huy6KR72dmGMdhVWzkldwVyMAzUL3+GqoDhsWDc1GSD9eqqrLZgve8O9sthqM3jGXNE8e8e2YuH5rgs+MUBhY9VC/3DrWCYRpr9W6BPt2ScqndpOIzoogQoPvVggvcozbeR+KqdP6LQK84Ers1p6Z0YCcDRaHjQuMdQK5Q2hpArLUB/lgdxGcB1l5FN4FGrfdQy4h7V5ogth615APtizYmtEggxoXGLn1G7QeW5jbABKdr4pfRC0zuE+zzgJjt06f2481e4sAxIz01/pHSec3hfW+cqUcyfoYlzE7bshj01gsv/SeHMFHWtNF7IF2+3QGpW2zY64OpJYcIgMZyVFEubIEHtLEsdXC7fixQWJvvQ03gkMpM7YUyHtpFCWN8mV5y7tLOJ0m1yAb22/RbO1zWcpD3oAjRBXXijR/xPCi7HN1SHQferrMoFFxKGFkbS0Yta3/MHqTpk2ioelF92W+nbUb04563AkhMr2BYXpokcgmi419Dasbvk1CkUpaJBoC0HM2gL0bly4BtEk0bID20QAW5wEwyY0ARABiGWZSbgGg7cK1G1uZQLFUdxeUh3lTMGUDr5TJ4Vj70dO+72yGD2s37l8tbTaQdrpt+vU7cXe4fjbW/1K6fSTtNQEvIuNeeFoHEcpbbSpWvZNuH0l7dGRVtXL1RVezCgOiraVVpwLYv5MOFPpB1VI80r/m0HxKV4sqDwUY8VJ6+6WGnGinXb5Dmp0QTVLUBS3lsQz0dDa7XCANdUmSMCiQXtSjezEASY/aUhxU9WGdC0Q/vpJhO3c1zvJHIlTTmhBpwiC1AcbkgtoE/G2y7isCJSuOYA1B3W4oBiHSJKw8KezD2o+JCbIH52x05lv3av0rt4Z5HkfNjl11jGSZQzch6zsPQBDjA5KaZ3a3mEVQIEylTPKA57Q8Nz6vdFEKQFdLDxyQRItSF7tI60RQ/ZWEVnKg0nWAQzduM5UMH5b37mgPYAhunM6MEBkOLdRl7qovEfZpdpwSAq10+lM/dnPQ95UBYBRLsWtCLUeiIQc47IfPrl26IhFDAHmL50ZiC2G5qlSLByLocb83OHR07YpEFEEdckqids/etEaygebYMIHqfOzotPhrXV5UZULddlZ1TQDLhSoxIRAWvHnC1XnTGEH5uABc3lGtoTrT/tFP28wIhGXnzg3CcykkhNoE9xG/iei/M9H/18/GnRvwzShZHRzPaNyaINbJ9Oxpl24Q4vccziI5SmSzQZ2LzaHBmmObXQj2Auvei92xzcqDs93IDVmvSNkenK04utyR4C6cxXoO1/+3jf7MkWdCgFdYy5j4QRSnfwY/P+bw+HmvH4jo4kJWoIHcJehvfwHBrBdAgJQsxhuoP1b/f/8Ki78EAb0GZeRVNP/6NS5/AQLKnwn3kv3rVxlVCPxdhsXqh2n6//vXefm7UI26r4ubBX88Xmn3283djh4uFSRPdHSp4K/6WsenGcH1tY7//sWalSM872pTdr/szunVpphGzzECu6Q4mOGaZX61+DOu913Pc8cyN8J8FyxT9YPZLurmRpj3imtHwb9fFvNfMv45XUutLGeBwG+qD5zlLrVwHjn0Bcb9Sv052dMDYX90YAbOnTnvd9dAmGiGEx/8fbB7nvoUwmYyhtOxHvxnkUeSbQ2hwmDNJUH7/XrpQX0sn6tgPwaEqHzFnbkDp05+tuu9IIdBFCdJ+Wrwt54Gv5Hv7ftelgrG8XQ6yXqfjsfDQf5c4I06HVmsvvaWstl9/i3aU/le7IxBfO38E6dfPpe7daBTPVjvlq9/qfK1/Lwulh+r9XqzYViCzWb9vtotF3Oo/j/WZralI8iBHAAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wMS0xOFQwNjo0NjozMCswMDowMJI2oN0AAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDEtMThUMDY6NDY6MzArMDA6MDDjaxhhAAAAAElFTkSuQmCC"
    },
    eb27: function(e, a, t) {
        e.exports = t.p + "static/img/DOGE.567dd8d9.png"
    },
    eb89: function(e, a, t) {
        "use strict";
        var i = t("211d"),
            n = {
                ADA: t("37c5"),
                AVAX: t("237a"),
                BCH: t("7910"),
                BSV: t("60cc"),
                BTC: t("1c8d"),
                CRO: t("e340"),
                DAI: t("84a8"),
                DOGE: t("eb27"),
                DOT: t("52bb"),
                ETH: t("d697"),
                LEO: t("ce25"),
                LINK: t("fe62"),
                LTC: t("b8a2"),
                MATIC: t("0c47d"),
                NEAR: t("ba8b"),
                OKB: t("a261"),
                SHIB: t("456b"),
                SOL: t("6dcc"),
                TRX: t("4fd2"),
                TUSD: t("dc88"),
                UNI: t("ea3e"),
                USDC: t("cacc"),
                USDT: t("1eab"),
                WBTC: t("98aa"),
                XLM: t("1a6d"),
                XRP: t("f922")
            };
        e.exports = {
            contry: n,
            modelPatch: i.modelPatch
        }
    },
    f848: function(e, a, t) {
        "use strict";
        Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.default = void 0;
        var i = t("06f6"),
            n = {
                onLaunch: function() {
                    var e = uni.getStorageSync("lang");
                    "" != e && void 0 != e || uni.setStorageSync("lang", "en"), this._i18n.locale = uni.getStorageSync("lang"), (0, i.tabLang)(this)
                },
                onShow: function() {},
                onHide: function() {},
                methods: {}
            };
        a.default = n
    },
    f862: function(e, a, t) {
        "use strict";

        function i(e) {
            e = e || 32;
            for (var a = "ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678", t = a.length, i = "", n = 0; n < e; n++) i += a.charAt(Math.floor(Math.random() * t));
            return i
        }

        function n(e) {
            var a = e.lastIndexOf("."),
                t = "";
            return -1 != a && (t = e.substring(a)), t
        }

        function r() {
            var e = new Date,
                a = e.getFullYear(),
                t = e.getMonth() + 1,
                i = e.getDate(),
                n = e.getHours() < 10 ? "0" + e.getHours() : e.getHours(),
                r = e.getMinutes() < 10 ? "0" + e.getMinutes() : e.getMinutes(),
                o = e.getSeconds() < 10 ? "0" + e.getSeconds() : e.getSeconds();
            t >= 1 && t <= 9 && (t = "0" + t), i >= 0 && i <= 9 && (i = "0" + i);
            var s = a + t + i + n + r + o;
            return s
        }
        t("baa5"), Object.defineProperty(a, "__esModule", {
            value: !0
        }), a.random_string = i, a.get_suffix = n, a.getTime = r
    },
    f922: function(e, a) {
        e.exports = "data:image/png;base64,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"
    },
    fe09: function(e) {
        e.exports = JSON.parse('{"tabBar":{"home":"Home","trade":"Transaction hall","team":"My team","mine":"Mine"},"funcs":{"aboutus":"About WOTC","rules":"Rules","download":"Download APP","cert":"Certifications","setting":"Language","customer":"Customer service","activities":"Notice","joinus":"Join WOTC","earn":"Fund"},"home":{"index":{"trade_data":"Transaction notification","no_register":"Please register as a member first","no_message":"No message"},"download":{"google_play":"Worldotc for Android","google_play_tip":"Download from App store","ios":"Worldotc for iOS","ios_tip":"Click and download from official website"},"language":{"language":"Language"},"earn":{"title":"Fund","total_profit":"Total incomes","access_detail":"Details of deposit and withdrawal","available_balance":"Available Balance","storage_balance":"Deposited amount","item_title":"list of agreement","time":"Time","profit":"Income","btn":"Immediate  purchase","msg":{"earn_success":"successful transaction"},"trade":{"sell_title":"Income of order","sell_time":"Time:","profit_fee":"Profit rate:","input_amount":"Input amount:","input_amount_tip":"0.00","input_amount_msg":"Input amount","sell_income":"Expected income:","sell_btn":"Buy","cancel_btn":"Cancel","input_amount_min_tip":"The amount is lower than the minimum value: ","input_amount_max_tip":"The amountincexceeds themaximum value: ","note":"Idle investment","cancel":"Cancel"}},"earnlist":{"title":"Details of deposit and withdrawal","type_undo":"Not completed","type_done":"Completed","type":"Type","amount":"Monetaryamount","profit":"Income","buy_date":"Date of deposit:","send_date":"Date of settlement:"}},"login":{"login":{"title":"Log in","password":"Password","passwd_tip":"Please input 6~16 digits of password","mobile":"Mobile phone number","mobile_tip":"Please input mobile phone","register":"Register","forgot_pwd":"Forget password?","btn":"Log in"},"phoneCode":{"custom_phone_code_tip":"Please input international county","confirm":"Confirm","msg":"Registration is not yet open to current region"},"register":{"title":"Register","smscode":"message verification code","smscode_placeholder":"Enter Code","smscode_tip":"Enter Code","smscode_send_text":"Send verification code","login":"Log in","next_step":"Next step","password":"Password","passwd_tip":"Please input 6~16 digits of password","nickname":"Nickname","nickname_tip":"Please input your nickname","invite_code":"Referral code","invite_code_tip":"Please input your referral code","submit":"Submit","reg_success":"Successfulregistration","mobile_tip":"Please input mobile phone"},"forget":{"title":"Forget password?","password":"Password","passwd_tip":"Please input 6-16 digits of password","smscode":"Message verification code","smscode_placeholder":"Enter Code","smscode_send_text":"Send verification code","submit":"Submit","success":"Password changed successfully"}},"mine":{"ucenter":{"logout":"Log out","invite_code":"Invitation code: ","my_total_assets":"My total assets","my_account":"My account","recharge":"Recharge","withdraw":"Withdraw","personal_info":"Personal information","google_auth":"Security center","recharge_record":"Recharge records","withdraw_record":"Withdrawal records","fund_detail":"Details of fund","auth":"Identity authentication","team_profit":"Team incomes","invite_friend":"Invite your friends","tip":"Tip","set_withdraw_address":"Please bind the withdrawal address first","set":"Make a setting now","cancel":"Cancel"},"googleauth":{"title":"Security center","googleauth_tip":"Please bind Google Authenticator","open_googleauth":"Open Google Authenticator","setting_tip":"Start to scan the QR code provided in our platform, or manually enter the 16-digit key provided in the platform. After successful addition, enter the dynamic password verification to complete the binding。","copy":"Copy key","copy_success":"Copy successfully","vercode":"Google verification code","bind":"Authenticate and bind","unbind":"Unbind","vercode_tip":"Please enter verification code","bind_success":"Binding succeeded","notice":"Kind tips","bind_tip":"You are bound to Google Authenticator","unbind_tip":"To unbind，Please get SMS verification code for verification","unbind_success":"Unbind successfully"},"userinfo":{"title":"Personal information","modify":"Modify","nickname":"Nickname","mobile":"Mobile phone number","address":"Withdrawal address","login_pwd":"Login password","input_tip":"Please fill in the content","set":"Make setting","cancel":"Cancel","nickname_tip":"Please enter a nickname","login_pwd_tip":"Please enter password","withdraw_address_tip":"Please enter the withdrawal address","old_pass":"Old password","new_pass":"New password","old_pass_tip":"Please enter the original password","new_pass_tip":"Please enter a new password","pass_tip":"If you forget your password, please retrieve it from your mobile phone verification code on the login page","vercode":"Google verification code","code_tip":"Please enter google verification code"},"recharge":{"title":"Recharge","recharge_tip":"Recharge tip","recharge_tip_mark1":"The deposit address only supports TRC20-USDT, and the minimum deposit is 10USDT. ","recharge_tip_mark2":"Please do not transfer other assets to the deposit address to avoid loss of funds.","qrcode":"QR code","copy":"Copy","copy_success":"Successful copying"},"rechargeRecords":{"title":"Recharge records","time":"Time","amount":"Amount","status":"Status","payway":"Way of recharging:","orderno":"Order No.:","recharge_status":{"1":"Completed","2":"Recharge failed","3":"Cancelled"}},"withdraw":{"title":"Withdraw","available_balance":"Available balance","real_money":"Actual credit to account (handling fee: 3%)","smscode":"message verification code","smscode_placeholder":"Enter Code","smscode_send_text":"Send verification code","address":"Withdrawal address","submit":"Submit","withdraw_success":"Withdrawal success","withdraw_tip":"Minimum withdrawal amount: ","withdraw_amount_tip":"Please enter the withdrawal amount","vercode_tip":"Verification code cannot be empty","password":"Password","passwd_tip":"Please enter a 6~16 digit password","vercode":"Google verification code","code_tip":"Please enter google verification code","tips":"Reminder: For the safety of your funds, please go to the Security Center to bind Google Authenticator。"},"withdrawalRecords":{"title":"Withdrawal records","time":"Time","amount":"Amount","status":"Status","withdraw_way":"Withdrawal address:","orderno":"Order No.:","withdraw_status":{"0":"Withdrawing","1":"Withdrawal success","2":"Withdrawal Cancellation"}},"funds":{"title":"Details of fund","time":"Time","amount":"Amount","status":"Status","fund_status":{"10":"Receive benefits","11":"Mission rewards","20":"To deposit","21":"Take out","30":"OTC trading","31":"OTC income","50":"Recharge","51":"Recharge","52":"Recharge","60":"Withdraw","61":"Withdraw","62":"Withdraw"}},"authentication":{"title":"Identity authentication","auth_status":{"0":"Not authenticated","1":"Under review","2":"Verified","3":"Rejected"},"auth_photo_hold_example":"Example","auth_problem_tips":"Reminder: If you encounter problems, please contact custormer service!","submit":"Authenticate now","uploading":"Uploading.."},"teamIncomes":{"title":"Team incomes","level":"Grade","userid":"ID","time":"Time","amount":"Amount"},"inviteFriends":{"title":"Invite your friends","invite_code":"Invitation code:","invite_friend_tip":"To enjoy big income right away, invite your friends now","invite_friend_btn":"Click here to copy","share_rule":{"title":"Commission rebating rules","title_tip":"For every profit earned by a friend after registering, you will receive a corresponding percentage of commission","rate_title":"Commission rate rules are as follows","rate_user_level":"Grade of user","rate_way":"Rule","rate_num":"Commission rate","rate_lv1_desc":"Directly invited users","rate_lv2_desc":"LV1 invited users","rate_lv3_desc":"LV2 invited users","rate_lv4_desc":"All users invited below lv3","hint":"The commission is settled in USDT and can be withdrawn and deposited into your wallet any time"},"copy_success":"Click here to copy"}},"team":{"index":{"team_total_income":"Total incomes","team_residual_income":"Residual incomes","receive":"Receive","team_info":"Team details","team_user_list":"View details","team_total_profit":"Total incomes","team_total_num":"Total people","team_total_recharge":"Total recharge","people_num":"Number of people","people_profit":"Profit","team_invite_task":"Invite mission requirements","team_invite_task_tip":"{need_num} Invite LV1 users to successfully trade and receive rewards {amount} USDT","progress":"Schedule","team_receive":"Receive","team_hasreceive":"Received","receive_success":"Received successfully"},"myTeam":{"title":"Team details","team_total_profit":"Total incomes","team_total_num":"Total people","team_total_recharge":"Total recharge","team_lv1":"Level 1","team_lv2":"Level 2","team_lv3":"Level 3","team_lv_count":"Quantity：","team_lv_income":"Income：","team_lv_recharge":"Recharge:","team_lv_invite":"Number of invitees","team_lv_mobile":"Mobile phone number:","team_lv_time":"Registration time:"}},"transaction":{"index":{"total_assets":"Total assets","trade_stat":"Income statistics","tran_title":"WOTC trading introduction","tran_desc":"WOTC has a global cryptocurrency matching system。Provide users with USDT trading global cryptocurrency platform。Ensure transaction stability and maximize profits","accepting":"In the transaction","wallet_balance":"Wallet balance","order_amount":"Transaction price:","order_amount_tip":"0.00","order_amount_all":"All","btn":"Start filtering","trade_success":"Successful transaction:","trade_amount":"Transaction amount：","trade_profit":"Income from transaction:","record":"Transaction list","tradingtime":"Time left:{%s}","time":"Time","amount":"Total transaction:","profit":"Profit","sell_time":"Time of selling:","sell_amount":"Sales amount:","income_time":"Time of income:","income_amount":"Profit:","order_num":"Order No.:","search":"AI smart matching...","msg":{"amount_tip":"Balance is below {deal_amount} and cannot be filtered","order_amount_tip":"Please enter the correct amount"},"sell":{"symbol":"Cryptocurrency：","service_provider":"MSB certified service provider：","market_price":"USDT trading price：","trade_price":"Transaction price：","order_amount":"Amount of order：","confirm":"Start trading","cancel":"Cancel","trading":"In transaction..."},"sell_success":{"title":"Earnings and funds will be automatically deposited into your account after 3 hours!","orderNo":"Order No.:","trade_price":"Transaction amount:","profit":"Profit:","amount":"Total amounts:","tip":"It has been transferred to the trading wallet, and will be automatically transferred to the balance wallet","confirm":"Confirm"}},"incomeStatistics":{"title":"Income statistics","total_orders_num":"Total quanti","total_money":"Total amounts","total_profit":"Total profits","date":"Date","order_num":"Quantity","money":"Monetaryamount","profit":"Profit"}},"main":{"more":"More >","got_it":"Understood","loading":"Loading...","modify_success":"Successfully modified"},"infomation":{"aboutus":{"1":"World Over The Counter is composed of a team of experienced professionals and a huge liquidity pool.","2":"World Over The Counter Our over-the-counter (OTC) services are suitable for transactions ranging from $10 to millions of dollars, covering a variety of fiat currencies, USDT, and other major cryptocurrencies. The biggest advantage of World Over The Counter OTC trading services is that we provide investors and high net worth individuals with strong trading depth, tailor-made services, and a high degree of privacy protection. World Over The Counter\'s over-the-counter trading service allows customers to avoid trading slippage losses that are common on common trading platforms, and is the best choice for large cryptocurrency traders.","3":"World Over The Counter Over-the-counter OTC services for fiat currencies, USDT, or other cryptocurrencies. World Over The Counter focuses on allowing you to freely and easily trade cryptocurrencies without worrying about complicated issues such as transaction depth and order matching. At the same time, we bring you a flexible, safe and high-quality trading experience through comprehensive transaction execution and settlement services. ","4":"1：Apply for a World Over The Counter OTC account (personal account)","5":"2：Deposit fiat or cryptocurrency into your account","6":"3：After the transaction is executed, USDT will be automatically deposited into your account balance three hours later","7":"OTC solutions for you","8":"professional trader","9":"We have some of the best bitcoin and cryptocurrency traders in the world. Our professional experience can be traced back to the birth of Bitcoin many years ago, and we have been serving thousands of customers with the best price at the right time and the right place.","10":"Different trading experience","11":"Different from general exchanges and large over-the-counter exchanges, World Over The Counter will provide you with tailor-made optimal liquidity funding arrangements and trading solutions that fully meet your trading needs. After successfully setting up your account, we will consult with you and provide you with the best solution to meet your program needs and desired outcomes. We are committed to being reputable, reliable, convenient and community development. We are committed to building a good and lasting relationship with each client, providing the highest quality service at all times.","12":"International service","13":"World Over The Counter Headquartered in Colorado, USA, it is committed to providing international customers with global cryptocurrency trading platforms and trading services, and has won high praise and trust from customers in Asia, America, Australia, Europe, and Africa.","14":"credible and reliable","15":"World Over The Counter We believe that honesty and transparency are the keys to success, and attach great importance to the privacy and confidentiality of customer information. With our professional attitude, we have won the trust and support of our customers. We are committed to building a trustworthy image that goes hand in hand with you. No matter where you are, you can use our comprehensive services with peace of mind。"},"cert":{"1":"World Over The Counter Limited Business Lizenz","2":"World Over The Counter Limited Business License Registration Certificate.","3":"The Great Seal of the State of Colorado was stamped here and this official certificate was duly prepared, executed and issued.","4":"Colorado will govern this in accordance with applicable law.","5":"Check the certificate number on the Colorado Secretary of State\'s official website to view the company details.","6":"World Over The Counter Foundation Business License","7":"World Over The Counter Foundation Business License Registration Certificate.","8":"Because WOTC actively participates in world charitable foundations, spreading their love to the world.","9":"This certificate is approved and numbered by the Colorado Secretary of State\'s Office.","10":"In the future, WOTC will participate in the world\'s major charitable funds and help more people.","11":"The charitable foundation\'s certificate also brings better asset protection to all members of the company.","12":"Check the certificate number on the official website of the Colorado Secretary of State to view the company details.","13":"In the video we can see the WOTC team members and the PALM BEACH CHRISTIAN PREPARATORY SCHOOL in Florida, USA, negotiating a preliminary cooperation. WOTC sponsors schools. And help every student in the school to reduce their academic burden. Contribute to the education industry.","14":"Charity activities carried out by WOTC team members around the world. Trying to help more people. They are like a ray of light in the dawn. Let our light shine on more people.","15":"Don\'t be surprised if you guys will see a WOTC team member passing by your door one day. Because we are already popular all over the world. We know that many competitors often harm us by slandering and creating rumors. But we let these rumors die through the power of solidarity. WOTC has never let anyone down.","16":"Thank you to all the members who trust and support WOTC. Let us congratulate the successful establishment of WOTC\'s charitable foundation.","17":"MSB certificate official query website:","18":"https://www.fincen.gov/msb-state-selector","19":"Official website for business license inquiry:","20":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","21":"Official website of the foundation:","22":"https://www.coloradosos.gov/biz/BusinessEntityCriteriaExt.do","23":"The interpretation right of all the above content belongs to World Over The Counter Limited","24":"The US MSB license is a type of financial license supervised and issued by the US Treasury Department. The main objects of supervision are money service-related businesses and companies, including digital currency, virtual currency transactions, ICO issuance, as well as foreign exchange, international remittances etc. business."},"joinus":{"1":"World Over The Counter welcomes anyone to get in touch and get involved in the cryptocurrency space. Whether you want to buy or sell cryptocurrencies, or to learn more about Bitcoin and cryptocurrencies, World Over The Counter has you covered.","2":"If you have any questions or comments, please feel free to email or call us. We further encourage all customers to participate in our cryptocurrency community and promote the development of the community. ","3":"World Over The Counter Committed to reducing transaction fees and restrictions, providing customers with lower transaction thresholds than most OTC trading platforms, we will bring you the most suitable transaction solutions for any amount of transactions, so that USDT and cryptocurrencies can be used for all people. service usage. ","4":"More than a billion people in the world are currently unbanked or unbanked, but most of them have access to smartphones. ","5":"They can use their smartphone\'s e-wallet at any time, allowing decentralized cryptocurrencies to bring them the most value benefits - and World Over The Counter will continue to do this as it drives the universal adoption of cryptocurrencies.","6":"Whether online or offline, World Over The Counter has always been committed to developing an active and interactive community of cryptocurrency users, through providing knowledge, exchange, and mutual development and participation in the global Bitcoin and cryptocurrency community.","7":"Whether you are new to cryptocurrency or a seasoned expert, we welcome you to join us!","8":"World Over The Counter Please provide your contact information and brief information to let us know how we can assist you and we will reply as soon as possible.","9":"Mail：worldoverthecounter@gmail.com","10":""},"rules":{"1":"Terms of use","2":"When buying USDT, never use a wallet address that does not belong to you. Please use your own wallet address. Please do not send USDT to suspected scammers！","3":"When you agree to our Terms of Use, you also agree to our Personal Information Collection Statement and Privacy Policy, Privacy Policy and Cookie Policy.","4":"We do not provide services, equipment and other matters to persons under the age of 18. If you are under the age of 18 and use our website, you should contact us by contacting the person assuming custody of you to exercise the appropriate rights of access, correction, cancellation and objection.","5":"Trading Rules","6":"WorldotcIt is a US MSB certified cryptocurrency over-the-counter exchange. It provides a trading platform for USDT and global cryptocurrencies, providing users with transaction accuracy and convenience. Enter the amount of virtual currency you want to buy.","7":"The income is settled every 3 hours, and each profit will be 0.4% of your investment amount!","8":"Settlement up to 8 times 24 hours a day, the highest income is 3.2%!","9":"Double your investment in 23 days at the fastest!","10":"The maximum profit per month is 1.572 times！","11":"Deposit and withdrawal rules","12":"Bind your TRC20 address to withdraw funds, 24 hours a day, and the withdrawal fee is 3% .","13":"Withdrawal time arrives in 1 minute.","14":"Note: Each TRC20 address can only be bound to one investment account","15":"Deposit using your Binance or wallet, the minimum investment amount is 11USDT, and the minimum withdrawal amount is 5USDT","16":"Invitation Rules","17":"Your friends make money by investing and you can earn commission income:","18":"Lv1 Directly invited users (15% of total trading profit)","19":"Lv2Users invited by L1 (10% of total trading profit)","20":"Lv3Users invited by L2 (5% of total trading profit)","21":"Invite mission reward","22":"Every time you invite 10 LV1 members to complete the investment, you can get an invitation reward of 10 USDT","23":"Note: Each invited LV1 subordinate must complete the investment to be considered a valid user.","24":"Reminder: If you have any questions about rewards and rules, please contact the customer service manager."}},"serverCodes":{"401":"Parameter is wrong","406":"Insufficient balance","407":"Incorrect transaction amount","408":"Invalid parameter","409":"The password consists of 6~16 letters and numbers","410":"Verification code error","411":"Wrong user name or password","412":"Account frozen, please contact customer service","413":"Please enter valid phone numbers","414":"The phone number has already been registered, please select another phone number","415":"Get verification code frequency interval 1 minute","416":"Frequent requests, try again later","417":"The verification code has expired, please resend the verification code","418":"The phone is not verified or the verification has expired, please start the registration again","419":"Nickname consists of 2~8 characters","420":"Please enter the correct invitation code","421":"The phone number has not been registered, no need to retrieve the password","422":"Repeat request","423":"Verification code sent successfully","424":"The number of verification codes sent on the day has reached the upper limit","425":"Failed to send verification code","426":"The address cannot be modified, please contact customer service","427":"verification failed","428":"You have already bound Google Authenticator","429":"Original password verification failed","500":"The network is abnormal, please try again later","501":"Suspend login","502":"Registration suspended","503":"Not logged in","605":"Please enter the correct quantity","606":"The withdrawal amount is below the minimum value","607":"The amount of coins withdrawn is higher than the maximum value","608":"Please enter the correct withdrawal address","609":"Incorrect address format","610":"The original password is wrong","706":"This address is already in use, please change it.","708":"This user does not exist","712":"Please verify your real name before withdrawing","713":"No income currently available","714":"The current mission reward has been received","715":"Not meeting the requirements for receiving"}}')
    },
    fe62: function(e, a) {
        e.exports = "data:image/png;base64,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"
    }
});