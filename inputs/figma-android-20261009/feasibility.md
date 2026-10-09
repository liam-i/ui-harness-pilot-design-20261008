# 原生 Android 候选可行性

已有隔离探针 `/private/tmp/ui-reconciliation-20261009-kd2a3glf/android-preflight` 的 `:app:assembleDebug` 实际退出 0，随后在两台指定模拟器安装及启动成功。探针只显示工具链说明，没有消费 UI，设备 UI 验收用例为 0。

实际探针配置为 Java 17、AGP 8.13.2、Gradle 8.13、compile/target SDK 36、buildTools 35.0.0、minSdk 23。既有 SDK/AVD 保留，后续工程使用新目录，不修改这个探针来伪造前置证据。Cocos 的 AGP 8.10.1 不适用于本记录。

设计可由原生容器、文字、按钮和模态界面表达；确切实现、资源落点及可访问性策略写入后续工程 Design，经原 Review/Apply 后实施。Figma `.fig`、PNG/SVG 参考只证明设计文件；实际 APK 消费、字体/安全区、会话身份、CI 结果仍未验证。

本轮设计不依赖 Unity。没有 Unity 许可只阻止其实际运行验证，不能据此取消该已选义务。
