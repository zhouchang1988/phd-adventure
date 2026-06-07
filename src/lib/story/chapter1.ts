import { type StoryNode } from '@/types/game';

export const chapter1Nodes: Record<string, StoryNode> = {
  chapter1_1: {
    id: 'chapter1_1',
    chapter: 'chapter1',
    title: '灵气感应',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你闭上眼睛，调整呼吸。',
      },
      {
        speaker: 'narrator',
        text: '三分钟后——',
      },
      {
        speaker: 'xiefan',
        text: '等等，这个能量波动频率……是6.626×10^-34焦耳·秒？这不是普朗克常数吗？',
        emotion: 'surprised',
      },
      {
        speaker: 'narrator',
        text: '你成功感应到了灵气。物理学博士的执念让你把修仙变成了实验室报告。',
      },
      {
        speaker: 'xiefan',
        text: '我需要更多数据。这个样本量太小了。',
        emotion: 'thinking',
      },
    ],
    autoNext: 'chapter1_2',
    autoDelay: 3000,
  },
  chapter1_2: {
    id: 'chapter1_2',
    chapter: 'chapter1',
    title: '系统激活',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '石头的光芒突然增强，一个半透明的界面出现在你面前：',
      },
      {
        speaker: 'system',
        text: '【修仙系统 v2.0】\n宿主：谢凡\n境界：凡人（未入门）\n灵力：0/100\n神识：15（博士加成+10）\n悟性：85（学霸专属）\n科理值：99（隐藏属性）',
      },
      {
        speaker: 'xiefan',
        text: '这个UI设计……是Material Design还是iOS风格？',
        emotion: 'confused',
      },
      {
        speaker: 'system',
        text: '【系统提示：检测到宿主具有极高的科理值，已解锁"理性修仙"路径】',
      },
      {
        speaker: 'xiefan',
        text: '理性修仙？听起来像是民科。',
        emotion: 'thinking',
      },
    ],
    autoNext: 'chapter1_3',
    autoDelay: 3000,
  },
  chapter1_3: {
    id: 'chapter1_3',
    chapter: 'chapter1',
    title: '第一个任务',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'system',
        text: '【任务发布】\n任务：完成第一次凝气\n奖励：灵力+10，解锁"修炼"功能\n提示：按照石头上的说明调整呼吸',
      },
      {
        speaker: 'xiefan',
        text: '等等，我还没答应要修仙。',
        emotion: 'confused',
      },
      {
        speaker: 'system',
        text: '【系统提示：任务已接受，无法拒绝】',
      },
      {
        speaker: 'xiefan',
        text: '这什么霸王条款？我要投诉！',
        emotion: 'surprised',
      },
      {
        speaker: 'system',
        text: '【系统提示：投诉功能将在v3.0版本上线】',
      },
      {
        speaker: 'xiefan',
        text: '……',
      },
    ],
    choices: [
      {
        id: 'choice_try_now',
        text: '按照说明尝试凝气',
        style: 'casual',
        nextNode: 'chapter1_4',
        effects: {
          attributes: { spirit: 10 },
          flags: { first_cultivation: true },
        },
      },
      {
        id: 'choice_analyze',
        text: '先分析石头上的"说明"是否符合物理学原理',
        style: 'rational',
        nextNode: 'chapter1_4',
        effects: {
          attributes: { spirit: 8, science: 2 },
          flags: { analyzed_first: true },
        },
      },
      {
        id: 'choice_sleep',
        text: '算了，明天再说，先睡一觉',
        style: 'casual',
        nextNode: 'chapter1_4',
        effects: {
          attributes: { wisdom: 1 },
          flags: { slept_first: true },
        },
      },
    ],
  },
  chapter1_4: {
    id: 'chapter1_4',
    chapter: 'chapter1',
    title: '凝气成功',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '经过一番尝试（或者分析，或者睡了一觉后尝试），你终于完成了第一次凝气。',
      },
      {
        speaker: 'system',
        text: '【任务完成】\n奖励：灵力+10\n当前灵力：10/100\n境界：凝气期一层',
      },
      {
        speaker: 'xiefan',
        text: '等等，这就突破了？我还没记录实验数据呢！',
        emotion: 'surprised',
      },
      {
        speaker: 'system',
        text: '【成就解锁：修仙入门】——完成第一次凝气',
      },
      {
        speaker: 'narrator',
        text: '你看着手心的石头，陷入沉思。',
      },
      {
        speaker: 'narrator',
        text: '这一切……是真的吗？',
      },
    ],
    autoNext: 'chapter1_end',
    autoDelay: 3000,
  },
  chapter1_end: {
    id: 'chapter1_end',
    chapter: 'chapter1',
    title: '第一章完',
    background: 'beach_night',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你决定先回家，好好研究一下这块石头。',
      },
      {
        speaker: 'narrator',
        text: '毕竟，如果修仙是真的……',
      },
      {
        speaker: 'xiefan',
        text: '那我可能找到了比发论文更有意思的事情。',
        emotion: 'thinking',
      },
      {
        speaker: 'system',
        text: '【第一章完】\n下一章预告：你遇到了一个奇怪的老头，他说要收你为徒……',
      },
    ],
    autoNext: 'chapter2_1',
    autoDelay: 3000,
  },
};
