/* ============================================
   谢凡的奇幻冒险2.0 - 完整剧情数据
   ============================================ */

const storyNodes = {
    // ============================================
    // 序章：博士的困境
    // ============================================
    
    "prologue_start": {
        id: "prologue_start",
        chapter: 0,
        title: "序章：博士的困境",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "星海市，深夜。海边的风带着咸味，吹乱了你的头发。" },
            { speaker: "旁白", text: "你叫谢凡，28岁，理论物理学博士，研究方向是量子引力。" },
            { speaker: "旁白", text: "或者更准确地说——曾经是。" },
            { speaker: "谢凡", text: "（又是被拒的一天……）", emotion: "tired" }
        ],
        autoNext: "prologue_1_1",
        autoDelay: 3000
    },

    "prologue_1_1": {
        id: "prologue_1_1",
        chapter: 0,
        title: "海边漫步",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "你低头看着手机，屏幕上是第108封拒信邮件。" },
            { speaker: "谢凡", text: "「您的研究方向很有深度，但与我们公司的需求不太匹配……」", emotion: "mocking" },
            { speaker: "谢凡", text: "每次都是这句话。翻译过来就是：你的研究太理论化了，我们不需要。", emotion: "frustrated" },
            { speaker: "旁白", text: "你把手机塞回口袋，继续沿着海岸线走。" },
            { speaker: "旁白", text: "突然，脚下一滑——" }
        ],
        autoNext: "prologue_1_2",
        autoDelay: 2500
    },

    "prologue_1_2": {
        id: "prologue_1_2",
        chapter: 0,
        title: "奇异的石头",
        background: "beach_night",
        effects: { shake: true },
        dialogues: [
            { speaker: "旁白", text: "你踉跄了一下，稳住身形。低头一看，脚边有一块拳头大小的石头。" },
            { speaker: "旁白", text: "石头表面有奇异的纹路，在月光下泛着微弱的蓝光。" },
            { speaker: "谢凡", text: "这是什么？", emotion: "confused" }
        ],
        choices: [
            { id: "choice_rational", text: "这是什么放射性物质？需要报警吗？", style: "rational", nextNode: "prologue_2_1", effects: { attributes: { science: 1 }, flags: { chose_rational: true } } },
            { id: "choice_casual", text: "好漂亮的石头，带回去当摆件。", style: "casual", nextNode: "prologue_2_1", effects: { flags: { chose_casual: true } } },
            { id: "choice_academic", text: "等等，这个纹路……像是某种分形结构？", style: "academic", nextNode: "prologue_2_1", effects: { attributes: { wisdom: 1 }, flags: { chose_academic: true } } }
        ]
    },

    "prologue_2_1": {
        id: "prologue_2_1",
        chapter: 0,
        title: "捡起石头",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "你弯腰捡起那块石头。" },
            { speaker: "旁白", text: "石头入手，出乎意料地温暖。" },
            { speaker: "谢凡", text: "奇怪……石头怎么会是热的？", emotion: "confused" },
            { speaker: "旁白", text: "就在你触碰石头的瞬间，脑海中突然闪过一串数字——" },
            { speaker: "谢凡", text: "6.626×10^-34……这不是普朗克常数吗？", emotion: "surprised" }
        ],
        autoNext: "prologue_2_2",
        autoDelay: 3000
    },

    "prologue_2_2": {
        id: "prologue_2_2",
        chapter: 0,
        title: "石头的秘密",
        background: "beach_night",
        effects: { flash: true },
        dialogues: [
            { speaker: "旁白", text: "石头的光芒突然变得强烈，你不由自主地闭上了眼睛。" },
            { speaker: "旁白", text: "脑海中浮现出奇异的画面——流动的气旋，旋转的能量，还有某种你从未见过的规律。" },
            { speaker: "谢凡", text: "这是……量子涨落？不对，比那更……", emotion: "thinking" },
            { speaker: "旁白", text: "光芒渐渐消退，你睁开眼睛，发现自己还站在海边。" },
            { speaker: "谢凡", text: "刚才那是……幻觉？", emotion: "confused" },
            { speaker: "旁白", text: "但手中的石头，依然温热。" }
        ],
        autoNext: "prologue_end",
        autoDelay: 3000
    },

    "prologue_end": {
        id: "prologue_end",
        chapter: 0,
        title: "序章结束",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "你靠在路边的长椅上，沉沉睡去。" },
            { speaker: "旁白", text: "梦里，你看到了那块石头的全貌——它不是石头。它是……" },
            { speaker: "系统", text: "【存档点已到达】" },
            { speaker: "旁白", text: "——凝气石。" }
        ],
        choices: [
            { id: "continue", text: "（继续）", style: "default", nextNode: "chapter1_start", effects: { flags: { prologue_complete: true } } }
        ]
    },

    // ============================================
    // 第一章：机缘入道
    // ============================================

    "chapter1_start": {
        id: "chapter1_start",
        chapter: 1,
        title: "第一章：机缘入道",
        background: "apartment_day",
        dialogues: [
            { speaker: "旁白", text: "第二天，你从出租屋的床上醒来。" },
            { speaker: "旁白", text: "阳光从窗户照进来，刺得你睁不开眼。" },
            { speaker: "谢凡", text: "……几点了？", emotion: "sleepy" },
            { speaker: "谢凡", text: "（又是新的一天……）", emotion: "tired" }
        ],
        autoNext: "chapter1_1_1",
        autoDelay: 3000
    },

    "chapter1_1_1": {
        id: "chapter1_1_1",
        chapter: 1,
        title: "石头还在",
        background: "apartment_day",
        dialogues: [
            { speaker: "旁白", text: "你坐起身，忽然感觉到口袋里有什么东西。" },
            { speaker: "旁白", text: "掏出来一看——是昨晚那块石头。" },
            { speaker: "谢凡", text: "不是梦？", emotion: "surprised" },
            { speaker: "旁白", text: "石头依然温热，表面的纹路在阳光下清晰可见。" },
            { speaker: "谢凡", text: "让我仔细看看……", emotion: "thinking" }
        ],
        autoNext: "chapter1_1_2",
        autoDelay: 2500
    },

    "chapter1_1_2": {
        id: "chapter1_1_2",
        chapter: 1,
        title: "感应灵气",
        background: "apartment_day",
        dialogues: [
            { speaker: "旁白", text: "你把石头握在手中，闭上眼睛。" },
            { speaker: "旁白", text: "脑海中再次浮现出那些奇异的画面——流动的能量，旋转的气旋，还有某种……规律。" },
            { speaker: "谢凡", text: "等等……这个能量波动频率……", emotion: "thinking" },
            { speaker: "谢凡", text: "是6.626×10^-34焦耳·秒？这不是普朗克常数吗？", emotion: "surprised" },
            { speaker: "旁白", text: "你成功感应到了灵气。物理学博士的执念让你把修仙变成了实验室报告。" },
            { speaker: "谢凡", text: "我需要更多数据。这个样本量太小了。", emotion: "serious" }
        ],
        autoNext: "chapter1_2_1",
        autoDelay: 3000
    },

    "chapter1_2_1": {
        id: "chapter1_2_1",
        chapter: 1,
        title: "遇到张教授",
        background: "campus",
        dialogues: [
            { speaker: "旁白", text: "下午，你去大学校园散步，想理清思路。" },
            { speaker: "旁白", text: "在教职工宿舍区，你看到一位白发老人在下棋。" },
            { speaker: "旁白", text: "老人抬头看了你一眼，眼神锐利得不像这个年纪的人。" },
            { speaker: "张教授", text: "年轻人，你手里拿的是什么？", emotion: "curious" },
            { speaker: "谢凡", text: "啊？这个？一块石头……", emotion: "surprised" },
            { speaker: "张教授", text: "有意思……让我看看。", emotion: "interested" }
        ],
        autoNext: "chapter1_2_2",
        autoDelay: 2500
    },

    "chapter1_2_2": {
        id: "chapter1_2_2",
        chapter: 1,
        title: "拜师",
        background: "campus",
        dialogues: [
            { speaker: "旁白", text: "老人接过石头，仔细端详了一会儿。" },
            { speaker: "张教授", text: "凝气石……已经很久没见过了。", emotion: "nostalgic" },
            { speaker: "谢凡", text: "您认识这个？", emotion: "surprised" },
            { speaker: "张教授", text: "年轻人，你叫什么名字？", emotion: "serious" },
            { speaker: "谢凡", text: "谢凡。理论物理学博士……", emotion: "nervous" },
            { speaker: "张教授", text: "博士？有意思……你很有天赋，愿意拜我为师吗？", emotion: "interested" },
            { speaker: "谢凡", text: "请问您有教师资格证吗？", emotion: "confused" },
            { speaker: "张教授", text: "……我活了300年。", emotion: "deadpan" },
            { speaker: "谢凡", text: "那您有300年的教学经验吗？", emotion: "serious" }
        ],
        choices: [
            { id: "accept_master", text: "正式拜师", style: "rational", nextNode: "chapter1_end", effects: { relationships: { professor_zhang: 10 }, flags: { accepted_master: true } } },
            { id: "self_study", text: "自学成才", style: "casual", nextNode: "chapter1_end", effects: { flags: { self_study: true } } },
            { id: "sign_contract", text: "要求签合同", style: "academic", nextNode: "chapter1_end", effects: { flags: { signed_contract: true } } }
        ]
    },

    "chapter1_end": {
        id: "chapter1_end",
        chapter: 1,
        title: "第一章结束",
        background: "campus",
        dialogues: [
            { speaker: "旁白", text: "就这样，你的修仙之路正式开始了。" },
            { speaker: "旁白", text: "虽然你还不太明白发生了什么。" },
            { speaker: "谢凡", text: "从物理学的角度来看……这完全说不通啊。", emotion: "confused" },
            { speaker: "张教授", text: "从修仙的角度来看，你太吵了。", emotion: "annoyed" },
            { speaker: "系统", text: "【第一章完】" }
        ],
        choices: [
            { id: "continue", text: "（继续）", style: "default", nextNode: "chapter2_start", effects: { flags: { chapter1_complete: true } } }
        ]
    },

    // ============================================
    // 第二章：双重生活
    // ============================================

    "chapter2_start": {
        id: "chapter2_start",
        chapter: 2,
        title: "第二章：双重生活",
        background: "apartment_day",
        dialogues: [
            { speaker: "旁白", text: "接下来的日子，你开始了双重生活。" },
            { speaker: "旁白", text: "白天继续找工作、应付各种压力，夜晚跟着张教授修炼。" },
            { speaker: "谢凡", text: "这种生活……有点累。", emotion: "tired" }
        ],
        autoNext: "chapter2_1_1",
        autoDelay: 2500
    },

    "chapter2_1_1": {
        id: "chapter2_1_1",
        chapter: 2,
        title: "修炼突破",
        background: "campus_night",
        dialogues: [
            { speaker: "旁白", text: "夜晚，你来到张教授的住处，开始修炼。" },
            { speaker: "张教授", text: "今天教你凝气的进阶技巧。", emotion: "serious" },
            { speaker: "谢凡", text: "等等，我有个想法。", emotion: "thinking" },
            { speaker: "张教授", text: "说。", emotion: "curious" },
            { speaker: "谢凡", text: "如果灵气是一种能量，那它应该遵循热力学定律。", emotion: "excited" },
            { speaker: "谢凡", text: "我可以优化能量利用率！", emotion: "excited" },
            { speaker: "张教授", text: "……你这脑子，是怎么长的？", emotion: "surprised" },
            { speaker: "旁白", text: "你用物理学原理改良修炼方法，效率远超传统。" }
        ],
        autoNext: "chapter2_2_1",
        autoDelay: 3000
    },

    "chapter2_2_1": {
        id: "chapter2_2_1",
        chapter: 2,
        title: "结识伙伴",
        background: "campus",
        dialogues: [
            { speaker: "旁白", text: "在张教授的引荐下，你认识了其他年轻修仙者。" },
            { speaker: "赵雪", text: "你就是那个用物理学修仙的怪才？", emotion: "curious" },
            { speaker: "谢凡", text: "怪才？", emotion: "confused" },
            { speaker: "赵雪", text: "我叫赵雪，丹鼎研究院的研究员。", emotion: "smile" },
            { speaker: "林风", text: "林风，剑阁资本的。", emotion: "cool" },
            { speaker: "谢凡", text: "你们好……", emotion: "nervous" },
            { speaker: "赵雪", text: "听说你把凝气期的效率提高了300%？", emotion: "excited" },
            { speaker: "谢凡", text: "只是优化了能量转换公式而已。", emotion: "modest" }
        ],
        autoNext: "chapter2_2_2",
        autoDelay: 3000
    },

    "chapter2_2_2": {
        id: "chapter2_2_2",
        chapter: 2,
        title: "抉择",
        background: "apartment_night",
        dialogues: [
            { speaker: "旁白", text: "你面临一个重要的抉择。" },
            { speaker: "旁白", text: "继续找工作，还是全心投入修仙？" },
            { speaker: "谢凡", text: "（这个问题……比量子引力还难）", emotion: "thinking" }
        ],
        choices: [
            { id: "continue_job", text: "继续找工作", style: "rational", nextNode: "chapter2_end", effects: { attributes: { money: 2000 }, flags: { chose_job: true } } },
            { id: "full_cultivation", text: "全心修仙", style: "casual", nextNode: "chapter2_end", effects: { attributes: { wisdom: 5 }, flags: { chose_cultivation: true } } },
            { id: "find_related_job", text: "找一份修仙相关的工作", style: "academic", nextNode: "chapter2_end", effects: { attributes: { science: 2, money: 1000 }, flags: { chose_related_job: true } } }
        ]
    },

    "chapter2_end": {
        id: "chapter2_end",
        chapter: 2,
        title: "第二章结束",
        background: "apartment_night",
        dialogues: [
            { speaker: "旁白", text: "不管怎么选择，生活还在继续。" },
            { speaker: "旁白", text: "你发现，修仙界隐藏在现代社会中，以各种形式存在。" },
            { speaker: "旁白", text: "而你的物理学知识，在这个神秘的世界里，有着独特的价值。" },
            { speaker: "系统", text: "【第二章完】" }
        ],
        choices: [
            { id: "continue", text: "（继续）", style: "default", nextNode: "chapter3_start", effects: { flags: { chapter2_complete: true } } }
        ]
    },

    // ============================================
    // 第三章：修仙新解
    // ============================================

    "chapter3_start": {
        id: "chapter3_start",
        chapter: 3,
        title: "第三章：修仙新解",
        background: "lab",
        dialogues: [
            { speaker: "旁白", text: "你开始研究传统修仙体系，发现了一个惊人的事实。" },
            { speaker: "谢凡", text: "这些所谓的'天规'……大部分都是伪规则！", emotion: "excited" },
            { speaker: "张教授", text: "哦？说来听听。", emotion: "interested" }
        ],
        autoNext: "chapter3_1_1",
        autoDelay: 2500
    },

    "chapter3_1_1": {
        id: "chapter3_1_1",
        chapter: 3,
        title: "科学修仙",
        background: "lab",
        dialogues: [
            { speaker: "谢凡", text: "用量子纠缠理论可以解释'神识'现象！", emotion: "excited" },
            { speaker: "谢凡", text: "热力学第二定律完美解释'天人五衰'！", emotion: "excited" },
            { speaker: "谢凡", text: "相对论思维可以突破空间限制！", emotion: "excited" },
            { speaker: "张教授", text: "……你这是要把修仙变成物理学？", emotion: "surprised" },
            { speaker: "谢凡", text: "不，我是要把物理学变成修仙。", emotion: "serious" },
            { speaker: "旁白", text: "你开创了'理性修仙'的独特路径。" }
        ],
        autoNext: "chapter3_2_1",
        autoDelay: 3000
    },

    "chapter3_2_1": {
        id: "chapter3_2_1",
        chapter: 3,
        title: "冲突",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "你的方法引起了传统修仙者的不满。" },
            { speaker: "传统修仙者", text: "你这是异端！", emotion: "angry" },
            { speaker: "谢凡", text: "从科学角度来说，我只是优化了算法。", emotion: "calm" },
            { speaker: "传统修仙者", text: "修仙不是算法！", emotion: "angry" },
            { speaker: "谢凡", text: "那是什么？玄学？", emotion: "confused" },
            { speaker: "传统修仙者", text: "……", emotion: "speechless" },
            { speaker: "谢凡", text: "看，你也说不清楚。", emotion: "smug" }
        ],
        autoNext: "chapter3_2_2",
        autoDelay: 3000
    },

    "chapter3_2_2": {
        id: "chapter3_2_2",
        chapter: 3,
        title: "抉择",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "传统势力开始针对你。你需要做出选择。" },
            { speaker: "张教授", text: "低调一点，别惹麻烦。", emotion: "serious" },
            { speaker: "赵雪", text: "或者……我们可以证明给他们看！", emotion: "excited" }
        ],
        choices: [
            { id: "keep_low", text: "低调发展", style: "rational", nextNode: "chapter3_end", effects: { flags: { kept_low: true } } },
            { id: "challenge", text: "公开挑战传统", style: "casual", nextNode: "chapter3_end", effects: { flags: { challenged: true } } },
            { id: "find_allies", text: "寻找盟友", style: "academic", nextNode: "chapter3_end", effects: { flags: { found_allies: true } } }
        ]
    },

    "chapter3_end": {
        id: "chapter3_end",
        chapter: 3,
        title: "第三章结束",
        background: "lab",
        dialogues: [
            { speaker: "旁白", text: "你的'理性修仙'方法，虽然引起争议，但效果是显而易见的。" },
            { speaker: "旁白", text: "越来越多的人开始关注你的研究。" },
            { speaker: "谢凡", text: "科学和修仙，也许真的可以融合。", emotion: "hopeful" },
            { speaker: "系统", text: "【第三章完】" }
        ],
        choices: [
            { id: "continue", text: "（继续）", style: "default", nextNode: "chapter4_start", effects: { flags: { chapter3_complete: true } } }
        ]
    },

    // ============================================
    // 第四章：灵气复苏
    // ============================================

    "chapter4_start": {
        id: "chapter4_start",
        chapter: 4,
        title: "第四章：灵气复苏",
        background: "city",
        dialogues: [
            { speaker: "旁白", text: "灵气复苏加速，普通人开始感知到异常。" },
            { speaker: "旁白", text: "新闻里开始报道各种'超自然现象'。" },
            { speaker: "新闻主播", text: "近日，多地报告'灵气异常'现象，专家表示这可能是……", emotion: "serious" }
        ],
        autoNext: "chapter4_1_1",
        autoDelay: 2500
    },

    "chapter4_1_1": {
        id: "chapter4_1_1",
        chapter: 4,
        title: "专家解读",
        background: "city",
        dialogues: [
            { speaker: "专家A", text: "是太阳耀斑影响。", emotion: "serious" },
            { speaker: "专家B", text: "是5G基站辐射。", emotion: "serious" },
            { speaker: "专家C", text: "是量子纠缠。", emotion: "serious" },
            { speaker: "谢凡", text: "（终于有人说到点子上了）", emotion: "relieved" },
            { speaker: "旁白", text: "政府、企业、传统宗门都在争夺话语权。" },
            { speaker: "旁白", text: "世界格局正在发生剧变。" }
        ],
        autoNext: "chapter4_2_1",
        autoDelay: 3000
    },

    "chapter4_2_1": {
        id: "chapter4_2_1",
        chapter: 4,
        title: "谢凡的立场",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "你被邀请参加一个关于灵气复苏的研讨会。" },
            { speaker: "主持人", text: "谢凡博士，请谈谈您的看法。", emotion: "serious" },
            { speaker: "谢凡", text: "我认为，科学与修仙应该融合，而不是对立。", emotion: "serious" },
            { speaker: "谢凡", text: "每个人都有觉醒的权利，不应该被血统或出身限制。", emotion: "passionate" },
            { speaker: "传统宗门代表", text: "这是对传统的亵渎！", emotion: "angry" },
            { speaker: "谢凡", text: "这是对真理的追求。", emotion: "calm" }
        ],
        autoNext: "chapter4_2_2",
        autoDelay: 3000
    },

    "chapter4_2_2": {
        id: "chapter4_2_2",
        chapter: 4,
        title: "抉择",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "你的立场引起了各方关注。你需要做出选择。" },
            { speaker: "天机集团代表", text: "加入我们，我们有资源支持你。", emotion: "persuasive" },
            { speaker: "灵气复苏促进会", text: "和我们一起，推动修仙公开化！", emotion: "excited" }
        ],
        choices: [
            { id: "join_existing", text: "加入现有势力", style: "rational", nextNode: "chapter4_end", effects: { attributes: { money: 5000 }, flags: { joined_existing: true } } },
            { id: "create_own", text: "创建自己的组织", style: "casual", nextNode: "chapter4_end", effects: { flags: { created_own: true } } },
            { id: "stay_neutral", text: "保持中立", style: "academic", nextNode: "chapter4_end", effects: { flags: { stayed_neutral: true } } }
        ]
    },

    "chapter4_end": {
        id: "chapter4_end",
        chapter: 4,
        title: "第四章结束",
        background: "city",
        dialogues: [
            { speaker: "旁白", text: "灵气复苏改变了世界的格局。" },
            { speaker: "旁白", text: "而你，站在了这个变革的中心。" },
            { speaker: "谢凡", text: "无论选择什么，我都要坚持科学与修仙的融合。", emotion: "determined" },
            { speaker: "系统", text: "【第四章完】" }
        ],
        choices: [
            { id: "continue", text: "（继续）", style: "default", nextNode: "chapter5_start", effects: { flags: { chapter4_complete: true } } }
        ]
    },

    // ============================================
    // 第五章：踏天之路
    // ============================================

    "chapter5_start": {
        id: "chapter5_start",
        chapter: 5,
        title: "第五章：踏天之路",
        background: "bridge",
        dialogues: [
            { speaker: "旁白", text: "你来到了九座踏天桥前。" },
            { speaker: "旁白", text: "这是通往最高境界的考验。" },
            { speaker: "守桥人", text: "你准备好了吗？", emotion: "serious" },
            { speaker: "谢凡", text: "从物理学的角度来看，我准备好了。", emotion: "confident" }
        ],
        autoNext: "chapter5_1_1",
        autoDelay: 2500
    },

    "chapter5_1_1": {
        id: "chapter5_1_1",
        chapter: 5,
        title: "第一桥",
        background: "bridge",
        dialogues: [
            { speaker: "守桥人", text: "第一桥：超越知识局限。你必须承认自己的无知才能通过。", emotion: "serious" },
            { speaker: "谢凡", text: "我是博士，我承认。", emotion: "confident" },
            { speaker: "守桥人", text: "……你通过了。", emotion: "surprised" },
            { speaker: "谢凡", text: "等等，这么简单？", emotion: "surprised" },
            { speaker: "守桥人", text: "对你们这种人来说，承认无知是最难的。", emotion: "wise" }
        ],
        autoNext: "chapter5_1_2",
        autoDelay: 3000
    },

    "chapter5_1_2": {
        id: "chapter5_1_2",
        chapter: 5,
        title: "九桥考验",
        background: "bridge",
        dialogues: [
            { speaker: "旁白", text: "你接连通过了前四座桥。" },
            { speaker: "旁白", text: "第二桥：打破思维定式。" },
            { speaker: "旁白", text: "第三桥：融合对立概念。" },
            { speaker: "旁白", text: "第四桥：接受不确定性。" },
            { speaker: "谢凡", text: "薛定谔的猫既死又活……原来修仙界早就懂了。", emotion: "thinking" },
            { speaker: "旁白", text: "现在，你站在第五桥前。" }
        ],
        autoNext: "chapter5_2_1",
        autoDelay: 3000
    },

    "chapter5_2_1": {
        id: "chapter5_2_1",
        chapter: 5,
        title: "平行世界的谢凡",
        background: "bridge",
        dialogues: [
            { speaker: "守桥人", text: "第五桥：超越自我中心。", emotion: "serious" },
            { speaker: "旁白", text: "谢凡站在第五桥上，突然看到对面走来一个人。" },
            { speaker: "旁白", text: "那个人穿着普通的衬衫，手里拿着公文包，脸上带着疲惫但满足的微笑。" },
            { speaker: "旁白", text: "谢凡愣住了——那个人长得和他一模一样。" },
            { speaker: "平行谢凡", text: "你好，我是另一个你。", emotion: "calm" },
            { speaker: "谢凡", text: "另一个……我？", emotion: "shocked" },
            { speaker: "平行谢凡", text: "是的。在那个世界里，我没有去海边，没有捡到石头。我找到了一份工作，结了婚，有了孩子。平凡，但幸福。", emotion: "nostalgic" },
            { speaker: "守桥人", text: "你羡慕他吗？", emotion: "serious" }
        ],
        choices: [
            { id: "envy", text: "我羡慕你。你有稳定的工作，有家庭，有正常的生活。", style: "casual", nextNode: "chapter5_end", effects: { flags: { envied_parallel: true } } },
            { id: "no_envy", text: "不。我选择了我的路，我不后悔。", style: "rational", nextNode: "chapter5_end", effects: { flags: { no_envy: true } } },
            { id: "talk", text: "等等。我想和你聊聊。", style: "academic", nextNode: "chapter5_end", effects: { flags: { talked_parallel: true } } }
        ]
    },

    "chapter5_end": {
        id: "chapter5_end",
        chapter: 5,
        title: "第五章结束",
        background: "bridge",
        dialogues: [
            { speaker: "旁白", text: "你通过了第五桥的考验。" },
            { speaker: "旁白", text: "九座桥，你已经走过了五座。" },
            { speaker: "旁白", text: "剩下的四座，等待着你。" },
            { speaker: "谢凡", text: "无论前方是什么，我都会继续走下去。", emotion: "determined" },
            { speaker: "系统", text: "【第五章完】" }
        ],
        choices: [
            { id: "continue", text: "（继续）", style: "default", nextNode: "finale_start", effects: { flags: { chapter5_complete: true } } }
        ]
    },

    // ============================================
    // 终章：共振
    // ============================================

    "finale_start": {
        id: "finale_start",
        chapter: 6,
        title: "终章：共振",
        background: "bridge",
        dialogues: [
            { speaker: "旁白", text: "你来到了第九座踏天桥。" },
            { speaker: "守桥人", text: "你明白了什么？", emotion: "serious" },
            { speaker: "谢凡", text: "我明白了……", emotion: "thinking" }
        ],
        autoNext: "finale_1_1",
        autoDelay: 2500
    },

    "finale_1_1": {
        id: "finale_1_1",
        chapter: 6,
        title: "真相揭示",
        background: "bridge",
        dialogues: [
            { speaker: "谢凡", text: "等等……这个世界的规则，为什么恰好是我能理解的？", emotion: "realization" },
            { speaker: "守桥人", text: "……", emotion: "smile" },
            { speaker: "谢凡", text: "因为……这不是真实的世界。这是我的大脑在处理那些失败、焦虑、不甘时，编织出来的一场梦。", emotion: "sad" },
            { speaker: "守桥人", text: "那你后悔吗？", emotion: "gentle" },
            { speaker: "谢凡", text: "不。就算是梦，那些思考是真实的。那些突破是真实的。我找到的'道'，也是真实的。", emotion: "determined" }
        ],
        autoNext: "finale_1_2",
        autoDelay: 3000
    },

    "finale_1_2": {
        id: "finale_1_2",
        chapter: 6,
        title: "觉醒",
        background: "beach_dawn",
        dialogues: [
            { speaker: "旁白", text: "你成就了踏天境大圆满。" },
            { speaker: "谢凡", text: "不，我成就的是'终于想通了'。", emotion: "smile" },
            { speaker: "旁白", text: "……有区别吗？", emotion: "confused" },
            { speaker: "谢凡", text: "踏天境听起来要交社保，'想通了'不用。", emotion: "smug" },
            { speaker: "旁白", text: "谢凡醒来，海边，日出。他揉揉眼睛，低头看手机——42封拒信邮件。" },
            { speaker: "谢凡", text: "所以……我做了一个很长的梦。", emotion: "sad" }
        ],
        autoNext: "finale_2_1",
        autoDelay: 3000
    },

    "finale_2_1": {
        id: "finale_2_1",
        chapter: 6,
        title: "身体痕迹",
        background: "beach_dawn",
        dialogues: [
            { speaker: "旁白", text: "他站起来，伸了个懒腰。然后他注意到自己的手心。" },
            { speaker: "旁白", text: "手心有一个淡淡的印记，形状像一个符文。旁边还有一道浅浅的疤痕，像是被什么利器划过。" },
            { speaker: "谢凡", text: "这是什么？胎记？我以前有这个吗？", emotion: "confused" },
            { speaker: "旁白", text: "他盯着那个符文，觉得眼熟，但想不起来在哪里见过。" }
        ],
        autoNext: "finale_2_2",
        autoDelay: 3000
    },

    "finale_2_2": {
        id: "finale_2_2",
        chapter: 6,
        title: "物品痕迹",
        background: "beach_dawn",
        dialogues: [
            { speaker: "旁白", text: "谢凡把手伸进口袋，摸到了那块鹅卵石。" },
            { speaker: "旁白", text: "石头是温热的。" },
            { speaker: "谢凡", text: "……奇怪。石头怎么会是热的？", emotion: "confused" },
            { speaker: "旁白", text: "他把石头拿出来，放在手心。石头的温度渐渐消失，变回普通的石头。" },
            { speaker: "旁白", text: "但在温度消失的瞬间，他听到了海浪声——不是此刻平静的海面，而是某种更深、更远的海浪声。" },
            { speaker: "谢凡", text: "等等……这个声音……", emotion: "realization" },
            { speaker: "旁白", text: "他记得这个声音。在梦里，每次修炼时，他都会听到这个声音。" }
        ],
        autoNext: "finale_2_3",
        autoDelay: 3000
    },

    "finale_2_3": {
        id: "finale_2_3",
        chapter: 6,
        title: "知识痕迹",
        background: "beach_dawn",
        dialogues: [
            { speaker: "旁白", text: "谢凡低头看着手心的符文印记。" },
            { speaker: "旁白", text: "他突然'知道'了它的含义。不是想起来的，是'知道'的——就像你知道1+1=2一样，不需要回忆，它就在那里。" },
            { speaker: "谢凡", text: "这个符文……是'共振'的意思。", emotion: "realization" },
            { speaker: "谢凡", text: "等等。我为什么会知道这个？我从来没学过符文。这是……梦里的知识？", emotion: "shocked" },
            { speaker: "旁白", text: "他盯着那个符文，试图回忆更多。但记忆是模糊的——他记得修炼、记得突破、记得有人叫他'师兄'……但具体的人脸、地点、事件，都像是隔着一层雾。" },
            { speaker: "旁白", text: "只有这个符文，清晰地刻在他的手心，也刻在他的记忆里。" }
        ],
        autoNext: "finale_3_1",
        autoDelay: 3000
    },

    "finale_3_1": {
        id: "finale_3_1",
        chapter: 6,
        title: "真相",
        background: "beach_dawn",
        dialogues: [
            { speaker: "旁白", text: "谢凡坐在礁石上，看着日出。他把所有线索串起来：梦里的海浪声、符文印记、鹅卵石的温度、还有这个'不应该知道'的知识……" },
            { speaker: "谢凡", text: "这不是普通的梦。", emotion: "realization" },
            { speaker: "谢凡", text: "那个我……是真实存在的。他在某个地方，经历了那些事。", emotion: "emotional" },
            { speaker: "谢凡", text: "而这个符文……是他留给我的。跨越维度的……一封信。", emotion: "tearful" }
        ],
        autoNext: "finale_3_2",
        autoDelay: 3000
    },

    "finale_3_2": {
        id: "finale_3_2",
        chapter: 6,
        title: "结局",
        background: "beach_dawn",
        dialogues: [
            { speaker: "旁白", text: "谢凡把鹅卵石放进口袋，站起来。" },
            { speaker: "旁白", text: "他不再迷茫，不再自我怀疑。" },
            { speaker: "旁白", text: "他知道：梦中的经历是真实的，只是发生在另一个世界。" },
            { speaker: "谢凡", text: "我不知道你是谁。但我知道一件事：你在梦里教我的东西，是真的。", emotion: "determined" },
            { speaker: "谢凡", text: "谢谢你，另一个我。", emotion: "smile" },
            { speaker: "旁白", text: "他转身，往回走。手心的符文在阳光下微微发光。" },
            { speaker: "系统", text: "【通关】" }
        ],
        choices: [
            { id: "ending", text: "（完）", style: "default", nextNode: null, effects: { flags: { game_complete: true } } }
        ]
    }
};

