# 2048菜单交接

## 状态和行为

menu/default显示2048、MENU、NEW GAME、RESET BEST SCORE及Swipe down to return。通过原棋盘menuButton打开；向下滑动关闭，不添加新的关闭规则。原棋盘是上下文，不在本包重画。

menu/confirm-reset在同一菜单上呈现原生SwiftUI Alert，原文Are you sure you want to erase your best score?；Cancel回菜单，Yeah, whatever沿原回调清最高分并关闭菜单。不得提前清分。NEW GAME调用原reset并关闭菜单。game/board表示关闭后的原棋盘，具体状态由独立expected判定。

图中的确认框仅说明层级、文案和操作位置；实际系统Alert的宽度、换行、字体、颜色及按钮排列由iOS27处理，不用位图替换原生组件。它不是棋盘或原生运行截图。

## 布局、资源与预算

菜单背景#F8F5EB，深绿字#243A34，次级字#657168。sheet可用区域内：顶栏为2048与MENU；中间两个按钮竖排、间隔16pt；底部13pt关闭提示。用上下弹性空间适应高度，内容位于系统safe area内。标题52pt rounded black，按钮19pt rounded bold。横向24pt边距；按钮宽min(312,可用宽-48)pt、高64pt。两尺寸都不能裁切文字或触点。按钮有效区域等于整个64pt矩形。

assets/menu-primary.png与menu-secondary.png各384×128px、@2x；按tokens的16pt capInsets九宫格伸缩，只拉中段，保留边缘。运行时导入Assets.xcassets的独立imageset，menu组件实际引用；tokens.json导入Bundle。原ActionButton供其他画面继续使用，避免菜单视觉外溢到GameOver。

runtime两PNG合计≤64KiB，解码RGBA合计≤1MiB，tokens≤16KiB。无新字体/循环动画；沿系统sheet/alert转场。不将参考SVG/HTML加入应用；运行资源脱离design目录仍可运行。

## 适用限制与验收

浅色、英文、默认字号、SE3与17 Pro竖屏。系统sheet的位置、圆角、安全区、状态栏、Alert和字体渲染与示意不同属于平台允许差异；菜单本体tokens、按钮顺序、文案和回调不得擅改。无横屏/其他字号/VoiceOver全覆盖/真机性能承诺。

按manifest固定的expected逐条运行，尤其取消不清分、确认只清最高分、New Game保留最高分与重置棋盘。原eraseBestScore后未来更新/重启按当前分数重建best的规则保留。每条期望写在实施之前，不能根据运行结果改答案。
