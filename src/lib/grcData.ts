export let role = "admin";

export const userData = [
  {
    id: "1",
    userId: "user001",
    password: "password001",
  },
  {
    id: "2",
    userId: "user002",
    password: "password002",
  },
  {
    id: "3",
    userId: "user003",
    password: "password003",
  },
  {
    id: "4",
    userId: "user004",
    password: "password004",
  },
  {
    id: "5",
    userId: "user005",
    password: "password005",
  },
];

export const departmentData = [
  {
    id: "1",
    name: "董事会",
  },
  {
    id: "2",
    name: "高级管理层",
  },
  {
    id: "3",
    name: "综合与信息部",
  },
  {
    id: "4",
    name: "党群监审部",
  },
  {
    id: "5",
    name: "业务部门",
  },
  {
    id: "6",
    name: "结算管理部",
  },
  {
    id: "7",
    name: "信贷管理部",
  },
  {
    id: "8",
    name: "投资管理部",
  },
  {
    id: "9",
    name: "财务管理部",
  },
  {
    id: "10",
    name: "风险管理部",
  },
];

export const locationData = [
  {
    id: "1",
    name: "利通广场",
  },
  {
    id: "2",
    name: "中国联通广东云数据中心广州观达路基地",
  },
  {
    id: "3",
    name: "广东省交通集团有限公司数据中心",
  },
];

export const entityTierData = [
  {
    id: "1",
    name: "business",
    label: "业务",
    level: "10",
  },
  {
    id: "2",
    name: "application",
    label: "应用",
    level: "20",
  },
  {
    id: "3",
    name: "asset",
    label: "资产",
    level: "30",
  },
];

export const entityClassData = [
  {
    id: "1",
    name: "公司",
    description: "Company ",
    tierId: "",
    predecessorId: "",
    isRoot: "TRUE",
  },
  {
    id: "2",
    name: "业务线",
    description: "Line of Business ",
    tierId: "",
    predecessorId: "1",
    isRoot: "FALSE",
  },
  {
    id: "3",
    name: "部门",
    description: "Department ",
    tierId: "",
    predecessorId: "1",
    isRoot: "FALSE",
  },
  {
    id: "4",
    name: "员工",
    description: "Employee ",
    tierId: "",
    predecessorId: "",
    isRoot: "FALSE",
  },
  {
    id: "5",
    name: "场地设施",
    description: "Facility ",
    tierId: "",
    predecessorId: "3",
    isRoot: "FALSE",
  },
  {
    id: "6",
    name: "业务能力",
    description:
      "Business Capability 组织执行其业务模式或完成其使命所需的高层能力",
    tierId: "1",
    predecessorId: "",
    isRoot: "FALSE",
  },
  {
    id: "7",
    name: "业务服务",
    description:
      "Business Service 向业务用户提供的服务，通常支持一个或多个业务能力",
    tierId: "1",
    predecessorId: "3",
    isRoot: "FALSE",
  },
  {
    id: "8",
    name: "应用服务",
    description: "Application Service 运行中的应用实例",
    tierId: "2",
    predecessorId: "",
    isRoot: "FALSE",
  },
  {
    id: "9",
    name: "技术服务",
    description: "Technical Service 具有服务所有者，通常支持一个或多个业务服务",
    tierId: "",
    predecessorId: "",
    isRoot: "FALSE",
  },
  {
    id: "10",
    name: "计算机",
    description: "Computer ",
    tierId: "3",
    predecessorId: "",
    isRoot: "FALSE",
  },
  {
    id: "11",
    name: "数据库",
    description: "Database ",
    tierId: "3",
    predecessorId: "",
    isRoot: "FALSE",
  },
  {
    id: "12",
    name: "服务器",
    description: "Server ",
    tierId: "3",
    predecessorId: "",
    isRoot: "FALSE",
  },
  {
    id: "13",
    name: "网络",
    description: "Network ",
    tierId: "3",
    predecessorId: "",
    isRoot: "",
  },
  {
    id: "14",
    name: "项目",
    description: "Project ",
    tierId: "2",
    predecessorId: "",
    isRoot: "FALSE",
  },
  {
    id: "15",
    name: "供应商",
    description: "Vendor ",
    tierId: "",
    predecessorId: "7",
    isRoot: "FALSE",
  },
];

export const entityTypeData = [
  {
    id: "1",
    name: "部门",
    description: "",
    isActive: "TRUE",
  },
  {
    id: "2",
    name: "供应商",
    description: "",
    isActive: "TRUE",
  },
  {
    id: "3",
    name: "应用服务",
    description: "",
    isActive: "TRUE",
  },
  {
    id: "4",
    name: "数据库",
    description: "",
    isActive: "TRUE",
  },
  {
    id: "5",
    name: "服务器",
    description: "",
    isActive: "TRUE",
  },
];

export const entityData = [
  {
    id: "1",
    name: "客户支持部",
    description: "Customer Support",
    entityTypeIds: "1",
    entityClassId: "3",
  },
  {
    id: "2",
    name: "财务部",
    description: "Finance",
    entityTypeIds: "1",
    entityClassId: "3",
  },
  {
    id: "3",
    name: "人力资源部",
    description: "HR",
    entityTypeIds: "1",
    entityClassId: "3",
  },
  {
    id: "4",
    name: "信息科技部",
    description: "IT",
    entityTypeIds: "1",
    entityClassId: "3",
  },
  {
    id: "5",
    name: "Workday Enterprise",
    description: "",
    entityTypeIds: "3",
    entityClassId: "8",
  },
  {
    id: "6",
    name: "SAP系统",
    description: "",
    entityTypeIds: "3",
    entityClassId: "8",
  },
  {
    id: "7",
    name: "Linux系统",
    description: "",
    entityTypeIds: "3",
    entityClassId: "8",
  },
  {
    id: "8",
    name: "Windows系统",
    description: "",
    entityTypeIds: "3",
    entityClassId: "8",
  },
  {
    id: "9",
    name: "SAP HANA",
    description: "",
    entityTypeIds: "4",
    entityClassId: "11",
  },
  {
    id: "10",
    name: "MSFT SharePoint",
    description: "",
    entityTypeIds: "5",
    entityClassId: "12",
  },
  {
    id: "11",
    name: "MSFT Exchange",
    description: "",
    entityTypeIds: "5",
    entityClassId: "12",
  },
];

export const adfData = [
  {
      "id": "1",
      "name": "商业银行法",
      "regulationType": "01-法律",
      "annNo": "主席令[第四十七号]",
      "annAgency": "全国人大常委会",
      "annBody": "",
      "state": "已被修改",
      "body": "",
      "orginalUrl": "",
      "documentedOn": "",
      "publishedOn": "1995-05-10",
      "effectiveOn": "1995-07-01",
      "expiredOn": "",
      "functionalDomains": "",
      "predecessors": "",
      "upstreams": ""
  },
  {
      "id": "2",
      "name": "商业银行法(2003修正)",
      "regulationType": "01-法律",
      "annNo": "主席令第13号",
      "annAgency": "全国人大常委会",
      "annBody": "",
      "state": "已被修改",
      "body": "",
      "orginalUrl": "",
      "documentedOn": "",
      "publishedOn": "2003-12-27",
      "effectiveOn": "2004-02-01",
      "expiredOn": "",
      "functionalDomains": "",
      "predecessors": "1",
      "upstreams": ""
  },
  {
      "id": "3",
      "name": "商业银行法(2015修正)",
      "regulationType": "01-法律",
      "annNo": "主席令第34号",
      "annAgency": "全国人大常委会",
      "annBody": "",
      "state": "现行有效",
      "body": "",
      "orginalUrl": "",
      "documentedOn": "",
      "publishedOn": "",
      "effectiveOn": "",
      "expiredOn": "",
      "functionalDomains": "",
      "predecessors": "2",
      "upstreams": ""
  },
  {
      "id": "4",
      "name": "银行业监督管理法",
      "regulationType": "01-法律",
      "annNo": "主席令第11号",
      "annAgency": "全国人大常委会",
      "annBody": "中华人民共和国主席令\n（第十一号）\n《中华人民共和国银行业监督管理法》已由中华人民共和国第十届全国人民代表大会常务委员会第六次会议于2003年12月27日通过，现予公布，自2004年2月1日起施行。\n中华人民共和国主席 胡锦涛　　　　　　　　　　　　2003年12月27日",
      "state": "已被修改",
      "body": "",
      "orginalUrl": "https://law.pkulaw.com/chinalaw/2e5a5e5583c753b5bdfb.html?type=text",
      "documentedOn": "",
      "publishedOn": "2003-12-27",
      "effectiveOn": "2004-02-01",
      "expiredOn": "2006-12-31",
      "functionalDomains": "",
      "predecessors": "",
      "upstreams": ""
  },
  {
      "id": "5",
      "name": "银行业监督管理法(2006修订)",
      "regulationType": "01-法律",
      "annNo": "主席令第58号",
      "annAgency": "全国人大常委会",
      "annBody": "中华人民共和国主席令\n（第58号）\n《全国人民代表大会常务委员会关于修改〈中华人民共和国银行业监督管理法〉的决定》已由中华人民共和国第十届全国人民代表大会常务委员会第二十四次会议于2006年10月31日通过，现予公布，自2007年1月1日起施行。\n中华人民共和国主席　胡锦涛\n2006年10月31日",
      "state": "现行有效",
      "body": "",
      "orginalUrl": "https://law.pkulaw.com/chinalaw/f5461ba3aa509cefbdfb.html?type=text",
      "documentedOn": "2006-10-31",
      "publishedOn": "2006-10-31",
      "effectiveOn": "2007-01-01",
      "expiredOn": "",
      "functionalDomains": "",
      "predecessors": "4",
      "upstreams": ""
  },
  {
      "id": "6",
      "name": "保险法",
      "regulationType": "01-法律",
      "annNo": "",
      "annAgency": "全国人大常委会",
      "annBody": "",
      "state": "已被修改",
      "body": "",
      "orginalUrl": "",
      "documentedOn": "",
      "publishedOn": "1995-06-30",
      "effectiveOn": "1995-10-01",
      "expiredOn": "",
      "functionalDomains": "",
      "predecessors": "",
      "upstreams": ""
  },
  {
      "id": "7",
      "name": "保险法(2002修正)",
      "regulationType": "01-法律",
      "annNo": "",
      "annAgency": "全国人大常委会",
      "annBody": "",
      "state": "已被修改",
      "body": "",
      "orginalUrl": "",
      "documentedOn": "",
      "publishedOn": "2002-10-28",
      "effectiveOn": "2003-01-01",
      "expiredOn": "",
      "functionalDomains": "",
      "predecessors": "6",
      "upstreams": ""
  },
  {
      "id": "8",
      "name": "保险法(2009修订)",
      "regulationType": "01-法律",
      "annNo": "",
      "annAgency": "全国人大常委会",
      "annBody": "",
      "state": "已被修改",
      "body": "",
      "orginalUrl": "",
      "documentedOn": "",
      "publishedOn": "2009-02-28",
      "effectiveOn": "2009-10-01",
      "expiredOn": "",
      "functionalDomains": "",
      "predecessors": "7",
      "upstreams": ""
  },
  {
      "id": "9",
      "name": "保险法(2014修正)",
      "regulationType": "01-法律",
      "annNo": "",
      "annAgency": "全国人大常委会",
      "annBody": "",
      "state": "已被修改",
      "body": "",
      "orginalUrl": "",
      "documentedOn": "",
      "publishedOn": "2014-08-31",
      "effectiveOn": "2014-08-31",
      "expiredOn": "",
      "functionalDomains": "",
      "predecessors": "8",
      "upstreams": ""
  },
  {
      "id": "10",
      "name": "保险法(2015修正)",
      "regulationType": "01-法律",
      "annNo": "",
      "annAgency": "全国人大常委会",
      "annBody": "",
      "state": "现行有效",
      "body": "",
      "orginalUrl": "",
      "documentedOn": "",
      "publishedOn": "2015-04-24",
      "effectiveOn": "2015-04-24",
      "expiredOn": "",
      "functionalDomains": "",
      "predecessors": "9",
      "upstreams": ""
  },
  {
      "id": "11",
      "name": "网络安全法",
      "regulationType": "01-法律",
      "annNo": "",
      "annAgency": "全国人大常委会",
      "annBody": "2016年11月7日第十二届全国人民代表大会常务委员会第二十四次会议通过",
      "state": "现行有效",
      "body": "",
      "orginalUrl": "https://www.gov.cn/xinwen/2016-11/07/content_5129723.htm",
      "documentedOn": "2016-11-07",
      "publishedOn": "",
      "effectiveOn": "2017-06-01",
      "expiredOn": "",
      "functionalDomains": "",
      "predecessors": "",
      "upstreams": ""
  },
  {
      "id": "12",
      "name": "数据安全法",
      "regulationType": "01-法律",
      "annNo": "",
      "annAgency": "全国人大常委会",
      "annBody": "2021年6月10日第十三届全国人民代表大会常务委员会第二十九次会议通过",
      "state": "现行有效",
      "body": "",
      "orginalUrl": "https://www.gov.cn/xinwen/2021-06/11/content_5616919.htm",
      "documentedOn": "2021-06-10",
      "publishedOn": "",
      "effectiveOn": "2021-09-01",
      "expiredOn": "",
      "functionalDomains": "",
      "predecessors": "",
      "upstreams": ""
  },
  {
      "id": "13",
      "name": "个人信息保护法",
      "regulationType": "01-法律",
      "annNo": "",
      "annAgency": "全国人大常委会",
      "annBody": "2021年8月20日第十三届全国人民代表大会常务委员会第三十次会议通过",
      "state": "现行有效",
      "body": "",
      "orginalUrl": "https://www.gov.cn/xinwen/2021-08/20/content_5632486.htm",
      "documentedOn": "2021-08-20",
      "publishedOn": "",
      "effectiveOn": "2021-11-01",
      "expiredOn": "",
      "functionalDomains": "",
      "predecessors": "",
      "upstreams": ""
  },
  {
      "id": "14",
      "name": "网络数据安全管理条例",
      "regulationType": "02-条例",
      "annNo": "国令第790号",
      "annAgency": "国务院",
      "annBody": "中华人民共和国国务院令 \n第790号\n《网络数据安全管理条例》已经2024年8月30日国务院第40次常务会议通过，现予公布，自2025年1月1日起施行。\n总理 李强\n2024年9月24日",
      "state": "现行有效",
      "body": "",
      "orginalUrl": "https://www.gov.cn/zhengce/content/202409/content_6977766.htm",
      "documentedOn": "2024-09-24",
      "publishedOn": "2024-09-30",
      "effectiveOn": "2025-01-01",
      "expiredOn": "",
      "functionalDomains": "工业|交通|信息产业",
      "predecessors": "",
      "upstreams": "11,12,13"
  },
  {
      "id": "15",
      "name": "银行保险机构数据安全管理办法",
      "regulationType": "03-部门规章",
      "annNo": "金规〔2024〕24号",
      "annAgency": "金融监督管理总局",
      "annBody": "国家金融监督管理总局关于印发银行保险机构数据安全管理办法的通知\n金规〔2024〕24号\n各金融监管局，各政策性银行、大型银行、股份制银行、外资银行、直销银行、金融资产管理公司、金融资产投资公司、理财公司，各保险集团（控股）公司、保险公司、保险资产管理公司、养老金管理公司、保险专业中介机构，各金融控股公司，各总局管理单位：\n现将《银行保险机构数据安全管理办法》印发给你们，请遵照执行。\n国家金融监督管理总局\n2024年12月27日",
      "state": "现行有效",
      "body": "",
      "orginalUrl": "https://www.gov.cn/zhengce/zhengceku/202412/content_6995081.htm",
      "documentedOn": "2024-12-27",
      "publishedOn": "",
      "effectiveOn": "2024-12-27",
      "expiredOn": "",
      "functionalDomains": "财政|金融|审计|银行",
      "predecessors": "",
      "upstreams": "11,12,13,3,5,10"
  }
];