// 角色数据
const characters = {
    "谢凡": { id: "xiefan", name: "谢凡", title: "理论物理学博士", color: "#3b82f6" },
    "张教授": { id: "professor_zhang", name: "张教授", title: "守夜人/退休物理学教授", color: "#10b981" },
    "旁白": { id: "narrator", name: "旁白", title: "", color: "#a0a0a0" },
    "系统": { id: "system", name: "系统", title: "", color: "#f59e0b" },

    "赵雪": { id: "zhao_xue", name: "赵雪", title: "丹鼎研究院研究员", color: "#8b5cf6" },
    "林风": { id: "lin_feng", name: "林风", title: "剑阁资本", color: "#6366f1" },
    "守桥人": { id: "bridge_keeper", name: "守桥人", title: "", color: "#f59e0b" },
    "平行谢凡": { id: "parallel_xiefan", name: "平行谢凡", title: "", color: "#6b7280" },
    "传统修仙者": { id: "traditional", name: "传统修仙者", title: "", color: "#ef4444" },
    "传统宗门代表": { id: "traditional_sect", name: "传统宗门代表", title: "", color: "#ef4444" },
    "新闻主播": { id: "news", name: "新闻主播", title: "", color: "#a0a0a0" },
    "专家A": { id: "expert_a", name: "专家A", title: "", color: "#a0a0a0" },
    "专家B": { id: "expert_b", name: "专家B", title: "", color: "#a0a0a0" },
    "专家C": { id: "expert_c", name: "专家C", title: "", color: "#a0a0a0" },
    "主持人": { id: "host", name: "主持人", title: "", color: "#a0a0a0" },
    "天机集团代表": { id: "tianji", name: "天机集团代表", title: "", color: "#3b82f6" },
    "灵气复苏促进会": { id: "revival", name: "灵气复苏促进会", title: "", color: "#10b981" }
};

