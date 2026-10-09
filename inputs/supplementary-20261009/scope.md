# Cocos Android 补充验证范围

依据当前用户启动的“实施临时方案”目标，落实确认方案第 4.1–4.6 节 open-design 与 Cocos 两项。用户允许自行准备开源素材和试点，审核采用人工＋AI，首轮使用模拟器。其他四项仍在本轮义务中，不由此包替代。

本包是最小菜单交接试点：主菜单、重置确认、静态会话预览与返回／继续。没有完整棋盘玩法、网络、商业功能或存档承诺。新设计由当前用户审核；本文件只是 Codex 整理的候选范围，不是用户已经批准。

## menu

冷启动 best=128，无会话；Continue 禁用。New game 建会话，Menu 返回，可 Continue 同一会话。取消重置保留数据，确认只清零 best，不丢失已有会话；无会话时清零后仍不可 Continue。

## lifecycle

Back 在弹窗取消、会话返回菜单、根菜单离开；存活进程 Home 后恢复原状态。进程结束后的新启动回初态。固定竖屏和英文浅色，系统字号 1.0/1.3 下不裁切；无输入框，键盘不适用。

## visual-and-resources

以实际交付的 Brief/handoff/tokens、两尺寸 HTML 参考和 Kenney CC0 PNG 为准。Cocos Scene/资源导入与原生 Android 必须实测；原型和空场景不代替运行。独立预期先固定，C01–C16 在两台设备执行共 32 项；平台和真实 CI 失败／恢复另存证据。

## authority-and-engineering

设计批准、原工程 Review/Apply、最终运行验收分别取得真实用户决定。后续采用无需求层 Standard 的当前唯一 Change Tasks，不建立新的业务调度或平行需求编号。此输入不产生 R/AC/BL，不授权产品发布。
