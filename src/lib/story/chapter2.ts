import { type StoryNode } from '@/types/game';

export const chapter2Nodes: Record<string, StoryNode> = {
  chapter2_1: {
    id: 'chapter2_1',
    chapter: 'chapter2',
    title: '守夜人',
    background: 'professor_home',
    dialogues: [
      {
        speaker: 'narrator',
        text: '第二天，你被带到了一个隐秘的地下基地。',
      },
      {
        speaker: 'narrator',
        text: '这里是"守夜人"组织的总部，一个专门处理超自然事件的秘密机构。',
      },
      {
        speaker: 'professor_zhang',
        text: '欢迎来到守夜人，年轻人。我是张教授，这里的负责人。',
      },
      {
        speaker: 'xiefan',
        text: '所以……修仙是真的？',
        emotion: 'confused',
      },
      {
        speaker: 'professor_zhang',
        text: '真的假的，重要吗？重要的是，你能感应灵气，这就是你的天赋。',
      },
      {
        speaker: 'narrator',
        text: '张教授带你参观了基地，你看到了许多不可思议的东西。',
      },
      {
        speaker: 'narrator',
        text: '有人在空中漂浮，有人在操控火焰，还有人在和动物交流。',
      },
      {
        speaker: 'xiefan',
        text: '这……这违反了物理学定律！',
        emotion: 'surprised',
      },
      {
        speaker: 'professor_zhang',
        text: '物理学定律？年轻人，你还不明白吗？',
      },
      {
        speaker: 'professor_zhang',
        text: '修仙，就是另一种科学。只是你们还没发现而已。',
      },
    ],
    choices: [
      {
        id: 'choice_accept_training',
        text: '我愿意接受训练，成为一名修仙者',
        style: 'casual',
        nextNode: 'chapter2_2',
        effects: {
          flags: { accepted_training: true },
          attributes: { spirit: 5 },
        },
      },
      {
        id: 'choice_ask_more',
        text: '我想了解更多关于修仙的科学原理',
        style: 'rational',
        nextNode: 'chapter2_2',
        effects: {
          flags: { asked_about_science: true },
          attributes: { science: 3, wisdom: 2 },
        },
      },
      {
        id: 'choice_hesitate',
        text: '我需要时间考虑一下',
        style: 'academic',
        nextNode: 'chapter2_2',
        effects: {
          flags: { hesitated: true },
          attributes: { wisdom: 3 },
        },
      },
    ],
  },
  chapter2_2: {
    id: 'chapter2_2',
    chapter: 'chapter2',
    title: '修炼开始',
    background: 'training_room',
    dialogues: [
      {
        speaker: 'narrator',
        text: '无论你如何选择，最终你还是留在了守夜人。',
      },
      {
        speaker: 'narrator',
        text: '毕竟，一个物理学博士，对未知事物的好奇心是无法抑制的。',
      },
      {
        speaker: 'professor_zhang',
        text: '很好，从今天开始，你将接受系统的修仙训练。',
      },
      {
        speaker: 'professor_zhang',
        text: '首先，你需要学会控制体内的灵气。',
      },
      {
        speaker: 'narrator',
        text: '张教授递给你一本古朴的书。',
      },
      {
        speaker: 'professor_zhang',
        text: '这是《基础凝气术》，我们守夜人的入门教材。',
      },
      {
        speaker: 'xiefan',
        text: '等等，这上面写的是……甲骨文？',
        emotion: 'confused',
      },
      {
        speaker: 'professor_zhang',
        text: '哦，抱歉拿错了。这本是现代汉语版的。',
      },
      {
        speaker: 'narrator',
        text: '张教授从口袋里掏出另一本书，封面上写着：',
      },
      {
        speaker: 'system',
        text: '《修仙入门：从零开始的凝气指南》\n守夜人内部教材 v2.0\n定价：灵石×10（已免除）',
      },
    ],
    autoNext: 'chapter2_3',
    autoDelay: 3000,
  },
  chapter2_3: {
    id: 'chapter2_3',
    chapter: 'chapter2',
    title: '第一次修炼',
    background: 'training_room',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你翻开书，开始学习基础凝气术。',
      },
      {
        speaker: 'narrator',
        text: '书上的内容让你大开眼界：',
      },
      {
        speaker: 'system',
        text: '【基础凝气术】\n第一步：调整呼吸，感受体内灵气\n第二步：引导灵气在经脉中运行\n第三步：将灵气凝聚在丹田\n注意事项：如出现头晕、恶心、幻觉，请立即停止',
      },
      {
        speaker: 'xiefan',
        text: '这个……有科学依据吗？',
        emotion: 'thinking',
      },
      {
        speaker: 'professor_zhang',
        text: '科学依据？年轻人，你还在纠结这个？',
      },
      {
        speaker: 'professor_zhang',
        text: '试试看就知道了。',
      },
      {
        speaker: 'narrator',
        text: '你闭上眼睛，按照书上的方法开始修炼。',
      },
      {
        speaker: 'narrator',
        text: '三分钟后——',
      },
      {
        speaker: 'xiefan',
        text: '等等，我好像……感觉到了什么？',
        emotion: 'surprised',
      },
      {
        speaker: 'narrator',
        text: '你感觉到一股暖流在体内流动，就像是……电流？',
      },
      {
        speaker: 'system',
        text: '【修炼成功】\n灵力+5\n当前灵力：15/100\n境界：凝气期一层（稳固）',
      },
    ],
    choices: [
      {
        id: 'choice_continue',
        text: '继续修炼，争取突破',
        style: 'casual',
        nextNode: 'chapter2_end',
        effects: {
          attributes: { spirit: 10 },
          flags: { continued_cultivation: true },
        },
      },
      {
        id: 'choice_analyze',
        text: '记录数据，分析灵气的本质',
        style: 'rational',
        nextNode: 'chapter2_end',
        effects: {
          attributes: { science: 5, spirit: 5 },
          flags: { analyzed_spirit: true },
        },
      },
      {
        id: 'choice_rest',
        text: '休息一下，明天继续',
        style: 'academic',
        nextNode: 'chapter2_end',
        effects: {
          attributes: { wisdom: 3, spirit: 3 },
          flags: { rested: true },
        },
      },
    ],
  },
  chapter2_end: {
    id: 'chapter2_end',
    chapter: 'chapter2',
    title: '第二章完',
    background: 'training_room',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你完成了第一次正式的修仙训练。',
      },
      {
        speaker: 'professor_zhang',
        text: '不错，年轻人。你的天赋比我想象的还要好。',
      },
      {
        speaker: 'xiefan',
        text: '谢谢教授。不过……我还是不太相信这是真的。',
        emotion: 'thinking',
      },
      {
        speaker: 'professor_zhang',
        text: '相信不相信，重要吗？重要的是，你能做到。',
      },
      {
        speaker: 'narrator',
        text: '张教授拍了拍你的肩膀。',
      },
      {
        speaker: 'professor_zhang',
        text: '好好休息，明天开始，你将面临真正的挑战。',
      },
      {
        speaker: 'system',
        text: '【第二章完】\n下一章预告：你将遇到第一个真正的敌人，一个来自异界的怪物……',
      },
    ],
    autoNext: 'chapter3_1',
    autoDelay: 3000,
  },
};