export const citData = [
  {
    id: "1",
    name: "第一章 总则",
    description: "第一章 总则",
    adfId: "1",
    paraType: "章",
  },
  {
    id: "2",
    name: "第一条 为规范银行业",
    description:
      "第一条 为规范银行业重要信息系统的突发事件应急管理，提高应对突发事件的综合管理水平和应急处置能力，有效防范银行业信息系统风险，根据《中华人民共和国银行业监督管理法》、《中华人民共和国突发事件应对法》以及相关法律法规，制定本规范。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "3",
    name: "第二条 在中华人民共",
    description:
      "第二条 在中华人民共和国境内设立的政策性银行、国有商业银行、股份制商业银行、邮政储蓄银行、城市商业银行、农村商业银行、农村合作银行、农村信用社、城市信用社，外商独资银行、中外合资银行和外国银行分行适用本规范。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "4",
    name: "第三条 银行业重要信",
    description: "第三条 银行业重要信息系统突发事件应对工作原则包括：",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "5",
    name: "（一）健全机制。银行",
    description:
      "（一）健全机制。银行业金融机构应建立统一指挥、协调有序的应急管理机制，主动开展应急管理工作，定期演练和评价应急预案，持续改进本机构的应急预案和相关协调机制。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "6",
    name: "（二）明确职责。银行",
    description:
      "（二）明确职责。银行业金融机构应明确本机构各部门在应急管理工作中的职责，以保障银行业金融机构业务连续性为目标，以落实和完善应急预案为基础，全面加强信息系统应急管理工作，并制定有效的问责制度。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "7",
    name: "（三）预防为主。银行",
    description:
      "（三）预防为主。银行业金融机构应建立和完善信息系统突发事件风险防范体系，对可能导致突发事件的风险进行有效地识别、分析和控制，并对风险指标动态、持续监测，减少重大突发事件发生的可能性。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "8",
    name: "（四）处置高效。银行",
    description:
      "（四）处置高效。银行业金融机构应加强应急处置队伍建设，提供充分的资源保障，确保突发事件发生时反应快速、报告及时、措施得力、操作准确，降低突发事件可能造成的损失。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "9",
    name: "第四条 以下术语适用",
    description: "第四条 以下术语适用于本规范：",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "10",
    name: "（一）本规范所称重要",
    description:
      "（一）本规范所称重要信息系统是指银行业金融机构支撑关键业务，其信息安全和系统服务安全关系公民、法人和组织的权益或社会秩序和公共利益，甚至影响国家安全的信息系统。主要包括面向客户、涉及账务处理且时效性要求较高的业务处理类、渠道类和涉及客户风险管理等业务的管理类信息系统，支撑上述系统运行的前置机、客户端、机房、网络等基础设施也应作为重要信息系统的一部分。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "11",
    name: "（二）本规范所称业务",
    description:
      "（二）本规范所称业务服务时段是指银行业金融机构重要信息系统所承载业务对客户提供服务的时间。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "12",
    name: "（三）本规范所称突发",
    description:
      "（三）本规范所称突发事件是指银行业金融机构重要信息系统以及为之提供支持服务的电力、通讯等系统突然发生的，影响业务持续开展，需要采取应急处置措施应对的事件。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "13",
    name: "（四）本规范所称信息",
    description:
      "（四）本规范所称信息系统应急管理是指贯穿于整个信息系统生命周期中，通过风险防范、应急响应、应急保障以确保信息系统能够满足业务发展战略对业务连续性要求的管理。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "14",
    name: "（五）本规范所称业务",
    description:
      "（五）本规范所称业务影响分析是指分析业务功能及其相关信息系统资源、评估特定信息系统突发事件对各种业务功能的影响的过程。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "15",
    name: "（六）本规范所称剩余",
    description:
      "（六）本规范所称剩余风险是指采取了风险控制措施后仍不能被完全消除的信息系统风险。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "16",
    name: "第二章 组织机构及职",
    description: "第二章 组织机构及职责",
    adfId: "1",
    paraType: "章",
  },
  {
    id: "17",
    name: "第五条 中国银行业监",
    description:
      "第五条 中国银行业监督管理委员会（以下简称银监会）信息科技监管部门是银行业信息系统应急处理日常管理机构，其应急管理职责是：",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "18",
    name: "（一）监管、指导银行",
    description: "（一）监管、指导银行业金融机构信息系统应急管理工作；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "19",
    name: "（二）向上级部门报告",
    description: "（二）向上级部门报告银行业金融机构信息系统突发事件；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "20",
    name: "（三）通报、发布银行",
    description: "（三）通报、发布银行业信息系统应急处理情况；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "21",
    name: "（四）向银行业金融机",
    description: "（四）向银行业金融机构发布信息系统突发事件预警信息；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "22",
    name: "（五）督导、检查银行",
    description: "（五）督导、检查银行业金融机构信息系统应急演练；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "23",
    name: "（六）维护银行业应急",
    description: "（六）维护银行业应急管理组织机构通讯联络方式。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "24",
    name: "第六条 银监会派出机",
    description:
      "第六条 银监会派出机构结合本地实际情况设立相应的应急管理组织机构，明确职责并监督、检查辖内银行业金融机构做好应急预案，负责辖内银行业信息系统突发事件应急管理工作。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "25",
    name: "第七条 银行业金融机",
    description:
      "第七条 银行业金融机构应综合考虑其业务和系统规模，建立应急管理组织机构，负责本机构信息系统突发事件应急管理工作。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "26",
    name: "（一）董事会和高级管",
    description:
      "（一）董事会和高级管理层应对本机构应急管理政策及其实施效果负有最终的责任。董事会和高级管理层应领导、监督本机构信息系统应急管理体系建设，制定落实应急管理的分级授权制度和问责制度，研究确定应急处置重大决策和指导意见，为应急管理工作配置充分的资源，定期听取风险状况分析、信息系统重大突发事件、现有应急管理政策重大修改等汇报，负责信息系统突发事件信息披露等。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "27",
    name: "（二）风险管理部门应",
    description:
      "（二）风险管理部门应制订应急管理政策和基本管理制度并报董事会和高级管理层审定，统一组织、协调、指导、检查本机构信息系统突发事件应急管理；建立应急处置的预授权制度，定期分析风险状况和总结信息系统突发事件应急管理成效，履行向董事会和高级管理层的报告职责，履行向银监会及其派出机构信息系统应急管理部门的报告职责等。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "28",
    name: "（三）信息科技管理部",
    description:
      "（三）信息科技管理部门和业务管理部门负责本机构信息系统突发事件应急管理工作的具体落实，制定信息系统突发事件预防措施、预警标准和应急策略，组织做好信息系统营运监测和维护，实施信息系统突发事件应急处置，评估总结信息系统突发事件及应急处置过程中暴露的问题并整改，履行向风险管理部门的报告职责，定期组织信息系统应急演练，持续改进本机构信息系统应急预案等。各银行业金融机构的业务管理部门应针对信息系统突发事件建立相应的业务应急预案和操作流程，并进行持续改进和优化。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "29",
    name: "第八条 银行业金融机",
    description:
      "第八条 银行业金融机构应组建应急团队，在发生信息系统突发事件时，能够做到及时实施专项应急处置工作。应急团队应包括但不限于应急领导小组、应急执行小组、支持保障小组。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "30",
    name: "（一）应急领导小组由",
    description:
      "（一）应急领导小组由董事会和高管层授权并由高管人员任应急领导小组组长，各相关职能部门（包括但不限于风险管理部门、业务管理部门、信息科技管理部门和支持保障部门等）和一级分支机构的负责人为应急领导小组成员，其职责是：",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "31",
    name: "1．负责信息系统突发",
    description: "1．负责信息系统突发事件的应急指挥、组织协调和过程控制；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "32",
    name: "2．明确新闻发布人，",
    description: "2．明确新闻发布人，授权其在应急过程中统一对外信息发布口径；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "33",
    name: "3．宣布重大应急响应",
    description: "3．宣布重大应急响应状态的降级或解除；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "34",
    name: "4．向董事会和高级管",
    description: "4．向董事会和高级管理层报告应急处置进展情况和总结报告。",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "35",
    name: "（二）应急执行小组由",
    description:
      "（二）应急执行小组由业务管理部门、信息科技管理部门、运营部门等派员组成，对应急领导小组负责，其职责是：",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "36",
    name: "1．实施信息系统突发",
    description: "1．实施信息系统突发事件的具体应急处置工作；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "37",
    name: "2．对信息系统突发事",
    description: "2．对信息系统突发事件业务影响情况进行分析和评估；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "38",
    name: "3．收集分析信息系统",
    description: "3．收集分析信息系统突发事件应急处置过程中的数据信息和日志；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "39",
    name: "4．向应急领导小组报",
    description: "4．向应急领导小组报告应急处置进展情况和事态发展情况。",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "40",
    name: "（三）支持保障小组由",
    description:
      "（三）支持保障小组由人力资源部门、计划财务部门、法律事务部门、公共关系部门、安全保卫部门、后勤保障部门等派员组成，对应急领导小组负责，其职责是：",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "41",
    name: "1．提供应急所需人力",
    description: "1．提供应急所需人力和物力等资源保障；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "42",
    name: "2．做好对受影响客户",
    description: "2．做好对受影响客户的解释和安抚工作；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "43",
    name: "3．做好秩序维护、安",
    description: "3．做好秩序维护、安全保障、法律咨询和支援等工作；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "44",
    name: "4．建立与电力、通讯",
    description:
      "4．建立与电力、通讯、公安和消防等相关外部机构的应急协调机制和应急联动机制；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "45",
    name: "5．其他为降低事件负",
    description: "5．其他为降低事件负面影响或损失提供的应急支持保障等。",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "46",
    name: "第三章 突发事件分级",
    description: "第三章 突发事件分级",
    adfId: "1",
    paraType: "章",
  },
  {
    id: "47",
    name: "第九条 突发事件依照",
    description:
      "第九条 突发事件依照其影响范围及持续时间等因素分级。当突发事件同时满足多个级别的定级条件时，按最高级别确定突发事件等级。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "48",
    name: "（一）特别重大突发事",
    description: "（一）特别重大突发事件（I级）",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "49",
    name: "1．银行业金融机构由",
    description:
      "1．银行业金融机构由于重要信息系统服务中断或重要数据损毁、丢失、泄露，造成经济秩序混乱或重大经济损失、影响金融稳定的，或对公众利益造成特别严重损害的突发事件；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "50",
    name: "2．由于重要信息系统",
    description:
      "2．由于重要信息系统服务异常，在业务服务时段导致银行业金融机构两个（含）以上省（自治区、直辖市）业务无法正常开展达3个小时（含）以上，或一个省（自治区、直辖市）业务无法正常开展达6个小时（含）以上的突发事件；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "51",
    name: "3．业务服务时段以外",
    description:
      "3．业务服务时段以外，重要信息系统出现的故障或事件救治未果，可能产生上述1至2类的突发事件。",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "52",
    name: "（二）重大突发事件（",
    description: "（二）重大突发事件（Ⅱ级）",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "53",
    name: "1．银行业金融机构由",
    description:
      "1．银行业金融机构由于重要信息系统服务中断或重要数据损毁、丢失、泄露，对银行或客户利益造成严重损害的突发事件；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "54",
    name: "2．由于重要信息系统",
    description:
      "2．由于重要信息系统服务异常，在业务服务时段导致银行业金融机构两个（含）以上省（自治区、直辖市）业务无法正常开展达半个小时（含）以上，或一个省（自治区、直辖市）业务无法正常开展达3个小时（含）以上的突发事件；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "55",
    name: "3．业务服务时段以外",
    description:
      "3．业务服务时段以外，出现的重要信息系统故障或事件救治未果，可能产生上述1至2类的突发事件。",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "56",
    name: "（三）较大突发事件（",
    description: "（三）较大突发事件（Ⅲ级）",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "57",
    name: "1．银行业金融机构由",
    description:
      "1．银行业金融机构由于重要信息系统服务中断或重要数据损毁、丢失、泄露，对银行或客户利益造成较大损害的突发事件；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "58",
    name: "2．由于重要信息系统",
    description:
      "2．由于重要信息系统服务异常，在业务服务时段导致一个省（自治区、直辖市）业务无法正常开展达半个小时（含）以上的突发事件；",
    adfId: "1",
    paraType: "目",
  },
  {
    id: "59",
    name: "第十条 重要信息系统",
    description:
      "第十条 重要信息系统突发事件发生后，银行业金融机构应依据事件影响范围和影响时间的变化，按照上述定义进行事件级别升级。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "60",
    name: "第四章 风险防范",
    description: "第四章 风险防范",
    adfId: "1",
    paraType: "章",
  },
  {
    id: "61",
    name: "第十一条 银行业金融",
    description:
      "第十一条 银行业金融机构应根据业务影响分析确定各项业务的信息系统恢复指标，主要包括：",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "62",
    name: "（一）恢复时间目标（",
    description: "（一）恢复时间目标（RTO）：业务功能恢复正常的时间要求；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "63",
    name: "（二）恢复点目标（R",
    description:
      "（二）恢复点目标（RPO）：业务功能恢复时能够容忍的数据丢失量。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "64",
    name: "第十二条 银行业金融",
    description:
      "第十二条 银行业金融机构应根据信息系统恢复指标和系统间的依赖关系，确定各信息系统应急响应恢复优先顺序，并系统化地识别信息技术资源风险，包括基础设施类风险、主机和硬件设备类风险、系统类风险、应用类风险、网络类风险等，以确保风险识别的全面性。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "65",
    name: "第十三条 银行业金融",
    description:
      "第十三条 银行业金融机构应制定全面的风险防范措施，并通过场景模拟、压力测试等手段验证风险防范措施的有效性。在突发事件应急处置后，应评估已有风险防范措施的有效性并加以改进。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "66",
    name: "第十四条 银行业金融",
    description:
      "第十四条 银行业金融机构应依据风险防范措施对关键信息技术资源进行剩余风险评估，明确剩余风险的监测方法与预警条件，并将其纳入信息系统风险事件监测与预警体系中。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "67",
    name: "第十五条 银行业金融",
    description:
      "第十五条 银行业金融机构应对关键信息技术资源建立监测指标体系以及相关的日常监测与预警机制，对监测指标的异常波动及时预警，并定期测试与修订监测指标体系以确保其有效性。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "68",
    name: "第十六条 银行业金融",
    description:
      "第十六条 银行业金融机构应建立关键时点监测与预警机制，在重大业务活动、重大社会活动、信息系统重大变更等关键时点加强风险监控和预警，并及时向业务职能部门进行风险提示，多部门协同做好应急准备。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "69",
    name: "第十七条 银行业金融",
    description:
      "第十七条 银行业金融机构在系统上线、系统升级、网络改造、设备更新等关键信息技术资源发生重大变更及业务种类和交易量发生重大变化时，应重新识别、分析、控制风险，并更新剩余风险评估和风险事件监测与预警。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "70",
    name: "第十八条 银行业金融",
    description:
      "第十八条 银行业金融机构应与电力、通信等重要基础设施服务商，主机、网络、存储等重要设备服务商，系统集成服务商以及其他外包服务商签定服务水平协议，并对服务商的技术与产品政策、服务水平、服务能力发生变化可能产生的影响及时进行风险评估和预警。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "71",
    name: "第五章 应急预案与演",
    description: "第五章 应急预案与演练",
    adfId: "1",
    paraType: "章",
  },
  {
    id: "72",
    name: "第十九条 银行业金融",
    description:
      "第十九条 银行业金融机构应根据恢复时间目标（RTO）和恢复点目标（RPO），结合风险控制策略，从基础设施、网络、信息系统等不同方面，分类制定本机构应急预案。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "73",
    name: "第二十条 银行业金融",
    description:
      "第二十条 银行业金融机构编制的信息系统应急预案应包括以下内容：",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "74",
    name: "（一）明确有关各方的",
    description: "（一）明确有关各方的分工和责任；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "75",
    name: "（二）说明重要信息系",
    description:
      "（二）说明重要信息系统的业务影响范围、恢复时间目标、恢复点目标、以及信息系统包括的系统资源，明确资源的物理位置、设备型号、软件资源、网络配置等关键信息；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "76",
    name: "（三）明确各类故障的",
    description:
      "（三）明确各类故障的诊断方法和流程；应急场景应至少覆盖电力故障、通信线路故障、火情水灾、治安、病毒爆发、网络攻击、人为破坏、不可抗力、计算机硬件故障、操作系统故障、系统漏洞、应用系统故障以及其他各类与信息系统相关的故障；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "77",
    name: "（四）制定系统恢复流",
    description:
      "（四）制定系统恢复流程和应急处置操作手册，尽可能将操作代码化、自动化，降低应急处置过程中产生的操作风险；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "78",
    name: "（五）明确应急恢复过",
    description:
      "（五）明确应急恢复过程中的关键状态，并明确不同状态的沟通和报告内容及等级；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "79",
    name: "（六）明确应急相关人",
    description: "（六）明确应急相关人员的协调内容和沟通方式；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "80",
    name: "（七）明确系统重建步",
    description: "（七）明确系统重建步骤，确保信息系统恢复正常业务处理能力。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "81",
    name: "第二十一条 银行业金",
    description:
      "第二十一条 银行业金融机构应将支撑信息系统运行的重要外包服务的应急管理纳入其中，建立重要外包服务的专项应急预案，对于重要基础设施、重要设备、网络、系统集成以及其他外包服务商的技术与产品政策、服务水平、服务能力制定风险应对措施，外包服务的应急预案应能够保障银行业信息系统恢复时间目标（RTO）和恢复点目标（RPO）的要求。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "82",
    name: "第二十二条 银行业金",
    description:
      "第二十二条 银行业金融机构应定期对应急预案进行测试和演练，确保其有效性。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "83",
    name: "第二十三条 当信息系",
    description:
      "第二十三条 当信息系统发生系统上线、系统升级、网络改造、设备更新、配置参数调整等变更时应及时更新应急预案，并适时实施演练。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "84",
    name: "第二十四条 银行业金",
    description:
      "第二十四条 银行业金融机构应制定年度信息系统应急演练计划，明确演练的时间、内容、依据、目的、负责人和相关配合机构等要素。演练计划应涵盖对应急预案各环节的检验，验证应急预案的有效性、应急资源的完备性及应急人员的适应性。应急演练应做到全面演练和专项演练相结合，一般情况下，银行业金融机构每年至少应组织一次全系统范围内的应急演练。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "85",
    name: "第二十五条 银行业金",
    description:
      "第二十五条 银行业金融机构应严格按照应急演练计划实施应急演练，并注意如下事项：",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "86",
    name: "（一）以应急预案为基",
    description:
      "（一）以应急预案为基础，制定应急演练总体方案，并进行风险再评估，制定相应的保障措施；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "87",
    name: "（二）应急演练内容应",
    description: "（二）应急演练内容应全面完整，涵盖信息系统的各类应急场景；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "88",
    name: "（三）严格控制应急演",
    description:
      "（三）严格控制应急演练引起的信息系统变更风险，避免因演练导致服务中断；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "89",
    name: "（四）应急演练应选择",
    description: "（四）应急演练应选择在非主要业务时段进行；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "90",
    name: "（五）应急演练完成后",
    description:
      "（五）应急演练完成后，应保证实施应急预案所需的各项资源恢复正常；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "91",
    name: "（六）定期对信息系统",
    description: "（六）定期对信息系统应急响应相关人员进行培训。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "92",
    name: "第二十六条 银行业金",
    description:
      "第二十六条 银行业金融机构应积极配合其他业务相关机构完成跨机构或跨行业应急演练。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "93",
    name: "第二十七条 银行业金",
    description:
      "第二十七条 银行业金融机构在应急演练的过程中，对可能存在较大风险的演练（如全系统范围的演练），应按属地监管原则，在实施演练前将应急演练计划向银监会或其派出机构报备。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "94",
    name: "第二十八条 应急演练",
    description:
      "第二十八条 应急演练结束后，银行业金融机构应撰写应急演练情况总结报告，大型或重要的应急演练总结报告应提交董事会和高管层。总结报告包括但不限于：内容和目的、总体方案、参与人员、准备工作、主要过程和关键时间点记录、存在的问题、后续改进措施及实施计划、演练结论。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "95",
    name: "第二十九条 银行业金",
    description:
      "第二十九条 银行业金融机构应根据演练总结报告提出的改进措施进行整改，及时修订相应的应急预案，并组织审计部门对整改情况进行监督和检查。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "96",
    name: "第三十条 对于全系统",
    description:
      "第三十条 对于全系统范围的年度演练或跨机构和跨行业的演练，银行业金融机构应将演练总结报告上报银监会或其派出机构。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "97",
    name: "第三十一条 银行业金",
    description:
      "第三十一条 银行业金融机构在应急演练的过程中，应根据审计、监管部门要求，将应急演练计划、过程记录和结果分析等归档。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "98",
    name: "第六章 应急响应",
    description: "第六章 应急响应",
    adfId: "1",
    paraType: "章",
  },
  {
    id: "99",
    name: "第三十二条 银行业金",
    description:
      "第三十二条 银行业金融机构应按照本机构既定的应急预案，做好应急处置，快速有效处置突发事件。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "100",
    name: "第三十三条 银行业金",
    description:
      "第三十三条 银行业金融机构风险管理部门应在董事会和高管层授权下负责突发事件报告，并指定专人为报告责任人。当报告责任人确定或发生变更时应及时向银监会或其派出机构信息系统应急管理部门报备。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "101",
    name: "当多个重要信息系统同",
    description:
      "当多个重要信息系统同时受到影响时，按照受影响程度最高原则报告。",
    adfId: "1",
    paraType: "",
  },
  {
    id: "102",
    name: "第三十四条 全国性银",
    description:
      "第三十四条 全国性银行业金融机构总部向银监会信息系统应急管理部门报告；全国性银行业金融机构的一级分支机构、地方性银行业金融机构向当地银监会派出机构信息系统应急管理部门报告。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "103",
    name: "第三十五条 突发事件",
    description: "第三十五条 突发事件应急响应流程：",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "104",
    name: "（一）应急执行小组应",
    description:
      "（一）应急执行小组应根据既定的应急预案，启动应急操作，并及时报告应急领导小组。应急处置应集中于建立临时业务处理能力、修复原系统损害、在原系统或新设施中恢复运行业务能力等应急措施；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "105",
    name: "（二）对于应急预案没",
    description:
      "（二）对于应急预案没有覆盖的突发事件，应立即报告应急领导小组进行应急决策；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "106",
    name: "（三）应急领导小组应",
    description:
      "（三）应急领导小组应立即启动本机构应急组织，组织协调机构内部进行应急处置，并负责向监管部门报告应急响应情况；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "107",
    name: "（四）支持保障小组做",
    description:
      "（四）支持保障小组做好各项应急保障工作，为应急处置提供场地、交通、通讯及其他后勤保障；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "108",
    name: "（五）银行业金融机构",
    description:
      "（五）银行业金融机构应在重要信息系统突发事件发生后60分钟之内将突发事件相关情况上报银监会或其派出机构信息系统应急管理部门，并在事件发生后12小时内提交正式书面报告；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "109",
    name: "（六）对造成经济秩序",
    description:
      "（六）对造成经济秩序混乱或重大经济损失、影响金融稳定的，或对银行、客户、公众的利益造成损害的突发事件，银行业金融机构要立即上报；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "110",
    name: "（七）银行业金融机构",
    description:
      "（七）银行业金融机构应将应急处置重大进展情况及时上报银监会或其派出机构，直至应急结束。I级突发事件发生后，银行业金融机构应每2小时将应急处置进展情况上报，直至应急结束。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "111",
    name: "第三十六条 上报银监",
    description:
      "第三十六条 上报银监会或其派出机构的书面报告内容应包括突发事件时间、地点、现象、影响的业务范围、原因分析、后果的初步判断、已采取的措施、后续拟采取方案的建议、事件报告单位、联系人及联系方式、其他与本突发事件有关的内容，并在报告中重点明确需要银监会协调的事项。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "112",
    name: "第三十七条 银监会及",
    description:
      "第三十七条 银监会及其派出机构信息系统应急管理部门根据银行业金融机构应急协调需求，组织协调国家信息化管理、信息安全管理、治安管理、电力管理等跨部门资源，统筹安排处置工作。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "113",
    name: "第三十八条 应急处置",
    description:
      "第三十八条 应急处置中所有相关的信息和处理过程应进行严格记录，外部供应商的处理过程应有专门记录文件，如果涉及到保险理赔，中间过程和场景可用摄像设备进行记录。所有过程资料应由专人存档保管。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "114",
    name: "第三十九条 应急处置",
    description:
      "第三十九条 应急处置过程中出现异常或应急预案、决策方案失效，银行业金融机构应急领导小组要立即上报银监会或其派出机构信息系统应急管理部门。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "115",
    name: "第四十条 重要信息系",
    description:
      "第四十条 重要信息系统突发事件发生后，银行业金融机构应将相关信息及时通报给受影响的外部机构及重要客户，并将相关信息准确通报给相关设备及服务提供商、电信、电力等外部组织，以获得应急响应支持。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "116",
    name: "第四十一条 重要信息",
    description:
      "第四十一条 重要信息系统突发事件发生后，根据突发事件的严重程度，银行业金融机构应急领导小组应及时向新闻媒体发布相关信息，严格按照行业、机构的相关规定和要求对外发布信息，机构内其它部门或者个人不得随意接受新闻媒体采访或对外发表个人看法。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "117",
    name: "第四十二条 重要信息",
    description: "第四十二条 重要信息系统恢复正常服务即为应急结束。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "118",
    name: "第四十三条 银行业金",
    description:
      "第四十三条 银行业金融机构在应急结束后，应针对应急工作进行评估和总结，并报银监会或其派出机构信息系统应急管理部门。总结报告应包括信息系统突发事件评估、处置工作总结以及症结分析和相应建议等内容。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "119",
    name: "（一）突发事件评估应",
    description:
      "（一）突发事件评估应包括现象、影响范围、处理时间和过程以及造成的损失；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "120",
    name: "（二）处置工作总结应",
    description:
      "（二）处置工作总结应评价应急预案的可用性，分析处置工作中存在的问题，总结处置工作的整体过程；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "121",
    name: "（三）症结分析和相应",
    description:
      "（三）症结分析和相应建议应分析突发事件的深层次原因，反映存在的困难和问题，并提出改进措施、计划及相关建议。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "122",
    name: "第七章 应急保障",
    description: "第七章 应急保障",
    adfId: "1",
    paraType: "章",
  },
  {
    id: "123",
    name: "第四十四条 银行业金",
    description:
      "第四十四条 银行业金融机构应建立长效的人员保障机制，确保人员能够胜任应急处置工作。在人员保障方面应达到以下要求：",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "124",
    name: "（一）确保应急处置人",
    description:
      "（一）确保应急处置人员具备应急工作必要的技术资质，定期组织人员培训以满足应急处置的要求，并通过应急演练，保证应急处置人员的熟练度；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "125",
    name: "（二）确保主、备岗机",
    description: "（二）确保主、备岗机制的落实；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "126",
    name: "（三）确保主、备岗人",
    description: "（三）确保主、备岗人员定期进行互换；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "127",
    name: "（四）避免一人兼过多",
    description: "（四）避免一人兼过多的岗位。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "128",
    name: "第四十五条 银行业金",
    description:
      "第四十五条 银行业金融机构应建立有效的物质保障机制，确保在应急响应过程中不会因物质缺乏而导致应急处置中断或延长应急处置时间。在物质保障方面应达到以下要求：",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "129",
    name: "（一）储备一定数量应",
    description: "（一）储备一定数量应急设备或物资，并确保物资供应渠道畅通；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "130",
    name: "（二）建立应急响应专",
    description:
      "（二）建立应急响应专项资金预算管理与审批制度，确保应急响应过程中及时进行应急物资采购。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "131",
    name: "第四十六条 银行业金",
    description:
      "第四十六条 银行业金融机构应建立有效的技术保障机制，确保在应急响应过程中不会因技术能力缺乏而导致应急处置中断或延长应急处置时间。在技术保障方面应达到以下要求：",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "132",
    name: "（一）建立应急事件预",
    description:
      "（一）建立应急事件预警平台，确保及时发现应急事件，并及时通知有关人员启动应急响应；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "133",
    name: "（二）明确相关厂商的",
    description:
      "（二）明确相关厂商的技术支持服务水平，确保应急处置过程中相关厂商能够提供及时有效的技术支持。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "134",
    name: "第四十七条 银行业金",
    description:
      "第四十七条 银行业金融机构应采取必要的通讯保障措施，确保应急响应通讯及时有效。在通讯保障方面应达到以下要求：",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "135",
    name: "（一）适时更新各级应",
    description: "（一）适时更新各级应急管理机构联络人和联络方式；",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "136",
    name: "（二）建立多种通讯渠",
    description:
      "（二）建立多种通讯渠道，避免单一通讯风险，并明确各通讯渠道使用的优先顺序。",
    adfId: "1",
    paraType: "项",
  },
  {
    id: "137",
    name: "第八章 持续改进",
    description: "第八章 持续改进",
    adfId: "1",
    paraType: "章",
  },
  {
    id: "138",
    name: "第四十八条 银行业金",
    description:
      "第四十八条 银行业金融机构应每年开展一次对突发事件风险防范措施的全面评估和审计活动，包括评估风险识别、分析和控制措施的有效性、应急预案的完备性、应急演练的全面性和及时性等，检验防范措施的有效性，并及时发现新的风险，改进风险控制措施，进一步完善应急预案，形成风险防范措施的持续改进。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "139",
    name: "第四十九条 银行业金",
    description:
      "第四十九条 银行业金融机构应每年开展一次对应急响应工作的全面评估和审计活动。评估范围包括应急响应的有效性、投入资源的充分性、突发事件报告的及时性等，确保应急响应持续有效。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "140",
    name: "第五十条 银行业金融",
    description:
      "第五十条 银行业金融机构应对应急管理的策略、机制、方法、流程等不断完善，对应急管理过程中发现的问题适时整改。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "141",
    name: "第五十一条 银行业金",
    description:
      "第五十一条 银行业金融机构应将应急管理纳入到全面风险管理体系中，建立应急管理的长效机制，保证应急管理工作的持续性和有效性。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "142",
    name: "第九章 附则",
    description: "第九章 附则",
    adfId: "1",
    paraType: "章",
  },
  {
    id: "143",
    name: "第五十二条 本规范由",
    description:
      "第五十二条 本规范由银监会负责解释和修订。银行业金融机构可依据本规范制定具体的信息系统应急管理实施细则。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "144",
    name: "第五十三条 在中国境",
    description:
      "第五十三条 在中国境内设立的金融资产管理公司、信托投资公司、企业集团财务公司、金融租赁公司、汽车金融公司及银监会批准设立的其他金融机构，参照本规范执行。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "145",
    name: "第五十四条 本规范自",
    description: "第五十四条 本规范自公布之日起执行。",
    adfId: "1",
    paraType: "条",
  },
  {
    id: "146",
    name: "第一章 总 则",
    description: "第一章 总 则",
    adfId: "2",
    paraType: "章",
  },
  {
    id: "147",
    name: "第一条 为加强商业银",
    description:
      "第一条 为加强商业银行信息科技风险管理，根据《中华人民共和国银行业监督管理法》、《中华人民共和国商业银行法》、《中华人民共和国外资银行管理条例》，以及国家信息安全相关要求和有关法律法规，制定本指引。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "148",
    name: "第二条 本指引适用于",
    description:
      "第二条 本指引适用于在中华人民共和国境内依法设立的法人商业银行。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "149",
    name: "政策性银行、农村合作",
    description:
      "政策性银行、农村合作银行、城市信用社、农村信用社、村镇银行、贷款公司、金融资产管理公司、信托公司、财务公司、金融租赁公司、汽车金融公司、货币经纪公司等其他银行业金融机构参照执行。",
    adfId: "2",
    paraType: "",
  },
  {
    id: "150",
    name: "第三条 本指引所称信",
    description:
      "第三条 本指引所称信息科技是指计算机、通信、微电子和软件工程等现代信息技术，在商业银行业务交易处理、经营管理和内部控制等方面的应用，并包括进行信息科技治理，建立完整的管理组织架构，制订完善的管理制度和流程。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "151",
    name: "第四条 本指引所称信",
    description:
      "第四条 本指引所称信息科技风险，是指信息科技在商业银行运用过程中，由于自然因素、人为因素、技术漏洞和管理缺陷产生的操作、法律和声誉等风险。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "152",
    name: "第五条 信息科技风险",
    description:
      "第五条 信息科技风险管理的目标是通过建立有效的机制，实现对商业银行信息科技风险的识别、计量、监测和控制，促进商业银行安全、持续、稳健运行，推动业务创新，提高信息技术使用水平，增强核心竞争力和可持续发展能力。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "153",
    name: "第二章 信息科技治理",
    description: "第二章 信息科技治理",
    adfId: "2",
    paraType: "章",
  },
  {
    id: "154",
    name: "第六条 商业银行法定",
    description:
      "第六条 商业银行法定代表人是本机构信息科技风险管理的第一责任人，负责组织本指引的贯彻落实。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "155",
    name: "第七条 商业银行的董",
    description: "第七条 商业银行的董事会应履行以下信息科技管理职责：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "156",
    name: "（一） 遵守并贯彻执",
    description:
      "（一） 遵守并贯彻执行国家有关信息科技管理的法律、法规和技术标准，落实中国银行业监督管理委员会（以下简称银监会）相关监管要求。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "157",
    name: "（二） 审查批准信息",
    description:
      "（二） 审查批准信息科技战略，确保其与银行的总体业务战略和重大策略相一致。评估信息科技及其风险管理工作的总体效果和效率。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "158",
    name: "（三） 掌握主要的信",
    description:
      "（三） 掌握主要的信息科技风险，确定可接受的风险级别，确保相关风险能够被识别、计量、监测和控制。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "159",
    name: "（四） 规范职业道德",
    description:
      "（四） 规范职业道德行为和廉洁标准，增强内部文化建设，提高全体人员对信息科技风险管理重要性的认识。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "160",
    name: "（五） 设立一个由来",
    description:
      "（五） 设立一个由来自高级管理层、信息科技部门和主要业务部门的代表组成的专门信息科技管理委员会，负责监督各项职责的落实，定期向董事会和高级管理层汇报信息科技战略规划的执行、信息科技预算和实际支出、信息科技的整体状况。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "161",
    name: "（六） 在建立良好的",
    description:
      "（六） 在建立良好的公司治理的基础上进行信息科技治理，形成分工合理、职责明确、相互制衡、报告关系清晰的信息科技治理组织结构。加强信息科技专业队伍的建设，建立人才激励机制。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "162",
    name: "（七） 确保内部审计",
    description:
      "（七） 确保内部审计部门进行独立有效的信息科技风险管理审计，对审计报告进行确认并落实整改。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "163",
    name: "（八） 每年审阅并向",
    description:
      "（八） 每年审阅并向银监会及其派出机构报送信息科技风险管理的年度报告。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "164",
    name: "（九） 确保信息科技",
    description: "（九） 确保信息科技风险管理工作所需资金。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "165",
    name: "（十） 确保银行所有",
    description:
      "（十） 确保银行所有员工充分理解和遵守经其批准的信息科技风险管理制度和流程，并安排相关培训。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "166",
    name: "（十一） 确保本法人",
    description:
      "（十一） 确保本法人机构涉及客户信息、账务信息以及产品信息等的核心系统在中国境内独立运行，并保持最高的管理权限，符合银监会监管和实施现场检查的要求，防范跨境风险。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "167",
    name: "（十二） 及时向银监",
    description:
      "（十二） 及时向银监会及其派出机构报告本机构发生的重大信息科技事故或突发事件，按相关预案快速响应。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "168",
    name: "（十三） 配合银监会",
    description:
      "（十三） 配合银监会及其派出机构做好信息科技风险监督检查工作，并按照监管意见进行整改。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "169",
    name: "（十四） 履行信息科",
    description: "（十四） 履行信息科技风险管理其他相关工作。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "170",
    name: "第八条 商业银行应设",
    description:
      "第八条 商业银行应设立首席信息官，直接向行长汇报，并参与决策。首席信息官的职责包括：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "171",
    name: "（一） 直接参与本银",
    description: "（一） 直接参与本银行与信息科技运用有关的业务发展决策。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "172",
    name: "（二） 确保信息科技",
    description:
      "（二） 确保信息科技战略，尤其是信息系统开发战略，符合本银行的总体业务战略和信息科技风险管理策略。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "173",
    name: "（三） 负责建立一个",
    description:
      "（三） 负责建立一个切实有效的信息科技部门，承担本银行的信息科技职责。确保其履行：信息科技预算和支出、信息科技策略、标准和流程、信息科技内部控制、专业化研发、信息科技项目发起和管理、信息系统和信息科技基础设施的运行、维护和升级、信息安全管理、灾难恢复计划、信息科技外包和信息系统退出等职责。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "174",
    name: "（四） 确保信息科技",
    description:
      "（四） 确保信息科技风险管理的有效性，并使有关管理措施落实到相关的每一个内设机构和分支机构。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "175",
    name: "（五） 组织专业培训",
    description: "（五） 组织专业培训，提高人才队伍的专业技能。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "176",
    name: "（六） 履行信息科技",
    description: "（六） 履行信息科技风险管理其他相关工作。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "177",
    name: "第九条 商业银行应对",
    description:
      "第九条 商业银行应对信息科技部门内部管理职责进行明确的界定；各岗位的人员应具有相应的专业知识和技能，重要岗位应制定详细完整的工作手册并适时更新。对相关人员应采取下列风险防范措施：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "178",
    name: "（一） 验证个人信息",
    description:
      "（一） 验证个人信息，包括核验有效身份证件、学历证明、工作经历和专业资格证书等信息。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "179",
    name: "（二） 审核信息科技",
    description:
      "（二） 审核信息科技员工的道德品行，确保其具备相应的职业操守。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "180",
    name: "（三） 确保员工了解",
    description:
      "（三） 确保员工了解、遵守信息科技策略、指导原则、信息保密、授权使用信息系统、信息科技管理制度和流程等要求，并同员工签订相关协议。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "181",
    name: "（四） 评估关键岗位",
    description:
      "（四） 评估关键岗位信息科技员工流失带来的风险，做好安排候补员工和岗位接替计划等防范措施；在员工岗位发生变化后及时变更相关信息。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "182",
    name: "第十条 商业银行应设",
    description:
      "第十条 商业银行应设立或指派一个特定部门负责信息科技风险管理工作，并直接向首席信息官或首席风险官（风险管理委员会）报告工作。该部门应为信息科技突发事件应急响应小组的成员之一，负责协调制定有关信息科技风险管理策略，尤其是在涉及信息安全、业务连续性计划和合规性风险等方面，为业务部门和信息科技部门提供建议及相关合规性信息，实施持续信息科技风险评估，跟踪整改意见的落实，监控信息安全威胁和不合规事件的发生。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "183",
    name: "第十一条 商业银行应",
    description:
      "第十一条 商业银行应在内部审计部门设立专门的信息科技风险审计岗位，负责信息科技审计制度和流程的实施，制订和执行信息科技审计计划，对信息科技整个生命周期和重大事件等进行审计。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "184",
    name: "第十二条 商业银行应",
    description:
      "第十二条 商业银行应按照知识产权相关法律法规，制定本机构信息科技知识产权保护策略和制度，并使所有员工充分理解并遵照执行。确保购买和使用合法的软硬件产品，禁止侵权盗版；采取有效措施保护本机构自主知识产权。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "185",
    name: "第十三条 商业银行应",
    description:
      "第十三条 商业银行应依据有关法律法规的要求，规范和及时披露信息科技风险状况。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "186",
    name: "第三章 信息科技风险",
    description: "第三章 信息科技风险管理",
    adfId: "2",
    paraType: "章",
  },
  {
    id: "187",
    name: "第十四条 商业银行应",
    description:
      "第十四条 商业银行应制定符合银行总体业务规划的信息科技战略、信息科技运行计划和信息科技风险评估计划，确保配置足够人力、财力资源，维持稳定、安全的信息科技环境。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "188",
    name: "第十五条 商业银行应",
    description:
      "第十五条 商业银行应制定全面的信息科技风险管理策略，包括但不限于下述领域：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "189",
    name: "（一） 信息分级与保",
    description: "（一） 信息分级与保护。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "190",
    name: "（二） 信息系统开发",
    description: "（二） 信息系统开发、测试和维护。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "191",
    name: "（三） 信息科技运行",
    description: "（三） 信息科技运行和维护。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "192",
    name: "（四） 访问控制。",
    description: "（四） 访问控制。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "193",
    name: "（五） 物理安全。",
    description: "（五） 物理安全。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "194",
    name: "（六） 人员安全。",
    description: "（六） 人员安全。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "195",
    name: "（七） 业务连续性计",
    description: "（七） 业务连续性计划与应急处置。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "196",
    name: "第十六条 商业银行应",
    description:
      "第十六条 商业银行应制定持续的风险识别和评估流程，确定信息科技中存在隐患的区域，评价风险对其业务的潜在影响，对风险进行排序，并确定风险防范措施及所需资源的优先级别（包括外包供应商、产品供应商和服务商）。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "197",
    name: "第十七条 商业银行应",
    description:
      "第十七条 商业银行应依据信息科技风险管理策略和风险评估结果，实施全面的风险防范措施。防范措施应包括：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "198",
    name: "（一） 制定明确的信",
    description:
      "（一） 制定明确的信息科技风险管理制度、技术标准和操作规程等，定期进行更新和公示。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "199",
    name: "（二） 确定潜在风险",
    description:
      "（二） 确定潜在风险区域，并对这些区域进行详细和独立的监控，实现风险最小化。建立适当的控制框架，以便于检查和平衡风险；定义每个业务级别的控制内容，包括：",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "200",
    name: "1．最高权限用户的审",
    description: "1．最高权限用户的审查。",
    adfId: "2",
    paraType: "目",
  },
  {
    id: "201",
    name: "2．控制对数据和系统",
    description: "2．控制对数据和系统的物理和逻辑访问。",
    adfId: "2",
    paraType: "目",
  },
  {
    id: "202",
    name: "3．访问授权以“必需",
    description: "3．访问授权以“必需知道”和“最小授权”为原则。",
    adfId: "2",
    paraType: "目",
  },
  {
    id: "203",
    name: "4．审批和授权。",
    description: "4．审批和授权。",
    adfId: "2",
    paraType: "目",
  },
  {
    id: "204",
    name: "5．验证和调节。",
    description: "5．验证和调节。",
    adfId: "2",
    paraType: "目",
  },
  {
    id: "205",
    name: "第十八条 商业银行应",
    description:
      "第十八条 商业银行应建立持续的信息科技风险计量和监测机制，其中应包括：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "206",
    name: "（一） 建立信息科技",
    description: "（一） 建立信息科技项目实施前及实施后的评价机制。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "207",
    name: "（二） 建立定期检查",
    description: "（二） 建立定期检查系统性能的程序和标准。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "208",
    name: "（三） 建立信息科技",
    description: "（三） 建立信息科技服务投诉和事故处理的报告机制。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "209",
    name: "（四） 建立内部审计",
    description: "（四） 建立内部审计、外部审计和监管发现问题的整改处理机制。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "210",
    name: "（五） 安排供应商和",
    description:
      "（五） 安排供应商和业务部门对服务水平协议的完成情况进行定期审查。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "211",
    name: "（六） 定期评估新技",
    description:
      "（六） 定期评估新技术发展可能造成的影响和已使用软件面临的新威胁。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "212",
    name: "（七） 定期进行运行",
    description: "（七） 定期进行运行环境下操作风险和管理控制的检查。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "213",
    name: "（八） 定期进行信息",
    description: "（八） 定期进行信息科技外包项目的风险状况评价。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "214",
    name: "第十九条 中资商业银",
    description:
      "第十九条 中资商业银行在境外设立的机构及境内的外资商业银行，应当遵守境内外监管机构关于信息科技风险管理的要求，并防范因监管差异所造成的风险。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "215",
    name: "第四章 信息安全",
    description: "第四章 信息安全",
    adfId: "2",
    paraType: "章",
  },
  {
    id: "216",
    name: "第二十条 商业银行信",
    description:
      "第二十条 商业银行信息科技部门负责建立和实施信息分类和保护体系，商业银行应使所有员工都了解信息安全的重要性，并组织提供必要的培训，让员工充分了解其职责范围内的信息保护流程。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "217",
    name: "第二十一条 商业银行",
    description:
      "第二十一条 商业银行信息科技部门应落实信息安全管理职能。该职能应包括建立信息安全计划和保持长效的管理机制，提高全体员工信息安全意识，就安全问题向其他部门提供建议，并定期向信息科技管理委员会提交本银行信息安全评估报告。信息安全管理机制应包括信息安全标准、策略、实施计划和持续维护计划。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "218",
    name: "信息安全策略应涉及以",
    description: "信息安全策略应涉及以下领域：",
    adfId: "2",
    paraType: "",
  },
  {
    id: "219",
    name: "（一） 安全制度管理",
    description: "（一） 安全制度管理。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "220",
    name: "（二） 信息安全组织",
    description: "（二） 信息安全组织管理。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "221",
    name: "（三） 资产管理。",
    description: "（三） 资产管理。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "222",
    name: "（四） 人员安全管理",
    description: "（四） 人员安全管理。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "223",
    name: "（五） 物理与环境安",
    description: "（五） 物理与环境安全管理。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "224",
    name: "（六） 通信与运营管",
    description: "（六） 通信与运营管理。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "225",
    name: "（七） 访问控制管理",
    description: "（七） 访问控制管理。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "226",
    name: "（八） 系统开发与维",
    description: "（八） 系统开发与维护管理。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "227",
    name: "（九） 信息安全事故",
    description: "（九） 信息安全事故管理。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "228",
    name: "（十） 业务连续性管",
    description: "（十） 业务连续性管理。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "229",
    name: "（十一） 合规性管理",
    description: "（十一） 合规性管理。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "230",
    name: "第二十二条 商业银行",
    description:
      "第二十二条 商业银行应建立有效管理用户认证和访问控制的流程。用户对数据和系统的访问必须选择与信息访问级别相匹配的认证机制，并且确保其在信息系统内的活动只限于相关业务能合法开展所要求的最低限度。用户调动到新的工作岗位或离开商业银行时，应在系统中及时检查、更新或注销用户身份。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "231",
    name: "第二十三条 商业银行",
    description:
      "第二十三条 商业银行应确保设立物理安全保护区域，包括计算机中心或数据中心、存储机密信息或放置网络设备等重要信息科技设备的区域，明确相应的职责，采取必要的预防、检测和恢复控制措施。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "232",
    name: "第二十四条 商业银行",
    description:
      "第二十四条 商业银行应根据信息安全级别，将网络划分为不同的逻辑安全域（以下简称为域）。应该对下列安全因素进行评估，并根据安全级别定义和评估结果实施有效的安全控制，如对每个域和整个网络进行物理或逻辑分区、实现网络内容过滤、逻辑访问控制、传输加密、网络监控、记录活动日志等。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "233",
    name: "（一） 域内应用程序",
    description: "（一） 域内应用程序和用户组的重要程度。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "234",
    name: "（二） 各种通讯渠道",
    description: "（二） 各种通讯渠道进入域的访问点。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "235",
    name: "（三） 域内配置的网",
    description: "（三） 域内配置的网络设备和应用程序使用的网络协议和端口。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "236",
    name: "（四） 性能要求或标",
    description: "（四） 性能要求或标准。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "237",
    name: "（五） 域的性质，如",
    description: "（五） 域的性质，如生产域或测试域、内部域或外部域。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "238",
    name: "（六） 不同域之间的",
    description: "（六） 不同域之间的连通性。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "239",
    name: "（七） 域的可信程度",
    description: "（七） 域的可信程度。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "240",
    name: "第二十五条 商业银行",
    description:
      "第二十五条 商业银行应通过以下措施，确保所有计算机操作系统和系统软件的安全：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "241",
    name: "（一） 制定每种类型",
    description:
      "（一） 制定每种类型操作系统的基本安全要求，确保所有系统满足基本安全要求。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "242",
    name: "（二） 明确定义包括",
    description:
      "（二） 明确定义包括终端用户、系统开发人员、系统测试人员、计算机操作人员、系统管理员和用户管理员等不同用户组的访问权限。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "243",
    name: "（三） 制定最高权限",
    description:
      "（三） 制定最高权限系统账户的审批、验证和监控流程，并确保最高权限用户的操作日志被记录和监察。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "244",
    name: "（四） 要求技术人员",
    description:
      "（四） 要求技术人员定期检查可用的安全补丁，并报告补丁管理状态。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "245",
    name: "（五） 在系统日志中",
    description:
      "（五） 在系统日志中记录不成功的登录、重要系统文件的访问、对用户账户的修改等有关重要事项，手动或自动监控系统出现的任何异常事件，定期汇报监控情况。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "246",
    name: "第二十六条 商业银行",
    description: "第二十六条 商业银行应通过以下措施，确保所有信息系统的安全：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "247",
    name: "（一） 明确定义终端",
    description:
      "（一） 明确定义终端用户和信息科技技术人员在信息系统安全中的角色和职责。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "248",
    name: "（二） 针对信息系统",
    description:
      "（二） 针对信息系统的重要性和敏感程度，采取有效的身份验证方法。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "249",
    name: "（三） 加强职责划分",
    description: "（三） 加强职责划分，对关键或敏感岗位进行双重控制。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "250",
    name: "（四） 在关键的接合",
    description: "（四） 在关键的接合点进行输入验证或输出核对。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "251",
    name: "（五） 采取安全的方",
    description:
      "（五） 采取安全的方式处理保密信息的输入和输出，防止信息泄露或被盗取、篡改。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "252",
    name: "（六） 确保系统按预",
    description:
      "（六） 确保系统按预先定义的方式处理例外情况，当系统被迫终止时向用户提供必要信息。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "253",
    name: "（七） 以书面或电子",
    description: "（七） 以书面或电子格式保存审计痕迹。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "254",
    name: "（八） 要求用户管理",
    description:
      "（八） 要求用户管理员监控和审查未成功的登录和用户账户的修改。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "255",
    name: "第二十七条 商业银行",
    description:
      "第二十七条 商业银行应制定相关策略和流程，管理所有生产系统的活动日志，以支持有效的审核、安全取证分析和预防欺诈。日志可以在软件的不同层次、不同的计算机和网络设备上完成，日志划分为两大类：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "256",
    name: "（一） 交易日志。交",
    description:
      "（一） 交易日志。交易日志由应用软件和数据库管理系统产生，内容包括用户登录尝试、数据修改、错误信息等。交易日志应按照国家会计准则要求予以保存。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "257",
    name: "（二） 系统日志。系",
    description:
      "（二） 系统日志。系统日志由操作系统、数据库管理系统、防火墙、入侵检测系统和路由器等生成，内容包括管理登录尝试、系统事件、网络事件、错误信息等。系统日志保存期限按系统的风险等级确定，但不能少于一年。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "258",
    name: "商业银行应保证交易日",
    description:
      "商业银行应保证交易日志和系统日志中包含足够的内容，以便完成有效的内部控制、解决系统故障和满足审计需要；应采取适当措施保证所有日志同步计时，并确保其完整性。在例外情况发生后应及时复查系统日志。交易日志或系统日志的复查频率和保存周期应由信息科技部门和有关业务部门共同决定，并报信息科技管理委员会批准。",
    adfId: "2",
    paraType: "",
  },
  {
    id: "259",
    name: "第二十八条 商业银行",
    description:
      "第二十八条 商业银行应采取加密技术，防范涉密信息在传输、处理、存储过程中出现泄露或被篡改的风险，并建立密码设备管理制度，以确保：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "260",
    name: "（一） 使用符合国家",
    description: "（一） 使用符合国家要求的加密技术和加密设备。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "261",
    name: "（二） 管理、使用密",
    description: "（二） 管理、使用密码设备的员工经过专业培训和严格审查。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "262",
    name: "（三） 加密强度满足",
    description: "（三） 加密强度满足信息机密性的要求。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "263",
    name: "（四） 制定并落实有",
    description:
      "（四） 制定并落实有效的管理流程，尤其是密钥和证书生命周期管理。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "264",
    name: "第二十九条 商业银行",
    description:
      "第二十九条 商业银行应配备切实有效的系统，确保所有终端用户设备的安全，并定期对所有设备进行安全检查，包括台式个人计算机（PC）、便携式计算机、柜员终端、自动柜员机（ATM）、存折打印机、读卡器、销售终端（POS）和个人数字助理（PDA）等。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "265",
    name: "第三十条 商业银行应",
    description:
      "第三十条 商业银行应制定相关制度和流程，严格管理客户信息的采集、处理、存贮、传输、分发、备份、恢复、清理和销毁。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "266",
    name: "第三十一条 商业银行",
    description:
      "第三十一条 商业银行应对所有员工进行必要的培训，使其充分掌握信息科技风险管理制度和流程，了解违反规定的后果，并对违反安全规定的行为采取零容忍政策。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "267",
    name: "第五章 信息系统开发",
    description: "第五章 信息系统开发、测试和维护",
    adfId: "2",
    paraType: "章",
  },
  {
    id: "268",
    name: "第三十二条 商业银行",
    description:
      "第三十二条 商业银行应有能力对信息系统进行需求分析、规划、采购、开发、测试、部署、维护、升级和报废，制定制度和流程，管理信息科技项目的优先排序、立项、审批和控制。项目实施部门应定期向信息科技管理委员会提交重大信息科技项目的进度报告，由其进行审核，进度报告应当包括计划的重大变更、关键人员或供应商的变更以及主要费用支出情况。应在信息系统投产后一定时期内，组织对系统的后评价，并根据评价结果及时对系统功能进行调整和优化。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "269",
    name: "第三十三条 商业银行",
    description:
      "第三十三条 商业银行应认识到信息科技项目相关的风险，包括潜在的各种操作风险、财务损失风险和因无效项目规划或不适当的项目管理控制产生的机会成本，并采取适当的项目管理方法，控制信息科技项目相关的风险。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "270",
    name: "第三十四条 商业银行",
    description:
      "第三十四条 商业银行应采取适当的系统开发方法，控制信息系统的生命周期。典型的系统生命周期包括系统分析、设计、开发或外购、测试、试运行、部署、维护和退出。所采用的系统开发方法应符合信息科技项目的规模、性质和复杂度。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "271",
    name: "第三十五条 商业银行",
    description:
      "第三十五条 商业银行应制定相关控制信息系统变更的制度和流程，确保系统的可靠性、完整性和可维护性，其中应包括以下要求：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "272",
    name: "（一） 生产系统与开",
    description: "（一） 生产系统与开发系统、测试系统有效隔离。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "273",
    name: "（二） 生产系统与开",
    description: "（二） 生产系统与开发系统、测试系统的管理职能相分离。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "274",
    name: "（三） 除得到管理层",
    description:
      "（三） 除得到管理层批准执行紧急修复任务外，禁止应用程序开发和维护人员进入生产系统，且所有的紧急修复活动都应立即进行记录和审核。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "275",
    name: "（四） 将完成开发和",
    description:
      "（四） 将完成开发和测试环境的程序或系统配置变更应用到生产系统时，应得到信息科技部门和业务部门的联合批准，并对变更进行及时记录和定期复查。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "276",
    name: "第三十六条 商业银行",
    description:
      "第三十六条 商业银行应制定并落实相关制度、标准和流程，确保信息系统开发、测试、维护过程中数据的完整性、保密性和可用性。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "277",
    name: "第三十七条 商业银行",
    description:
      "第三十七条 商业银行应建立并完善有效的问题管理流程，以确保全面地追踪、分析和解决信息系统问题，并对问题进行记录、分类和索引；如需供应商提供支持服务或技术援助，应向相关人员提供所需的合同和相关信息，并将过程记录在案；对完成紧急恢复起至关重要作用的任务和指令集，应有清晰的描述和说明，并通知相关人员。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "278",
    name: "第三十八条 商业银行",
    description:
      "第三十八条 商业银行应制定相关制度和流程，控制系统升级过程。当设备达到预期使用寿命或性能不能满足业务需求，基础软件（操作系统、数据库管理系统、中间件）或应用软件必须升级时，应及时进行系统升级，并将该类升级活动纳入信息科技项目，接受相关的管理和控制，包括用户验收测试。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "279",
    name: "第六章 信息科技运行",
    description: "第六章 信息科技运行",
    adfId: "2",
    paraType: "章",
  },
  {
    id: "280",
    name: "第三十九条 商业银行",
    description:
      "第三十九条 商业银行在选择数据中心的地理位置时，应充分考虑环境威胁（如是否接近自然灾害多发区、危险或有害设施、繁忙或主要公路），采取物理控制措施，监控对信息处理设备运行构成威胁的环境状况，并防止因意外断电或供电干扰影响数据中心的正常运行。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "281",
    name: "第四十条 商业银行应",
    description:
      "第四十条 商业银行应严格控制第三方人员（如服务供应商）进入安全区域，如确需进入应得到适当的批准，其活动也应受到监控；针对长期或临时聘用的技术人员和承包商，尤其是从事敏感性技术相关工作的人员，应制定严格的审查程序，包括身份验证和背景调查。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "282",
    name: "第四十一条 商业银行",
    description:
      "第四十一条 商业银行应将信息科技运行与系统开发和维护分离，确保信息科技部门内部的岗位制约；对数据中心的岗位和职责做出明确规定。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "283",
    name: "第四十二条 商业银行",
    description:
      "第四十二条 商业银行应按照有关法律法规要求保存交易记录，采取必要的程序和技术，确保存档数据的完整性，满足安全保存和可恢复要求。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "284",
    name: "第四十三条 商业银行",
    description:
      "第四十三条 商业银行应制定详尽的信息科技运行操作说明。如在信息科技运行手册中说明计算机操作人员的任务、工作日程、执行步骤，以及生产与开发环境中数据、软件的现场及非现场备份流程和要求（即备份的频率、范围和保留周期）。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "285",
    name: "第四十四条 商业银行",
    description:
      "第四十四条 商业银行应建立事故管理及处置机制，及时响应信息系统运行事故，逐级向相关的信息科技管理人员报告事故的发生，并进行记录、分析和跟踪，直到完成彻底的处置和根本原因分析。商业银行应建立服务台，为用户提供相关技术问题的在线支持，并将问题提交给相关信息科技部门进行调查和解决。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "286",
    name: "第四十五条 商业银行",
    description:
      "第四十五条 商业银行应建立服务水平管理相关的制度和流程，对信息科技运行服务水平进行考核。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "287",
    name: "第四十六条 商业银行",
    description:
      "第四十六条 商业银行应建立连续监控信息系统性能的相关程序，及时、完整地报告例外情况；该程序应提供预警功能，在例外情况对系统性能造成影响前对其进行识别和修正。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "288",
    name: "第四十七条 商业银行",
    description:
      "第四十七条 商业银行应制定容量规划，以适应由于外部环境变化产生的业务发展和交易量增长。容量规划应涵盖生产系统、备份系统及相关设备。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "289",
    name: "第四十八条 商业银行",
    description:
      "第四十八条 商业银行应及时进行维护和适当的系统升级，以确保与技术相关服务的连续可用性，并完整保存记录（包括疑似和实际的故障、预防性和补救性维护记录），以确保有效维护设备和设施。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "290",
    name: "第四十九条 商业银行",
    description:
      "第四十九条 商业银行应制定有效的变更管理流程，以确保生产环境的完整性和可靠性。包括紧急变更在内的所有变更都应记入日志，由信息科技部门和业务部门共同审核签字，并事先进行备份,以便必要时可以恢复原来的系统版本和数据文件。紧急变更成功后,应通过正常的验收测试和变更管理流程,采用恰当的修正以取代紧急变更。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "291",
    name: "第七章 业务连续性管",
    description: "第七章 业务连续性管理",
    adfId: "2",
    paraType: "章",
  },
  {
    id: "292",
    name: "第五十条 商业银行应",
    description:
      "第五十条 商业银行应根据自身业务的性质、规模和复杂程度制定适当的业务连续性规划，以确保在出现无法预见的中断时，系统仍能持续运行并提供服务；定期对规划进行更新和演练，以保证其有效性。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "293",
    name: "第五十一条 商业银行",
    description:
      "第五十一条 商业银行应评估因意外事件导致其业务运行中断的可能性及其影响，包括评估可能由下述原因导致的破坏：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "294",
    name: "（一） 内外部资源的",
    description: "（一） 内外部资源的故障或缺失（如人员、系统或其他资产）。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "295",
    name: "（二） 信息丢失或受",
    description: "（二） 信息丢失或受损。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "296",
    name: "（三） 外部事件（如",
    description: "（三） 外部事件（如战争、地震或台风等）。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "297",
    name: "第五十二条 商业银行",
    description:
      "第五十二条 商业银行应采取系统恢复和双机热备处理等措施降低业务中断的可能性，并通过应急安排和保险等方式降低影响。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "298",
    name: "第五十三条 商业银行",
    description:
      "第五十三条 商业银行应建立维持其运营连续性策略的文档，并制定对策略的充分性和有效性进行检查和沟通的计划。其中包括：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "299",
    name: "（一）规范的业务连续",
    description:
      "（一）规范的业务连续性计划,明确降低短期、中期和长期中断所造成影响的措施，包括但不限于:",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "300",
    name: "1．资源需求（如人员",
    description: "1．资源需求（如人员、系统和其他资产）以及获取资源的方式。",
    adfId: "2",
    paraType: "目",
  },
  {
    id: "301",
    name: "2．运行恢复的优先顺",
    description: "2．运行恢复的优先顺序。",
    adfId: "2",
    paraType: "目",
  },
  {
    id: "302",
    name: "3．与内部各部门及外",
    description:
      "3．与内部各部门及外部相关各方（尤其是监管机构、客户和媒体等）的沟通安排。",
    adfId: "2",
    paraType: "目",
  },
  {
    id: "303",
    name: "（二）更新实施业务连",
    description: "（二）更新实施业务连续性计划的流程及相关联系信息。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "304",
    name: "（三）验证受中断影响",
    description: "（三）验证受中断影响的信息完整性的步骤。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "305",
    name: "（四）当商业银行的业",
    description:
      "（四）当商业银行的业务或风险状况发生变化时，对本条（一）到（三）进行审核并升级。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "306",
    name: "第五十四条 商业银行",
    description:
      "第五十四条 商业银行的业务连续性计划和年度应急演练结果应由信息科技风险管理部门或信息科技管理委员会确认。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "307",
    name: "第八章 外 包",
    description: "第八章 外 包",
    adfId: "2",
    paraType: "章",
  },
  {
    id: "308",
    name: "第五十五条 商业银行",
    description:
      "第五十五条 商业银行不得将其信息科技管理责任外包，应合理谨慎监督外包职能的履行。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "309",
    name: "第五十六条 商业银行",
    description:
      "第五十六条 商业银行实施重要外包（如数据中心和信息科技基础设施等)应格外谨慎，在准备实施重要外包时应以书面材料正式报告银监会或其派出机构。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "310",
    name: "第五十七条 商业银行",
    description:
      "第五十七条 商业银行在签署外包协议或对外包协议进行重大变更前，应做好相关准备，其中包括：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "311",
    name: "（一） 分析外包是否",
    description:
      "（一） 分析外包是否适合商业银行的组织结构和报告路线、业务战略、总体风险控制，是否满足商业银行履行对外包服务商的监督义务。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "312",
    name: "（二） 考虑外包协议",
    description:
      "（二） 考虑外包协议是否允许商业银行监测和控制与外包相关的操作风险。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "313",
    name: "（三） 充分审查、评",
    description:
      "（三） 充分审查、评估外包服务商的财务稳定性和专业经验，对外包服务商进行风险评估，考查其设施和能力是否足以承担相应的责任。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "314",
    name: "（四） 考虑外包协议",
    description:
      "（四） 考虑外包协议变更前后实施的平稳过渡（包括终止合同可能发生的情况）。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "315",
    name: "（五） 关注可能存在",
    description:
      "（五） 关注可能存在的集中风险，如多家商业银行共用同一外包服务商带来的潜在业务连续性风险。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "316",
    name: "第五十八条 商业银行",
    description:
      "第五十八条 商业银行在与外包服务商合同谈判过程中，应考虑的因素包括但不限于：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "317",
    name: "（一） 对外包服务商",
    description: "（一） 对外包服务商的报告要求和谈判必要条件。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "318",
    name: "（二） 银行业监管机",
    description: "（二） 银行业监管机构和内部审计、外部审计能执行足够的监督。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "319",
    name: "（三） 通过界定信息",
    description:
      "（三） 通过界定信息所有权、签署保密协议和采取技术防护措施保护客户信息和其他信息。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "320",
    name: "（四） 担保和损失赔",
    description: "（四） 担保和损失赔偿是否充足。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "321",
    name: "（五） 外包服务商遵",
    description:
      "（五） 外包服务商遵守商业银行有关信息科技风险制度和流程的意愿及相关措施。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "322",
    name: "（六） 外包服务商提",
    description:
      "（六） 外包服务商提供的业务连续性保障水平，以及提供相关专属资源的承诺。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "323",
    name: "（七） 第三方供应商",
    description: "（七） 第三方供应商出现问题时，保证软件持续可用的相关措施。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "324",
    name: "（八） 变更外包协议",
    description:
      "（八） 变更外包协议的流程，以及商业银行或外包服务商选择变更或终止外包协议的条件，例如：",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "325",
    name: "1．商业银行或外包服",
    description: "1．商业银行或外包服务商的所有权或控制权发生变化。",
    adfId: "2",
    paraType: "目",
  },
  {
    id: "326",
    name: "2．商业银行或外包服",
    description: "2．商业银行或外包服务商的业务经营发生重大变化。",
    adfId: "2",
    paraType: "目",
  },
  {
    id: "327",
    name: "3．外包服务商提供的",
    description:
      "3．外包服务商提供的服务不充分，造成商业银行不能履行监督义务。",
    adfId: "2",
    paraType: "目",
  },
  {
    id: "328",
    name: "第五十九条 商业银行",
    description:
      "第五十九条 商业银行在实施双方关系管理，以及起草服务水平协议时，应考虑的因素包括但不限于：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "329",
    name: "（一） 提出定性和定",
    description:
      "（一） 提出定性和定量的绩效指标，评估外包服务商为商业银行及其相关客户提供服务的充分性。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "330",
    name: "（二） 通过服务水平",
    description:
      "（二） 通过服务水平报告、定期自我评估、内部或外部独立审计进行绩效考核。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "331",
    name: "（三） 针对绩效不达",
    description: "（三） 针对绩效不达标的情况调整流程，采取整改措施。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "332",
    name: "第六十条 商业银行应",
    description:
      "第六十条 商业银行应加强信息科技相关外包管理工作，确保商业银行的客户资料等敏感信息的安全，包括但不限于采取以下措施：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "333",
    name: "（一） 实现本银行客",
    description:
      "（一） 实现本银行客户资料与外包服务商其他客户资料的有效隔离。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "334",
    name: "（二） 按照“必需知",
    description:
      "（二） 按照“必需知道”和“最小授权”原则对外包服务商相关人员授权。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "335",
    name: "（三） 要求外包服务",
    description: "（三） 要求外包服务商保证其相关人员遵守保密规定。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "336",
    name: "（四） 应将涉及本银",
    description:
      "（四） 应将涉及本银行客户资料的外包作为重要外包，并告知相关客户。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "337",
    name: "（五） 严格控制外包",
    description:
      "（五） 严格控制外包服务商再次对外转包，采取足够措施确保商业银行相关信息的安全。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "338",
    name: "（六） 确保在中止外",
    description:
      "（六） 确保在中止外包协议时收回或销毁外包服务商保存的所有客户资料。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "339",
    name: "第六十一条 商业银行",
    description:
      "第六十一条 商业银行应建立恰当的应急措施，应对外包服务商在服务中可能出现的重大缺失。尤其需要考虑外包服务商的重大资源损失，重大财务损失和重要人员的变动，以及外包协议的意外终止。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "340",
    name: "第六十二条 商业银行",
    description:
      "第六十二条 商业银行所有信息科技外包合同应由信息科技风险管理部门、法律部门和信息科技管理委员会审核通过。商业银行应设立流程定期审阅和修订服务水平协议。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "341",
    name: "第九章 内部审计",
    description: "第九章 内部审计",
    adfId: "2",
    paraType: "章",
  },
  {
    id: "342",
    name: "第六十三条 商业银行",
    description:
      "第六十三条 商业银行内部审计部门应根据业务的性质、规模和复杂程度，对相关系统及其控制的适当性和有效性进行监测。内部审计部门应配备足够的资源和具有专业能力的信息科技审计人员，独立于本银行的日常活动，具有适当的授权访问本银行的记录。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "343",
    name: "第六十四条 商业银行",
    description: "第六十四条 商业银行内部信息科技审计的责任包括：",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "344",
    name: "（一） 制定、实施和",
    description:
      "（一） 制定、实施和调整审计计划，检查和评估商业银行信息科技系统和内控机制的充分性和有效性。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "345",
    name: "（二） 按照第（一）",
    description:
      "（二） 按照第（一）款规定完成审计工作，在此基础上提出整改意见。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "346",
    name: "（三） 检查整改意见",
    description: "（三） 检查整改意见是否得到落实。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "347",
    name: "（四） 执行信息科技",
    description:
      "（四） 执行信息科技专项审计。信息科技专项审计，是指对信息科技安全事故进行的调查、分析和评估，或审计部门根据风险评估结果对认为必要的特殊事项进行的审计。",
    adfId: "2",
    paraType: "项",
  },
  {
    id: "348",
    name: "第六十五条 商业银行",
    description:
      "第六十五条 商业银行应根据业务性质、规模和复杂程度，信息科技应用情况，以及信息科技风险评估结果，决定信息科技内部审计范围和频率。但至少应每三年进行一次全面审计。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "349",
    name: "第六十六条 商业银行",
    description:
      "第六十六条 商业银行在进行大规模系统开发时，应要求信息科技风险管理部门和内部审计部门参与，保证系统开发符合本银行信息科技风险管理标准。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "350",
    name: "第十章 外部审计",
    description: "第十章 外部审计",
    adfId: "2",
    paraType: "章",
  },
  {
    id: "351",
    name: "第六十七条 商业银行",
    description:
      "第六十七条 商业银行可以在符合法律、法规和监管要求的情况下，委托具备相应资质的外部审计机构进行信息科技外部审计。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "352",
    name: "第六十八条 在委托审",
    description:
      "第六十八条 在委托审计过程中，商业银行应确保外部审计机构能够对本银行的硬件、软件、文档和数据进行检查，以发现信息科技存在的风险，国家法律、法规及监管部门规章、规范性文件规定的重要商业、技术保密信息除外。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "353",
    name: "第六十九条 商业银行",
    description:
      "第六十九条 商业银行在实施外部审计前应与外部审计机构进行充分沟通，详细确定审计范围，不应故意隐瞒事实或阻挠审计检查。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "354",
    name: "第七十条 银监会及其",
    description:
      "第七十条 银监会及其派出机构必要时可指定具备相应资质的外部审计机构对商业银行执行信息科技审计或相关检查。外部审计机构根据银监会或其派出机构的委托或授权对商业银行进行审计时，应出示委托授权书，并依照委托授权书上规定的范围进行审计。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "355",
    name: "第七十一条 外部审计",
    description:
      "第七十一条 外部审计机构根据授权出具的审计报告，经银监会及其派出机构审阅批准后具有与银监会及其派出机构出具的检查报告同等的效力，被审计的商业银行应根据该审计报告提出整改计划，并在规定的时间内实施整改。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "356",
    name: "第七十二条 商业银行",
    description:
      "第七十二条 商业银行在委托外部审计机构进行外部审计时，应与其签订保密协议，并督促其严格遵守法律法规，保守本银行的商业秘密和信息科技风险信息，防止其擅自对本银行提供的任何文件进行修改、复制或带离现场。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "357",
    name: "第十一章 附 则",
    description: "第十一章 附 则",
    adfId: "2",
    paraType: "章",
  },
  {
    id: "358",
    name: "第七十三条 未设董事",
    description:
      "第七十三条 未设董事会的商业银行，应当由其经营决策机构履行本指引中董事会的有关信息科技风险管理职责。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "359",
    name: "第七十四条 银监会依",
    description:
      "第七十四条 银监会依法对商业银行的信息科技风险管理实施监督检查。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "360",
    name: "第七十五条 本指引由",
    description: "第七十五条 本指引由银监会负责解释、修订。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "361",
    name: "第七十六条 本指引自",
    description:
      "第七十六条 本指引自颁布之日起施行，《银行业金融机构信息系统风险管理指引》（银监发〔2006〕63号）同时废止。",
    adfId: "2",
    paraType: "条",
  },
  {
    id: "362",
    name: "第一章 总则",
    description: "第一章 总则",
    adfId: "3",
    paraType: "章",
  },
  {
    id: "363",
    name: "第一条 为加强银行业",
    description:
      "第一条 为加强银行业金融机构重要信息系统投产及变更风险管理，根据《中华人民共和国银行业监督管理法》、《中华人民共和国商业银行法》制定本办法。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "364",
    name: "第二条 在中华人民共",
    description:
      "第二条 在中华人民共和国境内设立的政策性银行、国有商业银行、股份制商业银行、邮政储蓄银行、城市商业银行、农村商业银行、农村合作银行、农村信用社、城市信用社、外商独资银行、中外合资银行适用本办法。中国银行业监督管理委员会（以下简称中国银监会）监管的其他金融机构参照本办法执行。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "365",
    name: "第三条 本办法所称的",
    description:
      "第三条 本办法所称的重要信息系统是指支撑重要业务，其信息安全和服务质量关系公民、法人和其他组织的权益，或关系社会秩序、公共利益乃至国家安全的信息系统。包括面向客户、涉及账务处理且实时性要求较高的业务处理类、渠道类和涉及客户风险管理等业务的管理类信息系统，以及支撑系统运行的机房和网络等基础设施。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "366",
    name: "第四条 本办法所称的",
    description: "第四条 本办法所称的重要信息系统投产及变更主要指：",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "367",
    name: "（一）重要信息系统投",
    description: "（一）重要信息系统投产。",
    adfId: "3",
    paraType: "项",
  },
  {
    id: "368",
    name: "（二）支撑重要信息系",
    description: "（二）支撑重要信息系统运行的机房和网络基础设施投产。",
    adfId: "3",
    paraType: "项",
  },
  {
    id: "369",
    name: "（三）影响全辖或一个",
    description:
      "（三）影响全辖或一个（含）以上分行系统服务、重要业务中断时间3小时（含）以上的重要信息系统以及支持其运行的基础设施变更，包括机房场地迁移、网络及核心业务系统应用架构变更、核心业务系统版本变更等。",
    adfId: "3",
    paraType: "项",
  },
  {
    id: "370",
    name: "（四）其他对银行重要",
    description:
      "（四）其他对银行重要业务运营及重要信息系统的可用性、完整性、安全性具有较大潜在影响的投产及变更。",
    adfId: "3",
    paraType: "项",
  },
  {
    id: "371",
    name: "第二章 组织管理",
    description: "第二章 组织管理",
    adfId: "3",
    paraType: "章",
  },
  {
    id: "372",
    name: "第五条 银行业金融机",
    description:
      "第五条 银行业金融机构应健全IT治理结构，落实重要信息系统投产及变更管理责任。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "373",
    name: "第六条 银行业金融机",
    description:
      "第六条 银行业金融机构高级管理层应统筹管理重要信息系统建设，听取重大项目投产或变更的风险评估汇报，对风险控制过程进行监督。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "374",
    name: "第七条 银行业金融机",
    description:
      "第七条 银行业金融机构信息科技部门应建立重要信息系统投产及变更管理机制、制度与流程，承担技术管理工作，协调业务、管理部门开展重要信息系统投产及变更工作，保障信息科技资源投入。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "375",
    name: "第八条 银行业金融机",
    description:
      "第八条 银行业金融机构业务、管理部门应配合信息科技部门开展投产及变更工作，开展业务影响分析，制定业务管理办法，组织用户测试，保证业务资源投入。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "376",
    name: "第九条 银行业金融机",
    description:
      "第九条 银行业金融机构内部审计部门应开展重要信息系统投产及变更审计工作，针对问题发现提出整改意见。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "377",
    name: "第三章 风险评估",
    description: "第三章 风险评估",
    adfId: "3",
    paraType: "章",
  },
  {
    id: "378",
    name: "第十条 银行业金融机",
    description:
      "第十条 银行业金融机构应充分识别、分析、评估重要信息系统投产及变更风险，包括系统功能缺陷、客户信息泄露、业务中断、交易缓慢或其他因素可能造成的操作风险、法律风险和声誉风险，并形成风险评估报告。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "379",
    name: "第十一条 银行业金融",
    description:
      "第十一条 银行业金融机构在采取有效信息安全控制措施的前提下，可委托外部专家或具备相应资质的外部专业机构进行重要信息系统投产及变更的风险评估工作。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "380",
    name: "第十二条 银行业金融",
    description:
      "第十二条 银行业金融机构董事会及高级管理层应审慎重大项目的风险评估报告。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "381",
    name: "第十三条 银行业金融",
    description:
      "第十三条 银行业金融机构应针对风险评估中发现的薄弱环节制定整改方案，明确整改时间。不具备整改条件的应采取风险缓释措施。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "382",
    name: "第四章 投产及变更控",
    description: "第四章 投产及变更控制",
    adfId: "3",
    paraType: "章",
  },
  {
    id: "383",
    name: "第十四条 银行业金融",
    description:
      "第十四条 银行业金融机构应统一组织协调重要信息系统投产及变更工作，制定年度投产及变更规则，编制实施计划和方案，确定实施策略和步骤，明确岗位职责，确保关键岗位职责分离。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "384",
    name: "第十五条 银行业金融",
    description:
      "第十五条 银行业金融机构应对重要信息系统投产及变更过程进行安全审查，采取风险控制措施，有效控制重要信息系统投产及变更风险。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "385",
    name: "第十六条 银行金融机",
    description:
      "第十六条 银行金融机构应建立重要信息系统投产及变更内容评审和审批、授权机制。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "386",
    name: "第十七条 银行业金融",
    description:
      "第十七条 银行业金融机构应按照对业务影响最小原则，采取与风险程度相适应的重要信息系统投产及变更策略。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "387",
    name: "第十八条 银行业金融",
    description:
      "第十八条 银行业金融机构应合理避开业务高峰期和敏感时段安排重要信息系统上线，应提前将重要信息系统投产及变更可能对服务的影响告知客户。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "388",
    name: "第十九条 银行业金融",
    description:
      "第十九条 银行业金融机构应建立充分、完整的测试体系，测试结果应经过信息科技部门和相关业务部门确认，并形成测试和验收报告，确保系统上线后的正常稳定运行以及系统功能与业务目标的一致性。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "389",
    name: "第二十条 银行业金融",
    description:
      "第二十条 银行业金融机构应建立与生产环境相隔离的测试环境，测试环境应模拟生产环境的真实情况。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "390",
    name: "第二十一条 银行业金",
    description:
      "第二十一条 银行业金融机构应建立完善的版本管理制度，制定严格的审批、控制和操作流程，保存完整的日志记录。拟投产及变更的重要信息系统应保证版本完整、准确、有效，遵从系统开发和运行管理制度规范。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "391",
    name: "第二十二条 银行业金",
    description:
      "第二十二条 银行业金融机构应加强重要信息系统投产及变更过程中的数据管理与质量控制；测试环境中使用的敏感生产数据应进行脱敏、变形处理；需要历史数据迁移的，应制定详细的数据迁移计划，并提前进行数据迁移测试和数据有效性、兼容性验证，确保迁移后数据的完整性、安全性和可用性。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "392",
    name: "第二十三条 银行业金",
    description:
      "第二十三条 银行业金融机构应制定重要信息系统投产及变更应急预案，制定系统回退和应急处置计划和流程，必要时应实施演练。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "393",
    name: "第二十四条 重要信息",
    description:
      "第二十四条 重要信息系统投产及变更过程中，银行业金融机构应严格执行上线实施方案，加强监督与复核，避免操作失误和非法操作。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "394",
    name: "第二十五条 银行业金",
    description:
      "第二十五条 银行业金融机构应加强重要信息系统投产及变更过程的风险监控和预警，各相关部门协同做好应急准备。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "395",
    name: "第二十六条 银行业金",
    description:
      "第二十六条 银行业金融机构应制定并落实系统运行管理规程、制度，制定、完善相关业务管理办法、操作规程，明确业务及运行管理职责，组织必要的培训，确保投产及变更实施后业务顺利开展。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "396",
    name: "第二十七条 银行业金",
    description:
      "第二十七条 银行业金融机构应在重要信息系统投产及变更实施后，组织业务部门、管理部门和信息科技部门对投产及变更的有效性进行验证。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "397",
    name: "第二十八条 银行业金",
    description:
      "第二十八条 银行业金融机构应在重要信息系统投产及变更实施后及时更新各项相关应急预案，并适时实施演练。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "398",
    name: "第二十九条 银行业金",
    description:
      "第二十九条 银行业金融机构应对重要信息系统投产及变更过程产生的各类文档资料进行管理，确保文档资料的完整性、及时性和有效性，并满足独立审计要求。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "399",
    name: "第五章 投产及变更报",
    description: "第五章 投产及变更报告",
    adfId: "3",
    paraType: "章",
  },
  {
    id: "400",
    name: "第三十条 银行业金融",
    description:
      "第三十条 银行业金融机构应就重要信息系统投产及变更事项向中国银监会或其派出机构报告。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "401",
    name: "第三十一条 银行业金",
    description:
      "第三十一条 银行业金融机构应在重要信息系统投产前至少20个工作日、变更前至少10个工作日向中国银监会或其派出机构报告，包括但不限于：",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "402",
    name: "（一）总体说明：投产",
    description:
      "（一）总体说明：投产及变更目的、内容、计划起止时间、业务影响范围、联系人及联系方式等。",
    adfId: "3",
    paraType: "项",
  },
  {
    id: "403",
    name: "（二）重要信息系统基",
    description:
      "（二）重要信息系统基本信息，包括：系统名称、业务功能，操作系统、数据库、中间件情况，应用架构、技术架构、数据架构，生产主机备份方案、数据备份方案，运行管理等相关职能部门，是否纳入灾难恢复计划等。",
    adfId: "3",
    paraType: "项",
  },
  {
    id: "404",
    name: "（三）重要信息系统安",
    description:
      "（三）重要信息系统安全策略和措施，包括对账户、交易和客户敏感信息的安全控制措施等。",
    adfId: "3",
    paraType: "项",
  },
  {
    id: "405",
    name: "（四）涉及基础设施的",
    description:
      "（四）涉及基础设施的，需提供基础设施基本信息，包括机房和网络方案。机房方案包括等级标准、地址、供配电系统、消防、空调、弱电系统、机房加固、机房空间规划，以及机房验收报告等；网络方案包括网络架构分区、核心网络备份情况，以及区域间、外联网、互联网边界安全措施与网络监控措施等。",
    adfId: "3",
    paraType: "项",
  },
  {
    id: "406",
    name: "（五）采取外包方式的",
    description:
      "（五）采取外包方式的，需提交外包服务机构情况、外包服务内容、外包风险评估报告等。",
    adfId: "3",
    paraType: "项",
  },
  {
    id: "407",
    name: "（六）投产及变更方案",
    description:
      "（六）投产及变更方案，包括投产及变更的组织结构与实施计划、操作步骤等。",
    adfId: "3",
    paraType: "项",
  },
  {
    id: "408",
    name: "（七）风险评估报告，",
    description:
      "（七）风险评估报告，应包括业务影响分析，技术风险分析与评估，控制措施的有效性，以及剩余风险等。",
    adfId: "3",
    paraType: "项",
  },
  {
    id: "409",
    name: "（八）应急预案，包括",
    description:
      "（八）应急预案，包括应急处置组织结构，应急场景，应急处置流程、步骤，应急联系方式与报告路线等，实施演练的应提交演练总结报告。",
    adfId: "3",
    paraType: "项",
  },
  {
    id: "410",
    name: "第三十二条 银行业金",
    description:
      "第三十二条 银行业金融机构应在重要信系统投产及变更实施后1个月内向中国银监会或其派出机构提交总结报告材料，内容包括但不限于：投产及变更方案执行情况、效果，问题发现和处理情况，后续改进措施等。如投产及变更失败，应详细说明失败原因。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "411",
    name: "第三十三条 银行业金",
    description:
      "第三十三条 银行业金融机构应按照属地监管原则提交报告材料，报送路线如下：",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "412",
    name: "（一）银行业金融机构",
    description:
      "（一）银行业金融机构法人组织实施投产及变更的，由该法人机构统一向中国银监会或其派出机构提交报告材料。",
    adfId: "3",
    paraType: "项",
  },
  {
    id: "413",
    name: "（二）银行业金融机构",
    description:
      "（二）银行业金融机构分行组织实施投产及变更的，由分行向所在地中国银监会派出机构提交报告材料。",
    adfId: "3",
    paraType: "项",
  },
  {
    id: "414",
    name: "第三十四条 重要信息",
    description:
      "第三十四条 重要信息系统投产及变更如失败需要重新安排的，银行业金融机构应再次向中国银监会或其派出机构报告。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "415",
    name: "第三十五条 银行业金",
    description:
      "第三十五条 银行业金融机构数据中心机房设立、场所变更，应按照中国银监会有关数据中心管理规范报告。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "416",
    name: "第六章 监督管理",
    description: "第六章 监督管理",
    adfId: "3",
    paraType: "章",
  },
  {
    id: "417",
    name: "第三十六条 针对银行",
    description:
      "第三十六条 针对银行业金融机构重要信息系统投产及变更风险，中国银监会及其派出机构可以采取风险提示、约见谈话、监管质询等措施。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "418",
    name: "第三十七条 中国银监",
    description:
      "第三十七条 中国银监会及其派出机构可依法对银行业金融的重要信息系统投产及变更实施现场检查。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "419",
    name: "第三十八条 银行业金",
    description:
      "第三十八条 银行业金融机构违反本办法有关规定的，中国银监会及其派出机构将依法追究相关责任。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "420",
    name: "第七章 附则",
    description: "第七章 附则",
    adfId: "3",
    paraType: "章",
  },
  {
    id: "421",
    name: "第三十九条 本办法由",
    description: "第三十九条 本办法由中国银监会负责解释和修订。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "422",
    name: "第四十条 本办法自公",
    description: "第四十条 本办法自公布之日起执行。",
    adfId: "3",
    paraType: "条",
  },
  {
    id: "423",
    name: "第一章 总则",
    description: "第一章 总则",
    adfId: "4",
    paraType: "章",
  },
  {
    id: "424",
    name: "第一条 为加强商业银",
    description:
      "第一条 为加强商业银行数据中心风险管理，保障数据中心安全、可靠、稳定运行，提高商业银行业务连续性水平，根据《中华人民共和国银行业监督管理法》及《中华人民共和国商业银行法》制定本指引。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "425",
    name: "第二条 在中华人民共",
    description:
      "第二条 在中华人民共和国境内设立的国有商业银行、股份制商业银行、邮政储蓄银行、城市商业银行、省级农村信用联合社、外商独资银行、中外合资银行适用本指引。中国银行业监督管理委员会（以下简称中国银监会）监管的其他金融机构参照本指引执行。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "426",
    name: "第三条 以下术语适用",
    description: "第三条 以下术语适用于本指引：",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "427",
    name: "（一）本指引所称数据",
    description:
      "（一）本指引所称数据中心包括生产中心和灾难备份中心（以下简称灾备中心）。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "428",
    name: "（二）本指引所称生产",
    description:
      "（二）本指引所称生产中心是指商业银行对全行业务、客户和管理等重要信息进行集中存储、处理和维护，具备专用场所，为业务运营及管理提供信息科技支撑服务的组织。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "429",
    name: "（三）本指引所称灾备",
    description:
      "（三）本指引所称灾备中心是指商业银行为保障其业务连续性，在生产中心故障、停顿或瘫疾后，能够接替生产中心运行，具备专用场所，进行数据处理和支持重要业务持续运行的组织。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "430",
    name: "（四）本指引所称灾备",
    description:
      "（四）本指引所称灾备中心同城模式是指灾备中心与生产中心位于同一地理区域，一般距离数十公里，可防范火灾、建筑物破坏、电力或通信系统中断等事件。灾备中心异地模式是指灾备中心与生产中心处于不同地理区域，一般距离在数百公里以上，不会同时面临同类区域性灾难风险，如地震、台风和洪水等。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "431",
    name: "（五）本指引所称重要",
    description:
      "（五）本指引所称重要信息系统是指支撑重要业务，其信息安全和服务质量关系公民、法人和组织的权益，或关系社会秩序、公共利益乃至国家安全的信息系统。包括面向客户、涉及账务处理且时效性要求较高的业务处理类、渠道类和涉及客户风险管理等业务的管理类信息系统，以及支撑系统运行的机房和网络等基础设施。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "432",
    name: "第四条 《信息安全技",
    description:
      "第四条 《信息安全技术信息系统灾难恢复规范》（GB/T20988－2007）中的条款通过本指引的引用而成为本指引的条款。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "433",
    name: "第二章 设立与变更",
    description: "第二章 设立与变更",
    adfId: "4",
    paraType: "章",
  },
  {
    id: "434",
    name: "第五条 商业银行应于",
    description:
      "第五条 商业银行应于取得金融许可证后两年内，设立生产中心；生产中心设立后两年内，设立灾备中心。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "435",
    name: "第六条 商业银行数据",
    description:
      "第六条 商业银行数据中心应配置满足业务运营与管理要求的场地、基础设施、网络、信息系统和人员，并具备支持业务不间断服务的能力。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "436",
    name: "第七条 总资产规模一",
    description:
      "第七条 总资产规模一千亿元人民币以上且跨省设立分支机构的法人商业银行，及省级农村信用联合社应设立异地模式灾备中心，重要信息系统灾难恢复能力应达到《信息安全技术信息系统灾难恢复规范》中定义的灾难恢复等级第5级（含）以上；其他法人商业银行应设立同城模式灾备中心并实现数据异地备份，重要信息系统灾难恢复能力应达到《信息安全技术信息系统灾难恢复规范》中定义的灾难恢复等级第4级（含）以上。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "437",
    name: "第八条 商业银行应就",
    description:
      "第八条 商业银行应就数据中心设立，数据中心服务范围、服务职能和场所变更，以及其他对数据中心持续运行具有较大影响的重大变更事项向中国银监会或其派出机构报告。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "438",
    name: "第九条 商业银行应在",
    description:
      "第九条 商业银行应在数据中心规划筹建阶段，以及在数据中心正式运营前至少20个工作日，向中国银监会或其派出机构报告。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "439",
    name: "第十条 商业银行变更",
    description:
      "第十条 商业银行变更数据中心场所时应至少提前2个月，其他重大变更应至少提前10个工作日向中国银监会或其派出机构报告。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "440",
    name: "第三章 风险管理",
    description: "第三章 风险管理",
    adfId: "4",
    paraType: "章",
  },
  {
    id: "441",
    name: "第十一条 商业银行信",
    description:
      "第十一条 商业银行信息科技风险管理部门应制定数据中心风险管理策略、风险识别和评估流程，定期开展风险评估工作，对风险进行分级管理，持续监督风险管理状况，及时预警，将风险控制在可接受水平。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "442",
    name: "第十二条 商业银行信",
    description:
      "第十二条 商业银行信息科技部门应指导、监督和协调数据中心明确信息系统运营维护管理策略，建立运营维护管理制度、标准和流程，落实信息科技风险管理措施。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "443",
    name: "第十三条 商业银行数",
    description:
      "第十三条 商业银行数据中心应建立健全各项管理与内控制度，从技术和管理等方面实施风险控制措施。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "444",
    name: "第十四条 商业银行数",
    description:
      "第十四条 商业银行数据中心应设立专门管理岗位，监督、检查数据中心各项规范、制度、标准和流程的执行情况以及风险管理状况。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "445",
    name: "第十五条 商业银行应",
    description:
      "第十五条 商业银行应根据业务影响分析所识别出风险的可能性和损失程度，决定是否购买商业保险以应对不同类型的灾难，并定期检查其保险策略及范围。投保资产清单应保存于安全场所，以便索赔时使用。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "446",
    name: "第十六条 商业银行内",
    description:
      "第十六条 商业银行内部审计部门应至少每三年进行一次数据中心内部审计。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "447",
    name: "第十七条 商业银行在",
    description:
      "第十七条 商业银行在采取有效信息安全控制措施的前提下，可聘请合格的外部审计机构定期对数据中心进行审计。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "448",
    name: "第十八条 商业银行数",
    description:
      "第十八条 商业银行数据中心应根据内、外部审计意见，及时制定整改计划并实施整改。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "449",
    name: "第四章 运行环境管理",
    description: "第四章 运行环境管理",
    adfId: "4",
    paraType: "章",
  },
  {
    id: "450",
    name: "第十九条 商业银行进",
    description:
      "第十九条 商业银行进行数据中心选址时，应进行全面的风险评估，综合考虑地理位置、环境、设施等各种因素对数据中心安全运营的潜在影响，规避选址不当风险，避免数据中心选址过度集中。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "451",
    name: "第二十条 数据中心选",
    description: "第二十条 数据中心选址应满足但不限于以下要求：",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "452",
    name: "（一）生产中心与灾备",
    description:
      "（一）生产中心与灾备中心的场所应保持合理距离，避免同时遭受同类风险。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "453",
    name: "（二）应选址于电力供",
    description:
      "（二）应选址于电力供给可靠，交通、通信便捷地区；远离水灾和火灾隐患区域；远离易燃、易爆场所等危险区域；远离强振源和强噪声源，避开强电磁场干扰；应避免选址于地震、地质灾害高发区域。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "454",
    name: "第二十一条 数据中心",
    description:
      "第二十一条 数据中心基础设施建设应以满足重要信息系统运行高可用性和高可靠性要求、保障业务连续性为目标，应满足但不限于以下要求：",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "455",
    name: "（一）建筑物结构，如",
    description:
      "（一）建筑物结构，如层高、承重、抗震等，应满足专用机房建设要求。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "456",
    name: "（二）应根据使用要求",
    description: "（二）应根据使用要求划分功能区域，各功能区域原则上相对独立。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "457",
    name: "（三）应配备不间断电",
    description:
      "（三）应配备不间断电源、应急发电设施等以满足信息技术设备连续运行的要求。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "458",
    name: "（四）通信线路、供电",
    description:
      "（四）通信线路、供电、机房专用空调等基础设施应具备冗余能力，进行冗余配置，消除单点隐患。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "459",
    name: "（五）机房区域应采用",
    description:
      "（五）机房区域应采用气体消防和自动消防预警系统，内部通道设置、装饰材料等应满足消防要求，并通过消防验收。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "460",
    name: "（六）应采取防雷接地",
    description: "（六）应采取防雷接地、防磁、防水、防盗、防鼠虫害等保护措施。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "461",
    name: "（七）应采用环保节能",
    description: "（七）应采用环保节能技术，降低能耗，提高效率。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "462",
    name: "第二十二条 数据中心",
    description:
      "第二十二条 数据中心安防与基础设施保障应满足但不限于以下要求：",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "463",
    name: "（一）各功能区域应根",
    description:
      "（一）各功能区域应根据使用功能划分安全控制级别，不同级别区域采用独立的出入控制设备，并集中监控，各区域出入口及重要位置应采用视频监控，监控记录保存时间应满足事件分析、监督审计的需要。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "464",
    name: "（二）应具备机房环境",
    description:
      "（二）应具备机房环境监控系统，对基础设施设备、机房环境状况、安防系统状况进行7x24小时实时监测，监测记录保存时间应满足故障诊断、事后审计的需要。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "465",
    name: "（三）每年至少开展一",
    description:
      "（三）每年至少开展一次针对基础设施的安全评估，对基础设施的可用性和可靠性、运维管理流程以及人员的安全意识等方面进行检查，及时发现安全隐患并落实整改。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "466",
    name: "第二十三条 数据中心",
    description:
      "第二十三条 数据中心应采用两家或多家通信运营商线路互为备份。互为备份的通信线路不得经过同一路由节点。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "467",
    name: "第五章 运营维护管理",
    description: "第五章 运营维护管理",
    adfId: "4",
    paraType: "章",
  },
  {
    id: "468",
    name: "第二十四条 商业银行",
    description:
      "第二十四条 商业银行应建立满足业务发展要求的数据中心运营维护管理体系，根据业务需求定义运营维护服务内容，制定服务标准和评价方法，建立运营维护管理持续改进机制。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "469",
    name: "第二十五条 数据中心",
    description:
      "第二十五条 数据中心应建立满足信息科技服务要求的运营管理组织架构。设立生产调度、信。息安全、操作运行维护、质量合规管理等职能相关的部门或岗位，明确岗位和职责，配备专职人员，提供岗位专业技能培训，确保关键岗位职责分离，通过职责分工和岗位制约降低数据中心操作风险。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "470",
    name: "第二十六条 数据中心",
    description:
      "第二十六条 数据中心应建立信息科技运行维护服务管理流程，提高整体运行效率和服务水平，包括：",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "471",
    name: "（一）应建立事件和问",
    description:
      "（一）应建立事件和问题管理机制。明确事件管理流程，定义事件类别、事件分级响应要求和事件升级、上报规则，及时受理、响应、审批和交付服务请求，保障生产服务质量，尽可能降低对业务影响；建立服务台负责受理、跟踪、解答各类运营问题；建立问题根源分析及跟踪解决机制，查明运营事件产生的根本原因，避免事件再次发生。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "472",
    name: "（二）应建立变更管理",
    description:
      "（二）应建立变更管理流程，减少或防止变更对信息科技服务的影响。根据变更对业务影响大小进行变更分级，对变更影响、变更风险、资源需求和变更批准进行控制和管理；变更方案应包括应急及回退措施，并经过充分测试和验证；建立变更管理联动机制，当生产中心发生变更时，应同步分析灾备系统变更需求并进行相应的变更，评估灾备恢复的有效性；应尽量减少紧急变更。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "473",
    name: "（三）应建立配置管理",
    description:
      "（三）应建立配置管理流程，统一管理、及时更新数据中心基础设施和重要信息系统配置信息，支持变更风险评估、变更实施、故障事件排查、问题根源分析等服务管理流程。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "474",
    name: "（四）应对重要信息系",
    description:
      "（四）应对重要信息系统和通信网络的容量和性能需求进行前瞻性规划，分析、调整和优化容量和性能，满足业务发展要求。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "475",
    name: "（五）应统一调度各项",
    description:
      "（五）应统一调度各项运维任务，协调和解决各项运维任务冲突，妥善记录和保存运维任务调度过程。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "476",
    name: "（六）应制定验收交接",
    description:
      "（六）应制定验收交接标准及流程，规范重要信息系统投产验收管理。加强版本控制，防范因软件版本、操作文档等不一致产生的风险。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "477",
    name: "（七）应根据商业银行",
    description:
      "（七）应根据商业银行总体风险控制策略及应急管理要求，从基础设施、网络、信息系统等不同方面分别制定应急预案，并及时修订应急预案，定期进行演练，保证其有效性。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "478",
    name: "（八）应集中监控重要",
    description:
      "（八）应集中监控重要信息系统和通信网络运行状态。采用监控管理工具，实时监控重要信息系统和通信网络的运行状况，通过监测、采集、分析和调优，提升生产系统运行的可靠性、稳定性和可用性。监控记录应满足故障定位、诊断及事后审计等要求。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "479",
    name: "第二十七条 数据中心",
    description:
      "第二十七条 数据中心应建立信息安全管理规范，保证重要信息的机密性、完整性和可用性，包括：",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "480",
    name: "（一）应设立专门的信",
    description:
      "（一）应设立专门的信息安全管理部门或岗位，制定安全管理制度和实施计划，定期对信息安全策略、制度和流程的执行情况进行检查和报告。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "481",
    name: "（二）应建立和落实人",
    description:
      "（二）应建立和落实人员安全管理制度，明确信息安全管理职责；通过安全教育与培训，提高人员的安全意识和技能；建立重要岗位人员备份制度和监督制约机制。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "482",
    name: "（三）应加强信息资产",
    description:
      "（三）应加强信息资产管理，识别信息资产并建立责任制，根据信息资产重要性实施分类控制和分级保护，防范信息资产生成、使用和处置过程中的风险。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "483",
    name: "（四）应建立和落实物",
    description:
      "（四）应建立和落实物理环境安全管理制度，明确安全区域、规范区域访问管理，减少未授权访问所造成的风险。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "484",
    name: "（五）应建立操作安全",
    description:
      "（五）应建立操作安全管理制度，制定操作规程文档，规范信息系统监控、日常维护和批处理操作等过程。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "485",
    name: "（六）应建立数据安全",
    description:
      "（六）应建立数据安全管理制度，规范数据的产生、获取、存储、传输、分发、备份、恢复和清理的管理，以及存储介质的台帐、转储、抽检、报废和销毁的管理，保证数据的保密、真实、完整和可用。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "486",
    name: "（七）应建立网络通信",
    description:
      "（七）应建立网络通信与访问安全策略，隔离不同网络功能区域，采取与其安全级别对应的预防、监测等控制措施，防范对网络的未授权访问，保证网络通信安全。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "487",
    name: "（八）应建立基础设施",
    description:
      "（八）应建立基础设施和重要信息的授权访问机制，制定访问控制流程，保留访问记录，防止未授权访问。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "488",
    name: "第六章 灾难恢复管理",
    description: "第六章 灾难恢复管理",
    adfId: "4",
    paraType: "章",
  },
  {
    id: "489",
    name: "第二十八条 商业银行",
    description:
      "第二十八条 商业银行应将灾难恢复管理纳入业务连续性管理框架，建立灾难恢复管理组织架构，明确灾难恢复管理机制和流程。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "490",
    name: "第二十九条 商业银行",
    description:
      "第二十九条 商业银行应统筹规划灾难恢复工作，定期进行风险评估和业务影响分析，确定灾难恢复目标和恢复等级，明确灾难恢复策略、预案并及时更新。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "491",
    name: "第三十条 商业银行灾",
    description:
      "第三十条 商业银行灾难恢复预案应包括但不限于以下内容：灾难恢复指挥小组和工作小组人员组成及联系方式、汇报路线和沟通协调机制、灾难恢复资源分配、基础设施与信息系统的恢复优先次序、灾难恢复与回切流程及时效性要求、对外沟通机制、最终用户操作指导及第三方技术支持和应急响应服务等内容。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "492",
    name: "第三十一条 商业银行",
    description:
      "第三十一条 商业银行应为灾难恢复提供充分的资源保障，包括基础设施、网络通信、运维及技术支持人力资源、技术培训等。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "493",
    name: "第三十二条 商业银行",
    description:
      "第三十二条 商业银行应建立与服务提供商、电力部门、公安部门、当地政府和新闻媒体等单位的外部协作机制，保证灾难恢复时能及时获取外部支持。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "494",
    name: "第三十三条 商业银行",
    description:
      "第三十三条 商业银行应建立灾难恢复有效性测试验证机制，测试验证应定期或在重大变更后进行，内容应包含业务功能的恢复验证。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "495",
    name: "第三十四条 商业银行",
    description:
      "第三十四条 商业银行应每年至少进行一次重要信息系统专项灾备切换演练，每三年至少进行一次重要信息系统全面灾备切换演练，以真实业务接管为目标，验证灾备系统有效接管生产系统及安全回切的能力。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "496",
    name: "第三十五条 商业银行",
    description:
      "第三十五条 商业银行进行全面灾备切换和真实业务接管演练前应向中国银监会或其派出机构报告，并在演练结束后报送演练总结。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "497",
    name: "第三十六条 商业银行",
    description:
      "第三十六条 商业银行因灾难事件启动灾难恢复或将灾备中心回切至生产中心后，应及时向中国银监会或其派出机构报告，报告内容包括但不限于：灾难事件发生时间、影响范围和程度，亭件起因、应急处置措施、灾难恢复实施情况和结果、回切方案。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "498",
    name: "第七章 外包管理",
    description: "第七章 外包管理",
    adfId: "4",
    paraType: "章",
  },
  {
    id: "499",
    name: "第三十七条 商业银行",
    description:
      "第三十七条 商业银行董事会对外包负最终管理责任，应推动和完善外包风险管理体系建设，确保商业银行有效应对外包风险。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "500",
    name: "第三十八条 商业银行",
    description:
      "第三十八条 商业银行应根据信息科技战略规划制定数据中心外包策略；应制定数据中心服务外包管理制度、流程，建立全面的风险控制机制。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "501",
    name: "第三十九条 商业银行",
    description:
      "第三十九条 商业银行应确定外包服务所涉及的信息资产的关键性和敏感程度，审慎确定数据中心外包服务范围。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "502",
    name: "第四十条 商业银行应",
    description:
      "第四十条 商业银行应充分识别、分析、评估数据中心外包风险，包括信息安全风险、服务中断风险、系统失控风险以及声誉风险、战略风险等，形成风险评估报告并报董事会和高管层审核。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "503",
    name: "第四十一条 实施数据",
    description:
      "第四十一条 实施数据中心服务外包时，商业银行的管理责任不得外包。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "504",
    name: "第四十二条 数据中心",
    description: "第四十二条 数据中心服务外包一般包括：",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "505",
    name: "（一）基础设施类：外",
    description:
      "（一）基础设施类：外包服务商向商业银行提供数据中心机房、配套设施或运行设备的服务。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "506",
    name: "（二）运营维护类：外",
    description:
      "（二）运营维护类：外包服务商向商业银行提供数据中心信息系统或基础设施的日常运行、维护等服务。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "507",
    name: "第四十三条 商业银行",
    description:
      "第四十三条 商业银行在选择数据中心外包服务商时，应充分审查、评估外包服务商的资质、专业能力和服务方案，对外包服务商进行风险评估，考查其服务能力是否足以承担相应的贵任。评估包括：外包服务商的企业信誉及财务稳定性，外包服务商的信息安全和信息科技服务管理体系，银行业服务经验等。提供数据中心基础设施外包服务的服务商，其运行环境应符合商业银行要求，并具有完备的安全管理规范。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "508",
    name: "第四十四条 商业银行",
    description:
      "第四十四条 商业银行应与数据中心外包服务商签订书面合同，在合同中明确重要事项，包括但不限于双方的权利和义务、外包服务水平、服务的可靠性、服务的可用性、信息安全控制、服务持续性计划、审计、合规性要求、违约赔偿等。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "509",
    name: "第四十五条 商业银行",
    description:
      "第四十五条 商业银行应要求外包服务商购买商业保险以保证其有足够的赔偿能力，并告知保险覆盖范围。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "510",
    name: "第四十六条 商业银行",
    description:
      "第四十六条 商业银行应加强对数据中心外包服务活动的安全管理，包括但不限于：",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "511",
    name: "（一）商业银行应将数",
    description:
      "（一）商业银行应将数据中心外包服务安全管理纳入数据中心的整体安全策略，保障业务、管理和客户敏感数据信息安全。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "512",
    name: "（二）商业银行应按照",
    description:
      "（二）商业银行应按照“必需知道”和“最小授权”原则，严格控制外包服务商信息访问的权限，要求外包服务商不得对外泄露所接触的商业银行信息。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "513",
    name: "（三）商业银行应要求",
    description:
      "（三）商业银行应要求外包服务商保留操作痕迹、记录完整的日志，相关内容和保存期限应满足事件分析、安全取证、独立审计和监督检查需要。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "514",
    name: "（四）商业银行应要求",
    description:
      "（四）商业银行应要求外包服务商遵守商业银行有关信息科技风险管理制度和流程。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "515",
    name: "（五）商业银行应要求",
    description:
      "（五）商业银行应要求外包服务商每年至少开展一次信息安全风险评估并提交评估报告。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "516",
    name: "（六）商业银行应要求",
    description:
      "（六）商业银行应要求外包服务商聘请外部机构定期对其进行安全审计并提交审计报告，督促其及时整改发现的问题。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "517",
    name: "第四十七条 商业银行",
    description:
      "第四十七条 商业银行应禁止外包服务商转包并严格控制分包，保证外包服务水平。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "518",
    name: "第四十八条 商业银行",
    description:
      "第四十八条 商业银行应制定数据中心外包服务应急计划，制订供应商替换方案，以应对外包服务商破产、不可抗力或其它潜在问题导致服务中断或服务水平下降的情形，支持数据中心连续、可靠运行。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "519",
    name: "第四十九条 商业银行",
    description:
      "第四十九条 商业银行应建立外包服务考核、评价机制，定期对外包服务活动和外包服务商的服务能力进行审核和评估，确保获得持续、稳定的外包服务。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "520",
    name: "第五十条 商业银行在",
    description:
      "第五十条 商业银行在实施数据中心整体服务外包以及涉及影响业务、管理和客户敏感数据信息安全的外包前，应向中国银监会或其派出机构报告。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "521",
    name: "第五十一条 商业银行",
    description:
      "第五十一条 商业银行应在外包服务协议条款中明确商业银行和监管机构有权对协议范围内的服务活动进行监督检查，包括外包商的服务职能、责任、系统和设施等内容。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "522",
    name: "第八章 监督管理",
    description: "第八章 监督管理",
    adfId: "4",
    paraType: "章",
  },
  {
    id: "523",
    name: "第五十二条 中国银监",
    description:
      "第五十二条 中国银监会及其派出机构可依法对商业银行的数据中心实施非现场监管及现场检查。现场检查原则上每三年一次。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "524",
    name: "第五十三条 针对商业",
    description:
      "第五十三条 针对商业银行数据中心设立、变更、运营过程存在的风险，中国银监会或其派出机构可向商业银行提示风险并提出整改意见。商业银行应及时整改并反馈结果。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "525",
    name: "第九章 附则",
    description: "第九章 附则",
    adfId: "4",
    paraType: "章",
  },
  {
    id: "526",
    name: "第五十四条 本指引由",
    description: "第五十四条 本指引由中国银监会负责解释、修订。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "527",
    name: "第五十五条 本指引自",
    description: "第五十五条 本指引自公布之日起执行。",
    adfId: "4",
    paraType: "条",
  },
  {
    id: "528",
    name: "附件：《商业银行数据",
    description: "附件：《商业银行数据中心监管指引》报告材料目录和格式要求",
    adfId: "4",
    paraType: "附",
  },
  {
    id: "529",
    name: "《商业银行数据中心监",
    description: "《商业银行数据中心监管指引》报告材料目录和格式要求",
    adfId: "4",
    paraType: "",
  },
  {
    id: "530",
    name: "一、数据中心规划报告",
    description: "一、数据中心规划报告材料目录",
    adfId: "4",
    paraType: "",
  },
  {
    id: "531",
    name: "（一）数据中心建设规",
    description: "（一）数据中心建设规划报告，包括：",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "532",
    name: "1．立项报告和可行性",
    description:
      "1．立项报告和可行性分析报告，包括建设背景、建设目标、风险评估、效益分析、成本投入等。",
    adfId: "4",
    paraType: "目",
  },
  {
    id: "533",
    name: "2．基础设施规划方案",
    description:
      "2．基础设施规划方案，包括选址、建筑物结构、功能区域划分、监控、防雷接地及消防等配套设施、机房等级等。",
    adfId: "4",
    paraType: "目",
  },
  {
    id: "534",
    name: "3．信息系统建设规划",
    description:
      "3．信息系统建设规划方案，包括功能与技术方案规划、人员配置计划、系统服务的区域和业务范围等。灾备中心还需提供灾难恢复目标、灾难恢复等级、灾备技术方案规划及风险评佑报告等。",
    adfId: "4",
    paraType: "目",
  },
  {
    id: "535",
    name: "（二）区域环境及基础",
    description:
      "（二）区域环境及基础设施风险评估说明，包括风险识别，风险分析和风险控制策略等。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "536",
    name: "（三）建设及运营模式",
    description:
      "（三）建设及运营模式说明，包括技术支持及运行维护体系等。如采用外包，需提供外包的服务内容和外包风险评估报告；",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "537",
    name: "（四）组织架构规划。",
    description:
      "（四）组织架构规划。包括拟设立的部门与岗位职责、计划采用的人员数量等。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "538",
    name: "（五）建设及投入运营",
    description:
      "（五）建设及投入运营的时间进度计划和财务预算（基础设施建设和运维管理费用等）。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "539",
    name: "（六）中国银监会或其",
    description: "（六）中国银监会或其派出机构要求提供的其它文件和资料。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "540",
    name: "二、数据中心设立报告",
    description: "二、数据中心设立报告材料目录",
    adfId: "4",
    paraType: "",
  },
  {
    id: "541",
    name: "（一）由商业银行法定",
    description:
      "（一）由商业银行法定代表人签署的数据中心投产审批文件，包括数据中心上线申请，数据中心上线审批报告等。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "542",
    name: "（二）基础设施情况，",
    description:
      "（二）基础设施情况，包括地址、建筑物结构、功能区域划分、监控、防雷接地及消防等配套设施验收报告、机房及附属设施验收报告等。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "543",
    name: "（三）信息系统情况，",
    description:
      "（三）信息系统情况，包括系统架构、系统名称、系统服务的区域和业务范围、数据备份方案、灾备技术方案等。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "544",
    name: "（四）运营模式说明，",
    description:
      "（四）运营模式说明，包括技术支持及运行维护体系等。如采用外包需说明主要外包管理情况，包括主要外包项目名称、外包内容（业务类型及范围等）、外包商基本情况、外包合同（包括安全保密条款、知识产权保护条款）、外包服务水平协议和外包风险评估报告等。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "545",
    name: "（五）组织架构，包括",
    description:
      "（五）组织架构，包括部门设置与岗位职责、人员配备、主要负责人名单等。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "546",
    name: "（六）管理制度和规范",
    description:
      "（六）管理制度和规范清单及相关说明，包括运行管理流程、安全管理制度、应急管理制度和规范（含应急恢复策略、信息系统备份和恢复方案、应急管理流程及预案、应急演练及培训计划等）、灾难恢复预案。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "547",
    name: "（七）中国银监会或其",
    description: "（七）中国银监会或其派出机构要求提供的其它文件和资料。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "548",
    name: "三、数据中心重大变更",
    description: "三、数据中心重大变更报告材料目录",
    adfId: "4",
    paraType: "",
  },
  {
    id: "549",
    name: "（一）变更说明，包括",
    description: "（一）变更说明，包括变更原因、目的、内容、时间和影响范围等。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "550",
    name: "（二）变更方案，包括",
    description:
      "（二）变更方案，包括变更准备、变更计划和步骤、变更应急和回退措施。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "551",
    name: "（三）风险评估报告，",
    description: "（三）风险评估报告，包括风险分析，控制措施、变更有效性评估。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "552",
    name: "（四）中国银监会或其",
    description: "（四）中国银监会或其派出机构要求提供的其它文件和资料。",
    adfId: "4",
    paraType: "项",
  },
  {
    id: "553",
    name: "四、报告材料格式要求",
    description: "四、报告材料格式要求",
    adfId: "4",
    paraType: "",
  },
  {
    id: "554",
    name: "数据中心规划、设立及",
    description:
      "数据中心规划、设立及重大变更报告材料应向中国银监会或其派出机构报送纸质材料和电子文档。",
    adfId: "4",
    paraType: "",
  },
  {
    id: "555",
    name: "第一章 总则",
    description: "第一章 总则",
    adfId: "5",
    paraType: "章",
  },
  {
    id: "556",
    name: "第一条 信息系统与信",
    description:
      "第一条 信息系统与信息科技是保障商业银行业务持续运营的重要基础。为降低或消除因信息系统服务异常导致重要业务运营中断的影响，快速恢复被中断业务，维护公众信心和银行业正常运营秩序，提高商业银行业务连续性管理能力，根据《中华人民共和国银行业监督管理法》、《中华人民共和国商业银行法》以及相关法律法规，制定本指引。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "557",
    name: "第二条 本指引所称业",
    description:
      "第二条 本指引所称业务连续性管理是指商业银行为有效应对重要业务运营中断事件，建设应急响应、恢复机制和管理能力框架，保障重要业务持续运营的一整套管理过程，包括策略、组织架构、方法、标准和程序。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "558",
    name: "第三条 本指引所称重",
    description:
      "第三条 本指引所称重要业务是指面向客户、涉及账务处理、时效性要求较高的银行业务，其运营服务中断会对商业银行产生较大经济损失或声誉影响，或对公民、法人和其他组织的权益、社会秩序和公共利益、国家安全造成严重影响的业务。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "559",
    name: "第四条 本指引所称重",
    description:
      "第四条 本指引所称重要业务运营中断事件(以下简称运营中断事件)是指因下述原因导致信息系统服务异常、重要业务停止运营的事件。主要包括：",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "560",
    name: "（一）信息技术故障：",
    description: "（一）信息技术故障：信息系统技术故障、配套设施故障；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "561",
    name: "（二）外部服务中断：",
    description: "（二）外部服务中断：第三方无法合作或提供服务等；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "562",
    name: "（三）人为破坏：黑客",
    description: "（三）人为破坏：黑客攻击、恐怖袭击等；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "563",
    name: "（四）自然灾害：火灾",
    description: "（四）自然灾害：火灾、雷击、海啸、地震、重大疫情等。",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "564",
    name: "第五条 商业银行应当",
    description:
      "第五条 商业银行应当将业务连续性管理纳入全面风险管理体系，建立与本机构战略目标相适应的业务连续性管理体系，确保重要业务在运营中断事件发生后快速恢复，降低或消除因重要业务运营中断造成的影响和损失，保障业务持续运营。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "565",
    name: "第六条 商业银行应当",
    description:
      "第六条 商业银行应当根据本行业务发展的总体目标、经营规模以及风险控制的基本策略和风险偏好，确定适当的业务连续性管理战略。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "566",
    name: "第七条 商业银行应当",
    description:
      "第七条 商业银行应当建立业务连续性管理的组织架构，确定重要业务及其恢复目标，制定业务连续性计划，配置必要的资源，有效处置运营中断事件，并积极开展演练和业务连续性管理的评估改进。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "567",
    name: "第八条 业务连续性管",
    description: "第八条 业务连续性管理的基本原则是：",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "568",
    name: "（一）切实履行社会责",
    description: "（一）切实履行社会责任，保护客户合法权益、维护金融秩序；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "569",
    name: "（二）坚持预防为主，",
    description:
      "（二）坚持预防为主，建立预防、预警机制，将日常管理与应急处置有效结合；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "570",
    name: "（三）坚持以人为本，",
    description:
      "（三）坚持以人为本，重点保障人员安全；实施差异化管理，保障重要业务有序恢复；兼顾业务连续性管理成本与效益；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "571",
    name: "（四）坚持联动协作，",
    description:
      "（四）坚持联动协作，加强沟通协调，形成应对运营中断事件的整体有效机制。",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "572",
    name: "第九条 商业银行应当",
    description:
      "第九条 商业银行应当将业务连续性管理融入到企业文化中，使其成为银行机构日常运营管理的有机组成部分。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "573",
    name: "第二章 业务连续性组",
    description: "第二章 业务连续性组织架构",
    adfId: "5",
    paraType: "章",
  },
  {
    id: "574",
    name: "第一节 日常管理组织",
    description: "第一节 日常管理组织架构",
    adfId: "5",
    paraType: "节",
  },
  {
    id: "575",
    name: "第十条 董（理）事会",
    description:
      "第十条 董（理）事会是商业银行业务连续性生管理的决策机构，对业务连续性管理承担最终责任。主要职责包括：",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "576",
    name: "（一）审核和批准业务",
    description: "（一）审核和批准业务连续性管理战略、政策和程序；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "577",
    name: "（二）审批高级管理层",
    description:
      "（二）审批高级管理层业务连续性管理职责，定期听取高级管理层关于业务连续性管理的报告，监督、评价其履职情况；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "578",
    name: "（三）审批业务连续性",
    description: "（三）审批业务连续性管理年度审计报告。",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "579",
    name: "第十一条 高级管理层",
    description:
      "第十一条 高级管理层负责执行经董(理)事会批准的业务连续性管理政策。主要职责包括：",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "580",
    name: "（一）制定并定期审查",
    description: "（一）制定并定期审查和监督执行业务连续性管理政策、程序；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "581",
    name: "（二）明确各部门业务",
    description:
      "（二）明确各部门业务连续性管理职责，明确报告路线，审批重要业务恢复目标和恢复策略，督促各部门履行管理职责，确保业务连续性管理体系正常运行；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "582",
    name: "（三）确保配置足够的",
    description: "（三）确保配置足够的资源保障业务连续性管理的实施。",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "583",
    name: "第十二条 商业银行应",
    description:
      "第十二条 商业银行应当设立由高级管理层和业务连续性管理相关部门负责人组成的业务连续性管理委员会，统筹协调、落实各项管理职责。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "584",
    name: "第十三条 商业银行应",
    description:
      "第十三条 商业银行应当指定风险管理部门或其他综合管理部门为业务连续性管理主管部门，组织开展全行业务连续性管理工作，指导、评估、监督各部门的业务连续性管理工作；组织制定业务连续性计划，协调业务条线部门，汇总、确定重要业务的恢复目标和恢复策略；组织开展业务连续性计划的演练、评估与改进；开展业务连续性管理培训等。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "585",
    name: "第十四条 商业银行应",
    description:
      "第十四条 商业银行应当明确业务连续性管理执行部门，包括业务条线部门与信息科技部门。业务条线部门负责风险评估、业务影响分析，确定重要业务恢复目标和恢复策略，负责业务条线重要业务应急响应与恢复；信息科技部门负责信息技术应急响应与恢复。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "586",
    name: "第十五条 商业银行应",
    description:
      "第十五条 商业银行应当明确业务连续性管理保障部门，包括办公室、人力资源部门、公共关系部门、财务部门、法律合规部门、后勤部门、保卫部门等，为业务连续性日常管理提供人力、物力、财力以及安全保障和法律咨询。其中，公共关系部门应当制定对外媒体公关策略，制定和执行对外媒体公关的应急预案。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "587",
    name: "第十六条 商业银行各",
    description:
      "第十六条 商业银行各部门应当负责本部门业务连续性管理工作，制定相关规章制度，制定和执行本部门业务连续性计划，开展本部门业务连续性计划的演练、评估与改进工作。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "588",
    name: "第十七条 商业银行内",
    description:
      "第十七条 商业银行内部审计部门应当负责并定期开展全行业务连续性管理审计工作。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "589",
    name: "第二节 应急处置组织",
    description: "第二节 应急处置组织架构",
    adfId: "5",
    paraType: "节",
  },
  {
    id: "590",
    name: "第十八条 商业银行应",
    description:
      "第十八条 商业银行应当建立运营中断事件应急处置的组织架构，包括应急决策层、应急指挥层、应急执行层和应急保障层。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "591",
    name: "第十九条 应急决策层",
    description:
      "第十九条 应急决策层由商业银行高级管理人员组成，负责决定应急处置重大事宜，包括：决定运营中断事件通报、对外报告和公告；批准启动总体应急预案等。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "592",
    name: "第二十条 应急指挥层",
    description:
      "第二十条 应急指挥层由商业银行的业务连续性管理主管部门、执行部门和保障部门负责人组成，负责运营中断事件处置应急指挥和组织协调，督导应急处置实施。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "593",
    name: "第二十一条 应急执行",
    description:
      "第二十一条 应急执行层由商业银行业务连续性管理执行部门组成，负责业务条线与信息技术应急处置工作。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "594",
    name: "第二十二条 应急保障",
    description:
      "第二十二条 应急保障层由商业银行业务连续性管理保障部门组成，负责应急处置所需人力、物力和财力等资源的保障，应急处置对外报告、宣告、通报和沟通与协调，以及对外媒体公关、秩序维护、安全保障、法律咨询和人员安抚等相关工作。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "595",
    name: "第三章 业务影响分析",
    description: "第三章 业务影响分析",
    adfId: "5",
    paraType: "章",
  },
  {
    id: "596",
    name: "第二十三条 商业银行",
    description:
      "第二十三条 商业银行应当通过业务影响分析识别和评估业务运营中断所造成的影响和损失，明确业务连续性管理重点，根据业务重要程度实现差异化管理，确定各业务恢复优先顺序和恢复指标。商业银行应当至少每三年开展一次全面业务影响分析，并形成业务影响分析报告。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "597",
    name: "第二十四条 商业银行",
    description:
      "第二十四条 商业银行应当识别重要业务，明确重要业务归口管理部门、所需关键资源及对应的信息系统，识别重要业务的相互依赖关系，分析、评估各项重要业务在运营中断事件发生时可能造成的经济损失和非经济损失。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "598",
    name: "第二十五条 商业银行",
    description:
      "第二十五条 商业银行应当综合分析重要业务运营中断可能产生的损失与业务恢复成本，结合业务服务时效性、服务周期等运行特点，确定重要业务恢复时间目标(业务RTO)、业务恢复点目标(业务RPO)，原则上，重要业务恢复时间目标不得大于4小时，重要业务恢复点目标不得大于半小时。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "599",
    name: "第二十六条 商业银行",
    description:
      "第二十六条 商业银行应当明确业务重要程度和恢复优先级别，并识别重要业务恢复所需的必要资源。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "600",
    name: "第二十七条 商业银行",
    description:
      "第二十七条 商业银行应当通过分析业务与信息系统的对应关系、信息系统之间的依赖关系，根据业务恢复时间目标、业务恢复点目标、业务应急响应时间、业务恢复的验证时间，确定信息系统恢复时间目标(信息系统RTO)、信息系统恢复点目标(信息系统RPO)，明确信息系统重要程度和恢复优先级别，并识别信息系统恢复所需的必要资源。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "601",
    name: "第二十八条 商业银行",
    description:
      "第二十八条 商业银行应当开展业务连续性风险评估，识别业务连续运营所需的关键资源，分析资源所面临的各类威胁以及资源自身的脆弱性，确定资源的风险敞口。关键资源应当包括关键信息系统及其运行环境，关键的人员、业务场地、业务办公设备、业务单据以及供应商等。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "602",
    name: "第二十九条 商业银行",
    description:
      "第二十九条 商业银行应当根据风险敞口制定降低、缓释、转移等应对策略。依据防范或控制风险的可行性和残余风险的可接受程度，确定风险防范和控制的原则与措施。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "603",
    name: "第三十条 商业银行应",
    description:
      "第三十条 商业银行应当根据业务影响分析结果，依据业务恢复指标，制定差别化的业务恢复策略，主要包括关键资源恢复、业务替代手段、数据追补和恢复优先级别等。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "604",
    name: "第三十一条 商业银行",
    description:
      "第三十一条 商业银行应当依据业务恢复策略，确定灾难恢复资源获取方式和灾难恢复等级。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "605",
    name: "第四章 业务连续性计",
    description: "第四章 业务连续性计划与资源建设",
    adfId: "5",
    paraType: "章",
  },
  {
    id: "606",
    name: "第一节 业务连续性计",
    description: "第一节 业务连续性计划",
    adfId: "5",
    paraType: "节",
  },
  {
    id: "607",
    name: "第三十二条 商业银行",
    description:
      "第三十二条 商业银行应当依据业务恢复目标，制定覆盖所有重要业务的业务连续性计划。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "608",
    name: "第三十三条 业务连续",
    description: "第三十三条 业务连续性计划的主要内容应当包括：",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "609",
    name: "（一）重要业务及关联",
    description: "（一）重要业务及关联关系、业务恢复优先次序；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "610",
    name: "（二）重要业务运营所",
    description: "（二）重要业务运营所需关键资源；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "611",
    name: "（三）应急指挥和危机",
    description: "（三）应急指挥和危机通讯程序；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "612",
    name: "（四）各类预案以及预",
    description: "（四）各类预案以及预案维护、管理要求；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "613",
    name: "（五）残余风险。",
    description: "（五）残余风险。",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "614",
    name: "第三十四条 商业银行",
    description:
      "第三十四条 商业银行应当制定总体应急预案。总体应急预案是商业银行应对运营中断事件的总体方案，包括总体组织架构、各层级预案的定位和衔接关系及对运营中断事件的预警、报告、分析、决策、处理、恢复等处置程序。总体预案通常用于处置导致大范围业务运营中断的事件。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "615",
    name: "第三十五条 商业银行",
    description:
      "第三十五条 商业银行应当制定重要业务专项应急预案，专项应急预案应当注重灾难场景的设计，明确在不同场景下的应急流程和措施。业务条线的专项应急预案，应当注重调动内部资源、采取业务应急手段尽快恢复业务，并和信息科技部门、保障部门的应急预案有效衔接。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "616",
    name: "第三十六条 专项应急",
    description: "第三十六条 专项应急预案的主要内容应当包括：",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "617",
    name: "（一）应急组织架构及",
    description:
      "（一）应急组织架构及各部门、人员在预案中的角色、权限、职责分工；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "618",
    name: "（二）信息传递路径和",
    description: "（二）信息传递路径和方式；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "619",
    name: "（三）运营中断事件处",
    description:
      "（三）运营中断事件处置程序，包括预警、报告、决策、指挥、响应、回退等；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "620",
    name: "（四）运营中断事件处",
    description: "（四）运营中断事件处置过程中的风险控制措施；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "621",
    name: "（五）运营中断事件的",
    description: "（五）运营中断事件的危机处理机制；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "622",
    name: "（六）运营中断事件的",
    description: "（六）运营中断事件的内部沟通机制和联系方式；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "623",
    name: "（七）运营中断事件的",
    description: "（七）运营中断事件的外部沟通机制和联系方式；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "624",
    name: "（八）应急完成后的还",
    description: "（八）应急完成后的还原机制。",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "625",
    name: "第三十七条 商业银行",
    description:
      "第三十七条 商业银行应当要求重要业务及信息系统的外部供应商建立业务连续性计划，证明其业务连续性计划的有效性，其业务恢复目标应当满足商业银行要求。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "626",
    name: "第三十八条 商业银行",
    description:
      "第三十八条 商业银行应当注重与金融同业单位、外部金融市场、金融服务平台和公共事业部门等业务连续性计划的有效衔接；同时，应当积极采取风险缓释及转移措施，有效控制由于外部机构业务连续性管理不充分可能产生的风险。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "627",
    name: "第二节 业务连续性资",
    description: "第二节 业务连续性资源建设",
    adfId: "5",
    paraType: "节",
  },
  {
    id: "628",
    name: "第三十九条 商业银行",
    description:
      "第三十九条 商业银行应当开展业务连续性计划所需的资源建设，满足业务恢复目标和重要业务持续运营的要求。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "629",
    name: "第四十条 商业银行应",
    description:
      "第四十条 商业银行应当重点加强信息系统关键资源的建设，实现信息系统的高可用性，保障信息系统的持续运行并减少信息系统中断后的恢复时间。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "630",
    name: "第四十一条 商业银行",
    description:
      "第四十一条 商业银行应当设立统一的运营中断事件指挥中心场所，用于应急决策、指挥与联络，指挥场所应当配置办公与通讯设备以及指挥执行文档、联系资料等。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "631",
    name: "第四十二条 商业银行",
    description:
      "第四十二条 商业银行应当建立符合业务连续性管理要求的备用资源，如备用业务和办公场所资源、备用信息系统运行场所资源、备用信息技术资源、备用人力资源等，以及电力、通讯、消防、安保等资源。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "632",
    name: "第四十三条 商业银行",
    description:
      "第四十三条 商业银行选择备用场地时，应当确保不会同时遭受同类型风险；应当综合分析备用场地所在地的自然环境、地区配套设施、区域经济环境、交通条件、政策环境和成本等各方面因素，以及灾难恢复所需的金融服务、通讯、设备、技术等外部服务供应商资源情况。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "633",
    name: "第四十四条 商业银行",
    description:
      "第四十四条 商业银行在建立备用业务和办公场所时，应当配备业务操作和办公所需资源，并确保其能够迅速启用。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "634",
    name: "第四十五条 商业银行",
    description:
      "第四十五条 商业银行应当建立灾备中心等备用信息技术资源和备用信息系统运行场所资源，并满足银监会关于数据中心相关监管要求。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "635",
    name: "第四十六条 商业银行",
    description:
      "第四十六条 商业银行应当明确关键岗位的备份人员及其备份方式，并确保备份人员可用，降低关键岗位人员无法及时履职风险。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "636",
    name: "第五章 业务连续性演",
    description: "第五章 业务连续性演练与持续改进",
    adfId: "5",
    paraType: "章",
  },
  {
    id: "637",
    name: "第一节 业务连续性计",
    description: "第一节 业务连续性计划演练",
    adfId: "5",
    paraType: "节",
  },
  {
    id: "638",
    name: "第四十七条 商业银行",
    description:
      "第四十七条 商业银行应当开展业务连续性计划演练，检验应急预案的完整性、可操作性和有效性，验证业务连续性资源的可用性，提高运营中断事件的综合处置能力。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "639",
    name: "第四十八条 制定业务",
    description:
      "第四十八条 制定业务连续性演练计划时，商业银行应当考虑业务的重要性和影响程度，包括客户范围、业务性质、业务时效性、经济与非经济影响等，演练频率、方式应当与业务的重要性和影响程度相匹配。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "640",
    name: "第四十九条 商业银行",
    description:
      "第四十九条 商业银行应当至少每三年对全部重要业务开展一次业务连续性计划演练。在重大业务活动、重大社会活动等关键时点，或在关键资源发生重大变化之前，也应当开展业务连续性计划的专项演练。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "641",
    name: "第五十条 商业银行应",
    description:
      "第五十条 商业银行应当加强业务应急预案的演练，重点加强业务和信息科技部门的协调、配合；应当注重以真实业务接管为目标，确保灾备系统能够有效接管生产系统并具备安全回切能力。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "642",
    name: "第五十一条 商业银行",
    description:
      "第五十一条 商业银行应当将外部供应商纳入演练范围并定期开展演练；同时，应当积极参加金融同业单位、外部金融市场、金融服务平台和公共事业部门等组织的业务连续性计划演练，确保应急和协调措施的有效性。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "643",
    name: "第五十二条 商业银行",
    description:
      "第五十二条 商业银行应当对业务连续性计划的演练过程进行完整记录，及时总结、评估和改进。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "644",
    name: "第二节 业务连续性管",
    description: "第二节 业务连续性管理评估与改进",
    adfId: "5",
    paraType: "节",
  },
  {
    id: "645",
    name: "第五十三条 商业银行",
    description: "第五十三条 商业银行应当建立业务连续性管理体系持续改进机制。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "646",
    name: "第五十四条 商业银行",
    description:
      "第五十四条 商业银行应当至少每年对业务连续性管理体系的完整性、合理性、有效性组织一次自评估，或者委托第三方机构进行评估，并向高级管理层提交评估报告。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "647",
    name: "第五十五条 商业银行",
    description:
      "第五十五条 商业银行应当每年对业务连续性管理文档进行修订，内容应当包含重要业务调整、制度调整、岗位职责与人员调整等，确保文档的真实性、有效性。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "648",
    name: "第五十六条 商业银行",
    description:
      "第五十六条 商业银行在开发新业务产品时，应当同步考虑是否将其纳入业务连续性管理范畴。对纳入业务连续性管理的，应当在上线前制定业务连续性计划并实施演练。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "649",
    name: "第五十七条 在业务功",
    description:
      "第五十七条 在业务功能或关键资源发生重大变更时，商业银行应当及时对业务连续性计划进行修订。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "650",
    name: "第五十八条 商业银行",
    description:
      "第五十八条 商业银行应当每年对本行业务连续性管理进行审计，每三年至少开展一次全面审计，发生大范围业务运营中断事件后应当及时开展专项审计。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "651",
    name: "第五十九条 商业银行",
    description:
      "第五十九条 商业银行业务连续性管理审计的内容应当包括：业务影响分析、风险评估、恢复策略及恢复目标的合理性和完整性；业务连续性计划的完整性和可操作性；业务连续性计划演练过程及报告的真实性和有效性；业务连续性管理相关部门及人员的履职情况等。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "652",
    name: "第六章 运营中断事件",
    description: "第六章 运营中断事件应急处置",
    adfId: "5",
    paraType: "章",
  },
  {
    id: "653",
    name: "第一节 监测、预警与",
    description: "第一节 监测、预警与报告",
    adfId: "5",
    paraType: "节",
  },
  {
    id: "654",
    name: "第六十条 商业银行应",
    description:
      "第六十条 商业银行应当建立运营中断事件的风险预警体系，设定风险预警指标，并纳入全行风险预警体系中。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "655",
    name: "第六十一条 商业银行",
    description:
      "第六十一条 商业银行应当建立业务运营的监测体系及监控机制，对信息系统运行环境进行日常监测，采取自动化措施重点加强对业务运行情况的监控。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "656",
    name: "第六十二条 商业银行",
    description:
      "第六十二条 商业银行应当建立关键时点的监测与预警机制，在重大业务和社会活动等关键时点，或在业务功能、关键资源发生重大变更时，加强风险监控和预警。业务条线部门与信息科技部门等相关部门之间应当相互通报信息、提示风险，协同做好应急准备。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "657",
    name: "第六十三条 发生运营",
    description:
      "第六十三条 发生运营中断事件后，商业银行应当及时进行沟通和报告，包括：按照报告路线在内部各部门及人员之间的报告，与业务运营的外包方、业务合作方之间的沟通、以及按照银监会有关报告要求，向银监会或其派出机构的报告等。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "658",
    name: "第二节 运营中断事件",
    description: "第二节 运营中断事件处置",
    adfId: "5",
    paraType: "节",
  },
  {
    id: "659",
    name: "第六十四条 商业银行",
    description:
      "第六十四条 商业银行应当制定运营中断事件等级划分标准，根据事件影响范围、持续时间和损失程度定义事件等级，开展应急响应处置工作。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "660",
    name: "第六十五条 运营中断",
    description:
      "第六十五条 运营中断事件应急处置应当遵循“统一指挥、分类管理、分级处置、快速响应”的原则，在全行统一指挥下高效、有序应对；应当根据事件等级实施差别化处置，必要时可以越级汇报、紧急授权，保障信息传递和决策的及时性，将影响或损失最小化。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "661",
    name: "第六十六条 商业银行",
    description:
      "第六十六条 商业银行应当及时、有效地响应运营中断事件，对事件影响进行评估，确定事件等级，及时启动应急预案，确保业务快速恢复，防止事态升级或恶化。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "662",
    name: "第六十七条 商业银行",
    description: "第六十七条 商业银行在实施应急处置时，应当采取以下措施：",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "663",
    name: "（一）加强运营中断事",
    description:
      "（一）加强运营中断事件处置中的对外沟通，开展告知、解释与安抚工作，最大程度降低负面影响；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "664",
    name: "（二）对重要业务可以",
    description:
      "（二）对重要业务可以通过减少服务功能、缩小服务范围、利用替代系统、手工记账、利用他行支付渠道等多种手段进行业务应急处置；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "665",
    name: "（三）采用程序化和标",
    description:
      "（三）采用程序化和标准化的手段，提高信息技术应急处置的效率和质量。",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "666",
    name: "第六十八条 商业银行",
    description:
      "第六十八条 商业银行应当为应急处置做好场地、交通、通讯、资金等后勤保障工作。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "667",
    name: "第六十九条 商业银行",
    description:
      "第六十九条 商业银行应当对运营中断事件应急处置过程进行完整记录。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "668",
    name: "第三节 灾难恢复",
    description: "第三节 灾难恢复",
    adfId: "5",
    paraType: "节",
  },
  {
    id: "669",
    name: "第七十条 对于导致或",
    description:
      "第七十条 对于导致或可能导致大范围业务运营中断的事件，商业银行应当迅速决策，确定是否实施灾难备份切换。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "670",
    name: "第七十一条 商业银行",
    description:
      "第七十一条 商业银行应当事先对备份资源进行技术验证，确保其可用性；在实施灾难备份切换时，信息科技部门应当向业务条线部门告知可能出现的数据损失情况，并对备份系统的运行情况实施监控，预警并防止出现二次中断风险。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "671",
    name: "第七十二条 商业银行",
    description:
      "第七十二条 商业银行在灾难备份切换、回切时，业务条线部门应当对中断时的重要业务数据进行核对，并在信息科技部门配合下，对丢失的数据进行追补；同时，应当进行测试和验证，确保交易的可靠性。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "672",
    name: "第四节 危机处理",
    description: "第四节 危机处理",
    adfId: "5",
    paraType: "节",
  },
  {
    id: "673",
    name: "第七十三条 商业银行",
    description:
      "第七十三条 商业银行应当建立危机处理机制，从维护客户关系、履行告知义务、维护客户合法权益出发，运用公共关系策略、方法，加强与客户、媒体的沟通，适时向公众发布信息，消除或降低危机所造成的负面影响。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "674",
    name: "第七十四条 商业银行",
    description:
      "第七十四条 商业银行应当指定专门部门负责危机处理工作，加强舆情监测、信息沟通和发布。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "675",
    name: "第七十五条 商业银行",
    description:
      "第七十五条 商业银行应当制定针对社会公众、媒体、股东、客户等相关各方的预案，在运营中断事件发生时及时、准确披露信息，防止因信息不对称可能产生的负面影响。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "676",
    name: "第七十六条 商业银行",
    description:
      "第七十六条 商业银行应当实时关注舆情信息，及时澄清虚假信息或不完整信息，消除社会疑虑，化解纠纷。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "677",
    name: "第七章 监管和处置",
    description: "第七章 监管和处置",
    adfId: "5",
    paraType: "章",
  },
  {
    id: "678",
    name: "第一节 监管处置",
    description: "第一节 监管处置",
    adfId: "5",
    paraType: "节",
  },
  {
    id: "679",
    name: "第七十七条 银监会及",
    description:
      "第七十七条 银监会及其派出机构建立运营中断事件处置领导小组和工作小组。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "680",
    name: "（一）领导小组主要职",
    description: "（一）领导小组主要职责为：",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "681",
    name: "1．领导和指挥银行业",
    description: "1．领导和指挥银行业运营中断事件处置工作；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "682",
    name: "2．审批银行业运营中",
    description: "2．审批银行业运营中断事件处置预案；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "683",
    name: "3．最终认定银行业运",
    description: "3．最终认定银行业运营中断事件等级，决定是否启动处置预案；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "684",
    name: "4．对银行业运营中断",
    description: "4．对银行业运营中断事件重大处置措施进行决策；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "685",
    name: "5．协调跨行业、跨部",
    description: "5．协调跨行业、跨部门共同开展的处置工作重大事项；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "686",
    name: "6．对银行业运营中断",
    description: "6．对银行业运营中断事件处置的对外信息发布进行决策。",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "687",
    name: "（二）工作小组主要职",
    description: "（二）工作小组主要职责为：",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "688",
    name: "1．制定银行业运营中",
    description: "1．制定银行业运营中断事件处置预案；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "689",
    name: "2．对银行业金融机构",
    description: "2．对银行业金融机构运营中断事件进行监管处置；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "690",
    name: "3．向处置领导小组报",
    description:
      "3．向处置领导小组报告运营中断事件、重大处置事项及事件进展情况；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "691",
    name: "4．依授权对外发布信",
    description: "4．依授权对外发布信息；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "692",
    name: "5．协调跨行业、跨部",
    description: "5．协调跨行业、跨部门资源。",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "693",
    name: "第七十八条",
    description: "第七十八条",
    adfId: "5",
    paraType: "#N/A",
  },
  {
    id: "694",
    name: "银监会建立银行业信息",
    description:
      "银监会建立银行业信息科技风险预警体系，对可能导致银行业发生较大运营中断事件的风险进行分析和评估，进行风险提示和预警。",
    adfId: "5",
    paraType: "",
  },
  {
    id: "695",
    name: "第七十九条",
    description: "第七十九条",
    adfId: "5",
    paraType: "#N/A",
  },
  {
    id: "696",
    name: "银监会及其派出机构对",
    description:
      "银监会及其派出机构对银行业运营中断事件进行分级。当运营中断事件同时满足多个级别的定级条件时，按最高级别确定事件等级。",
    adfId: "5",
    paraType: "",
  },
  {
    id: "697",
    name: "（一）特别重大运营中",
    description: "（一）特别重大运营中断事件（Ⅰ级）",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "698",
    name: "1．银行业金融机构重",
    description:
      "1．银行业金融机构重要信息系统服务中断，或重要数据损毁、丢失、泄露，造成经济秩序混乱或重大经济损失、影响金融稳定，或对公众利益、社会秩序、国家安全造成特别严重损害的事件；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "699",
    name: "2．在业务服务时段导",
    description:
      "2．在业务服务时段导致一个(含)以上省(自治区、直辖市)的多家金融机构业务无法正常开展达3个小时(含)以上的事件；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "700",
    name: "3．在业务服务时段导",
    description:
      "3．在业务服务时段导致单家金融机构两个(含)以上省(自治区、直辖市)业务无法正常开展达3个小时(含)以上，或一个省(自治区、直辖市)业务无法正常开展达6个小时(含)以上的事件；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "701",
    name: "4．业务服务时段以外",
    description:
      "4．业务服务时段以外，故障或事件救治未果、可能产生上述1至3类事件的事件。",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "702",
    name: "（二）重大运营中断事",
    description: "（二）重大运营中断事件（Ⅱ级）",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "703",
    name: "1．银行业金融机构重",
    description:
      "1．银行业金融机构重要信息系统服务中断，或重要数据损毁、丢失、泄露，对银行或客户利益造成严重损害的事件；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "704",
    name: "2．在业务服务时段导",
    description:
      "2．在业务服务时段导致一个(含)以上省(自治区、直辖市)的多家金融机构业务无法正常开展达半个小时(含)以上的事件；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "705",
    name: "3．在业务服务时段导",
    description:
      "3．在业务服务时段导致单家金融机构两个(含)以上省(自治区、直辖市)业务无法正常开展达半个小时(含)以上，或一个省(自治区、直辖市)业务无法正常开展达3个小时(含)以上的事件；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "706",
    name: "（三）较大运营中断事",
    description: "（三）较大运营中断事件（Ⅲ级）",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "707",
    name: "1．银行业金融机构重",
    description:
      "1．银行业金融机构重要信息系统服务中断，或重要数据损毁、丢失、泄露，对银行或客户利益造成较大损害的事件；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "708",
    name: "2．在业务服务时段导",
    description:
      "2．在业务服务时段导致一个省(自治区、直辖市)业务无法正常开展达半个小时(含)以上的事件；",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "709",
    name: "3．业务服务时段以外",
    description:
      "3．业务服务时段以外，故障或事件救治未果、可能产生上述1至2类事件的事件。",
    adfId: "5",
    paraType: "目",
  },
  {
    id: "710",
    name: "第八十条 按照属地监",
    description:
      "第八十条 按照属地监管原则，银监会派出机构在商业银行运营中断事件发生后2小时内，将事件及处置情况上报银监会处置工作小组。事件报告至少包括：事发银行及事件发生时间、地点、现象、影响范围和程度、已采取的措施等。 银监会处置工作小组应当将重大以上运营中断事件上报银监会运营中断事件处置领导小组。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "711",
    name: "第八十一条 银监会根",
    description:
      "第八十一条 银监会根据国家有关网络与信息安全事件应急预案要求向相关部门通报运营中断事件；对其他行业有较大影响的运营中断事件，可以向该行业主管或监管部门通报事件情况；对于特别重大（Ⅰ级）的运营中断事件，将事件及处置情况及时上报国务院。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "712",
    name: "第八十二条 银监会及",
    description:
      "第八十二条 银监会及其派出机构对商业银行报送的事件内容和事件等级进行分析、评估，认定运营中断事件的最终等级，及时启动处置预案，实施运营中断事件监管处置工作。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "713",
    name: "第八十三条 对于较大",
    description:
      "第八十三条 对于较大（Ⅲ级）运营中断事件，按照属地监管原则，由银监会或其派出机构组织开展处置工作，处置结束后银监会派出机构向银监会上报运营中断事件总结报告。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "714",
    name: "第八十四条 对于特别",
    description:
      "第八十四条 对于特别重大（Ⅰ级）和重大（Ⅱ级）运营中断事件，银监会处置工作小组及时核实情况，指导协调银监会派出机构开展处置；根据事件影响范围、紧急程度和事件处置进展情况，银监会处置工作小组可以赴事发银行现场进行督导。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "715",
    name: "第八十五条 银监会及",
    description:
      "第八十五条 银监会及其派出机构督导商业银行采取措施尽快恢复系统和业务，最大程度减少事件产生的负面影响。必要时，可以协调国家专业技术队伍或外部专家提供技术支援。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "716",
    name: "第八十六条 银监会及",
    description:
      "第八十六条 银监会及其派出机构督导商业银行积极采取风险隔离措施，防止事件恶化或向其他银行业金融机构扩散。对可能影响其他银行业金融机构业务开展或对银行业产生区域性、整体性影响的事件，银监会及其派出机构及时发布风险提示，加强风险防范。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "717",
    name: "第八十七条 银监会及",
    description:
      "第八十七条 银监会及其派出机构督促商业银行开展危机处理，做好舆情监测和媒体沟通，做好合理宣传解释工作，防止不实信息导致银行业金融机构声誉风险。涉及行业性运营中断事件处置情况通报时，由银监会按照信息披露程序统一对外发布信息。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "718",
    name: "第八十八条 银监会及",
    description:
      "第八十八条 银监会及其派出机构加强与相关部门和监管机构的协作，协调各方力量开展处置工作。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "719",
    name: "第八十九条 商业银行",
    description:
      "第八十九条 商业银行业务恢复正常运行后，应当将运营中断事件及其处置工作的评估、总结和改进报告报送银监会或其派出机构。银监会或其派出机构对事件进行评估和现场调查，查明事件原因，进行责任认定。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "720",
    name: "第二节 持续监管",
    description: "第二节 持续监管",
    adfId: "5",
    paraType: "节",
  },
  {
    id: "721",
    name: "第九十条 银监会及其",
    description:
      "第九十条 银监会及其派出机构将商业银行业务连续性管理纳入其风险管理综合评估范围。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "722",
    name: "第九十一条 银监会及",
    description:
      "第九十一条 银监会及其派出机构对商业银行业务连续性管理工作进行监督和检查，对业务连续性工作进行综合评价，提出监管要求。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "723",
    name: "第九十二条 商业银行",
    description:
      "第九十二条 商业银行应当于每年一季度向银监会或其派出机构提交业务连续性管理报告，包括上一年度业务连续性管理的评估报告与审计报告。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "724",
    name: "第九十三条 银监会及",
    description:
      "第九十三条 银监会及其派出机构对商业银行业务连续性管理报告进行审查，督导商业银行建立与其风险管控目标、机构规模、公众影响和所承担的社会责任相匹配的业务连续性管理体系。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "725",
    name: "第九十四条 银监会及",
    description:
      "第九十四条 银监会及其派出机构对商业银行业务连续性管理报告进行审查时，要综合考虑商业银行机构规模、业务范围以及风险状况。重点关注以下方面：",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "726",
    name: "（一）业务连续性管理",
    description: "（一）业务连续性管理体系的完整性和合理性；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "727",
    name: "（二）业务连续性管理",
    description: "（二）业务连续性管理的实施情况；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "728",
    name: "（三）业务连续性计划",
    description: "（三）业务连续性计划的演练情况；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "729",
    name: "（四）业务连续性管理",
    description:
      "（四）业务连续性管理年度评估的完整性和准确性，审计覆盖领域和深度；",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "730",
    name: "（五）业务连续性管理",
    description: "（五）业务连续性管理在执行过程中存在的问题及其整改情况。",
    adfId: "5",
    paraType: "项",
  },
  {
    id: "731",
    name: "第九十五条 商业银行",
    description:
      "第九十五条 商业银行在完成业务连续性计划的全行性演练后，应当在45个工作日内向监管机构提交演练总结报告。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "732",
    name: "第九十六条 商业银行",
    description:
      "第九十六条 商业银行业务连续性管理机制存在重大缺陷、日常管理工作存在严重违规的，因违反审慎经营规则导致业务运营中断的，或在运营中断事件中应急处置不力导致事件恶化、蔓延的，银监会或其派出机构依法采取监管措施并追究有关责任人的责任。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "733",
    name: "第八章 附则",
    description: "第八章 附则",
    adfId: "5",
    paraType: "章",
  },
  {
    id: "734",
    name: "第九十七条 本指引适",
    description:
      "第九十七条 本指引适用于在中华人民共和国境内依法设立的法人商业银行和农村合作银行、城市信用社、农村信用社。 政策性银行、村镇银行、金融资产管理公司、信托公司、企业集团财务公司、金融租赁公司、汽车金融公司、货币经纪公司、消费金融公司等其他银行业金融机构参照执行。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "735",
    name: "第九十八条 本指引由",
    description: "第九十八条 本指引由中国银监会负责解释、修订。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "736",
    name: "第九十九条 本指引自",
    description: "第九十九条 本指引自公布之日起执行。",
    adfId: "5",
    paraType: "条",
  },
  {
    id: "737",
    name: "一、指导原则",
    description: "一、指导原则",
    adfId: "6",
    paraType: "",
  },
  {
    id: "738",
    name: "（一）明确主体责任。",
    description:
      "（一）明确主体责任。非银机构作为金融机构独立法人应承担相应的信息科技管理职责，建立符合业务特点的信息科技战略和风险管理策略，根据业务发展和经营管理需要，确定信息科技发展目标和功能定位，合理利用外部资源，自主开展信息科技管理工作。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "739",
    name: "（二）科技支撑发展。",
    description:
      "（二）科技支撑发展。科学配备信息科技资源，充分发挥信息科技对业务发展和转型的支撑和引领作用，顺应“互联网＋”发展趋势，积极稳妥地探索和应用新兴技术，为改善系统、渠道、产品的灵活性和可扩展性提供支持。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "740",
    name: "（三）倡导合作共享。",
    description:
      "（三）倡导合作共享。积极与其他银行业金融机构协同合作，加强资源开放共享，交流先进技术与成功管理经验，取长补短，提高非银机构信息科技建设和管理水平。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "741",
    name: "（四）严守风险底线。",
    description:
      "（四）严守风险底线。建立健全信息科技风险管理架构，加强基础设施建设、开发测试、运行维护、信息安全、业务连续性、外包等重点领域的信息科技风险防控，避免和减少重大信息科技事件发生。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "742",
    name: "二、建立有效的信息科",
    description: "二、建立有效的信息科技治理架构",
    adfId: "6",
    paraType: "",
  },
  {
    id: "743",
    name: "（一）夯实信息科技治",
    description: "（一）夯实信息科技治理基础。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "744",
    name: "非银机构应明确董事会",
    description:
      "非银机构应明确董事会、高级管理层应履行的信息科技管理职责，保证资金、人力和技术等资源投入，满足信息科技建设和管理需要。董事会应承担信息科技风险管理的最终责任，未设立董事会的，由本机构经营决策层履行相关管理职责。规模较大且主要业务对信息科技依赖度较高的非银机构应设立信息总监（首席信息官），将其纳入高级管理人员，专职负责信息科技战略规划和管理，参与同信息科技运用有关的业务决策等工作。应建立跨部门工作协调机制，成立由高级管理层、信息科技部门和主要业务部门负责人组成的信息科技管理委员会，承担信息科技战略规划审议、推进重大项目决策等职责，提高管理决策的科学性和有效性。应厘清与本机构出资人的信息科技管理工作职责，加强工作规划、预算投入、项目建设等重大事项的自主决策，推动信息科技健康有序发展。",
    adfId: "6",
    paraType: "",
  },
  {
    id: "745",
    name: "（二）加强信息科技专",
    description: "（二）加强信息科技专业队伍建设。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "746",
    name: "非银机构应设立相对独",
    description:
      "非银机构应设立相对独立的信息科技管理职能部门，合理配备专业人员，明确岗位职责和分工安排，建立内部岗位制约机制，确保关键岗位人员数量充足。应重视人才培养，为信息科技人员提供履职所需的技能培训，建立健全晋升及激励考核机制，提供专业人才发展空间，确保信息科技队伍稳定发展。",
    adfId: "6",
    paraType: "",
  },
  {
    id: "747",
    name: "（三）建立信息科技风",
    description: "（三）建立信息科技风险管控机制。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "748",
    name: "非银机构应将信息科技",
    description:
      "非银机构应将信息科技风险纳入全面风险管理体系，建立常态化的风险识别、监测和管控机制，每年对全部重要信息系统至少开展一次风险评估，及时发现风险并采取有效控制措施。应将信息科技审计纳入审计部门工作范畴，对信息科技内控机制的充分性和有效性开展内部审计，或聘请专业机构开展外部审计；针对重大信息科技事件或重大风险隐患开展必要的专项审计，至少每三年完成一次全面审计。审计部门应定期向董事会和高级管理层报告审计和跟踪审计情况，督促相关部门及时整改审计发现的问题。",
    adfId: "6",
    paraType: "",
  },
  {
    id: "749",
    name: "三、科学规划，提升信",
    description: "三、科学规划，提升信息科技对业务的支撑能力",
    adfId: "6",
    paraType: "",
  },
  {
    id: "750",
    name: "（一）科学制定信息科",
    description:
      "（一）科学制定信息科技战略规划。非银机构应结合自身业务特色和发展趋势，制定与业务战略规划相匹配并适度超前的信息科技战略规划，科学构建信息技术架构，包括企业级应用架构、技术架构和数据架构，建立与规划相配套的组织和资源保障机制，定期跟踪规划执行进度，评估执行效果，确保有效落地实施。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "751",
    name: "（二）提高信息科技建",
    description: "（二）提高信息科技建设质效。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "752",
    name: "非银机构应加强经营分",
    description:
      "非银机构应加强经营分析和风险控制系统建设，逐步构建覆盖全部业务流程的管理信息系统，满足业务发展需要和全面风险管理要求，提高业务运营效率，支撑管理和决策。信息系统建设应具有一定前瞻性，既要考虑业务的复杂性和实时性，又要考虑灵活性和可扩展性，有效应对市场需求变化，引领业务发展和机构转型升级。积极应用云计算、大数据、移动互联等新兴技术，通过创新服务方式，提高金融服务的安全性、便捷性，提升自身核心竞争力，创造业务价值。有条件的机构，可积极探索开展同业之间在技术合作、信息服务、资源共享等领域的协作实践。",
    adfId: "6",
    paraType: "",
  },
  {
    id: "753",
    name: "（三）完善数据治理体",
    description: "（三）完善数据治理体系。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "754",
    name: "非银机构应探索建立有",
    description:
      "非银机构应探索建立有效的数据治理组织架构，制定统一规范的数据标准和数据管理机制，理顺各系统之间的数据交互关系，不断提高数据质量，满足监管机构在监管数据采集、报送等方面的要求。深化数据应用，发挥数据治理在实现差异化服务和风险管理等方面的积极作用，提升数据治理效能。",
    adfId: "6",
    paraType: "",
  },
  {
    id: "755",
    name: "四、加强基础设施建设",
    description: "四、加强基础设施建设，提升开发测试和运维管理水平",
    adfId: "6",
    paraType: "",
  },
  {
    id: "756",
    name: "（一）加强数据中心基",
    description: "（一）加强数据中心基础设施建设。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "757",
    name: "非银机构应结合业务发",
    description:
      "非银机构应结合业务发展需要和自身实际情况，科学选择数据中心（含中心机房）建设方式，实现数据中心的安全、高效与节能；为节约成本、提高专业化管理水平，规模较小的非银机构可考虑选择租用、托管、共享数据中心等建设方式，具有一定规模、信息科技基础较好、管理能力较强的非银机构可自建数据中心。数据中心选址应符合有关监管要求，在选址前应实施安全评估，充分考虑地理位置、环境、设施等各种因素影响，规避选址不当造成的风险。数据中心建筑物结构（如层高、承重、抗震等）应满足专用机房建设要求，电力供应、精密空调、网络通信线路等重要基础设施应具备冗余能力，机房应采取有效的防火、防雷、防水等保护措施。数据中心与其他机构（包括出资人）共用或托管至外包服务商的，应确保重要信息科技设备与其他机构的有效隔离，明确物理安全区域，严格控制物理访问权限。",
    adfId: "6",
    paraType: "",
  },
  {
    id: "758",
    name: "（二）规范开发测试管",
    description: "（二）规范开发测试管理。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "759",
    name: "非银机构应制定开发测",
    description:
      "非银机构应制定开发测试相关制度、标准、流程，规范管理自主开发或外包开发过程。安排专人负责项目管理，合理控制项目进度。重视需求分析，规范设计，兼顾业务功能与非业务功能需求。选取适当的开发测试方法，确保系统开发测试的完整性和有效性。明确安全开发规范，加强信息系统的安全设计、研发和测试。",
    adfId: "6",
    paraType: "",
  },
  {
    id: "760",
    name: "（三）提升运行维护能",
    description: "（三）提升运行维护能力。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "761",
    name: "非银机构应根据工作需",
    description:
      "非银机构应根据工作需要建立专业化的运行维护管理队伍，不断提高自主运维管理能力；科学划分运维岗位职责，杜绝关键岗位兼职兼岗。建立健全运维管理制度，明确事件管理、问题管理、配置管理、变更管理、发布管理等要求，编制运维操作手册，规范重要信息系统投产上线及重大变更操作。加强重要设备和设施定期巡检和维护，及时更新老化陈旧设备，全面做好软件正版化工作，健全软件产品和硬件设备缺陷管理机制，采取适当升级措施，确保系统服务的连续可用性。加强容量规划，以适应业务发展和交易量增长的需要。建设自动化运维手段，建立全面覆盖基础设施、网络、系统、应用等多领域、多层次的监控体系，妥善存储日志，有效防范和处置各类故障事件。",
    adfId: "6",
    paraType: "",
  },
  {
    id: "762",
    name: "五、健全信息科技风险",
    description: "五、健全信息科技风险管理体系，加强重点领域风险防控",
    adfId: "6",
    paraType: "",
  },
  {
    id: "763",
    name: "（一）加强信息安全管",
    description: "（一）加强信息安全管理。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "764",
    name: "非银机构应配备专职信",
    description:
      "非银机构应配备专职信息安全管理人员，制定完善的安全管理制度，严格落实国家网络安全政策法规的有关要求，定期开展安全教育，提高员工信息安全意识。加强安全技术保障体系建设，采取有效的防病毒、防攻击、防篡改、防泄密、防抵赖等措施，提高系统抵御内外部攻击破坏的能力。严格配置网络访问控制策略，实现开发、测试、生产、办公等不同网络安全域之间以及与出资人等外联单位、国际互联网之间的风险隔离。加强系统安全漏洞和补丁信息的监测、收集和评估，确保及时发现和处置重大安全隐患。开展应用系统安全检测，对官方网站等通过互联网提供服务的系统，在上线及重大投产变更前进行渗透测试，杜绝系统“带病”上线。对敏感数据实施分类分级管理，强化数据生命周期各阶段安全管理要求，严格控制生产系统访问权限，禁止未经授权查看、下载生产数据；采取符合要求的加密、脱敏等技术，提高数据存储、传输、测试的安全性。落实终端、移动存储介质安全控制措施，加强对非法外联等各类违规行为的监控、阻断和审计。",
    adfId: "6",
    paraType: "",
  },
  {
    id: "765",
    name: "（二）重视业务连续性",
    description: "（二）重视业务连续性能力建设。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "766",
    name: "非银机构应建立业务连",
    description:
      "非银机构应建立业务连续性管理组织架构，有效开展业务影响分析，识别各项重要业务，合理确定业务恢复时间目标（RTO）和业务恢复点目标（RPO）。加强业务连续性资源与能力建设，依据业务恢复目标，对重要信息系统采取高可用技术，制定并实施重要数据备份策略；规模较大、业务服务实时性要求高的非银机构，应建立或与其他机构共享灾备中心（含灾备机房），对重要信息系统和数据进行同城或异地备份，确保生产系统不可用时及时恢复重要业务。制定信息科技突发事件应急预案，对重要系统每年至少开展一次应急演练，加强业务与技术应急有效衔接，不断提高事件应急处置能力。",
    adfId: "6",
    paraType: "",
  },
  {
    id: "767",
    name: "（三）严格控制外包风",
    description: "（三）严格控制外包风险。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "768",
    name: "非银机构应识别和分析",
    description:
      "非银机构应识别和分析信息科技外包风险，制定外包策略，明确外包范围和责任边界，严守“安全管理责任不能外包、安全标准不能降低”的风险底线，建立与信息科技战略目标相适应的外包管理体系。加强对外包服务商的风险管理，对关键外包服务商的技术实力、内控体系和管理能力定期开展风险评估，制定外包服务中断应急预案；重视关联外包管理，将与出资人之间的外包活动纳入关联外包管理，不得因关联关系而降低外包服务管理要求；识别具有机构集中度风险的外包服务商，加强持续监控和管理，积极采取风险分散措施，对外包合作项目进行必要的知识产权转移，有条件的机构应逐步提高自主研发能力，降低对外包服务商的依赖。严格外包合同管理，规范合同条款，明确外包服务商安全保密等各类责任与义务。",
    adfId: "6",
    paraType: "",
  },
  {
    id: "769",
    name: "六、加强监管指导",
    description: "六、加强监管指导",
    adfId: "6",
    paraType: "",
  },
  {
    id: "770",
    name: "（一）提高监管关注。",
    description: "（一）提高监管关注。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "771",
    name: "各级监管机构应加强对",
    description:
      "各级监管机构应加强对非银机构的信息科技监管，按照属地原则，有序开展监管和指导工作。合理分配监管资源，加强内部监管联动，提高监管工作质效。积极跟踪非银机构信息科技发展动态，分析和研判风险态势，加强风险识别、评估和预警，及时开展风险提示，将风险管控关口前移。",
    adfId: "6",
    paraType: "",
  },
  {
    id: "772",
    name: "（二）突出监管重点。",
    description: "（二）突出监管重点。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "773",
    name: "各级监管机构应积极引",
    description:
      "各级监管机构应积极引导非银机构提高对信息化工作的重视程度，加强资源保障，不断提升专业化管理能力，有效支撑业务发展和创新。督促非银机构在信息化建设过程中，合法、规范地应用信息技术和信息产品，在开展同业、跨业交流与合作时严格遵守相关规定。积极运用非现场监管、现场检查等监管手段，及时发现非银机构存在的突出问题，开展专项整治，特别要加大重点风险领域的监管力度，严防重大风险隐患。",
    adfId: "6",
    paraType: "",
  },
  {
    id: "774",
    name: "（三）强化责任追究。",
    description: "（三）强化责任追究。",
    adfId: "6",
    paraType: "项",
  },
  {
    id: "775",
    name: "各级监管机构应强化对",
    description:
      "各级监管机构应强化对非银机构信息科技建设和管理的监管问责，对违反监管政策或监管要求落实不力的机构，要追究相关责任，必要时依法采取行政处罚措施。督促指导非银机构严格落实事件报告制度，按照《商业银行业务连续性监管指引》有关要求，及时报送重要信息系统服务中断或重要数据损毁、丢失、篡改、泄露情况，妥善处置对本机构或客户利益造成较大损害的重大突发信息科技事件。",
    adfId: "6",
    paraType: "",
  },
  {
    id: "776",
    name: "第一章 总则",
    description: "第一章 总则",
    adfId: "7",
    paraType: "章",
  },
  {
    id: "777",
    name: "第一条 为规范银行保",
    description:
      "第一条 为规范银行保险机构的信息科技外包活动，加强信息科技外包风险管控，根据《中华人民共和国银行业监督管理法》《中华人民共和国商业银行法》《中华人民共和国保险法》《中华人民共和国网络安全法》《中华人民共和国数据安全法》《中华人民共和国个人信息保护法》等法律法规，制定本办法。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "778",
    name: "第二条 在中华人民共",
    description:
      "第二条 在中华人民共和国境内设立的政策性银行、商业银行、农村合作银行、省（自治区）农村信用社联合社，保险集团（控股）公司、保险公司、保险资产管理公司、金融资产管理公司适用本办法。银保监会及其派出机构监管的其他金融机构参照本办法执行。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "779",
    name: "第三条 本办法所适用",
    description:
      "第三条 本办法所适用的信息科技外包，是指银行保险机构将原本由自身负责处理的信息科技活动委托给服务提供商进行处理的行为。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "780",
    name: "银行保险机构与其他第",
    description:
      "银行保险机构与其他第三方合作当中涉及银行保险机构重要数据和客户个人信息处理的信息科技活动，按照本办法相关要求进行管理，法律法规另有要求的除外。",
    adfId: "7",
    paraType: "",
  },
  {
    id: "781",
    name: "第四条 银行保险机构",
    description:
      "第四条 银行保险机构应当建立与本机构信息科技战略目标相适应的信息科技外包管理体系，将信息科技外包风险纳入全面风险管理体系，有效控制由于外包而引发的风险。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "782",
    name: "第五条 银行保险机构",
    description: "第五条 银行保险机构在实施信息科技外包时应当坚持以下原则：",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "783",
    name: "（一）不得将信息科技",
    description: "（一）不得将信息科技管理责任、网络安全主体责任外包；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "784",
    name: "（二）以不妨碍核心能",
    description: "（二）以不妨碍核心能力建设、积极掌握关键技术为导向；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "785",
    name: "（三）保持外包风险、",
    description: "（三）保持外包风险、成本和效益的平衡；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "786",
    name: "（四）保障网络和信息",
    description: "（四）保障网络和信息安全，加强重要数据和个人信息保护；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "787",
    name: "（五）强调事前控制和",
    description: "（五）强调事前控制和事中监督；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "788",
    name: "（六）持续改进外包策",
    description: "（六）持续改进外包策略和风险管理措施。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "789",
    name: "第二章 信息科技外包",
    description: "第二章 信息科技外包治理",
    adfId: "7",
    paraType: "章",
  },
  {
    id: "790",
    name: "第六条 银行保险机构",
    description:
      "第六条 银行保险机构应建立覆盖董（理）事会、高管层、信息科技外包风险主管部门、信息科技外包执行团队的信息科技外包及风险管理组织架构，明确相应层级的职责，确保信息科技外包治理架构权责清晰、运转高效、制衡充分。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "791",
    name: "第七条 银行保险机构",
    description:
      "第七条 银行保险机构董（理）事会或其授权设立的专业委员会应负责推动建立信息科技外包及其风险管理体系、审批信息科技外包战略、审议重大外包决策，高级管理层应负责制定信息科技外包战略，明确信息科技外包风险主管部门和信息科技外包执行团队，明确信息科技外包及其风险管理职责，审议信息科技外包管理流程及制度，监控信息科技外包及其风险管理成效。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "792",
    name: "第八条 银行保险机构",
    description:
      "第八条 银行保险机构应指定信息科技外包风险主管部门，该部门主要职责包括：",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "793",
    name: "（一）根据机构总体风",
    description:
      "（一）根据机构总体风险政策和外包战略，制定信息科技外包风险管理策略、制度和流程；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "794",
    name: "（二）统筹信息科技外",
    description:
      "（二）统筹信息科技外包风险的识别、评估、监测、预警、报告及处置工作；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "795",
    name: "（三）制定保障外包服",
    description:
      "（三）制定保障外包服务持续性的应急管理方案，并定期组织实施演练；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "796",
    name: "（四）监督、评价外包",
    description:
      "（四）监督、评价外包执行团队的管理工作，并督促外包风险管理的持续改善；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "797",
    name: "（五）向董（理）事会",
    description:
      "（五）向董（理）事会（或其专门委员会）或高级管理层汇报信息科技外包相关风险及管理情况。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "798",
    name: "第九条 银行保险机构",
    description:
      "第九条 银行保险机构应在信息科技管理部门或信息科技外包活动执行部门内部建立信息科技外包执行团队，并配备足够的具有相应能力和经验的人员履行以下职责：",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "799",
    name: "（一）落实信息科技外",
    description: "（一）落实信息科技外包战略；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "800",
    name: "（二）执行信息科技外",
    description: "（二）执行信息科技外包管理制度与流程；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "801",
    name: "（三）执行服务提供商",
    description:
      "（三）执行服务提供商准入、尽职调查、服务评价和退出管理工作，建立并维护服务提供商关系管理策略；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "802",
    name: "（四）持续监测外包服",
    description:
      "（四）持续监测外包服务的水平和质量，及时处理服务提供商出现的相关违规和用户投诉；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "803",
    name: "（五）对外包过程中的",
    description:
      "（五）对外包过程中的关键管理活动进行监控及分析，定期与信息科技外包风险主管部门沟通外包活动及有关风险情况。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "804",
    name: "第十条 银行保险机构",
    description:
      "第十条 银行保险机构应当基于机构的业务战略、信息科技战略、总体外包战略、外包市场环境、自身风险控制能力和风险偏好制定信息科技外包战略，包括但不限于：外包原则和策略、不能外包的职能、资源能力建设方案等。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "805",
    name: "第十一条 银行保险机",
    description:
      "第十一条 银行保险机构应当明确不能外包的信息科技职能。涉及信息科技战略管理、信息科技风险管理、信息科技内部审计及其他有关信息科技核心竞争力的职能不得外包。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "806",
    name: "第十二条 银行保险机",
    description:
      "第十二条 银行保险机构应当建立信息科技外包活动分类管理机制，针对不同类型的外包活动建立相应的管理和风控策略。信息科技外包原则上划分为咨询规划类、开发测试类、运行维护类、安全服务类、业务支持类等类别。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "807",
    name: "第十三条 银行保险机",
    description:
      "第十三条 银行保险机构应对信息科技外包活动及相关服务提供商进行分级管理，对重要外包和一般外包采取差异化管控措施。下列信息科技外包活动原则上属于重要外包：",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "808",
    name: "（一）信息科技工作整",
    description: "（一）信息科技工作整体外包，仅保留必要的管理团队和核心职能；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "809",
    name: "（二）数据中心（机房",
    description: "（二）数据中心（机房）整体外包；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "810",
    name: "（三）涉及基础设施和",
    description:
      "（三）涉及基础设施和信息系统整体架构发生重大变化的信息科技外包；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "811",
    name: "（四）核心业务系统开",
    description: "（四）核心业务系统开发测试和运行维护的整体外包；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "812",
    name: "（五）信息科技战略规",
    description: "（五）信息科技战略规划（含中长期规划）咨询外包；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "813",
    name: "（六）安全运营的整体",
    description: "（六）安全运营的整体外包；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "814",
    name: "（七）涉及集中存储或",
    description:
      "（七）涉及集中存储或处理银行保险机构重要数据和客户个人敏感信息的外包；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "815",
    name: "（八）直接影响实时服",
    description: "（八）直接影响实时服务、影响账务准确性的重要信息系统外包；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "816",
    name: "（九）其它对机构业务",
    description: "（九）其它对机构业务运营具有重要影响的外包。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "817",
    name: "第十四条 银行保险机",
    description:
      "第十四条 银行保险机构应考虑重要外包终止的可能性，并制定退出策略。退出策略应至少明确：",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "818",
    name: "（一）可能造成外包终",
    description: "（一）可能造成外包终止的情形；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "819",
    name: "（二）外包终止的业务",
    description: "（二）外包终止的业务影响分析；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "820",
    name: "（三）终止交接安排。",
    description: "（三）终止交接安排。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "821",
    name: "第三章 信息科技外包",
    description: "第三章 信息科技外包准入",
    adfId: "7",
    paraType: "章",
  },
  {
    id: "822",
    name: "第十五条 银行保险机",
    description:
      "第十五条 银行保险机构应当充分评估拟开展的信息科技外包活动与信息科技外包战略的一致性，充分评估拟开展的信息科技外包活动相关风险，就是否实施外包作出审慎决策。重要外包应至少向高管层报告并经过审批。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "823",
    name: "第十六条 银行保险机",
    description:
      "第十六条 银行保险机构应根据信息科技外包战略，结合风险评估情况，明确服务提供商的准入标准，对备选服务提供商进行筛选，审慎引入集中度风险较高或增加机构整体风险的服务提供商。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "824",
    name: "第十七条 银行保险机",
    description:
      "第十七条 银行保险机构应在签订合同前，对重要外包的备选服务提供商深入开展尽职调查，必要时可聘请第三方机构协助调查。在服务提供商经营状况未发生重大变化的前提下，尽职调查结果原则上一年内有效。尽职调查应包括但不限于：",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "825",
    name: "（一）服务提供商的技",
    description: "（一）服务提供商的技术和行业经验，人员及能力；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "826",
    name: "（二）服务提供商的内",
    description: "（二）服务提供商的内部控制和管理能力；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "827",
    name: "（三）服务提供商的网",
    description: "（三）服务提供商的网络和信息安全保障能力；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "828",
    name: "（四）服务提供商的持",
    description: "（四）服务提供商的持续经营状况；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "829",
    name: "（五）服务提供商及其",
    description:
      "（五）服务提供商及其母公司或实际控制人遵守国家和银保监会相关法律法规要求的情况；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "830",
    name: "（六）服务提供商过往",
    description:
      "（六）服务提供商过往配合银行保险机构审计、评估、检查及监管机构监督检查情况；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "831",
    name: "（七）服务提供商与银",
    description: "（七）服务提供商与银行保险机构的关联性。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "832",
    name: "第十八条 对于符合重",
    description:
      "第十八条 对于符合重要外包条件的非驻场外包，应当进一步重点调查如下内容：",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "833",
    name: "（一）服务提供商对银",
    description:
      "（一）服务提供商对银行保险机构与其他机构的设施、系统和数据是否有明确、清晰的边界；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "834",
    name: "（二）服务提供商是否",
    description:
      "（二）服务提供商是否有管理制度和技术措施保障银行保险机构数据的完整性和保密性；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "835",
    name: "（三）服务提供商对涉",
    description:
      "（三）服务提供商对涉及银行保险机构的服务器、存储、网络设备、操作系统、数据库、中间件等软硬件基础设施是否具有最高访问权限；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "836",
    name: "（四）服务提供商是否",
    description:
      "（四）服务提供商是否拥有或可能拥有业务系统的最高管理权限或访问权限，是否能够浏览、获取重要数据或客户个人敏感信息；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "837",
    name: "（五）服务提供商是否",
    description:
      "（五）服务提供商是否有完善的灾难恢复设施和应急管理体系，是否有业务连续性安排；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "838",
    name: "（六）服务提供商是否",
    description: "（六）服务提供商是否存在不正当竞争或规避监管的情形。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "839",
    name: "第十九条 银行保险机",
    description:
      "第十九条 银行保险机构在选择跨境外包时，应当充分评估服务提供商所在国家或地区的政治、经济、社会、法律、文化等经营环境。涉及信息跨境存储、处理和分析的，应遵守我国有关法律法规的规定。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "840",
    name: "第二十条 对于关联外",
    description:
      "第二十条 对于关联外包和同业外包，银行保险机构不得降低对服务提供商的要求，严格防范利益冲突和利益输送。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "841",
    name: "第二十一条 银行保险",
    description:
      "第二十一条 银行保险机构在信息科技外包合同或协议中应当明确以下内容，包括但不限于：",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "842",
    name: "（一）服务范围、服务",
    description:
      "（一）服务范围、服务内容、服务要求、工作时限及安排、责任分配、交付物要求以及后续合作中的相关限定条件，服务质量考核评价约定。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "843",
    name: "（二）合规、内控及风",
    description:
      "（二）合规、内控及风险管理要求，对法律法规及银行保险机构内部管理制度的遵守要求，监管政策的通报贯彻机制。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "844",
    name: "（三）服务持续性要求",
    description:
      "（三）服务持续性要求，服务提供商的服务持续性管理目标应当满足银行保险机构业务连续性目标要求。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "845",
    name: "（四）银行保险机构对",
    description:
      "（四）银行保险机构对服务提供商进行风险评估、监测、检查和审计的权利，及服务提供商承诺接受银保监会对其所承担的银行保险机构外包服务的监督检查。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "846",
    name: "（五）合同变更或终止",
    description: "（五）合同变更或终止的触发条件，合同变更或终止的过渡安排。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "847",
    name: "（六）外包活动中相关",
    description:
      "（六）外包活动中相关信息和知识产权的归属权以及允许服务提供商使用的内容及范围，对服务提供商使用合法软、硬件产品的要求。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "848",
    name: "（七）资源保障条款。",
    description: "（七）资源保障条款。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "849",
    name: "（八）安全保密和消费",
    description:
      "（八）安全保密和消费者权益保护约定，包括但不限于：禁止服务提供商在合同允许范围外使用或者披露银行保险机构的信息，服务提供商不得将银行保险机构数据以任何形式转移、挪用或谋取外包合同约定以外的利益。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "850",
    name: "（九）争端解决机制、",
    description:
      "（九）争端解决机制、违约及赔偿条款，跨境外包应明确争议解决时所适用的法律及司法管辖权，原则上应当选择中国仲裁机构、中国法院管辖，适用中国法律解决纠纷。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "851",
    name: "（十）报告条款，至少",
    description:
      "（十）报告条款，至少包括常规报告内容和报告频度、突发事件时的报告路线、报告方式及时限要求。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "852",
    name: "第二十二条 银行保险",
    description:
      "第二十二条 银行保险机构应当在合同或协议中明确要求服务提供商不得将外包服务转包或变相转包。在涉及外包服务分包时应当要求：",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "853",
    name: "（一）不得将外包服务",
    description: "（一）不得将外包服务的主要业务分包；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "854",
    name: "（二）主服务提供商对",
    description:
      "（二）主服务提供商对服务水平负总责，确保分包服务提供商能够严格遵守外包合同或协议；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "855",
    name: "（三）主服务提供商对",
    description:
      "（三）主服务提供商对分包服务提供商进行监控，并对分包服务提供商的变更履行通知或报告审批义务。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "856",
    name: "第四章 信息科技外包",
    description: "第四章 信息科技外包监控评价",
    adfId: "7",
    paraType: "章",
  },
  {
    id: "857",
    name: "第二十三条 银行保险",
    description:
      "第二十三条 银行保险机构应当对外包服务过程进行持续监控，及时发现和纠正服务过程中存在的各类异常情况。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "858",
    name: "第二十四条 银行保险",
    description:
      "第二十四条 银行保险机构应当建立明确的信息科技外包服务目录、服务水平协议以及服务水平监控评价机制，确保相关监控信息和评价结果的真实性和完整性，且数据至少保存到服务结束后三年。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "859",
    name: "第二十五条 银行保险",
    description:
      "第二十五条 银行保险机构应当对信息科技外包服务建立服务效能和质量监控指标，并进行相应监控。常见指标包括：",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "860",
    name: "（一）信息系统和设备",
    description: "（一）信息系统和设备及基础设施的可用率；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "861",
    name: "（二）故障次数、故障",
    description: "（二）故障次数、故障解决率、故障的响应时间、故障的解决时间；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "862",
    name: "（三）服务的次数、客",
    description: "（三）服务的次数、客户满意度；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "863",
    name: "（四）业务需求的及时",
    description: "（四）业务需求的及时完成率、程序的缺陷数、需求变更率；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "864",
    name: "（五）外包人员工作饱",
    description: "（五）外包人员工作饱和率、外包人员的考核合格率；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "865",
    name: "（六）网络和信息安全",
    description: "（六）网络和信息安全指标、业务连续性指标。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "866",
    name: "第二十六条 银行保险",
    description:
      "第二十六条 银行保险机构应当对服务提供商的财务、内控及安全管理进行持续监控，关注其因破产、兼并、关键人员流失、投入不足和管理不善等因素引发的财务状况恶化及内部管理混乱等情况，防范外包服务意外终止或服务质量的急剧下降。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "867",
    name: "第二十七条 银行保险",
    description:
      "第二十七条 银行保险机构监控到信息科技外包服务出现异常情况时，应当及时督促服务提供商采取纠正措施；情节严重或未及时纠正的，应当及时约谈服务提供商高管人员并限期整改。对于逾期未整改的服务提供商，应当暂停或取消其服务资格，并向银保监会或其派出机构报告。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "868",
    name: "第二十八条 对于关联",
    description:
      "第二十八条 对于关联外包，银行保险机构董（理）事会和高级管理层应当推动母公司或所属集团将外包服务质量纳入对服务提供商的业绩评价范围，建立外包服务重大事件问责机制。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "869",
    name: "第二十九条 银行保险",
    description:
      "第二十九条 银行保险机构应在信息科技外包服务到期前，就是否继续外包进行评估决策。外包服务结束时，银行保险机构应对服务提供商进行评价，评价结果作为服务提供商后续准入的重要参考依据。对具有持续性特点的外包服务，银行保险机构终止外包或更换服务提供商前，应制定周密的退出和交接计划。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "870",
    name: "第五章 信息科技外包",
    description: "第五章 信息科技外包风险管理",
    adfId: "7",
    paraType: "章",
  },
  {
    id: "871",
    name: "第三十条 银行保险机",
    description:
      "第三十条 银行保险机构应建立并持续完善风险管理制度和流程，充分识别并评估信息科技外包可能产生的风险，包括但不限于：",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "872",
    name: "（一）科技能力丧失。",
    description:
      "（一）科技能力丧失。过度依赖外包导致失去科技控制及创新能力，影响业务创新与发展。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "873",
    name: "（二）业务中断。支持",
    description:
      "（二）业务中断。支持业务运营的外包服务无法持续提供导致业务中断。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "874",
    name: "（三）数据泄露、丢失",
    description:
      "（三）数据泄露、丢失和篡改。因服务提供商的不当行为或其服务的信息系统遭受网络攻击，导致银行保险机构重要数据或客户个人信息泄露、丢失和篡改。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "875",
    name: "（四）资金损失。因服",
    description:
      "（四）资金损失。因服务提供商的不当行为或其服务的信息系统遭受网络攻击，导致银行保险机构客户资金被盗取。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "876",
    name: "（五）服务水平下降。",
    description:
      "（五）服务水平下降。由于外包服务质量问题或内外部协作效率低下，使得信息科技服务水平下降。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "877",
    name: "（六）可能导致的战略",
    description: "（六）可能导致的战略、声誉、合规等其他风险。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "878",
    name: "第三十一条 针对可能",
    description:
      "第三十一条 针对可能给业务连续性管理造成重大影响的重要外包服务，银行保险机构应当事先建立风险控制、缓释或转移措施，包括但不限于：",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "879",
    name: "（一）事先制定退出策",
    description:
      "（一）事先制定退出策略和供应链安全保障方案，并在外包服务实施过程中持续收集服务提供商相关信息，尽早发现可能导致服务中断或服务质量下降的情况；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "880",
    name: "（二）明确措施和方法",
    description:
      "（二）明确措施和方法，在服务提供商服务质量不能满足合同要求的情况下，保障获取其外包服务资源的优先权；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "881",
    name: "（三）要求服务提供商",
    description:
      "（三）要求服务提供商提供必要的应急和灾备资源保障，制定应急处理预案并在预案中明确为银行保险机构提供应急响应和恢复的优先级，原则上应为最高级；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "882",
    name: "（四）组织服务提供商",
    description:
      "（四）组织服务提供商参与应急计划编制和应急演练，至少每年在综合性演练或专项演练中纳入一个或多个服务提供商开展一次相关演练；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "883",
    name: "（五）考虑预先在银行",
    description:
      "（五）考虑预先在银行保险机构内部配置相应的人力资源，掌握必要的技能，以在外包服务中断期间自行维持最低限度的服务能力。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "884",
    name: "第三十二条 银行保险",
    description:
      "第三十二条 银行保险机构应当制定和落实网络和信息安全管理措施，包括但不限于：",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "885",
    name: "（一）对服务提供商和",
    description:
      "（一）对服务提供商和外包人员进行网络和信息安全教育或培训，增强网络和信息安全意识，服务提供商应与银行保险机构签订安全保密协议，外包人员应签署安全保密承诺书；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "886",
    name: "（二）明确外包活动需",
    description:
      "（二）明确外包活动需要访问或使用的信息资产，按“必需知道”和“最小授权”原则进行访问授权，严格管控远程维护行为；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "887",
    name: "（三）对信息系统开发",
    description:
      "（三）对信息系统开发交付物（含拥有知识产权的源代码）进行安全扫描和检查；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "888",
    name: "（四）对客户信息、源",
    description:
      "（四）对客户信息、源代码和文档等敏感信息采取严格管控措施，对敏感信息泄露风险进行持续监测；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "889",
    name: "（五）对服务提供商所",
    description:
      "（五）对服务提供商所提供的模型、算法及相关信息系统加强管理，确保模型和算法遵循可解释、可验证、透明、公平的原则；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "890",
    name: "（六）定期对外包活动",
    description: "（六）定期对外包活动进行网络和信息安全评估。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "891",
    name: "第三十三条 银行保险",
    description:
      "第三十三条 银行保险机构应识别对本机构具有集中度风险的外包服务及其提供商，积极采用分散外包活动、注重外包项目知识产权保护、提高自身研发运维能力、储备潜在替代服务提供商等手段，减少对个别外包服务提供商的依赖，降低集中度风险。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "892",
    name: "第三十四条 银行保险",
    description:
      "第三十四条 银行保险机构应当对符合重要外包标准的非驻场外包服务进行实地检查，原则上每三年覆盖所有重要的非驻场外包服务。对具有行业集中度性质的服务提供商，银行保险机构可采取联合检查、委托检查等形式，减少重复性工作，减轻服务提供商的检查负担。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "893",
    name: "第三十五条 银行保险",
    description:
      "第三十五条 银行保险机构每年应当至少开展一次全面的信息科技外包风险管理评估，并向董（理）事会或高级管理层提交评估报告。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "894",
    name: "第三十六条 银行保险",
    description:
      "第三十六条 银行保险机构应当开展信息科技外包及其风险管理的审计工作，定期对信息科技外包活动进行审计，至少每三年覆盖所有重要外包。发生重大外包风险事件后应当及时开展专项审计。银行保险机构应承担内部审计职能和责任，内部审计项目可委托母公司或同一集团下属子公司实施，或聘请独立第三方实施。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "895",
    name: "第六章 监督管理",
    description: "第六章 监督管理",
    adfId: "7",
    paraType: "章",
  },
  {
    id: "896",
    name: "第三十七条 银行保险",
    description:
      "第三十七条 银行保险机构开展以下信息科技外包活动时，应当在外包合同签订前二十个工作日向银保监会或其派出机构的信息科技监管部门报告（目录见附件）：",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "897",
    name: "（一）信息科技工作整",
    description: "（一）信息科技工作整体外包；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "898",
    name: "（三）涉及基础设施和",
    description: "（三）涉及基础设施和信息系统整体架构发生重大变化的外包；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "899",
    name: "（四）信息科技战略规",
    description: "（四）信息科技战略规划（含中长期规划）咨询外包；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "900",
    name: "（五）符合重要外包条",
    description: "（五）符合重要外包条件的非驻场外包、关联外包和跨境外包；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "901",
    name: "（六）其他银保监会认",
    description: "（六）其他银保监会认为重要的信息科技外包。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "902",
    name: "第三十八条 银行保险",
    description:
      "第三十八条 银行保险机构信息科技外包活动中发生以下重大风险事件时，应当按照相关突发事件监管报告要求，向银保监会或其派出机构报告：",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "903",
    name: "（一）银行保险机构重",
    description: "（一）银行保险机构重要数据或客户个人信息泄露；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "904",
    name: "（二）数据损毁或者重",
    description: "（二）数据损毁或者重要业务运营中断；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "905",
    name: "（三）由于不可抗力或",
    description:
      "（三）由于不可抗力或服务提供商重大经营、财务问题，导致或可能导致多家银行保险机构外包服务中断;",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "906",
    name: "（四）重要外包服务非",
    description: "（四）重要外包服务非正常中断、终止或其服务提供商非正常退出；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "907",
    name: "（五）因服务提供商不",
    description:
      "（五）因服务提供商不当行为或其服务的信息系统遭受网络攻击或其他原因，造成银行保险机构客户重大资金损失；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "908",
    name: "（六）发现重大的服务",
    description: "（六）发现重大的服务提供商违法违规事件；",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "909",
    name: "（七）银保监会规定需",
    description: "（七）银保监会规定需要报告的其他重大事件。",
    adfId: "7",
    paraType: "项",
  },
  {
    id: "910",
    name: "相关突发事件报告要求",
    description:
      "相关突发事件报告要求中没有规定的，在24小时内向银保监会或其派出机构报告。",
    adfId: "7",
    paraType: "",
  },
  {
    id: "911",
    name: "第三十九条 银保监会",
    description:
      "第三十九条 银保监会及其派出机构对银行保险机构信息科技外包风险进行独立评估，对银行保险机构信息科技外包工作进行监督和检查，并纳入监管综合评价体系。对于检查发现涉嫌违法事项的有关单位和个人，依照相关法律规定实施延伸检查。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "912",
    name: "第四十条 银保监会及",
    description:
      "第四十条 银保监会及其派出机构持续监测银行业保险业信息科技外包风险状况，建立行业和区域集中度风险监测与核查机制，对重大或共性风险及时向行业发布风险提示，积极防范因信息科技外包可能引发的区域性、系统性风险。根据风险状况，银保监会及其派出机构可以要求银行保险机构与服务提供商会谈，就其外包服务和风险相关的重大事项作出说明。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "913",
    name: "第四十一条 银保监会",
    description:
      "第四十一条 银保监会及其派出机构可组织或责令银行保险机构对承担银行保险机构信息科技外包服务的服务提供商进行现场核查，也可由银行保险机构委托其他第三方机构以审计的形式实施。银保监会建立信息共享机制，及时向行业通报现场核查情况。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "914",
    name: "第四十二条 对于经监",
    description:
      "第四十二条 对于经监管评估、监督检查或现场核查风险较高的信息科技外包服务，银保监会及其派出机构可以对银行保险机构采取风险提示、约见谈话、监管质询、要求暂缓和停止相关外包活动等措施。对具有重大违法违规情形的服务提供商，银保监会可通报行业，必要时将有关情况移交司法机关。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "915",
    name: "第四十三条 银行保险",
    description:
      "第四十三条 银行保险机构违反本办法要求的，银保监会及其派出机构依法予以纠正，并视情况予以问责或处罚。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "916",
    name: "第七章 附则",
    description: "第七章 附则",
    adfId: "7",
    paraType: "章",
  },
  {
    id: "917",
    name: "第四十四条 本办法所",
    description:
      "第四十四条 本办法所称关联外包，是指银行保险机构的母公司或其所属集团子公司、关联公司或附属机构作为服务提供商，为其提供信息科技外包服务的行为。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "918",
    name: "同业外包，是指依法设",
    description:
      "同业外包，是指依法设立的由银保监会监管的银行保险机构为其他同行业金融机构提供外包服务的行为。",
    adfId: "7",
    paraType: "",
  },
  {
    id: "919",
    name: "跨境外包，是指服务提",
    description:
      "跨境外包，是指服务提供商在境外其他国家或地区实施信息科技外包服务的行为。",
    adfId: "7",
    paraType: "",
  },
  {
    id: "920",
    name: "非驻场外包，是指服务",
    description:
      "非驻场外包，是指服务提供商不在银行保险机构场所提供服务的外包形式。",
    adfId: "7",
    paraType: "",
  },
  {
    id: "921",
    name: "重要数据，包括但不限",
    description:
      "重要数据，包括但不限于客户资料、交易数据、商业秘密等，参见国家法律法规和国家标准对重要数据的相关定义。",
    adfId: "7",
    paraType: "",
  },
  {
    id: "922",
    name: "客户个人信息和敏感信",
    description:
      "客户个人信息和敏感信息，参见国家法律法规和国家标准对个人信息的相关定义。",
    adfId: "7",
    paraType: "",
  },
  {
    id: "923",
    name: "第四十五条 本办法由",
    description: "第四十五条 本办法由银保监会负责解释和修订。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "924",
    name: "第四十六条 本办法自",
    description:
      "第四十六条 本办法自公布之日起施行。《银行业金融机构信息科技外包风险监管指引》（银监发〔2013〕5号）、《中国银监会办公厅关于加强银行业金融机构信息科技非驻场集中式外包风险管理的通知》（银监办发〔2014〕187号）、《中国银监会办公厅关于开展银行业金融机构信息科技非驻场集中式外包监管评估工作的通知》（银监办发〔2014〕272号）同时废止。",
    adfId: "7",
    paraType: "条",
  },
  {
    id: "925",
    name: "附件：",
    description: "附件：",
    adfId: "7",
    paraType: "附",
  },
  {
    id: "926",
    name: "1.银行保险机构信息",
    description: "1.银行保险机构信息科技外包监管报告材料目录",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "927",
    name: "2.信息科技外包服务",
    description: "2.信息科技外包服务类型参考",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "928",
    name: "附件1",
    description: "附件1",
    adfId: "7",
    paraType: "附",
  },
  {
    id: "929",
    name: "银行保险机构信息科技",
    description: "银行保险机构信息科技外包监管报告",
    adfId: "7",
    paraType: "",
  },
  {
    id: "930",
    name: "材料目录",
    description: "材料目录",
    adfId: "7",
    paraType: "",
  },
  {
    id: "931",
    name: "一、外包服务基本情况",
    description: "一、外包服务基本情况，包括：",
    adfId: "7",
    paraType: "",
  },
  {
    id: "932",
    name: "1．外包服务名称；",
    description: "1．外包服务名称；",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "933",
    name: "2．外包服务类型：咨",
    description:
      "2．外包服务类型：咨询规划类、开发测试类、运行维护类、安全服务类、业务支持类等；",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "934",
    name: "3．外包服务的主要内",
    description: "3．外包服务的主要内容；",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "935",
    name: "4．实施方式：驻场外",
    description: "4．实施方式：驻场外包、非驻场外包；",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "936",
    name: "5．影响的业务类型：",
    description:
      "5．影响的业务类型：渠道管理类、客户管理类、产品管理类、财务管理类、决策支持类、共享支持类等；",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "937",
    name: "6．外包服务起止时间",
    description: "6．外包服务起止时间。",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "938",
    name: "二、服务提供商基本情",
    description: "二、服务提供商基本情况，包括：",
    adfId: "7",
    paraType: "",
  },
  {
    id: "939",
    name: "1．服务提供商全称、",
    description: "1．服务提供商全称、国别；",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "940",
    name: "2．尽职调查报告；",
    description: "2．尽职调查报告；",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "941",
    name: "3．法人代表；",
    description: "3．法人代表；",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "942",
    name: "4．注册资本；",
    description: "4．注册资本；",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "943",
    name: "5．上级机构/母机构",
    description: "5．上级机构/母机构；",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "944",
    name: "6．成立时间；",
    description: "6．成立时间；",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "945",
    name: "7．企业性质；",
    description: "7．企业性质；",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "946",
    name: "8．统一社会信用代码",
    description: "8．统一社会信用代码。",
    adfId: "7",
    paraType: "目",
  },
  {
    id: "947",
    name: "三、外包风险评估报告",
    description: "三、外包风险评估报告。",
    adfId: "7",
    paraType: "",
  },
  {
    id: "948",
    name: "银保监会规定的其他材",
    description: "银保监会规定的其他材料。",
    adfId: "7",
    paraType: "",
  },
  {
    id: "949",
    name: "附件2",
    description: "附件2",
    adfId: "7",
    paraType: "附",
  },
  {
    id: "950",
    name: "信息科技外包服务类型",
    description: "信息科技外包服务类型参考",
    adfId: "7",
    paraType: "",
  },
  {
    id: "951",
    name: "咨询规划类。包括但不",
    description:
      "咨询规划类。包括但不限于：信息科技战略规划（含中长期规划）咨询，数据中心（机房）整体建设咨询和规划，信息科技治理（含数据治理）、信息科技风险管理体系、信息安全管理体系、业务连续性管理体系等管理类咨询和规划，重要信息系统架构和建设相关的咨询和规划，新兴技术应用咨询和规划。",
    adfId: "7",
    paraType: "",
  },
  {
    id: "952",
    name: "开发测试类。包括但不",
    description:
      "开发测试类。包括但不限于：软硬件开发和测试外包（含人力外包），软件即服务形式的外包。",
    adfId: "7",
    paraType: "",
  },
  {
    id: "953",
    name: "运行维护类。包括但不",
    description:
      "运行维护类。包括但不限于：数据中心（机房）物理环境的托管或运行维护，软硬件基础设施托管或运行维护，应用系统运行维护，电子机具运行维护，终端等办公设备的运行维护，以及涉及以上运行维护的人力外包。",
    adfId: "7",
    paraType: "",
  },
  {
    id: "954",
    name: "安全服务类。包括但不",
    description:
      "安全服务类。包括但不限于：安全运营服务，安全加固服务，安全设备运行维护，安全日志处理与分析，安全测试服务，密钥管理及运行维护，数据安全服务，以及涉及以上服务的人力外包。",
    adfId: "7",
    paraType: "",
  },
  {
    id: "955",
    name: "业务支持类。包括但不",
    description:
      "业务支持类。包括但不限于：市场拓展、业务运营（集中作业、呼叫中心等）、企业管理、资产处置、数据处理、数据利用等业务外包或第三方合作当中涉及银行保险机构的重要数据或客户个人信息处理的信息科技活动，法律法规另有要求的除外。",
    adfId: "7",
    paraType: "",
  },
  {
    id: "956",
    name: "第一章  总  则",
    description: "第一章  总  则",
    adfId: "9",
    paraType: "章",
  },
  {
    id: "957",
    name: "第一条 为规范银行业",
    description:
      "第一条 为规范银行业保险业数据处理活动，保障数据安全、金融安全，促进数据合理开发利用，保护个人、组织的合法权益，维护国家安全和社会公共利益，根据《中华人民共和国数据安全法》《中华人民共和国网络安全法》《中华人民共和国个人信息保护法》《中华人民共和国银行业监督管理法》《中华人民共和国商业银行法》《中华人民共和国保险法》等法律法规，制定本办法。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "958",
    name: "第二条 在中华人民共",
    description:
      "第二条 在中华人民共和国境内设立的开发性金融机构、政策性银行、商业银行、农村合作银行、农村信用社，保险集团（控股）公司、保险公司、保险资产管理公司、金融资产管理公司、信托公司、财务公司、金融租赁公司、汽车金融公司、消费金融公司、货币经纪公司、理财公司适用本办法。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "959",
    name: "开展涉及国家秘密的数",
    description:
      "开展涉及国家秘密的数据处理活动，适用《中华人民共和国保守国家秘密法》等法律、行政法规的规定。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "960",
    name: "第三条 本办法所称数",
    description: "第三条 本办法所称数据，是指以电子或者其他方式对信息的记录。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "961",
    name: "数据处理，是指对数据",
    description:
      "数据处理，是指对数据的收集、存储、使用、加工、传输、提供、共享、转移、公开、删除、销毁等。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "962",
    name: "数据安全，是指通过采",
    description:
      "数据安全，是指通过采取必要措施，对数据处理活动和数据应用场景进行管理与控制，确保数据始终处于有效保护和合法利用的状态，以及具备保障持续安全状态的能力。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "963",
    name: "数据主体，是指数据所",
    description:
      "数据主体，是指数据所标识的自然人或者其监护人、企业、机关、事业单位、社会团体和其他组织。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "964",
    name: "个人信息，是以电子或",
    description:
      "个人信息，是以电子或者其他方式记录的与已识别或者可识别的自然人有关的各种信息，不包括匿名化处理后的信息。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "965",
    name: "大数据平台，是指以处",
    description:
      "大数据平台，是指以处理海量数据存储、计算、分析等为目的的基础设施，包括数据统计分析类的平台和大数据处理类平台（如数据湖、数据仓库等）。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "966",
    name: "第四条 国家金融监督",
    description:
      "第四条 国家金融监督管理总局及其派出机构负责银行业保险业数据安全的监督管理，制定并发布监管规章制度，对银行保险机构履行数据安全保护义务情况进行监督检查。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "967",
    name: "第五条 银行保险机构",
    description:
      "第五条 银行保险机构应当建立与本机构业务发展目标相适应的数据安全治理体系，建立健全数据安全管理制度，构建覆盖数据全生命周期和应用场景的安全保护机制，开展数据安全风险评估、监测与处置，保障数据开发利用活动安全稳健开展。银行保险机构利用互联网等信息网络开展数据处理活动，应当在网络安全等级保护制度基础上，履行数据安全保护义务。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "968",
    name: "第六条 银行保险机构",
    description:
      "第六条 银行保险机构开展数据处理活动，应当遵守法律、法规，尊重社会公德和伦理，遵守商业道德和职业道德，诚实守信，履行数据安全保护义务，承担社会责任，不得危害国家安全、政治安全、金融安全、公共利益，不得损害个人、组织的合法权益。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "969",
    name: "第七条 银行保险机构",
    description:
      "第七条 银行保险机构应当统筹发展和安全，落实国家大数据战略，推进数据基础设施建设，加大数据创新应用力度，促进以数据为关键要素的数字经济发展，提升金融服务的智能化水平，创新普惠金融服务模式，增强防范化解风险的能力。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "970",
    name: "第八条 银行保险机构",
    description:
      "第八条 银行保险机构应当持续跟踪新兴数据开发利用和科技发展前沿动态，有效应对大数据应用与科技创新可能产生的规则冲突、社会风险、伦理道德风险，防止数据与科技被误用、滥用。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "971",
    name: "第二章  数据安全治",
    description: "第二章  数据安全治理",
    adfId: "9",
    paraType: "章",
  },
  {
    id: "972",
    name: "第九条 银行保险机构",
    description:
      "第九条 银行保险机构应当建立覆盖董（理）事会、高管层、数据安全统筹、数据安全技术保护等部门的数据安全管理组织架构，明确岗位职责和工作机制，落实资源保障。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "973",
    name: "第十条 银行保险机构",
    description:
      "第十条 银行保险机构应当建立数据安全责任制，党委（党组）、董（理）事会对本单位数据安全工作负主体责任。银行保险机构主要负责人为数据安全第一责任人，分管数据安全的领导为直接责任人，明确各层级负责人的责任，明确违规情形和责任追究事项，落实问责处置机制。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "974",
    name: "第十一条 银行保险机",
    description:
      "第十一条 银行保险机构应当指定数据安全归口管理部门，作为本机构负责数据安全工作的主责部门。其主要职责包括：",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "975",
    name: "（一）组织制定数据安",
    description: "（一）组织制定数据安全管理原则、规划、制度和标准。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "976",
    name: "（二）组织建立和维护",
    description: "（二）组织建立和维护数据目录，推动实施数据分类分级保护。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "977",
    name: "（三）组织开展数据安",
    description: "（三）组织开展数据安全评估和审查。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "978",
    name: "（四）统筹建立数据安",
    description:
      "（四）统筹建立数据安全应急管理机制，组织开展数据安全风险监测、预警与处置。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "979",
    name: "（五）组织开展数据安",
    description:
      "（五）组织开展数据安全宣贯培训，提升员工数据安全保护意识与技能。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "980",
    name: "（六）建立和维护内部",
    description:
      "（六）建立和维护内部数据共享、外部数据引入、数据对外提供、数据出境的统筹管理机制，牵头对外部数据供应商进行安全管理，统筹大数据应用、数据共享项目的安全需求管理。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "981",
    name: "（七）向党委（党组）",
    description:
      "（七）向党委（党组）、董（理）事会、高管层报告数据安全重要事项。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "982",
    name: "（八）其他须统筹管理",
    description: "（八）其他须统筹管理的数据安全工作事项。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "983",
    name: "第十二条 银行保险机",
    description:
      "第十二条 银行保险机构应当按照“谁管业务、谁管业务数据、谁管数据安全”的原则，明确各业务领域的数据安全管理责任，落实数据安全保护管理要求。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "984",
    name: "第十三条 银行保险机",
    description:
      "第十三条 银行保险机构风险管理、内控合规和审计部门负责将数据安全纳入全面风险管理体系、内控评价体系，定期开展审计、监督检查与评价，督促问题整改和开展问责。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "985",
    name: "第十四条 银行保险机",
    description:
      "第十四条 银行保险机构信息科技部门是数据安全的技术保护主责部门，其主要职责包括：",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "986",
    name: "（一）建立数据安全技",
    description:
      "（一）建立数据安全技术保护体系，建立数据安全技术架构和保护控制基线，落实技术保护措施。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "987",
    name: "（二）制定数据安全技",
    description:
      "（二）制定数据安全技术标准规范制度，组织开展数据安全技术风险评估。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "988",
    name: "（三）组织开展信息系",
    description:
      "（三）组织开展信息系统的生命周期安全管理，确保数据安全保护措施在需求、开发、测试、投产、监测等环节得到落实。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "989",
    name: "（四）建立数据安全技",
    description:
      "（四）建立数据安全技术应急管理机制，组织开展数据安全风险技术监测、预警、通报与处置，防范外部攻击行为。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "990",
    name: "（五）组织数据安全技",
    description: "（五）组织数据安全技术研究与应用。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "991",
    name: "第十五条 银行保险机",
    description:
      "第十五条 银行保险机构应当建立良好的数据安全文化，开展全员数据安全教育和培训，提高数据安全保护意识和水平，形成全员共同维护数据安全和促进发展的良好环境。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "992",
    name: "第三章  数据分类分",
    description: "第三章  数据分类分级",
    adfId: "9",
    paraType: "章",
  },
  {
    id: "993",
    name: "第十六条 银行保险机",
    description:
      "第十六条 银行保险机构应当制定数据分类分级保护制度，建立数据目录和分类分级规范，动态管理和维护数据目录，采取差异化安全保护措施。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "994",
    name: "第十七条 银行保险机",
    description:
      "第十七条 银行保险机构应当对机构业务及经营管理过程中获取、产生的数据进行分类管理，数据类型包括客户数据、业务数据、经营管理数据、系统运行和安全管理数据等。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "995",
    name: "第十八条 银行保险机",
    description:
      "第十八条 银行保险机构应当根据数据的重要性和敏感程度，将数据分为核心数据、重要数据、一般数据。其中，一般数据细分为敏感数据和其他一般数据。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "996",
    name: "核心数据是指对领域、",
    description:
      "核心数据是指对领域、群体、区域具有较高覆盖度或者达到较高精度、较大规模、一定深度的重要数据，一旦被非法使用或者共享，可能直接影响政治安全、国家安全重点领域、国民经济命脉、重要民生、重大公共利益。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "997",
    name: "重要数据是指特定领域",
    description:
      "重要数据是指特定领域、特定群体、特定区域或者达到一定精度和规模的数据，一旦被泄露或者篡改、损毁，可能直接危害国家安全、经济运行、社会稳定、公共健康和安全。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "998",
    name: "敏感数据是指，一旦被",
    description:
      "敏感数据是指，一旦被泄露或者篡改、损毁，对经济运行、社会稳定、公共利益有一定影响，或者对组织自身或者公民个体造成重要影响的数据。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "999",
    name: "除以上数据之外的数据",
    description: "除以上数据之外的数据为其他一般数据。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1000",
    name: "第十九条 银行保险机",
    description:
      "第十九条 银行保险机构应当加强数据安全级别的时效管理，建立动态调整审批机制，当数据的业务属性、重要程度和可能造成的危害程度发生变化，导致原安全级别不再适用的，应当及时动态调整。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1001",
    name: "第四章  数据安全管",
    description: "第四章  数据安全管理 ",
    adfId: "9",
    paraType: "章",
  },
  {
    id: "1002",
    name: "第二十条 银行保险机",
    description:
      "第二十条 银行保险机构应当按照国家数据安全与发展政策要求，根据自身发展战略，制定数据安全保护策略。银行保险机构应当制定数据安全管理办法，明确管理责任分工，建立包括数据处理全生命周期管控机制，落实保护措施。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1003",
    name: "银行保险机构应当对数",
    description:
      "银行保险机构应当对数据外部引入或者合作共享、数据出境等，制定安全管理实施细则。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1004",
    name: "第二十一条 银行保险",
    description:
      "第二十一条 银行保险机构应当建立企业级数据架构，统筹开展对全域数据资产登记管理，建立数据资产地图，以数据分类分级为基础明确数据保护对象，围绕数据处理活动实施安全管理。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1005",
    name: "第二十二条 银行保险",
    description:
      "第二十二条 银行保险机构在处理敏感级及以上数据的业务活动时，或者开展数据委托处理、共同处理、转移、公开、共享等对数据主体有较大影响的活动时，应当事先开展数据安全评估。数据安全评估应当根据数据处理目的、性质和范围，按照法律法规和伦理道德规范要求，分析数据安全风险和对数据主体权益影响，评估数据处理的必要性、合规性，评估数据安全风险及防控措施的有效性。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1006",
    name: "第二十三条 银行保险",
    description:
      "第二十三条 银行保险机构应当建立企业级数据服务管理体系，制定数据服务规范，建立专职数据服务团队，统筹内外部数据加工、分析，实施数据服务需求分析、服务开发、服务部署、服务监控等活动。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1007",
    name: "第二十四条 银行保险",
    description:
      "第二十四条 银行保险机构收集数据应当坚持“合法、正当、必要、诚信”原则，明确数据收集和处理的目的、方式、范围、规则，保障收集过程的数据安全性、数据来源可追溯。银行保险机构不得超出数据主体同意的范围向其收集数据，法律、行政法规另有规定的除外。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1008",
    name: "银行保险机构向其他银",
    description:
      "银行保险机构向其他银行保险机构收集行业重要级及以上数据，需经国家金融监督管理总局同意。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1009",
    name: "第二十五条 银行保险",
    description:
      "第二十五条 银行保险机构应当以信息系统为数据收集的主要渠道，限制或者减少其他渠道、临时性数据收集。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1010",
    name: "银行保险机构停止金融",
    description:
      "银行保险机构停止金融业务或者服务后，应当立即停止相关数据收集或者处理活动，法律、行政法规另有规定的除外。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1011",
    name: "第二十六条 银行保险",
    description:
      "第二十六条 银行保险机构应当制定外部数据采购、合作引入的集中审批管理制度，纳入外包风险管理体系进行统筹管理，统筹建立数据需求、安全评估、收集引入、数据运维、登记备案和监督评价管理机制，对数据来源的真实性、合法性进行调查，评估数据提供者的安全保障能力及其数据安全风险，明确双方数据安全责任及义务。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1012",
    name: "第二十七条 银行保险",
    description:
      "第二十七条 银行保险机构开展敏感级及以上数据清洗转换、汇聚融合、分析挖掘等数据加工活动时，应当采用匿名化、去标识化或者其他必要安全措施保护数据主体权益，法律、行政法规另有规定的除外。数据汇聚融合衍生敏感级及以上数据，或者导致数据安全级别变化的，应当及时评估、调整安全保护措施。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1013",
    name: "第二十八条 银行保险",
    description:
      "第二十八条 银行保险机构应当按照“业务必要授权”原则，对敏感级及以上数据严格实施授权管理，制定数据访问闭环管理机制，并对数据访问行为实施审计。确因业务需要从生产环境提取数据的，应当建立严格的审批程序，并明确数据使用或者保存期限。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1014",
    name: "银行保险机构利用互联",
    description:
      "银行保险机构利用互联网等信息网络开展数据处理活动时，要落实网络安全等级保护、关键信息基础设施安全保护、密码保护等制度要求。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1015",
    name: "第二十九条 银行保险",
    description:
      "第二十九条 银行保险机构应当对数据共享使用进行集中安全管控，明确企业级数据共享策略，评估数据共享使用的必要性、合规性、安全性及伦理道德规范的符合度。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1016",
    name: "银行保险机构应当建立",
    description:
      "银行保险机构应当建立银行母行、保险集团或者母公司与其子行、子公司数据安全隔离的“防火墙”，并对共享数据采取有效保护措施。银行保险机构与其母行、集团，或者其子行、子公司共享敏感级及以上数据，应当获得数据主体的授权同意，法律、行政法规另有规定的除外。不得以数据主体拒绝同意共享敏感数据而终止或者拒绝单家子行、子公司对其提供金融服务，所共享数据属于提供产品或者服务所必需的除外。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1017",
    name: "第三十条 银行保险机",
    description:
      "第三十条 银行保险机构在委托处理数据时，应当明确所涉数据外部使用和处理的条件、场景、方式。委托处理数据时，应当以合同协议方式约定委托处理的目的、期限、处理方式、数据范围、保护措施、双方的数据安全责任和义务，以及受托方返还或者删除数据的方式等，对数据处理活动进行记录和审计，可对外公开披露的数据除外。银行保险机构应当要求受托方在未取得其同意时，不得转委托其他主体处理数据，不得对外共享数据，不得加工、训练、挪用数据，或者采取其他形式处理数据以谋取合同或者协议约定以外的利益。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1018",
    name: "第三十一条 银行保险",
    description:
      "第三十一条 银行保险机构应当将数据委托处理纳入信息科技外包管理范围，在实施过程中不得将信息科技管理责任、数据安全主体责任外包，涉及信息科技战略管理、信息科技风险管理、信息科技内部审计及其他有关信息科技核心竞争力的职能不得外包。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1019",
    name: "第三十二条 银行保险",
    description:
      "第三十二条 银行保险机构与第三方机构进行数据共同处理时，应当按照“业务必要授权”原则制定方案并采取有效技术保护措施确保数据安全，并以合同协议方式明确双方在数据处理过程中的数据安全责任和义务。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1020",
    name: "第三十三条 银行保险",
    description:
      "第三十三条 银行保险机构因兼并、重组、破产等需要转移数据，应当明确数据转移内容，通过协议、承诺等方式约定数据接收方全面承接对应数据的安全保护义务，通过公告等方式告知数据主体。数据转移应当采用安全可靠方式进行，并确保转移过程可追溯。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1021",
    name: "第三十四条 银行保险",
    description:
      "第三十四条 银行保险机构向外部提供敏感级及以上数据，应当取得数据主体同意，法律、行政法规另有规定的除外。除国家机关依法履职外，银行保险机构核心数据跨主体流动应当按照国家相关政策要求通过风险评估、安全审查。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1022",
    name: "第三十五条 银行保险",
    description:
      "第三十五条 银行保险机构应当建立对外公开披露数据的审批机制，研判可能产生的影响，数据公开应当在机构官方渠道进行发布，确保数据真实、准确、防篡改，记录审批和发布情况。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1023",
    name: "敏感级及以上数据不得",
    description:
      "敏感级及以上数据不得公开，法律、行政法规另有规定的或者取得数据主体授权同意的除外。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1024",
    name: "第三十六条 银行保险",
    description:
      "第三十六条 银行保险机构向境外提供在中华人民共和国境内运营中收集和产生的重要数据和个人信息，应当承担数据安全主体责任，并按照国家有关政策要求进行安全评估。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1025",
    name: "第三十七条 银行保险",
    description:
      "第三十七条 银行保险机构应当采取技术措施，对敏感级及以上数据加强重点防护。加强数据备份，制定备份策略，备份数据和生产数据应隔离分开保存，严格管理备份数据的访问权限。制定备份验证计划，确保备份数据完整有效、业务可恢复。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1026",
    name: "第三十八条 银行保险",
    description:
      "第三十八条 银行保险机构应当制定数据销毁管理制度，按照国家、行业有关规定及与数据主体的约定进行数据删除或者匿名化处理。银行保险机构委托数据处理中止时，应当要求服务提供商及时删除数据，并采取现场检查等有效监督措施，确保数据被销毁、不可恢复。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1027",
    name: "第五章  数据安全技",
    description: "第五章  数据安全技术保护",
    adfId: "9",
    paraType: "章",
  },
  {
    id: "1028",
    name: "第三十九条 银行保险",
    description:
      "第三十九条 银行保险机构应当建立针对大数据、云计算、移动互联网、物联网等多元异构环境下的数据安全技术保护体系，建立数据安全技术架构，明确数据保护策略方法，采取技术措施，保障数据安全。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1029",
    name: "第四十条 银行保险机",
    description:
      "第四十条 银行保险机构应当将数据安全保护纳入信息系统开发生命周期框架，针对敏感级及以上数据明确安全保护要求，实现数据安全保护措施与信息系统的同步规划、同步建设、同步使用。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1030",
    name: "第四十一条 银行保险",
    description:
      "第四十一条 银行保险机构应当将数据纳入网络安全等级保护。银行保险机构应当根据数据安全级别，划分网络逻辑安全域，建立分区域数据安全保护基线，实施有效的安全控制，包括内容过滤、访问控制和安全监控等，确保相关措施满足处理和存储最高级别数据的网络安全策略和数据安全保护策略要求。存放或者传输敏感级及以上数据的机房、网络应当实施重点防护，设立物理安全保护区域，对网络边界、重要网络节点进行安全监控与审计。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1031",
    name: "第四十二条 银行保险",
    description:
      "第四十二条 银行保险机构应当将敏感级及以上数据纳入信息系统保护。在数据全生命周期内采取有效的访问控制管理措施，对于不同区域流转和共享中的数据，应当实施同等水平的安全防护措施。多来源敏感级及以上数据汇聚集中后，应当采取加强性或者至少不低于集中前最高级别数据保护强度的安全措施。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1032",
    name: "第四十三条 银行保险",
    description:
      "第四十三条 银行保险机构应当严格实施对敏感级及以上数据的管理，制定用户对数据的访问策略，采取有效的用户认证和访问控制技术措施，规范数据操作行为，用户对数据的访问应当符合业务开展的必要要求并与数据安全级别相匹配。敏感级及以上数据的操作应当进行日志记录，包括操作时间、用户标识、行为类型等，核心数据操作日志及其备份数据保存时间不低于3年，重要数据、敏感数据操作日志及其备份数据保存时间不低于1年，如涉及委托处理、共同处理的数据操作日志及其备份数据保存时间不低于3年。应当定期对数据操作行为进行审计，审计周期不超过6个月。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1033",
    name: "第四十四条 银行保险",
    description:
      "第四十四条 银行保险机构敏感级及以上数据传输应当采用安全的传输方式，保障数据完整性、保密性、可用性。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1034",
    name: "银行保险机构之间进行",
    description:
      "银行保险机构之间进行数据交换时，参与数据交换的相关机构应当采取有效措施保障信息数据传输和存储的保密性、完整性、准确性、及时性、安全性。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1035",
    name: "第四十五条 银行保险",
    description:
      "第四十五条 银行保险机构应当对敏感级及以上数据采取安全存储措施，防止勒索病毒、木马后门等攻击。个人身份鉴别数据不得明文存储、传输和展示。敏感级及以上数据应当实施数据容灾备份，定期进行数据可恢复性验证。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1036",
    name: "第四十六条 敏感级及",
    description:
      "第四十六条 敏感级及以上数据达到使用或者保存期限后，应当采取技术措施及时删除或者销毁，确保数据不可恢复。终端和移动存储介质内的敏感级及以上数据应当采取技术保护措施，确保受控安全访问，介质报废或者重用时，其存储空间数据应当完全清除并不可恢复。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1037",
    name: "第四十七条 银行保险",
    description:
      "第四十七条 银行保险机构应当开展数据安全的技术基础设施建设，支持用户身份管理、数据匿名化、行为监测、日志审计、数据虚拟化等功能的组件化、服务化，保障安全标准在信息系统中执行的一致性。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1038",
    name: "第四十八条 银行保险",
    description:
      "第四十八条 银行保险机构开发信息系统时，应当明确系统拟处理的数据及其安全级别、访问规则、保护需求，并实施有效的系统安全控制。系统投产上线前应当开展安全测试，确保各项安全要求落实，有效防范数据安全风险。测试环境应当与生产系统隔离，敏感级及以上数据原则上未经脱敏处理不得进入测试环境， 防止数据泄露。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1039",
    name: "第四十九条 银行保险",
    description:
      "第四十九条 银行保险机构应当对大数据平台采取高可用设计、安全加固、数据备份等措施进行重点保护。应当建立大数据服务访问授权机制，动态监测与审计大数据访问行为。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1040",
    name: "第五十条 银行保险机",
    description:
      "第五十条 银行保险机构开展自动化决策分析、模型算法开发、数据标注等活动，应当保证数据处理透明度和结果公平合理。银行保险机构应当对人工智能模型开发应用进行统一管理，建立模型算法产品外部引入的准入机制，对模型研发过程进行主动管理，实现模型算法可验证、可审核、可追溯。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1041",
    name: "第五十一条 银行保险",
    description:
      "第五十一条 银行保险机构信息系统、模型算法投入使用时，应当开展数据安全审查，审查数据与模型使用的合理性、正当性、可解释性，以及数据利用对相关主体合法权益的影响、伦理道德风险及防控措施有效性等。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1042",
    name: "第五十二条 银行保险",
    description:
      "第五十二条 银行保险机构使用人工智能技术开展业务时，应当就数据对决策结果影响进行解释说明和信息披露，实时监测自动化处理与系统运行结果，建立人工智能应用的风险缓释措施，包括制定退出人工智能应用的替代方案，对安全威胁制定应急方案并开展演练。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1043",
    name: "第五十三条 银行保险",
    description:
      "第五十三条 银行保险机构在建设开放银行、金融生态或者与第三方数据合作时，要实现自身与外部的安全风险隔离，与外部机构的数据交互应当通过集中管理的外联平台或者应用程序接口实施，依据“业务必需、最小权限”原则，采取有效措施对接口设计、开发、服务、运行等进行集中安全保护管理。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1044",
    name: "第六章  个人信息保",
    description: "第六章  个人信息保护",
    adfId: "9",
    paraType: "章",
  },
  {
    id: "1045",
    name: "第五十四条 银行保险",
    description:
      "第五十四条 银行保险机构处理个人信息应当按照“明确告知、授权同意”的原则实施，法律、行政法规另有规定的除外，并在信息系统中实现相关功能控制。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1046",
    name: "第五十五条 银行保险",
    description:
      "第五十五条 银行保险机构处理个人信息应当具有明确、合理的目的，并应当与处理目的直接相关，收集个人信息应当限于实现金融业务处理目的的最小范围，不得过度收集个人信息。不得利用所收集的个人信息从事违法违规活动。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1047",
    name: "第五十六条 银行保险",
    description:
      "第五十六条 银行保险机构处理个人信息前，应当真实、准确、完整地向个人告知其个人信息的处理目的、处理方式、处理的个人信息种类、保存期限，个人行使其信息权利的申请受理和处理程序，以及法律法规规定应当告知的其他事项。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1048",
    name: "银行保险机构应当制定",
    description:
      "银行保险机构应当制定个人信息处理规则，个人信息处理规则应当公开展示、易于访问、内容明确、清晰易懂。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1049",
    name: "第五十七条 银行保险",
    description:
      "第五十七条 银行保险机构不得以个人不同意处理其个人信息或者撤回同意为由，拒绝提供产品或者服务，处理个人信息属于提供产品或者服务所必需的除外。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1050",
    name: "第五十八条 银行保险",
    description:
      "第五十八条 银行保险机构在开展涉及对个人权益有重大影响的个人信息处理活动时，应当进行个人信息保护影响评估，评估内容包括个人信息处理的合法性、必要性，对个人权益的影响及安全风险，所采取的保护措施合法性、有效性以及是否与风险程度相适应。个人信息保护影响评估报告和处理情况记录应当至少保存三年。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1051",
    name: "第五十九条 银行保险",
    description:
      "第五十九条 银行保险机构与其母行、集团，或者其子行、子公司共享个人信息，及向外部提供个人信息，应当履行向个人告知及取得其同意等相关事项的义务。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1052",
    name: "第六十条 银行保险机",
    description:
      "第六十条 银行保险机构向中华人民共和国境外提供个人信息的，除满足第五十九条规定的要求外，还应当向个人告知其向境外接收方行使信息权利的方式和程序等事项，法律、行政法规另有规定的除外。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1053",
    name: "第六十一条 银行保险",
    description:
      "第六十一条 银行保险机构委托第三方处理个人信息的，应当在合同或者协议条款内明确受托人对个人信息的保护义务、保护措施和期限等，并严格监督受托人以约定的处理目的、处理方式等处理个人信息，与第三方传输个人敏感数据必须确保安全，防范数据滥用和泄漏风险。未经银行保险机构同意，受托人不得转委托他人处理个人信息。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1054",
    name: "第六十二条 银行保险",
    description:
      "第六十二条 银行保险机构在算法设计、训练数据选择和模型生成时，应当采取有效措施，保障个人合法权益。利用个人信息进行自动化决策，应当保证决策的透明度和结果公平、公正。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1055",
    name: "第六十三条 发生或者",
    description:
      "第六十三条 发生或者可能发生个人信息泄露、篡改、丢失的，银行保险机构应当立即采取补救措施，同时通知个人并报送国家金融监督管理总局或者其派出机构。通知应当包括下列事项：",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1056",
    name: "（一）发生或者可能发",
    description:
      "（一）发生或者可能发生个人信息泄露、篡改、丢失的信息种类、原因和可能造成的危害；",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1057",
    name: "（二）银行保险机构采",
    description:
      "（二）银行保险机构采取的补救措施和个人可以采取的减轻危害的措施。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1058",
    name: "银行保险机构采取措施",
    description:
      "银行保险机构采取措施能够有效避免信息泄露、篡改、丢失造成危害的，可以不通知个人；监管部门认为可能造成危害的，有权要求银行保险机构通知个人。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1059",
    name: "第七章  数据安全风",
    description: "第七章  数据安全风险监测与处置",
    adfId: "9",
    paraType: "章",
  },
  {
    id: "1060",
    name: "第六十四条银行保险机",
    description:
      "第六十四条银行保险机构应当将数据安全风险纳入本机构全面风险管理体系，明确数据安全风险监测、风险评估、应急响应及报告、事件处置的组织架构和管理流程，有效防范和处置数据安全风险。",
    adfId: "9",
    paraType: "#N/A",
  },
  {
    id: "1061",
    name: "第六十五条 银行保险",
    description:
      "第六十五条 银行保险机构应当对数据安全威胁进行有效监测，实施监督检查，主动评估风险，防止数据篡改、破坏、泄露、非法利用等安全事件发生。监测内容包括：",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1062",
    name: "（一）超范围授权或者",
    description: "（一）超范围授权或者使用系统特权账号；",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1063",
    name: "（二）内部人员异常访",
    description: "（二）内部人员异常访问、使用数据；",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1064",
    name: "（三）对数据集中共享",
    description: "（三）对数据集中共享的系统或者平台的网络安全、数据安全威胁；",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1065",
    name: "（四）敏感级及以上数",
    description: "（四）敏感级及以上数据在不同区域的异常流动；",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1066",
    name: "（五）移动存储介质的",
    description: "（五）移动存储介质的异常使用；",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1067",
    name: "（六）外包、第三方合",
    description:
      "（六）外包、第三方合作中的数据处理异常或者数据泄露、丢失和篡改；",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1068",
    name: "（七）客户有关数据安",
    description: "（七）客户有关数据安全的投诉；",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1069",
    name: "（八）数据泄露、仿冒",
    description: "（八）数据泄露、仿冒欺诈等负面舆情；",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1070",
    name: "（九）其他可能导致数",
    description: "（九）其他可能导致数据安全事件发生的情况。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1071",
    name: "第六十六条 银行保险",
    description:
      "第六十六条 银行保险机构应当每年开展一次数据安全风险评估。审计部门应当每三年至少开展一次数据安全全面审计，发生重大数据安全事件后应当开展专项审计。银行保险机构委托专业机构进行数据安全审计时，不得使用该机构提供的产品和其他服务。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1072",
    name: "第六十七条 数据安全",
    description:
      "第六十七条 数据安全事件是指银行保险机构数据被篡改、泄露、破坏、非法获取、非法利用等，对个人或者组织合法权益、行业安全、国家安全造成负面影响的事件。根据其影响范围和程度，分为特别重大、重大、较大和一般四个事件级别。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1073",
    name: "第六十八条 银行保险",
    description:
      "第六十八条 银行保险机构应当建立数据安全事件应急管理机制，建立机构内部协调联动机制，建立服务提供商、第三方合作机构数据安全事件的报告机制，及时处置风险隐患及安全事件。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1074",
    name: "（一）制定数据安全事",
    description:
      "（一）制定数据安全事件应急预案，定期开展应急响应培训和应急演练。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1075",
    name: "（二）发生数据安全事",
    description:
      "（二）发生数据安全事件后，应当立即启动应急处置，分析事件原因、评估事件影响、开展事件定级，按照预案及时采取业务、技术等措施控制事态。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1076",
    name: "（三）建立数据安全事",
    description:
      "（三）建立数据安全事件报告机制，根据事件安全等级制定报告流程，发生数据安全事件时按照规定报告，同时按照合同、协议等有关约定履行客户及合作方告知义务。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1077",
    name: "（四）发生数据安全事",
    description:
      "（四）发生数据安全事件或者使用的网络产品和服务存在安全缺陷、漏洞时，应当立即开展调查评估，及时采取补救措施，防止危害扩大。网络产品和服务提供商存在安全缺陷、漏洞隐瞒不报的，银行保险机构应当责令其改正；未按要求整改或者造成严重后果的，应当取消其服务资格，按合同约定予以处罚，并向国家金融监督管理总局或者其派出机构报告。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1078",
    name: "第六十九条 数据安全",
    description:
      "第六十九条 数据安全事件发生2小时内，银行保险机构应当向国家金融监督管理总局或者其派出机构报告，并在事件发生后24小时内提交正式书面报告。发生特别重大数据安全事件，银行保险机构应当立即采取处置措施，按照规定及时告知用户并向属地公安机关、金融监管机构报告。银行保险机构应当每2小时将处置进展情况上报，直至处置结束。数据安全事件处置结束后，银行保险机构应当在五个工作日内将事件及其处置的评估、总结和改进报告报送属地监管部门。其他法律、行政法规对数据安全事件应急处置作出规定的，银行保险机构应当执行。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1079",
    name: "第八章  监督管理",
    description: "第八章  监督管理",
    adfId: "9",
    paraType: "章",
  },
  {
    id: "1080",
    name: "第七十条 国家金融监",
    description:
      "第七十条 国家金融监督管理总局及其派出机构对银行保险机构数据安全保护情况进行监督管理，开展非现场监管、现场检查，将数据安全管理情况纳入监管评级评估体系，依法对银行保险机构数据安全事件进行处罚和处置，实施对数据安全管理的持续监管。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1081",
    name: "第七十一条 国家金融",
    description:
      "第七十一条 国家金融监督管理总局按照国家数据分类分级要求，制定银行业保险业重要数据目录，提出核心数据目录建议，监督指导银行保险机构开展数据分类分级管理和数据保护。银行保险机构应当按要求向国家金融监督管理总局或者其派出机构报送重要数据目录。重要数据目录发生重大变化应当及时报备更新后的数据目录。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1082",
    name: "第七十二条 国家金融",
    description:
      "第七十二条 国家金融监督管理总局建立银行业保险业数据安全监测预警、通报处置机制，持续监测数据安全风险，向行业发布风险提示，制定银行业保险业数据安全事件应急预案，处置数据安全风险事件。与国家数据安全管理部门建立联防联控管理机制，实施数据安全信息共享、风险监测预警及数据安全事件处置。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1083",
    name: "第七十三条 涉及批量",
    description:
      "第七十三条 涉及批量敏感级及以上数据的数据共享、委托处理、转让交易、数据转移，银行保险机构应当在处理、合同签署前二十个工作日向国家金融监督管理总局或者其派出机构报告，法律、行政法规另有规定的除外。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1084",
    name: "第七十四条 银行保险",
    description:
      "第七十四条 银行保险机构应当于每年1月15日前向国家金融监督管理总局或者其派出机构报送上一年度数据安全风险评估报告，报告内容包括数据安全治理、技术保护、数据安全风险监测及处置措施、数据安全事件及处置情况、委托和共同处理、数据出境、数据安全评估与审查情况、数据安全相关的投诉及处理情况等。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1085",
    name: "第七十五条 国家金融",
    description:
      "第七十五条 国家金融监督管理总局及其派出机构对银行保险机构数据安全保护情况进行现场检查、事件调查，对于发现涉嫌违法违规事项的有关单位和个人，依法开展调查。现场检查、事件调查可以委托国家、行业有关专业技术机构或者审计机构予以协助。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1086",
    name: "第七十六条 银行保险",
    description:
      "第七十六条 银行保险机构违反本办法要求的，国家金融监督管理总局或者其派出机构根据其违规情况，对银行保险机构依法采取风险提示、监管谈话、监管通报、责令改正等监管措施；对涉及违规处理行为的系统或者应用，责令暂停或者终止服务；对有重大违法违规情形，或者迟报、瞒报数据安全事件和案件，或者产生重大数据安全风险、事件、案件的第三方机构进行行业通报，责令银行保险机构暂缓或者停止合作。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1087",
    name: "第七十七条 银行业金",
    description:
      "第七十七条 银行业金融机构违反本办法要求的，国家金融监督管理总局或者其派出机构可以依据《中华人民共和国银行业监督管理法》相关规定，责令银行机构改正，并处以二十万以上五十万以下罚款；情节特别严重或者逾期不改正的，可以责令停业整顿或者吊销其经营许可证。根据违规情况，可以责令银行业金融机构对直接负责的董事、高级管理人员和其他直接责任人员给予纪律处分；银行业金融机构的行为尚不构成犯罪的，对直接负责的董事、高级管理人员和其他直接责任人员给予警告，处五万元以上五十万元以下罚款；取消直接负责的董事、高级管理人员一定期限直至终身的任职资格，禁止直接负责的董事、高级管理人员和其他直接责任人员一定期限直至终身从事银行业工作。构成犯罪的，依法追究刑事责任。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1088",
    name: "保险机构违反本办法要",
    description:
      "保险机构违反本办法要求的，国家金融监督管理总局或者其派出机构可以依据《中华人民共和国保险法》相关规定，责令保险机构改正，处五万元以上三十万元以下的罚款；情节严重的，限制其业务范围、责令停止接受新业务或者吊销业务许可证。根据违规情况，对其直接负责的主管人员和其他直接责任人员给予警告，并处一万元以上十万元以下的罚款；情节严重的，撤销任职资格。构成犯罪的，依法追究刑事责任。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1089",
    name: "实施过程中如遇《中华",
    description:
      "实施过程中如遇《中华人民共和国银行业监督管理法》《中华人民共和国保险法》修订，以修订后的规定为准。",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1090",
    name: "第七十八条 中国银行",
    description:
      "第七十八条 中国银行业协会、中国保险行业协会等行业社团组织应当通过宣传、培训、自律、协调、服务等方式，协助引导会员单位提高数据安全管理水平。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1091",
    name: "第九章  附  则",
    description: "第九章  附  则",
    adfId: "9",
    paraType: "章",
  },
  {
    id: "1092",
    name: "第七十九条 本办法由",
    description: "第七十九条 本办法由国家金融监督管理总局负责解释和修订。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1093",
    name: "第八十条 国家金融监",
    description:
      "第八十条 国家金融监督管理总局批准设立的外国银行分行、其他金融机构、金融控股公司以及总局管理单位参照适用本办法。地方金融监督管理部门批准设立的金融组织参照适用本办法。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1094",
    name: "第八十一条 本办法自",
    description:
      "第八十一条 本办法自公布之日起施行，《银行保险机构数据安全办法》（银保监办发〔2022〕118号）同时废止。",
    adfId: "9",
    paraType: "条",
  },
  {
    id: "1095",
    name: "附件：数据安全事件分",
    description: "附件：数据安全事件分级",
    adfId: "9",
    paraType: "附",
  },
  {
    id: "1096",
    name: "一、特别重大数据安全",
    description: "一、特别重大数据安全事件",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1097",
    name: "1.核心数据遭到泄露",
    description: "1.核心数据遭到泄露、破坏或者非法获取、非法利用。",
    adfId: "9",
    paraType: "目",
  },
  {
    id: "1098",
    name: "2.重要数据遭到泄露",
    description:
      "2.重要数据遭到泄露、破坏或者非法获取、非法利用，对2个及以上省级区域经济运行秩序造成特别严重影响。",
    adfId: "9",
    paraType: "目",
  },
  {
    id: "1099",
    name: "3.敏感级及以上数据",
    description:
      "3.敏感级及以上数据遭到大规模泄露、破坏或者非法获取、非法利用，导致下述情形之一的：",
    adfId: "9",
    paraType: "目",
  },
  {
    id: "1100",
    name: "（1）对公共利益造成",
    description:
      "（1）对公共利益造成特别严重危害，造成特别重大经济损失，或者产生特别重大社会群体性事件；",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1101",
    name: "（2）对银行业保险业",
    description:
      "（2）对银行业保险业核心业务、系统重要性金融机构、关键信息基础设施等生产经营造成特别严重威胁或者影响，包括导致大面积业务中断、大量处理能力丧失、大面积关键信息基础设施瘫痪等。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1102",
    name: "4.其他对国家安全、",
    description:
      "4.其他对国家安全、政治安全、经济金融安全、公共利益造成特别严重影响的。",
    adfId: "9",
    paraType: "目",
  },
  {
    id: "1103",
    name: "二、重大数据安全事件",
    description: "二、重大数据安全事件",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1104",
    name: "1.重要数据遭到泄露",
    description:
      "1.重要数据遭到泄露、破坏或者非法获取、非法利用，对省级区域经济带来重大影响或者对银行保险行业安全造成影响。",
    adfId: "9",
    paraType: "目",
  },
  {
    id: "1105",
    name: "2.敏感级及以上数据",
    description:
      "2.敏感级及以上数据遭到泄露、破坏或者非法获取、非法利用，导致下述情形之一的：",
    adfId: "9",
    paraType: "目",
  },
  {
    id: "1106",
    name: "（1）对多个银行保险",
    description:
      "（1）对多个银行保险机构的业务、重要信息系统生产运营造成严重威胁或者影响，可能导致区域性或者部分金融机构的业务中断、信息系统中断、处理能力丧失等；",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1107",
    name: "（2）对公众利益造成",
    description:
      "（2）对公众利益造成严重危害，产生大范围社会负面影响，可能导致或者直接造成大面积投诉、社会群体性事件；",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1108",
    name: "（3）对多个个人或者",
    description:
      "（3）对多个个人或者组织权益造成严重影响，包括对党政机关、企事业单位、社会团体等多个组织造成严重经济或者技术损失，对生产经营秩序产生直接影响；多人财产安全受到严重危害、尊严遭受侵害等。",
    adfId: "9",
    paraType: "项",
  },
  {
    id: "1109",
    name: "3.其他对国家安全、",
    description:
      "3.其他对国家安全、经济金融安全、公共利益、个人和组织权益造成严重影响的。",
    adfId: "9",
    paraType: "目",
  },
  {
    id: "1110",
    name: "三、较大数据安全事件",
    description: "三、较大数据安全事件",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1111",
    name: "敏感级及以上数据遭到",
    description:
      "敏感级及以上数据遭到泄露、破坏或者非法获取、非法利用，导致下述情形之一的：",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1112",
    name: "1.对个人造成不可消",
    description:
      "1.对个人造成不可消除或者消除代价较大的负面影响，包括个人财产安全遭受损失或者可能产生重大损失，个人名誉尊严受到侵害，产生投诉、诉讼事件等。",
    adfId: "9",
    paraType: "目",
  },
  {
    id: "1113",
    name: "2.对组织造成不可消",
    description:
      "2.对组织造成不可消除或者消除代价较大的负面影响，包括造成或者可能造成较大经济或者技术损失，部分业务无法正常开展，声誉受到破坏等。",
    adfId: "9",
    paraType: "目",
  },
  {
    id: "1114",
    name: "3.银行保险机构自身",
    description:
      "3.银行保险机构自身部分业务无法正常开展或者本机构声誉受到破坏；银行保险机构重要信息系统安全稳定运行受到威胁或者影响，可能产生较大及以上级别的重要信息系统突发事件。",
    adfId: "9",
    paraType: "目",
  },
  {
    id: "1115",
    name: "4.其他对经济金融安",
    description:
      "4.其他对经济金融安全、公共利益造成一般影响，或者对个人和组织权益造成较大影响的。",
    adfId: "9",
    paraType: "目",
  },
  {
    id: "1116",
    name: "四、一般数据安全事件",
    description: "四、一般数据安全事件",
    adfId: "9",
    paraType: "",
  },
  {
    id: "1117",
    name: "除上述数据安全事件外",
    description:
      "除上述数据安全事件外，对组织或者个人造成一定影响的数据安全事件。",
    adfId: "9",
    paraType: "",
  },
];
