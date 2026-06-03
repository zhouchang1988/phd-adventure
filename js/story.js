/* ============================================
   谢凡的奇幻冒险2.0 - 完整剧情数据
   基于分镜脚本 v1.0 重写
   ============================================ */

const storyNodes = {
    // ============================================
    // 序章：海边的石头
    // ============================================

    "prologue_start": {
        id: "prologue_start",
        chapter: 0,
        title: "海边全景",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "深夜，星海市某海滩。月光洒在海面上，波光粼粼。远处是城市的灯火，近处是空旷的沙滩。" },
            { speaker: "旁白", text: "你叫谢凡，28岁，理论物理学博士，研究方向是量子引力。" },
            { speaker: "旁白", text: "或者更准确地说——曾经是。" }
        ],
        autoNext: "prologue_phone",
        autoDelay: 3000
    },

    "prologue_phone": {
        id: "prologue_phone",
        chapter: 0,
        title: "手机屏幕",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "谢凡掏出手机，屏幕亮起。显示：42封邮件（全是拒信）。" },
            { speaker: "谢凡", text: "「Re: 您的简历...」×42", emotion: "tired" },
            { speaker: "旁白", text: "手机屏幕的光照亮他疲惫的脸，黑框眼镜反射着微光。" },
            { speaker: "谢凡", text: "（又是被拒的一天……）", emotion: "tired" }
        ],
        autoNext: "prologue_discover_stone",
        autoDelay: 2500
    },

    "prologue_discover_stone": {
        id: "prologue_discover_stone",
        chapter: 0,
        title: "发现石头",
        background: "beach_night",
        effects: { shake: true },
        dialogues: [
            { speaker: "旁白", text: "谢凡漫无目的地踢着沙子，突然脚下一硌，低头一看。" },
            { speaker: "旁白", text: "一块拳头大小的石头，表面有奇异的纹路，在月光下微微发亮。" },
            { speaker: "旁白", text: "石头边缘泛着微弱的蓝光。" },
            { speaker: "谢凡", text: "这是什么？", emotion: "confused" }
        ],
        autoNext: "prologue_pick_stone",
        autoDelay: 2500
    },

    "prologue_pick_stone": {
        id: "prologue_pick_stone",
        chapter: 0,
        title: "捡起石头",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "谢凡蹲下，伸手捡起石头。手指触碰石头的瞬间，微弱蓝光闪烁。" },
            { speaker: "旁白", text: "石头入手，出乎意料地温暖。" },
            { speaker: "谢凡", text: "奇怪……石头怎么会是热的？", emotion: "confused" }
        ],
        choices: [
            { id: "choice_rational", text: "这是什么放射性物质？需要报警吗？", style: "rational", nextNode: "prologue_stone_glow", effects: { attributes: { science: 1 }, flags: { chose_rational: true } } },
            { id: "choice_casual", text: "好漂亮的石头，带回去当摆件。", style: "casual", nextNode: "prologue_stone_glow", effects: { flags: { chose_casual: true } } },
            { id: "choice_academic", text: "等等，这个纹路……像是某种分形结构？", style: "academic", nextNode: "prologue_stone_glow", effects: { attributes: { wisdom: 1 }, flags: { chose_academic: true } } }
        ]
    },

    "prologue_stone_glow": {
        id: "prologue_stone_glow",
        chapter: 0,
        title: "石头发光",
        background: "beach_night",
        effects: { flash: true },
        dialogues: [
            { speaker: "旁白", text: "无论选择什么，谢凡都会捡起石头。当他往回走时，石头突然发出柔和的蓝光。" },
            { speaker: "旁白", text: "石头的光芒突然变得强烈，从中心向外扩散。" },
            { speaker: "谢凡", text: "卧槽！真的放射性物质？！", emotion: "surprised" }
        ],
        autoNext: "prologue_text_appear",
        autoDelay: 2500
    },

    "prologue_text_appear": {
        id: "prologue_text_appear",
        chapter: 0,
        title: "文字浮现",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "石头光芒中浮现出一行文字，缓缓显现。" },
            { speaker: "系统", text: "「凝气石——修仙入门辅助工具，有效期3000年，已过期2999年。」" },
            { speaker: "谢凡", text: "……这是什么劣质营销短信？", emotion: "confused" }
        ],
        autoNext: "prologue_warmth",
        autoDelay: 2500
    },

    "prologue_warmth": {
        id: "prologue_warmth",
        chapter: 0,
        title: "暖流传递",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "石头的光芒渐渐稳定，一股奇异的暖流从手心传来。" },
            { speaker: "旁白", text: "此刻，你会——" }
        ],
        choices: [
            { id: "choice_hand_in", text: "把石头交给科研机构", style: "rational", nextNode: "prologue_bad_end", effects: { flags: { hand_in_stone: true } } },
            { id: "choice_try", text: "按照石头上的说明尝试", style: "casual", nextNode: "prologue_encounter", effects: { flags: { tried_cultivation: true } } },
            { id: "choice_search", text: "先在网上搜搜有没有人遇到过类似情况", style: "academic", nextNode: "prologue_encounter", effects: { flags: { searched_online: true } } }
        ]
    },

    "prologue_bad_end": {
        id: "prologue_bad_end",
        chapter: 0,
        title: "好公民结局",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "你把石头交给了科研机构。石头被没收了。你获得了'好公民'成就。" },
            { speaker: "系统", text: "【成就解锁：好公民】" },
            { speaker: "旁白", text: "继续失业，游戏结束。（BAD END 1）" }
        ],
        choices: [
            { id: "restart", text: "（重新开始）", style: "default", nextNode: "prologue_start", effects: {} }
        ]
    },

    "prologue_encounter": {
        id: "prologue_encounter",
        chapter: 0,
        title: "海边偶遇",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "你盘腿坐在沙滩上，按照说明调整呼吸。三分钟后，你成功感应到了灵气。也可能是腿麻了。" },
            { speaker: "旁白", text: "你正要离开，发现不远处有个人影。一个穿着老头衫、拖鞋的白发老人正坐在礁石上钓鱼。" },
            { speaker: "张教授", text: "年轻人，这么晚了还不回家？", emotion: "curious" },
            { speaker: "谢凡", text: "睡不着。", emotion: "tired" },
            { speaker: "张教授", text: "我也是。退休了反而失眠。你是附近的？", emotion: "curious" },
            { speaker: "谢凡", text: "不是，我来投简历的。没找到工作。", emotion: "sad" },
            { speaker: "旁白", text: "老人看了你一眼，目光落在你手里的石头上。" },
            { speaker: "张教授", text: "那块石头不错。留着吧。", emotion: "wise" }
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
            { speaker: "旁白", text: "谢凡拿着石头，往城市方向走去。镜头缓缓拉远，海边恢复平静。" },
            { speaker: "系统", text: "【存档点已到达】" },
            { speaker: "旁白", text: "——凝气石。" }
        ],
        choices: [
            { id: "continue", text: "（继续）", style: "default", nextNode: "chapter1_start", effects: { flags: { prologue_complete: true } } }
        ]
    },

    // ============================================
    // 第一章：这不科学
    // ============================================

    "chapter1_start": {
        id: "chapter1_start",
        chapter: 1,
        title: "海边修炼",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "谢凡按照石头上的说明，盘腿坐在沙滩上，闭眼调整呼吸。月光洒在他身上。" },
            { speaker: "旁白", text: "你闭上眼睛，专注于呼吸。" }
        ],
        autoNext: "chapter1_sense_lingqi",
        autoDelay: 2500
    },

    "chapter1_sense_lingqi": {
        id: "chapter1_sense_lingqi",
        chapter: 1,
        title: "灵气感应",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "谢凡闭着眼睛，突然眉头微皱，然后露出惊讶的表情。" },
            { speaker: "旁白", text: "周围出现微弱的蓝色光点——灵气。" },
            { speaker: "谢凡", text: "等等，这个能量波动频率……是6.626×10^-34焦耳·秒？这不是普朗克常数吗？", emotion: "surprised" }
        ],
        autoNext: "chapter1_narrator_comment",
        autoDelay: 2500
    },

    "chapter1_narrator_comment": {
        id: "chapter1_narrator_comment",
        chapter: 1,
        title: "旁白吐槽",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "你成功感应到了灵气。物理学博士的执念让你把修仙变成了实验室报告。" },
            { speaker: "谢凡", text: "我需要更多数据。这个样本量太小了。", emotion: "thinking" }
        ],
        autoNext: "chapter1_system_activate",
        autoDelay: 2500
    },

    "chapter1_system_activate": {
        id: "chapter1_system_activate",
        chapter: 1,
        title: "系统激活",
        background: "beach_night",
        effects: { flash: true },
        dialogues: [
            { speaker: "旁白", text: "石头的光芒突然增强，一个半透明的界面出现在谢凡面前。" },
            { speaker: "系统", text: "【修仙系统 v2.0】" },
            { speaker: "系统", text: "宿主：谢凡 | 境界：凡人（未入门） | 灵力：0/100 | 神识：15（博士加成+10） | 悟性：85（学霸专属） | 科理值：99（隐藏属性）" },
            { speaker: "系统", text: "【当前任务】→ 感应灵气（已完成）→ 凝气成功（0/1）" },
            { speaker: "谢凡", text: "这个UI……是用什么框架写的？", emotion: "confused" }
        ],
        autoNext: "chapter1_cultivation_start",
        autoDelay: 3000
    },

    "chapter1_cultivation_start": {
        id: "chapter1_cultivation_start",
        chapter: 1,
        title: "凝气修炼",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "你按照系统的指引，尝试凝聚灵气。" },
            { speaker: "旁白", text: "灵气在谢凡手中聚集，然后从指缝溜走。" },
            { speaker: "系统", text: "第一次尝试：失败。灵气从指缝溜走。" }
        ],
        autoNext: "chapter1_second_fail",
        autoDelay: 2500
    },

    "chapter1_second_fail": {
        id: "chapter1_second_fail",
        chapter: 1,
        title: "第二次失败",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "灵气在丹田位置转了一圈，然后跑了。" },
            { speaker: "系统", text: "第二次尝试：失败。灵气在丹田转了一圈跑了。" },
            { speaker: "谢凡", text: "等等，我换个思路。", emotion: "thinking" }
        ],
        autoNext: "chapter1_physics_approach",
        autoDelay: 2000
    },

    "chapter1_physics_approach": {
        id: "chapter1_physics_approach",
        chapter: 1,
        title: "物理学方法",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "谢凡开始用流体力学的方程描述灵气流动，用量子隧穿效应解释突破。" },
            { speaker: "旁白", text: "周围出现数学公式和图表——∇·J = -∂ρ/∂t、T = e^(-2γd)、E = ℏω" },
            { speaker: "旁白", text: "灵气成功凝聚，形成一个小小的气旋。" }
        ],
        autoNext: "chapter1_success",
        autoDelay: 3000
    },

    "chapter1_success": {
        id: "chapter1_success",
        chapter: 1,
        title: "凝气成功",
        background: "beach_night",
        effects: { flash: true },
        dialogues: [
            { speaker: "系统", text: "叮！【凝气成功】" },
            { speaker: "系统", text: "系统提示：恭喜宿主突破至凝气期一层！获得称号'理论修仙者'。" },
            { speaker: "系统", text: "【成就解锁：理论修仙者】用物理学打开修仙之门" },
            { speaker: "谢凡", text: "原来修仙就是解微分方程啊，早说嘛。", emotion: "confident" }
        ],
        autoNext: "chapter1_choice",
        autoDelay: 3000
    },

    "chapter1_choice": {
        id: "chapter1_choice",
        chapter: 1,
        title: "凝气后的选择",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "你成功凝气了。现在你面临一个选择：" }
        ],
        choices: [
            { id: "choice_paper", text: "写一篇论文《论灵气的量子力学本质》", style: "rational", nextNode: "chapter1_result_a", effects: { attributes: { science: 2 }, flags: { wrote_paper: true } } },
            { id: "choice_secret", text: "谁也不告诉，继续偷偷修炼", style: "casual", nextNode: "chapter1_result_b", effects: { attributes: { wisdom: 1 }, flags: { kept_secret: true } } },
            { id: "choice_forum", text: "在学术论坛匿名发帖讨论", style: "academic", nextNode: "chapter1_result_c", effects: { flags: { posted_forum: true } } }
        ]
    },

    "chapter1_result_a": {
        id: "chapter1_result_a",
        chapter: 1,
        title: "论文被当民科",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "论文被学术论坛当成民科，但引起'守夜人'注意。" },
            { speaker: "旁白", text: "获得：守夜人线索+1" }
        ],
        autoNext: "chapter1_end",
        autoDelay: 2500
    },

    "chapter1_result_b": {
        id: "chapter1_result_b",
        chapter: 1,
        title: "独自修炼",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "你选择独自修炼。效率较低，但很安全。" },
            { speaker: "旁白", text: "获得：隐秘+1" }
        ],
        autoNext: "chapter1_end",
        autoDelay: 2500
    },

    "chapter1_result_c": {
        id: "chapter1_result_c",
        chapter: 1,
        title: "论坛发帖",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "你被当成疯子，但有一个懂行的回复了你。" },
            { speaker: "旁白", text: "获得：潜在盟友+1" }
        ],
        autoNext: "chapter1_end",
        autoDelay: 2500
    },

    "chapter1_end": {
        id: "chapter1_end",
        chapter: 1,
        title: "第一章结束",
        background: "beach_dawn",
        dialogues: [
            { speaker: "旁白", text: "天边泛起鱼肚白，谢凡站起来，看着手里的石头。" },
            { speaker: "系统", text: "【第一章完】" }
        ],
        choices: [
            { id: "continue", text: "（继续）", style: "default", nextNode: "chapter2_start", effects: { flags: { chapter1_complete: true } } }
        ]
    },

    // ============================================
    // 第二章：师父你好
    // ============================================

    "chapter2_start": {
        id: "chapter2_start",
        chapter: 2,
        title: "教职工宿舍",
        background: "dormitory",
        dialogues: [
            { speaker: "旁白", text: "星海大学教职工宿舍，一栋老旧的居民楼。外墙有些斑驳，但阳台上的植物生机勃勃。" },
            { speaker: "旁白", text: "一个穿着老头衫、拖鞋的白发老人正在浇花。正是海边钓鱼的那位。" }
        ],
        autoNext: "chapter2_arrival",
        autoDelay: 2500
    },

    "chapter2_arrival": {
        id: "chapter2_arrival",
        chapter: 2,
        title: "初次对话",
        background: "dormitory",
        dialogues: [
            { speaker: "旁白", text: "谢凡站在宿舍楼下，抬头看着阳台上的老人。" },
            { speaker: "张教授", text: "你来了。", emotion: "calm" },
            { speaker: "谢凡", text: "您认识我？", emotion: "surprised" },
            { speaker: "张教授", text: "我认识那块石头。它等了300年，终于等到一个能用物理学理解灵气的人。", emotion: "nostalgic" },
            { speaker: "谢凡", text: "请问……您是？", emotion: "nervous" },
            { speaker: "张教授", text: "我姓张，你可以叫我张教授。退休前教量子物理的。", emotion: "calm" },
            { speaker: "谢凡", text: "……所以您也是修仙者？", emotion: "surprised" },
            { speaker: "张教授", text: "三百年前是散修，现在是退休老头。社保医保都有，就是退休金不太够。", emotion: "humorous" }
        ],
        autoNext: "chapter2_enter_home",
        autoDelay: 3000
    },

    "chapter2_enter_home": {
        id: "chapter2_enter_home",
        chapter: 2,
        title: "进入张教授家",
        background: "professor_home",
        dialogues: [
            { speaker: "旁白", text: "谢凡跟着张教授走进房间。房间不大，但书架上摆满了书，还有各种奇怪的仪器。" },
            { speaker: "张教授", text: "想拜我为师？先回答三个问题。", emotion: "serious" }
        ],
        autoNext: "chapter2_question1",
        autoDelay: 2500
    },

    "chapter2_question1": {
        id: "chapter2_question1",
        chapter: 2,
        title: "问题一：灵气的本质",
        background: "professor_home",
        dialogues: [
            { speaker: "张教授", text: "问题1：灵气的本质是什么？", emotion: "serious" }
        ],
        choices: [
            { id: "q1_particle", text: "一种未知的基本粒子", style: "rational", nextNode: "chapter2_question2", effects: { attributes: { science: 2 }, flags: { q1_correct: true } } },
            { id: "q1_dark", text: "暗能量的变体", style: "academic", nextNode: "chapter2_question2", effects: { attributes: { science: 1 }, flags: { q1_partial: true } } },
            { id: "q1_dunno", text: "我不知道", style: "casual", nextNode: "chapter2_question2", effects: { attributes: { wisdom: 2 }, flags: { q1_honest: true } } }
        ]
    },

    "chapter2_question2": {
        id: "chapter2_question2",
        chapter: 2,
        title: "问题二：隐藏身份",
        background: "professor_home",
        dialogues: [
            { speaker: "张教授", text: "问题2：为什么修仙者要隐藏身份？", emotion: "serious" }
        ],
        choices: [
            { id: "q2_research", text: "避免被研究", style: "rational", nextNode: "chapter2_question3", effects: { flags: { q2_utilitarian: true } } },
            { id: "q2_protect", text: "保护普通人", style: "casual", nextNode: "chapter2_question3", effects: { attributes: { wisdom: 1 }, flags: { q2_justice: true } } },
            { id: "q2_lazy", text: "懒得解释", style: "academic", nextNode: "chapter2_question3", effects: { flags: { q2_real: true } } }
        ]
    },

    "chapter2_question3": {
        id: "chapter2_question3",
        chapter: 2,
        title: "问题三：为什么修仙",
        background: "professor_home",
        dialogues: [
            { speaker: "张教授", text: "问题3：你为什么想修仙？", emotion: "serious" }
        ],
        choices: [
            { id: "q3_job", text: "找到工作", style: "rational", nextNode: "chapter2_evaluation", effects: { flags: { q3_realistic: true } } },
            { id: "q3_understand", text: "理解世界", style: "academic", nextNode: "chapter2_evaluation", effects: { attributes: { wisdom: 2 }, flags: { q3_ideal: true } } },
            { id: "q3_casual", text: "来都来了", style: "casual", nextNode: "chapter2_evaluation", effects: { flags: { q3_buddha: true } } }
        ]
    },

    "chapter2_evaluation": {
        id: "chapter2_evaluation",
        chapter: 2,
        title: "张教授评价",
        background: "professor_home",
        dialogues: [
            { speaker: "张教授", text: "不错，有科学家的潜质。", emotion: "approving" },
            { speaker: "旁白", text: "张教授带你参观他的'工作室'——其实就是客厅。角落里坐着一个年轻女生，正在看一本《量子力学导论》。" }
        ],
        autoNext: "chapter2_meet_zhaoxue",
        autoDelay: 2500
    },

    "chapter2_meet_zhaoxue": {
        id: "chapter2_meet_zhaoxue",
        chapter: 2,
        title: "遇见赵雪",
        background: "professor_home",
        dialogues: [
            { speaker: "张教授", text: "这是我另一个学生，赵雪。比你早入门三个月。", emotion: "calm" },
            { speaker: "赵雪", text: "你就是那个用物理学修仙的人？张老师说了一周了。", emotion: "curious" },
            { speaker: "谢凡", text: "你也是物理学专业的？", emotion: "surprised" },
            { speaker: "赵雪", text: "天体物理。我在研究灵气和暗物质的关系。", emotion: "proud" },
            { speaker: "张教授", text: "你们俩可以多交流。我老了，脑子转不动了。", emotion: "humorous" }
        ],
        autoNext: "chapter2_cat_appear",
        autoDelay: 3000
    },

    "chapter2_cat_appear": {
        id: "chapter2_cat_appear",
        chapter: 2,
        title: "灵猫小白",
        background: "professor_home",
        dialogues: [
            { speaker: "旁白", text: "你正要离开，一只白色流浪猫跳上窗台。" },
            { speaker: "旁白", text: "白猫、蓝眼睛、高冷地看着你。然后它跳到你的肩膀上。" },
            { speaker: "系统", text: "【灵猫小白】成为你的伙伴。修炼时灵气吸收+5%。" }
        ],
        autoNext: "chapter2_cat_comment",
        autoDelay: 2500
    },

    "chapter2_cat_comment": {
        id: "chapter2_cat_comment",
        chapter: 2,
        title: "吐槽宠物",
        background: "professor_home",
        dialogues: [
            { speaker: "谢凡", text: "它……能帮我修炼？", emotion: "confused" },
            { speaker: "张教授", text: "不能。但它会在你修炼时睡觉。据说能吸收溢出的灵气。", emotion: "calm" },
            { speaker: "谢凡", text: "……所以是吉祥物？", emotion: "confused" },
            { speaker: "张教授", text: "可以这么理解。", emotion: "humorous" }
        ],
        autoNext: "chapter2_final_choice",
        autoDelay: 2500
    },

    "chapter2_final_choice": {
        id: "chapter2_final_choice",
        chapter: 2,
        title: "最终抉择",
        background: "professor_home",
        dialogues: [
            { speaker: "张教授", text: "最后一个问题——你愿意正式拜入守夜人吗？", emotion: "serious" }
        ],
        choices: [
            { id: "accept_master", text: "师父在上，请受徒儿一拜！", style: "rational", nextNode: "chapter2_result_a", effects: { relationships: { professor_zhang: 10 }, flags: { accepted_master: true } } },
            { id: "self_study", text: "我想先自己研究研究。", style: "casual", nextNode: "chapter2_result_b", effects: { flags: { self_study: true } } },
            { id: "sign_contract", text: "我们签个合同吧，明确双方权利义务。", style: "academic", nextNode: "chapter2_result_c", effects: { flags: { signed_contract: true } } }
        ]
    },

    "chapter2_result_a": {
        id: "chapter2_result_a",
        chapter: 2,
        title: "正式拜师",
        background: "professor_home",
        dialogues: [
            { speaker: "旁白", text: "谢凡跪下，张教授扶起他。" },
            { speaker: "张教授", text: "好，从今天起，你就是我的徒弟了。", emotion: "touched" },
            { speaker: "旁白", text: "获得：师父好感+10，守夜人声望+5" }
        ],
        autoNext: "chapter2_end",
        autoDelay: 2500
    },

    "chapter2_result_b": {
        id: "chapter2_result_b",
        chapter: 2,
        title: "自学成才",
        background: "professor_home",
        dialogues: [
            { speaker: "旁白", text: "张教授从书架上拿下一本书，递给谢凡。" },
            { speaker: "张教授", text: "这本书你拿去看。有问题再来找我。", emotion: "calm" },
            { speaker: "系统", text: "获得道具：《修仙入门（第300版）》" },
            { speaker: "旁白", text: "获得：自由度+1，但后续需要自己摸索" }
        ],
        autoNext: "chapter2_end",
        autoDelay: 2500
    },

    "chapter2_result_c": {
        id: "chapter2_result_c",
        chapter: 2,
        title: "签合同",
        background: "professor_home",
        dialogues: [
            { speaker: "旁白", text: "张教授愣住，然后大笑。" },
            { speaker: "张教授", text: "三百年了，终于遇到一个比我还较真的！", emotion: "laughing" },
            { speaker: "系统", text: "【成就解锁：合同狂魔】法务精神永存" },
            { speaker: "旁白", text: "获得：隐藏剧情线索+1" }
        ],
        autoNext: "chapter2_end",
        autoDelay: 2500
    },

    "chapter2_end": {
        id: "chapter2_end",
        chapter: 2,
        title: "第二章结束",
        background: "dormitory",
        dialogues: [
            { speaker: "旁白", text: "谢凡走出宿舍楼，小白跳到他肩膀上。天色已晚。" },
            { speaker: "系统", text: "【第二章完】" }
        ],
        choices: [
            { id: "continue", text: "（继续）", style: "default", nextNode: "chapter3_start", effects: { flags: { chapter2_complete: true } } }
        ]
    },

    // ============================================
    // 第三章：双重生活
    // ============================================

    "chapter3_start": {
        id: "chapter3_start",
        chapter: 3,
        title: "周一早上",
        background: "apartment_day",
        dialogues: [
            { speaker: "旁白", text: "一栋老旧的居民楼，谢凡的窗户亮着灯。" },
            { speaker: "旁白", text: "谢凡正在修炼，门被拍响了。" },
            { speaker: "旁白", text: "敲门声急促。" }
        ],
        autoNext: "chapter3_landlord",
        autoDelay: 2500
    },

    "chapter3_landlord": {
        id: "chapter3_landlord",
        chapter: 3,
        title: "房东王阿姨",
        background: "apartment_day",
        dialogues: [
            { speaker: "旁白", text: "王阿姨站在门口，一脸凶相。卷发、围裙、手里总拿着锅铲。" },
            { speaker: "王阿姨", text: "小谢！房租该交了！拖了两周了！", emotion: "angry" },
            { speaker: "谢凡", text: "阿姨，我下周一定……", emotion: "nervous" },
            { speaker: "王阿姨", text: "你每个月都说下周！你一个博士，怎么连房租都交不起？", emotion: "angry" },
            { speaker: "谢凡", text: "我在研究一个新项目……", emotion: "nervous" },
            { speaker: "王阿姨", text: "研究什么？研究怎么不交房租？", emotion: "sarcastic" }
        ],
        autoNext: "chapter3_landlord_choice",
        autoDelay: 3000
    },

    "chapter3_landlord_choice": {
        id: "chapter3_landlord_choice",
        chapter: 3,
        title: "应对房东",
        background: "apartment_day",
        dialogues: [
            { speaker: "旁白", text: "你灵机一动——" }
        ],
        choices: [
            { id: "choice_honest", text: "阿姨，我在修仙。", style: "casual", nextNode: "chapter3_landlord_result_a", effects: { relationships: { wang_ayi: 1 }, flags: { told_landlord: true } } },
            { id: "choice_lie", text: "我找到工作了，下个月发工资就交。", style: "rational", nextNode: "chapter3_landlord_result_b", effects: { flags: { lied_landlord: true } } },
            { id: "choice_redirect", text: "阿姨，您最近身体怎么样？我帮您看看？", style: "academic", nextNode: "chapter3_landlord_result_c", effects: { relationships: { wang_ayi: 3 }, flags: { helped_landlord: true } } }
        ]
    },

    "chapter3_landlord_result_a": {
        id: "chapter3_landlord_result_a",
        chapter: 3,
        title: "坦白修仙",
        background: "apartment_day",
        dialogues: [
            { speaker: "旁白", text: "王阿姨愣住，然后露出关心的表情。" },
            { speaker: "王阿姨", text: "你是不是压力太大了？阿姨给你下碗面。", emotion: "caring" },
            { speaker: "旁白", text: "获得：一碗面，王阿姨好感+1" }
        ],
        autoNext: "chapter3_li_ming",
        autoDelay: 2500
    },

    "chapter3_landlord_result_b": {
        id: "chapter3_landlord_result_b",
        chapter: 3,
        title: "撒谎",
        background: "apartment_day",
        dialogues: [
            { speaker: "谢凡", text: "我找到工作了，下个月发工资就交。", emotion: "nervous" },
            { speaker: "王阿姨", text: "真的？什么公司？", emotion: "suspicious" },
            { speaker: "旁白", text: "50%概率被识破。王阿姨半信半疑。" }
        ],
        autoNext: "chapter3_li_ming",
        autoDelay: 2500
    },

    "chapter3_landlord_result_c": {
        id: "chapter3_landlord_result_c",
        chapter: 3,
        title: "神识扫描",
        background: "apartment_day",
        dialogues: [
            { speaker: "旁白", text: "谢凡用神识扫描王阿姨，发现她有轻微风湿。" },
            { speaker: "谢凡", text: "阿姨，您是不是膝盖经常疼？我有个方法可以帮您缓解。", emotion: "caring" },
            { speaker: "王阿姨", text: "你怎么知道的？", emotion: "surprised" },
            { speaker: "旁白", text: "获得：王阿姨好感+3，解锁隐藏剧情" }
        ],
        autoNext: "chapter3_li_ming",
        autoDelay: 2500
    },

    "chapter3_li_ming": {
        id: "chapter3_li_ming",
        chapter: 3,
        title: "同学李明",
        background: "apartment_day",
        dialogues: [
            { speaker: "旁白", text: "手机屏幕亮起，显示微信消息。" },
            { speaker: "李明", text: "凡哥，最近怎么样？我这边有个内推机会，你要不要试试？", emotion: "casual" },
            { speaker: "旁白", text: "李明现在是某大厂程序员，月薪30k，经常996。" },
            { speaker: "谢凡", text: "什么岗位？", emotion: "curious" },
            { speaker: "李明", text: "飞机设计工程师。你不是学物理的吗？航空航天很合适的。", emotion: "casual" },
            { speaker: "李明", text: "对了，我妈同事的女儿也在星海，要不要认识一下？", emotion: "casual" }
        ],
        autoNext: "chapter3_li_ming_choice",
        autoDelay: 3000
    },

    "chapter3_li_ming_choice": {
        id: "chapter3_li_ming_choice",
        chapter: 3,
        title: "李明的邀请",
        background: "apartment_day",
        dialogues: [
            { speaker: "旁白", text: "李明给你发来了工作机会和相亲介绍。" }
        ],
        choices: [
            { id: "choice_accept_job", text: "行，简历发你。", style: "rational", nextNode: "chapter3_interview_intro", effects: { flags: { accepted_referral: true } } },
            { id: "choice_accept_blind", text: "照片先看看？", style: "casual", nextNode: "chapter3_interview_intro", effects: { flags: { accepted_blind_date: true } } },
            { id: "choice_accept_both", text: "都可以，谢谢老李。", style: "academic", nextNode: "chapter3_interview_intro", effects: { flags: { accepted_referral: true, accepted_blind_date: true } } },
            { id: "choice_reject_both", text: "我再想想。", style: "casual", nextNode: "chapter3_interview_intro", effects: { flags: { rejected_li_ming: true } } }
        ]
    },

    "chapter3_interview_intro": {
        id: "chapter3_interview_intro",
        chapter: 3,
        title: "面试",
        background: "tech_company",
        dialogues: [
            { speaker: "旁白", text: "一栋现代化的玻璃大楼，门口挂着公司logo。" },
            { speaker: "旁白", text: "谢凡坐在面试官老周对面。老周秃顶，眼神锐利。" },
            { speaker: "面试官老周", text: "谢凡是吧？理论物理博士？为什么想转行？", emotion: "serious" },
            { speaker: "谢凡", text: "我想……用物理学的方法解决实际问题。", emotion: "nervous" },
            { speaker: "面试官老周", text: "哦？比如？", emotion: "curious" }
        ],
        autoNext: "chapter3_interview_choice",
        autoDelay: 3000
    },

    "chapter3_interview_choice": {
        id: "chapter3_interview_choice",
        chapter: 3,
        title: "面试回答",
        background: "tech_company",
        dialogues: [
            { speaker: "旁白", text: "你想起修仙——" }
        ],
        choices: [
            { id: "choice_honest_answer", text: "比如……能量转换和信息处理？", style: "academic", nextNode: "chapter3_thief_intro", effects: { relationships: { lao_zhou: 5 }, flags: { interview_honest: true } } },
            { id: "choice_formula", text: "比如机器学习和数据建模。", style: "rational", nextNode: "chapter3_thief_intro", effects: { flags: { interview_formula: true } } },
            { id: "choice_bold", text: "比如……如何让人类突破认知边界？", style: "casual", nextNode: "chapter3_thief_intro", effects: { relationships: { lao_zhou: 10 }, flags: { interview_bold: true } } }
        ]
    },

    "chapter3_thief_intro": {
        id: "chapter3_thief_intro",
        chapter: 3,
        title: "夜晚街道",
        background: "street_night",
        dialogues: [
            { speaker: "旁白", text: "谢凡走在夜晚的街道上，路灯昏暗。" },
            { speaker: "旁白", text: "谢凡看到一个人影在偷东西。" },
            { speaker: "系统", text: "是否使用修仙能力？" }
        ],
        autoNext: "chapter3_thief_choice",
        autoDelay: 2500
    },

    "chapter3_thief_choice": {
        id: "chapter3_thief_choice",
        chapter: 3,
        title: "面对小偷",
        background: "street_night",
        dialogues: [
            { speaker: "旁白", text: "你面临选择。" }
        ],
        choices: [
            { id: "choice_action", text: "使用凝气术制服小偷", style: "rational", nextNode: "chapter3_thief_result_a", effects: { flags: { used_cultivation_public: true } } },
            { id: "choice_police", text: "正常报警处理", style: "casual", nextNode: "chapter3_thief_result_b", effects: { flags: { called_police: true } } },
            { id: "choice_follow", text: "暗中跟踪小偷", style: "academic", nextNode: "chapter3_lin_feng", effects: { flags: { followed_thief: true } } }
        ]
    },

    "chapter3_thief_result_a": {
        id: "chapter3_thief_result_a",
        chapter: 3,
        title: "气功大师",
        background: "street_night",
        dialogues: [
            { speaker: "旁白", text: "成功制服小偷，但被当成'气功大师'。" },
            { speaker: "系统", text: "新闻标题：《震惊！男子徒手制服小偷，疑似失传气功》" }
        ],
        autoNext: "chapter3_blind_date",
        autoDelay: 2500
    },

    "chapter3_thief_result_b": {
        id: "chapter3_thief_result_b",
        chapter: 3,
        title: "报警处理",
        background: "street_night",
        dialogues: [
            { speaker: "旁白", text: "小偷被警察带走。" },
            { speaker: "旁白", text: "你想起师父说过，修仙者不能随意暴露身份。" }
        ],
        autoNext: "chapter3_blind_date",
        autoDelay: 2500
    },

    "chapter3_lin_feng": {
        id: "chapter3_lin_feng",
        chapter: 3,
        title: "落魄修士",
        background: "basement",
        dialogues: [
            { speaker: "旁白", text: "谢凡跟踪小偷到一个破旧地下室。" },
            { speaker: "旁白", text: "小偷发现你，身上有微弱灵气。" },
            { speaker: "林风", text: "你是谁？", emotion: "alert" },
            { speaker: "林风", text: "我偷东西是因为……我妈生病了。需要钱。", emotion: "sad" },
            { speaker: "林风", text: "我修仙三年，连凝气期都没突破。没有师承，没有资源。", emotion: "helpless" }
        ],
        autoNext: "chapter3_lin_feng_choice",
        autoDelay: 3000
    },

    "chapter3_lin_feng_choice": {
        id: "chapter3_lin_feng_choice",
        chapter: 3,
        title: "帮助林风",
        background: "basement",
        dialogues: [
            { speaker: "旁白", text: "你面临选择。" }
        ],
        choices: [
            { id: "choice_money", text: "我借你钱。不用偷了。", style: "rational", nextNode: "chapter3_blind_date", effects: { relationships: { lin_feng: 10 }, attributes: { money: -2000 }, flags: { helped_lin_feng_money: true } } },
            { id: "choice_teach", text: "我教你修炼。", style: "academic", nextNode: "chapter3_blind_date", effects: { relationships: { lin_feng: 5 }, flags: { taught_lin_feng: true } } },
            { id: "choice_introduce", text: "我介绍你认识张教授。", style: "casual", nextNode: "chapter3_blind_date", effects: { flags: { introduced_lin_feng: true } } },
            { id: "choice_refuse", text: "每个人都有难处，但偷窃不对。", style: "rational", nextNode: "chapter3_blind_date", effects: { relationships: { lin_feng: -5 }, flags: { refused_lin_feng: true } } }
        ]
    },

    "chapter3_blind_date": {
        id: "chapter3_blind_date",
        chapter: 3,
        title: "相亲",
        background: "cafe",
        dialogues: [
            { speaker: "旁白", text: "如果接受了相亲，李明会安排你和小雨见面。" },
            { speaker: "旁白", text: "小雨坐在对面，开朗地笑着。长发、笑容开朗、时尚。" },
            { speaker: "小雨", text: "听李明说你是博士？好厉害啊！", emotion: "excited" },
            { speaker: "谢凡", text: "也没什么……还在找工作。", emotion: "modest" },
            { speaker: "小雨", text: "没关系啊，慢慢找。你平时有什么爱好？", emotion: "curious" }
        ],
        autoNext: "chapter3_blind_date_choice",
        autoDelay: 3000
    },

    "chapter3_blind_date_choice": {
        id: "chapter3_blind_date_choice",
        chapter: 3,
        title: "相亲回答",
        background: "cafe",
        dialogues: [
            { speaker: "旁白", text: "你想起修仙——" }
        ],
        choices: [
            { id: "choice_cultivation_honest", text: "我……在修仙。", style: "casual", nextNode: "chapter3_offer", effects: { relationships: { xiao_yu: 1 }, flags: { blind_date_honest: true } } },
            { id: "choice_book", text: "没什么特别的，看看书。", style: "rational", nextNode: "chapter3_offer", effects: { flags: { blind_date_vague: true } } },
            { id: "choice_redirect_yu", text: "你呢？你有什么爱好？", style: "academic", nextNode: "chapter3_offer", effects: { relationships: { xiao_yu: 3 }, flags: { blind_date_redirect: true } } }
        ]
    },

    "chapter3_offer": {
        id: "chapter3_offer",
        chapter: 3,
        title: "收到offer",
        background: "apartment_day",
        dialogues: [
            { speaker: "旁白", text: "谢凡收到一家科技公司的offer邮件。" },
            { speaker: "系统", text: "offer：飞机设计工程师，薪资15k/月，要求全职，经常加班" }
        ],
        autoNext: "chapter3_final_choice",
        autoDelay: 2500
    },

    "chapter3_final_choice": {
        id: "chapter3_final_choice",
        chapter: 3,
        title: "最终抉择",
        background: "apartment_day",
        dialogues: [
            { speaker: "旁白", text: "你收到了一家科技公司的offer。此刻，你会——" }
        ],
        choices: [
            { id: "choice_accept_offer", text: "先干着，修仙可以晚上来", style: "rational", nextNode: "chapter3_result_a", effects: { attributes: { money: 15000 }, flags: { accepted_offer: true } } },
            { id: "choice_decline_offer", text: "我要专心修仙", style: "casual", nextNode: "chapter3_result_b", effects: { flags: { declined_offer: true } } },
            { id: "choice_negotiate", text: "可以远程办公吗？", style: "academic", nextNode: "chapter3_result_c", effects: { flags: { negotiated_offer: true } } }
        ]
    },

    "chapter3_result_a": {
        id: "chapter3_result_a",
        chapter: 3,
        title: "接受工作",
        background: "office",
        dialogues: [
            { speaker: "旁白", text: "你接受了工作。开始上班，修炼时间减少。" },
            { speaker: "系统", text: "获得：经济独立，但修炼速度-50%" },
            { speaker: "系统", text: "【成就解锁：社畜修仙者】修仙也要吃饭" }
        ],
        autoNext: "chapter3_end",
        autoDelay: 2500
    },

    "chapter3_result_b": {
        id: "chapter3_result_b",
        chapter: 3,
        title: "拒绝工作",
        background: "apartment_day",
        dialogues: [
            { speaker: "旁白", text: "你拒绝了工作。全职修炼，进度飞快。" },
            { speaker: "系统", text: "获得：修炼速度+100%，但经济来源断裂" }
        ],
        autoNext: "chapter3_end",
        autoDelay: 2500
    },

    "chapter3_result_c": {
        id: "chapter3_result_c",
        chapter: 3,
        title: "谈判远程",
        background: "office",
        dialogues: [
            { speaker: "旁白", text: "HR愣住，然后笑了。" },
            { speaker: "HR", text: "你是第一个面试敢提这种要求的。", emotion: "amused" },
            { speaker: "旁白", text: "50%概率获得弹性工作，50%概率被拒。" }
        ],
        autoNext: "chapter3_end",
        autoDelay: 2500
    },

    "chapter3_end": {
        id: "chapter3_end",
        chapter: 3,
        title: "第三章结束",
        background: "city",
        dialogues: [
            { speaker: "旁白", text: "城市灯火通明，谢凡的窗户亮着灯。" },
            { speaker: "系统", text: "【第三章完】" }
        ],
        choices: [
            { id: "continue", text: "（继续）", style: "default", nextNode: "chapter4_start", effects: { flags: { chapter3_complete: true } } }
        ]
    },

    // ============================================
    // 第四章：论道
    // ============================================

    "chapter4_start": {
        id: "chapter4_start",
        chapter: 4,
        title: "会议室门口",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "谢凡手里拿着PPT，站在会议室门口。张教授和赵雪在旁边。" },
            { speaker: "张教授", text: "紧张吗？", emotion: "calm" },
            { speaker: "谢凡", text: "有一点。我怕他们听不懂。", emotion: "nervous" },
            { speaker: "张教授", text: "不，你怕他们听懂了然后打你。", emotion: "humorous" },
            { speaker: "赵雪", text: "别怕，我帮你。我做了一些补充数据。", emotion: "supportive" },
            { speaker: "张教授", text: "今天刘天师也会来。他是传统派的代表，最讨厌用科学解释修仙。", emotion: "serious" },
            { speaker: "谢凡", text: "那我岂不是很危险？", emotion: "worried" },
            { speaker: "张教授", text: "放心，守夜人老陈也会来。他是组织纪律的维护者，不会让场面失控。", emotion: "calm" }
        ],
        autoNext: "chapter4_enter_hall",
        autoDelay: 3000
    },

    "chapter4_enter_hall": {
        id: "chapter4_enter_hall",
        chapter: 4,
        title: "进入会场",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "谢凡走进会议室，台下坐满了人。" },
            { speaker: "旁白", text: "传统修仙者一脸不屑，年轻修士好奇，守夜人代表老陈面无表情。" },
            { speaker: "刘天师", text: "这就是那个用物理学修仙的黄口小儿？", emotion: "disdainful" },
            { speaker: "刘天师", text: "灵气是天地之气，玄之又玄，岂是你能用公式解释的？", emotion: "angry" }
        ],
        autoNext: "chapter4_liu_choice",
        autoDelay: 3000
    },

    "chapter4_liu_choice": {
        id: "chapter4_liu_choice",
        chapter: 4,
        title: "面对刘天师",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "此刻，你会——" }
        ],
        choices: [
            { id: "choice_fight", text: "前辈，科学的本质就是探索未知。灵气也不例外。", style: "rational", nextNode: "chapter4_speech", effects: { relationships: { liu_tianshi: -10 }, flags: { confronted_liu: true } } },
            { id: "choice_humble", text: "前辈说得对，我这只是个人浅见。", style: "casual", nextNode: "chapter4_speech", effects: { relationships: { liu_tianshi: 5 }, flags: { humbled_liu: true } } },
            { id: "choice_experiment", text: "不如我们做个实验？用事实说话。", style: "academic", nextNode: "chapter4_speech", effects: { flags: { invited_experiment: true } } }
        ]
    },

    "chapter4_speech": {
        id: "chapter4_speech",
        chapter: 4,
        title: "学术演讲",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "谢凡打开PPT，开始演讲。" },
            { speaker: "系统", text: "PPT标题：《论灵气的量子力学本质——一个物理学博士的修仙报告》" },
            { speaker: "谢凡", text: "各位前辈，我今天要论证的是——灵气不是玄学，而是一种尚未被发现的玻色子……", emotion: "serious" },
            { speaker: "旁白", text: "台下开始骚动。" },
            { speaker: "刘天师", text: "胡说八道！", emotion: "angry" },
            { speaker: "老陈", text: "让他讲完。守夜人的规矩，论道不封口。", emotion: "strict" }
        ],
        autoNext: "chapter4_continue_speech",
        autoDelay: 3000
    },

    "chapter4_continue_speech": {
        id: "chapter4_continue_speech",
        chapter: 4,
        title: "演讲结束",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "谢凡继续讲，赵雪在台下帮他放数据图表。" },
            { speaker: "旁白", text: "讲完后——" }
        ],
        choices: [
            { id: "choice_accept_qa", text: "欢迎提问。", style: "rational", nextNode: "chapter4_chen_talk", effects: { attributes: { wisdom: 2 }, flags: { accepted_qa: true } } },
            { id: "choice_challenge", text: "我知道大家不信，不如现场验证？", style: "casual", nextNode: "chapter4_chen_talk", effects: { flags: { challenged_audience: true } } },
            { id: "choice_modest", text: "这只是我的猜想，还需要更多研究。", style: "academic", nextNode: "chapter4_chen_talk", effects: { flags: { modest_speech: true } } }
        ]
    },

    "chapter4_chen_talk": {
        id: "chapter4_chen_talk",
        chapter: 4,
        title: "老陈找谢凡",
        background: "conference",
        dialogues: [
            { speaker: "老陈", text: "谢凡，你的研究很有意思。但守夜人有规矩——不能公开传播修仙知识。", emotion: "strict" },
            { speaker: "谢凡", text: "我只是在学术圈讨论……", emotion: "nervous" },
            { speaker: "老陈", text: "学术圈也是公开场合。", emotion: "strict" },
            { speaker: "老陈", text: "张教授推荐你加入守夜人。但你需要通过考核。", emotion: "serious" }
        ],
        autoNext: "chapter4_invitations",
        autoDelay: 3000
    },

    "chapter4_invitations": {
        id: "chapter4_invitations",
        chapter: 4,
        title: "多方邀请",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "演讲结束后，多个势力找到谢凡。" },
            { speaker: "天机集团HR", text: "谢凡先生，我们CEO想见你。天机集团是修仙界最大的企业，资源无限。", emotion: "persuasive" },
            { speaker: "剑阁资本代表", text: "我们想投资你的研究。给你实验室、设备、经费。", emotion: "persuasive" },
            { speaker: "灵气复苏促进会", text: "加入我们，一起改变世界！理想主义万岁！", emotion: "excited" }
        ],
        autoNext: "chapter4_final_choice",
        autoDelay: 3000
    },

    "chapter4_final_choice": {
        id: "chapter4_final_choice",
        chapter: 4,
        title: "最终抉择",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "多个势力找到你，邀请你加入。" }
        ],
        choices: [
            { id: "choice_tianji", text: "加入天机集团", style: "rational", nextNode: "chapter4_result_a", effects: { attributes: { money: 5000 }, flags: { joined_tianji: true } } },
            { id: "choice_jiange", text: "接受剑阁投资", style: "academic", nextNode: "chapter4_result_b", effects: { attributes: { money: 10000 }, flags: { accepted_jiange: true } } },
            { id: "choice_promotion", text: "加入灵气复苏促进会", style: "casual", nextNode: "chapter4_result_c", effects: { flags: { joined_promotion: true } } },
            { id: "choice_independent", text: "保持独立，谁也不跟", style: "rational", nextNode: "chapter4_result_d", effects: { flags: { stayed_independent: true } } }
        ]
    },

    "chapter4_result_a": {
        id: "chapter4_result_a",
        chapter: 4,
        title: "加入天机集团",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "你加入了天机集团。获得了稳定资源，但自由度降低。" },
            { speaker: "系统", text: "获得：稳定资源，但自由度-30%" }
        ],
        autoNext: "chapter4_end",
        autoDelay: 2500
    },

    "chapter4_result_b": {
        id: "chapter4_result_b",
        chapter: 4,
        title: "接受剑阁投资",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "你接受了剑阁投资。获得了资金支持，但有KPI压力。" },
            { speaker: "系统", text: "获得：资金支持，但有KPI压力" }
        ],
        autoNext: "chapter4_end",
        autoDelay: 2500
    },

    "chapter4_result_c": {
        id: "chapter4_result_c",
        chapter: 4,
        title: "加入促进会",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "你加入了灵气复苏促进会。获得了志同道合的伙伴，但发展缓慢。" },
            { speaker: "系统", text: "获得：志同道合的伙伴，但发展缓慢" }
        ],
        autoNext: "chapter4_end",
        autoDelay: 2500
    },

    "chapter4_result_d": {
        id: "chapter4_result_d",
        chapter: 4,
        title: "保持独立",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "你保持独立。获得了完全自由，但举步维艰。" },
            { speaker: "系统", text: "获得：完全自由，但举步维艰" }
        ],
        autoNext: "chapter4_end",
        autoDelay: 2500
    },

    "chapter4_end": {
        id: "chapter4_end",
        chapter: 4,
        title: "第四章结束",
        background: "conference",
        dialogues: [
            { speaker: "旁白", text: "谢凡走出会议室，天色已晚。" },
            { speaker: "系统", text: "【第四章完】" }
        ],
        choices: [
            { id: "continue", text: "（继续）", style: "default", nextNode: "chapter5_start", effects: { flags: { chapter4_complete: true } } }
        ]
    },

    // ============================================
    // 第五章：踏天
    // ============================================

    "chapter5_start": {
        id: "chapter5_start",
        chapter: 5,
        title: "九桥全景",
        background: "nine_bridges",
        dialogues: [
            { speaker: "旁白", text: "九座桥悬浮在云端，每座桥颜色不同，通向不同的方向。" },
            { speaker: "旁白", text: "你来到了九座踏天桥前。这是通往最高境界的考验。" }
        ],
        autoNext: "chapter5_bridge1",
        autoDelay: 3000
    },

    "chapter5_bridge1": {
        id: "chapter5_bridge1",
        chapter: 5,
        title: "第一桥·无知之桥",
        background: "nine_bridges",
        dialogues: [
            { speaker: "守桥人", text: "要过此桥，你必须承认自己的无知。", emotion: "serious" },
            { speaker: "谢凡", text: "我是博士，我承认。", emotion: "confident" },
            { speaker: "守桥人", text: "……你通过了。", emotion: "surprised" },
            { speaker: "谢凡", text: "等等，这么简单？", emotion: "surprised" },
            { speaker: "守桥人", text: "对你们这种人来说，承认无知是最难的。", emotion: "wise" }
        ],
        autoNext: "chapter5_bridge2",
        autoDelay: 3000
    },

    "chapter5_bridge2": {
        id: "chapter5_bridge2",
        chapter: 5,
        title: "第二桥·思维之桥",
        background: "nine_bridges",
        dialogues: [
            { speaker: "守桥人", text: "打破你的思维定式。", emotion: "serious" },
            { speaker: "旁白", text: "你面前出现一道题：如何用一根绳子测量地球周长？" }
        ],
        choices: [
            { id: "choice_traditional", text: "用影子和比例计算（传统方法）", style: "rational", nextNode: "chapter5_bridge3", effects: { flags: { bridge2_traditional: true } } },
            { id: "choice_physics_method", text: "用万有引力常数推算（物理学方法）", style: "academic", nextNode: "chapter5_bridge3", effects: { flags: { bridge2_physics: true } } },
            { id: "choice_cultivation_method", text: "用神识扫描全球（修仙方法）", style: "casual", nextNode: "chapter5_bridge3", effects: { flags: { bridge2_cheat: true } } }
        ]
    },

    "chapter5_bridge3": {
        id: "chapter5_bridge3",
        chapter: 5,
        title: "第三桥·融合之桥",
        background: "nine_bridges",
        dialogues: [
            { speaker: "守桥人", text: "科学和玄学，是一体的吗？", emotion: "serious" },
            { speaker: "旁白", text: "谢凡沉思。你想起：用量子纠缠解释神识、用热力学理解天人五衰、用相对论突破空间限制。" },
            { speaker: "谢凡", text: "不是一体的，但可以互相解释。就像波粒二象性——它们是同一个真相的不同面向。", emotion: "thinking" },
            { speaker: "守桥人", text: "你悟了。", emotion: "smile" }
        ],
        autoNext: "chapter5_bridge4",
        autoDelay: 3000
    },

    "chapter5_bridge4": {
        id: "chapter5_bridge4",
        chapter: 5,
        title: "第四桥·不确定之桥",
        background: "nine_bridges",
        dialogues: [
            { speaker: "守桥人", text: "接受不确定性。薛定谔的猫既死又活，你呢？", emotion: "serious" },
            { speaker: "旁白", text: "你选择：接受自己既是博士也是修仙者。" },
            { speaker: "谢凡", text: "薛定谔的猫既死又活……原来修仙界早就懂了。", emotion: "thinking" }
        ],
        autoNext: "chapter5_bridge5_intro",
        autoDelay: 3000
    },

    "chapter5_bridge5_intro": {
        id: "chapter5_bridge5_intro",
        chapter: 5,
        title: "第五桥·自我之桥",
        background: "nine_bridges",
        dialogues: [
            { speaker: "守桥人", text: "第五桥：超越自我中心。", emotion: "serious" },
            { speaker: "旁白", text: "谢凡站在第五桥上，突然看到对面走来一个人。" },
            { speaker: "旁白", text: "那个人穿着普通的衬衫，手里拿着公文包，脸上带着疲惫但满足的微笑。" },
            { speaker: "旁白", text: "谢凡愣住了——那个人长得和他一模一样。" }
        ],
        autoNext: "chapter5_parallel_talk",
        autoDelay: 3000
    },

    "chapter5_parallel_talk": {
        id: "chapter5_parallel_talk",
        chapter: 5,
        title: "平行谢凡",
        background: "nine_bridges",
        dialogues: [
            { speaker: "平行谢凡", text: "你好，我是另一个你。", emotion: "calm" },
            { speaker: "谢凡", text: "另一个……我？", emotion: "shocked" },
            { speaker: "平行谢凡", text: "是的。在那个世界里，我没有去海边，没有捡到石头。我找到了一份工作，结了婚，有了孩子。平凡，但幸福。", emotion: "nostalgic" },
            { speaker: "守桥人", text: "你羡慕他吗？", emotion: "serious" }
        ],
        autoNext: "chapter5_parallel_choice",
        autoDelay: 3000
    },

    "chapter5_parallel_choice": {
        id: "chapter5_parallel_choice",
        chapter: 5,
        title: "杀手级抉择",
        background: "nine_bridges",
        dialogues: [
            { speaker: "旁白", text: "这是让玩家'记住一辈子'的核心场景。" }
        ],
        choices: [
            { id: "choice_envy", text: "我羡慕你。你有稳定的工作，有家庭，有正常的生活。", style: "casual", nextNode: "chapter5_parallel_result_a", effects: { flags: { envied_parallel: true } } },
            { id: "choice_no_envy", text: "不。我选择了我的路，我不后悔。", style: "rational", nextNode: "chapter5_parallel_result_b", effects: { flags: { no_envy: true } } },
            { id: "choice_talk", text: "等等。我想和你聊聊。", style: "academic", nextNode: "chapter5_parallel_result_c", effects: { flags: { talked_parallel: true } } }
        ]
    },

    "chapter5_parallel_result_a": {
        id: "chapter5_parallel_result_a",
        chapter: 5,
        title: "羡慕",
        background: "nine_bridges",
        dialogues: [
            { speaker: "平行谢凡", text: "但你有修仙，有九桥，有无限可能。", emotion: "gentle" },
            { speaker: "旁白", text: "谢凡一脸羡慕，沉默。" },
            { speaker: "系统", text: "【成就解锁：平凡之福】平凡也是一种幸福" }
        ],
        autoNext: "chapter5_bridges_overview",
        autoDelay: 3000
    },

    "chapter5_parallel_result_b": {
        id: "chapter5_parallel_result_b",
        chapter: 5,
        title: "不羡慕",
        background: "nine_bridges",
        dialogues: [
            { speaker: "平行谢凡", text: "那就好。", emotion: "gentle" },
            { speaker: "旁白", text: "他转身离开，背影渐渐模糊。" }
        ],
        autoNext: "chapter5_bridges_overview",
        autoDelay: 3000
    },

    "chapter5_parallel_result_c": {
        id: "chapter5_parallel_result_c",
        chapter: 5,
        title: "聊聊",
        background: "nine_bridges",
        dialogues: [
            { speaker: "平行谢凡", text: "好啊。我也想和你聊聊。", emotion: "gentle" },
            { speaker: "旁白", text: "两人坐在桥边，聊了很久——关于选择、关于幸福、关于遗憾。" },
            { speaker: "平行谢凡", text: "其实，我们都是对的。只是选择了不同的路。", emotion: "wise" },
            { speaker: "谢凡", text: "是的。谢谢你。", emotion: "grateful" },
            { speaker: "平行谢凡", text: "也谢谢你。让我知道，原来我还可以修仙。", emotion: "gentle" },
            { speaker: "旁白", text: "两人相视而笑。" },
            { speaker: "系统", text: "【成就解锁：两条路】每条路都有它的价值" }
        ],
        autoNext: "chapter5_bridges_overview",
        autoDelay: 3000
    },

    "chapter5_bridges_overview": {
        id: "chapter5_bridges_overview",
        chapter: 5,
        title: "九桥速览",
        background: "nine_bridges",
        dialogues: [
            { speaker: "旁白", text: "第六桥·联系之桥：万物相连。你今天的失败，是明天成功的因。你想起那块海边的石头。" },
            { speaker: "旁白", text: "第七桥·变化之桥：唯一不变的是变化。你想起从失业博士到修仙者的三年。" },
            { speaker: "旁白", text: "第八桥·生死之桥：生和死只是状态转换。你想起物理学的能量守恒定律。" }
        ],
        autoNext: "chapter5_bridge9",
        autoDelay: 4000
    },

    "chapter5_bridge9": {
        id: "chapter5_bridge9",
        chapter: 5,
        title: "第九桥·自在之桥",
        background: "nine_bridges",
        dialogues: [
            { speaker: "旁白", text: "谢凡站在第九座桥前，守桥人出现。" },
            { speaker: "守桥人", text: "你明白了什么？", emotion: "serious" }
        ],
        choices: [
            { id: "choice_academic_answer", text: "我明白了修仙的本质是认知升级", style: "academic", nextNode: "chapter5_result_a", effects: { flags: { bridge9_academic: true } } },
            { id: "choice_life_answer", text: "我明白了迷茫是成长的一部分", style: "casual", nextNode: "chapter5_result_b", effects: { flags: { bridge9_life: true } } },
            { id: "choice_dream_answer", text: "我明白了……这一切可能是一场梦", style: "rational", nextNode: "chapter5_result_c", effects: { flags: { bridge9_dream: true } } }
        ]
    },

    "chapter5_result_a": {
        id: "chapter5_result_a",
        chapter: 5,
        title: "学术回答",
        background: "nine_bridges",
        dialogues: [
            { speaker: "守桥人", text: "正确，但不完整。", emotion: "smile" }
        ],
        autoNext: "chapter5_end",
        autoDelay: 2000
    },

    "chapter5_result_b": {
        id: "chapter5_result_b",
        chapter: 5,
        title: "人生回答",
        background: "nine_bridges",
        dialogues: [
            { speaker: "守桥人", text: "接近了，但还差一点。", emotion: "encouraging" }
        ],
        autoNext: "chapter5_end",
        autoDelay: 2000
    },

    "chapter5_result_c": {
        id: "chapter5_result_c",
        chapter: 5,
        title: "顿悟",
        background: "nine_bridges",
        dialogues: [
            { speaker: "守桥人", text: "你终于想起来了。", emotion: "satisfied" }
        ],
        autoNext: "chapter5_end",
        autoDelay: 2000
    },

    "chapter5_end": {
        id: "chapter5_end",
        chapter: 5,
        title: "第五章结束",
        background: "nine_bridges",
        dialogues: [
            { speaker: "旁白", text: "九座桥渐渐消失，世界开始模糊。" },
            { speaker: "系统", text: "【第五章完】" }
        ],
        choices: [
            { id: "continue", text: "（继续）", style: "default", nextNode: "finale_world_blur", effects: { flags: { chapter5_complete: true } } }
        ]
    },

    // ============================================
    // 终章：共振
    // ============================================

    "finale_world_blur": {
        id: "finale_world_blur",
        chapter: 6,
        title: "世界模糊",
        background: "nine_bridges",
        dialogues: [
            { speaker: "旁白", text: "你踏上第九座桥。世界开始模糊。你听到嘈杂的人声……" },
            { speaker: "旁白", text: "谢凡闭上眼，回忆整个旅程——" },
            { speaker: "旁白", text: "从海边捡到石头，到凝气、筑基、踏天……" },
            { speaker: "旁白", text: "遇见张教授、赵雪、林风……" },
            { speaker: "旁白", text: "面对房东王阿姨、面试官老周、相亲对象小雨……" }
        ],
        autoNext: "finale_question",
        autoDelay: 4000
    },

    "finale_question": {
        id: "finale_question",
        chapter: 6,
        title: "谢凡的疑问",
        background: "nine_bridges",
        dialogues: [
            { speaker: "旁白", text: "他突然意识到：这一切太完美了。每个困境都有物理学解法，每个难题都恰好能用他的专业知识破解。" },
            { speaker: "谢凡", text: "等等……这个世界的规则，为什么恰好是我能理解的？", emotion: "realization" },
            { speaker: "守桥人", text: "……", emotion: "smile" }
        ],
        autoNext: "finale_realization",
        autoDelay: 3000
    },

    "finale_realization": {
        id: "finale_realization",
        chapter: 6,
        title: "谢凡的顿悟",
        background: "nine_bridges",
        dialogues: [
            { speaker: "谢凡", text: "因为……这不是真实的世界。这是我的大脑在处理那些失败、焦虑、不甘时，编织出来的一场梦。", emotion: "sad" },
            { speaker: "守桥人", text: "那你后悔吗？", emotion: "gentle" },
            { speaker: "谢凡", text: "不。就算是梦，那些思考是真实的。那些突破是真实的。我找到的'道'，也是真实的。", emotion: "determined" }
        ],
        autoNext: "finale_humor",
        autoDelay: 3000
    },

    "finale_humor": {
        id: "finale_humor",
        chapter: 6,
        title: "幽默场景",
        background: "nine_bridges",
        dialogues: [
            { speaker: "旁白", text: "你成就了踏天境大圆满。" },
            { speaker: "谢凡", text: "不，我成就的是'终于想通了'。", emotion: "smug" },
            { speaker: "旁白", text: "……有区别吗？", emotion: "confused" },
            { speaker: "谢凡", text: "踏天境听起来要交社保，'想通了'不用。", emotion: "smug" }
        ],
        autoNext: "finale_awakening",
        autoDelay: 3000
    },

    "finale_awakening": {
        id: "finale_awakening",
        chapter: 6,
        title: "觉醒",
        background: "beach_dawn",
        dialogues: [
            { speaker: "旁白", text: "谢凡醒来，发现自己躺在海边的礁石上。天边泛起鱼肚白。" },
            { speaker: "旁白", text: "他揉揉眼睛，低头看手机——42封拒信邮件。" },
            { speaker: "谢凡", text: "所以……我做了一个很长的梦。", emotion: "sad" }
        ],
        autoNext: "finale_body_trace",
        autoDelay: 3000
    },

    "finale_body_trace": {
        id: "finale_body_trace",
        chapter: 6,
        title: "身体痕迹",
        background: "beach_dawn",
        dialogues: [
            { speaker: "旁白", text: "他站起来，伸了个懒腰。然后他注意到自己的手心。" },
            { speaker: "旁白", text: "手心有一个淡淡的印记，形状像一个符文。旁边还有一道浅浅的疤痕，像是被什么利器划过。" },
            { speaker: "谢凡", text: "这是什么？胎记？我以前有这个吗？", emotion: "confused" },
            { speaker: "旁白", text: "他盯着那个符文，觉得眼熟，但想不起来在哪里见过。" }
        ],
        autoNext: "finale_item_trace",
        autoDelay: 3000
    },

    "finale_item_trace": {
        id: "finale_item_trace",
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
        autoNext: "finale_knowledge_trace",
        autoDelay: 3000
    },

    "finale_knowledge_trace": {
        id: "finale_knowledge_trace",
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
        autoNext: "finale_truth",
        autoDelay: 3000
    },

    "finale_truth": {
        id: "finale_truth",
        chapter: 6,
        title: "真相揭示",
        background: "beach_dawn",
        dialogues: [
            { speaker: "旁白", text: "谢凡坐在礁石上，看着日出。他把所有线索串起来：梦里的海浪声、符文印记、鹅卵石的温度、还有这个'不应该知道'的知识……" },
            { speaker: "谢凡", text: "这不是普通的梦。", emotion: "realization" },
            { speaker: "谢凡", text: "那个我……是真实存在的。他在某个地方，经历了那些事。", emotion: "emotional" },
            { speaker: "谢凡", text: "而这个符文……是他留给我的。跨越维度的……一封信。", emotion: "tearful" }
        ],
        autoNext: "finale_ending",
        autoDelay: 3000
    },

    "finale_ending": {
        id: "finale_ending",
        chapter: 6,
        title: "结局",
        background: "beach_dawn",
        dialogues: [
            { speaker: "旁白", text: "谢凡把鹅卵石放进口袋，站起来。" },
            { speaker: "旁白", text: "他不再迷茫，不再自我怀疑。" },
            { speaker: "旁白", text: "他知道：梦中的经历是真实的，只是发生在另一个世界。" },
            { speaker: "旁白", text: "你可以用修仙梦境里的'第一性原理'重新审视自己的处境。" },
            { speaker: "谢凡", text: "我不知道你是谁。但我知道一件事：你在梦里教我的东西，是真的。", emotion: "determined" },
            { speaker: "谢凡", text: "谢谢你，另一个我。", emotion: "smile" },
            { speaker: "旁白", text: "你转身，往回走。手心的符文在阳光下微微发光。" },
            { speaker: "系统", text: "【结局：共振】" },
            { speaker: "系统", text: "你发现了一场跨越维度的连接。梦境是假的，但成长是真的。" },
            { speaker: "系统", text: "另一个世界的'你'，通过意识共振传递了经验和智慧。" },
            { speaker: "系统", text: "手心的符文是跨越维度的印记——证明这段经历是真实的。" },
            { speaker: "系统", text: "'共振'不是结束，而是开始。" },
            { speaker: "系统", text: "【成就解锁：共振】发现梦不是虚构的，而是跨越维度的连接" },
            { speaker: "系统", text: "【通关】" }
        ],
        choices: [
            { id: "ending", text: "（完）", style: "default", nextNode: null, effects: { flags: { game_complete: true } } }
        ]
    },

    // ============================================
    // 彩蛋：二周目暗示
    // ============================================

    "easter_egg_start": {
        id: "easter_egg_start",
        chapter: 7,
        title: "再次来到海边",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "你再次来到海边，场景与序章相同，但气氛略有不同。" },
            { speaker: "旁白", text: "你再次捡起那块石头。" }
        ],
        autoNext: "easter_egg_text_change",
        autoDelay: 2500
    },

    "easter_egg_text_change": {
        id: "easter_egg_text_change",
        chapter: 7,
        title: "石头文字变化",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "石头上的文字变了。" },
            { speaker: "系统", text: "「凝气石——修仙入门辅助工具，有效期3000年，已过期2999年。」" },
            { speaker: "旁白", text: "石头上出现新的文字。" },
            { speaker: "系统", text: "「附注：这是你第二次来了。你还想继续吗？」" }
        ],
        autoNext: "easter_egg_choice",
        autoDelay: 3000
    },

    "easter_egg_choice": {
        id: "easter_egg_choice",
        chapter: 7,
        title: "二周目选择",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "屏幕下方出现两个选项。" }
        ],
        choices: [
            { id: "choice_continue_ng", text: "继续", style: "casual", nextNode: "easter_egg_continue", effects: { flags: { new_game_plus: true } } },
            { id: "choice_quit", text: "算了", style: "rational", nextNode: "easter_egg_end", effects: { flags: { quit_ng: true } } }
        ]
    },

    "easter_egg_continue": {
        id: "easter_egg_continue",
        chapter: 7,
        title: "二周目开启",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "你选择了继续。二周目开启。" },
            { speaker: "旁白", text: "在二周目中，你会发现：" },
            { speaker: "系统", text: "张教授其实是你大学时的导师" },
            { speaker: "系统", text: "那47封拒信里有一封是'守夜人'发的" },
            { speaker: "系统", text: "海边的鹅卵石……真的只是鹅卵石吗？" },
            { speaker: "系统", text: "赵雪、林风、小雨都有自己的隐藏故事线" }
        ],
        autoNext: "easter_egg_end",
        autoDelay: 4000
    },

    "easter_egg_end": {
        id: "easter_egg_end",
        chapter: 7,
        title: "彩蛋结束",
        background: "beach_night",
        dialogues: [
            { speaker: "旁白", text: "你已经明白了。" },
            { speaker: "系统", text: "【彩蛋：二周目暗示 - 完】" }
        ],
        choices: [
            { id: "ending", text: "（完）", style: "default", nextNode: null, effects: { flags: { easter_egg_complete: true } } }
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
    "林风": { id: "lin_feng", name: "林风", title: "落魄修士", color: "#6366f1" },
    "守桥人": { id: "bridge_keeper", name: "守桥人", title: "九桥守护者", color: "#f59e0b" },
    "平行谢凡": { id: "parallel_xiefan", name: "平行谢凡", title: "另一个世界的谢凡", color: "#6b7280" },
    "传统修仙者": { id: "traditional", name: "传统修仙者", title: "", color: "#ef4444" },
    "传统宗门代表": { id: "traditional_sect", name: "传统宗门代表", title: "", color: "#ef4444" },
    "新闻主播": { id: "news", name: "新闻主播", title: "", color: "#a0a0a0" },
    "专家A": { id: "expert_a", name: "专家A", title: "", color: "#a0a0a0" },
    "专家B": { id: "expert_b", name: "专家B", title: "", color: "#a0a0a0" },
    "专家C": { id: "expert_c", name: "专家C", title: "", color: "#a0a0a0" },
    "主持人": { id: "host", name: "主持人", title: "", color: "#a0a0a0" },
    "天机集团代表": { id: "tianji", name: "天机集团代表", title: "", color: "#3b82f6" },
    "灵气复苏促进会": { id: "revival", name: "灵气复苏促进会", title: "", color: "#10b981" },
    "王阿姨": { id: "wang_ayi", name: "王阿姨", title: "房东", color: "#f59e0b" },
    "李明": { id: "li_ming", name: "李明", title: "大厂程序员", color: "#6366f1" },
    "面试官老周": { id: "lao_zhou", name: "面试官老周", title: "面试官", color: "#374151" },
    "小雨": { id: "xiao_yu", name: "小雨", title: "相亲对象", color: "#ec4899" },
    "刘天师": { id: "liu_tianshi", name: "刘天师", title: "传统派代表", color: "#ef4444" },
    "老陈": { id: "lao_chen", name: "老陈", title: "守夜人代表", color: "#1f2937" },
    "灵猫小白": { id: "cat_bai", name: "灵猫小白", title: "修炼吉祥物", color: "#f5f5f5" },
    "HR": { id: "hr", name: "HR", title: "", color: "#a0a0a0" },
    "天机集团HR": { id: "tianji_hr", name: "天机集团HR", title: "", color: "#3b82f6" },
    "剑阁资本代表": { id: "jiange", name: "剑阁资本代表", title: "", color: "#6366f1" }
};

// 背景场景
const backgrounds = {
    "beach_night": { name: "海边夜晚", gradient: "linear-gradient(180deg, #0f172a 0%, #1e3a5f 100%)" },
    "beach_dawn": { name: "海边黎明", gradient: "linear-gradient(180deg, #1e3a5f 0%, #f59e0b 100%)" },
    "apartment_day": { name: "出租屋白天", gradient: "linear-gradient(180deg, #1a1a1a 0%, #252525 100%)" },
    "apartment_night": { name: "出租屋夜晚", gradient: "linear-gradient(180deg, #0f0f0f 0%, #1a1a1a 100%)" },
    "campus": { name: "大学校园", gradient: "linear-gradient(180deg, #1a2e1a 0%, #2a3a2a 100%)" },
    "campus_night": { name: "校园夜晚", gradient: "linear-gradient(180deg, #0f1a0f 0%, #1a2a1a 100%)" },
    "lab": { name: "实验室", gradient: "linear-gradient(180deg, #1a1a2e 0%, #2a2a3a 100%)" },
    "conference": { name: "会议室", gradient: "linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%)" },
    "city": { name: "城市", gradient: "linear-gradient(180deg, #1a1a2e 0%, #2a2a3a 100%)" },
    "bridge": { name: "九桥", gradient: "linear-gradient(180deg, #2a1a3a 0%, #3a2a4a 100%)" },
    "dormitory": { name: "教职工宿舍", gradient: "linear-gradient(180deg, #2a3a2a 0%, #3a4a3a 100%)" },
    "professor_home": { name: "张教授家", gradient: "linear-gradient(180deg, #2a2a1a 0%, #3a3a2a 100%)" },
    "tech_company": { name: "科技公司", gradient: "linear-gradient(180deg, #1a2a3a 0%, #2a3a4a 100%)" },
    "street_night": { name: "夜晚街道", gradient: "linear-gradient(180deg, #0f0f1a 0%, #1a1a2a 100%)" },
    "basement": { name: "地下室", gradient: "linear-gradient(180deg, #0a0a0a 0%, #151515 100%)" },
    "cafe": { name: "咖啡厅", gradient: "linear-gradient(180deg, #2a2a1a 0%, #3a3a2a 100%)" },
    "office": { name: "办公室", gradient: "linear-gradient(180deg, #1a1a1a 0%, #2a2a2a 100%)" },
    "nine_bridges": { name: "九桥全景", gradient: "linear-gradient(180deg, #2a1a3a 0%, #4a2a5a 50%, #6a3a7a 100%)" },
    "ending_screen": { name: "结局界面", gradient: "linear-gradient(180deg, #1e3a5f 0%, #f59e0b 100%)" }
};
