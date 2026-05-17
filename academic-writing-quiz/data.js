// Academic Writing Quiz Data — 14 topics × 10 questions = 140
// Each q: {type:'mc'|'tf', q:{zh,en}, opts:[{zh,en}...], ans:index, exp:{zh,en}}

const QUIZ_DATA = [

// ============================================================
// 1. Research Question
// ============================================================
{id:'research-question', title_zh:'研究問題與假設', title_en:'Research Question & Hypothesis', qs:[
{type:'mc',q:{zh:'PICO 框架中 "C" 代表什麼？',en:'In PICO, what does "C" stand for?'},
opts:[{zh:'Cause',en:'Cause'},{zh:'Comparator (對照)',en:'Comparator'},{zh:'Causality',en:'Causality'},{zh:'Conclusion',en:'Conclusion'}],ans:1,
exp:{zh:'C = Comparator，對照組（如 placebo、wild-type、healthy control）。',en:'C = Comparator (placebo, wild-type, healthy control, etc.).'}},

{type:'mc',q:{zh:'FINER 中的 "F" 代表？',en:'The "F" in FINER stands for?'},
opts:[{zh:'Feasible (可行)',en:'Feasible'},{zh:'Funded',en:'Funded'},{zh:'Foundational',en:'Foundational'},{zh:'Final',en:'Final'}],ans:0,
exp:{zh:'F = Feasible，研究是否在現有資源、時間內可行。',en:'F = Feasible — can the study be done with available resources and time.'}},

{type:'mc',q:{zh:'下列哪個是「可檢驗」的研究問題？',en:'Which is a testable research question?'},
opts:[{zh:'單細胞定序很重要',en:'Single-cell sequencing is important'},{zh:'我想了解癌症',en:'I want to understand cancer'},{zh:'在 18-45 歲台灣成人中，A. muciniphila 相對豐度與 BMI 是否負相關？',en:'In Taiwanese adults 18-45, is A. muciniphila abundance negatively correlated with BMI?'},{zh:'探討基因表達的應用',en:'Explore gene expression applications'}],ans:2,
exp:{zh:'C 完整指明 P/I/C/O，可量化、有對照、有結果指標。',en:'C fully specifies P/I/C/O, quantifiable, has comparison and outcome.'}},

{type:'tf',q:{zh:'「Aim」與「Hypothesis」可以互換使用。',en:'"Aim" and "Hypothesis" can be used interchangeably.'},
opts:[{zh:'是 (True)',en:'True'},{zh:'否 (False)',en:'False'}],ans:1,
exp:{zh:'Aim 最寬泛、Hypothesis 是可被否證的具體預測，兩者層級不同。',en:'Aim is broad; hypothesis is a specific falsifiable prediction. Different hierarchies.'}},

{type:'mc',q:{zh:'探索性 (discovery) 研究最佳處理 hypothesis 的方式是？',en:'Best way to handle hypothesis in exploratory/discovery research?'},
opts:[{zh:'假裝有事先 hypothesis 然後 cherry-pick 結果',en:'Pretend you had one then cherry-pick results'},{zh:'省略 hypothesis 但明確標示「This is hypothesis-generating」',en:'Omit hypothesis but explicitly state "This is hypothesis-generating"'},{zh:'隨便寫一個 hypothesis 應付',en:'Write any random hypothesis'},{zh:'直接不寫 aim 也不寫 hypothesis',en:'Skip both aim and hypothesis'}],ans:1,
exp:{zh:'Discovery research 不要求 hypothesis，但要明確聲明，避免事後 HARKing。',en:'Discovery research need not have a hypothesis, but you must declare it to avoid HARKing.'}},

{type:'mc',q:{zh:'FINER 中的 "N (Novel)" 最佳解讀是？',en:'Best interpretation of "N (Novel)" in FINER?'},
opts:[{zh:'必須是世界首次研究',en:'Must be a world-first study'},{zh:'用最新技術即算 novel',en:'Using newest technology counts'},{zh:'能在既有文獻上「確認、推翻、或延伸」即算 novel',en:'"Confirming, refuting, or extending" existing literature all count as novel'},{zh:'以前沒人做過該物種',en:'Nobody has studied this species before'}],ans:2,
exp:{zh:'Novel 是「對既有文獻的貢獻」，而非「世界首次」。',en:'Novel = contribution to existing literature, not "first ever".'}},

{type:'mc',q:{zh:'下列哪個動詞最不適合當研究 aim？',en:'Which verb is least appropriate for a research aim?'},
opts:[{zh:'quantify',en:'quantify'},{zh:'study',en:'study'},{zh:'compare',en:'compare'},{zh:'characterize',en:'characterize'}],ans:1,
exp:{zh:'"study" 過於模糊；應用具體動詞 (quantify / compare / characterize) 表明結果可被測量。',en:'"study" is vague; use concrete verbs (quantify/compare/characterize) so the outcome is measurable.'}},

{type:'tf',q:{zh:'PICOTS 是 PICO 加上 Time 與 Setting。',en:'PICOTS extends PICO with Time and Setting.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'PICOTS = PICO + Time (timeframe) + Setting (research environment)。',en:'PICOTS = PICO + Time (timeframe) + Setting (research environment).'}},

{type:'mc',q:{zh:'生資/Omics 研究的 PICO 變體中，"O" 通常對應？',en:'In bioinformatics/omics studies, "O" in PICO typically maps to?'},
opts:[{zh:'學術投稿目標',en:'Publication target'},{zh:'可量化讀出 (差異基因數、UMAP 距離、AUC 等)',en:'Quantifiable readout (#DEGs, UMAP distance, AUC, etc.)'},{zh:'OS (overall survival)',en:'OS (overall survival)'},{zh:'O 在 omics 研究不適用',en:'O does not apply to omics'}],ans:1,
exp:{zh:'Omics 中的 O = 量化讀出，例如差異基因數、AUC、UMAP 距離。',en:'In omics, O = quantifiable readout — #DEGs, AUC, UMAP distance, etc.'}},

{type:'mc',q:{zh:'你想做的研究主題已有 3 篇 Cell 論文且結論一致，最佳行動是？',en:'Topic you wanted has 3 consistent Cell papers already. Best action?'},
opts:[{zh:'仍然做完全相同問題',en:'Do the exact same question anyway'},{zh:'換不同 population / setting / outcome 重做（仍可投 mid-IF 或重複性研究）',en:'Switch population/setting/outcome (still publishable in mid-IF or replication)'},{zh:'放棄整個領域',en:'Abandon the whole field'},{zh:'不引用那 3 篇論文',en:'Don\'t cite those 3 papers'}],ans:1,
exp:{zh:'同領域可改 population / setting / outcome 做 confirmatory / replication 研究。',en:'Replicate or extend in different populations/settings/outcomes — confirmatory/replication research is valuable.'}}
]},

// ============================================================
// 2. Literature Review
// ============================================================
{id:'literature-review', title_zh:'文獻回顧策略', title_en:'Literature Review Strategy', qs:[
{type:'mc',q:{zh:'PRISMA 2020 的四個主要階段順序是？',en:'The 4 main phases of PRISMA 2020 are?'},
opts:[{zh:'Identification → Screening → Eligibility → Included',en:'Identification → Screening → Eligibility → Included'},{zh:'Search → Read → Cite → Publish',en:'Search → Read → Cite → Publish'},{zh:'Plan → Search → Code → Write',en:'Plan → Search → Code → Write'},{zh:'PRISMA 沒有固定階段',en:'PRISMA has no fixed phases'}],ans:0,
exp:{zh:'Identification (檢索識別) → Screening (篩選) → Eligibility (合格性) → Included (納入)。',en:'Identification → Screening → Eligibility → Included is the standard PRISMA flow.'}},

{type:'mc',q:{zh:'Scoping review 與 Systematic review 最大差異？',en:'Biggest difference between scoping and systematic review?'},
opts:[{zh:'Scoping 「映射領域 / 釐清概念」；Systematic 「綜合證據回答特定問題」',en:'Scoping: "map a field / clarify concepts"; Systematic: "synthesize evidence for a specific question"'},{zh:'Scoping 不需要 protocol',en:'Scoping needs no protocol'},{zh:'Systematic 不需要 PRISMA',en:'Systematic doesn\'t need PRISMA'},{zh:'兩者其實一樣',en:'They are the same'}],ans:0,
exp:{zh:'Scoping 探索 landscape；Systematic 回答 well-defined question 並常做 meta-analysis。',en:'Scoping maps the landscape; Systematic answers a well-defined question, often with meta-analysis.'}},

{type:'mc',q:{zh:'PubMed 中以 MeSH term 檢索 "breast neoplasms" 的正確語法是？',en:'Correct PubMed MeSH search syntax for "breast neoplasms"?'},
opts:[{zh:'breast neoplasms',en:'breast neoplasms'},{zh:'breast neoplasms[mesh]',en:'breast neoplasms[mesh]'},{zh:'$breast neoplasms$',en:'$breast neoplasms$'},{zh:'breast OR neoplasms',en:'breast OR neoplasms'}],ans:1,
exp:{zh:'[mesh] 為欄位標記，要求使用 MeSH terminology 索引。',en:'[mesh] is the field tag forcing MeSH terminology indexing.'}},

{type:'tf',q:{zh:'Narrative review 通常需要 PROSPERO 註冊。',en:'Narrative reviews typically require PROSPERO registration.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:1,
exp:{zh:'PROSPERO 主要為 systematic review 而設；narrative review 無需。',en:'PROSPERO is primarily for systematic reviews; narrative reviews don\'t need it.'}},

{type:'mc',q:{zh:'下列哪個是「forward citation」工具？',en:'Which is a forward-citation tool?'},
opts:[{zh:'PubMed advanced search',en:'PubMed advanced search'},{zh:'Connected Papers / Citation Gecko / Inciteful',en:'Connected Papers / Citation Gecko / Inciteful'},{zh:'EndNote',en:'EndNote'},{zh:'PRISMA flow',en:'PRISMA flow'}],ans:1,
exp:{zh:'這些工具能視覺化 citation network、找到「引用此論文」的後續工作。',en:'These tools visualize citation networks and find papers that cite a given paper.'}},

{type:'mc',q:{zh:'PRISMA 2020 與 PRISMA 2009 的最大差別？',en:'Biggest difference between PRISMA 2020 and 2009?'},
opts:[{zh:'2020 增加了 abstract 和 search reporting 的詳細要求',en:'2020 added detailed requirements for abstracts and search reporting'},{zh:'2020 完全相同',en:'They are identical'},{zh:'2020 取消了 flow diagram',en:'2020 removed the flow diagram'},{zh:'2020 只用於 RCT',en:'2020 only applies to RCTs'}],ans:0,
exp:{zh:'2020 加強了 abstract、搜尋透明度、bias assessment 報告。',en:'2020 strengthened abstract, search transparency, and bias-assessment reporting.'}},

{type:'mc',q:{zh:'下列哪個 Boolean 運算子最常用於「擴大」檢索結果？',en:'Which Boolean operator broadens search results?'},
opts:[{zh:'AND',en:'AND'},{zh:'OR',en:'OR'},{zh:'NOT',en:'NOT'},{zh:'XOR',en:'XOR'}],ans:1,
exp:{zh:'OR 將兩個條件聯集，擴大結果；AND 是交集，縮小結果。',en:'OR unions conditions (broader); AND intersects (narrower).'}},

{type:'mc',q:{zh:'你要做的是「現有療法在台灣的 evidence map」，最適合的回顧類型是？',en:'You want an "evidence map of existing therapies in Taiwan." Best review type?'},
opts:[{zh:'Systematic review',en:'Systematic review'},{zh:'Scoping review',en:'Scoping review'},{zh:'Meta-analysis',en:'Meta-analysis'},{zh:'Narrative editorial',en:'Narrative editorial'}],ans:1,
exp:{zh:'Scoping review 適合「映射領域」型問題。',en:'Scoping review fits "map the landscape" questions.'}},

{type:'tf',q:{zh:'PRISMA 2020 flow diagram 應該在 Methods 中引用，但圖通常放在 Results。',en:'PRISMA 2020 flow diagram should be cited in Methods but the figure usually goes in Results.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'Methods 描述方法，Results 呈現實際 flow 數字（哪些被排除、為何）。',en:'Methods describes method; Results shows actual flow (what was excluded, why).'}},

{type:'mc',q:{zh:'Systematic review 中「對篩選結果的 inter-rater agreement」最常用的指標是？',en:'In systematic review, the most common metric for screening inter-rater agreement is?'},
opts:[{zh:'p value',en:'p value'},{zh:'Cohen\'s kappa',en:'Cohen\'s kappa'},{zh:'AUC',en:'AUC'},{zh:'mean (SD)',en:'mean (SD)'}],ans:1,
exp:{zh:'Cohen\'s kappa 校正了 chance agreement，是 inter-rater agreement 標準指標。',en:'Cohen\'s kappa corrects for chance agreement — standard inter-rater metric.'}}
]},

// ============================================================
// 3. IMRaD
// ============================================================
{id:'structure-imrad', title_zh:'IMRaD 與學位論文章節', title_en:'IMRaD & Thesis Structure', qs:[
{type:'mc',q:{zh:'IMRaD 中 "aD" 代表什麼？',en:'In IMRaD, "aD" stands for?'},
opts:[{zh:'analysis & Design',en:'analysis & Design'},{zh:'and Discussion',en:'and Discussion'},{zh:'aim & Discovery',en:'aim & Discovery'},{zh:'all Done',en:'all Done'}],ans:1,
exp:{zh:'IMRaD = Introduction, Methods, Results, and Discussion。',en:'IMRaD = Introduction, Methods, Results, and Discussion.'}},

{type:'mc',q:{zh:'「漏斗結構」描述哪個段落？',en:'The "funnel structure" describes which section?'},
opts:[{zh:'Methods (寬→窄)',en:'Methods (broad→narrow)'},{zh:'Introduction (寬→窄)',en:'Introduction (broad→narrow)'},{zh:'Results (寬→窄)',en:'Results (broad→narrow)'},{zh:'Title',en:'Title'}],ans:1,
exp:{zh:'Introduction 是漏斗：從寬泛背景收斂到具體研究問題。',en:'Introduction = funnel: broad background converging to a specific question.'}},

{type:'mc',q:{zh:'論文 IMRaD vs 學位論文 5 章結構，「Discussion」對應哪兩章？',en:'Paper IMRaD vs 5-chapter thesis: "Discussion" maps to?'},
opts:[{zh:'Chapter 1-2',en:'Chapters 1-2'},{zh:'Chapter 3',en:'Chapter 3'},{zh:'Chapter 5 (Discussion / Conclusion)',en:'Chapter 5 (Discussion / Conclusion)'},{zh:'不對應任何章節',en:'No mapping'}],ans:2,
exp:{zh:'5-chapter 結構：1.Intro, 2.LitRev, 3.Methods, 4.Results, 5.Discussion/Conclusion。',en:'5-chapter: 1. Intro, 2. LitRev, 3. Methods, 4. Results, 5. Discussion/Conclusion.'}},

{type:'tf',q:{zh:'Paper-based / Sandwich thesis 是把多篇已發表 / 待發表論文組合成博士論文的形式。',en:'Paper-based / sandwich thesis combines multiple published/submitted papers into a PhD thesis.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'Paper-based 在歐盟、澳洲、北歐 PhD 體系常見。',en:'Paper-based theses are common in EU, Australian, and Nordic PhD programs.'}},

{type:'mc',q:{zh:'「Hourglass」(沙漏) 是 IMRaD 中哪兩段的形狀？',en:'The "hourglass" describes which IMRaD sections?'},
opts:[{zh:'Title + Abstract',en:'Title + Abstract'},{zh:'Introduction (寬→窄) + Discussion (窄→寬)',en:'Introduction (broad→narrow) + Discussion (narrow→broad)'},{zh:'Methods + Results',en:'Methods + Results'},{zh:'Methods + Discussion',en:'Methods + Discussion'}],ans:1,
exp:{zh:'Introduction 漏斗 + Discussion 倒漏斗 = Hourglass。',en:'Introduction funnel + Discussion inverted funnel = Hourglass.'}},

{type:'mc',q:{zh:'句子「我們使用 Seurat v5 進行 clustering」屬於哪個 IMRaD 段？',en:'"We used Seurat v5 for clustering" belongs to which IMRaD section?'},
opts:[{zh:'Introduction',en:'Introduction'},{zh:'Methods',en:'Methods'},{zh:'Results',en:'Results'},{zh:'Discussion',en:'Discussion'}],ans:1,
exp:{zh:'描述使用什麼方法/工具屬於 Methods。',en:'Describing what tool/method you used belongs in Methods.'}},

{type:'mc',q:{zh:'句子「我們的發現可能改變臨床實踐」屬於哪個 IMRaD 段？',en:'"Our findings may change clinical practice" belongs to which section?'},
opts:[{zh:'Methods',en:'Methods'},{zh:'Results',en:'Results'},{zh:'Discussion',en:'Discussion'},{zh:'Title',en:'Title'}],ans:2,
exp:{zh:'解讀 / 影響 / 對臨床的意義屬於 Discussion。',en:'Interpretation / clinical implications belong in Discussion.'}},

{type:'mc',q:{zh:'學位論文的「文獻回顧」(Literature Review)，在 5-chapter 結構中通常是？',en:'Where does "Literature Review" sit in a 5-chapter thesis?'},
opts:[{zh:'第 1 章',en:'Chapter 1'},{zh:'第 2 章 (獨立章節)',en:'Chapter 2 (its own chapter)'},{zh:'附錄',en:'Appendix'},{zh:'不必有',en:'Not required'}],ans:1,
exp:{zh:'5-chapter 結構中，Lit Review 通常為 Chapter 2，獨立成章。',en:'In a 5-chapter structure, Lit Review is typically Chapter 2, its own chapter.'}},

{type:'mc',q:{zh:'方法相同但分析不同 cohort，最適合的 thesis 形式是？',en:'Same methods, multiple disconnected cohorts. Best thesis format?'},
opts:[{zh:'5-chapter (single big project)',en:'5-chapter (single big project)'},{zh:'Paper-based (each cohort = one paper-chapter)',en:'Paper-based (each cohort = one paper-chapter)'},{zh:'1-page essay',en:'1-page essay'},{zh:'2-chapter',en:'2-chapter'}],ans:1,
exp:{zh:'多個 disconnected studies 適合 paper-based 結構，每個 study 一章。',en:'Multiple disconnected studies fit paper-based — each study is its own chapter.'}},

{type:'tf',q:{zh:'2026 多數生醫期刊的論文長度 (Methods + Results) 仍以 IMRaD 為標準。',en:'In 2026, most biomedical journal papers (Methods + Results) still follow IMRaD.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'IMRaD 仍為主流；少數 short report / brief comm 為例外。',en:'IMRaD remains the standard; short reports / brief comms are minor exceptions.'}}
]},

// ============================================================
// 4. Introduction Writing
// ============================================================
{id:'introduction-writing', title_zh:'緒論寫作', title_en:'Introduction Writing', qs:[
{type:'mc',q:{zh:'Swales CARS 模型的三個 Move 順序為？',en:'Order of three Moves in Swales\' CARS model?'},
opts:[{zh:'Establish Territory → Establish Niche → Occupy Niche',en:'Establish Territory → Establish Niche → Occupy Niche'},{zh:'Plan → Do → Review',en:'Plan → Do → Review'},{zh:'Aim → Methods → Results',en:'Aim → Methods → Results'},{zh:'Background → Methods → Conclusion',en:'Background → Methods → Conclusion'}],ans:0,
exp:{zh:'CARS = Create A Research Space。先建立領域 → 製造 gap → 佔據 gap。',en:'CARS = Create A Research Space. Establish territory → create niche → occupy niche.'}},

{type:'mc',q:{zh:'「However」「despite」「yet」這些連接詞通常出現在 Introduction 哪個段落？',en:'Words like "However"/"despite"/"yet" typically appear in which Intro paragraph?'},
opts:[{zh:'第一段（背景）',en:'Para 1 (background)'},{zh:'第二段（已知文獻）',en:'Para 2 (what\'s known)'},{zh:'第三段（gap）',en:'Para 3 (gap)'},{zh:'最後一段（aim）',en:'Last para (aim)'}],ans:2,
exp:{zh:'這些連接詞用來明確標出 gap，常見於緒論第三段。',en:'These connectives mark the gap, typical in the third Intro paragraph.'}},

{type:'mc',q:{zh:'下列哪句最不適合當 Introduction 開場？',en:'Which is worst for an Introduction opening?'},
opts:[{zh:'Triple-negative breast cancer accounts for 15-20% of breast cancers but lacks targeted therapies.',en:'Triple-negative breast cancer accounts for 15-20% of breast cancers but lacks targeted therapies.'},{zh:'Cancer is a serious disease that affects many people.',en:'Cancer is a serious disease that affects many people.'},{zh:'Recent advances in scRNA-seq have enabled single-cell resolution profiling of tumors.',en:'Recent advances in scRNA-seq have enabled single-cell resolution profiling of tumors.'},{zh:'IFN-γ stimulation regulates immune responses through STAT1.',en:'IFN-γ stimulation regulates immune responses through STAT1.'}],ans:1,
exp:{zh:'「Cancer is serious」太籠統，沒有訊息量。應從具體統計數字或機制切入。',en:'"Cancer is serious" is overly generic. Open with concrete stats or mechanisms.'}},

{type:'tf',q:{zh:'Introduction 的最後一段通常不引用任何文獻。',en:'The last paragraph of Introduction usually cites no literature.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'最後一段是「我們做了什麼」，本身是新工作，無需引用。',en:'The last paragraph is "what we did" — your own new work, no citations needed.'}},

{type:'mc',q:{zh:'引用密度最高的通常是 Introduction 哪一段？',en:'Highest citation density usually in which Intro paragraph?'},
opts:[{zh:'第一段',en:'Para 1'},{zh:'第二段（既有文獻）',en:'Para 2 (what\'s known)'},{zh:'第三段',en:'Para 3'},{zh:'最後一段',en:'Last para'}],ans:1,
exp:{zh:'第二段「what\'s known」需大量 cite 既有研究，引用密度最高。',en:'Para 2 ("what\'s known") requires heavy citation.'}},

{type:'mc',q:{zh:'下列哪句是好的 gap statement？',en:'Which is a strong gap statement?'},
opts:[{zh:'「Few studies have looked at this.」',en:'"Few studies have looked at this."'},{zh:'「More research is needed.」',en:'"More research is needed."'},{zh:'「Smith 2022, Lin 2023, Chen 2024 profiled scRNA-seq in TNBC, but all used pre-treatment biopsies — the post-chemotherapy landscape remains uncharacterized.」',en:'"Smith 2022, Lin 2023, Chen 2024 profiled scRNA-seq in TNBC but all used pre-treatment biopsies — the post-chemotherapy landscape remains uncharacterized."'},{zh:'「Cancer is a serious disease.」',en:'"Cancer is a serious disease."'}],ans:2,
exp:{zh:'好 gap 一定要 (1) 具體 cite 既有研究 (2) 明確指出未做之處。',en:'Strong gaps (1) cite specific prior work (2) explicitly state what\'s undone.'}},

{type:'mc',q:{zh:'CARS Model 中 Move 2 (Establishing a Niche) 的 4 種策略不包括？',en:'Move 2 strategies (establishing a niche) do NOT include?'},
opts:[{zh:'Counter-claiming (反駁既有觀點)',en:'Counter-claiming'},{zh:'Indicating a gap',en:'Indicating a gap'},{zh:'Question-raising',en:'Question-raising'},{zh:'Increasing citation count of own papers',en:'Increasing self-citation count'}],ans:3,
exp:{zh:'Move 2 四策略：counter-claim, gap, question, continue。自我引用不是策略。',en:'Move 2 strategies: counter-claim, gap, question, continue. Boosting self-citation is not one.'}},

{type:'mc',q:{zh:'Introduction 一般長度建議？',en:'Recommended length of Introduction?'},
opts:[{zh:'1 段',en:'1 paragraph'},{zh:'3-4 段',en:'3-4 paragraphs'},{zh:'10+ 段',en:'10+ paragraphs'},{zh:'整篇論文 50%',en:'50% of the paper'}],ans:1,
exp:{zh:'3-4 段的漏斗結構是最佳長度，超過會稀釋 gap。',en:'3-4 paragraph funnel is optimal — longer dilutes the gap.'}},

{type:'mc',q:{zh:'下列哪句是好的 aim statement？',en:'Which is a strong aim statement?'},
opts:[{zh:'「This study will discuss the role of Gene X.」',en:'"This study will discuss the role of Gene X."'},{zh:'「We applied scRNA-seq (10x v3) to 12 paired pre/post-chemotherapy TNBC biopsies to identify chemotherapy-induced cell-state transitions.」',en:'"We applied scRNA-seq (10x v3) to 12 paired pre/post-chemotherapy TNBC biopsies to identify chemotherapy-induced cell-state transitions."'},{zh:'「Our research is interesting.」',en:'"Our research is interesting."'},{zh:'「The aim of this study is to study cancer.」',en:'"The aim of this study is to study cancer."'}],ans:1,
exp:{zh:'好 aim = 具體方法 + 樣本 + 目標。「discuss / study」太弱。',en:'Strong aim = specific method + sample + objective. "discuss/study" is too weak.'}},

{type:'tf',q:{zh:'Introduction 應該重述所有 Results 的數字。',en:'Introduction should restate all Results numbers.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:1,
exp:{zh:'Introduction 不報告結果，只說 aim 與 approach。Results 屬於 Results 段。',en:'Introduction states aim & approach, not results. Numbers belong in Results.'}}
]},

// ============================================================
// 5. Methods
// ============================================================
{id:'methods-writing', title_zh:'方法寫作', title_en:'Methods Writing', qs:[
{type:'mc',q:{zh:'觀察性 cohort 研究最該對應哪個 EQUATOR checklist？',en:'Observational cohort study → which EQUATOR checklist?'},
opts:[{zh:'CONSORT',en:'CONSORT'},{zh:'PRISMA',en:'PRISMA'},{zh:'STROBE',en:'STROBE'},{zh:'ARRIVE',en:'ARRIVE'}],ans:2,
exp:{zh:'STROBE = Strengthening the Reporting of Observational Studies in Epidemiology。',en:'STROBE = Strengthening the Reporting of Observational Studies in Epidemiology.'}},

{type:'mc',q:{zh:'動物實驗最該對應的 checklist 是？',en:'Animal study → which checklist?'},
opts:[{zh:'STROBE',en:'STROBE'},{zh:'CONSORT',en:'CONSORT'},{zh:'ARRIVE 2.0',en:'ARRIVE 2.0'},{zh:'TRIPOD',en:'TRIPOD'}],ans:2,
exp:{zh:'ARRIVE 2.0 為動物研究報告標準。',en:'ARRIVE 2.0 is the standard for reporting animal research.'}},

{type:'mc',q:{zh:'Machine learning 預測模型應對應的 checklist 是？',en:'ML prediction models → which checklist?'},
opts:[{zh:'STROBE',en:'STROBE'},{zh:'TRIPOD-AI / TRIPOD+AI',en:'TRIPOD-AI / TRIPOD+AI'},{zh:'CONSORT',en:'CONSORT'},{zh:'ARRIVE',en:'ARRIVE'}],ans:1,
exp:{zh:'TRIPOD+AI (2024) 為 ML 預測模型最新報告標準。',en:'TRIPOD+AI (2024) is the latest standard for ML prediction models.'}},

{type:'tf',q:{zh:'寫 scRNA-seq Methods 時，可以省略 Seurat 的版本號。',en:'You can omit the Seurat version in scRNA-seq Methods.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:1,
exp:{zh:'Seurat v3 vs v5 演算法差異大，必須明列版本以便重現。',en:'Seurat v3 vs v5 differ substantially in algorithms; version is required for reproducibility.'}},

{type:'mc',q:{zh:'2026 最負責任的 code/data availability 做法是？',en:'Most responsible 2026 code/data availability practice?'},
opts:[{zh:'"available upon request"',en:'"available upon request"'},{zh:'放在 lab 私人 server',en:'Host on lab private server'},{zh:'Public deposit (GitHub + Zenodo DOI / GEO accession) 並在文中引用',en:'Public deposit (GitHub + Zenodo DOI / GEO accession), cited in paper'},{zh:'寄給有興趣的同行',en:'Email interested colleagues'}],ans:2,
exp:{zh:'Public deposit + 文中引用是 FAIR 原則的最低門檻。',en:'Public deposit + in-paper citation meets FAIR principles.'}},

{type:'mc',q:{zh:'Methods 段落中「Sample size justification」最重要的元素？',en:'Most important element of "sample size justification"?'},
opts:[{zh:'隨意設定一個 round number',en:'Pick a round number arbitrarily'},{zh:'α + β + effect size + 預期 dropout，並引用所用軟體 (G*Power, PASS, R pwr)',en:'α + β + effect size + expected dropout, citing software (G*Power, PASS, R pwr)'},{zh:'說「樣本越多越好」',en:'Just say "more is better"'},{zh:'用上次論文的 n',en:'Reuse last paper\'s n'}],ans:1,
exp:{zh:'必須交代統計參數 (α, β, effect size) + 計算工具，才能稱為 justification。',en:'Must report statistical parameters (α, β, effect size) + tool to count as justification.'}},

{type:'mc',q:{zh:'下列哪項不應該寫進 Methods？',en:'Which should NOT appear in Methods?'},
opts:[{zh:'IRB / IACUC approval number',en:'IRB / IACUC approval number'},{zh:'軟體版本號',en:'Software versions'},{zh:'我們的發現很重要',en:'"Our findings are important"'},{zh:'Data availability statement',en:'Data availability statement'}],ans:2,
exp:{zh:'解讀性語言屬於 Discussion，不是 Methods。',en:'Interpretive language belongs in Discussion, not Methods.'}},

{type:'tf',q:{zh:'EQUATOR checklist 應該在開始寫論文之前下載並對照，而不是寫完再補。',en:'EQUATOR checklists should be downloaded BEFORE writing, not after.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'寫完才補對應 checklist 經常需要大量返工，提前對照效率高得多。',en:'Retrofitting after writing requires extensive rework — front-load it.'}},

{type:'mc',q:{zh:'多重檢定校正常見方法有 Bonferroni, BH (FDR), Holm 等。在差異基因分析中最常用？',en:'Multiple-testing corrections: Bonferroni, BH (FDR), Holm. Most common in DEG analysis?'},
opts:[{zh:'Bonferroni (太保守)',en:'Bonferroni (too conservative)'},{zh:'Benjamini-Hochberg (FDR)',en:'Benjamini-Hochberg (FDR)'},{zh:'不需校正',en:'No correction needed'},{zh:'隨機選一個',en:'Random pick'}],ans:1,
exp:{zh:'BH FDR 在 high-dimensional omics 分析最常用，平衡 power 與 false discovery 控制。',en:'BH FDR balances power and false-discovery control in high-dimensional omics analysis.'}},

{type:'mc',q:{zh:'Methods 段落寫多長最適合？',en:'How long should Methods be?'},
opts:[{zh:'越短越好',en:'As short as possible'},{zh:'夠詳細到「另一位合格研究者能依此重做」，超過 word limit 的細節移到 supplementary',en:'Detailed enough that "another qualified researcher could redo it"; overflow to supplementary'},{zh:'10 行內',en:'Under 10 lines'},{zh:'整份論文一半',en:'Half of the entire paper'}],ans:1,
exp:{zh:'重點是「可重現」標準；超過 word limit 用 supplementary 補完。',en:'Standard is "reproducible by another"; supplement when over word limit.'}}
]},

// ============================================================
// 6. Results & Figures
// ============================================================
{id:'results-figures', title_zh:'結果與圖表', title_en:'Results & Figures', qs:[
{type:'mc',q:{zh:'Results 鐵則第 1 條是？',en:'Rule 1 of Results is?'},
opts:[{zh:'多放猜測',en:'Add lots of speculation'},{zh:'只報告結果，不解讀（解讀放 Discussion）',en:'Report results only — interpretation belongs in Discussion'},{zh:'放最多炫圖',en:'Maximize fancy figures'},{zh:'可以省略 n 數',en:'OK to omit n'}],ans:1,
exp:{zh:'Results 只描述事實，解讀屬於 Discussion。',en:'Results report facts; interpretation goes to Discussion.'}},

{type:'mc',q:{zh:'2026 完整報告兩組均值差異最少需要？',en:'Minimum required to fully report a between-group mean difference (2026)?'},
opts:[{zh:'只 p 值',en:'p value only'},{zh:'p + n',en:'p + n'},{zh:'平均差 + p',en:'mean difference + p'},{zh:'平均差 + 95% CI + p (+ 效應量)',en:'mean difference + 95% CI + p (+ effect size)'}],ans:3,
exp:{zh:'2026 標準：必含效應量 + CI；單獨 p 值不充分 (ASA 2016)。',en:'2026 standard: effect size + CI required; p alone is insufficient (ASA 2016).'}},

{type:'mc',q:{zh:'下列哪個圖型最不誤導讀者？',en:'Which plot is least misleading?'},
opts:[{zh:'Bar chart with SEM',en:'Bar chart with SEM'},{zh:'3D pie chart',en:'3D pie chart'},{zh:'Boxplot + jitter',en:'Boxplot + jitter'},{zh:'Bar chart with rainbow colors',en:'Bar chart with rainbow colors'}],ans:2,
exp:{zh:'Boxplot + jitter 同時顯示分布、中位數、離群值。Bar+SEM 隱藏分布。',en:'Boxplot + jitter shows distribution, median, outliers. Bar + SEM hides distribution.'}},

{type:'tf',q:{zh:'單純報 p<0.05 在 2026 已被視為統計報告不充分。',en:'Reporting only "p < 0.05" is now (2026) considered insufficient statistical reporting.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'ASA 2016 statement 後，p 值需配合效應量 + CI。',en:'Since the ASA 2016 statement, p must accompany effect size + CI.'}},

{type:'mc',q:{zh:'Table 1 通常用來呈現？',en:'Table 1 typically presents?'},
opts:[{zh:'結果',en:'Results'},{zh:'Cohort baseline characteristics',en:'Cohort baseline characteristics'},{zh:'結論',en:'Conclusions'},{zh:'方法',en:'Methods'}],ans:1,
exp:{zh:'Table 1 = baseline 描述（年齡、性別、共病等）。',en:'Table 1 = baseline characteristics (age, sex, comorbidities).'}},

{type:'mc',q:{zh:'色盲友善的連續變項 colormap 推薦？',en:'Recommended color-blind safe colormap for continuous variables?'},
opts:[{zh:'jet / rainbow',en:'jet / rainbow'},{zh:'viridis / magma',en:'viridis / magma'},{zh:'pure red',en:'pure red'},{zh:'random',en:'random'}],ans:1,
exp:{zh:'viridis/magma 為色盲友善且 perceptually uniform。',en:'viridis/magma are colorblind-safe and perceptually uniform.'}},

{type:'mc',q:{zh:'Figure caption 應包含？',en:'Figure captions should include?'},
opts:[{zh:'什麼都不必',en:'Nothing extra'},{zh:'只放標題',en:'Title only'},{zh:'n 數、所用統計檢定、誤差條代表的是 SD/SEM/95% CI、校正方法',en:'n, statistical test used, what error bars represent (SD/SEM/95% CI), correction method'},{zh:'作者名',en:'Author names'}],ans:2,
exp:{zh:'Caption 必須讓圖能 standalone — 包含 n、test、CI 等資訊。',en:'Captions must be self-contained — include n, test, CI, etc.'}},

{type:'mc',q:{zh:'Many genes × many samples 視覺化最常用什麼？',en:'Best visualization for many-genes × many-samples?'},
opts:[{zh:'pie chart',en:'pie chart'},{zh:'Heatmap (z-score 標準化)',en:'Heatmap (z-score normalized)'},{zh:'3D bar chart',en:'3D bar chart'},{zh:'單一散佈圖',en:'Single scatter'}],ans:1,
exp:{zh:'Heatmap (with z-score) 是 omics 多基因 × 多樣本的標準呈現法。',en:'Heatmap with z-score is the standard for omics many-gene × many-sample views.'}},

{type:'mc',q:{zh:'Survival analysis 的標準視覺化是？',en:'Standard survival visualization?'},
opts:[{zh:'Bar chart',en:'Bar chart'},{zh:'Kaplan-Meier curve + risk table + log-rank p',en:'Kaplan-Meier curve + risk table + log-rank p'},{zh:'Pie chart',en:'Pie chart'},{zh:'Heatmap',en:'Heatmap'}],ans:1,
exp:{zh:'KM + risk table + log-rank 是 survival 的標配。',en:'KM + risk table + log-rank is the survival standard.'}},

{type:'tf',q:{zh:'多重比較顯著性，火山圖 (volcano plot) 的 x 軸通常是 -log10(q)，y 軸是 log2FC。',en:'In a volcano plot, x is -log10(q) and y is log2FC.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:1,
exp:{zh:'Volcano plot 慣例：x = log2FC (effect size)，y = -log10(q) (significance)。',en:'Volcano convention: x = log2FC (effect size), y = -log10(q) (significance).'}}
]},

// ============================================================
// 7. Discussion
// ============================================================
{id:'discussion-limits', title_zh:'討論與限制', title_en:'Discussion & Limitations', qs:[
{type:'mc',q:{zh:'Discussion 結構與 Introduction 的關係是？',en:'Discussion vs Introduction structure?'},
opts:[{zh:'完全相同',en:'Identical'},{zh:'互為鏡像 (Intro 寬→窄；Discussion 窄→寬)',en:'Mirror images (Intro broad→narrow; Discussion narrow→broad)'},{zh:'不相關',en:'Unrelated'},{zh:'Discussion 必須超長',en:'Discussion must be very long'}],ans:1,
exp:{zh:'Hourglass 結構：Intro 漏斗 + Discussion 倒漏斗。',en:'Hourglass: Intro funnel + Discussion inverted funnel.'}},

{type:'mc',q:{zh:'觀察性研究 (n=200) 顯示 Gene X 與抗藥性顯著相關。Discussion 最佳動詞？',en:'Observational study (n=200): Gene X assoc with resistance. Best Discussion verb?'},
opts:[{zh:'proves',en:'proves'},{zh:'demonstrates',en:'demonstrates'},{zh:'establishes causation',en:'establishes causation'},{zh:'is associated with / suggests',en:'is associated with / suggests'}],ans:3,
exp:{zh:'觀察性 → suggests / associated with；不能用 proves / demonstrates / causes。',en:'Observational → suggests / associated with; never proves/demonstrates/causes.'}},

{type:'mc',q:{zh:'下列哪句屬於「真 limitations」？',en:'Which is a "real limitation"?'},
opts:[{zh:'「樣本來自單一中心，可能限制族群外推；TCGA 驗證 cohort 顯示一致趨勢」',en:'"Single-center cohort may limit generalizability; TCGA validation showed consistent trends"'},{zh:'「樣本數較少」',en:'"Sample size is small"'},{zh:'「未來會做更多研究」',en:'"Future work will do more research"'},{zh:'「結果需要更多研究確認」',en:'"Findings need further confirmation"'}],ans:0,
exp:{zh:'真 limitations 必須具體 + 有 mitigation/future fix。',en:'Real limitations are specific + have mitigation/future fix.'}},

{type:'tf',q:{zh:'Discussion 第一段應是「主要發現摘要」，1-3 句濃縮。',en:'Discussion para 1 should be "main findings summary" in 1-3 sentences.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'第一段是 1-3 句濃縮主要發現，不重貼數字。',en:'Paragraph 1 is a 1-3 sentence distillation of main findings, no number copy-paste.'}},

{type:'mc',q:{zh:'下列哪個不屬於 Discussion 標準六段？',en:'Which is NOT one of the standard 6 Discussion paragraphs?'},
opts:[{zh:'主要發現摘要',en:'Main findings summary'},{zh:'與既有文獻對話',en:'Dialogue with prior literature'},{zh:'重述所有 Methods 細節',en:'Restate all Methods details'},{zh:'限制與未來方向',en:'Limitations & future directions'}],ans:2,
exp:{zh:'Discussion 不重述 Methods；它對應 Intro 的問題並回答。',en:'Discussion doesn\'t restate Methods; it answers the questions raised in Intro.'}},

{type:'mc',q:{zh:'Hedging 動詞中，「demonstrates」屬於哪個證據強度？',en:'"demonstrates" corresponds to what evidence strength?'},
opts:[{zh:'極弱 (in silico)',en:'Very weak (in silico)'},{zh:'弱',en:'Weak'},{zh:'中等',en:'Moderate'},{zh:'極強 (RCT, mechanism)',en:'Very strong (RCT, mechanism)'}],ans:3,
exp:{zh:'demonstrate / prove / establish 為 very strong；應對應 RCT 或 mechanism 證據。',en:'demonstrate/prove/establish = very strong; reserve for RCT or mechanistic evidence.'}},

{type:'mc',q:{zh:'下列哪句最 overclaim？',en:'Which sentence overclaims most?'},
opts:[{zh:'「我們的數據顯示 X 與 Y 顯著相關 (HR 1.8, 95% CI 1.2-2.7)」',en:'"Our data show X is significantly associated with Y (HR 1.8, 95% CI 1.2-2.7)"'},{zh:'「我們的結果證明 Gene X 是核心驅動因子，必將成為新藥標靶」',en:'"Our results prove Gene X is the central driver and will become a drug target"'},{zh:'「結果與 Smith 等 (2023) 一致」',en:'"Findings consistent with Smith et al. (2023)"'},{zh:'「Functional validation 仍是必要的下一步」',en:'"Functional validation remains a necessary next step"'}],ans:1,
exp:{zh:'B 從相關跳到因果並用「必將」，是典型 overclaim。',en:'B jumps from association to causation and uses "will" — classic overclaim.'}},

{type:'mc',q:{zh:'Limitations 段落應包含幾項真實限制？',en:'How many real limitations should the Limitations paragraph include?'},
opts:[{zh:'0',en:'0'},{zh:'1',en:'1'},{zh:'3-5 項，含 mitigation',en:'3-5, with mitigation'},{zh:'15+',en:'15+'}],ans:2,
exp:{zh:'3-5 項真實 limitations + 緩解措施 + 未來修補方向，是業界標準。',en:'3-5 real limitations + mitigation + future fix is the industry standard.'}},

{type:'tf',q:{zh:'Discussion 應該包含「未來方向」，且應為 2-3 個具體 actionable 步驟而非「more research needed」。',en:'Discussion should include "future directions" — 2-3 concrete actionable steps, not "more research needed".'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'未來方向應具體 (i.e., functional KO in PDX models)，避免空洞口號。',en:'Future directions should be concrete (e.g., functional KO in PDX models), not empty slogans.'}},

{type:'mc',q:{zh:'結論段落最該與 Introduction 哪部分呼應？',en:'Conclusion paragraph should echo which part of Introduction?'},
opts:[{zh:'第一段背景',en:'Para 1 background'},{zh:'aim / hypothesis',en:'aim / hypothesis'},{zh:'摘要',en:'abstract'},{zh:'文獻回顧',en:'lit review'}],ans:1,
exp:{zh:'結論需回答 Introduction 結尾提出的 aim / hypothesis。',en:'Conclusion answers the aim/hypothesis posed at the end of Introduction.'}}
]},

// ============================================================
// 8. Abstract & Title
// ============================================================
{id:'abstract-title', title_zh:'摘要與標題', title_en:'Abstract & Title', qs:[
{type:'mc',q:{zh:'下列哪個是「結果型」標題的最佳範例？',en:'Best "findings-type" title?'},
opts:[{zh:'A study of breast cancer',en:'A study of breast cancer'},{zh:'Comprehensive analysis of TNBC',en:'Comprehensive analysis of TNBC'},{zh:'Single-cell profiling identifies three chemoresistance-associated cell states in TNBC',en:'Single-cell profiling identifies three chemoresistance-associated cell states in TNBC'},{zh:'Investigating breast cancer mechanism',en:'Investigating breast cancer mechanism'}],ans:2,
exp:{zh:'結果型標題具備：具體動詞 + 數量 + 領域，最強。',en:'Findings titles need specific verb + count + domain.'}},

{type:'mc',q:{zh:'結構式摘要的主要使用場域？',en:'Structured abstracts are primarily used by?'},
opts:[{zh:'Nature, Cell, Science 系列',en:'Nature, Cell, Science families'},{zh:'PNAS, Cell',en:'PNAS, Cell'},{zh:'NEJM, Lancet, JAMA, BMJ 等臨床期刊',en:'Clinical journals like NEJM, Lancet, JAMA, BMJ'},{zh:'Conference abstracts',en:'Conference abstracts'}],ans:2,
exp:{zh:'臨床期刊偏好結構式 (Background/Methods/Results/Conclusion)；basic science 偏非結構式。',en:'Clinical journals prefer structured (B/M/R/C); basic science prefers unstructured.'}},

{type:'mc',q:{zh:'PubMed 標題截斷的長度限制大約是？',en:'PubMed truncates titles around how many characters?'},
opts:[{zh:'30',en:'30'},{zh:'180',en:'180'},{zh:'500',en:'500'},{zh:'1000',en:'1000'}],ans:1,
exp:{zh:'PubMed display 約在 ~150-180 字元截斷，過長標題會被切。',en:'PubMed display truncates around 150-180 chars; over-length gets cut.'}},

{type:'tf',q:{zh:'摘要 Background 段應該包含 gap statement。',en:'The Abstract Background should include a gap statement.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'即使在摘要，也要明確指出「remains unclear / has not been characterized」型態的 gap。',en:'Even in the abstract, signal the gap with phrasing like "remains unclear / has not been characterized."'}},

{type:'mc',q:{zh:'摘要 Results 段最該包含？',en:'Abstract Results should include?'},
opts:[{zh:'只口號式形容詞',en:'Adjectives only'},{zh:'具體數字 + 至少一個 95% CI 或效應量',en:'Specific numbers + ≥1 95% CI or effect size'},{zh:'文獻 review',en:'Literature review'},{zh:'什麼都不必',en:'Nothing in particular'}],ans:1,
exp:{zh:'摘要 Results 必含具體數字 + 至少一個 CI / 效應量。',en:'Abstract Results must contain specific numbers + ≥1 CI or effect size.'}},

{type:'mc',q:{zh:'下列關鍵字選擇策略哪個最佳？',en:'Best keyword strategy?'},
opts:[{zh:'與標題完全相同',en:'Identical to title'},{zh:'用 MeSH terms 並避開已在標題出現的字',en:'Use MeSH terms; avoid duplicating title words'},{zh:'越多越好、越罕見越好',en:'Maximum and rarest'},{zh:'全部用大寫 acronym',en:'Only ALL-CAPS acronyms'}],ans:1,
exp:{zh:'MeSH 提升 PubMed 索引；標題已索引故避免重複。',en:'MeSH boosts PubMed indexing; title is already indexed so don\'t duplicate.'}},

{type:'mc',q:{zh:'摘要 Conclusion 段最佳語氣是？',en:'Best Conclusion tone in an abstract?'},
opts:[{zh:'會革命性改變所有臨床實踐',en:'Will revolutionize clinical practice'},{zh:'Calibrated (suggests / may / warrants further validation)',en:'Calibrated (suggests / may / warrants further validation)'},{zh:'毫無結論',en:'No conclusion at all'},{zh:'重複 Background',en:'Repeat Background'}],ans:1,
exp:{zh:'Calibrated language 是學術摘要 conclusion 的標準。',en:'Calibrated language is the standard for academic abstract conclusions.'}},

{type:'tf',q:{zh:'摘要應該在投稿前最後再寫一次，而不是論文一開始就寫。',en:'Abstracts should be re-written one last time BEFORE submission, not at the start.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'寫完論文才知道哪個結果最強，重寫摘要才能聚焦。',en:'Only after the paper is done do you know your strongest results — rewrite the abstract to feature them.'}},

{type:'mc',q:{zh:'下列哪個是「方法型」標題範例？',en:'Which is a "method-type" title example?'},
opts:[{zh:'scIBD: a benchmarking framework for single-cell integration',en:'scIBD: a benchmarking framework for single-cell integration'},{zh:'A general overview of cancer',en:'A general overview of cancer'},{zh:'On the importance of biology',en:'On the importance of biology'},{zh:'My PhD thesis',en:'My PhD thesis'}],ans:0,
exp:{zh:'方法型標題以「工具/方法名 + 描述」為核心。',en:'Method titles centre on "tool/method name + description."'}},

{type:'mc',q:{zh:'摘要 1+2+3+1 公式中的「3」對應？',en:'In the 1+2+3+1 abstract formula, "3" corresponds to?'},
opts:[{zh:'3 段 Background',en:'3 paragraphs Background'},{zh:'3 句 Results (主要發現 + 數字 + 效應量)',en:'3 sentences Results (findings + numbers + effect size)'},{zh:'3 個 Conclusion',en:'3 conclusions'},{zh:'3 個作者',en:'3 authors'}],ans:1,
exp:{zh:'1 句 Background + 2 句 Methods + 3 句 Results + 1 句 Conclusion ≈ 250 字。',en:'1 sentence Background + 2 Methods + 3 Results + 1 Conclusion ≈ 250 words.'}}
]},

// ============================================================
// 9. Style & Language
// ============================================================
{id:'style-language', title_zh:'學術寫作風格', title_en:'Style & Language', qs:[
{type:'mc',q:{zh:'2026 主流期刊偏好哪種語態？',en:'2026 mainstream journals prefer which voice?'},
opts:[{zh:'被動為主',en:'Mostly passive'},{zh:'主動為主，被動視必要使用',en:'Mostly active; passive when necessary'},{zh:'全用第三人稱',en:'Always third person'},{zh:'全用第一人稱複數',en:'Always first person plural'}],ans:1,
exp:{zh:'2026 共識：主動語態為主，方法描述等情境保留被動。',en:'2026 consensus: active voice mostly; passive for methods/procedures.'}},

{type:'mc',q:{zh:'下列哪個是「強動詞」改寫？',en:'Which is a "strong verb" rewrite?'},
opts:[{zh:'made an investigation of → investigated',en:'made an investigation of → investigated'},{zh:'investigated → made an investigation of',en:'investigated → made an investigation of'},{zh:'analyzed → performed an analysis of',en:'analyzed → performed an analysis of'},{zh:'compared → carried out a comparison',en:'compared → carried out a comparison'}],ans:0,
exp:{zh:'弱版常為「動詞 + 名詞片語」(make/perform/carry out)；改成單一強動詞。',en:'Weak: "verb + nominalization" (make/perform/carry out). Replace with single strong verb.'}},

{type:'tf',q:{zh:'"data are" 比 "data is" 文法更正確 (data 為複數)。',en:'"data are" is more grammatically correct than "data is" (data is plural).'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'data, criteria, phenomena 都是複數形；同理 analyses 等。',en:'data, criteria, phenomena are plural. Same for analyses, etc.'}},

{type:'mc',q:{zh:'「Old-to-new」原則指的是？',en:'"Old-to-new" principle refers to?'},
opts:[{zh:'老資料先寫',en:'Write old data first'},{zh:'句首延續上句的舊訊息、句尾呈現新訊息',en:'Open each sentence with prior info, end with new info'},{zh:'從新到舊倒敘',en:'Reverse chronological storytelling'},{zh:'老期刊優先投稿',en:'Submit to older journals first'}],ans:1,
exp:{zh:'句子層級 cohesion 原則：句首接舊、句尾推新。',en:'Sentence-level cohesion: open with old info, end with new.'}},

{type:'mc',q:{zh:'下列哪個是 hedging 強度從強到弱的順序？',en:'Hedging order from strong to weak?'},
opts:[{zh:'demonstrates → indicates → suggests → may',en:'demonstrates → indicates → suggests → may'},{zh:'may → suggests → indicates → demonstrates',en:'may → suggests → indicates → demonstrates'},{zh:'順序無關',en:'Order irrelevant'},{zh:'demonstrates → may → suggests',en:'demonstrates → may → suggests'}],ans:0,
exp:{zh:'強度層級：demonstrates > indicates > suggests > may。',en:'Hierarchy: demonstrates > indicates > suggests > may.'}},

{type:'mc',q:{zh:'下列哪個是「冠詞」典型錯誤？',en:'Typical "article" error?'},
opts:[{zh:'第一次提及用 "the"，唯一指稱用 "a"',en:'First mention with "the"; unique reference with "a"'},{zh:'複數泛稱用 "the"',en:'Plural generic with "the"'},{zh:'第一次提及用 "a/an"，第二次或唯一指稱用 "the"',en:'First mention with "a/an"; subsequent or unique with "the"'},{zh:'冠詞應全部省略',en:'Drop all articles'}],ans:2,
exp:{zh:'規則：first mention → a/an；subsequent / unique → the；plural generic → Ø。',en:'Rule: first mention → a/an; subsequent / unique → the; plural generic → Ø.'}},

{type:'mc',q:{zh:'句子「Gene X was upregulated, this suggests...」有什麼問題？',en:'What\'s wrong with "Gene X was upregulated, this suggests..."?'},
opts:[{zh:'什麼都沒問題',en:'Nothing'},{zh:'Run-on sentence (逗號黏連)，應改 "Gene X was upregulated. This suggests..." 或 "...upregulated, suggesting..."',en:'Run-on sentence — split into "Gene X was upregulated. This suggests..." or "...upregulated, suggesting..."'},{zh:'用了主動語態',en:'It uses active voice'},{zh:'應該用 "the gene"',en:'Should use "the gene"'}],ans:1,
exp:{zh:'兩個獨立子句不能用逗號連接，需句號或從屬子句結構。',en:'Two independent clauses can\'t join with a comma — use period or subordinate clause.'}},

{type:'mc',q:{zh:'「In order to」最佳改寫？',en:'Best rewrite of "in order to"?'},
opts:[{zh:'保留不改',en:'Keep as is'},{zh:'to',en:'to'},{zh:'for the purpose of',en:'for the purpose of'},{zh:'with the aim of',en:'with the aim of'}],ans:1,
exp:{zh:'「In order to」是冗詞，「to」即可。',en:'"In order to" is wordy; "to" suffices.'}},

{type:'tf',q:{zh:'Methods 與 Results 通常用過去式。',en:'Methods and Results typically use past tense.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'Methods 與 Results 用過去式 (we performed, we found)；既有事實用現在式。',en:'Methods/Results use past tense; established facts use present.'}},

{type:'mc',q:{zh:'下列哪個是「翻譯腔」最大來源？',en:'Single biggest source of "translationese"?'},
opts:[{zh:'冠詞錯誤',en:'Article errors'},{zh:'時態錯誤',en:'Tense errors'},{zh:'搭配 (collocation) 不自然 (e.g. "make an experiment")',en:'Unnatural collocations (e.g. "make an experiment")'},{zh:'拼字錯誤',en:'Spelling'}],ans:2,
exp:{zh:'Collocation 是 L2 作者最常被改的問題：do an experiment ✅、make an experiment ❌。',en:'Collocations are the most-edited L2 issue: "do an experiment" ✅; "make an experiment" ❌.'}}
]},

// ============================================================
// 10. Citation & Reference Management
// ============================================================
{id:'citation-references', title_zh:'引用與文獻管理', title_en:'Citation & Reference Management', qs:[
{type:'mc',q:{zh:'大多生醫期刊 (Cell, Nature, NEJM, JAMA) 使用的引用風格是？',en:'Citation style used by most biomedical journals?'},
opts:[{zh:'Vancouver (numbered)',en:'Vancouver (numbered)'},{zh:'APA 7th',en:'APA 7th'},{zh:'Chicago',en:'Chicago'},{zh:'MLA',en:'MLA'}],ans:0,
exp:{zh:'生醫期刊以 Vancouver (按出現順序編號) 為主流。',en:'Biomedical journals predominantly use Vancouver (numbered by appearance).'}},

{type:'mc',q:{zh:'LaTeX BibLaTeX 與 Zotero 整合最佳工具是？',en:'Best Zotero-LaTeX integration tool?'},
opts:[{zh:'手寫 BibTeX',en:'Hand-typing BibTeX'},{zh:'EndNote',en:'EndNote'},{zh:'Better BibTeX 外掛 → 自動同步 .bib',en:'Better BibTeX plugin → auto-sync .bib'},{zh:'Google Scholar 複製貼上',en:'Copy-paste from Google Scholar'}],ans:2,
exp:{zh:'Zotero + Better BibTeX 是 LaTeX 寫作的事實標準。',en:'Zotero + Better BibTeX is the de facto LaTeX standard.'}},

{type:'mc',q:{zh:'CSL (Citation Style Language) 的主要功能是？',en:'Main function of CSL (Citation Style Language)?'},
opts:[{zh:'寫程式',en:'Programming'},{zh:'一鍵切換期刊引用格式',en:'One-click switching of journal citation styles'},{zh:'寫 LaTeX',en:'Writing LaTeX'},{zh:'產生圖表',en:'Generate charts'}],ans:1,
exp:{zh:'CSL 是 XML 格式，定義引用樣式；切換 style → 全文自動重排。',en:'CSL is XML defining citation styles; switching style auto-reformats the whole document.'}},

{type:'tf',q:{zh:'手寫 reference list 比工具管理更可靠。',en:'Hand-typing the reference list is more reliable than tool management.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:1,
exp:{zh:'手寫幾乎 100% 會打錯；應使用 Zotero/EndNote/Paperpile。',en:'Hand-typing has ~100% error rate; use Zotero/EndNote/Paperpile.'}},

{type:'mc',q:{zh:'引用 "[1-15]" 引 15 篇論文有什麼問題？',en:'What\'s wrong with citing 15 papers as "[1-15]" in one place?'},
opts:[{zh:'數量太多違反期刊規定',en:'Too many violates journal rules'},{zh:'沒有指向性，讀者無法判斷哪篇對應哪個 claim',en:'Non-specific — readers can\'t tell which paper supports which claim'},{zh:'Vancouver 不能引超過 10 篇',en:'Vancouver caps at 10'},{zh:'沒有問題',en:'No problem'}],ans:1,
exp:{zh:'籠統群引讓 reviewer 無法追論點來源；每個 claim 應有指向性 cite。',en:'Bulk citation hides which paper supports which claim — be specific.'}},

{type:'mc',q:{zh:'2026 推薦的開源文獻管理工具是？',en:'2026 recommended open-source reference manager?'},
opts:[{zh:'EndNote',en:'EndNote'},{zh:'Zotero',en:'Zotero'},{zh:'Mendeley',en:'Mendeley'},{zh:'Paperpile',en:'Paperpile'}],ans:1,
exp:{zh:'Zotero 為唯一開源、跨平台、有強力 LaTeX 整合，2026 首選。',en:'Zotero is the only open-source, cross-platform tool with strong LaTeX integration — 2026 top pick.'}},

{type:'mc',q:{zh:'APA 7th 的文中引用格式範例？',en:'APA 7th in-text citation example?'},
opts:[{zh:'(Smith & Lin, 2023)',en:'(Smith & Lin, 2023)'},{zh:'[1,2]',en:'[1,2]'},{zh:'Smith and Lin 2023',en:'Smith and Lin 2023'},{zh:'(SL2023)',en:'(SL2023)'}],ans:0,
exp:{zh:'APA 7th: (作者姓 & 作者姓, 年份)。',en:'APA 7th: (Author surname & Author surname, Year).'}},

{type:'mc',q:{zh:'下列哪個工具最適合「即時警示引用 retracted papers」？',en:'Best for "real-time warning of retracted citations"?'},
opts:[{zh:'Microsoft Word 預設',en:'Microsoft Word default'},{zh:'Retraction Watch + Zotero 整合',en:'Retraction Watch + Zotero integration'},{zh:'手動 Google',en:'Manual Google'},{zh:'PDF reader',en:'PDF reader'}],ans:1,
exp:{zh:'Zotero 內建 Retraction Watch 整合，引到撤稿論文時自動警告。',en:'Zotero integrates Retraction Watch and warns automatically when citing retracted papers.'}},

{type:'tf',q:{zh:'Author-Year (Harvard) 風格通常用於生態學、地球科學。',en:'Author-Year (Harvard) is typically used in ecology, earth sciences.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'Author-Year 在生態、地科、部分公衛較常用；生醫主刊以 Vancouver 為主。',en:'Author-Year is common in ecology, earth sciences, some public health; biomedical mostly Vancouver.'}},

{type:'mc',q:{zh:'Quarto / R Markdown 中引用語法為？',en:'Quarto / R Markdown citation syntax?'},
opts:[{zh:'\\cite{key}',en:'\\cite{key}'},{zh:'@key 或 [@key1; @key2]',en:'@key or [@key1; @key2]'},{zh:'(citation)',en:'(citation)'},{zh:'[citation]',en:'[citation]'}],ans:1,
exp:{zh:'Quarto / R Markdown 用 Pandoc 風格 @key 語法。',en:'Quarto / R Markdown uses Pandoc-style @key syntax.'}}
]},

// ============================================================
// 11. Journal Strategy
// ============================================================
{id:'journal-strategy', title_zh:'期刊選擇與投稿策略', title_en:'Journal Strategy', qs:[
{type:'mc',q:{zh:'掠奪性期刊 (predatory journal) 最可靠的紅旗是？',en:'Most reliable red flag of predatory journal?'},
opts:[{zh:'.org domain',en:'.org domain'},{zh:'收 APC',en:'Charges APC'},{zh:'承諾 7 天 peer review + 列出假 "Universal Impact Factor"',en:'Promises 7-day peer review + lists fake "Universal Impact Factor"'},{zh:'是 OA 期刊',en:'Is an OA journal'}],ans:2,
exp:{zh:'掠奪性的關鍵特徵是「短審查 + 假 metric + 不透明編輯團隊」。',en:'Predatory hallmarks: short peer review + fake metric + opaque editorial board.'}},

{type:'mc',q:{zh:'Incremental 但紮實的 cohort 研究 (n=240) 最佳投稿策略？',en:'Solid but incremental cohort (n=240) best strategy?'},
opts:[{zh:'從 specialty solid 期刊開始 (Cancer Res, Sci Rep)，避開 CNS 浪費時間',en:'Start at specialty solid (Cancer Res, Sci Rep); skip CNS to save time'},{zh:'直接投 Nature, Cell, Science',en:'Try Nature/Cell/Science directly'},{zh:'同時投 5 家',en:'Submit to 5 simultaneously'},{zh:'只投 IF >30',en:'Only IF >30'}],ans:0,
exp:{zh:'Incremental 投 specialty solid 最有效率，CNS 對其只是 desk-reject 風險。',en:'Specialty solid is most efficient for incremental work; CNS is just desk-reject risk.'}},

{type:'mc',q:{zh:'NIH funder 強制 OA。哪個 OA 模式 funder 不接受？',en:'NIH mandates OA. Which OA model is generally not accepted?'},
opts:[{zh:'Gold OA',en:'Gold OA'},{zh:'Hybrid (paywall + 付費 OA)，被視為 double-dipping',en:'Hybrid (paywall + paid OA), considered double-dipping'},{zh:'Diamond OA',en:'Diamond OA'},{zh:'Green OA (preprint + PMC)',en:'Green OA (preprint + PMC)'}],ans:1,
exp:{zh:'Hybrid 被 cOAlition S / Plan S 視為 double-dipping。',en:'Hybrid is treated as double-dipping by cOAlition S / Plan S.'}},

{type:'tf',q:{zh:'同時把同一篇論文投到多家期刊是學術倫理大忌。',en:'Submitting the same paper to multiple journals simultaneously is a major ethics breach.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'同時投稿 = duplicate submission，違反 ICMJE 與大多期刊政策。',en:'Simultaneous submission = duplicate submission, violates ICMJE and most journal policies.'}},

{type:'mc',q:{zh:'下列何者「不」屬於期刊評估維度？',en:'Which is NOT a journal assessment dimension?'},
opts:[{zh:'Scope (主題範圍)',en:'Scope'},{zh:'Audience (受眾)',en:'Audience'},{zh:'IF / CiteScore',en:'IF / CiteScore'},{zh:'Editor 的家鄉',en:'Editor\'s hometown'}],ans:3,
exp:{zh:'Editor 家鄉與評估無關。Scope, Audience, IF, OA 模式才是核心維度。',en:'Editor\'s hometown is irrelevant. Core: Scope, Audience, IF, OA model.'}},

{type:'mc',q:{zh:'Pre-submission inquiry 通常做什麼？',en:'What does a pre-submission inquiry do?'},
opts:[{zh:'代替正式投稿',en:'Replaces formal submission'},{zh:'寄 1 段摘要詢問 editor 是否合適 fit；通常 1-2 週內回覆',en:'Email 1-paragraph summary asking editor about fit; reply in 1-2 weeks'},{zh:'付費加速審查',en:'Paid review acceleration'},{zh:'把論文上傳到 preprint server',en:'Upload to a preprint server'}],ans:1,
exp:{zh:'適用於 high-IF 期刊，避免白寫一個版本的 cover letter。',en:'Useful for high-IF journals to avoid wasted submission cycles.'}},

{type:'mc',q:{zh:'Cover letter 最佳寫法包含？',en:'Best cover letter includes?'},
opts:[{zh:'只寫「請考慮我們的論文」',en:'Just "please consider our paper"'},{zh:'指明 Editor 姓名 + 為何 fit + 主要貢獻 + 建議/排除審稿人',en:'Editor\'s name + why it fits + main contribution + suggested/excluded reviewers'},{zh:'寫滿 5 頁',en:'5 pages of text'},{zh:'附上家庭照',en:'Attach family photos'}],ans:1,
exp:{zh:'Cover letter 是 editor 篩選的第一道關。',en:'Cover letter is editor\'s first filter.'}},

{type:'tf',q:{zh:'OA 期刊未在 DOAJ 收錄是 100% 警示信號。',en:'OA journals not in DOAJ are a 100% red flag.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'真 OA 期刊一定在 DOAJ；若不是，幾乎可確認為掠奪性。',en:'Real OA journals are in DOAJ; absence almost certainly indicates predatory status.'}},

{type:'mc',q:{zh:'方法學突破 (e.g. 新 single-cell algorithm) 最該投？',en:'Methods breakthrough (e.g., new single-cell algorithm) → best fit?'},
opts:[{zh:'Cancer Res',en:'Cancer Res'},{zh:'Nat Methods, Genome Biol, Bioinformatics, Nat Comput Sci',en:'Nat Methods, Genome Biol, Bioinformatics, Nat Comput Sci'},{zh:'NEJM',en:'NEJM'},{zh:'BMJ',en:'BMJ'}],ans:1,
exp:{zh:'方法學期刊：Nat Methods, Genome Biol, Bioinformatics, Nat Comput Sci。',en:'Methods journals: Nat Methods, Genome Biol, Bioinformatics, Nat Comput Sci.'}},

{type:'mc',q:{zh:'可信的 IF / metric 來源是？',en:'Trustworthy IF/metric sources?'},
opts:[{zh:'期刊網站自稱',en:'Journal\'s self-declared metric'},{zh:'JCR (Clarivate), CiteScore (Scopus), SJR (Scimago)',en:'JCR (Clarivate), CiteScore (Scopus), SJR (Scimago)'},{zh:'"Universal Impact Factor"',en:'"Universal Impact Factor"'},{zh:'Wikipedia',en:'Wikipedia'}],ans:1,
exp:{zh:'JCR, Scopus, Scimago 是業界公認的官方指標。',en:'JCR, Scopus, Scimago are the recognized official metrics.'}}
]},

// ============================================================
// 12. Peer Review
// ============================================================
{id:'peer-review-response', title_zh:'同儕審查與回覆信', title_en:'Peer Review & Response', qs:[
{type:'mc',q:{zh:'收到 Major Revision 的最佳心態？',en:'Best mindset on receiving Major Revision?'},
opts:[{zh:'放棄撤稿',en:'Withdraw'},{zh:'與 reviewer 大量爭辯',en:'Argue extensively'},{zh:'視為論文變更好的機會，~50-70% 接受率',en:'Opportunity to improve; ~50-70% acceptance'},{zh:'隨便改快速回覆',en:'Sloppy quick fix'}],ans:2,
exp:{zh:'Major Revision 接受率多在 50-70%，是改善論文的關鍵機會。',en:'Major Revision acceptance is typically 50-70% — a key opportunity.'}},

{type:'mc',q:{zh:'Point-by-point response 每個 comment 的最佳結構？',en:'Best structure per comment in point-by-point response?'},
opts:[{zh:'只寫「已修改」',en:'Just "changed"'},{zh:'只寫「不同意」',en:'Just "disagree"'},{zh:'引用原話 → 我們的回應 → 改動的頁碼/行號 → 必要時引新數據',en:'Quote verbatim → response → page/line → cite new data if needed'},{zh:'用 emoji 表情',en:'Use emoji'}],ans:2,
exp:{zh:'四元素結構：原話 → 回應 → 改動位置 → 新數據。',en:'Four-element structure: quote → response → location → new data.'}},

{type:'mc',q:{zh:'當 reviewer，最嚴重的倫理違規是？',en:'As reviewer, most serious ethical violation?'},
opts:[{zh:'要求作者引用自己的論文 (citation coercion)',en:'Demanding citations to your own papers (citation coercion)'},{zh:'用學生協助 (告知 editor)',en:'Letting student help, with editor disclosed'},{zh:'拒絕 review',en:'Declining the review'},{zh:'給 minor revision',en:'Recommending minor revision'}],ans:0,
exp:{zh:'Citation coercion 是 COPE 嚴重違規。',en:'Citation coercion is a major COPE violation.'}},

{type:'tf',q:{zh:'Reviewer 不可以把 confidential manuscript 上傳到 ChatGPT 等公開 AI。',en:'Reviewers cannot upload confidential manuscripts to public AI like ChatGPT.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'Cell, NEJM, JAMA, NIH 明文禁止此行為，視為 confidentiality breach。',en:'Cell, NEJM, JAMA, NIH explicitly prohibit this — it\'s a confidentiality breach.'}},

{type:'mc',q:{zh:'回覆 reviewer 不同意時的最佳做法？',en:'Best practice when disagreeing with a reviewer?'},
opts:[{zh:'情緒化反駁',en:'Emotional rebuttal'},{zh:'禮貌不同意 + 提供具體依據 (additional analysis / supplementary figure)',en:'Polite disagreement + concrete evidence (additional analysis / supplementary figure)'},{zh:'什麼都不回',en:'Don\'t reply'},{zh:'要求換 reviewer',en:'Demand a new reviewer'}],ans:1,
exp:{zh:'禮貌 + 依據是說服 editor 的關鍵。',en:'Polite + evidenced response is what convinces editors.'}},

{type:'mc',q:{zh:'5 種 editor 決定信中，「Reject and Resubmit」意味著？',en:'Among 5 editor decisions, "Reject and Resubmit" means?'},
opts:[{zh:'絕對拒絕',en:'Absolute reject'},{zh:'幾乎接受',en:'Nearly accepted'},{zh:'重投當新稿，舊評論可參考',en:'Resubmit as new manuscript; old comments are reference'},{zh:'立刻發表',en:'Publish immediately'}],ans:2,
exp:{zh:'Reject & Resubmit 是介於 Major Revision 與 Reject 之間，當新案投回。',en:'Reject & Resubmit sits between Major Revision and Reject — resubmit as a new submission.'}},

{type:'tf',q:{zh:'好的審稿應包含 Summary、Major points、Minor points、Confidential to editor 四部分。',en:'A good review includes Summary, Major points, Minor points, Confidential to editor.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'此為標準 reviewer 結構，Confidential 部分專供 editor 私下參考。',en:'Standard reviewer structure; Confidential is for editor only.'}},

{type:'mc',q:{zh:'回覆信 (response letter) 最該附上？',en:'Response letter should attach?'},
opts:[{zh:'只 clean version',en:'Clean version only'},{zh:'只 tracked-changes',en:'Tracked-changes only'},{zh:'Clean version + tracked-changes / coloured version',en:'Both clean version + tracked-changes / coloured version'},{zh:'什麼都不附',en:'Nothing'}],ans:2,
exp:{zh:'兩個版本都附，editor 一眼能看出修改範圍。',en:'Attach both — editors see changes at a glance.'}},

{type:'mc',q:{zh:'處理 reviewer comments 第一步應該是？',en:'First step on receiving reviewer comments?'},
opts:[{zh:'立刻回覆',en:'Reply immediately'},{zh:'休息 24 小時冷靜後再讀',en:'Take 24 hours to cool down before reading carefully'},{zh:'撤稿',en:'Withdraw'},{zh:'怪 PI',en:'Blame the PI'}],ans:1,
exp:{zh:'第一次讀通常會生氣；24 小時後 80% 批評會看起來合理。',en:'First read = anger; after 24 hours, 80% of critiques appear reasonable.'}},

{type:'mc',q:{zh:'下列哪個是 reviewer 訓練資源？',en:'Which is a reviewer training resource?'},
opts:[{zh:'TikTok',en:'TikTok'},{zh:'Web of Science Reviewer Academy / ASAPbio Reviewer Trainee Programme',en:'Web of Science Reviewer Academy / ASAPbio Reviewer Trainee Programme'},{zh:'Twitter',en:'Twitter'},{zh:'Reddit',en:'Reddit'}],ans:1,
exp:{zh:'Web of Science Reviewer Academy + ASAPbio 是業界正式 reviewer 訓練。',en:'Web of Science Reviewer Academy + ASAPbio are formal reviewer training programs.'}}
]},

// ============================================================
// 13. Ethics & Authorship
// ============================================================
{id:'ethics-authorship', title_zh:'倫理與作者貢獻', title_en:'Ethics & Authorship', qs:[
{type:'mc',q:{zh:'ICMJE author 必須同時符合多少條件？',en:'How many ICMJE criteria must an author meet simultaneously?'},
opts:[{zh:'1',en:'1'},{zh:'2',en:'2'},{zh:'3',en:'3'},{zh:'4',en:'4'}],ans:3,
exp:{zh:'ICMJE 4 條件：實質貢獻、撰稿/批判修訂、同意最終版、accountability。',en:'ICMJE 4 criteria: substantial contribution, drafting/critical revision, final approval, accountability.'}},

{type:'mc',q:{zh:'CRediT taxonomy 共有多少角色？',en:'How many roles in CRediT taxonomy?'},
opts:[{zh:'5',en:'5'},{zh:'14',en:'14'},{zh:'22',en:'22'},{zh:'30',en:'30'}],ans:1,
exp:{zh:'CRediT (NISO Z39.104) 定義 14 個 contributor roles。',en:'CRediT (NISO Z39.104) defines 14 contributor roles.'}},

{type:'mc',q:{zh:'Lab manager 純執行 SOP 收集樣本但無設計/寫作，最佳處理？',en:'Lab manager only ran SOPs without design/writing input. Best handling?'},
opts:[{zh:'第一作者',en:'First author'},{zh:'通訊作者',en:'Corresponding author'},{zh:'共同作者',en:'Co-author'},{zh:'列入 Acknowledgements (不符 ICMJE 第 ②③④)',en:'Acknowledged (does not meet ICMJE criteria ②③④)'}],ans:3,
exp:{zh:'純執行 SOP 不符合「實質學術貢獻」與「批判性修訂」，應 acknowledge。',en:'SOP-only execution doesn\'t meet substantial intellectual contribution; acknowledge instead.'}},

{type:'mc',q:{zh:'把同一 cohort 切成 3 篇論文發表，每篇分析不同 subset，稱為？',en:'Splitting one cohort into 3 papers analyzing different subsets is called?'},
opts:[{zh:'延伸發表 (合理)',en:'Extension (acceptable)'},{zh:'Replication study',en:'Replication study'},{zh:'Salami slicing (學術不端)',en:'Salami slicing (misconduct)'},{zh:'Multi-paper strategy (合理)',en:'Multi-paper strategy (acceptable)'}],ans:2,
exp:{zh:'Salami slicing 是學術不端，editor 比對 cohort 重疊度可立刻發現。',en:'Salami slicing is misconduct; editors detect cohort overlap.'}},

{type:'tf',q:{zh:'2026 多數主流期刊已強制 corresponding author 提供 ORCID iD。',en:'By 2026 most mainstream journals require ORCID for corresponding authors.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'PLOS, Nature, Cell, Springer, Wiley 等已強制。',en:'PLOS, Nature, Cell, Springer, Wiley etc. all require it.'}},

{type:'mc',q:{zh:'下列何者「不」屬於學術誠信絕對紅線？',en:'Which is NOT an absolute integrity red line?'},
opts:[{zh:'偽造數據 (Fabrication)',en:'Fabrication'},{zh:'抄襲 (Plagiarism)',en:'Plagiarism'},{zh:'引用較少',en:'Citing fewer references'},{zh:'Salami slicing',en:'Salami slicing'}],ans:2,
exp:{zh:'引用多寡不是絕對紅線；偽造、抄襲、salami slicing 才是。',en:'Number of references is not a red line; fabrication, plagiarism, salami slicing are.'}},

{type:'mc',q:{zh:'COI form 中需揭露的時間範圍是？',en:'COI disclosure typically covers what time range?'},
opts:[{zh:'1 個月',en:'1 month'},{zh:'過去 3 個月',en:'Past 3 months'},{zh:'過去 36 個月',en:'Past 36 months'},{zh:'過去 10 年',en:'Past 10 years'}],ans:2,
exp:{zh:'ICMJE Disclosure of Interest form 標準為過去 36 個月。',en:'ICMJE Disclosure of Interest form covers the past 36 months.'}},

{type:'mc',q:{zh:'CRediT 中「Supervision」典型對應哪個角色？',en:'CRediT "Supervision" typically maps to?'},
opts:[{zh:'PhD 學生',en:'PhD student'},{zh:'PI / mentor',en:'PI / mentor'},{zh:'Lab technician',en:'Lab technician'},{zh:'Editor',en:'Editor'}],ans:1,
exp:{zh:'Supervision 對應 PI / mentor 的研究指導角色。',en:'Supervision corresponds to PI / mentor research oversight.'}},

{type:'tf',q:{zh:'ORCID 是 author 的 ID；ROR 是 institution 的 ID。',en:'ORCID is for authors; ROR is for institutions.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'ORCID = 16 位 author ID；ROR = Research Organization Registry。',en:'ORCID = 16-digit author ID; ROR = Research Organization Registry.'}},

{type:'mc',q:{zh:'Ghost / Gift / Guest authorship 三者共同特徵？',en:'Ghost/Gift/Guest authorship share what feature?'},
opts:[{zh:'都是合理的',en:'All acceptable'},{zh:'都違反 ICMJE 4 條件',en:'All violate ICMJE 4 criteria'},{zh:'都需要付費',en:'All require payment'},{zh:'都增加 IF',en:'All boost IF'}],ans:1,
exp:{zh:'Ghost (真貢獻者沒掛)、Gift (沒貢獻但掛)、Guest (掛大牌增可信度) 均違反 ICMJE。',en:'Ghost (real contributor uncredited), Gift (uninvolved listed), Guest (famous name added) all violate ICMJE.'}}
]},

// ============================================================
// 14. AI Tools & Reproducibility
// ============================================================
{id:'ai-tools-reproducibility', title_zh:'AI 工具與可重現實踐', title_en:'AI & Reproducibility', qs:[
{type:'mc',q:{zh:'2026 主流期刊對 AI 作者身分的政策是？',en:'2026 mainstream policy on AI authorship?'},
opts:[{zh:'AI 可以掛 author',en:'AI can be an author'},{zh:'AI 不能掛 author (因不能承擔 accountability)',en:'AI cannot be an author (cannot bear accountability)'},{zh:'AI 必須掛通訊作者',en:'AI must be corresponding author'},{zh:'視 AI 模型而定',en:'Depends on the AI model'}],ans:1,
exp:{zh:'所有主流期刊禁止 AI 列為 author；ICMJE 第 ④ 條 accountability 是關鍵理由。',en:'All major publishers prohibit AI as author; ICMJE criterion ④ accountability is the key reason.'}},

{type:'mc',q:{zh:'用 ChatGPT 草擬 Discussion 段落後修改。2026 標準做法？',en:'Drafted Discussion with ChatGPT then edited. 2026 standard?'},
opts:[{zh:'ChatGPT 列為 co-author',en:'List ChatGPT as co-author'},{zh:'完全不揭露',en:'No disclosure needed'},{zh:'在 Acknowledgements / Methods 揭露工具名 + 版本 + 用途',en:'Disclose tool + version + use in Acknowledgements / Methods'},{zh:'撤稿',en:'Withdraw'}],ans:2,
exp:{zh:'2026 共識：實質草擬必須揭露；author 對內容負全責。',en:'2026 consensus: substantive drafting must be disclosed; authors take full responsibility.'}},

{type:'tf',q:{zh:'Reviewer 把 confidential manuscript 上傳到 ChatGPT 是 confidentiality breach。',en:'Reviewer uploading confidential manuscript to ChatGPT is a confidentiality breach.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'Cell, NEJM, JAMA, NIH 明文禁止此行為。',en:'Cell, NEJM, JAMA, NIH explicitly prohibit this.'}},

{type:'mc',q:{zh:'Cell Press 對 generative AI 製作科學圖片的政策是？',en:'Cell Press policy on generative AI for scientific images?'},
opts:[{zh:'歡迎使用',en:'Encouraged'},{zh:'明文禁止 (DALL-E, Midjourney, Stable Diffusion)',en:'Explicitly prohibited (DALL-E, Midjourney, Stable Diffusion)'},{zh:'只能用 Midjourney',en:'Midjourney only'},{zh:'只能用 DALL-E',en:'DALL-E only'}],ans:1,
exp:{zh:'Cell Press 等明文禁止 AI 製作或修改科學圖片。',en:'Cell Press etc. explicitly prohibit AI for creating/editing scientific images.'}},

{type:'mc',q:{zh:'2026 推薦的 reproducible publishing 框架？',en:'2026 recommended reproducible publishing framework?'},
opts:[{zh:'Microsoft Word',en:'Microsoft Word'},{zh:'Quarto (R + Python + Julia + Observable)',en:'Quarto (R + Python + Julia + Observable)'},{zh:'Notepad',en:'Notepad'},{zh:'Google Slides',en:'Google Slides'}],ans:1,
exp:{zh:'Quarto 為 R Markdown 後繼者，2026 reproducibility 首選。',en:'Quarto, the successor to R Markdown, is the 2026 top pick.'}},

{type:'tf',q:{zh:'2026 主流期刊 (Cell, Nature, PNAS, eLife) 普遍接受 preprint 並行投稿。',en:'2026 mainstream journals (Cell, Nature, PNAS, eLife) accept parallel preprinting.'},
opts:[{zh:'是',en:'True'},{zh:'否',en:'False'}],ans:0,
exp:{zh:'Preprint 在 2026 已成主流，bioRxiv DOI 可即時引用。',en:'Preprints are mainstream by 2026; bioRxiv DOI is immediately citable.'}},

{type:'mc',q:{zh:'生命科學最常用的 preprint server 是？',en:'Most-used preprint server for life sciences?'},
opts:[{zh:'arXiv',en:'arXiv'},{zh:'bioRxiv',en:'bioRxiv'},{zh:'GitHub',en:'GitHub'},{zh:'Twitter',en:'Twitter'}],ans:1,
exp:{zh:'bioRxiv (CSHL 維護) 為生命科學主流。',en:'bioRxiv (CSHL maintained) is mainstream in life sciences.'}},

{type:'mc',q:{zh:'下列何者「不」需要 AI 揭露？',en:'Which does NOT require AI disclosure?'},
opts:[{zh:'用 ChatGPT 草擬整段 Discussion',en:'Drafting whole Discussion paragraphs with ChatGPT'},{zh:'用 Claude 重新組織 Methods',en:'Reorganizing Methods with Claude'},{zh:'用 Grammarly 校對文法',en:'Grammar check via Grammarly'},{zh:'用 ChatGPT 自動生成全文 abstract',en:'Auto-generating the abstract with ChatGPT'}],ans:2,
exp:{zh:'純文法校對通常不要求揭露；草擬實質內容才需要。',en:'Pure grammar check usually doesn\'t require disclosure; substantive drafting does.'}},

{type:'mc',q:{zh:'FAIR 原則的「F」代表？',en:'"F" in FAIR principles?'},
opts:[{zh:'Fast',en:'Fast'},{zh:'Findable',en:'Findable'},{zh:'Free',en:'Free'},{zh:'Final',en:'Final'}],ans:1,
exp:{zh:'FAIR = Findable, Accessible, Interoperable, Reusable。',en:'FAIR = Findable, Accessible, Interoperable, Reusable.'}},

{type:'mc',q:{zh:'AI 使用紅綠燈中，「絕對禁止」的是？',en:'In the AI traffic light, "absolutely prohibited" is?'},
opts:[{zh:'用 AI 校對文法',en:'Use AI for grammar'},{zh:'掛 AI 為 author、AI 生成科學圖片、把 confidential manuscript 上傳到 public AI',en:'AI as author / AI-generated scientific images / uploading confidential manuscript to public AI'},{zh:'用 AI 翻譯',en:'Use AI for translation'},{zh:'用 AI 結構建議',en:'Use AI for structural suggestions'}],ans:1,
exp:{zh:'這三項是 2026 業界共識的紅線。',en:'These three are the 2026 industry-consensus red lines.'}}
]}

];
