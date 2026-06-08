import { type StoryNode } from '@/types/game';

export const chapter4Nodes: Record<string, StoryNode> = {
  chapter4_1: {
    id: 'chapter4_1',
    chapter: 'chapter4',
    title: '灵气复苏',
    background: 'city_day',
    dialogues: [
      {
        speaker: 'narrator',
        text: '三个月后，灵气复苏的速度突然加快。',
      },
      {
        speaker: 'narrator',
        text: '普通人开始感知到异常——有人看到空气中漂浮的光点，有人听到奇怪的声音。',
      },
      {
        speaker: 'narrator',
        text: '新闻开始报道"超自然现象"。',
      },
      {
        speaker: 'system',
        text: '【新闻联播】\n近日，多地报告"灵气异常"现象，专家表示这可能是……\n专家A："是太阳耀斑影响。"\n专家B："是5G基站辐射。"\n专家C："是量子纠缠。"',
      },
      {
        speaker: 'xiefan',
        text: '终于有人说到点子上了。',
        emotion: 'thinking',
      },
      {
        speaker: 'narrator',
        text: '你看着新闻，意识到世界正在发生巨变。',
      },
      {
        speaker: 'professor_zhang',
        text: '谢凡，你看到了吗？灵气复苏加速了。',
      },
      {
        speaker: 'xiefan',
        text: '是的，教授。这意味着什么？',
      },
      {
        speaker: 'professor_zhang',
        text: '意味着修仙界即将公开化。普通人也会开始修炼。',
      },
      {
        speaker: 'xiefan',
        text: '那我们守夜人怎么办？',
      },
      {
        speaker: 'professor_zhang',
        text: '这就是我找你的原因。我们需要一个新的方案。',
      },
    ],
    choices: [
      {
        id: 'choice_propose_science',
        text: '我主张科学与修仙融合，让普通人也能理解',
        style: 'rational',
        nextNode: 'chapter4_2',
        effects: {
          flags: { proposed_science_approach: true },
          attributes: { science: 5 },
        },
      },
      {
        id: 'choice_propose_tradition',
        text: '我们应该保持传统，但适当开放',
        style: 'academic',
        nextNode: 'chapter4_2',
        effects: {
          flags: { proposed_tradition_approach: true },
          attributes: { wisdom: 5 },
        },
      },
      {
        id: 'choice_propose_new',
        text: '我们需要一个全新的体系，融合两者优点',
        style: 'casual',
        nextNode: 'chapter4_2',
        effects: {
          flags: { proposed_new_approach: true },
          attributes: { wisdom: 3, science: 3 },
        },
      },
    ],
  },
  chapter4_2: {
    id: 'chapter4_2',
    chapter: 'chapter4',
    title: '势力争夺',
    background: 'meeting_hall',
    dialogues: [
      {
        speaker: 'narrator',
        text: '灵气复苏的消息传开后，各方势力开始行动。',
      },
      {
        speaker: 'narrator',
        text: '天机集团、丹鼎研究院、剑阁资本、符箓科技……',
      },
      {
        speaker: 'narrator',
        text: '这些隐藏在现代社会中的古老宗门，纷纷浮出水面。',
      },
      {
        speaker: 'system',
        text: '【势力动态】\n天机集团：发布"灵气探测APP"，下载量破亿\n丹鼎研究院：推出"筑基丹"保健品，被FDA叫停\n剑阁资本：投资100亿成立"修仙基金"\n符箓科技：推出"AI画符"服务，引发争议',
      },
      {
        speaker: 'xiefan',
        text: '这些宗门……都在抢市场？',
        emotion: 'surprised',
      },
      {
        speaker: 'professor_zhang',
        text: '修仙界也要内卷。你不知道吗？',
      },
      {
        speaker: 'xiefan',
        text: '我以为修仙是超脱世俗的……',
      },
      {
        speaker: 'professor_zhang',
        text: '超脱？修仙者也要交社保、还房贷、应付催婚。',
      },
      {
        speaker: 'narrator',
        text: '你突然意识到，修仙界和现代社会没什么两样。',
      },
      {
        speaker: 'narrator',
        text: '只是内卷的对象从"学历"变成了"境界"。',
      },
    ],
    autoNext: 'chapter4_3',
    autoDelay: 3000,
  },
  chapter4_3: {
    id: 'chapter4_3',
    chapter: 'chapter4',
    title: '修仙血统论',
    background: 'meeting_hall',
    dialogues: [
      {
        speaker: 'narrator',
        text: '随着灵气复苏的深入，一个新的问题出现了。',
      },
      {
        speaker: 'narrator',
        text: '有些人天生就能感应灵气，有些人却完全不行。',
      },
      {
        speaker: 'traditional_cultivator',
        text: '这是天意！修仙需要天赋，不是人人都能修炼的！',
      },
      {
        speaker: 'traditional_cultivator',
        text: '我们应该建立"修仙血统论"，只有有天赋的人才能修炼！',
      },
      {
        speaker: 'xiefan',
        text: '这是歧视！',
        emotion: 'surprised',
      },
      {
        speaker: 'traditional_cultivator',
        text: '歧视？这是优胜劣汰！',
      },
      {
        speaker: 'traditional_cultivator',
        text: '没有天赋的人修炼，只会浪费资源，甚至走火入魔！',
      },
      {
        speaker: 'xiefan',
        text: '可是……天赋只是起点，不是终点。',
        emotion: 'thinking',
      },
      {
        speaker: 'xiefan',
        text: '物理学告诉我们，任何系统都可以通过优化来提高效率。',
      },
      {
        speaker: 'xiefan',
        text: '没有天赋的人，只是需要更科学的方法而已。',
      },
      {
        speaker: 'traditional_cultivator',
        text: '你这是在挑战修仙界的根基！',
      },
    ],
    choices: [
      {
        id: 'choice_join_existing',
        text: '加入现有势力，从内部改变',
        style: 'academic',
        nextNode: 'chapter4_4',
        effects: {
          flags: { joined_existing: true },
          attributes: { wisdom: 5 },
        },
      },
      {
        id: 'choice_create_own',
        text: '创建自己的组织，推广科学修仙',
        style: 'rational',
        nextNode: 'chapter4_4',
        effects: {
          flags: { created_own_organization: true },
          attributes: { science: 5, spirit: 3 },
        },
      },
      {
        id: 'choice_stay_neutral',
        text: '保持中立，两边不讨好，但能看清全局',
        style: 'casual',
        nextNode: 'chapter4_4',
        effects: {
          flags: { stayed_neutral: true },
          attributes: { wisdom: 3, science: 3 },
        },
      },
    ],
  },
  chapter4_4: {
    id: 'chapter4_4',
    chapter: 'chapter4',
    title: '普通人觉醒',
    background: 'city_day',
    dialogues: [
      {
        speaker: 'narrator',
        text: '灵气复苏继续加速，越来越多的普通人开始觉醒。',
      },
      {
        speaker: 'narrator',
        text: '社交媒体上出现了大量"修仙打卡"的内容。',
      },
      {
        speaker: 'system',
        text: '【小红书热帖】\n标题：今天筑基成功！分享我的修炼心得\n内容：坚持修炼三个月，终于突破了！分享一下我的方法……\n评论：\n- "大佬！求带！"\n- "这个方法科学吗？"\n- "我试了，没用，是不是我天赋不行？"',
      },
      {
        speaker: 'xiefan',
        text: '看来……修仙真的要公开化了。',
        emotion: 'thinking',
      },
      {
        speaker: 'narrator',
        text: '你看到一个问题：普通人没有系统指导，很容易走弯路。',
      },
      {
        speaker: 'professor_zhang',
        text: '谢凡，你的科学修仙方法，或许能帮助这些人。',
      },
      {
        speaker: 'xiefan',
        text: '是的，教授。我决定……',
      },
      {
        speaker: 'narrator',
        text: '你深吸一口气，做出了一个重大决定。',
      },
      {
        speaker: 'xiefan',
        text: '我要写一本书，把科学修仙的方法系统化，让每个人都能看懂。',
        emotion: 'thinking',
      },
      {
        speaker: 'professor_zhang',
        text: '好主意。需要我帮忙吗？',
      },
      {
        speaker: 'xiefan',
        text: '当然。不过……这本书可能会引起很多争议。',
      },
      {
        speaker: 'professor_zhang',
        text: '真理从来不怕争议。',
      },
    ],
    autoNext: 'chapter4_5',
    autoDelay: 3000,
  },
  chapter4_5: {
    id: 'chapter4_5',
    chapter: 'chapter4',
    title: '《科学修仙导论》',
    background: 'research_lab',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你开始撰写《科学修仙导论》。',
      },
      {
        speaker: 'narrator',
        text: '这本书涵盖了你所有的研究成果：',
      },
      {
        speaker: 'system',
        text: '【《科学修仙导论》目录】\n第一章：灵气的物理学本质\n第二章：量子神识理论\n第三章：熵减修仙法\n第四章：第一性原理突破境界\n第五章：科学修炼日常指南\n附录：常见问题解答',
      },
      {
        speaker: 'xiefan',
        text: '这本书……会改变修仙界。',
        emotion: 'thinking',
      },
      {
        speaker: 'narrator',
        text: '书稿完成后，你把它发布在了网上。',
      },
      {
        speaker: 'narrator',
        text: '一夜之间，下载量突破百万。',
      },
      {
        speaker: 'system',
        text: '【社会反响】\n支持者："终于有人用科学解释修仙了！"\n反对者："这是对修仙的亵渎！"\n中立者："有意思，我先试试再说。"',
      },
      {
        speaker: 'traditional_cultivator',
        text: '谢凡！你太过分了！',
      },
      {
        speaker: 'traditional_cultivator',
        text: '你这是在动摇修仙界的根基！',
      },
      {
        speaker: 'xiefan',
        text: '我只是在传播真理。',
        emotion: 'thinking',
      },
      {
        speaker: 'traditional_cultivator',
        text: '真理？你的"科学修仙"根本就是异端邪说！',
      },
      {
        speaker: 'xiefan',
        text: '那你能解释为什么我的方法比传统方法快300%吗？',
        emotion: 'thinking',
      },
    ],
    choices: [
      {
        id: 'choice_continue_writing',
        text: '继续写更多科学修仙的书籍',
        style: 'rational',
        nextNode: 'chapter4_end',
        effects: {
          attributes: { science: 8, wisdom: 5 },
          flags: { continued_writing: true },
        },
      },
      {
        id: 'choice_start_teaching',
        text: '开始在线教学，亲自指导学生',
        style: 'casual',
        nextNode: 'chapter4_end',
        effects: {
          attributes: { spirit: 5, wisdom: 5 },
          flags: { started_teaching: true },
        },
      },
      {
        id: 'choice_build_community',
        text: '建立科学修仙社区，让更多人参与',
        style: 'academic',
        nextNode: 'chapter4_end',
        effects: {
          attributes: { wisdom: 8, science: 3 },
          flags: { built_community: true },
        },
      },
    ],
  },
  chapter4_end: {
    id: 'chapter4_end',
    chapter: 'chapter4',
    title: '第四章完',
    background: 'research_lab',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你的科学修仙方法开始传播，影响越来越大。',
      },
      {
        speaker: 'narrator',
        text: '传统修仙者视你为异端，但越来越多的人开始支持你。',
      },
      {
        speaker: 'xiefan',
        text: '物理学告诉我，任何新理论的诞生都会经历反对。',
        emotion: 'thinking',
      },
      {
        speaker: 'xiefan',
        text: '但真理是无法被阻止的。',
      },
      {
        speaker: 'professor_zhang',
        text: '谢凡，你准备好了吗？',
      },
      {
        speaker: 'xiefan',
        text: '准备好什么？',
      },
      {
        speaker: 'professor_zhang',
        text: '准备好……改变世界。',
      },
      {
        speaker: 'system',
        text: '【第四章完】\n下一章预告：向最高境界冲击，九座踏天桥……',
      },
    ],
    autoNext: 'chapter5_1',
    autoDelay: 3000,
  },
};
