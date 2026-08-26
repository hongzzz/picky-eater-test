// picky-eater-test/questions.js
// 挑食测试题库：30 道争议性食物
// 每题 3 个选项：吃 / 看情况 / 不吃
// 挑食分：吃=0，看情况=1，不吃=2（满分 60）

const QUESTIONS = [
  { id: 1,  name: "香菜",              emoji: "🌿", note: "爱者爱死，恨者恨死" },
  { id: 2,  name: "苦瓜",              emoji: "🥒", note: "清火良药，苦口婆心" },
  { id: 3,  name: "榴莲",              emoji: "🍈", note: "水果之王，气味之王" },
  { id: 4,  name: "折耳根（鱼腥草）",    emoji: "🌱", note: "云贵川人民的乡愁" },
  { id: 5,  name: "秋葵",              emoji: "🥬", note: "黏糊糊的争议选手" },
  { id: 6,  name: "猪肝",              emoji: "🥩", note: "补铁神器，腥味劝退" },
  { id: 7,  name: "溏心蛋",            emoji: "🥚", note: "流心派 vs 全熟派" },
  { id: 8,  name: "纳豆",              emoji: "🫘", note: "拉丝的发酵豆子" },
  { id: 9,  name: "臭豆腐",            emoji: "🍢", note: "闻着臭吃着香" },
  { id: 10, name: "螺蛳粉",            emoji: "🍜", note: "酸笋的魔法攻击" },
  { id: 11, name: "皮蛋",              emoji: "🥚", note: "松花蛋的传说" },
  { id: 12, name: "肥肉",              emoji: "🥓", note: "红烧肉的精髓 vs 噩梦" },
  { id: 13, name: "西兰花",            emoji: "🥦", note: "健身餐标配" },
  { id: 14, name: "生胡萝卜",           emoji: "🥕", note: "脆甜 or 土腥味？" },
  { id: 15, name: "芹菜",              emoji: "🌿", note: "纤维感拉满" },
  { id: 16, name: "韭菜",              emoji: "🥟", note: "韭菜盒子永远的神" },
  { id: 17, name: "香菇",              emoji: "🍄", note: "菌菇的滑嫩口感" },
  { id: 18, name: "彩椒",              emoji: "🫑", note: "甜椒其实不辣" },
  { id: 19, name: "生洋葱",            emoji: "🧅", note: "沙拉里的脆甜 or 呛人" },
  { id: 20, name: "生大蒜",            emoji: "🧄", note: "烧烤灵魂，口气杀手" },
  { id: 21, name: "鸭血",              emoji: "🩸", note: "毛血旺的灵魂" },
  { id: 22, name: "猪脑花",            emoji: "🧠", note: "川渝火锅的隐藏菜单" },
  { id: 23, name: "生鱼片",            emoji: "🍣", note: "日料精髓，生的魅力" },
  { id: 24, name: "牛油果",            emoji: "🥑", note: "健康脂肪的代言人" },
  { id: 25, name: "蓝纹奶酪",          emoji: "🧀", note: "臭到极致就是香" },
  { id: 26, name: "蚕蛹",              emoji: "🐛", note: "高蛋白的勇气食物" },
  { id: 27, name: "黑咖啡（无糖）",     emoji: "☕", note: "成年人的苦" },
  { id: 28, name: "芥末",              emoji: "🌶️", note: "直冲天灵盖的刺激" },
  { id: 29, name: "酸菜",              emoji: "🥬", note: "东北炖菜的底色" },
  { id: 30, name: "牛蛙",              emoji: "🐸", note: "麻辣香锅的流量担当" },
];

// 挑食分计算：吃=0，看情况=1，不吃=2 → 满分 60
// 挑食指数 = 挑食分 / 60 * 100（四舍五入）
function calcScore(answers) {
  let sum = 0;
  for (const a of answers) sum += a; // 0/1/2
  return Math.round((sum / (QUESTIONS.length * 2)) * 100);
}

// 称号体系（指数从低到高 = 越不挑食越好养活）
const TITLES = [
  { max: 15,  name: "干饭机器",   desc: "什么都吃，从不为吃饭发愁",          emoji: "🤖", tag: "顶级好养活" },
  { max: 30,  name: "铁胃干饭人", desc: "基本不挑，百无禁忌",                emoji: "🛡️", tag: "饭桌救星" },
  { max: 45,  name: "杂食动物",   desc: "小有偏好，但大局观在线",            emoji: "🐻", tag: "正常人偏优秀" },
  { max: 60,  name: "选择性吃货", desc: "有明确爱憎，但都说得过去",           emoji: "😋", tag: "普通人水平" },
  { max: 75,  name: "轻度挑食",   desc: "这不吃那不吃，理由还挺多",          emoji: "🙄", tag: "开始难伺候了" },
  { max: 90,  name: "重度挑食",   desc: "点菜是门玄学，吃饭像渡劫",          emoji: "😤", tag: "饭桌气氛组杀手" },
  { max: 100, name: "挑食之王",   desc: "你妈已经放弃你了，外卖都救不了你",   emoji: "👑", tag: "绝食级选手" },
];

function getTitle(score) {
  return TITLES.find(t => score <= t.max) || TITLES[TITLES.length - 1];
}

// 一句扎心点评（随机）
const COMMENTS = [
  "挑食不是你的错，是食物先动的手。",
  "据不完全统计，挑食的人点外卖时间比常人长 47%。",
  "你这不是挑食，是跟食物有仇。",
  "建议把这份报告贴冰箱上，让全家都知道。",
  "挑食一时爽，相亲火葬场——对方妈妈做了一桌菜。",
  "世界上只有两种人：吃香菜的和不吃香菜的。你是哪种？",
  "减肥不成功，可能是挑食挑得不够狠。",
  "你的胃：这也不行那也不行，我到底行不行？",
];

function getComment(score) {
  if (score <= 30) return "你这种人，饿三天能把自己炖了吃。";
  if (score <= 60) return "挑食适度，健康长寿——你妈妈原话。";
  return COMMENTS[Math.floor(Math.random() * COMMENTS.length)];
}

if (typeof module !== "undefined") {
  module.exports = { QUESTIONS, calcScore, getTitle, getComment, TITLES };
}
