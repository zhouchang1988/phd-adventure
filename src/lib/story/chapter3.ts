import { type StoryNode } from '@/types/game';

export const chapter3Nodes: Record<string, StoryNode> = {
  chapter3_1: {
    id: 'chapter3_1',
    chapter: 'chapter3',
    title: '传统修仙者',
    background: 'training_room',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你在守夜人基地已经待了一个月，修为突飞猛进。',
      },
      {
        speaker: 'narrator',
        text: '但你的修炼方式引起了其他修仙者的不满。',
      },
      {
        speaker: 'system',
        text: '【当前状态】\n境界：凝气期三层\n灵力：45/100\n科理值：99（+5加成）',
      },
      {
        speaker: 'narrator',
        text: '今天，你被叫到了一个会议室。',
      },
      {
        speaker: 'narrator',
        text: '会议室里坐着几个穿着传统道袍的修仙者，表情严肃。',
      },
      {
        speaker: 'traditional_cultivator',
        text: '你就是那个用物理学修仙的年轻人？',
      },
      {
        speaker: 'xiefan',
        text: '是的。请问有什么问题吗？',
        emotion: 'confused',
      },
      {
        speaker: 'traditional_cultivator',
        text: '问题大了！你这是在亵渎修仙之道！',
      },
    ],
    choices: [
      {
        id: 'choice_defend',
        text: '我只是在用科学方法提高效率',
        style: 'rational',
        nextNode: 'chapter3_2',
        effects: {
          flags: { defended_science: true },
          attributes: { science: 3 },
        },
      },
      {
        id: 'choice_humble',
        text: '请前辈指教，我哪里做得不对？',
        style: 'academic',
        nextNode: 'chapter3_2',
        effects: {
          flags: { asked_for_guidance: true },
          attributes: { wisdom: 3 },
        },
      },
      {
        id: 'choice_challenge',
        text: '要不我们比试一下？看谁的方法更有效',
        style: 'casual',
        nextNode: 'chapter3_2',
        effects: {
          flags: { challenged_tradition: true },
          attributes: { spirit: 2 },
        },
      },
    ],
  },
  chapter3_2: {
    id: 'chapter3_2',
    chapter: 'chapter3',
    title: '科学修仙',
    background: 'training_room',
    dialogues: [
      {
        speaker: 'narrator',
        text: '传统修仙者们对你的方法嗤之以鼻。',
      },
      {
        speaker: 'traditional_cultivator',
        text: '修仙讲究的是悟性、是机缘、是与天地的共鸣！',
      },
      {
        speaker: 'traditional_cultivator',
        text: '你用什么物理学、什么数据分析，这是对修仙的侮辱！',
      },
      {
        speaker: 'xiefan',
        text: '可是……我的修炼速度比你们快三倍。',
        emotion: 'thinking',
      },
      {
        speaker: 'narrator',
        text: '会议室里一片寂静。',
      },
      {
        speaker: 'traditional_cultivator',
        text: '那……那只是因为你天赋好！',
      },
      {
        speaker: 'xiefan',
        text: '不，是因为我找到了规律。让我给你们看看我的数据。',
        emotion: 'thinking',
      },
      {
        speaker: 'narrator',
        text: '你打开笔记本电脑，展示了一个月来的修炼数据。',
      },
      {
        speaker: 'system',
        text: '【修炼数据分析】\n传统方法：平均每天灵力+0.8\n你的方法：平均每天灵力+2.4\n效率提升：300%\n关键发现：灵气波动频率与普朗克常数相关',
      },
      {
        speaker: 'traditional_cultivator',
        text: '这……这怎么可能？',
      },
      {
        speaker: 'xiefan',
        text: '物理学告诉我们，任何现象都有规律可循。修仙也不例外。',
        emotion: 'thinking',
      },
    ],
    autoNext: 'chapter3_3',
    autoDelay: 3000,
  },
  chapter3_3: {
    id: 'chapter3_3',
    chapter: 'chapter3',
    title: '神识的量子解释',
    background: 'research_lab',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你的数据引起了守夜人高层的注意。',
      },
      {
        speaker: 'professor_zhang',
        text: '谢凡，你的发现很有意思。能详细说说吗？',
      },
      {
        speaker: 'xiefan',
        text: '教授，我发现"神识"这个概念，可以用量子纠缠来解释。',
        emotion: 'thinking',
      },
      {
        speaker: 'xiefan',
        text: '传统修仙者说的"神识外放"，本质上是一种量子态的扩展。',
      },
      {
        speaker: 'xiefan',
        text: '当修炼者的意识与周围环境的量子场产生纠缠时，就能感知到远处的信息。',
      },
      {
        speaker: 'professor_zhang',
        text: '有意思。继续说。',
      },
      {
        speaker: 'xiefan',
        text: '这就解释了为什么神识有范围限制——因为量子纠缠的相干长度是有限的。',
      },
      {
        speaker: 'system',
        text: '【理论突破】\n你提出了"量子神识理论"\n效果：神识范围+20%\n解锁新技能：量子感知',
      },
      {
        speaker: 'traditional_cultivator',
        text: '胡说八道！神识是修仙者的根本能力，怎么可能用物理解释？',
      },
      {
        speaker: 'xiefan',
        text: '那你能解释为什么神识有范围限制吗？',
        emotion: 'thinking',
      },
      {
        speaker: 'traditional_cultivator',
        text: '那……那是因为修为不够！',
      },
      {
        speaker: 'xiefan',
        text: '可是我用量子理论，可以精确计算出任何修为的神识范围。你要试试吗？',
        emotion: 'thinking',
      },
    ],
    choices: [
      {
        id: 'choice_continue_research',
        text: '继续研究其他修仙现象的物理解释',
        style: 'rational',
        nextNode: 'chapter3_4',
        effects: {
          attributes: { science: 5, wisdom: 3 },
          flags: { continued_research: true },
        },
      },
      {
        id: 'choice_apply_knowledge',
        text: '先把这些知识应用到实际修炼中',
        style: 'casual',
        nextNode: 'chapter3_4',
        effects: {
          attributes: { spirit: 8 },
          flags: { applied_knowledge: true },
        },
      },
      {
        id: 'choice_share_findings',
        text: '把这些发现分享给其他修仙者',
        style: 'academic',
        nextNode: 'chapter3_4',
        effects: {
          attributes: { wisdom: 5 },
          flags: { shared_findings: true },
        },
      },
    ],
  },
  chapter3_4: {
    id: 'chapter3_4',
    chapter: 'chapter3',
    title: '天人五衰的热力学解释',
    background: 'research_lab',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你的研究继续深入，下一个目标是"天人五衰"现象。',
      },
      {
        speaker: 'narrator',
        text: '天人五衰是修仙者在突破某些境界时会遇到的衰退期，传统理论认为这是"天道考验"。',
      },
      {
        speaker: 'xiefan',
        text: '我不相信什么"天道考验"。这一定是某种物理现象。',
        emotion: 'thinking',
      },
      {
        speaker: 'narrator',
        text: '你开始分析天人五衰期间的能量变化数据。',
      },
      {
        speaker: 'system',
        text: '【数据分析中……】\n天人五衰期间：\n- 灵力波动：±30%\n- 神识范围：-50%\n- 身体机能：-20%\n- 恢复时间：7-30天',
      },
      {
        speaker: 'xiefan',
        text: '等等……这个能量衰减曲线，看起来很眼熟。',
        emotion: 'thinking',
      },
      {
        speaker: 'narrator',
        text: '你翻开大学时的热力学教材，找到了那个公式。',
      },
      {
        speaker: 'xiefan',
        text: '热力学第二定律！熵增原理！',
        emotion: 'surprised',
      },
      {
        speaker: 'xiefan',
        text: '天人五衰的本质，是修仙者体内的"有序能量"在突破时发生了一次熵增！',
      },
      {
        speaker: 'xiefan',
        text: '突破境界需要打破原有的能量平衡，在重建平衡之前，系统会经历一个混乱期。',
      },
      {
        speaker: 'professor_zhang',
        text: '所以……天人五衰不是天道考验，而是热力学定律？',
      },
      {
        speaker: 'xiefan',
        text: '是的！而且我找到了应对方法——在突破前，先建立一个"能量缓冲区"，就像热力学中的绝热过程一样。',
        emotion: 'thinking',
      },
      {
        speaker: 'system',
        text: '【理论突破】\n你提出了"熵减修仙理论"\n效果：天人五衰持续时间-50%\n解锁新技能：熵减护盾',
      },
    ],
    autoNext: 'chapter3_5',
    autoDelay: 3000,
  },
  chapter3_5: {
    id: 'chapter3_5',
    chapter: 'chapter3',
    title: '传统修仙者的反击',
    background: 'meeting_hall',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你的理论在守夜人内部引起了轩然大波。',
      },
      {
        speaker: 'narrator',
        text: '支持者认为你开创了修仙的新纪元，反对者认为你在动摇修仙的根基。',
      },
      {
        speaker: 'traditional_cultivator',
        text: '谢凡！你太过分了！',
      },
      {
        speaker: 'traditional_cultivator',
        text: '修仙是神圣的，是与天地共鸣的艺术！',
      },
      {
        speaker: 'traditional_cultivator',
        text: '你用什么物理学、什么热力学，这是在亵渎修仙之道！',
      },
      {
        speaker: 'xiefan',
        text: '可是……我的方法确实有效。',
        emotion: 'thinking',
      },
      {
        speaker: 'traditional_cultivator',
        text: '有效？那只是巧合！',
      },
      {
        speaker: 'traditional_cultivator',
        text: '从今天起，我们要求禁止你的"科学修仙"方法！',
      },
      {
        speaker: 'narrator',
        text: '会议室里一片哗然。',
      },
      {
        speaker: 'professor_zhang',
        text: '安静！',
      },
      {
        speaker: 'professor_zhang',
        text: '谢凡，你有什么要说的吗？',
      },
    ],
    choices: [
      {
        id: 'choice_low_key',
        text: '我可以低调发展，不公开我的方法',
        style: 'academic',
        nextNode: 'chapter3_end',
        effects: {
          flags: { chose_low_key: true },
          attributes: { wisdom: 5 },
        },
      },
      {
        id: 'choice_public_challenge',
        text: '我要公开挑战传统修仙体系！',
        style: 'rational',
        nextNode: 'chapter3_end',
        effects: {
          flags: { chose_public_challenge: true },
          attributes: { science: 5, spirit: 3 },
        },
      },
      {
        id: 'choice_find_allies',
        text: '我需要时间寻找支持者',
        style: 'casual',
        nextNode: 'chapter3_end',
        effects: {
          flags: { chose_find_allies: true },
          attributes: { wisdom: 3, science: 3 },
        },
      },
    ],
  },
  chapter3_end: {
    id: 'chapter3_end',
    chapter: 'chapter3',
    title: '第三章完',
    background: 'research_lab',
    dialogues: [
      {
        speaker: 'narrator',
        text: '无论你做出什么选择，有一件事是确定的：',
      },
      {
        speaker: 'narrator',
        text: '你已经在修仙界掀起了一场革命。',
      },
      {
        speaker: 'xiefan',
        text: '物理学告诉我，任何革命都需要时间。',
        emotion: 'thinking',
      },
      {
        speaker: 'xiefan',
        text: '但我也知道，真理是无法被阻止的。',
      },
      {
        speaker: 'system',
        text: '【第三章完】\n下一章预告：灵气复苏加速，普通人开始感知到异常……',
      },
    ],
    autoNext: 'chapter4_1',
    autoDelay: 3000,
  },
};
