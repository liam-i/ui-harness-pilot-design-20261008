# UI 工程交接：Cocos Android 菜单

范围、设备、角色和生命周期以同包 Brief 为准。本文件不维护工程任务状态。

## 稳定画面和状态

`references.html` 是可离线交互的两尺寸审核页。每个状态可直接选择，`index.html` 保留普通流程。HTML 是参考和意图说明；运行实现使用 Cocos 场景、组件与导入资源。

| screen/state | 必须呈现 | 操作与结果 |
| --- | --- | --- |
| menu/default | best 128，Continue 禁用 | 禁用点击留在当前状态；New game → session/active |
| menu/resumable | best 128，Continue 启用 | Continue 返回已有会话；New game 开始新会话 |
| menu/zero-empty | best 0，无会话，Continue 禁用 | New game 可用 |
| menu/zero-resumable | best 0，有会话，Continue 启用 | Continue 不重建会话；New game 可用 |
| dialog/reset-empty | 叠加于无会话菜单，显示 Cancel／Reset | Cancel／Android Back 保留原 best；Reset → menu/zero-empty |
| dialog/reset-resumable | 叠加于有会话菜单，显示 Cancel／Reset | Cancel／Android Back 保留原 best；Reset → menu/zero-resumable |
| session/active | Let’s begin.、2/2 静态预览、Session started.、Menu | Menu／Android Back 返回与当前 best 对应的可继续菜单 |

两种 dialog 状态的 best 沿用打开前的值（128 或 0）；已有会话标识不受重置影响。弹窗外点击被遮罩拦截，不触发底层菜单。参考页可通过 `best=0` 参数审阅已归零时的同一弹窗；不另建工程任务或业务编号。

## 呈现与适配

- `tokens.json` 固定颜色、字号、间距和控件高度，`menu.css` 保存完整参考布局。顶端内容居中，正文宽度为 min(312, 画布宽−48) UI 单位；footer 靠下且至少留 24 单位底部空白。控制区必须处于实际安全区域内。
- 可用高度 ≤700 时，顶部留白 36、计分卡下方 26、footer 顶部留白 20；更高画面分别为 70、38、42。主按钮间距 16，主按钮高度 ≥64，Reset best score 点击区 ≥50。状态切换不得残留不可见的点击遮挡。
- Cocos Canvas 使用 FIT_WIDTH，参考宽 375，按实际渲染高计算；不能将 Android 的 px、dp、Cocos UI 单位互当成同一单位。所选设备像素和换算见 Brief。
- 两张 384×128 PNG 用作 9-slice Sprite。源图切片边距 32 px，参考显示边框 16 UI 单位；中心和边按参考拉伸。文字叠加在 Sprite 上，禁用 Continue 的整体不透明度为 0.45；按压态下移 2 UI 单位，松开恢复。
- 确认弹窗为游戏内组件，最大宽 328，左右至少留 24 单位；自绘遮罩色为 ink 的 40% 不透明度。Cancel／Reset 分栏，中间间距 10，按钮高度同主按钮。弹窗不会把底层会话置空。
- 字体使用系统无衬线；Cocos Label 的字重和 glyph 来自本镜像，HTML 使用 Arial/sans-serif 作参考。标题与内容不裁切、不换掉文案；关键按钮不得重叠。

## 允许差异

| ID | 原因与边界 | 核对方式 |
| --- | --- | --- |
| SYSTEM-GLYPHS | HTML 与 Android/Cocos 的系统字体、字形和抗锯齿可不同；文案与 tokens 字号不变。相同文本框中心偏差 ≤2 UI 单位，基线偏差 ≤4，所有文字完整可见 | 两设备参考／运行截图并排检查；组件矩形与字号断言 |
| PIXEL-ROUNDING | CSS 参考高取整、Canvas 和 9-slice 的像素取整可造成边缘 ≤1 物理像素差；不允许改变间距、锚点和按钮尺寸规则 | 独立 expected 的坐标约束与截图核对 |
| OS-CHROME | 系统手势条和首次全屏提示由 OS 绘制；平台测试先正常完成首次提示，不能把被提示遮挡的截图当验收 | 运行证据保留首次提示及处理后画面，应用控制区仍须在安全区内 |

没有“任意相似”或“只要可点击”的豁免。动画、滤镜和其他视觉变化须另行审核。

## 运行资源与依赖

| 文件 | 身份／用途 | 预期落点 |
| --- | --- | --- |
| assets/menu-primary.png | Kenney Yellow/Double/button_rectangle_depth_flat.png；384×128；784 bytes；CC0 | Cocos `assets/resources/ui/menu/`，New game／Reset Sprite |
| assets/menu-secondary.png | Kenney Grey/Double/button_rectangle_depth_flat.png；384×128；786 bytes；CC0 | 同目录，Continue／Menu／Cancel Sprite |
| tokens.json | 本次 UI 输出；运行参数按工程 Design 映射 | Cocos 资源或受核对的常量，保留输入和派生摘要 |
| index.html、menu.css、menu.js、references.html | 可编辑设计源和离线交互参考，不进入产品运行依赖 | 留在设计包和审阅材料 |

工程记录资源 UUID、SpriteFrame、9-slice 配置、构建中实际加载关系和输出摘要。运行时不访问设计工具、设计包目录或活动 Change。示例中的建议落点可在工程 Design 按项目结构明确映射，不另建 runtime registry。

## 验收

`expected-copy.json` 固定 C01–C16，每台设备 16 项。包含初态、禁用、往返、确认／取消、无会话／有会话重置、恢复、Back、前后台、资源、全部状态布局、系统字号与方向。用例状态由真实输入产生，不直接改内部值替代点击；确定性冷启动数据通过明确测试启动入口准备。

截图至少覆盖七种必需状态×两种设备；确认弹窗还核对 best=0 的文字和行为。保存原生测试结果、非零数量、命令／退出码、APK 和源码身份。必需步骤缺失、零用例、失败或跳过时 CI 聚合拒绝。正向运行之外，按确认方案验证平台失败／恢复及实际新 Job 的共同输入缺失／过时拒绝。

审核人必须查看最终 D 的完整闭包。设计批准、工程规划／Apply 和实际运行验收分别按原合同留存；此文件没有替任何人作决定。
