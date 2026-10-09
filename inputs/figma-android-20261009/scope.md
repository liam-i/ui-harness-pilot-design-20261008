# Figma → 独立 Android App 补充范围候选

落实已确认补充方案第 4.1–4.6 节中的 Figma 读取、Figma 写入与原生 Android App。用户已授权新建专用 Figma 草稿并确认登录；AI 制作，当前用户审阅。制作、读取和原生消费各自保存证据，不把其中一项通过推导成其余项目通过。

## menu

冷启动 best=128、无会话，Continue 禁用。New game 建立会话并显示静态 2×2 预览，两个格为 2、两个为空；Menu 返回菜单，Continue 恢复同一会话。Reset best score 打开模态确认框，Cancel 不改数据；Reset 只清零 best，保留既有会话。无会话时清零不启用 Continue，但仍可 New game；有会话清零后仍可 Continue。

菜单有 best=128/0 与会话有/无的四个状态；确认框复用当前菜单数据；会话页保留本轮 best 值。返回、取消不能把零分改回 128，也不能隐式建立新会话。没有完整 2048 玩法、持久化、账号、网络、广告、音频或额外产品功能。

## lifecycle

Android Back 在模态框取消、在会话页回菜单、在根菜单离开前台。进程仍存活的 Home/返回保留当前状态；真正新进程回初态。竖屏、英文浅色；字号 1.0/1.3 不裁切、不整页缩小。无输入框，键盘不适用。

## visual-and-resources

以实际 Figma 导出的固定参考、源文件、tokens、原始图标和明确状态参数交付。开发单位 dp/sp；两台模拟器分别 720×1280/density 320 与 1080×2400/density 420，API 整数 37、ARM64、16 KB 页。屏幕外框包含系统栏示意，产品内容须按真实 WindowInsets 保持安全区。

原生可访问名称、禁用和模态语义属于本轮义务；自动树检查不等于完成真人 TalkBack 听读。没有物理真机、完整无障碍认证或生产性能保证。素材限本草稿新画的矢量图标，无外部字体或链接媒体运行依赖；不自行增加性能阈值。

## authority-and-engineering

新单元 UI-FIGMA-ANDROID-MENU/U001 先固定完整内容 D，实际用户批准后才保存 A、发布。本文件只是整理的候选输入，不能代替人审。原来的 Cocos/iOS 批准不覆盖此包。

工程沿无需求层 Standard、原 Review/Apply、唯一 OpenSpec Change Tasks；不建立 R/AC/BL 或平行实现清单。先固定独立 A01–A16 × 两设备的行为预期，工程 Review 再确定准确驱动、断言和超时。真实构建/模拟器/CI、平台失败阻断与恢复、共同输入拒绝、运行人审及归档仍须实际完成。

Unity 仍是六项选择之一，当前用户没有许可；待具备可用许可及目标兼容性后接续。它不会被 Figma/Android 或已完成的 Cocos 结果覆盖。
