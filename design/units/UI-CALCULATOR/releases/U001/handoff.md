# 计算器交接

## 画面与状态

主屏为4列5行：cos/sin/tan/×；7/8/9/÷；4/5/6/+；1/2/3/−；清除/0/π/=。初始0.00、输入23.00见references两张原图；其他状态共享同布局，以独立expected的操作与显示值为准。

calc/initial、calc/input、calc/result、calc/clear、calc/long、calc/nonfinite、calc/trig、calc/pi、calc/foreground均保持同一键盘。result包括四则结果，nonfinite包括inf和nan；不新增错误态按钮或提示。清除重置两个暂存字段；等号用完后清空暂存；三角函数为弧度。无loading/disabled/网络错误，因为本轮为同步本地运算。

## 布局与组件

ContentView对应显示区及行列；NumberView、ActionView、FunctionView分别对应数字、运算与函数键。tokens沿用现有语义色与字体、64pt键、20pt角、32pt外边距、20pt行间距和64pt显示下间距。HStack余宽由Spacer分配，不把上游截图的像素转换成固定坐标。

保留系统safe area，不添加状态栏绘制代码。默认浅色/字号。长数字1234567890.00最多3行且值完整可见；小屏不得裁键。系统颜色、字体光栅化、SF Symbols与系统栏随iOS27绘制，可与旧原图差异；不允许改按钮顺序、内容、交互或tokens尺寸。

## 资源与验收

tokens.json是必需运行输入：导入工程bundle并由实际组件读取，固定输入/输出摘要与资源构建证据写入当前Design/Tasks/E。参考PNG及许可仅作设计资料，不进入产品运行包；系统字体与符号不另导出。

逐项完成manifest所指expected在两设备上的布局与交互核对。原模型数学/保存规则保留；异常Double值只要求原表达及清除恢复，不在本轮改成新业务。构建成功、模板、原图均不能替代实际运行与真人结论。