// 背景场景
const backgrounds = {
    "beach_night": { name: "海边夜晚", gradient: "linear-gradient(180deg, #0f172a 0%, #1e3a5f 100%)" },
    "apartment_day": { name: "出租屋白天", gradient: "linear-gradient(180deg, #1a1a1a 0%, #252525 100%)" },
    "apartment_night": { name: "出租屋夜晚", gradient: "linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)" },
    "campus": { name: "大学校园", gradient: "linear-gradient(180deg, #1a2e1a 0%, #2a3a2a 100%)" },
    "campus_night": { name: "校园夜晚", gradient: "linear-gradient(180deg, #0f1a0f 0%, #1a2a1a 100%)" },
    "lab": { name: "实验室", gradient: "linear-gradient(180deg, #1a1a2e 0%, #2a2a3a 100%)" },
    "conference": { name: "会议室", gradient: "linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%)" },
    "city": { name: "城市", gradient: "linear-gradient(180deg, #1a1a2e 0%, #2a2a3a 100%)" },
    "bridge": { name: "九桥", gradient: "linear-gradient(180deg, #2a1a3a 0%, #3a2a4a 100%)" },
    "beach_dawn": { name: "海边黎明", gradient: "linear-gradient(180deg, #1e3a5f 0%, #f59e0b 100%)" }
};
