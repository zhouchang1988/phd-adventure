import { type StoryNode } from '@/types/game';

export const epilogueNodes: Record<string, StoryNode> = {
  epilogue_1: {
    id: 'epilogue_1',
    chapter: 'epilogue',
    title: '觉醒',
    background: 'beach_sunrise',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你醒来，海边，日出。',
      },
      {
        speaker: 'narrator',
        text: '你揉揉眼睛，低头看手机——47封拒信邮件。',
      },
      {
        speaker: 'xiefan',
        text: '所以……我做了一个很长的梦。',
        emotion: 'confused',
      },
      {
        speaker: 'narrator',
        text: '你站起来，伸了个懒腰。',
      },
      {
        speaker: 'narrator',
        text: '然后你注意到自己的手心。',
      },
      {
        speaker: 'system',
        text: '【身体痕迹】\n你低头看自己的手心，发现一个淡淡的印记，形状像一个符文。\n旁边还有一道浅浅的疤痕，像是被什么利器划过。',
      },
      {
        speaker: 'xiefan',
        text: '这是什么？胎记？我以前有这个吗？',
        emotion: 'surprised',
      },
      {
        speaker: 'narrator',
        text: '你盯着那个符文，觉得眼熟，但想不起来在哪里见过。',
      },
    ],
    autoNext: 'epilogue_2',
    autoDelay: 3000,
  },
  epilogue_2: {
    id: 'epilogue_2',
    chapter: 'epilogue',
    title: '物品痕迹',
    background: 'beach_sunrise',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你把手伸进口袋，摸到了那块鹅卵石。',
      },
      {
        speaker: 'system',
        text: '【物品痕迹】\n石头是温热的。',
      },
      {
        speaker: 'xiefan',
        text: '……奇怪。石头怎么会是热的？',
        emotion: 'confused',
      },
      {
        speaker: 'narrator',
        text: '你把石头拿出来，放在手心。石头的温度渐渐消失，变回普通的石头。',
      },
      {
        speaker: 'narrator',
        text: '但在温度消失的瞬间，你听到了海浪声——不是此刻平静的海面，而是某种更深、更远的海浪声。',
      },
      {
        speaker: 'xiefan',
        text: '等等……这个声音……',
        emotion: 'surprised',
      },
      {
        speaker: 'narrator',
        text: '你记得这个声音。在梦里，每次修炼时，你都会听到这个声音。',
      },
      {
        speaker: 'xiefan',
        text: '这不可能……梦里的声音，怎么会出现在现实中？',
        emotion: 'confused',
      },
    ],
    autoNext: 'epilogue_3',
    autoDelay: 3000,
  },
  epilogue_3: {
    id: 'epilogue_3',
    chapter: 'epilogue',
    title: '知识痕迹',
    background: 'beach_sunrise',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你低头看着手心的符文印记。',
      },
      {
        speaker: 'narrator',
        text: '你突然"知道"了它的含义。',
      },
      {
        speaker: 'system',
        text: '【知识痕迹】\n不是想起来的，是"知道"的——就像你知道1+1=2一样，不需要回忆，它就在那里。',
      },
      {
        speaker: 'xiefan',
        text: '这个符文……是"共振"的意思。',
        emotion: 'surprised',
      },
      {
        speaker: 'narrator',
        text: '你愣住了。',
      },
      {
        speaker: 'xiefan',
        text: '等等。我为什么会知道这个？我从来没学过符文。这是……梦里的知识？',
        emotion: 'confused',
      },
      {
        speaker: 'narrator',
        text: '你盯着那个符文，试图回忆更多。但记忆是模糊的——你记得修炼、记得突破、记得有人叫你"师兄"……',
      },
      {
        speaker: 'narrator',
        text: '但具体的人脸、地点、事件，都像是隔着一层雾。',
      },
      {
        speaker: 'narrator',
        text: '只有这个符文，清晰地刻在你的手心，也刻在你的记忆里。',
      },
    ],
    autoNext: 'epilogue_4',
    autoDelay: 3000,
  },
  epilogue_4: {
    id: 'epilogue_4',
    chapter: 'epilogue',
    title: '真相揭示',
    background: 'beach_sunrise',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你坐在礁石上，看着日出。',
      },
      {
        speaker: 'narrator',
        text: '你把所有线索串起来：梦里的海浪声、符文印记、鹅卵石的温度、还有这个"不应该知道"的知识……',
      },
      {
        speaker: 'xiefan',
        text: '这不是普通的梦。',
        emotion: 'thinking',
      },
      {
        speaker: 'narrator',
        text: '你闭上眼睛，回忆梦中的自己——那个在修仙世界里挣扎、突破、成长的自己。',
      },
      {
        speaker: 'xiefan',
        text: '那个我……是真实存在的。他在某个地方，经历了那些事。',
        emotion: 'thinking',
      },
      {
        speaker: 'narrator',
        text: '你睁开眼，看着手心的符文。',
      },
      {
        speaker: 'xiefan',
        text: '而这个符文……是他留给我的。跨越维度的……一封信。',
        emotion: 'surprised',
      },
      {
        speaker: 'system',
        text: '【真相揭示】\n梦不是虚构的，而是平行世界的连接。\n另一个谢凡是真实的，他跨越维度传递了经验和智慧。',
      },
    ],
    choices: [
      {
        id: 'choice_accept',
        text: '接受这个真相',
        style: 'rational',
        nextNode: 'epilogue_5',
        effects: {
          attributes: { wisdom: 20 },
          flags: { accepted_parallel_truth: true },
          achievements: ['共振'],
        },
      },
      {
        id: 'choice_reject',
        text: '不，这太荒谬了',
        style: 'casual',
        nextNode: 'epilogue_5',
        effects: {
          attributes: { spirit: 10 },
          flags: { rejected_parallel_truth: true },
        },
      },
      {
        id: 'choice_ponder',
        text: '我需要时间思考',
        style: 'academic',
        nextNode: 'epilogue_5',
        effects: {
          attributes: { wisdom: 15 },
          flags: { pondered_parallel_truth: true },
        },
      },
    ],
  },
  epilogue_5: {
    id: 'epilogue_5',
    chapter: 'epilogue',
    title: '结局',
    background: 'beach_sunrise',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你把鹅卵石放进口袋，站起来。',
      },
      {
        speaker: 'narrator',
        text: '你不再迷茫，不再自我怀疑。',
      },
      {
        speaker: 'narrator',
        text: '你知道：梦中的经历是真实的，只是发生在另一个世界。',
      },
      {
        speaker: 'xiefan',
        text: '我不知道你是谁。但我知道一件事：你在梦里教我的东西，是真的。',
        emotion: 'thinking',
      },
      {
        speaker: 'narrator',
        text: '你看着大海，笑了。',
      },
      {
        speaker: 'xiefan',
        text: '谢谢你，另一个我。',
        emotion: 'happy',
      },
      {
        speaker: 'narrator',
        text: '你转身，往回走。',
      },
      {
        speaker: 'narrator',
        text: '手心的符文在阳光下微微发光。',
      },
      {
        speaker: 'system',
        text: '【游戏结束】\n感谢游玩《谢凡的奇幻冒险2.0》\n\n开放结局暗示：\n谢凡打开笔记本电脑，开始写一篇论文：《论跨维度意识共振的物理学假说》\n他的研究方向从此改变——从纯理论转向认知科学与物理学的交叉领域\n那块鹅卵石，他一直带在身边。偶尔会想：另一个我，还好吗？\n手心的符文，有时会微微发热。像是在回应他的思念',
      },
    ],
    autoNext: 'epilogue_end',
    autoDelay: 5000,
  },
  epilogue_end: {
    id: 'epilogue_end',
    chapter: 'epilogue',
    title: '终章完',
    background: 'beach_sunrise',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你走在回家的路上，阳光洒在身上。',
      },
      {
        speaker: 'narrator',
        text: '你知道，从今天起，你的人生将有所不同。',
      },
      {
        speaker: 'narrator',
        text: '不是因为修仙，不是因为梦，而是因为你找到了自己的"道"。',
      },
      {
        speaker: 'system',
        text: '【结局设计哲学】\n梦境是假的，但成长是真的\n修仙世界的每一课，都映射着现实中的自我突破\n"踏天大圆满"不是成为最强，而是"想明白自己要什么"\n这是一个关于"接受迷茫，然后继续走"的故事\n梦不是虚构的，而是平行世界的连接——另一个谢凡是真实的，他跨越维度传递了经验和智慧',
      },
      {
        speaker: 'system',
        text: '【成就系统】\n已完成：\n- 修仙入门\n- 量子神识理论\n- 熵减修仙法\n- 踏天大圆满\n- 共振\n- 平行世界\n\n隐藏成就：\n- 科学修仙先驱\n- 两个谢凡\n- 真理追求者',
      },
      {
        speaker: 'system',
        text: '【制作人员】\n游戏设计：Sisyphus\n剧本：AI + 人类协作\n技术：Next.js + TypeScript + Tailwind CSS\n\n特别感谢：\n- 所有选择"科学修仙"的玩家\n- 所有坚持到结局的玩家\n- 另一个世界的谢凡',
      },
    ],
  },
};
