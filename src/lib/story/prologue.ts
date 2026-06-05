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
        nextNode: 'prologue_bad_end',
        effects: {
          flags: { handed_over_stone: true },
          achievements: ['good_citizen'],
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
  prologue_bad_end: {
    id: 'prologue_bad_end',
    chapter: 'prologue',
    title: 'BAD END 1：好公民',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '第二天，你把石头送到了市科研所。',
      },
      {
        speaker: 'narrator',
        text: '研究人员对石头进行了全面检测，结论是：一块普通的鹅卵石，表面涂了荧光粉。',
      },
      {
        speaker: 'xiefan',
        text: '所以……是恶作剧？',
        emotion: 'confused',
      },
      {
        speaker: 'narrator',
        text: '你继续投简历，继续被拒。三个月后，你找到了一份高中物理老师的工作。',
      },
      {
        speaker: 'narrator',
        text: '平凡，但稳定。',
      },
      {
        speaker: 'system',
        text: '【成就解锁：好公民】——做出了最安全的选择',
      },
      {
        speaker: 'system',
        text: 'BAD END 1/5 —— 你错过了修仙的机会',
      },
    ],
  },
};
