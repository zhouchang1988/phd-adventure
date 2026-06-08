import { type StoryNode } from '@/types/game';

export const chapter5Nodes: Record<string, StoryNode> = {
  chapter5_1: {
    id: 'chapter5_1',
    chapter: 'chapter5',
    title: '踏天桥',
    background: 'mystical_bridge',
    dialogues: [
      {
        speaker: 'narrator',
        text: '十年后，你已经站在了修仙界的巅峰。',
      },
      {
        speaker: 'system',
        text: '【当前状态】\n境界：空劫境大圆满\n灵力：9999/10000\n神识：999\n悟性：999\n科理值：999（隐藏属性满值）',
      },
      {
        speaker: 'narrator',
        text: '你的科学修仙理论已经被广泛接受，你成为了新一代修仙界的领袖。',
      },
      {
        speaker: 'narrator',
        text: '但你知道，还有一个更高的境界——踏天境。',
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
        text: '准备好……面对九座踏天桥。',
      },
      {
        speaker: 'narrator',
        text: '你抬头望去，看到了九座悬浮在虚空中的桥梁。',
      },
      {
        speaker: 'narrator',
        text: '每座桥都散发着不同的光芒，仿佛在等待着什么。',
      },
      {
        speaker: 'xiefan',
        text: '这九座桥……代表什么？',
        emotion: 'confused',
      },
      {
        speaker: 'professor_zhang',
        text: '每座桥都是一次认知革命。你必须放弃某些"正确"才能前进。',
      },
      {
        speaker: 'xiefan',
        text: '听起来像是博士论文答辩。',
        emotion: 'thinking',
      },
      {
        speaker: 'professor_zhang',
        text: '比那难多了。',
      },
    ],
    choices: [
      {
        id: 'choice_start_bridge',
        text: '我准备好了，开始吧',
        style: 'casual',
        nextNode: 'chapter5_2',
        effects: {
          flags: { started_bridge: true },
          attributes: { spirit: 10 },
        },
      },
      {
        id: 'choice_ask_more',
        text: '能先告诉我每座桥的考验是什么吗？',
        style: 'rational',
        nextNode: 'chapter5_2',
        effects: {
          flags: { asked_about_bridges: true },
          attributes: { wisdom: 5, science: 5 },
        },
      },
      {
        id: 'choice_prepare',
        text: '我需要时间准备',
        style: 'academic',
        nextNode: 'chapter5_2',
        effects: {
          flags: { prepared_for_bridge: true },
          attributes: { wisdom: 8 },
        },
      },
    ],
  },
  chapter5_2: {
    id: 'chapter5_2',
    chapter: 'chapter5',
    title: '第一桥：承认无知',
    background: 'mystical_bridge',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你踏上了第一座踏天桥。',
      },
      {
        speaker: 'narrator',
        text: '桥的尽头站着一个守桥人，面容模糊。',
      },
      {
        speaker: 'bridge_guardian',
        text: '你必须承认自己的无知才能通过。',
      },
      {
        speaker: 'xiefan',
        text: '我是博士，我承认。',
        emotion: 'thinking',
      },
      {
        speaker: 'bridge_guardian',
        text: '……你通过了。',
      },
      {
        speaker: 'xiefan',
        text: '等等，这么简单？',
        emotion: 'surprised',
      },
      {
        speaker: 'bridge_guardian',
        text: '对你们这种人来说，承认无知是最难的。',
      },
      {
        speaker: 'narrator',
        text: '你愣住了。是啊，对一个博士来说，承认"我不知道"需要多大的勇气？',
      },
      {
        speaker: 'system',
        text: '【第一桥通过】\n获得成就：承认无知\n效果：悟性+10',
      },
    ],
    autoNext: 'chapter5_3',
    autoDelay: 3000,
  },
  chapter5_3: {
    id: 'chapter5_3',
    chapter: 'chapter5',
    title: '第二桥：打破思维定式',
    background: 'mystical_bridge',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你踏上了第二座踏天桥。',
      },
      {
        speaker: 'bridge_guardian',
        text: '打破思维定式，你才能通过。',
      },
      {
        speaker: 'narrator',
        text: '桥面上出现了无数个"不可能"的命题。',
      },
      {
        speaker: 'system',
        text: '【命题挑战】\n1. 永动机是不可能的\n2. 超光速旅行是不可能的\n3. 时间旅行是不可能的\n4. 意识传输是不可能的',
      },
      {
        speaker: 'xiefan',
        text: '这些……确实是物理学的基本限制。',
        emotion: 'thinking',
      },
      {
        speaker: 'bridge_guardian',
        text: '真的吗？',
      },
      {
        speaker: 'narrator',
        text: '你开始思考。修仙……不就是在打破这些"不可能"吗？',
      },
      {
        speaker: 'xiefan',
        text: '等等……修仙者能飞，不就是打破了"人类不能飞"的限制吗？',
        emotion: 'surprised',
      },
      {
        speaker: 'xiefan',
        text: '修仙者能长寿，不就是打破了"人类寿命有限"的限制吗？',
      },
      {
        speaker: 'xiefan',
        text: '所以……物理学定律只是"目前的认知"，不是"绝对的真理"！',
      },
      {
        speaker: 'bridge_guardian',
        text: '你明白了。',
      },
      {
        speaker: 'system',
        text: '【第二桥通过】\n获得成就：打破思维定式\n效果：科理值+10',
      },
    ],
    autoNext: 'chapter5_4',
    autoDelay: 3000,
  },
  chapter5_4: {
    id: 'chapter5_4',
    chapter: 'chapter5',
    title: '第三桥：融合对立',
    background: 'mystical_bridge',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你踏上了第三座踏天桥。',
      },
      {
        speaker: 'bridge_guardian',
        text: '融合对立概念，你才能通过。',
      },
      {
        speaker: 'narrator',
        text: '桥的两边分别站着两个人：',
      },
      {
        speaker: 'narrator',
        text: '左边是一个穿着道袍的传统修仙者，右边是一个穿着白大褂的科学家。',
      },
      {
        speaker: 'traditional_cultivator',
        text: '修仙是艺术，是悟性，是与天地共鸣！',
      },
      {
        speaker: 'scientist',
        text: '科学是逻辑，是数据，是可重复的实验！',
      },
      {
        speaker: 'narrator',
        text: '两人争论不休，互不相让。',
      },
      {
        speaker: 'bridge_guardian',
        text: '你如何融合他们？',
      },
      {
        speaker: 'xiefan',
        text: '等等……他们说的都是对的。',
        emotion: 'thinking',
      },
      {
        speaker: 'xiefan',
        text: '修仙需要悟性，但悟性也可以被科学解释。',
      },
      {
        speaker: 'xiefan',
        text: '科学需要数据，但数据也可以来自修仙体验。',
      },
      {
        speaker: 'xiefan',
        text: '科学和玄学……是一体的！',
      },
      {
        speaker: 'narrator',
        text: '两个争论的人突然消失了，化作一道光融入你的体内。',
      },
      {
        speaker: 'system',
        text: '【第三桥通过】\n获得成就：融合对立\n效果：全属性+5',
      },
    ],
    autoNext: 'chapter5_5',
    autoDelay: 3000,
  },
  chapter5_5: {
    id: 'chapter5_5',
    chapter: 'chapter5',
    title: '第四桥：接受不确定性',
    background: 'mystical_bridge',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你踏上了第四座踏天桥。',
      },
      {
        speaker: 'bridge_guardian',
        text: '接受不确定性，你才能通过。',
      },
      {
        speaker: 'narrator',
        text: '桥面上出现了一个薛定谔的猫的实验装置。',
      },
      {
        speaker: 'xiefan',
        text: '薛定谔的猫？这我太熟悉了。',
        emotion: 'thinking',
      },
      {
        speaker: 'bridge_guardian',
        text: '告诉我，猫是死是活？',
      },
      {
        speaker: 'xiefan',
        text: '在打开盒子之前，猫既是死的，也是活的。',
      },
      {
        speaker: 'bridge_guardian',
        text: '你接受这个答案吗？',
      },
      {
        speaker: 'xiefan',
        text: '作为物理学家，我接受。但作为人……我很难接受。',
        emotion: 'thinking',
      },
      {
        speaker: 'bridge_guardian',
        text: '为什么？',
      },
      {
        speaker: 'xiefan',
        text: '因为人类需要确定性。我们需要知道"是"或"否"，而不是"可能"。',
      },
      {
        speaker: 'bridge_guardian',
        text: '但宇宙的本质就是不确定性。',
      },
      {
        speaker: 'narrator',
        text: '你沉默了。是啊，量子力学告诉我们，不确定性是宇宙的基本属性。',
      },
      {
        speaker: 'xiefan',
        text: '我明白了。接受不确定性，不是放弃追求真理，而是承认真理的复杂性。',
        emotion: 'thinking',
      },
      {
        speaker: 'system',
        text: '【第四桥通过】\n获得成就：接受不确定性\n效果：悟性+15',
      },
    ],
    autoNext: 'chapter5_6',
    autoDelay: 3000,
  },
  chapter5_6: {
    id: 'chapter5_6',
    chapter: 'chapter5',
    title: '第五桥：平行世界的谢凡',
    background: 'mystical_bridge',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你踏上了第五座踏天桥。',
      },
      {
        speaker: 'narrator',
        text: '这座桥和其他桥不同，桥面上弥漫着迷雾。',
      },
      {
        speaker: 'narrator',
        text: '你走着走着，突然看到对面走来一个人。',
      },
      {
        speaker: 'narrator',
        text: '那个人穿着普通的衬衫，手里拿着公文包，脸上带着疲惫但满足的微笑。',
      },
      {
        speaker: 'narrator',
        text: '你愣住了——那个人长得和你一模一样。',
      },
      {
        speaker: 'parallel_xiefan',
        text: '你好，我是另一个你。',
      },
      {
        speaker: 'xiefan',
        text: '另一个……我？',
        emotion: 'surprised',
      },
      {
        speaker: 'parallel_xiefan',
        text: '是的。在那个世界里，我没有去海边，没有捡到石头。',
      },
      {
        speaker: 'parallel_xiefan',
        text: '我找到了一份工作，结了婚，有了孩子。平凡，但幸福。',
      },
      {
        speaker: 'narrator',
        text: '守桥人出现了。',
      },
      {
        speaker: 'bridge_guardian',
        text: '你羡慕他吗？',
      },
    ],
    choices: [
      {
        id: 'choice_envy',
        text: '我羡慕你。你有稳定的工作，有家庭，有正常的生活。',
        style: 'academic',
        nextNode: 'chapter5_7',
        effects: {
          attributes: { wisdom: 10 },
          flags: { envied_parallel: true },
          achievements: ['平凡之福'],
        },
      },
      {
        id: 'choice_no_envy',
        text: '不。我选择了我的路，我不后悔。',
        style: 'rational',
        nextNode: 'chapter5_7',
        effects: {
          attributes: { spirit: 10, science: 5 },
          flags: { no_envy_parallel: true },
        },
      },
      {
        id: 'choice_talk',
        text: '等等。我想和你聊聊。',
        style: 'casual',
        nextNode: 'chapter5_7',
        effects: {
          attributes: { wisdom: 8, spirit: 8 },
          flags: { talked_to_parallel: true },
          achievements: ['两个谢凡'],
        },
      },
    ],
  },
  chapter5_7: {
    id: 'chapter5_7',
    chapter: 'chapter5',
    title: '平行谢凡的对话',
    background: 'mystical_bridge',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你做出了选择。',
      },
      {
        speaker: 'narrator',
        text: '平行谢凡看着你，笑了。',
      },
      {
        speaker: 'parallel_xiefan',
        text: '其实，我们都是对的。只是选择了不同的路。',
      },
      {
        speaker: 'xiefan',
        text: '是的。谢谢你。',
        emotion: 'thinking',
      },
      {
        speaker: 'parallel_xiefan',
        text: '也谢谢你。让我知道，原来我还可以修仙。',
      },
      {
        speaker: 'narrator',
        text: '两人相视而笑。',
      },
      {
        speaker: 'narrator',
        text: '平行谢凡转身离开，背影渐渐模糊。',
      },
      {
        speaker: 'narrator',
        text: '在消失前，他说了最后一句话：',
      },
      {
        speaker: 'parallel_xiefan',
        text: '记住，每条路都有它的价值，每种生活都值得被尊重。',
      },
      {
        speaker: 'narrator',
        text: '你站在桥上，久久不能平静。',
      },
      {
        speaker: 'system',
        text: '【第五桥通过】\n获得成就：超越自我中心\n效果：全属性+10\n解锁隐藏剧情：平行世界',
      },
    ],
    autoNext: 'chapter5_8',
    autoDelay: 3000,
  },
  chapter5_8: {
    id: 'chapter5_8',
    chapter: 'chapter5',
    title: '第六桥到第八桥',
    background: 'mystical_bridge',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你继续前进，踏上了第六座踏天桥。',
      },
      {
        speaker: 'bridge_guardian',
        text: '理解万物联系。',
      },
      {
        speaker: 'narrator',
        text: '你看到了一只蝴蝶扇动翅膀，引发了千里之外的风暴。',
      },
      {
        speaker: 'xiefan',
        text: '蝴蝶效应……原来是真的。',
        emotion: 'thinking',
      },
      {
        speaker: 'system',
        text: '【第六桥通过】\n获得成就：理解万物联系',
      },
      {
        speaker: 'narrator',
        text: '你踏上了第七座踏天桥。',
      },
      {
        speaker: 'bridge_guardian',
        text: '拥抱变化本质。',
      },
      {
        speaker: 'narrator',
        text: '你看到了四季更替，看到了星辰生灭，看到了文明的兴衰。',
      },
      {
        speaker: 'xiefan',
        text: '唯一不变的是变化本身。',
        emotion: 'thinking',
      },
      {
        speaker: 'system',
        text: '【第七桥通过】\n获得成就：拥抱变化本质',
      },
      {
        speaker: 'narrator',
        text: '你踏上了第八座踏天桥。',
      },
      {
        speaker: 'bridge_guardian',
        text: '超越生死观念。',
      },
      {
        speaker: 'narrator',
        text: '你看到了生命的诞生，看到了死亡的降临。',
      },
      {
        speaker: 'xiefan',
        text: '生和死……只是状态转换。',
        emotion: 'thinking',
      },
      {
        speaker: 'system',
        text: '【第八桥通过】\n获得成就：超越生死观念',
      },
    ],
    autoNext: 'chapter5_9',
    autoDelay: 3000,
  },
  chapter5_9: {
    id: 'chapter5_9',
    chapter: 'chapter5',
    title: '第九桥：自在圆满',
    background: 'mystical_bridge',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你站在第九座踏天桥前。',
      },
      {
        speaker: 'narrator',
        text: '这是最后一座桥，也是最难的一座。',
      },
      {
        speaker: 'bridge_guardian',
        text: '你明白了什么？',
      },
      {
        speaker: 'narrator',
        text: '你闭上眼睛，回忆整个旅程。',
      },
      {
        speaker: 'narrator',
        text: '从海边捡到石头，到凝气、筑基、踏天……',
      },
      {
        speaker: 'narrator',
        text: '你突然意识到：这一切太完美了。',
      },
      {
        speaker: 'xiefan',
        text: '等等……这个世界的规则，为什么恰好是我能理解的？',
        emotion: 'surprised',
      },
      {
        speaker: 'bridge_guardian',
        text: '（微笑）',
      },
      {
        speaker: 'xiefan',
        text: '因为……这不是真实的世界。',
        emotion: 'thinking',
      },
      {
        speaker: 'xiefan',
        text: '这是我的大脑在处理那些失败、焦虑、不甘时，编织出来的一场梦。',
      },
      {
        speaker: 'bridge_guardian',
        text: '那你后悔吗？',
      },
      {
        speaker: 'xiefan',
        text: '不。就算是梦，那些思考是真实的。那些突破是真实的。',
        emotion: 'thinking',
      },
      {
        speaker: 'xiefan',
        text: '我找到的"道"，也是真实的。',
      },
      {
        speaker: 'system',
        text: '【第九桥通过】\n获得成就：自在圆满\n境界突破：踏天境大圆满',
      },
    ],
    choices: [
      {
        id: 'choice_accept_truth',
        text: '接受这个真相',
        style: 'rational',
        nextNode: 'chapter5_end',
        effects: {
          attributes: { wisdom: 20, science: 10 },
          flags: { accepted_truth: true },
          achievements: ['踏天大圆满'],
        },
      },
      {
        id: 'choice_reject_truth',
        text: '不，这不是梦！',
        style: 'casual',
        nextNode: 'chapter5_end',
        effects: {
          attributes: { spirit: 15 },
          flags: { rejected_truth: true },
        },
      },
      {
        id: 'choice_question_truth',
        text: '等等，让我再想想……',
        style: 'academic',
        nextNode: 'chapter5_end',
        effects: {
          attributes: { wisdom: 15, science: 8 },
          flags: { questioned_truth: true },
        },
      },
    ],
  },
  chapter5_end: {
    id: 'chapter5_end',
    chapter: 'chapter5',
    title: '第五章完',
    background: 'mystical_bridge',
    dialogues: [
      {
        speaker: 'narrator',
        text: '你成就了踏天境大圆满。',
      },
      {
        speaker: 'xiefan',
        text: '不，我成就的是"终于想通了"。',
        emotion: 'thinking',
      },
      {
        speaker: 'narrator',
        text: '……有区别吗？',
      },
      {
        speaker: 'xiefan',
        text: '踏天境听起来要交社保，"想通了"不用。',
        emotion: 'thinking',
      },
      {
        speaker: 'system',
        text: '【第五章完】\n终章预告：觉醒……',
      },
    ],
    autoNext: 'epilogue_1',
    autoDelay: 3000,
  },
};
