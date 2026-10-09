# Cocos Android 菜单设计候选

本包用于验证 open-design → 固定 UI 包 → Cocos 原生 Android 的交接。范围是菜单、重置确认和用于返回／继续的静态会话画面；不实现 2048 棋盘玩法、后端、广告、付费、音频或跨进程存档。

用户已授权准备开源素材和受控试点。本轮采用人工＋AI：Codex 在 Open Design 0.21.1 的隔离项目中制作、回读和整理候选；当前用户负责产品/UI 批准及运行验收。当前文件没有批准效力，完整 D 待用户审核。

## 实际消费者与设备

消费者为 Cocos Creator 3.8.8 / Android arm64-v8a。已用空场景核查 AGP 8.10.1、Gradle 8.13、JDK 17.0.20.1+1、NDK 28.2.13676358、CMake 3.22.1、compile/target SDK 36；这只证明工具链前提。

两台专用 Android Emulator 36.6.11 使用同一 Android 17 / API 37 镜像：`google/sdk_gphone16k_arm64/emu64a16k:17/CP31.260618.005/15731206:user/dev-keys`，arm64-v8a，16 KB 页。

| 配置 | 物理画面 | 密度 | Cocos 参考坐标 |
| --- | --- | --- | --- |
| Small Phone | 720×1280 px | 320 dpi | 宽 375、高约 666.667 UI 单位 |
| Medium Phone | 1080×2400 px | 420 dpi | 宽 375、高约 833.333 UI 单位 |

竖屏、英文、浅色。Cocos 使用 375 单位宽的等比 FIT_WIDTH 规则：物理像素 = UI 单位 × 实际渲染宽度 / 375。HTML 的两幅参考按 375×667／375×833 展示，尾差仅来自 CSS 取整。

## 行为与生命周期

冷启动 best=128，未开始会话，Continue 禁用。New game 进入静态会话画面；Menu 或 Android Back 返回菜单，Continue 可返回同一会话。Reset best score 弹出模态确认，取消不改数据，确认只把 best 变为 0，已有会话保留。重置前未开始会话时，Continue 仍禁用。重置后仍可 New game。

Android Back 先关闭重置弹窗，再由会话返回菜单；根菜单 Back 离开应用。Home 后在进程仍存活时返回，保留画面、best 和会话状态。进程被终止后的新启动回到确定性的初始状态；本次不承诺存档。

## 易用性与边界

主按钮点击区 64 UI 单位，次要 Reset best score 点击区由 44 调为 50，保证小屏至少 48 dp；每个按钮都有文字标签。游戏画布字号随画布等比缩放，不随系统 font_scale 再缩放；在系统 1.0 和 1.3 下验证不裁切。应用保持竖屏；没有文本输入，因此软键盘用例不适用。TalkBack 语义和物理真机体验未列入本次通过范围，不能由本包推定已支持。

无网络或外部字体依赖。两张 Kenney UI Pack 2.0 CC0 PNG 按原字节交付；新 D/A 不复用旧 iOS 批准。预算只检查这两张源 PNG 合计 1,570 字节及包资源完整性；模拟器帧率不作为真机性能保证。

## 审核与工程交接

独立预期在 `expected-copy.json`，详细状态、允许差异和资源落点在 `handoff.md`。这 16 项用例须在两种设备分别执行，共 32 项；浏览器自检不计入该数量。设计批准不授予工程 Apply 或最终运行验收。原工程的唯一 Tasks 在后续 Standard Change 中维护。
