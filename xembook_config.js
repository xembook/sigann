
const EXPLORER = "http://explorer.symbolblockchain.io";
const TEST_EXPLORER = "http://explorer.testnet.symboldev.network";

const ACTIVE_IMPORTANCE_RATE = 0.28367041;

const TEST_NODES = [

//"https://119-47-17-86.catv296.ne.jp:3001",
"https://xym-node.xyz:3001",
"https://sushi-testnet.sakurairo.tokyo:3001",
"https://symbol-testnet.kintech-research.com:3001",
"https://sym-test-01.opening-line.jp:3001",
"https://sym-test-02.opening-line.jp:3001",
"https://sym-test-03.opening-line.jp:3001",
"https://sym-test-04.opening-line.jp:3001",
"https://sym-test-05.opening-line.jp:3001",
"https://sym-test-06.opening-line.jp:3001",
"https://sym-test-07.opening-line.jp:3001",
"https://sym-test-08.opening-line.jp:3001",
"https://sym-test-09.opening-line.jp:3001",
"https://sym-test-10.opening-line.jp:3001",
"https://sym-test.opening-line.jp:3001",
"https://35kx.c.time4vps.cloud:3001",
"https://373t.c.time4vps.cloud:3001",
"https://35oc.c.time4vps.cloud:3001",
];


