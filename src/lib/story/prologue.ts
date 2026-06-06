import { type StoryNode } from '@/types/game';

export const prologueNodes: Record<string, StoryNode> = {
  prologue_1: {
    id: 'prologue_1',
    chapter: 'prologue',
    title: '发现石头',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '深夜，星海市某海滩。你——谢凡，28岁，理论物理学博士，刚收到第47封拒信。',
      },
      {
        speaker: 'narrator',
        text: '海风吹乱了你的头发，手机屏幕的光照亮你疲惫的脸。',
      },
      {
        speaker: 'narrator',
        text: '你漫无目的地踢着沙子，突然脚下一硌……',
      },
      {
        speaker: 'narrator',
        text: '你低头一看，是一块拳头大小的石头，表面有奇异的纹路，在月光下微微发亮。',
      },
    ],
    choices: [
      {
        id: 'choice_rational',
        text: '"这是什么放射性物质？需要报警吗？"',
        style: 'rational',
        nextNode: 'prologue_2',
        effects: {
          attributes: { science: 1 },
          flags: { chose_rational: true },
        },
      },
      {
        id: 'choice_casual',
        text: '"好漂亮的石头，带回去当摆件。"',
        style: 'casual',
        nextNode: 'prologue_2',
        effects: {
          attributes: { wisdom: 1 },
          flags: { chose_casual: true },
        },
      },
      {
        id: 'choice_academic',
        text: '"等等，这个纹路……像是某种分形结构？"',
        style: 'academic',
        nextNode: 'prologue_2',
        effects: {
          attributes: { wisdom: 2 },
          flags: { chose_academic: true },
        },
      },
    ],
  },
  prologue_2: {
    id: 'prologue_2',
    chapter: 'prologue',
    title: '海边偶遇',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你正要离开，发现不远处有个人影。',
      },
      {
        speaker: 'narrator',
        text: '一个穿着老头衫、拖鞋的白发老人正坐在礁石上钓鱼。',
      },
      {
        speaker: 'professor_zhang',
        text: '年轻人，这么晚了还不回家？',
      },
      {
        speaker: 'xiefan',
        text: '睡不着。',
        emotion: 'confused',
      },
      {
        speaker: 'professor_zhang',
        text: '我也是。退休了反而失眠。你是附近的？',
      },
      {
        speaker: 'xiefan',
        text: '不是，我来投简历的。没找到工作。',
        emotion: 'thinking',
      },
      {
        speaker: 'narrator',
        text: '老人看了你一眼，目光落在你手里的石头上。',
      },
      {
        speaker: 'professor_zhang',
        text: '那块石头不错。留着吧。',
      },
    ],
    autoNext: 'prologue_3',
    autoDelay: 2000,
  },
  prologue_3: {
    id: 'prologue_3',
    chapter: 'prologue',
    title: '石头发光',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你往回走的路上，石头突然发出柔和的蓝光。',
      },
      {
        speaker: 'xiefan',
        text: '卧槽！真的放射性物质？！',
        emotion: 'surprised',
      },
      {
        speaker: 'narrator',
        text: '光芒中浮现出一行文字：',
      },
      {
        speaker: 'system',
        text: '"凝气石——修仙入门辅助工具，有效期3000年，已过期2999年。"',
      },
      {
        speaker: 'xiefan',
        text: '……这是什么劣质营销短信？',
        emotion: 'confused',
      },
    ],
    autoNext: 'prologue_4',
    autoDelay: 3000,
  },
  prologue_4: {
    id: 'prologue_4',
    chapter: 'prologue',
    title: '第一个抉择',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '石头的光芒渐渐稳定，你感觉到一股奇异的暖流从手心传来。',
      },
      {
        speaker: 'narrator',
        text: '此刻，你会：',
      },
    ],
    choices: [
      {
        id: 'choice_hand_over',
        text: '【理性】把石头交给科研机构',
        style: 'rational',
        nextNode: 'prologue_5_institution',
        effects: {
          flags: { handed_over_stone: true },
          attributes: { science: 2 },
        },
      },
      {
        id: 'choice_try',
        text: '【好奇】按照石头上的说明尝试',
        style: 'casual',
        nextNode: 'chapter1_1',
        effects: {
          flags: { tried_cultivation: true },
        },
      },
      {
        id: 'choice_search',
        text: '【社恐】先在网上搜搜有没有人遇到过类似情况',
        style: 'academic',
        nextNode: 'chapter1_1',
        effects: {
          flags: { searched_online: true },
          attributes: { sense: 2 },
        },
      },
    ],
  },
  prologue_5_institution: {
    id: 'prologue_5_institution',
    chapter: 'prologue',
    title: '科研所之行',
    background: 'dormitory_day',
    dialogues: [
      {
        speaker: 'narrator',
        text: '第二天一早，你带着石头来到了星海市科研所。',
      },
      {
        speaker: 'narrator',
        text: '前台是个戴眼镜的中年女人，看起来很专业。',
      },
      {
        speaker: 'xiefan',
        text: '你好，我捡到一块奇怪的石头，会发光，想交给你们检测。',
      },
      {
        speaker: 'narrator',
        text: '女人接过石头，看了一眼，表情突然变了。',
      },
      {
        speaker: 'staff',
        text: '你跟我来。',
      },
      {
        speaker: 'narrator',
        text: '她把你带进一间办公室，关上门。',
      },
      {
        speaker: 'staff',
        text: '这块石头……你是怎么得到的？',
      },
      {
        speaker: 'xiefan',
        text: '昨晚在海边捡的。怎么了？是危险物质吗？',
        emotion: 'confused',
      },
      {
        speaker: 'narrator',
        text: '女人盯着你看了很久，然后拿起电话。',
      },
      {
        speaker: 'staff',
        text: '张教授，您来一下。有个年轻人……对，就是那个。',
      },
    ],
    autoNext: 'prologue_6_institution',
    autoDelay: 2000,
  },
  prologue_6_institution: {
    id: 'prologue_6_institution',
    chapter: 'prologue',
    title: '守夜人',
    background: 'professor_home',
    dialogues: [
      {
        speaker: 'narrator',
        text: '门开了，进来的人让你吃了一惊。',
      },
      {
        speaker: 'narrator',
        text: '是昨晚海边那个钓鱼的老人。',
      },
      {
        speaker: 'professor_zhang',
        text: '又见面了，年轻人。',
      },
      {
        speaker: 'xiefan',
        text: '你是……昨晚那个？',
        emotion: 'surprised',
      },
      {
        speaker: 'professor_zhang',
        text: '我是这里的顾问。石头给我看看。',
      },
      {
        speaker: 'narrator',
        text: '老人接过石头，石头在他手里发出柔和的光。',
      },
      {
        speaker: 'professor_zhang',
        text: '果然是凝气石。你昨晚碰它的时候，有什么感觉？',
      },
      {
        speaker: 'xiefan',
        text: '感觉……手心发热？还有，我好像看到了一些奇怪的符号。',
        emotion: 'thinking',
      },
      {
        speaker: 'narrator',
        text: '老人和那个女人对视一眼。',
      },
      {
        speaker: 'professor_zhang',
        text: '年轻人，你愿意参与一个……特殊的研究项目吗？',
      },
    ],
    choices: [
      {
        id: 'choice_accept',
        text: '什么研究项目？有工资吗？',
        style: 'rational',
        nextNode: 'prologue_7_institution',
        effects: {
          flags: { accepted_offer: true },
        },
      },
      {
        id: 'choice_refuse',
        text: '我只想知道这石头是什么，不想参与什么项目',
        style: 'casual',
        nextNode: 'prologue_7_institution',
        effects: {
          flags: { refused_offer: true },
        },
      },
    ],
  },
  prologue_7_institution: {
    id: 'prologue_7_institution',
    chapter: 'chapter1',
    title: '新的开始',
    background: 'professor_home',
    dialogues: [
      {
        speaker: 'professor_zhang',
        text: '石头我们会留下研究。但你的情况比较特殊——你已经和它产生了共鸣。',
      },
      {
        speaker: 'xiefan',
        text: '共鸣？什么意思？',
        emotion: 'confused',
      },
      {
        speaker: 'professor_zhang',
        text: '意思是，即使石头被拿走，你体内的灵气种子已经发芽了。',
      },
      {
        speaker: 'narrator',
        text: '老人伸出手，在你面前画了个奇怪的符号。',
      },
      {
        speaker: 'narrator',
        text: '你看到空气中出现了一行发光的文字：',
      },
      {
        speaker: 'system',
        text: '【修仙系统 v2.0】\n宿主：谢凡\n境界：凡人（未入门）\n灵力：0/100\n状态：灵气种子已激活',
      },
      {
        speaker: 'xiefan',
        text: '这……这是什么？全息投影？',
        emotion: 'surprised',
      },
      {
        speaker: 'professor_zhang',
        text: '这是修仙。欢迎加入守夜人，年轻人。',
      },
      {
        speaker: 'narrator',
        text: '你的人生，在这一刻彻底改变了。',
      },
    ],
    autoNext: 'chapter1_3',
    autoDelay: 3000,
  },
};
