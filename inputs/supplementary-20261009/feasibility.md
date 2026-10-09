# 候选目标可行性记录

Cocos Creator 3.8.8 已在隔离工程导出 Android 空场景，AGP 8.10.1 / Gradle 8.13 / JDK 17.0.20.1+1 / NDK 28.2.13676358 / CMake 3.22.1 / compile-target SDK 36 的原生构建实际退出 0，APK 74,204,059 bytes，SHA-256 b09e11071613e56c0fb4e33d5011fcd00ea893e2c4d7c0a002dcf201bf0ab361。模板 wrapper 为 8.11.1，此实测明确使用隔离 Gradle 8.13。

两台专用 Android 17/API 37 arm64-v8a/16 KB 页模拟器已安装启动，并记录 db://assets/scenes/Preflight.scene 加载成功。首次全屏提示尚须在实际测试正常处理。设备端 UI 验收用例为 0，不能据此判平台通过。

默认 iOS 工程无可执行文件，选官方 M1 库后又在 Xcode 27 遇到 Enoki 编译错误；这些失败保留，不以关闭错误修复。本轮依确认方案选已实查 Android 目标。

新菜单尚未工程实现。Scene/SpriteFrame/UUID 映射、真实触控和系统 Back/Home、测试桥和真实 CI 在后续工程 Design/Tasks 中具体安排，并经原 Review/Apply。这里不提前宣称可用或代签工程审阅。