const NG_NODES = [
"https://0-0-0-0-0-0-0-0-0.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-1.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-2.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-3.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-4.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-5.tokyo-node.fun:3001",
"https://0-0-0-0-0-0-0-0-5.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-6.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-7.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-8.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-9.tokyo-node.fun:3001",
"https://0-0-0-0-0-0-0-0-9.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0.tokyo-node.fun:3001",
"https://0-0-0-0-0-0-0-0.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-1.tokyo-node.fun:3001",
"https://0-0-0-0-0-0-0-1.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-2.tokyo-node.fun:3001",
"https://0-0-0-0-0-0-0-2.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-3.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-4.tokyo-node.fun:3001",
"https://0-0-0-0-0-0-0-4.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-5.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-6.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-7.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-8.tokyo-node.fun:3001",
"https://0-0-0-0-0-0-0-8.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-9.tokyo-node.fun:3001",
"https://0-0-0-0-0-0-0-9.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-0.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-1.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-2.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-3.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-4.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-5.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-6.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-7.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-8.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-9.tokyo-node.jp:3001",
"https://0-0-0-0-0-3.symbol-node.work:3001",
"https://xym.jp1.node.leywapool.com:3001",
"https://xym.jp5.node.leywapool.com:3001",
"https://xym.jp2.node.leywapool.com:3001",
"https://01.symbol-node.work:3001",
"https://02.symbol-node.work:3001",
"https://03.symbol-node.work:3001",
"https://0-0-0-0-0.symbol-nodes.jp:3001",
"https://0-0-0-0-1.symbol-nodes.jp:3001",
"https://0-0-0-0-2.symbol-nodes.jp:3001",
"https://0-0-0-0-3.symbol-nodes.jp:3001",
"https://0-0-0-0-4.symbol-nodes.jp:3001",
"https://0-0-0-0-5.symbol-nodes.jp:3001",
"https://0-0-0-0.symbol-nodes.jp:3001",
"https://0-0-0-1.symbol-nodes.jp:3001",
"https://0-0-0-2.symbol-nodes.jp:3001",
"https://0-0-0-3.symbol-nodes.jp:3001",
"https://0-0-0-4.symbol-nodes.jp:3001",
"https://0-0-0-5.symbol-nodes.jp:3001",
"https://0-a.symbol-nodes.jp:3001",
"https://0-b.symbol-nodes.jp:3001",
"https://0-c.symbol-nodes.jp:3001",
"https://0-0-0-0-0-0-0.harvesting.fan:3001",
"https://0-0-0-0-0-0-1.harvesting.fan:3001",
"https://0-0-0-0-0-0-2.harvesting.fan:3001",
"https://0-0-0-0-0-0-3.harvesting.fan:3001",
"https://0-0-0-0-0-0-4.harvesting.fan:3001",
"https://0-0-0-0-0-0-5.harvesting.fan:3001",
"https://0-0-0-0-0-0.harvesting.fan:3001",
"https://0-0-0-0-0-1.harvesting.fan:3001",
"https://0-0-0-0-0-2.harvesting.fan:3001",
"https://0-0-0-0-0-3.harvesting.fan:3001",
"https://0-0-0-0-0-4.harvesting.fan:3001",
"https://0-0-0-0-0-5.harvesting.fan:3001",
"https://0-0-0-0-0-6.harvesting.fan:3001",
"https://0-0-0-0-0-7.harvesting.fan:3001",
"https://0-0-0-0-0-8.harvesting.fan:3001",
"https://0-0-0-0-0-9.harvesting.fan:3001",
"https://symbol-tools.com:3001",
"https://01.symbol-farm.tokyo:3001",

];
const NODES = [

"https://node.xembook.net",
"https://a.symbol.lcnem.net",

"https://ik1-432-48199.vs.sakura.ne.jp:3001",
"https://3cot.c.time4vps.cloud:3001",
"https://xym.jp1.node.leywapool.com:3001",
"https://xym.jp2.node.leywapool.com:3001",
"https://xym.jp5.node.leywapool.com:3001",
"https://symbol-node.harvest-xym.com:3001",
"https://0-0symbol-node1.trivill.com:3001",
"https://0-0-0-0-0-0-0-0-0-0.quantum-zero.com:3001",
"https://0-0-0-0-0-0-0-0.xym.symbol-garden.tokyo:3001",
"https://0.xym.stakeme.tokyo:3001",
"https://symderella-castle.net:3001",
"https://00715c1f.xym.stir-hosyu.com:3001",
"https://ik1-305-12844.vs.sakura.ne.jp:3001",
"https://sn2.msus-symbol.com:3001",
"https://sn1.msus-symbol.com:3001",
"https://raharu-symbol-node-01.com:3001",
"https://main-1.symbol-harvesting.jp:3001",
"https://01.symsym.info:3001",
"https://02.symsym.info:3001",
"https://0-0.tokyo.symbol-nodes.jp:3001",
"https://0-0-0-0-0-0-0-0-0.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-1.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-2.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-3.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-4.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-5.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-6.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-7.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-8.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-9.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-1.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-2.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-3.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-4.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-5.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-6.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-7.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-8.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-9.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0.harvesting.fan:3001",
"https://0-0-0-0-0-0-1.harvesting.fan:3001",
"https://0-0-0-0-0-0-2.harvesting.fan:3001",
"https://0-0-0-0-0-0-3.harvesting.fan:3001",
"https://0-0-0-0-0-0-4.harvesting.fan:3001",
"https://0-0-0-0-0-0-5.harvesting.fan:3001",
"https://0-0-0-0-0-0.harvesting.fan:3001",
"https://0-0-0-0-0-1.harvesting.fan:3001",
"https://0-0-0-0-0-2.harvesting.fan:3001",
"https://0-0-0-0-0-3.harvesting.fan:3001",
"https://0-0-0-0-0-4.harvesting.fan:3001",
"https://0-0-0-0-0-5.harvesting.fan:3001",
"https://0-0-0-0-0-6.harvesting.fan:3001",
"https://0-0-0-0-0-7.harvesting.fan:3001",
"https://0-0-0-0-0-8.harvesting.fan:3001",
"https://0-0-0-0-0-9.harvesting.fan:3001",
"https://0-0-0-0-0.symbol-nodes.jp:3001",
"https://0-0-0-0-1.symbol-nodes.jp:3001",
"https://0-0-0-0-2.symbol-nodes.jp:3001",
"https://0-0-0-0-3.symbol-nodes.jp:3001",
"https://0-0-0-0-4.symbol-nodes.jp:3001",
"https://0-0-0-0-5.symbol-nodes.jp:3001",
"https://0-0-0-0.symbol-nodes.jp:3001",
"https://0-0-0-1.symbol-nodes.jp:3001",
"https://0-0-0-2.symbol-nodes.jp:3001",
"https://0-0-0-3.symbol-nodes.jp:3001",
"https://0-0-0-4.symbol-nodes.jp:3001",
"https://0-0-0-5.symbol-nodes.jp:3001",
"https://0-a.symbol-nodes.jp:3001",
"https://0-b.symbol-nodes.jp:3001",
"https://0-c.symbol-nodes.jp:3001",
"https://0.symsym.info:3001",
"https://00.alpaca.symbolist.jp:3001",
"https://00.bison.symbolist.jp:3001",
"https://00.cow.symbolist.jp:3001",
"https://00.dragon.symbolist.jp:3001",
"https://00.elephant.symbolist.jp:3001",
"https://00.fushicho.symbolist.jp:3001",
"https://00.gorilla.symbolist.jp:3001",
"https://00.high-performance.symbol-nodes.com:3001",
"https://00.hippopotamus.symbolist.jp:3001",
"https://00.symsym.info:3001",
"https://super-harvester.com:3001",
"https://03.symsym.info:3001",
"https://04.symsym.info:3001",
"https://0-0-0-0-0-0-0-0-0-0-0-0.stable-node.cf:3001",
"https://xxx-welcome-to-a-powerful-node.com:3001",
"https://node1.xym-harvesting.com:3001",
"https://node2.xym-harvesting.com:3001",
"https://59026db.xym.gakky.net:3001",
"https://ls1.rellc.jp:3001",
"https://888.symsym.info:3001",
"https://umekichi-node.com:3001",
"https://xym.idol-library.jp:3001",
"https://age01.kitsutsuki.tokyo:3001",
"https://age02.kitsutsuki.tokyo:3001",
"https://ahra-symbol.com:3001",
"https://31700.xym.stir-hosyu.com:3001",
"https://cryptocat-xym-node2.com:3001",
"https://ik1-332-26240.vs.sakura.ne.jp:3001",
"https://02.symbol-node.net:3001",
"https://00.symbol-node.net:3001",
"https://23167.xym.stir-hosyu.com:3001",
"https://0-0-0-0-0-0-0-0-0-0-0-0-0-beverly-hills.rich-harvesters.club:3001",
"https://07.symbol-node.net:3001",
"https://006symbol.open-nodes.com:3001",
"https://sym-main.daoka.tk:3001",
"https://0-0-2symbol.open-nodes.com:3001",
"https://node1.ahyk.net:3001",
"https://harvesting-sweet-potatoes.com:3001",
"https://harvesting-sweet-potatoes.club:3001",
"https://007symbol.open-nodes.com:3001",
"https://000symbol.open-nodes.com:3001",
"https://08.symbol-node.net:3001",
"https://001-xym-hainetu.com:3001",
"https://harukaze.symbol-nem.net:3001",
"https://symbol-harvesting.tokyo:3001",
"https://00.harvester.earth:3001",
"https://009symbol.open-nodes.com:3001",
"https://001symbol.open-nodes.com:3001",
"https://kawaii-xym-harvest-01.tokyo:3001",
"https://09.symbol-node.net:3001",
"https://001symbol.blockchain-node.tech:3001",
"https://0-0-0-0-0-0-0-0-0-0-0-0-0-las-vegas.rich-harvesters.club:3001",
"https://symbol-harvesting.com:3001",
"https://003symbol.open-nodes.com:3001",
"https://symbol-from-nem.com:3001",
"https://harvest-02.symbol.farm:3001",
"https://harvest-01.symbol.farm:3001",
"https://harvest-03.symbol.farm:3001",
"https://symbol-node.xyz:3001",
"https://symbol.harvest-festival.net:3001",
"https://05.symbol-node.net:3001",
"https://nem1.kitsutsuki.tokyo:3001",
"https://nem-enako-1.com:3001",
"https://keshet02-symbol-paradise.com:3001",
"https://keshet01-symbol-paradise.com:3001",
"https://keshet03-symbol-paradise.com:3001",
"https://0-0-2.symbol-nodes.net:3001",
"https://00B3424A.xym.stir-hosyu.com:3001",
"https://30153.xym.stir-hosyu.com:3001",
"https://03.symbol-node.net:3001",
"https://paotan01.momotapo.com:3001",
"https://paotan02.momotapo.com:3001",
"https://paotan03.momotapo.com:3001",
"https://119-47-17-86.catv296.ne.jp:3001",
"https://zzz-symbol.link:3001",
"https://06.symbol-node.net:3001",
"https://04.symbol-node.net:3001",
"https://harvest-xym.uplandracetrack.com:3001",
"https://symbol-node.net:3001",
"https://z.c-fort.com:3001",
"https://ik1-449-56512.vs.sakura.ne.jp:3001",
"https://symbol.autoexec.jp:3001",
"https://shikinami.starlight.tokyo:3001",
"https://00fabf14.xym.stir-hosyu.com:3001",
"https://node.sixis.xyz:3001",
"https://little.sixis.xyz:3001",
"https://62828.xym.stir-hosyu.com:3001",
"https://00918d40.xym.stir-hosyu.com:3001",
"https://00D0576B.xym.stir-hosyu.com:3001",
"https://00ceb4b9.xym.stir-hosyu.com:3001",
"https://19902.xym.stir-hosyu.com:3001",
"https://32434.xym.stir-hosyu.com:3001",
"https://64519.xym.stir-hosyu.com:3001",
"https://33603.xym.stir-hosyu.com:3001",
"https://858954.xym.stir-hosyu.com:3001",
"https://26760.xym.stir-hosyu.com:3001",
"https://21438.xym.stir-hosyu.com:3001",
"https://14493.xym.stir-hosyu.com:3001",
"https://00f3bf88.xym.stir-hosyu.com:3001",
"https://00d93448.xym.stir-hosyu.com:3001",
"https://01.symbol-node.net:3001",
"https://14601.xym.stir-hosyu.com:3001",
"https://0-0-0-highspeed01.surgestar.com:3001",
"https://0-0-0-aaatriple.surgestar.com:3001",
"https://0-0-0-tokyo2.surgestar.com:3001",
"https://sushi.sakurairo.tokyo:3001",
"https://0-0-0-0-0-0-0-0-0-0-0.symbol-nodes.jp:3001",
"https://0-0-0-0-0-0-0-0-0-0-1.symbol-nodes.jp:3001",
"https://0-0-0-0-0-0-0-0-0-0-2.symbol-nodes.jp:3001",
"https://0-0-0-0-0-0-0-0-0-0-3.symbol-nodes.jp:3001",
"https://0-0-0-0-0-0-0-0-0-0-4.symbol-nodes.jp:3001",
"https://0-0-0-0-0-0-0-0-0-0-5.symbol-nodes.jp:3001",
"https://0-0-0-0-0-0-0-0-0-0-6.symbol-nodes.jp:3001",
"https://0-0-0-0-0-0-0-0-0-0-7.symbol-nodes.jp:3001",
"https://0-0-0-0-0-0-0-0-0-0-8.symbol-nodes.jp:3001",
"https://0-0-0-0-0-0-0-0-0-0-9.symbol-nodes.jp:3001",
"https://00ffd768.xym.stir-hosyu.com:3001",
"https://0-0-0-0-take-symbolnode01.work:3001",
"https://test01.nem-galaxy.com:3001",
"https://0-0-5symbol.open-nodes.com:3001",
"https://nem.symbol-supernode.com:3001",
"https://0-0-0-0-0-0-0-0-0-0.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-1.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-2.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-3.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-4.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-5.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-6.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-7.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-8.tokyo-node.jp:3001",
"https://0-0-0-0-0-0-0-0-0-9.tokyo-node.jp:3001",
"https://ik1-426-45178.vs.sakura.ne.jp:3001",
"https://ik1-421-42893.vs.sakura.ne.jp:3001",
"https://008symbol.open-nodes.com:3001",
"https://laukas.domai-max.com:3001",
"https://004symbol.open-nodes.com:3001",
"https://xymtokyo.harvest-node.net:3001",
"https://00A06705.xym.stir-hosyu.com:3001",
"https://yukikaze.symbol-nem.net:3001",
"https://ik1-432-48497.vs.sakura.ne.jp:3001",
"https://symbol01.harvestasya.com:3001",
"https://0-0-0-0-0-aaron.surgestar.com:3001",
"https://0-0-0-sevengods.surgestar.com:3001",
"https://0-0-0-ebisu.surgestar.com:3001",
"https://0-0-xym.cubkab-crypto.tokyo:3001",
"https://0-0-axym.cubkab-crypto.tokyo:3001",
"https://aiteruyo.jp:3001",
"https://0-0-0-akmr-symbol.com:3001",
"https://ik1-427-45769.vs.sakura.ne.jp:3001",
"https://amaterasu-01.kamigami.jp:3001",
"https://amaterasu-02.kamigami.jp:3001",
"https://dual-1.nodes-xym.work:3001",
"https://symbol.harvest-monitor.com:3001",
"https://symbol-02.harvest-monitor.com:3001",
"https://node.xymfarm.com:3001",
"https://0-0-0-0-harv-sara-01.net:3001",
"https://0-0-0-0-harv-sara-02.net:3001",
"https://symbol.shizuilab.com:3001",
"https://35665.xym.stir-hosyu.com:3001",
"https://yuna.keshet.finance:3001",
"https://symbol.kintech-research.com:3001",
"https://00ffd3e4.xym.stir-hosyu.com:3001",
"https://001.blacktree.work:3001",
"https://41506.xym.stir-hosyu.com:3001",
"https://sn.newecosym.com:3001",
"https://symbol-sakura-16.next-web-technology.com:3001",
"https://symbol.nuaka.net:3001",
"https://00c32942.xym.stir-hosyu.com:3001",
"https://28387.xym.stir-hosyu.com:3001",
"https://symbol-node02.widepinetree.com:3001",
"https://0-0-0-0-rina-xym.mydns.jp:3001",
"https://16948.xym.stir-hosyu.com:3001",
"https://17107.xym.stir-hosyu.com:3001",
"https://23639.xym.stir-hosyu.com:3001",
"https://sym-main-01.opening-line.jp:3001",
"https://sym-main-02.opening-line.jp:3001",
"https://sym-main-03.opening-line.jp:3001",
"https://sym-main-04.opening-line.jp:3001",
"https://sym-main-05.opening-line.jp:3001",
"https://sym-main-06.opening-line.jp:3001",
"https://sym-main-07.opening-line.jp:3001",
"https://sym-main-08.opening-line.jp:3001",
"https://sym-main-09.opening-line.jp:3001",
"https://sym-main-10.opening-line.jp:3001",
"https://sym-main-11.opening-line.jp:3001",
"https://sym-main.opening-line.jp:3001",
"https://symbol-node-01.kokichi.tokyo:3001",
"https://symbol-tools.com:3001",
"https://symbol.from.nagoya:3001",
"https://50038.xym.stir-hosyu.com:3001",
"https://7338.work:3001",
"https://27423.xym.stir-hosyu.com:3001",
"https://angel.vistiel-arch.jp:3001",
"https://0sn.xyz:3001",
"https://yumeloto.com:3001",
"https://yumeya1.com:3001",

].filter(word => !NG_NODES.includes(word));

