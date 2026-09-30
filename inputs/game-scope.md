# 手游试点需求输入

来源：用户授权使用开源手游与素材进行限定试点；固定源码及Kenney归档见sources.json。模式B由Codex制作本地设计，当前用户最终确认。

纳入2048的MENU sheet、NEW GAME、RESET BEST SCORE及其原生确认/取消；保留原入口、向下滑动关闭、重开游戏和确认逻辑。仅改菜单视觉及必要资源，不改棋盘、计分、合并、撤销、游戏结束、存储或后台行为。保持原英文按钮和确认文字，不新增关卡、设置或退出规则。

MenuView仍为SwiftUI sheet，状态/回调接现有GameView与GameViewModel。NEW GAME重置本局、分数0、创建原规则的一块2或4、保留最高分并关闭菜单。RESET BEST SCORE只打开原生Alert；Cancel保留状态并返回菜单；Yeah, whatever执行原eraseBestScore并关闭菜单，当下最高分0、本局棋盘与分数不变。原模型下一次更新/重启可按当前分数重建最高分，本轮不改变这条已有存储语义。

环境与App相同：iOS27.0 Simulator、SE3与17 Pro竖屏、英文、默认字号、浅色。菜单适应sheet可用宽高，内边距24pt、按钮宽min(312,可用宽-48)pt、高64pt、垂直间距16pt；系统sheet安全区和系统Alert随OS绘制。按钮使用Kenney2.0 CC0九宫格拉伸资源，不拉伸文字/图标；系统rounded字体，无新字体包。菜单不新增循环动画，保持系统sheet/alert动画。

新增runtime PNG合计≤64KiB，解码尺寸合计≤1MiB；tokens≤16KiB。在两尺寸实际验证无缺图、无切边/文字重叠，触点与按钮一致，确认/取消返回正确。无新的帧率承诺，不把模拟器截图声称为真机性能。VoiceOver全覆盖、其他字号、横屏、Android、Unity/Cocos图集不属于本轮承诺。

独立expected见game-expected.json。运行验收需固定可重现棋盘/分数数据，原单元测试核回归，实际原生点击核菜单行为；不使用随机滑动偶然成功代替确定断言。宿主测试辅助只服务隔离试点，不改变生产规则。
