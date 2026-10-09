# 制作来源与工具观察

生产模式：AI。Codex 使用已安装 Open Design 0.21.1 的实际 MCP `create_project`、`create_artifact`、`write_file`、`get_project`、`get_artifact`。daemon 的 MCP 协议报告版本为 0.2.0，不将它混作桌面包版本。没有调用 open-design 内部模型代理或付费模型。

使用桌面包内 `daemon-cli.mjs` 的绝对路径和隔离 OD_DATA_DIR，项目 ID 为 `harness-simulator-menu-20261009`。不调用系统 `/usr/bin/od`，未修改全局 MCP 配置。完整安装身份、MCP 结果、迭代、导出与重开证据保存在本包外的固定输入记录，并随设计 Git bundle 留存。

`get_artifact` 的 binary 项 content=null；工具返回 truncated=false 不表示媒体已交付。先核对实际项目、完整文本和文件清单，再取同项目原始 PNG 并核对字节、尺寸及完整文件集合。真实截断响应、缺图副本已被拒绝；纠正后恢复完整候选。停止 daemon 后仍可从留存副本恢复相同字节，重开同项目读回一致。获批后的消费还须沿原合同重核 A→D 和当前权威。

素材为既有权威仓库保存的 `inputs/archives/kenney_ui-pack.zip`，源归档 SHA-256 `a8a14a234911eb648c062622915c93e79e94e97cb7f9f375a70f6617f1174318`。来源为 Kenney UI Pack 2.0，许可 CC0，许可原文随包保存。Yellow/Double 与 Grey/Double 的 button_rectangle_depth_flat.png 按原字节使用；这些输入没有 AST/DAS 身份，不伪造原 owner。新包的使用和布局需新 D/A，旧 iOS 批准不自动延用。

HTML 是可交互参考；本次仅空场景工具链已经验证，Cocos 菜单实现、设备端交互及真实 CI 尚未开始。原型的 DOM 自检不能换算为设备端测试通过。