const JP_NODES = [
"https://ik1-432-48199.vs.sakura.ne.jp:3001",
"https://xym.jp1.node.leywapool.com:3001",
"https://xym.jp2.node.leywapool.com:3001",
"https://xym.jp5.node.leywapool.com:3001",
"https://0-0symbol-node1.trivill.com:3001",
"https://0-0-0-0-0-0-0-0.xym.symbol-garden.tokyo:3001",
"https://0.xym.stakeme.tokyo:3001",
"https://symderella-castle.net:3001",
"https://ik1-305-12844.vs.sakura.ne.jp:3001",
"https://sn1.msus-symbol.com:3001",
"https://main-1.symbol-harvesting.jp:3001",
"https://0-0.tokyo.symbol-nodes.jp:3001",
"https://xxx-welcome-to-a-powerful-node.com:3001",
"https://node1.xym-harvesting.com:3001",
"https://node2.xym-harvesting.com:3001",
"https://59026db.xym.gakky.net:3001",
"https://ls1.rellc.jp:3001",
"https://umekichi-node.com:3001",
"https://xym.idol-library.jp:3001",
"https://age01.kitsutsuki.tokyo:3001",
"https://age02.kitsutsuki.tokyo:3001",
"https://ahra-symbol.com:3001",
"https://31700.xym.stir-hosyu.com:3001",
"https://cryptocat-xym-node2.com:3001",
"https://ik1-332-26240.vs.sakura.ne.jp:3001",
"https://02.symbol-node.net:3001",
"https://00.symbol-node.net:3001",
"https://23167.xym.stir-hosyu.com:3001",
"https://0-0-0-0-0-0-0-0-0-0-0-0-0-beverly-hills.rich-harvesters.club:3001",
"https://07.symbol-node.net:3001",
"https://006symbol.open-nodes.com:3001",
"https://0-0-2symbol.open-nodes.com:3001",
"https://harvesting-sweet-potatoes.com:3001",
"https://007symbol.open-nodes.com:3001",
"https://000symbol.open-nodes.com:3001",
"https://08.symbol-node.net:3001",
"https://symbol-harvesting.tokyo:3001",
"https://00.harvester.earth:3001",
"https://009symbol.open-nodes.com:3001",
"https://001symbol.open-nodes.com:3001",
"https://kawaii-xym-harvest-01.tokyo:3001",
"https://09.symbol-node.net:3001",
"https://001symbol.blockchain-node.tech:3001",
"https://0-0-0-0-0-0-0-0-0-0-0-0-0-las-vegas.rich-harvesters.club:3001",
"https://symbol-harvesting.com:3001",
"https://003symbol.open-nodes.com:3001",
"https://symbol-from-nem.com:3001",
"https://harvest-01.symbol.farm:3001",
"https://symbol-node.xyz:3001",
"https://symbol.harvest-festival.net:3001",
"https://05.symbol-node.net:3001",
"https://nem1.kitsutsuki.tokyo:3001",
"https://nem-enako-1.com:3001",
"https://keshet02-symbol-paradise.com:3001",
"https://keshet01-symbol-paradise.com:3001",
"https://keshet03-symbol-paradise.com:3001",
"https://0-0-2.symbol-nodes.net:3001",
"https://00B3424A.xym.stir-hosyu.com:3001",
"https://30153.xym.stir-hosyu.com:3001",
"https://03.symbol-node.net:3001",
"https://paotan01.momotapo.com:3001",
"https://119-47-17-86.catv296.ne.jp:3001",
"https://zzz-symbol.link:3001",
"https://06.symbol-node.net:3001",
"https://04.symbol-node.net:3001",
"https://harvest-xym.uplandracetrack.com:3001",
"https://symbol-node.net:3001",
"https://ik1-449-56512.vs.sakura.ne.jp:3001",
"https://symbol.autoexec.jp:3001",
"https://shikinami.starlight.tokyo:3001",
"https://00fabf14.xym.stir-hosyu.com:3001",
"https://node.sixis.xyz:3001",
"https://little.sixis.xyz:3001",
"https://62828.xym.stir-hosyu.com:3001",
"https://00918d40.xym.stir-hosyu.com:3001",
"https://00D0576B.xym.stir-hosyu.com:3001",
"https://00ceb4b9.xym.stir-hosyu.com:3001",
"https://19902.xym.stir-hosyu.com:3001",
"https://32434.xym.stir-hosyu.com:3001",
"https://64519.xym.stir-hosyu.com:3001",
"https://33603.xym.stir-hosyu.com:3001",
"https://858954.xym.stir-hosyu.com:3001",
"https://26760.xym.stir-hosyu.com:3001",
"https://21438.xym.stir-hosyu.com:3001",
"https://14493.xym.stir-hosyu.com:3001",
"https://00f3bf88.xym.stir-hosyu.com:3001",
"https://00d93448.xym.stir-hosyu.com:3001",
"https://01.symbol-node.net:3001",
"https://14601.xym.stir-hosyu.com:3001",
"https://0-0-0-highspeed01.surgestar.com:3001",
"https://0-0-0-aaatriple.surgestar.com:3001",
"https://0-0-0-tokyo2.surgestar.com:3001",
"https://sushi.sakurairo.tokyo:3001",
"https://00ffd768.xym.stir-hosyu.com:3001",
"https://0-0-0-0-take-symbolnode01.work:3001",
"https://0-0-5symbol.open-nodes.com:3001",
"https://nem.symbol-supernode.com:3001",
"https://ik1-426-45178.vs.sakura.ne.jp:3001",
"https://ik1-421-42893.vs.sakura.ne.jp:3001",
"https://008symbol.open-nodes.com:3001",
"https://laukas.domai-max.com:3001",
"https://004symbol.open-nodes.com:3001",
"https://xymtokyo.harvest-node.net:3001",
"https://00A06705.xym.stir-hosyu.com:3001",
"https://yukikaze.symbol-nem.net:3001",
"https://ik1-432-48497.vs.sakura.ne.jp:3001",
"https://symbol01.harvestasya.com:3001",
"https://0-0-0-0-0-aaron.surgestar.com:3001",
"https://0-0-0-sevengods.surgestar.com:3001",
"https://0-0-0-ebisu.surgestar.com:3001",
"https://0-0-xym.cubkab-crypto.tokyo:3001",
"https://0-0-axym.cubkab-crypto.tokyo:3001",
"https://0-0-0-akmr-symbol.com:3001",
"https://ik1-427-45769.vs.sakura.ne.jp:3001",
"https://dual-1.nodes-xym.work:3001",
"https://symbol.harvest-monitor.com:3001",
"https://symbol-02.harvest-monitor.com:3001",
"https://node.xymfarm.com:3001",
"https://0-0-0-0-harv-sara-01.net:3001",
"https://0-0-0-0-harv-sara-02.net:3001",
"https://35665.xym.stir-hosyu.com:3001",
"https://yuna.keshet.finance:3001",
"https://00ffd3e4.xym.stir-hosyu.com:3001",
"https://001.blacktree.work:3001",
"https://41506.xym.stir-hosyu.com:3001",
"https://symbol-sakura-16.next-web-technology.com:3001",
"https://symbol.nuaka.net:3001",
"https://28387.xym.stir-hosyu.com:3001",
"https://symbol-node02.widepinetree.com:3001",
"https://0-0-0-0-rina-xym.mydns.jp:3001",
"https://16948.xym.stir-hosyu.com:3001",
"https://17107.xym.stir-hosyu.com:3001",
"https://23639.xym.stir-hosyu.com:3001",
"https://sym-main-01.opening-line.jp:3001",
"https://sym-main-02.opening-line.jp:3001",
"https://sym-main-03.opening-line.jp:3001",
"https://sym-main-04.opening-line.jp:3001",
"https://sym-main-05.opening-line.jp:3001",
"https://sym-main-06.opening-line.jp:3001",
"https://sym-main-07.opening-line.jp:3001",
"https://sym-main-08.opening-line.jp:3001",
"https://sym-main-09.opening-line.jp:3001",
"https://sym-main-10.opening-line.jp:3001",
"https://sym-main.opening-line.jp:3001",
"https://symbol-node-01.kokichi.tokyo:3001",
"https://symbol-tools.com:3001",
"https://50038.xym.stir-hosyu.com:3001",
"https://7338.work:3001",
"https://27423.xym.stir-hosyu.com:3001",
"https://angel.vistiel-arch.jp:3001",
"https://0sn.xyz:3001",
"https://yumeloto.com:3001",
"https://yumeya1.com:3001",

].filter(word => !NG_NODES.includes(word));

